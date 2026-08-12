'use client'

import { useCallback, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'
import { trackConversion } from '@/lib/gtag'

/**
 * Floating WhatsApp CTA, mounted once in the root layout so it appears on every
 * page. Opens a click-to-chat thread with the clinic number and a pre-filled
 * booking message the client finishes off.
 *
 * Tapping spins the glyph and fires a short haptic tick. The Vibration API is
 * Android-only in practice — iOS Safari has never shipped it — so the buzz is a
 * progressive enhancement and the spin carries the feedback everywhere else.
 *
 * Sits at z-40, deliberately below the z-50 cookie banner: consent is a legal
 * gate and must not be obscured on a first visit.
 */
export function WhatsAppButton() {
  const [spinning, setSpinning] = useState(false)

  // pointerdown rather than click, so the tick lands as the finger goes down
  // rather than after the navigation has already been queued.
  const handlePress = useCallback(() => {
    navigator.vibrate?.(12)
    setSpinning(true)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onPointerDown={handlePress}
      onClick={() => trackConversion('contact')}
      aria-label="Book on WhatsApp — message Range and Restore"
      title="Book on WhatsApp"
      className="wa-fab"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <span
        className={`wa-glyph${spinning ? ' wa-glyph-spin' : ''}`}
        onAnimationEnd={() => setSpinning(false)}
      >
        {/* Official WhatsApp glyph */}
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.045 9.377L1.05 31.29l6.117-1.955A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.31 22.593c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.203-4.703-1.949-7.733-6.728-7.969-7.038-.226-.31-1.901-2.53-1.901-4.828 0-2.297 1.166-3.417 1.636-3.897.386-.394.102-.613.727-.613.202 0 .384.01.547.018.47.02.706.048 1.016.79.386.93 1.326 3.228 1.438 3.463.114.236.228.555.068.865-.15.32-.282.462-.518.734-.236.272-.46.48-.696.772-.216.252-.46.522-.188.99.272.46 1.21 1.99 2.59 3.221 1.78 1.586 3.223 2.092 3.743 2.308.386.16.847.122 1.129-.178.358-.386.8-1.026 1.25-1.656.32-.452.724-.508 1.148-.348.432.15 2.72 1.282 3.19 1.516.47.236.78.35.894.546.112.198.112 1.128-.274 2.218Z" />
        </svg>
      </span>
    </a>
  )
}
