import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Achilles Tendinitis – How Sports Massage Helps Recovery',
  description: 'Achilles tendinitis is a common injury among runners and active people. Discover how targeted sports massage and soft tissue therapy can support your recovery.',
  path: '/blog/achilles-tendinitis-recovery-massage',
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Achilles Tendinitis – How Sports Massage Helps Recovery',
  description: 'Achilles tendinitis is a common injury among runners and active people. Discover how targeted sports massage and soft tissue therapy can support your recovery.',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Sports Massage Therapist',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
  url: 'https://rangeandrestore.co.uk/blog/achilles-tendinitis-recovery-massage',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/achilles-tendinitis-recovery-massage',
}

export default function AchillesTendinitisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#618020] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311] mb-4">
            Achilles Tendinitis – How Sports Massage Helps Recovery
          </h1>
          <div className="flex items-center gap-4 text-[#334311]/70 text-sm">
            <time dateTime="2026-02-01">1 February 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-xl font-medium text-[#334311]">
            Achilles tendinitis is one of the most common overuse injuries affecting runners, cyclists, and active individuals. Left unmanaged, it can progress from a nagging discomfort to a serious injury that keeps you off your feet for months. Sports massage and targeted soft tissue therapy offer an effective, non-invasive approach to supporting recovery and preventing recurrence.
          </p>

          <h2 className="text-2xl font-bold text-[#334311] mt-8 mb-3">What is Achilles tendinitis?</h2>

          <p>
            The Achilles tendon connects the calf muscles — the gastrocnemius and soleus — to the heel bone (calcaneus). It is the largest tendon in the body and handles enormous loads during running, jumping, and walking. Achilles tendinitis is an overuse injury characterised by inflammation and degeneration of the tendon, typically at the mid-portion or where it attaches to the heel.
          </p>

          <p>
            Common symptoms include pain and stiffness in the tendon — particularly in the morning or after periods of inactivity — swelling, tenderness to touch, and pain that worsens with activity and improves with rest, at least in the early stages.
          </p>

          <h2 className="text-2xl font-bold text-[#334311] mt-8 mb-3">What causes it?</h2>

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
            The underlying issue is often not just in the tendon itself, but in the surrounding muscles — particularly the calf complex — which have become so tight and overloaded that the tendon is under constant excessive tension.
          </p>

          <h2 className="text-2xl font-bold text-[#334311] mt-8 mb-3">How sports massage supports recovery</h2>

          <p>
            Sports massage and soft tissue therapy address Achilles tendinitis by targeting the muscle and fascial tension that is contributing to the problem, rather than focusing solely on the tendon itself. Direct work on an acutely inflamed tendon should be avoided — but working the surrounding tissue is both appropriate and highly effective.
          </p>

          <h3 className="text-xl font-bold text-[#334311] mt-6 mb-2">Reducing calf muscle tension</h3>
          <p>
            The gastrocnemius and soleus muscles are almost always a central part of the problem in Achilles tendinitis. Deep tissue massage, trigger point therapy, and soft tissue release applied to these muscles reduces the tension they are transmitting to the tendon, providing immediate relief and creating conditions more favourable for healing.
          </p>

          <h3 className="text-xl font-bold text-[#334311] mt-6 mb-2">Addressing the full kinetic chain</h3>
          <p>
            Because Achilles tendinitis is often driven by loading and movement patterns further up the leg — particularly the hamstrings, glutes, and hip flexors — effective treatment looks beyond the calf alone. An assessment-led session will identify areas of tightness or weakness contributing to the problem and address them as part of a comprehensive treatment.
          </p>

          <h3 className="text-xl font-bold text-[#334311] mt-6 mb-2">Improving tissue health and circulation</h3>
          <p>
            Tendons have a relatively poor blood supply compared to muscle tissue, which is one of the reasons they are slow to heal. Massage increases local circulation, improving the delivery of nutrients and oxygen to the affected area and supporting the tissue repair process.
          </p>

          <h3 className="text-xl font-bold text-[#334311] mt-6 mb-2">Myofascial release and mobility work</h3>
          <p>
            Restrictions in the fascia surrounding the calf and lower leg can contribute to altered mechanics and increased tendon load. Myofascial release techniques address these restrictions, while assisted stretching and mobility work helps restore functional range of motion in the ankle and surrounding joints.
          </p>

          <h2 className="text-2xl font-bold text-[#334311] mt-8 mb-3">How many sessions will I need?</h2>

          <p>
            This varies considerably depending on the severity and duration of the tendinitis, your training load, and how consistently you can attend treatment. Mild to moderate cases that are caught early often respond well within 3–6 sessions. Longer-standing or more severe cases may require ongoing management over several months.
          </p>

          <p>
            Between sessions, relative rest — reducing running volume without necessarily stopping entirely — combined with appropriate loading exercises (typically eccentric calf work, prescribed by a physiotherapist or sports rehab specialist) is usually recommended. At Range and Restore, advice on what to do between sessions is always part of the treatment.
          </p>

          <h2 className="text-2xl font-bold text-[#334311] mt-8 mb-3">When to seek additional help</h2>

          <p>
            Sports massage is a highly effective component of Achilles tendinitis management, but it works best as part of a broader approach. If your symptoms are severe, if you have experienced a sudden worsening of pain, or if you suspect a partial or complete Achilles rupture, you should seek assessment from a sports medicine physician or physiotherapist before beginning massage treatment.
          </p>

          <p>
            Range and Restore operates alongside Reliable Scan, a private diagnostic ultrasound clinic at 130 Junction Road, Archway. If imaging is required to rule out more serious pathology, this can be arranged within the same building.
          </p>
        </div>

        <div className="mt-12 bg-[#334311] text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Book your sports massage</h2>
          <p className="text-[#c6e28a] mb-6">
            Dealing with Achilles pain or calf tightness? Book a session at Range and Restore in Archway, North London and get assessment-led treatment that targets the root cause.
          </p>
          <BookingButton label="Book Your Session" />
        </div>

        <div className="mt-10 border-t pt-8">
          <h3 className="text-lg font-semibold text-[#334311] mb-4">Related service</h3>
          <Link href="/services/sports-deep-tissue-massage" className="text-[#618020] hover:text-[#334311] font-medium min-h-[44px] flex items-center">
            → Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
          </Link>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#618020] font-semibold hover:text-[#334311] min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
