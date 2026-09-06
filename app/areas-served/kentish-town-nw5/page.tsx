import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Kentish Town NW5 | Direct 134 Bus',
  description: 'Sports, deep tissue and clinical massage for Kentish Town (NW5). Direct 134 bus up Fortess Road to the Archway clinic. Heath & gym recovery. Book online.',
  path: '/areas-served/kentish-town-nw5',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Kentish Town NW5', path: '/areas-served/kentish-town-nw5' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/kentish-town-nw5#business`,
  name: 'Range and Restore Sports Massage — serving Kentish Town NW5',
  description: 'Sports, deep tissue and clinical massage in Archway for Kentish Town, London NW5. A direct 134 bus up Fortess Road — Heath runner and gym recovery.',
  url: `${BASE_URL}/areas-served/kentish-town-nw5`,
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
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
    { '@type': 'Place', name: 'Gospel Oak, London NW5' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Kentish Town?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 134 bus runs from Kentish Town up Fortess Road through Tufnell Park to Archway, dropping you a short walk from the clinic — usually around 15 minutes. From Kentish Town tube (Northern Line) it is a couple of stops to Archway. By bike, the ride up Fortess Road and Junction Road is short and direct.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat runners from Hampstead Heath and Gospel Oak?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kentish Town and Gospel Oak sit right by Hampstead Heath, and Heath runners are a big part of who we see from NW5. Trail and hill running loads the calves, Achilles, knees and ankles, and sports massage helps keep training on track — especially through marathon and race blocks.' },
    },
    {
      '@type': 'Question',
      name: 'Do you see gym-goers and people using Talacre?',
      acceptedAnswer: { '@type': 'Answer', text: 'Regularly. Kentish Town is well served for gyms and the Talacre sports centre, and gym-goers book sports and deep tissue massage for strength-training niggles — tight shoulders, hips, hamstrings and lower back.' },
    },
    {
      '@type': 'Question',
      name: 'What do most Kentish Town clients book?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most-booked options from NW5 are a 60- or 90-minute sports and deep tissue massage for runners and gym-goers, and the Back & Neck Pain MOT for desk-related pain. Every session begins with an assessment so the treatment fits how you present that day.' },
    },
  ],
}

export default function KentishTownNW5Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Kentish Town · London NW5</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Kentish Town (NW5)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            A direct bus up Fortess Road to Archway. Hampstead Heath runner and gym recovery, deep tissue and clinical massage for NW5.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Kentish Town connects straight to Archway via Fortess Road and Tufnell Park, which makes Range and Restore an easy trip for NW5. The clinic is at 130 Junction Road, and treatment is delivered by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>. With Hampstead Heath, Gospel Oak and a strong gym scene close by, NW5 is one of our most active neighbouring areas.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from NW5</h2>
          <p>
            Kentish Town sits on the doorstep of Hampstead Heath, so Heath runners and walkers are a core group &mdash; the hills and trails are brilliant training but demanding on the calves, Achilles and knees. Gym-goers around Kentish Town Road and the Talacre sports centre come in for strength-training niggles. And Kentish Town&apos;s long-standing creative and music community &mdash; the area around the O2 Forum and the studios off the high road &mdash; brings in plenty of desk-and-stage workers dealing with neck, shoulder and lower back tension.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Kentish Town</h2>
          <p>
            The 134 bus is the direct route: it runs from Kentish Town up Fortess Road, through Tufnell Park to Archway, and drops you a short walk from the clinic &mdash; usually around 15 minutes. From Kentish Town tube on the Northern Line it&apos;s a couple of stops to Archway, and Kentish Town is also on the Overground and Thameslink for connections. By bike, the run up Fortess Road and Junction Road is short and there are racks at the clinic.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Kentish Town clients</h2>
          <p>
            Runners and gym-goers book a 60- or 90-minute <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> for maintenance and recovery &mdash; our <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline">runners&apos; guide</Link> covers the detail, and around bigger efforts the <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> and <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Normatec compression boots</Link> are popular add-ons. For desk and postural pain, the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link> is the usual starting point.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Kentish Town and the wider catchment</h2>
          <p>
            This page covers Kentish Town, Gospel Oak and the streets around Fortess Road. It links directly to <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link> and up to <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link> and <Link href={ROUTES.areasServed.archwayN19} className="link-inline">Archway</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Kentish Town?</h3>
              <p>The 134 bus runs from Kentish Town up Fortess Road through Tufnell Park to Archway, dropping you a short walk from the clinic &mdash; usually around 15 minutes. From Kentish Town tube (Northern Line) it is a couple of stops to Archway. By bike, the ride up Fortess Road and Junction Road is short and direct.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat runners from Hampstead Heath and Gospel Oak?</h3>
              <p>Yes. Kentish Town and Gospel Oak sit right by Hampstead Heath, and Heath runners are a big part of who we see from NW5. Trail and hill running loads the calves, Achilles, knees and ankles, and sports massage helps keep training on track &mdash; especially through marathon and race blocks.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you see gym-goers and people using Talacre?</h3>
              <p>Regularly. Kentish Town is well served for gyms and the Talacre sports centre, and gym-goers book sports and deep tissue massage for strength-training niggles &mdash; tight shoulders, hips, hamstrings and lower back.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What do most Kentish Town clients book?</h3>
              <p>The most-booked options from NW5 are a 60- or 90-minute sports and deep tissue massage for runners and gym-goers, and the Back &amp; Neck Pain MOT for desk-related pain. Every session begins with an assessment so the treatment fits how you present that day.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Book your session from Kentish Town</h2>
          <p className="text-brand-green font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; a direct 134 bus up Fortess Road.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
