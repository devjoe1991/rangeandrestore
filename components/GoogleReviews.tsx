'use client'

import { ReactGoogleReviews } from 'react-google-reviews'

const FEATURABLE_WIDGET_ID = process.env.NEXT_PUBLIC_FEATURABLE_ID

export function GoogleReviews() {
  if (!FEATURABLE_WIDGET_ID) return null

  return (
    <section className="section bg-white" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-7 gap-4">
          <div>
            <span className="eyebrow block mb-1.5">Client Reviews</span>
            <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-extrabold text-[#334311] tracking-tight">
              What our clients say
            </h2>
            <p className="mt-1 text-sm text-[#618020] font-semibold">
              ★★★★★ Rated 5 stars on Google
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#618020] text-sm font-semibold hover:text-[#334311] transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center"
          >
            See all reviews ↗
          </a>
        </div>

        <ReactGoogleReviews
          layout="carousel"
          featurableId={FEATURABLE_WIDGET_ID}
          nameDisplay="firstAndLastInitials"
          hideEmptyReviews
          maxItems={3}
        />

        <div className="mt-5 sm:hidden">
          <a
            href="https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#618020] text-sm font-semibold min-h-[44px] inline-flex items-center"
          >
            See all reviews on Google ↗
          </a>
        </div>
      </div>
    </section>
  )
}
