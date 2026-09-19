import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { BUSINESS, CORPORATE_ENQUIRY_URL } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Corporate Massage London | Workplace Wellbeing, North London',
  description: 'Corporate massage and employee wellbeing in North London. On-site office massage or clinic sessions for staff with back, neck and shoulder tension. Enquire for pricing.',
  path: ROUTES.corporateWellbeing,
})

const HSE_REPORT_URL = 'https://www.hse.gov.uk/statistics/assets/docs/msd.pdf'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Corporate Wellbeing', path: ROUTES.corporateWellbeing },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Massage and Workplace Wellbeing',
  serviceType: 'Corporate massage',
  description: 'On-site workplace massage and in-clinic sports massage for employees, for back, neck and shoulder tension, muscular tightness, mobility, recovery and general wellbeing. Tailored to each company.',
  url: `${BASE_URL}${ROUTES.corporateWellbeing}`,
  provider: { '@id': `${BASE_URL}/#business` },
  audience: { '@type': 'BusinessAudience', name: 'Employers, HR and office managers' },
  areaServed: [
    { '@type': 'City', name: 'London' },
    { '@type': 'Place', name: 'North London' },
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
  ],
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'How does on-site office massage work?',
    a: 'Our therapists come to your workplace on an agreed day and treat staff one after another in a private room you set aside, such as a meeting room. Staff sign up for a slot, step out for their session and go back to work. We agree the number of therapists, session lengths and timings with you beforehand.',
  },
  {
    q: 'How much does corporate massage in London cost?',
    a: 'It depends on how many staff you want to cover, how long each session is, how often, and whether we come to you or your team comes to the clinic. Tell us what you have in mind and we will send a tailored quote. For reference, our standard clinic treatments start at £50 for 30 minutes.',
  },
  {
    q: 'Can our staff come to your clinic instead?',
    a: 'Yes. Staff can book full treatments at our clinic at 130 Junction Road, Archway N19 5LB, a 3-minute walk from Archway tube on the Northern Line. We are open Monday to Friday 08:00 to 20:00 and weekends 09:00 to 17:00, so sessions can fit before or after work. You can also mix the two: on-site days for the whole team, and clinic sessions for anyone who needs more focused treatment.',
  },
  {
    q: 'Which parts of London do you cover for workplace massage?',
    a: 'We are based in Archway and work with businesses across North London, including Islington, Holloway, Tufnell Park, Kentish Town, Finsbury Park, Highgate and Crouch End. If your workplace is elsewhere in London, get in touch and we will tell you what we can do.',
  },
  {
    q: 'Is massage at work suitable for all staff?',
    a: 'Most people can be treated. Before each session your therapist asks about health and recent injuries, and adapts the treatment or advises against it where needed. Anyone with a specific injury or long-standing problem can be seen for a full assessment at the clinic.',
  },
  {
    q: 'Do you work with small businesses as well as larger companies?',
    a: 'Yes. Whether you have a small team or a large one, tell us your numbers and we will suggest what fits, from a single on-site day to a regular programme.',
  },
]

const faqSchema = buildFaqSchema(faqs)

const issues = [
  'Back, neck and shoulder tension',
  'Stiffness from long hours at a desk or screen',
  'Tension headaches linked to a tight neck and shoulders',
  'Muscular tightness and knots',
  'Aches from lifting, standing or physical work',
  'Restricted mobility and range of movement',
  'Recovery for staff who run, cycle or train',
  'Physical tension that builds up with a busy week',
]

const options = [
  {
    title: 'On-site workplace massage',
    body: 'Our therapists come to your office or workplace and treat staff in a private room you set aside. Sessions are short and booked in slots, so staff step out, get treated and go back to work.',
    suits: ['Office massage days', 'Regular weekly or monthly visits', 'Wellbeing weeks and team events'],
  },
  {
    title: 'Clinic sessions for employees',
    body: 'Staff book a full treatment at our clinic on Junction Road, Archway N19, open 7 days a week. Every session is assessment-led, and our Recovery Suite has a private infrared sauna and Normatec compression.',
    suits: ['Staff with a specific problem', 'Ongoing treatment', 'Team rewards and incentives'],
  },
]

const steps = [
  { title: 'Get in touch', body: 'Tell us your team size, where you are based and what you have in mind.' },
  { title: 'Get a tailored plan', body: 'We suggest the format, session lengths and frequency, with a clear quote.' },
  { title: 'Book the dates', body: 'We fix on-site days or clinic slots, and your team books into them.' },
  { title: 'Review and adjust', body: 'After the first sessions we check in with you and adjust the plan.' },
]

const reasons = [
  'A team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists',
  'Named New Sports Massage Clinic of the Year 2026/27, London & South East England Prestige Awards',
  `Rated ${REVIEW_RATING} from ${REVIEW_COUNT}+ Google reviews`,
  'Assessment-led treatment, with aftercare advice in every session',
]

function Tick() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  )
}

export default function CorporateWellbeingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="eyebrow-sm">For Businesses &middot; On-site &amp; In-clinic &middot; North London</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
              Corporate Massage and Workplace Wellbeing in North London
            </h1>
            <p className="text-lg lg:text-xl text-page-muted font-medium">
              Sports massage and soft tissue therapy for your staff, at your workplace or at our clinic in Archway. For companies that want to look after their team&apos;s backs, necks and shoulders, recovery and general wellbeing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CORPORATE_ENQUIRY_URL} className="btn-ink">
                Enquire about Corporate Wellbeing
              </a>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ink-outline">
                Call Range and Restore
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-card overflow-hidden relative aspect-square max-w-md w-full mx-auto">
            <Image
              src="/back-neck-pain-mot-neck-massage-treatment-range-and-restore-archway-north-london.jpg"
              alt="Therapist supporting the head during neck and upper shoulder treatment at Range and Restore, Archway, North London"
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">

          <section aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-2xl font-bold text-page mb-4">Employee wellbeing starts with backs, necks and shoulders</h2>
            <div className="space-y-4 text-page-muted">
              <p>
                Back, neck and shoulder problems are among the most common reasons people struggle at work. According to the Health and Safety Executive, 511,000 workers in Great Britain had a work-related musculoskeletal disorder in 2024/25, and 7.1 million working days were lost to them. The back was mainly affected in 221,000 cases, and the upper limbs or neck in 211,000.
              </p>
              <p>
                HSE lists keyboard and repetitive work, awkward or tiring positions and manual handling as the main causes, which covers most desks, shop floors and warehouses.{' '}
                <a href={HSE_REPORT_URL} target="_blank" rel="noopener" className="link-cite">
                  Source: HSE, Work-related musculoskeletal disorders statistics in Great Britain, 2025
                </a>
              </p>
              <p>
                A corporate wellbeing programme with Range and Restore gives your staff regular hands-on treatment from qualified therapists, so aches and tightness are dealt with early instead of being put up with.
              </p>
            </div>
          </section>

          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="text-2xl font-bold text-page mb-4">On-site office massage or clinic sessions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option) => (
                <div key={option.title} className="bg-page-sage rounded-card p-6">
                  <h3 className="font-bold text-page text-lg mb-2">{option.title}</h3>
                  <p className="text-page-muted text-sm mb-4">{option.body}</p>
                  <p className="text-page text-xs font-bold uppercase tracking-widest mb-2">Suits</p>
                  <ul className="space-y-1">
                    {option.suits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-page-muted text-sm">
                        <Tick />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-page-muted mt-4">
              We agree the details with you: how many staff, how often, session lengths, on-site, in clinic or a mix of both, and how it is paid for, whether by the company, shared with staff, or through <Link href={ROUTES.giftCards} className="link-inline">gift cards</Link> for rewards and incentives.
            </p>
          </section>

          <section aria-labelledby="issues-heading">
            <h2 id="issues-heading" className="text-2xl font-bold text-page mb-4">What our staff wellness sessions help with</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {issues.map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-page-muted mt-4">
              Desk-related pain is one of the most common reasons people book our <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link>. Read more in our guides to <Link href={ROUTES.blog.officeWorkerMassageArchway} className="link-inline">massage for office workers</Link> and <Link href={ROUTES.blog.deskPosturePainMassage} className="link-inline">desk posture pain</Link>.
            </p>
          </section>

          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="text-2xl font-bold text-page mb-4">How it works</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <li key={step.title} className="bg-card border border-page rounded-card p-5">
                  <p className="text-brand-teal text-xs font-black uppercase tracking-widest mb-1">Step {i + 1}</p>
                  <h3 className="font-bold text-page mb-1">{step.title}</h3>
                  <p className="text-page-muted text-sm">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="reasons-heading">
            <h2 id="reasons-heading" className="text-2xl font-bold text-page mb-4">Why Range and Restore</h2>
            <ul className="space-y-2">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-page-muted mt-4">
              Meet <Link href={ROUTES.team} className="link-inline">our therapists</Link> or read about <Link href={ROUTES.awards} className="link-inline">our award</Link>.
            </p>
          </section>

          <section aria-labelledby="areas-heading">
            <h2 id="areas-heading" className="text-2xl font-bold text-page mb-4">Corporate wellbeing across North London</h2>
            <p className="text-page-muted">
              Our clinic is at 130 Junction Road, Archway N19 5LB. We work with businesses across North London, including <Link href={ROUTES.areasServed.islingtonN1} className="link-inline">Islington</Link>, <Link href={ROUTES.areasServed.hollowayN7} className="link-inline">Holloway</Link>, <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link>, <Link href={ROUTES.areasServed.kentishTownNw5} className="link-inline">Kentish Town</Link>, <Link href={ROUTES.areasServed.finsburyParkN4} className="link-inline">Finsbury Park</Link>, <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link> and <Link href={ROUTES.areasServed.crouchEndN8} className="link-inline">Crouch End</Link>. For workplaces elsewhere in London, get in touch and we will tell you what we can do.
            </p>
          </section>

          <section aria-labelledby="page-faqs">
            <h2 id="page-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-page bg-card p-5">
                  <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                  <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="enquire-heading" className="bg-accent rounded-2xl p-8 text-center sm:text-left">
            <h2 id="enquire-heading" className="text-2xl font-black text-ink mb-3">Enquire about Corporate Wellbeing</h2>
            <p className="text-brand-green font-semibold mb-6">
              Tell us about your team and what you have in mind. We will come back to you with options and a tailored quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a href={CORPORATE_ENQUIRY_URL} className="btn-ink">
                Enquire about Corporate Wellbeing
              </a>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ink-outline">
                Call Range and Restore
              </a>
            </div>
            <p className="text-brand-green text-sm font-medium mt-4">
              Or email <a href={CORPORATE_ENQUIRY_URL} className="font-bold underline underline-offset-2">{BUSINESS.email}</a>
            </p>
          </section>

          <div className="border-t border-page pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
              <Link href={ROUTES.services.backNeckPainMot} className="link-inline link-inline-tap">
                &rarr; Back &amp; Neck Pain MOT
              </Link>
              <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
                &rarr; Sports and deep tissue massage
              </Link>
              <Link href={ROUTES.recoverySuite.index} className="link-inline link-inline-tap">
                &rarr; Recovery Suite: sauna and compression
              </Link>
              <Link href={ROUTES.blog.officeWorkerMassageArchway} className="link-inline link-inline-tap">
                &rarr; Massage for office workers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
