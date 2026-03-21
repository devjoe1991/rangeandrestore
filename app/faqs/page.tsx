'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'

const faqs = [
  {
    q: 'What treatment length should I book for my first session?',
    a: 'For your first visit, I strongly recommend booking either a 60- or 90-minute session. These longer sessions give us enough time to assess your posture, discuss your needs, and carry out targeted hands-on treatment. A 30-minute session may be suitable for returning clients or follow-up treatments but is often too short for new assessments.',
  },
  {
    q: "What's the difference between Sports Massage and Deep Tissue Massage?",
    a: 'Sports Massage is tailored to improve athletic performance, recovery, and injury prevention, while Deep Tissue Massage focuses on releasing tension and chronic tightness in deeper layers of muscle. Both techniques can be blended in a single session depending on your needs.',
  },
  {
    q: 'What issues can Sports Massage and Soft Tissue Therapy help with?',
    a: 'These therapies are effective for a wide range of issues, including back and neck pain, sciatica, plantar fasciitis, postural imbalances, muscle tightness, joint stiffness, running injuries, stress, and recovery from intense physical activity or injury.',
  },
  {
    q: 'Is Sports Massage supposed to hurt? Will I be sore afterwards?',
    a: "Discomfort may occur during treatment if working through tight or scarred tissue, but it should always be manageable. I communicate throughout the session to ensure you're comfortable. Some post-treatment soreness is normal and typically subsides within 24–48 hours.",
  },
  {
    q: 'Do I need to be an athlete to benefit from Sports Massage?',
    a: "Not at all. Sports Massage is beneficial for anyone experiencing muscular discomfort, stiffness from desk work, poor posture, or stress. It's just as helpful for office workers, parents, and retirees as it is for runners or athletes.",
  },
  {
    q: 'What should I wear to my massage appointment?',
    a: "Wear loose, comfortable clothing. For lower body treatment, shorts are ideal, and for upper body work, a sports bra or vest is fine. You'll be professionally draped at all times and only the area being treated will be exposed.",
  },
  {
    q: 'How often should I get a massage?',
    a: "This depends on your goals and lifestyle. Some people benefit from weekly treatments during intense training, while others may need monthly sessions for general maintenance or stress relief. I'll provide personalised recommendations during your session.",
  },
  {
    q: 'Can massage therapy help with injuries?',
    a: 'Yes, Sports and Remedial Massage can assist with injury rehabilitation by reducing muscle tightness, improving mobility, supporting circulation, and addressing compensatory movement patterns. I adapt techniques to your stage of recovery.',
  },
  {
    q: "Can I have a massage if I'm in pain or injured?",
    a: "In many cases yes, but it depends on the nature and severity of your condition. Please let me know about any pain, injury, or medical conditions when you book so we can assess whether massage is appropriate and adapt the session safely to your needs.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border-b border-[#c1e082] transition-colors ${open ? 'bg-[#c6e28a]/20' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[56px]"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#334311] text-base leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-[#618020] text-white' : 'bg-[#c6e28a] text-[#334311]'}`}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-[#334311]/75 leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#334311] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-[#334311]/75 max-w-2xl">
            Whether you are new to massage, managing an injury, or just curious about booking, find your answer here.
          </p>
          <p className="mt-3 text-base text-[#334311]/60 max-w-xl">
            Not sure which treatment is right for you? Call Carlos on <a href="tel:+447890716154" className="font-semibold text-[#334311] hover:underline">07890 716154</a>. He is happy to talk it through before you book.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-[#c1e082] overflow-hidden shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#334311] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">Still have questions?</h2>
          <p className="text-[#c6e28a]/80 mb-6 text-sm">
            Get in touch and Carlos will be happy to help before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookingButton label="Book Your Session" />
            <Link href="/contact"
              className="btn btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
