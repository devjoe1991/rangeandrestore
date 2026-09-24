import type { Metadata } from 'next'
import Link from 'next/link'
import { AreaVisit } from './_components/AreaVisit'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Areas Served – Sports Massage Near You in North London',
  description: 'Sports massage in Archway serving Tufnell Park, Holloway, Islington, Finsbury Park, Crouch End, Highgate and Kentish Town. Book your local session.',
  path: '/areas-served',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Areas Served', path: '/areas-served' }])

const areas: { name: string; description: string; href?: string }[] = [
  {
    name: 'Archway, N19',
    description: 'Range and Restore is based at 130 Junction Road, right in the heart of Archway. A short walk from Archway tube station on the Northern Line, the clinic is the most accessible option for sports massage in N19.',
    href: ROUTES.areasServed.archwayN19,
  },
  {
    name: 'Tufnell Park, N7',
    description: 'A short walk north up Junction Road from Tufnell Park tube to the clinic. Cyclists, runners and desk-workers from N7 book sports and deep tissue massage and the Back & Neck Pain MOT regularly.',
    href: ROUTES.areasServed.tufnellParkN7,
  },
  {
    name: 'Holloway, N7',
    description: 'Holloway is one of our closest service areas. Whether you are dealing with a sports injury, desk-related tension, or need post-event recovery, the clinic is a quick trip from anywhere in N7.',
    href: ROUTES.areasServed.hollowayN7,
  },
  {
    name: 'Islington, N1',
    description: 'Easily accessible via bus or a short drive from Islington. Many of our clients travel from N1 for assessment-led treatment that addresses the root cause of pain, not just the symptoms.',
    href: ROUTES.areasServed.islingtonN1,
  },
  {
    name: 'Finsbury Park, N4',
    description: 'A direct bus route connects Finsbury Park to Archway. Runners, cyclists, and gym-goers from N4 regularly visit the clinic for injury prevention, recovery, and performance support.',
    href: ROUTES.areasServed.finsburyParkN4,
  },
  {
    name: 'Crouch End, N8',
    description: 'Crouch End residents are a short bus ride from the clinic. Range and Restore works with many active clients from N8 dealing with running injuries, chronic tension, and postural issues.',
    href: ROUTES.areasServed.crouchEndN8,
  },
  {
    name: 'Highgate, N6',
    description: 'Highgate is within easy reach of the clinic, with Archway just down the hill. Clients from N6 benefit from the same assessment-led, results-focused approach as every session at Range and Restore.',
    href: ROUTES.areasServed.highgateN6,
  },
  {
    name: 'Stroud Green, N4',
    description: 'Just east of the clinic, Stroud Green residents can access Range and Restore quickly by bus or bike. Soft tissue therapy and sports massage are available for all conditions and activity levels.',
    href: ROUTES.areasServed.stroudGreenN4,
  },
  {
    name: 'Upper Holloway, N19',
    description: 'Upper Holloway is one of the closest areas to the clinic. If you live in the N19 area and need sports massage, deep tissue therapy, or manual lymphatic drainage, the clinic is on your doorstep.',
    href: ROUTES.areasServed.upperHollowayN19,
  },
  {
    name: 'Kentish Town, NW5',
    description: 'A short journey from Kentish Town on the 134 bus or the Northern Line. Clients from NW5 come to Range and Restore for everything from marathon preparation to chronic back pain treatment.',
    href: ROUTES.areasServed.kentishTownNw5,
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

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Sports Massage Near You in North London</h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Range and Restore Sports Massage is based in Archway and serves clients across North London. Wherever you are in the area, expert treatment is close by.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Based at 130 Junction Road, Archway, London N19 5LB, Range and Restore is staffed by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link> — a certified MLD practitioner. The clinic is a short walk from Archway tube station on the Northern Line, with bus routes connecting to all surrounding areas.
          </p>

          <p>
            Whether you need <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link>, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> for chronic conditions, <Link href={ROUTES.services.backNeckPainMot} className="link-inline">back and neck pain treatment</Link>, or <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline">manual lymphatic drainage</Link>, the same assessment-led approach is available to clients across North London.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((area) => {
            const inner = (
              <>
                <div className="h-1 w-full bg-brand-teal" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-page mb-2">{area.name}</h2>
                  <p className="text-page-muted text-sm">{area.description}</p>
                  {area.href && (
                    <p className="mt-3 text-brand-teal font-semibold text-sm">View {area.name.split(',')[0]} page &rarr;</p>
                  )}
                </div>
              </>
            )
            return area.href ? (
              <Link key={area.name} href={area.href} className="rounded-card overflow-hidden bg-card shadow-sm block hover:shadow-md transition-shadow border-2 border-brand-green">
                {inner}
              </Link>
            ) : (
              <div key={area.name} className="rounded-card overflow-hidden bg-card shadow-sm border-2 border-brand-green">
                {inner}
              </div>
            )
          })}
        </div>

        <div className="mt-12 prose prose-lg max-w-none text-page-muted space-y-6">
          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here</h2>
          <p>
            <strong>By tube:</strong> The clinic is on Junction Road between Archway and Tufnell Park stations (Northern Line), a short walk from each.
          </p>
          <p>
            <strong>By bus:</strong> The 134 runs along Junction Road past the clinic. Routes 4, 17, 41, 43, 143, 210 and 263 stop at Archway station, a short walk away.
          </p>
          <p>
            <strong>By car:</strong> Limited street parking is available on Junction Road and surrounding streets.
          </p>
        </div>

        <AreaVisit
          heading="Book your session at Range and Restore"
          text="Sports massage, deep tissue therapy, clinical massage and MLD in Archway, North London. Open 7 days a week."
        />

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Explore our services</h3>
          <div className="space-y-2">
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
            </Link>
            <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline link-inline-tap">
              &rarr; Advanced Clinical Massage
            </Link>
            <Link href={ROUTES.services.backNeckPainMot} className="link-inline link-inline-tap">
              &rarr; Back &amp; Neck Pain MOT
            </Link>
            <Link href={ROUTES.contact} className="link-inline link-inline-tap">
              &rarr; Contact &amp; Directions
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
