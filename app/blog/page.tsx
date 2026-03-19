import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  path: '/blog',
})

const posts = [
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
      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311]">Wellness Hub</h1>
          <p className="mt-4 text-xl text-[#334311]/80">Expert advice on massage, recovery, and long-term muscle health</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <time className="text-sm text-gray-500 uppercase tracking-wide">{post.date}</time>
                <h2 className="text-xl font-bold text-[#334311] mt-2 mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#618020] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#618020] font-semibold hover:text-[#334311] transition-colors min-h-[44px]"
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
