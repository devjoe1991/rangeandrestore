import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: '2-Hour Pain Relief Massage – Archway London',
  description: 'Extended 2-hour assessment-led massage for chronic pain, multiple problem areas, and comprehensive recovery in Archway, North London. Book with Carlos Bonvicine.',
  path: '/services/2-hour-pain-relief-massage',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: '2-Hour Pain Relief Massage', path: '/services/2-hour-pain-relief-massage' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '2-Hour Pain Relief Massage',
  description: 'Extended assessment-led treatment covering multiple problem areas and full-body recovery work in Archway, North London.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'Archway', postalCode: 'N19 5LB' },
  },
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
  ],
  serviceType: 'Pain Relief Massage',
}

export default function TwoHourPainReliefPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Extended Treatment · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            2-Hour Pain Relief Massage
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Deep, comprehensive treatment for lasting relief
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.twoHourRelief} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">The 2-Hour Pain Relief Massage is designed for:</p>
            <ul className="space-y-2">
              {[
                'Clients with chronic pain or long-standing muscular tension',
                'People with postural strain from desk work or repetitive physical demands',
                'Those with restricted range of motion, stiffness, or persistent tightness',
                'Active individuals needing deeper recovery support or injury management',
                'Anyone wanting a full-body reset and a more thorough corrective session',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Session length</h2>
            <div className="bg-page-sage rounded-xl p-6">
              <p className="font-bold text-page text-xl mb-2">2 Hours – £170</p>
              <p className="text-page-muted">Extended assessment-led treatment covering multiple problem areas and full-body recovery work. This session provides the time needed to properly address complex or long-standing conditions that cannot be fully resolved in a standard 60 or 90 minute appointment.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Reduced pain and muscular tension with improved comfort',
                'Increased mobility and range of motion',
                'Improved posture and reduced compensatory strain patterns',
                'Better movement efficiency, strength, and function',
                'More complete recovery support and longer-lasting results than a standard session',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What techniques are used?</h2>
            <p className="text-page-muted mb-3">This extended session draws on a full range of advanced techniques including:</p>
            <ul className="space-y-2">
              {[
                'Trigger Point Therapy for targeted tension and referred pain patterns',
                'Myofascial Release to improve tissue glide and reduce restriction',
                'Muscle Energy Technique (MET) and assisted stretching to restore movement',
                'Soft Tissue Release (STR) and deep tissue therapy for persistent tightness',
                'Advanced sports massage techniques to support recovery and performance',
                'Joint mobilisation and corrective mobility work where appropriate',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your 2-hour pain relief session</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              When you need more than a standard session to address multiple issues or deeply restore your body. Assessment-led, comprehensive care in Archway today.
            </p>
            <BookingButton href={BOOKING_URLS.twoHourRelief} label="Book 2-Hour Session" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Advanced Clinical Massage &amp; Soft Tissue Remedial Therapy
              </Link>
              <Link href="/services/massage-bundles" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Massage Bundle Offers – Save with Multi-Session Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
