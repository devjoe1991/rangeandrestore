'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

const PLACEHOLDER_COUNT = 12

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const isEmpty = images.length === 0
  const [selected, setSelected] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const openModal = (index: number) => {
    setModalIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const prev = useCallback(() => {
    setModalIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }, [images.length])

  const next = useCallback(() => {
    setModalIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [modalOpen, prev, next])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  // ── Placeholder state (no images yet) ──────────────────────
  if (isEmpty) {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2" aria-label="Gallery coming soon">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-page-alt dark:bg-[#2a3d1f] animate-pulse"
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }

  return (
    <>
      {/* ── DESKTOP: split layout ─────────────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-start">

        {/* Left: scrollable thumbnail grid */}
        <div
          className="grid grid-cols-3 gap-2 max-h-[680px] overflow-y-auto pr-2"
          style={{ scrollbarWidth: 'thin' }}
          aria-label="Gallery thumbnails"
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative aspect-square rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a7a28] transition-all ${
                selected === i
                  ? 'ring-2 ring-[#4a7a28] ring-offset-2 dark:ring-offset-[#0e1a09] opacity-100'
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
                sizes="120px"
              />
            </button>
          ))}
        </div>

        {/* Right: large selected image — sticky */}
        <div className="sticky top-24">
          <figure className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              key={selected}
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1280px) 50vw, 640px"
              priority
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p className="text-white text-sm font-medium">{images[selected].caption}</p>
              <p className="text-white/60 text-xs mt-0.5">{selected + 1} / {images.length}</p>
            </figcaption>
          </figure>

          {/* Prev / next controls */}
          <div className="flex gap-3 mt-3 justify-end">
            <button
              onClick={() => setSelected((s) => (s === 0 ? images.length - 1 : s - 1))}
              className="w-10 h-10 rounded-full bg-[#2c3d1f] text-white flex items-center justify-center hover:bg-[#4a7a28] transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setSelected((s) => (s === images.length - 1 ? 0 : s + 1))}
              className="w-10 h-10 rounded-full bg-[#2c3d1f] text-white flex items-center justify-center hover:bg-[#4a7a28] transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE: thumbnail grid + modal ───────────────────── */}
      <div className="lg:hidden grid grid-cols-3 gap-2" aria-label="Gallery thumbnails">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openModal(i)}
            className="relative aspect-square rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a7a28]"
            aria-label={`Open photo: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </button>
        ))}
      </div>

      {/* ── MOBILE MODAL ──────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
            <p className="text-white/60 text-sm">{modalIndex + 1} / {images.length}</p>
            <button
              onClick={closeModal}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close photo viewer"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <Image
              key={modalIndex}
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption + nav */}
          <div className="flex-shrink-0 px-4 py-4">
            <p className="text-white text-sm font-medium text-center mb-4">
              {images[modalIndex].caption}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={prev}
                className="flex-1 max-w-[140px] h-12 rounded-full bg-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-sm font-semibold"
                aria-label="Previous photo"
              >
                <ChevronLeft /> Previous
              </button>
              <button
                onClick={next}
                className="flex-1 max-w-[140px] h-12 rounded-full bg-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-sm font-semibold"
                aria-label="Next photo"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
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

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
