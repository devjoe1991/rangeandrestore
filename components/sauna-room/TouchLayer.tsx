'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { MoveInput } from './moveInput'
import { clampFov } from './roomBounds'

/** Radius of the on-screen stick, in CSS pixels. */
const STICK_RADIUS = 56

/** Radians of camera rotation per pixel dragged. */
const LOOK_SENSITIVITY = 0.0055

/** A touch that travels less than this many pixels counts as a tap, not a drag. */
const TAP_SLOP = 8

type Props = {
  input: MoveInput
  /** Called when the visitor taps while something is in reach. */
  onTapInteract: () => void
  canInteract: boolean
}

/**
 * Touch input for the room:
 *   - the left side is a thumb stick for walking
 *   - one finger elsewhere looks around; a tap that barely moves means "use"
 *   - two fingers elsewhere pinch to zoom
 *
 * This layer sits over the canvas and therefore owns every touch, which is why
 * taps are forwarded up rather than left to the hotspot dots themselves.
 */
export function TouchLayer({ input, onTapInteract, canInteract }: Props) {
  const [stick, setStick] = useState<{ baseX: number; baseY: number; dx: number; dy: number } | null>(
    null,
  )
  const stickTouchId = useRef<number | null>(null)

  /** Touches not driving the stick, in the order they landed. */
  const gestureTouches = useRef<Map<number, { x: number; y: number }>>(new Map())
  const lookMoved = useRef(0)
  const pinch = useRef<{ startDistance: number; startFov: number } | null>(null)

  const clearStick = useCallback(() => {
    stickTouchId.current = null
    setStick(null)
    input.forward = 0
    input.strafe = 0
  }, [input])

  const gestureDistance = () => {
    const points = Array.from(gestureTouches.current.values())
    if (points.length < 2) return 0
    return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y)
  }

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    for (const touch of Array.from(e.changedTouches)) {
      const isLeftHalf = touch.clientX < window.innerWidth * 0.45

      if (isLeftHalf && stickTouchId.current === null) {
        stickTouchId.current = touch.identifier
        setStick({ baseX: touch.clientX, baseY: touch.clientY, dx: 0, dy: 0 })
        continue
      }

      gestureTouches.current.set(touch.identifier, { x: touch.clientX, y: touch.clientY })
      if (gestureTouches.current.size === 1) lookMoved.current = 0
    }

    // A second finger starts a pinch and suspends looking.
    if (gestureTouches.current.size === 2 && !pinch.current) {
      pinch.current = { startDistance: gestureDistance(), startFov: input.fov }
    }
  }, [input])

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === stickTouchId.current) {
          setStick((current) => {
            if (!current) return current
            let dx = touch.clientX - current.baseX
            let dy = touch.clientY - current.baseY
            const length = Math.hypot(dx, dy)
            if (length > STICK_RADIUS) {
              dx = (dx / length) * STICK_RADIUS
              dy = (dy / length) * STICK_RADIUS
            }
            input.strafe = dx / STICK_RADIUS
            input.forward = -dy / STICK_RADIUS
            return { ...current, dx, dy }
          })
          continue
        }

        const previous = gestureTouches.current.get(touch.identifier)
        if (!previous) continue
        gestureTouches.current.set(touch.identifier, { x: touch.clientX, y: touch.clientY })

        // One finger looks around. While pinching, both fingers only zoom.
        if (gestureTouches.current.size === 1 && !pinch.current) {
          const dx = touch.clientX - previous.x
          const dy = touch.clientY - previous.y
          lookMoved.current += Math.abs(dx) + Math.abs(dy)
          input.yawDelta -= dx * LOOK_SENSITIVITY
          input.pitchDelta -= dy * LOOK_SENSITIVITY
        }
      }

      if (pinch.current && gestureTouches.current.size === 2) {
        const distance = gestureDistance()
        if (distance > 0 && pinch.current.startDistance > 0) {
          // Fingers apart -> zoom in -> narrower field of view.
          const scale = distance / pinch.current.startDistance
          input.fov = clampFov(pinch.current.startFov / scale)
        }
      }
    },
    [input],
  )

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === stickTouchId.current) {
          clearStick()
          continue
        }

        const wasGesture = gestureTouches.current.delete(touch.identifier)
        // Only a lone, barely-moved finger counts as a tap — never the end of a pinch.
        if (wasGesture && !pinch.current && gestureTouches.current.size === 0) {
          if (lookMoved.current < TAP_SLOP && canInteract) onTapInteract()
        }
      }

      if (gestureTouches.current.size < 2) pinch.current = null
    },
    [clearStick, canInteract, onTapInteract],
  )

  useEffect(() => clearStick, [clearStick])

  return (
    <div
      className="absolute inset-0 touch-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      {stick && (
        <div
          className="pointer-events-none absolute rounded-full border-2 border-white/40 bg-white/10"
          style={{
            left: stick.baseX - STICK_RADIUS,
            top: stick.baseY - STICK_RADIUS,
            width: STICK_RADIUS * 2,
            height: STICK_RADIUS * 2,
          }}
        >
          <div
            className="absolute rounded-full bg-white/70"
            style={{
              left: STICK_RADIUS + stick.dx - 22,
              top: STICK_RADIUS + stick.dy - 22,
              width: 44,
              height: 44,
            }}
          />
        </div>
      )}

      {!stick && (
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/45 px-4 py-1.5 text-xs text-white/85">
          Hold left to walk · drag to look · pinch to zoom
        </div>
      )}
    </div>
  )
}
