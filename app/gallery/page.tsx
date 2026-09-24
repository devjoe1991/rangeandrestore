import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import Link from 'next/link'
import { GalleryClient } from './GalleryClient'
import type { GalleryImage } from './GalleryClient'
import { ROUTES } from '@/lib/routes'
import { SAUNA_PHOTOS } from '@/components/SaunaPhotos'

export const metadata: Metadata = buildMetadata({
  title: 'Gallery – Sports Massage Clinic Photos, Archway',
  description: 'See inside Range and Restore Sports Massage in Archway: the treatment rooms, the sauna suite, treatments in progress and our team.',
  path: '/gallery',
})

const fileOf = (src: string) => src.replace('/Gallery/', '')

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

// Hand-written alt text and captions for known photos, in display order.
// Any new image dropped into public/Gallery is picked up automatically at
// build time and appended after these with default alt text — add an entry
// here when a photo deserves its own wording.
const CURATED: Array<{ file: string; alt: string; caption: string; fit?: GalleryImage['fit'] }> = [
  // Treatment photos that also back the homepage service cards.
  { file: 'advanced-clinical-massage-assessment-treatment-room-range-and-restore-archway-north-london.jpg', alt: 'Carlos Bonvicine leading an assessment-led clinical massage session with the team in the treatment room at Range and Restore, Archway, North London', caption: 'Range and Restore — advanced clinical massage' },
  { file: 'back-neck-pain-mot-neck-massage-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist supporting the head during neck and upper trapezius treatment as part of the Back and Neck Pain MOT at Range and Restore, Archway, North London', caption: 'Range and Restore — Back & Neck Pain MOT' },
  { file: 'sports-deep-tissue-massage-back-shoulder-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist working deep tissue techniques through the back and shoulder during a sports massage at Range and Restore, Archway, North London', caption: 'Range and Restore — sports and deep tissue massage' },
  { file: 'cupping-therapy-sports-deep-tissue-massage-back-range-and-restore-archway-north-london.jpg', alt: 'Cupping therapy set along the spine during a sports and deep tissue massage at Range and Restore, Archway, North London', caption: 'Range and Restore — cupping therapy' },
  { file: '2-hour-pain-relief-massage-neck-shoulder-treatment-range-and-restore-archway-north-london.jpg', alt: 'Carlos Bonvicine working through the neck and shoulder during an extended pain relief massage at Range and Restore, Archway, North London', caption: 'Range and Restore — 2-hour pain relief massage' },
  { file: 'manual-lymphatic-drainage-massage-therapist-range-and-restore-archway-north-london.jpg', alt: 'Range and Restore therapist treating a client during a manual lymphatic drainage session in Archway, North London', caption: 'Range and Restore — manual lymphatic drainage' },
  { file: 'relaxation-restorative-massage-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist delivering a calm, pressure-adjusted relaxation and restorative massage at Range and Restore, Archway, North London', caption: 'Range and Restore — relaxation massage' },
  // The sauna suite; alt text is shared with the rest of the site via SAUNA_PHOTOS.
  { file: fileOf(SAUNA_PHOTOS.front.src), alt: SAUNA_PHOTOS.front.alt, caption: 'Range and Restore — Infrared Hybrid Sauna' },
  { file: fileOf(SAUNA_PHOTOS.portrait.src), alt: SAUNA_PHOTOS.portrait.alt, caption: 'Range and Restore — inside the sauna' },
  { file: fileOf(SAUNA_PHOTOS.suite.src), alt: SAUNA_PHOTOS.suite.alt, caption: 'Range and Restore — the sauna room' },
  { file: fileOf(SAUNA_PHOTOS.shower.src), alt: SAUNA_PHOTOS.shower.alt, caption: 'Range and Restore — private shower' },
  // Clinic photos, rooms first, then treatment.
  { file: 'IMG_1371.JPG', alt: 'Carlos Bonvicine, Founder & Lead Therapist, sitting on the massage couch in the treatment room at Range and Restore, Archway', caption: 'Range and Restore — Carlos Bonvicine, Founder & Lead Therapist' },
  { file: 'FullSizeRender.jpeg', alt: 'Treatment room with massage couch and anatomy posters at Range and Restore, 130 Junction Road, Archway, London N19 5LB', caption: 'Range and Restore — treatment room' },
  { file: 'FullSizeRender (1).jpeg', alt: 'Massage couch, anatomy posters and framed certificates in the treatment room at Range and Restore, Archway', caption: 'Range and Restore — treatment room' },
  { file: 'WhatsApp Image 2026-05-17 at 18.09.48.jpeg', alt: 'Treatment room with massage couch and certifications at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — inside the clinic' },
  { file: 'IMG_1828.jpeg', alt: 'Empty treatment room with massage couch, chair and anatomy posters at Range and Restore, Archway, North London', caption: 'Range and Restore — treatment room' },
  { file: 'IMG_1831.jpeg', alt: 'Treatment room with massage couch, desk and framed certificates at Range and Restore, 130 Junction Road, Archway', caption: 'Range and Restore — treatment room and desk' },
  { file: 'FullSizeRender (2).jpeg', alt: 'Waiting area with sofas and the Range and Restore banner in the Reliable Scan building at 130 Junction Road, Archway', caption: 'Range and Restore — waiting area' },
  { file: 'IMG_1552.jpeg', alt: 'Reception and waiting area in the Reliable Scan building at 130 Junction Road, Archway, where Range and Restore is based', caption: 'Range and Restore — reception and waiting area' },
  { file: 'IMG_1393.JPG', alt: 'Client lying face down under a towel on the massage couch, ready for treatment, at Range and Restore, Archway N19', caption: 'Range and Restore — ready for treatment' },
  { file: 'IMG_1387.JPG', alt: 'Client resting under a towel on the massage couch in the treatment room at Range and Restore, Archway', caption: 'Range and Restore — in the treatment room' },
  { file: 'incollage_save.jpg', alt: "Before and after photos of a client's straight-leg raise on the massage couch at Range and Restore, Archway", caption: 'Range and Restore — before and after: straight-leg raise', fit: 'contain' },
  { file: 'IMG_1380.JPG', alt: 'Client having cupping therapy on the back in the treatment room at Range and Restore, Archway', caption: 'Range and Restore — cupping therapy' },
  { file: 'IMG_1382.JPG', alt: "Cupping cups along a client's spine in the treatment room at Range and Restore, Archway, London N19", caption: 'Range and Restore — cupping therapy' },
  { file: 'IMG_1309.jpeg', alt: "Cupping cups on a client's upper back during treatment at Range and Restore, Archway", caption: 'Range and Restore — cupping on the upper back' },
  { file: 'IMG_1311.jpeg', alt: "Cupping cups on a client's lower back, with the round marks cupping can leave on the skin, at Range and Restore, Archway", caption: 'Range and Restore — cupping therapy' },
  { file: 'IMG_1381.JPG', alt: 'Close-up of cupping cups along the spine, with the round marks cupping can leave on the skin', caption: 'Range and Restore — cupping close-up' },
  // Our team's professional cupping training course, in a training classroom — not the clinic.
  { file: 'IMG_1275.jpeg', alt: 'Group holding certificates at the end of a professional cupping training course attended by the Range and Restore team, in a training classroom away from the clinic', caption: 'Team training course — certificates day (not at our clinic)' },
  { file: 'IMG_1262.jpeg', alt: 'Hands-on cupping practice at a professional training course attended by the Range and Restore team, in a training classroom away from the clinic', caption: 'Team training course — hands-on practice (not at our clinic)' },
  { file: 'IMG_1132.jpeg', alt: 'Cupping practice on massage couches at a professional training course attended by the Range and Restore team, away from the clinic', caption: 'Team training course — cupping practice (not at our clinic)' },
  { file: 'IMG_1112.jpeg', alt: 'Tutor demonstrating cupping at a professional training course attended by the Range and Restore team, away from the clinic', caption: 'Team training course — tutor demonstration (not at our clinic)' },
]

function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), 'public', 'Gallery')
  let files: string[] = []
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
  } catch {
    files = []
  }
  const available = new Set(files)
  const curatedNames = new Set(CURATED.map((c) => c.file))
  const curated = CURATED.filter((c) => available.has(c.file))
  const extras = files
    .filter((f) => !curatedNames.has(f))
    .sort()
    .map((f, i): (typeof CURATED)[number] => ({
      file: f,
      alt: `Range and Restore Sports Massage clinic photo ${i + 1} — Archway, North London`,
      caption: 'Range and Restore — Archway clinic',
    }))
  return [...curated, ...extras].map(({ file, alt, caption, fit }) => ({
    src: `/Gallery/${file}`,
    alt,
    caption,
    ...(fit ? { fit } : {}),
  }))
}

const breadcrumbs = buildBreadcrumbs([{ name: 'Gallery', path: '/gallery' }])

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Range and Restore Sports Massage Gallery',
  description: 'Photos from Range and Restore in Archway, North London: the treatment rooms, the sauna suite, treatments in progress and our team.',
  url: 'https://rangeandrestore.co.uk/gallery',
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
}

export default function GalleryPage() {
  const images = getGalleryImages()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Gallery</h1>
          <p className="mt-3 text-xl text-page-muted">Inside Range and Restore Sports Massage, Archway</p>
          <p className="mt-4 text-page-muted opacity-80 max-w-2xl">
            Real photos from Range and Restore at 130 Junction Road, Archway: the treatment rooms, the sauna suite and treatments in progress. The last few are from a professional cupping course our team attended, not the clinic.
          </p>
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-md">
        <GalleryClient images={images} />

        {/* ── CTA ──────────────────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-page flex flex-col sm:flex-row gap-4 items-start">
          <BookingButton label="Book Your Session" />
          <Link
            href={ROUTES.team}
            className="btn bg-white/60 backdrop-blur-sm border border-brand-teal/50 text-ink hover:bg-white hover:border-brand-teal transition-all text-sm shadow-sm"
          >
            Meet the Team →
          </Link>
        </div>
      </div>
    </>
  )
}
