import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Areas Served – Sports Massage Near You in North London',
  description: 'Range and Restore Sports Massage in Archway serves Tufnell Park, Holloway, Islington, Finsbury Park, Crouch End, Highgate, Kentish Town and North London. Book your local session.',
  path: '/areas-served',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Areas Served', path: '/areas-served' }])

const areas = [
  {
    name: 'Archway, N19',
    description: 'Range and Restore is based at 130 Junction Road, right in the heart of Archway. A short walk from Archway tube station on the Northern Line, the clinic is the most accessible option for sports massage in N19.',
  },
  {
    name: 'Tufnell Park, N7',
    description: 'Less than a mile from the clinic, Tufnell Park residents can reach Range and Restore in under 10 minutes by foot or a short bus ride. Ideal for regular maintenance sessions around your schedule.',
  },
  {
    name: 'Holloway, N7',
    description: 'Holloway is one of our closest service areas. Whether you are dealing with a sports injury, desk-related tension, or need post-event recovery, the clinic is a quick trip from anywhere in N7.',
  },
  {
    name: 'Islington, N1',
    description: 'Easily accessible via bus or a short drive from Islington. Many of our clients travel from N1 for assessment-led treatment that addresses the root cause of pain, not just the symptoms.',
  },
  {
    name: 'Finsbury Park, N4',
    description: 'A direct bus route connects Finsbury Park to Archway. Runners, cyclists, and gym-goers from N4 regularly visit the clinic for injury prevention, recovery, and performance support.',
  },
  {
    name: 'Crouch End, N8',
    description: 'Crouch End residents are a short bus ride from the clinic. Range and Restore works with many active clients from N8 dealing with running injuries, chronic tension, and postural issues.',
  },
  {
    name: 'Highgate, N6',
    description: 'Highgate is within easy reach of the clinic, with Archway just down the hill. Clients from N6 benefit from the same assessment-led, results-focused approach as every session at Range and Restore.',
  },
  {
    name: 'Stroud Green, N4',
    description: 'Just east of the clinic, Stroud Green residents can access Range and Restore quickly by bus or bike. Soft tissue therapy and sports massage are available for all conditions and activity levels.',
  },
  {
    name: 'Upper Holloway, N19',
    description: 'Upper Holloway is one of the closest areas to the clinic. If you live in the N19 area and need sports massage, deep tissue therapy, or manual lymphatic drainage, the clinic is on your doorstep.',
  },
  {
    name: 'Kentish Town, NW5',
    description: 'A short journey from Kentish Town by bus or overground. Clients from NW5 come to Range and Restore for everything from marathon preparation to chronic back pain treatment.',
  },
]

const areasSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Range and Restore Sports Massage',
  url: 'https://rangeandrestore.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5648,
    longitude: -0.1368,
  },
  areaServed: areas.map((a) => ({
    '@type': 'Place',
    name: a.name.replace(', ', ', London '),
  })),
}

export default function AreasServedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areasSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Sports Massage Near You in North London</h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Range and Restore Sports Massage is based in Archway and serves clients across North London. Wherever you are in the area, expert treatment is close by.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Based at 130 Junction Road, Archway, London N19 5LB, Range and Restore is led by <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium">Carlos Bonvicine</Link> — a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified MLD practitioner. The clinic is a short walk from Archway tube station on the Northern Line, with bus routes connecting to all surrounding areas.
          </p>

          <p>
            Whether you need <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link>, <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium">advanced clinical massage</Link> for chronic conditions, <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium">back and neck pain treatment</Link>, or <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium">manual lymphatic drainage</Link>, the same assessment-led approach is available to clients across North London.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div key={area.name} className="rounded-[20px] overflow-hidden bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
              <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
              <div className="p-6">
                <h2 className="text-xl font-bold text-page mb-2">{area.name}</h2>
                <p className="text-page-muted text-sm">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 prose prose-lg max-w-none text-page-muted space-y-6">
          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here</h2>
          <p>
            <strong>By tube:</strong> Archway station (Northern Line) is a 3-minute walk from the clinic. Exit the station and head south along Junction Road.
          </p>
          <p>
            <strong>By bus:</strong> Routes 4, 17, 41, 43, 134, 143, 210, 263, and 271 all stop within walking distance of 130 Junction Road.
          </p>
          <p>
            <strong>By car:</strong> Limited street parking is available on Junction Road and surrounding streets.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session at Range and Restore</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Sports massage, deep tissue therapy, clinical massage, and MLD in Archway, North London. Open 7 days a week.
          </p>
          <BookingButton label="Book Your Session" />
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Explore our services</h3>
          <div className="space-y-2">
            <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
            </Link>
            <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Advanced Clinical Massage
            </Link>
            <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Back &amp; Neck Pain MOT
            </Link>
            <Link href="/contact" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Contact &amp; Directions
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
