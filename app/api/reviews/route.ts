import { NextResponse } from 'next/server'

import { FALLBACK_REVIEWS } from '@/lib/google-reviews-fallback'

const PLACE_ID = 'ChIJozaeJe4bdkgRi9ECRiCeqpE'
const API_KEY = process.env.GOOGLE_PLACES_API

// Cacheable fallback returned whenever the upstream Google Places call is
// unavailable (missing key, billing disabled, quota, deprecated endpoint).
// Serves the curated reviews from lib/google-reviews-fallback.ts so the
// carousel still has cards; rating/total stay null so the client falls back to
// its own static figures rather than us asserting a number we did not fetch.
// A failure here must never surface as a 500 (which would log a console error
// and hurt the site's Best Practices score).
function fallbackReviews() {
  return NextResponse.json(
    { rating: null, total: null, reviews: FALLBACK_REVIEWS },
    { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
  )
}

export async function GET() {
  if (!API_KEY) {
    return fallbackReviews()
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${API_KEY}`

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.status !== 'OK') {
      console.error('Google Places API returned non-OK status:', data.status, data.error_message)
      return fallbackReviews()
    }

    const { rating, user_ratings_total, reviews } = data.result

    const filtered = (reviews ?? [])
      .filter((r: { rating: number }) => r.rating >= 4)
      .slice(0, 6)

    return NextResponse.json(
      { rating, total: user_ratings_total, reviews: filtered },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
    )
  } catch (err) {
    console.error('Failed to fetch Google Reviews:', err)
    return fallbackReviews()
  }
}
