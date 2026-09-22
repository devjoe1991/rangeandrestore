import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import { NHS_DISCOUNT } from '@/lib/constants'

/**
 * The NHS and emergency services discount, as a card and as a standalone strip.
 *
 * Blue and white, so it reads as the blue-light services at a glance and sits
 * apart from the green and sage cards it shares the homepage carousel with.
 * The blue is a house token, deliberately not the NHS logo blue — see
 * --color-bluelight in globals.css for why.
 *
 * One action, so the whole panel is the link — same pattern as GivingBackCard.
 * The discount is verified at the clinic and has exclusions, so the action we
 * want is "read the terms", not "book now": someone who booked straight from
 * here without reading would turn up expecting £10 off a Community Tuesday
 * session.
 */
export function NhsDiscountCard() {
  return (
    <Link
      href={ROUTES.nhsEmergencyServicesDiscount}
      className="group flex h-full w-full flex-col rounded-panel bg-bluelight text-white no-underline p-6 sm:p-8 lg:p-10 hover:bg-bluelight-deep transition-colors"
    >
      <div className="flex flex-1 flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <div className="flex-1">
          <span className="eyebrow eyebrow-inverse block mb-2">NHS &amp; Emergency Services</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {NHS_DISCOUNT.display} off every full-priced massage
          </h2>
          <p className="text-white font-bold text-base sm:text-lg mb-3">
            For NHS staff, ambulance, police, fire and rescue, and health and social care workers.
          </p>
          <p className="text-white/80 text-sm font-medium leading-relaxed">
            Book and pay as normal, then show your Blue Light Card or workplace ID at our Archway clinic on the day. We refund the {NHS_DISCOUNT.display} to your card, or hold it as credit against your next session.
          </p>
        </div>

        <div className="flex-shrink-0 lg:w-56 flex flex-row lg:flex-col items-center gap-4 lg:gap-3">
          <div className="rounded-xl bg-white px-5 py-4 text-center">
            <p className="text-3xl sm:text-4xl font-black text-bluelight leading-none">{NHS_DISCOUNT.display}</p>
            <p className="text-bluelight/70 text-[0.65rem] font-black uppercase tracking-widest mt-1">off each session</p>
          </div>
          <span className="text-white text-sm font-bold underline underline-offset-2 inline-flex items-center gap-2 min-h-[44px] group-hover:text-white/70 transition-colors">
            How it works <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

/**
 * The card on its own section, for the pages that show it outside the homepage
 * carousel. `className` defaults to flush top (the block above supplies the
 * gap); callers inside a container pass a flush-both string.
 */
export function NhsDiscountStrip({
  className = 'section section-flush-t bg-page',
}: {
  className?: string
}) {
  return (
    <section className={className} aria-label="NHS and emergency services discount">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <NhsDiscountCard />
      </div>
    </section>
  )
}
