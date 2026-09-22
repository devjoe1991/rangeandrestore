import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

/**
 * The virtual sauna tour, as a card and as a standalone strip. The portrait
 * image is a render of the same 3D model the tour loads, so what you see here
 * is what you walk into.
 *
 * `compact` only changes the mobile image, which is the one thing that does not
 * survive the move into the homepage carousel: at aspect-[4/5] a full-width
 * portrait image makes this the tallest card by a long way, and every other
 * card in the row stretches to match it. Above lg the image sits beside the
 * text and the ratio is irrelevant, so compact changes nothing there.
 */
export function SaunaRoomCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-panel border-2 border-brand-green bg-brand-green">
      <div className="flex flex-1 flex-col gap-0 lg:flex-row">
        <div
          className={`relative w-full lg:aspect-auto lg:w-[38%] lg:min-h-[420px] ${
            compact ? 'aspect-[16/10]' : 'aspect-[4/5]'
          }`}
        >
          <Image
            src="/sauna-room/hero-portrait.jpg"
            alt="The infrared sauna glowing in the private recovery suite at Range and Restore, Archway"
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            An immersive experience in wellbeing
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore our members-only sauna room before you book
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            A private two person infrared suite, tucked away at the quiet back of the clinic and
            shut off from the hustle outside. Walk around the real room in 3D, flick the lights
            on and off, and see exactly what you are booking — then come and feel it.
          </p>

          <ul className="mt-5 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
            <li>Private and enclosed, yours alone</li>
            <li>Perfect for couples</li>
            <li>Full spectrum infrared and traditional heat</li>
            <li>Award winning clinic in Archway</li>
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <Link
              href={ROUTES.saunaRoom}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-white/90"
            >
              Enter the virtual room
            </Link>
            <Link
              href={ROUTES.recoverySuite.infraredSauna}
              className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About the sauna
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * The card on its own section, used on /services. Deliberately not the shared
 * .section rhythm: it reads as a pair with the block below it, so the gap is
 * tighter than the site's usual section spacing.
 */
export function SaunaRoomStrip() {
  return (
    <section className="bg-page pb-5 pt-[clamp(3.5rem,6vw,5.5rem)]" aria-label="Virtual sauna room tour">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SaunaRoomCard />
      </div>
    </section>
  )
}
