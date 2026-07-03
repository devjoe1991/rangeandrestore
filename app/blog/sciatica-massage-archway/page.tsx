import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sciatica and Trapped Nerve Pain: Can Massage Help?',
  description: 'Can massage help sciatica and trapped nerve pain? How soft tissue therapy releases the glutes and lower back that irritate the sciatic nerve — assessment-led treatment in Archway, North London.',
  path: '/blog/sciatica-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Sciatica and Trapped Nerve Pain', path: '/blog/sciatica-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sciatica and Trapped Nerve Pain – How Massage Can Help',
  description: 'How massage and soft tissue therapy can help sciatica and trapped nerve pain by releasing the glutes, piriformis and lower back in Archway, North London. Assessment-led treatment.',
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
  url: 'https://rangeandrestore.co.uk/blog/sciatica-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sciatica-massage-archway',
  keywords: 'sciatica massage, trapped nerve pain, piriformis release, sciatic nerve pain treatment, advanced clinical massage Archway, lower back pain massage London, soft tissue therapy sciatica',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Can massage help sciatica?',
    a: "In many cases, yes. Where sciatic pain is driven or worsened by tight muscles — particularly the glutes and piriformis in the buttock and the muscles of the lower back — massage can release that tension and ease the irritation of the nerve. It is assessment-led rather than a cure, and it cannot fix nerve compression caused by a disc, which needs medical assessment.",
  },
  {
    q: 'What does a trapped nerve feel like?',
    a: "A trapped or irritated nerve often produces a sharp, burning or shooting pain that travels along the path of the nerve rather than staying in one spot. With sciatica this typically runs from the lower back or buttock down the back of the leg, and can come with pins and needles, tingling or numbness in the leg or foot.",
  },
  {
    q: 'Why do I get shooting pain down my leg?',
    a: "Shooting pain down the leg is the classic sign of sciatica — the sciatic nerve running from the lower back through the buttock and down the leg is being compressed or irritated. Common contributors include a tight piriformis or glute pressing on the nerve, lower back and postural load, and long periods of sitting. Persistent or severe symptoms should be assessed medically.",
  },
  {
    q: 'Is it safe to massage sciatica?',
    a: "When it is assessment-led, massage is generally safe and can be helpful for muscle-related sciatic pain. The therapist works the surrounding muscles rather than pressing hard directly on an irritated nerve. It is not appropriate to massage through severe or worsening pain, and any numbness or loss of bladder or bowel control needs urgent medical help, not massage.",
  },
  {
    q: 'How long does sciatica take to settle?',
    a: "It varies with the cause. Many muscle-related episodes ease over a few weeks, and where tight glutes or lower-back muscles are involved people often notice improvement within 3–6 sessions alongside movement and posture changes. Nerve-root or disc-related sciatica can take longer and usually needs medical or physiotherapy input.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SciaticaMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sciatica and Trapped Nerve Pain – How Massage Can Help
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
            Can massage help sciatica? In many cases, yes. Where the pain is driven or aggravated by tight muscles — especially the glutes and piriformis in the buttock and the muscles of the lower back that compress or irritate the sciatic nerve — massage and <Link href="/services/advanced-clinical-massage" className="text-[#0f767a] hover:text-page font-medium">advanced clinical massage</Link> can ease that tension and settle symptoms. It is assessment-led, not a cure, and cannot resolve genuine disc-related nerve compression on its own.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is sciatica?</h2>

          <p>
            Sciatica is not a diagnosis in itself but a description of a set of symptoms caused by irritation or compression of the sciatic nerve — the longest nerve in the body, which runs from the lower back through the buttock and down the back of each leg. When that nerve is under pressure, the result is a distinctive pain that travels along its path rather than staying in one place.
          </p>

          <p>
            Typical symptoms include a sharp, burning or shooting pain from the lower back or buttock down the back of the leg, sometimes as far as the foot, often on one side. It can come with pins and needles, tingling, numbness or a feeling of weakness in the leg. Many people find it worse after long periods of sitting or when they first stand up.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes sciatica and trapped-nerve pain?</h2>

          <p>Sciatic and trapped-nerve pain has a number of common contributors:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Tightness in the piriformis and glute muscles of the buttock, which sit close to the sciatic nerve and can irritate it when overloaded</li>
            <li>Muscular and postural load through the lower back and pelvis</li>
            <li>Prolonged sitting at a desk, which shortens the hip flexors and loads the lower back and glutes</li>
            <li>A disc bulge or age-related changes in the spine pressing on a nerve root (this is a medical matter, not a muscular one)</li>
            <li>A sudden increase in activity, heavy lifting with poor mechanics, or long periods of inactivity</li>
          </ul>

          <p>
            A great deal of everyday sciatic-type pain is linked to the way we sit. Hours at a desk leave the glutes weak and the hip and lower-back muscles tight, which is exactly the pattern that can irritate the sciatic nerve. This is why the same advice that helps <Link href="/blog/desk-posture-pain-massage" className="text-[#0f767a] hover:text-page font-medium">desk posture and back pain</Link> often overlaps with managing sciatica, and why <Link href="/blog/office-worker-massage-archway" className="text-[#0f767a] hover:text-page font-medium">office workers in Archway</Link> are among the most common people we see with these symptoms.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How massage helps sciatica</h2>

          <p>
            Massage cannot reposition a disc or reverse nerve-root compression — those are medical issues. What it can do, and do well, is address the muscular tension that is either causing or amplifying the irritation of the sciatic nerve. Where the problem is muscular, releasing that tension often brings real and lasting relief.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Releasing the glutes and piriformis</h3>
          <p>
            The piriformis and the deeper glute muscles sit directly over the path of the sciatic nerve. When they become tight and overloaded, they can compress or irritate the nerve — a pattern sometimes described as piriformis-related sciatic pain. Targeted soft tissue release, trigger point work and deep tissue techniques applied to these muscles reduce that pressure and are often where the most noticeable relief comes from.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Easing lower-back and pelvic tension</h3>
          <p>
            The muscles of the lower back and around the pelvis frequently hold protective tension when the nerve is irritated, which can make everything feel tighter and more sensitive. Releasing these muscles, alongside the glutes, addresses the fuller picture rather than one isolated spot.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Restoring movement and reducing guarding</h3>
          <p>
            Sciatic pain often leads people to move stiffly and hold themselves awkwardly, which reinforces the tension. Assisted stretching, mobility work and an assessment-led approach help restore more natural movement through the hips and lower back and calm the protective guarding that keeps the cycle going. A <Link href="/services/back-neck-pain-mot" className="text-[#0f767a] hover:text-page font-medium">back and neck pain MOT</Link> is a useful way to map out exactly which areas are contributing.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This depends heavily on the cause. Where sciatic-type pain is largely muscular — tight glutes, piriformis and lower back — people often notice a meaningful improvement within 3–6 sessions, particularly when treatment is combined with changes to sitting habits, posture and gentle movement. Longer-standing patterns, or pain with a nerve-root or disc component, generally take longer and are best managed alongside a physiotherapist or GP.
          </p>

          <p>
            Between sessions, staying gently active rather than resting completely, breaking up long periods of sitting, and following any exercises prescribed by a physio usually help. At Range and Restore in Archway, advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor or physio instead</h2>

          <p>
            Massage is a valuable part of managing muscle-related sciatic pain, but it is not the right first step for every case. If your pain is severe, is steadily worsening, or is not settling at all, you should be assessed by a GP or physiotherapist before booking massage. True nerve-root or disc-related compression needs proper medical assessment, and imaging may be appropriate.
          </p>

          <p>
            Some symptoms are red flags that need urgent medical attention rather than massage: numbness spreading across the saddle or inner-thigh area, significant or progressive weakness in the leg, or any loss of bladder or bowel control. If you experience any of these, seek emergency medical help straight away.
          </p>

          <p>
            Range and Restore operates alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">Reliable Scan</a>, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If imaging is required, or if we feel your symptoms need medical input, we can help coordinate with Reliable Scan, a physiotherapist or your GP so you get the right care rather than the wrong treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to find sciatica treatment near you in North London</h2>

          <p>
            If you have been searching &ldquo;sciatica massage near me&rdquo;, &ldquo;trapped nerve pain treatment North London&rdquo;, &ldquo;piriformis massage Archway&rdquo;, &ldquo;sciatic nerve pain therapist London&rdquo; or &ldquo;massage for sciatica N19&rdquo;, Range and Restore is set up for exactly this. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden, Kentish Town and the wider North London catchment. Range and Restore is the local, assessment-led option for anyone across those postcodes dealing with sciatica or trapped-nerve pain who would rather not trek into central London for proper hands-on treatment.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Sciatica: common questions
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
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Struggling with sciatica or a trapped nerve?</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Assessment-led advanced clinical massage that releases the glutes, piriformis and lower back driving your sciatic pain, in Archway, North London.
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
              &rarr; Desk Posture and Back Pain: How Massage Helps
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
