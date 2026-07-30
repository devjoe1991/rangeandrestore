#!/usr/bin/env node
/**
 * Pull the Range and Restore photos Google currently serves for the business
 * listing and download any new ones into public/Gallery, where the gallery
 * page picks them up automatically at build time.
 *
 * Reads GOOGLE_PLACES_API from the environment or .env.local. Tries the
 * Places API (New) first, falls back to the legacy Places API. Downloaded
 * files are named gbp-<content-hash>.<ext> so re-runs never duplicate.
 * Append-only: photos removed from Google are NOT deleted here.
 *
 * Note: Google exposes at most ~10 photos of its choosing per listing, so
 * this accumulates photos over time rather than mirroring the full profile.
 *
 * Usage: node scripts/sync-gbp-photos.mjs
 */
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const GALLERY_DIR = join(ROOT, 'public', 'Gallery')
const PLACE_ID = 'ChIJozaeJe4bdkgRi9ECRiCeqpE'
const MAX_WIDTH = 1600

function getKey() {
  if (process.env.GOOGLE_PLACES_API) return process.env.GOOGLE_PLACES_API
  try {
    const env = readFileSync(join(ROOT, '.env.local'), 'utf8')
    const match = env.match(/^GOOGLE_PLACES_API=(.+)$/m)
    if (match) return match[1].trim()
  } catch {}
  console.error('GOOGLE_PLACES_API not set (env var or .env.local)')
  process.exit(1)
}

const KEY = getKey()

// Returns a list of photo media URLs, or throws with a useful message.
async function getPhotoUrls() {
  // Places API (New)
  const newRes = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?fields=photos`, {
    headers: { 'X-Goog-Api-Key': KEY },
  })
  const newData = await newRes.json()
  if (newRes.ok) {
    return (newData.photos ?? []).map(
      (p) => `https://places.googleapis.com/v1/${p.name}/media?maxWidthPx=${MAX_WIDTH}&key=${KEY}`
    )
  }
  console.warn(`Places API (New) failed (${newRes.status}: ${newData.error?.status}), trying legacy API…`)

  // Legacy Places API
  const legacyRes = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=photos&key=${KEY}`
  )
  const legacyData = await legacyRes.json()
  if (legacyData.status === 'OK') {
    return (legacyData.result.photos ?? []).map(
      (p) => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${MAX_WIDTH}&photo_reference=${p.photo_reference}&key=${KEY}`
    )
  }

  throw new Error(
    `Both Places APIs refused the request.\n` +
      `  New API: ${newData.error?.message ?? newRes.status}\n` +
      `  Legacy API: ${legacyData.status} — ${legacyData.error_message ?? 'no detail'}\n` +
      `Most likely fix: enable Billing + "Places API (New)" on the Google Cloud project that owns this key.`
  )
}

function extensionFor(contentType) {
  if (contentType?.includes('png')) return 'png'
  if (contentType?.includes('webp')) return 'webp'
  return 'jpg'
}

const urls = await getPhotoUrls()
if (urls.length === 0) {
  console.log('Google returned no photos for the listing.')
  process.exit(0)
}

let added = 0
let skipped = 0
for (const url of urls) {
  const res = await fetch(url)
  if (!res.ok) {
    console.warn(`Photo download failed (${res.status}) — skipping one photo`)
    continue
  }
  const bytes = Buffer.from(await res.arrayBuffer())
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 16)
  const file = `gbp-${hash}.${extensionFor(res.headers.get('content-type'))}`
  const dest = join(GALLERY_DIR, file)
  if (existsSync(dest)) {
    skipped++
    continue
  }
  writeFileSync(dest, bytes)
  console.log(`Added ${file} (${Math.round(bytes.length / 1024)} KB)`)
  added++
}

console.log(`Done: ${added} new photo(s), ${skipped} already in the gallery.`)
