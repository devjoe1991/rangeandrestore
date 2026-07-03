import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Plantar Fasciitis and Heel Pain: How Massage Helps',
  description: 'How sports massage helps plantar fasciitis and heel pain — releasing tight calves and foot muscles, addressing lower-leg mechanics, and when to see a physio.',
  path: '/blog/plantar-fasciitis-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Plantar Fasciitis and Heel Pain', path: '/blog/plantar-fasciitis-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Plantar Fasciitis and Heel Pain – How Sports Massage Helps',
  description: 'Plantar fasciitis and heel pain treatment through sports massage and soft tissue therapy in Archway, North London. Release tight calves and foot muscles overloading the plantar fascia.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=75',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Soft Tissue Therapist & MLD Practitioner',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  url: 'https://rangeandrestore.co.uk/blog/plantar-fasciitis-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/plantar-fasciitis-massage-archway',
  keywords: 'plantar fasciitis massage, heel pain treatment, sports massage Archway, calf pain treatment, foot pain massage London, soft tissue therapy plantar fascia',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: "Can massage help plantar fasciitis?",
    a: "Yes. Sports massage and soft tissue therapy support plantar fasciitis recovery by releasing the tight calf muscles and the small muscles of the foot that overload the plantar fascia, improving circulation to the area, and addressing the wider lower-leg mechanics driving the strain. It works best alongside load management and the stretching and strengthening usually prescribed by a physio or podiatrist.",
  },
  {
    q: "Why does my heel hurt in the morning?",
    a: "Sharp heel pain in the first few steps in the morning is the classic sign of plantar fasciitis. Overnight the plantar fascia and calf tighten while you rest, so the first steps of the day stretch the irritated tissue suddenly. The pain often eases as you move around and the tissue warms up, then returns after long periods of standing or sitting.",
  },
  {
    q: "What causes plantar fasciitis?",
    a: "Plantar fasciitis is usually an overload problem. Common contributors include tight calf muscles that pull on the heel, a sudden increase in running mileage or time on your feet, unsupportive footwear, high or flat foot mechanics, standing all day on hard surfaces, and carrying extra load. The strain often builds up over weeks rather than from a single event.",
  },
  {
    q: "How long does plantar fasciitis take to heal?",
    a: "It varies with how long you have had it and how well the load is managed. Cases caught early often settle over a few weeks to a couple of months with the right combination of treatment, appropriate footwear, and prescribed stretching and strengthening. Long-standing cases can take several months and need patient, consistent management rather than a quick fix.",
  },
  {
    q: "Should I keep running with heel pain?",
    a: "Not without adjusting things first. Continuing to run through heel pain usually keeps the plantar fascia overloaded and slows recovery. Relative rest — reducing volume rather than stopping everything — combined with supportive footwear, calf and foot work, and prescribed loading exercises tends to help. If the pain is severe or persistent, get assessed by a physio or podiatrist before returning to running.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function PlantarFasciitisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Plantar Fasciitis and Heel Pain – How Sports Massage Helps
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-07-03">3 July 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Sports massage helps plantar fasciitis and heel pain by releasing the tight calf and foot muscles that overload the plantar fascia, and by addressing the wider lower-leg mechanics driving the strain. It works best alongside load management and the stretching and strengthening usually prescribed by a physiotherapist or podiatrist.
          </p>

          <p>
            Plantar fasciitis is one of the most common causes of heel pain, affecting <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium">runners</Link>, people who stand all day, and active individuals alike. At Range and Restore in Archway, North London, sports massage and targeted <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">soft tissue therapy</Link> offer a considered, hands-on way to reduce the tension feeding the problem and support recovery.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is plantar fasciitis?</h2>

          <p>
            The plantar fascia is a thick band of connective tissue that runs along the sole of the foot, from the heel bone (calcaneus) to the base of the toes. It supports the arch and helps the foot absorb load with every step. Plantar fasciitis is an overload condition in which this tissue becomes irritated and painful, typically where it attaches to the heel.
          </p>

          <p>
            The most recognisable symptom is sharp heel pain in the first few steps in the morning, or after sitting for a while. The pain often eases as the tissue warms up with movement, then returns after long periods of standing or towards the end of the day. There may also be tenderness under the heel and along the arch.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes heel pain and plantar fasciitis?</h2>

          <p>Plantar fasciitis is most commonly linked to:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Tight calf muscles that increase tension through the heel and plantar fascia</li>
            <li>A sudden increase in running mileage or time on your feet</li>
            <li>Unsupportive footwear or worn-out shoes</li>
            <li>Foot mechanics — high arches, flat feet, or the way you load through the foot</li>
            <li>Standing all day, especially on hard surfaces</li>
            <li>Returning to activity too quickly after a break, or carrying extra load</li>
          </ul>

          <p>
            The underlying issue is rarely the fascia in isolation. Much of the strain comes from further up the leg — particularly the calf complex — which, when tight and overloaded, pulls on the heel and increases the tension the plantar fascia has to cope with.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How massage helps</h2>

          <p>
            Sports massage and soft tissue therapy address plantar fasciitis by targeting the muscle and fascial tension contributing to the overload, rather than aggravating the irritated tissue directly. The aim is to reduce the pull on the heel and improve how the whole lower leg and foot move and load.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Releasing the calf complex</h3>
          <p>
            The gastrocnemius and soleus muscles are almost always part of the picture. When they are tight, they increase tension through the Achilles and the heel, which in turn loads the plantar fascia. Deep tissue work, trigger point therapy, and soft tissue release applied to the calf reduces that tension and takes some of the strain off the heel.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Working the foot itself</h3>
          <p>
            The small intrinsic muscles of the foot and the tissue along the arch respond well to careful hands-on work. Releasing tightness here, away from the acutely painful heel attachment, can ease the sensation of a tight, gripping sole and help the foot move more freely.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Addressing the kinetic chain</h3>
          <p>
            Because heel loading is influenced by mechanics further up the leg — the hamstrings, glutes, and hips — an assessment-led session looks beyond the foot alone. Identifying tightness or weakness that alters how you walk and run, and addressing it, helps reduce the repeated overload that keeps the fascia irritated.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Improving circulation and mobility</h3>
          <p>
            Massage increases local circulation, supporting the tissue repair process, while assisted stretching and mobility work helps restore range of motion in the ankle and calf. Better ankle mobility means less compensatory strain travelling down into the heel.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This varies considerably depending on how long you have had the pain, how much time you spend on your feet, and how consistently you can attend. Cases caught early often improve over a few weeks to a couple of months with the right mix of treatment, footwear, and prescribed exercises. Long-standing cases can take several months and need patient, consistent management rather than a quick fix.
          </p>

          <p>
            Between sessions, relative rest — reducing running volume without necessarily stopping entirely — combined with appropriate calf and foot stretching and loading exercises (typically prescribed by a physiotherapist or podiatrist) is usually recommended. Supportive footwear makes a real difference too. At Range and Restore in Archway, advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor or physio</h2>

          <p>
            Sports massage is a valuable part of managing plantar fasciitis, but it works best within a broader plan. If your heel pain is severe, is not settling despite sensible changes, follows an injury, or comes with numbness, tingling, or pain that does not fit the usual first-steps-in-the-morning pattern, you should be assessed by a physiotherapist, podiatrist, or your GP before continuing with massage alone.
          </p>

          <p>
            Range and Restore is happy to coordinate with your physiotherapist so treatment complements your rehab rather than duplicating it. The clinic also operates alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan</a>, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If imaging is required to rule out other causes of heel pain, this can be arranged within the same building.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to find plantar fasciitis treatment near you in North London</h2>

          <p>
            If you have been searching &ldquo;plantar fasciitis massage near me&rdquo;, &ldquo;heel pain treatment North London&rdquo;, &ldquo;foot pain therapist Archway&rdquo;, &ldquo;deep tissue massage for plantar fasciitis London&rdquo; or &ldquo;sports massage heel pain N19&rdquo;, Range and Restore is set up for exactly this. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N8, N4, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden, Kentish Town and the wider North London catchment. Range and Restore is the local option for runners and people on their feet all day across all of those postcodes who do not want to trek into central London for proper hands-on heel pain treatment.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Plantar fasciitis: common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-page mb-2">{f.q}</h3>
                <p className="text-page-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Don&apos;t let heel pain slow you down</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Professional sports massage and soft tissue therapy targeting the tight calves and foot muscles behind your plantar fasciitis in Archway, North London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.sportsDeepTissue}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a2330] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3d3a] transition-colors min-h-[44px]"
            >
              Make a Booking
            </a>
            <a
              href={BOOKING_URLS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#1a2330] font-semibold px-6 py-3 rounded-lg border-2 border-[#1a2330] hover:bg-[#1a2330] hover:text-white transition-colors min-h-[44px]"
            >
              Buy a Gift Card
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1a2330] font-semibold underline min-h-[44px] sm:ml-2"
            >
              Or ask a question first
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
            </Link>
            <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; How Sports Massage Helps Runners Before and After Races
            </Link>
            <Link href="/blog/achilles-tendinitis-recovery-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Achilles Tendinitis – How Sports Massage Helps Recovery
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#0f767a] font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
