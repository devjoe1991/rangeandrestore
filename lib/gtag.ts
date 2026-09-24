/**
 * Google Ads conversion tracking.
 *
 * The booking flow lives on an external domain (Jane App), so Google Ads cannot
 * see a completed booking. Instead we count the high-intent actions that happen
 * on this site and hand them to Google Ads as conversions:
 *   - `book`    → a Jane App "Book" link was clicked
 *   - `phone`   → the phone number (tel: link) was tapped
 *   - `contact` → an email (mailto:) link was clicked
 *   - `whatsapp`→ a WhatsApp link was clicked (only reported to Ads once
 *                 NEXT_PUBLIC_GADS_LABEL_WHATSAPP is set)
 *
 * Set the IDs in .env.local once the conversion actions exist in Google Ads
 * (Tools → Conversions). Until then every call here is a safe no-op, so the
 * site behaves identically with or without tracking configured.
 */

export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID

/**
 * GA4 "Google tag" Measurement ID (G-XXXXXXXXXX). Use the SAME id entered in
 * Jane so the site → Jane booking journey is stitched into one cross-domain
 * GA4 session. Blank = GA4 stays off on this site.
 */
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID

export const CONVERSION_LABELS = {
  book: process.env.NEXT_PUBLIC_GADS_LABEL_BOOK,
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE,
  contact: process.env.NEXT_PUBLIC_GADS_LABEL_CONTACT,
  whatsapp: process.env.NEXT_PUBLIC_GADS_LABEL_WHATSAPP,
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

  // WhatsApp counts as a contact conversion until it has its own Ads label.
  const label = CONVERSION_LABELS[key] ?? (key === 'whatsapp' ? CONVERSION_LABELS.contact : undefined)
  if (!label) return

  window.gtag('event', 'conversion', {
    send_to: `${GADS_ID}/${label}`,
  })
}

/**
 * GA4 event names for the same four lead actions, so they show up in GA4 as
 * well as in Google Ads. Mark them as key events in GA4 (Admin → Events).
 */
export const GA4_LEAD_EVENTS: Record<ConversionKey, string> = {
  book: 'book_click',
  phone: 'phone_click',
  contact: 'email_click',
  whatsapp: 'whatsapp_click',
}

/** Send an event to GA4 only (not to the Google Ads tag). */
export function trackGa4Event(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  if (!GA4_ID) return
  window.gtag('event', name, { ...params, send_to: GA4_ID })
}

/**
 * Report the current page to GA4. The tag only sends a page view on the first
 * load; the App Router changes pages without reloading, so every later page is
 * reported here. Also called once when a visitor accepts cookies, so the page
 * they accepted on is counted with full consent.
 */
export function trackGa4PageView() {
  if (typeof window === 'undefined') return
  trackGa4Event('page_view', { page_location: window.location.href, page_title: document.title })
}
