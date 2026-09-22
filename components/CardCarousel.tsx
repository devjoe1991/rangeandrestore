'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/** How long each card holds before the carousel moves itself along. */
const AUTO_ADVANCE_MS = 6000
/** Quiet time after someone swipes, drags or keys before auto-advance resumes. */
const RESUME_AFTER_MS = 9000
/** Long enough for a smooth scroll to settle, so it is not read as a user swipe. */
const SETTLE_MS = 800

export type CarouselSlide = {
  /** Stable key, also used in the slide's accessible name. */
  key: string
  /** Short name for the dot's label, e.g. "Community Tuesday Clinic". */
  label: string
  node: React.ReactNode
}

/**
 * Full-width feature carousel for the homepage: one card per view, the next
 * one poking out, dots underneath and a slow auto-advance.
 *
 * Kept separate from SwipeCarousel on purpose. That one is a free-scrolling
 * row of many small cards with arrows, shared by the service cards and the
 * Google reviews; adding auto-advance and dots there would have changed both.
 * The two share .swipe-row, which is where the gesture handling actually lives.
 *
 * Auto-advance never fights a manual swipe:
 *
 *  1. Any real interaction — pointer down, wheel, key, or a scroll this
 *     component did not start — pauses it and starts a RESUME_AFTER_MS timer,
 *     which is pushed back again by each further interaction. iOS momentum
 *     keeps firing scroll events after the finger lifts, so the pause holds
 *     until the row genuinely settles.
 *  2. Scrolls this component starts set `programmatic`, so its own movement is
 *     never mistaken for a swipe.
 *  3. It also holds while a pointer is over the row, while focus is inside it,
 *     while the tab is hidden, and while the row is off screen.
 *  4. prefers-reduced-motion switches it off entirely, and the pause button
 *     below the dots turns it off for good (WCAG 2.2.2 — hover and focus alone
 *     are not a pause mechanism for everyone).
 *
 * Mouse drag mirrors SwipeCarousel: only mouse pointers enter the drag logic,
 * and a drag past 5px swallows the click that follows so a drag across a card
 * never navigates. Touch scrolling is native, so a tap always routes.
 */
export function CardCarousel({
  label,
  slides,
  autoAdvanceMs = AUTO_ADVANCE_MS,
}: {
  label: string
  slides: CarouselSlide[]
  autoAdvanceMs?: number
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Reasons auto-advance is currently held. All must be clear for it to run.
  const [interacting, setInteracting] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [inView, setInView] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [playing, setPlaying] = useState(true)

  const programmatic = useRef(false)
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const drag = useRef({ startX: 0, scrollLeft: 0, moved: false, pointerId: -1 })
  const suppressClick = useRef(false)

  /* ── Auto-advance gates ─────────────────────────────────── */

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const sync = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [])

  useEffect(() => {
    const el = rowRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    return () => {
      if (settleTimer.current) clearTimeout(settleTimer.current)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  /** Someone is working the carousel by hand — hold off, and keep holding off. */
  const nudge = useCallback(() => {
    setInteracting(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setInteracting(false), RESUME_AFTER_MS)
  }, [])

  /* ── Movement ───────────────────────────────────────────── */

  const goTo = useCallback(
    (next: number, source: 'auto' | 'user') => {
      const el = rowRef.current
      if (!el) return
      const card = el.children[next] as HTMLElement | undefined
      if (!card) return

      if (source === 'user') nudge()

      programmatic.current = true
      if (settleTimer.current) clearTimeout(settleTimer.current)
      settleTimer.current = setTimeout(() => {
        programmatic.current = false
      }, SETTLE_MS)

      // Measured from the live boxes rather than offsetLeft: the row is not
      // necessarily the cards' offsetParent, and this stays correct whatever
      // the gutter and gap work out to at the current width.
      const delta = card.getBoundingClientRect().left - el.getBoundingClientRect().left
      el.scrollBy({ left: delta, behavior: reducedMotion ? 'auto' : 'smooth' })
      setIndex(next)
    },
    [nudge, reducedMotion],
  )

  const canAutoAdvance =
    playing && !reducedMotion && !interacting && !hovered && !focused && !tabHidden && inView

  useEffect(() => {
    if (!canAutoAdvance || slides.length < 2) return
    const id = setTimeout(() => goTo((index + 1) % slides.length, 'auto'), autoAdvanceMs)
    return () => clearTimeout(id)
  }, [canAutoAdvance, index, slides.length, autoAdvanceMs, goTo])

  /** Which card is sitting on the gutter right now. */
  const handleScroll = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    if (!programmatic.current) nudge()

    const rowLeft = el.getBoundingClientRect().left
    let nearest = 0
    let best = Infinity
    for (let i = 0; i < el.children.length; i++) {
      const distance = Math.abs((el.children[i] as HTMLElement).getBoundingClientRect().left - rowLeft)
      if (distance < best) {
        best = distance
        nearest = i
      }
    }
    setIndex(nearest)
  }, [nudge])

  /* ── Mouse drag (touch scrolls natively) ────────────────── */

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    nudge()
    if (e.pointerType !== 'mouse' || e.button !== 0 || !rowRef.current) return
    drag.current = {
      startX: e.clientX,
      scrollLeft: rowRef.current.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
    }
    suppressClick.current = false
    setIsDragging(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !rowRef.current) return
    const walk = e.clientX - drag.current.startX
    if (!drag.current.moved && Math.abs(walk) > 5) {
      drag.current.moved = true
      suppressClick.current = true
      try {
        e.currentTarget.setPointerCapture(e.pointerId)
      } catch {
        /* capture is best-effort — dragging still works without it */
      }
    }
    if (!drag.current.moved) return
    e.preventDefault()
    rowRef.current.scrollLeft = drag.current.scrollLeft - walk
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    if (e.currentTarget.hasPointerCapture(drag.current.pointerId)) {
      e.currentTarget.releasePointerCapture(drag.current.pointerId)
    }
    setIsDragging(false)
  }

  const handleClickCapture = (e: React.MouseEvent) => {
    if (!suppressClick.current) return
    e.preventDefault()
    e.stopPropagation()
    suppressClick.current = false
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const next = e.key === 'ArrowRight' ? index + 1 : index - 1
    goTo(Math.min(Math.max(next, 0), slides.length - 1), 'user')
  }

  return (
    <div
      className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={() => setFocused(false)}
    >
      <div
        ref={rowRef}
        className={`swipe-row feature-row items-stretch ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        /* Inline, not a utility: .swipe-row is unlayered CSS so it beats
           Tailwind, and mandatory snap has to be off mid-drag or it fights
           the pointer. */
        style={isDragging ? { scrollSnapType: 'none' } : undefined}
        tabIndex={0}
        aria-label={`${label} — swipe sideways, or use the left and right arrow keys, to see all ${slides.length}`}
        onScroll={handleScroll}
        onWheel={nudge}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}
            className="flex"
          >
            {slide.node}
          </div>
        ))}
      </div>

      {/* ── Dots ─────────────────────────────────────────────── */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => goTo(i, 'user')}
              aria-label={`Show ${slide.label}`}
              aria-current={i === index ? 'true' : undefined}
              /* The tap target is 44px; the dot inside it is the visible part. */
              className="group grid h-11 w-6 place-items-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index
                    ? 'h-2.5 w-6 bg-brand-green'
                    : 'h-2.5 w-2.5 bg-brand-green/25 group-hover:bg-brand-green/50'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPlaying((on) => !on)}
          aria-label={playing ? 'Stop the cards moving on their own' : 'Let the cards move on their own again'}
          className="grid h-11 w-11 place-items-center rounded-full text-brand-green/50 transition-colors hover:text-brand-green"
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <rect x="1" y="1" width="3.5" height="10" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="10" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M2 1.2v9.6a.6.6 0 0 0 .92.5l7.3-4.8a.6.6 0 0 0 0-1L2.92.7A.6.6 0 0 0 2 1.2Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
