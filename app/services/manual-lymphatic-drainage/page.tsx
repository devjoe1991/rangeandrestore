import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Manual Lymphatic Drainage (MLD) London | Archway N19',
  description: 'Certified Manual Lymphatic Drainage in North London for post-surgery and post-op swelling, lymphoedema, fluid retention and immune support. Gentle, hands-on, evidence-based. From £50.',
  path: '/services/manual-lymphatic-drainage',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Manual Lymphatic Drainage', path: '/services/manual-lymphatic-drainage' },
])

// MLD-specific FAQs. This page sat at position 46 in Search Console on ~340
// quarterly impressions, largely because it was the thinnest service page on the
// site (~480 words) with no FAQ schema. These target the questions people
// actually search around post-op swelling and lymphoedema.
const faqs = [
  {
    q: 'What is Manual Lymphatic Drainage and how is it different from a normal massage?',
    a: 'Manual Lymphatic Drainage is a gentle, rhythmic, hands-on technique that works with the lymphatic system rather than the muscles. Where a sports or deep tissue massage uses firm pressure to release muscular tension, MLD uses very light pressure and a specific directional sequence to encourage lymph fluid to move through the vessels and nodes towards where it can drain. It should never feel deep or painful. If it does, it is not MLD.',
  },
  {
    q: 'How soon after surgery can I have MLD?',
    a: 'That depends entirely on the procedure and your surgeon. Many surgeons recommend starting lymphatic drainage within the first couple of weeks after an operation, while others prefer to wait longer, and some procedures have specific protocols. Always follow the guidance of the surgical team who performed your operation, and bring their advice with you. We will not treat over unhealed incisions and we will ask about your post-operative instructions before starting.',
  },
  {
    q: 'Does MLD help with post-surgery swelling?',
    a: 'Reducing post-operative swelling is one of the most common reasons people are referred for MLD. After surgery the lymphatic pathways in the area are disrupted, and fluid that would normally drain away collects in the tissue. MLD encourages that fluid towards intact pathways, which can help with swelling, tightness and the heavy, congested feeling that follows many procedures. It is usually most effective as a short course rather than a single session.',
  },
  {
    q: 'Can MLD help with lymphoedema?',
    a: 'MLD is a recognised part of lymphoedema management, most often as one element of a broader plan that may also include compression garments, skin care and exercise. It can help manage the volume and the discomfort, but it is not a cure and it works best alongside care from a lymphoedema specialist or your medical team. If you have a formal lymphoedema diagnosis, tell us at booking so the session can be planned appropriately.',
  },
  {
    q: 'How many MLD sessions will I need?',
    a: 'For post-surgical swelling, a short course of several sessions relatively close together usually produces a better result than occasional single appointments, because the effect builds. Many people start with a weekly session and space them out as the swelling settles. For ongoing lymphoedema management, a longer-term rhythm agreed with your medical team is more appropriate. Your therapist will give you an honest view at the first appointment rather than sell you a package.',
  },
  {
    q: 'Is Manual Lymphatic Drainage the same as compression boots?',
    a: 'No, and this is a common mix-up. Normatec pneumatic compression, which we offer in the Recovery Suite, uses inflating sleeves for general circulation and muscle recovery after training. MLD is a clinical, hands-on technique delivered by a certified practitioner for post-surgical swelling and lymphoedema. They are different treatments for different purposes, and compression boots are not a substitute for MLD if you have had surgery or have a lymphatic condition.',
  },
  {
    q: 'When should I avoid MLD?',
    a: 'MLD is not appropriate if you have an active infection or cellulitis in the area, untreated congestive heart failure, an acute deep vein thrombosis, or an active untreated cancer without your oncology team\u2019s agreement. Tell us about any medical conditions, medication and recent procedures at booking, and if there is any doubt we will ask you to check with your GP or consultant before we treat.',
  },
  {
    q: 'Where can I get Manual Lymphatic Drainage in North London?',
    a: 'Range and Restore is at 130 Junction Road, Archway, N19 5LB, two minutes from Archway tube on the Northern Line, with clients travelling in from Islington, Holloway, Tufnell Park, Highgate, Crouch End, Finsbury Park, Camden and Kentish Town. MLD is delivered by a certified practitioner and sessions start from \u00a350.',
  },
]

const faqSchema = buildFaqSchema(faqs)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Manual Lymphatic Drainage (MLD)',
  description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling, and immune support. Gentle and non-invasive treatment in Archway, North London.',
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
  serviceType: 'Manual Lymphatic Drainage',
}

export default function ManualLymphaticDrainagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">MLD · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Manual Lymphatic Drainage (MLD) in Archway, London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Gentle Support for Natural Healing and Recovery
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.mld} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">Manual Lymphatic Drainage is particularly beneficial for:</p>
            <ul className="space-y-2">
              {[
                'Clients recovering from cosmetic or orthopaedic surgery',
                'Individuals with swelling, puffiness, or water retention',
                'Those managing lymphoedema or post-injury recovery',
                'People seeking improved circulation, healing, or immune support',
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
            <h2 className="text-2xl font-bold text-page mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes – £50', desc: 'Focused MLD treatment for a specific area. Suitable for targeted swelling management or follow-up sessions.' },
                { duration: '60 Minutes – £75', desc: 'A thorough MLD session covering multiple areas. Recommended for post-surgery recovery and general lymphatic support.' },
                { duration: '90 Minutes – £110', desc: 'Comprehensive full-body MLD treatment. Ideal for more complex lymphatic conditions or full post-surgical recovery support.' },
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
                'Reduced swelling, bruising, and water retention',
                'Improved circulation and faster recovery after surgery or injury',
                'Relief from puffiness and fluid build-up',
                'Boosted immune function and natural detoxification',
                'Gentle relaxation for body and mind',
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
            <h2 className="text-2xl font-bold text-page mb-4">What techniques are used?</h2>
            <p className="text-page-muted mb-3">MLD uses specialised, gentle techniques including:</p>
            <ul className="space-y-2">
              {[
                'Gentle rhythmic hand movements',
                'Precise pressure techniques designed to stimulate lymph flow',
                'Safe, non-invasive methods suitable for post-surgery clients',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="mld-faqs">
            <h2 id="mld-faqs" className="text-2xl font-black text-page mb-5">Common questions about MLD</h2>
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
            <h2 className="text-2xl font-black text-ink mb-4">Book your MLD treatment</h2>
            <p className="text-brand-green font-semibold mb-6">
              Support your recovery with certified Manual Lymphatic Drainage. Assessment-led treatment in a professional clinic environment.
            </p>
            <BookingButton href={BOOKING_URLS.mld} label="Book Your Treatment" />
          </section>

          <div className="border-t pt-8">
            <p className="text-page-muted text-sm mb-6 italic">
              Note: Normatec pneumatic compression in our Recovery Suite is not the same as Manual Lymphatic Drainage. MLD is a clinical hands-on technique for post-surgery recovery and lymphoedema. See
              {' '}<Link href={ROUTES.recoverySuite.compressionTherapy} className="text-brand-teal underline">Compression Therapy</Link>{' '}
              if you&apos;re looking for general recovery support rather than clinical lymphatic treatment.
            </p>
            <h3 className="text-lg font-semibold text-page mb-4">Related services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline link-inline-tap">
                → Advanced Clinical Massage &amp; Soft Tissue Remedial Therapy
              </Link>
              <Link href={ROUTES.services.twoHourPainReliefMassage} className="link-inline link-inline-tap">
                → 2-Hour Pain Relief Massage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
