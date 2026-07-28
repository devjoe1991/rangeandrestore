'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import type { CharityPhoto } from './CharityBlock'

/**
 * Swipe carousel for the /giving-back charity photos.
 *
 * Follows the same engineering as the Google reviews carousel: the .swipe-row
 * CSS handles touch scrolling and snap, and mouse drag is wired up in JS so it
 * works on desktop too, where there is no touch gesture to fall back on.
 *
 * Images get draggable={false} because a native HTML5 image drag would grab the
 * pointer and kill the drag-scroll. The reviews carousel has no images so it
 * never had to deal with this.
 */
export function CharityPhotoCarousel({ photos, label }: { photos: CharityPhoto[]; label: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [dragged, setDragged] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDown(true)
    setDragged(false)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => setIsDown(false)
  const handleMouseUp = () => setIsDown(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault() // stop text/image selection while dragging
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // scroll speed multiplier
    if (Math.abs(walk) > 3) setDragged(true)
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  if (photos.length === 0) return null

  return (
    /* Bleed to the container edge. Offsets mirror the body container's
       px-4 sm:px-6 lg:px-8, same as the homepage carousels.
       snap-none while dragging so mandatory snap does not fight the pointer. */
    <div className="mt-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        ref={scrollRef}
        className={`swipe-row ${isDown ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        /* Inline, not a utility class: .swipe-row is unlayered CSS in
           globals.css so it beats any Tailwind utility. Mandatory snap has to
           be off mid-drag or it fights the pointer. */
        style={isDown ? { scrollSnapType: 'none' } : undefined}
        role="group"
        aria-label={`${label} photos, drag or swipe sideways to see more`}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {photos.map((photo) => (
          /* Uniform row height, natural aspect per photo. The set mixes 4:3
             landscape with 9:16 portrait, so forcing one ratio would crop the
             portraits to a horizontal band and cut heads off. Fixing the height
             and letting aspect-ratio set the width keeps the row tidy and every
             photo intact. */
          <figure
            key={photo.src}
            className={`h-[280px] sm:h-[340px] lg:h-[380px] flex-shrink-0 ${
              photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
            }`}
          >
            <div className="relative w-full h-full rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className={`object-cover pointer-events-none select-none ${photo.objectPosition ?? 'object-center'}`}
                sizes={photo.orientation === 'portrait' ? '285px' : '507px'}
              />
            </div>
          </figure>
        ))}
      </div>

      <p className="mt-3 text-page-muted text-xs font-semibold uppercase tracking-widest">
        {dragged ? `${photos.length} photos` : `Drag or swipe for more · ${photos.length} photos`}
      </p>
    </div>
  )
}
