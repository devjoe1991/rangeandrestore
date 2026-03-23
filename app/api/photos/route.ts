import { NextResponse } from 'next/server'

const PLACE_ID = 'ChIJozaeJe4bdkgRiCeqpE'
const API_KEY = process.env.GOOGLE_PLACES_API

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
  }

  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=photos,name&key=${API_KEY}`

  const res = await fetch(detailsUrl, { next: { revalidate: 3600 } })
  const data = await res.json()

  if (data.status !== 'OK') {
    return NextResponse.json({ error: data.status }, { status: 500 })
  }

  const photos = (data.result.photos ?? []).map((p: { photo_reference: string; width: number; height: number }) => ({
    src: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photo_reference=${p.photo_reference}&key=${API_KEY}`,
    width: p.width,
    height: p.height,
  }))

  return NextResponse.json({ photos })
}
