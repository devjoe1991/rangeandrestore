'use client'

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentRef,
} from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Html, Lightformer, PointerLockControls, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { BOOKING_URLS } from '@/lib/constants'
import {
  DEFAULT_FOV,
  DOOR_OPEN_ANGLE,
  DOOR_OPEN_END,
  DOOR_OPEN_START,
  EYE_HEIGHT,
  INTRO_BEATS,
  INTRO_DURATION,
  MAX_PITCH,
  MIN_PITCH,
  SPAWN,
  SWITCH_POSITION,
  SWITCH_REACH,
  clampFov,
  clampToRoom,
  easeInOut,
} from './roomBounds'
import { HOTSPOTS, NEAR_DISTANCE, type Hotspot } from './hotspots'
import { createMoveInput, type MoveInput } from './moveInput'
import { TouchLayer } from './TouchLayer'
import { FullscreenControls } from './FullscreenControls'
import { useIsTouch } from './useIsTouch'

const MODEL_URL = '/sauna-room/sauna-room.glb'

/** Metres per second. The room is small, so this stays at a gentle indoor pace. */
const WALK_SPEED = 1.45

/** Which light is on. Flicking the switch swaps between them. */
type LightMode = 'room' | 'sauna'

/**
 * gate      – nothing runs until the visitor opts in
 * intro     – the cinematic plays; input is ignored
 * exploring – the visitor has control
 */
type Stage = 'gate' | 'intro' | 'exploring'

type SceneRefs = {
  root: THREE.Group
  door: THREE.Object3D | null
  rocker: THREE.Object3D | null
  heaters: THREE.Mesh[]
  ceilingLight: THREE.Mesh[]
}

function useSceneRefs(): SceneRefs {
  const { scene } = useGLTF(MODEL_URL)

  return useMemo(() => {
    const root = scene.clone(true)
    const heaters: THREE.Mesh[] = []
    const ceilingLight: THREE.Mesh[] = []

    root.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return

      child.castShadow = true
      child.receiveShadow = true

      // Clone materials so toggling emissive on one object never bleeds into another.
      child.material = Array.isArray(child.material)
        ? child.material.map((m) => m.clone())
        : child.material.clone()

      if (child.name.startsWith('Sauna_Heaters')) heaters.push(child)
      if (child.name.startsWith('Ceiling_Light')) ceilingLight.push(child)
    })

    return {
      root,
      door: root.getObjectByName('Sauna_Door') ?? null,
      rocker: root.getObjectByName('Light_Switch_Rocker') ?? null,
      heaters,
      ceilingLight,
    }
  }, [scene])
}

useGLTF.preload(MODEL_URL)

function setEmissive(meshes: THREE.Mesh[], strength: number) {
  for (const mesh of meshes) {
    const material = mesh.material
    if (material instanceof THREE.MeshStandardMaterial) {
      material.emissiveIntensity = strength
      material.needsUpdate = true
    }
  }
}

/** Runs the intro dolly move, then hands control over. */
function IntroCamera({ onFinished }: { onFinished: () => void }) {
  const { camera } = useThree()
  const elapsed = useRef(0)
  const done = useRef(false)
  const target = useRef(new THREE.Vector3())

  useFrame((_, delta) => {
    if (done.current) return
    elapsed.current += delta

    let t = elapsed.current
    let index = 0
    while (index < INTRO_BEATS.length - 1 && t > INTRO_BEATS[index].duration) {
      t -= INTRO_BEATS[index].duration
      index += 1
    }

    const beat = INTRO_BEATS[index]
    const previous = INTRO_BEATS[Math.max(index - 1, 0)]
    const progress = easeInOut(Math.min(t / beat.duration, 1))

    camera.position.lerpVectors(previous.position, beat.position, progress)
    target.current.lerpVectors(previous.lookAt, beat.lookAt, progress)
    camera.lookAt(target.current)

    if (elapsed.current >= INTRO_DURATION) {
      done.current = true
      onFinished()
    }
  })

  return null
}

/** Swings the sauna door open on a timer during the intro, then leaves it open. */
function DoorAnimator({ door, playing }: { door: THREE.Object3D | null; playing: boolean }) {
  const elapsed = useRef(0)

  useEffect(() => {
    if (door && !playing) door.rotation.y = DOOR_OPEN_ANGLE
  }, [door, playing])

  useFrame((_, delta) => {
    if (!door || !playing) return
    elapsed.current += delta
    const span = DOOR_OPEN_END - DOOR_OPEN_START
    door.rotation.y = DOOR_OPEN_ANGLE * easeInOut((elapsed.current - DOOR_OPEN_START) / span)
  })

  return null
}

/**
 * Moves the camera from whatever the active input wrote into `input`.
 * Yaw/pitch deltas are only used on touch; on desktop PointerLockControls owns rotation.
 */
function CameraRig({
  active,
  input,
  applyLook,
  onProximity,
}: {
  active: boolean
  input: MoveInput
  applyLook: boolean
  onProximity: (state: { switchNear: boolean; hotspot: Hotspot | null }) => void
}) {
  const { camera } = useThree()
  const forward = useRef(new THREE.Vector3())
  const right = useRef(new THREE.Vector3())
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'))
  const lastReport = useRef({ switchNear: false, hotspotId: '' })

  useEffect(() => {
    if (active) camera.position.set(SPAWN.x, EYE_HEIGHT, SPAWN.z)
  }, [active, camera])

  useFrame((_, delta) => {
    if (!active) return

    // Ease the field of view toward whatever the wheel or a pinch asked for.
    const perspective = camera as THREE.PerspectiveCamera
    if (Math.abs(perspective.fov - input.fov) > 0.01) {
      perspective.fov += (input.fov - perspective.fov) * Math.min(delta * 12, 1)
      perspective.updateProjectionMatrix()
    }

    if (applyLook && (input.yawDelta !== 0 || input.pitchDelta !== 0)) {
      euler.current.setFromQuaternion(camera.quaternion)
      euler.current.y += input.yawDelta
      euler.current.x = Math.min(Math.max(euler.current.x + input.pitchDelta, MIN_PITCH), MAX_PITCH)
      camera.quaternion.setFromEuler(euler.current)
    }
    input.yawDelta = 0
    input.pitchDelta = 0

    if (input.forward !== 0 || input.strafe !== 0) {
      // Movement stays on the floor plane even while looking up or down.
      camera.getWorldDirection(forward.current)
      forward.current.y = 0
      forward.current.normalize()
      right.current.crossVectors(forward.current, camera.up).normalize()

      const step = new THREE.Vector3()
        .addScaledVector(forward.current, input.forward)
        .addScaledVector(right.current, input.strafe)

      if (step.lengthSq() > 0) {
        step.normalize().multiplyScalar(WALK_SPEED * delta)
        const next = clampToRoom(camera.position.x + step.x, camera.position.z + step.z)
        camera.position.set(next.x, EYE_HEIGHT, next.z)
      }
    }

    // Report what is within reach, but only when it actually changes.
    const switchNear = camera.position.distanceTo(SWITCH_POSITION) < SWITCH_REACH
    let nearest: Hotspot | null = null
    let nearestDistance = NEAR_DISTANCE
    for (const spot of HOTSPOTS) {
      const distance = camera.position.distanceTo(spot.position)
      if (distance < nearestDistance) {
        nearest = spot
        nearestDistance = distance
      }
    }

    const hotspotId = nearest?.id ?? ''
    if (switchNear !== lastReport.current.switchNear || hotspotId !== lastReport.current.hotspotId) {
      lastReport.current = { switchNear, hotspotId }
      onProximity({ switchNear, hotspot: nearest })
    }
  })

  return null
}

/** The room's own lighting, cross-faded between the two switch modes. */
function Lighting({ mode }: { mode: LightMode }) {
  const room = mode === 'room' ? 1 : 0
  const sauna = mode === 'sauna' ? 1 : 0

  return (
    <>
      <ambientLight intensity={0.08 + 0.28 * room} />

      {/* Daylight through the window beside the alcove. */}
      <directionalLight
        position={[3.0, 2.3, -2.6]}
        intensity={0.1 + 1.5 * room}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0005}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />

      {/* The ceiling fitting in the main room. */}
      <pointLight
        position={[1.2, 2.3, -1.3]}
        intensity={16 * room}
        distance={7}
        decay={2}
        color="#fff2e0"
        castShadow={mode === 'room'}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      />

      {/* The heaters, deep inside the cabin. */}
      <pointLight
        position={[3.65, 1.15, -1.3]}
        intensity={18 * sauna}
        distance={4.5}
        decay={2}
        color="#ff3d0a"
      />
      {/* The glow spilling out through the open door. */}
      <pointLight
        position={[2.75, 1.0, -1.3]}
        intensity={7 * sauna}
        distance={3.4}
        decay={2}
        color="#ff7a3d"
      />

      {/*
        A small local environment for reflections and soft fill. Built from
        Lightformers rather than an HDRI file so nothing is fetched at runtime.
      */}
      <Environment resolution={128} frames={1}>
        <Lightformer
          intensity={0.6 + 2.2 * room}
          form="rect"
          position={[3.2, 1.6, -2.8]}
          scale={[2, 2, 1]}
          color="#eaf4ff"
        />
        <Lightformer
          intensity={0.4 + 0.8 * room}
          form="rect"
          position={[1.0, 2.4, -1.3]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[3, 2, 1]}
          color="#fff3e4"
        />
        <Lightformer
          intensity={2.4 * sauna}
          form="rect"
          position={[3.6, 1.1, -1.3]}
          scale={[1, 1.4, 1]}
          color="#ff4a12"
        />
      </Environment>
    </>
  )
}

/** Floating label pinned by the switch, telling you what it does. */
function SwitchLabel({ mode, highlighted }: { mode: LightMode; highlighted: boolean }) {
  return (
    <Html
      position={[SWITCH_POSITION.x, SWITCH_POSITION.y + 0.2, SWITCH_POSITION.z + 0.06]}
      center
      zIndexRange={[10, 0]}
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      <div
        className={`whitespace-nowrap rounded-md px-2 py-0.5 text-center text-[11px] font-medium transition ${
          highlighted ? 'bg-white text-neutral-900' : 'bg-black/55 text-white/80'
        }`}
      >
        Lights {mode === 'room' ? 'on' : 'off'}
      </div>
    </Html>
  )
}

/**
 * A point of interest, drawn as a dot that sits in the world.
 * The dot is deliberately NOT scaled by distance — `Html` with a distanceFactor
 * balloons to fill the screen once you stand next to it. The tip itself is
 * rendered in screen space by HotspotPanel instead, so it stays readable.
 */
function HotspotDot({
  spot,
  isNear,
  isOpen,
  onToggle,
}: {
  spot: Hotspot
  isNear: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Html
      position={[spot.position.x, spot.position.y, spot.position.z]}
      center
      zIndexRange={[20, 10]}
      style={{ userSelect: 'none' }}
    >
      <button
        type="button"
        onClick={onToggle}
        disabled={!isNear}
        aria-label={spot.title}
        className={`flex items-center justify-center rounded-full border-2 transition-all ${
          isOpen
            ? 'h-7 w-7 border-white bg-white shadow-lg'
            : isNear
              ? 'h-6 w-6 cursor-pointer border-white bg-white/25 shadow-lg'
              : 'h-3.5 w-3.5 border-white/45 bg-white/10'
        }`}
      >
        <span
          className={`rounded-full transition-all ${
            isOpen
              ? 'h-2.5 w-2.5 bg-neutral-900'
              : isNear
                ? 'h-2.5 w-2.5 animate-pulse bg-white'
                : 'h-1.5 w-1.5 bg-white/60'
          }`}
        />
      </button>
    </Html>
  )
}

/**
 * The tip content, pinned in screen space at a fixed, readable size — never
 * scaled by distance, which would balloon it as you walk up to a dot.
 *
 * There is no close button: the same control that opened the tip closes it, and
 * walking away closes it too, so the dot behaves as a toggle rather than a thing
 * you have to dismiss.
 *
 * On touch it takes the shape of an iOS notification banner: a compact, heavily
 * blurred rounded rectangle sitting above the walk controls.
 */
function HotspotPanel({ spot, isTouch }: { spot: Hotspot; isTouch: boolean }) {
  if (isTouch) {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-3 pb-16">
        <div className="fade-up w-full max-w-sm rounded-card bg-white/75 px-3.5 py-3 shadow-[0_10px_34px_rgba(0,0,0,0.32)] ring-1 ring-black/5 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-brand-green text-[10px] font-bold tracking-tight text-white">
              R&amp;R
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate text-[13px] font-semibold text-neutral-900">
                  {spot.title}
                </span>
                <span className="shrink-0 text-[10px] text-neutral-400">tap to close</span>
              </div>
              <p className="mt-0.5 line-clamp-4 text-[12px] leading-snug text-neutral-700">
                {spot.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-14">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-sm sm:p-5">
        <div className="mb-1.5 text-base font-semibold text-neutral-900">{spot.title}</div>
        <p className="text-sm leading-relaxed text-neutral-600">{spot.body}</p>
        <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-neutral-400">
          Press E to close
        </p>
      </div>
    </div>
  )
}

function Scene({
  stage,
  mode,
  input,
  applyLook,
  nearHotspotId,
  openHotspotId,
  onIntroFinished,
  onProximity,
  onToggleHotspot,
  registerRocker,
  switchNear,
}: {
  stage: Stage
  mode: LightMode
  input: MoveInput
  applyLook: boolean
  nearHotspotId: string
  openHotspotId: string
  onIntroFinished: () => void
  onProximity: (state: { switchNear: boolean; hotspot: Hotspot | null }) => void
  onToggleHotspot: (id: string) => void
  registerRocker: (rocker: THREE.Object3D | null) => void
  switchNear: boolean
}) {
  const { root, door, rocker, heaters, ceilingLight } = useSceneRefs()

  useEffect(() => registerRocker(rocker), [rocker, registerRocker])

  useEffect(() => {
    setEmissive(heaters, mode === 'sauna' ? 6 : 0.05)
    setEmissive(ceilingLight, mode === 'room' ? 4 : 0.02)
  }, [mode, heaters, ceilingLight])

  return (
    <>
      <Lighting mode={mode} />
      <primitive object={root} />
      <DoorAnimator door={door} playing={stage === 'intro'} />
      {stage === 'intro' && <IntroCamera onFinished={onIntroFinished} />}
      <CameraRig
        active={stage === 'exploring'}
        input={input}
        applyLook={applyLook}
        onProximity={onProximity}
      />

      {stage === 'exploring' && (
        <>
          <SwitchLabel mode={mode} highlighted={switchNear} />
          {HOTSPOTS.map((spot) => (
            <HotspotDot
              key={spot.id}
              spot={spot}
              isNear={nearHotspotId === spot.id}
              isOpen={openHotspotId === spot.id}
              onToggle={() => onToggleHotspot(spot.id)}
            />
          ))}
        </>
      )}

      <EffectComposer enableNormalPass={false}>
        <Bloom intensity={mode === 'sauna' ? 0.9 : 0.25} luminanceThreshold={0.85} mipmapBlur />
        <Vignette eskil={false} offset={0.25} darkness={0.55} />
      </EffectComposer>
    </>
  )
}

export default function SaunaRoomScene() {
  const shellRef = useRef<HTMLDivElement | null>(null)
  const controlsRef = useRef<ComponentRef<typeof PointerLockControls> | null>(null)
  const rockerRef = useRef<THREE.Object3D | null>(null)
  const keys = useRef<Record<string, boolean>>({})
  const input = useMemo(createMoveInput, [])

  const isTouch = useIsTouch()
  const [stage, setStage] = useState<Stage>('gate')
  const [mode, setMode] = useState<LightMode>('room')
  const [locked, setLocked] = useState(false)
  const [switchNear, setSwitchNear] = useState(false)
  const [nearHotspotId, setNearHotspotId] = useState('')
  const [openHotspotId, setOpenHotspotId] = useState('')

  const registerRocker = useCallback((rocker: THREE.Object3D | null) => {
    rockerRef.current = rocker
  }, [])

  const onProximity = useCallback(({ switchNear: near, hotspot }: { switchNear: boolean; hotspot: Hotspot | null }) => {
    setSwitchNear(near)
    setNearHotspotId(hotspot?.id ?? '')
  }, [])

  const flick = useCallback(() => {
    setMode((current) => {
      const next = current === 'room' ? 'sauna' : 'room'
      if (rockerRef.current) rockerRef.current.rotation.x = next === 'sauna' ? 0.3 : -0.3
      return next
    })
  }, [])

  const toggleHotspot = useCallback((id: string) => {
    setOpenHotspotId((current) => (current === id ? '' : id))
  }, [])

  /**
   * One interact action shared by the E key and a touch tap.
   * Closing an open tip comes first, so the same press always undoes the last
   * one — otherwise stepping toward the switch would leave a tip stuck open.
   */
  const interact = useCallback(() => {
    if (openHotspotId) setOpenHotspotId('')
    else if (switchNear) flick()
    else if (nearHotspotId) toggleHotspot(nearHotspotId)
  }, [openHotspotId, switchNear, nearHotspotId, flick, toggleHotspot])

  // Walking away from a dot closes its tip, so it never trails you round the room.
  useEffect(() => {
    if (openHotspotId && nearHotspotId !== openHotspotId) setOpenHotspotId('')
  }, [openHotspotId, nearHotspotId])

  // Keyboard: held keys drive the shared input each frame.
  useEffect(() => {
    if (stage !== 'exploring' || isTouch) return

    const sync = () => {
      const k = keys.current
      input.forward = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0)
      input.strafe = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0)
    }
    const down = (e: KeyboardEvent) => {
      keys.current[e.code] = true
      if (e.code === 'KeyE') interact()
      sync()
    }
    const up = (e: KeyboardEvent) => {
      keys.current[e.code] = false
      sync()
    }
    const clear = () => {
      keys.current = {}
      input.forward = 0
      input.strafe = 0
    }

    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    window.addEventListener('blur', clear)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
      window.removeEventListener('blur', clear)
      clear()
    }
  }, [stage, isTouch, interact, input])

  // Mouse wheel zooms. This works while the pointer is locked, and is registered
  // non-passively so the page itself never scrolls out from under the tour.
  useEffect(() => {
    if (stage !== 'exploring' || isTouch) return
    const shell = shellRef.current
    if (!shell) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      input.fov = clampFov(input.fov + e.deltaY * 0.05)
    }

    shell.addEventListener('wheel', onWheel, { passive: false })
    return () => shell.removeEventListener('wheel', onWheel)
  }, [stage, isTouch, input])

  // Stable callbacks: an inline arrow here makes drei re-subscribe every render,
  // which fires a spurious unlock and silently drops you out of the experience.
  const handleLock = useCallback(() => setLocked(true), [])
  const handleUnlock = useCallback(() => setLocked(false), [])

  const enter = useCallback(() => {
    setStage('intro')
    if (!isTouch) controlsRef.current?.lock()
  }, [isTouch])

  const resume = useCallback(() => {
    controlsRef.current?.lock()
  }, [])

  const leaveForBooking = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    if (document.pointerLockElement) document.exitPointerLock()
  }, [])

  const showGate = stage === 'gate'
  // On desktop the pointer must be locked to play; losing it pauses rather than exits.
  const showResume = stage === 'exploring' && !isTouch && !locked
  const openSpot = HOTSPOTS.find((spot) => spot.id === openHotspotId) ?? null

  return (
    <div ref={shellRef} className="relative h-full w-full overflow-hidden bg-neutral-950">
      <Canvas
        shadows
        camera={{ fov: DEFAULT_FOV, near: 0.05, far: 40, position: [0.55, 1.62, -1.5] }}
        dpr={[1, isTouch ? 1.5 : 1.75]}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.0
        }}
      >
        <color attach="background" args={['#0b0d0c']} />
        <Suspense fallback={null}>
          <Scene
            stage={stage}
            mode={mode}
            input={input}
            applyLook={isTouch}
            nearHotspotId={nearHotspotId}
            openHotspotId={openHotspotId}
            onIntroFinished={() => setStage('exploring')}
            onProximity={onProximity}
            onToggleHotspot={toggleHotspot}
            registerRocker={registerRocker}
            switchNear={switchNear}
          />
        </Suspense>
        {!isTouch && (
          <PointerLockControls
            ref={controlsRef}
            enabled={stage === 'exploring'}
            onLock={handleLock}
            onUnlock={handleUnlock}
          />
        )}
      </Canvas>

      {/*
        Touch input sits above the canvas, so it would otherwise swallow taps meant
        for the hotspot dots. It therefore forwards a plain tap to whatever is in
        reach, rather than letting the dots handle their own touch events.
      */}
      {stage === 'exploring' && isTouch && (
        <TouchLayer
          input={input}
          canInteract={switchNear || Boolean(nearHotspotId) || Boolean(openHotspotId)}
          onTapInteract={interact}
        />
      )}

      {/* Always-on chrome: membership, full screen, and the maker credit. */}
      <div className="pointer-events-none absolute right-3 top-3 z-20 flex items-center gap-2">
        <FullscreenControls targetRef={shellRef} isTouch={isTouch} />
        <a
          href={BOOKING_URLS.infraredHybridSauna}
          target="_blank"
          rel="noopener noreferrer"
          onClick={leaveForBooking}
          className="pointer-events-auto rounded-full bg-brand-teal px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-brand-teal-dark"
        >
          Become a member
        </a>
      </div>

      <a
        href="https://j0e.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2.5 right-3 z-20 text-[11px] text-white/45 transition hover:text-white/80"
      >
        made by j0e.dev
      </a>

      {showGate && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/65 px-6 text-center backdrop-blur-[2px]">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            The Virtual Range and Restore
          </h2>
          <p className="max-w-md text-sm text-white/75">
            Step inside our private infrared sauna room in Archway — walk around it, flick the
            lights, and see the space before you ever book.
          </p>
          <button
            type="button"
            onClick={enter}
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-neutral-900 shadow-xl transition hover:bg-white/90"
          >
            Enter the virtual experience
          </button>
          {/*
            Driven by CSS rather than the isTouch hook: the hook starts false and
            only corrects after hydration, so the server-rendered gate would ship
            "W A S D" to phones and visibly swap it a moment later.
          */}
          <p className="text-xs text-white/55">
            <span className="hint-pointer">W A S D to move · mouse to look · scroll to zoom</span>
            <span className="hint-touch">
              Hold the left side to walk · drag to look · pinch to zoom
            </span>
          </p>
        </div>
      )}

      {showResume && (
        <button
          type="button"
          onClick={resume}
          className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-2 bg-black/55 text-white backdrop-blur-[2px]"
        >
          <span className="text-lg font-semibold">Paused</span>
          <span className="text-sm text-white/75">Click to carry on looking around</span>
        </button>
      )}

      {stage === 'exploring' && !showResume && (
        <>
          {!isTouch && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
          )}
          {(switchNear || nearHotspotId) && !openHotspotId && (
            <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-4 py-1.5 text-xs text-white/90">
              {isTouch ? 'Tap the dot' : 'Press E'}
              {switchNear ? ' to flick the lights' : ' to read more'}
            </div>
          )}
          {openSpot && <HotspotPanel spot={openSpot} isTouch={isTouch} />}
        </>
      )}
    </div>
  )
}
