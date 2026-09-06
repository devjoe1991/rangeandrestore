'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Horizontal swipe carousel shared by the homepage service cards and the
 * Google reviews row, so both get identical gesture handling.
 *
 * .swipe-row does the touch scrolling and snapping, mouse drag is wired up in
 * JS so desktop gets the same gesture.
 *
 * Cards may contain links ("Learn more", "Book now") and the card itself may
 * route, so a drag must never turn into a navigation. Two rules keep that
 * clean:
 *
 *  1. Only mouse pointers enter the drag logic. Touch scrolling is native, so
 *     a tap on a phone never passes through this code and always routes.
 *  2. A mouse drag past a 5px threshold arms suppressClick, and the capture
 *     phase click handler swallows the click that follows. A plain click never
 *     crosses the threshold, so it reaches the link untouched.
 *
 * `itemNoun` only ever reaches screen readers, via the arrow button labels.
 */
export function SwipeCarousel({
  children,
  label,
  count,
  itemNoun = 'items',
  action,
}: {
  children: React.ReactNode
  label: string
  count: number
  itemNoun?: string
  /* Optional control (e.g. a "View all" link) rendered inline in the footer
     row, just before the arrows, so the row carries no extra vertical space. */
  action?: React.ReactNode
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const drag = useRef({ startX: 0, scrollLeft: 0, moved: false, pointerId: -1 })
  const suppressClick = useRef(false)

  const updateEdges = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Touch and pen scroll natively — leave them alone so taps always route.
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
      // Capture only once it is definitely a drag. Capturing on pointerdown
      // would retarget the click to this container and break the card links.
      try {
        e.currentTarget.setPointerCapture(e.pointerId)
      } catch {
        /* capture is best-effort — dragging still works without it */
      }
    }
    if (!drag.current.moved) return
    e.preventDefault() // no text selection mid-drag
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

  const page = (direction: 1 | -1) => {
    const el = rowRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    /* Bleed to the container edge, mirroring the body container's
       px-4 sm:px-6 lg:px-8 like the other homepage carousels. */
    <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        ref={rowRef}
        className={`swipe-row pt-1 items-stretch ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        /* Inline, not a utility: .swipe-row is unlayered CSS in globals.css so
           it beats Tailwind. Mandatory snap has to be off mid-drag or it fights
           the pointer. */
        style={isDragging ? { scrollSnapType: 'none' } : undefined}
        role="group"
        aria-label={`${label} — swipe or drag sideways to see all ${count}`}
        onScroll={updateEdges}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>

      <div className="mt-3 flex items-center justify-end gap-4">
        {action}

        {/* Pointer-only controls: touch users already have the gesture, and
            every card is reachable by keyboard through its own links. */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label={`Show previous ${itemNoun}`}
            className="w-10 h-10 rounded-full border-2 border-brand-green bg-card text-page flex items-center justify-center transition-opacity hover:bg-page-sage disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label={`Show more ${itemNoun}`}
            className="w-10 h-10 rounded-full border-2 border-brand-green bg-card text-page flex items-center justify-center transition-opacity hover:bg-page-sage disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
