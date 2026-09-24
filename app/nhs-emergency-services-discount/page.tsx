import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema, BASE_URL } from '@/lib/seo'
import { BOOKING_URLS, BUSINESS, NHS_DISCOUNT } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

const PAGE_PATH = ROUTES.nhsEmergencyServicesDiscount

export const metadata: Metadata = buildMetadata({
  title: 'NHS & Emergency Services Discount, Massage Archway N19',
  description:
    '£10 off full-priced massage at our Archway clinic for NHS, ambulance, police, fire and rescue and social care staff. Show your Blue Light Card or work ID on the day.',
  path: PAGE_PATH,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'NHS & Emergency Services Discount', path: PAGE_PATH },
])

const AREAS_SERVED = [
  { '@type': 'Place', name: 'Archway, London N19' },
  { '@type': 'Place', name: 'Upper Holloway, London N19' },
  { '@type': 'Place', name: 'Tufnell Park, London N7' },
  { '@type': 'Place', name: 'Holloway, London N7' },
  { '@type': 'Place', name: 'Islington, London N1' },
  { '@type': 'Place', name: 'Finsbury Park, London N4' },
  { '@type': 'Place', name: 'Stroud Green, London N4' },
  { '@type': 'Place', name: 'Crouch End, London N8' },
  { '@type': 'Place', name: 'Highgate, London N6' },
  { '@type': 'Place', name: 'Kentish Town, London NW5' },
]

const OFFER_DESCRIPTION =
  `${NHS_DISCOUNT.display} off each full-priced massage treatment at Range and Restore Sports Massage, 130 Junction Road, Archway, London N19 5LB, for NHS staff, ambulance service staff, police, fire and rescue service staff and eligible health and social care workers. Clients book as normal, then show a valid workplace ID or Blue Light Card at the clinic on the day. Once verified, ${NHS_DISCOUNT.display} comes off the session price; if the session has already been paid for, the ${NHS_DISCOUNT.display} is refunded to the original payment method or held as credit towards the next session. Range and Restore is not an official Blue Light Card partner. Not available on the Community Tuesday Clinic, massage bundles, recovery packages, memberships, gift cards or any other promotional offer.`

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  '@id': `${BASE_URL}${PAGE_PATH}#offer`,
  name: 'NHS and Emergency Services Discount',
  description: OFFER_DESCRIPTION,
  url: `${BASE_URL}${PAGE_PATH}`,
  discount: NHS_DISCOUNT.amount,
  discountCurrency: 'GBP',
  priceCurrency: 'GBP',
  offeredBy: { '@id': `${BASE_URL}/#business` },
  areaServed: AREAS_SERVED,
  availableAtOrFrom: {
    '@type': 'Place',
    name: 'Range and Restore Sports Massage',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '130 Junction Road',
      addressLocality: 'Archway',
      addressRegion: 'London',
      postalCode: 'N19 5LB',
      addressCountry: 'GB',
    },
  },
  itemOffered: {
    '@type': 'Service',
    name: 'Sports, Deep Tissue and Clinical Massage',
    serviceType: 'Sports Massage',
    provider: { '@id': `${BASE_URL}/#business` },
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NHS and Emergency Services Discount at Range and Restore Sports Massage',
  description: OFFER_DESCRIPTION,
  url: `${BASE_URL}${PAGE_PATH}`,
  isPartOf: { '@id': `${BASE_URL}/#business` },
  mainEntity: { '@id': `${BASE_URL}${PAGE_PATH}#offer` },
  about: { '@id': `${BASE_URL}/#business` },
  mentions: [
    { '@type': 'Thing', name: 'NHS staff discount' },
    { '@type': 'Thing', name: 'Blue Light Card' },
    { '@type': 'Thing', name: 'Emergency services discount' },
    { '@type': 'Thing', name: 'Sports massage' },
    { '@type': 'Thing', name: 'Whittington Hospital' },
  ],
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'Do you offer an NHS discount on sports massage?',
    a: `Yes. NHS staff get ${NHS_DISCOUNT.display} off every full-priced massage treatment at our clinic on Junction Road in Archway, N19. It applies to clinical and non-clinical NHS staff, there is no limit on how many times you can use it, and it runs all year rather than for a set period.`,
  },
  {
    q: 'Do you accept the Blue Light Card?',
    a: 'We accept a valid Blue Light Card as proof that you are eligible. Range and Restore is not an official Blue Light Card partner, so the discount is not redeemed through the card or the app — show it to your therapist at the clinic and we apply the discount ourselves. A workplace photo ID badge or NHS smartcard works just as well.',
  },
  {
    q: 'Who can claim the NHS and emergency services discount?',
    a: 'NHS staff, ambulance service staff including London Ambulance Service, police officers and police staff, fire and rescue service staff, and eligible health and social care workers such as paramedics, nurses, midwives, healthcare assistants, care home staff and community care workers. If you are not sure whether your role qualifies, ring the clinic on ' + BUSINESS.phone + ' before you book.',
  },
  {
    q: 'How do I get the discount?',
    a: `Book as normal, then show your ID at the start of your appointment. Once your therapist has checked it, ${NHS_DISCOUNT.display} comes off the price of that session. If you have already paid, you choose what happens to the ${NHS_DISCOUNT.display}: we refund it to the card you paid with, or hold it as credit against your next session.`,
  },
  {
    q: 'Can I use it alongside Community Tuesday, a bundle or another offer?',
    a: 'No. The discount applies to full-priced massage treatments only, so it cannot be combined with the Community Tuesday Clinic, massage bundles, recovery packages, Restore+ memberships, gift cards or any other promotional offer. Those have their own pricing.',
  },
  {
    q: 'Do I need to bring my ID every time?',
    a: 'Yes. We check it at each appointment, because the discount is applied per session rather than held on your account. Bringing your Blue Light Card or work badge with you takes a few seconds and keeps things simple at reception.',
  },
  {
    q: 'Does the discount cover the infrared sauna or compression therapy?',
    a: 'Not at the moment. It covers full-priced massage treatments. The Recovery Suite has its own pay-as-you-go pricing and membership options, and the sauna add-on offer is open to everyone.',
  },
]

const faqSchema = buildFaqSchema(faqs)

const eligible = [
  'NHS staff, clinical and non-clinical',
  'Ambulance service staff, including London Ambulance Service',
  'Police officers and police staff',
  'Fire and rescue service staff',
  'Paramedics, nurses, midwives and healthcare assistants',
  'Health and social care workers, including care home and community care staff',
]

const acceptedId = [
  'A valid Blue Light Card',
  'An NHS smartcard or photo ID badge',
  'A police, fire, ambulance or trust-issued photo ID badge',
  'A recent payslip or employment letter from an eligible service, with photo ID',
]

const steps = [
  {
    step: '1',
    title: 'Book as normal',
    body: 'Choose any full-priced massage treatment and book it the usual way. There is no code to enter and nothing to arrange beforehand.',
  },
  {
    step: '2',
    title: 'Bring your ID to the appointment',
    body: 'Show your Blue Light Card or workplace identification to your therapist at the start of the session so we can verify it.',
  },
  {
    step: '3',
    title: `Take the ${NHS_DISCOUNT.display} back`,
    body: `Once verified, ${NHS_DISCOUNT.display} comes off that session. If you have already paid, we refund it to your card or hold it as credit towards your next session. Your choice.`,
  },
]

export default function NhsEmergencyServicesDiscountPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero band ─────────────────────── */}
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">
            NHS &amp; Emergency Services &middot; Show your Blue Light Card or NHS ID &middot; Archway N19
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            NHS &amp; Emergency Services Discount: {NHS_DISCOUNT.display} Off Every Full-Priced Massage
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            For NHS staff, ambulance, police, fire and rescue, and health and social care workers across North London.
          </p>
          <p className="mt-4 text-page-muted max-w-2xl">
            Book as normal, show your Blue Light Card or workplace ID at the clinic on the day, {`and we take ${NHS_DISCOUNT.display} off.`} Every visit, all year.
          </p>
          <p className="mt-3 text-page-muted text-sm max-w-2xl">
            Range and Restore is not an official Blue Light Card partner. The discount isn&apos;t claimed through the Blue Light Card app: we check your card or ID at the clinic and apply it ourselves.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.general} label="Book Your Session" />
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">

          {/* ── Who can claim ─────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who can claim the discount?</h2>
            <p className="text-page-muted mb-4">
              The discount is open to anyone working in the following services:
            </p>
            <ul className="space-y-2">
              {eligible.map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-page-muted">
              Not sure whether your role qualifies? Ring the clinic on{' '}
              <a href={`tel:${BUSINESS.phoneTel}`} className="link-inline">{BUSINESS.phone}</a>{' '}
              before you book and we will tell you straight away.
            </p>
          </section>

          {/* ── How it works ─────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {steps.map((item) => (
                <div key={item.step} className="bg-page-sage rounded-xl p-5">
                  <p className="text-brand-teal text-[0.65rem] font-black uppercase tracking-widest mb-2">
                    Step {item.step}
                  </p>
                  <p className="font-bold text-page text-lg mb-2">{item.title}</p>
                  <p className="text-page-muted text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-page-muted text-sm">
              Our online booking system has no way of checking your ID, so we check it in person at the clinic. That keeps it fair for everyone who is entitled to it.
            </p>
          </section>

          {/* ── Accepted ID ─────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What identification do we accept?</h2>
            <p className="text-page-muted mb-3">Any one of the following, shown on the day:</p>
            <ul className="space-y-2">
              {acceptedId.map((item) => (
                <li key={item} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-page-muted text-sm">
              We look at your identification, apply the discount and hand it straight back. We do not photograph it, copy it or keep any record of it.
            </p>
          </section>

          {/* ── What it applies to ─────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What the discount applies to</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-page bg-card p-5">
                <p className="font-bold text-page mb-3">Included</p>
                <ul className="space-y-2 text-sm text-page-muted">
                  {[
                    'Sports & Deep Tissue Massage',
                    'Advanced Clinical Massage',
                    'Back & Neck Pain MOT',
                    'Cupping + Sports Massage',
                    'Manual Lymphatic Drainage (MLD)',
                    'Relaxation Massage',
                    '2-Hour Pain Relief Massage',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-teal font-black" aria-hidden="true">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-page bg-card p-5">
                <p className="font-bold text-page mb-3">Not included</p>
                <ul className="space-y-2 text-sm text-page-muted">
                  {[
                    'Community Tuesday Clinic sessions',
                    'Massage bundles',
                    'Recovery packages and Recovery Suite sessions',
                    'Restore+ memberships',
                    'Gift cards',
                    'Pregnancy Massage, Reflexology and the MSK Scan + Clinical Massage',
                    'Any other promotional offer or discount',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-page-muted font-black" aria-hidden="true">&times;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-page-muted text-sm">
              One discount per session, and it cannot be combined with anything else. Our{' '}
              <Link href={ROUTES.services.communityTuesdayClinic} className="link-inline">Community Tuesday Clinic</Link>{' '}
              and{' '}
              <Link href={ROUTES.services.massageBundles} className="link-inline">massage bundles</Link>{' '}
              have their own pricing, so choose whichever works out cheaper for you.
            </p>
          </section>

          {/* ── Why ─────────────────────── */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Why we offer it</h2>
            <p className="text-page-muted mb-4">
              Whittington Hospital is a short walk up the hill from 130 Junction Road, and a lot of our regular clients work there. Between them, our clients cover long shifts on their feet, lifting and turning patients, driving ambulances and working nights &mdash; the kind of work that shows up as back, neck and shoulder pain.
            </p>
            <p className="text-page-muted">
              We already donate treatments and gift vouchers to{' '}
              <Link href={ROUTES.givingBack} className="link-inline">Whittington Health Charity fundraising</Link>, and Carlos volunteers in the Phab recovery tent at the London Marathon. This discount does the same thing week to week, for the people who look after everyone else.
            </p>
          </section>

          {/* ── FAQs ─────────────────────── */}
          <section aria-labelledby="nhs-faqs">
            <h2 id="nhs-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-page bg-card p-5">
                  <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                  <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ─────────────────────── */}
          <section className="bg-accent rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-ink mb-4">
              Book your session and bring your ID
            </h2>
            <p className="text-brand-green font-semibold mb-6">
              Assessment-led sports and clinical massage in Archway, North London. Open Monday to Friday 08:00&ndash;20:00 and weekends 09:00&ndash;17:00, a short walk from Archway and Tufnell Park stations, so a session fits either side of a shift.
            </p>
            <BookingButton href={BOOKING_URLS.general} label="Book Your Session" />
          </section>

          {/* ── Related ─────────────────────── */}
          <div className="border-t border-page pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Explore more</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
                &rarr; Sports &amp; Deep Tissue Massage
              </Link>
              <Link href={ROUTES.services.backNeckPainMot} className="link-inline link-inline-tap">
                &rarr; Back &amp; Neck Pain MOT
              </Link>
              <Link href={ROUTES.givingBack} className="link-inline link-inline-tap">
                &rarr; The charities we support
              </Link>
              <Link href={ROUTES.areasServed.archwayN19} className="link-inline link-inline-tap">
                &rarr; Sports massage in Archway N19
              </Link>
              <Link href={ROUTES.corporateWellbeing} className="link-inline link-inline-tap">
                &rarr; Corporate massage for your team
              </Link>
              <Link href={ROUTES.contact} className="link-inline link-inline-tap">
                &rarr; Contact the clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
