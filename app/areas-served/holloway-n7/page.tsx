import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, BASE_URL, REVIEW_COUNT, REVIEW_RATING } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage in Holloway N7 | Straight Up Holloway Road',
  description: 'Sports and deep tissue massage for Holloway (N7). Clinic a short trip up Holloway Road to Archway. A team of BTEC L5 therapists. Book online — same-week slots.',
  path: '/areas-served/holloway-n7',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Areas Served', path: '/areas-served' },
  { name: 'Holloway N7', path: '/areas-served/holloway-n7' },
])

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${BASE_URL}/areas-served/holloway-n7#business`,
  name: 'Range and Restore Sports Massage — serving Holloway N7',
  description: 'Sports, deep tissue and clinical massage in Archway for residents and workers in Holloway, London N7. Straight up Holloway Road from the Nag’s Head.',
  url: `${BASE_URL}/areas-served/holloway-n7`,
  telephone: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '130 Junction Road',
    addressLocality: 'Archway',
    addressRegion: 'London',
    postalCode: 'N19 5LB',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5648, longitude: -0.1368 },
  areaServed: [
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Nag’s Head, London N7' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_RATING, reviewCount: REVIEW_COUNT, bestRating: '5', worstRating: '1' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the clinic from Holloway Road or the Nag’s Head?',
      acceptedAnswer: { '@type': 'Answer', text: 'Holloway Road runs straight up to Archway, where it becomes Junction Road. From the Nag’s Head it is about a 15-minute walk, or a few stops on the 43, 271, 263 or 17 bus towards Archway. From Holloway Road tube (Piccadilly Line) the clinic is roughly 1.2km north.' },
    },
    {
      '@type': 'Question',
      name: 'Do you treat gym-goers and students from London Metropolitan University?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. London Met’s main campus is on Holloway Road, and a lot of students, staff and nearby gym-goers book sports and deep tissue massage for training niggles, desk-and-study posture and general muscle tension. Evening and weekend slots suit study and shift patterns.' },
    },
    {
      '@type': 'Question',
      name: 'Is the clinic handy for the Sobell Leisure Centre and Emirates area?',
      acceptedAnswer: { '@type': 'Answer', text: 'It is. The Sobell Leisure Centre (climbing, gym, ice rink) on Hornsey Road and the Emirates Stadium area are both a short bus ride or cycle from the clinic. Climbers, five-a-side players and gym members from around the Nag’s Head book regularly for shoulder, forearm, hip and lower back work.' },
    },
    {
      '@type': 'Question',
      name: 'What do most Holloway clients book?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most-booked treatments from N7 are sports and deep tissue massage for gym and running niggles, and the Back & Neck Pain MOT for desk and study posture. Every session starts with an assessment so treatment is matched to how you present on the day.' },
    },
  ],
}

export default function HollowayN7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Holloway · London N7</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports Massage for Holloway (N7)
          </h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Straight up Holloway Road to Archway. Sports, deep tissue and clinical massage for N7 residents, students and gym-goers at our clinic on Junction Road.
          </p>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Holloway is one of our closest catchment areas &mdash; Holloway Road runs directly up to Archway, where it becomes Junction Road and passes the clinic at number 130. Treatment is delivered by our <Link href={ROUTES.team} className="link-inline">team of BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists</Link>, led by founder <Link href={ROUTES.about} className="link-inline">Carlos Bonvicine</Link>, a certified MLD practitioner.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who books with us from N7</h2>
          <p>
            Holloway is a busy, mixed part of north London and that shows in who walks through the door. Students and staff from London Metropolitan University&apos;s Holloway Road campus book around study, work and training. Climbers, gym members and five-a-side players from the Sobell Leisure Centre on Hornsey Road come in for shoulder, forearm, hip and lower back work. Retail and hospitality staff from the Nag&apos;s Head shops and Holloway Road come for the recurring neck, shoulder and lower back pain that goes with long shifts on your feet. And plenty of everyday residents simply want consistent, local treatment without crossing town.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Getting here from Holloway</h2>
          <p>
            The simplest route is straight up Holloway Road. From the Nag&apos;s Head it&apos;s about a 15-minute walk to Archway, then a minute onto Junction Road. If you&apos;d rather ride, the 43, 271, 263 and 17 all run up Holloway Road towards Archway and stop within a short walk of the clinic. From Holloway Road tube station on the Piccadilly Line the clinic is roughly 1.2km north &mdash; an easy bus hop or a brisk walk. Caledonian Road &amp; Barnsbury on the Overground is also within reach.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Treatments most-booked by Holloway clients</h2>
          <p>
            For gym-goers, climbers and runners, the go-to is a 60- or 90-minute <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline">sports and deep tissue massage</Link>. Desk workers and students dealing with neck, shoulder and lower back tension usually start with the <Link href={ROUTES.services.backNeckPainMot} className="link-inline">Back &amp; Neck Pain MOT</Link>. For pain that hasn&apos;t settled with general massage elsewhere, <Link href={ROUTES.services.advancedClinicalMassage} className="link-inline">advanced clinical massage</Link> takes an assessment-led approach to the root cause.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Holloway and the wider N7 catchment</h2>
          <p>
            This page covers Holloway, the Nag&apos;s Head, and the streets running off Holloway Road and Hornsey Road. If you&apos;re a little further out, the clinic also serves neighbouring <Link href={ROUTES.areasServed.tufnellParkN7} className="link-inline">Tufnell Park</Link>, <Link href={ROUTES.areasServed.upperHollowayN19} className="link-inline">Upper Holloway</Link> and <Link href={ROUTES.areasServed.islingtonN1} className="link-inline">Islington</Link>. See all the <Link href={ROUTES.areasServed.index} className="link-inline">areas we serve</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Opening hours</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Monday to Friday: 08:00 &ndash; 20:00</li>
            <li>Saturday and Sunday: 09:00 &ndash; 17:00</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">How do I get to the clinic from Holloway Road or the Nag&apos;s Head?</h3>
              <p>Holloway Road runs straight up to Archway, where it becomes Junction Road. From the Nag&apos;s Head it is about a 15-minute walk, or a few stops on the 43, 271, 263 or 17 bus towards Archway. From Holloway Road tube (Piccadilly Line) the clinic is roughly 1.2km north.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Do you treat gym-goers and students from London Metropolitan University?</h3>
              <p>Yes. London Met&apos;s main campus is on Holloway Road, and a lot of students, staff and nearby gym-goers book sports and deep tissue massage for training niggles, desk-and-study posture and general muscle tension. Evening and weekend slots suit study and shift patterns.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">Is the clinic handy for the Sobell Leisure Centre and Emirates area?</h3>
              <p>It is. The Sobell Leisure Centre (climbing, gym, ice rink) on Hornsey Road and the Emirates Stadium area are both a short bus ride or cycle from the clinic. Climbers, five-a-side players and gym members from around the Nag&apos;s Head book regularly for shoulder, forearm, hip and lower back work.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-page mb-2">What do most Holloway clients book?</h3>
              <p>The most-booked treatments from N7 are sports and deep tissue massage for gym and running niggles, and the Back &amp; Neck Pain MOT for desk and study posture. Every session starts with an assessment so treatment is matched to how you present on the day.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Book your session from Holloway</h2>
          <p className="text-brand-green font-semibold mb-6">
            Same-week slots available. 130 Junction Road, Archway, London N19 5LB &mdash; straight up Holloway Road.
          </p>
          <BookingButton label="Book Your Session" />
        </div>
      </div>
    </>
  )
}
