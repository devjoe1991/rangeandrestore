'use client'

import { useCallback, useRef, type ReactNode } from 'react'

/**
 * Icons are inline SVG rather than an icon package — a handful of simple glyphs
 * is not worth another dependency, and these inherit currentColor for free.
 */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const IconMood = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <circle cx="12" cy="12" r="4" {...stroke} />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" {...stroke} />
  </svg>
)

const IconPrivacy = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <rect x="4" y="10" width="16" height="10" rx="2" {...stroke} />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" {...stroke} />
  </svg>
)

const IconMusic = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <path d="M9 18V6l10-2v12" {...stroke} />
    <circle cx="6.5" cy="18" r="2.5" {...stroke} />
    <circle cx="16.5" cy="16" r="2.5" {...stroke} />
  </svg>
)

const IconHeat = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <path d="M12 3s4 4.2 4 8a4 4 0 0 1-8 0c0-3.8 4-8 4-8Z" {...stroke} />
    <path d="M12 21c3.3 0 6-2.2 6-5" {...stroke} />
  </svg>
)

const IconRecovery = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <path d="M3 12h4l2-5 3 10 2.5-6 1.5 3h5" {...stroke} />
  </svg>
)

const IconCouple = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <circle cx="8.5" cy="8" r="3" {...stroke} />
    <circle cx="16" cy="9" r="2.5" {...stroke} />
    <path d="M3 19a5.5 5.5 0 0 1 11 0M14.5 19a4.5 4.5 0 0 1 6.5-4" {...stroke} />
  </svg>
)

const IconCalm = (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
    <path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" {...stroke} />
    <path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" {...stroke} />
  </svg>
)

const BENEFITS: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: IconMood,
    title: 'Set the tone',
    body: 'Lights on or lights off, and colour to match the mood you are in.',
  },
  {
    icon: IconPrivacy,
    title: 'Complete privacy',
    body: 'Enclosed, tucked away, and yours alone. No sharing, no audience.',
  },
  {
    icon: IconMusic,
    title: 'Bluetooth music',
    body: 'Bring your own soundtrack and settle into the full experience.',
  },
  {
    icon: IconHeat,
    title: 'Full spectrum infrared',
    body: 'Deep, comfortable warmth — or switch to traditional heat.',
  },
  {
    icon: IconRecovery,
    title: 'Ease and recover',
    body: 'Helps soothe muscle soreness, stiffness and tight joints.',
  },
  {
    icon: IconCalm,
    title: 'Wind down',
    body: 'Quiet, warm and low lit. A nervous system reset for an hour.',
  },
  {
    icon: IconCouple,
    title: 'Made for two',
    body: 'Come alone, or share the hour. An easy break away together.',
  },
]

export function SaunaBenefits() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const nudge = useCallback((direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * (track.clientWidth * 0.7), behavior: 'smooth' })
  }, [])

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="flex aspect-square w-40 shrink-0 snap-start flex-col rounded-2xl border border-[#1a3d3a]/12 bg-white p-4 shadow-sm sm:w-48"
          >
            <span className="text-[#0f767a]">{benefit.icon}</span>
            <h3 className="mt-3 text-sm font-semibold text-neutral-900">{benefit.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{benefit.body}</p>
          </div>
        ))}
      </div>

      {/* Arrows are a convenience on desktop; the strip is swipeable regardless. */}
      <div className="mt-1 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Scroll benefits left"
          className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-100"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Scroll benefits right"
          className="grid h-8 w-8 place-items-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-100"
        >
          →
        </button>
      </div>
    </div>
  )
}
