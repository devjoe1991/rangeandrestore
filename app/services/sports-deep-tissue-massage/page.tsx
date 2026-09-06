import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Deep Tissue & Sports Massage, Archway North London',
  description: 'Assessment-led deep tissue and sports massage in Archway, North London. 30 min £50, 60 min £75, 90 min £110, assessment included. BTEC Level 5 therapists, same-week slots.',
  path: '/services/sports-deep-tissue-massage',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Services', path: '/services' },
  { name: 'Sports & Deep Tissue Massage', path: '/services/sports-deep-tissue-massage' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sports, Deep Tissue & Soft Tissue Remedial Massage Therapy',
  description: 'Personalised assessment-led sports and deep tissue massage for injury recovery, performance, and long-term muscle health.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: { '@type': 'PostalAddress', streetAddress: '130 Junction Road', addressLocality: 'Archway', postalCode: 'N19 5LB' },
  },
  areaServed: [
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'Tufnell Park, London N7' },
    { '@type': 'Place', name: 'Holloway, London N7' },
    { '@type': 'Place', name: 'Islington, London N1' },
    { '@type': 'Place', name: 'Finsbury Park, London N4' },
    { '@type': 'Place', name: 'Crouch End, London N8' },
    { '@type': 'Place', name: 'Highgate, London N6' },
    { '@type': 'Place', name: 'Kentish Town, London NW5' },
  ],
  serviceType: 'Sports Massage',
}

// Rendered visibly below. FAQPage markup must match on-page content, so the
// schema and the rendered block are generated from this one array.
const faqs = [
  {
    q: 'How much does deep tissue sports massage cost in Archway?',
    a: 'A 30-minute targeted session is £50, a 60-minute treatment is £75, and a 90-minute full-body or multi-area session is £110. All prices include the initial assessment.',
  },
  {
    q: 'Will sports massage hurt?',
    a: 'Sports massage works deeper than relaxation massage, so you may feel firm pressure and some discomfort when tense or restricted areas are addressed. The pressure is always adjusted to your tolerance — discomfort should be productive, never sharp pain.',
  },
  {
    q: 'How often should I book sports massage?',
    a: 'For an active injury or acute pain, weekly or fortnightly sessions are usually recommended for 3-4 weeks, then spaced out as you improve. For training maintenance or chronic tension, monthly sessions are typical. Your therapist will advise after your first assessment.',
  },
  {
    q: "What's the difference between sports massage and deep tissue massage?",
    a: 'Deep tissue refers to the pressure and target depth — slow, sustained strokes reaching the deeper layers of muscle and fascia. Sports massage is a wider clinical approach that uses deep tissue work alongside techniques like trigger point therapy, MET and soft tissue release, applied based on assessment.',
  },
  {
    q: 'Do I need to book an assessment separately?',
    a: 'No. Every session at Range and Restore includes a brief assessment at the start so the treatment is tailored to your presentation that day. You only book the treatment length you need.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function SportsDeepTissuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow-sm">Sports Massage · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Sports &amp; Deep Tissue Massage in Archway, London for Pain Relief &amp; Faster Recovery
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Struggling with back, neck or muscle pain? Targeted treatment designed to relieve tension, restore mobility and help you move and feel better from your very first session.
          </p>
          <div className="mt-6">
            <BookingButton href={BOOKING_URLS.sportsDeepTissue} label="Book Your Session" />
          </div>
        </div>
      </div>

      <div className="container-page container-wide">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this treatment for?</h2>
            <p className="text-page-muted mb-4">If you&apos;re dealing with:</p>
            <ul className="space-y-2">
              {[
                'Tight, sore or fatigued muscles',
                'Training-related injuries or recovery needs',
                'Reduced flexibility or restricted mobility',
                'Back, neck or shoulder tension from activity or work',
                'Post-event soreness or muscle fatigue',
                'Stress-related muscular tightness',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-page-muted">This treatment offers effective relief, whether you&apos;re training, recovering, or simply looking to restore balance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Choose your ideal session length</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes – £50', desc: 'Focused treatment for a single area (e.g. calves, hamstrings, shoulders). Ideal for quick recovery or tension release.' },
                { duration: '60 Minutes – £75', desc: 'In-depth session for one or two areas. Great for targeted injury support, recovery, and restoring mobility.' },
                { duration: '90 Minutes – £110', desc: 'Full-body or multi-area treatment. Best for athletes, runners, or anyone managing ongoing tension and needing comprehensive care.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What are the benefits?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Relieves muscle tension and stiffness',
                'Improves circulation and recovery',
                'Enhances range of motion and flexibility',
                'Reduces post-event soreness and fatigue',
                'Supports rehabilitation from injury',
                'Improves posture and body alignment',
                'Promotes long-term muscular health',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What techniques are used?</h2>
            <p className="text-page-muted mb-3">Each session is tailored to your needs and may include:</p>
            <ul className="space-y-2">
              {[
                'Deep tissue massage techniques',
                'Sports-specific massage therapy',
                'Myofascial release',
                'Soft tissue mobilisation',
                'Assisted stretching and mobilisation',
                'Trigger point therapy',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="sdt-faqs">
            <h2 id="sdt-faqs" className="text-2xl font-black text-page mb-5">Common questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-sand bg-white p-5">
                  <h3 className="font-bold text-page mb-2">{faq.q}</h3>
                  <p className="text-page-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-accent rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-ink mb-4">Ready to clear that muscle tightness or injury?</h2>
            <p className="text-brand-green font-semibold mb-6">
              Assessment-led sports massage in Archway, North London. Whether you are training, recovering, or managing daily muscular stress, this treatment is designed to support your performance and recovery.
            </p>
            <BookingButton href={BOOKING_URLS.sportsDeepTissue} label="Book Today" />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Pair this with</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Link href={ROUTES.recoverySuite.recoveryPackages} className="link-inline link-inline-tap">
                → Recovery Packages (Sauna + Compression + Massage)
              </Link>
              <Link href={ROUTES.recoverySuite.infraredSauna} className="link-inline link-inline-tap">
                → Infrared &amp; Hybrid Sauna
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-page mb-4">Related articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={ROUTES.blog.sportsMassageForRunners} className="link-inline link-inline-tap">
                → How Sports Massage Helps Runners Before and After Races
              </Link>
              <Link href={ROUTES.blog.achillesTendinitisRecoveryMassage} className="link-inline link-inline-tap">
                → Achilles Tendinitis – How Sports Massage Helps Recovery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
