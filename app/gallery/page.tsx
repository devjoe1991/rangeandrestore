import type { Metadata } from 'next'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Clinic Gallery – Archway London',
  description: 'Explore Range and Restore Sports Massage through real clinic photos, treatment moments, and the professional environment in Archway, North London.',
  path: '/gallery',
})

export default function GalleryPage() {
  return (
    <>
      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311]">Gallery</h1>
          <p className="mt-4 text-xl text-[#334311]/80">Inside Range and Restore Sports Massage</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Explore Range and Restore Sports Massage through real clinic photos, treatment moments, client progress, event highlights and community work in Archway, North London and beyond. This gallery gives you a closer look at the professional treatment environment, hands-on care and results-focused approach behind the clinic.
        </p>

        {/* Gallery grid - placeholder for actual images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { alt: 'Sports massage treatment room in Archway, North London', caption: 'The treatment room at Range and Restore, 130 Junction Road, Archway' },
            { alt: 'Adjustable electric treatment couch in sports massage clinic in Archway, North London', caption: 'Professional adjustable electric treatment couch' },
            { alt: 'Sports massage treatment room with electric couch in Archway, North London', caption: 'Clean, professional clinical environment' },
            { alt: 'Client receiving lower body sports massage treatment in Archway, North London', caption: 'Assessment-led sports massage in session' },
          ].map((image, index) => (
            <figure key={index} className="bg-[#eeeeee] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center p-8 text-gray-500">
                <p className="font-medium text-[#334311]">{image.caption}</p>
                <p className="text-sm mt-2 text-gray-400">{image.alt}</p>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
          <BookingButton label="Book Your Session" />
          <Link
            href="/faqs"
            className="inline-flex items-center justify-center rounded-md border border-[#618020] text-[#618020] font-semibold px-6 py-3 hover:bg-[#618020] hover:text-white transition-colors min-h-[44px]"
          >
            Frequently Asked Questions
          </Link>
        </div>
      </div>
    </>
  )
}
