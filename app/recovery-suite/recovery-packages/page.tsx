import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { FaqAccordion } from '@/components/FaqAccordion'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Packages in Archway London – Sauna, Compression & Sports Massage',
  description: 'Combine infrared sauna, Normatec compression and sports massage in one visit. Recovery packages at Range and Restore, Archway North London. Book online.',
  path: '/recovery-suite/recovery-packages',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
  { name: 'Recovery Packages', path: '/recovery-suite/recovery-packages' },
])

const parentServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Recovery Packages',
  description: 'Combined recovery sessions pairing infrared sauna, Normatec compression and sports massage in one visit at Range and Restore, Archway, North London.',
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
    name: 'Recovery Packages',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauna + Sports Massage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compression + Sports Massage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Recovery Session (Sauna + Compression + Sports Massage)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sauna + Compression' } },
    ],
  },
}

const packages = [
  {
    name: 'Sauna + Sports Massage',
    sequence: '30 min sauna → 60 min massage',
    total: 'Around 90 minutes total',
    desc: 'Heat the muscles first, then hands-on work. A solid combo for general recovery, tightness or stress that has built up over the week.',
    bookingHref: BOOKING_URLS.packageSaunaMassage,
    popular: false,
  },
  {
    name: 'Compression + Sports Massage',
    sequence: '30 min Normatec → 60 min massage',
    total: 'Around 90 minutes total',
    desc: 'Flush the legs first, then targeted soft tissue work. A favourite for runners and anyone after a hard leg session.',
    bookingHref: BOOKING_URLS.packageCompressionMassage,
    popular: false,
  },
  {
    name: 'Full Recovery Session',
    sequence: '30 min sauna → 30 min Normatec → 60 min massage',
    total: 'Around 2 hours total',
    desc: 'The full sequence. Heat, compression, hands-on work, all in one visit. Ideal after races, big training blocks, busy weeks or long flights.',
    bookingHref: BOOKING_URLS.packageFullRecovery,
    popular: true,
  },
  {
    name: 'Sauna + Compression',
    sequence: '30 min sauna → 30 min Normatec',
    total: 'Around 60 minutes total',
    desc: 'Recovery without the massage. Useful between standalone massage sessions when you just want a quiet hour to reset.',
    bookingHref: BOOKING_URLS.packageSaunaCompression,
    popular: false,
  },
]

const faqs = [
  {
    q: 'Why combine sessions instead of booking them separately?',
    a: 'Two reasons. First, sequencing matters. Heat first, then compression, then hands-on work tends to feel better than the other way round, and combo bookings keep that order. Second, packages are priced as one session, which works out cheaper than booking each modality on its own.',
  },
  {
    q: 'How much total time should I block out?',
    a: 'Each package shows the rough total. Add 10 to 15 minutes either side for arrival, settling in and the cool-down before you head off. The Full Recovery Session is around two hours door to door.',
  },
  {
    q: 'Can I customise a package?',
    a: 'Yes. If a particular combo doesn\'t fit, give Carlos a call and he\'ll set it up manually. Packages just exist to make booking easy for the most common combinations.',
  },
  {
    q: 'Do massage bundle clients get a discount on packages?',
    a: 'Bundles cover the massage element. If you\'re a bundle client, you can add sauna or compression to your existing massage at standalone pricing. Speak to Carlos at the clinic and he\'ll sort it for you.',
  },
]

export default function RecoveryPackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parentServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Recovery Packages · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Recovery Packages – Sauna, Compression &amp; Sports Massage Combinations
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Combine sauna, Normatec compression and sports massage in one visit. Bookable as a single appointment, priced lower than booking the modalities separately.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.packageFullRecovery} label="Book a Recovery Package" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Why combine?</h2>
            <p className="text-page-muted mb-3">
              Sequencing makes a difference. Going from heat into compression into hands-on work means each step builds on the last. Your tissues are warm, circulation is up, and by the time Carlos starts the massage your body is already in a much better state to receive it.
            </p>
            <p className="text-page-muted">
              Packaging also keeps the maths simple. Each combo is priced as one session, which costs less than booking the parts separately and means you only block out one slot in your diary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Recovery packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-6 flex flex-col card-lift border-2 ${
                    pkg.popular ? 'bg-[#7dd94a] border-[#122a28]/15' : 'bg-card border-[#1a3d3a]'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-6 bg-[#122a28] text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                      Best Value
                    </span>
                  )}
                  <h3 className={`font-black text-lg leading-tight tracking-tight mb-2 ${pkg.popular ? 'text-[#122a28]' : 'text-page'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm font-bold mb-1 ${pkg.popular ? 'text-[#1a3d3a]' : 'text-[#2ab4b8]'}`}>{pkg.sequence}</p>
                  <p className={`text-xs font-semibold mb-3 ${pkg.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>{pkg.total}</p>
                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${pkg.popular ? 'text-[#1a3d3a]' : 'text-page-muted'}`}>{pkg.desc}</p>
                  <p className={`text-xs italic mb-4 ${pkg.popular ? 'text-[#1a3d3a]/80' : 'text-page-muted'}`}>
                    Pricing confirmed at booking.
                  </p>
                  <a
                    href={pkg.bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto text-sm font-bold py-2.5 px-4 rounded-full text-center transition-all ${
                      pkg.popular ? 'bg-[#122a28] text-white hover:bg-white hover:text-[#122a28]' : 'bg-[#1a3d3a]/10 text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white'
                    }`}
                  >
                    Book this package
                  </a>
                </div>
              ))}
            </div>
            <p className="text-page-muted text-sm mt-4 italic">
              Recovery Suite pricing is being finalised in Jane this month. Until then, you can book online or call Carlos directly to schedule any of these packages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect</h2>
            <ul className="space-y-2">
              {[
                'Arrive 10 minutes early so we can get you settled in',
                'Sauna first if your package includes it. Towels and water provided',
                'Compression next if your package includes it, sat or laid back with the boots and attachments fitted',
                'Hands-on sports massage to finish if your package includes it',
                'Cool down, rehydrate and chat to Carlos about anything you noticed during the session',
                'Pay one price at checkout, no need to manage three separate bookings',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

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

          {/* CTA */}
          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book a recovery package</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Recovery Suite booking is opening in Jane this month. Book online or call Carlos directly to schedule any of the packages above.
            </p>
            <div className="flex flex-row gap-3 flex-wrap">
              <BookingButton href={BOOKING_URLS.packageFullRecovery} label="Book Online" />
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="btn bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Infrared &amp; Traditional Hybrid Sauna
              </Link>
              <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Normatec Compression Therapy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
