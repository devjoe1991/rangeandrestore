import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Archway N19 | 3-min Walk from Tube',
  description: 'Sports and clinical massage in Archway N19. 130 Junction Road — 3 minutes from Archway tube. BTEC L5 therapist Carlos Bonvicine. Book online.',
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
  description: 'Assessment-led sports massage, deep tissue therapy and clinical massage in Archway, London N19. Three minutes from Archway tube station.',
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
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to Range and Restore from Archway tube station?',
      acceptedAnswer: { '@type': 'Answer', text: 'Exit Archway station and head south down Junction Road for about 250 metres. The clinic is on the left at number 130, just past Macdonald Road. It is a 3-minute walk on flat ground.' },
    },
    {
      '@type': 'Question',
      name: 'Is there parking near the clinic in Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Limited pay-and-display street parking is available on Junction Road and the surrounding side streets (Macdonald Road, St John\'s Way). Controlled parking zone hours apply on weekdays. Most local clients walk, bus or bike to appointments.' },
    },
    {
      '@type': 'Question',
      name: 'What buses stop near 130 Junction Road, Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Routes 4, 17, 41, 43, 134, 143, 210, 263 and 271 all stop within a few minutes\' walk of the clinic. Archway station itself is on the Northern Line.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat staff from the Whittington Hospital?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — several regular clients are nurses, doctors and allied health staff from the Whittington, which is a 7-minute walk up the hill. Evening and Saturday slots work well for shift patterns.' },
    },
  ],
}

export default function ArchwayN19Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Archway · London N19</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage in Archway (N19)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            130 Junction Road — three minutes&apos; walk from Archway tube. Assessment-led sports, deep tissue and clinical massage for residents and workers in N19.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is the Archway local clinic for sports and remedial massage. The studio is at 130 Junction Road — between Archway tube and Tufnell Park — and is led by <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium">Carlos Bonvicine</Link>, a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified MLD practitioner.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N19</h2>
          <p>
            Most clients walking through the door from the N19 postcode fall into one of four groups. Families and long-term Archway residents who want consistent, local care without travelling across town. Whittington Hospital staff — nurses, junior doctors and physios — who need treatment that fits around shifts. Cyclists and runners using the Parkland Walk, Hampstead Heath and Highgate Wood, who book regular maintenance sessions to stay injury-free. And local desk workers in flexible-working arrangements who want to sort recurring back, neck or shoulder pain that started during the WFH years.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Walking directions from Archway tube</h2>
          <p>
            Take the main station exit onto Junction Road. Turn south (away from the Whittington roundabout) and walk down the hill for about 250 metres, past the Sainsbury&apos;s Local and Macdonald Road. The clinic is at number 130, on the left-hand side. It&apos;s a flat 3-minute walk — easier than the climb up to Highgate or across to Tufnell Park.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What treatments people in Archway book most</h2>
          <p>
            Across the N19 postcode, the most-requested services are <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link> for cyclists, runners and gym-goers; the <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium">Back & Neck Pain MOT</Link> for desk workers and hospital staff with postural pain; and <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium">advanced clinical massage</Link> for chronic conditions that haven&apos;t responded to general massage elsewhere. Every session begins with an assessment so the treatment is matched to your presentation that day, not delivered as a generic protocol.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Wider area: Upper Holloway and beyond</h2>
          <p>
            The N19 postcode also covers Upper Holloway, the streets running down towards Tufnell Park, and parts of the Whittington Park area. If you live further out, the clinic is also a short trip from <Link href="/areas-served/tufnell-park-n7" className="text-[#2ab4b8] hover:text-page font-medium">Tufnell Park</Link> (15 minutes&apos; walk), <Link href="/areas-served" className="text-[#2ab4b8] hover:text-page font-medium">Holloway, Highgate and Kentish Town</Link>.
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
              <p>Exit Archway station and head south down Junction Road for about 250 metres. The clinic is on the left at number 130, just past Macdonald Road. It is a 3-minute walk on flat ground.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is there parking near the clinic in Archway?</h3>
              <p>Limited pay-and-display street parking is available on Junction Road and the surrounding side streets (Macdonald Road, St John&apos;s Way). Controlled parking zone hours apply on weekdays. Most local clients walk, bus or bike to appointments.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What buses stop near 130 Junction Road, Archway?</h3>
              <p>Routes 4, 17, 41, 43, 134, 143, 210, 263 and 271 all stop within a few minutes&apos; walk of the clinic. Archway station itself is on the Northern Line.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat staff from the Whittington Hospital?</h3>
              <p>Yes — several regular clients are nurses, doctors and allied health staff from the Whittington, which is a 7-minute walk up the hill. Evening and Saturday slots work well for shift patterns.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session in Archway</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
