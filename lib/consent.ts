/**
 * Google Consent Mode v2 helper.
 *
 * Tracking (GA4 + Google Ads) loads with every consent signal set to "denied"
 * by default — see components/Analytics.tsx. Nothing that needs a cookie fires
 * until the visitor makes a choice in the consent banner, which honours the
 * promise in our privacy policy and UK PECR.
 *
 * The storage key below is also read inline by the Analytics init script so a
 * returning visitor's choice is applied the instant the tag loads — keep the
 * two in sync.
 */

export const CONSENT_STORAGE_KEY = 'rr-consent'

export type ConsentChoice = 'granted' | 'denied'

/** The Consent Mode v2 signals we toggle together. */
const CONSENT_SIGNALS = [
  'ad_storage',
  'analytics_storage',
  'ad_user_data',
  'ad_personalization',
] as const

/** Read a previously saved choice, or null if the visitor hasn't chosen yet. */
export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

/**
 * Persist the visitor's choice and push it to Google's Consent Mode. Safe to
 * call whether or not any tag IDs are configured — gtag is optional-chained.
 */
export function setConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // Private mode / storage disabled — consent just won't persist across visits.
  }

  const update = Object.fromEntries(
    CONSENT_SIGNALS.map((signal) => [signal, choice]),
  )
  window.gtag?.('consent', 'update', update)
}
