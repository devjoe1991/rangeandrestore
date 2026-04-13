import type { Metadata } from 'next'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import Link from 'next/link'
import { GalleryClient } from './GalleryClient'
import type { GalleryImage } from './GalleryClient'

export const metadata: Metadata = buildMetadata({
  title: 'Gallery – Range and Restore Sports Massage Archway',
  description: 'See inside Range and Restore Sports Massage in Archway, North London. Real clinic photos, treatment sessions and the professional environment behind every appointment with Carlos Bonvicine.',
  path: '/gallery',
})

export const revalidate = 3600 // refresh photos every hour

const LOCAL_GALLERY_IMAGES: GalleryImage[] = [
  { src: '/Gallery/IMG_1828.jpeg', alt: 'Sports massage treatment session at Range and Restore clinic, Archway, North London', caption: 'Range and Restore — treatment session' },
  { src: '/Gallery/IMG_1831.jpeg', alt: 'Professional massage therapy room at Range and Restore, 130 Junction Road, Archway', caption: 'Range and Restore — clinic interior' },
  { src: '/Gallery/IMG_1552.jpeg', alt: 'Deep tissue massage being performed at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — deep tissue massage' },
  { src: '/Gallery/IMG_1311.jpeg', alt: 'Sports massage therapist Carlos Bonvicine at work in Archway clinic', caption: 'Range and Restore — Carlos at work' },
  { src: '/Gallery/IMG_1309.jpeg', alt: 'Assessment-led soft tissue treatment at Range and Restore, Archway London', caption: 'Range and Restore — soft tissue treatment' },
  { src: '/Gallery/IMG_1275.jpeg', alt: 'Remedial massage therapy session at Range and Restore Sports Massage clinic', caption: 'Range and Restore — remedial massage' },
  { src: '/Gallery/IMG_1262.jpeg', alt: 'Professional treatment room and massage table at Range and Restore, Archway', caption: 'Range and Restore — treatment room' },
  { src: '/Gallery/IMG_1132.jpeg', alt: 'Sports massage for injury recovery at Range and Restore, North London', caption: 'Range and Restore — injury recovery massage' },
  { src: '/Gallery/IMG_1112.jpeg', alt: 'Hands-on sports massage therapy at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — hands-on therapy' },
  { src: '/Gallery/IMG_1393.JPG', alt: 'Clinical massage environment at Range and Restore, 130 Junction Road, Archway N19', caption: 'Range and Restore — clinical setting' },
  { src: '/Gallery/IMG_1387.JPG', alt: 'Full-body massage treatment at Range and Restore Sports Massage clinic, Archway', caption: 'Range and Restore — full-body treatment' },
  { src: '/Gallery/IMG_1382.JPG', alt: 'Sports and deep tissue massage at Range and Restore, Archway, London N19', caption: 'Range and Restore — sports massage' },
  { src: '/Gallery/IMG_1381.JPG', alt: 'Relaxation massage session at Range and Restore Sports Massage, Archway', caption: 'Range and Restore — relaxation session' },
  { src: '/Gallery/IMG_1380.JPG', alt: 'Post-event sports massage recovery at Range and Restore, North London', caption: 'Range and Restore — recovery massage' },
  { src: '/Gallery/IMG_1371.JPG', alt: 'Personalised massage therapy at Range and Restore clinic, Archway London', caption: 'Range and Restore — personalised therapy' },
  { src: '/Gallery/FullSizeRender.jpeg', alt: 'Range and Restore Sports Massage clinic at 130 Junction Road, Archway, London N19 5LB', caption: 'Range and Restore — Archway clinic' },
  { src: '/Gallery/FullSizeRender (1).jpeg', alt: 'Inside Range and Restore Sports Massage, Archway — professional clinic environment', caption: 'Range and Restore — clinic environment' },
  { src: '/Gallery/FullSizeRender (2).jpeg', alt: 'Range and Restore Sports Massage treatment area, Archway, North London', caption: 'Range and Restore — treatment area' },
  { src: '/Gallery/incollage_save.jpg', alt: 'Range and Restore Sports Massage — therapy sessions at Archway clinic', caption: 'Range and Restore — therapy sessions' },
]

async function getPhotos(): Promise<GalleryImage[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/photos`, { next: { revalidate: 3600 } })
    const data = await res.json()
    // Filter out photo index 2 (photo 3), then append Google photos after local ones
    const googlePhotos: GalleryImage[] = (data.photos ?? [])
      .filter((_: { src: string }, i: number) => i !== 2)
      .map((p: { src: string }, i: number) => ({
        src: p.src,
        alt: `Range and Restore Sports Massage clinic photo ${i + 1} — Archway, North London`,
        caption: `Range and Restore — photo ${i + 1}`,
      }))
    return [...LOCAL_GALLERY_IMAGES, ...googlePhotos]
  } catch {
    return LOCAL_GALLERY_IMAGES
  }
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

export default async function GalleryPage() {
  const images = await getPhotos()

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
            Real clinic photos from Range and Restore in Archway, North London — treatment sessions, the professional clinic environment, and the hands-on, assessment-led approach Carlos brings to every appointment.
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
            href="/about"
            className="btn bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all text-sm shadow-sm"
          >
            Meet Carlos →
          </Link>
        </div>
      </div>
    </>
  )
}
