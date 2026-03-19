import type { Metadata } from 'next'

const SITE_NAME = 'Range and Restore'
const SITE_TAGLINE = 'Sports Massage Archway London'
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rangeandrestore.co.uk'

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME} | ${SITE_TAGLINE}`
  const url = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'Range and Restore Sports Massage',
  description: 'Expert sports massage, deep tissue, and soft tissue remedial therapy in Archway, North London.',
  url: BASE_URL,
  telephone: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'London',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5648,
    longitude: -0.1368,
  },
  openingHoursSpecification: [],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card',
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  hasMap: 'https://maps.google.com/?q=130+Junction+Road+London+N19+5LB',
  sameAs: [],
}
