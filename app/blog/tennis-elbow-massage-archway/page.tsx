import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Tennis Elbow and RSI: Can Soft Tissue Therapy Help?',
  description: 'How soft tissue therapy helps tennis elbow and RSI — releasing tight forearm muscles, addressing grip and desk-posture patterns, and when to see a physio.',
  path: '/blog/tennis-elbow-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Tennis Elbow and RSI', path: '/blog/tennis-elbow-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Tennis Elbow and RSI – How Soft Tissue Therapy Helps',
  description: 'Tennis elbow and RSI treatment through advanced clinical massage and soft tissue therapy in Archway, North London. Release forearm tension and address the postural patterns driving the overload.',
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
  url: 'https://rangeandrestore.co.uk/blog/tennis-elbow-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/tennis-elbow-massage-archway',
  keywords: 'tennis elbow massage, RSI treatment, repetitive strain injury massage, forearm pain treatment, soft tissue therapy Archway, tennis elbow North London, desk worker elbow pain',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Can massage help tennis elbow?',
    a: 'Yes. Soft tissue therapy helps tennis elbow by releasing the tight forearm extensor muscles that pull on the tendon at the outside of the elbow, easing trigger points, and addressing the grip, wrist and shoulder patterns that keep overloading it. It works best alongside load management and a strengthening programme rather than as a standalone fix.',
  },
  {
    q: 'What does tennis elbow feel like?',
    a: 'Tennis elbow usually feels like pain or tenderness on the bony point on the outside of the elbow, often spreading down into the forearm. It tends to flare with gripping, lifting, twisting a door handle, shaking hands or using a mouse and keyboard, and the forearm muscles can feel tight and achy.',
  },
  {
    q: 'Can you get tennis elbow from working at a computer?',
    a: 'Yes. Despite the name, most cases have nothing to do with tennis. Long hours of typing, mouse use and gripping, combined with a rounded desk posture and tight neck and shoulders, are one of the most common causes of tennis elbow and other repetitive strain injuries.',
  },
  {
    q: 'How long does tennis elbow take to heal?',
    a: "It varies. Milder cases caught early often settle over a few weeks to a few months, while longer-standing cases can take considerably longer because tendons are slow to heal. Combining hands-on treatment with load management and progressive strengthening usually gives the best chance of a steady recovery.",
  },
  {
    q: 'Is massage or rest better for RSI?',
    a: 'Neither alone is usually the answer. Complete rest can ease symptoms in the short term but rarely fixes the underlying tension and postural patterns, and the pain often returns on resuming activity. A combination of relative rest, soft tissue therapy, workstation and technique changes, and gradual strengthening tends to work better than rest on its own.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function TennisElbowRSIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Tennis Elbow and RSI – How Soft Tissue Therapy Helps
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
            Soft tissue therapy can help tennis elbow and RSI by releasing the tight forearm extensor muscles and addressing the neck, shoulder and grip patterns that overload the tendon at the elbow — working alongside load management and strengthening rather than instead of them. At Range and Restore in Archway, North London, <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium">advanced clinical massage</Link> takes an assessment-led approach to exactly this kind of overuse pain.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is tennis elbow (and is it only from tennis)?</h2>

          <p>
            Tennis elbow — known medically as lateral epicondylitis — is an overuse condition affecting the tendons on the outside of the elbow, where the forearm extensor muscles attach to the bone. Despite the name, most people who develop it have never picked up a racket. It is common in desk and computer workers, tradespeople, musicians and manual workers, as well as racket-sport players.
          </p>

          <p>
            Typical symptoms include pain and tenderness on the bony point on the outside of the elbow, often radiating down the forearm, along with a weaker grip and pain when gripping, lifting, twisting or straightening the wrist. The related term RSI — repetitive strain injury — is a broader umbrella covering tennis elbow and other overuse conditions of the forearm, wrist and hand driven by repeated movements and sustained loading.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes tennis elbow and RSI?</h2>

          <p>Tennis elbow and RSI are most commonly driven by:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Repetitive gripping, typing and mouse use over long periods</li>
            <li>Sustained forearm tension without adequate recovery</li>
            <li>A rounded, forward desk posture that loads the neck and shoulders</li>
            <li>Tight forearm extensor muscles pulling on the tendon at the elbow</li>
            <li>A sudden increase in a repetitive activity — DIY, a new sport or a busier work period</li>
            <li>Technique or equipment that places excessive strain on the wrist and forearm</li>
          </ul>

          <p>
            The underlying issue is often not confined to the elbow itself. Tension frequently builds through the whole forearm, and the way the neck, shoulder and grip are used at a workstation can keep feeding the problem. This is why the same desk-posture patterns behind <Link href="/blog/desk-posture-pain-massage" className="text-[#0f767a] hover:text-page font-medium">desk-posture pain</Link> and the strain picked up by <Link href="/blog/office-worker-massage-archway" className="text-[#0f767a] hover:text-page font-medium">office workers</Link> so often show up as forearm and elbow symptoms too.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How soft tissue therapy helps</h2>

          <p>
            Soft tissue therapy addresses tennis elbow and RSI by targeting the muscle and fascial tension contributing to the problem, rather than focusing only on the painful point at the elbow. Direct, aggressive work on an acutely irritated tendon is avoided — but releasing the surrounding forearm muscles and the wider pattern above is both appropriate and effective.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Releasing the forearm extensors</h3>
          <p>
            The forearm extensor muscles are almost always a central part of the picture. When they are chronically tight, they place constant tension on the tendon at the elbow. Deep tissue work, trigger point therapy and soft tissue release applied along the forearm reduce that tension, often easing symptoms and creating more favourable conditions for the tendon to recover.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Addressing the neck, shoulder and grip pattern</h3>
          <p>
            Because tennis elbow and RSI are so often driven by how the arm is used at a desk or on a tool, effective treatment looks beyond the forearm. An assessment-led session identifies tightness or restriction in the neck, shoulder and upper back that alters how the arm loads, and addresses the grip and postural habits keeping the elbow overloaded.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Improving tissue health and circulation</h3>
          <p>
            Tendons have a relatively poor blood supply compared to muscle, which is one reason they are slow to heal. Massage increases local circulation, supporting the delivery of nutrients and oxygen to the affected tissue and helping the repair process, while easing the protective muscle tension that builds up around a painful area.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Mobility and myofascial work</h3>
          <p>
            Restrictions in the fascia through the forearm, elbow and shoulder can alter mechanics and add to the load on the tendon. Myofascial release techniques address these restrictions, while assisted stretching and mobility work help restore comfortable range of motion in the wrist, elbow and shoulder.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This varies considerably depending on how severe and how long-standing the problem is, how much repetitive loading you can reduce, and how consistently you can attend. Milder cases caught early often respond within a handful of sessions, while longer-standing tennis elbow can need ongoing management over a longer period, because tendons take time to remodel.
          </p>

          <p>
            Just as importantly, hands-on treatment works best alongside changes you make between sessions. A progressive strengthening programme — often including eccentric loading of the wrist extensors, prescribed by a physiotherapist or rehab specialist — is usually part of a lasting recovery, together with workstation adjustments and pacing of the aggravating activity. At Range and Restore in Archway, advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor or physio</h2>

          <p>
            Soft tissue therapy is a valuable part of managing tennis elbow and RSI, but it works best as one component of a broader approach. If your pain is severe, has suddenly worsened, involves significant numbness, tingling or weakness in the hand, or is not improving despite sensible self-management, you should seek assessment from a physiotherapist or doctor. Some presentations that look like tennis elbow can involve the nerves or the neck, and these benefit from proper diagnosis.
          </p>

          <p>
            Range and Restore operates alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan</a>, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If imaging is required to clarify what is going on at the tendon, this can be arranged within the same building.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to find tennis elbow and RSI treatment near you in North London</h2>

          <p>
            If you have been searching &ldquo;tennis elbow massage near me&rdquo;, &ldquo;RSI treatment North London&rdquo;, &ldquo;forearm pain therapist Archway&rdquo;, &ldquo;soft tissue therapy for tennis elbow London&rdquo; or &ldquo;repetitive strain massage N19&rdquo;, Range and Restore is set up for exactly this. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden, Kentish Town and the wider North London catchment. Range and Restore is the local option for desk workers, tradespeople and racket-sport players across all of those postcodes who do not want to trek into central London for proper hands-on treatment of tennis elbow and RSI.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Tennis elbow and RSI: common questions
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
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Don&apos;t let elbow or forearm pain hold you back</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Assessment-led advanced clinical massage targeting the forearm tension and postural patterns behind your tennis elbow or RSI in Archway, North London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.advancedClinical}
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
            <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Advanced Clinical Massage
            </Link>
            <Link href="/blog/desk-posture-pain-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Desk Posture Pain and How Massage Helps
            </Link>
            <Link href="/blog/office-worker-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Massage for Office Workers in Archway
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
