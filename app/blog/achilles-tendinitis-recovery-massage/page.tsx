import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Does Massage Help Achilles Tendinitis (Tendonitis)? A Therapist Explains',
  description: "Does massage help Achilles tendinitis, or tendonitis as it is often spelled? Yes, done the right way. How it eases the tight calves behind the pain, healing times and when to see a GP. Archway, N19.",
  path: '/blog/achilles-tendinitis-recovery-massage',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Achilles Tendinitis Recovery', path: '/blog/achilles-tendinitis-recovery-massage' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Achilles Tendinitis – How Sports Massage Helps Recovery',
  description: 'Does massage help Achilles tendinitis, also commonly spelled Achilles tendonitis? How sports massage and soft tissue therapy in Archway, North London ease the tight calf muscles behind the pain, whether it is safe, how long recovery takes and when to see a GP or physio.',
  image: 'https://rangeandrestore.co.uk/sports-massage-treatment-room-couch-range-and-restore-archway-north-london.jpeg',
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
  datePublished: '2026-02-01',
  dateModified: '2026-08-23',
  url: 'https://rangeandrestore.co.uk/blog/achilles-tendinitis-recovery-massage',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/achilles-tendinitis-recovery-massage',
  keywords: 'Achilles tendinitis massage, Achilles tendonitis massage, does massage help Achilles tendonitis, can you massage Achilles tendonitis, Achilles tendon recovery, sports massage Archway, calf pain treatment, running injury massage London, soft tissue therapy Achilles',
}

// Problem-based FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Does massage help Achilles tendinitis (tendonitis)?',
    a: 'It can, as one part of a wider plan. The work goes into the tight calf muscles pulling on the tendon, and the hips and legs above, while the sore tendon itself is left alone. Most people also need to cut back the aggravating load for a while and do calf strengthening exercises.',
  },
  {
    q: 'Is Achilles tendonitis the same as Achilles tendinitis?',
    a: 'Yes, they are two spellings of the same problem. If it has been going on for several months, clinicians usually call it Achilles tendinopathy, which responds better to a loading programme than to rest.',
  },
  {
    q: 'Should you massage an inflamed Achilles tendon directly?',
    a: 'No. Firm pressure on an irritated tendon can make it angrier. A trained therapist works the calf and lower-leg muscles around it instead.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Many early, mild cases feel noticeably better within three to six sessions. Longer-standing cases can take a few months of treatment alongside exercises. Your therapist will give you an honest idea after the first assessment.',
  },
  {
    q: 'When should I see a doctor instead of booking a massage?',
    a: 'If you felt a pop or snap, cannot stand on tiptoe on that leg, or have marked swelling or bruising, see your GP, a physio or A&E first, as these can be signs of a tear. The same goes for heat, redness, fever or numbness in the foot.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function AchillesTendinitisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Achilles Tendinitis – How Sports Massage Helps Recovery
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-02-01">1 February 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Yes, massage can help Achilles tendinitis, provided it is done the right way. The tendon itself is not the target: the work goes into the tight calf muscles that are pulling on it and the movement patterns further up the leg that overload it, while the sore tendon is left alone. Combined with sensible load management and calf strengthening, that takes tension off the Achilles and gives it a better chance to settle. It is one of the most common overuse injuries we see in <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline">runners</Link> at Range and Restore in Archway, North London, and it is treated with assessment-led <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports massage and soft tissue therapy</Link>.
          </p>

          <p>
            A quick note on spelling, because it trips people up when they are searching: you will see this written as both <strong className="text-page">Achilles tendinitis</strong> and <strong className="text-page">Achilles tendonitis</strong>. They are the same condition. Tendinitis is the medically correct form, tendonitis is the far more common spelling in everyday use, and clinicians increasingly use tendinopathy for the longer-standing degenerative version. Whichever you typed to get here, this article is about your problem.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is Achilles tendinitis?</h2>

          <p>
            The Achilles tendon connects the calf muscles, the gastrocnemius and soleus, to the heel bone (calcaneus). It is the largest tendon in the body and handles very high loads during running, jumping and walking. Achilles tendinitis is an overuse injury involving irritation and, in longer-standing cases, degeneration of the tendon, typically at the mid-portion or where it attaches to the heel. Left unmanaged it can go from a nagging stiffness to something that keeps you off your feet for months.
          </p>

          <p>
            Common symptoms include pain and stiffness in the tendon, particularly first thing in the morning or after sitting for a while, swelling, tenderness to touch, and pain that worsens with activity and improves with rest, at least in the early stages.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What causes it?</h2>

          <p>Achilles tendinitis is most commonly caused by:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>A sudden increase in training load or mileage</li>
            <li>Inadequate recovery between training sessions</li>
            <li>Tight calf muscles that place excessive tension on the tendon</li>
            <li>Weak hip and glute muscles that alter running mechanics</li>
            <li>Poor footwear or a change in running surface</li>
            <li>Returning to activity too quickly after a period of rest</li>
          </ul>

          <p>
            The underlying issue is often not just in the tendon itself, but in the surrounding muscles, particularly the calf complex, which have become so tight and overloaded that the tendon is under constant excessive tension.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How sports massage supports recovery</h2>

          <p>
            Sports massage and soft tissue therapy address Achilles tendinitis by working on the muscle and fascial tension that is contributing to the problem, rather than on the tendon itself. Direct work on an acutely inflamed tendon should be avoided; working the surrounding tissue is appropriate and usually makes a real difference.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Reducing calf muscle tension</h3>
          <p>
            The gastrocnemius and soleus muscles are almost always a central part of the problem. Deep tissue massage, trigger point therapy and soft tissue release applied to these muscles reduce the tension they are transmitting to the tendon, which often eases the pain noticeably and gives the tendon a better environment to settle in.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Addressing the full kinetic chain</h3>
          <p>
            Because Achilles tendinitis is often driven by loading and movement patterns further up the leg, particularly the hamstrings, glutes and hip flexors, effective treatment looks beyond the calf alone. An assessment-led session identifies the areas of tightness or weakness contributing to the problem and addresses them as part of the same treatment.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Improving tissue health and circulation</h3>
          <p>
            Tendons have a relatively poor blood supply compared with muscle, which is one of the reasons they are slow to heal. Massage may increase local circulation in the surrounding tissue, and many clients find the area feels less stiff afterwards.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Myofascial release and mobility work</h3>
          <p>
            Restrictions in the fascia around the calf and lower leg can alter mechanics and increase tendon load. Myofascial release addresses those restrictions, while assisted stretching and mobility work help restore usable range of movement at the ankle and the joints around it.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            It varies with how severe the tendinitis is, how long you have had it, your training load and how consistently you can attend. Mild to moderate cases caught early often respond well within 3–6 sessions. Longer-standing or more severe cases may need ongoing management over several months.
          </p>

          <p>
            Between sessions, relative rest (reducing running volume without necessarily stopping altogether) combined with the right loading exercises, typically eccentric calf work prescribed by a physio or sports rehab specialist, is usually recommended. Staying well <Link href={ROUTES.blog.hydrationAndMuscleHealth} className="link-inline">hydrated</Link> supports general recovery. At Range and Restore, advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Can massage make Achilles tendinitis worse?</h2>

          <p>
            This is one of the most common worries, and the answer is that, done properly, massage should not make Achilles tendinitis worse. The key is technique. A trained therapist avoids heavy, direct pressure on the acutely inflamed tendon and works the surrounding calf and lower-leg muscles instead, where much of the excess tension comes from. Aggressive prodding of an angry tendon can aggravate it, which is exactly why assessment-led treatment and the right level of pressure matter.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Can you massage your Achilles at home?</h2>

          <p>
            Between sessions, gentle self-care can help. You can massage and stretch the calf muscles above the tendon with your hands, a <Link href={ROUTES.blog.muscleKnotsTriggerPointMassageArchway} className="link-inline">massage ball or a foam roller</Link> to reduce the tension pulling on the Achilles. What you should not do is dig directly into the sore tendon itself, particularly when it is inflamed. Pair this with the loading exercises your therapist or physio recommends.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How long does Achilles tendinitis take to heal?</h2>

          <p>
            There is no single answer, because it depends on how severe the problem is and how early you catch it. A mild, recent case that is managed well, by reducing the aggravating load, releasing the calf and doing the right exercises, can settle within a few weeks. Longer-standing or degenerative cases (often called Achilles tendinopathy) commonly take a few months of consistent work. Tendons heal slowly because they have a relatively poor blood supply, so patience and consistency beat rushing back. The same principles apply to related lower-leg problems such as <Link href={ROUTES.blog.shinSplintsMassageArchway} className="link-inline">shin splints</Link> and <Link href={ROUTES.blog.plantarFasciitisMassageArchway} className="link-inline">plantar fasciitis</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When should I see a GP or physio instead?</h2>

          <p>
            Sports massage is a useful part of managing Achilles tendinitis, but it works best alongside load management and strengthening, and some presentations need a doctor first. See your GP, a physio or A&amp;E before booking a massage if:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>You felt a sudden pop or snap at the back of the ankle, or were kicked or struck there</li>
            <li>You cannot push off the foot, stand on tiptoe on that leg or walk normally</li>
            <li>There is marked swelling, bruising or a gap you can feel in the tendon (possible partial or complete rupture)</li>
            <li>The pain is severe or has suddenly got much worse</li>
            <li>The area is hot, red or you have a fever, or you have numbness or pins and needles in the foot</li>
            <li>It has not improved after several weeks of sensible load management and treatment</li>
          </ul>

          <p>
            Range and Restore works alongside <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="link-cite">Reliable Scan</a>, a private diagnostic ultrasound clinic in the same building at 130 Junction Road, Archway. If imaging is needed to rule out a tear or something more serious, a <Link href={ROUTES.blog.mskUltrasoundScanMassageArchway} className="link-inline">diagnostic MSK ultrasound</Link> can be arranged under the same roof, and our therapists will say so if they think you need one.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Achilles treatment in Archway</h2>

          <p>
            Range and Restore is at 130 Junction Road, Archway, N19, a short walk from Archway and Tufnell Park stations. Runners and walkers come to us from Tufnell Park, Holloway, Highgate, Crouch End, Kentish Town and further afield. Sessions are 30, 60 or 90 minutes, from £50, and every one starts with an assessment of the calf, ankle and the rest of the leg.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Achilles tendinitis: common questions
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
          <h2 className="text-2xl font-black text-ink mb-4">Take the tension off your Achilles</h2>
          <p className="text-brand-green font-semibold mb-6">
            Assessment-led sports massage and soft tissue therapy for Achilles tendinitis, working on the cause rather than the sore spot, in Archway, North London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.sportsDeepTissue}
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
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
            </Link>
            <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline link-inline-tap">
              &rarr; How Sports Massage Helps Runners Before and After Races
            </Link>
            <Link href={ROUTES.blog.shinSplintsMassageArchway} className="link-inline link-inline-tap">
              &rarr; Shin Splints – How Sports Massage Supports Recovery
            </Link>
            <Link href={ROUTES.blog.plantarFasciitisMassageArchway} className="link-inline link-inline-tap">
              &rarr; Plantar Fasciitis and Heel Pain – How Sports Massage Helps
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
