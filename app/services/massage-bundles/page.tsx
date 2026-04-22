import type { Metadata } from 'next'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Bundle Offers – Archway, London N19',
  description: 'Save with 5 or 10 session massage bundles at Range and Restore in Archway, London. Packages from £350 for 60 and 90 minute sessions with Carlos Bonvicine.',
  path: '/services/massage-bundles',
})

const bundles = [
  {
    title: 'Pain Relief & Mobility Plan – 5 × 60-Minute Sessions',
    price: '£350',
    validity: 'Expires after 6 months',
    saving: 'Save £75',
    description: 'This 5-session plan is designed to reduce pain, improve mobility, and begin building long-term results through consistent, targeted treatment. Each 60-minute session is tailored to your needs and may include sports massage, deep tissue therapy, soft tissue remedial techniques, cupping, myofascial release, assisted stretching, and aftercare advice.',
    ideal: 'Ideal for: Clients wanting regular maintenance sessions, people managing a specific issue or injury over time, and those looking to build consistent self-care into their routine.',
  },
  {
    title: 'Pain Relief & Mobility Plan – 10 × 60-Minute Sessions',
    price: '£650',
    validity: 'Expires after 12 months',
    saving: 'Save £200',
    description: 'This structured 10-session plan is designed to reduce pain, improve mobility, and deliver long-term results through consistent, targeted treatment. Each 60-minute session is tailored to your needs and may include sports massage, deep tissue therapy, soft tissue remedial techniques, cupping, myofascial release, assisted stretching, and aftercare advice.',
    ideal: 'Ideal for: Clients committed to a long-term recovery plan, individuals with chronic pain or recurring injuries, and those who have experienced the benefits of regular massage and want to continue.',
  },
  {
    title: 'Advanced Recovery & Performance Plan – 5 × 90-Minute Sessions',
    price: '£500',
    validity: 'Expires after 6 months',
    saving: 'Save £125',
    description: 'This 5-session advanced plan is designed for clients who need deeper, more focused treatment to address pain, improve mobility, and accelerate recovery. Each 90-minute session allows for a thorough assessment and extended hands-on work, combining sports massage, deep tissue therapy, soft tissue remedial techniques, cupping, myofascial release, and assisted stretching.',
    ideal: 'Ideal for: Athletes and runners, clients with multiple areas of concern, and those who prefer a more thorough, in-depth session each time.',
  },
  {
    title: 'Advanced Recovery & Performance Plan – 10 × 90-Minute Sessions',
    price: '£950',
    validity: 'Expires after 10 months',
    saving: 'Save £300',
    description: 'This 10-session advanced plan is designed for clients committed to achieving long-term pain relief, improved mobility, and optimal physical performance through consistent, high-level treatment. Each 90-minute session provides the time for a full assessment and comprehensive hands-on therapy, combining sports massage, deep tissue work, and advanced soft tissue techniques.',
    ideal: 'Ideal for: Clients with complex or chronic conditions, performance-focused athletes, and those looking for the best possible long-term value and care.',
  },
]

const breadcrumbs = buildBreadcrumbs([{ name: 'Services', path: '/services' }, { name: 'Massage Bundles', path: '/services/massage-bundles' }])

const offersSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Massage Bundle Offers',
  description: 'Save with 5 or 10 session massage bundles at Range and Restore in Archway, London.',
  url: 'https://rangeandrestore.co.uk/services/massage-bundles',
  itemListElement: bundles.map((b) => ({
    '@type': 'Offer',
    name: b.title,
    price: b.price.replace('£', ''),
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-01-01',
    offeredBy: {
      '@type': 'LocalBusiness',
      name: 'Range and Restore Sports Massage',
    },
  })),
}

export default function MassageBundlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">Massage Bundle Offers</h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Invest in Your Long-Term Wellbeing
          </p>
          <p className="mt-4 text-lg text-page-muted max-w-2xl">
            Regular massage is one of the most effective investments you can make in your health, recovery, and quality of life. Our bundle packages make consistent treatment more accessible and affordable, so you can commit to your wellbeing without compromise.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-10">
          {bundles.map((bundle) => (
            <div key={bundle.title} className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
              <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
              <div className="p-6 lg:p-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-page">{bundle.title}</h2>
                    <span className="inline-block bg-page-sage text-page text-sm font-semibold px-3 py-1 rounded-full">{bundle.saving}</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-bold text-[#2ab4b8]">{bundle.price}</span>
                    <span className="text-page-muted opacity-80 text-sm">{bundle.validity}</span>
                  </div>
                  <p className="text-page-muted mb-3">{bundle.description}</p>
                  <p className="text-page-muted text-sm italic">{bundle.ideal}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col gap-3">
                  <a
                    href={BOOKING_URLS.bundles}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-6 py-3 text-base whitespace-nowrap text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 lg:p-10 text-center">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Ready to commit to your health?</h2>
          <p className="text-[#1a3d3a] text-lg font-semibold mb-6 max-w-2xl mx-auto">
            Take control of your health and recovery with a tailored bundle that suits your needs. Secure your package today and start your journey towards better mobility, less pain, and improved performance.
          </p>
          <div className="flex justify-center">
            <a
              href={BOOKING_URLS.bundles}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8 py-3 text-base"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-10 bg-[#eeeeee] rounded-xl p-6">
          <h3 className="text-lg font-bold text-page mb-3">Bundle Terms</h3>
          <ul className="space-y-2 text-page-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Bundles are valid for the specified period from the date of first use.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Sessions are non-transferable and non-refundable once purchased.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Bundles are for personal use only and cannot be shared between clients.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Sessions must be booked in advance and are subject to availability.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
