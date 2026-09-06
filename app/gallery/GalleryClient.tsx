'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

const PLACEHOLDER_COUNT = 12

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const isEmpty = images.length === 0
  const [selected, setSelected] = useState(0)
  const featuredRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => {
    setSelected((s) => (s === 0 ? images.length - 1 : s - 1))
  }, [images.length])

  const next = useCallback(() => {
    setSelected((s) => (s === images.length - 1 ? 0 : s + 1))
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (isEmpty) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isEmpty, prev, next])

  const selectFromGrid = (index: number) => {
    setSelected(index)
    featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // ── Placeholder state (no images yet) ──────────────────────
  if (isEmpty) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2" aria-label="Gallery coming soon">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-page-alt dark:bg-surface-moss animate-pulse"
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }

  return (
    <div>
      {/* ── Featured photo ────────────────────────────────────── */}
      <div ref={featuredRef} className="scroll-mt-24">
        <figure className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] relative shadow-lg">
          <Image
            key={selected}
            src={images[selected].src}
            alt={images[selected].alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 1280px) 100vw, 1216px"
            priority
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
            <p className="text-white text-sm font-medium">{images[selected].caption}</p>
            <p className="text-white/60 text-xs mt-0.5">{selected + 1} / {images.length}</p>
          </figcaption>

          {/* Prev / next controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-brand-teal transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-brand-teal transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
        </figure>
      </div>

      {/* ── Thumbnail grid ────────────────────────────────────── */}
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2" aria-label="Gallery thumbnails">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => selectFromGrid(i)}
            className={`relative aspect-square rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-all ${
              selected === i
                ? 'ring-2 ring-brand-teal ring-offset-2 dark:ring-offset-surface-night opacity-100'
                : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`View: ${img.caption}`}
            aria-pressed={selected === i}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 200px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
