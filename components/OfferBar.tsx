import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

/**
 * Sitewide announcement bar for the 2026 Early Black Friday offer, rendered above
 * the sticky header on every page.
 *
 * The whole bar is the link, so the click target is the full width rather than
 * just the pill — the pill is a visual affordance inside it. It points to the
 * internal offer page, where the full eligibility and redemption details sit
 * alongside a direct booking button.
 *
 * The copy is written twice, short for phones and full for sm and up, so the
 * bar stays two or three tight lines at 390px instead of wrapping into a wall
 * above the hero. Screen readers get neither variant — the aria-label on the
 * anchor overrides the inner text — so the duplication is visual only.
 *
 * Server component: no client JS, and no dismiss control, so there is nothing
 * to hydrate and no layout shift above the hero.
 */
export function OfferBar() {
  return (
    <Link
      href={ROUTES.offers.blackFridayEarlyAccess}
      aria-label="Early Black Friday access: get a free 45-minute private infrared sauna session with every qualifying 60 or 90-minute massage booked from 9 to 30 November 2026. View offer details"
      className="offer-bar group block"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-2 sm:py-2.5 flex items-center justify-center gap-2.5 sm:gap-4">

        <GiftIcon />

        <div className="min-w-0 text-left sm:text-center">
          <p className="text-white font-extrabold tracking-tight leading-tight text-[0.8125rem] sm:text-[0.9375rem]">
            Early Black Friday access
            <span className="hidden sm:inline text-white/80">
              {' '}— free 45-minute private infrared sauna with every 60 or 90-minute massage
            </span>
          </p>

          <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 sm:justify-center text-xs leading-tight">
            <span className="rounded-full bg-accent-light px-2 py-[0.09375rem] text-ink font-black">FREE SAUNA</span>
            <span className="text-white/60 font-medium sm:hidden">· with every 60 or 90-min massage · 9–30 Nov</span>
            <span className="hidden sm:inline text-white/60 font-medium">
              · book 9–30 November 2026
            </span>
          </p>
        </div>

        <span className="offer-bar-cta">
          View<span className="hidden sm:inline"> offer</span>{' '}
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}

/** Heat rising off a surface — the sauna cue, drawn rather than set as an emoji. */
function GiftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
      className="hidden sm:block text-accent-light flex-shrink-0" aria-hidden="true">
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />
    </svg>
  )
}
