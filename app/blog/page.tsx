import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { BLOG_POSTS as posts } from '@/lib/blog-posts'

export const metadata: Metadata = buildMetadata({
  title: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  path: '/blog',
})


// Newest first. Posts published on the same day keep the order they are listed in.
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const toTime = (date: string) => {
  const [day, month, year] = date.split(' ')
  return Date.UTC(Number(year), MONTHS.indexOf(month), Number(day))
}
const sortedPosts = [...posts].sort((a, b) => toTime(b.date) - toTime(a.date))

const breadcrumbs = buildBreadcrumbs([{ name: 'Blog', path: '/blog' }])

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Wellness Hub – Sports Massage Advice & Tips',
  description: 'Expert advice on sports massage, muscle health, injury recovery, and wellbeing from Range and Restore Sports Massage in Archway, North London.',
  url: `${BASE_URL}/blog`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: sortedPosts.map((post, i) => ({
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

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Wellness Hub</h1>
          <p className="mt-4 text-xl text-page-muted">Expert advice on massage, recovery, and long-term muscle health</p>
        </div>
      </div>

      <div className="container-page container-full">
        {/* One list, newest first. Posts with their own photo show it as a thumbnail;
            the rest show the teal strip. */}
        <section aria-labelledby="posts-heading">
          <h2 id="posts-heading" className="sr-only">All articles, newest first</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="group card-lift rounded-2xl overflow-hidden flex bg-card shadow-sm border-2 border-brand-green">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative w-28 sm:w-40 shrink-0 overflow-hidden" tabIndex={-1} aria-hidden="true">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="160px"
                    />
                  </Link>
                ) : (
                  <div className="w-1.5 shrink-0 bg-brand-teal" aria-hidden="true" />
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-brand-teal font-semibold uppercase tracking-widest text-xs">Wellness guide</span>
                    <time className="text-xs text-page-muted uppercase tracking-wide">{post.date}</time>
                  </div>
                  <h3 className="text-lg font-bold text-page mt-2 mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-teal transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-page-muted text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-teal font-semibold text-sm hover:text-page transition-colors mt-2 min-h-[44px]"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 lg:mt-16 pb-16 lg:pb-20">
          <NewsletterSignup variant="panel" />
        </section>
      </div>
    </>
  )
}
