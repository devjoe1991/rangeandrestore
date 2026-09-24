import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'FS8 Finsbury Park and Range and Restore | Reformer Pilates and Sports Massage, North London',
  description: 'Range and Restore in Archway works with FS8 Finsbury Park, the reformer Pilates, tone and yoga studio by Finsbury Park station. Referrals both ways, treatment and training joined up.',
  path: ROUTES.community.fs8FinsburyPark,
})

const PARTNER_URL = 'https://fs8.com/studio/finsburypark/'
const PARTNER_INSTAGRAM = 'https://www.instagram.com/fs8_finsburypark'
const PARTNER_ADDRESS = '1-7 Morris Place, Finsbury Park, London N4 3JG'
// Our own FS8 code, and the intro-offer link FS8 gave us. Swap here if either changes.
const PARTNER_CODE = 'RANGEANDRESTORE'
// FS8 set the intro price, and our code takes 10% off it. The discounted figure
// is written out rather than calculated because £53.10 is rounded for the copy —
// if FS8 change the price, change both.
const PARTNER_INTRO_PRICE = '£59'
const PARTNER_INTRO_PRICE_WITH_CODE = '£53'
const PARTNER_INTRO_URL = 'https://tinyurl.com/FS8-FP-Intro'
// Our side of the deal: what FS8 members get at Range and Restore.
const OUR_CODE = 'FS8'
const OUR_DISCOUNT = '£10'
const PARTNER_STUDIO_PHOTO = '/fs8-finsbury-park-reformer-pilates-studio-north-london.jpg'

/* The same therapist photos as the team page, so both stay in step. */
const THERAPISTS = [
  { name: 'Carlos Bonvicine', role: 'Founder & Lead Therapist', img: '/carlos-bonvicine-founder-lead-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg', anchor: '#carlos-bonvicine' },
  { name: 'Alison Isherwood', role: 'Sports Massage & Soft Tissue Remedial Therapist', img: '/alison-isherwood-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg', anchor: '#alison-isherwood' },
  { name: 'Darael Beckles', role: 'Sports Massage & Soft Tissue Remedial Therapist', img: '/darael-beckles-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg', anchor: '#darael-beckles' },
  { name: 'Mateja Bracko-Mounti', role: 'Sports Massage & Soft Tissue Remedial Therapist', img: '/mateja-bracko-mounti-sports-massage-soft-tissue-remedial-therapist-range-and-restore-archway-north-london.jpeg', anchor: '#mateja-bracko-mounti' },
]

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: ROUTES.community.index },
  { name: 'FS8 Finsbury Park', path: ROUTES.community.fs8FinsburyPark },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'FS8 Finsbury Park',
  url: PARTNER_URL,
  sameAs: [PARTNER_INSTAGRAM],
  description: 'Reformer Pilates studio by Finsbury Park station. FS8 blends Pilates, tone and yoga into one low-impact, full-body workout.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1-7 Morris Place',
    addressLocality: 'London',
    postalCode: 'N4 3JG',
    addressCountry: 'GB',
  },
  memberOf: { '@id': `${BASE_URL}/#business` },
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'Should I book a sports massage or a Pilates class first?',
    a: 'If something hurts, is stiff or keeps flaring up, start with an assessment-led sports massage at Range and Restore. Your therapist finds what is restricted, treats it, and tells you what to work on. If you feel fine and want to get stronger and more mobile, start at FS8 Finsbury Park. Most people end up doing both: treatment to clear the restriction, regular classes to keep it clear.',
  },
  {
    q: 'I have never done reformer Pilates. Is FS8 suitable for beginners?',
    a: 'Yes. FS8 Finsbury Park is proud of being beginner-friendly, and its classes are low impact with options to make each movement easier or harder. If you are coming back from an injury, tell your therapist at Range and Restore and tell the FS8 trainer before class, so both know what to look out for.',
  },
  {
    q: 'Is there an offer for new FS8 clients?',
    a: `Yes. FS8 Finsbury Park runs a 5-class intro for new clients at that studio, normally ${PARTNER_INTRO_PRICE}. Our clients get 10% off it with the code ${PARTNER_CODE}, which brings it down to about ${PARTNER_INTRO_PRICE_WITH_CODE}. Use the intro link on this page, or ask at reception in Archway. Prices and terms are set by FS8, so check the current details before you buy.`,
  },
  {
    q: 'Do FS8 members get anything at Range and Restore?',
    a: `Yes. FS8 members get ${OUR_DISCOUNT} off any treatment at Range and Restore with the code ${OUR_CODE}. That covers the full treatment list, including sports and deep tissue massage, advanced clinical massage, the Back and Neck Pain MOT, Manual Lymphatic Drainage, pregnancy massage and reflexology. Use the code when you book online, or mention FS8 when you arrive at 130 Junction Road.`,
  },
  {
    q: 'How far is Range and Restore from FS8 Finsbury Park?',
    a: 'FS8 is at 1-7 Morris Place, by Finsbury Park station. Range and Restore is at 130 Junction Road, Archway N19 5LB. The 210 bus runs directly from Finsbury Park to Archway and drops you a short walk from the clinic.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function Fs8FinsburyParkPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Local Partner &middot; Finsbury Park N4 &middot; Reformer Pilates</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            FS8 Finsbury Park and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Reformer Pilates, tone and yoga at FS8 Finsbury Park. Assessment-led sports massage and recovery with our team at Range and Restore on Junction Road, Archway. The treatment room fixes the restriction, the studio keeps it fixed.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="rounded-card overflow-hidden border-2 border-brand-green bg-sand-deep mb-10 p-8 h-56 sm:h-64 flex items-center justify-center">
          <Image
            src="/fs8-finsbury-park-reformer-pilates-logo.svg"
            alt="FS8 logo, reformer Pilates, tone and yoga studio in Finsbury Park"
            width={333}
            height={120}
            className="max-h-28 w-auto object-contain"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About FS8 Finsbury Park</h2>
          <p>
            <a href={PARTNER_URL} target="_blank" rel="noopener" className="link-inline">FS8 Finsbury Park</a> is a reformer Pilates studio at {PARTNER_ADDRESS}, by Finsbury Park station. FS8 blends Pilates, tone and yoga into one workout: reformer and mat Pilates, toning work with dumbbells, rings and bands, and yoga-based stretching and flow. It is low impact, full body and built so a complete beginner and a regular can train in the same room.
          </p>
          <figure className="not-prose my-6">
            <Image
              src={PARTNER_STUDIO_PHOTO}
              alt="Reformer studio floor at FS8 Finsbury Park, reformer Pilates, tone and yoga in North London"
              width={1920}
              height={724}
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-card border-2 border-brand-green w-full h-auto"
            />
            <figcaption className="text-sm text-page-muted mt-3 text-center">
              The reformer studio floor at FS8 Finsbury Park, 1-7 Morris Place, N4
            </figcaption>
          </figure>

          <p>
            The studio runs three class formats. FS8 Original is the all-round mix of Pilates, tone and yoga for strength, flexibility and posture. FS8 Ignite adds more pace and athletic movement for people who want to work harder. ReformX is reformer only, slower and focused on control and technique.
          </p>
          <p>
            What the FS8 team say they are proud of says a lot about the place: a friendly team, being beginner-friendly, making the studio inclusive, knowing their members by name, and supporting other local businesses. That last one is how we met.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why a Pilates studio and a sports massage clinic work together</h2>
          <p>
            Every treatment at Range and Restore ends with a home plan: stretches, mobility drills and strength work matched to what your therapist found. It works when people do it. The hard part is doing it week after week on your own.
          </p>
          <p>
            That is where a good studio comes in. A reformer class trains exactly what we ask clients to work on: core control, hip and shoulder mobility, hamstring length, posture and balanced strength on both sides. Done regularly, with a trainer watching your form, the gains from treatment hold for longer and the same problem is less likely to come back.
          </p>
          <p>
            It works the other way too. People training hard at FS8 pick up the usual niggles: tight hips, a grumbling lower back, stiff shoulders, calves that never quite let go. That is our work. A session of <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> clears what is restricted so they can get back on the reformer and move properly.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the collaboration works</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-page">Referrals both ways.</strong> When our therapists see a client who would benefit from regular, supervised strength and mobility work, we point them to FS8. When FS8&apos;s trainers see a member held back by pain or tightness, they point them to us.
            </li>
            <li>
              <strong className="text-page">An offer for our clients.</strong> FS8&apos;s 5-class intro for new clients is {PARTNER_INTRO_PRICE}. Our code <strong className="text-page">{PARTNER_CODE}</strong> takes 10% off it, so it works out at about <strong className="text-page">{PARTNER_INTRO_PRICE_WITH_CODE}</strong> for five classes. Buy it on the <a href={PARTNER_INTRO_URL} target="_blank" rel="noopener" className="link-inline">FS8 Finsbury Park intro offer page</a>, or pick up a card at our reception in Archway.
            </li>
            <li>
              <strong className="text-page">An offer for FS8 members.</strong> It goes both ways. FS8 members get <strong className="text-page">{OUR_DISCOUNT} off any treatment</strong> at Range and Restore with the code <strong className="text-page">{OUR_CODE}</strong>. Use it when you book, or tell your therapist when you arrive.
            </li>
            <li>
              <strong className="text-page">Joined-up advice.</strong> Tell your therapist you train at FS8 and your home plan can be built around the classes you already go to. Tell your FS8 trainer what we found and they can adjust the movements for you.
            </li>
            <li>
              <strong className="text-page">Recovery between classes.</strong> Our <Link href={ROUTES.recoverySuite.index} className="link-inline">Recovery Suite</Link> in Archway has a private <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">infrared sauna</Link> (from £19 on its own), useful after a hard week of training, and Normatec <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">compression therapy</Link> as part of the 90-minute Sports Massage + Normatec session (£110).
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What our therapists treat</h2>
          <p>
            Range and Restore is run by a <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>. Every session is assessment, treatment and reassessment, so you can feel what changed before you leave. Common reasons FS8 members and other active clients come in include <Link href={ROUTES.blog.sciaticaMassageArchway} className="link-inline">sciatica</Link>, <Link href={ROUTES.blog.frozenShoulderMassageArchway} className="link-inline">frozen shoulder</Link>, <Link href={ROUTES.blog.tightHamstringMassageArchway} className="link-inline">tight hamstrings</Link>, <Link href={ROUTES.blog.lowerBackPainMassageArchway} className="link-inline">lower back pain</Link>, limited range of movement and swelling or fluid retention, which we treat with <Link href={ROUTES.services.manualLymphaticDrainage} className="link-inline">Manual Lymphatic Drainage</Link>. We also offer <Link href={ROUTES.services.pregnancyMassage} className="link-inline">pregnancy massage</Link> before and after birth.
          </p>
          <figure className="not-prose my-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {THERAPISTS.map((t) => (
                <Link
                  key={t.name}
                  href={`${ROUTES.team}${t.anchor}`}
                  className="group block no-underline"
                >
                  <div className="rounded-card border-2 border-brand-green overflow-hidden">
                    <Image
                      src={t.img}
                      alt={`${t.name}, ${t.role} at Range and Restore Sports Massage, Archway, North London`}
                      width={1060}
                      height={1484}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm font-bold text-page mt-2 leading-tight group-hover:text-brand-teal transition-colors">{t.name}</p>
                  <p className="text-xs text-page-muted leading-snug">{t.role}</p>
                  <p className="text-xs font-bold text-brand-teal mt-1">Read profile &rarr;</p>
                </Link>
              ))}
            </div>
            <figcaption className="text-sm text-page-muted mt-4 text-center">
              The team at Range and Restore, 130 Junction Road, Archway N19
            </figcaption>
          </figure>

          <p>
            For something that needs a closer look, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> and the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back and Neck Pain MOT</Link> go deeper into how the whole body is moving, not only where it hurts.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting between the two</h2>
          <p>
            FS8 sits by Finsbury Park station. Range and Restore is at 130 Junction Road, Archway N19 5LB. The 210 bus runs directly between the two, so a class in the morning and a treatment later the same day is easy. Our clinic is open seven days a week. See our <Link href={ROUTES.areasServed.finsburyParkN4} className="link-inline">Finsbury Park N4 page</Link> for more on getting here.
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
          <h2 className="text-2xl font-black text-ink mb-3">Train at FS8, recover at Range and Restore</h2>
          <p className="text-brand-green font-semibold mb-6">
            Assessment-led sports massage, clinical massage and recovery at 130 Junction Road, Archway N19. Reformer Pilates, tone and yoga at FS8, by Finsbury Park station. Same-week appointments, direct 210 bus between the two. FS8 members: use the code {OUR_CODE} for {OUR_DISCOUNT} off any treatment with us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BOOKING_URLS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-mid transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Book Range and Restore <span aria-hidden="true">→</span>
            </a>
            <a
              href={PARTNER_INTRO_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-brand-green"
            >
              Get the FS8 intro offer <span aria-hidden="true">→</span>
            </a>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-brand-green"
            >
              Visit FS8 Finsbury Park <span aria-hidden="true">→</span>
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
              &rarr; Sports and deep tissue massage
            </Link>
            <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline link-inline-tap">
              &rarr; Advanced clinical massage
            </Link>
            <Link href={ROUTES.recoverySuite.index} className="link-inline link-inline-tap">
              &rarr; Recovery Suite: sauna and compression
            </Link>
            <Link href={ROUTES.areasServed.finsburyParkN4} className="link-inline link-inline-tap">
              &rarr; Sports massage for Finsbury Park N4
            </Link>
            <a href={PARTNER_INTRO_URL} target="_blank" rel="noopener" className="link-inline link-inline-tap">
              &rarr; FS8 Finsbury Park 5-class intro offer
            </a>
            <a href={PARTNER_INSTAGRAM} target="_blank" rel="noopener" className="link-inline link-inline-tap">
              &rarr; FS8 Finsbury Park on Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
