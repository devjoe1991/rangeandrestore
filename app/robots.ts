import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rangeandrestore.co.uk'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // /_next/static/ holds the CSS, JS and fonts Googlebot needs to render
        // pages, so it must stay crawlable; the broader /_next/ disallow still
        // keeps RSC payloads and internal data routes out of the index.
        allow: ['/', '/_next/static/'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
