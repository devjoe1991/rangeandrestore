import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Bundle Offers – Archway, London N19',
  description: 'Save with 5 or 10 session massage bundles at Range and Restore in Archway, London. Packages from £350 for 60 and 90 minute sessions with Carlos Bonvicine.',
  path: '/services/massage-bundles',
})

const bundles = [
  {
    title: '5 × 60-Minute Sessions',
    price: '£350',
    validity: 'Valid for 6 Months',
    saving: 'Save £25',
    description: 'Perfect for those committing to regular treatment over six months. Five 60-minute sessions provide consistent care to address ongoing muscular tension, manage injury recovery, or maintain the results of previous treatment.',
    ideal: 'Ideal for: Clients wanting regular maintenance sessions, people managing a specific issue or injury over time, and those looking to build consistent self-care into their routine.',
    href: BOOKING_URLS.general,
  },
  {
    title: '10 × 60-Minute Sessions',
    price: '£650',
    validity: 'Valid for 10 Months',
    saving: 'Save £100',
    description: 'The most comprehensive 60-minute bundle for long-term health investment. Ten sessions over ten months ensures consistent, ongoing treatment that delivers lasting improvements to mobility, pain levels, and muscular health.',
    ideal: 'Ideal for: Clients committed to a long-term recovery plan, individuals with chronic pain or recurring injuries, and those who have experienced the benefits of regular massage and want to continue.',
    href: BOOKING_URLS.general,
  },
  {
    title: '5 × 90-Minute Sessions',
    price: '£500',
    validity: 'Valid for 6 Months',
    saving: 'Save £25',
    description: 'Five extended sessions for clients who need more comprehensive treatment time. Each 90-minute session allows for a thorough assessment, full-body or multi-area treatment, and detailed aftercare discussion — the ideal format for active individuals and those with complex needs.',
    ideal: 'Ideal for: Athletes and runners, clients with multiple areas of concern, and those who prefer a more thorough, in-depth session each time.',
    href: BOOKING_URLS.general,
  },
  {
    title: '10 × 90-Minute Sessions',
    price: '£950',
    validity: 'Valid for 10 Months',
    saving: 'Save £100',
    description: 'The ultimate long-term treatment package. Ten 90-minute sessions over ten months delivers the most complete and consistent care available. Whether you\'re managing a complex condition, supporting athletic performance, or investing in your long-term musculoskeletal health, this bundle provides everything you need.',
    ideal: 'Ideal for: Clients with complex or chronic conditions, performance-focused athletes, and those looking for the best possible long-term value and care.',
    href: BOOKING_URLS.general,
  },
]

export default function MassageBundlesPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">Massage Bundle Offers</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Invest in Your Long-Term Wellbeing
          </h2>
          <p className="mt-4 text-lg text-page-muted max-w-2xl">
            Regular massage is one of the most effective investments you can make in your health, recovery, and quality of life. Our bundle packages make consistent treatment more accessible and affordable, so you can commit to your wellbeing without compromise.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-10">
          {bundles.map((bundle) => (
            <div key={bundle.title} className="bg-card border border-page rounded-2xl p-6 lg:p-10 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
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
                <div className="flex-shrink-0">
                  <a
                    href={bundle.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-8 py-4 text-base whitespace-nowrap"
                  >
                    Book This Bundle
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a3d3a] text-white rounded-2xl p-8 lg:p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to commit to your health?</h2>
          <p className="text-[#d4ecea] text-lg mb-6 max-w-2xl mx-auto">
            Take control of your health and recovery with a tailored bundle that suits your needs. Secure your package today and start your journey towards better mobility, less pain, and improved performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton label="Book Your Bundle" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-[#d4ecea] text-[#d4ecea] font-semibold px-8 py-3 hover:bg-page-sage hover:text-page transition-colors min-h-[44px]"
            >
              Ask a Question
            </Link>
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
