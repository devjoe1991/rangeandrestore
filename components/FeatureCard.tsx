import type { ReactNode } from 'react'

/**
 * The shared skeleton for the four homepage carousel cards.
 *
 * It exists for one reason: in a carousel you see one card at a time, so any
 * difference in where the eyebrow, heading and body sit reads as the page
 * twitching as you swipe. Every card was laying its own text out — different
 * padding, different weights, two of them vertically centred and two
 * top-aligned — so the heading landed somewhere new on each one.
 *
 * So the whole text column lives here and the cards pass content, not classes:
 *
 *   eyebrow → title → lead → body   in the main column, always top-aligned
 *   anything else                   in the aside, a fixed-width right column
 *
 * The aside is where the cards are allowed to differ: the sauna photo, the
 * Community Tuesday price tiles, a badge, a link. It is a fixed width so the
 * main column is the same width on every card too, not just the same height.
 *
 * Cards keep their own wrapper (some are a Link, some are not) and their own
 * surface colour, and spread FEATURE_CARD_SHELL for the padding and shape.
 * `inverse` switches the text to white for the cards on a dark panel.
 */
export const FEATURE_CARD_SHELL =
  'flex h-full w-full flex-col rounded-panel p-6 sm:p-8 lg:p-10 no-underline transition-colors'

export function FeatureCardContent({
  eyebrow,
  title,
  lead,
  body,
  aside,
  inverse = false,
}: {
  eyebrow: string
  title: string
  lead: string
  body: ReactNode
  aside?: ReactNode
  inverse?: boolean
}) {
  return (
    <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
      <div className="flex flex-1 flex-col">
        <span className={`eyebrow mb-2 block self-start ${inverse ? 'eyebrow-inverse' : ''}`}>
          {eyebrow}
        </span>
        <h2
          className={`mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${
            inverse ? 'text-white' : 'text-page'
          }`}
        >
          {title}
        </h2>
        <p className={`mb-3 text-base font-bold sm:text-lg ${inverse ? 'text-white' : 'text-page'}`}>
          {lead}
        </p>
        <div
          className={`text-sm font-medium leading-relaxed ${
            inverse ? 'text-white/80' : 'text-page-muted'
          }`}
        >
          {body}
        </div>
      </div>

      {aside ? <div className="flex flex-shrink-0 flex-col lg:w-72">{aside}</div> : null}
    </div>
  )
}
