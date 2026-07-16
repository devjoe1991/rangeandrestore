'use client'

import { useCallback, useEffect, useState, type RefObject } from 'react'

type ScreenOrientationWithLock = ScreenOrientation & {
  lock?: (orientation: 'landscape' | 'portrait') => Promise<void>
}

/**
 * Enter/exit fullscreen for the tour. On phones this also asks for landscape,
 * which most browsers only honour while fullscreen — and some (iOS Safari)
 * not at all, so the request is best-effort and never blocks.
 */
export function FullscreenControls({
  targetRef,
  isTouch,
}: {
  targetRef: RefObject<HTMLElement | null>
  isTouch: boolean
}) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    setSupported(typeof document !== 'undefined' && document.fullscreenEnabled)
    const sync = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', sync)
    return () => document.removeEventListener('fullscreenchange', sync)
  }, [])

  const enter = useCallback(async () => {
    const el = targetRef.current
    if (!el) return
    try {
      await el.requestFullscreen()
      if (isTouch) {
        const orientation = window.screen.orientation as ScreenOrientationWithLock | undefined
        // Not supported on iOS Safari; a rejection here is expected, not a failure.
        await orientation?.lock?.('landscape').catch(() => {})
      }
    } catch {
      // Fullscreen can be refused (e.g. no user gesture). Leave the page as-is.
    }
  }, [targetRef, isTouch])

  const exit = useCallback(async () => {
    try {
      window.screen.orientation?.unlock?.()
    } catch {
      // Unlocking is optional; ignore if the browser will not allow it.
    }
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
  }, [])

  if (!supported) return null

  return (
    <button
      type="button"
      onClick={isFullscreen ? exit : enter}
      className="pointer-events-auto rounded-full bg-black/55 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:bg-black/75"
    >
      {isFullscreen ? 'Exit full screen' : 'Full screen'}
    </button>
  )
}
