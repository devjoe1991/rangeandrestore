import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sciatica Treatment in North London: Why the Painful Spot Is Rarely the Problem',
  description: 'Sciatic-type pain in your back, glute or down your leg? Why rubbing the sore spot is rarely enough, and how assessment-led sports massage in Archway and Islington works. North London.',
  path: '/blog/sciatica-treatment-north-london',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Sciatica Treatment in North London', path: '/blog/sciatica-treatment-north-london' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sciatica Treatment in North London: Why the Painful Spot Is Rarely the Problem',
  description: 'What sciatica actually is, what causes sciatic-type pain, why massaging only the painful area often falls short, and how assessment-led sports and remedial massage at Range and Restore in Archway treats the individual presentation. Serving Archway, Islington and North London.',
  image: 'https://rangeandrestore.co.uk/advanced-clinical-massage-assessment-treatment-room-range-and-restore-archway-north-london.jpg',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Founder & Lead Therapist',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  url: 'https://rangeandrestore.co.uk/blog/sciatica-treatment-north-london',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sciatica-treatment-north-london',
  keywords: 'sciatica treatment North London, sciatica massage, sports massage for sciatica, lower back pain treatment, back pain massage, hip and glute pain, trapped sciatic nerve, irritated sciatic nerve, sports massage Archway, sports massage Islington, sports massage North London',
}

// Problem-based FAQs — deliberately mirror the question-shaped headings in the
// article so the page is eligible for People Also Ask / FAQ rich results on the
// exact queries people type when they have sciatic-type pain. Answers are
// grounded in the article copy and stay inside scope of practice — no claims
// that massage resolves disc or nerve-root compression. Keep the two in sync.
const faqs = [
  {
    q: 'What is the best treatment for sciatica in North London?',
    a: 'There is no single best treatment, because sciatica is a description of symptoms rather than one condition. What matters is finding out what is irritating the nerve in your particular case. Where the picture is largely muscular — tight glutes, deep hip rotators, hamstrings or lower-back muscles — assessment-led sports and remedial massage is a sensible first step. Where the presentation points to a disc, a nerve root or something that needs imaging, the right move is a GP, physiotherapy or a diagnostic scan. At Range and Restore in Archway our therapists assess first and tell you honestly which of those you are looking at.',
  },
  {
    q: 'Can sports massage help sciatica?',
    a: 'It can, when the pain is being driven or amplified by muscular tension and restricted movement. Releasing the glutes, deep hip rotators, hamstrings and lower back reduces the load and compression around the path of the sciatic nerve, and restoring hip and lumbar mobility takes the strain off the tissue that is complaining. It is not a cure and it cannot reposition a disc, but for a large number of people with sciatic-type pain it makes a real difference to comfort and movement.',
  },
  {
    q: 'Why does massaging the painful area not fix my sciatica?',
    a: 'Because with nerve-related pain the place you feel it is usually not the place causing it. Sciatic pain travels along the nerve, so pain down the back of the thigh or into the calf is often generated much higher up — in the glute, the deep hip rotators, the pelvis or the lower back. Working only where it hurts can give brief relief but leaves the source untouched, which is why the symptoms tend to return within a day or two.',
  },
  {
    q: 'Is sciatica coming from my back or my hip?',
    a: 'Both are common and they can feel similar from the outside. Pain that is worse when sitting or bending, and that follows a clear line down the leg, more often has a lumbar component. Pain that is worse when you press into the buttock, sit on a hard chair or cross your legs, and settles when you loosen the hip, more often involves the deep glute and hip rotators. This is exactly what an assessment is for — testing movement rather than guessing from where you can feel it.',
  },
  {
    q: 'How long does it take to see improvement with sciatic pain?',
    a: 'It depends on what is driving it and how long it has been there. Where the presentation is largely muscular, people commonly notice a change over the first two or three sessions and a more settled picture across four to six, alongside changes to sitting, movement and load. Longer-standing or nerve-root related symptoms take longer and usually need input from a physiotherapist or GP alongside hands-on work.',
  },
  {
    q: 'When should I see a doctor instead of booking a massage?',
    a: 'See a GP or physiotherapist first if the pain is severe, steadily worsening, or has not improved at all over several weeks. Seek urgent medical help for numbness spreading across the saddle or inner-thigh area, significant or progressive weakness in the leg or foot, or any loss of bladder or bowel control. If your therapist sees a presentation that needs investigating rather than treating, they will say so and point you towards the right assessment.',
  },
  {
    q: 'Do you treat sciatica in Archway and Islington?',
    a: 'Yes. Range and Restore is at 130 Junction Road, Archway, N19 5LB, two minutes from Archway tube on the Northern Line, and clients travel in from across Islington, Holloway, Tufnell Park, Highgate, Crouch End, Finsbury Park, Camden and Kentish Town. Sciatic-type pain, lower back pain and hip and glute pain are among the most common reasons people book with us.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SciaticaTreatmentNorthLondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sciatica Treatment in North London: Why the Painful Spot Is Rarely the Problem
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-08-31">31 August 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            You know the shuffle. Standing up from your desk at half four, one hand braced on the chair, waiting to see which version of your back you have got today.
          </p>

          <p>
            It usually starts small. A dull ache low on one side that you put down to a bad chair or a heavy week. Then one morning it is not just the back — there is a deep, mean ache in the buttock that you cannot get your thumb into, and something electric running down the back of the thigh. Sitting on the Northern Line makes it worse. Driving makes it worse. Standing up after an hour makes you catch your breath.
          </p>

          <p>
            So you do what everyone does. You stretch the hamstring, because that is where you feel it. You buy a foam roller and grind away at the glute. You get a deep tissue massage and ask them to really get into the sore spot, and for about a day and a half it is glorious. Then it comes back.
          </p>

          <p>
            That cycle is one of the most common reasons people walk into our clinic in Archway. And the reason it keeps repeating is not that you have not tried hard enough. It is that with sciatic-type pain, the place you feel it and the place causing it are frequently not the same place.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What sciatica actually is</h2>

          <p>
            Sciatica is not a diagnosis. It is a description of a set of symptoms produced when the sciatic nerve — the longest nerve in the body, running from the lower back, through the buttock and down the back of each leg to the foot — is compressed or irritated somewhere along its route.
          </p>

          <p>
            That distinction matters more than it sounds. Two people can both say &ldquo;I have got sciatica&rdquo; and have completely different problems: one with a lumbar disc pressing on a nerve root, the other with a deep hip rotator that has been overloaded by eighteen months of cycling and sitting. Same word, same shooting pain down the leg, entirely different treatment. Anyone who offers you a single fix for &ldquo;sciatica&rdquo; without looking at you first is guessing.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Common symptoms of an irritated sciatic nerve</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Pain that travels — from the lower back or buttock down the back of the leg, sometimes to the calf or foot — rather than staying in one spot</li>
            <li>A sharp, burning or electric quality, quite different from ordinary muscular soreness</li>
            <li>Usually one side only</li>
            <li>Pins and needles, tingling or numbness in the leg or foot</li>
            <li>A sense of weakness, or a leg that feels unreliable on stairs</li>
            <li>Worse after long periods of sitting, and often at its sharpest in the first few seconds of standing</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes sciatic-type pain</h2>

          <p>
            The nerve can be irritated at several points along its length, and the contributors we see most often are:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-page">Tension in the glutes and deep hip rotators.</strong> These muscles sit directly over the path of the nerve. When they are overloaded and guarded, they can irritate it — and they refer pain down the leg in a pattern that mimics nerve pain closely enough to fool most people.</li>
            <li><strong className="text-page">Load through the lower back and pelvis.</strong> Lumbar and hip muscles working overtime to stabilise a pelvis that is not moving evenly, often for years before anything hurts.</li>
            <li><strong className="text-page">Prolonged sitting.</strong> Long commutes, long meetings, long evenings on a laptop. Hip flexors shorten, glutes switch off, and the lower back picks up the slack.</li>
            <li><strong className="text-page">A change in load.</strong> A new running block, a house move, a return to the gym after a lay-off, a marathon build, or a job that suddenly involves lifting.</li>
            <li><strong className="text-page">Structural causes in the spine.</strong> A disc bulge or age-related change pressing on a nerve root. This is a medical matter and needs proper assessment — it is not something massage resolves, and we will not pretend otherwise.</li>
            <li><strong className="text-page">Hamstring and calf involvement.</strong> Often secondary, but persistent tightness along the back of the leg frequently comes along for the ride and adds to the discomfort.</li>
          </ul>

          <p>
            In practice these overlap. A desk worker with tight hips, an under-used posterior chain and a bad week of lifting is a very ordinary presentation, and it is rarely one clean cause.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why massaging the painful area is not always enough</h2>

          <p>
            Nerve pain refers. That is the whole difficulty. If a nerve is being irritated in your buttock, you may feel it most keenly halfway down your hamstring — and no amount of skilled work on that hamstring will change what is happening at the buttock. You get an hour of relief from the local blood flow and the endorphins, and then the source reasserts itself.
          </p>

          <p>
            There is a second reason. Pain makes you move differently. You stop loading that side properly, you sit at an angle, you brace. Within weeks the muscles around the area have adopted a protective pattern of their own, and now you have a secondary layer of tension sitting on top of the original problem. Treat only the sore spot and you are working on the newest layer, not the oldest.
          </p>

          <p>
            And a third: sometimes the honest answer is that the presentation is not a soft tissue problem at all. Digging harder into a glute will not help a nerve root under pressure from a disc, and a therapist who keeps going regardless is doing you no favours. Knowing when to treat and when to refer is part of the job.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why the individual presentation matters</h2>

          <p>
            Two clients arrive in the same week, both with pain from the lower back into the right buttock and down the leg.
          </p>

          <p>
            The first is a cyclist. Their pain is worse after a long ride, better when they walk, and eases when the hips are loosened off. Hip extension is restricted on that side, the deep rotators are exquisitely tender, and the pain reproduces when those muscles are loaded. That is a soft tissue and mobility picture, and hands-on work has a great deal to offer it.
          </p>

          <p>
            The second sits at a desk all day. Their pain is worse first thing, worse when bending forwards, sharper when coughing, and travels below the knee with pins and needles in the foot. That is a different pattern, and it needs a different conversation — one that may well involve a GP, a physiotherapist or imaging before anyone starts treating the muscles.
          </p>

          <p>
            Both would be handed the same routine by a one-size-fits-all approach. Only one of them would be well served by it. Working out which is which is the single most useful thing a therapist does in the first appointment, and it is why we assess before we treat.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we approach sciatic-type pain at Range and Restore</h2>

          <p>
            Range and Restore is a sports and remedial massage clinic at 130 Junction Road in Archway, staffed by a <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>. Level 5 is the qualification level at which therapists are trained to assess, reason clinically and adapt treatment to the person in front of them, rather than deliver a fixed routine. For a problem as varied as sciatic-type pain, that is the difference that counts.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">We assess first</h3>
          <p>
            Your first appointment starts with a proper conversation and a physical assessment. What does the pain feel like, where does it travel, what makes it worse, what makes it better, what changed in the weeks before it started, how are you sleeping and sitting. Then your therapist looks at how you actually move — hip and lumbar range of motion, how you load each side, which tissues are tender and which reproduce your symptoms when tested. The aim is to build a picture of your presentation, not to match you to a template. A <Link href={ROUTES.services.backNeckPainMot} className="link-inline">back and neck pain MOT</Link> is a good option if you want that mapping to be the focus of the session.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Then we tailor the treatment</h3>
          <p>
            What happens next depends entirely on what the assessment found. Depending on the findings, treatment may draw on:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Sports and remedial massage to the glutes, deep hip rotators, lower back, hamstrings and surrounding tissue</li>
            <li>Myofascial release, where restriction through the fascia is limiting how an area moves</li>
            <li>Soft tissue techniques including trigger point work on the areas that reproduce your referred symptoms</li>
            <li>Muscle Energy Techniques (MET) to reduce tone and improve length in guarded muscles</li>
            <li>Assisted stretching, taking the hips and posterior chain through range with the therapist controlling the load</li>
            <li>Mobility work through the hips, pelvis and lumbar spine</li>
            <li>Joint mobilisation where appropriate to the presentation</li>
            <li>Advice on sitting, movement and load between sessions, plus any home work worth doing</li>
          </ul>

          <p>
            The goals are practical rather than grand: reduce the muscular tension contributing to the irritation, improve mobility and range of motion through the hips and lower back, ease the protective guarding that has built up, and support your recovery so that you can sit, walk, train and sleep with less interference. For many people that combination is what finally breaks the cycle that stretching and rolling could not. Our <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> and <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link> are the two treatments this work most often sits within.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">And we tell you when it is not a massage problem</h3>
          <p>
            Massage cannot reposition a disc, decompress a nerve root or reverse structural change in the spine, and nobody honest will tell you it can. If your assessment suggests something that needs investigating — symptoms below the knee that are not settling, neurological signs, a pattern that does not fit a soft tissue cause, or simply a lack of progress over a reasonable number of sessions — your therapist will say so and recommend the appropriate next step rather than book you in for another six weeks.
          </p>

          <p>
            That might mean your GP, a physiotherapist, or diagnostic imaging. Range and Restore shares 130 Junction Road with <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="link-cite">Reliable Scan</a>, a private diagnostic ultrasound clinic, so if a scan is worth having we can point you at it in the same building. Our guide to <Link href={ROUTES.blog.mskUltrasoundScanMassageArchway} className="link-inline">MSK ultrasound scans</Link> covers when imaging is and is not useful.
          </p>

          <p>
            Some symptoms need urgent medical attention rather than any of the above: numbness spreading across the saddle or inner-thigh area, significant or progressive weakness in the leg, or any loss of bladder or bowel control. If you have any of those, go to A&amp;E or call 111 — do not book a massage.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Sciatica, lower back and glute pain treatment in Archway, Islington and North London</h2>

          <p>
            If you have been searching for sciatica treatment in North London, sciatica massage, sports massage for sciatica, lower back pain treatment or help with hip and glute pain, this clinic is set up for exactly that kind of work. Range and Restore is at 130 Junction Road, Archway, London N19 5LB — two minutes from <Link href={ROUTES.areasServed.archwayN19} className="link-inline">Archway</Link> tube on the Northern Line, and an easy run in from <Link href={ROUTES.areasServed.islingtonN1} className="link-inline">Islington</Link>, <Link href={ROUTES.areasServed.hollowayN7} className="link-inline">Holloway</Link>, <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link>, <Link href={ROUTES.areasServed.highgateN6} className="link-inline">Highgate</Link>, <Link href={ROUTES.areasServed.crouchEndN8} className="link-inline">Crouch End</Link>, <Link href={ROUTES.areasServed.finsburyParkN4} className="link-inline">Finsbury Park</Link> and <Link href={ROUTES.areasServed.kentishTownNw5} className="link-inline">Kentish Town</Link>.
          </p>

          <p>
            That covers N19, N7, N6, N4, N8, N1, NW1 and NW5 — most of North London within a short bus or tube ride. If you want the detail on neighbouring problems, our guides to <Link href={ROUTES.blog.lowerBackPainMassageArchway} className="link-inline">lower back pain</Link>, <Link href={ROUTES.blog.hipPainMassageArchway} className="link-inline">hip pain and tight hips</Link>, <Link href={ROUTES.blog.tightHamstringMassageArchway} className="link-inline">tight hamstrings</Link> and <Link href={ROUTES.blog.sciaticaMassageArchway} className="link-inline">sciatica and trapped nerve pain</Link> go further into each.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Sciatic pain: common questions
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
          <h2 className="text-2xl font-black text-ink mb-4">Stop guessing where the pain is coming from</h2>
          <p className="text-brand-green font-semibold mb-6">
            If persistent lower back, glute or sciatic-type pain has been dictating how you sit, sleep and train, book an initial consultation and treatment at Range and Restore. Your therapist will assess you properly, tell you honestly what they find, and treat the presentation in front of them — or point you towards the right person if that is what you need. Archway, N19, two minutes from the tube.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.advancedClinical}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Book an Initial Consultation &amp; Treatment
            </a>
            <a
              href={BOOKING_URLS.sportsDeepTissue}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-outline"
            >
              Book Sports &amp; Deep Tissue Massage
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
            <Link href={ROUTES.blog.sciaticaMassageArchway} className="link-inline link-inline-tap">
              &rarr; Sciatica and Trapped Nerve Pain: Can Massage Help?
            </Link>
            <Link href={ROUTES.blog.lowerBackPainMassageArchway} className="link-inline link-inline-tap">
              &rarr; Lower Back Pain: How Massage Can Help
            </Link>
            <Link href={ROUTES.blog.hipPainMassageArchway} className="link-inline link-inline-tap">
              &rarr; Hip Pain and Tight Hips: How Massage Helps
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
