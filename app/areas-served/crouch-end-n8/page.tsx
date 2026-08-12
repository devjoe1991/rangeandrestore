import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Crouch End N8 | Direct 41 Bus to Archway',
  description: 'Sports, deep tissue and clinical massage for Crouch End (N8). No tube needed — the 41 runs straight to the Archway clinic. Book online.',
  path: '/areas-served/crouch-end-n8',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Crouch End N8', path: '/areas-served/crouch-end-n8' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/crouch-end-n8#business`,
  name: 'Range and Restore Sports Massage — serving Crouch End N8',
  description: 'Sports, deep tissue and clinical massage in Archway for Crouch End, London N8. A direct 41 bus with no tube required.',
  url: `${BASE_URL}/areas-served/crouch-end-n8`,
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
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Hornsey, London N8' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Crouch End has no tube — how do I get to the clinic?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 41 bus runs from Crouch End Broadway straight to Archway, where the clinic is a short walk on Junction Road — usually 15–20 minutes. Because Archway has a tube station, the 41 is also the easy way to connect to the Northern Line. The W7 to Finsbury Park is another option, connecting to the 210.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat runners from Priory Park and Alexandra Palace?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Crouch End runners use Priory Park, Alexandra Palace and the Parkland Walk, and book sports massage for calf, hamstring, Achilles and ITB issues, and for the hill work that comes with running around Muswell Hill and Ally Pally. Maintenance through training and a recovery session after races are the usual pattern.' },
    },
    {
      '@type': 'Question',
      name: 'Do you see freelancers and parents working from home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Often. Crouch End has a large community of creative freelancers and home-workers, and desk-related neck, shoulder and lower back pain is one of the most common reasons N8 clients book — usually starting with the Back & Neck Pain MOT.' },
    },
    {
      '@type': 'Question',
      name: 'Is there weekend and evening availability?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The clinic is open until 20:00 on weekdays and 09:00–17:00 at weekends, which suits families, freelancers and anyone fitting treatment around Crouch End life.' },
    },
  ],
}

export default function CrouchEndN8Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Crouch End · London N8</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Crouch End (N8)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            No tube in Crouch End &mdash; but the 41 runs straight to Archway. Sports, deep tissue and clinical massage for N8 runners, families and freelancers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Crouch End is famous for having no tube station of its own &mdash; which is exactly why our Archway clinic is so handy. The 41 bus runs from Crouch End Broadway straight to Archway, where Range and Restore sits at 130 Junction Road, right by the Northern Line. Treatment is delivered by our <Link href="/team" className="text-[#0f767a] hover:text-page font-medium">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href="/about" className="text-[#0f767a] hover:text-page font-medium">Carlos Bonvicine</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N8</h2>
          <p>
            Crouch End is a village-feel neighbourhood with a distinctive mix. There&apos;s a big community of creative freelancers and home-workers around the Broadway and the Clock Tower &mdash; and with that comes a steady stream of desk-related neck, shoulder and lower back pain. There are active families and weekend runners using Priory Park, Alexandra Palace and the Parkland Walk. And there are the hill-runners and cyclists who take on the climbs around Muswell Hill and Ally Pally, which are hard on calves, Achilles and knees.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Crouch End</h2>
          <p>
            The 41 bus is the direct route: from Crouch End Broadway it runs to Archway, dropping you a short walk from the clinic &mdash; usually 15 to 20 minutes. If you&apos;re coming from the Hornsey or Ferme Park side, the W7 to Finsbury Park connects to the 210 up to Archway. By bike, the ride over via Stroud Green and Crouch Hill is well within reach, and there are racks at the clinic. Archway&apos;s Northern Line station makes the return trip easy if you&apos;re heading on into town.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Crouch End clients</h2>
          <p>
            Runners book a 60- or 90-minute <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link> for maintenance and recovery &mdash; our <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium">runners&apos; guide</Link> has the detail. Freelancers and home-workers usually start with the <Link href="/services/back-neck-pain-mot" className="text-[#0f767a] hover:text-page font-medium">Back &amp; Neck Pain MOT</Link> for postural pain. For chronic or complex issues, <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium">advanced clinical massage</Link> takes an assessment-led approach to the underlying cause.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Crouch End and the wider catchment</h2>
          <p>
            This page covers Crouch End, Hornsey and the streets around the Broadway. It links naturally along the Parkland Walk to <Link href="/areas-served/stroud-green-n4" className="text-[#0f767a] hover:text-page font-medium">Stroud Green</Link>, <Link href="/areas-served/finsbury-park-n4" className="text-[#0f767a] hover:text-page font-medium">Finsbury Park</Link> and <Link href="/areas-served/highgate-n6" className="text-[#0f767a] hover:text-page font-medium">Highgate</Link>. See all the <Link href="/areas-served" className="text-[#0f767a] hover:text-page font-medium">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Crouch End has no tube &mdash; how do I get to the clinic?</h3>
              <p>The 41 bus runs from Crouch End Broadway straight to Archway, where the clinic is a short walk on Junction Road &mdash; usually 15&ndash;20 minutes. Because Archway has a tube station, the 41 is also the easy way to connect to the Northern Line. The W7 to Finsbury Park is another option, connecting to the 210.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat runners from Priory Park and Alexandra Palace?</h3>
              <p>Yes. Crouch End runners use Priory Park, Alexandra Palace and the Parkland Walk, and book sports massage for calf, hamstring, Achilles and ITB issues, and for the hill work around Muswell Hill and Ally Pally. Maintenance through training and a recovery session after races are the usual pattern.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you see freelancers and parents working from home?</h3>
              <p>Often. Crouch End has a large community of creative freelancers and home-workers, and desk-related neck, shoulder and lower back pain is one of the most common reasons N8 clients book &mdash; usually starting with the Back &amp; Neck Pain MOT.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is there weekend and evening availability?</h3>
              <p>Yes. The clinic is open until 20:00 on weekdays and 09:00&ndash;17:00 at weekends, which suits families, freelancers and anyone fitting treatment around Crouch End life.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session from Crouch End</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; a direct 41 bus from the Broadway.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
