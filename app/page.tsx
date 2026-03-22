import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { GoogleReviews } from '@/components/GoogleReviews'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { businessSchema, buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage Archway London',
  description:
    'Clinical massage and soft tissue therapy in Archway, North London. Five-star rated. Assessment-led treatment for pain relief, injury recovery and mobility. Book today.',
  path: '/',
})

const services = [
  {
    title: 'Sports & Deep Tissue Massage',
    problem: 'Training pain, tight muscles or a sports injury that won\'t clear up?',
    solution: 'Whether it\'s runner\'s knee, shoulder strain, calf tightness or post-match soreness, targeted deep tissue therapy releases the tension, restores movement and gets you back to full training faster.',
    href: '/services/sports-deep-tissue-massage',
    bookingHref: BOOKING_URLS.sportsDeepTissue,
  },
  {
    title: 'Advanced Clinical Massage',
    problem: 'Chronic pain, sciatica or persistent tension that nothing seems to shift?',
    solution: 'Assessment-led clinical massage identifies the root cause, not just where it hurts. Effective for long-standing back pain, nerve pain, RSI, tension headaches and complex postural conditions.',
    href: '/services/advanced-clinical-massage',
    bookingHref: BOOKING_URLS.advancedClinical,
  },
  {
    title: 'Back & Neck Pain MOT',
    problem: 'Desk-related back pain, a stiff neck or tension headaches building through the week?',
    solution: 'A full postural assessment followed by focused hands-on treatment that addresses the exact muscles and patterns driving your pain, so relief lasts well beyond the session.',
    href: '/services/back-neck-pain-mot',
    bookingHref: BOOKING_URLS.backNeckMot,
  },
  {
    title: 'Relaxation Massage',
    problem: 'Burnt out, constantly tense or struggling to properly switch off?',
    solution: 'You don\'t need to be injured to benefit from this. Gentle, pressure-adjusted treatment calms your nervous system, eases muscular tension and leaves you feeling genuinely restored.',
    href: '/services/relaxation-restorative-massage',
    bookingHref: BOOKING_URLS.relaxation,
  },
  {
    title: 'Manual Lymphatic Drainage',
    problem: 'Recovering from surgery, dealing with swelling or sluggish circulation?',
    solution: 'Certified MLD uses precise, gentle techniques to stimulate your lymphatic system, reducing swelling, clearing bruising and accelerating post-surgical recovery safely and effectively.',
    href: '/services/manual-lymphatic-drainage',
    bookingHref: BOOKING_URLS.mld,
  },
  {
    title: '2-Hour Pain Relief Massage',
    problem: 'Multiple problem areas, or feel like a standard session barely scratches the surface?',
    solution: 'An extended, assessment-led session gives Carlos the time to work through every area properly, delivering deeper and longer-lasting results than a standard appointment can achieve.',
    href: '/services/2-hour-pain-relief-massage',
    bookingHref: BOOKING_URLS.twoHourRelief,
  },
]

const blogPosts = [
  { title: 'Hydration and Muscle Health – What Every Client Should Know', href: '/blog/hydration-and-muscle-health',          date: '8 Feb 2026', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=75',          category: 'Recovery',  readTime: '4 min read' },
  { title: 'How Sports Massage Helps Runners Before and After Races',     href: '/blog/sports-massage-for-runners',           date: '1 Feb 2026', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=75',          category: 'Injury',    readTime: '5 min read' },
  { title: 'Achilles Tendinitis – How Sports Massage Helps Recovery',     href: '/blog/achilles-tendinitis-recovery-massage', date: '1 Feb 2026', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=75',          category: 'Injury',    readTime: '6 min read' },
  { title: 'Say Goodbye to Desk Posture Pain',                            href: '/blog/desk-posture-pain-massage',            date: '1 Feb 2026', img: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?w=600&q=75',          category: 'Posture',   readTime: '5 min read' },
]

const bundles = [
  { label: '5 × 60 min', price: '£350', perSession: '£70/session', valid: '6 months' },
  { label: '10 × 60 min', price: '£650', perSession: '£65/session', valid: '10 months', popular: true },
  { label: '5 × 90 min', price: '£500', perSession: '£100/session', valid: '6 months' },
  { label: '10 × 90 min', price: '£950', perSession: '£95/session', valid: '10 months' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="relative section overflow-hidden min-h-svh" aria-label="Hero">
        <Image
          src="/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpg"
          alt="Range and Restore Sports Massage clinic at 130 Junction Road, Archway, North London"
          fill
          className="object-cover [object-position:20%_center] sm:object-center"
          priority
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-[#2c3d1f]/50" />
        {/* Extra gradient behind text column on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c3d1f]/60 via-[#2c3d1f]/70 to-[#2c3d1f]/40 lg:bg-gradient-to-r lg:from-[#2c3d1f]/80 lg:via-[#2c3d1f]/50 lg:to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: text */}
            <div>
              {/* Location badge */}
              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742z" clipRule="evenodd" /></svg>
                Archway · North London · N19 5LB
              </span>

              {/* Mobile Carlos photo — compact strip */}
              <div className="flex items-center gap-3 mb-5 lg:hidden">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/30">
                  <Image
                    src="https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no"
                    alt="Carlos Bonvicine, sports massage therapist"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Carlos Bonvicine</p>
                  <p className="text-white/60 text-xs">Sports Massage · Certified MLD</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                Feel better.<br />Move better.<br />Live better.
              </h1>

              <p className="text-white/80 text-lg sm:text-xl mb-3 max-w-lg leading-relaxed">
                Range and Restore, Archway. Led by Carlos Bonvicine, clinical massage therapist and certified MLD practitioner with a five-star reputation in North London.
              </p>

              <p className="text-white/65 text-base mb-8 max-w-lg leading-relaxed">
                Back pain, neck tension, runner&apos;s knee, shoulder problems? Treatment that targets the cause, not just the symptoms.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <BookingButton label="Book Your Session" />
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline-white">
                  <PhoneIcon /> {BUSINESS.phone}
                </a>
              </div>

              <p className="mt-4 text-white/45 text-xs font-semibold tracking-widest uppercase">
                Sessions available 7 days a week in Archway, North London
              </p>

              <p className="mt-2 text-white/45 text-xs font-semibold tracking-widest uppercase">
                30 · 60 · 90 min &nbsp;·&nbsp; Sports, Remedial &amp; Relaxation &nbsp;·&nbsp; Certified MLD
              </p>
            </div>

            {/* Right: Carlos photo */}
            <div className="hidden lg:flex items-center justify-center">
              <figure className="rounded-3xl overflow-hidden shadow-xl shadow-black/30 w-full max-w-[500px] aspect-[4/3] relative">
                <Image
                  src="https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no"
                  alt="Carlos Bonvicine, sports massage therapist and founder of Range and Restore, Archway, North London"
                  fill
                  className="object-cover"
                  priority
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-semibold">Carlos Bonvicine</p>
                  <p className="text-white/70 text-xs">Soft Tissue Therapist · Certified MLD Practitioner</p>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────── */}
      <section className="section bg-page" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-4 gap-4">
            <div>
              <span className="eyebrow block mb-1.5">Treatments</span>
              <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
                How can we help you?
              </h2>
            </div>
            <Link href="/services" className="text-[#4a7a28] text-sm font-semibold hover:text-page transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center">
              All services →
            </Link>
          </div>

          <p className="text-sm text-page-muted opacity-70 mb-6">
            Dealing with a specific injury or long-standing pain? Whether you are in Archway, Tufnell Park, Holloway, Islington or anywhere across North London, there is a treatment designed for you.
          </p>

          {/* Mobile swipe carousel */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="swipe-row">
              {services.map((s) => (
                <ServiceCard key={s.href} s={s} mobile />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => <ServiceCard key={s.href} s={s} />)}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/services" className="text-[#4a7a28] text-sm font-semibold min-h-[44px] inline-flex items-center hover:text-page transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT CARLOS ──────────────────────────────────── */}
      <section className="section bg-page-sage" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>
              <span className="eyebrow block mb-2">About the Practice</span>
              <h2 id="about-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-5">
                Treatment that starts with listening
              </h2>
              <p className="text-page-muted mb-6">
                Every session at Range and Restore begins with a proper assessment. Carlos takes the time to understand your posture, movement, and concerns before any treatment begins. No two people are the same, and no two sessions are the same. Serving clients across North London including Islington, Tufnell Park, Finsbury Park and Holloway.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  'Fully personalised to your needs and goals',
                  'Advanced soft tissue and remedial techniques',
                  'Certified Manual Lymphatic Drainage (MLD)',
                  'Aftercare advice included in every session',
                  'Based at 130 Junction Road, Archway N19 5LB',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-page-muted text-sm">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-[#2a9d8f] flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary text-sm">Meet Carlos →</Link>
            </div>

            {/* Carlos card */}
            <div className="bg-[#2c3d1f] text-white rounded-3xl p-8 flex flex-col gap-5">
              <div>
                <p className="text-3xl font-extrabold tracking-tight leading-none mb-1">Carlos Bonvicine</p>
                <p className="text-[#d4ecea]/80 text-sm">Soft Tissue & Clinical Massage Therapist</p>
                <p className="text-[#d4ecea]/80 text-sm">Certified MLD Practitioner</p>
              </div>
              <p className="text-[#d4ecea]/70 text-sm leading-relaxed">
                &ldquo;My goal is simple. Help you feel better and move better, using evidence-based soft tissue therapy tailored exactly to you.&rdquo;
              </p>
              <div className="border-t border-[#2a9d8f]/30 pt-4">
                <p className="text-xs text-[#d4ecea]/50 uppercase tracking-widest font-semibold">Based at</p>
                <p className="text-[#d4ecea]/80 text-sm mt-1">130 Junction Road, Archway<br />London N19 5LB</p>
                <p className="text-sm mt-2">
                  <a href={`tel:${BUSINESS.phoneTel}`}
                    className="text-[#d4ecea] hover:text-white transition-colors font-semibold inline-flex items-center gap-1.5 min-h-[44px]">
                    <PhoneIcon /> {BUSINESS.phone}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. GOOGLE REVIEWS ────────────────────────────────── */}
      <GoogleReviews />

      {/* ── 5. BUNDLE PRICING ────────────────────────────────── */}
      <section className="section bg-page-alt" aria-labelledby="bundles-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="eyebrow block mb-2">Better Value</span>
            <h2 id="bundles-heading" className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
              Invest in your long-term wellbeing
            </h2>
            <p className="text-page-muted opacity-80 mt-3 text-sm max-w-lg mx-auto">
              Save more and stay consistent. Bundles keep you on track and give your body the ongoing care it needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
            {bundles.map((b) => (
              <div key={b.label}
                className={`rounded-2xl p-5 text-center relative flex flex-col card-lift ${
                  b.popular
                    ? 'bg-[#2c3d1f] border-2 border-[#2a9d8f]'
                    : 'bg-white border-2 border-[#dde5d0]'
                }`}>
                {b.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2a9d8f] text-white text-[0.6rem] font-black tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                    Best Value
                  </span>
                )}
                <p className={`text-[0.65rem] font-black uppercase tracking-widest mb-2 ${b.popular ? 'text-[#d4ecea]/60' : 'text-[#4a7a28]/60'}`}>
                  {b.label}
                </p>
                <p className={`text-4xl font-black tracking-tight leading-none mb-1 ${b.popular ? 'text-white' : 'text-[#2c3d1f]'}`}>
                  {b.price}
                </p>
                <p className={`text-xs font-bold mt-0.5 ${b.popular ? 'text-[#d4ecea]/70' : 'text-[#2a9d8f]/90'}`}>
                  {b.perSession}
                </p>
                <p className={`text-xs font-semibold mt-1 mb-4 ${b.popular ? 'text-[#d4ecea]/50' : 'text-[#2c3d1f]/40'}`}>
                  Valid {b.valid}
                </p>
                <Link
                  href="/services/massage-bundles"
                  className={`mt-auto text-xs font-bold py-2 px-3 rounded-full transition-all ${
                    b.popular
                      ? 'bg-[#2a9d8f] text-white hover:bg-[#d4ecea] hover:text-[#1e2a12]'
                      : 'bg-[#eef2eb] text-[#2c3d1f] hover:bg-[#2c3d1f] hover:text-white'
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

      {/* ── 6. BLOG / WELLNESS HUB ───────────────────────────── */}
      <section className="section bg-[#2c3d1f]" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-7 gap-4">
            <div>
              <span className="eyebrow block mb-1.5" style={{ color: '#d4ecea', borderBottomColor: '#2a9d8f' }}>Wellness Hub</span>
              <h2 id="blog-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Expert advice &amp; insights
              </h2>
            </div>
            <Link href="/blog" className="text-[#d4ecea] text-sm font-semibold hover:text-white transition-colors whitespace-nowrap hidden sm:block min-h-[44px] flex items-center">
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
            <Link href="/blog" className="text-[#d4ecea] text-sm font-semibold min-h-[44px] inline-flex items-center">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CTA BAR ───────────────────────────────────────── */}
      <section className="section-sm bg-[#2a9d8f]" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to feel better?
          </h2>
          <p className="text-white/75 mb-7 text-base">
            Back pain, injury or tension holding you back? Book online or call Carlos directly.
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
  const width = mobile ? 'w-[290px]' : 'w-full'
  return (
    <div
      className={`${width} group card-premium rounded-[20px] overflow-hidden flex flex-col cursor-pointer`}
      style={{ background: 'linear-gradient(145deg, #2c3d1f 0%, #1f2d15 100%)' }}
    >
      {/* Animated accent bar */}
      <div className="accent-bar" />

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#d4ecea]/30 text-[0.6rem] font-black uppercase tracking-widest block mb-3">
          Treatment
        </span>

        <h3 className="font-black text-white text-lg leading-tight mb-3 tracking-tight">{s.title}</h3>

        {/* Problem pill */}
        <div
          className="rounded-xl px-3 py-2.5 mb-3 border"
          style={{ background: 'rgba(42,157,143,0.08)', borderColor: 'rgba(42,157,143,0.2)', backdropFilter: 'blur(4px)' }}
        >
          <p className="text-[#d4ecea] text-xs font-bold leading-snug">{s.problem}</p>
        </div>

        <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">{s.solution}</p>

        {/* CTA row */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/8">
          <Link
            href={s.href}
            className="text-[#d4ecea]/80 text-sm font-semibold hover:text-white transition-colors min-h-[44px] flex items-center flex-1"
          >
            Find out more →
          </Link>
          <a
            href={s.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="book-now-btn bg-[#2a9d8f] text-white text-sm font-black px-5 py-2.5 rounded-full min-h-[44px] flex items-center whitespace-nowrap"
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
    <article className={`${width} group rounded-[20px] overflow-hidden flex flex-col card-lift ${dark ? 'bg-[#1f2d15]' : 'bg-white border border-[#dde5d0]'}`}>
      {/* Image */}
      <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Permanent gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(44,61,31,0.65) 0%, transparent 55%)' }} />
        {/* Badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="bg-[#2a9d8f] text-white text-[0.6rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
            {p.category}
          </span>
          <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[0.6rem] font-semibold px-2.5 py-1 rounded-full">
            {p.readTime}
          </span>
        </div>
        {/* Date at bottom of image */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[#d4ecea]/80 text-[0.65rem] font-semibold">{p.date}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-black text-base leading-snug flex-1 mb-4 tracking-tight ${dark ? 'text-white' : 'text-[#2c3d1f]'}`}>
          <Link
            href={p.href}
            className={`hover:underline underline-offset-2 decoration-2 ${dark ? 'hover:text-[#d4ecea] decoration-[#d4ecea]' : 'hover:text-[#4a7a28] decoration-[#4a7a28]'}`}
          >
            {p.title}
          </Link>
        </h3>
        <Link
          href={p.href}
          className={`text-xs font-black uppercase tracking-wide min-h-[44px] flex items-center gap-2 transition-colors ${dark ? 'text-[#d4ecea] hover:text-white' : 'text-[#4a7a28] hover:text-[#2c3d1f]'}`}
        >
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
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
