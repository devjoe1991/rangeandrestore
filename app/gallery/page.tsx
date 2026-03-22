import type { Metadata } from 'next'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'
import { GalleryClient } from './GalleryClient'
import type { GalleryImage } from './GalleryClient'

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Gallery – Range and Restore Sports Massage Archway',
    description: 'See inside Range and Restore Sports Massage in Archway, North London. Real clinic photos, treatment sessions and the professional environment behind every appointment with Carlos Bonvicine.',
    path: '/gallery',
  }),
  robots: { index: false },
}

// ─── Photos will be populated via Google Places API once API key is added ─────
// Pass an empty array for now — the GalleryClient will show placeholder slots.
const images: GalleryImage[] = []

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="bg-[#eef2eb] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3d1f]">Gallery</h1>
          <p className="mt-3 text-xl text-[#2c3d1f]/80">Inside Range and Restore Sports Massage, Archway</p>
          <p className="mt-4 text-[#2c3d1f]/65 max-w-2xl">
            Real clinic photos from Range and Restore in Archway, North London — treatment sessions, the professional clinic environment, and the hands-on, assessment-led approach Carlos brings to every appointment.
          </p>
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <GalleryClient images={images} />

        {/* ── CTA ──────────────────────────────────────────────── */}
        <div className="mt-12 pt-10 border-t border-[#dde5d0] flex flex-col sm:flex-row gap-4 items-start">
          <BookingButton label="Book Your Session" />
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-[#4a7a28] text-[#4a7a28] font-semibold px-6 py-3 hover:bg-[#4a7a28] hover:text-white transition-colors min-h-[44px] text-sm"
          >
            Meet Carlos →
          </Link>
        </div>
      </div>
    </>
  )
}
