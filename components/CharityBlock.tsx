import Image from 'next/image'
import type { ReactNode } from 'react'

/**
 * A photo in a charity block carousel. Add entries only once the file exists
 * in /public/giving-back/, otherwise the page ships a 404 image.
 */
export type CharityPhoto = {
  /** Path under /public, e.g. '/giving-back/....jpg' */
  src: string
  /** Long descriptive alt: subject, event, then location. Stay at event level. */
  alt: string
  /** Optional object-position class. Portrait photos usually want 'object-top'. */
  objectPosition?: string
}

interface CharityBlockProps {
  /** Anchor id, e.g. 'whittington-health-charity' */
  id: string
  /** Full charity name, used as the h2. */
  name: string
  /** Short name for the donate button label. */
  shortName: string
  /** Uppercase eyebrow, e.g. 'Registered charity no. 1056452 · North London' */
  eyebrow: string
  donateUrl: string
  instagramUrl: string
  /** Display text on the Instagram button, e.g. '@phabcharity' */
  instagramHandle: string
  /** Renders nothing when empty, so no broken image can ship. */
  photos: CharityPhoto[]
  /** Hand-written prose: h3 subheads and paragraphs. */
  children: ReactNode
}

/**
 * One charity on /giving-back: overview prose, a swipe carousel of photos, and
 * two outbound buttons (donate, Instagram). The carousel reuses the site's
 * .swipe-row pattern from globals.css, which is pure CSS, so this stays a
 * server component with no client JS.
 */
export function CharityBlock({
  id,
  name,
  shortName,
  eyebrow,
  donateUrl,
  instagramUrl,
  instagramHandle,
  photos,
  children,
}: CharityBlockProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="rounded-[24px] border-2 border-[#1a3d3a] bg-page-sage overflow-hidden scroll-mt-24"
    >
      <div style={{ height: '4px', background: '#0f767a', width: '100%' }} />

      <div className="p-6 sm:p-8 lg:p-10">
        <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">
          {eyebrow}
        </p>
        <h2 id={`${id}-heading`} className="text-2xl sm:text-3xl font-bold text-page mb-4">
          {name}
        </h2>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          {children}
        </div>

        {photos.length > 0 && (
          /* Bleed the row to the card edges. Offsets mirror the p-6/sm:p-8/lg:p-10 above. */
          <div className="mt-8 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
            <div
              className="swipe-row"
              role="group"
              aria-label={`${name} photos, scroll sideways to see more`}
              tabIndex={0}
            >
              {photos.map((photo) => (
                <figure key={photo.src} className="w-[80%] max-w-[420px] sm:w-[380px]">
                  <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-card">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className={`object-cover ${photo.objectPosition ?? 'object-center'}`}
                      sizes="(max-width: 640px) 80vw, 380px"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline min-h-[44px]"
          >
            Donate to {shortName} <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Instagram`}
            className="inline-flex items-center gap-2 bg-white text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-[#1a3d3a] min-h-[44px]"
          >
            <InstagramIcon /> {instagramHandle}
          </a>
        </div>
      </div>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}
