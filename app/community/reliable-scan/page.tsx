import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Reliable Scan and Range and Restore | Same Building, 130 Junction Road, Archway',
  description: 'Range and Restore and Reliable Scan share the same healthcare hub at 130 Junction Road, Archway. Private diagnostic ultrasound and specialist sports and recovery therapy under one roof in North London.',
  path: '/community/reliable-scan',
})

const PARTNER_URL = 'https://reliablescanltd.com'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Reliable Scan', path: '/community/reliable-scan' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Reliable Scan Ltd',
  url: PARTNER_URL,
  description: 'Private diagnostic ultrasound clinic at 130 Junction Road, Archway, London N19 5LB. GMC-registered doctors and specialist sonographers, same-day appointments, no GP referral required.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'Place', name: 'Archway, London N19' },
  memberOf: { '@id': `${BASE_URL}/#business` },
}

export default function ReliableScanPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; 130 Junction Road, Archway</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Reliable Scan and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            We share the same building at 130 Junction Road, Archway. Private diagnostic ultrasound and specialist sports and recovery therapy under one roof, working together on health and wellbeing in the North London community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/Reliabale-scan.webp"
            alt="Reliable Scan logo"
            width={400}
            height={200}
            className="max-h-40 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Reliable Scan</h2>
          <p>
            Reliable Scan is a private diagnostic ultrasound clinic at 130 Junction Road, Archway. Scans are performed and reported by GMC-registered doctors and specialist sonographers. They open seven days a week, 10am to 10pm, take same-day appointments, and you can self-refer for any scan. No GP letter, no insurance hoops. For a lot of locals in N19, that combination is the difference between waiting weeks for clarity and walking out with an answer the same afternoon.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What they offer, in plain terms</h2>
          <p>
            The full ultrasound menu, under one roof.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Pregnancy scans:</strong> early pregnancy, dating and reassurance, gender, 3D and 4D, growth and anomaly.</li>
            <li><strong className="text-page">Women’s health:</strong> pelvic and gynaecology, transvaginal, fertility and follicle tracking, breast (unilateral and bilateral), endometriosis, fibroid and ovarian cyst assessments, axilla, groin and hernia.</li>
            <li><strong className="text-page">Men’s health:</strong> prostate, testicular, groin and hernia, KUB (kidneys, ureter, bladder).</li>
            <li><strong className="text-page">General and diagnostic imaging:</strong> full body multi-organ screening, abdominal, thyroid and neck lump, soft tissue lump and bump.</li>
            <li><strong className="text-page">Musculoskeletal (MSK):</strong> joints, tendons, ligaments and muscles. Shoulder, knee, ankle, elbow, the lot.</li>
            <li><strong className="text-page">Vascular and Doppler:</strong> blood flow assessment, clot and arterial checks.</li>
            <li><strong className="text-page">Add-ons:</strong> home visit ultrasound across London, physiotherapy and rehabilitation, blood testing, printed and digital images, fast-tracked GP reports.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why a shared building matters</h2>
          <p>
            130 Junction Road is a small healthcare hub. Reliable Scan run their ultrasound clinic from the same address we run Range and Restore from. That isn’t marketing language. It’s the front door, the lift, the corridor. When someone walks in for a scan and asks about the soft tissue work upstairs, they’re asking about us. When someone books a sports massage and we think they’d benefit from imaging before we go further, the answer is twenty metres away. For Archway and the wider North London community, having diagnostic imaging and hands-on recovery therapy in one building is genuinely rare. We don’t take it for granted.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How it works with our clients</h2>
          <p>
            A lot of what walks through our door benefits from imaging at some point in the journey. Range and Restore clients are runners, lifters, marathoners, desk workers with chronic pain, post-surgery rehab cases, people in lymphatic care, expectant mums booking pregnancy MLD, and people who just want their body looked after. Reliable Scan slots into that work in concrete ways.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">MSK scans before deeper work.</strong> A persistent shoulder, a knee that won’t settle, a calf strain that keeps coming back. An MSK ultrasound tells us what we’re actually working with before we go in heavy.</li>
            <li><strong className="text-page">Post-injury clarity.</strong> Acute injury, post-surgery rehab, return-to-sport cases. Imaging in the same building means less running between clinics and faster, clearer decisions on how to progress treatment.</li>
            <li><strong className="text-page">Lymphatic and MLD clients.</strong> Our MLD clients sometimes need vascular Doppler or abdominal imaging to rule things in or out. Same building, same week.</li>
            <li><strong className="text-page">Pregnancy clients.</strong> Pregnancy MLD and prenatal massage clients booking reassurance, growth or 4D scans without leaving the address.</li>
            <li><strong className="text-page">General wellbeing.</strong> Full body screenings for clients who want a baseline check alongside the recovery work. Health from the inside out, in one trip.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Wellbeing experts under one roof</h2>
          <p>
            Range and Restore are specialists in soft tissue therapy, lymphatic drainage and sauna and compression recovery. Reliable Scan are specialists in diagnostic imaging. Put both in the same building and Archway has something most parts of London don’t: a healthcare hub on the high street where you can be assessed, imaged, treated and recovered without changing postcodes. We aren’t a marketing partnership. We are neighbours on a corridor with overlapping clients, mutual respect, and a shared interest in the same community walking out healthier.
          </p>

          <p>
            That’s what we mean when we say we’re rooted in Archway. It isn’t a slogan. It’s the actual day to day, on the actual street, at the actual address.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Visit Reliable Scan</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same building as us. 130 Junction Road, Archway, London N19 5LB. Open seven days a week, 10am to 10pm. Same-day appointments, no GP referral needed.
          </p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Visit reliablescanltd.com <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/clinical-collaboration" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; How clinical collaboration works at 130 Junction Road
            </Link>
            <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Manual Lymphatic Drainage at Range and Restore
            </Link>
            <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
