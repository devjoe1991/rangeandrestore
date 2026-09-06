import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '@/lib/routes'

/**
 * Slim award strip between the hero and the Services section. Overlaps the
 * bottom of the hero photo with rounded top corners, and shares the Services
 * section's sandy background (#F2EDE4) so the two blend into one surface.
 * Shows the Prestige Awards logo in full colour and links through to the
 * full award page. Pure CSS, no client JS.
 */
export function AwardStrip() {
  return (
    <Link
      href={ROUTES.awards}
      aria-label="Range and Restore named New Sports Massage Clinic of the Year 2026/27 at the Prestige Awards. View the award."
      className="group relative z-10 block -mt-4 bg-sand-deep rounded-t-2xl hover:bg-sand-warm transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-center gap-3 text-center">
        <Image
          src="/prestige-awards-2026-winner-logo.png"
          alt="Prestige Awards 2026/27 winner"
          width={40}
          height={43}
          className="h-7 sm:h-8 w-auto flex-shrink-0"
        />
        <span className="text-xs sm:text-sm font-bold leading-snug tracking-tight text-brand-green transition-colors duration-500 group-hover:text-award-orange group-focus:text-award-orange group-active:text-award-orange">
          Winner, New Sports Massage Clinic of the Year 2026/27, Prestige Awards
        </span>
        <span className="text-[0.7rem] sm:text-xs font-black uppercase tracking-wide text-brand-green/50 transition-colors group-hover:text-brand-green group-focus:text-brand-green whitespace-nowrap">
          View <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}
