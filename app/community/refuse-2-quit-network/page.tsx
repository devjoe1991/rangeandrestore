import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'
import { BOOKING_URLS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Find Us on the Refuse 2 Quit Network',
  description: 'Range and Restore in Archway is listed on the Refuse 2 Quit Network, a directory where London small businesses find, vouch for and message each other.',
  path: ROUTES.community.refuse2QuitNetwork,
})

const NETWORK_URL = 'https://refuse2quit.com'
// Our listing. The profile is under Carlos's name, so vouches and messages go to him.
const LISTING_URL = 'https://refuse2quit.com/m/448c8b0a-9683-4857-9f05-a577dd0f95b5'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: ROUTES.community.index },
  { name: 'Refuse 2 Quit Network', path: ROUTES.community.refuse2QuitNetwork },
])

// We are a listed member, not a partner, so the network declares us as a member.
const networkSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Refuse 2 Quit Network',
  url: NETWORK_URL,
  description: 'An online directory where creatives, makers and specialists connect, vouch for each other and build referral relationships.',
  member: { '@id': `${BASE_URL}/#business` },
}

export default function Refuse2QuitNetworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(networkSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Community &middot; Small Business Network</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Find Range and Restore on the Refuse 2 Quit Network
          </h1>
          <p className="text-lg text-page-muted font-medium">
            We back small businesses, on Junction Road and across London. Our listing on the Refuse 2 Quit Network is one more way for other independents to find us, vouch for us and get in touch.
          </p>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What the Refuse 2 Quit Network is</h2>
          <p>
            The <a href={LISTING_URL} target="_blank" rel="noopener" className="link-inline">Refuse 2 Quit Network</a> is an online directory of creatives, makers and specialists, most of them small businesses in London. When we joined in September 2026 it listed more than 3,600 people. Members sit in categories from food and drink, events and hospitality, and beauty, hair and makeup, to music, photography, marketing, tech and health and wellbeing. Each member has a profile saying what they do and what kind of connections they are looking for. Other members can message them, and vouch for work they have seen first hand.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why we are on it</h2>
          <p>
            Range and Restore is a small independent clinic at 130 Junction Road, Archway N19. Small businesses like ours grow on recommendations: a neighbour, a trainer, a café owner or a barber up the road telling someone where to go. We try to return that. We send clients to the <Link href={ROUTES.community.index} className="link-inline">local businesses we work with</Link>, and we <Link href={ROUTES.givingBack} className="link-inline">back two charities</Link> with donated treatments and time.
          </p>
          <p>
            The Refuse 2 Quit Network does the same thing across London. It is a place where small business owners find each other and recommend each other. Being listed there makes it easier for them to find a sports massage clinic in North London they can trust, and to send their own people our way.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who we want to connect with</h2>
          <p>
            Mostly people in North London who look after bodies in a different way to us: physiotherapists and osteopaths, personal trainers and strength coaches, Pilates and yoga studios, running clubs and coaches, gyms, combat sports clubs, cycling coaches and dance studios. We also want to hear from local community groups, and from businesses that want to look after their staff. The aim is simple. Honest referrals both ways, so each client ends up with whoever can help them most.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Vouch for us, or send us a message</h2>
          <p>
            Our listing is under Carlos Bonvicine, our Founder and Lead Therapist. If you are on the network and have been treated by our team, you can vouch for Range and Restore on the listing. It helps other members know we are worth their time. If you run a business and want to talk about working together, message Carlos there, or use our <Link href={ROUTES.contact} className="link-inline">contact page</Link>.
          </p>
        </div>

        <div className="mt-12 bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-3">See our Refuse 2 Quit listing</h2>
          <p className="text-brand-green font-semibold mb-6">
            Sports and remedial massage, Normatec compression and infrared sauna at 130 Junction Road, Archway N19. Find us, vouch for us or message us on the Refuse 2 Quit Network.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={LISTING_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-mid transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Range and Restore on Refuse 2 Quit <span aria-hidden="true">→</span>
            </a>
            <a
              href={BOOKING_URLS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-brand-green"
            >
              Book Range and Restore <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.community.index} className="link-inline link-inline-tap">
              &larr; Back to Our Archway Community
            </Link>
            <Link href={ROUTES.blog.smallBusinessesRefuse2QuitNetworkArchway} className="link-inline link-inline-tap">
              &rarr; Why we back small businesses, and joined Refuse 2 Quit
            </Link>
            <Link href={ROUTES.givingBack} className="link-inline link-inline-tap">
              &rarr; The charities we support
            </Link>
            <Link href={ROUTES.team} className="link-inline link-inline-tap">
              &rarr; Meet the Range and Restore team
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
