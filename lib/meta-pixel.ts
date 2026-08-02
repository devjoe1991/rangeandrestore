/**
 * Meta (Facebook / Instagram) Pixel.
 *
 * Mirrors lib/gtag.ts. The booking flow lives on Jane App — an external domain
 * — so the pixel can never see a completed booking. We count the same three
 * high-intent actions that happen on this site and hand them to Meta:
 *   - `book`    → a Jane App "Book" link was clicked
 *   - `phone`   → the phone number (tel: link) was tapped
 *   - `contact` → the contact form was submitted successfully
 *
 * All three fire Meta's standard `Lead` event, separated by `content_name`,
 * rather than three different standard events (Schedule / Contact / Lead).
 * That's deliberate: at a small daily budget Meta can only optimise against an
 * event it sees often enough to learn from, and splitting the signal three ways
 * leaves each one too sparse. Events Manager can still break the single Lead
 * event down by content_name, so nothing is lost.
 *
 * Set NEXT_PUBLIC_META_PIXEL_ID in .env.local — the ID is in Events Manager →
 * Data sources. Until then every call here is a safe no-op, so the site behaves
 * identically with or without the pixel configured.
 */

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export type MetaLeadSource = 'book' | 'phone' | 'contact'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/** True once the pixel is configured and its base code has loaded. */
function ready(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.fbq === 'function' &&
    Boolean(META_PIXEL_ID)
  )
}

/**
 * Report a lead action to Meta. No-ops if the pixel isn't loaded or configured.
 * Fires nothing useful while consent is revoked — Meta drops events in that
 * state rather than queueing them, which is the behaviour we want.
 */
export function trackMetaLead(source: MetaLeadSource) {
  if (!ready()) return
  window.fbq!('track', 'Lead', { content_name: source })
}

/**
 * Fire a PageView. The inline base code sends the first one; this covers
 * client-side route changes, which App Router does without a document load.
 * Retargeting audiences are built from PageView URLs, so missing these would
 * make every visitor look like they only ever saw the landing page.
 */
export function trackMetaPageView() {
  if (!ready()) return
  window.fbq!('track', 'PageView')
}
