import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Finsbury Park N4 | Runner & Cyclist Recovery',
  description: 'Sports massage and running recovery for Finsbury Park (N4). Direct 210 bus to the Archway clinic. Parkrun and cyclist recovery. Book online.',
  path: '/areas-served/finsbury-park-n4',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Finsbury Park N4', path: '/areas-served/finsbury-park-n4' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/finsbury-park-n4#business`,
  name: 'Range and Restore Sports Massage — serving Finsbury Park N4',
  description: 'Sports massage and running recovery in Archway for Finsbury Park, London N4. Parkrun and cyclist recovery, deep tissue work and injury treatment.',
  url: `${BASE_URL}/areas-served/finsbury-park-n4`,
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
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Manor House, London N4' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Finsbury Park?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 210 bus runs directly from Finsbury Park to Archway, stopping a short walk from the clinic — usually 10–15 minutes. Finsbury Park itself is a major interchange (Victoria and Piccadilly lines plus National Rail), so it is easy to reach from across the N4 area first.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat runners from Finsbury Park parkrun?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Finsbury Park parkrun and the park’s running track make N4 one of our busiest areas for runners. Sports massage helps manage the usual load-related issues: tight calves and hamstrings, Achilles niggles, shin splints, ITB tightness and plantar pain. Many runners book maintenance sessions through a training block and a recovery session after races.' },
    },
    {
      '@type': 'Question',
      name: 'What’s the best massage after a long run or race?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 60- or 90-minute sports and deep tissue session, ideally a day or two after the event rather than immediately. For bigger efforts, pairing massage with the infrared sauna or Normatec compression boots in the Recovery Suite speeds things along.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat cyclists and commuters from N4?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Finsbury Park is a commuter-cycling hub, and cyclists book regularly for hip flexor tightness, lower back stiffness, neck and shoulder tension and cycling-related knee issues.' },
    },
  ],
}

export default function FinsburyParkN4Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Finsbury Park · London N4</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Finsbury Park (N4)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            A direct bus from Finsbury Park to Archway. Running recovery, cyclist maintenance and injury treatment for N4 &mdash; parkrun, training blocks and race day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is a short trip from Finsbury Park &mdash; the 210 bus runs straight to Archway, where the clinic sits at 130 Junction Road. Treatment is delivered by our <Link href="/team" className="text-[#0f767a] hover:text-page font-medium">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href="/about" className="text-[#0f767a] hover:text-page font-medium">Carlos Bonvicine</Link>. With the park, the running track and one of north London&apos;s biggest parkruns on the doorstep, N4 is one of our busiest areas for runners.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N4</h2>
          <p>
            Finsbury Park is defined by its park, and the people who use it. Runners are the biggest group &mdash; parkrunners, club runners training on the track, and marathon and half-marathon runners building mileage through the seasons. Cyclists come a close second: Finsbury Park is a genuine commuter-cycling hub, with riders heading into the City and out towards the Heath. On top of that there are the everyday commuters passing through one of London&apos;s busiest interchanges, and gym-goers who want to keep training niggles from turning into injuries.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Finsbury Park</h2>
          <p>
            The simplest route is the 210 bus, which runs directly from Finsbury Park to Archway and drops you a short walk from the clinic &mdash; usually 10 to 15 minutes. Because Finsbury Park station is a major interchange (Victoria and Piccadilly lines plus National Rail), it&apos;s easy to get there first from anywhere in N4. Cyclists can ride up via the quiet streets towards Stroud Green and Crouch Hill, and there are bike racks at the clinic end.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Finsbury Park clients</h2>
          <p>
            Runners typically book a 60- or 90-minute <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link> to work through the posterior chain &mdash; calves, hamstrings, glutes and lower back &mdash; plus the hip flexors and quads. Our <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium">runners&apos; guide</Link> and <Link href="/blog/marathon-sports-massage-archway" className="text-[#0f767a] hover:text-page font-medium">marathon massage guide</Link> cover the detail. After big efforts, many pair massage with the <Link href="/recovery-suite/infrared-sauna" className="text-[#0f767a] hover:text-page font-medium">infrared sauna</Link> or <Link href="/recovery-suite/compression-therapy" className="text-[#0f767a] hover:text-page font-medium">Normatec compression boots</Link> in the Recovery Suite.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Finsbury Park and the wider catchment</h2>
          <p>
            This page covers Finsbury Park, Manor House and the streets around the park. It sits right next to <Link href="/areas-served/stroud-green-n4" className="text-[#0f767a] hover:text-page font-medium">Stroud Green</Link> and connects along the Parkland Walk towards <Link href="/areas-served/crouch-end-n8" className="text-[#0f767a] hover:text-page font-medium">Crouch End</Link> and <Link href="/areas-served/highgate-n6" className="text-[#0f767a] hover:text-page font-medium">Highgate</Link>. See all the <Link href="/areas-served" className="text-[#0f767a] hover:text-page font-medium">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Finsbury Park?</h3>
              <p>The 210 bus runs directly from Finsbury Park to Archway, stopping a short walk from the clinic &mdash; usually 10&ndash;15 minutes. Finsbury Park itself is a major interchange (Victoria and Piccadilly lines plus National Rail), so it is easy to reach from across the N4 area first.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat runners from Finsbury Park parkrun?</h3>
              <p>Yes &mdash; Finsbury Park parkrun and the park&apos;s running track make N4 one of our busiest areas for runners. Sports massage helps manage tight calves and hamstrings, Achilles niggles, shin splints, ITB tightness and plantar pain. Many runners book maintenance through a training block and a recovery session after races.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What&apos;s the best massage after a long run or race?</h3>
              <p>A 60- or 90-minute sports and deep tissue session, ideally a day or two after the event rather than immediately. For bigger efforts, pairing massage with the infrared sauna or Normatec compression boots in the Recovery Suite speeds things along.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat cyclists and commuters from N4?</h3>
              <p>Yes. Finsbury Park is a commuter-cycling hub, and cyclists book regularly for hip flexor tightness, lower back stiffness, neck and shoulder tension and cycling-related knee issues.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session from Finsbury Park</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; a direct 210 bus away.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
