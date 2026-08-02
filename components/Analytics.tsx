'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { GA4_ID, GADS_ID, trackConversion } from '@/lib/gtag'
import { META_PIXEL_ID, trackMetaLead, trackMetaPageView } from '@/lib/meta-pixel'
import { CONSENT_STORAGE_KEY } from '@/lib/consent'
import { BOOKING_BASE } from '@/lib/constants'

/** Bare hostname of the Jane booking site, for GA4 cross-domain linking. */
const JANE_DOMAIN = new URL(BOOKING_BASE).hostname

/**
 * Loads the Google tag (gtag.js) for GA4 + Google Ads, plus the Meta Pixel, and
 * wires up:
 *   - Google Consent Mode v2 — every signal denied until the visitor accepts
 *     in the banner (see components/ConsentBanner.tsx and lib/consent.ts). A
 *     returning visitor's saved choice is read from localStorage and applied
 *     inline the moment the tag loads, so there's no flash of the wrong state.
 *   - The Meta Pixel's own consent API, which is separate from Google's:
 *     `fbq('consent', 'revoke')` runs *before* init, so the pixel sends nothing
 *     until the same banner grants it. lib/consent.ts flips both together.
 *   - GA4 with cross-domain linking to the Jane booking site, so a visit that
 *     starts here and completes a booking on Jane is one attributed session.
 *   - Conversion tracking for the three on-site lead actions (book / phone /
 *     contact) via a single delegated click listener that covers every current
 *     and future page, reported to Google Ads and Meta together.
 *   - A Meta PageView on client-side route changes, which App Router performs
 *     without a document load.
 *
 * Renders nothing and loads no script unless one of NEXT_PUBLIC_GA4_ID,
 * NEXT_PUBLIC_GADS_ID or NEXT_PUBLIC_META_PIXEL_ID is set, so the site behaves
 * identically until configured.
 *
 * Note there is deliberately no <noscript> pixel fallback: that variant is a
 * plain <img> that fires on render, with no way to hold it back until consent,
 * which would break the promise made in the banner and the privacy policy.
 */
export function Analytics() {
  const pathname = usePathname()
  const isFirstPath = useRef(true)

  useEffect(() => {
    if (!GADS_ID && !META_PIXEL_ID) return

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        trackConversion('phone')
        trackMetaLead('phone')
      } else if (href.startsWith('mailto:')) {
        trackConversion('contact')
        trackMetaLead('contact')
      } else if (href.includes('janeapp.co.uk')) {
        trackConversion('book')
        trackMetaLead('book')
      }
    }

    // Capture phase so we register the click even if other handlers stop it.
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  // The inline base code below fires the first PageView, so skip the mount run
  // and report only subsequent client-side navigations.
  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false
      return
    }
    trackMetaPageView()
  }, [pathname])

  if (!GA4_ID && !GADS_ID && !META_PIXEL_ID) return null

  const loaderId = GA4_ID || GADS_ID

  return (
    <>
      {loaderId && (
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
      )}

      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // Meta's consent gate is its own API, and must be set BEFORE init.
            // Revoked means the pixel drops events rather than sending them;
            // lib/consent.ts grants it (and re-fires PageView) when the visitor
            // accepts in the banner.
            var rrMetaConsent = 'revoke';
            try {
              if (window.localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
                rrMetaConsent = 'grant';
              }
            } catch (e) {}
            fbq('consent', rrMetaConsent);

            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  )
}
