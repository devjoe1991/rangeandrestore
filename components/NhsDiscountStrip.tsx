import Link from 'next/link'
import { FEATURE_CARD_SHELL, FeatureCardContent } from '@/components/FeatureCard'
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
 * One action, so the whole panel is the link. The discount is verified at the
 * clinic and has exclusions, so the action we want is "read the terms", not
 * "book now": someone who booked straight from here without reading would turn
 * up expecting £10 off a Community Tuesday session.
 */
export function NhsDiscountCard() {
  return (
    <Link
      href={ROUTES.nhsEmergencyServicesDiscount}
      className={`${FEATURE_CARD_SHELL} group bg-bluelight text-white hover:bg-bluelight-deep`}
    >
      <FeatureCardContent
        inverse
        eyebrow="NHS & Emergency Services"
        title={`${NHS_DISCOUNT.display} off every full-priced massage`}
        lead="For NHS staff, ambulance, police, fire and rescue, and health and social care workers."
        body={
          <p>
            Book and pay as normal, then show your Blue Light Card or workplace ID at our Archway
            clinic on the day. We refund the {NHS_DISCOUNT.display} to your card, or hold it as
            credit against your next session.
          </p>
        }
        aside={
          <>
            <div className="rounded-xl bg-white px-5 py-4 text-center">
              <p className="text-3xl font-black leading-none text-bluelight sm:text-4xl">
                {NHS_DISCOUNT.display}
              </p>
              <p className="mt-1 text-[0.65rem] font-black uppercase tracking-widest text-bluelight/70">
                off each session
              </p>
            </div>
            <span className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-4 text-sm font-bold text-white underline underline-offset-2 transition-colors group-hover:text-white/70">
              How it works <span aria-hidden="true">&rarr;</span>
            </span>
          </>
        }
      />
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
