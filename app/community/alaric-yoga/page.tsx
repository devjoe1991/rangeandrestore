import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Alaric Yoga × Range and Restore | Iyengar Yoga and Soft Tissue Therapy in Archway N19',
  description: 'Range and Restore Sports Massage in Archway (130 Junction Road, N19) works alongside Senior Iyengar Yoga teacher Alaric Newcombe of Alaric Yoga. Mobility, recovery, injury prevention and pranayama support for yoga students across N19, Tufnell Park, Holloway, Highgate and North London.',
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
  alternateName: 'Alaric Newcombe Iyengar Yoga',
  url: PARTNER_URL,
  description: 'Senior Level 3 Iyengar Yoga teacher Alaric Newcombe, offering Iyengar yoga, mobility and pranayama (breathwork) practice with decades of teaching experience in London.',
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'North London' },
  ],
  memberOf: { '@id': `${BASE_URL}/#business` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Range and Restore work with yoga students?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Range and Restore at 130 Junction Road, Archway N19 regularly supports yoga students, including many practitioners from Alaric Newcombe of Alaric Yoga. Treatment focuses on mobility, recovery, injury prevention, muscular balance and reducing discomfort that builds up through regular Iyengar yoga, asana and pranayama practice.' },
    },
    {
      '@type': 'Question',
      name: 'Which services help most with yoga practice?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sports and deep tissue massage, advanced clinical massage, advanced cupping with deep tissue, the Back & Neck Pain MOT, 2-hour pain-relief sessions and Manual Lymphatic Drainage (MLD) are the services most commonly booked by yoga practitioners. Every session is assessment-led and matched to what the body presents with that day.' },
    },
    {
      '@type': 'Question',
      name: 'Where is Range and Restore Sports Massage based?',
      acceptedAnswer: { '@type': 'Answer', text: 'The clinic is at 130 Junction Road, Archway, London N19 5LB — three minutes’ walk from Archway tube on the Northern Line. It serves clients across N19, N7, N6, N8, NW5, NW1, NW3, N4 and the wider North London area, including Archway, Upper Holloway, Tufnell Park, Holloway, Highgate, Crouch End, Hornsey, Kentish Town, Dartmouth Park, Gospel Oak, Camden, Hampstead, Belsize Park, Finsbury Park and Stroud Green.' },
    },
  ],
}

export default function AlaricYogaPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; North London &middot; Iyengar Yoga and Pranayama</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Alaric Yoga and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Senior Iyengar Yoga and pranayama with Alaric Newcombe, sports and soft tissue remedial therapy with Carlos Bonvicine at Range and Restore in Archway (130 Junction Road, N19). One yoga teacher and one clinical therapist, working together on mobility, recovery and long-term physical wellbeing for students across North London.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-page-sage mb-10 flex items-center justify-center">
          <Image
            src="/alaric_yoga.jpg"
            alt="Alaric Newcombe, Senior Level 3 Iyengar Yoga teacher at Alaric Yoga"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Alaric Newcombe and Alaric Yoga</h2>
          <p>
            Carlos Bonvicine from Range and Restore Sports Massage in Archway has been working closely with Alaric Newcombe from Alaric Yoga, supporting both Alaric&apos;s own recovery and many of his yoga students through sports and soft tissue remedial therapy at the clinic at 130 Junction Road, London N19.
          </p>
          <p>
            Alaric Newcombe is a highly respected Senior Level 3 Iyengar Yoga teacher with decades of experience teaching, mentoring and guiding students across London through Iyengar yoga, mobility work and pranayama (breathwork) practice. His work places huge emphasis on movement quality, body awareness, breath control, alignment and long-term physical wellbeing.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What Alaric&apos;s students say</h2>
          <p>
            One thing that really stands out to Range and Restore is the level of admiration and respect Alaric&apos;s students have for him. Carlos regularly hears incredibly positive feedback about the way he teaches &mdash; his patience, attention to detail, knowledge, calm energy, and genuine passion for helping people improve not only physically, but mentally as well. His students speak very highly of him, and it&apos;s clear he has built a strong yoga community across North London based on trust, care, dedication and years of experience.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Range and Restore works with Alaric Yoga</h2>
          <p>
            Because of the physical demands of teaching yoga and maintaining such a high level of practice, the work between Range and Restore and Alaric has focused on mobility, recovery, injury prevention, muscular balance, reducing discomfort and helping maintain healthy movement patterns. Over time, Alaric has also trusted Range and Restore to support many of his own yoga students from across N19, N7, N6 and the surrounding North London postcodes who needed help with tightness, pain management, recovery, mobility restrictions or general musculoskeletal support alongside their Iyengar yoga and pranayama practice.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why this Archway and North London collaboration works</h2>
          <p>
            Range and Restore is genuinely grateful and proud to be able to support both Alaric and his students. The collaboration between Iyengar yoga, breathwork, mobility and hands-on soft tissue therapy works incredibly well together and complements each other naturally. There&apos;s a lot of mutual respect, and it&apos;s been a pleasure working alongside someone so passionate and dedicated to helping people across Archway, Tufnell Park, Holloway, Highgate, Kentish Town and the wider North London community move and feel better.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Range and Restore supports yoga practitioners</h2>
          <p>
            For Iyengar yoga students, regular asana, pranayama and mobility work places real demand on the body &mdash; hips, hamstrings, shoulders, thoracic spine and the deep stabilisers around the pelvis and lumbar spine. Range and Restore offers assessment-led <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link>, <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium">advanced clinical massage</Link>, <Link href="/services/advanced-cupping-sports-deep-tissue" className="text-[#2ab4b8] hover:text-page font-medium">advanced cupping with deep tissue</Link>, the <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium">Back &amp; Neck Pain MOT</Link>, <Link href="/services/2-hour-pain-relief-massage" className="text-[#2ab4b8] hover:text-page font-medium">2-hour pain-relief sessions</Link> and certified <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium">Manual Lymphatic Drainage (MLD)</Link>. Every session begins with a proper assessment, so treatment is matched to what each yoga student presents with that day &mdash; tight hips before a long Iyengar class, stiff shoulders after sustained Adho Mukha Vrksasana work, a flared SI joint, a recovering hamstring strain &mdash; rather than a generic protocol. The <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium">recovery suite</Link> (sauna and pneumatic compression) is also available to extend recovery between sessions.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Service areas: where Range and Restore covers</h2>
          <p>
            The Range and Restore clinic at <Link href="/areas-served/archway-n19" className="text-[#2ab4b8] hover:text-page font-medium">130 Junction Road, Archway, London N19 5LB</Link> sits at the centre of a tight cluster of North London postcodes &mdash; ideal for yoga students travelling to or from class. We regularly see clients from <strong>Archway (N19)</strong>, <strong>Upper Holloway (N19)</strong>, <Link href="/areas-served/tufnell-park-n7" className="text-[#2ab4b8] hover:text-page font-medium"><strong>Tufnell Park (N7 / N19)</strong></Link>, <strong>Holloway (N7)</strong>, <strong>Highgate (N6)</strong>, <strong>Crouch End (N8)</strong>, <strong>Hornsey (N8)</strong>, <strong>Kentish Town (NW5)</strong>, <strong>Dartmouth Park (NW5)</strong>, <strong>Gospel Oak (NW5)</strong>, <strong>Camden (NW1)</strong>, <strong>Hampstead (NW3)</strong>, <strong>Belsize Park (NW3)</strong>, <strong>Finsbury Park (N4)</strong>, <strong>Stroud Green (N4)</strong> and the wider <Link href="/areas-served" className="text-[#2ab4b8] hover:text-page font-medium">North London service area</Link>. The clinic is three minutes&apos; walk from Archway tube (Northern Line) and on multiple bus routes, making it easy to combine an Iyengar yoga class with a sports massage or remedial session on the same day.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Book a session alongside your yoga practice</h2>
          <p>
            Alaric Newcombe teaches Iyengar yoga and pranayama through <a href={PARTNER_URL} target="_blank" rel="noopener" className="text-[#2ab4b8] hover:text-page font-medium">Alaric Yoga</a>. Yoga students looking for soft tissue support, injury rehab, mobility work or general musculoskeletal care alongside their practice can <Link href="/contact" className="text-[#2ab4b8] hover:text-page font-medium">book directly with Range and Restore</Link> &mdash; same-week appointments are usually available at 130 Junction Road, N19.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Book sports massage and soft tissue therapy in Archway</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Yoga student, Iyengar practitioner or anyone with a regular movement practice? Range and Restore at 130 Junction Road, Archway N19 offers assessment-led sports massage, deep tissue, advanced clinical massage and MLD &mdash; same-week appointments, three minutes from Archway tube. Visit Alaric Newcombe&apos;s Iyengar yoga and pranayama site for class details.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Book Range and Restore <span aria-hidden="true">→</span>
            </Link>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-[#1a3d3a]"
            >
              Visit alaricyoga.co.uk <span aria-hidden="true">→</span>
            </a>
          </div>
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
            <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Advanced clinical massage
            </Link>
            <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Back &amp; Neck Pain MOT
            </Link>
            <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Recovery suite: sauna and compression
            </Link>
            <Link href="/areas-served/archway-n19" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Archway N19
            </Link>
            <Link href="/areas-served/tufnell-park-n7" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Tufnell Park N7
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
