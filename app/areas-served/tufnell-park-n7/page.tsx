import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Tufnell Park N7 | 10-min Walk',
  description: 'Sports and cycling-recovery massage for Tufnell Park (N7). Clinic 10 minutes from Tufnell Park tube. BTEC L5 therapist. Book online — same-week slots.',
  path: '/areas-served/tufnell-park-n7',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Tufnell Park N7', path: '/areas-served/tufnell-park-n7' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/tufnell-park-n7#business`,
  name: 'Range and Restore Sports Massage — serving Tufnell Park N7',
  description: 'Sports and clinical massage in Archway for residents of Tufnell Park, N7. Cycling and running recovery, deep tissue work and chronic pain treatment.',
  url: `${BASE_URL}/areas-served/tufnell-park-n7`,
  telephone: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5648, longitude: -0.1368 },
  areaServed: [
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Dartmouth Park, London NW5' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Range and Restore from Tufnell Park tube station?',
      acceptedAnswer: { '@type': 'Answer', text: 'From Tufnell Park station (Northern Line), head north up Tufnell Park Road, then turn right onto Junction Road. The clinic is at 130 Junction Road on the right. It is a flat 10-minute walk, or a 3-minute ride on routes 4 or 134 towards Archway.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat cyclists from the Tufnell Park area?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — cyclists are one of the largest client groups from N7. The Heath and the C50 cycle route make Tufnell Park a hub for road and commuter cycling, and sports massage is well suited to managing IT band tightness, hip flexor pain, lower back stiffness and cycling-related knee issues. See our cyclist recovery guide for the full picture.' },
    },
    {
      '@type': 'Question',
      name: 'Is the clinic walkable from Dartmouth Park and Tufnell Park Road?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most addresses on Tufnell Park Road, Lady Margaret Road, Anson Road and the surrounding Dartmouth Park streets are within a 10-15 minute walk. The route is flat to gently uphill on the way back.' },
    },
    {
      '@type': 'Question',
      name: 'What’s the best massage for cycling recovery?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 60- or 90-minute sports and deep tissue session is the standard recommendation. The 90-minute slot is preferred for high-mileage weeks or post-sportive recovery, as it gives time to work through the whole posterior chain (calves, hamstrings, glutes, lower back) and the hip flexors and quads.' },
    },
  ],
}

export default function TufnellParkN7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Tufnell Park · London N7</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Tufnell Park (N7)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            10-minute walk from Tufnell Park tube. Cycling recovery, runner&apos;s maintenance and clinical massage for N7 residents at our Archway clinic.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is the closest specialist sports massage clinic to Tufnell Park. We&apos;re at 130 Junction Road, a 10-minute walk north from Tufnell Park station and a few minutes&apos; ride on the 4 or 134 bus. Sessions are led by <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium">Carlos Bonvicine</Link>, a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why Tufnell Park clients book sports massage</h2>
          <p>
            Tufnell Park sits at the intersection of two cycling worlds — the road cyclists heading up to Highgate and out to Hampstead Heath, and the commuter cyclists riding the C50 corridor into the City. Add to that the runners using the Heath, Waterlow Park and the Parkland Walk, and Tufnell Park residents are some of the most active in north London. That activity comes with a predictable set of soft tissue issues: IT band tightness, hip flexor pain, cyclist&apos;s lower back, plantar issues in runners and chronic shoulder tightness in commuter cyclists who spend the working day at a desk.
          </p>
          <p>
            The other group we see regularly from N7 are young professionals working hybrid schedules. Two or three days of desk-bound posture, two days of higher activity (gym, climbing, running) — a pattern that puts unusual stress on the neck, shoulders and lower back, and which responds well to a structured course of <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link> alongside the <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium">Back & Neck Pain MOT</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Walking and transport from Tufnell Park</h2>
          <p>
            From Tufnell Park tube station (Northern Line), head north up Tufnell Park Road and turn right onto Junction Road at the junction. The clinic is on the right at number 130. It&apos;s a flat 10-minute walk — easier than the route up to Hampstead Heath. If you prefer to bus, routes 4 and 134 go straight up Junction Road towards Archway and stop within a minute&apos;s walk of the door. By bike, the run up Junction Road is short and well-served by bike racks at the clinic end.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by N7 clients</h2>
          <p>
            For cyclists, the standard recommendation is a 60- or 90-minute <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue session</Link> covering the posterior chain, hip flexors and quads. Our <Link href="/blog/sports-massage-cycling-recovery-archway" className="text-[#2ab4b8] hover:text-page font-medium">cycling recovery guide</Link> covers this in detail. Runners typically book around long runs and races, often combining sports massage with the <Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] hover:text-page font-medium">infrared sauna</Link> or <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium">Normatec compression boots</Link> in the Recovery Suite. For postural pain from desk work, the Back & Neck Pain MOT is usually the right starting point.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Tufnell Park, Dartmouth Park and the wider catchment</h2>
          <p>
            This page is the home for clients across Tufnell Park itself, the Dartmouth Park streets (which straddle N7 and NW5), and the residential roads running off Fortess Road. If you&apos;re further north, we also serve <Link href="/areas-served" className="text-[#2ab4b8] hover:text-page font-medium">Kentish Town, Gospel Oak and Hampstead</Link>; further east the clinic catches <Link href="/areas-served/archway-n19" className="text-[#2ab4b8] hover:text-page font-medium">Archway</Link> and Upper Holloway.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 – 20:00</li>
            <li>Saturday and Sunday: 09:00 – 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to Range and Restore from Tufnell Park tube station?</h3>
              <p>From Tufnell Park station (Northern Line), head north up Tufnell Park Road, then turn right onto Junction Road. The clinic is at 130 Junction Road on the right. It is a flat 10-minute walk, or a 3-minute ride on routes 4 or 134 towards Archway.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat cyclists from the Tufnell Park area?</h3>
              <p>Yes — cyclists are one of the largest client groups from N7. Sports massage suits cycling-related IT band tightness, hip flexor pain, lower back stiffness and knee issues. See our cycling recovery guide for the full picture.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is the clinic walkable from Dartmouth Park and Tufnell Park Road?</h3>
              <p>Yes. Most addresses on Tufnell Park Road, Lady Margaret Road, Anson Road and the surrounding Dartmouth Park streets are within a 10-15 minute walk. The route is flat to gently uphill on the way back.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What&apos;s the best massage for cycling recovery?</h3>
              <p>A 60- or 90-minute sports and deep tissue session is the standard recommendation. The 90-minute slot is preferred for high-mileage weeks or post-sportive recovery.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session from Tufnell Park</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB — 10 minutes from Tufnell Park.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
