import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Glow By D and Range and Restore | Same Building, 130 Junction Road, Archway',
  description: 'Glow By D and Range and Restore share the same building at 130 Junction Road, Archway. Luxury skincare and beauty alongside sports massage and recovery.',
  path: '/community/glow-by-d',
})

const PARTNER_URL = 'https://glowbyd.co.uk'
const PARTNER_PHONE = '07961 270948'
const PARTNER_PHONE_TEL = '+447961270948'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Glow By D', path: '/community/glow-by-d' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Glow By D',
  url: PARTNER_URL,
  telephone: PARTNER_PHONE_TEL,
  description: 'Luxury skincare, beauty and wellness treatments. Advanced facials, microneedling, laser and IPL skin treatments from a private room at 130 Junction Road, Archway, London N19 5LB.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'Place', name: 'Archway, London N19' },
  sameAs: ['https://www.instagram.com/glowbydclinic'],
  memberOf: { '@id': `${BASE_URL}/#business` },
}

export default function GlowByDPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; 130 Junction Road, Archway</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Glow By D and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            We share the same building at 130 Junction Road, Archway. Luxury skincare, beauty and wellness in one room, sports massage and recovery in the next, working together on how the same North London community looks and feels.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Glow By D</h2>
          <p>
            Glow By D is a luxury beauty and skincare clinic run from a private treatment room at 130 Junction Road, the same building as Range and Restore. The focus is personalised: expert skincare, advanced facial treatments and wellness-led beauty, tailored to what your skin actually needs rather than a one-size-fits-all menu. Only the finest products, the latest techniques, and a belief we genuinely share at this address: true beauty and true health both start from within.
          </p>
          <p>
            Whether you&apos;re in for a quick refresh or a full pampering session, the aim is the same. You leave looking your best, feeling your best, and wanting to come back.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What they offer, in plain terms</h2>
          <p>
            Advanced, results-driven skin and beauty treatments.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Signature treatments:</strong> the Glow By D Signature (microneedling + Laser Genesis) and 3D Renew (Limelight IPL + Laser Genesis) for full skin rejuvenation.</li>
            <li><strong className="text-page">Facials:</strong> Luminous Glow, Brightening, Pure Complexion Clearing, Carboxy Therapy and Hydra OxyGeneo facials.</li>
            <li><strong className="text-page">Advanced skin treatments:</strong> Dermapen and radiofrequency microneedling, BioRe Peel, The Perfect Peel Superblend, Laser Genesis by Cutera and IPL.</li>
            <li><strong className="text-page">Laser treatments:</strong> medical laser hair removal and laser vein removal.</li>
            <li><strong className="text-page">Hair restoration:</strong> Dermapen hair restoration and rejuvenation for thinning hair.</li>
          </ul>
          <p>
            The full menu and pricing live on the <a href={`${PARTNER_URL}/pricelist`} target="_blank" rel="noopener" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8]">Glow By D pricelist</a>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why a shared building matters</h2>
          <p>
            130 Junction Road has quietly become a health and wellbeing hub for Archway, and Glow By D is part of that under this roof. This isn&apos;t a partnership arranged over email between two businesses across town. It&apos;s the same front door, the same corridor, rooms a few steps apart. When a massage client asks about skincare on their way out, the answer is next door. When a Glow By D client mentions a stiff neck or heavy legs, the answer is next door the other way. For a high street in North London, having luxury skincare, sports massage, lymphatic drainage and a private infrared sauna at one address is genuinely rare.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How it works with our clients</h2>
          <p>
            Recovery and beauty overlap far more than people think. Both are about circulation, skin health, stress and taking proper time for yourself. Being in the same building turns that overlap into something you can actually book.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">The full self-care visit.</strong> A sports massage or a private sauna session with us, then a facial with Glow By D, all in one trip to one address.</li>
            <li><strong className="text-page">Skin and sauna.</strong> Infrared sauna sessions support circulation and skin health from the inside. Glow By D&apos;s facials and skin treatments work from the outside. Clients who care about one tend to love the other.</li>
            <li><strong className="text-page">Stress as well as skin.</strong> Plenty of skincare clients are carrying neck, shoulder and jaw tension that shows up in how they feel and how they look. Hands-on soft tissue work next door deals with the cause.</li>
            <li><strong className="text-page">Honest referrals both ways.</strong> If a Glow By D client needs recovery work, they hear about us. If our client asks about skincare, they hear about Glow By D. No commissions, no scripts, just neighbours recommending each other because the work is good.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Looking after Archway, inside and out</h2>
          <p>
            Range and Restore are specialists in soft tissue therapy, lymphatic drainage and sauna and compression recovery. Glow By D are specialists in skin, beauty and wellness. Put both in the same building and you get something most parts of London don&apos;t have: one address where you can recover, reset and glow without changing postcodes. Two independents, one roof, the same community walking out feeling better than they walked in.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Visit Glow By D</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Same building as us. 130 Junction Road, Archway, London N19 5LB. Browse the treatments and pricelist online, or call to book your appointment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Visit glowbyd.co.uk <span aria-hidden="true">→</span>
            </a>
            <a
              href={`tel:${PARTNER_PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-white text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-[#1a3d3a]"
            >
              Call {PARTNER_PHONE}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; The Recovery Suite at Range and Restore
            </Link>
            <Link href="/services/relaxation-restorative-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Relaxation Massage at Range and Restore
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
