import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Relaxation Massage – Archway, North London',
  description: 'Gentle, calming relaxation massage to reduce stress, ease tension, and restore balance in Archway, North London. Book with Carlos Bonvicine today.',
  path: '/services/relaxation-restorative-massage',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Relaxation Restorative Massage Therapy',
  description: 'Gentle, calming treatment designed to reduce stress, ease mild tension, and restore your sense of balance in Archway, North London.',
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
  serviceType: 'Relaxation Massage',
}

export default function RelaxationRestorativeMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-[#eef2eb] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#4a7a28] font-semibold uppercase tracking-widest text-sm mb-3">Relaxation Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2c3d1f] mb-4">
            Relaxation Massage in Archway, North London
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#2c3d1f]/80">
            Relax, recover and restore your body
          </h2>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.relaxation} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">Who is this treatment for?</h2>
            <p className="text-gray-700 mb-4">Relaxation Restorative Massage is ideal for:</p>
            <ul className="space-y-2">
              {[
                'Anyone feeling stressed, anxious, mentally drained, or overstimulated',
                'People with general muscle tightness who prefer lighter, soothing treatment',
                'Clients experiencing poor sleep, low energy, or tension-related discomfort',
                'Those wanting a calming alternative to sports or deep tissue massage',
                'Anyone who wants to relax, reset, and restore balance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#4a7a28] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2c3d1f] mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes', desc: 'A short, calming session to ease tension in a specific area such as the back, neck, or shoulders. Perfect for a quick recharge.' },
                { duration: '60 Minutes', desc: 'A full relaxation session covering the back, shoulders, and legs. Enough time to genuinely unwind and feel restored.' },
                { duration: '90 Minutes', desc: 'A luxurious, full-body relaxation experience. Ideal for a thorough reset, deep relaxation, and a lasting sense of calm and wellbeing.' },
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
                'Reduced stress and a calmer nervous system',
                'Relief from mild aches, stiffness, and muscular fatigue',
                'Improved circulation and a lighter feeling in the body',
                'Better sleep quality and improved energy',
                'Improved overall wellbeing and relaxation',
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
            <p className="text-gray-700 mb-3">Your relaxation session will include:</p>
            <ul className="space-y-2">
              {[
                'Slow, soothing massage strokes designed to calm the body and reduce tension',
                'Gentle soft tissue techniques to release tight areas without deep pressure',
                'Optional use of professional massage waxes and balms selected to suit your preference and comfort',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#4a7a28] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#2c3d1f] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Need to switch off and properly recover?</h2>
            <p className="text-[#d4ecea] mb-6">
              Each session is delivered in a safe, professional setting in Archway, North London, with pressure adjusted throughout. Give your body and mind the time to unwind, recover, and feel restored.
            </p>
            <BookingButton href={BOOKING_URLS.relaxation} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-[#2c3d1f] mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/hydration-and-muscle-health" className="text-[#4a7a28] hover:text-[#2c3d1f] font-medium min-h-[44px] flex items-center">
                → Hydration and Muscle Health – What Every Client Should Know
              </Link>
              <Link href="/blog/desk-posture-pain-massage" className="text-[#4a7a28] hover:text-[#2c3d1f] font-medium min-h-[44px] flex items-center">
                → Say Goodbye to Desk Posture Pain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
