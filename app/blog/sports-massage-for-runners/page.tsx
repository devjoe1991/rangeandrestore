import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage for Runners Archway | Race Recovery',
  description: 'Sports massage for runners in Archway, North London. When to book before a race, what a post-race session does, and maintenance massage from 5K to marathon.',
  path: '/blog/sports-massage-for-runners',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Sports Massage for Runners', path: '/blog/sports-massage-for-runners' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Sports Massage Helps Runners Before and After Races',
  description: 'Sports massage for runners in Archway, North London. When to book before a race, what a post-race recovery session does, maintenance massage through a training block, and when a running injury needs a GP or physio.',
  image: 'https://rangeandrestore.co.uk/sports-massage-soft-tissue-therapy-archway-north-london.jpeg',
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
  datePublished: '2026-02-01',
  dateModified: '2026-08-23',
  url: 'https://rangeandrestore.co.uk/blog/sports-massage-for-runners',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sports-massage-for-runners',
  keywords: 'sports massage runners, pre-race massage, post-race recovery massage, marathon training massage, running injury prevention, sports massage Archway London',
}

// Problem-based FAQs — mirror everyday runner search wording so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// queries people search when they have this problem. Answers are grounded in the
// article content; keep the two in sync when editing.
const faqs = [
  {
    q: 'Why are my legs so sore after running?',
    a: 'Sore legs after running come from the repetitive load running puts on the muscles, tendons and connective tissue of the legs, hips and lower back. The heavy, stiff ache a day or two after a hard run is delayed onset muscle soreness (DOMS), caused by tiny amounts of damage to the muscle fibres and the inflammation that follows while they repair. A post-run recovery massage improves blood flow, eases stiffness and helps many runners feel less sore and get back to comfortable training sooner.',
  },
  {
    q: 'Should runners get sports massage?',
    a: 'Yes, it is one of the most useful things you can add to a running programme, from a first 5K to a full marathon. It helps manage tightness, supports recovery between sessions and gives a trained pair of hands the chance to spot problems early. Regular maintenance massage through a training cycle catches the tightness and imbalances that tend to turn into overuse injuries.',
  },
  {
    q: 'Is it better to get a massage before or after a run?',
    a: 'Both have a role, and the timing changes what the session does. A pre-race massage two to five days before race day eases residual tightness and leaves you feeling ready; anything within 24 hours of a race should be light and stimulating rather than deep. A post-race massage 24 to 72 hours afterwards is deeper and more targeted, easing soreness, restoring movement and picking up any new strains.',
  },
  {
    q: 'Why do I get tight calves and hamstrings from running?',
    a: 'The cumulative load of running, particularly when mileage is high, gradually tightens the muscles that do most of the work: calves, hamstrings, quads, glutes and the tissue around the IT band. Without anything to offset it, that tightness shortens your stride and changes how you load your joints. Monthly or fortnightly maintenance massage works these areas with deep tissue techniques and assisted stretching to restore range of movement before the tightness becomes a problem.',
  },
  {
    q: 'Can sports massage help with common running injuries?',
    a: 'It can help with many of the soft tissue problems runners get, including IT band tightness, calf and Achilles tension, hamstring tightness, hip flexor restriction, plantar fasciitis and lower back and glute tension from your running gait. Spotting and easing these early is what stops them developing into injuries that interrupt training. Suspected stress fractures, sudden sharp pain, swelling or numbness need a GP or physio first.',
  },
  {
    q: 'When should a runner see a GP or physio rather than book a massage?',
    a: 'See your GP or a physio first if you have sharp, localised bone pain that gets worse with each run (a possible stress fracture), a sudden pop or snap in the calf or Achilles, swelling, bruising or an inability to bear weight after an injury, numbness or pins and needles, or pain that has not improved after a couple of weeks of reduced running. Chest pain, dizziness or fainting while running needs urgent medical attention. Massage can sit alongside that care but should not replace it.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SportsMassageForRunnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            How Sports Massage Helps Runners Before and After Races
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
            Sports massage helps runners in three ways: a light session a few days before a race eases residual tightness so you start fresh, a deeper session one to three days after a race helps you recover and picks up any new strains, and regular maintenance work through a training block keeps the tightness that leads to injury in check. The timing changes what the session does, so it is worth getting right.
          </p>

          <p>
            Running puts a lot of repetitive load through the muscles, tendons and connective tissue of the legs, hips and lower back. Over a training block, and particularly in the peak weeks, that load builds into tightness, imbalances and, if ignored, injury. At <Link href={ROUTES.about} className="link-inline">Range and Restore in Archway, North London</Link>, sports massage for runners is built around where you are in your training, not a set routine.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When should I have a massage before a race?</h2>

          <p>
            A pre-race massage, usually two to five days before race day, is there to get your legs ready rather than to dig deep. The priorities are easing any residual tightness from training, encouraging blood flow and leaving you feeling loose and ready to go.
          </p>

          <p>Timing matters. Anything within 24 hours of a race should be light and stimulating. A more targeted session a few days out can deal with specific tight spots without leaving the muscles feeling heavy or worked-over on the start line.</p>

          <p>A pre-event session typically includes:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Effleurage and petrissage to warm and mobilise the tissue</li>
            <li>Targeted work on the calves, hamstrings, quads, IT band and glutes</li>
            <li>Assisted stretching to restore range of movement in tight areas</li>
            <li>A check over anything that has been bothering you in training</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What does a post-race massage do?</h2>

          <p>
            After a race, whether a 10K or a marathon, your muscles are dealing with fatigue, small amounts of fibre damage and the inflammation that goes with repairing it. That is what the heavy, stiff ache a day or two later is: delayed onset muscle soreness, or DOMS.
          </p>

          <p>
            A post-event massage 24 to 72 hours after the race is deeper and more targeted than a pre-race session. It improves blood flow to tired tissue, eases stiffness, restores range of movement and gives your therapist the chance to pick up any new strain or niggle that showed up on the day. Massage does not &ldquo;flush out&rdquo; lactic acid, which the body clears on its own within an hour or so, but many runners find they feel less sore and get back to comfortable running sooner.
          </p>

          <p>Benefits of post-race massage include:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Less soreness and stiffness for many runners in the days after the race</li>
            <li>Faster return of normal range of movement</li>
            <li>Early identification of any strains or soft tissue injuries before they get worse</li>
            <li>Improved circulation to tired tissue to support repair</li>
            <li>Less heaviness and swelling in the lower legs</li>
          </ul>

          <p>
            If you are racing a big-city marathon, our <Link href={ROUTES.blog.marathonSportsMassageArchway} className="link-inline">marathon massage guide</Link> goes into the pre- and post-race timing in more detail.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why is maintenance massage during training worth it?</h2>

          <p>
            Beyond race week, regular maintenance massage through a training block is arguably the most valuable use of sports massage for runners. The cumulative load of running, particularly when mileage is high, gradually tightens the muscles that do most of the work and shifts how you load your joints. Left alone, that is the kind of pattern that turns into an injury.
          </p>

          <p>
            Monthly or fortnightly sessions let these issues be found and eased early. Common running problems addressed in maintenance sessions include:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>IT band tightness and iliotibial band syndrome (ITBS)</li>
            <li><Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline">Calf and Achilles tension</Link></li>
            <li><Link href={ROUTES.blog.tightHamstringMassageArchway} className="link-inline">Hamstring tightness and strain</Link></li>
            <li>Hip flexor restriction</li>
            <li><Link href={ROUTES.blog.plantarFasciitisMassageArchway} className="link-inline">Plantar fasciitis</Link> and <Link href={ROUTES.blog.shinSplintsMassageArchway} className="link-inline">shin splints</Link></li>
            <li>Lower back and glute tension from your running gait</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What to expect from a runner&rsquo;s session in Archway</h2>

          <p>
            Every session at Range and Restore begins with a short assessment. For runners that means your training history, recent mileage, anything that has been niggling and your upcoming race schedule, so the <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports massage</Link> is shaped around where you are in your training cycle rather than a generic routine.
          </p>

          <p>
            Sessions are 30, 60 or 90 minutes, from £50. A 30-minute session works well for a focused follow-up on one area such as the calves. A 90-minute session allows a thorough full-body assessment and treatment, which is useful in the weeks before a big race or during a heavy training block.
          </p>

          <p>
            Staying well <Link href={ROUTES.blog.hydrationAndMuscleHealth} className="link-inline">hydrated before and after your session</Link> helps the tissue respond to treatment and helps you recover between runs.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When should a runner see a GP or physio instead?</h2>

          <p>
            Most running niggles are soft tissue problems and massage is the right call. Some are not. See your GP or a physio first if you have sharp, localised bone pain that gets worse with every run (a possible stress fracture), a sudden pop or snap in the calf or Achilles, swelling, bruising or an inability to bear weight after an injury, numbness or pins and needles, or pain that has not improved after a couple of weeks of reduced running. Chest pain, dizziness or fainting while running needs urgent medical attention. Our therapists will tell you if what you describe needs assessing elsewhere, and a <Link href={ROUTES.blog.mskUltrasoundScanMassageArchway} className="link-inline">diagnostic MSK ultrasound</Link> with Reliable Scan is available in the same building if imaging would help.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Sports massage for runners near you in North London</h2>

          <p>
            If you have been searching &ldquo;sports massage for runners near me&rdquo;, &ldquo;runners massage North London&rdquo;, &ldquo;post race massage London&rdquo;, &ldquo;10K recovery massage&rdquo;, &ldquo;half marathon massage Archway&rdquo; or &ldquo;deep tissue for runners N19&rdquo;, Range and Restore is the local option. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves runners across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That includes runners training on Hampstead Heath, Parkland Walk, Highgate Wood, Alexandra Palace, Regent&rsquo;s Park and the canal paths, from Archway, Tufnell Park, Holloway, Highgate, Hampstead, Crouch End, Finsbury Park, Muswell Hill, Stroud Green, Islington, Camden, Kentish Town and Belsize Park. Race prep, post-race recovery and ongoing maintenance work, all under one roof.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">Sports massage for runners: common questions</h2>
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
          <h2 className="text-2xl font-black text-ink mb-4">Race well, recover properly</h2>
          <p className="text-brand-green font-semibold mb-6">
            Pre-race preparation, post-race recovery and maintenance massage for runners at Range and Restore in Archway, North London.
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
            <Link href={ROUTES.blog.marathonSportsMassageArchway} className="link-inline link-inline-tap">
              &rarr; Marathon Massage in Archway: Pre and Post Race Recovery Guide
            </Link>
            <Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline link-inline-tap">
              &rarr; Does Massage Help Achilles Tendinitis?
            </Link>
            <Link href={ROUTES.blog.shinSplintsMassageArchway} className="link-inline link-inline-tap">
              &rarr; Shin Splints: How Sports Massage Supports Recovery
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
