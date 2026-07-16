/**
 * Shared constants for the virtual sauna room.
 *
 * The room is modelled in Blender (Z-up) at sauna-room/sauna-room.blend and exported
 * to glTF with Y-up. That conversion maps Blender (x, y, z) -> three (x, z, -y), so:
 *
 *   - the room's LENGTH runs along +x, with the sauna cabin at the high-x end
 *   - the room's WIDTH runs along -z (the shelf and switch wall is at z = 0)
 *   - height is +y, as usual
 *
 * Every value below is already in three.js world space, in metres. If you move
 * anything in the .blend, re-derive these with that mapping — otherwise the
 * collision box silently drifts away from the geometry you can see.
 */

import * as THREE from 'three'

/** Eye height for a standing visitor. */
export const EYE_HEIGHT = 1.6

/** How far the camera must stay from any wall, so you never clip through one. */
const WALL_PADDING = 0.4

/** How far the camera must stay from the sauna cabin's footprint. */
const CABIN_PADDING = 0.3

/** Room shell: x is the 4.0m length, z is the 2.6m width. */
export const ROOM = {
  minX: 0,
  maxX: 4.0,
  minZ: -2.6,
  maxZ: 0,
} as const

/** The sauna cabin's footprint, treated as solid. */
export const CABIN = {
  minX: 2.925,
  maxX: 3.975,
  minZ: -1.925,
  maxZ: -0.675,
} as const

/** The wall light switch, for both the reach check and the floating label. */
export const SWITCH_POSITION = new THREE.Vector3(1.95, 1.3, 0)

/** How close you must stand before the switch can be flicked. */
export const SWITCH_REACH = 1.7

/** Pitch limits, so you can look up at the ceiling but never roll over backwards. */
export const MIN_PITCH = -Math.PI / 2 + 0.12
export const MAX_PITCH = Math.PI / 2 - 0.12

/**
 * Clamps a proposed position to the walkable floor.
 * Walls are a simple box clamp. The cabin pushes the visitor out along whichever
 * axis they were least far into it, so brushing its side slides rather than sticks.
 */
export function clampToRoom(x: number, z: number): { x: number; z: number } {
  let nx = Math.min(Math.max(x, ROOM.minX + WALL_PADDING), ROOM.maxX - WALL_PADDING)
  let nz = Math.min(Math.max(z, ROOM.minZ + WALL_PADDING), ROOM.maxZ - WALL_PADDING)

  const insideX = nx > CABIN.minX - CABIN_PADDING && nx < CABIN.maxX + CABIN_PADDING
  const insideZ = nz > CABIN.minZ - CABIN_PADDING && nz < CABIN.maxZ + CABIN_PADDING

  if (insideX && insideZ) {
    // The cabin sits against the far wall, so the only ways out are back toward -x
    // or sideways past its edges.
    const pushOut = nx - (CABIN.minX - CABIN_PADDING)
    const pushLeft = nz - (CABIN.minZ - CABIN_PADDING)
    const pushRight = CABIN.maxZ + CABIN_PADDING - nz
    const smallest = Math.min(pushOut, pushLeft, pushRight)

    if (smallest === pushOut) nx = CABIN.minX - CABIN_PADDING
    else if (smallest === pushLeft) nz = CABIN.minZ - CABIN_PADDING
    else nz = CABIN.maxZ + CABIN_PADDING
  }

  return { x: nx, z: nz }
}

/** The point the intro settles on: the middle of the sauna's open doorway. */
const SAUNA_DOOR_FOCUS = new THREE.Vector3(2.925, 1.05, -1.31)

/**
 * The intro camera move: a slow push into the room that ends framing the sauna door.
 * Each leg is eased so it reads as a camera on a dolly rather than a linear slide.
 * The last beat's position doubles as the spawn point — control is handed over
 * exactly where the camera stops, so there is no jarring jump.
 */
export type CameraBeat = {
  position: THREE.Vector3
  lookAt: THREE.Vector3
  duration: number
}

export const INTRO_BEATS: CameraBeat[] = [
  // Just inside the door at the back of the room, taking the space in.
  {
    position: new THREE.Vector3(0.55, 1.62, -1.5),
    lookAt: new THREE.Vector3(3.2, 1.35, -1.28),
    duration: 3.0,
  },
  // Drifting in, glancing across the shelf on the teal wall.
  {
    position: new THREE.Vector3(1.35, 1.6, -1.6),
    lookAt: new THREE.Vector3(2.3, 1.2, -0.5),
    duration: 2.6,
  },
  // Settling in front of the cabin, eyes on the door as it swings open.
  {
    position: new THREE.Vector3(2.05, 1.6, -1.42),
    lookAt: SAUNA_DOOR_FOCUS,
    duration: 3.0,
  },
]

/** Where the visitor takes control: exactly where the intro camera came to rest. */
export const SPAWN = INTRO_BEATS[INTRO_BEATS.length - 1].position

/** Total run time of the intro camera move. */
export const INTRO_DURATION = INTRO_BEATS.reduce((total, beat) => total + beat.duration, 0)

/** When the door starts and finishes swinging open, in seconds from the intro's start. */
export const DOOR_OPEN_START = 5.2
export const DOOR_OPEN_END = 8.2

/** How far the sauna door swings, in radians. */
export const DOOR_OPEN_ANGLE = -Math.PI * 0.58

/** Smoothstep-style ease, so beats start and stop gently. */
export function easeInOut(t: number): number {
  const c = Math.min(Math.max(t, 0), 1)
  return c * c * (3 - 2 * c)
}
