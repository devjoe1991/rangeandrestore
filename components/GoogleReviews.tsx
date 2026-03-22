'use client'

import { ReactGoogleReviews } from 'react-google-reviews'

const FEATURABLE_WIDGET_ID = process.env.NEXT_PUBLIC_FEATURABLE_ID

export function GoogleReviews() {
  const placeIdUrl = "https://search.google.com/local/reviews?placeid=ChIJozaeJe4bdkgRi9ECRiCeqpE"

  return (
    <section className="section" style={{ backgroundColor: '#003010' }} aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* EXACT GoCompare Screenshot Style Header */}
        <h2 id="reviews-heading" className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#B7D968] tracking-tight uppercase leading-none mb-8 max-w-3xl">
          Our customers rate us
        </h2>
        
        {/* Massive 5 Stars Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem] text-[#B7D968]">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Logo and Rating Value */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10 text-white">
          <div className="flex items-center gap-2">
             <svg width="34" height="34" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             <span className="font-bold text-3xl tracking-tight">Google</span>
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">5.0 out of 5</span>
        </div>

        {/* Base Subtext */}
        <p className="text-white/90 text-sm sm:text-base font-semibold mb-10">
          Based on verified reviews on <a href={placeIdUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-bold hover:text-[#B7D968] transition-colors">Google</a>.
        </p>

        {FEATURABLE_WIDGET_ID && (
          <div className="w-full mt-6">
            <ReactGoogleReviews
              layout="carousel"
              featurableId={FEATURABLE_WIDGET_ID}
              nameDisplay="firstAndLastInitials"
              hideEmptyReviews
              maxItems={3}
            />
          </div>
        )}
      </div>
    </section>
  )
}
