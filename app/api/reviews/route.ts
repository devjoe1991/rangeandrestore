import { NextResponse } from 'next/server'

const PLACE_ID = 'ChIJozaeJe4bdkgRi9ECRiCeqpE'
const API_KEY = process.env.GOOGLE_PLACES_API

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'Missing GOOGLE_PLACES_API key' }, { status: 500 })
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${API_KEY}`

  const res = await fetch(url, { next: { revalidate: 3600 } })
  const data = await res.json()

  if (data.status !== 'OK') {
    return NextResponse.json({ error: data.error_message || 'Failed to fetch Google Reviews' }, { status: 500 })
  }

  const { rating, user_ratings_total, reviews } = data.result

  const filtered = (reviews ?? [])
    .filter((r: { rating: number }) => r.rating >= 4)
    .slice(0, 6)

  return NextResponse.json({ rating, total: user_ratings_total, reviews: filtered })
}
