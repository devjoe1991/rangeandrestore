import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'How Much Does a Sports Massage Cost? Prices Explained',
  description: "How much does a sports massage cost? In London it's typically around £50–£110 depending on session length. Here are Range and Restore's prices in Archway, what affects the cost, and ways to pay less.",
  path: '/blog/sports-massage-cost-prices',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'How Much Does a Sports Massage Cost?', path: '/blog/sports-massage-cost-prices' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much Does a Sports Massage Cost?',
  description: 'How much does a sports massage cost in London? A clear breakdown of sports massage prices, what affects the cost, and cheaper options at Range and Restore in Archway, North London.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=75',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Soft Tissue Therapist & MLD Practitioner',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  url: 'https://rangeandrestore.co.uk/blog/sports-massage-cost-prices',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/sports-massage-cost-prices',
  keywords: 'sports massage cost, sports massage prices, how much is a sports massage, sports massage price London, deep tissue massage cost Archway, sports massage N19',
}

// Buyer-intent FAQs — mirror the question-shaped headings above so the page is
// eligible for People Also Ask / FAQ rich results and AI answers on the exact
// pricing queries people search. Answers are grounded strictly in the prices in
// the article; keep the two in sync when editing.
const faqs = [
  {
    q: "How much does a sports massage cost?",
    a: "In London a sports massage typically costs somewhere in the region of £50–£110, depending mainly on the length of the session. At Range and Restore in Archway it's £50 for 30 minutes, £75 for 60 minutes and £110 for 90 minutes. Prices can change, so check the booking page for the latest.",
  },
  {
    q: "How much is a 60-minute sports massage?",
    a: "A 60-minute Sports & Deep Tissue Massage at Range and Restore in Archway is £75. If you add advanced cupping it's £85 for 60 minutes, and the lower-cost Community Tuesday Clinic runs at £60 for 60 minutes every Tuesday. Check the booking page for the latest prices.",
  },
  {
    q: "Why do sports massage prices vary?",
    a: "The main factor is session length — a 30-minute treatment costs less than a 90-minute one. Beyond that, the therapist's qualifications and experience, the clinic's location (central London tends to be dearer) and any add-ons such as cupping all affect the price. At Range and Restore, every therapist holds a BTEC Level 5 qualification in soft tissue therapy.",
  },
  {
    q: "Is a sports massage worth the money?",
    a: "For most people who train regularly, carry a niggling injury or sit at a desk all day, a focused, assessment-led session is good value — you're paying for a trained pair of hands and time spent on the actual problem, plus advice on what to do between sessions. Whether it's worth it depends on how much the issue is affecting you.",
  },
  {
    q: "Are there cheaper sports massage options?",
    a: "Yes. The Community Tuesday Clinic runs every Tuesday at a lower cost — £60 for 60 minutes and £85 for 90 minutes. If you come regularly, massage bundles bring the per-session price down: a 5 × 60-minute bundle is £350 (£70 a session) and a 10 × 60-minute bundle is £650 (£65 a session). Gift cards are also available.",
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SportsMassageCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            How Much Does a Sports Massage Cost?
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-07-03">3 July 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            In London a sports massage typically costs somewhere in the region of £50–£110, depending mainly on the length of the session. At Range and Restore in Archway, North London, a <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">Sports &amp; Deep Tissue Massage</Link> is £50 for 30 minutes, £75 for 60 minutes and £110 for 90 minutes. Prices can change, so it&rsquo;s always worth checking the booking page for the latest.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How much does a sports massage cost?</h2>

          <p>
            The single biggest thing that decides the price is how long you book for. Here is the full price list at Range and Restore so you can see exactly what you&rsquo;re paying for:
          </p>

          <p><strong className="text-page">Sports &amp; Deep Tissue Massage</strong></p>
          <ul className="space-y-2 list-disc list-inside">
            <li>30 minutes — £50</li>
            <li>60 minutes — £75</li>
            <li>90 minutes — £110</li>
          </ul>

          <p><strong className="text-page">2-Hour Pain Relief Massage</strong> — £170 for a full two hours, for when you want time to work through several areas thoroughly in one visit.</p>

          <p><strong className="text-page">Advanced Cupping + Sports/Deep Tissue Massage</strong></p>
          <ul className="space-y-2 list-disc list-inside">
            <li>30 minutes — £60</li>
            <li>60 minutes — £85</li>
            <li>90 minutes — £125</li>
          </ul>

          <p>
            These are the current prices at the time of writing. Prices do change from time to time, so please check the booking page for the latest before you book.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What affects the price?</h2>

          <p>
            If you&rsquo;ve been comparing clinics and wondering why quotes vary, a few things are usually behind the difference:
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Session length</h3>
          <p>
            This is the main driver. A 30-minute treatment is focused on one problem area, while 60 and 90 minutes give time to assess, work the wider muscle groups involved, and finish with mobility work. Longer sessions cost more simply because they take more of the therapist&rsquo;s time.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">The therapist&rsquo;s qualifications and experience</h3>
          <p>
            You&rsquo;re paying for a trained pair of hands, not just the room. A properly qualified soft tissue therapist can assess what&rsquo;s actually going on and treat the cause rather than just rubbing where it hurts. At Range and Restore, every therapist holds a BTEC Level 5 qualification in soft tissue therapy, which is reflected in an assessment-led approach and advice on what to do between sessions.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Location</h3>
          <p>
            Central London clinics tend to charge more, largely because their overheads are higher. A local clinic like Range and Restore in Archway can keep prices sensible without you having to trek into the middle of town for proper hands-on treatment.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Add-ons</h3>
          <p>
            Extras such as advanced cupping alongside your massage add a little to the price — a 60-minute session with cupping is £85 rather than £75, for example. Whether that&rsquo;s worth it depends on what you&rsquo;re coming in for, which is something worth discussing at the start of your appointment.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Ways to pay less</h2>

          <p>
            A good sports massage doesn&rsquo;t have to be a one-off treat. There are a few sensible ways to bring the cost down:
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Community Tuesday Clinic</h3>
          <p>
            The <Link href="/services/community-tuesday-clinic" className="text-[#0f767a] hover:text-page font-medium">Community Tuesday Clinic</Link> runs every Tuesday at a lower cost — £60 for 60 minutes and £85 for 90 minutes. It&rsquo;s the same hands-on treatment at a more accessible price, and a good option if you want regular maintenance work without the full weekday rate.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Massage bundles</h3>
          <p>
            If you train regularly or you&rsquo;re managing an ongoing issue, <Link href="/services/massage-bundles" className="text-[#0f767a] hover:text-page font-medium">massage bundles</Link> offer better per-session value. A 5 × 60-minute bundle is £350, which works out at £70 a session, and a 10 × 60-minute bundle is £650, or £65 a session. For longer treatments, a 5 × 90-minute bundle is £500 and a 10 × 90-minute bundle is £950. Buying ahead is the simplest way to bring the ongoing cost down.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Gift cards</h3>
          <p>
            Gift cards are available too, which are handy if you&rsquo;d like to give someone a session or put credit towards your own treatments. As with everything here, check the booking page for the latest prices and options.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Is a sports massage worth the cost?</h2>

          <p>
            The honest answer is that it depends on what you need it for. If you train regularly, carry a niggling injury, or spend your days hunched over a desk, a focused session is usually good value — you&rsquo;re paying for time spent on the actual problem, an assessment of what&rsquo;s driving it, and practical advice for between visits. That&rsquo;s a different thing from a general relaxation rub, and it&rsquo;s where the cost is justified.
          </p>

          <p>
            If you only have a minor, one-off ache that&rsquo;s already settling, you may not need a full 90-minute treatment — a shorter 30-minute session, or waiting to see if it clears on its own, might be the sensible call. A good therapist will tell you that rather than upselling. If you want to understand what a session actually does for you, our guide to the <Link href="/blog/sports-massage-benefits" className="text-[#0f767a] hover:text-page font-medium">benefits of sports massage</Link> goes into more detail.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Sports massage prices near you in North London</h2>

          <p>
            If you&rsquo;ve been searching &ldquo;sports massage cost near me&rdquo;, &ldquo;sports massage prices London&rdquo;, &ldquo;how much is a sports massage Archway&rdquo; or &ldquo;deep tissue massage price N19&rdquo;, Range and Restore is a local option with clear, honest pricing. The clinic at 130 Junction Road is two minutes from Archway tube on the Northern Line and serves clients right across N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            That covers Archway, Tufnell Park, Holloway, Highgate, Crouch End, Finsbury Park, Islington, Camden and Kentish Town, along with the wider North London catchment. It means you can get properly qualified, assessment-led sports massage at sensible prices without heading into central London — and with lower-cost Community Tuesday sessions and bundles if you&rsquo;re coming back regularly.
          </p>
        </div>

        {/* Buyer-intent FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Sports massage cost: common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-page mb-2">{f.q}</h3>
                <p className="text-page-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book your session or see the latest prices</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Clear, honest pricing on assessment-led sports and deep tissue massage in Archway, North London. Check the booking page for the latest prices and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.sportsDeepTissue}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a2330] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3d3a] transition-colors min-h-[44px]"
            >
              Book &amp; See Prices
            </a>
            <a
              href={BOOKING_URLS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#1a2330] font-semibold px-6 py-3 rounded-lg border-2 border-[#1a2330] hover:bg-[#1a2330] hover:text-white transition-colors min-h-[44px]"
            >
              Buy a Gift Card
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1a2330] font-semibold underline min-h-[44px] sm:ml-2"
            >
              Or ask a question first
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/services/massage-bundles" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Massage Bundles &ndash; Better Value for Regulars
            </Link>
            <Link href="/services/community-tuesday-clinic" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Community Tuesday Clinic &ndash; Lower-Cost Sessions
            </Link>
            <Link href="/blog/sports-massage-benefits" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; The Benefits of Sports Massage
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#0f767a] font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
