import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Highgate N6 | Just Down Highgate Hill',
  description: 'Sports, deep tissue and clinical massage for Highgate (N6). Down the hill to the Archway clinic. Cyclist and Heath-runner recovery. Book online.',
  path: '/areas-served/highgate-n6',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Highgate N6', path: '/areas-served/highgate-n6' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/highgate-n6#business`,
  name: 'Range and Restore Sports Massage — serving Highgate N6',
  description: 'Sports, deep tissue and clinical massage in Archway for Highgate, London N6. Just down Highgate Hill — cyclist and Hampstead Heath runner recovery.',
  url: `${BASE_URL}/areas-served/highgate-n6`,
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
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Highgate Village, London N6' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Highgate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Archway is just down the hill from Highgate. The 143, 210 and 271 buses run down Highgate Hill to Archway, stopping a short walk from the clinic. From Highgate tube (Northern Line) it is one stop to Archway, or a 15-minute walk downhill. Most Highgate clients find it quicker to reach than heading into town.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat cyclists who ride Swains Lane and Highgate Hill?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — the Highgate climbs are legendary among London cyclists, and repeated efforts on Swains Lane and Highgate Hill are hard on the quads, calves, hip flexors and lower back. A 60- or 90-minute sports and deep tissue session is the usual recommendation for riders training these climbs.' },
    },
    {
      '@type': 'Question',
      name: 'Do you see runners and walkers from Hampstead Heath and Highgate Wood?',
      acceptedAnswer: { '@type': 'Answer', text: 'Regularly. The Heath, Highgate Wood, Waterlow Park and the Parkland Walk make N6 one of the most active areas we serve. Trail and hill running is demanding on the calves, Achilles, knees and ankles, and sports massage helps keep those loads manageable.' },
    },
    {
      '@type': 'Question',
      name: 'Is the clinic near the Whittington Hospital?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Whittington sits on Highgate Hill between Highgate and Archway, a short walk from the clinic. A number of our regular clients are Whittington staff, and evening and weekend slots suit shift patterns.' },
    },
  ],
}

export default function HighgateN6Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Highgate · London N6</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Highgate (N6)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Just down Highgate Hill to Archway. Cyclist and Hampstead Heath runner recovery, deep tissue and clinical massage for N6 &mdash; Swains Lane to the Wood.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Highgate sits at the top of the hill and Range and Restore is at the bottom of it &mdash; the clinic at 130 Junction Road is a short trip down Highgate Hill to Archway. Treatment is delivered by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>. With Hampstead Heath, Highgate Wood and some of London&apos;s most iconic cycling climbs on the doorstep, N6 is one of our most active catchment areas.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N6</h2>
          <p>
            Highgate&apos;s geography makes for a very particular kind of client. Cyclists come for the climbs &mdash; Swains Lane, beside the Cemetery, and Highgate Hill itself are proving grounds for London riders, and repeated efforts take a toll on the quads, calves and lower back. Runners and walkers use Hampstead Heath, Highgate Wood, Waterlow Park and the Parkland Walk, where hills and trails load the calves, Achilles and knees. Alongside them are long-standing Highgate residents who want consistent, high-quality local treatment, and Whittington Hospital staff working just down the hill.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Highgate</h2>
          <p>
            It&apos;s downhill all the way. The 143, 210 and 271 buses run down Highgate Hill to Archway and stop a short walk from the clinic. From Highgate tube station on the Northern Line it&apos;s a single stop to Archway, or a 15-minute walk down (a bit more of a pull on the way back). Cyclists already out on the climbs can drop into Archway easily, and there are racks at the clinic end.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Highgate clients</h2>
          <p>
            Cyclists and hill-runners book a 60- or 90-minute <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> to work the legs, hips and lower back; the <Link href={ROUTES.blog.sportsMassageCyclingRecoveryArchway} className="link-inline">cycling recovery guide</Link> covers this in detail. After big efforts, many add the <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> or <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Normatec compression boots</Link>. For chronic pain and postural issues, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> and the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link> are the common starting points.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Highgate and the wider catchment</h2>
          <p>
            This page covers Highgate Village, the streets around Highgate Hill and West Hill, and the edges of the Heath. It connects along the Parkland Walk to <Link href={ROUTES.areasServed.crouchEndN8} className="link-inline">Crouch End</Link> and <Link href={ROUTES.areasServed.stroudGreenN4} className="link-inline">Stroud Green</Link>, and down the hill to <Link href={ROUTES.areasServed.archwayN19} className="link-inline">Archway</Link> and <Link href={ROUTES.areasServed.kentishTownNw5} className="link-inline">Kentish Town</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Highgate?</h3>
              <p>Archway is just down the hill from Highgate. The 143, 210 and 271 buses run down Highgate Hill to Archway, stopping a short walk from the clinic. From Highgate tube (Northern Line) it is one stop to Archway, or a 15-minute walk downhill.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat cyclists who ride Swains Lane and Highgate Hill?</h3>
              <p>Yes &mdash; the Highgate climbs are legendary among London cyclists, and repeated efforts on Swains Lane and Highgate Hill are hard on the quads, calves, hip flexors and lower back. A 60- or 90-minute sports and deep tissue session is the usual recommendation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you see runners and walkers from Hampstead Heath and Highgate Wood?</h3>
              <p>Regularly. The Heath, Highgate Wood, Waterlow Park and the Parkland Walk make N6 one of the most active areas we serve. Trail and hill running is demanding on the calves, Achilles, knees and ankles, and sports massage helps keep those loads manageable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is the clinic near the Whittington Hospital?</h3>
              <p>Yes. The Whittington sits on Highgate Hill between Highgate and Archway, a short walk from the clinic. A number of our regular clients are Whittington staff, and evening and weekend slots suit shift patterns.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Book your session from Highgate</h2>
          <p className="text-brand-green font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; just down the hill.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
