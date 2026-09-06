import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Upper Holloway N19 | On Your Doorstep',
  description: 'Sports, deep tissue and clinical massage in Upper Holloway (N19) — the same postcode as the clinic. Walking distance on Junction Road. Book online.',
  path: '/areas-served/upper-holloway-n19',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Upper Holloway N19', path: '/areas-served/upper-holloway-n19' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/upper-holloway-n19#business`,
  name: 'Range and Restore Sports Massage — Upper Holloway N19',
  description: 'Local sports, deep tissue and clinical massage in Upper Holloway, London N19 — the same postcode as the clinic, walking distance on Junction Road.',
  url: `${BASE_URL}/areas-served/upper-holloway-n19`,
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
    { '@type': 'Place', name: 'Upper Holloway, London N19' },
    { '@type': 'Place', name: 'Archway, London N19' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How close is the clinic to Upper Holloway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Very close — the clinic is in the same N19 postcode. 130 Junction Road runs through the heart of Upper Holloway, so for most local addresses it is a short, flat walk. Upper Holloway Overground station is a few minutes away, and every Junction Road and Holloway Road bus stops nearby.' },
    },
    {
      '@type': 'Question',
      name: 'Which station is nearest for Upper Holloway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Upper Holloway station on the Overground (Gospel Oak to Barking line) is the closest, just off Holloway Road. Archway on the Northern Line is also a short walk. Both put the clinic within a few minutes.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat Whittington Hospital staff?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the Whittington is a short walk up the hill, and several regular clients are nurses, doctors and allied health staff there. Early, evening and weekend slots work well around shift patterns.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book ahead, or can I walk in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Booking ahead is best, as appointments are one-to-one and slots fill up — but because we are open seven days a week with same-week availability, local Upper Holloway clients can often get seen quickly. Book online or call to check the next slot.' },
    },
  ],
}

export default function UpperHollowayN19Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Upper Holloway · London N19</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage in Upper Holloway (N19)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Your local clinic &mdash; the same N19 postcode, right on Junction Road. Sports, deep tissue and clinical massage on your doorstep in Upper Holloway.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            If you live in Upper Holloway, Range and Restore is quite literally your local sports massage clinic &mdash; same postcode, same road. We&apos;re at 130 Junction Road, which runs through the middle of N19, so for most Upper Holloway addresses it&apos;s a short walk to the door. Treatment is delivered by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>, a certified MLD practitioner.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N19</h2>
          <p>
            Upper Holloway is home turf, and the client mix reflects that. There are long-term local residents and families who value having proper clinical massage within walking distance. There are Whittington Hospital staff &mdash; nurses, junior doctors and physios &mdash; who need treatment that fits around shifts, just up the hill. And there are the runners and cyclists using the streets around Whittington Park and the routes up towards Highgate and the Parkland Walk, who book regular maintenance to stay injury-free.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Upper Holloway</h2>
          <p>
            For most of Upper Holloway, walking is the simplest option &mdash; Junction Road and the streets off it (St John&apos;s Way, Sunnyside Road, the Whittington Park area) are all within a short, flat walk of the clinic. Upper Holloway Overground station on the Gospel Oak to Barking line is a few minutes away, and Archway on the Northern Line is close too. Every bus along Junction Road and Holloway Road stops nearby.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Upper Holloway clients</h2>
          <p>
            Being so local, Upper Holloway clients book across the board &mdash; <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> for training and gym niggles, the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link> for desk-related pain, and <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> for stubborn, long-standing conditions. Local clients also make good use of the <Link href={ROUTES.recoverySuite.index} className="link-inline">Recovery Suite</Link> and the lower-cost <Link href={ROUTES.services.communityTuesdayClinic} className="link-inline">Community Tuesday Clinic</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Upper Holloway and the wider N19</h2>
          <p>
            This page covers Upper Holloway and the N19 streets around Junction Road. It sits right alongside <Link href={ROUTES.areasServed.archwayN19} className="link-inline">Archway</Link>, and a short trip from <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link>, <Link href={ROUTES.areasServed.hollowayN7} className="link-inline">Holloway</Link> and <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How close is the clinic to Upper Holloway?</h3>
              <p>Very close &mdash; the clinic is in the same N19 postcode. 130 Junction Road runs through the heart of Upper Holloway, so for most local addresses it is a short, flat walk. Upper Holloway Overground station is a few minutes away, and every Junction Road and Holloway Road bus stops nearby.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Which station is nearest for Upper Holloway?</h3>
              <p>Upper Holloway station on the Overground (Gospel Oak to Barking line) is the closest, just off Holloway Road. Archway on the Northern Line is also a short walk. Both put the clinic within a few minutes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat Whittington Hospital staff?</h3>
              <p>Yes &mdash; the Whittington is a short walk up the hill, and several regular clients are nurses, doctors and allied health staff there. Early, evening and weekend slots work well around shift patterns.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do I need to book ahead, or can I walk in?</h3>
              <p>Booking ahead is best, as appointments are one-to-one and slots fill up &mdash; but because we are open seven days a week with same-week availability, local Upper Holloway clients can often get seen quickly. Book online or call to check the next slot.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Book your local session in Upper Holloway</h2>
          <p className="text-brand-green font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; on your doorstep.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
