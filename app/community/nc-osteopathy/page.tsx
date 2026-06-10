import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'NC Osteopathy and Range and Restore | Osteopathy and Sports Massage in North London',
  description: 'How Range and Restore and NC Osteopathy, led by Nagma Chaudhry M.Ost, work together on whole-person care in North London, with honest referrals both ways.',
  path: '/community/nc-osteopathy',
})

const PARTNER_URL = 'https://ncosteopathy.co.uk/'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'NC Osteopathy', path: '/community/nc-osteopathy' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'NC Osteopathy',
  url: PARTNER_URL,
  description: 'North London osteopathic clinic led by Nagma Chaudhry M.Ost, DO, Clinic Director and Principal Osteopath. Cranial, visceral and structural osteopathy, therapeutic massage, myofascial release and certified Mummy MOT for pregnancy and postnatal recovery.',
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Holloway, London N7' },
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
      name: 'What is the difference between an osteopath and a sports massage therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'An osteopath like Nagma at NC Osteopathy is a registered, university-trained practitioner who diagnoses and treats using structural manipulation, cranial and visceral techniques, massage and myofascial release, looking at the whole system. A soft tissue therapist like Carlos at Range and Restore works hands-on with the muscles, fascia and movement patterns to release tension, improve range and support recovery. For many people the two work best together: osteopathy to assess and treat the underlying mechanics, sports massage and recovery to keep the soft tissue moving well in between.' },
    },
    {
      '@type': 'Question',
      name: 'How do I know whether to see an osteopath or book a sports massage first?',
      acceptedAnswer: { '@type': 'Answer', text: 'If something is new, sharp, not settling, referring down a limb, or you are not sure what is going on, start with an osteopathic assessment at NC Osteopathy. If you know the issue is muscular, such as tightness from training, desk work or a long run, and you mainly want hands-on release and recovery, start with sports massage at Range and Restore. Whichever you choose, the practitioner will point you to the other discipline if it would serve you better.' },
    },
    {
      '@type': 'Question',
      name: 'I am pregnant or recently had a baby. Who should I see?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nagma at NC Osteopathy is a certified Mummy MOT practitioner with a focus on pregnancy and postnatal assessment and recovery, so that is the right starting point. Once you have been assessed and cleared, gentle soft tissue work and Manual Lymphatic Drainage at Range and Restore can support recovery alongside her care.' },
    },
  ],
}

export default function NcOsteopathyPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; North London &middot; Osteopathy</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            NC Osteopathy and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Osteopathy and whole-person care with Nagma Chaudhry M.Ost at NC Osteopathy. Sports massage, recovery and remedial therapy with Carlos Bonvicine at Range and Restore on Junction Road. Two North London clinics, two complementary disciplines, one joined-up approach to your body.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-[#0f4a2e] mb-10 p-12 flex items-center justify-center text-center">
          <span className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
            Range and Restore <span className="text-[#7dd94a]">×</span> NC Osteopathy
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A collaboration built on the same values</h2>
          <p>
            No single pair of hands fixes everything, and that isn&apos;t a weakness in any one clinic &mdash; it&apos;s just how bodies work. Some things are muscular and respond beautifully to hands-on soft tissue work and recovery. Some are structural, neurological or systemic, and need the diagnostic eye of a registered osteopath. The best outcome for a client is usually the right practitioner at the right moment, with someone trusted to hand you over to when you need it. That&apos;s the whole reason Range and Restore Sports Massage and <a href={PARTNER_URL} target="_blank" rel="noopener" className="text-[#2ab4b8] hover:text-page font-medium">NC Osteopathy</a> now work together.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Nagma Chaudhry and NC Osteopathy</h2>
          <p>
            NC Osteopathy is led by Nagma Chaudhry M.Ost, DO, Clinic Director and Principal Osteopath. Nagma graduated from the European School of Osteopathy and has treated patients across a wide range of specialist settings &mdash; babies and children, women&apos;s health and sports clinics &mdash; alongside time in the NHS and other areas of healthcare, from acute to surgical scenarios. Her treatments integrate cranial, visceral and structural osteopathic techniques with therapeutic massage and myofascial release. She is also a certified Mummy MOT&reg; practitioner, with a particular focus on pregnant women and postnatal assessment and recovery. Nagma is a member of the Institute of Osteopathy and registered with the General Osteopathic Council (GOsC).
          </p>

          <p>
            What stood out to us, and the reason this collaboration made immediate sense, is the philosophy behind the work. Nagma takes a genuinely holistic approach: treating the whole person rather than isolated symptoms, considering how the brain and nervous system feed into the body, and creating space for the body&apos;s own capacity to self-heal and co-regulate. It&apos;s patient-centred, compassionate and education-led &mdash; the same values that run through everything we do at Range and Restore.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            Range and Restore and NC Osteopathy aren&apos;t competing for the same client. We sit either side of the same goal. Osteopathy brings a registered, diagnostic, whole-system approach. Sports massage and soft tissue therapy bring hands-on release, improved range of movement, and recovery that keeps the body moving well between treatments. Put them side by side and the gaps close. Someone arrives at Range and Restore with stubborn lower back pain; most of the time assessment-led <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link> handles it, but when the picture suggests something more structural, we can point them straight to Nagma. And it works the other way too &mdash; a client Nagma has assessed and treated can come to us for ongoing soft tissue work and recovery, so the gains hold.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see an osteopath, when to book a sports massage</h2>
          <p>
            People ask this all the time, so here is the honest, plain-English version. Start with osteopathy at NC Osteopathy if something is new, sharp, not settling, referring down a limb, or you simply don&apos;t know what&apos;s going on &mdash; and for pregnancy and postnatal recovery, anything involving babies or children, or issues where a whole-system diagnostic view is the sensible first step. Start with sports massage at Range and Restore if you know the issue is muscular, such as tightness from training, stiffness from desk work, or soreness after a long ride or a race, and you mainly want hands-on release, better range and recovery. For the common cases with both a structural and a soft tissue component &mdash; persistent lower back or neck pain, recurring tightness that keeps coming back &mdash; the two disciplines used together tend to resolve things faster and keep them resolved longer.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the Recovery Suite fits in</h2>
          <p>
            Alongside hands-on sports massage, Range and Restore runs a full <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium">Recovery Suite</Link> at 130 Junction Road &mdash; a Vidalux two-person hybrid <Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] hover:text-page font-medium">infrared sauna</Link> and the Hyperice Normatec 3 Full Body <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium">compression system</Link>. For a client working through something with Nagma, those tools are a natural complement. The infrared sauna helps relax tight tissue and brings an over-wound nervous system back into a parasympathetic state, which dovetails neatly with the co-regulation side of osteopathic care. For postnatal recovery, gentle <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium">Manual Lymphatic Drainage</Link> can support the body alongside osteopathic treatment, once cleared. None of it replaces what Nagma does &mdash; it gives her clients somewhere local to keep the progress moving between appointments.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Honest referrals, both ways</h2>
          <p>
            That&apos;s what we mean when we say we&apos;re rooted in the North London community. When you ask &ldquo;do you know a good osteopath?&rdquo; you don&apos;t want a name off a search engine &mdash; you want someone whose work the person sending you actually trusts. The collaboration means both clinics can give that answer with confidence. There&apos;s no formal scheme, no vouchers, no commission. Just two local clinics that share the same values, talk to each other, and want the best care for the same community across Archway, Highgate, Holloway, Tufnell Park, Finsbury Park, Crouch End, Islington, Camden and Kentish Town.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Book with Range and Restore or NC Osteopathy</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Sports massage, soft tissue therapy and the Recovery Suite at Range and Restore, two minutes from Archway tube. Osteopathy, Mummy MOT&reg; and whole-person care with Nagma Chaudhry at NC Osteopathy. Wherever you start, you get pointed to the right care for North London.
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
              Visit NC Osteopathy <span aria-hidden="true">→</span>
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
            <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Manual Lymphatic Drainage
            </Link>
            <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Recovery suite: sauna and compression
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
