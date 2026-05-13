import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { ComingSoonBadge } from '@/components/ComingSoonBadge'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Sessions in Archway London | Sauna, Compression & Sports Massage',
  description: 'Standalone recovery, sauna and compression combos, or full recovery sessions paired with sports massage. Recovery Sessions at Range and Restore, Archway North London. Opening soon.',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauna Session' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compression Session' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauna + Compression Recovery Session' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauna + Sports Massage Package' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compression + Sports Massage Package' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Recovery Session (Sauna + Compression + Sports Massage)' } },
    ],
  },
}

const singleSessions = [
  {
    name: 'Sauna Session',
    sequence: '30 or 45 min · solo or two person',
    desc: 'A focused infrared and traditional hybrid sauna session. The simplest entry point into the Recovery Suite.',
    detailHref: '/recovery-suite/infrared-sauna',
  },
  {
    name: 'Compression Session',
    sequence: '30 or 45 min · legs only or full body',
    desc: 'Hyperice Normatec 3 Full Body. Pneumatic compression for the legs, hips and arms.',
    detailHref: '/recovery-suite/compression-therapy',
  },
]

const recoveryCombos = [
  {
    name: 'Sauna + Compression',
    sequence: '30 min sauna → 30 min Normatec',
    total: 'Around 60 minutes total',
    desc: 'A complete recovery session without the massage. Ideal between standalone massage sessions or for clients who want a quiet hour to reset.',
    popular: true,
  },
]

const recoveryWithMassage = [
  {
    name: 'Sauna + Sports Massage',
    sequence: '30 min sauna → 60 min massage',
    total: 'Around 90 minutes total',
    desc: 'Heat the muscles first, then hands-on work. A solid combo for general recovery, tightness or stress that has built up over the week.',
    popular: false,
  },
  {
    name: 'Compression + Sports Massage',
    sequence: '30 min Normatec → 60 min massage',
    total: 'Around 90 minutes total',
    desc: 'Flush the legs first, then targeted soft tissue work. A favourite for runners and anyone after a hard leg session.',
    popular: false,
  },
  {
    name: 'Full Recovery Session',
    sequence: '30 min sauna → 30 min Normatec → 60 min massage',
    total: 'Around 2 hours total',
    desc: 'The full sequence. Heat, compression, hands-on work, all in one visit. Ideal after races, big training blocks, busy weeks or long flights.',
    popular: true,
  },
]

const faqs = [
  {
    q: 'Can I book just a sauna or just a Normatec session on its own?',
    a: 'Yes. Single sessions are a core part of the Recovery Suite. Book a sauna or compression session on its own without committing to a longer combined visit. They\'re the easiest entry point into the suite.',
  },
  {
    q: 'Do I have to add a massage to use the Recovery Suite?',
    a: 'No. Plenty of people will use the suite for recovery only, either a single modality or the Sauna + Compression combo. The massage packages are there for clients who want to combine recovery with hands-on therapy.',
  },
  {
    q: 'Why combine sessions instead of booking them separately?',
    a: 'Two reasons. First, sequencing matters. Heat first, then compression, then hands-on work tends to feel better than the other way round, and combo bookings keep that order. Second, packages are priced as one session, which works out cheaper than booking each modality on its own.',
  },
  {
    q: 'How much total time should I block out?',
    a: 'Each session shows the rough total. Add 10 to 15 minutes either side for arrival, settling in and the cool-down before you head off. The Full Recovery Session is around two hours door to door.',
  },
  {
    q: 'Can I customise a session or package?',
    a: 'Yes. If a particular combination doesn\'t fit, give Carlos a call and he\'ll set it up manually. The listed sessions just exist to make booking easy for the most common combinations.',
  },
  {
    q: 'Do massage bundle clients get a discount on packages?',
    a: 'Bundles cover the massage element. If you\'re a bundle client, you can add sauna or compression to your existing massage at standalone pricing. Speak to Carlos at the clinic and he\'ll sort it for you.',
  },
]

interface SessionCard {
  name: string
  sequence: string
  total?: string
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
      <p className={`text-sm font-bold mb-1 ${session.popular ? 'text-[#1a3d3a]' : 'text-[#2ab4b8]'}`}>{session.sequence}</p>
      {session.total && (
        <p className={`text-xs font-semibold mb-3 ${session.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>{session.total}</p>
      )}
      <p className={`text-sm leading-relaxed mb-5 flex-1 ${session.popular ? 'text-[#1a3d3a]' : 'text-page-muted'}`}>{session.desc}</p>
      <p className={`text-xs italic mb-4 ${session.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>
        Pricing announced at launch.
      </p>
      <div className="mt-auto flex items-center justify-between gap-3 flex-wrap">
        <ComingSoonBadge size="sm" label="Coming Soon" />
        {session.detailHref && (
          <Link
            href={session.detailHref}
            className={`text-xs font-black uppercase tracking-wide inline-flex items-center gap-1 ${session.popular ? 'text-[#122a28] hover:text-white' : 'text-[#2ab4b8] hover:text-page'}`}
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

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Recovery Sessions &middot; Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Recovery Sessions in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Standalone single sessions, recovery combos without massage, or full recovery packages with sports massage. Built around how you want to recover.
          </p>
          <div className="mt-6">
            <ComingSoonBadge />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-14">

          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Three ways to use the Recovery Suite</h2>
            <p className="text-page-muted mb-3">
              The Recovery Suite is built around three levels of session, so you can pick whatever fits the day. A simple single session if you just want a quick reset. A combined recovery session without massage if you want a complete recovery experience on its own. Or a full recovery package paired with sports massage if you want everything in one visit.
            </p>
            <p className="text-page-muted">
              Single sessions and combos are first-class options, not just stepping stones to the bigger packages. Some clients will only ever use the standalone recovery side, others will combine it with massage. Both work.
            </p>
          </section>

          {/* Section 1: Single Sessions */}
          <section>
            <span className="eyebrow block mb-2">Section 01</span>
            <h2 className="text-2xl font-bold text-page mb-3">Single Sessions</h2>
            <p className="text-page-muted mb-6">
              The simplest way in. A single piece of kit, a single decision. Ideal for new clients dipping into the Recovery Suite or regulars who just want a quick session between training.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {singleSessions.map((session) => (
                <SessionCard key={session.name} session={session} />
              ))}
            </div>
          </section>

          {/* Section 2: Recovery Combos */}
          <section>
            <span className="eyebrow block mb-2">Section 02</span>
            <h2 className="text-2xl font-bold text-page mb-3">Recovery Combos</h2>
            <p className="text-page-muted mb-6">
              A complete recovery session without the massage. Ideal for between-massage maintenance, post-event recovery, or anyone who wants the full Recovery Suite experience on its own.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {recoveryCombos.map((session) => (
                <SessionCard key={session.name} session={session} popularLabel="Most Popular Recovery Session" />
              ))}
            </div>
          </section>

          {/* Section 3: Recovery + Sports Massage */}
          <section>
            <span className="eyebrow block mb-2">Section 03</span>
            <h2 className="text-2xl font-bold text-page mb-3">Recovery + Sports Massage</h2>
            <p className="text-page-muted mb-6">
              The deeper recovery. Combine the suite with the hands-on sports and soft tissue therapy Range and Restore is known for. Sequencing is built in: heat first, then compression, then massage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recoveryWithMassage.map((session) => (
                <SessionCard key={session.name} session={session} popularLabel="Best Value" />
              ))}
            </div>
          </section>

          {/* Why combine */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Why book a combined session?</h2>
            <p className="text-page-muted mb-3">
              Sequencing makes a difference. Going from heat into compression into hands-on work means each step builds on the last. Your tissues are warm, circulation is up, and by the time the massage starts your body is in a much better state to receive it.
            </p>
            <p className="text-page-muted">
              Packaging also keeps the maths simple. Each combo will be priced as one session, which costs less than booking the parts separately and means you only block out one slot in your diary.
            </p>
          </section>

          {/* What to expect */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect on the day</h2>
            <ul className="space-y-2">
              {[
                'Arrive 10 minutes early so we can get you settled in',
                'Sauna first if your session includes it. Towels and water provided',
                'Compression next if your session includes it, sat or laid back with the boots and attachments fitted',
                'Hands-on sports massage to finish if your session includes it',
                'Cool down, rehydrate and chat to Carlos about anything you noticed during the session',
                'Pay one price at checkout, no need to manage multiple bookings',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Bundle clients */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Already on a massage bundle?</h2>
            <p className="text-page-muted">
              Bundle clients can add sauna or compression to any standalone massage at clinic pricing. Just speak to Carlos at the start of your next appointment and he&apos;ll add it on for you. See the
              {' '}<Link href="/services/massage-bundles" className="text-[#2ab4b8] underline">Massage Bundles page</Link>{' '}
              for current bundle options.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          {/* Coming Soon CTA */}
          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Recovery Sessions opening soon at Range and Restore</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              The new Recovery Suite is being built right now. Single sessions, recovery combos and full recovery packages launching soon in Archway, North London.
            </p>
            <ComingSoonBadge />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                &rarr; Infrared &amp; Traditional Hybrid Sauna
              </Link>
              <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                &rarr; Normatec Compression Therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
