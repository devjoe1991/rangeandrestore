import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Do I Need a Scan for My Injury? MSK Ultrasound Explained',
  description: "When a diagnostic MSK ultrasound is worth having, what it can show, and how scan plus clinical massage works under one roof in Archway, North London.",
  path: '/blog/msk-ultrasound-scan-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'MSK Ultrasound Scan & Massage', path: '/blog/msk-ultrasound-scan-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Do I Need a Scan for My Injury? MSK Ultrasound, Explained',
  description: 'When a diagnostic MSK ultrasound is worth having for persistent pain or a sports injury, what it can show, and how the new scan plus clinical massage package works at 130 Junction Road, Archway, North London.',
  image: 'https://rangeandrestore.co.uk/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpeg',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Soft Tissue Therapist & MLD Practitioner',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-07-09',
  dateModified: '2026-08-23',
  url: 'https://rangeandrestore.co.uk/blog/msk-ultrasound-scan-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/msk-ultrasound-scan-massage-archway',
  keywords: 'MSK ultrasound Archway, diagnostic ultrasound scan London, sports injury scan near me, muscle tear ultrasound, ultrasound before massage, private ultrasound scan North London, injury assessment Archway N19',
}

// Problem-based FAQs — mirror the question-shaped headings in the article so the
// page is eligible for People Also Ask / FAQ rich results on the exact queries
// people search when they have this problem. Answers are grounded in the article
// content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Do I need a scan before having a massage?',
    a: 'Most people don’t. For general muscle tightness, stress or routine recovery, an assessment-led massage is enough. A diagnostic MSK ultrasound becomes worth considering when pain has persisted or keeps returning, when you’ve had a recent injury and don’t know how bad it is, or when treatment has stalled and nobody has actually looked at the tissue.',
  },
  {
    q: 'Do I need a GP referral for a private ultrasound scan?',
    a: 'No. Reliable Scan, the private diagnostic ultrasound clinic that shares the building with Range and Restore at 130 Junction Road, Archway, takes self-referrals. No GP letter and no insurance paperwork are needed to book.',
  },
  {
    q: 'What can an MSK ultrasound scan show?',
    a: 'Diagnostic MSK ultrasound can help identify muscle tears and strains, tendon injuries and tendinopathy, ligament sprains, bursitis, joint inflammation, fluid collections, soft tissue lumps and other musculoskeletal conditions where ultrasound assessment is clinically appropriate.',
  },
  {
    q: 'Can an ultrasound scan tell if I’ve torn a muscle?',
    a: 'Yes. Identifying muscle tears and strains is one of the main uses of MSK ultrasound. The scan is performed and reported by GMC-registered doctors, and you receive a comprehensive written report plus the ultrasound images.',
  },
  {
    q: 'What’s the difference between an ultrasound and an MRI for injuries?',
    a: 'Ultrasound is real-time and dynamic, so the clinician can watch the tissue as you move it, and it is well suited to muscles, tendons and ligaments. MRI is generally preferred for deeper structures such as spinal discs, bone and the inside of joints. The clinician performing your scan will tell you if a different type of imaging is more appropriate for your problem.',
  },
  {
    q: 'How much does an MSK ultrasound scan cost in Archway?',
    a: 'As part of the MSK Injury Assessment package at Range and Restore, the diagnostic ultrasound is £90, paid directly to Reliable Scan, and covers the scan of one body area, a clinical consultation, a comprehensive written report and your images. The full package, including a 60-minute clinical massage, is £165 in total.',
  },
  {
    q: 'Will my massage actually be different because of the scan?',
    a: 'Yes, where clinically appropriate. The written report and images are shared with your therapist before treatment, which informs how much pressure to use, which areas to prioritise, what to avoid, and how realistic your recovery timeline is. It replaces educated guesswork with imaging.',
  },
  {
    q: 'How quickly can I get an ultrasound scan in North London?',
    a: 'Reliable Scan is open seven days a week, 10am to 10pm, and takes same-day appointments. Where availability allows, the scan and your clinical massage can run on the same day at 130 Junction Road, Archway.',
  },
  {
    q: 'When should I see a doctor instead of booking a scan and massage?',
    a: 'If your pain is severe, has suddenly worsened, follows significant trauma, or comes with red flags such as fever, unexplained swelling, numbness or loss of function, see a doctor or A&E first. Diagnostic ultrasound supports clinical decision-making; it is not a substitute for urgent medical care.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function MskUltrasoundScanMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Do I Need a Scan for My Injury? MSK Ultrasound, Explained
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-07-09">9 July 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Here&apos;s the honest answer: most aches don&apos;t need a scan. But if your pain has persisted for weeks, keeps coming back, or started with an injury you never got looked at, treating it blind is a slow way to get better. A diagnostic musculoskeletal (MSK) ultrasound shows what is actually going on in the muscle, tendon or joint — and at Range and Restore in Archway, you can now book the scan and a <Link href={ROUTES.services.mskUltrasoundClinicalMassage} className="link-inline">clinical massage guided by the findings</Link> as one package, under one roof.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is an MSK ultrasound?</h2>

          <p>
            A musculoskeletal ultrasound is the same technology used in pregnancy scanning, applied to muscles, tendons, ligaments and joints. A clinician moves a probe over the painful area and watches the tissue on screen in real time. Because it is dynamic, they can also watch the tissue while you move — flexing an ankle, raising a shoulder — which is something a static image can&apos;t offer.
          </p>

          <p>
            At 130 Junction Road, MSK scans are performed and reported by the GMC-registered doctors at <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="link-cite">Reliable Scan</a>, the private diagnostic ultrasound clinic that shares our building. You leave with a clinical consultation, a comprehensive written report and your ultrasound images.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What can it show?</h2>

          <p>Diagnostic MSK ultrasound can help identify:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Muscle tears and strains</li>
            <li>Tendon injuries and tendinopathy</li>
            <li>Ligament sprains</li>
            <li>Bursitis and joint inflammation</li>
            <li>Fluid collections and soft tissue lumps</li>
            <li>Sports injuries and persistent or recurring pain</li>
          </ul>

          <p>
            That covers a large share of what walks through a massage clinic&apos;s door: the calf strain that keeps recurring, the shoulder that clicks and aches, the <Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline">Achilles that flares every time training ramps up</Link>, the <Link href={ROUTES.blog.tennisElbowMassageArchway} className="link-inline">elbow that never quite settles</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When is a scan actually worth it?</h2>

          <p>
            You don&apos;t need imaging for everyday tightness or a stressful week. A scan earns its place when the answer would change what happens next. In practice, that looks like:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Pain that has persisted or kept returning despite rest or treatment</li>
            <li>A recent sports or soft tissue injury where you don&apos;t know how bad the damage is</li>
            <li>Recovery that has stalled and nobody has actually looked at the tissue</li>
            <li>Wanting to understand the cause of your symptoms before committing to a treatment plan</li>
            <li>Being advised by a GP or physio that an MSK scan would be useful</li>
          </ul>

          <p>
            The common thread is uncertainty. If you already know what&apos;s wrong, treat it. If you don&apos;t, weeks of guesswork usually cost more — in time, money and frustration — than one afternoon of finding out.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Ultrasound or MRI?</h2>

          <p>
            The two aren&apos;t rivals; they answer different questions. Ultrasound is real-time, dynamic and well suited to structures nearer the surface — muscles, tendons and ligaments. MRI is generally preferred for deeper structures: spinal discs, bone, and the inside of joints. If the doctor performing your ultrasound believes a different type of imaging is more appropriate, that goes in your report and you&apos;ll be told directly. Either way, you end the appointment knowing more than you started with.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the scan-plus-massage package works in Archway</h2>

          <p>
            The <Link href={ROUTES.services.mskUltrasoundClinicalMassage} className="link-inline">MSK Injury Assessment, Diagnostic Ultrasound &amp; Clinical Massage package</Link> joins the two halves of the problem — diagnosis and treatment — into one coordinated visit at 130 Junction Road:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-page">The scan comes first.</strong> A diagnostic MSK ultrasound of one body area with Reliable Scan, including consultation, written report and images.</li>
            <li><strong className="text-page">The findings reach your therapist.</strong> Where clinically appropriate, the report and images are shared with your Range and Restore therapist before treatment.</li>
            <li><strong className="text-page">Then a 60-minute clinical massage.</strong> Pressure, technique and priorities are matched to what the imaging shows — not guesswork.</li>
          </ul>

          <p>
            Pricing is deliberately transparent. The total is £165: £75 paid online to Range and Restore when you book, which covers the clinical massage, and £90 paid directly to Reliable Scan for the scan, consultation, report and images. The ultrasound element of the package is provided by Reliable Scan as an independent clinic — that&apos;s the point. You get imaging from imaging specialists and hands-on treatment from soft tissue specialists, in the same building, on the same problem. You can read more about how the two clinics work together on our <Link href={ROUTES.clinicalCollaboration} className="link-inline">clinical collaboration page</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor first</h2>

          <p>
            Diagnostic ultrasound supports clinical decision-making, but it is not a substitute for urgent medical care. If your pain is severe, has suddenly worsened, follows significant trauma, or comes with red flags such as fever, unexplained swelling, numbness or loss of function, see a doctor or A&amp;E first. And if a scan reveals something that hands-on treatment can&apos;t help, you&apos;ll be told plainly — the written report is yours to take to your GP, physio or consultant.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to get an MSK ultrasound and massage near you in North London</h2>

          <p>
            If you&apos;ve been searching &ldquo;MSK ultrasound near me&rdquo;, &ldquo;private ultrasound scan North London&rdquo;, &ldquo;sports injury scan Archway&rdquo;, &ldquo;muscle tear scan London&rdquo; or &ldquo;injury assessment N19&rdquo;, this package was built for exactly that. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5. Reliable Scan is open seven days a week, 10am to 10pm, with same-day appointments often available.
          </p>

          <p>
            That puts diagnosis-led treatment within easy reach of Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Stroud Green, Islington, Kentish Town and the wider North London catchment — without a trip into central London or a long imaging waiting list.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Injury scans and massage: common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-page mb-2">{f.q}</h3>
                <p className="text-page-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Stop guessing what&apos;s causing your pain</h2>
          <p className="text-brand-green font-semibold mb-6">
            Diagnostic MSK ultrasound, written report and a 60-minute clinical massage guided by the findings — all at 130 Junction Road, Archway. £75 online secures your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.mskUltrasoundMassage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Book the Package
            </a>
            <Link
              href={ROUTES.services.mskUltrasoundClinicalMassage}
              className="btn-ink-outline"
            >
              See Full Details
            </Link>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center text-ink font-semibold underline min-h-[44px] sm:ml-2"
            >
              Or ask a question first
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.services.mskUltrasoundClinicalMassage} className="link-inline link-inline-tap">
              &rarr; MSK Injury Assessment, Diagnostic Ultrasound &amp; Clinical Massage
            </Link>
            <Link href={ROUTES.clinicalCollaboration} className="link-inline link-inline-tap">
              &rarr; How clinical collaboration works at 130 Junction Road
            </Link>
            <Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline link-inline-tap">
              &rarr; Does Massage Help Achilles Tendinitis?
            </Link>
            <Link href={ROUTES.blog.sportsRecoveryArchway} className="link-inline link-inline-tap">
              &rarr; How to Recover Faster Between Training and Events
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href={ROUTES.blog.index} className="text-brand-teal font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
