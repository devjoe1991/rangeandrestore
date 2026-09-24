import type { Metadata } from 'next'
import Link from 'next/link'
import { AreaVisit } from '../_components/AreaVisit'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Tufnell Park N7 | Short Walk from the Tube',
  description: 'Sports and cycling-recovery massage for Tufnell Park (N7). Clinic on Junction Road, a short walk from Tufnell Park tube. A team of BTEC L5 therapists. Book online — same-week slots.',
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Range and Restore from Tufnell Park tube station?',
      acceptedAnswer: { '@type': 'Answer', text: 'From Tufnell Park station (Northern Line), Junction Road runs north towards Archway, and the clinic is on it at number 130, inside the Reliable Scan building. It is a short walk from the station, or a quick ride on the 134 bus towards Archway.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat cyclists from the Tufnell Park area?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — cyclists are one of the largest client groups from N7. The Heath and the C50 cycle route make Tufnell Park a hub for road and commuter cycling, and sports massage is well suited to managing IT band tightness, hip flexor pain, lower back stiffness and cycling-related knee issues. See our cyclist recovery guide for the full picture.' },
    },
    {
      '@type': 'Question',
      name: 'Is the clinic walkable from Dartmouth Park and Tufnell Park Road?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tufnell Park Road, Lady Margaret Road, Anson Road and the surrounding Dartmouth Park streets are all within walking distance.' },
    },
    {
      '@type': 'Question',
      name: 'What’s the best massage for cycling recovery?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 60- or 90-minute sports and deep tissue session (£75 or £110) is the standard recommendation. The 90-minute slot is preferred for high-mileage weeks or post-sportive recovery, as it gives time to work through the whole posterior chain (calves, hamstrings, glutes, lower back) and the hip flexors and quads.' },
    },
  ],
}

export default function TufnellParkN7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Tufnell Park · London N7</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Tufnell Park (N7)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            A short walk up Junction Road from Tufnell Park tube. Cycling recovery, runner&apos;s maintenance and clinical massage for N7 residents at our Archway clinic.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is the closest specialist sports massage clinic to Tufnell Park. We&apos;re at 130 Junction Road, a short walk north from Tufnell Park station or a quick ride on the 134 bus. Treatment is delivered by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why Tufnell Park clients book sports massage</h2>
          <p>
            Tufnell Park sits at the intersection of two cycling worlds — the road cyclists heading up to Highgate and out to Hampstead Heath, and the commuter cyclists riding the C50 corridor into the City. Add to that the runners using the Heath, Waterlow Park and the Parkland Walk, and Tufnell Park residents are some of the most active in north London. That activity comes with a predictable set of soft tissue issues: IT band tightness, hip flexor pain, cyclist&apos;s lower back, plantar issues in runners and chronic shoulder tightness in commuter cyclists who spend the working day at a desk.
          </p>
          <p>
            The other group we see regularly from N7 are young professionals working hybrid schedules. Two or three days of desk-bound posture, two days of higher activity (gym, climbing, running) — a pattern that puts unusual stress on the neck, shoulders and lower back, and which responds well to a structured course of <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> alongside the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back & Neck Pain MOT</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Walking and transport from Tufnell Park</h2>
          <p>
            From Tufnell Park tube station (Northern Line), Junction Road runs north towards Archway, and the clinic is on it at number 130, inside the Reliable Scan building &mdash; a short walk from the station. If you&apos;d rather take the bus, the 134 runs up Junction Road towards Archway and stops near the door. By bike, the run up Junction Road is short, and there are public bike racks on Junction Road, right outside the clinic.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by N7 clients</h2>
          <p>
            For cyclists, the standard recommendation is a 60- or 90-minute <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue session</Link> (£75 or £110) covering the posterior chain, hip flexors and quads. Our <Link href={ROUTES.blog.sportsMassageCyclingRecoveryArchway} className="link-inline">cycling recovery guide</Link> covers this in detail. Runners typically book around long runs and races, often adding a private <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> session (from £19) or booking the 90-minute <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Sports Massage + Normatec</Link> session (£110) in the Recovery Suite. For postural pain from desk work, the Back & Neck Pain MOT (from £75) is usually the right starting point.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Tufnell Park, Dartmouth Park and the wider catchment</h2>
          <p>
            This page is the home for clients across Tufnell Park itself, the Dartmouth Park streets (which straddle N7 and NW5), and the residential roads running off Fortess Road. To the south, we also see clients from <Link href={ROUTES.areasServed.kentishTownNw5} className="link-inline">Kentish Town</Link>, Gospel Oak and Hampstead; to the north, the clinic serves <Link href={ROUTES.areasServed.archwayN19} className="link-inline">Archway</Link> and <Link href={ROUTES.areasServed.upperHollowayN19} className="link-inline">Upper Holloway</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
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
              <p>From Tufnell Park station (Northern Line), Junction Road runs north towards Archway, and the clinic is on it at number 130, inside the Reliable Scan building. It is a short walk from the station, or a quick ride on the 134 bus towards Archway.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat cyclists from the Tufnell Park area?</h3>
              <p>Yes — cyclists are one of the largest client groups from N7. Sports massage suits cycling-related IT band tightness, hip flexor pain, lower back stiffness and knee issues. See our cycling recovery guide for the full picture.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is the clinic walkable from Dartmouth Park and Tufnell Park Road?</h3>
              <p>Yes. Tufnell Park Road, Lady Margaret Road, Anson Road and the surrounding Dartmouth Park streets are all within walking distance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What&apos;s the best massage for cycling recovery?</h3>
              <p>A 60- or 90-minute sports and deep tissue session (£75 or £110) is the standard recommendation. The 90-minute slot is preferred for high-mileage weeks or post-sportive recovery.</p>
            </div>
          </div>
        </div>

        <AreaVisit
          heading="Book your session from Tufnell Park"
          text="Same-week slots available. 130 Junction Road, Archway, London N19 5LB — a short walk up Junction Road from Tufnell Park station."
        />
      </div>
    </>
  )
}
