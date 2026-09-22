import Link from 'next/link'
import { FEATURE_CARD_SHELL, FeatureCardContent } from '@/components/FeatureCard'
import { ROUTES } from '@/lib/routes'

/* Registered charity numbers, the same two the /giving-back page lists. */
const CHARITIES = [
  { name: 'Whittington Health', no: '1056452' },
  { name: 'Phab', no: '283931' },
] as const

/**
 * The charities we support, as a card for the homepage carousel.
 *
 * Deliberately low visual weight: it sits between the Community Tuesday card
 * and the NHS discount card, so the community run reads as one group before
 * the page returns to the commercial cards. Uses semantic classes rather than
 * AwardStrip's fixed sand hex, which only exists there to blend into the
 * Services section.
 *
 * This was the thinnest card by a distance, which meant it carried most of the
 * empty space the tallest card forced on the row. The aside now holds the two
 * charity registration numbers in the same tile pair Community Tuesday uses
 * for its prices, which fills it out with something real rather than spacing.
 */
export function GivingBackCard() {
  return (
    <Link
      href={ROUTES.givingBack}
      className={`${FEATURE_CARD_SHELL} group border-2 border-brand-green bg-page-sage hover:bg-card`}
    >
      <FeatureCardContent
        eyebrow="Supporting Our Community"
        title="The charities we support"
        lead="Whittington Health Charity and Phab, two registered charities."
        body={
          <p>
            Donated treatments and gift vouchers for Whittington Health Charity fundraising,
            including a £85 sports massage voucher for the Christmas Market raffle, and Carlos in
            the Phab recovery tent at the London Marathon three years running.
          </p>
        }
        aside={
          <>
            <div className="flex gap-3">
              {CHARITIES.map((charity) => (
                <div
                  key={charity.no}
                  className="flex-1 rounded-xl border border-brand-green/15 bg-card p-3 text-center"
                >
                  <p className="mb-1 text-[0.65rem] font-black uppercase tracking-widest text-brand-teal">
                    {charity.name}
                  </p>
                  <p className="text-sm font-black leading-none text-page">no. {charity.no}</p>
                </div>
              ))}
            </div>
            <span className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-4 text-xs font-black uppercase tracking-wide text-brand-teal transition-colors group-hover:text-page">
              Read more <span aria-hidden="true">&rarr;</span>
            </span>
          </>
        }
      />
    </Link>
  )
}
