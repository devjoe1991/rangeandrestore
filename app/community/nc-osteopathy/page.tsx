import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

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

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'What is the difference between an osteopath and a sports massage therapist?',
    a: 'An osteopath like Nagma at NC Osteopathy is a registered, university-trained practitioner who diagnoses and treats using structural manipulation, cranial and visceral techniques, massage and myofascial release, looking at the whole system. A soft tissue therapist like Carlos at Range and Restore works hands-on with the muscles, fascia and movement patterns to release tension, improve range and support recovery. For many people the two work best together: osteopathy to assess and treat the underlying mechanics, sports massage and recovery to keep the soft tissue moving well in between.',
  },
  {
    q: 'How do I know whether to see an osteopath or book a sports massage first?',
    a: 'If something is new, sharp, not settling, referring down a limb, or you are not sure what is going on, start with an osteopathic assessment at NC Osteopathy. If you know the issue is muscular, such as tightness from training, desk work or a long run, and you mainly want hands-on release and recovery, start with sports massage at Range and Restore. Whichever you choose, the practitioner will point you to the other discipline if it would serve you better.',
  },
  {
    q: 'I am pregnant or recently had a baby. Who should I see?',
    a: 'Nagma at NC Osteopathy is a certified Mummy MOT practitioner with a focus on pregnancy and postnatal assessment and recovery, so that is the right starting point. Once you have been assessed and cleared, gentle soft tissue work and Manual Lymphatic Drainage at Range and Restore can support recovery alongside her care.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function NcOsteopathyPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Local Partner &middot; North London &middot; Osteopathy</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            NC Osteopathy and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Osteopathy and whole-person care with Nagma Chaudhry M.Ost at NC Osteopathy. Sports massage, recovery and remedial therapy with our team at Range and Restore on Junction Road. Two North London clinics, two complementary disciplines, one joined-up approach to your body.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="rounded-card overflow-hidden border-2 border-brand-green bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/nc-osteopathy-logo-north-london.webp"
            alt="NC Osteopathy logo, North London"
            width={300}
            height={300}
            className="max-h-44 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A collaboration built on the same values</h2>
          <p>
            No single pair of hands fixes everything, and that isn&apos;t a weakness in any one clinic &mdash; it&apos;s just how bodies work. Some things are muscular and respond beautifully to hands-on soft tissue work and recovery. Some are structural, neurological or systemic, and need the diagnostic eye of a registered osteopath. The best outcome for a client is usually the right practitioner at the right moment, with someone trusted to hand you over to when you need it. That&apos;s the whole reason Range and Restore Sports Massage and <a href={PARTNER_URL} target="_blank" rel="noopener" className="link-inline">NC Osteopathy</a> now work together.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Nagma Chaudhry and NC Osteopathy</h2>
          <figure className="not-prose my-6">
            <Image
              src="/nagma-chaudhry-osteopath-nc-osteopathy-north-london.webp"
              alt="Nagma Chaudhry M.Ost, Clinic Director and Principal Osteopath at NC Osteopathy, North London"
              width={1920}
              height={1280}
              className="rounded-card border-2 border-brand-green w-full h-auto"
            />
            <figcaption className="text-sm text-page-muted mt-3 text-center">
              Nagma Chaudhry M.Ost, Clinic Director and Principal Osteopath at NC Osteopathy
            </figcaption>
          </figure>
          <p>
            NC Osteopathy is led by Nagma Chaudhry M.Ost, DO, Clinic Director and Principal Osteopath. Nagma graduated from the European School of Osteopathy and has treated patients across a wide range of specialist settings &mdash; babies and children, women&apos;s health and sports clinics &mdash; alongside time in the NHS and other areas of healthcare, from acute to surgical scenarios. Her treatments integrate cranial, visceral and structural osteopathic techniques with therapeutic massage and myofascial release. She is also a certified Mummy MOT&reg; practitioner, with a particular focus on pregnant women and postnatal assessment and recovery. Nagma is a member of the Institute of Osteopathy and registered with the General Osteopathic Council (GOsC).
          </p>

          <p>
            What stood out to us, and the reason this collaboration made immediate sense, is the philosophy behind the work. Nagma takes a genuinely holistic approach: treating the whole person rather than isolated symptoms, considering how the brain and nervous system feed into the body, and creating space for the body&apos;s own capacity to self-heal and co-regulate. It&apos;s patient-centred, compassionate and education-led &mdash; the same values that run through everything we do at Range and Restore.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            Range and Restore and NC Osteopathy aren&apos;t competing for the same client. We sit either side of the same goal. Osteopathy brings a registered, diagnostic, whole-system approach. Sports massage and soft tissue therapy bring hands-on release, improved range of movement, and recovery that keeps the body moving well between treatments. Put them side by side and the gaps close. Someone arrives at Range and Restore with stubborn lower back pain; most of the time assessment-led <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> handles it, but when the picture suggests something more structural, we can point them straight to Nagma. And it works the other way too &mdash; a client Nagma has assessed and treated can come to us for ongoing soft tissue work and recovery, so the gains hold.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see an osteopath, when to book a sports massage</h2>
          <p>
            People ask this all the time, so here is the honest, plain-English version. Start with osteopathy at NC Osteopathy if something is new, sharp, not settling, referring down a limb, or you simply don&apos;t know what&apos;s going on &mdash; and for pregnancy and postnatal recovery, anything involving babies or children, or issues where a whole-system diagnostic view is the sensible first step. Start with sports massage at Range and Restore if you know the issue is muscular, such as tightness from training, stiffness from desk work, or soreness after a long ride or a race, and you mainly want hands-on release, better range and recovery. For the common cases with both a structural and a soft tissue component &mdash; persistent lower back or neck pain, recurring tightness that keeps coming back &mdash; the two disciplines used together tend to resolve things faster and keep them resolved longer.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the Recovery Suite fits in</h2>
          <p>
            Alongside hands-on sports massage, Range and Restore runs a full <Link href={ROUTES.recoverySuite.index} className="link-inline">Recovery Suite</Link> at 130 Junction Road &mdash; a Vidalux two-person hybrid <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> and the Hyperice Normatec 3 Full Body <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">compression system</Link>. For a client working through something with Nagma, those tools are a natural complement. The infrared sauna helps relax tight tissue and brings an over-wound nervous system back into a parasympathetic state, which dovetails neatly with the co-regulation side of osteopathic care. For postnatal recovery, gentle <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline">Manual Lymphatic Drainage</Link> can support the body alongside osteopathic treatment, once cleared. None of it replaces what Nagma does &mdash; it gives her clients somewhere local to keep the progress moving between appointments.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Honest referrals, both ways</h2>
          <p>
            That&apos;s what we mean when we say we&apos;re rooted in the North London community. When you ask &ldquo;do you know a good osteopath?&rdquo; you don&apos;t want a name off a search engine &mdash; you want someone whose work the person sending you actually trusts. The collaboration means both clinics can give that answer with confidence. There&apos;s no formal scheme, no vouchers, no commission. Just two local clinics that share the same values, talk to each other, and want the best care for the same community across Archway, Highgate, Holloway, Tufnell Park, Finsbury Park, Crouch End, Islington, Camden and Kentish Town.
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
          <h2 className="text-2xl font-black text-ink mb-3">Book with Range and Restore or NC Osteopathy</h2>
          <p className="text-brand-green font-semibold mb-6">
            Sports massage, soft tissue therapy and the Recovery Suite at Range and Restore, two minutes from Archway tube. Osteopathy, Mummy MOT&reg; and whole-person care with Nagma Chaudhry at NC Osteopathy. Wherever you start, you get pointed to the right care for North London.
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
              Visit NC Osteopathy <span aria-hidden="true">→</span>
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
