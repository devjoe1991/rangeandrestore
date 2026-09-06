import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export const metadata: Metadata = buildMetadata({
  title: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  path: '/blog',
})

const posts = [
  {
    title: 'Can Massage Help a Trapped Nerve? An Honest Answer',
    slug: 'trapped-nerve-massage-archway',
    date: '6 September 2026',
    excerpt: 'Pins and needles down your arm or leg, or a neck you cannot turn? When massage genuinely helps a trapped nerve, when it cannot, and why pressing on the painful spot backfires. Archway, Islington and North London.',
  },
  {
    title: 'Before, During & After Pregnancy: Supporting Your Body Through Every Stage of Motherhood',
    slug: 'pregnancy-massage-before-during-after-archway',
    date: '5 September 2026',
    excerpt: "Pregnancy changes your body — but your need for care doesn't begin at conception or end after birth. How soft tissue therapy supports back, hip and pelvic discomfort before, during and after pregnancy, with Level 5 therapists also trained in pregnancy massage. Archway, Islington and North London.",
  },
  {
    title: 'Sciatica Treatment in North London: Why the Painful Spot Is Rarely the Problem',
    slug: 'sciatica-treatment-north-london',
    date: '31 August 2026',
    excerpt: "Sciatic-type pain in your lower back, glute or down the leg that keeps coming back? Why rubbing the sore spot is rarely enough, what actually irritates the sciatic nerve, and how assessment-led sports and remedial massage treats your presentation rather than a template. Archway, Islington and North London.",
  },
  {
    title: 'The Mind-Body Connection: How Reducing Pain and Improving Movement Can Support Your Mental Wellbeing',
    slug: 'mind-body-connection-massage-mental-wellbeing-archway',
    date: '23 August 2026',
    excerpt: 'Persistent pain, tight muscles and stiff movement wear down sleep, mood and stress levels. How sports massage and soft tissue therapy reduce that physical burden — and why feeling better in your body supports how you feel mentally. Archway, North London.',
    image: '/seated-side-stretch-mobility-mind-body-connection-range-and-restore-archway-north-london.jpg',
  },
  {
    title: 'Do I Need a Scan for My Injury? MSK Ultrasound, Explained',
    slug: 'msk-ultrasound-scan-massage-archway',
    date: '9 July 2026',
    excerpt: "Pain that isn't improving, or an injury you can't explain? When a diagnostic MSK ultrasound is worth having, what it can show, and how the new scan + clinical massage package works under one roof. Archway, North London.",
  },
  {
    title: 'The Benefits of Sports Massage: What It Actually Does',
    slug: 'sports-massage-benefits',
    date: '3 July 2026',
    excerpt: 'What does a sports massage actually do for you? The real benefits — easing muscle tension and pain, faster recovery, better mobility, injury prevention and stress relief — and who it helps (not just athletes). Archway, North London.',
  },
  {
    title: 'How Much Does a Sports Massage Cost?',
    slug: 'sports-massage-cost-prices',
    date: '3 July 2026',
    excerpt: 'How much is a sports massage in London? A clear guide to prices, what affects the cost, and how to pay less with the Community Tuesday Clinic and massage bundles. Archway, North London.',
  },
  {
    title: 'Muscle Knots and Trigger Points: How Massage Helps',
    slug: 'muscle-knots-trigger-point-massage-archway',
    date: '3 July 2026',
    excerpt: 'Knots in your shoulders or tight, tender spots that keep coming back? How trigger point therapy, deep tissue and myofascial release get rid of muscle knots — and stop them returning. Archway, North London.',
  },
  {
    title: 'Stress Relief Massage: Ease Tension and Switch Off',
    slug: 'stress-relief-massage-archway',
    date: '3 July 2026',
    excerpt: 'Stressed, wound up or struggling to switch off? How a stress-relief massage calms the nervous system, releases the tension you hold in your neck and shoulders, and helps you actually relax. Archway, North London.',
  },
  {
    title: 'Lower Back Pain: How Massage Can Help',
    slug: 'lower-back-pain-massage-archway',
    date: '3 July 2026',
    excerpt: "Bad back or lower back pain that won't shift? How assessment-led sports and clinical massage releases the tight lower-back, glute and hip muscles behind most back pain — and when to get it checked. Archway, North London.",
  },
  {
    title: 'Neck Pain and Stiff Neck: How Massage Helps',
    slug: 'neck-pain-massage-archway',
    date: '3 July 2026',
    excerpt: "Stiff neck, cricked neck or 'text neck' from screens? How massage releases the neck and shoulder tension behind most neck pain, and the posture habits that cause it. Archway, North London.",
  },
  {
    title: 'Tension Headaches: Can Massage Help?',
    slug: 'tension-headache-massage-archway',
    date: '3 July 2026',
    excerpt: 'Headaches from a tight neck and shoulders? How massage can ease the muscle tension behind tension-type headaches — and the red flags that mean you should see a doctor. Archway, North London.',
  },
  {
    title: 'Frozen Shoulder and Shoulder Pain: Can Massage Help?',
    slug: 'frozen-shoulder-massage-archway',
    date: '3 July 2026',
    excerpt: "Stiff, painful shoulder or a frozen shoulder? What massage can and can't do for shoulder pain, how it eases the surrounding tension, and when you need medical care. Archway, North London.",
  },
  {
    title: 'Plantar Fasciitis and Heel Pain: How Massage Helps',
    slug: 'plantar-fasciitis-massage-archway',
    date: '3 July 2026',
    excerpt: 'Heel pain with those first painful steps in the morning? How sports massage eases the tight calves and foot tension behind plantar fasciitis. Archway, North London.',
  },
  {
    title: 'Hip Pain and Tight Hips: How Massage Helps',
    slug: 'hip-pain-massage-archway',
    date: '3 July 2026',
    excerpt: 'Tight or aching hips from sitting, cycling or training? How sports massage releases the hip flexors, glutes and deep rotators behind tight hips. Archway, North London.',
  },
  {
    title: 'Sports Recovery in Archway: Your Complete Recovery Stack',
    slug: 'sports-recovery-archway',
    date: '3 July 2026',
    excerpt: 'Recovery is where hard training turns into results. How to stack sports massage, Normatec compression and infrared sauna between sessions and around race day, all in one place in Archway, North London.',
    image: '/infrared-hybrid-sauna-red-light-recovery-suite-archway-north-london.jpg',
  },
  {
    title: 'Sciatica and Trapped Nerve Pain: Can Massage Help?',
    slug: 'sciatica-massage-archway',
    date: '3 July 2026',
    excerpt: 'Sciatica, a trapped nerve or shooting pain down your leg? How assessment-led clinical massage releases the glutes, piriformis and lower-back muscles that irritate the sciatic nerve — and when to seek medical help — in Archway, North London.',
  },
  {
    title: 'Shin Splints: How Sports Massage Helps',
    slug: 'shin-splints-massage-archway',
    date: '3 July 2026',
    excerpt: 'Shin pain when you run? How sports massage eases the tight calves and lower-leg tension behind shin splints, the load mistakes that cause them, and the red flags that mean you should rule out a stress fracture. Archway, North London.',
  },
  {
    title: 'Tight and Pulled Hamstrings: Sports Massage for Recovery',
    slug: 'tight-hamstring-massage-archway',
    date: '3 July 2026',
    excerpt: 'Always tight at the back of the legs, or nursing a pulled hamstring? How sports massage releases hamstring tension, why your hips and glutes are usually involved, and how to tell a tight hamstring from a strain. Archway, North London.',
  },
  {
    title: 'Tennis Elbow and RSI: Can Soft Tissue Therapy Help?',
    slug: 'tennis-elbow-massage-archway',
    date: '3 July 2026',
    excerpt: 'Elbow or forearm pain from gripping, typing or a mouse — not just tennis? How soft tissue therapy releases the forearm and addresses the neck, shoulder and desk habits behind tennis elbow and RSI, in Archway, North London.',
  },
  {
    title: 'Sports Massage and Recovery for Cyclists in Archway, North London',
    slug: 'sports-massage-cycling-recovery-archway',
    date: '14 May 2026',
    excerpt: 'A North London guide to sports massage and recovery for cyclists. Why long hours in the saddle hit hip flexors, lower back and neck, how the Recovery Suite in Archway helps cyclists recover faster, and how to stack sports massage, infrared sauna and Normatec compression around your riding.',
    image: '/cycling-recovery-sports-massage-archway-north-london.jpg',
  },
  {
    title: 'Faster Recovery with Normatec Compression, Now in Archway',
    slug: 'normatec-full-body-compression-recovery-archway',
    date: '13 May 2026',
    excerpt: 'Hyperice Normatec 3 Full Body pneumatic compression has joined the Recovery Suite at Range and Restore in Archway. How it works, who it helps, and how to book a session.',
    image: '/recovery-suite/normatec-compression-therapy-archway.jpg',
  },
  {
    title: 'Sports Massage in Archway, North London: A Local Guide',
    slug: 'sports-massage-archway-local-guide',
    date: '9 May 2026',
    excerpt: 'A North London local guide to sports massage in Archway. Where to book, who it suits, what to look for in a therapist, and how clients across N19, Tufnell Park, Holloway, Highgate and Finsbury Park are using it.',
  },
  {
    title: 'How Sports Massage Helps Office Workers in Archway, North London',
    slug: 'office-worker-massage-archway',
    date: '20 April 2026',
    excerpt: 'Long hours at a desk, daily commutes, and late-night laptop sessions build up a relentless load on the body. Targeted sports massage and soft tissue therapy in Archway help office workers and commuters move and feel better.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMeGsB5EWhgxJyZ3DNekd_e1muf6vhA700DGX9t=w1200',
  },
  {
    title: 'Marathon Massage in Archway: Your Pre and Post Race Recovery Guide',
    slug: 'marathon-sports-massage-archway',
    date: '13 April 2026',
    excerpt: 'Pre-marathon preparation, post-marathon recovery, and everything your muscles need to survive 26.2 miles — from a therapist with 4 years of hands-on marathon event experience in Archway, North London.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPwlk_sqmDIVY-g-_dlBgZ4lW0vG1R-m6SyKK0O=s680-w680-h510-rw',
  },
  {
    title: 'Sports Massage and Soft Tissue Therapy — Perform, Recover and Stay Pain-Free',
    slug: 'sports-massage-soft-tissue-therapy-archway',
    date: '26 March 2026',
    excerpt: 'How sports massage and soft tissue remedial therapy help runners, cyclists, gym-goers and desk workers recover, move better and stay pain-free. Assessment-led treatment in Archway, North London.',
  },
  {
    title: 'Hydration and Muscle Health – What Every Client Should Know',
    slug: 'hydration-and-muscle-health',
    date: '8 February 2026',
    excerpt: 'Water makes up around 75% of muscle tissue. Learn why staying hydrated is essential for muscle function, injury prevention, and getting the most from your massage treatment.',
  },
  {
    title: 'How Sports Massage Helps Runners Before and After Races',
    slug: 'sports-massage-for-runners',
    date: '1 February 2026',
    excerpt: "Whether training for a 10K or a full marathon, sports massage can help you prepare your body before race day and recover effectively afterwards. Find out how.",
  },
  {
    title: 'Achilles Tendinitis – How Sports Massage Helps Recovery',
    slug: 'achilles-tendinitis-recovery-massage',
    date: '1 February 2026',
    excerpt: 'Achilles tendinitis is a common injury among runners and active people. Discover how targeted sports massage and soft tissue therapy can support your recovery.',
  },
  {
    title: 'Stiff Neck and Bad Back From Desk Work? How Massage Helps',
    slug: 'desk-posture-pain-massage',
    date: '1 February 2026',
    excerpt: 'Stiff neck, tight shoulders or a bad back from sitting at a desk all day? How assessment-led massage eases desk posture pain, helps stop it coming back, and when to see a GP. Archway, North London.',
  },
]

// Posts with their own dedicated cover image are featured first; the rest render as compact guide cards.
const featuredPosts = posts.filter((p) => p.image)
const guidePosts = posts.filter((p) => !p.image)

const breadcrumbs = buildBreadcrumbs([{ name: 'Blog', path: '/blog' }])

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  url: `${BASE_URL}/blog`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: posts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
    })),
  },
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Wellness Hub</h1>
          <p className="mt-4 text-xl text-page-muted">Expert advice on massage, recovery, and long-term muscle health</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Featured posts — only posts with their own dedicated cover image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
              <Link href={`/blog/${post.slug}`} className="block aspect-[4/3] relative overflow-hidden">
                <Image
                  src={post.image!}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-sm text-page-muted opacity-70 uppercase tracking-wide">{post.date}</time>
                <h2 className="text-xl font-bold text-page mt-2 mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#0f767a] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-page-muted mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#0f767a] font-semibold hover:text-page transition-colors min-h-[44px]"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Guides — compact rectangular cards, no cover image */}
        <section aria-labelledby="guides-heading" className="mt-14 lg:mt-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 id="guides-heading" className="text-2xl lg:text-3xl font-bold text-page">More guides</h2>
            <p className="text-sm text-page-muted hidden sm:block">Problem-led advice on pain, injuries and recovery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guidePosts.map((post) => (
              <article key={post.slug} className="group card-lift rounded-[16px] overflow-hidden flex bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
                <div className="w-1.5 shrink-0 bg-[#0f767a]" aria-hidden="true" />
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#0f767a] font-semibold uppercase tracking-widest text-[11px]">Wellness guide</span>
                    <time className="text-[11px] text-page-muted uppercase tracking-wide">{post.date}</time>
                  </div>
                  <h3 className="text-lg font-bold text-page mt-2 mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#0f767a] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-page-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#0f767a] font-semibold text-sm hover:text-page transition-colors mt-2 min-h-[44px]"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <NewsletterSignup variant="panel" />
        </section>
      </div>
    </>
  )
}
