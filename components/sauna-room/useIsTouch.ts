'use client'

import { useEffect, useState } from 'react'

/**
 * True on devices driven by touch rather than a mouse.
 * Pointer lock does not exist on touch, so the scene swaps to drag-to-look
 * and an on-screen stick instead.
 */
export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)')
    const sync = () => setIsTouch(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return isTouch
}
