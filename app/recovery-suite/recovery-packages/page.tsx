import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Sessions in Archway London | Infrared Sauna, Massage Packages & Memberships',
  description: 'Pay as you go Infrared & Traditional Hybrid Sauna from £19, sports massage and recovery packages from £85, plus Restore+ sauna and Signature Treatment memberships at Range and Restore, Archway.',
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
  description: 'Pay as you go Infrared & Traditional Hybrid Sauna sessions, sports massage recovery packages and Restore+ memberships at Range and Restore, Archway, North London.',
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
      { '@type': 'Offer', price: '19.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Infrared & Traditional Hybrid Sauna – 45 Minutes' } },
      { '@type': 'Offer', price: '29.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Infrared & Traditional Hybrid Sauna – 60 Minutes' } },
      { '@type': 'Offer', price: '85.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Sports Massage (30 Minutes) + Infrared Hybrid Sauna (45 Minutes)' } },
      { '@type': 'Offer', price: '90.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Sports Massage (60 Minutes) + Infrared Hybrid Sauna (30 Minutes)' } },
      { '@type': 'Offer', price: '110.00', priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Sports Massage (60 Minutes) + Normatec Compression Therapy (30 Minutes)' } },
    ],
  },
}

const saunaSessions = [
  {
    name: 'Infrared & Traditional Hybrid Sauna – 45 Minutes',
    sequence: '45 min · private use of the Recovery Suite',
    price: '£19',
    desc: 'A private 45 minutes in the Full Spectrum Infrared Hybrid Sauna, with the suite to yourself. The easiest way to fit recovery in around training or a busy week.',
    detailHref: '/recovery-suite/infrared-sauna',
  },
  {
    name: 'Infrared & Traditional Hybrid Sauna – 60 Minutes',
    sequence: '60 min · private use of the Recovery Suite',
    price: '£29',
    desc: 'A full hour to settle in, switch between traditional and infrared heat, and properly switch off. Our most popular standalone sauna session.',
    detailHref: '/recovery-suite/infrared-sauna',
    popular: true,
  },
]

const massageRecovery = [
  {
    name: 'Sports Massage + Sauna Recovery',
    sequence: '30 min sports massage + 45 min sauna',
    total: '75 minutes total',
    price: '£85',
    desc: 'Targeted hands-on work on the area that needs it, then a full 45 minutes in the sauna. Ideal for a focused problem area plus proper recovery time.',
  },
  {
    name: 'Sports Massage + Sauna Recovery',
    sequence: '60 min sports massage + 30 min sauna',
    total: '90 minutes total',
    price: '£90',
    desc: 'A full-hour sports massage followed by heat in the Recovery Suite. The deeper option after races, big training blocks or busy weeks.',
    popular: true,
  },
  {
    name: 'Sports Massage + Normatec Compression',
    sequence: '60 min sports massage + 30 min Normatec',
    total: '90 minutes total',
    price: '£110',
    desc: 'A full-hour sports massage followed by 30 minutes on the Hyperice Normatec 3 Full Body system. Hands-on release, then pneumatic compression to flush the legs.',
  },
]

const saunaMemberships = [
  {
    name: 'Restore+ Infrared Sauna Essential',
    price: '£49',
    period: '/month',
    detail: '4 × 45-minute Infrared & Traditional Hybrid Sauna sessions',
    desc: 'Ideal for reducing muscle tension, easing aches and pains, improving recovery and supporting your overall wellbeing.',
  },
  {
    name: 'Restore+ Infrared Sauna Plus',
    price: '£79',
    period: '/month',
    detail: '8 × 45-minute Infrared & Traditional Hybrid Sauna sessions',
    desc: 'Perfect for regular recovery, improving circulation and helping your body perform at its best.',
    popular: true,
  },
  {
    name: 'Restore+ Infrared Sauna Unlimited',
    price: '£119',
    period: '/month',
    detail: 'Unlimited 45-minute Infrared & Traditional Hybrid Sauna sessions',
    desc: 'The ultimate recovery membership for those who want unlimited access to relax, recover and recharge whenever you need.',
  },
]

const signatureMemberships = [
  {
    name: 'Restore+ Signature Treatment Essential',
    price: '£70',
    period: '/month',
    detail: '1 × 60-minute Signature Treatment every month',
    desc: 'Ideal for regular maintenance, reducing pain and stiffness, improving mobility and preventing small problems becoming bigger ones.',
  },
  {
    name: 'Restore+ Signature Treatment Plus',
    price: '£100',
    period: '/month',
    detail: '1 × 90-minute Signature Treatment every month',
    desc: 'Perfect for persistent aches and pains, active lifestyles, more comprehensive treatment and faster recovery.',
    popular: true,
  },
  {
    name: 'Restore+ Signature Treatment Elite',
    price: '£179',
    period: '/month',
    detail: '2 × 90-minute Signature Treatments every month',
    desc: 'The ultimate membership for long-term pain management, peak physical performance, consistent recovery and feeling and moving your best.',
  },
]

const faqs = [
  {
    q: 'Can I book just a sauna session on its own?',
    a: 'Yes. The private Infrared & Traditional Hybrid Sauna is a core part of the Recovery Suite. Book a 45-minute session for £19 or a 60-minute session for £29 without committing to a longer combined visit. It\'s the easiest entry point into the suite.',
  },
  {
    q: 'What\'s the difference between the massage and sauna package and the massage and Normatec package?',
    a: 'Both start with a full 60-minute sports massage. The £90 package finishes with 30 minutes in the Infrared Hybrid Sauna, while the £110 package finishes with 30 minutes on the Hyperice Normatec 3 Full Body compression system. Choose the sauna for heat-based recovery, or the Normatec if you want your legs flushed after a long run, ride or leg session.',
  },
  {
    q: 'How do the Restore+ memberships work?',
    a: 'Restore+ memberships are monthly plans. The Infrared Sauna memberships give you a set number of 45-minute sauna sessions each month (or unlimited on the top tier), and the Signature Treatment memberships give you one or two Signature Treatments a month at a saving on the usual price. Memberships are set up personally rather than bought online, so give us a call or drop us an email to join.',
  },
  {
    q: 'Why book a package instead of booking massage and sauna separately?',
    a: 'Two reasons. First, the whole visit runs as one appointment, so the sequencing and timing are handled for you. Second, packages are priced as one session, which works out cheaper than booking each part on its own.',
  },
  {
    q: 'How much total time should I block out?',
    a: 'Each session shows the total. Add 10 to 15 minutes either side for arrival, settling in and the cool-down before you head off. The 90 minute packages are around two hours door to door.',
  },
  {
    q: 'Can I customise a session or package?',
    a: 'Yes. If a particular combination doesn\'t fit, give us a call and we\'ll set it up manually. The listed sessions just exist to make booking easy for the most common combinations.',
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
        session.popular ? 'bg-accent border-brand-green-dark/15' : 'bg-card border-brand-green'
      }`}
    >
      {session.popular && (
        <span className="absolute -top-3 left-6 bg-brand-green-dark text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
          {popularLabel}
        </span>
      )}
      <h3 className={`font-black text-lg leading-tight tracking-tight mb-2 ${session.popular ? 'text-brand-green-dark' : 'text-page'}`}>
        {session.name}
      </h3>
      {session.price && (
        <p className={`text-2xl font-black mb-1 ${session.popular ? 'text-brand-green-dark' : 'text-page'}`}>{session.price}</p>
      )}
      {session.priceNote && (
        <p className={`text-xs font-bold mb-1 ${session.popular ? 'text-brand-green/80' : 'text-page-muted'}`}>{session.priceNote}</p>
      )}
      <p className={`text-sm font-bold mb-1 ${session.popular ? 'text-brand-green' : 'text-brand-teal'}`}>{session.sequence}</p>
      {session.total && (
        <p className={`text-xs font-semibold mb-3 ${session.popular ? 'text-brand-green/80' : 'text-page-muted'}`}>{session.total}</p>
      )}
      <p className={`text-sm leading-relaxed mb-5 flex-1 ${session.popular ? 'text-brand-green' : 'text-page-muted'}`}>{session.desc}</p>
      <div className="mt-auto flex items-center justify-between gap-3 flex-wrap">
        <a
          href={BOOKING_URLS.recoverySuite}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-colors ${
            session.popular
              ? 'bg-brand-green-dark text-white hover:bg-brand-green'
              : 'bg-brand-teal text-white hover:bg-brand-green'
          }`}
        >
          Book Now
        </a>
        {session.detailHref && (
          <Link
            href={session.detailHref}
            className={`text-xs font-black uppercase tracking-wide inline-flex items-center gap-1 ${session.popular ? 'text-brand-green-dark hover:text-white' : 'text-brand-teal hover:text-page'}`}
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  )
}

interface Membership {
  name: string
  price: string
  period: string
  usual?: string
  detail: string
  desc?: string
  saving?: string
  popular?: boolean
}

function MembershipCard({ m, popularLabel = 'Most Popular' }: { m: Membership; popularLabel?: string }) {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col card-lift border-2 ${
        m.popular ? 'bg-accent border-brand-green-dark/15' : 'bg-card border-brand-green'
      }`}
    >
      {m.popular && (
        <span className="absolute -top-3 left-6 bg-brand-green-dark text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
          {popularLabel}
        </span>
      )}
      <h3 className={`font-black text-lg leading-tight tracking-tight mb-2 ${m.popular ? 'text-brand-green-dark' : 'text-page'}`}>
        {m.name}
      </h3>
      <p className={`mb-1 ${m.popular ? 'text-brand-green-dark' : 'text-page'}`}>
        <span className="text-3xl font-black">{m.price}</span>
        <span className="text-sm font-bold">{m.period}</span>
      </p>
      {m.usual && (
        <p className={`text-xs font-bold mb-2 line-through ${m.popular ? 'text-brand-green/70' : 'text-page-muted'}`}>{m.usual}</p>
      )}
      <p className={`text-sm font-bold mb-2 ${m.popular ? 'text-brand-green' : 'text-brand-teal'}`}>{m.detail}</p>
      {m.desc && (
        <p className={`text-sm leading-relaxed mb-3 flex-1 ${m.popular ? 'text-brand-green' : 'text-page-muted'}`}>{m.desc}</p>
      )}
      {m.saving && (
        <span className={`self-start text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mt-auto ${
          m.popular ? 'bg-brand-green-dark text-accent' : 'bg-accent text-ink'
        }`}>
          {m.saving}
        </span>
      )}
    </div>
  )
}

export default function RecoverySessionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parentServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Recovery Sessions &middot; Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Recovery Sessions in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Pay as you go Infrared &amp; Traditional Hybrid Sauna from £19, sports massage recovery packages from £85, and Restore+ monthly memberships. Built around how you want to recover.
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
            <h2 className="text-2xl font-bold text-page mb-4">Two ways to recover</h2>
            <p className="text-page-muted mb-3">
              Use the Recovery Suite pay as you go, or join a Restore+ membership if recovery is part of your routine. Every session is private, with the whole suite to yourself, including the hybrid infrared and traditional sauna and the Hyperice Normatec 3 Full Body recovery system.
            </p>
            <p className="text-page-muted">
              Pay as you go covers standalone sauna sessions and combined sports massage packages. Restore+ memberships give you regular sauna access or Signature Treatments every month at a saving.
            </p>
          </section>

          {/* PAYG heading */}
          <section>
            <span className="eyebrow block mb-2">Pay As You Go</span>
            <h2 className="text-2xl font-bold text-page mb-3">Single sessions and recovery packages</h2>
            <p className="text-page-muted">
              No commitment. Book a private sauna session on its own, or combine sports massage with sauna or Normatec compression in one appointment.
            </p>
          </section>

          {/* Section 1: Private Sauna Sessions */}
          <section>
            <h3 className="text-xl font-bold text-page mb-3">Infrared &amp; Traditional Hybrid Sauna</h3>
            <p className="text-page-muted mb-6">
              The simplest way in. Private use of the Recovery Suite and its Full Spectrum Infrared Hybrid Sauna, combining full spectrum infrared and traditional heat. Ideal for new clients dipping into the suite or regulars who want a session between training.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {saunaSessions.map((session) => (
                <SessionCard key={session.price} session={session} popularLabel="Most Popular" />
              ))}
            </div>
          </section>

          {/* Section 2: Massage + Recovery packages */}
          <section>
            <h3 className="text-xl font-bold text-page mb-3">Massage + Recovery Packages</h3>
            <p className="text-page-muted mb-6">
              The deeper recovery. Combine the suite with the hands-on sports and soft tissue therapy Range and Restore is known for, booked as one appointment at one price. Finish with heat in the sauna or compression on the Normatec.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {massageRecovery.map((session) => (
                <SessionCard key={session.price} session={session} popularLabel="Best Value" />
              ))}
            </div>
          </section>

          {/* Restore+ Infrared Sauna Memberships */}
          <section>
            <span className="eyebrow block mb-2">Restore+ Memberships</span>
            <h2 className="text-2xl font-bold text-page mb-3">Restore+ Infrared Sauna Memberships</h2>
            <p className="text-page-muted mb-6">
              Monthly sauna access for anyone who wants recovery to be a habit rather than a one-off. Every session is a private 45 minutes in the Infrared &amp; Traditional Hybrid Sauna.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {saunaMemberships.map((m) => (
                <MembershipCard key={m.name} m={m} />
              ))}
            </div>
          </section>

          {/* Restore+ Signature Treatment Memberships */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-3">Restore+ Signature Treatment Memberships</h2>
            <p className="text-page-muted mb-6">
              Regular hands-on treatment every month, at a saving on the usual price. Designed to reduce pain, improve mobility, speed up recovery and keep you performing at your best.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              {signatureMemberships.map((m) => (
                <MembershipCard key={m.name} m={m} />
              ))}
            </div>
            <div className="bg-page-sage rounded-2xl p-6">
              <p className="font-bold text-page mb-2">What is a Signature Treatment?</p>
              <p className="text-page-muted text-sm">
                Every Signature Treatment is tailored entirely to you. Rather than choosing a specific massage technique, you book the appointment length, and your Sports &amp; Soft Tissue Remedial Therapist will listen, assess and personalise your treatment using the most appropriate combination of advanced massage and soft tissue techniques to relieve pain, improve movement and support your recovery.
              </p>
            </div>
          </section>

          {/* Membership join note */}
          <section className="bg-card border-2 border-brand-green rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-page mb-3">How to join a membership</h2>
            <p className="text-page-muted mb-5">
              To join a Restore+ membership, please call or email us. Memberships are set up personally and are not currently available to purchase online.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-primary text-sm">Call {BUSINESS.phone}</a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-page text-sm font-bold hover:text-brand-teal transition-colors min-h-[44px] flex items-center underline underline-offset-2"
              >
                Email {BUSINESS.email}
              </a>
            </div>
          </section>

          {/* Why combine */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Why book a combined package?</h2>
            <p className="text-page-muted mb-3">
              Massage and recovery work better together. Hands-on work releases the tissue, then time in the sauna or on the Normatec keeps circulation up and gives your body proper time to settle before you head back out. The whole visit runs as one appointment, so the sequencing and timing are handled for you.
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
                'The suite is private to you for your session. Fresh towels, chilled water and a Bluetooth speaker provided',
                'Hands-on sports massage if your package includes it',
                'Sauna time in the hybrid infrared and traditional cabin, or compression on the Normatec recovery system',
                'Cool down, rehydrate and chat to your therapist about anything you noticed during the session',
                'Pay one price at checkout, no need to manage multiple bookings',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Bundle clients */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Already on a massage bundle?</h2>
            <p className="text-page-muted">
              Bundle clients can add a sauna session to any standalone massage at pay as you go pricing. Just speak to your therapist at the start of your next appointment and they&apos;ll add it on for you. See the
              {' '}<Link href={ROUTES.services.massageBundles} className="text-brand-teal underline">Massage Bundles page</Link>{' '}
              for current bundle options.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          {/* Book Now CTA */}
          <section className="bg-accent rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-ink mb-4">Recovery Sessions at Range and Restore</h2>
            <p className="text-brand-green font-semibold mb-6">
              The Recovery Suite is open in Archway, North London. Private Infrared &amp; Traditional Hybrid Sauna sessions from £19, and sports massage recovery packages from £85. Available to book now, with Restore+ memberships available on request.
            </p>
            <a
              href={BOOKING_URLS.recoverySuite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-white font-black uppercase tracking-widest text-sm hover:bg-brand-green-dark transition-colors"
            >
              Book Recovery Session
            </a>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline link-inline-tap">
                &rarr; Infrared Hybrid Sauna
              </Link>
              <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline link-inline-tap">
                &rarr; Normatec Compression Therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
