import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Alaric Yoga and Range and Restore | Iyengar Yoga, Pranayama and Soft Tissue Therapy',
  description: 'How Range and Restore and Alaric Newcombe of Alaric Yoga work together on movement, recovery and longevity. Senior Iyengar yoga and pranayama alongside sports and soft tissue remedial therapy, supporting students through their practice.',
  path: '/community/alaric-yoga',
})

const PARTNER_URL = 'https://www.alaricyoga.co.uk/pranayama/'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Alaric Yoga', path: '/community/alaric-yoga' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Alaric Yoga',
  url: PARTNER_URL,
  description: 'Senior Level 3 Iyengar Yoga teacher Alaric Newcombe, offering yoga, mobility and pranayama practice with decades of teaching experience.',
  memberOf: { '@id': `${BASE_URL}/#business` },
}

export default function AlaricYogaPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; Yoga, Mobility and Pranayama</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Alaric Yoga and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Senior Iyengar yoga and pranayama with Alaric Newcombe, sports and soft tissue remedial therapy with Carlos, working hand in hand on movement, recovery and long-term physical wellbeing.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-[#0f4a2e] mb-10 p-12 flex items-center justify-center text-center">
          <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Range and Restore <span className="text-[#7dd94a]">×</span> Alaric Yoga
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Alaric</h2>
          <p>
            I&apos;ve been working closely with Alaric Newcombe from Alaric Yoga, supporting both his own recovery and many of his students through sports and soft tissue remedial therapy at Range and Restore Sports Massage.
          </p>
          <p>
            Alaric is a highly respected Senior Level 3 Iyengar Yoga teacher with decades of experience teaching, mentoring and guiding students through yoga, mobility work and pranayama practice. His work places huge emphasis on movement quality, body awareness, breath control, alignment and long-term physical wellbeing.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What his students say</h2>
          <p>
            One thing that really stands out to me is the level of admiration and respect his students have for him. I regularly hear incredibly positive feedback about the way he teaches, his patience, attention to detail, knowledge, calm energy, and genuine passion for helping people improve not only physically, but mentally as well. His students speak very highly of him, and it&apos;s clear he has built a strong community based on trust, care, dedication and years of experience.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we work together</h2>
          <p>
            Because of the physical demands of teaching yoga and maintaining such a high level of practice, our work together has focused on mobility, recovery, injury prevention, muscular balance, reducing discomfort and helping maintain healthy movement patterns. Over time, Alaric has also trusted me to support many of his own students who needed help with tightness, pain management, recovery, mobility restrictions or general musculoskeletal support alongside their yoga practice.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why this collaboration works</h2>
          <p>
            I&apos;m genuinely grateful and proud to be able to support both Alaric and his students. The collaboration between yoga, breathwork, mobility and hands-on soft tissue therapy works incredibly well together and complements each other naturally. There&apos;s a lot of mutual respect, and it&apos;s been a pleasure working alongside someone so passionate and dedicated to helping people move and feel better.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Visit Alaric Yoga</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Explore Alaric Newcombe&apos;s Iyengar yoga and pranayama practice. Decades of teaching, mentoring and guiding students through movement, breath and long-term physical wellbeing.
          </p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Visit alaricyoga.co.uk <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports and deep tissue remedial therapy
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
