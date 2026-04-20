import type { Metadata } from 'next'

export const SITE_NAME = 'Range and Restore'
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rangeandrestore.co.uk'

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  author,
}: {
  title: string
  description: string
  path?: string
  image?: string
  author?: boolean
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpg`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    ...(author ? { authors: [{ name: 'Carlos Bonvicine', url: `${BASE_URL}/about` }] } : {}),
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

export function buildBreadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    ],
  }
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: BASE_URL,
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: BASE_URL,
  },
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carlos Bonvicine',
  jobTitle: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
  description: 'Carlos Bonvicine is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified Manual Lymphatic Drainage (MLD) practitioner based in Archway, North London.',
  url: `${BASE_URL}/about`,
  image: 'https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no',
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    url: BASE_URL,
  },
  knowsAbout: ['Sports Massage', 'Deep Tissue Massage', 'Manual Lymphatic Drainage', 'Soft Tissue Therapy', 'Injury Rehabilitation', 'Clinical Massage', 'Cupping Therapy'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Qualification', name: 'BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapy' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Certified Manual Lymphatic Drainage (MLD) Practitioner' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Certified Cupping Therapy Practitioner' },
  ],
  sameAs: [
    'https://www.instagram.com/rangeandrestore',
    'https://www.facebook.com/people/Range-and-Restore-Sports-Massage/61572962878628/',
  ],
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'Range and Restore Sports Massage',
  description: 'Assessment-led sports massage, deep tissue therapy, advanced clinical massage and certified Manual Lymphatic Drainage (MLD) in Archway, North London. Serving N19, Tufnell Park, Islington, Holloway, Finsbury Park and surrounding areas.',
  url: BASE_URL,
  telephone: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
  image: `${BASE_URL}/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5648,
    longitude: -0.1368,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '09:00', closes: '17:00' },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card',
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Stroud Green, London N4' },
    { '@type': 'Place', name: 'Upper Holloway, London N19' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  employee: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Soft Tissue Therapist & Certified MLD Practitioner',
    description: 'Carlos Bonvicine is a soft tissue and clinical massage therapist and certified Manual Lymphatic Drainage (MLD) practitioner based in Archway, North London.',
    url: `${BASE_URL}/about`,
    knowsAbout: ['Sports Massage', 'Deep Tissue Massage', 'Manual Lymphatic Drainage', 'Soft Tissue Therapy', 'Injury Rehabilitation', 'Clinical Massage'],
  },
  hasMap: 'https://maps.google.com/?q=Range+and+Restore+Sports+Massage+130+Junction+Road+London+N19+5LB',
  sameAs: [
    'https://www.facebook.com/people/Range-and-Restore-Sports-Massage/61572962878628/',
    'https://www.instagram.com/rangeandrestore',
  ],
  makesOffer: [
    { '@type': 'Offer', name: 'Sports & Deep Tissue Massage', description: 'Targeted sports and deep tissue massage for injury recovery, muscle tension and performance support. 30, 60 or 90 minutes.' },
    { '@type': 'Offer', name: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage', description: 'Integrated cupping therapy combined with sports and deep tissue massage \u2014 static and dynamic cupping, myofascial release and deep tissue work for chronic tension, fascial restriction and recovery. 30, 60 or 90 minutes.' },
    { '@type': 'Offer', name: 'Advanced Clinical Massage', description: 'Assessment-led clinical massage for chronic pain, sciatica, RSI, tension headaches and complex postural conditions.' },
    { '@type': 'Offer', name: 'Back & Neck Pain MOT', description: 'Focused assessment and hands-on treatment for persistent back pain, neck pain and desk-related postural strain.' },
    { '@type': 'Offer', name: 'Manual Lymphatic Drainage (MLD)', description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling and immune support.' },
    { '@type': 'Offer', name: '2-Hour Pain Relief Massage', description: 'Extended assessment-led session for multiple problem areas and long-standing conditions.' },
  ],
}
