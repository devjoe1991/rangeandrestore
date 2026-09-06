'use client'

import { useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { GA4_ID, GADS_ID } from '@/lib/gtag'
import { META_PIXEL_ID } from '@/lib/meta-pixel'
import { getStoredConsent, setConsent } from '@/lib/consent'
import { ROUTES } from '@/lib/routes'

// The banner never needs to react to outside changes after mount, so the
// subscribe callback is a no-op. On the server we report "already chosen" so
// nothing renders during SSR (and there's no hydration mismatch); the client
// then reads the real localStorage value after hydration.
const noopSubscribe = () => () => {}

/**
 * Cookie-consent banner. Shows once, on the first visit, and only when tracking
 * is configured (NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GADS_ID or
 * NEXT_PUBLIC_META_PIXEL_ID). "Accept" flips Google Consent Mode to granted and
 * grants the Meta Pixel; "Reject" leaves both denied. Rejecting is a single
 * click, exactly as easy as accepting (UK PECR / ICO guidance).
 */
export function ConsentBanner() {
  const hasChosen = useSyncExternalStore(
    noopSubscribe,
    () => getStoredConsent() !== null,
    () => true,
  )
  const [dismissed, setDismissed] = useState(false)

  if ((!GA4_ID && !GADS_ID && !META_PIXEL_ID) || hasChosen || dismissed)
    return null

  function choose(choice: 'granted' | 'denied') {
    setConsent(choice)
    setDismissed(true)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-page bg-card shadow-[0_-4px_24px_rgba(26,61,58,0.10)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-page-muted">
          We use cookies to measure how our ads and website perform. Analytics
          and advertising cookies stay off until you accept.{' '}
          <Link
            href={ROUTES.privacyPolicy}
            className="font-medium text-brand-teal hover:underline"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="btn flex-1 md:flex-none border-2 border-brand-teal text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="btn flex-1 md:flex-none border-brand-teal bg-brand-teal text-white transition-colors hover:bg-brand-teal-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
