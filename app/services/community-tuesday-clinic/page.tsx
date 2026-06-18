import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Community Tuesday Clinic – Accessible Expert Massage Archway N19',
  description: 'The Community Tuesday Clinic at Range and Restore, Archway. The same expert sports and soft tissue treatment at more accessible pricing. 60 min £60, 90 min £85, every Tuesday. Book online.',
  path: '/services/community-tuesday-clinic',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Community Tuesday Clinic', path: '/services/community-tuesday-clinic' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Community Tuesday Clinic',
  description: 'A community-focused clinic offering the same expert sports and soft tissue remedial massage at more accessible pricing, available every Tuesday in Archway, North London. Treatment for back pain, neck pain, sports injuries, muscle tension, mobility issues and general wellbeing.',
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
  availableChannel: {
    '@type': 'ServiceChannel',
    name: 'Community Tuesday Clinic',
    availableLanguage: 'en',
    serviceLocation: {
      '@type': 'Place',
      name: 'Range and Restore Sports Massage',
      address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'Archway', postalCode: 'N19 5LB' },
    },
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Tuesday',
  },
  offers: [
    { '@type': 'Offer', name: '60 Minutes', price: '60', priceCurrency: 'GBP', url: BOOKING_URLS.communityTuesday },
    { '@type': 'Offer', name: '90 Minutes', price: '85', priceCurrency: 'GBP', url: BOOKING_URLS.communityTuesday },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Community Tuesday Clinic?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Community Tuesday Clinic is a community-focused initiative at Range and Restore designed to make professional treatment more accessible to our local Archway and North London community. You receive the same expert assessment-led sports and soft tissue treatment, delivered to the same high standards, at more accessible pricing — every Tuesday.' },
    },
    {
      '@type': 'Question',
      name: 'How much does the Community Tuesday Clinic cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 60-minute treatment is £60 and a 90-minute treatment is £85. Both include the initial assessment so your session is tailored to your needs.' },
    },
    {
      '@type': 'Question',
      name: 'When is the Community Tuesday Clinic available?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Community Tuesday Clinic runs every Tuesday at our clinic on 130 Junction Road, Archway, London N19 5LB. Sessions are booked online in advance.' },
    },
    {
      '@type': 'Question',
      name: 'Is the treatment any different from a standard session?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. This is not a reduced or watered-down treatment — it is the same high standard of care, assessment and hands-on therapy you would receive in any session at Range and Restore. The clinic exists to make that expert care more accessible to the local community.' },
    },
    {
      '@type': 'Question',
      name: 'What can the Community Tuesday Clinic help with?',
      acceptedAnswer: { '@type': 'Answer', text: 'It is suited to back pain, neck pain, sports injuries, muscle tension, mobility issues and general wellbeing. Depending on your needs, treatment may include sports massage, deep tissue massage, soft tissue remedial therapy, assisted stretching, myofascial release and cupping therapy.' },
    },
  ],
}

export default function CommunityTuesdayClinicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Community Initiative · Archway London · Every Tuesday</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Community Tuesday Clinic
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            The same expert treatment. More accessible pricing. Available every Tuesday.
          </p>
          <p className="mt-4 text-page-muted max-w-2xl">
            A community-focused clinic created to help more people in Archway and North London access expert hands-on treatment for back pain, neck pain, sports injuries, muscle tension, mobility issues and general wellbeing — without compromising on the quality of care.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.communityTuesday} label="Book Your Tuesday Session" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Professional treatment, made more accessible</h2>
            <p className="text-page-muted mb-4">
              At Range and Restore we believe expert treatment shouldn&apos;t be out of reach. The Community Tuesday Clinic is our way of opening the doors a little wider — a community-focused initiative offering the same assessment-led, high-standard care we provide every day, at pricing designed to help more local people get the treatment they need.
            </p>
            <p className="text-page-muted">
              This isn&apos;t a discount or a reduced service. You receive a full session with a qualified therapist, a proper assessment, and treatment tailored to your body and your goals. The only thing that changes is how accessible it is.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is it for?</h2>
            <p className="text-page-muted mb-4">The Community Tuesday Clinic is suited to anyone dealing with:</p>
            <ul className="space-y-2">
              {[
                'Back pain and persistent lower back tension',
                'Neck and shoulder pain, including desk-related strain',
                'Sports injuries and training-related niggles',
                'General muscle tension and tightness',
                'Reduced mobility or restricted range of movement',
                'General wellbeing, stress and recovery',
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
            <h2 className="text-2xl font-bold text-page mb-4">Choose your session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { duration: '60 Minutes – £60', desc: 'A focused session for one or two areas. Ideal for targeted pain relief, injury support and restoring mobility.' },
                { duration: '90 Minutes – £85', desc: 'A longer, full-body or multi-area treatment. Best for managing ongoing tension or addressing several areas in one visit.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-page-muted text-sm">Available every Tuesday at 130 Junction Road, Archway, London N19 5LB. Both options include your initial assessment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What might your treatment include?</h2>
            <p className="text-page-muted mb-3">Every session is assessment-led and tailored to you. Depending on your needs, treatment may include:</p>
            <ul className="space-y-2">
              {[
                'Sports massage',
                'Deep tissue massage',
                'Soft tissue remedial therapy',
                'Assisted stretching and mobilisation',
                'Myofascial release',
                'Cupping therapy',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">The same high standards of care</h2>
            <p className="text-page-muted">
              Every Community Tuesday Clinic session is delivered by a qualified therapist and begins with a proper assessment of your posture, movement and concerns. The treatment, the techniques and the aftercare advice are exactly what you&apos;d expect from Range and Restore. Our goal is simple: to help more people in our community move better, feel better and stay well.
            </p>
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your Community Tuesday Clinic session</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Expert sports and soft tissue treatment in Archway, North London — made more accessible, every Tuesday. Spaces are limited, so booking ahead is recommended.
            </p>
            <BookingButton href={BOOKING_URLS.communityTuesday} label="Book for a Tuesday" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Explore more</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Sports &amp; Deep Tissue Massage
              </Link>
              <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Back &amp; Neck Pain MOT
              </Link>
              <Link href="/services" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → View all services
              </Link>
              <Link href="/contact" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Contact the clinic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
