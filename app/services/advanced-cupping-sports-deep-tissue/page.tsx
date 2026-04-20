import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage – Archway London',
  description: 'Advanced cupping therapy combined with sports and deep tissue massage in Archway, North London. Relieves muscular tension, releases fascia, and accelerates recovery. Book with Carlos Bonvicine.',
  path: '/services/advanced-cupping-sports-deep-tissue',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage', path: '/services/advanced-cupping-sports-deep-tissue' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage',
  description: 'Integrated cupping therapy combined with sports and deep tissue massage. Uses static and dynamic cupping, myofascial release, and advanced manual therapy to relieve muscular tension, reduce pain and improve mobility.',
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
  serviceType: 'Cupping Therapy and Sports Massage',
}

export default function AdvancedCuppingSportsDeepTissuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Cupping Therapy · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Advanced Cupping Therapy &amp; Sports / Deep Tissue Massage in Archway, London
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-page-muted">
            A highly effective integrated treatment designed to relieve muscular tension, reduce pain, and improve mobility — targeting deeper layers of muscle and fascia to support recovery, performance, and long-term musculoskeletal health.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.cuppingSportsDeepTissue} label="Book Now" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">How it works</h2>
            <p className="text-page-muted mb-4">
              Cupping therapy uses controlled suction to lift and decompress soft tissues, increasing blood flow, reducing tightness, and promoting the body&apos;s natural healing response. When combined with sports and deep tissue massage techniques, it enhances tissue release, improves range of motion, and accelerates recovery from training or injury.
            </p>
            <p className="text-page-muted">
              Each session is tailored to your individual needs, using a combination of static and dynamic cupping, myofascial release, and advanced manual therapy techniques to achieve the best results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <ul className="space-y-2">
              {[
                'Clients with muscle tightness, stiffness, or chronic tension',
                'Runners and athletes preparing for or recovering from events',
                'Individuals with postural pain or desk-related discomfort',
                'Those recovering from injury or intense physical activity',
                'Anyone looking for a deeper, results-driven therapeutic treatment',
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
                { duration: '30 Minutes – £60', desc: 'Focused single-area treatment. Ideal for targeted cupping on a specific tight or painful region combined with deep tissue work.' },
                { duration: '60 Minutes – £85', desc: 'Integrated cupping plus sports and deep tissue massage across one or two regions. Great for recovery, mobility and chronic tension.' },
                { duration: '90 Minutes – £125', desc: 'Full-body or multi-area integrated treatment. Best for athletes, runners, or anyone with long-standing tension needing comprehensive care.' },
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
                'Myofascial decompression and tissue release',
                'Increased local blood flow and circulation',
                'Release of deep adhesions and scar tissue',
                'Reduced muscular tightness and chronic tension',
                'Improved range of motion and flexibility',
                'Accelerated recovery from training or injury',
                'Supports the body\u2019s natural healing response',
                'Relief from postural and desk-related pain',
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
            <p className="text-page-muted mb-3">Each session is tailored to your needs and may include:</p>
            <ul className="space-y-2">
              {[
                'Static (dry) cupping',
                'Dynamic (gliding) cupping',
                'Deep tissue massage',
                'Sports massage techniques',
                'Myofascial release',
                'Trigger point therapy',
                'Assisted stretching and mobilisation',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect</h2>
            <p className="text-page-muted">
              Cupping can leave temporary circular marks on the skin where the cups have drawn blood to the surface. These are not bruises and are not painful — they typically fade within a few days to two weeks and are a normal part of the treatment. Carlos will talk you through what to expect before your first session and tailor the pressure and duration to your tolerance and goals.
            </p>
          </section>

          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Ready for deeper, results-driven relief?</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              Assessment-led cupping and sports massage in Archway, North London. Whether you are training, recovering, or managing chronic tension, this integrated treatment supports your performance and long-term musculoskeletal health.
            </p>
            <BookingButton href={BOOKING_URLS.cuppingSportsDeepTissue} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/sports-massage-soft-tissue-therapy-archway" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Sports Massage and Soft Tissue Therapy — Perform, Recover and Stay Pain-Free
              </Link>
              <Link href="/blog/sports-massage-for-runners" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → How Sports Massage Helps Runners Before and After Races
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
