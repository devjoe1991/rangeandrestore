import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Sessions in Archway London | Infrared Hybrid Sauna £15 & Massage Packages',
  description: 'Private Infrared Hybrid Sauna sessions £15 this July (usually £35) and combined sports massage and sauna packages from £85 at Range and Restore, Archway.',
  path: '/recovery-suite/recovery-packages',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
  { name: 'Recovery Sessions', path: '/recovery-suite/recovery-packages' },
])

const parentServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Recovery Sessions',
  description: 'Standalone single sessions, recovery combos and full recovery packages with sports massage at Range and Restore, Archway, North London.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'Archway', postalCode: 'N19 5LB' },
  },
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Recovery Sessions',
    itemListElement: [
      { '@type': 'Offer', price: '15.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Infrared Hybrid Sauna – 60 Minutes (July launch offer, usually £35)' } },
      { '@type': 'Offer', price: '85.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Sports Massage (30 Minutes) + Infrared Hybrid Sauna (45 Minutes)' } },
      { '@type': 'Offer', price: '110.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Sports Massage (60 Minutes) + Infrared Hybrid Sauna (30 Minutes)' } },
    ],
  },
}

const saunaSessions = [
  {
    name: 'Infrared Hybrid Sauna – 60 Minutes',
    sequence: '60 min · private use of the Recovery Suite',
    price: '£15',
    priceNote: 'July launch offer · usually £35',
    desc: 'A private full-hour infrared and traditional hybrid sauna session with the suite to yourself. Time to settle in, switch between traditional and infrared heat, and properly switch off. The simplest entry point into the Recovery Suite.',
    detailHref: '/recovery-suite/infrared-sauna',
  },
]

const recoveryWithMassage = [
  {
    name: 'Sports Massage (30 min) + Sauna Recovery (45 min)',
    sequence: '30 min sports massage + 45 min sauna recovery',
    total: '75 minutes total',
    price: '£85',
    desc: 'Targeted hands-on work on the area that needs it, then a full 45 minutes in the Recovery Suite. Ideal for a focused problem area plus proper recovery time.',
    popular: false,
  },
  {
    name: 'Sports Massage (60 min) + Sauna Recovery (30 min)',
    sequence: '60 min sports massage + 30 min sauna recovery',
    total: '90 minutes total',
    price: '£110',
    desc: 'A full-hour sports massage followed by heat in the Recovery Suite. The deeper option after races, big training blocks or busy weeks.',
    popular: true,
  },
]

const faqs = [
  {
    q: 'Can I book just a sauna session on its own?',
    a: 'Yes. The private Infrared Hybrid Sauna is a core part of the Recovery Suite. Book a 60 minute session for £15 this July (usually £35) without committing to a longer combined visit. It\'s the easiest entry point into the suite.',
  },
  {
    q: 'Do I have to add a massage to use the Recovery Suite?',
    a: 'No. Plenty of people use the suite for recovery only. The massage packages are there for clients who want to combine recovery with hands-on therapy in one visit.',
  },
  {
    q: 'Why book a package instead of booking massage and sauna separately?',
    a: 'Two reasons. First, the whole visit runs as one appointment, so the sequencing and timing are handled for you. Second, packages are priced as one session, which works out cheaper than booking each part on its own.',
  },
  {
    q: 'How much total time should I block out?',
    a: 'Each session shows the total. Add 10 to 15 minutes either side for arrival, settling in and the cool-down before you head off. The 90 minute package is around two hours door to door.',
  },
  {
    q: 'Can I customise a session or package?',
    a: 'Yes. If a particular combination doesn\'t fit, give Carlos a call and he\'ll set it up manually. The listed sessions just exist to make booking easy for the most common combinations.',
  },
  {
    q: 'Do massage bundle clients get a discount on packages?',
    a: 'Bundles cover the massage element. If you\'re a bundle client, you can add a sauna session to your existing massage at standalone pricing. Speak to Carlos at the clinic and he\'ll sort it for you.',
  },
]

interface SessionCard {
  name: string
  sequence: string
  total?: string
  price?: string
  priceNote?: string
  desc: string
  popular?: boolean
  detailHref?: string
  popularLabel?: string
}

function SessionCard({ session, popularLabel = 'Best Value' }: { session: SessionCard; popularLabel?: string }) {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col card-lift border-2 ${
        session.popular ? 'bg-[#7dd94a] border-[#122a28]/15' : 'bg-card border-[#1a3d3a]'
      }`}
    >
      {session.popular && (
        <span className="absolute -top-3 left-6 bg-[#122a28] text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
          {popularLabel}
        </span>
      )}
      <h3 className={`font-black text-lg leading-tight tracking-tight mb-2 ${session.popular ? 'text-[#122a28]' : 'text-page'}`}>
        {session.name}
      </h3>
      {session.price && (
        <p className={`text-2xl font-black mb-1 ${session.popular ? 'text-[#122a28]' : 'text-page'}`}>{session.price}</p>
      )}
      {session.priceNote && (
        <p className={`text-xs font-bold mb-1 ${session.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>{session.priceNote}</p>
      )}
      <p className={`text-sm font-bold mb-1 ${session.popular ? 'text-[#1a3d3a]' : 'text-[#0f767a]'}`}>{session.sequence}</p>
      {session.total && (
        <p className={`text-xs font-semibold mb-3 ${session.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>{session.total}</p>
      )}
      <p className={`text-sm leading-relaxed mb-5 flex-1 ${session.popular ? 'text-[#1a3d3a]' : 'text-page-muted'}`}>{session.desc}</p>
      <div className="mt-auto flex items-center justify-between gap-3 flex-wrap">
        <a
          href={BOOKING_URLS.recoverySuite}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${
            session.popular
              ? 'bg-[#122a28] text-white hover:bg-[#1a3d3a]'
              : 'bg-[#0f767a] text-white hover:bg-[#1a3d3a]'
          }`}
        >
          Book Now
        </a>
        {session.detailHref && (
          <Link
            href={session.detailHref}
            className={`text-xs font-black uppercase tracking-wide inline-flex items-center gap-1 ${session.popular ? 'text-[#122a28] hover:text-white' : 'text-[#0f767a] hover:text-page'}`}
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function RecoverySessionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parentServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Recovery Sessions &middot; Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Recovery Sessions in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Private Infrared Hybrid Sauna sessions £15 this July (usually £35), or combined sports massage and sauna recovery packages from £85. Built around how you want to recover.
          </p>
          <div className="mt-6">
            <a
              href={BOOKING_URLS.recoverySuite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Recovery Session
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-14">

          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Two ways to use the Recovery Suite</h2>
            <p className="text-page-muted mb-3">
              The Recovery Suite is built around two levels of session, so you can pick whatever fits the day. A private sauna session if you just want a quiet reset with the suite to yourself, or a combined package that pairs sports massage with sauna recovery in one visit.
            </p>
            <p className="text-page-muted">
              Every session is private. You get the whole suite to yourself, including the hybrid infrared and traditional sauna and the Hyperice Normatec 3 Full Body recovery system.
            </p>
          </section>

          {/* Section 1: Private Sauna Sessions */}
          <section>
            <span className="eyebrow block mb-2">Section 01</span>
            <h2 className="text-2xl font-bold text-page mb-3">Private Infrared Hybrid Sauna</h2>
            <p className="text-page-muted mb-6">
              The simplest way in. Private use of the Recovery Suite and its Infrared Hybrid Sauna, combining full spectrum infrared and traditional heat. Ideal for new clients dipping into the suite or regulars who want a session between training. Currently £15 for a private 60 minutes as part of our July launch offer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {saunaSessions.map((session) => (
                <SessionCard key={session.name} session={session} popularLabel="Most Popular" />
              ))}
            </div>
          </section>

          {/* Section 2: Sports Massage + Sauna Recovery */}
          <section>
            <span className="eyebrow block mb-2">Section 02</span>
            <h2 className="text-2xl font-bold text-page mb-3">Sports Massage + Sauna Recovery Packages</h2>
            <p className="text-page-muted mb-6">
              The deeper recovery. Combine the suite with the hands-on sports and soft tissue therapy Range and Restore is known for, booked as one appointment at one price.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {recoveryWithMassage.map((session) => (
                <SessionCard key={session.name} session={session} popularLabel="Best Value" />
              ))}
            </div>
          </section>

          {/* Why combine */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Why book a combined package?</h2>
            <p className="text-page-muted mb-3">
              Massage and heat work better together. Hands-on work releases the tissue, then time in the sauna keeps circulation up and gives your body proper time to settle before you head back out. The whole visit runs as one appointment, so the sequencing and timing are handled for you.
            </p>
            <p className="text-page-muted">
              Packaging also keeps the maths simple. Each package is priced as one session, which costs less than booking the parts separately and means you only block out one slot in your diary.
            </p>
          </section>

          {/* What to expect */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect on the day</h2>
            <ul className="space-y-2">
              {[
                'Arrive 10 minutes early so we can get you settled in',
                'The suite is private to you for your session. Towels and chilled water provided',
                'Hands-on sports massage if your package includes it',
                'Sauna time in the hybrid infrared and traditional cabin, with the Normatec recovery system available in the suite',
                'Cool down, rehydrate and chat to Carlos about anything you noticed during the session',
                'Pay one price at checkout, no need to manage multiple bookings',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#0f767a] flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Bundle clients */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Already on a massage bundle?</h2>
            <p className="text-page-muted">
              Bundle clients can add a sauna session to any standalone massage at clinic pricing. Just speak to Carlos at the start of your next appointment and he&apos;ll add it on for you. See the
              {' '}<Link href="/services/massage-bundles" className="text-[#0f767a] underline">Massage Bundles page</Link>{' '}
              for current bundle options.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          {/* Book Now CTA */}
          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Recovery Sessions now open at Range and Restore</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              The Recovery Suite is open in Archway, North London. A private 60 minute Infrared Hybrid Sauna is £15 this July (usually £35), and sports massage packages start from £85. Available to book now.
            </p>
            <a
              href={BOOKING_URLS.recoverySuite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1a2330] text-white font-black uppercase tracking-widest text-sm hover:bg-[#122a28] transition-colors"
            >
              Book Recovery Session
            </a>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recovery-suite/infrared-sauna" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                &rarr; Infrared Hybrid Sauna
              </Link>
              <Link href="/recovery-suite/compression-therapy" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                &rarr; Normatec Compression Therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
