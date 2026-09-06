import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Islington N1 | Direct Bus from Angel',
  description: 'Sports, deep tissue and clinical massage for Islington (N1). Direct 43/271 bus from Angel & Upper Street to the Archway clinic. Book online.',
  path: '/areas-served/islington-n1',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Islington N1', path: '/areas-served/islington-n1' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/islington-n1#business`,
  name: 'Range and Restore Sports Massage — serving Islington N1',
  description: 'Assessment-led sports, deep tissue and clinical massage in Archway for Islington, London N1. Direct bus from Angel and Upper Street.',
  url: `${BASE_URL}/areas-served/islington-n1`,
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
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Angel, London N1' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it worth travelling from Islington for sports massage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many N1 clients do exactly that. Every session is assessment-led and delivered by a BTEC Level 5 therapist, so the treatment is matched to the root cause of your pain rather than a generic protocol. Clients tell us the results are worth the short journey up from Angel or Upper Street.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Angel or Upper Street?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 43 and 271 buses run from Angel and Upper Street straight up through Highbury and Holloway to Archway, stopping a short walk from the clinic. By tube it is Angel (Northern Line) or Highbury & Islington to Archway. By car or cab it is a short run up Holloway Road.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat desk workers and hospitality staff from Upper Street?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Office and tech workers around Angel and the Business Design Centre, and the many hospitality staff working Upper Street’s bars and restaurants, are a large part of our N1 clientele — usually for neck, shoulder and lower back tension from desks or long shifts on their feet.' },
    },
    {
      '@type': 'Question',
      name: 'Do you have early, evening or weekend appointments?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The clinic is open 08:00–20:00 on weekdays and 09:00–17:00 at weekends, which works well for professionals travelling before or after work, and for hospitality staff with later starts.' },
    },
  ],
}

export default function IslingtonN1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Islington · London N1</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Islington (N1)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            A direct bus up from Angel and Upper Street. Assessment-led sports, deep tissue and clinical massage for N1 professionals, runners and hospitality workers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is an easy trip north from Islington &mdash; a direct bus up Holloway Road, or a short hop on the Northern Line. The clinic is at 130 Junction Road, Archway, and is staffed by our <Link href="/team" className="text-[#0f767a] hover:text-page font-medium">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href="/about" className="text-[#0f767a] hover:text-page font-medium">Carlos Bonvicine</Link>, a certified MLD practitioner. Many N1 clients travel up specifically for treatment that addresses the cause of their pain, not just the symptoms.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N1</h2>
          <p>
            Islington is office, media and hospitality country, and that shapes the pain we see. Desk and tech workers from around Angel, Upper Street and the Business Design Centre come in with the classic pattern &mdash; tight neck and shoulders, upper back knots and a stiff lower back from long hours at a screen. Hospitality staff from Upper Street&apos;s restaurants and bars book for the foot, lower back and shoulder strain of long shifts. And Islington has a serious running community &mdash; Highbury Fields and the canal towpath are full of them &mdash; who use sports massage to stay injury-free through training blocks.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Islington</h2>
          <p>
            The most reliable route is the bus: the 43 and 271 run from Angel and Upper Street straight up through Highbury and Holloway to Archway, dropping you a short walk from the clinic. By tube, take the Northern Line from Angel to Archway, or come via Highbury &amp; Islington. By bike it&apos;s a straightforward ride up through Highbury to Archway, and there are racks at the clinic end. By car or cab it&apos;s a short run up Holloway Road.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Islington clients</h2>
          <p>
            For desk-related neck, shoulder and back pain, the <Link href="/services/back-neck-pain-mot" className="text-[#0f767a] hover:text-page font-medium">Back &amp; Neck Pain MOT</Link> is usually the right starting point. Runners and gym-goers book <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link> for maintenance and recovery. For chronic or stubborn pain &mdash; tension headaches, RSI, long-standing lower back issues &mdash; <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium">advanced clinical massage</Link> takes a more detailed, assessment-led approach.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Islington and the wider catchment</h2>
          <p>
            This page is for clients across Islington and Angel, including the streets around Upper Street, Highbury Corner and the Caledonian Road. If you&apos;re on the northern edge of N1, the clinic is even closer via <Link href="/areas-served/holloway-n7" className="text-[#0f767a] hover:text-page font-medium">Holloway</Link>. See all the <Link href="/areas-served" className="text-[#0f767a] hover:text-page font-medium">areas we serve</Link> across north London.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is it worth travelling from Islington for sports massage?</h3>
              <p>Many N1 clients do exactly that. Every session is assessment-led and delivered by a BTEC Level 5 therapist, so treatment is matched to the root cause of your pain rather than a generic protocol. Clients tell us the results are worth the short journey up from Angel or Upper Street.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Angel or Upper Street?</h3>
              <p>The 43 and 271 buses run from Angel and Upper Street straight up through Highbury and Holloway to Archway, stopping a short walk from the clinic. By tube it is Angel (Northern Line) or Highbury &amp; Islington to Archway. By car or cab it is a short run up Holloway Road.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat desk workers and hospitality staff from Upper Street?</h3>
              <p>Yes. Office and tech workers around Angel and the Business Design Centre, and the many hospitality staff working Upper Street&apos;s bars and restaurants, are a large part of our N1 clientele &mdash; usually for neck, shoulder and lower back tension from desks or long shifts on their feet.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you have early, evening or weekend appointments?</h3>
              <p>Yes. The clinic is open 08:00&ndash;20:00 on weekdays and 09:00&ndash;17:00 at weekends, which works well for professionals travelling before or after work, and for hospitality staff with later starts.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session from Islington</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; a direct bus from Angel.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
