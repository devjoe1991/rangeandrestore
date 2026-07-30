import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Pregnancy Massage Archway N19 | £85 · 60 Minutes',
  description: 'Safe, personalised pregnancy massage in Archway, North London. Relief for lower back pain, pelvic and hip discomfort, neck and shoulder tension and swollen legs. 60 minutes, £85.',
  path: '/services/pregnancy-massage',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Pregnancy Massage', path: '/services/pregnancy-massage' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pregnancy Massage',
  description: 'Gentle, tailored pregnancy massage designed to relieve the muscular aches, joint discomfort and tension that commonly develop throughout pregnancy, in Archway, North London.',
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
  serviceType: 'Pregnancy Massage',
  offers: [
    { '@type': 'Offer', name: 'First Appointment (60 Minutes)', price: '85', priceCurrency: 'GBP', url: BOOKING_URLS.pregnancyMassage },
    { '@type': 'Offer', name: 'Follow-Up Appointment (60 Minutes)', price: '85', priceCurrency: 'GBP', url: BOOKING_URLS.pregnancyMassage },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does pregnancy massage cost in Archway?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 60-minute pregnancy massage at Range and Restore in Archway is £85, for both first and follow-up appointments. Every session includes a consultation so treatment is tailored to how you are feeling on the day.' },
    },
    {
      '@type': 'Question',
      name: 'Is pregnancy massage safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pregnancy massage at Range and Restore is delivered by qualified therapists using gentle, pregnancy-appropriate techniques and supported positioning, typically side-lying with cushions so you stay comfortable throughout. If you have any pregnancy complications, or you are in your first trimester, we recommend checking with your midwife or GP before booking.' },
    },
    {
      '@type': 'Question',
      name: 'What can pregnancy massage help with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common reasons clients book include lower back pain, pelvic discomfort, hip pain, neck and shoulder tension, and swollen or heavy legs. Many clients also simply want dedicated time to relax and unwind as their body changes through pregnancy.' },
    },
    {
      '@type': 'Question',
      name: 'What position will I be in during the treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'You will be positioned comfortably and safely for your stage of pregnancy, usually side-lying and supported with cushions, or semi-reclined where appropriate. Your therapist will check in with you throughout and adjust positioning and pressure to keep you comfortable.' },
    },
    {
      '@type': 'Question',
      name: 'Who provides pregnancy massage at Range and Restore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pregnancy massage is available with our team of qualified sports massage and soft tissue therapists, including Alison Isherwood and Mateja Bracko-Mounti, who both hold a specialist interest in pregnancy massage.' },
    },
  ],
}

export default function PregnancyMassagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Pregnancy Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Pregnancy Massage in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Supporting you through pregnancy with safe, personalised care
          </p>
          <p className="mt-4 text-page-muted max-w-2xl">
            Pregnancy Massage is a gentle, tailored treatment designed to help relieve the muscular aches, joint discomfort and tension that commonly develop as your body changes throughout pregnancy.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.pregnancyMassage} label="Book Pregnancy Massage" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">Pregnancy Massage can help if you&apos;re experiencing:</p>
            <ul className="space-y-2">
              {[
                'Lower back pain or general back ache',
                'Pelvic discomfort or hip pain',
                'Neck and shoulder tension',
                'Swollen or heavy legs',
                'Disturbed sleep or general fatigue',
                'Or you simply want dedicated time to relax and unwind during pregnancy',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Sessions and pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { duration: 'First Appointment · 60 Minutes – £85', desc: 'Starts with a consultation covering your stage of pregnancy, how you’re feeling and anything your midwife or GP has flagged, followed by a gentle, tailored treatment.' },
                { duration: 'Follow-Up Appointment · 60 Minutes – £85', desc: 'Builds on your previous session and is adapted to how your body is feeling on the day, right through your pregnancy.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Safe, comfortable and tailored to you</h2>
            <p className="text-page-muted mb-3">
              Every treatment uses gentle, pregnancy-appropriate techniques and supported positioning — typically side-lying with cushions, or semi-reclined where appropriate — so you stay comfortable and safe throughout. Pressure is adjusted to your preference, and your therapist checks in with you as the session goes on.
            </p>
            <p className="text-page-muted">
              If you have any pregnancy complications, or you are in your first trimester, we recommend checking with your midwife or GP before booking. If you&apos;re unsure whether pregnancy massage is right for you, <Link href="/contact" className="text-[#0f767a] hover:text-page font-medium">get in touch</Link> and we&apos;ll be happy to advise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Relief from muscular aches and joint discomfort',
                'Reduced tension in the back, neck and shoulders',
                'A lighter feeling in swollen or heavy legs',
                'Lower stress and better relaxation',
                'Improved sleep and general wellbeing',
                'Dedicated time for yourself as your body changes',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who will treat me?</h2>
            <p className="text-page-muted">
              Pregnancy massage is available with our team of qualified sports massage and soft tissue therapists, including{' '}
              <Link href="/team#alison-isherwood" className="text-[#0f767a] hover:text-page font-medium">Alison Isherwood</Link> and{' '}
              <Link href="/team#mateja-bracko-mounti" className="text-[#0f767a] hover:text-page font-medium">Mateja Bracko-Mounti</Link>, who both hold a specialist interest in pregnancy massage.
            </p>
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your pregnancy massage</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Safe, personalised care to help you move and rest more comfortably through pregnancy. 60 minutes, £85, at 130 Junction Road, Archway.
            </p>
            <BookingButton href={BOOKING_URLS.pregnancyMassage} label="Book Your Session" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/manual-lymphatic-drainage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Manual Lymphatic Drainage (MLD)
              </Link>
              <Link href="/services/relaxation-restorative-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Relaxation &amp; Restorative Massage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
