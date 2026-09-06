import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Reflexology Archway N19 | £75 · 60 Minutes',
  description: 'Reflexology in Archway, North London. A gentle, relaxing foot-focused treatment to soothe tired feet, reduce stress and restore balance. 60 minutes, £75. Book online.',
  path: '/services/reflexology',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Reflexology', path: '/services/reflexology' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Reflexology',
  description: 'Gentle, relaxing reflexology treatment applying pressure to specific points on the feet to soothe tired feet, reduce stress and support overall wellbeing, in Archway, North London.',
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
  serviceType: 'Reflexology',
  offers: [
    { '@type': 'Offer', name: 'First Reflexology Appointment (60 Minutes)', price: '75', priceCurrency: 'GBP', url: BOOKING_URLS.reflexology },
    { '@type': 'Offer', name: 'Follow-Up Reflexology Appointment (60 Minutes)', price: '75', priceCurrency: 'GBP', url: BOOKING_URLS.reflexology },
  ],
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'What is reflexology?',
    a: 'Reflexology is a gentle, relaxing treatment in which pressure is applied to specific points on the feet. Clients typically book it to soothe tired feet, reduce stress, unwind and support their overall sense of wellbeing.',
  },
  {
    q: 'How much does reflexology cost in Archway?',
    a: 'A 60-minute reflexology appointment at Range and Restore in Archway is £75, for both first and follow-up appointments. Your first appointment includes a consultation so the treatment is tailored to you.',
  },
  {
    q: 'Do I need to undress for reflexology?',
    a: 'No. Reflexology is focused on the feet and lower legs, so you only need to remove your shoes and socks. You stay fully clothed, resting comfortably on the treatment couch for the whole session.',
  },
  {
    q: 'Who provides reflexology at Range and Restore?',
    a: 'Reflexology is provided by Mateja Bracko-Mounti, a qualified reflexologist and BTEC Level 5 sports massage and soft tissue remedial therapist with over 18 years of experience in therapeutic settings.',
  },
  {
    q: 'What happens in a reflexology session?',
    a: 'Your first appointment starts with a short consultation about your health, lifestyle and what you would like from the treatment. You then relax on the treatment couch while pressure is applied to specific points on your feet, adjusted to your comfort throughout. Follow-up sessions build on your previous treatment and are tailored to how you are feeling on the day.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function ReflexologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Reflexology · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Reflexology in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Soothe tired feet. Reduce stress. Restore balance.
          </p>
          <p className="mt-4 text-page-muted max-w-2xl">
            Whether you&apos;ve been standing all day, walking long distances, feeling stressed or simply need time to unwind, Reflexology provides a gentle, relaxing treatment designed to help you feel refreshed, rebalanced and revitalised.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.reflexology} label="Book Reflexology" />
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">Reflexology is a good fit if you&apos;re:</p>
            <ul className="space-y-2">
              {[
                'On your feet all day at work',
                'A runner or walker with tired, achy feet and lower legs',
                'Feeling stressed, overwhelmed or run down',
                'Struggling to switch off or sleep well',
                'Looking for a gentle, fully-clothed alternative to massage',
                'Simply wanting dedicated time to relax and unwind',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
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
                { duration: 'First Appointment · 60 Minutes – £75', desc: 'Includes a consultation about your health, lifestyle and wellbeing goals, followed by a personalised reflexology treatment designed to help you relax and restore balance.' },
                { duration: 'Follow-Up Appointment · 60 Minutes – £75', desc: 'Builds on your previous treatment and is tailored to how you’re feeling on the day — whether that’s reducing stress, soothing tired feet or simply taking time for yourself.' },
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
                'Soothes tired, achy feet and lower legs',
                'Reduces stress and helps you properly switch off',
                'Deep relaxation without removing any clothing',
                'A calmer, more rested feeling that supports better sleep',
                'Dedicated time for yourself and your wellbeing',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
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
              Reflexology at Range and Restore is provided by{' '}
              <Link href={`${ROUTES.team}#mateja-bracko-mounti`} className="link-inline">Mateja Bracko-Mounti</Link>, a qualified reflexologist and BTEC Level 5 sports massage and soft tissue remedial therapist with over 18 years of experience in therapeutic settings.
            </p>
          </section>

          <section aria-labelledby="page-faqs">
            <h2 id="page-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-sand bg-white p-5">
                  <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                  <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-accent rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-ink mb-4">Book your reflexology session</h2>
            <p className="text-brand-green font-semibold mb-6">
              A gentle, relaxing hour to soothe tired feet and reset. 60 minutes, £75, at 130 Junction Road, Archway.
            </p>
            <BookingButton href={BOOKING_URLS.reflexology} label="Book Your Session" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={ROUTES.services.relaxationRestorativeMassage} className="link-inline link-inline-tap">
                → Relaxation &amp; Restorative Massage
              </Link>
              <Link href={ROUTES.blog.plantarFasciitisMassageArchway} className="link-inline link-inline-tap">
                → Plantar Fasciitis: How Massage Can Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
