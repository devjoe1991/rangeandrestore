import type { Metadata } from 'next'
import Link from 'next/link'
import { PartnerCard } from '@/components/PartnerCard'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Our Archway Community | Local Partners in North London',
  description: 'The local businesses we work with in Archway and North London. Cafés, studios and independent shops in our community that we genuinely rate and send our clients to.',
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
  externalUrl: string
}

const partners: Partner[] = [
  {
    slug: 'the-dynamic-spud',
    name: 'Range and Restore × The Dynamic Spud',
    headerText: 'Range and Restore × The Dynamic Spud',
    category: 'Archway. Café and Community',
    blurb: 'Range and Restore and The Dynamic Spud bring you good health, real recovery, and hearty, vital Irish food from Dublin to Archway. Two independents looking after the same North London community.',
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

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Archway &middot; North London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Our Archway Community
          </h1>
          <p className="text-lg text-page-muted font-medium mb-4">
            Range and Restore is a community-focused clinic, built shoulder to shoulder with the other independents around us. We thrive because the cafés, studios, bars and shops in our local community thrive, and we work to send trade, clients and trust back their way.
          </p>
          <p className="text-lg text-page-muted font-medium mb-4">
            Our hub on Junction Road is a place you can be one hundred percent confident in. Somewhere your body can rest, restore and recover properly. Local business owners talk about us, recommend us, and collaborate with us. We&apos;ve become a staple in the Archway and North London community, a household name deep rooted in the local bars, cafés, restaurants and studios that make this part of the city what it is.
          </p>
          <p className="text-lg text-page-muted font-medium">
            If you&apos;re a local independent, or press looking to cover what&apos;s happening on Junction Road, please reach out.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
              headerText={p.headerText}
            />
          ))}
        </div>

        <p className="text-page-muted text-sm mt-10 max-w-2xl">
          More partners are on the way. We’re talking to local yoga studios, wellness spaces and a handful of other independents across the community. If you run a local business and want to chat, the door is open.
        </p>

        <div className="mt-10 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Local independent or press? Get in touch</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6 max-w-2xl">
            We collaborate with independents across Archway, Tufnell Park, Holloway, Highgate and North London. Honest referrals, mutual support, real trade going both ways. If you run a local business, or you&apos;re covering what&apos;s happening on Junction Road, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Reach out <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}
