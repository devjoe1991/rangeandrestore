import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Shin Splints: How Sports Massage Helps',
  description: 'How sports massage helps shin splints in runners: releasing tight calves, managing training load and when to rule out a stress fracture. Archway, North London.',
  path: '/blog/shin-splints-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Shin Splints & Sports Massage', path: '/blog/shin-splints-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Shin Splints – How Sports Massage Supports Recovery',
  description: 'Shin splints (medial tibial stress syndrome) treatment through sports massage and soft tissue therapy in Archway, North London. Ease shin pain and return to running well.',
  image: 'https://rangeandrestore.co.uk/sports-massage-treatment-room-couch-range-and-restore-archway-north-london.jpeg',
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
  url: 'https://rangeandrestore.co.uk/blog/shin-splints-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/shin-splints-massage-archway',
  keywords: 'shin splints massage, medial tibial stress syndrome, sports massage Archway, shin pain running, runner shin therapist London, soft tissue therapy shins',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Can sports massage help shin splints?',
    a: "Yes. Sports massage and soft tissue therapy help shin splints by releasing the tight calf and lower-leg muscles that pull on the shin and by improving circulation to the overloaded tissue. It works best alongside sensible load management, so massage eases the symptoms while you and your therapist address the training factors that caused them.",
  },
  {
    q: 'Why do my shins hurt when I run?',
    a: "Shin pain during running is most often shin splints — an overload of the muscles, tendons and connective tissue along the inner shin bone. It is usually driven by doing too much too soon, tight calves, foot mechanics, or hard surfaces and worn footwear. If the pain is sharp and pinpointed to one small spot on the bone, it should be checked to rule out a stress fracture.",
  },
  {
    q: 'How do I get rid of shin splints?',
    a: "Most cases settle with relative rest, reducing the training that aggravates them, and gradually rebuilding your running. Sports massage helps by loosening the tight calf and lower-leg muscles overloading the shin, and an assessment-led session will look at the training and mechanical factors behind the problem so it is less likely to return.",
  },
  {
    q: 'Should I keep running with shin splints?',
    a: "Usually not at your normal volume. Running through shin splints tends to prolong them and, in some cases, can lead to a stress fracture. Relative rest — cutting back the mileage that provokes pain rather than stopping all activity — combined with treatment and a gradual return generally gives the best results.",
  },
  {
    q: 'How long do shin splints take to heal?',
    a: "It varies with how long you have had them and how much you can ease your training. Milder cases caught early often improve within a few weeks, while longer-standing shin splints can take a couple of months of managed load and treatment. If pain persists despite rest, it is worth ruling out a stress fracture.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function ShinSplintsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Shin Splints – How Sports Massage Supports Recovery
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
            Sports massage helps shin splints by releasing the tight calf and lower-leg muscles that overload the shin, and by helping you address the training and loading factors behind the pain. It is a genuinely useful part of recovery — but load management and a gradual return to running matter just as much.
          </p>

          <p>
            Shin splints are one of the most common complaints among <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium">runners</Link>, especially in the weeks after ramping up training. At Range and Restore in Archway, North London, sports massage and targeted <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">soft tissue therapy</Link> offer a practical, assessment-led way to ease shin pain and get you back to running sensibly.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What are shin splints?</h2>

          <p>
            &ldquo;Shin splints&rdquo; is the everyday name for medial tibial stress syndrome (MTSS) — pain along the inner edge of the tibia, the large shin bone. It describes an overload of the muscles, tendons and connective tissue that attach along the shin, rather than a single injury to one structure. The pain typically comes on during or after running and eases with rest, at least early on.
          </p>

          <p>
            Common symptoms include a dull, aching or tender feeling along the inner shin, often spread over several centimetres rather than one pinpoint spot. It may be sore to press along the bone, tight first thing in the morning, and worse as your run goes on. Pain that is sharp, pinpointed to a small area of bone, or that worsens rather than settling deserves closer attention, as covered further down.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes shin splints?</h2>

          <p>Shin splints are most commonly caused by:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>A sudden increase in mileage, pace or training frequency</li>
            <li>Tight, overworked calf muscles that pull on the shin</li>
            <li>Foot mechanics, such as overpronation, that alter loading through the lower leg</li>
            <li>Running on hard surfaces or in worn, unsupportive footwear</li>
            <li>Inadequate recovery between sessions</li>
            <li>Returning to running too quickly after a break</li>
          </ul>

          <p>
            The common thread is that the lower leg is being loaded more than it has adapted to handle. The classic trigger is doing too much too soon — the reason a gradual, structured build-up matters so much, as we cover in our guide to <Link href="/blog/sports-massage-for-runners" className="text-[#0f767a] hover:text-page font-medium">sports massage for runners</Link>. Tight calves are frequently part of the picture, transmitting extra strain to the tissues along the shin.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How sports massage helps shin splints</h2>

          <p>
            Sports massage and soft tissue therapy address shin splints by targeting the muscle and fascial tension that is contributing to the overload, and by supporting the tissue as it recovers. It is not a substitute for easing your training, but combined with sensible load management it can make a real difference to how quickly and comfortably you get back to running.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Releasing tight calf and lower-leg muscles</h3>
          <p>
            The calf complex — gastrocnemius and soleus — along with the deeper muscles of the lower leg is almost always part of the problem. Deep tissue massage, trigger point therapy and soft tissue release applied to these muscles reduce the tension being transmitted to the shin, which often brings noticeable relief and creates more favourable conditions for the area to settle.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Improving circulation to the area</h3>
          <p>
            Massage increases local blood flow to the lower leg, improving the delivery of oxygen and nutrients to the overloaded tissue and supporting the natural repair process. Better circulation also helps reduce the sense of tightness and congestion that often accompanies shin splints.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Looking at the wider loading pattern</h3>
          <p>
            Shin splints are rarely just about the shin. Because loading and movement patterns further up the leg — the calves, hamstrings, glutes and hips — all influence how force travels through the lower leg, an assessment-led session looks beyond the sore spot. Identifying areas of tightness or weakness contributing to the overload is central to reducing the chance of the problem returning.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Restoring mobility</h3>
          <p>
            Restrictions in the fascia and reduced ankle mobility can alter your mechanics and add to the load on the shin. Myofascial release, assisted stretching and mobility work help restore a functional range of motion at the ankle and calf, which supports a smoother, less costly running stride.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This varies with how long you have had the shin splints, how much you can ease your training, and how consistently you can attend. Milder cases caught early often improve over a few weeks, while longer-standing shin splints may need ongoing management across a couple of months alongside a graded return to running.
          </p>

          <p>
            Between sessions, relative rest — reducing the running volume that provokes pain rather than stopping entirely — is usually the key. Low-impact cross-training, appropriate calf and lower-limb strengthening, and a gradual, structured return to running all help. Maintaining good <Link href="/blog/hydration-and-muscle-health" className="text-[#0f767a] hover:text-page font-medium">hydration</Link> supports recovery too. At Range and Restore in Archway, practical advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor or physio</h2>

          <p>
            Sports massage is a valuable part of managing shin splints, but it works best as one element of a broader approach. The important thing to rule out is a stress fracture. If your pain is sharp and localised to one small spot on the bone rather than spread along it, if it persists or worsens despite rest, or if it hurts at night or during everyday activity, you should be assessed before continuing with massage.
          </p>

          <p>
            Range and Restore operates alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan</a>, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If imaging is needed to help rule out more serious pathology, it can be arranged in the same building, and the clinic is happy to coordinate with a physiotherapist as part of your recovery.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to find shin splints treatment near you in North London</h2>

          <p>
            If you have been searching &ldquo;shin splints massage near me&rdquo;, &ldquo;shin pain treatment North London&rdquo;, &ldquo;runner shin therapist Archway&rdquo;, &ldquo;sports massage for shin splints London&rdquo; or &ldquo;MTSS massage N19&rdquo;, Range and Restore is set up for exactly this. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden, Kentish Town and the wider North London catchment. Range and Restore is the local option for runners and active clients across all of those postcodes who do not want to trek into central London for proper hands-on shin splints treatment.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Shin splints: common questions
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
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Shin pain every time you run?</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Assessment-led sports massage and soft tissue therapy for the tight calves and training load behind your shin splints, in Archway, North London.
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
