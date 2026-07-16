'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { MoveInput } from './moveInput'

/** Radius of the on-screen stick, in CSS pixels. */
const STICK_RADIUS = 56

/** Radians of camera rotation per pixel dragged. */
const LOOK_SENSITIVITY = 0.0055

type Props = {
  input: MoveInput
  /** Called when the visitor taps while the switch prompt is showing. */
  onTapInteract: () => void
  canInteract: boolean
}

/**
 * Touch input for the room: a thumb stick on the left half for walking, and
 * drag-anywhere-else to look. A tap that never really moves counts as "use".
 */
export function TouchLayer({ input, onTapInteract, canInteract }: Props) {
  const [stick, setStick] = useState<{ baseX: number; baseY: number; dx: number; dy: number } | null>(
    null,
  )
  const stickTouchId = useRef<number | null>(null)
  const lookTouchId = useRef<number | null>(null)
  const lookLast = useRef({ x: 0, y: 0 })
  const lookMoved = useRef(0)

  const clearStick = useCallback(() => {
    stickTouchId.current = null
    setStick(null)
    input.forward = 0
    input.strafe = 0
  }, [input])

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      for (const touch of Array.from(e.changedTouches)) {
        const isLeftHalf = touch.clientX < window.innerWidth * 0.45

        if (isLeftHalf && stickTouchId.current === null) {
          stickTouchId.current = touch.identifier
          setStick({ baseX: touch.clientX, baseY: touch.clientY, dx: 0, dy: 0 })
        } else if (lookTouchId.current === null) {
          lookTouchId.current = touch.identifier
          lookLast.current = { x: touch.clientX, y: touch.clientY }
          lookMoved.current = 0
        }
      }
    },
    [],
  )

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
        } else if (touch.identifier === lookTouchId.current) {
          const dx = touch.clientX - lookLast.current.x
          const dy = touch.clientY - lookLast.current.y
          lookLast.current = { x: touch.clientX, y: touch.clientY }
          lookMoved.current += Math.abs(dx) + Math.abs(dy)
          input.yawDelta -= dx * LOOK_SENSITIVITY
          input.pitchDelta -= dy * LOOK_SENSITIVITY
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
        } else if (touch.identifier === lookTouchId.current) {
          // A touch that barely travelled reads as a tap, not a look.
          if (lookMoved.current < 8 && canInteract) onTapInteract()
          lookTouchId.current = null
        }
      }
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
          Hold left side to walk · drag to look
        </div>
      )}
    </div>
  )
}
