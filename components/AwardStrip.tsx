import Link from 'next/link'
import Image from 'next/image'

/**
 * Slim award strip. Sits between the hero and the Services section on a clean
 * white band so it reads as its own strip (the Services block below is cream).
 * Greyscale and quiet by default so it fits the forest / teal palette, then
 * reveals the Prestige Awards colour on hover, focus or tap and links through
 * to the full award page. Pure CSS, no client JS.
 */
export function AwardStrip() {
  return (
    <Link
      href="/awards"
      aria-label="Range and Restore named New Sports Massage Clinic of the Year 2026/27 at the Prestige Awards. View the award."
      className="group block bg-white border-y border-[#1a3d3a]/12 shadow-sm hover:bg-[#FCFBF9] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-center gap-3 text-center">
        <Image
          src="/prestige-awards-2026-winner-logo.png"
          alt="Prestige Awards 2026/27 winner"
          width={40}
          height={43}
          className="h-7 sm:h-8 w-auto flex-shrink-0 grayscale opacity-80 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100 group-active:grayscale-0 group-active:opacity-100"
        />
        <span className="text-xs sm:text-sm font-bold leading-snug tracking-tight text-[#1a3d3a] transition-colors duration-500 group-hover:text-[#C2410C] group-focus:text-[#C2410C] group-active:text-[#C2410C]">
          Winner, New Sports Massage Clinic of the Year 2026/27, Prestige Awards
        </span>
        <span className="text-[0.7rem] sm:text-xs font-black uppercase tracking-wide text-[#1a3d3a]/50 transition-colors group-hover:text-[#1a3d3a] group-focus:text-[#1a3d3a] whitespace-nowrap">
          View <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}
