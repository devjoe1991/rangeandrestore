import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Manual Lymphatic Drainage (MLD) – Certified Practitioner',
  description: 'Certified Manual Lymphatic Drainage (MLD) for post-surgery recovery, lymphoedema, swelling, and immune support in Archway, North London. Book with Carlos Bonvicine.',
  path: '/services/manual-lymphatic-drainage',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Manual Lymphatic Drainage (MLD)',
  description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling, and immune support. Gentle and non-invasive treatment in Archway, North London.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'London', postalCode: 'N19 5LB' },
  },
  areaServed: { '@type': 'City', name: 'London' },
  serviceType: 'Manual Lymphatic Drainage',
}

export default function ManualLymphaticDrainagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#618020] font-semibold uppercase tracking-widest text-sm mb-3">MLD · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311] mb-4">
            Manual Lymphatic Drainage Massage
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#334311]/80">
            Gentle Support for Natural Healing and Recovery
          </h2>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.mld} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#334311] mb-4">Who is this treatment for?</h2>
            <p className="text-gray-700 mb-4">Manual Lymphatic Drainage is particularly beneficial for:</p>
            <ul className="space-y-2">
              {[
                'Clients recovering from cosmetic or orthopaedic surgery',
                'Individuals with swelling, puffiness, or water retention',
                'Those managing lymphoedema or post-injury recovery',
                'People seeking improved circulation, healing, or immune support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#618020] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#334311] mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes', desc: 'Focused MLD treatment for a specific area. Suitable for targeted swelling management or follow-up sessions.' },
                { duration: '60 Minutes', desc: 'A thorough MLD session covering multiple areas. Recommended for post-surgery recovery and general lymphatic support.' },
                { duration: '90 Minutes', desc: 'Comprehensive full-body MLD treatment. Ideal for more complex lymphatic conditions or full post-surgical recovery support.' },
              ].map((option) => (
                <div key={option.duration} className="bg-[#c6e28a] rounded-xl p-5">
                  <p className="font-bold text-[#334311] text-lg mb-2">{option.duration}</p>
                  <p className="text-[#334311]/80 text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#334311] mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Reduced swelling, bruising, and water retention',
                'Improved circulation and faster recovery after surgery or injury',
                'Relief from puffiness and fluid build-up',
                'Boosted immune function and natural detoxification',
                'Gentle relaxation for body and mind',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#618020] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#334311] mb-4">What techniques are used?</h2>
            <p className="text-gray-700 mb-3">MLD uses specialised, gentle techniques including:</p>
            <ul className="space-y-2">
              {[
                'Gentle rhythmic hand movements',
                'Precise pressure techniques designed to stimulate lymph flow',
                'Safe, non-invasive methods suitable for post-surgery clients',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#618020] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-[#334311] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Post-surgery or managing swelling?</h2>
            <p className="text-[#c6e28a] mb-6">
              Delivered by a Certified MLD Practitioner in Archway, North London. Each session is tailored to your individual needs for effective support with recovery, circulation, and lymphatic health.
            </p>
            <BookingButton href={BOOKING_URLS.mld} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-[#334311] mb-4">Related services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/advanced-clinical-massage" className="text-[#618020] hover:text-[#334311] font-medium min-h-[44px] flex items-center">
                → Advanced Clinical Massage &amp; Soft Tissue Remedial Therapy
              </Link>
              <Link href="/services/2-hour-pain-relief-massage" className="text-[#618020] hover:text-[#334311] font-medium min-h-[44px] flex items-center">
                → 2-Hour Pain Relief Massage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
