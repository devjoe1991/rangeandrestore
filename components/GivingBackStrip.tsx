import Link from 'next/link'
import { FEATURE_CARD_SHELL, FeatureCardContent } from '@/components/FeatureCard'
import { ROUTES } from '@/lib/routes'

/**
 * The charities we support, as a card for the homepage carousel.
 *
 * Deliberately low visual weight: it sits between the Community Tuesday card
 * and the NHS discount card, so the community run reads as one group before
 * the page returns to the commercial cards. Uses semantic classes rather than
 * AwardStrip's fixed sand hex, which only exists there to blend into the
 * Services section.
 *
 * This is the only card with nothing to show in the aside, so the aside holds
 * its "Read more" alone — keeping the main text column the same width here as
 * on the other three.
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
        lead="Whittington Health Charity and Phab."
        body={
          <p>
            Donated treatments and gift vouchers for Whittington Health Charity fundraising, and
            Carlos in the Phab recovery tent at the London Marathon three years running.
          </p>
        }
        aside={
          <span className="inline-flex min-h-[44px] items-center gap-2 text-xs font-black uppercase tracking-wide text-brand-teal transition-colors group-hover:text-page">
            Read more <span aria-hidden="true">&rarr;</span>
          </span>
        }
      />
    </Link>
  )
}
