import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

const AWARD_BANNER = '/range-and-restore-new-sports-massage-clinic-of-the-year-2026-prestige-awards-winner-archway-london.jpg'
const AWARD_LOGO = '/prestige-awards-2026-winner-logo.png'
const AWARD_TEXT = 'New Sports Massage Clinic of the Year 2026/27, London & South East England Prestige Awards'

export const metadata: Metadata = buildMetadata({
  title: 'Award Winning Sports Massage Clinic | Prestige Awards 2026/27',
  description:
    'Range and Restore was named New Sports Massage Clinic of the Year at the 2026/27 London and South East England Prestige Awards. Award-winning sports massage in Archway, North London.',
  path: '/awards',
  image: `${BASE_URL}${AWARD_BANNER}`,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Awards', path: '/awards' },
])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Awards and Recognition — Range and Restore Sports Massage',
  description:
    'Range and Restore Sports Massage was named New Sports Massage Clinic of the Year at the 2026/27 London and South East England Prestige Awards, chosen ahead of sixteen other applicants in the category.',
  url: `${BASE_URL}/awards`,
  isPartOf: { '@id': `${BASE_URL}/#business` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${BASE_URL}${AWARD_BANNER}`,
    caption: 'Range and Restore, New Sports Massage Clinic of the Year 2026/27, London and South East England Prestige Awards winner',
  },
  about: {
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    '@id': `${BASE_URL}/#business`,
    name: 'Range and Restore Sports Massage',
    url: BASE_URL,
    award: AWARD_TEXT,
  },
  mainEntity: { '@id': `${BASE_URL}/#business` },
  mentions: [
    {
      '@type': 'Organization',
      name: 'Prestige Awards',
      description: 'Regional business awards celebrating independent businesses for exceptional service, innovation and client satisfaction, run under the Corporate LiveWire and LTG award platforms.',
    },
    { '@type': 'Thing', name: 'New Sports Massage Clinic of the Year 2026/27' },
    { '@type': 'Thing', name: 'Sports massage' },
    { '@type': 'Thing', name: 'Soft tissue therapy' },
  ],
}

const awardSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#business`,
  name: 'Range and Restore Sports Massage',
  url: BASE_URL,
  award: AWARD_TEXT,
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Award',
    name: 'New Sports Massage Clinic of the Year 2026/27',
    recognizedBy: {
      '@type': 'Organization',
      name: 'London & South East England Prestige Awards',
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What award has Range and Restore won?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range and Restore Sports Massage was named New Sports Massage Clinic of the Year for 2026/27 at the London and South East England Prestige Awards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who runs the Prestige Awards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Prestige Awards celebrate independent businesses for exceptional service, innovation and client satisfaction within their local region. They are run by the team behind the Corporate LiveWire and LTG award platforms, which have recognised outstanding businesses for the past seventeen years, and coverage of the winners reaches more than one hundred thousand readers across print and digital formats throughout the UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are Prestige Awards winners chosen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each nominee is reviewed by the Prestige Awards judging panel against the supporting information a business submits, its client reviews and testimonials, its online reputation and public feedback, its website and social media presence, and its overall standing within the industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many clinics were considered in the category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Prestige Awards nominations team confirmed there were sixteen other applicants in the New Sports Massage category. Range and Restore was selected as the winner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the award-winning clinic based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range and Restore is at 130 Junction Road, Archway, London N19 5LB, a few minutes from Archway station on the Northern line, serving Archway, Tufnell Park, Holloway, Islington, Finsbury Park and the wider North London area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does winning the award change your prices or how you work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The way we work does not change. Same assessment-led treatment, same BTEC Level 5 qualified team and same prices. The award reflects the work rather than changing it.',
      },
    },
  ],
}

export default function AwardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(awardSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero band ─────────────────────── */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">
            Awards and Recognition, Archway, North London
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            New Sports Massage Clinic of the Year, 2026/27
          </h1>
          <p className="text-lg text-page-muted font-medium mb-4">
            Range and Restore has been named New Sports Massage Clinic of the Year at the 2026/27 London and South East England Prestige Awards. In our first year open on Junction Road, that recognition means a great deal to the whole team.
          </p>
          <p className="text-lg text-page-muted font-medium">
            We share it here with the people who made it possible. The clients who trust us with their recovery, and the independent businesses across Archway and North London we work alongside every week.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* ── Winner banner ─────────────────────── */}
        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-white mb-12">
          <Image
            src={AWARD_BANNER}
            alt="Range and Restore Sports Massage, winner of New Sports Massage Clinic of the Year 2026/27 at the London and South East England Prestige Awards, Archway, North London"
            width={1080}
            height={1080}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-2 mb-3">What we won</h2>
          <p>
            Range and Restore Sports Massage has been named New Sports Massage Clinic of the Year at the 2026/27 London and South East England Prestige Awards. The Prestige Awards celebrate independent businesses that show exceptional service, innovation and client satisfaction within their local region. They are run by the team behind the Corporate LiveWire and LTG award platforms, which have recognised outstanding businesses for the past seventeen years, and coverage of the winners reaches more than one hundred thousand readers across print and digital formats throughout the UK.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Chosen ahead of sixteen other clinics</h2>
          <p>
            Our category was competitive. The Prestige Awards nominations team confirmed there were sixteen other applicants in the New Sports Massage category, and Range and Restore was selected as the winner. We do not take that lightly. Coming out in front of a strong field of clinics, in our first year, is something the whole team is genuinely proud of.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How winners are chosen</h2>
          <p>
            Winners are not picked at random, and the result cannot be bought. Each nominee is reviewed by the Prestige Awards judging panel against a clear set of measures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Supporting information</strong> submitted by each business.</li>
            <li><strong className="text-page">Client reviews and testimonials.</strong></li>
            <li><strong className="text-page">Online reputation</strong> and public feedback.</li>
            <li><strong className="text-page">Website and social media presence.</strong></li>
            <li><strong className="text-page">Overall standing</strong> within the industry.</li>
          </ul>
          <p>
            That matters to us, because it means the award reflects the things we care about most. The assessment-led treatment, the{' '}
            <a href="https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold">reviews our clients leave</a>
            , and the reputation we have built on Junction Road.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What this means for you</h2>
          <p>
            The way we work does not change. Same assessment-led approach, same qualified hands, same prices. What the award gives you is a little more confidence that you are booking with a clinic that has been independently recognised for its treatment, its care and its results. If you have been in before, this recognition is partly yours. If you have not, it is a good reason to come and see us.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Recognised for the work, and the people behind it</h2>
          <p>
            An award like this is never one person. It reflects our{' '}
            <Link href="/team" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold">BTEC Level 5 team</Link>
            , the clients who trust us with their recovery, and the{' '}
            <Link href="/community" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold">independent businesses across Archway</Link>{' '}
            we work alongside. We are a community-focused clinic, and being recognised while staying rooted in our patch is exactly the way we wanted it.
          </p>

          <div className="not-prose my-10 rounded-[20px] border-2 border-[#1a3d3a] bg-page-sage p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Image
              src={AWARD_LOGO}
              alt="London and South East England Prestige Awards 2026/27 winner logo"
              width={110}
              height={119}
              className="h-24 w-auto flex-shrink-0"
            />
            <div>
              <p className="text-page font-black text-lg leading-snug mb-1">London &amp; South East England Prestige Awards</p>
              <p className="text-page-muted text-sm font-medium">2026/27 Winner, New Sports Massage Clinic of the Year, awarded to Range and Restore Sports Massage, 130 Junction Road, Archway.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Award FAQs</h2>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">What award has Range and Restore won?</h3>
          <p>
            Range and Restore Sports Massage was named New Sports Massage Clinic of the Year for 2026/27 at the London and South East England Prestige Awards.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Who runs the Prestige Awards?</h3>
          <p>
            The Prestige Awards celebrate independent businesses for exceptional service, innovation and client satisfaction within their local region. They are run by the team behind the Corporate LiveWire and LTG award platforms, which have recognised outstanding businesses for the past seventeen years, and coverage reaches more than one hundred thousand readers across the UK.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">How are Prestige Awards winners chosen?</h3>
          <p>
            Each nominee is reviewed by the judging panel against the supporting information submitted, client reviews and testimonials, online reputation and public feedback, website and social media presence, and overall standing within the industry.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">How many clinics were considered in the category?</h3>
          <p>
            The nominations team confirmed there were sixteen other applicants in the New Sports Massage category. Range and Restore was selected as the winner.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Where is the award-winning clinic based?</h3>
          <p>
            130 Junction Road, Archway, London N19 5LB, a few minutes from Archway station on the Northern line, serving Archway, Tufnell Park, Holloway, Islington, Finsbury Park and the wider{' '}
            <Link href="/areas-served" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold">North London area</Link>.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Does winning the award change your prices or how you work?</h3>
          <p>
            No. Same assessment-led treatment, same BTEC Level 5 qualified team and same prices. The award reflects the work rather than changing it.
          </p>
        </div>

        {/* ── Booking CTA ─────────────────────── */}
        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Book the award-winning clinic</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Come and feel the difference for yourself. Book online in a couple of minutes, or call Range and Restore directly on {BUSINESS.phone}.
          </p>
          <a
            href={BOOKING_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Book Your Session <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* ── Related ─────────────────────── */}
        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/about" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href="/team" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Meet the team behind the award
            </Link>
            <Link href="/community" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Our Archway community and local partners
            </Link>
            <Link href="/press" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Press, media and interview enquiries
            </Link>
            <Link href="/services" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; See our sports massage and recovery treatments
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
