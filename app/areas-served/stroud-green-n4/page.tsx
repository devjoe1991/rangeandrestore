import type { Metadata } from 'next'
import Link from 'next/link'
import { AreaVisit } from '../_components/AreaVisit'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Stroud Green N4 | Parkland Walk Runners',
  description: 'Sports, deep tissue and clinical massage for Stroud Green (N4). Runner and cyclist recovery, a short bus ride from the Archway clinic. Book online.',
  path: '/areas-served/stroud-green-n4',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Stroud Green N4', path: '/areas-served/stroud-green-n4' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/stroud-green-n4#business`,
  name: 'Range and Restore Sports Massage — serving Stroud Green N4',
  description: 'Sports, deep tissue and clinical massage in Archway for Stroud Green, London N4. Runner and cyclist recovery and injury treatment, a short bus ride away.',
  url: `${BASE_URL}/areas-served/stroud-green-n4`,
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
    { '@type': 'Place', name: 'Stroud Green, London N4' },
    { '@type': 'Place', name: 'Crouch Hill, London N4' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Stroud Green?',
      acceptedAnswer: { '@type': 'Answer', text: 'Stroud Green sits between Finsbury Park and Crouch End, so the easiest route is down to Finsbury Park and the 210 bus to Archway. Crouch Hill station on the Overground is also close. It is a short journey however you travel.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat runners from the Parkland Walk?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Parkland Walk runs right past Stroud Green from Finsbury Park up towards Highgate, and it is one of the most popular running routes in north London. Sports massage helps with the calf, hamstring, Achilles and knee loads that come with regular running.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat cyclists and commuters from N4?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Stroud Green is a cycling-friendly pocket with quiet residential streets and the traffic-free Parkland Walk nearby. Cyclists book for hip flexor tightness, lower back stiffness and neck and shoulder tension, especially when desk work is added on top.' },
    },
    {
      '@type': 'Question',
      name: 'Do you see young families and home-workers?',
      acceptedAnswer: { '@type': 'Answer', text: 'Often. Stroud Green has a big community of young families and people working from home, and desk-related neck, shoulder and lower back pain is a common reason to book — usually starting with the Back & Neck Pain MOT.' },
    },
  ],
}

export default function StroudGreenN4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Stroud Green · London N4</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Stroud Green (N4)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            A short bus ride from Archway. Runner and cyclist recovery, deep tissue and clinical massage for Stroud Green and Crouch Hill.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Stroud Green sits right on the Parkland Walk &mdash; the old railway line turned traffic-free green route &mdash; and many of the runners and cyclists we see from N4 train on it. The clinic is at 130 Junction Road, Archway, a short trip from anywhere in N4, and is staffed by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N4</h2>
          <p>
            Stroud Green punches above its weight for active residents. The Parkland Walk runs straight through, from Finsbury Park up towards Highgate, and it&apos;s one of the most-used running and cycling routes in this part of London &mdash; so runners and riders are the core of who we see from the area. Alongside them are the young families and home-workers who fill the streets around Stroud Green Road and Stapleton Hall Road, usually booking for the desk-and-buggy pattern of neck, shoulder and lower back tension.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Stroud Green</h2>
          <p>
            The simplest route is a short walk down to Finsbury Park for the 210 bus to Archway; the clinic is a short walk from there along Junction Road. Crouch Hill station on the Overground is close by too. By bike it&apos;s a quick ride over, and there are bike racks at the clinic end.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Stroud Green clients</h2>
          <p>
            Runners and cyclists book a 60- or 90-minute <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> (£75 or £110) for maintenance and recovery &mdash; our <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline">runners&apos; guide</Link> has the detail. After harder sessions, many add a private <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> session (from £19) or book the 90-minute <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Sports Massage + Normatec</Link> session (£110). For desk-related pain, the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link> (from £75) is the usual starting point.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Stroud Green and the wider catchment</h2>
          <p>
            This page covers Stroud Green, Crouch Hill and the streets off Stroud Green Road. It sits between <Link href={ROUTES.areasServed.finsburyParkN4} className="link-inline">Finsbury Park</Link> and <Link href={ROUTES.areasServed.crouchEndN8} className="link-inline">Crouch End</Link>, and links up the Parkland Walk to <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Stroud Green?</h3>
              <p>Stroud Green sits between Finsbury Park and Crouch End, so the easiest route is down to Finsbury Park and the 210 bus to Archway. Crouch Hill station on the Overground is also close. It is a short journey however you travel.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat runners from the Parkland Walk?</h3>
              <p>Yes. The Parkland Walk runs right past Stroud Green from Finsbury Park up towards Highgate, and it is one of the most popular running routes in north London. Sports massage helps with the calf, hamstring, Achilles and knee loads that come with regular running.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat cyclists and commuters from N4?</h3>
              <p>Yes. Stroud Green is a cycling-friendly pocket with quiet residential streets and the traffic-free Parkland Walk nearby. Cyclists book for hip flexor tightness, lower back stiffness and neck and shoulder tension, especially when desk work is added on top.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you see young families and home-workers?</h3>
              <p>Often. Stroud Green has a big community of young families and people working from home, and desk-related neck, shoulder and lower back pain is a common reason to book &mdash; usually starting with the Back &amp; Neck Pain MOT.</p>
            </div>
          </div>
        </div>

        <AreaVisit
          heading="Book your session from Stroud Green"
          text="Same-week slots available. 130 Junction Road, Archway, London N19 5LB — a short bus ride from Finsbury Park."
        />
      </div>
    </>
  )
}
