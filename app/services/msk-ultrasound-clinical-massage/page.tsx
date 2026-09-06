import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { FaqAccordion } from '@/components/FaqAccordion'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { BOOKING_URLS, RELIABLE_SCAN_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'MSK Scan and Ultrasound North London | Archway N19',
  description:
    'Diagnostic MSK ultrasound scan with written report, plus a 60-minute clinical massage guided by the findings. Scan and treatment in one visit in Archway, North London. £165 total.',
  path: '/services/msk-ultrasound-clinical-massage',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'MSK Ultrasound + Clinical Massage', path: '/services/msk-ultrasound-clinical-massage' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MSK Injury Assessment, Diagnostic Ultrasound & Clinical Massage',
  description:
    'Combined package: diagnostic musculoskeletal (MSK) ultrasound with clinical consultation, written report and images by Reliable Scan Private Ultrasound Clinic, followed by a 60-minute clinical massage at Range and Restore guided by the findings. Both at 130 Junction Road, Archway, London N19 5LB.',
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
  serviceType: 'Diagnostic Imaging & Clinical Massage',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MSK Injury Assessment, Diagnostic Ultrasound & Clinical Massage',
    itemListElement: [
      {
        '@type': 'Offer',
        price: '165.00',
        priceCurrency: 'GBP',
        itemOffered: {
          '@type': 'Service',
          name: 'MSK Injury Assessment, Diagnostic Ultrasound & Clinical Massage (approx. 90 minutes)',
        },
        priceSpecification: [
          { '@type': 'PriceSpecification', price: '75', priceCurrency: 'GBP', description: '60-minute Clinical Massage — paid online to Range and Restore when booking' },
          { '@type': 'PriceSpecification', price: '90', priceCurrency: 'GBP', description: 'Diagnostic MSK ultrasound, consultation, written report and images — paid directly to Reliable Scan' },
        ],
      },
    ],
  },
}

const daySteps = [
  {
    title: 'Start with your scan at Reliable Scan',
    desc: 'Your day begins downstairs at Reliable Scan Private Ultrasound Clinic — same building, 130 Junction Road. A GMC-registered doctor carries out a diagnostic MSK ultrasound of one body area with a clinical consultation. Allow around 30 minutes. The £90 scan fee is paid directly to Reliable Scan, before the appointment or on the day.',
  },
  {
    title: 'Your findings reach your therapist',
    desc: 'Where clinically appropriate, the written report and ultrasound images are shared with your Range and Restore therapist before treatment. No chasing paperwork between clinics — it happens under one roof.',
  },
  {
    title: 'Your 60-minute Clinical Massage',
    desc: 'Then it’s upstairs to Range and Restore for your treatment. Your therapist works from both the clinical assessment and the imaging, so pressure, technique and priorities are matched to what is actually going on in the tissue — not guesswork.',
  },
  {
    title: 'Leave with a clear plan',
    desc: 'You keep the written report and images. Your therapist talks you through what was found, what the treatment addressed, rehab and home exercise guidance, and honest next steps — including onward referral if the scan shows something hands-on treatment can’t fix.',
  },
]

const idealFor = [
  'Persistent or recurring pain that isn’t improving',
  'A recent sports or soft tissue injury',
  'Wanting to understand the cause of your symptoms before treatment begins',
  'Recovery from an injury where progress has stalled',
  'Wanting a more accurate, evidence-informed treatment plan',
  'The convenience of diagnosis and treatment coordinated under one roof',
]

const scanIdentifies = [
  'Muscle tears and strains',
  'Tendon injuries and tendinopathy',
  'Ligament sprains',
  'Bursitis',
  'Joint inflammation',
  'Fluid collections',
  'Soft tissue lumps',
  'Sports injuries',
  'Persistent or recurring pain',
  'Other musculoskeletal conditions where ultrasound assessment is clinically appropriate',
]

const massageIncludes = [
  'Clinical massage',
  'Sports massage',
  'Deep tissue massage',
  'Soft tissue therapy',
  'Myofascial release',
  'Assisted stretching',
  'Joint mobilisation',
  'Manual lymphatic drainage (where clinically appropriate)',
  'Rehabilitation advice and home exercise guidance',
]

const faqs = [
  {
    q: 'Do I need a GP referral for the MSK ultrasound scan?',
    a: 'No. Reliable Scan takes self-referrals, so you can book this package without a GP letter or insurance paperwork. If you do have previous MRI scans, X-rays, ultrasound reports or medical letters, bring them along or email them over before your appointment — they help both the sonographer and your therapist.',
  },
  {
    q: 'How does the payment split work?',
    a: 'The total investment is £165, paid in two parts. £75 is paid online to Range and Restore when you book — that secures your appointment and covers your 60-minute Clinical Massage. The £90 ultrasound fee is paid directly to Reliable Scan, either before your appointment or on the day of your scan, and covers the diagnostic MSK ultrasound of one body area, a clinical consultation, a comprehensive written report and your ultrasound images.',
  },
  {
    q: 'Can I have the scan and the massage on the same day?',
    a: 'Where availability allows, yes — both appointments run on the same day at 130 Junction Road, scan first, then massage. If same-day slots don’t line up, the scan is booked first so the report and images are ready before your treatment.',
  },
  {
    q: 'Who actually performs the ultrasound?',
    a: 'Reliable Scan Private Ultrasound Clinic — a private diagnostic clinic led by GMC-registered doctors and specialist sonographers, based in the same building as Range and Restore. Scans are performed and reported by clinicians, and you receive a comprehensive written report with images.',
  },
  {
    q: 'What happens if the scan finds something massage can’t treat?',
    a: 'Then you’ve found out at the right time. The report is yours to keep and share with your GP, physio or consultant, and your therapist will adapt the treatment to what is safe and useful — or tell you plainly if hands-on work isn’t the right next step. Either way, you leave with a diagnosis rather than another round of guesswork.',
  },
  {
    q: 'How long does the whole appointment take?',
    a: 'Allow approximately 90 minutes in total: around 30 minutes for the ultrasound and consultation, then 60 minutes for your Clinical Massage. If the two appointments run on separate days, each takes its own slot.',
  },
  {
    q: 'Do I have to arrange the ultrasound myself?',
    a: 'No. Once your booking comes through, a member of the Range and Restore team contacts you to help arrange the ultrasound with Reliable Scan. If you’d rather sort it yourself, you can contact Reliable Scan directly on 020 3576 4442 after booking.',
  },
]

export default function MskUltrasoundClinicalMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Diagnostic Imaging + Clinical Massage &middot; Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            MSK Injury Assessment, Diagnostic Ultrasound &amp; Clinical Massage in Archway, London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Persistent pain? Recovering from an injury? Not sure what&apos;s actually causing your symptoms? Get a diagnostic MSK ultrasound and a 60-minute clinical massage guided by the findings — both under one roof at 130 Junction Road.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.mskUltrasoundMassage} label="Book Now – £75 Online" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Diagnosis first, then treatment</h2>
            <p className="text-page-muted mb-4">
              Most massage starts with an educated assessment of your symptoms. This package starts with actual imaging. A diagnostic musculoskeletal (MSK) ultrasound with{' '}
              <a href={RELIABLE_SCAN_URL} target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan</a>{' '}
              shows what is happening in the muscle, tendon or joint — then your 60-minute Clinical Massage at Range and Restore is planned around both the clinical assessment and the report.
            </p>
            <p className="text-page-muted">
              Where clinically appropriate, the ultrasound findings and written report are shared with your therapist before your treatment. That means more informed treatment decisions, greater precision, and a clearer plan for your recovery — instead of treating symptoms alone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Transparent pricing — £165 total</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-6 bg-card border-2 border-[#1a3d3a]">
                <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-xs mb-2">Paid online when booking</p>
                <p className="text-3xl font-black text-page mb-1">£75</p>
                <p className="font-bold text-page mb-2">To Range and Restore</p>
                <p className="text-page-muted text-sm">Secures your appointment and covers your 60-minute Clinical Massage, tailored to your assessment and scan findings.</p>
              </div>
              <div className="rounded-xl p-6 bg-card border-2 border-[#1a3d3a]">
                <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-xs mb-2">Paid at the clinic</p>
                <p className="text-3xl font-black text-page mb-1">£90</p>
                <p className="font-bold text-page mb-2">Directly to Reliable Scan</p>
                <p className="text-page-muted text-sm">Covers the diagnostic MSK ultrasound (one body area), clinical consultation, comprehensive written report and your ultrasound images. Payable before your appointment or on the day of your scan.</p>
              </div>
            </div>
            <p className="mt-4 text-page-muted text-sm">
              No hidden extras. £75 online + £90 at the clinic = £165 total, for approximately 90 minutes of assessment, imaging and treatment.
            </p>
            <div className="mt-4 bg-[#eeeeee] rounded-xl p-5">
              <p className="text-page-muted text-sm">
                <strong className="text-page">Please note:</strong> part of this service is delivered by our verified local partner. The diagnostic MSK ultrasound, clinical consultation, written report and images are provided, reported and charged by{' '}
                <a href={RELIABLE_SCAN_URL} target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan Private Ultrasound Clinic</a>, an independent clinic based in the same building. Range and Restore Sports Massage provides the 60-minute Clinical Massage element of the package.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What your day looks like</h2>
            <p className="text-page-muted mb-6">
              Everything happens at 130 Junction Road, Archway. Where availability allows, both appointments run on the same day — scan first, then treatment.
            </p>
            <ol className="space-y-4">
              {daySteps.map((step, i) => (
                <li key={step.title} className="flex items-start gap-4 bg-page-sage rounded-xl p-6">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0f767a] text-white font-black flex items-center justify-center" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-page mb-1">{step.title}</h3>
                    <p className="text-page-muted text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this service for?</h2>
            <p className="text-page-muted mb-4">This package is designed for anyone who wants greater confidence about what&apos;s causing their symptoms before treatment starts, including:</p>
            <ul className="space-y-2">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What can a diagnostic MSK ultrasound identify?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scanIdentifies.map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What does the Clinical Massage include?</h2>
            <p className="text-page-muted mb-3">Your 60-minute treatment is fully tailored to your individual needs and may include:</p>
            <ul className="space-y-2">
              {massageIncludes.map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#0f767a] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What happens after you book?</h2>
            <p className="text-page-muted mb-4">
              To get the most out of your treatment, the ultrasound should ideally happen before your Clinical Massage, so your therapist can review the findings first. Once your booking comes through, a member of the Range and Restore team contacts you to help arrange your scan with Reliable Scan — or you&apos;re welcome to contact them directly.
            </p>
            <div className="bg-page-sage rounded-xl p-6">
              <h3 className="font-bold text-page mb-2">Reliable Scan Private Ultrasound Clinic</h3>
              <ul className="text-page-muted text-sm space-y-1">
                <li>130 Junction Road, Archway, London N19 5LB — same building as Range and Restore</li>
                <li>Telephone: <a href="tel:+442035764442" className="text-[#0f767a] font-semibold">020 3576 4442</a></li>
                <li>Mobile: <a href="tel:+447883616916" className="text-[#0f767a] font-semibold">07883 616916</a></li>
                <li>Email: <a href="mailto:info@reliablescanltd.com" className="text-[#0f767a] font-semibold">info@reliablescanltd.com</a></li>
                <li>Website: <a href={RELIABLE_SCAN_URL} target="_blank" rel="noopener noreferrer" className="text-[#0f767a] font-semibold underline decoration-[#0f767a]/40">reliablescanltd.com</a></li>
              </ul>
            </div>
            <p className="mt-4 text-page-muted text-sm">
              On the day, wear comfortable clothing that allows easy access to the area being examined. If you have previous MRI scans, X-rays, ultrasound reports or relevant medical letters, bring them with you or email them over beforehand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Stop guessing. Get a diagnosis and treatment in one visit.</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Diagnostic MSK ultrasound, written report and a 60-minute clinical massage guided by the findings — all at 130 Junction Road, Archway. £75 online secures your appointment.
            </p>
            <BookingButton href={BOOKING_URLS.mskUltrasoundMassage} label="Book Your Assessment" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/clinical-collaboration" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → How clinical collaboration works at 130 Junction Road
              </Link>
              <Link href="/community/reliable-scan" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → About our partner Reliable Scan
              </Link>
              <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Advanced Clinical Massage
              </Link>
              <Link href="/blog/msk-ultrasound-scan-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Do I Need a Scan for My Injury? MSK Ultrasound, Explained
              </Link>
              <Link href="/blog/sports-recovery-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → How to Recover Faster Between Training and Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
