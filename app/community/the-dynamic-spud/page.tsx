import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'The Dynamic Spud and Range and Restore | Archway Local Partners',
  description: 'How Range and Restore and The Dynamic Spud look after each other in Archway: honest referrals and mutual support between two local businesses.',
  path: '/community/the-dynamic-spud',
})

const PARTNER_URL = 'https://thedynamicspud.com'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'The Dynamic Spud', path: '/community/the-dynamic-spud' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Dynamic Spud',
  url: PARTNER_URL,
  description: 'Independent café and community spot in Archway, North London.',
  areaServed: { '@type': 'Place', name: 'Archway, London N19' },
  memberOf: { '@id': `${BASE_URL}/#business` },
}

export default function TheDynamicSpudPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Local Partner &middot; Archway</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            The Dynamic Spud and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Two small Archway businesses rooted in the same North London community, looking out for each other and our clients.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">

        <div className="rounded-card overflow-hidden border-2 border-brand-green bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/partners/the-dynamic-spud.png"
            alt="The Dynamic Spud logo"
            width={400}
            height={200}
            className="max-h-40 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About The Dynamic Spud</h2>
          <p>
            The Dynamic Spud is Karen’s independent spot in Archway. Good food, proper coffee, and a room that actually feels like the neighbourhood. It’s the kind of place locals stop into on the way to work, after a gym session, or for a long lunch on the weekend. If you’ve been around N19 for a while, you probably already know it.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            Recovery and good food go in the same week for most of our clients. Someone books a sports massage on a Wednesday, picks up lunch round the corner, comes back for sauna and compression on the Saturday. That’s how a normal week looks in Archway, and it works better when the local businesses talk to each other. We’re both small. We’re both independent. We’re both rooted in the same North London community, trying to do right by the people who walk in.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we look out for each other</h2>
          <p>
            Honest referrals, both ways. When clients ask Carlos where to eat after a session, The Dynamic Spud is the first place we send them. When Karen has someone in who’s nursing a stiff back or recovering from a long week, she points them our way. There’s no formal scheme. No vouchers, no commission, no marketing dance. Just neighbours looking after each other and the people who keep both businesses going.
          </p>

          <p>
            That’s what we mean when we say we’re rooted in the Archway community. It isn’t a slogan. It’s the actual day to day.
          </p>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-3">Visit The Dynamic Spud</h2>
          <p className="text-brand-green font-semibold mb-6">
            Karen’s café is a short walk from our clinic on Junction Road. Stop in for lunch, a coffee, or a proper feed after your session.
          </p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-mid transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Visit thedynamicspud.com <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.community.index} className="link-inline link-inline-tap">
              &larr; Back to Our Archway Community
            </Link>
            <Link href={ROUTES.about} className="link-inline link-inline-tap">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href={ROUTES.areasServed.index} className="link-inline link-inline-tap">
              &rarr; Areas we serve across North London
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
