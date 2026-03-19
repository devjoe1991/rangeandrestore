import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { businessSchema, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Archway London',
  description:
    'Personalised sports massage and soft tissue therapy in Archway, North London. Assessment-led treatment for pain relief, injury recovery and mobility. Book today.',
  path: '/',
})

const services = [
  { title: 'Sports & Deep Tissue Massage',   description: 'For tight muscles, training injuries and recovery. Sessions from 30–90 minutes.',         href: '/services/sports-deep-tissue-massage',   bookingHref: BOOKING_URLS.sportsDeepTissue, emoji: '🏃' },
  { title: 'Advanced Clinical Massage',       description: 'Chronic pain, sciatica, RSI and postural issues treated with advanced techniques.',        href: '/services/advanced-clinical-massage',     bookingHref: BOOKING_URLS.advancedClinical,  emoji: '🎯' },
  { title: 'Back & Neck Pain MOT',            description: 'Focused assessment and hands-on treatment for back, neck and desk-related pain.',           href: '/services/back-neck-pain-mot',            bookingHref: BOOKING_URLS.backNeckMot,       emoji: '💆' },
  { title: 'Relaxation Massage',              description: 'Calm your nervous system and unwind with gentle, pressure-adjusted treatment.',             href: '/services/relaxation-restorative-massage', bookingHref: BOOKING_URLS.relaxation,        emoji: '🌿' },
  { title: 'Manual Lymphatic Drainage',       description: 'Certified MLD for post-surgery recovery, swelling and immune support.',                    href: '/services/manual-lymphatic-drainage',     bookingHref: BOOKING_URLS.mld,               emoji: '🫧' },
  { title: '2-Hour Pain Relief Massage',      description: 'Extended deep-dive session covering multiple problem areas for lasting results.',           href: '/services/2-hour-pain-relief-massage',    bookingHref: BOOKING_URLS.twoHourRelief,     emoji: '⏱️' },
]

const blogPosts = [
  { title: 'Hydration and Muscle Health – What Every Client Should Know', href: '/blog/hydration-and-muscle-health',          date: '8 Feb 2026' },
  { title: 'How Sports Massage Helps Runners Before and After Races',     href: '/blog/sports-massage-for-runners',           date: '1 Feb 2026' },
  { title: 'Achilles Tendinitis – How Sports Massage Helps Recovery',     href: '/blog/achilles-tendinitis-recovery-massage', date: '1 Feb 2026' },
  { title: 'Say Goodbye to Desk Posture Pain',                            href: '/blog/desk-posture-pain-massage',            date: '1 Feb 2026' },
]

const bundles = [
  { label: '5 × 60 min', price: '£350', valid: '6 months' },
  { label: '10 × 60 min', price: '£650', valid: '10 months', popular: true },
  { label: '5 × 90 min', price: '£500', valid: '6 months' },
  { label: '10 × 90 min', price: '£950', valid: '10 months' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="bg-[#c6e28a] section" aria-label="Hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: text */}
            <div>
              {/* Location badge */}
              <span className="inline-flex items-center gap-1.5 bg-[#334311]/10 text-[#334311] text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742z" clipRule="evenodd" /></svg>
                Archway · North London · N19 5LB
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#334311] leading-[1.08] tracking-tight mb-5">
                Feel better.<br />Move better.<br />Live better.
              </h1>

              <p className="text-[#334311]/75 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed">
                Personalised sports massage and soft tissue therapy from Carlos Bonvicine — assessment-led treatment for real, lasting results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <BookingButton label="Book Your Session" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline-dark">
                  <PhoneIcon /> {BUSINESS.phone}
                </a>
              </div>

              <p className="mt-8 text-[#334311]/50 text-xs font-semibold tracking-widest uppercase">
                30 · 60 · 90 min &nbsp;·&nbsp; Sports, Remedial &amp; Relaxation &nbsp;·&nbsp; Certified MLD
              </p>
            </div>

            {/* Right: logo */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white rounded-3xl p-6 shadow-lg shadow-[#334311]/10">
                <Image
                  src="/rangeandrestorelogo.png"
                  alt="Range and Restore Sports Massage"
                  width={340}
                  height={200}
                  className="w-full max-w-[340px] h-auto object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-7 gap-4">
            <div>
              <span className="eyebrow block mb-1.5">Treatments</span>
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-[#334311] tracking-tight">
                How can we help you?
              </h2>
            </div>
            <Link href="/services" className="text-[#618020] text-sm font-semibold hover:text-[#334311] transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center">
              All services →
            </Link>
          </div>

          {/* Mobile swipe carousel */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="swipe-row">
              {services.map((s) => (
                <div key={s.href} className="swipe-row" style={{ display: 'contents' }}>
                  <ServiceCard s={s} mobile />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => <ServiceCard key={s.href} s={s} />)}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/services" className="text-[#618020] text-sm font-semibold min-h-[44px] inline-flex items-center">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT CARLOS ──────────────────────────────────── */}
      <section className="section bg-[#c6e28a]" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>
              <span className="eyebrow block mb-2">About the Practice</span>
              <h2 id="about-heading" className="text-2xl sm:text-3xl font-extrabold text-[#334311] tracking-tight mb-5">
                Treatment that starts with listening
              </h2>
              <p className="text-[#334311]/75 mb-6">
                Every session at Range and Restore begins with a proper assessment — Carlos takes the time to understand your posture, movement, and concerns before any treatment begins. No two people are the same, and no two sessions are the same.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  'Fully personalised to your needs and goals',
                  'Advanced soft tissue and remedial techniques',
                  'Certified Manual Lymphatic Drainage (MLD)',
                  'Aftercare advice included in every session',
                  'Based at 130 Junction Road, Archway N19 5LB',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#334311]/80 text-sm">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-[#618020] flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary text-sm">Meet Carlos →</Link>
            </div>

            {/* Carlos card */}
            <div className="bg-[#334311] text-white rounded-3xl p-8 flex flex-col gap-5">
              <div>
                <p className="text-3xl font-extrabold tracking-tight leading-none mb-1">Carlos Bonvicine</p>
                <p className="text-[#c6e28a]/80 text-sm">Sports Massage Therapist</p>
                <p className="text-[#c6e28a]/80 text-sm">Certified MLD Practitioner</p>
              </div>
              <p className="text-[#c6e28a]/70 text-sm leading-relaxed">
                "My goal is simple — help you feel better and move better, using evidence-based soft tissue therapy tailored exactly to you."
              </p>
              <div className="border-t border-[#618020]/40 pt-4">
                <p className="text-xs text-[#c6e28a]/50 uppercase tracking-widest font-semibold">Based at</p>
                <p className="text-[#c6e28a]/80 text-sm mt-1">130 Junction Road, Archway<br />London N19 5LB</p>
                <p className="text-sm mt-2">
                  <a href={`tel:${BUSINESS.phoneTel}`}
                    className="text-[#c6e28a] hover:text-white transition-colors font-semibold inline-flex items-center gap-1.5 min-h-[44px]">
                    <PhoneIcon /> {BUSINESS.phone}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. BUNDLE PRICING ────────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="bundles-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="eyebrow block mb-2">Better Value</span>
            <h2 id="bundles-heading" className="text-2xl sm:text-3xl font-extrabold text-[#334311] tracking-tight">
              Invest in your long-term wellbeing
            </h2>
            <p className="text-[#334311]/60 mt-3 text-sm max-w-lg mx-auto">
              Save more and stay consistent. Bundles keep you on track and give your body the ongoing care it needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
            {bundles.map((b) => (
              <div key={b.label}
                className={`rounded-2xl p-5 text-center border-2 relative ${b.popular ? 'border-[#618020] bg-[#618020]' : 'border-[#c1e082] bg-[#c6e28a]/20'}`}>
                {b.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#334311] text-[#c6e28a] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${b.popular ? 'text-[#c6e28a]' : 'text-[#334311]'}`}>{b.label}</p>
                <p className={`text-3xl font-extrabold tracking-tight ${b.popular ? 'text-white' : 'text-[#618020]'}`}>{b.price}</p>
                <p className={`text-xs mt-1 ${b.popular ? 'text-[#c6e28a]/70' : 'text-[#334311]/50'}`}>Valid {b.valid}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services/massage-bundles" className="btn btn-primary text-sm">View All Bundle Details</Link>
          </div>
        </div>
      </section>

      {/* ── 5. BLOG / WELLNESS HUB ───────────────────────────── */}
      <section className="section bg-[#334311]" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-7 gap-4">
            <div>
              <span className="eyebrow block mb-1.5" style={{ color: '#c1e082' }}>Wellness Hub</span>
              <h2 id="blog-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Expert advice &amp; insights
              </h2>
            </div>
            <Link href="/blog" className="text-[#c6e28a] text-sm font-semibold hover:text-white transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center">
              All posts →
            </Link>
          </div>

          {/* Mobile swipe */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="swipe-row">
              {blogPosts.map((p) => (
                <BlogCard key={p.href} p={p} dark mobile />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.map((p) => <BlogCard key={p.href} p={p} dark />)}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/blog" className="text-[#c6e28a] text-sm font-semibold min-h-[44px] inline-flex items-center">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BAR ───────────────────────────────────────── */}
      <section className="section-sm bg-[#618020]" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to feel better?
          </h2>
          <p className="text-[#c6e28a]/90 mb-7 text-base">
            Book online in seconds or give Carlos a call. Sessions available 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookingButton label="Book Your Session" variant="white" />
            <a href={`tel:${BUSINESS.phoneTel}`}
              className="btn btn-outline-white">
              <PhoneIcon /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Sub-components ──────────────────────────────────────── */

function ServiceCard({ s, mobile }: { s: typeof services[0]; mobile?: boolean }) {
  const width = mobile ? 'w-[270px]' : 'w-full'
  return (
    <div className={`${width} bg-white rounded-2xl border border-[#c1e082] p-5 flex flex-col card-lift`}
      style={{ borderLeftWidth: '4px', borderLeftColor: '#618020' }}>
      <span className="text-2xl mb-3 block" aria-hidden="true">{s.emoji}</span>
      <h3 className="font-bold text-[#334311] text-base leading-snug mb-2">{s.title}</h3>
      <p className="text-sm text-[#262626]/60 leading-snug flex-1 mb-4">{s.description}</p>
      <div className="flex items-center gap-3">
        <Link href={s.href} className="text-[#618020] text-sm font-semibold hover:text-[#334311] transition-colors min-h-[44px] flex items-center">
          Learn more →
        </Link>
        <a href={s.bookingHref} target="_blank" rel="noopener noreferrer"
          className="ml-auto bg-[#618020] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#334311] transition-colors min-h-[36px] flex items-center">
          Book
        </a>
      </div>
    </div>
  )
}

function BlogCard({ p, dark, mobile }: { p: typeof blogPosts[0]; dark?: boolean; mobile?: boolean }) {
  const width    = mobile ? 'w-[250px]' : 'w-full'
  const bg       = dark ? 'bg-[#618020]/20 border-[#618020]/30 hover:bg-[#618020]/30' : 'bg-white border-[#c1e082]'
  const titleCol = dark ? 'text-[#c6e28a]' : 'text-[#334311]'
  const dateCol  = dark ? 'text-[#c1e082]/60' : 'text-[#618020]/60'
  const linkCol  = dark ? 'text-[#c6e28a] hover:text-white' : 'text-[#618020] hover:text-[#334311]'
  return (
    <article className={`${width} ${bg} rounded-2xl border p-4 flex flex-col transition-colors`}>
      <time className={`eyebrow block mb-2 ${dateCol}`} style={{ color: 'inherit' }}>{p.date}</time>
      <h3 className={`font-bold text-sm leading-snug flex-1 mb-3 ${titleCol}`}>
        <Link href={p.href} className={`hover:underline ${linkCol}`}>{p.title}</Link>
      </h3>
      <Link href={p.href} className={`text-xs font-semibold min-h-[36px] flex items-center transition-colors ${linkCol}`}>
        Read more →
      </Link>
    </article>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}
