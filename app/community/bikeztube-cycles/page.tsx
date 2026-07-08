import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Bikeztube Cycles and Range and Restore | Archway Local Partners',
  description: 'How Range and Restore and Bikeztube Cycles look after Archway cyclists on Junction Road: bike servicing at 118, sports massage and recovery at 130.',
  path: '/community/bikeztube-cycles',
})

const PARTNER_URL = 'https://bikeztube.co.uk'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Bikeztube Cycles', path: '/community/bikeztube-cycles' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'BikeStore',
  name: 'Bikeztube Cycles',
  url: PARTNER_URL,
  description: 'Family-run bike shop and workshop at 118 Junction Road, Archway. Bicycle servicing and repairs for all bike types, wheel building, carbon fibre frame repairs and bespoke custom builds.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '118 Junction Road',
    addressLocality: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'Place', name: 'Archway, London N19' },
  memberOf: { '@id': `${BASE_URL}/#business` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get my bike serviced in Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bikeztube Cycles at 118 Junction Road, between Archway and Tufnell Park tube, is the local workshop we send our clients to. Full bike services start from £89 and the mechanics work on everything: geared bikes, folding bikes, e-bikes, Bromptons, internal hub gears, kids bikes and single speeds. They also build wheels and repair carbon fibre frames.' },
    },
    {
      '@type': 'Question',
      name: 'What helps my legs recover after long bike rides?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sports and deep tissue massage targets the areas cycling loads most: hip flexors, quads, calves and the lower back. Between rides, Normatec full leg compression and an infrared sauna help clear heaviness and keep tissue moving well. All of it is available at Range and Restore, 130 Junction Road in Archway, a few doors from Bikeztube Cycles.' },
    },
    {
      '@type': 'Question',
      name: 'Do Range and Restore and Bikeztube Cycles work together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The two shops sit a few doors apart on Junction Road in Archway and refer honestly both ways. Bikeztube looks after the bike, Range and Restore looks after the cyclist. There is no formal scheme, just two local independents looking after the same North London cycling community.' },
    },
  ],
}

export default function BikeztubeCyclesPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; Archway &middot; Junction Road</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Bikeztube Cycles and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Bike servicing at 118 Junction Road, sports massage and recovery at 130. Two independents on the same Archway street looking after North London&apos;s cyclists.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-[#F2EDE4] mb-10 p-8 flex items-center justify-center">
          <Image
            src="/bikeztube-cycles-bike-shop-junction-road-archway.png"
            alt="Bikeztube Cycles and Repairs logo, bike shop on Junction Road, Archway"
            width={206}
            height={172}
            className="max-h-40 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Bikeztube Cycles</h2>
          <p>
            Bikeztube Cycles is the family-run bike shop at 118 Junction Road, between Archway and Tufnell Park tube. The family have been mechanics since the 1940s, starting out in a motorcycle garage, and over the years the work shifted to bicycles. Walk in and the first thing you notice is the wall of vintage and modern frames waiting to become custom builds.
          </p>
          <p>
            The workshop is primarily about service and repair, and it handles everything. Geared bikes, folding bikes, e-bikes, Bromptons, internal hub gears, kids bikes, single speeds. A full clean and service starts from £89. The mechanics are also serious wheel builders, hundreds of builds deep, working with components from Sapim, DT Swiss, Mavic, Halo, Miche and Shimano, and they repair carbon fibre frames that other shops would write off. If you want a bespoke bike built from scratch, sprayed and specced to your taste, this is where Archway goes.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            Cyclists on Junction Road have both halves of the job covered on one street. The bike goes into Bikeztube, the legs come to us. A normal week for a North London cyclist looks like this: a long ride out on Sunday, the bike dropped at 118 for a gear tune on Monday, a sports massage at 130 on Wednesday to sort the tight hips and heavy quads. We&apos;re both small. We&apos;re both independent. We&apos;re both serving the same Archway community. The people who care enough to keep their bike running properly tend to be the same people who need to look after the body riding it.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Cyclist wellbeing, the other half of the service</h2>
          <p>
            Cycling is kind on the joints and hard on the soft tissue. Tight hip flexors, a stiff lower back, quads and calves that stay heavy for days after a big weekend in the saddle. That&apos;s exactly what our <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link> is built for, and the <Link href="/recovery-suite" className="text-[#0f767a] hover:text-page font-medium">Recovery Suite</Link> at 130 Junction Road adds Normatec full leg <Link href="/recovery-suite/compression-therapy" className="text-[#0f767a] hover:text-page font-medium">compression</Link> and an infrared sauna for the days between rides. We wrote a full guide to <Link href="/blog/sports-massage-cycling-recovery-archway" className="text-[#0f767a] hover:text-page font-medium">sports massage for cycling recovery</Link> if you want the detail. Bikeztube keeps the bike rolling smoothly. We keep the engine that pedals it moving just as well.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we look out for each other</h2>
          <p>
            Honest referrals, both ways. When clients ask Carlos where to take a bike that is skipping gears or overdue a service, Bikeztube at 118 is the answer, a one minute walk from our door. When a cyclist rolls into Bikeztube nursing a stiff back or legs that haven&apos;t recovered from the weekend, the team point them up the road to us. There&apos;s no formal scheme. No vouchers, no commission, no marketing dance. Just two shops on the same street looking after Archway&apos;s cyclists and their bikes.
          </p>

          <p>
            That&apos;s what cyclist wellbeing means on Junction Road. The bike and the body, sorted a few doors apart.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Visit Bikeztube Cycles</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            The shop is at 118 Junction Road, between Archway and Tufnell Park tube and a one minute walk from our clinic. Drop in for a service, a wheel build, a carbon repair or a chat about a custom build.
          </p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Visit bikeztube.co.uk <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/blog/sports-massage-cycling-recovery-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage for cycling recovery
            </Link>
            <Link href="/recovery-suite" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Recovery suite: sauna and compression
            </Link>
            <Link href="/about" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
