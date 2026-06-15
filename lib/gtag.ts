/**
 * Google Ads conversion tracking.
 *
 * The booking flow lives on an external domain (Jane App), so Google Ads cannot
 * see a completed booking. Instead we count the high-intent actions that happen
 * on this site and hand them to Google Ads as conversions:
 *   - `book`    → a Jane App "Book" link was clicked
 *   - `phone`   → the phone number (tel: link) was tapped
 *   - `contact` → the contact form was submitted successfully
 *
 * Set the IDs in .env.local once the conversion actions exist in Google Ads
 * (Tools → Conversions). Until then every call here is a safe no-op, so the
 * site behaves identically with or without tracking configured.
 */

export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID

export const CONVERSION_LABELS = {
  book: process.env.NEXT_PUBLIC_GADS_LABEL_BOOK,
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE,
  contact: process.env.NEXT_PUBLIC_GADS_LABEL_CONTACT,
} as const

export type ConversionKey = keyof typeof CONVERSION_LABELS

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Report a conversion to Google Ads. No-ops if the tag isn't loaded or the
 * relevant ID/label hasn't been configured yet.
 */
export function trackConversion(key: ConversionKey) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  if (!GADS_ID) return

  const label = CONVERSION_LABELS[key]
  if (!label) return

  window.gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${label}`,
  })
}
