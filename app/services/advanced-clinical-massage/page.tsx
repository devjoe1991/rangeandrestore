import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Advanced Clinical Massage – Archway, London',
  description: 'Advanced clinical massage for chronic pain, sciatica, RSI, headaches and postural conditions in Archway, North London. Book with Carlos Bonvicine today.',
  path: '/services/advanced-clinical-massage',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Advanced Clinical Massage & Soft Tissue Remedial Therapy',
  description: 'Expert clinical massage for chronic pain, sciatica, RSI, headaches, and complex postural conditions in Archway, North London.',
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
  serviceType: 'Clinical Massage',
}

export default function AdvancedClinicalMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Clinical Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Advanced Clinical Massage and Soft Tissue Remedial Therapy
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Expert Treatment for Chronic Pain, Postural Issues, and Complex Conditions
          </h2>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.advancedClinical} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">Advanced Clinical Massage is designed for clients dealing with complex or persistent conditions, including:</p>
            <ul className="space-y-2">
              {[
                'Chronic pain or long-standing muscular tension',
                'Sciatica and nerve-related pain patterns',
                'Repetitive strain injuries (RSI) and tendinopathies',
                'Headaches and tension-related symptoms',
                'Complex postural imbalances and compensatory patterns',
                'Referred pain from trigger points and myofascial restrictions',
                'Recovery from injury or surgery requiring targeted rehabilitation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-page-muted">This treatment is assessment-led and adapted to your specific presentation at every session.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes', desc: 'Focused clinical treatment for a single area or specific condition. Suitable for follow-up sessions or targeted problem areas.' },
                { duration: '60 Minutes', desc: 'In-depth assessment and treatment for one or two areas. Provides time for thorough assessment and effective clinical work.' },
                { duration: '90 Minutes', desc: 'Comprehensive clinical session for complex or multi-area presentations. Recommended for chronic conditions and full-body assessments.' },
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
                'Reduces chronic pain and stiffness',
                'Improves posture and joint alignment',
                'Restores mobility and range of motion',
                'Relieves muscle fatigue and tension',
                'Enhances recovery from injuries',
                'Supports stress reduction and relaxation',
                'Promotes long-term muscular health',
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
            <p className="text-page-muted mb-3">Each session is tailored to your clinical needs and may include:</p>
            <ul className="space-y-2">
              {[
                'Advanced deep tissue techniques',
                'Trigger point therapy',
                'Myofascial release',
                'Neuromuscular techniques',
                'Soft tissue mobilisation',
                'Assisted stretching and joint mobilisation',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Ready for expert clinical massage?</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Get to the root of your pain. Assessment-led clinical massage targeting your exact needs. Book your session at our Archway clinic today.
            </p>
            <BookingButton href={BOOKING_URLS.advancedClinical} label="Book Your Treatment" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/desk-posture-pain-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Say Goodbye to Desk Posture Pain
              </Link>
              <Link href="/blog/achilles-tendinitis-recovery-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Achilles Tendinitis – How Sports Massage Helps Recovery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
