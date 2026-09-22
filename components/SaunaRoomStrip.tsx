import Image from 'next/image'
import Link from 'next/link'
import { FEATURE_CARD_SHELL, FeatureCardContent } from '@/components/FeatureCard'
import { ROUTES } from '@/lib/routes'

const SAUNA_PHOTO = {
  src: '/sauna-room/hero-portrait.jpg',
  alt: 'The infrared sauna glowing in the private recovery suite at Range and Restore, Archway',
}

const SAUNA_POINTS = [
  'Private and enclosed, yours alone',
  'Perfect for couples',
  'Full spectrum infrared and traditional heat',
  'Award winning clinic in Archway',
]

/**
 * The virtual sauna tour as a carousel card, built on the shared skeleton so
 * its eyebrow, heading and body sit exactly where the other three cards' do.
 *
 * That costs the photo its full-bleed panel: here it is the aside, the same
 * fixed column the other cards put their price tiles and badge in. A
 * full-height image down one edge would have pushed this card's heading to a
 * different place from every other card, which is the drift the carousel makes
 * obvious. /services still gets the original full-bleed treatment below.
 *
 * This is the card the whole row sizes itself against, so it is also the one
 * that was trimmed: every pixel it loses is a pixel of empty space the
 * charities card no longer has to pad out. The four selling points and the
 * secondary link are gone from the carousel for that reason — measured on a
 * 390px phone they were 103px and 41px of pure height. Both survive on the
 * /services strip below, which stands alone and has nothing to line up with.
 */
export function SaunaRoomCard() {
  return (
    <div className={`${FEATURE_CARD_SHELL} border-2 border-brand-green bg-brand-green`}>
      <FeatureCardContent
        inverse
        eyebrow="Virtual Sauna Room Tour"
        title="Explore our sauna room before you book"
        lead="A private two person infrared suite at the quiet back of the clinic."
        body={
          <p>
            Walk around the real room in 3D, flick the lights on and off, and see exactly what you
            are booking — then come and feel it.
          </p>
        }
        aside={
          <>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={SAUNA_PHOTO.src}
                alt={SAUNA_PHOTO.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <Link
              href={ROUTES.saunaRoom}
              className="mt-auto flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 text-center text-sm font-semibold text-brand-green transition hover:bg-white/90"
            >
              Enter the virtual room
            </Link>
          </>
        }
      />
    </div>
  )
}

/**
 * The original full-bleed panel, used on /services where it stands alone and
 * has no sibling cards to line up with. The portrait image is a render of the
 * same 3D model the tour loads, so what you see here is what you walk into.
 */
export function SaunaRoomStrip() {
  return (
    <section className="bg-page pb-5 pt-[clamp(3.5rem,6vw,5.5rem)]" aria-label="Virtual sauna room tour">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-panel border-2 border-brand-green bg-brand-green">
          <div className="flex flex-col gap-0 lg:flex-row">
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:w-[38%] lg:min-h-[420px]">
              <Image
                src={SAUNA_PHOTO.src}
                alt={SAUNA_PHOTO.alt}
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
                {SAUNA_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
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
      </div>
    </section>
  )
}
