'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  desktopSrc: string
  mobileSrc: string
  className?: string
}

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

/**
 * Silent looping background video for the homepage hero. It sits on top of the
 * poster image and stays invisible until it is actually playing, so:
 *
 *  1. The poster is what loads with the page and what Lighthouse measures.
 *     The video has no src in the HTML and is only fetched after window load.
 *  2. If it never plays (iOS Low Power Mode, a failed download), the poster
 *     simply stays. No play button, no blank frame.
 *  3. Reduced motion, Data Saver and 2G connections never download it at all.
 *  4. It pauses while scrolled out of view.
 */
export function HeroVideo({ desktopSrc, mobileSrc, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      connection?.saveData ||
      connection?.effectiveType?.endsWith('2g')
    ) return

    let observer: IntersectionObserver | undefined

    const start = () => {
      video.muted = true
      /* 768px is Tailwind's md, the same point the hero layout switches at. */
      video.src = window.matchMedia('(min-width: 768px)').matches ? desktopSrc : mobileSrc
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      })
      observer.observe(video)
    }

    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })

    return () => {
      window.removeEventListener('load', start)
      observer?.disconnect()
    }
  }, [desktopSrc, mobileSrc])

  return (
    <video
      ref={ref}
      className={`hero-video pointer-events-none transition-opacity duration-700 ${playing ? 'opacity-100' : 'opacity-0'} ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
    />
  )
}
