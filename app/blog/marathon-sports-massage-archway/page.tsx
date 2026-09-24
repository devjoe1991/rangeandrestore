import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Marathon Massage in Archway | Pre & Post London Marathon Recovery',
  description: 'Pre and post marathon sports massage in Archway, North London, from therapists who have worked at marathon events and treat runners in clinic.',
  path: '/blog/marathon-sports-massage-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Marathon Massage Archway', path: '/blog/marathon-sports-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Marathon Massage in Archway: Your Pre and Post Race Recovery Guide',
  description: 'Marathon preparation and recovery massage in Archway, North London. Pre-marathon and post-marathon sports massage from therapists who have worked at marathon events.',
  image: 'https://lh3.googleusercontent.com/p/AF1QipPwlk_sqmDIVY-g-_dlBgZ4lW0vG1R-m6SyKK0O=s680-w680-h510-rw',
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
  datePublished: '2026-04-13',
  dateModified: '2026-04-13',
  url: 'https://rangeandrestore.co.uk/blog/marathon-sports-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/marathon-sports-massage-archway',
  keywords: 'marathon massage Archway, London Marathon massage, pre marathon massage, post marathon recovery massage, marathon sports massage North London, marathon injury prevention massage',
}

// Problem-based FAQs — mirror the question-shaped searches people make around
// marathon massage so the page is eligible for People Also Ask / FAQ rich
// results and AI answers. Answers are grounded in the article content; keep the
// two in sync when editing.
const faqs = [
  {
    q: 'Should I get a sports massage before or after a marathon?',
    a: 'Both have their place. A pre-marathon massage 3 to 7 days before race day releases the tension built up through months of training and restores range of motion so you arrive at the start line feeling loose rather than worked over. A post-marathon recovery massage within 24 to 72 hours of finishing may ease soreness and tightness, and many runners find it helps them feel looser as they return to training. Which one you book depends on where you are in your marathon cycle.',
  },
  {
    q: 'How long before race day should I book my marathon massage?',
    a: 'Aim for 3 to 7 days before the race. That leaves time for any tenderness to settle, so you start feeling loose rather than sore. Keep it moderate: race week is not the time for your first deep, heavy session.',
  },
  {
    q: 'Will a massage the day before a marathon help or hurt?',
    a: 'Leaving it that late is not ideal. A deep session too close to race day can leave you sore and flat when you need to be sharp, which is why the recommended window is 3 to 7 days out — enough time for your body to absorb the treatment and settle. If race day is nearly here, any pre-race work should be light and targeted rather than a deep, muscle-stripping session.',
  },
  {
    q: 'Why do my legs feel so dead and sore after a marathon?',
    a: 'After 26.2 miles your legs are dealing with small tears in the muscle fibres, inflammation and 3 to 5 hours of repeated impact. The calves, hamstrings and hip flexors tighten under that load, which is why the legs feel dead and stiff for a few days. This is delayed onset muscle soreness (DOMS), and it usually eases with time, gentle movement, food and sleep. Pain that is sharp, one-sided or getting worse should be checked by a GP or physio.',
  },
  {
    q: 'How soon after a marathon should I get a recovery massage?',
    a: 'Most runners book 24 to 72 hours after finishing. If your legs are too tender to touch on day one, wait another day. Many runners find a session in that window eases soreness and tightness and helps them move more comfortably while their body does its own repair.',
  },
]

const faqSchema = buildFaqSchema(faqs)

const MARATHON_PHOTOS = [
  { src: '/giving-back/carlos-bonvicine-post-race-leg-massage-phab-runner-tcs-london-marathon.jpg', alt: 'Carlos Bonvicine giving a post-race leg massage to a Phab runner at the TCS London Marathon' },
  { src: '/giving-back/carlos-bonvicine-post-race-shoulder-massage-phab-runner-tcs-london-marathon.jpg', alt: 'Post-race shoulder massage for a Phab runner at the TCS London Marathon recovery tent' },
  { src: '/giving-back/carlos-bonvicine-phab-runner-tcs-london-marathon-post-race-sports-massage.jpg', alt: 'Carlos Bonvicine treating a Phab runner with post-race sports massage at the TCS London Marathon' },
  { src: '/giving-back/carlos-bonvicine-phab-runner-finisher-medal-tcs-london-marathon-recovery-tent.jpg', alt: 'Phab runner with finisher medal receiving recovery massage at the TCS London Marathon' },
  { src: '/giving-back/carlos-bonvicine-massage-couch-phab-recovery-tent-tcs-london-marathon.jpg', alt: 'Massage couch set up in the Phab recovery tent at the TCS London Marathon' },
  { src: '/giving-back/phab-volunteer-massage-team-tcs-london-marathon-recovery-tent-range-and-restore.jpg', alt: 'Phab volunteer massage team including Range and Restore at the TCS London Marathon recovery tent' },
]

export default function MarathonSportsMassageArchwayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub &middot; Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Marathon Massage in Archway: Your Pre and Post Race Recovery Guide
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-04-13">13 April 2026</time>
            <span>&middot;</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPwlk_sqmDIVY-g-_dlBgZ4lW0vG1R-m6SyKK0O=s680-w680-h510-rw"
            alt="Carlos Bonvicine providing sports massage at a marathon event — Range and Restore Sports Massage, Archway, North London"
            width={680}
            height={510}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Training for a marathon means months of building mileage, grinding through long runs and testing your limits. The training plan is only part of it. How you look after your soft tissue before and after those 26.2 miles can make a real difference to how the race and the week after it feel.
          </p>

          <p>
            At <Link href={ROUTES.about} className="link-inline">Range and Restore Sports Massage in Archway, North London</Link>, our therapists work with marathon runners at events and in clinic, both in the build-up to race day and in the days after the finish. That hands-on experience shapes how we treat runners, because we have seen first-hand what 26.2 miles does to the body.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who this is for</h2>

          <p>
            If any of the following sounds familiar, this is written for you:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>First-time marathon runners who have never put their body through anything like this before</li>
            <li>Experienced runners who know the toll 26.2 miles takes and want to manage it properly</li>
            <li>Anyone mid-training cycle with tightness, niggles, or areas that have been getting worse week on week</li>
            <li>Runners who have already finished a race and want help recovering</li>
          </ul>

          <p>
            Whether the London Marathon is still ahead of you or already behind you, the right treatment at the right time can help.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to book your marathon massage</h2>

          <p>
            Timing matters. The wrong session at the wrong time can leave you flat on race day, while the right session in the right window can help you start the race feeling loose.
          </p>

          <p className="font-semibold text-page">Before the marathon — 3 to 7 days out</p>

          <p>
            A pre-marathon massage should not be a deep session that strips the muscles down, because that can leave you sore and fatigued when you need to be sharp. The aim is targeted preparation: easing training tension and restoring range of motion in the areas that have tightened over months of mileage.
          </p>

          <p>
            The sweet spot is 3 to 7 days before race day. This gives your body time to absorb the treatment and settle, so you arrive at the start line feeling loose and ready rather than worked over.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Releases tension built up through months of training without destabilising the muscles</li>
            <li>Improves range of motion in the hips, ankles, and thoracic spine</li>
            <li>Many runners find it helps their legs feel fresher going into race week</li>
            <li>Identifies problem areas before they become race-day issues</li>
          </ul>

          <p className="font-semibold text-page">After the marathon — 24 to 72 hours</p>

          <p>
            After a marathon your legs have taken a lot: small tears in the muscle fibres, inflammation, and 3 to 5 hours of repeated impact. Your body repairs this on its own over the following days. A recovery massage within 24 to 72 hours does not flush anything out of the muscles, but it may ease soreness and tightness, and many runners find it helps them feel looser while that repair happens.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>May ease the soreness and stiffness of the days after the race (delayed onset muscle soreness, or DOMS)</li>
            <li>Many runners find it helps them feel looser and move more comfortably</li>
            <li>Gives your therapist a chance to spot early signs of strain that need watching</li>
            <li>Helps restore comfortable range of motion in the calves, hamstrings and hips</li>
            <li>Many people find it a relaxing way to wind down after race day</li>
          </ul>

          <p>
            Our therapists have worked at marathon events and treated many runners in this window. A lot of them tell us their legs feel easier afterwards and that it helps them ease back into running with more confidence.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What 26.2 miles actually does to your body</h2>

          <p>
            A marathon puts far more load on your muscles and connective tissue than even your longest training run. The final 6 to 8 miles push most runners into territory their body has never experienced — glycogen stores depleted, running form breaking down, muscles absorbing impact they can no longer cushion properly.
          </p>

          <p>
            The result is predictable:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Calves and hamstrings tighten and shorten under sustained repetitive load</li>
            <li>Hip flexors lock up from thousands of identical stride cycles</li>
            <li>The outer thigh and IT band area tightens, which is often felt at the knee or hip</li>
            <li>Lower back muscles fatigue and compensate for failing form in the later miles</li>
            <li>Areas that have been under continuous stress feel knotted and restricted</li>
          </ul>

          <p>
            Sports massage cannot undo the work of a marathon, and your body does the repairing. What it may do is ease the tightness in these areas, and many runners find it helps them feel looser and move more comfortably while they recover. For a broader look at how sports massage supports runners across all distances, see our <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline">guide to sports massage for runners</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Techniques used with marathon runners</h2>

          <p>
            Every session is tailored to the individual, but marathon runners tend to need a specific combination of techniques. Here is what a typical pre- or post-marathon session at Range and Restore involves and why each one matters:
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li>
              <span className="font-semibold text-page"><Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">Deep tissue massage</Link></span> — Works on the deeper muscle layers with slow, sustained pressure, focusing on areas that feel tight and restricted after months of training load.
            </li>
            <li>
              <span className="font-semibold text-page">Sports massage</span> — A broader, assessment-led treatment covering the full kinetic chain. The calves, hamstrings, quads, hip flexors, glutes, and lower back all take a battering over 26.2 miles. Sports massage works systematically through these areas to ease tension.
            </li>
            <li>
              <span className="font-semibold text-page">Myofascial release</span> — The fascia — the connective tissue wrapping every muscle — thickens and restricts under sustained load. Myofascial work may help ease the stiffness that follows a marathon and help you move more freely.
            </li>
            <li>
              <span className="font-semibold text-page">Assisted stretching</span> — Guided stretching to restore range in areas that have shortened through training and racing. Particularly effective for hip flexors and hamstrings post-marathon, where passive stretching alone often is not enough.
            </li>
            <li>
              <span className="font-semibold text-page">Cupping therapy</span> — Uses suction to lift the tissue instead of pressing into it. Many runners find it eases stiffness, especially in the calves and upper back after long-distance running.
            </li>
          </ul>

          <p>
            These techniques are combined and adapted based on where you are in your marathon cycle — preparation looks different from recovery, and the treatment reflects that. For complex or long-standing issues, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> may also be used.
          </p>
        </div>

        <div className="mt-10 mb-10">
          <h2 className="text-2xl font-bold text-page mb-4">Carlos Bonvicine, Founder &amp; Lead Therapist, at the TCS London Marathon recovery tent</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {MARATHON_PHOTOS.map((photo, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-page-muted opacity-70 mt-3">
            Post-race massage with the Phab charity recovery tent at the TCS London Marathon — Range and Restore, Archway, North London.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Local marathon support in Archway, North London</h2>

          <p>
            Range and Restore is based at 130 Junction Road, Archway, London N19 5LB — a short walk from Archway and Tufnell Park stations. If you are training for the marathon or recovering after race day, getting the right treatment locally means you are not adding a long commute on top of an already demanding schedule.
          </p>

          <p>
            We see runners from across North London, including Archway, Tufnell Park, Holloway, Islington, Finsbury Park, Highgate, Crouch End and Kentish Town. Many of our marathon clients train locally, run with clubs in the area, and come in regularly through their training block to keep their body in condition.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Open Monday to Friday 08:00–20:00, Saturday and Sunday 09:00–17:00</li>
            <li>30, 60, and 90-minute sessions available — from a focused post-race session to a thorough pre-marathon preparation</li>
            <li><Link href={ROUTES.services.massageBundles} className="link-inline">Massage bundles</Link> available for runners who want a series of sessions through their training cycle</li>
            <li>Therapists who have worked at marathon events, alongside regular clinic work with runners</li>
          </ul>

          <p>
            If you have questions about what session length or timing is right for you, <Link href={ROUTES.contact} className="link-inline">get in touch</Link> and we will point you in the right direction.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">Marathon massage: common questions</h2>
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
          <h2 className="text-2xl font-black text-ink mb-4">Look after your legs before and after race day</h2>
          <p className="text-brand-green font-semibold mb-6">
            Book your pre-marathon or post-marathon sports massage at Range and Restore in Archway, North London. Our therapists have worked at marathon events and treat runners in clinic throughout the year.
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
            <Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline link-inline-tap">
              &rarr; Achilles Tendinitis – How Sports Massage Helps Recovery
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href={ROUTES.blog.index} className="text-brand-teal font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            &larr; Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
