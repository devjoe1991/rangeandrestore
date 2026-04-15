'use client'

import { useEffect, useRef, useState } from 'react'

const PAGE_URL = 'https://www.facebook.com/profile.php?id=61572962878628'

const MIN_WIDTH = 180
const MAX_WIDTH = 500

function buildSrc(width: number) {
  return (
    'https://www.facebook.com/plugins/page.php' +
    '?href=' + encodeURIComponent(PAGE_URL) +
    '&tabs=timeline' +
    '&width=' + width +
    '&height=600' +
    '&small_header=false' +
    '&adapt_container_width=true' +
    '&hide_cover=false' +
    '&show_facepile=true'
  )
}

export function FacebookFeed() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const measure = () => {
      const w = Math.round(el.clientWidth)
      const clamped = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, w))
      setWidth((prev) => (prev === clamped ? prev : clamped))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="section bg-page-alt" aria-labelledby="social-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="eyebrow block mb-1.5">Stay Connected</span>
          <h2 id="social-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
            Follow us on Facebook
          </h2>
          <p className="mt-2 text-page-muted opacity-70 text-sm max-w-md mx-auto">
            Treatment tips, clinic news and updates from Range and Restore in Archway, North London.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            ref={wrapRef}
            className="rounded-2xl overflow-hidden shadow-md w-full max-w-[500px] bg-white"
            style={{ height: 600 }}
          >
            {width !== null && (
              <iframe
                key={width}
                src={buildSrc(width)}
                width={width}
                height={600}
                style={{ border: 'none', overflow: 'hidden', display: 'block', width: '100%', height: '100%' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Range and Restore Sports Massage on Facebook"
              />
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href={PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm"
          >
            Visit our Facebook page →
          </a>
        </div>
      </div>
    </section>
  )
}
