import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Sports & Deep Tissue Massage – Archway London',
  description: 'Sports and deep tissue massage for injury recovery, performance support, and muscle relief in Archway, North London. Book with Carlos Bonvicine today.',
  path: '/services/sports-deep-tissue-massage',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sports, Deep Tissue & Soft Tissue Remedial Massage Therapy',
  description: 'Personalised assessment-led sports and deep tissue massage for injury recovery, performance, and long-term muscle health.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'Archway', postalCode: 'N19 5LB' },
  },
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
  ],
  serviceType: 'Sports Massage',
}

export default function SportsDeepTissuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-[#eef2eb] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#4a7a28] font-semibold uppercase tracking-widest text-sm mb-3">Sports Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3d1f] mb-4">
            Sports &amp; Deep Tissue Massage in Archway, London
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#2c3d1f]/80">
            Sports, Deep Tissue and Soft Tissue Remedial Massage Therapy for Injury Recovery
          </h2>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.sportsDeepTissue} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">Who is this treatment for?</h2>
            <p className="text-gray-700 mb-4">If you&apos;re dealing with:</p>
            <ul className="space-y-2">
              {[
                'Tight, sore or fatigued muscles',
                'Training-related injuries or recovery needs',
                'Reduced flexibility or restricted mobility',
                'Back, neck or shoulder tension from activity or work',
                'Post-event soreness or muscle fatigue',
                'Stress-related muscular tightness',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#4a7a28] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700">This treatment offers effective relief, whether you&apos;re training, recovering, or simply looking to restore balance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes', desc: 'Focused treatment for a single area (e.g. calves, hamstrings, shoulders). Ideal for quick recovery or tension release.' },
                { duration: '60 Minutes', desc: 'In-depth session for one or two areas. Great for targeted injury support, recovery, and restoring mobility.' },
                { duration: '90 Minutes', desc: 'Full-body or multi-area treatment. Best for athletes, runners, or anyone managing ongoing tension and needing comprehensive care.' },
              ].map((option) => (
                <div key={option.duration} className="bg-[#eef2eb] rounded-xl p-5">
                  <p className="font-bold text-[#2c3d1f] text-lg mb-2">{option.duration}</p>
                  <p className="text-[#2c3d1f]/80 text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Relieves muscle tension and stiffness',
                'Improves circulation and recovery',
                'Enhances range of motion and flexibility',
                'Reduces post-event soreness and fatigue',
                'Supports rehabilitation from injury',
                'Improves posture and body alignment',
                'Promotes long-term muscular health',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#4a7a28] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">What techniques are used?</h2>
            <p className="text-gray-700 mb-3">Each session is tailored to your needs and may include:</p>
            <ul className="space-y-2">
              {[
                'Deep tissue massage techniques',
                'Sports-specific massage therapy',
                'Myofascial release',
                'Soft tissue mobilisation',
                'Assisted stretching and mobilisation',
                'Trigger point therapy',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#4a7a28] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#2c3d1f] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to clear that muscle tightness or injury?</h2>
            <p className="text-[#d4ecea] mb-6">
              Assessment-led sports massage in Archway, North London. Whether you are training, recovering, or managing daily muscular stress, this treatment is designed to support your performance and recovery.
            </p>
            <BookingButton href={BOOKING_URLS.sportsDeepTissue} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-[#2c3d1f] mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/sports-massage-for-runners" className="text-[#4a7a28] hover:text-[#2c3d1f] font-medium min-h-[44px] flex items-center">
                → How Sports Massage Helps Runners Before and After Races
              </Link>
              <Link href="/blog/achilles-tendinitis-recovery-massage" className="text-[#4a7a28] hover:text-[#2c3d1f] font-medium min-h-[44px] flex items-center">
                → Achilles Tendinitis – How Sports Massage Helps Recovery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
