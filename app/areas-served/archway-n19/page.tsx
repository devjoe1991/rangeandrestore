import type { Metadata } from 'next'
import Link from 'next/link'
import { AreaVisit } from '../_components/AreaVisit'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Archway N19 | Short Walk from the Tube',
  description: 'Sports and clinical massage in Archway N19. 130 Junction Road — a short walk from Archway and Tufnell Park stations. A team of BTEC L5 qualified therapists. Book online.',
  path: '/areas-served/archway-n19',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Archway N19', path: '/areas-served/archway-n19' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/archway-n19#business`,
  name: 'Range and Restore Sports Massage — Archway N19',
  description: 'Assessment-led sports massage, deep tissue therapy and clinical massage in Archway, London N19. A short walk from Archway and Tufnell Park stations.',
  url: `${BASE_URL}/areas-served/archway-n19`,
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
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Upper Holloway, London N19' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Range and Restore from Archway tube station?',
      acceptedAnswer: { '@type': 'Answer', text: 'From Archway station, head south along Junction Road, the road towards Tufnell Park. The clinic is at number 130, inside the Reliable Scan building. It is a short walk from both Archway and Tufnell Park stations.' },
    },
    {
      '@type': 'Question',
      name: 'Is there parking near the clinic in Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Limited pay-and-display street parking is available on Junction Road and the surrounding side streets (Macdonald Road, St John\'s Way). Controlled parking zone hours apply on weekdays. Most local clients walk, bus or bike to appointments.' },
    },
    {
      '@type': 'Question',
      name: 'What buses stop near 130 Junction Road, Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 134 runs along Junction Road past the clinic. Routes 4, 17, 41, 43, 143, 210 and 263 stop at Archway station, a short walk away. Archway station itself is on the Northern Line.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat staff from the Whittington Hospital?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — several regular clients are nurses, doctors and allied health staff from the Whittington, which is a short walk up the hill. Evening and Saturday slots work well for shift patterns.' },
    },
  ],
}

export default function ArchwayN19Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Archway · London N19</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage in Archway (N19)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            130 Junction Road — a short walk from Archway and Tufnell Park stations. Assessment-led sports, deep tissue and clinical massage for residents and workers in N19.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is the Archway local clinic for sports and remedial massage. The studio is at 130 Junction Road — between Archway tube and Tufnell Park — and is staffed by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>, a certified MLD practitioner.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N19</h2>
          <p>
            Most clients walking through the door from the N19 postcode fall into one of four groups. Families and long-term Archway residents who want consistent, local care without travelling across town. Whittington Hospital staff — nurses, junior doctors and physios — who need treatment that fits around shifts. Cyclists and runners using the Parkland Walk, Hampstead Heath and Highgate Wood, who book regular maintenance sessions to stay injury-free. And local desk workers in flexible-working arrangements who want to sort recurring back, neck or shoulder pain that started during the WFH years.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Walking directions from Archway tube</h2>
          <p>
            From Archway station, head south along Junction Road, the road that runs towards Tufnell Park. The clinic is at number 130, inside the Reliable Scan building &mdash; look for the Range and Restore sign in the window (there&apos;s a photo at the bottom of this page). The 134 bus also runs along Junction Road past the door.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What treatments people in Archway book most</h2>
          <p>
            Across the N19 postcode, the most-requested services are <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> (30 minutes £50, 60 minutes £75, 90 minutes £110) for cyclists, runners and gym-goers; the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back & Neck Pain MOT</Link> (from £75) for desk workers and hospital staff with postural pain; and <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> (from £75) for chronic conditions that haven&apos;t responded to general massage elsewhere. Every session begins with an assessment so the treatment is matched to your presentation that day, not delivered as a generic protocol.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Wider area: Upper Holloway and beyond</h2>
          <p>
            The N19 postcode also covers <Link href={ROUTES.areasServed.upperHollowayN19} className="link-inline">Upper Holloway</Link>, the streets running down towards Tufnell Park, and parts of the Whittington Park area. If you live further out, the clinic is also a short trip from <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link>, <Link href={ROUTES.areasServed.hollowayN7} className="link-inline">Holloway</Link>, <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link> and <Link href={ROUTES.areasServed.kentishTownNw5} className="link-inline">Kentish Town</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 – 20:00</li>
            <li>Saturday and Sunday: 09:00 – 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to Range and Restore from Archway tube station?</h3>
              <p>From Archway station, head south along Junction Road, the road towards Tufnell Park. The clinic is at number 130, inside the Reliable Scan building. It is a short walk from both Archway and Tufnell Park stations.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is there parking near the clinic in Archway?</h3>
              <p>Limited pay-and-display street parking is available on Junction Road and the surrounding side streets (Macdonald Road, St John&apos;s Way). Controlled parking zone hours apply on weekdays. Most local clients walk, bus or bike to appointments.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What buses stop near 130 Junction Road, Archway?</h3>
              <p>The 134 runs along Junction Road past the clinic. Routes 4, 17, 41, 43, 143, 210 and 263 stop at Archway station, a short walk away. Archway station itself is on the Northern Line.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat staff from the Whittington Hospital?</h3>
              <p>Yes — several regular clients are nurses, doctors and allied health staff from the Whittington, which is a short walk up the hill. Evening and Saturday slots work well for shift patterns.</p>
            </div>
          </div>
        </div>

        <AreaVisit
          heading="Book your session in Archway"
          text="Same-week slots available. 130 Junction Road, Archway, London N19 5LB — a short walk from Archway and Tufnell Park stations."
        />
      </div>
    </>
  )
}
