import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Recovery in Archway: Massage, Sauna & Compression',
  description:
    'The complete sports recovery stack in Archway, North London — sports massage, Normatec compression and infrared sauna in one place. How to recover faster between sessions and around race day.',
  path: '/blog/sports-recovery-archway',
  image: '/Gallery/infrared-sauna-room-with-private-shower-range-and-restore-archway-north-london.jpg',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Sports Recovery in Archway', path: '/blog/sports-recovery-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sports Recovery in Archway – Sports Massage, Compression and Sauna',
  description:
    'A North London guide to recovering from hard training: how sports massage, Normatec compression and infrared sauna work together, and how to build recovery into your training week and around race day.',
  image: 'https://rangeandrestore.co.uk/Gallery/infrared-sauna-room-with-private-shower-range-and-restore-archway-north-london.jpg',
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
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  url: 'https://rangeandrestore.co.uk/blog/sports-recovery-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sports-recovery-archway',
  keywords:
    'sports recovery, sports recovery Archway, muscle recovery London, sports massage recovery, Normatec compression, infrared sauna recovery, recovery for athletes North London, recovery session near me',
}

const faqs = [
  {
    q: 'How do athletes recover after hard training?',
    a: "Recovery usually stacks a few things on top of the basics of sleep, food and easy days: sports massage to release the muscles that training loads most; compression such as Normatec for heavy legs; and heat like an infrared sauna to relax and support sleep. At Range and Restore in Archway you can get all three under one roof: Normatec comes as part of a 90-minute Sports Massage + Normatec session, and the sauna is booked on its own or alongside a massage.",
  },
  {
    q: 'Does sports massage help recovery?',
    a: "Yes. Hard training loads the calves, quads, glutes, lower back, forearms and shoulders. Many clients find regular sports and deep tissue massage keeps that tissue loose, eases post-session soreness and helps them train more consistently across a block.",
  },
  {
    q: 'Does Normatec compression help sore legs?',
    a: "Pneumatic compression like the Hyperice Normatec is popular with runners, cyclists and gym-goers because many people find it eases heavy, tired legs after long or hard sessions. At Range and Restore it is the last 30 minutes of our 90-minute Sports Massage + Normatec session (£110), after 60 minutes of hands-on sports massage.",
  },
  {
    q: 'Can an infrared sauna help muscle recovery?',
    a: "Many athletes use heat to unwind after hard sessions. An infrared hybrid sauna session helps you relax, and many people find they sleep better afterwards, which is the part of recovery that actually rebuilds you. Sessions are 45 minutes (£19) or 60 minutes (£29), and it pairs well with a massage.",
  },
  {
    q: 'When should I get a sports massage before an event?',
    a: "Keep maintenance massage regular through your training block, then keep anything close to race day gentle and schedule it a few days before rather than the day before, so you turn up fresh rather than tender. Save the deeper work for after you have competed.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SportsRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Recovery in Archway: Your Complete Recovery Stack
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
            Whether you run, lift, cycle or train functional fitness, the athletes who progress are the ones who recover as seriously as they train. Hard sessions leave your legs, back and shoulders loaded — and how fast you bounce back decides how much quality training you can string together. The most effective sports recovery stacks three things: <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports massage</Link>, compression and heat. At Range and Restore in Archway, North London, all three are under one roof.
          </p>

          <p>
            Recovery has gone from an afterthought to part of the programme — gyms and clinics everywhere now offer compression boots, saunas and massage because athletes have realised that adaptation happens when you recover, not just when you train. This guide breaks down why hard training loads the body, how each recovery tool actually helps, and how to build recovery into your training week and around race day.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why recovery matters as much as training</h2>

          <p>
            Training is the stimulus; recovery is when your body actually adapts to it. Push hard, week after week, and the load builds up as tightness, heaviness and lingering soreness across the areas you use most:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Legs</strong> — running, riding, squatting and lunging batter the calves, quads and glutes.</li>
            <li><strong>Lower back and hips</strong> — lifting, hinging and carrying under fatigue load the posterior chain.</li>
            <li><strong>Grip and forearms</strong> — pulling, carrying and holding work leaves the forearms fried.</li>
            <li><strong>Shoulders</strong> — overhead and pressing work takes a toll on the shoulders and upper back.</li>
          </ul>
          <p>
            Left unmanaged, that fatigue drags your training quality down and nudges you towards the overuse niggles that stall a block. Recovery is how you keep showing up fresh — and it is exactly what turns consistent training into results.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">The sports recovery stack: massage, compression and heat</h2>

          <p>
            No single tool does everything. The athletes who recover best combine hands-on work, compression and heat, which is what the <Link href={ROUTES.recoverySuite.index} className="link-inline">Recovery Suite</Link> at Range and Restore is set up for.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Sports and deep tissue massage</h3>
          <p>
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">Sports and deep tissue massage</Link> is the cornerstone. It releases the calves, quads, glutes, lower back, forearms and shoulders that training loads most, eases post-session soreness and restores range of motion so your positions hold up under fatigue. An assessment-led session also catches the tight or overloaded areas that turn into niggles before they cost you training time.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Normatec compression</h3>
          <p>
            The Recovery Suite runs the <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Hyperice Normatec 3 Full Body</Link> pneumatic compression system — the same kit you will see in elite recovery zones. It cycles pressure through the legs, hips and arms, and many people find it eases heavy, tired limbs after long or hard sessions. You book it as a 90-minute Sports Massage + Normatec session: 60 minutes of sports massage, then 30 minutes of Normatec. There is no standalone Normatec session. Read more in our guide to <Link href={ROUTES.blog.normatecFullBodyCompressionRecoveryArchway} className="link-inline">Normatec compression recovery</Link>.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Infrared hybrid sauna</h3>
          <p>
            The <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline">Infrared Hybrid Sauna</Link> — a two-person Vidalux cabin with traditional and full-spectrum infrared heat — is the wind-down piece. Heat helps you relax and switch off, and many people find they sleep better afterwards, which is where your body actually rebuilds. It is a good way to finish a hard week. Sessions are private, for up to two people, and the price is per session.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Prices</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Infrared Hybrid Sauna</strong>: 45 minutes &pound;19, 60 minutes &pound;29 (sauna only).</li>
            <li><strong>Sports Massage + Normatec</strong>: 90 minutes, &pound;110 (60 minutes of sports massage, then 30 minutes of Normatec).</li>
            <li><strong>Sports Massage + Sauna</strong>: &pound;85 for a 30-minute massage and a 45-minute sauna, or &pound;90 for a 60-minute massage and a 30-minute sauna.</li>
          </ul>
          <p>
            You can see the massage and sauna options side by side on our <Link href={ROUTES.recoverySuite.recoveryPackages} className="link-inline">Recovery Packages</Link> page.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How to build recovery into your training week</h2>

          <p>
            You do not need to recover after every session — you need to recover around the ones that matter. A simple approach for a typical block:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Massage + Normatec after your biggest sessions</strong> — many people find the 90-minute Sports Massage + Normatec session takes the edge off heavy legs for the next day.</li>
            <li><strong>Massage every two to three weeks</strong> — regular maintenance work keeps tissue quality up across a block; increase the frequency as volume climbs.</li>
            <li><strong>Sauna to wind down</strong> — use heat on an easy day or after your hardest session of the week to relax and protect your sleep.</li>
          </ul>
          <p>
            The point is consistency. Little and often beats a single desperate session the week you have broken down.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Recovery around race day or a big event</h2>

          <p>
            In the final week, keep everything gentle. Book any pre-event massage a few days out rather than the day before, so you feel fresh rather than tender — light work, not deep tissue. An easy sauna in taper week can help you feel calm going in.
          </p>
          <p>
            Afterwards is when the deeper work earns its place. A Sports Massage + Normatec session in the days that follow, and a sauna to unwind, can help you get moving comfortably again. See the <Link href={ROUTES.recoverySuite.recoveryPackages} className="link-inline">Recovery Packages</Link> page for how massage, sauna and Normatec fit together.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Finding us</h2>

          <p>
            The clinic and Recovery Suite are at 130 Junction Road, Archway, N19, a short walk from both Archway and Tufnell Park stations. Athletes come to us from Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington and Kentish Town.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Sports recovery: common questions
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
          <h2 className="text-2xl font-black text-ink mb-4">Recover like you train</h2>
          <p className="text-brand-green font-semibold mb-6">
            Sports massage, Normatec compression and infrared sauna, under one roof in Archway, North London. Sauna sessions from &pound;19; Sports Massage + Normatec &pound;110 for 90 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.infraredHybridSauna}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Book a Sauna Session
            </a>
            <a
              href={BOOKING_URLS.packageCompressionMassage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-outline"
            >
              Book Sports Massage + Normatec
            </a>
            <a
              href={BOOKING_URLS.sportsDeepTissue}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-outline"
            >
              Book a Sports Massage
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
            <Link href={ROUTES.recoverySuite.recoveryPackages} className="link-inline link-inline-tap">
              &rarr; Recovery Packages — massage with sauna or Normatec
            </Link>
            <Link href={ROUTES.blog.normatecFullBodyCompressionRecoveryArchway} className="link-inline link-inline-tap">
              &rarr; Faster Recovery with Normatec Compression in Archway
            </Link>
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
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
