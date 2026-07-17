/**
 * One shared movement/look intent, written by whichever input is active
 * (keyboard + pointer lock on desktop, stick + drag on touch) and read by the
 * camera rig each frame. Keeping it in a plain mutable object rather than React
 * state avoids a re-render per frame.
 */
import { DEFAULT_FOV } from './roomBounds'

export type MoveInput = {
  /** -1 (back) .. 1 (forward) */
  forward: number
  /** -1 (left) .. 1 (right) */
  strafe: number
  /** Yaw/pitch deltas in radians, consumed and zeroed every frame. */
  yawDelta: number
  pitchDelta: number
  /**
   * Target field of view in degrees. Zoom is expressed as a target rather than a
   * per-frame delta so the camera can ease toward it, which keeps both the wheel
   * and a pinch feeling smooth instead of steppy.
   */
  fov: number
}

export function createMoveInput(): MoveInput {
  return { forward: 0, strafe: 0, yawDelta: 0, pitchDelta: 0, fov: DEFAULT_FOV }
}

export function resetMoveInput(input: MoveInput) {
  input.forward = 0
  input.strafe = 0
  input.yawDelta = 0
  input.pitchDelta = 0
  input.fov = DEFAULT_FOV
}
