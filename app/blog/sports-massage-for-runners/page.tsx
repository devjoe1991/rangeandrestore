import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'How Sports Massage Helps Runners Before and After Races',
  description: 'Whether training for a 10K or a full marathon, sports massage can help you prepare your body before race day and recover effectively afterwards. Find out how.',
  path: '/blog/sports-massage-for-runners',
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Sports Massage Helps Runners Before and After Races',
  description: 'Whether training for a 10K or a full marathon, sports massage can help you prepare your body before race day and recover effectively afterwards.',
  image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=75',
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
  dateModified: '2026-02-01',
  url: 'https://rangeandrestore.co.uk/blog/sports-massage-for-runners',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sports-massage-for-runners',
}

export default function SportsMassageForRunnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
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

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Whether you&apos;re preparing for your first 5K or training for a full marathon, sports massage is one of the most effective tools you can add to your training programme. It supports performance, reduces injury risk, and dramatically improves your ability to recover.
          </p>

          <p>
            Running places enormous repetitive demand on the muscles, tendons, and connective tissues of the legs, hips, and lower back. Over time — particularly during peak training periods — this accumulation of stress can lead to tightness, imbalances, and injury. Sports massage addresses these issues directly, keeping your body functioning at its best throughout the training cycle.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Before the race: preparation massage</h2>

          <p>
            A pre-race massage, typically delivered 2–5 days before race day, is designed to prepare your muscles for the demands ahead. The goals are different from a deep recovery session — the priority is to stimulate circulation, reduce any residual tightness from training, and help you feel ready to perform.
          </p>

          <p>Timing matters here. A massage within 24 hours of a race should be kept light and stimulating. A more targeted session a few days out can address specific areas of tension without leaving the muscles feeling fatigued or over-worked on race day.</p>

          <p>Pre-event massage typically includes:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Effleurage and petrissage to warm and mobilise the tissue</li>
            <li>Targeted work on the calves, hamstrings, quads, IT band, and glutes</li>
            <li>Assisted stretching to restore range of motion in tight areas</li>
            <li>Assessment of any areas of concern that might affect your race performance</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">After the race: recovery massage</h2>

          <p>
            Post-race massage is where the real benefits of sports massage for runners become most evident. After a race — whether a 10K or a marathon — your muscles are dealing with significant metabolic stress, micro-tears in the muscle fibres, and accumulated waste products that need to be cleared.
          </p>

          <p>
            A post-event massage within 24–72 hours of your race helps to accelerate this recovery process. The treatment is typically deeper and more targeted than a pre-race session, focusing on flushing out metabolic byproducts, reducing inflammation, and addressing any new areas of tightness or strain that emerged during the race.
          </p>

          <p>Benefits of post-race massage include:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Significantly reduced delayed onset muscle soreness (DOMS)</li>
            <li>Faster restoration of normal muscle function and range of motion</li>
            <li>Early identification of any strains or soft tissue injuries before they worsen</li>
            <li>Improved circulation to support tissue repair and recovery</li>
            <li>Reduced swelling and fluid retention in the lower limbs</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">During training: maintenance massage</h2>

          <p>
            Beyond pre- and post-race treatment, regular maintenance massage throughout the training cycle is arguably the most valuable application of sports massage for runners. The cumulative effect of running — particularly when mileage is high — gradually tightens the muscles, compresses the joints, and creates postural imbalances that, if left unaddressed, become the conditions that lead to injury.
          </p>

          <p>
            Monthly or fortnightly maintenance sessions allow these issues to be identified and resolved early, before they become problematic. Common running-related issues addressed in maintenance sessions include:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>IT band tightness and iliotibial band syndrome (ITBS)</li>
            <li>Calf and Achilles tension</li>
            <li>Hamstring tightness and strain</li>
            <li>Hip flexor restriction</li>
            <li>Plantar fasciitis</li>
            <li>Lower back and glute tension from running gait</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What to expect from a session at Range and Restore</h2>

          <p>
            Every session at Range and Restore begins with a brief assessment. For runners, this typically involves looking at your training history, recent mileage, any areas of concern, and your upcoming race schedule. This helps to shape a treatment that is genuinely relevant to where you are in your training cycle, rather than a generic approach.
          </p>

          <p>
            Sessions can range from 30 to 90 minutes depending on your needs. A 30-minute session can be highly effective for a focused follow-up or targeted area, while a 90-minute session allows for a thorough full-body assessment and treatment — ideal in the weeks leading up to a major race or during a high-intensity training block.
          </p>
        </div>

        <div className="mt-12 bg-[#2a5a56] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Book your sports massage</h2>
          <p className="text-[#d4ecea] mb-6">
            Training for an event? Book your sports massage session at Range and Restore in Archway, North London and give your body the support it needs.
          </p>
          <BookingButton label="Book Your Session" />
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related service</h3>
          <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
            → Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
          </Link>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#2ab4b8] font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
