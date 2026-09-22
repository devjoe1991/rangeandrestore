import Link from 'next/link'
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
 * This card is the shortest of the four, so the "Read more" is pushed to the
 * bottom with mt-auto — every card in the carousel stretches to the tallest.
 */
export function GivingBackCard() {
  return (
    <Link
      href={ROUTES.givingBack}
      className="group flex h-full w-full flex-col rounded-panel border-2 border-brand-green bg-page-sage px-6 py-6 sm:px-8 sm:py-8 lg:p-10 no-underline hover:bg-card transition-colors"
    >
      <span className="eyebrow block mb-2">Supporting Our Community</span>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-2">
        The charities we support
      </h2>
      <p className="text-page font-bold text-base sm:text-lg mb-3">
        Whittington Health Charity and Phab.
      </p>
      <p className="text-page-muted text-sm font-medium leading-relaxed">
        Donated treatments and gift vouchers for Whittington Health Charity fundraising, and Carlos in the Phab recovery tent at the London Marathon three years running.
      </p>
      <span className="mt-auto pt-5 text-brand-teal text-xs font-black uppercase tracking-wide inline-flex items-center gap-2 min-h-[44px] group-hover:text-page transition-colors">
        Read more <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  )
}
