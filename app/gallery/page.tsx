import type { Metadata } from 'next'
import Image from 'next/image'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
              alt: 'Sports massage therapist treating a client in a professional clinic',
              caption: 'Assessment-led sports massage in session',
            },
            {
              src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&q=80',
              alt: 'Soft tissue therapy treatment being performed on a client',
              caption: 'Soft tissue remedial therapy — targeted and effective',
            },
            {
              src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
              alt: 'Professional massage therapy treatment room',
              caption: 'Clean, calm treatment environment at Archway',
            },
            {
              src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
              alt: 'Therapist reviewing client posture and movement assessment',
              caption: 'Every session begins with a full assessment',
            },
            {
              src: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?w=1200&q=80',
              alt: 'Client relaxing during a therapeutic massage treatment',
              caption: 'Relaxation and restorative massage',
            },
            {
              src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&q=80',
              alt: 'Back massage and deep tissue therapy treatment',
              caption: 'Deep tissue and back pain treatment',
            },
          ].map((image, index) => (
            <figure key={index} className="rounded-xl overflow-hidden aspect-video relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </figcaption>
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
