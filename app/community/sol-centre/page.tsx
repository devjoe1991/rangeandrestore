import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sol Centre and Range and Restore | Archway Local Partners',
  description: 'How Range and Restore and Sol Centre work hand in hand on health and wellbeing in Archway. A community-focused yoga and sauna studio on Fairbridge Road and a recovery clinic on Junction Road, sharing knowledge and experiences with the same North London locals.',
  path: '/community/sol-centre',
})

const PARTNER_URL = 'https://www.sol-centre.co.uk'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'Sol Centre', path: '/community/sol-centre' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sol Centre',
  url: PARTNER_URL,
  description: 'A community-focused yoga and sauna studio for movement, rest, and connection on Fairbridge Road, Archway, North London.',
  areaServed: { '@type': 'Place', name: 'Archway, London N19' },
  memberOf: { '@id': `${BASE_URL}/#business` },
}

export default function SolCentrePartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; Archway</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sol Centre and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            A yoga and sauna studio on Fairbridge Road and a recovery clinic on Junction Road, working hand in hand on health and wellbeing in the Archway community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-page-sage mb-10 p-8 flex items-center justify-center">
          <Image
            src="/sol-centre-logo.svg"
            alt="Sol Centre logo"
            width={400}
            height={200}
            className="max-h-40 w-auto object-contain"
          />
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About Sol Centre</h2>
          <p>
            Sol Centre describe themselves as &ldquo;a community-focused yoga and sauna studio for movement, rest, and connection,&rdquo; and that’s exactly what the room feels like. They’re at 216 Fairbridge Road, a short walk from our clinic on Junction Road. Hatha, Vinyasa, Ashtanga, Yin, Restorative, Rocket, Community Yoga and Pilates, hot and non-hot, all under one roof. There’s a sauna on site as well, which makes it the rare local studio that takes the rest half of training as seriously as the movement half. If you live in N19 and you’ve been looking for somewhere to take a regular class, you’ve probably already walked past the door.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we work together</h2>
          <p>
            We work hand in hand with Sol Centre on health and wellbeing in the community. Movement, rest and recovery are the same conversation, and we both want our clients and members leaving with real knowledge and real experiences, not a service they paid for and forgot. A normal Archway week looks like a Rocket class on Tuesday, a sports massage on Thursday, a sauna and Yin class on the Sunday to put it all back together. That works better when the studio and the clinic talk to each other. We’re both small. We’re both independent. We’re both rooted in the same North London community trying to do right by the people who walk in.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we look out for each other</h2>
          <p>
            Honest referrals, both ways. When clients ask Carlos where to take a regular class, or want somewhere to keep moving between sessions, Sol Centre is the first place we send them. When the team at Sol meet someone in class who’s working through an injury, a tight back, or a flare-up they can’t stretch out, they point them our way. We share what we know. They share what they know. Our clients and their members get the benefit of both rooms. There’s no formal scheme. No vouchers, no commission, no marketing dance. Just two local independents looking after each other and the people who keep both spaces going.
          </p>

          <p>
            That’s what we mean when we say we’re rooted in the Archway community. It isn’t a slogan. It’s the actual day to day.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Visit Sol Centre</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            The studio is on Fairbridge Road, a short walk from our clinic on Junction Road. Book a class, try the sauna, or drop in for a workshop.
          </p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Visit sol-centre.co.uk <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Our Recovery Suite: sauna and compression
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
