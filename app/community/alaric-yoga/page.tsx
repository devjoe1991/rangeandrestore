import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Alaric Yoga and Range and Restore | Iyengar Yoga and Soft Tissue Therapy in Archway N19',
  description: 'Range and Restore in Archway works alongside Senior Iyengar Yoga teacher Alaric Newcombe. Mobility, recovery and soft tissue support for yoga students.',
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

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'Does Range and Restore work with yoga students?',
    a: 'Yes. Range and Restore at 130 Junction Road, Archway N19 regularly supports yoga students, including many practitioners from Alaric Newcombe of Alaric Yoga. Treatment focuses on mobility, recovery, injury prevention, muscular balance and reducing discomfort that builds up through regular Iyengar yoga, asana and pranayama practice.',
  },
  {
    q: 'Which services help most with yoga practice?',
    a: 'Sports and deep tissue massage, advanced clinical massage, advanced cupping with deep tissue, the Back and Neck Pain MOT, 2-hour pain-relief sessions and Manual Lymphatic Drainage (MLD) are the services most commonly booked by yoga practitioners. Every session is assessment-led and matched to what the body presents with that day.',
  },
  {
    q: 'Where is Range and Restore Sports Massage based?',
    a: 'The clinic is at 130 Junction Road, Archway, London N19 5LB, three minutes’ walk from Archway tube on the Northern Line. It serves clients across N19, N7, N6, N8, NW5, NW1, NW3, N4 and the wider North London area, including Archway, Upper Holloway, Tufnell Park, Holloway, Highgate, Crouch End, Hornsey, Kentish Town, Dartmouth Park, Gospel Oak, Camden, Hampstead, Belsize Park, Finsbury Park and Stroud Green.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function AlaricYogaPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Local Partner &middot; North London &middot; Iyengar Yoga and Pranayama</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Alaric Yoga and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Senior Iyengar Yoga and pranayama with Alaric Newcombe, sports and soft tissue remedial therapy with our team at Range and Restore in Archway (130 Junction Road, N19). One yoga teacher and a clinic of soft tissue therapists, working together on mobility, recovery and long-term physical wellbeing for students across North London.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="rounded-card overflow-hidden border-2 border-brand-green bg-page-sage mb-10 flex items-center justify-center">
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
            Carlos Bonvicine from Range and Restore Sports Massage in Archway has been working closely with Alaric Newcombe of Alaric Yoga, supporting both Alaric&apos;s own recovery and many of his yoga students through sports and soft tissue remedial therapy at the clinic at 130 Junction Road, London N19.
          </p>
          <p>
            Alaric Newcombe is a highly respected Senior Level 3 Iyengar Yoga teacher with decades of experience teaching, mentoring and guiding students across London through Iyengar yoga, mobility work and pranayama (breathwork) practice. His teaching places a real emphasis on movement quality, body awareness, breath control, alignment and long-term physical wellbeing.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A collaboration built on trust and shared values</h2>
          <p>
            Over time, the collaboration between Alaric Yoga and Range and Restore Sports Massage has grown naturally through trust, shared values and genuine results. Many of Alaric&apos;s students who have come for treatment often speak positively about the care, attention and personalised approach they receive during sessions, particularly around improving mobility, reducing muscular tension, supporting recovery and helping them move more comfortably in both yoga practice and everyday life.
          </p>
          <p>
            Carlos is incredibly grateful for the ongoing support, kind feedback and recommendations from both Alaric and his students. What makes this collaboration especially meaningful is the genuine sense of community behind it. There is a shared focus on helping people feel better, move better and stay consistent with their health and wellbeing long term.
          </p>
          <p>
            Alaric himself has spoken warmly about the value of having trusted hands-on support alongside his teaching and practice, and many of his students continue returning for ongoing treatment because they genuinely feel the benefits in their movement, recovery and overall wellbeing after sessions.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">The community around Alaric</h2>
          <p>
            One thing that really stands out to Carlos is how highly Alaric&apos;s students speak about him. Not only his knowledge and teaching style, but also his personality, patience, dedication and genuine passion for helping people. There is clearly a huge amount of respect and admiration for him within his community, and that comes through every time one of his students walks into the clinic.
          </p>
          <p>
            At the same time, Carlos has been incredibly grateful for the kind feedback and trust shown by both Alaric and many of his students around the treatment approach at Range and Restore, including the recovery work, mobility support, reduction of muscular tension and helping people move more comfortably. A lot of students mention noticeable improvements even after the first session, and continue returning because they genuinely feel the benefits of the treatments.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Range and Restore works with Alaric Yoga</h2>
          <p>
            Because of the physical demands of teaching yoga and maintaining such a high level of practice, the work between Range and Restore and Alaric has focused on mobility, recovery, injury prevention, muscular balance, reducing discomfort and helping maintain healthy movement patterns. Over time, Alaric has also trusted Range and Restore to support many of his own yoga students from across N19, N7, N6 and the surrounding North London postcodes, helping with tightness, pain management, recovery, mobility restrictions or general musculoskeletal support alongside their Iyengar yoga and pranayama practice.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Range and Restore supports yoga practitioners</h2>
          <p>
            For Iyengar yoga students, regular asana, pranayama and mobility work places real demand on the body. Hips, hamstrings, shoulders, thoracic spine and the deep stabilisers around the pelvis and lumbar spine all need attention over time. Range and Restore offers assessment-led <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link>, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link>, <Link href={ROUTES.services.advancedCuppingSportsDeepTissue} className="link-inline">advanced cupping with deep tissue</Link>, the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back and Neck Pain MOT</Link>, <Link href={ROUTES.services.twoHourPainReliefMassage} className="link-inline">2-hour pain-relief sessions</Link> and certified <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline">Manual Lymphatic Drainage (MLD)</Link>. Every session starts with a proper assessment, so treatment is matched to what each yoga student turns up with that day, whether that&apos;s tight hips before a long Iyengar class, stiff shoulders after sustained inversion work, a flared SI joint or a recovering hamstring strain. The <Link href={ROUTES.recoverySuite.index} className="link-inline">recovery suite</Link> (sauna and pneumatic compression) is also available to extend recovery between sessions.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Service areas: where Range and Restore covers</h2>
          <p>
            The Range and Restore clinic at <Link href={ROUTES.areasServed.archwayN19} className="link-inline">130 Junction Road, Archway, London N19 5LB</Link> sits in the middle of a tight cluster of North London postcodes, which makes it easy for yoga students travelling to or from class. Clients regularly come in from <strong>Archway (N19)</strong>, <strong>Upper Holloway (N19)</strong>, <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline"><strong>Tufnell Park (N7 / N19)</strong></Link>, <strong>Holloway (N7)</strong>, <strong>Highgate (N6)</strong>, <strong>Crouch End (N8)</strong>, <strong>Hornsey (N8)</strong>, <strong>Kentish Town (NW5)</strong>, <strong>Dartmouth Park (NW5)</strong>, <strong>Gospel Oak (NW5)</strong>, <strong>Camden (NW1)</strong>, <strong>Hampstead (NW3)</strong>, <strong>Belsize Park (NW3)</strong>, <strong>Finsbury Park (N4)</strong>, <strong>Stroud Green (N4)</strong> and the wider <Link href={ROUTES.areasServed.index} className="link-inline">North London service area</Link>. The clinic is three minutes&apos; walk from Archway tube (Northern Line) and on multiple bus routes, so it&apos;s easy to combine an Iyengar yoga class with a sports massage or remedial session on the same day.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Book a session alongside your yoga practice</h2>
          <p>
            Alaric Newcombe teaches Iyengar yoga and pranayama through <a href={PARTNER_URL} target="_blank" rel="noopener" className="link-inline">Alaric Yoga</a>. Yoga students looking for soft tissue support, injury rehab, mobility work or general musculoskeletal care alongside their practice can <Link href={ROUTES.contact} className="link-inline">book directly with Range and Restore</Link>. Same-week appointments are usually available at 130 Junction Road, N19.
          </p>
        </div>

        <section aria-labelledby="page-faqs" className="mt-12">
          <h2 id="page-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-sand bg-white p-5">
                <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-3">Book sports massage and soft tissue therapy in Archway</h2>
          <p className="text-brand-green font-semibold mb-6">
            Yoga student, Iyengar practitioner or anyone with a regular movement practice? Range and Restore at 130 Junction Road, Archway N19 offers assessment-led sports massage, deep tissue, advanced clinical massage and MLD. Same-week appointments, three minutes from Archway tube. Visit Alaric Newcombe&apos;s Iyengar yoga and pranayama site for class details.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-mid transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Book Range and Restore <span aria-hidden="true">→</span>
            </Link>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-brand-green"
            >
              Visit alaricyoga.co.uk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.community.index} className="link-inline link-inline-tap">
              &larr; Back to Our Archway Community
            </Link>
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
              &rarr; Sports and deep tissue remedial therapy
            </Link>
            <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline link-inline-tap">
              &rarr; Advanced clinical massage
            </Link>
            <Link href={ROUTES.services.backNeckPainMot} className="link-inline link-inline-tap">
              &rarr; Back and Neck Pain MOT
            </Link>
            <Link href={ROUTES.recoverySuite.index} className="link-inline link-inline-tap">
              &rarr; Recovery suite: sauna and compression
            </Link>
            <Link href={ROUTES.areasServed.archwayN19} className="link-inline link-inline-tap">
              &rarr; Sports massage in Archway N19
            </Link>
            <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline link-inline-tap">
              &rarr; Sports massage in Tufnell Park N7
            </Link>
            <Link href={ROUTES.about} className="link-inline link-inline-tap">
              &rarr; About Carlos and Range and Restore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
