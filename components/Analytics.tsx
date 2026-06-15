'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { GADS_ID, trackConversion } from '@/lib/gtag'

/**
 * Loads the Google tag (gtag.js) for Google Ads and wires up conversion
 * tracking for the three lead actions that happen via links anywhere on the
 * site: Jane App booking clicks (book), phone tel: taps (phone), and email
 * mailto: clicks (contact).
 *
 * A single delegated click listener on the document catches these for every
 * page — current and future — without having to touch each link or button.
 *
 * Renders nothing and loads no script until NEXT_PUBLIC_GADS_ID is set.
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

  if (!GADS_ID) return null

  return (
    <>
      <Script
        id="gads-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
      />
      <Script id="gads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  )
}
