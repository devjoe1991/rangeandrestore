import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Services',
  description: 'Expert sports massage, deep tissue therapy, MLD and relaxation massage in Archway, North London. View all services and book your session with Carlos Bonvicine.',
  path: '/services',
})

const services = [
  {
    title: 'Sports, Deep Tissue & Soft Tissue Remedial Massage',
    href: '/services/sports-deep-tissue-massage',
    bookingHref: BOOKING_URLS.sportsDeepTissue,
    description: 'Targeted treatment for muscle tightness, runner\'s knee, shoulder tension, calf tightness, injury recovery, and performance support.',
    duration: '30, 60 or 90 minutes',
  },
  {
    title: 'Advanced Clinical Massage & Soft Tissue Remedial Therapy',
    href: '/services/advanced-clinical-massage',
    bookingHref: BOOKING_URLS.advancedClinical,
    description: 'Expert clinical massage for sciatica, chronic neck pain, tension headaches, RSI, and complex postural conditions.',
    duration: '30, 60 or 90 minutes',
  },
  {
    title: 'Back & Neck Pain MOT',
    href: '/services/back-neck-pain-mot',
    bookingHref: BOOKING_URLS.backNeckMot,
    description: 'Focused assessment and treatment for persistent lower back pain, desk-related neck pain, postural issues, and spinal stiffness.',
    duration: '30, 60 or 90 minutes',
  },
  {
    title: 'Relaxation Restorative Massage',
    href: '/services/relaxation-restorative-massage',
    bookingHref: BOOKING_URLS.relaxation,
    description: 'Gentle, calming treatment designed to reduce stress, ease mild tension, and restore your sense of balance.',
    duration: '30, 60 or 90 minutes',
  },
  {
    title: 'Manual Lymphatic Drainage (MLD)',
    href: '/services/manual-lymphatic-drainage',
    bookingHref: BOOKING_URLS.mld,
    description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling, and immune support. Gentle and non-invasive.',
    duration: '30, 60 or 90 minutes',
  },
  {
    title: '2-Hour Pain Relief Massage',
    href: '/services/2-hour-pain-relief-massage',
    bookingHref: BOOKING_URLS.twoHourRelief,
    description: 'An extended, comprehensive session for complex or long-standing conditions, multiple problem areas, and deeper recovery work.',
    duration: '2 hours',
  },
  {
    title: 'Massage Bundle Offers',
    href: '/services/massage-bundles',
    bookingHref: BOOKING_URLS.general,
    description: 'Save with 5 or 10 session bundles for 60 or 90 minute treatments. Starting from £350 for 5 × 60 min sessions.',
    duration: 'From £350',
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="relative bg-[#334311] py-16 lg:py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=75"
          alt="Sports massage treatment in progress"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-xl text-[#c6e28a]/90 max-w-2xl">
            Personalised, assessment-led treatment for pain relief, mobility, injury recovery, and long-term results.
          </p>
          <p className="mt-3 text-[#c6e28a]/70 max-w-2xl">
            Back pain, running injuries, runner&apos;s knee, shoulder problems, sciatica, neck pain. If any of these sound familiar, the right treatment is here.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div key={service.href} className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#334311] mb-2">
                    <Link href={service.href} className="hover:text-[#618020] transition-colors">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-[#618020] font-medium text-sm mb-3">{service.duration}</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-3 lg:items-end flex-shrink-0">
                  <a
                    href={service.bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#618020] text-white font-semibold px-6 py-3 hover:bg-[#334311] transition-colors min-h-[44px] text-sm"
                  >
                    Book Now
                  </a>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center rounded-md border border-[#618020] text-[#618020] font-semibold px-6 py-3 hover:bg-[#618020] hover:text-white transition-colors min-h-[44px] text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
