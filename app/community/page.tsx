import type { Metadata } from 'next'
import Link from 'next/link'
import { PartnerCard } from '@/components/PartnerCard'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Our Archway Community | Local Partners in North London',
  description: 'The local businesses we work with in Archway and North London. Cafés, studios and independent shops we genuinely rate and send our clients to.',
  path: '/community',
})

type Partner = {
  slug: string
  name: string
  headerText: string
  category: string
  blurb: string
  logo?: string
  logoAlt?: string
  logoFit?: 'contain' | 'cover'
  logoBg?: string
  externalUrl: string
}

const partners: Partner[] = [
  {
    slug: 'the-dynamic-spud',
    name: 'Range and Restore × The Dynamic Spud',
    headerText: 'Range and Restore × The Dynamic Spud',
    category: 'Archway. Café and Community',
    blurb: 'Range and Restore and The Dynamic Spud bring you good health, real recovery, and hearty, vital Irish food from Dublin to Archway. Two independents looking after the same North London community.',
    logo: '/the_dynamic_spud_logo.png',
    logoAlt: 'The Dynamic Spud logo',
    externalUrl: 'https://thedynamicspud.com',
  },
  {
    slug: 'sol-centre',
    name: 'Range and Restore × Sol Centre',
    headerText: 'Range and Restore × Sol Centre',
    category: 'Archway. Yoga, Sauna and Community',
    blurb: 'Range and Restore and Sol Centre bring you health and wellbeing in Archway. Movement, rest and recovery under one community, from the yoga mat on Fairbridge Road to the treatment room on Junction Road.',
    logo: '/sol-centre-logo.svg',
    logoAlt: 'Sol Centre logo',
    externalUrl: 'https://www.sol-centre.co.uk',
  },
  {
    slug: 'reliable-scan',
    name: 'Range and Restore × Reliable Scan',
    headerText: 'Range and Restore × Reliable Scan',
    category: 'Archway. Same Building, 130 Junction Road',
    blurb: 'Range and Restore and Reliable Scan share the same building at 130 Junction Road. Private diagnostic ultrasound and specialist sports and recovery therapy under one roof, a genuine healthcare hub for Archway.',
    logo: '/Reliabale-scan.webp',
    logoAlt: 'Reliable Scan logo',
    externalUrl: 'https://reliablescanltd.com',
  },
  {
    slug: 'glow-by-d',
    name: 'Range and Restore × Glow By D',
    headerText: 'Range and Restore × Glow By D',
    category: 'Archway. Same Building, 130 Junction Road',
    blurb: 'Range and Restore and Glow By D share the same building at 130 Junction Road. Luxury skincare, advanced facials and beauty in one room, sports massage and recovery next door. Look after Archway inside and out, at one address.',
    logo: '/glow-by-d-skincare-beauty-clinic-archway.png',
    logoAlt: 'Glow By D skincare and beauty clinic logo, Archway',
    externalUrl: 'https://glowbyd.co.uk',
  },
  {
    slug: 'alaric-yoga',
    name: 'Range and Restore × Alaric Yoga',
    headerText: 'Range and Restore × Alaric Yoga',
    category: 'Yoga, Mobility and Pranayama',
    blurb: 'Range and Restore and Alaric Yoga work side by side on movement, recovery and longevity. Senior Iyengar yoga and pranayama with Alaric Newcombe, soft tissue and remedial therapy with the team at Range and Restore, supporting the same students through their practice.',
    logo: '/alaric_yoga.jpg',
    logoAlt: 'Alaric Newcombe of Alaric Yoga',
    logoFit: 'cover',
    externalUrl: 'https://www.alaricyoga.co.uk/pranayama/',
  },
  {
    slug: 'fs8-finsbury-park',
    name: 'Range and Restore × FS8 Finsbury Park',
    headerText: 'Range and Restore × FS8 Finsbury Park',
    category: 'Finsbury Park. Reformer Pilates, Tone and Yoga',
    blurb: 'Range and Restore and FS8 Finsbury Park join up treatment and training. Reformer Pilates, tone and yoga by Finsbury Park station, assessment-led sports massage and recovery on Junction Road. Referrals both ways, and 10% off FS8’s intro for our clients.',
    logo: '/fs8-finsbury-park-reformer-pilates-logo.svg',
    logoAlt: 'FS8 logo, reformer Pilates studio in Finsbury Park',
    logoBg: 'bg-sand-deep',
    externalUrl: 'https://fs8.com/studio/finsburypark/',
  },
  {
    slug: 'alis-quiff-barber',
    name: 'Range and Restore × Ali’s Quiff Barber',
    headerText: 'Range and Restore × Ali’s Quiff Barber',
    category: 'Archway. Barbering and Men’s Self-Care',
    blurb: 'Range and Restore and Ali’s Quiff Barber on Holloway Road look after Archway from the inside out. Sports massage, recovery and remedial therapy on Junction Road, traditional barbering, beard work and full-service grooming a short walk up the road.',
    logo: '/alis-quiff-barber-shop-holloway-road-archway.jpg',
    logoAlt: 'Ali’s Quiff Barber Shop logo, Holloway Road',
    externalUrl: 'https://booksy.com/en-gb/167323_alis-quiff-barber_barber_311817_london',
  },
  {
    slug: 'nc-osteopathy',
    name: 'Range and Restore × NC Osteopathy',
    headerText: 'Range and Restore × NC Osteopathy',
    category: 'Archway. Osteopathy and Whole-Person Care',
    blurb: 'Range and Restore and NC Osteopathy work together on whole-person care in Archway. Osteopathy and Mummy MOT with Nagma Chaudhry M.Ost, sports massage and recovery with the team at Range and Restore. Two complementary disciplines, honest referrals both ways.',
    logo: '/nc-osteopathy-logo-north-london.webp',
    logoAlt: 'NC Osteopathy logo, North London',
    externalUrl: 'https://ncosteopathy.co.uk',
  },
  {
    slug: 'bikeztube-cycles',
    name: 'Range and Restore × Bikeztube Cycles',
    headerText: 'Range and Restore × Bikeztube Cycles',
    category: 'Archway. Bikes and Cyclist Wellbeing',
    blurb: 'Range and Restore and Bikeztube Cycles look after Archway’s cyclists on Junction Road. Bike servicing, wheel building and custom builds at 118, sports massage and leg recovery at 130. The bike and the body, sorted on one street.',
    logo: '/bikeztube-cycles-bike-shop-junction-road-archway.png',
    logoAlt: 'Bikeztube Cycles and Repairs logo, bike shop on Junction Road, Archway',
    logoBg: 'bg-sand-deep',
    externalUrl: 'https://bikeztube.co.uk',
  },
  {
    slug: 'private-gp-surgery',
    name: 'Range and Restore × Private GP Surgery',
    headerText: 'Range and Restore × Private GP Surgery',
    category: 'London. Private GP, Online and Home Visits',
    blurb: 'Range and Restore and Private GP Surgery bring you joined-up care. CQC-regulated private GP appointments, online and home visits with Dr Ali Mahmood M.D., sports massage and recovery with the team at Range and Restore. Honest referrals both ways.',
    logo: '/private-gp-surgery-archway-north-london.webp',
    logoAlt: 'Private GP Surgery logo',
    externalUrl: 'https://privategpsurgery.co.uk',
  },
]

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
])

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Archway Community',
  description: 'Local Archway and North London businesses that Range and Restore partners with.',
  url: `${BASE_URL}/community`,
  isPartOf: { '@id': `${BASE_URL}/#business` },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: partners.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Organization',
        name: p.name,
        url: p.externalUrl,
      },
    })),
  },
}

export default function CommunityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Archway &middot; North London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Our Archway Community
          </h1>
          <p className="text-lg text-page-muted font-medium mb-4">
            Range and Restore is a community-focused clinic, built shoulder to shoulder with the other independents around us. We thrive because the cafés, studios, bars and shops in our local community thrive, and we work to send trade, clients and trust back their way.
          </p>
          <p className="text-lg text-page-muted font-medium mb-4">
            Our clinic on Junction Road is somewhere your body can rest, restore and recover properly. Local business owners recommend us, and we recommend them: the bars, cafés, restaurants and studios that make this part of North London what it is.
          </p>
          <p className="text-lg text-page-muted font-medium mb-4">
            We also back two charities beyond the high street.{' '}
            <Link href={ROUTES.givingBack} className="link-cite">Whittington Health Charity and Phab</Link>
            , with donated treatments, gift vouchers and Carlos&apos;s time at their events.
          </p>
          <p className="text-lg text-page-muted font-medium">
            If you&apos;re a local independent, please reach out. <Link href={ROUTES.press} className="link-cite">Press, podcast and media enquiries have their own page</Link>.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 section-md">
        {/* The "get in touch" panel sits in the grid and spans two columns, so it
            fills the row beside the last card instead of leaving it orphaned. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-stretch">
          {partners.map((p) => (
            <PartnerCard
              key={p.slug}
              name={p.name}
              category={p.category}
              blurb={p.blurb}
              href={`/community/${p.slug}`}
              logo={p.logo}
              logoAlt={p.logoAlt}
              logoFit={p.logoFit}
              logoBg={p.logoBg}
              headerText={p.headerText}
            />
          ))}

          <div className="sm:col-span-2 bg-accent rounded-card p-8 flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-2xl font-black text-ink mb-3">Local independent? Get in touch</h2>
            <p className="text-brand-green font-semibold mb-4">
              We collaborate with independents across Archway, Tufnell Park, Holloway, Highgate and North London. Honest referrals, mutual support, real trade going both ways. More partners are on the way, and if you run a local business, we&apos;d love to hear from you.
            </p>
            <p className="text-brand-green text-sm mb-6">
              We also back small businesses across London. You can find us, vouch for us and message us on the{' '}
              <Link href={ROUTES.community.refuse2QuitNetwork} className="link-cite">Refuse 2 Quit Network</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ROUTES.contact}
                className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-mid transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
              >
                Reach out <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={ROUTES.press}
                className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-brand-green"
              >
                Press &amp; media <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
