import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Normatec Compression Therapy in Archway London',
  description: 'Hyperice Normatec 3 full body compression at Range and Restore, Archway N19, included as part of the private Recovery Suite experience.',
  path: '/recovery-suite/compression-therapy',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
  { name: 'Compression Therapy', path: '/recovery-suite/compression-therapy' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Normatec Full Body Compression Therapy',
  description: 'Hyperice Normatec 3 Full Body pneumatic compression for the legs, hips and arms at Range and Restore, Archway N19.',
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
  serviceType: 'Compression Therapy',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Hyperice Normatec 3 Full Body',
  description: 'Pneumatic compression recovery system with leg, hip and arm attachments for circulation and recovery support.',
  brand: { '@type': 'Brand', name: 'Hyperice' },
  category: 'Pneumatic Compression Therapy',
}

const faqs = [
  {
    q: 'What does compression therapy actually feel like?',
    a: 'You sit or lie back, the boots and attachments are fitted, and the system inflates in waves from your feet upwards. Most people describe it as a firm, rhythmic squeeze that feels surprisingly relaxing. Pressure is fully adjustable, so if it feels too much we dial it down.',
  },
  {
    q: 'Is this the same as lymphatic drainage massage?',
    a: 'No. Pneumatic compression supports circulation and recovery, but it isn\'t the same as Manual Lymphatic Drainage. MLD is a hands-on technique used for post-surgery recovery, lymphoedema and clinical cases. If you need MLD, that\'s a separate service with our certified MLD therapist. The Normatec is a recovery tool, not a clinical lymphatic treatment.',
  },
  {
    q: 'How do I book time on the Normatec?',
    a: 'The Normatec is part of the private Recovery Suite experience. Book a private Recovery Suite session and you have the suite, including the Infrared Hybrid Sauna and the Normatec system, to yourself. You can also book the Sports Massage + Normatec Compression package (90 minutes, £110) to combine a full sports massage with compression in one visit. Your therapist will help you fit compression into your session depending on what you\'re recovering from.',
  },
  {
    q: 'Do I need to undress?',
    a: 'No. You can wear loose, comfortable kit (leggings, joggers, shorts and a t-shirt all work fine). The attachments go over your clothes.',
  },
  {
    q: 'Is it safe for everyone?',
    a: 'Pneumatic compression isn\'t suitable in some circumstances, including DVT or a history of blood clots, recent surgery, vascular conditions, pregnancy, or open wounds in the area being treated. If anything on that list applies, please check with your GP first and let your therapist know before you book.',
  },
]

export default function CompressionTherapyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Compression Therapy · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Normatec Full Body Compression Therapy in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            Hyperice Normatec 3 Full Body. Pneumatic compression for the legs, hips and arms. Built for recovery between training sessions, after races, or after a long week on your feet.
          </p>
          <div className="mt-6">
            <a
              href={BOOKING_URLS.recoverySuite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Recovery Suite Session
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this for?</h2>
            <p className="text-page-muted mb-4">Compression therapy is a strong fit if you&apos;re:</p>
            <ul className="space-y-2">
              {[
                'A runner recovering from a long run, race or training block',
                'A gym-goer the day after heavy leg work',
                'On your feet all day for work and looking for proper recovery time',
                'Recovering from minor injuries (with approval from your therapist)',
                'Looking to reduce that heavy, fatigued feeling in your legs',
                'Pairing recovery with regular sports massage',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">How to book it</h2>
            <p className="text-page-muted mb-4">
              The Normatec features as part of the private Recovery Suite experience rather than as a separately booked session. Book a Recovery Suite session and the suite, including the sauna and the Normatec system, is yours for the visit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { duration: 'Private Recovery Suite Session', desc: '45 minutes for £19 or 60 minutes for £29. Private use of the suite, including the Infrared Hybrid Sauna and the Normatec recovery system.' },
                { duration: 'Sports Massage + Normatec Compression', desc: '90 minutes for £110. A full 60-minute sports massage followed by 30 minutes on the Normatec system.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-page-muted text-sm mt-3 italic">Prices are also shown on the booking page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What people use it for</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Improved circulation in the legs and arms',
                'Quicker perceived recovery between sessions',
                'Reduced delayed-onset muscle soreness (DOMS)',
                'A break from being on your feet, with proper time to relax',
                'Support alongside regular sports massage',
                'A simple recovery routine you can fit into your week',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#0f767a] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">How it works</h2>
            <p className="text-page-muted mb-3">
              The Normatec system uses pneumatic compression. Air pumps into a series of chambers built into the boots and attachments, which inflate in a controlled wave from your feet up towards your hips, or from your hands up towards your shoulders.
            </p>
            <p className="text-page-muted mb-3">
              That rhythmic squeeze-and-release pattern supports blood flow and helps move fluid through the limbs, which is the bit that makes legs feel lighter afterwards. Pressure levels are adjustable, so you can run it firmer if you want a more intense session or lighter if you prefer a gentler recovery.
            </p>
            <p className="text-page-muted">
              It&apos;s a recovery tool. Useful, well-tested, and a proper addition to a recovery routine. It doesn&apos;t replace hands-on treatment when you actually need it, but it works well alongside.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect on your first visit</h2>
            <ul className="space-y-2">
              {[
                'Wear loose, comfortable kit. Leggings, joggers, shorts and a t-shirt all work',
                'Your therapist fits the attachments and walks you through the controls',
                'Sit back or lie down, the system runs through its programme',
                'You can adjust pressure or pause at any point',
                'Most people find it genuinely relaxing, plenty of clients close their eyes for the session',
                'Optional: pair your Recovery Suite session with a sports massage in the same visit',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#0f767a] flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Safety and contraindications</h2>
            <p className="text-page-muted mb-3">Compression therapy isn&apos;t suitable in some circumstances. Please check with your GP first if any of the following apply:</p>
            <ul className="space-y-2">
              {[
                'DVT or a history of blood clots',
                'Recent surgery in the area being treated',
                'Vascular conditions',
                'Pregnancy',
                'Open wounds, skin infections or active inflammation in the area',
                'Severe heart conditions or recent cardiac events',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#0f767a] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-page-muted mt-4 italic">
              Note: Normatec compression isn&apos;t the same as Manual Lymphatic Drainage. If you&apos;re recovering from surgery or managing lymphoedema, see our
              {' '}<Link href="/services/manual-lymphatic-drainage" className="text-[#0f767a] underline">MLD page</Link>{' '}
              for the right service.
            </p>
          </section>

          {/* Pair with */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Pair your recovery session with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/sports-deep-tissue-massage" className="bg-card border-2 border-[#1a3d3a] rounded-xl p-5 card-lift block">
                <p className="font-bold text-page mb-1">Sports &amp; Deep Tissue Massage</p>
                <p className="text-page-muted text-sm">Hands-on work to release tighter areas, then recovery time in the suite. A solid combo for runners.</p>
              </Link>
              <Link href="/recovery-suite/recovery-packages" className="bg-card border-2 border-[#1a3d3a] rounded-xl p-5 card-lift block">
                <p className="font-bold text-page mb-1">Recovery Packages</p>
                <p className="text-page-muted text-sm">Save when you combine sports massage and Recovery Suite time as one visit. Packages from £85.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          {/* Book Now CTA */}
          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Normatec recovery at Range and Restore</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              The Recovery Suite is open in Archway, North London. Private Recovery Suite sessions from £19, and a Sports Massage + Normatec Compression package for £110. Available to book now.
            </p>
            <a
              href={BOOKING_URLS.recoverySuite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1a2330] text-white font-black uppercase tracking-widest text-sm hover:bg-[#122a28] transition-colors"
            >
              Book Recovery Suite Session
            </a>
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recovery-suite/infrared-sauna" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Infrared Hybrid Sauna
              </Link>
              <Link href="/services/manual-lymphatic-drainage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
                → Manual Lymphatic Drainage (MLD)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
