import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Services – Archway, London N19',
  description: 'Expert sports massage, deep tissue therapy, MLD and relaxation massage in Archway, North London. View all services and book your session with Carlos Bonvicine.',
  path: '/services',
})

const services = [
  {
    title: 'Sports, Deep Tissue & Soft Tissue Remedial Massage',
    href: '/services/sports-deep-tissue-massage',
    bookingHref: BOOKING_URLS.sportsDeepTissue,
    description: 'Targeted treatment for muscle tightness, runner\'s knee, shoulder tension, calf tightness, injury recovery, and performance support.',
    duration: '30 min – £50  ·  60 min – £75  ·  90 min – £110',
  },
  {
    title: 'Advanced Clinical Massage & Soft Tissue Remedial Therapy',
    href: '/services/advanced-clinical-massage',
    bookingHref: BOOKING_URLS.advancedClinical,
    description: 'Expert clinical massage for sciatica, chronic neck pain, tension headaches, RSI, and complex postural conditions.',
    duration: '30 min – £50  ·  60 min – £75  ·  90 min – £110',
  },
  {
    title: 'Back & Neck Pain MOT',
    href: '/services/back-neck-pain-mot',
    bookingHref: BOOKING_URLS.backNeckMot,
    description: 'Focused assessment and treatment for persistent lower back pain, desk-related neck pain, postural issues, and spinal stiffness.',
    duration: '30 min – £50  ·  60 min – £75  ·  90 min – £110',
  },
  {
    title: 'Relaxation Restorative Massage',
    href: '/services/relaxation-restorative-massage',
    bookingHref: BOOKING_URLS.relaxation,
    description: 'Gentle, calming treatment designed to reduce stress, ease mild tension, and restore your sense of balance.',
    duration: '30 min – £50  ·  60 min – £75  ·  90 min – £110',
  },
  {
    title: 'Manual Lymphatic Drainage (MLD)',
    href: '/services/manual-lymphatic-drainage',
    bookingHref: BOOKING_URLS.mld,
    description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling, and immune support. Gentle and non-invasive.',
    duration: '30 min – £50  ·  60 min – £75  ·  90 min – £110',
  },
  {
    title: '2-Hour Pain Relief Massage',
    href: '/services/2-hour-pain-relief-massage',
    bookingHref: BOOKING_URLS.twoHourRelief,
    description: 'An extended, comprehensive session for complex or long-standing conditions, multiple problem areas, and deeper recovery work.',
    duration: '2 hours – £170',
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
      <div className="relative bg-[#1a3d3a] py-16 lg:py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=75"
          alt="Sports massage treatment in progress"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Sports Massage Services in Archway, North London</h1>
          <p className="mt-4 text-xl text-[#d4ecea]/90 max-w-2xl">
            Personalised, assessment-led treatment for pain relief, mobility, injury recovery, and long-term results.
          </p>
          <p className="mt-3 text-[#d4ecea]/70 max-w-2xl">
            Back pain, running injuries, runner&apos;s knee, shoulder problems, sciatica, neck pain. If any of these sound familiar, the right treatment is here.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-6">
          {services.map((service) => (
            <div key={service.href} className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
              <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
              <div className="p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-page mb-2">
                    <Link href={service.href} className="hover:text-[#2ab4b8] transition-colors">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-[#2ab4b8] font-medium text-sm mb-3">{service.duration}</p>
                  <p className="text-page-muted">{service.description}</p>
                </div>
                <div className="flex flex-row lg:flex-col gap-3 lg:items-end flex-shrink-0">
                  <a
                    href={service.bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm px-6"
                  >
                    Book Now
                  </a>
                  <Link
                    href={service.href}
                    className="text-page text-sm font-bold hover:text-[#2ab4b8] transition-colors min-h-[44px] flex items-center justify-center underline underline-offset-2 px-4"
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
