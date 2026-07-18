import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { AwardStrip } from '@/components/AwardStrip'
import { ReviewsStrip } from '@/components/ReviewsStrip'
import { SaunaRoomStrip } from '@/components/SaunaRoomStrip'
import { BookingButton } from '@/components/BookingButton'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Services in Archway N19 | Range and Restore',
  description: 'Sports, deep tissue, cupping, MLD and relaxation massage in Archway. BTEC L5 therapist Carlos Bonvicine. 5★ rated. From £50 · book online.',
  path: '/services',
})

/* Short titles for the compact cards; schemaName keeps the full keyword-rich
   name in the CollectionPage ItemList so search listings are unchanged. */
const treatments = [
  {
    title: 'MSK Scan + Clinical Massage',
    schemaName: 'MSK Injury Assessment, Diagnostic Ultrasound & Clinical Massage',
    href: '/services/msk-ultrasound-clinical-massage',
    bookingHref: BOOKING_URLS.mskUltrasoundMassage,
    badge: 'New',
    price: '£165 total',
    detail: 'approx. 90 min',
    description: 'Diagnostic MSK ultrasound with our partner Reliable Scan, then a 60-minute clinical massage guided by the findings. £75 booked online, £90 paid direct to Reliable Scan.',
  },
  {
    title: 'Community Tuesday Clinic',
    schemaName: 'Community Tuesday Clinic',
    href: '/services/community-tuesday-clinic',
    bookingHref: BOOKING_URLS.communityTuesday,
    badge: 'Tuesdays',
    price: 'From £60',
    detail: '60 / 90 min',
    description: 'The same expert treatment at more accessible community pricing. Back pain, neck pain, sports injuries, muscle tension and mobility — every Tuesday.',
  },
  {
    title: 'Back & Neck Pain MOT',
    schemaName: 'Back & Neck Pain MOT',
    href: '/services/back-neck-pain-mot',
    bookingHref: BOOKING_URLS.backNeckMot,
    price: 'From £50',
    detail: '30 / 60 / 90 min',
    description: 'Focused assessment and treatment for persistent lower back pain, desk-related neck pain, postural issues and spinal stiffness.',
  },
  {
    title: 'Advanced Clinical Massage',
    schemaName: 'Advanced Clinical Massage & Soft Tissue Remedial Therapy',
    href: '/services/advanced-clinical-massage',
    bookingHref: BOOKING_URLS.advancedClinical,
    price: 'From £50',
    detail: '30 / 60 / 90 min',
    description: 'Expert clinical massage for sciatica, chronic neck pain, tension headaches, RSI and complex postural conditions.',
  },
  {
    title: 'Sports & Deep Tissue Massage',
    schemaName: 'Sports, Deep Tissue & Soft Tissue Remedial Massage',
    href: '/services/sports-deep-tissue-massage',
    bookingHref: BOOKING_URLS.sportsDeepTissue,
    price: 'From £50',
    detail: '30 / 60 / 90 min',
    description: 'Targeted treatment for muscle tightness, runner\'s knee, shoulder tension, calf tightness, injury recovery and performance support.',
  },
  {
    title: 'Cupping + Deep Tissue Massage',
    schemaName: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage',
    href: '/services/advanced-cupping-sports-deep-tissue',
    bookingHref: BOOKING_URLS.cuppingSportsDeepTissue,
    price: 'From £60',
    detail: '30 / 60 / 90 min',
    description: 'Integrated cupping combined with sports and deep tissue massage — targets deep muscle tension, fascial restrictions and long-standing adhesions.',
  },
  {
    title: '2-Hour Pain Relief Massage',
    schemaName: '2-Hour Pain Relief Massage',
    href: '/services/2-hour-pain-relief-massage',
    bookingHref: BOOKING_URLS.twoHourRelief,
    price: '£170',
    detail: '2 hours',
    description: 'An extended, comprehensive session for complex or long-standing conditions, multiple problem areas and deeper recovery work.',
  },
  {
    title: 'Manual Lymphatic Drainage',
    schemaName: 'Manual Lymphatic Drainage (MLD)',
    href: '/services/manual-lymphatic-drainage',
    bookingHref: BOOKING_URLS.mld,
    price: 'From £50',
    detail: '30 / 60 / 90 min',
    description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling and immune support. Gentle and non-invasive.',
  },
  {
    title: 'Relaxation Massage',
    schemaName: 'Relaxation Restorative Massage',
    href: '/services/relaxation-restorative-massage',
    bookingHref: BOOKING_URLS.relaxation,
    price: 'From £50',
    detail: '30 / 60 / 90 min',
    description: 'Gentle, calming treatment designed to reduce stress, ease mild tension and restore your sense of balance.',
  },
  {
    title: 'Massage Bundles',
    schemaName: 'Massage Bundle Offers',
    href: '/services/massage-bundles',
    bookingHref: BOOKING_URLS.bundles,
    badge: 'Save',
    price: 'From £350',
    detail: '5 or 10 sessions',
    description: 'Save with 5 or 10 session bundles for 60 or 90 minute treatments. From £350 for 5 × 60 min sessions.',
  },
]

const recoveryServices = [
  {
    title: 'Infrared Hybrid Sauna',
    schemaName: 'Infrared Hybrid Sauna (Recovery Suite)',
    href: '/recovery-suite/infrared-sauna',
    bookingHref: BOOKING_URLS.recoverySuite,
    badge: 'July Offer',
    price: '£15',
    detail: 'usually £35 · 60 min private',
    description: 'Two-person Vidalux hybrid cabin with traditional and full-spectrum infrared heat. Built for muscle recovery, better sleep and circulation.',
    image: '/recovery-suite/vidalux-hybrid-infrared-sauna-archway.webp',
    imageAlt: 'Vidalux two person hybrid infrared sauna at the Recovery Suite, Range and Restore, Archway, North London',
  },
  {
    title: 'Normatec Compression',
    schemaName: 'Normatec Compression Therapy (Recovery Suite)',
    href: '/recovery-suite/compression-therapy',
    bookingHref: BOOKING_URLS.recoverySuite,
    price: 'Recovery Suite session',
    detail: '',
    description: 'Hyperice Normatec 3 Full Body pneumatic compression for legs, hips and arms. Reduces DOMS and flushes tired legs after long runs, rides or shifts.',
    image: '/recovery-suite/normatec-compression-therapy-archway.jpg',
    imageAlt: 'Client on the treatment table wearing the Hyperice Normatec 3 Full Body compression system at Range and Restore, Archway, North London',
  },
  {
    title: 'Massage + Sauna Packages',
    schemaName: 'Sports Massage + Sauna Recovery Packages (Recovery Suite)',
    href: '/recovery-suite/recovery-packages',
    bookingHref: BOOKING_URLS.recoverySuite,
    price: 'From £85',
    detail: '75 or 90 min',
    description: 'Hands-on sports massage plus private Recovery Suite time, booked as one appointment. 30 min massage + 45 min sauna, or 60 + 30.',
    image: '/infrared-hybrid-sauna-red-light-recovery-suite-archway-north-london.jpg',
    imageAlt: 'Infrared Hybrid Sauna glowing red beside the recliner in the private Recovery Suite at Range and Restore, Archway, North London',
  },
]

const breadcrumbs = buildBreadcrumbs([{ name: 'Services', path: '/services' }])

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Sports Massage Services in Archway, North London',
  description: 'Expert sports massage, deep tissue therapy, MLD and relaxation massage in Archway, North London.',
  url: 'https://rangeandrestore.co.uk/services',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [...treatments, ...recoveryServices].map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.schemaName,
      url: `https://rangeandrestore.co.uk${s.href}`,
    })),
  },
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="relative bg-[#1a3d3a] pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=75"
          alt="Sports massage treatment in progress"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Sports Massage Services in Archway, North London</h1>
          <p className="mt-4 text-xl text-[#d4ecea]/90 max-w-2xl">
            Personalised, assessment-led treatment for pain relief, mobility, injury recovery, and long-term results.
          </p>
          <p className="mt-3 text-[#d4ecea]/70 max-w-2xl">
            Back pain, running injuries, runner&apos;s knee, shoulder problems, sciatica, neck pain. If any of these sound familiar, the right treatment is here.
          </p>
        </div>
      </div>

      {/* ── AWARD + REVIEWS STRIPS ───────────────────────────── */}
      <AwardStrip />
      <ReviewsStrip />

      {/* ── TREATMENTS GRID ──────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: '#F2EDE4' }} aria-labelledby="treatments-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="eyebrow block mb-2" style={{ color: '#1a3d3a', borderBottomColor: '#1a3d3a' }}>Treatments</span>
              <h2 id="treatments-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2330] tracking-tight">
                Massage &amp; clinical treatments
              </h2>
            </div>
            <p className="text-[#1a3d3a]/80 text-sm font-semibold sm:text-right">
              Every session includes assessment<br className="hidden sm:block" /> and aftercare advice.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {treatments.map((t) => <TreatmentCard key={t.href} t={t} />)}
          </div>
        </div>
      </section>

      {/* ── RECOVERY SUITE ───────────────────────────────────── */}
      <section className="section bg-[#1a3d3a]" aria-labelledby="recovery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#7dd94a] font-semibold uppercase tracking-[0.18em] text-xs mb-2">The Recovery Suite</p>
            <h2 id="recovery-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Recover properly, under the same roof
            </h2>
            <p className="text-[#d4ecea]/80 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              A private recovery and wellness space alongside the treatment rooms. <span className="font-bold text-white">July offer: 60-minute Infrared Hybrid Sauna £15 (usually £35), until 31 July.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 items-stretch mb-8">
            {recoveryServices.map((s, i) => <RecoveryCard key={s.href} s={s} wideOnMobile={i === recoveryServices.length - 1} />)}
          </div>

          <div className="text-center">
            <Link href="/recovery-suite" className="btn bg-[#7dd94a] text-[#1a2330] hover:bg-white text-sm">
              Explore the Recovery Suite
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL SAUNA ROOM ───────────────────────────────── */}
      <SaunaRoomStrip />

      {/* ── HELP + GIFT CARDS ────────────────────────────────── */}
      {/* Tight top padding: pairs with the sauna card directly above it. */}
      <section className="bg-page pb-[clamp(3.5rem,6vw,5.5rem)] pt-3" aria-label="Help choosing and gift cards">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          <div className="rounded-[24px] border-2 border-[#1a3d3a] bg-card p-6 sm:p-8 flex flex-col">
            <span className="eyebrow block mb-3">Need a hand choosing?</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-page tracking-tight mb-2">
              Not sure which treatment you need?
            </h2>
            <p className="text-page-muted text-sm font-medium leading-relaxed flex-1 mb-5">
              Tell Carlos what&apos;s going on — where it hurts, how long it&apos;s been there, what you&apos;ve tried — and he&apos;ll point you to the right session before you book.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-primary text-sm">Call {BUSINESS.phone}</a>
              <Link
                href="/contact"
                className="text-page text-sm font-bold hover:text-[#0f767a] transition-colors min-h-[44px] flex items-center underline underline-offset-2"
              >
                Send a message
              </Link>
            </div>
          </div>

          <div className="rounded-[24px] border-2 border-[#1a3d3a] bg-page-sage p-6 sm:p-8 flex flex-col">
            <span className="eyebrow block mb-3">Gift Cards</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-page tracking-tight mb-2">
              Give the gift of movement
            </h2>
            <p className="text-page-muted text-sm font-medium leading-relaxed flex-1 mb-5">
              Perfect for friends and family recovering from injury or needing proper relaxation. Redeemable against any treatment or the Recovery Suite.
            </p>
            <div>
              <Link href="/gift-cards" className="btn btn-primary text-sm">Buy a Gift Card</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAR ──────────────────────────────────────────── */}
      <section className="section-sm bg-[#7dd94a]" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1a2330] tracking-tight mb-3">
            Ready to feel better?
          </h2>
          <p className="text-[#1a3d3a]/90 mb-7 text-base font-semibold">
            Back pain, injury or tension holding you back? Book online or call Carlos directly.
          </p>
          <div className="flex flex-row gap-3 justify-center flex-wrap">
            <BookingButton label="Book Your Session" className="bg-white/60 backdrop-blur-sm border border-[#0f767a]/50 text-[#1a2330] hover:bg-white hover:border-[#0f767a] transition-all" />
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              aria-label={`Call us on ${BUSINESS.phone}`}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[#0f767a]/50 text-[#1a2330] hover:bg-white hover:border-[#0f767a] hover:shadow-lg hover:-translate-y-[1px] transition-all"
            >
              <PhoneIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Sub-components ──────────────────────────────────────── */

function TreatmentCard({ t }: { t: typeof treatments[0] }) {
  const isTel = t.bookingHref.startsWith('tel:')

  return (
    <div className="group card-lift rounded-2xl overflow-hidden flex flex-col bg-card border border-page shadow-sm h-full">
      <div style={{ height: '4px', background: '#0f767a', width: '100%' }} />
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {t.badge && (
          <span className="self-start bg-[#1a3d3a] text-[#7dd94a] text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-2.5">
            {t.badge}
          </span>
        )}
        <h3 className="font-black text-page text-sm sm:text-base leading-tight tracking-tight mb-1.5">
          <Link href={t.href} className="hover:text-[#0f767a] transition-colors">
            {t.title}
          </Link>
        </h3>
        <p className="text-[#0f767a] text-xs font-bold mb-2.5">
          {t.price}
          {t.detail && <span className="text-page-muted font-semibold"> · {t.detail}</span>}
        </p>
        <p className="text-page-muted text-xs leading-relaxed flex-1 mb-3 line-clamp-4 sm:line-clamp-5">{t.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0 pt-2.5 border-t border-[#1a3d3a]/10 mt-auto">
          <Link
            href={t.href}
            aria-label={`Learn more about ${t.title}`}
            className="text-page text-xs font-bold hover:text-[#0f767a] transition-colors min-h-[42px] flex items-center underline underline-offset-2"
          >
            Details<span className="sr-only"> about {t.title}</span>
          </Link>
          <a
            href={t.bookingHref}
            {...(isTel ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            aria-label={`Book ${t.title}`}
            className="book-now-btn text-xs font-black px-3.5 py-2 rounded-full min-h-[38px] flex items-center whitespace-nowrap"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

function RecoveryCard({ s, wideOnMobile }: { s: typeof recoveryServices[0]; wideOnMobile?: boolean }) {
  return (
    <div className={`group card-lift rounded-2xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-sm border border-[#0f767a]/30 hover:border-[#0f767a] transition-colors h-full ${wideOnMobile ? 'col-span-2 sm:col-span-1' : ''}`}>
      <Link href={s.href} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
        {s.badge && (
          <span className="absolute top-3 left-3 bg-[#7dd94a] text-[#1a2330] text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
            {s.badge}
          </span>
        )}
      </Link>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-black text-white text-sm sm:text-base leading-tight tracking-tight mb-1.5">
          <Link href={s.href} className="hover:text-[#7dd94a] transition-colors">
            {s.title}
          </Link>
        </h3>
        <p className="text-[#7dd94a] text-xs font-bold mb-2.5">
          {s.price}
          {s.detail && <span className="text-[#d4ecea]/70 font-semibold"> · {s.detail}</span>}
        </p>
        <p className="text-[#d4ecea]/70 text-xs leading-relaxed flex-1 mb-3">{s.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0 pt-2.5 border-t border-white/10 mt-auto">
          <Link
            href={s.href}
            aria-label={`Learn more about ${s.title}`}
            className="text-white text-xs font-bold hover:text-[#7dd94a] transition-colors min-h-[42px] flex items-center underline underline-offset-2"
          >
            Details<span className="sr-only"> about {s.title}</span>
          </Link>
          <a
            href={s.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${s.title}`}
            className="bg-white text-[#1a3d3a] hover:bg-[#7dd94a] hover:text-[#1a2330] transition-colors text-xs font-black px-3.5 py-2 rounded-full min-h-[38px] flex items-center whitespace-nowrap"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}
