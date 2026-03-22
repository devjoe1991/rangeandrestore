import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'
import FaqAccordion from './FaqAccordion'
import { faqs } from './data'

export const metadata: Metadata = buildMetadata({
  title: 'Sports Massage FAQs – Range and Restore Archway',
  description: 'Common questions about sports massage, deep tissue therapy and MLD at Range and Restore in Archway, North London. Find out what to expect before you book.',
  path: '/faqs',
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-page tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-page-muted max-w-2xl">
            Whether you are new to massage, managing an injury, or just curious about booking, find your answer here.
          </p>
          <p className="mt-3 text-base text-page-muted opacity-80 max-w-xl">
            Not sure which treatment is right for you? Call Carlos on <a href="tel:+447890716154" className="font-semibold text-page hover:underline">07890 716154</a>. He is happy to talk it through before you book.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <FaqAccordion />

        {/* CTA */}
        <div className="mt-10 bg-[#2c3d1f] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">Still have questions?</h2>
          <p className="text-[#d4ecea]/80 mb-6 text-sm">
            Get in touch and Carlos will be happy to help before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookingButton label="Book Your Session" />
            <Link href="/contact" className="btn btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
