'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { GA4_ID, GADS_ID, trackConversion } from '@/lib/gtag'
import { CONSENT_STORAGE_KEY } from '@/lib/consent'
import { BOOKING_BASE } from '@/lib/constants'

/** Bare hostname of the Jane booking site, for GA4 cross-domain linking. */
const JANE_DOMAIN = new URL(BOOKING_BASE).hostname

/**
 * Loads the Google tag (gtag.js) for GA4 + Google Ads and wires up:
 *   - Google Consent Mode v2 — every signal denied until the visitor accepts
 *     in the banner (see components/ConsentBanner.tsx and lib/consent.ts). A
 *     returning visitor's saved choice is read from localStorage and applied
 *     inline the moment the tag loads, so there's no flash of the wrong state.
 *   - GA4 with cross-domain linking to the Jane booking site, so a visit that
 *     starts here and completes a booking on Jane is one attributed session.
 *   - Google Ads conversion tracking for the three on-site lead actions
 *     (book / phone / contact) via a single delegated click listener that
 *     covers every current and future page.
 *
 * Renders nothing and loads no script unless NEXT_PUBLIC_GA4_ID or
 * NEXT_PUBLIC_GADS_ID is set, so the site behaves identically until configured.
 */
export function Analytics() {
  useEffect(() => {
    if (!GADS_ID) return

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        trackConversion('phone')
      } else if (href.startsWith('mailto:')) {
        trackConversion('contact')
      } else if (href.includes('janeapp.co.uk')) {
        trackConversion('book')
      }
    }

    // Capture phase so we register the click even if other handlers stop it.
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  if (!GA4_ID && !GADS_ID) return null

  const loaderId = GA4_ID || GADS_ID

  return (
    <>
      <Script
        id="gtag-loader"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          // Consent Mode v2 — default everything to the visitor's saved choice
          // (denied on a first visit), before any tag config runs.
          var rrConsent = 'denied';
          try {
            if (window.localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
              rrConsent = 'granted';
            }
          } catch (e) {}
          gtag('consent', 'default', {
            ad_storage: rrConsent,
            analytics_storage: rrConsent,
            ad_user_data: rrConsent,
            ad_personalization: rrConsent,
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);

          gtag('js', new Date());
          ${GA4_ID ? `gtag('config', '${GA4_ID}', { linker: { domains: ['${JANE_DOMAIN}'] } });` : ''}
          ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ''}
        `}
      </Script>
    </>
  )
}
