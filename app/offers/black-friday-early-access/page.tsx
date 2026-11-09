import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'
import { BASE_URL, buildBreadcrumbs, buildMetadata } from '@/lib/seo'

const PAGE_PATH = ROUTES.offers.blackFridayEarlyAccess

export const metadata: Metadata = buildMetadata({
  title: 'Early Black Friday: Free Infrared Sauna with Massage',
  description:
    'Book a 60 or 90-minute massage from 9–30 November 2026 and receive a free 45-minute private infrared sauna session at Range and Restore, Archway.',
  path: PAGE_PATH,
  image: `${BASE_URL}/vidalux-infrared-sauna-recovery-suite-archway-north-london.jpg`,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Early Black Friday Access', path: PAGE_PATH },
])

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Early Black Friday: Free 45-Minute Private Infrared Sauna with Massage',
  description:
    'Every qualifying 60-minute or 90-minute massage booked from 9 to 30 November 2026 includes one complimentary 45-minute private infrared sauna session, subject to availability. The sauna may be used with the massage or on another day up to 31 December 2026.',
  url: `${BASE_URL}${PAGE_PATH}`,
  priceCurrency: 'GBP',
  validFrom: '2026-11-09T00:00:00+00:00',
  validThrough: '2026-11-30T23:59:59+00:00',
  availability: 'https://schema.org/InStock',
  offeredBy: { '@id': `${BASE_URL}/#business` },
}

const included = [
  'One free 45-minute private infrared sauna session with every qualifying massage booking',
  '60-minute massages (£75) and 90-minute massages (£110)',
  'Every eligible booking counts — book two massages and receive two complimentary sauna sessions',
  'Use the sauna immediately before or after your massage, subject to availability',
  'Or arrange your complimentary sauna for another day, up to 31 December 2026',
]

export default function BlackFridayEarlyAccessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="eyebrow-sm">9–30 November 2026 &middot; Early Black Friday Access</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
              Your recovery, our treat.
            </h1>
            <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
              Book a 60 or 90-minute massage and enjoy a free 45-minute private infrared sauna session.
            </p>
            <p className="mt-5 text-page-muted max-w-2xl leading-relaxed">
              Relax tight muscles, switch off properly and discover our Recovery Suite. The offer applies to every qualifying massage you book during the promotional period.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BookingButton href={BOOKING_URLS.general} label="Book Now" />
              <span className="text-sm font-semibold text-page-muted">60 min · £75 &nbsp;|&nbsp; 90 min · £110</span>
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[390px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/vidalux-infrared-sauna-recovery-suite-archway-north-london.jpg"
              alt="Private infrared sauna in the Range and Restore Recovery Suite"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-ink/90 px-5 py-4 text-white backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-widest text-accent-light">Complimentary with every eligible booking</p>
              <p className="mt-1 font-bold">45 minutes in your own private infrared sauna</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">
          <section className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow-sm">The offer</p>
              <h2 className="text-3xl font-bold text-page">One massage. One sauna. Every time.</h2>
              <p className="mt-4 text-page-muted leading-relaxed">
                This is not limited to one sauna per client. Each eligible massage booking made between 9 and 30 November earns its own complimentary session.
              </p>
            </div>
            <div className="rounded-2xl border border-page bg-card p-6 sm:p-8">
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-page-muted">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-teal text-xs font-black text-white" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <div className="mb-6 max-w-2xl">
              <p className="eyebrow-sm">How it works</p>
              <h2 className="text-3xl font-bold text-page">Book, recover, feel the difference.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['1', 'Book your massage', 'Choose a 60 or 90-minute massage and complete your booking between 9 and 30 November 2026.'],
                ['2', 'Arrange your sauna', 'Contact us after booking or speak to the team. We will arrange it before or after your massage where availability allows.'],
                ['3', 'Use it by 31 December', 'If the same day does not suit you, book your complimentary private sauna for another day before the end of 2026.'],
              ].map(([step, title, body]) => (
                <div key={step} className="rounded-xl bg-page-sage p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-brand-teal">Step {step}</p>
                  <h3 className="mt-2 text-xl font-bold text-page">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-page-muted">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-brand-teal px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-accent-light">Early access ends 30 November</p>
                <h2 className="mt-2 text-3xl font-bold">Give your massage a little more room to work.</h2>
                <p className="mt-3 max-w-2xl text-white/75">
                  Book your qualifying treatment now, then let us know when you would like to enjoy the Recovery Suite.
                </p>
              </div>
              <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer" className="btn bg-white text-brand-teal hover:bg-white/90">
                Book Now
              </a>
            </div>
          </section>

          <section className="border-t border-page pt-8">
            <h2 className="text-xl font-bold text-page">Offer details</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-page-muted">
              Valid on qualifying 60-minute (£75) and 90-minute (£110) massage appointments booked from 9 to 30 November 2026. One complimentary 45-minute private infrared sauna session is included per qualifying massage booking. Sauna appointments are subject to availability and must be used by 31 December 2026. They may be taken immediately before or after the massage, or booked for another day. This promotion cannot be exchanged for cash or used against the price of the massage.
            </p>
            <p className="mt-4 text-sm text-page-muted">
              Want to see the space first? <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">Explore our private infrared sauna</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
