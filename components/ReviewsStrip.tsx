'use client'

import { useEffect, useState } from 'react'

const PLACE_URL = 'https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9'

/**
 * Slim one-line reviews strip: five gold stars, the Google rating and the
 * review count, linking out to the Google listing. Designed to sit directly
 * beneath the AwardStrip and share its cream surface so the pair reads as one
 * block. Pulls the live rating/total from /api/reviews and falls back to the
 * static 5.0 / 47 when the API is unavailable.
 */
export function ReviewsStrip() {
  const [rating, setRating] = useState<number | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        if (d.rating) setRating(d.rating)
        if (d.total) setTotal(d.total)
      })
      .catch(() => {})
  }, [])

  return (
    <a
      href={PLACE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rated 5.0 on Google from verified reviews. Read our reviews on Google."
      className="group block bg-sand-deep hover:bg-sand-warm transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="border-t border-brand-green/10 py-3 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center">
          <span className="flex gap-0.5 flex-shrink-0" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} viewBox="0 0 24 24" fill="#fbbc04" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </span>
          <span className="text-xs sm:text-sm font-black tracking-tight text-ink">
            {(rating ?? 5).toFixed(1)} on Google
          </span>
          <span className="text-brand-green/40 font-bold" aria-hidden="true">·</span>
          <span className="text-xs sm:text-sm font-bold text-brand-green">
            {total ?? 47} verified reviews
          </span>
          <span className="text-[0.7rem] sm:text-xs font-black uppercase tracking-wide text-brand-green/50 transition-colors group-hover:text-brand-green whitespace-nowrap">
            Read them <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </a>
  )
}
