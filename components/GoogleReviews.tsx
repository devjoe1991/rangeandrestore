'use client'

import { ReactGoogleReviews } from 'react-google-reviews'

const FEATURABLE_WIDGET_ID = process.env.NEXT_PUBLIC_FEATURABLE_ID

export function GoogleReviews() {
  if (!FEATURABLE_WIDGET_ID) return null

  return (
    <section className="section" style={{ backgroundColor: '#153C13' }} aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="reviews-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Our customers<br />rate us
            </h2>
            <p className="text-[#C5E47D] text-4xl font-black mt-2 leading-none tracking-tight">
              ★★★★★
            </p>
            <p className="mt-1 text-sm text-[#C5E47D]/70 font-semibold">
              Rated 5 stars on Google
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5E47D] text-sm font-semibold hover:text-white transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center"
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
            className="text-[#C5E47D] text-sm font-semibold min-h-[44px] inline-flex items-center"
          >
            See all reviews on Google ↗
          </a>
        </div>
      </div>
    </section>
  )
}
