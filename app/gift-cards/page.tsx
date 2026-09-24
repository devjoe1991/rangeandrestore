import type { Metadata } from 'next'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Gift Cards – Sports Massage Gift Cards Archway London',
  description: 'Buy a Range and Restore gift card for any amount. Sent by email with a unique code, redeemable against any treatment at our Archway clinic for 12 months.',
  path: '/gift-cards',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Gift Cards', path: '/gift-cards' }])

const giftCardSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Range and Restore Gift Card',
  description: 'Gift card for any amount, sent by email with a unique code. Redeemable against any treatment at Range and Restore in Archway, North London (not bundle packages). Valid for 12 months.',
  url: 'https://rangeandrestore.co.uk/gift-cards',
  brand: { '@type': 'Organization', name: 'Range and Restore Sports Massage' },
  offers: {
    '@type': 'Offer',
    url: BOOKING_URLS.giftCards,
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
  },
}

export default function GiftCardsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(giftCardSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Gift Cards</h1>
          <p className="mt-4 text-xl text-page-muted">The perfect gift for friends, family, or yourself</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center">
        <h2 className="text-3xl font-bold text-page mb-6">
          Give someone a massage at Range and Restore
        </h2>
        <p className="text-lg text-page-muted mb-4">
          You choose the amount. The gift card is sent by email and comes with its own unique code, which can be redeemed against any treatment at Range and Restore Sports Massage in Archway, North London. It is valid for 12 months from the purchase date.
        </p>
        <p className="text-page-muted mb-8">
          Gift cards can&apos;t be used for massage bundles or to buy another gift card.
        </p>

        <div className="bg-page-sage rounded-2xl p-10 mb-8">
          <p className="text-2xl font-bold text-page mb-6">Buy a gift card</p>
          <a
            href={BOOKING_URLS.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-10 py-4 text-xl"
          >
            Purchase a Gift Card
          </a>
          <p className="text-sm text-page-muted opacity-80 mt-4">Opens our online booking system (Jane) in a new tab, where you pay securely. Valid for 12 months.</p>
        </div>

        <div className="bg-page-alt rounded-xl p-6 text-left border border-page">
          <h3 className="text-xl font-bold text-page mb-4">Gift Card Terms</h3>
          <ul className="space-y-2 text-page-muted">
            <li className="flex items-start gap-2">
              <span className="text-brand-teal font-bold mt-0.5">•</span>
              Gift cards are valid for 12 months from the purchase date.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal font-bold mt-0.5">•</span>
              Gift cards are non-refundable.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal font-bold mt-0.5">•</span>
              Redeemable against any treatment at Range and Restore Sports Massage.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal font-bold mt-0.5">•</span>
              Cannot be used to buy massage bundles or other gift cards.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal font-bold mt-0.5">•</span>
              Cannot be exchanged for cash.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
