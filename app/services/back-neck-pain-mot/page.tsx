import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Back & Neck Pain MOT – Archway, London N19',
  description: 'Focused assessment and treatment for back and neck pain, posture correction, and desk-related strain in Archway, North London. Book with Carlos Bonvicine.',
  path: '/services/back-neck-pain-mot',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Back & Neck Pain MOT – Soft Tissue Remedial Massage Therapy',
  description: 'Focused assessment and treatment for persistent back and neck pain, postural issues, and desk-related strain in Archway, North London.',
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
  serviceType: 'Remedial Massage',
}

export default function BackNeckPainMotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Remedial Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Back &amp; Neck Pain MOT – Soft Tissue Therapy Archway
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Back and Neck Pain MOT – Soft Tissue Remedial Massage Therapy
          </h2>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.backNeckMot} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">The Back &amp; Neck Pain MOT is designed for people experiencing:</p>
            <ul className="space-y-2">
              {[
                'Persistent back or neck pain',
                'Postural issues from desk or computer work',
                'Headaches and tension from stress or poor posture',
                'Reduced mobility or stiffness in the spine',
                'Muscular knots, tightness, or restricted range of motion',
                'Discomfort from long hours of sitting or repetitive movement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes', desc: 'Quick, targeted relief for a specific area of back or neck pain. Ideal for follow-up sessions and ongoing maintenance.' },
                { duration: '60 Minutes', desc: 'Focused assessment and treatment of the back and neck, with time to address contributing postural patterns.' },
                { duration: '90 Minutes', desc: 'Comprehensive Back &amp; Neck MOT with full postural assessment and treatment of the spine, shoulders, and related areas.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Relieves back and neck pain',
                'Improves posture and alignment',
                'Eases tension, stiffness, and muscular fatigue',
                'Enhances flexibility and range of motion',
                'Supports recovery from stress-related strain',
                'Promotes long-term spinal health',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What techniques are used?</h2>
            <p className="text-page-muted mb-3">Each session is tailored to your specific presentation and may include:</p>
            <ul className="space-y-2">
              {[
                'Soft tissue remedial massage',
                'Deep tissue techniques',
                'Trigger point therapy',
                'Myofascial release',
                'Assisted stretching and mobility work',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#1a3d3a] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Persistent back or neck pain?</h2>
            <p className="text-[#d4ecea] mb-6">
              Get a proper assessment and targeted treatment at Range and Restore in Archway, North London. Restore comfort, improve mobility, and get to the root of what is causing your pain.
            </p>
            <BookingButton href={BOOKING_URLS.backNeckMot} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/desk-posture-pain-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Say Goodbye to Desk Posture Pain
              </Link>
              <Link href="/blog/hydration-and-muscle-health" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Hydration and Muscle Health – What Every Client Should Know
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
