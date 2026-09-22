import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import { NHS_DISCOUNT } from '@/lib/constants'

/**
 * Strip for /nhs-emergency-services-discount, used on the homepage, on
 * /giving-back and on the sports massage page.
 *
 * One action, so the whole panel is the link — same pattern as GivingBackStrip.
 * The discount is verified at the clinic and has exclusions, so the action we
 * want is "read the terms", not "book now": someone who books straight from
 * here without reading would turn up expecting £10 off a Community Tuesday
 * session.
 *
 * bg-brand-green rather than the sage used by the community panels, so it does
 * not read as a third variation of the same card on the homepage, and the
 * amount sits in an accent-light badge that carries the contrast at a glance.
 *
 * `className` defaults to the homepage case (flush top, own bottom padding,
 * because the strip above already supplies the gap). The two inner pages pass
 * a flush-both string, since the container below brings its own top padding.
 */
export function NhsDiscountStrip({
  className = 'section section-flush-t bg-page',
}: {
  className?: string
}) {
  return (
    <section className={className} aria-labelledby="nhs-discount-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.nhsEmergencyServicesDiscount}
          className="group block rounded-panel bg-brand-green text-white no-underline p-6 sm:p-8 lg:p-10 hover:bg-brand-green-dark transition-colors"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex-1">
              <span className="eyebrow eyebrow-inverse block mb-2">NHS &amp; Emergency Services</span>
              <h2 id="nhs-discount-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
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
              <div className="rounded-xl bg-accent-light px-5 py-4 text-center">
                <p className="text-3xl sm:text-4xl font-black text-ink leading-none">{NHS_DISCOUNT.display}</p>
                <p className="text-ink/70 text-[0.65rem] font-black uppercase tracking-widest mt-1">off each session</p>
              </div>
              <span className="text-white text-sm font-bold underline underline-offset-2 inline-flex items-center gap-2 min-h-[44px] group-hover:text-accent-light transition-colors">
                How it works <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
