import { BOOKING_URLS } from '@/lib/constants'

/**
 * Sitewide announcement bar for the £10 infrared sauna add-on, rendered above
 * the sticky header on every page.
 *
 * The whole bar is the link, so the click target is the full width rather than
 * just the pill — the pill is a visual affordance inside it. It points at the
 * general Jane booking list rather than at the sauna booking page: the add-on
 * is taken at the clinic on the day, so the action we want is "book the
 * treatment". Because the href is a janeapp.co.uk URL, the delegated listener
 * in components/Analytics.tsx counts a click as a `book` conversion with no
 * extra wiring.
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
    <a
      href={BOOKING_URLS.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book your treatment and add 45 minutes of infrared sauna straight afterwards for £10, usually £19"
      className="offer-bar group block"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-2 sm:py-2.5 flex items-center justify-center gap-2.5 sm:gap-4">

        <HeatIcon />

        <div className="min-w-0 text-left sm:text-center">
          <p className="text-white font-extrabold tracking-tight leading-tight text-[0.8125rem] sm:text-[0.9375rem]">
            Extend your recovery
            <span className="hidden sm:inline text-white/80">
              {' '}— 45 minutes of infrared sauna straight after your massage
            </span>
          </p>

          <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 sm:justify-center text-[0.6875rem] sm:text-xs leading-tight">
            <span className="rounded-full bg-accent-light px-2 py-[0.09375rem] text-ink font-black">£10</span>
            <span className="text-white/70 font-semibold">
              usually <span className="line-through">£19</span>
            </span>
            <span className="text-white/60 font-medium sm:hidden">· 45 min sauna after your massage</span>
            <span className="hidden sm:inline text-white/60 font-medium">
              · stay warm, unwind and keep the circulation going
            </span>
            <span className="hidden sm:inline text-white/60 font-medium">· just ask on the day</span>
          </p>
        </div>

        <span className="offer-bar-cta">
          Book<span className="hidden sm:inline"> your treatment</span>{' '}
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  )
}

/** Heat rising off a surface — the sauna cue, drawn rather than set as an emoji. */
function HeatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
      className="hidden sm:block text-accent-light flex-shrink-0" aria-hidden="true">
      <path d="M8.5 13.5c0-2.4 2.4-3.4 2.4-5.8C10.9 5.8 9.5 4.4 9.5 3c2.9 1 5.8 3.4 5.8 6.8 0 1.4-.5 2.4-.5 3.4" />
      <path d="M5.5 17.2c1.6-1 3.6-1.5 6.5-1.5s4.9.5 6.5 1.5" />
      <path d="M5.5 20.7c1.6-1 3.6-1.5 6.5-1.5s4.9.5 6.5 1.5" />
    </svg>
  )
}
