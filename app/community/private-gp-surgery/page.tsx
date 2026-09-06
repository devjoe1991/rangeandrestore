import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

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

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'What is the difference between a private GP and a sports massage therapist?',
    a: 'A private GP like Dr Ali Mahmood at Private GP Surgery is a GMC-registered doctor who can assess, diagnose, prescribe, refer and order investigations across the whole body, including mental health. A soft tissue therapist like Carlos at Range and Restore works hands-on with the muscles, fascia and movement patterns to release tension, improve range and support recovery. For many people the two work best together: a GP to assess and manage the medical side, sports massage and recovery to keep the soft tissue moving well alongside it.',
  },
  {
    q: 'When should I see a GP before booking a massage?',
    a: 'If pain is new, severe, spreading, waking you at night, came with numbness, weakness or unexplained weight loss, or you are simply not sure what is going on, see a GP first. Dr Ali Mahmood at Private GP Surgery offers seven-day appointments, online consultations and home visits, so you can get assessed quickly. Once anything serious is ruled out, hands-on sports massage and recovery at Range and Restore can support you alongside his care.',
  },
  {
    q: 'Is Private GP Surgery regulated?',
    a: 'Yes. Private GP Surgery is operated by Medical Health Limited and is regulated by the Care Quality Commission (CQC), which means the service follows clear standards for safety and quality. Dr M. Ali Mahmood holds full GMC registration with a licence to practise, MRCGP membership, and is on the GP Register and Performers List. He is also Mental Health Act Section 12 approved.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function PrivateGpSurgeryPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Local Partner &middot; North London &middot; Private GP</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Private GP Surgery and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            CQC-regulated private GP care with Dr M. Ali Mahmood M.D. at Private GP Surgery. Sports massage, recovery and remedial therapy with our team at Range and Restore on Junction Road. Two North London services, two complementary disciplines, one joined-up approach to your health.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="rounded-card overflow-hidden border-2 border-brand-green bg-page-sage mb-10 p-8 flex items-center justify-center">
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
            No single pair of hands fixes everything, and that isn&apos;t a weakness in any one service, it&apos;s just how bodies work. Some things are muscular and respond beautifully to hands-on soft tissue work and recovery. Some are medical, and need the diagnostic eye of a registered doctor who can assess, prescribe, refer and investigate. The best outcome for a client is usually the right practitioner at the right moment, with someone trusted to hand you over to when you need it. That&apos;s the whole reason Range and Restore Sports Massage and <a href={PARTNER_URL} target="_blank" rel="noopener" className="link-inline">Private GP Surgery</a> now work together.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Dr Ali Mahmood and Private GP Surgery</h2>

          <figure className="my-6">
            <Image
              src="/dr-ali-mahmood-private-gp-surgery-archway-north-london.webp"
              alt="Dr M. Ali Mahmood M.D., General Practitioner at Private GP Surgery, at his desk with a stethoscope"
              width={600}
              height={450}
              className="rounded-card border-2 border-brand-green w-full h-auto"
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
            Range and Restore and Private GP Surgery aren&apos;t competing for the same client. We sit either side of the same goal. A private GP brings a registered, diagnostic, whole-body approach, including prescribing, referrals, investigations and mental health support. Sports massage and soft tissue therapy bring hands-on release, improved range of movement, and recovery that keeps the body moving well between treatments. Put them side by side and the gaps close. Someone arrives at Range and Restore with stubborn pain; most of the time assessment-led <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> handles it, but when the picture suggests something medical, we can point them straight to Dr Ali. And it works the other way too. A patient he has assessed and cleared can come to us for ongoing soft tissue work and recovery, so the gains hold.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a GP, when to book a sports massage</h2>
          <p>
            People ask this all the time, so here is the honest, plain-English version. Start with a GP at Private GP Surgery if pain is new, severe, spreading, waking you at night, or came with numbness, weakness, fever or unexplained weight loss, and for anything that needs a prescription, a referral, tests, or support with your mental health. With seven-day, online and home-visit appointments, you can get seen quickly. Start with sports massage at Range and Restore if you know the issue is muscular, such as tightness from training, stiffness from desk work, or soreness after a long ride or a race, and you mainly want hands-on release, better range and recovery. For the common cases that sit in between, persistent lower back or neck pain, recurring tightness that keeps coming back, the two used together tend to resolve things faster and keep them resolved longer.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the Recovery Suite fits in</h2>
          <p>
            Alongside hands-on sports massage, Range and Restore runs a full <Link href={ROUTES.recoverySuite.index} className="link-inline">Recovery Suite</Link> at 130 Junction Road, a Vidalux two-person hybrid <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> and the Hyperice Normatec 3 Full Body <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">compression system</Link>. For a patient working through something with Dr Ali, those tools are a natural complement. The infrared sauna helps relax tight tissue and brings an over-wound nervous system back into a parasympathetic state, which sits well alongside the stress and mental health side of general practice. Gentle <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline">Manual Lymphatic Drainage</Link> can support the body during recovery too, once cleared. None of it replaces what a GP does. It gives his patients somewhere local to keep the progress moving between appointments.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Honest referrals, both ways</h2>
          <p>
            That&apos;s what we mean when we say we&apos;re rooted in the North London community. When you ask &ldquo;do you know a good private GP?&rdquo; you don&apos;t want a name off a search engine, you want someone whose work the person sending you actually trusts. The collaboration means both services can give that answer with confidence. There&apos;s no formal scheme, no vouchers, no commission. Just two local services that share the same values, talk to each other, and want the best care for the same community across Archway, Highgate, Holloway, Tufnell Park, Finsbury Park, Crouch End, Islington, Camden and Kentish Town.
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
          <h2 className="text-2xl font-black text-ink mb-3">Book with Range and Restore or Private GP Surgery</h2>
          <p className="text-brand-green font-semibold mb-6">
            Sports massage, soft tissue therapy and the Recovery Suite at Range and Restore, two minutes from Archway tube. CQC-regulated private GP appointments, seven days a week, online and home visits, with Dr Ali Mahmood at Private GP Surgery. Wherever you start, you get pointed to the right care for North London.
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
              Visit Private GP Surgery <span aria-hidden="true">→</span>
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
            <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline link-inline-tap">
              &rarr; Manual Lymphatic Drainage
            </Link>
            <Link href={ROUTES.recoverySuite.index} className="link-inline link-inline-tap">
              &rarr; Recovery suite: sauna and compression
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
