import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import Link from 'next/link'
import { GalleryClient } from './GalleryClient'
import type { GalleryImage } from './GalleryClient'

export const metadata: Metadata = buildMetadata({
  title: 'Gallery – Range and Restore Sports Massage Archway',
  description: 'See inside Range and Restore Sports Massage in Archway: real clinic photos, treatment sessions and the environment behind every appointment.',
  path: '/gallery',
})

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

// Hand-written alt text and captions for known photos, in display order.
// Any new image dropped into public/Gallery is picked up automatically at
// build time and appended after these with default alt text — add an entry
// here when a photo deserves its own wording.
const CURATED: Array<{ file: string; alt: string; caption: string }> = [
  // Treatment photos that also back the homepage service cards.
  { file: 'advanced-clinical-massage-assessment-treatment-room-range-and-restore-archway-north-london.jpg', alt: 'Carlos Bonvicine leading an assessment-led clinical massage session with the team in the treatment room at Range and Restore, Archway, North London', caption: 'Range and Restore — advanced clinical massage' },
  { file: 'back-neck-pain-mot-neck-massage-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist supporting the head during neck and upper trapezius treatment as part of the Back and Neck Pain MOT at Range and Restore, Archway, North London', caption: 'Range and Restore — Back & Neck Pain MOT' },
  { file: 'sports-deep-tissue-massage-back-shoulder-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist working deep tissue techniques through the back and shoulder during a sports massage at Range and Restore, Archway, North London', caption: 'Range and Restore — sports and deep tissue massage' },
  { file: 'cupping-therapy-sports-deep-tissue-massage-back-range-and-restore-archway-north-london.jpg', alt: 'Cupping therapy set along the spine during a sports and deep tissue massage at Range and Restore, Archway, North London', caption: 'Range and Restore — cupping therapy' },
  { file: '2-hour-pain-relief-massage-neck-shoulder-treatment-range-and-restore-archway-north-london.jpg', alt: 'Carlos Bonvicine working through the neck and shoulder during an extended pain relief massage at Range and Restore, Archway, North London', caption: 'Range and Restore — 2-hour pain relief massage' },
  { file: 'manual-lymphatic-drainage-massage-therapist-range-and-restore-archway-north-london.jpg', alt: 'Range and Restore therapist treating a client during a manual lymphatic drainage session in Archway, North London', caption: 'Range and Restore — manual lymphatic drainage' },
  { file: 'relaxation-restorative-massage-treatment-range-and-restore-archway-north-london.jpg', alt: 'Therapist delivering a calm, pressure-adjusted relaxation and restorative massage at Range and Restore, Archway, North London', caption: 'Range and Restore — relaxation massage' },
  { file: 'infrared-sauna-red-light-recovery-suite-range-and-restore-archway-north-london.jpg', alt: 'Range and Restore therapist opening the Vidalux two person hybrid infrared sauna, heaters glowing red, in the Recovery Suite at Archway, North London', caption: 'Range and Restore — Infrared Hybrid Sauna' },
  { file: 'IMG_1828.jpeg', alt: 'Sports massage treatment session at Range and Restore clinic, Archway, North London', caption: 'Range and Restore — treatment session' },
  { file: 'IMG_1831.jpeg', alt: 'Professional massage therapy room at Range and Restore, 130 Junction Road, Archway', caption: 'Range and Restore — clinic interior' },
  { file: 'IMG_1552.jpeg', alt: 'Deep tissue massage being performed at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — deep tissue massage' },
  { file: 'IMG_1311.jpeg', alt: 'Sports massage therapist Carlos Bonvicine at work in Archway clinic', caption: 'Range and Restore — Carlos at work' },
  { file: 'IMG_1309.jpeg', alt: 'Assessment-led soft tissue treatment at Range and Restore, Archway London', caption: 'Range and Restore — soft tissue treatment' },
  { file: 'IMG_1275.jpeg', alt: 'Remedial massage therapy session at Range and Restore Sports Massage clinic', caption: 'Range and Restore — remedial massage' },
  { file: 'IMG_1262.jpeg', alt: 'Professional treatment room and massage table at Range and Restore, Archway', caption: 'Range and Restore — treatment room' },
  { file: 'IMG_1132.jpeg', alt: 'Sports massage for injury recovery at Range and Restore, North London', caption: 'Range and Restore — injury recovery massage' },
  { file: 'IMG_1112.jpeg', alt: 'Hands-on sports massage therapy at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — hands-on therapy' },
  { file: 'IMG_1393.JPG', alt: 'Clinical massage environment at Range and Restore, 130 Junction Road, Archway N19', caption: 'Range and Restore — clinical setting' },
  { file: 'IMG_1387.JPG', alt: 'Full-body massage treatment at Range and Restore Sports Massage clinic, Archway', caption: 'Range and Restore — full-body treatment' },
  { file: 'IMG_1382.JPG', alt: 'Sports and deep tissue massage at Range and Restore, Archway, London N19', caption: 'Range and Restore — sports massage' },
  { file: 'IMG_1381.JPG', alt: 'Relaxation massage session at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — relaxation session' },
  { file: 'IMG_1380.JPG', alt: 'Post-event sports massage recovery at Range and Restore, North London', caption: 'Range and Restore — recovery massage' },
  { file: 'IMG_1371.JPG', alt: 'Personalised massage therapy at Range and Restore clinic, Archway London', caption: 'Range and Restore — personalised therapy' },
  { file: 'FullSizeRender.jpeg', alt: 'Range and Restore Sports Massage clinic at 130 Junction Road, Archway, London N19 5LB', caption: 'Range and Restore — Archway clinic' },
  { file: 'FullSizeRender (1).jpeg', alt: 'Inside Range and Restore Sports Massage, Archway — professional clinic environment', caption: 'Range and Restore — clinic environment' },
  { file: 'FullSizeRender (2).jpeg', alt: 'Range and Restore Sports Massage treatment area, Archway, North London', caption: 'Range and Restore — treatment area' },
  { file: 'WhatsApp Image 2026-05-17 at 18.09.48.jpeg', alt: 'Treatment room with massage couch and certifications at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — inside the clinic' },
  { file: 'incollage_save.jpg', alt: 'Range and Restore Sports Massage — therapy sessions at Archway clinic', caption: 'Range and Restore — therapy sessions' },
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
    .map((f, i) => ({
      file: f,
      alt: `Range and Restore Sports Massage clinic photo ${i + 1} — Archway, North London`,
      caption: 'Range and Restore — Archway clinic',
    }))
  return [...curated, ...extras].map(({ file, alt, caption }) => ({
    src: `/Gallery/${file}`,
    alt,
    caption,
  }))
}

const breadcrumbs = buildBreadcrumbs([{ name: 'Gallery', path: '/gallery' }])

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Range and Restore Sports Massage Gallery',
  description: 'Real clinic photos from Range and Restore in Archway, North London — treatment sessions, the professional clinic environment, and the hands-on approach.',
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
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Gallery</h1>
          <p className="mt-3 text-xl text-page-muted">Inside Range and Restore Sports Massage, Archway</p>
          <p className="mt-4 text-page-muted opacity-80 max-w-2xl">
            Real clinic photos from Range and Restore in Archway, North London — treatment sessions, the professional clinic environment, and the hands-on, assessment-led approach our therapists bring to every appointment.
          </p>
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <GalleryClient images={images} />

        {/* ── CTA ──────────────────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-page flex flex-col sm:flex-row gap-4 items-start">
          <BookingButton label="Book Your Session" />
          <Link
            href="/team"
            className="btn bg-white/60 backdrop-blur-sm border border-[#0f767a]/50 text-[#1a2330] hover:bg-white hover:border-[#0f767a] transition-all text-sm shadow-sm"
          >
            Meet the Team →
          </Link>
        </div>
      </div>
    </>
  )
}
