import type { Metadata } from 'next'

export const SITE_NAME = 'Range and Restore'
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rangeandrestore.co.uk'

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  author,
  noindex,
}: {
  title: string
  description: string
  path?: string
  image?: string
  author?: boolean
  noindex?: boolean
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpg`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    ...(author ? { authors: [{ name: 'Carlos Bonvicine', url: `${BASE_URL}/about` }] } : {}),
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
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

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
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

export const daraelPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Darael Beckles',
  jobTitle: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
  description: 'Darael Beckles is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and graduate of the North London School of Sports Massage (NLSSM), with a background in Sports & Exercise Science, based at Range and Restore in Archway, North London.',
  url: `${BASE_URL}/team`,
  image: `${BASE_URL}/darael-beckles-sports-massage-therapist-range-and-restore-archway-north-london.jpeg`,
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    url: BASE_URL,
  },
  alumniOf: { '@type': 'EducationalOrganization', name: 'North London School of Sports Massage (NLSSM)' },
  memberOf: { '@type': 'Organization', name: 'Sports Massage Association' },
  knowsAbout: ['Sports Massage', 'Soft Tissue Therapy', 'Deep Tissue Massage', 'Injury Rehabilitation', 'Sports & Exercise Science', 'Postural Assessment'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Qualification', name: 'BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapy (NLSSM)' },
  ],
  sameAs: [
    'https://www.instagram.com/rangeandrestore',
    'https://www.facebook.com/people/Range-and-Restore-Sports-Massage/61572962878628/',
  ],
}

export const matejaPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mateja Bracko-Mounti',
  jobTitle: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
  description: 'Mateja Bracko-Mounti is a BTEC Level 5 qualified Sports Massage and Soft Tissue Remedial Therapist (SMRT, MSMA) with over 18 years of experience in therapeutic settings, trained with the London School of Sports Massage (LSSM) and qualified in reflexology, pregnancy massage, Indian head massage, natural lift facial massage and the Emmett Technique, based at Range and Restore in Archway, North London.',
  url: `${BASE_URL}/team`,
  image: `${BASE_URL}/mateja-bracko-mounti-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg`,
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    url: BASE_URL,
  },
  alumniOf: { '@type': 'EducationalOrganization', name: 'London School of Sports Massage (LSSM)' },
  memberOf: { '@type': 'Organization', name: 'Sports Massage Association' },
  knowsAbout: ['Sports Massage', 'Soft Tissue Therapy', 'Reflexology', 'Pregnancy Massage', 'Indian Head Massage', 'Facial Massage', 'Emmett Technique', 'Injury Recovery', 'Mobility'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Qualification', name: 'BTEC Level 5 Diploma in Soft Tissue Therapy (LSSM)' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Reflexology' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Pregnancy Massage' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Indian Head Massage' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Natural Lift Facial Massage' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional Certification', name: 'Emmett Technique' },
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
  priceRange: '£35-£170',
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
  employee: [
    {
      '@type': 'Person',
      name: 'Carlos Bonvicine',
      jobTitle: 'Founder & Lead Therapist',
      description: 'Carlos Bonvicine is the founder and lead therapist of Range and Restore Sports Massage — a BTEC Level 5 soft tissue and clinical massage therapist and certified Manual Lymphatic Drainage (MLD) practitioner based in Archway, North London.',
      url: `${BASE_URL}/about`,
      knowsAbout: ['Sports Massage', 'Deep Tissue Massage', 'Manual Lymphatic Drainage', 'Soft Tissue Therapy', 'Injury Rehabilitation', 'Clinical Massage'],
    },
    {
      '@type': 'Person',
      name: 'Darael Beckles',
      jobTitle: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
      description: 'Darael Beckles is a BTEC Level 5 sports massage and soft tissue remedial therapist (NLSSM graduate, SMRT, MSMA) based in Archway, North London.',
      url: `${BASE_URL}/team`,
      knowsAbout: ['Sports Massage', 'Soft Tissue Therapy', 'Deep Tissue Massage', 'Injury Rehabilitation', 'Sports & Exercise Science'],
    },
    {
      '@type': 'Person',
      name: 'Mateja Bracko-Mounti',
      jobTitle: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist',
      description: 'Mateja Bracko-Mounti is a BTEC Level 5 qualified sports massage and soft tissue remedial therapist (SMRT, MSMA) with over 18 years of experience, trained with the LSSM and qualified in reflexology, pregnancy massage, Indian head massage and the Emmett Technique, based in Archway, North London.',
      url: `${BASE_URL}/team`,
      knowsAbout: ['Sports Massage', 'Soft Tissue Therapy', 'Reflexology', 'Pregnancy Massage', 'Indian Head Massage', 'Emmett Technique'],
    },
  ],
  hasMap: 'https://maps.google.com/?q=Range+and+Restore+Sports+Massage+130+Junction+Road+London+N19+5LB',
  sameAs: [
    'https://www.facebook.com/people/Range-and-Restore-Sports-Massage/61572962878628/',
    'https://www.instagram.com/rangeandrestore',
    'https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Sports & Deep Tissue Massage',
      description: 'Targeted sports and deep tissue massage for injury recovery, muscle tension and performance support. 30, 60 or 90 minutes.',
      url: `${BASE_URL}/services/sports-deep-tissue-massage`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '50', priceCurrency: 'GBP', description: '30 minutes' },
        { '@type': 'PriceSpecification', price: '75', priceCurrency: 'GBP', description: '60 minutes' },
        { '@type': 'PriceSpecification', price: '110', priceCurrency: 'GBP', description: '90 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Advanced Cupping Therapy & Sports / Deep Tissue Massage',
      description: 'Integrated cupping therapy combined with sports and deep tissue massage \u2014 static and dynamic cupping, myofascial release and deep tissue work for chronic tension, fascial restriction and recovery. 30, 60 or 90 minutes.',
      url: `${BASE_URL}/services/advanced-cupping-sports-deep-tissue`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '60', priceCurrency: 'GBP', description: '30 minutes' },
        { '@type': 'PriceSpecification', price: '85', priceCurrency: 'GBP', description: '60 minutes' },
        { '@type': 'PriceSpecification', price: '125', priceCurrency: 'GBP', description: '90 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Advanced Clinical Massage',
      description: 'Assessment-led clinical massage for chronic pain, sciatica, RSI, tension headaches and complex postural conditions.',
      url: `${BASE_URL}/services/advanced-clinical-massage`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '50', priceCurrency: 'GBP', description: '30 minutes' },
        { '@type': 'PriceSpecification', price: '75', priceCurrency: 'GBP', description: '60 minutes' },
        { '@type': 'PriceSpecification', price: '110', priceCurrency: 'GBP', description: '90 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Back & Neck Pain MOT',
      description: 'Focused assessment and hands-on treatment for persistent back pain, neck pain and desk-related postural strain.',
      url: `${BASE_URL}/services/back-neck-pain-mot`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '50', priceCurrency: 'GBP', description: '30 minutes' },
        { '@type': 'PriceSpecification', price: '75', priceCurrency: 'GBP', description: '60 minutes' },
        { '@type': 'PriceSpecification', price: '110', priceCurrency: 'GBP', description: '90 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Manual Lymphatic Drainage (MLD)',
      description: 'Certified MLD for post-surgery recovery, lymphoedema, swelling and immune support.',
      url: `${BASE_URL}/services/manual-lymphatic-drainage`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '50', priceCurrency: 'GBP', description: '30 minutes' },
        { '@type': 'PriceSpecification', price: '75', priceCurrency: 'GBP', description: '60 minutes' },
        { '@type': 'PriceSpecification', price: '110', priceCurrency: 'GBP', description: '90 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: '2-Hour Pain Relief Massage',
      description: 'Extended assessment-led session for multiple problem areas and long-standing conditions.',
      url: `${BASE_URL}/services/2-hour-pain-relief-massage`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '170', priceCurrency: 'GBP', description: '120 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Private Infrared & Traditional Sauna Recovery Suite Experience',
      description: 'Private use of the Recovery Suite with hybrid full spectrum infrared and traditional sauna and Hyperice Normatec 3 Full Body recovery system.',
      url: `${BASE_URL}/recovery-suite/infrared-sauna`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '35', priceCurrency: 'GBP', description: '45 minutes' },
        { '@type': 'PriceSpecification', price: '45', priceCurrency: 'GBP', description: '60 minutes' },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Sports Massage + Sauna Recovery Suite Package',
      description: 'Combined sports massage and private infrared and traditional sauna Recovery Suite experience in one appointment.',
      url: `${BASE_URL}/recovery-suite/recovery-packages`,
      priceCurrency: 'GBP',
      priceSpecification: [
        { '@type': 'PriceSpecification', price: '85', priceCurrency: 'GBP', description: '30 minute sports massage + 45 minute sauna recovery (75 minutes total)' },
        { '@type': 'PriceSpecification', price: '110', priceCurrency: 'GBP', description: '60 minute sports massage + 30 minute sauna recovery (90 minutes total)' },
      ],
    },
  ],
}
