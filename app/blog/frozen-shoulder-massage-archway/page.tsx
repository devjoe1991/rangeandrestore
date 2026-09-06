import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Frozen Shoulder and Shoulder Pain: Can Massage Help?',
  description: 'Can massage help frozen shoulder? What it can and cannot do, how it differs from muscular shoulder tension, and when to see a GP or physio. Archway, North London.',
  path: '/blog/frozen-shoulder-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Frozen Shoulder and Shoulder Pain', path: '/blog/frozen-shoulder-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Frozen Shoulder and Shoulder Pain – How Massage Helps',
  description: 'How massage helps shoulder pain and the muscular tension around a frozen shoulder, what it can and cannot do, and when to seek medical or physiotherapy care in Archway, North London.',
  image: 'https://rangeandrestore.co.uk/sports-deep-tissue-massage-back-shoulder-treatment-range-and-restore-archway-north-london.jpg',
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
  dateModified: '2026-08-23',
  url: 'https://rangeandrestore.co.uk/blog/frozen-shoulder-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/frozen-shoulder-massage-archway',
  keywords: 'frozen shoulder massage, shoulder pain massage Archway, adhesive capsulitis, shoulder tension treatment, stiff shoulder North London, advanced clinical massage shoulder',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: "Can massage help frozen shoulder?",
    a: "Massage will not cure a true frozen shoulder (adhesive capsulitis), which is a medical condition of the joint capsule that runs its own course over time. What massage can do is ease the tight, guarding muscles around the shoulder, neck and upper back, reduce the compensations that build up while you protect the joint, and help you feel more comfortable alongside medical or physiotherapy care. Much everyday shoulder pain, however, is muscular rather than a true frozen shoulder, and that responds well to hands-on treatment.",
  },
  {
    q: "What does frozen shoulder feel like?",
    a: "A true frozen shoulder usually starts with a deep, aching pain that is often worse at night and when you lie on that side. Over time the pain may settle a little but the shoulder becomes increasingly stiff, so that both actively moving it and being moved by someone else are limited — reaching behind your back, up overhead or out to the side becomes difficult. This progressive loss of range in every direction is what distinguishes it from ordinary muscular tightness.",
  },
  {
    q: "Why is my shoulder stiff and painful?",
    a: "Most shoulder pain and stiffness is muscular or postural rather than a true frozen shoulder. Long hours at a desk, rounded-forward posture, sleeping awkwardly, carrying bags on one side, overuse from sport or repetitive lifting, and guarding after a minor strain all leave the muscles around the shoulder blade, neck and upper back tight and overloaded. This kind of pain typically eases with soft-tissue work, movement and posture changes.",
  },
  {
    q: "How long does frozen shoulder last?",
    a: "True frozen shoulder is well known for being slow. It classically moves through a painful freezing stage, a stiff frozen stage and a gradual thawing stage, and the whole process commonly takes anywhere from around one to three years, though timescales vary widely from person to person. Because it runs this long natural course, treatment is about managing pain and maintaining as much comfort and movement as possible, which is where massage and physiotherapy support each other.",
  },
  {
    q: "Should I see a physio or have a massage for shoulder pain?",
    a: "For a suspected true frozen shoulder, or any shoulder pain that is severe, came on after a fall, or is not improving, see a GP or physiotherapist first for assessment — they can confirm the diagnosis and guide loading and mobility work. Massage works well alongside that, easing the surrounding muscle tension and compensations. For everyday muscular or posture-related shoulder tension, massage is often a sensible first step, and we will refer you on if anything suggests it needs medical attention.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function FrozenShoulderMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Frozen Shoulder and Shoulder Pain – How Massage Helps
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-07-03">3 July 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Massage will not &ldquo;cure&rdquo; a true frozen shoulder — adhesive capsulitis is a medical condition of the joint capsule that runs its own course over time, and it needs medical or physiotherapy management. What hands-on treatment can do is ease the surrounding muscle tension and compensations, calm the wider shoulder and neck pain, and support your comfort and movement alongside that care. Reassuringly, a great deal of everyday &ldquo;shoulder pain&rdquo; is muscular rather than a true frozen shoulder, and that responds well to <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is frozen shoulder (and what isn&rsquo;t)?</h2>

          <p>
            The term &ldquo;frozen shoulder&rdquo; gets used loosely for any stiff, painful shoulder, but medically it refers to a specific condition — adhesive capsulitis. Here the capsule of connective tissue surrounding the shoulder joint becomes inflamed, thickened and tight, so the joint itself is genuinely restricted. The hallmark is a progressive loss of movement in every direction: reaching overhead, out to the side and behind your back all become limited, and crucially the range is restricted whether you move the arm yourself or someone else moves it for you. It often develops for no obvious reason, though it is more common after a period of immobility, following surgery, and in people with diabetes or thyroid conditions.
          </p>

          <p>
            A true frozen shoulder is different from the far more common muscular or impingement-type shoulder pain. With muscular tension, the aching comes from tight, overloaded muscles around the shoulder blade, neck and upper back, and although certain movements hurt, your passive range is usually still there. Impingement-type pain tends to bite in a particular arc of movement rather than locking the shoulder in all directions. Telling these apart matters, because they need quite different approaches — and it is one of the first things an assessment-led session is looking to establish.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes shoulder pain and stiffness?</h2>

          <p>Most shoulder pain that walks through the door is muscular or postural rather than a true frozen shoulder. Common drivers include:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Long hours at a desk and rounded-forward <Link href={ROUTES.blog.deskPosturePainMassage} className="link-inline">posture</Link> that overloads the neck and upper back</li>
            <li>Carrying bags on one side, or sleeping awkwardly on the shoulder</li>
            <li>Overuse from sport, DIY or repetitive lifting and overhead work</li>
            <li>Guarding and compensation after a minor strain, which spreads tension into nearby muscles</li>
            <li>Weakness or stiffness elsewhere — the mid-back and shoulder blade — that changes how the shoulder moves</li>
          </ul>

          <p>
            The pattern is usually one of tightness and compensation rather than damage to the joint itself. The muscles around the shoulder blade, the upper trapezius, the rotator cuff and the chest all work together, and when one becomes tight or overloaded the others take up the slack, which is how a small niggle can gradually turn into a stiff, aching shoulder.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How massage helps</h2>

          <p>
            Whether you have a true frozen shoulder or the more common muscular pain, massage works on the soft tissue around the joint rather than forcing the joint itself. With adhesive capsulitis in particular, the aim is never to push through the restricted capsule — that can aggravate an already irritable joint. Instead the focus is on making everything around it more comfortable.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Easing the muscles that guard and compensate</h3>
          <p>
            When a shoulder is painful, the surrounding muscles tighten protectively and the neck, upper back and opposite side often start doing extra work. Soft tissue release and trigger point work applied to the upper trapezius, the muscles around the shoulder blade and the rotator cuff reduce that guarding, which frequently takes the edge off pain even when the underlying joint restriction remains.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Addressing the neck and upper back</h3>
          <p>
            Shoulder pain rarely sits in isolation. Tightness in the neck and mid-back changes how the shoulder blade moves and adds to the load on the joint. Working these areas as part of the same treatment often gives more lasting relief than treating the shoulder alone, and it is especially relevant for desk-based clients whose posture is part of the picture.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Supporting comfort and movement</h3>
          <p>
            For everyday muscular shoulder pain, reducing tension and restoring soft-tissue mobility can restore comfortable range of movement quite quickly. For a true frozen shoulder, the realistic goal is different: massage supports comfort, helps you sleep and move more easily, and keeps the surrounding tissues in good shape while the condition works through its natural course alongside your physiotherapy and any medical care.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Gentle mobility and aftercare advice</h3>
          <p>
            Assisted stretching and gentle mobility work, kept within a comfortable range, help maintain what movement you have without provoking the joint. Just as importantly, an assessment-led session includes advice on posture, sleeping positions and simple movements to do between visits — because what you do at home has a real bearing on how a shoulder settles.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This depends entirely on what is going on. Straightforward muscular or posture-related shoulder tension often improves noticeably within a handful of sessions, particularly when it is paired with changes to your desk set-up and daily habits. A true frozen shoulder is a different matter — it classically runs a long natural course over many months, so treatment here is about ongoing comfort and maintenance rather than a fixed number of sessions with a finish line.
          </p>

          <p>
            Because the two are so different, the honest answer only comes after an assessment. At Range and Restore in Archway, the first session is spent establishing what kind of shoulder problem you have, what massage can realistically offer, and whether you would be better served by seeing a physiotherapist or GP first. You will always leave with a clear picture rather than an open-ended course of treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to see a doctor or physio</h2>

          <p>
            Massage is a valuable part of managing shoulder pain, but it is not the whole answer — especially where a true frozen shoulder is concerned. See a GP or physiotherapist first if your shoulder pain is severe, came on after a fall or injury, is not improving, or if you have the progressive, all-directions stiffness that suggests adhesive capsulitis. Certain warning signs — significant weakness, numbness or pins and needles down the arm, pain following significant trauma, or any pain with fever or feeling generally unwell — need prompt medical assessment rather than massage.
          </p>

          <p>
            Range and Restore works alongside your wider care rather than instead of it, and we will happily coordinate with your GP or physiotherapist. The clinic also operates alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="link-cite">Reliable Scan</a>, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If a <Link href={ROUTES.blog.mskUltrasoundScanMassageArchway} className="link-inline">diagnostic MSK ultrasound</Link> would help clarify what is going on in the shoulder, it can be arranged within the same building.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Where to find shoulder pain treatment near you in North London</h2>

          <p>
            If you have been searching &ldquo;frozen shoulder massage near me&rdquo;, &ldquo;shoulder pain treatment North London&rdquo;, &ldquo;stiff shoulder therapist Archway&rdquo;, &ldquo;massage for shoulder tension London&rdquo; or &ldquo;advanced clinical massage shoulder N19&rdquo;, Range and Restore is set up for exactly this. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden, Kentish Town and the wider North London catchment. Range and Restore is the local option for desk workers and active clients across all of those postcodes who want proper hands-on assessment and treatment for shoulder pain without trekking into central London.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Frozen shoulder: common questions
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

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Don&apos;t let shoulder pain limit you</h2>
          <p className="text-brand-green font-semibold mb-6">
            Assessment-led advanced clinical massage for shoulder pain and tension in Archway, North London — working alongside your GP or physiotherapist where a true frozen shoulder is involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.advancedClinical}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Make a Booking
            </a>
            <a
              href={BOOKING_URLS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-outline"
            >
              Buy a Gift Card
            </a>
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center text-ink font-semibold underline min-h-[44px] sm:ml-2"
            >
              Or ask a question first
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.blog.deskPosturePainMassage} className="link-inline link-inline-tap">
              &rarr; Desk Posture, Neck &amp; Shoulder Pain: How Massage Helps
            </Link>
            <Link href={ROUTES.blog.neckPainMassageArchway} className="link-inline link-inline-tap">
              &rarr; Neck Pain and a Stiff Neck: How Massage Helps
            </Link>
            <Link href={ROUTES.blog.tennisElbowMassageArchway} className="link-inline link-inline-tap">
              &rarr; Tennis Elbow and RSI: Can Soft Tissue Therapy Help?
            </Link>
            <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline link-inline-tap">
              &rarr; Advanced Clinical Massage
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href={ROUTES.blog.index} className="text-brand-teal font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
