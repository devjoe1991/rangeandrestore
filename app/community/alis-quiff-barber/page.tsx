import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Ali’s Quiff Barber and Range and Restore | Men’s Self-Care in Archway N19',
  description: 'Ali’s Quiff Barber on Holloway Road and Range and Restore on Junction Road work side by side on men’s self-care in Archway: barbering, massage and recovery.',
  path: '/community/alis-quiff-barber',
})

const PARTNER_URL = 'https://booksy.com/en-gb/167323_alis-quiff-barber_barber_311817_london'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Ali’s Quiff Barber', path: '/community/alis-quiff-barber' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Ali’s Quiff Barber',
  url: PARTNER_URL,
  description: 'Traditional barber shop in Archway, North London. Haircuts, beard trims, hair washing, facial scrubs, hot towels, facial massage, head massage and full-service grooming experiences.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '746 Holloway Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 3JF',
    addressCountry: 'GB',
  },
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
    q: 'Where is Ali’s Quiff Barber in Archway?',
    a: 'Ali’s Quiff Barber is at 746 Holloway Road, Archway, London N19 3JF. It’s a short walk from Range and Restore Sports Massage at 130 Junction Road and easy to combine with a massage or recovery session on the same day.',
  },
  {
    q: 'Why does Range and Restore recommend Ali’s Quiff Barber for men’s self-care?',
    a: 'The full-service experience at Ali’s Quiff Barber, including haircut, beard trim, hair wash, facial scrub, hot towels, facial massage, head massage and warm steam treatments, gives men proper time to switch off and reset. Paired with sports massage, recovery and remedial therapy at Range and Restore, it’s a simple way to look after both physical and mental wellbeing.',
  },
  {
    q: 'How often should men book self-care sessions like grooming and massage?',
    a: 'Even one dedicated session a month, whether that’s a massage treatment, recovery session or full-service grooming experience, can make a real difference to stress levels, confidence, recovery and overall wellbeing. The two together work very naturally for men in their 30s, 40s and 50s in Archway and North London.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function AlisQuiffBarberPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; Archway &middot; Barbering and Men’s Self-Care</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Ali’s Quiff Barber and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Traditional barbering, beard work and full-service grooming with Ali at Ali’s Quiff Barber on Holloway Road (746, N19 3JF). Sports massage, recovery and remedial therapy with our team at Range and Restore on Junction Road. Two Archway businesses looking after men inside and out.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/alis-quiff-barber-shop-holloway-road-archway.jpg"
            alt="Ali’s Quiff Barber Shop logo, Holloway Road"
            width={400}
            height={400}
            className="max-h-44 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A nice collaboration between two Archway businesses</h2>
          <p>
            This is a community piece between Carlos at Range and Restore Sports Massage and Ali from Ali’s Quiff Barber, both based here in Archway. Carlos had the full-service experience at Ali’s today and honestly it was a good reminder of how important it is, especially for men, to actually take time to look after themselves properly, not only physically but mentally as well.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">More than just a haircut</h2>
          <p>
            The experience was much more than just a haircut. It included a beard trim, haircut, facial scrub, hair wash, warm towels, facial massage, head massage and even relaxing warm steam treatments throughout the service. Over an hour of genuinely switching off, relaxing and leaving feeling refreshed, lighter and more confident. You can tell immediately when someone truly cares about their craft and customer experience, and Ali and his team really do. Professional, welcoming and highly skilled.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why self-care matters for men</h2>
          <p>
            Treatments like barber grooming, massage therapy, recovery sessions and taking proper time for yourself shouldn’t be viewed as a luxury. They’re part of maintaining good physical and mental wellbeing. Modern life is stressful, demanding and busy, and a lot of men in particular put this kind of thing at the bottom of the list. Giving yourself even one dedicated session a month, whether that’s a massage treatment, recovery session or proper grooming experience, can make a huge difference to confidence, stress levels, recovery, wellbeing and overall quality of life.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Outside and inside, working together</h2>
          <p>
            There’s a really nice connection between what Ali and Carlos do. At Ali’s Quiff Barber, people leave feeling refreshed externally, more confident, groomed and relaxed. At Range and Restore Sports Massage, clients leave feeling physically better internally through sports massage, remedial therapy, recovery sessions, mobility work and tension relief. Together, both experiences complement each other really well, looking after men from the outside in and the inside out.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Local trust and word of mouth</h2>
          <p>
            Ali is also a regular client at Range and Restore Sports Massage, and Carlos is a regular at Ali’s. Both businesses recommend each other to their own clients because they genuinely believe in each other’s work and understand the importance of helping people feel better physically, mentally and emotionally. That kind of community trust and word-of-mouth recommendation is what local businesses in Archway are built on.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Range and Restore supports men’s wellbeing</h2>
          <p>
            For men juggling work, training, family life and everything else, the body picks up the slack. Tight shoulders, stiff lower backs, headaches from screen time, niggles from the gym, restless nights and a general low-grade tension that builds up over the week. Range and Restore offers assessment-led <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link>, <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium">advanced clinical massage</Link>, <Link href="/services/advanced-cupping-sports-deep-tissue" className="text-[#0f767a] hover:text-page font-medium">advanced cupping with deep tissue</Link>, the <Link href="/services/back-neck-pain-mot" className="text-[#0f767a] hover:text-page font-medium">Back and Neck Pain MOT</Link>, <Link href="/services/2-hour-pain-relief-massage" className="text-[#0f767a] hover:text-page font-medium">2-hour pain-relief sessions</Link>, <Link href="/services/relaxation-restorative-massage" className="text-[#0f767a] hover:text-page font-medium">relaxation and restorative massage</Link> and certified <Link href="/services/manual-lymphatic-drainage" className="text-[#0f767a] hover:text-page font-medium">Manual Lymphatic Drainage (MLD)</Link>. Every session begins with a proper assessment, so treatment is matched to what each client turns up with that day, rather than a generic protocol. The <Link href="/recovery-suite" className="text-[#0f767a] hover:text-page font-medium">recovery suite</Link> (sauna and pneumatic compression) is also available to extend recovery between sessions.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">A natural Archway pairing: barber then bodywork</h2>
          <p>
            A solid rhythm for men in Archway looks something like this. Book in with Ali at <a href={PARTNER_URL} target="_blank" rel="noopener" className="text-[#0f767a] hover:text-page font-medium">Ali’s Quiff Barber</a> at 746 Holloway Road for a haircut, beard trim, hot towels and head massage. Walk fifteen minutes down to <Link href="/areas-served/archway-n19" className="text-[#0f767a] hover:text-page font-medium">130 Junction Road, N19 5LB</Link> for a sports massage, Back and Neck MOT or recovery session. Done in a single Archway afternoon. You leave the area looking better, moving better and feeling better, and it’s all within the N19 postcode.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Service areas: where Range and Restore covers</h2>
          <p>
            The Range and Restore clinic at <Link href="/areas-served/archway-n19" className="text-[#0f767a] hover:text-page font-medium">130 Junction Road, Archway, London N19 5LB</Link> sits at the centre of a tight cluster of North London postcodes, which makes it easy to pair a grooming session at Ali’s on Holloway Road with sports massage, recovery or remedial work on the same day. Clients regularly come in from <strong>Archway (N19)</strong>, <strong>Upper Holloway (N19)</strong>, <Link href="/areas-served/tufnell-park-n7" className="text-[#0f767a] hover:text-page font-medium"><strong>Tufnell Park (N7 / N19)</strong></Link>, <strong>Holloway (N7)</strong>, <strong>Highgate (N6)</strong>, <strong>Crouch End (N8)</strong>, <strong>Hornsey (N8)</strong>, <strong>Kentish Town (NW5)</strong>, <strong>Dartmouth Park (NW5)</strong>, <strong>Gospel Oak (NW5)</strong>, <strong>Camden (NW1)</strong>, <strong>Hampstead (NW3)</strong>, <strong>Belsize Park (NW3)</strong>, <strong>Finsbury Park (N4)</strong>, <strong>Stroud Green (N4)</strong> and the wider <Link href="/areas-served" className="text-[#0f767a] hover:text-page font-medium">North London service area</Link>. The clinic is three minutes’ walk from Archway tube (Northern Line) and on multiple bus routes.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Invest in yourself, inside and out</h2>
          <p>
            Book in with Ali at <a href={PARTNER_URL} target="_blank" rel="noopener" className="text-[#0f767a] hover:text-page font-medium">Ali’s Quiff Barber</a> (746 Holloway Road, Archway N19 3JF) for a haircut, beard trim and the full grooming experience. Then <Link href="/contact" className="text-[#0f767a] hover:text-page font-medium">book in with Range and Restore</Link> for a sports massage, remedial therapy or recovery session at 130 Junction Road, N19 5LB. Two local businesses, one neighbourhood, one easy way to actually look after yourself.
          </p>
        </div>

        <section aria-labelledby="page-faqs" className="mt-12">
          <h2 id="page-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#E9E5DE] bg-white p-5">
                <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Book sports massage and recovery in Archway</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Sort the haircut and beard at Ali’s Quiff Barber on Holloway Road. Sort the body, recovery and tension at Range and Restore on Junction Road. Same-week appointments, three minutes from Archway tube, all inside N19.
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
              Book Ali’s Quiff Barber <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports and deep tissue remedial therapy
            </Link>
            <Link href="/services/back-neck-pain-mot" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Back and Neck Pain MOT
            </Link>
            <Link href="/services/relaxation-restorative-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Relaxation and restorative massage
            </Link>
            <Link href="/recovery-suite" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Recovery suite: sauna and compression
            </Link>
            <Link href="/areas-served/archway-n19" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Archway N19
            </Link>
            <Link href="/about" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
