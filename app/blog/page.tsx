import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  path: '/blog',
})

const posts = [
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
    excerpt: 'From runners and cyclists to desk workers and weekend warriors — discover how sports massage and soft tissue remedial therapy in Archway help you move better, recover faster, and stay pain-free.',
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
    title: 'Say Goodbye to Desk Posture Pain',
    slug: 'desk-posture-pain-massage',
    date: '1 February 2026',
    excerpt: "Spending 8+ hours a day at a desk? Chronic neck, shoulder, and back pain are your body's signal. Learn how massage therapy reverses postural damage and delivers lasting relief.",
  },
]

export default function BlogPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Wellness Hub</h1>
          <p className="mt-4 text-xl text-page-muted">Expert advice on massage, recovery, and long-term muscle health</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm" style={{ border: '2px solid #1a3d3a' }}>
              {post.image ? (
                <Link href={`/blog/${post.slug}`} className="block aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </Link>
              ) : (
                <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-sm text-page-muted opacity-70 uppercase tracking-wide">{post.date}</time>
                <h2 className="text-xl font-bold text-page mt-2 mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#2ab4b8] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-page-muted mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#2ab4b8] font-semibold hover:text-page transition-colors min-h-[44px]"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
