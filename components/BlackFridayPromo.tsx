import { BookingButton } from '@/components/BookingButton'
import { BLACK_FRIDAY_PROMO, isBlackFridayPromoLive } from '@/lib/constants'

/**
 * Black Friday early access banner for the homepage: a free 45-minute private
 * infrared sauna session with every 60-minute (£75) or 90-minute (£110)
 * massage booked in the window.
 *
 * Sits straight under the hero video, overlapping its bottom edge the same way
 * AwardStrip does, so it is the first thing after the video on every screen
 * size. Near-black with lime accents so it reads as a campaign rather than
 * another sand-coloured service block.
 *
 * The Book Now button goes to the general Jane list via BookingButton, so the
 * delegated listener in components/Analytics.tsx counts a click as a `book`
 * conversion with no extra wiring.
 *
 * Server component, no client JS. Returns null once the window has closed.
 * The date is read at render time, so it only drops off the live site when the
 * page is re-rendered; the homepage sets `revalidate` for exactly that.
 */
export function BlackFridayPromo() {
  if (!isBlackFridayPromoLive()) return null

  return (
    <section
      aria-labelledby="black-friday-heading"
      className="bf-promo relative z-10 -mt-4 overflow-hidden rounded-t-2xl bg-brand-green-dark text-white"
    >
      <div aria-hidden="true" className="bf-promo-glow absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-4 pb-9 pt-7 sm:px-6 sm:pb-10 sm:pt-9 lg:px-8">
        <div className="grid items-center gap-6 md:grid-cols-[1.35fr_1fr] md:gap-10">
          {/* Copy */}
          <div className="text-center md:text-left">
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.7rem] font-black uppercase tracking-[0.16em] text-accent-light sm:text-xs md:justify-start">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <HeartIcon />
                Black Friday early access
              </span>
              <span className="whitespace-nowrap">
                <span aria-hidden="true" className="hidden sm:inline">· </span>
                {BLACK_FRIDAY_PROMO.window}
              </span>
            </p>

            <h2
              id="black-friday-heading"
              className="mt-3 text-balance text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Your recovery, <span className="text-accent-light">our treat.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-teal-tint sm:text-base md:mx-0">
              Book a <strong className="font-extrabold text-white">60-minute massage (£75)</strong> or a{' '}
              <strong className="font-extrabold text-white">90-minute massage (£110)</strong> and we
              will add a private infrared sauna session, on us.
            </p>

            <ul className="mx-auto mt-5 max-w-xl space-y-2 text-left text-[0.8125rem] font-semibold leading-snug text-white/85 sm:text-sm md:mx-0">
              <li className="flex gap-2.5">
                <TickIcon />
                <span>Enjoy it before or straight after your massage, subject to availability.</span>
              </li>
              <li className="flex gap-2.5">
                <TickIcon />
                <span>Or book it for another day, any time up to {BLACK_FRIDAY_PROMO.saunaUseBy}.</span>
              </li>
              <li className="flex gap-2.5">
                <TickIcon />
                <span>Every qualifying massage booking counts. Book two or three and you get a sauna session with each one.</span>
              </li>
            </ul>
          </div>

          {/* The gift */}
          <div className="mx-auto w-full max-w-sm rounded-3xl bg-accent-light p-6 text-center text-ink shadow-[0_18px_50px_-12px_rgba(0,0,0,0.55)] sm:p-7">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-brand-green/80">
              With every massage
            </p>
            <p className="mt-1 text-6xl font-black leading-none tracking-tight text-brand-green sm:text-7xl">
              FREE
            </p>
            <p className="mt-2 text-base font-extrabold leading-snug text-ink sm:text-lg">
              45-minute private
              <br />
              infrared sauna session
            </p>

            <BookingButton
              label="Book Now"
              variant="solid"
              className="mt-6 w-full sm:w-auto sm:px-10"
            />
            <p className="mt-3 text-[0.7rem] font-semibold text-brand-green/75">
              Offer runs {BLACK_FRIDAY_PROMO.window}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function TickIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-px flex-shrink-0 text-accent-light">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  )
}
