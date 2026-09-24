import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Why We Joined the Refuse 2 Quit Network',
  description: 'Range and Restore is on the Refuse 2 Quit Network. What the small business directory is, why a sports massage clinic joined, and how to vouch for us. Archway, N19.',
  path: ROUTES.blog.smallBusinessesRefuse2QuitNetworkArchway,
  author: true,
})

// Our listing. The profile is under Carlos's name, so vouches and messages go to him.
// The network's home page redirects to a login screen, so we only link to the public listing.
const LISTING_URL = 'https://refuse2quit.com/m/448c8b0a-9683-4857-9f05-a577dd0f95b5'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: ROUTES.blog.index },
  { name: 'Why We Joined the Refuse 2 Quit Network', path: ROUTES.blog.smallBusinessesRefuse2QuitNetworkArchway },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Small Businesses Keep Each Other Going. That Is Why We Joined the Refuse 2 Quit Network',
  description: 'What the Refuse 2 Quit Network is, why Range and Restore, an independent sports massage clinic in Archway, is listed on it, who we want to connect with, and how members can vouch for or message us.',
  image: 'https://rangeandrestore.co.uk/range-and-restore-sports-massage-shopfront-junction-road-archway-n19.jpg',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Founder & Lead Therapist',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  url: 'https://rangeandrestore.co.uk/blog/small-businesses-refuse-2-quit-network-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/small-businesses-refuse-2-quit-network-archway',
  keywords: 'Refuse 2 Quit Network, Refuse2Quit, R2Q network, small business directory London, supporting small businesses, local independent businesses North London, sports massage Archway, sports massage North London',
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block come from this one array.
const faqs = [
  {
    q: 'What is the Refuse 2 Quit Network?',
    a: 'An online directory of creatives, makers and specialists, most of them small businesses in London. Members have a profile saying what they do and who they want to connect with. Other members can message them and vouch for work they have seen first hand. When we joined in September 2026 it listed more than 3,600 people.',
  },
  {
    q: 'Is Range and Restore on the Refuse 2 Quit Network?',
    a: 'Yes. Our listing is under Carlos Bonvicine, our Founder and Lead Therapist, in the Health and Wellbeing category, based in Archway. It covers the full clinic: sports, deep tissue and remedial massage, Manual Lymphatic Drainage, cupping, Normatec compression and the infrared sauna.',
  },
  {
    q: 'How do I vouch for Range and Restore on Refuse 2 Quit?',
    a: 'Log in to your Refuse 2 Quit account, open our listing and press Vouch for Carlos. Vouches are for work you have seen or had yourself, so please only vouch if our team has treated you.',
  },
  {
    q: 'Do you work with other small businesses in North London?',
    a: 'Yes. We send clients to local independents we trust, from a Pilates studio by Finsbury Park station to a café in Archway, and they send people to us. We are especially keen to hear from physiotherapists, osteopaths, personal trainers, studios, running clubs and gyms in North London. Message Carlos on the network or use our contact page.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SmallBusinessesRefuse2QuitNetworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Small Businesses Keep Each Other Going. That Is Why We Joined the Refuse 2 Quit Network
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-09-19">19 September 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Range and Restore is now listed on the Refuse 2 Quit Network, a directory where London&apos;s small businesses find each other, message each other and vouch for each other&apos;s work. Here is what it is, why a sports massage clinic in Archway is on it, and how to find us there.
          </p>

          <p>
            The name says a lot. Anyone who runs a small business knows the weeks when stopping would be easier. A quiet month. A rent review. A booking system that falls over on a Saturday. What keeps most independents going is other independents. The café owner who tells a regular where to get their back looked at. The barber who knows a good accountant. The trainer who sends a client to a therapist they trust. That is the idea behind the network, and it is how we have always worked.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What is the Refuse 2 Quit Network?</h2>

          <p>
            The Refuse 2 Quit Network is an online directory of creatives, makers and specialists. Most are small businesses in London. When we joined in September 2026 it listed more than 3,600 people, across categories that include food and drink, events and hospitality, beauty, hair and makeup, music and entertainment, photography and video, marketing, tech and web, and health and wellbeing.
          </p>

          <p>
            Two features make it more than a list of names. Every profile says what the member is looking for, so a personal trainer who wants a massage therapist and a massage therapist who wants personal trainers can find each other in a minute. And members can vouch for each other. The network describes vouches as building trust through real recommendations, which is exactly what they are: one business owner telling another that someone is good at what they do.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why a sports massage clinic is on a business directory</h2>

          <p>
            Range and Restore is one clinic on Junction Road with a <Link href={ROUTES.team} className="link-inline">team of four BTEC Level 5 therapists</Link>. We are a small business too, and everything we do locally already runs on referrals between neighbours. We send people to <Link href={ROUTES.community.fs8FinsburyPark} className="link-inline">FS8, the reformer Pilates studio by Finsbury Park station</Link>, when they need regular strength work. We send people to <Link href={ROUTES.community.reliableScan} className="link-inline">Reliable Scan</Link>, in the same building, when an injury needs imaging. When clients ask where to eat after a session, we point them to <Link href={ROUTES.community.theDynamicSpud} className="link-inline">The Dynamic Spud</Link>. Those businesses send people back to us.
          </p>

          <p>
            The Refuse 2 Quit Network does the same thing at London scale. Being listed means a studio owner in Crouch End or a running coach in Highgate can find a sports massage clinic they can trust, and see what other business owners say about us before they send anyone our way.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">The work in the directory is the work we treat</h2>

          <p>
            Scroll through the network and you see barbers, chefs, DJs, photographers, event crews, founders and developers. Every one of those jobs loads the body in a predictable way, and those patterns are what our therapists work on every week.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-page">Barbers, hairdressers and makeup artists.</strong> On your feet all day with your arms up and your head tilted towards the client. Neck, shoulders and lower back take the load. See our guides to <Link href={ROUTES.blog.neckPainMassageArchway} className="link-inline">neck pain</Link> and <Link href={ROUTES.blog.lowerBackPainMassageArchway} className="link-inline">lower back pain</Link>.</li>
            <li><strong className="text-page">Chefs, bakers and event crews.</strong> Long shifts standing on hard floors, lifting and carrying. Hips, lower back and feet, and legs that feel heavy by the end of the week. <Link href={ROUTES.blog.plantarFasciitisMassageArchway} className="link-inline">Heel pain</Link> is common, and for heavy legs there is our <Link href={ROUTES.recoverySuite.compressionTherapy} className="link-inline">Sports Massage + Normatec session</Link>.</li>
            <li><strong className="text-page">DJs, musicians and photographers.</strong> Heavy kit on one shoulder, crouching for the shot, late nights. Upper back, shoulders and the <Link href={ROUTES.blog.tensionHeadacheMassageArchway} className="link-inline">tension headaches</Link> that come with them.</li>
            <li><strong className="text-page">Founders, marketers and developers.</strong> A laptop, a phone and long hours. The <Link href={ROUTES.blog.deskPosturePainMassage} className="link-inline">stiff neck and bad back that come from desk work</Link>, and the kind of <Link href={ROUTES.blog.stressReliefMassageArchway} className="link-inline">stress</Link> that ends up sitting in your shoulders.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who we want to meet on the network</h2>

          <p>
            Mostly people in North London who look after bodies in a different way to us: physiotherapists and osteopaths, personal trainers and strength coaches, Pilates and yoga studios, running clubs and coaches, gyms, combat sports clubs, cycling coaches and dance studios. We also want to hear from local community groups, and from businesses that want to look after their staff.
          </p>

          <p>
            The aim is honest referrals both ways. If a client needs a physio rather than a massage, we want to know exactly who to send them to. If a trainer&apos;s client keeps pulling up with the same tight hamstring, we want to be the clinic that trainer thinks of.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Why a vouch matters to a small clinic</h2>

          <p>
            Recommendations are how a small clinic grows. We were named New Sports Massage Clinic of the Year 2026/27 at the <Link href={ROUTES.awards} className="link-inline">Prestige Awards</Link>, and we are proud of our reviews. Still, a recommendation from someone you know counts for more than either. A vouch on Refuse 2 Quit is that same recommendation, from one business owner to another. If our team has treated you and you are on the network, a vouch on our listing helps other members know we are worth their time.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How to find us on the network</h2>

          <p>
            Our listing is under Carlos Bonvicine, our Founder and Lead Therapist, in the Health and Wellbeing category. You can <a href={LISTING_URL} target="_blank" rel="noopener" className="link-inline">see Range and Restore on the Refuse 2 Quit Network here</a>, vouch for us, or message Carlos about working together. We have also put a short page about it in our <Link href={ROUTES.community.refuse2QuitNetwork} className="link-inline">community section</Link>, next to the local businesses we work with.
          </p>

          <div className="not-prose mt-10 rounded-2xl border border-sand bg-page-sage p-6 sm:p-8">
            <h2 className="text-xl font-bold text-page mb-2">Run a small business in North London?</h2>
            <p className="text-page-muted text-sm leading-relaxed mb-5">
              Whether you want to swap referrals or your back needs sorting after a long week, we are at 130 Junction Road, Archway N19, a short walk from Archway and Tufnell Park stations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BOOKING_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-brand-green text-white hover:bg-brand-green-mid text-sm px-6"
              >
                Book Online
              </a>
              <Link href={ROUTES.contact} className="btn bg-white text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white text-sm px-6">
                Get in touch
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-page mt-12 mb-3">Common questions</h2>
          <div className="not-prose space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-sand bg-white p-5">
                <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href={ROUTES.community.refuse2QuitNetwork} className="link-inline link-inline-tap">
              &rarr; Range and Restore on the Refuse 2 Quit Network
            </Link>
            <Link href={ROUTES.blog.deskPosturePainMassage} className="link-inline link-inline-tap">
              &rarr; Stiff Neck and Bad Back From Desk Work? How Massage Helps Desk Posture Pain
            </Link>
            <Link href={ROUTES.services.sportsDeepTissueMassage} className="link-inline link-inline-tap">
              &rarr; Sports &amp; Deep Tissue Massage
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href={ROUTES.blog.index} className="text-brand-teal font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
