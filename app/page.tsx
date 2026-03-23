import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { GoogleReviews } from '@/components/GoogleReviews'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { businessSchema, buildMetadata } from '@/lib/seo'
import { faqs } from '@/app/faqs/data'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Archway London',
  description:
    'Sports Massage & Soft Tissue Remedial Therapy in Archway, North London. BTEC Level 5 qualified. Five-star rated. Assessment-led treatment for pain relief, injury recovery and mobility. Book today.',
  path: '/',
})

const services = [
  {
    title: 'Sports & Deep Tissue Massage',
    problem: 'Training pain or a sports injury that won\'t clear up?',
    solution: 'Targeted deep tissue therapy releases tension, restores movement and gets you back to full training faster.',
    href: '/services/sports-deep-tissue-massage',
    bookingHref: BOOKING_URLS.sportsDeepTissue,
    badge: 'Sports Specialist',
  },
  {
    title: 'Advanced Clinical Massage',
    problem: 'Chronic pain, sciatica or persistent tension?',
    solution: 'Assessment-led clinical massage identifies the root cause — effective for back pain, nerve pain, RSI and postural conditions.',
    href: '/services/advanced-clinical-massage',
    bookingHref: BOOKING_URLS.advancedClinical,
  },
  {
    title: 'Back & Neck Pain MOT',
    problem: 'Desk-related back pain or a stiff neck?',
    solution: 'Full postural assessment and focused treatment targeting the exact muscles driving your pain.',
    href: '/services/back-neck-pain-mot',
    bookingHref: BOOKING_URLS.backNeckMot,
  },
  {
    title: 'Relaxation Massage',
    problem: 'Burnt out or struggling to switch off?',
    solution: 'Gentle, pressure-adjusted treatment that calms your nervous system and leaves you genuinely restored.',
    href: '/services/relaxation-restorative-massage',
    bookingHref: BOOKING_URLS.relaxation,
  },
  {
    title: 'Manual Lymphatic Drainage',
    problem: 'Recovering from surgery or dealing with swelling?',
    solution: 'Certified MLD reduces swelling, clears bruising and accelerates post-surgical recovery safely.',
    href: '/services/manual-lymphatic-drainage',
    bookingHref: BOOKING_URLS.mld,
  },
  {
    title: '2-Hour Pain Relief Massage',
    problem: 'Multiple problem areas that need proper attention?',
    solution: 'An extended session gives Carlos the time to work through every area properly for deeper, lasting results.',
    href: '/services/2-hour-pain-relief-massage',
    bookingHref: BOOKING_URLS.twoHourRelief,
  },
]

const blogPosts = [
  {
    title:    'Hydration and Muscle Health – What Every Client Should Know',
    href:     '/blog/hydration-and-muscle-health',
    date:     '8 Feb 2026',
    img:      '/hydration-wellness.png',
    imgAlt:   'Water and hydration for muscle recovery',
    category: 'Recovery',
    readTime: '4 min read',
  },
  {
    title:    'How Sports Massage Helps Runners Before and After Races',
    href:     '/blog/sports-massage-for-runners',
    date:     '1 Feb 2026',
    img:      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    imgAlt:   'Runner training on a road — sports massage in Archway helps runners recover and prevent injury',
    category: 'Running',
    readTime: '5 min read',
  },
  {
    title:    'Achilles Tendinitis – How Sports Massage Helps Recovery',
    href:     '/blog/achilles-tendinitis-recovery-massage',
    date:     '1 Feb 2026',
    img:      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    imgAlt:   'Person stretching their calf and Achilles tendon — sports massage for Achilles tendinitis recovery in North London',
    category: 'Injury',
    readTime: '6 min read',
  },
  {
    title:    'Say Goodbye to Desk Posture Pain',
    href:     '/blog/desk-posture-pain-massage',
    date:     '1 Feb 2026',
    img:      'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=800&q=80',
    imgAlt:   'Office worker with neck and shoulder pain from poor desk posture — massage therapy for postural pain relief in Archway',
    category: 'Posture',
    readTime: '5 min read',
  },
]

const bundles = [
  { label: '5 × 60 min', price: '£350', perSession: '£70/session', valid: '6 months' },
  { label: '10 × 60 min', price: '£650', perSession: '£65/session', valid: '10 months', popular: true },
  { label: '5 × 90 min', price: '£500', perSession: '£100/session', valid: '6 months' },
  { label: '10 × 90 min', price: '£950', perSession: '£95/session', valid: '10 months' },
]

export default function HomePage() {
  const previewFaqs = faqs.slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* ── OFFER BANNER ─────────────────────────────────────── */}
      <div style={{ backgroundColor: '#7dd94a' }} className="py-3 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-center gap-3 text-center">
          <span className="text-[#1a2330] text-sm font-bold leading-snug">
            New client offer — mention this site and get <span className="text-[#1a3d3a]">10% off your first session</span>
          </span>
          <a
            href={BOOKING_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-black bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] px-3 py-1.5 rounded-full hover:bg-white hover:border-[#2ab4b8] transition-all whitespace-nowrap"
          >
            Book now
          </a>
        </div>
      </div>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }} aria-label="Hero">
        <Image
          src="https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no"
          alt="Carlos Bonvicine, sports massage therapist and founder of Range and Restore, Archway, North London"
          fill
          className="object-cover object-[center_10%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3d3a]/60" />

        <div className="relative flex flex-col items-center justify-end text-center px-4 pt-16 pb-12 sm:pt-24 sm:pb-16" style={{ minHeight: '460px' }}>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-4 max-w-3xl uppercase mt-24 sm:mt-32">
            Move Better.<br />Feel Better.<br />Live Stronger
          </h1>

          <p className="font-bold text-white tracking-wide text-lg sm:text-xl md:text-2xl mb-2 max-w-2xl leading-relaxed">
            Sports Massage <span className="text-[#7dd94a]">&amp;</span> Soft Tissue Remedial Therapy
          </p>
          <p className="text-white/90 text-sm sm:text-base mb-6 max-w-xl leading-relaxed font-semibold">
            Archway, North London.<br />
            Led by Carlos Bonvicine, <span className="font-black text-white">BTEC Level 5</span> qualified therapist.
          </p>



          <div className="flex flex-row gap-3 justify-center flex-wrap mb-6">
            <BookingButton label="Book Your Session" />
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              aria-label={`Call us on ${BUSINESS.phone}`}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-white backdrop-blur-sm border border-[#2ab4b8]/60 hover:bg-white/25 hover:border-[#2ab4b8] hover:shadow-lg hover:-translate-y-[1px] transition-all"
            >
              <PhoneIcon />
            </a>
          </div>

          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full backdrop-blur-sm border border-[#2ab4b8]/60">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742z" clipRule="evenodd" /></svg>
            Archway · North London · N19 5LB
          </span>
        </div>
      </section>

      {/* ── 2. BUNDLE PRICING ────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: '#F2EDE4' }} aria-labelledby="bundles-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="eyebrow block mb-2" style={{ color: '#1a3d3a', borderBottomColor: '#1a3d3a' }}>Better Value</span>
            <h2 id="bundles-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2330] tracking-tight">
              Invest in your long-term wellbeing
            </h2>
            <p className="text-[#1a3d3a]/80 mt-3 text-sm font-medium max-w-lg mx-auto">
              Save more and stay consistent. Bundles keep you on track and give your body the ongoing care it needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
            {bundles.map((b) => (
              <div key={b.label}
                className={`rounded-2xl p-5 text-center relative flex flex-col card-lift border-2 ${
                  b.popular ? 'bg-[#7dd94a] border-white' : 'bg-white border-white'
                }`}>
                {b.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#122a28] text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                    Best Value
                  </span>
                )}
                <p className={`text-[0.65rem] font-black uppercase tracking-widest mb-2 ${b.popular ? 'text-[#1a3d3a]/80' : 'text-[#1a3d3a]/60'}`}>
                  {b.label}
                </p>
                <p className={`text-4xl font-black tracking-tight leading-none mb-1 ${b.popular ? 'text-[#122a28]' : 'text-[#1a3d3a]'}`}>
                  {b.price}
                </p>
                <p className={`text-xs font-bold mt-0.5 ${b.popular ? 'text-[#1a3d3a]/90' : 'text-[#1a3d3a]/80'}`}>
                  {b.perSession}
                </p>
                <p className={`text-xs font-semibold mt-1 mb-4 ${b.popular ? 'text-[#1a3d3a]/70' : 'text-[#1a3d3a]/50'}`}>
                  Valid {b.valid}
                </p>
                <Link
                  href="/services/massage-bundles"
                  className={`mt-auto text-xs font-bold py-2 px-3 rounded-full transition-all ${
                    b.popular ? 'bg-[#122a28] text-white hover:bg-white hover:text-[#122a28]' : 'bg-[#1a3d3a]/10 text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white'
                  }`}
                >
                  View details
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services/massage-bundles" className="btn btn-primary text-sm">See all bundle options</Link>
          </div>
        </div>
      </section>


      {/* ── 2.5 PROMO BLOCK ───────────────────────────────────── */}
      <section className="py-8" style={{ backgroundColor: '#7dd94a' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] tracking-tight mb-1">Give the gift of movement</h2>
            <p className="text-[#1a3d3a] text-sm font-semibold">Perfect for friends and family recovering from injury or needing relaxation.</p>
          </div>
          <Link href="/gift-cards" className="btn whitespace-nowrap bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all shadow-sm">
            Buy a Gift Card
          </Link>
        </div>
      </section>

      {/* ── 3. SERVICES ──────────────────────────────────────── */}
      <section className="section bg-page" aria-label="Treatments">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {services.map((s) => <ServiceCard key={s.href} s={s} />)}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="btn btn-primary text-sm">View all services</Link>
          </div>
        </div>
      </section>


      {/* ── 5. GOOGLE REVIEWS ────────────────────────────────── */}
      <GoogleReviews />

      {/* ── 3.5 WHY CHOOSE RANGE & RESTORE ─────────────────────── */}
      <section className="section pb-8 bg-page-sage">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-page">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Why Choose Range &amp; Restore?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
              'Advanced soft tissue and remedial techniques',
              'Certified Full Body Manual Lymphatic Drainage (MLD)',
              'Aftercare advice included in every session',
              'Based at 130 Junction Road, Archway N19 5LB',
              '5-Star Rated on Google Reviews'
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 bg-card p-5 rounded-xl border-2 border-page card-lift">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0" style={{ color: '#2ab4b8' }} aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-page leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT CARLOS ──────────────────────────────────── */}
      <section className="section bg-page" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>
              <span className="eyebrow block mb-2">About the Practice</span>
              <h2 id="about-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-5">
                Treatment that starts with listening
              </h2>
              <p className="text-page-muted mb-6 font-medium">
                Every session at Range and Restore begins with a proper assessment. Carlos takes the time to understand your posture, movement, and concerns before any treatment begins. No two people are the same, and no two sessions are the same. Serving clients across North London including Islington, Tufnell Park, Finsbury Park and Holloway.
              </p>

              <Link href="/about" className="btn bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all text-sm shadow-sm">Meet Carlos →</Link>
            </div>

            {/* Carlos card */}
            <div className="bg-[#F2EDE4] text-[#1a2330] rounded-3xl p-8 flex flex-col gap-5 border border-[#1a3d3a]/10">
              <div>
                <p className="text-3xl font-extrabold tracking-tight leading-none mb-1 text-[#1a3d3a]">Carlos Bonvicine</p>
                <p className="text-[#1a3d3a]/90 text-sm font-bold">BTEC Level 5 Sports Massage &amp; Soft Tissue Remedial Therapist</p>
                <p className="text-[#1a3d3a]/70 text-xs font-bold mt-0.5">Certified MLD · Cupping Therapy · Fully Insured</p>
              </div>
              <p className="text-[#1a2330]/90 text-sm leading-relaxed font-medium">
                &ldquo;My goal is simple. Help you feel better and move better, using evidence-based soft tissue therapy tailored exactly to you.&rdquo;
              </p>
              <div className="border-t border-[#1a3d3a]/15 pt-4">
                <p className="text-xs text-[#1a3d3a] uppercase tracking-widest font-extrabold">Based at</p>
                <p className="text-[#1a2330]/90 text-sm mt-1 font-bold">130 Junction Road, Archway<br />London N19 5LB</p>
                <p className="text-sm mt-2">
                  <a href={`tel:${BUSINESS.phoneTel}`}
                    className="text-[#1a3d3a] hover:text-[#2ab4b8] transition-colors font-bold inline-flex items-center gap-1.5 min-h-[44px]">
                    <PhoneIcon /> {BUSINESS.phone}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. BLOG / WELLNESS HUB ───────────────────────────── */}
      <section className="section bg-[#F2EDE4]" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-7 gap-4">
            <div>
              <span className="eyebrow block mb-1.5" style={{ color: '#1a3d3a', borderBottomColor: '#1a3d3a' }}>Wellness Hub</span>
              <h2 id="blog-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1a2330] tracking-tight">
                Expert advice &amp; insights
              </h2>
            </div>
            <Link href="/blog" className="text-[#1a3d3a] text-sm font-bold hover:text-[#2ab4b8] transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center">
              All posts →
            </Link>
          </div>

          {/* Mobile swipe */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="swipe-row">
              {blogPosts.map((p) => (
                <BlogCard key={p.href} p={p} mobile />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.map((p) => <BlogCard key={p.href} p={p} />)}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/blog" className="text-[#1a3d3a] text-sm font-bold min-h-[44px] inline-flex items-center">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. FAQs PREVIEW ──────────────────────────────────── */}
      <section className="section bg-page" aria-labelledby="faq-preview-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-preview-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-6">
            FAQs
          </h2>

          <div className="rounded-2xl border-2 border-[#1a3d3a] overflow-hidden bg-card">
            {previewFaqs.map((faq, i) => (
              <details key={faq.q} className={`group ${i < previewFaqs.length - 1 ? 'border-b border-[#1a3d3a]/15' : ''}`}>
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-page text-base leading-snug hover:bg-page-sage transition-colors min-h-[56px]">
                  {faq.q}
                  <span className="relative flex-shrink-0 w-7 h-7 rounded-full bg-[#1a3d3a]/10 flex items-center justify-center text-[#1a3d3a]">
                    <span className="absolute w-3 h-[2px] bg-current rounded-sm"></span>
                    <span className="absolute w-[2px] h-3 bg-current rounded-sm transition-transform duration-300 group-open:rotate-90"></span>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-page-muted leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/faqs" className="btn btn-primary text-sm">See all FAQs</Link>
          </div>
        </div>
      </section>

      {/* ── 8. CTA BAR ───────────────────────────────────────── */}
      <section className="section-sm bg-[#7dd94a]" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1a2330] tracking-tight mb-3">
            Ready to feel better?
          </h2>
          <p className="text-[#1a3d3a]/80 mb-7 text-base font-semibold">
            Back pain, injury or tension holding you back? Book online or call Carlos directly.
          </p>
          <div className="flex flex-row gap-3 justify-center flex-wrap">
            <BookingButton label="Book Your Session" className="bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all" />
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              aria-label={`Call us on ${BUSINESS.phone}`}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] hover:shadow-lg hover:-translate-y-[1px] transition-all"
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

function ServiceCard({ s }: { s: typeof services[0] }) {
  return (
    <div
      className="group card-lift rounded-[20px] overflow-hidden flex flex-col cursor-pointer bg-card shadow-sm h-full"
      style={{ border: '2px solid #1a3d3a' }}
    >
      {/* Top accent bar */}
      <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-black text-page text-sm sm:text-base leading-tight tracking-tight">{s.title}</h3>
          {s.badge && (
            <span className="flex-shrink-0 text-[0.55rem] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#2ab4b8] text-white whitespace-nowrap">
              {s.badge}
            </span>
          )}
        </div>

        {/* Problem pill */}
        <div
          className="rounded-xl px-3 py-2 mb-3 border"
          style={{ background: 'rgba(42,180,184,0.06)', borderColor: 'rgba(42,180,184,0.2)' }}
        >
          <p className="text-page text-xs font-bold leading-snug line-clamp-2">{s.problem}</p>
        </div>

        <p className="text-page-muted text-xs leading-relaxed flex-1 mb-4">{s.solution}</p>

        {/* CTA row */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#1a3d3a]/10">
          <Link
            href={s.href}
            className="text-page text-xs font-bold hover:text-[#2ab4b8] transition-colors min-h-[44px] flex items-center flex-1 underline underline-offset-2"
          >
            Learn more
          </Link>
          <a
            href={s.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="book-now-btn text-xs font-black px-3 sm:px-4 py-2 rounded-full min-h-[40px] flex items-center whitespace-nowrap"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  )
}

function BlogCard({ p, dark, mobile }: { p: typeof blogPosts[0]; dark?: boolean; mobile?: boolean }) {
  const width = mobile ? 'w-[280px]' : 'w-full'
  return (
    <article className={`${width} group rounded-[20px] overflow-hidden flex flex-col card-lift ${dark ? 'bg-[#1e3d22]' : 'bg-card border border-page'}`}>
      <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
        <Image
          src={p.img}
          alt={p.imgAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,74,32,0.65) 0%, transparent 55%)' }} />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-[#1a3d3a] text-white text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
            {p.category}
          </span>
          <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[0.6rem] font-semibold px-2.5 py-1 rounded-full">
            {p.readTime}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-[#7dd94a]/80 text-[0.65rem] font-semibold">{p.date}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-black text-base leading-snug flex-1 mb-4 tracking-tight ${dark ? 'text-white' : 'text-page'}`}>
          <Link
            href={p.href}
            className={`hover:underline underline-offset-2 decoration-2 ${dark ? 'hover:text-[#7dd94a] decoration-[#7dd94a]' : 'hover:text-[#1a3d3a] decoration-[#1a3d3a]'}`}
          >
            {p.title}
          </Link>
        </h3>
        <Link
          href={p.href}
          className={`text-xs font-black uppercase tracking-wide min-h-[44px] flex items-center gap-2 transition-colors ${dark ? 'text-[#7dd94a] hover:text-white' : 'text-page hover:text-white'}`}
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}
