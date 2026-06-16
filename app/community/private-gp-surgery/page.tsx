import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Private GP Surgery and Range and Restore | Private GP and Sports Massage in North London',
  description: 'How Range and Restore and Private GP Surgery, a CQC-regulated private GP service led by Dr M. Ali Mahmood M.D., work together on whole-person care in North London, with honest referrals both ways.',
  path: '/community/private-gp-surgery',
})

const PARTNER_URL = 'https://privategpsurgery.co.uk/'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Private GP Surgery', path: '/community/private-gp-surgery' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Private GP Surgery',
  url: PARTNER_URL,
  description: 'CQC-regulated private GP service operated by Medical Health Limited, led by Dr M. Ali Mahmood M.D., GMC-registered GP with MRCGP membership and over 20 years in healthcare. Seven-day availability, online appointments and home visits across London.',
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
      name: 'What is the difference between a private GP and a sports massage therapist?',
      acceptedAnswer: { '@type': 'Answer', text: 'A private GP like Dr Ali Mahmood at Private GP Surgery is a GMC-registered doctor who can assess, diagnose, prescribe, refer and order investigations across the whole body, including mental health. A soft tissue therapist like Carlos at Range and Restore works hands-on with the muscles, fascia and movement patterns to release tension, improve range and support recovery. For many people the two work best together: a GP to assess and manage the medical side, sports massage and recovery to keep the soft tissue moving well alongside it.' },
    },
    {
      '@type': 'Question',
      name: 'When should I see a GP before booking a massage?',
      acceptedAnswer: { '@type': 'Answer', text: 'If pain is new, severe, spreading, waking you at night, came with numbness, weakness or unexplained weight loss, or you are simply not sure what is going on, see a GP first. Dr Ali Mahmood at Private GP Surgery offers seven-day appointments, online consultations and home visits, so you can get assessed quickly. Once anything serious is ruled out, hands-on sports massage and recovery at Range and Restore can support you alongside his care.' },
    },
    {
      '@type': 'Question',
      name: 'Is Private GP Surgery regulated?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Private GP Surgery is operated by Medical Health Limited and is regulated by the Care Quality Commission (CQC), which means the service follows clear standards for safety and quality. Dr M. Ali Mahmood holds full GMC registration with a licence to practise, MRCGP membership, and is on the GP Register and Performers List. He is also Mental Health Act Section 12 approved.' },
    },
  ],
}

export default function PrivateGpSurgeryPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; North London &middot; Private GP</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Private GP Surgery and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            CQC-regulated private GP care with Dr M. Ali Mahmood M.D. at Private GP Surgery. Sports massage, recovery and remedial therapy with Carlos Bonvicine at Range and Restore on Junction Road. Two North London services, two complementary disciplines, one joined-up approach to your health.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/private-gp-surgery-archway-north-london.webp"
            alt="Private GP Surgery logo, CQC-regulated private GP service led by Dr M. Ali Mahmood"
            width={400}
            height={400}
            className="max-h-44 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A collaboration built on the same values</h2>
          <p>
            No single pair of hands fixes everything, and that isn&apos;t a weakness in any one service, it&apos;s just how bodies work. Some things are muscular and respond beautifully to hands-on soft tissue work and recovery. Some are medical, and need the diagnostic eye of a registered doctor who can assess, prescribe, refer and investigate. The best outcome for a client is usually the right practitioner at the right moment, with someone trusted to hand you over to when you need it. That&apos;s the whole reason Range and Restore Sports Massage and <a href={PARTNER_URL} target="_blank" rel="noopener" className="text-[#2ab4b8] hover:text-page font-medium">Private GP Surgery</a> now work together.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Dr Ali Mahmood and Private GP Surgery</h2>

          <figure className="my-6">
            <Image
              src="/dr-ali-mahmood-private-gp-surgery-archway-north-london.webp"
              alt="Dr M. Ali Mahmood M.D., General Practitioner at Private GP Surgery, at his desk with a stethoscope"
              width={600}
              height={450}
              className="rounded-[20px] border-2 border-[#1a3d3a] w-full h-auto"
            />
            <figcaption className="text-sm text-page-muted mt-2 text-center">Dr M. Ali Mahmood, M.D., General Practitioner at Private GP Surgery.</figcaption>
          </figure>

          <p>
            Private GP Surgery is a CQC-regulated private GP service operated by Medical Health Limited. It is led by Dr M. Ali Mahmood, M.D., an experienced General Practitioner with over 20 years in healthcare. He holds full GMC registration with a licence to practise, MRCGP membership, and is listed on the GP Register and Performers List. He is also Mental Health Act Section 12 approved, which means he can support patients struggling with mental health problems. Dr Ali believes private care should feel straightforward and reassuring. He takes time over every appointment and goes into the detail for a proper assessment and follow-up, rather than rushing patients through.
          </p>

          <p>
            He doesn&apos;t work alone. Dr Rini Chakrabarti is a dedicated GP with a decade of experience across both the NHS and private practice, committed to compassionate, personalised and holistic care and to building long-term patient relationships. Syd Syed, the Registered Manager, oversees clinical governance, regulatory compliance and service quality, with a background in biomedical science and quality management. Between them the service runs to the highest medical standards while keeping patient data and medical decisions fully private. Appointments are available seven days a week, online and as home visits.
          </p>

          <p>
            What stood out to us, and the reason this collaboration made immediate sense, is the philosophy behind the work. Private GP Surgery is patient-centred and transparent: you should know what is happening, why it is happening, and what comes next. That&apos;s the same value that runs through everything we do at Range and Restore.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            Range and Restore and Private GP Surgery aren&apos;t competing for the same client. We sit either side of the same goal. A private GP brings a registered, diagnostic, whole-body approach, including prescribing, referrals, investigations and mental health support. Sports massage and soft tissue therapy bring hands-on release, improved range of movement, and recovery that keeps the body moving well between treatments. Put them side by side and the gaps close. Someone arrives at Range and Restore with stubborn pain; most of the time assessment-led <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link> handles it, but when the picture suggests something medical, we can point them straight to Dr Ali. And it works the other way too. A patient he has assessed and cleared can come to us for ongoing soft tissue work and recovery, so the gains hold.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a GP, when to book a sports massage</h2>
          <p>
            People ask this all the time, so here is the honest, plain-English version. Start with a GP at Private GP Surgery if pain is new, severe, spreading, waking you at night, or came with numbness, weakness, fever or unexplained weight loss, and for anything that needs a prescription, a referral, tests, or support with your mental health. With seven-day, online and home-visit appointments, you can get seen quickly. Start with sports massage at Range and Restore if you know the issue is muscular, such as tightness from training, stiffness from desk work, or soreness after a long ride or a race, and you mainly want hands-on release, better range and recovery. For the common cases that sit in between, persistent lower back or neck pain, recurring tightness that keeps coming back, the two used together tend to resolve things faster and keep them resolved longer.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the Recovery Suite fits in</h2>
          <p>
            Alongside hands-on sports massage, Range and Restore runs a full <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium">Recovery Suite</Link> at 130 Junction Road, a Vidalux two-person hybrid <Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] hover:text-page font-medium">infrared sauna</Link> and the Hyperice Normatec 3 Full Body <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium">compression system</Link>. For a patient working through something with Dr Ali, those tools are a natural complement. The infrared sauna helps relax tight tissue and brings an over-wound nervous system back into a parasympathetic state, which sits well alongside the stress and mental health side of general practice. Gentle <Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] hover:text-page font-medium">Manual Lymphatic Drainage</Link> can support the body during recovery too, once cleared. None of it replaces what a GP does. It gives his patients somewhere local to keep the progress moving between appointments.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Honest referrals, both ways</h2>
          <p>
            That&apos;s what we mean when we say we&apos;re rooted in the North London community. When you ask &ldquo;do you know a good private GP?&rdquo; you don&apos;t want a name off a search engine, you want someone whose work the person sending you actually trusts. The collaboration means both services can give that answer with confidence. There&apos;s no formal scheme, no vouchers, no commission. Just two local services that share the same values, talk to each other, and want the best care for the same community across Archway, Highgate, Holloway, Tufnell Park, Finsbury Park, Crouch End, Islington, Camden and Kentish Town.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Book with Range and Restore or Private GP Surgery</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Sports massage, soft tissue therapy and the Recovery Suite at Range and Restore, two minutes from Archway tube. CQC-regulated private GP appointments, seven days a week, online and home visits, with Dr Ali Mahmood at Private GP Surgery. Wherever you start, you get pointed to the right care for North London.
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
              Visit Private GP Surgery <span aria-hidden="true">→</span>
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
