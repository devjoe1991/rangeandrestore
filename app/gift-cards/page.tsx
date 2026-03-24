import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Gift Cards – Sports Massage Gift Cards Archway London',
  description: 'Give the gift of expert sports massage. Purchase a Range and Restore gift card and treat your friends and family to a rejuvenating session in Archway, London.',
  path: '/gift-cards',
})

export default function GiftCardsPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Gift Cards</h1>
          <p className="mt-4 text-xl text-page-muted">The perfect gift for friends, family, or yourself</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center">
        <h2 className="text-3xl font-bold text-page mb-6">
          Treat your friends and family to a rejuvenating massage session
        </h2>
        <p className="text-lg text-page-muted mb-8">
          Perfect for every occasion. Gift cards are valid for 12 months from the purchase date and can be redeemed against any treatment at Range and Restore Sports Massage in Archway, North London.
        </p>

        <div className="bg-page-sage rounded-2xl p-10 mb-8">
          <p className="text-2xl font-bold text-page mb-6">Spread the love</p>
          <a
            href={BOOKING_URLS.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-10 py-4 text-xl"
          >
            Purchase a Gift Card
          </a>
          <p className="text-sm text-page-muted opacity-80 mt-4">Secure online purchase. Valid for 12 months.</p>
        </div>

        <div className="bg-page-alt rounded-xl p-6 text-left border border-page">
          <h3 className="text-xl font-bold text-page mb-4">Gift Card Terms</h3>
          <ul className="space-y-2 text-page-muted">
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Gift cards are valid for 12 months from the purchase date.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Gift cards are non-refundable.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Redeemable against any treatment at Range and Restore Sports Massage.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2ab4b8] font-bold mt-0.5">•</span>
              Cannot be exchanged for cash.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
