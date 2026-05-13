import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { ComingSoonBadge } from '@/components/ComingSoonBadge'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Infrared Sauna in Archway London',
  description: 'Two person Vidalux hybrid sauna with full spectrum infrared and traditional heat at Range and Restore, Archway N19. Book a solo session or pair with sports massage.',
  path: '/recovery-suite/infrared-sauna',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
  { name: 'Infrared Sauna', path: '/recovery-suite/infrared-sauna' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Infrared & Traditional Hybrid Sauna',
  description: 'Two person Vidalux hybrid sauna with full spectrum infrared and traditional heat at Range and Restore, Archway N19.',
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
  serviceType: 'Infrared Sauna',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vidalux 2 Person Hybrid Sauna',
  description: 'Two person hybrid sauna combining traditional heat with full spectrum infrared technology.',
  brand: { '@type': 'Brand', name: 'Vidalux' },
  category: 'Infrared Sauna',
}

const faqs = [
  {
    q: 'What is the difference between traditional and infrared heat?',
    a: 'Traditional saunas heat the air around you, which then warms your body. Infrared saunas use light waves to warm your body directly, so the air stays cooler while you still get a deep, sweat-inducing heat. The Vidalux gives you both options in one cabin, so you can switch depending on what you fancy on the day.',
  },
  {
    q: 'How long is a typical session?',
    a: 'Most clients book 30 or 45 minutes. 30 is plenty if it\'s your first time or you\'re fitting it in around training. 45 gives you more time to settle in, especially if you\'re using it as a switch-off rather than a quick recovery session.',
  },
  {
    q: 'Can I bring someone with me?',
    a: 'Yes. The cabin is built for two people. Book the two person option at checkout and you can share the session with a partner, friend or training mate.',
  },
  {
    q: 'What should I wear?',
    a: 'Whatever you\'re comfortable in. Most people use a swimsuit or a towel. Towels are provided.',
  },
  {
    q: 'Is the sauna safe if I have a health condition?',
    a: 'Heat exposure isn\'t suitable for everyone. If you\'re pregnant, have a heart condition, low or high blood pressure, are on medication that affects how you regulate heat, or you\'re unsure for any reason, please check with your GP first and let Carlos know before you book.',
  },
]

export default function InfraredSaunaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Infrared Sauna · Archway London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Infrared &amp; Traditional Hybrid Sauna in Archway, North London
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-page-muted">
            A premium two person Vidalux hybrid cabin offering both traditional sauna heat and full spectrum infrared. Recovery, circulation, proper switch-off time, all in one quiet space.
          </p>
          <div className="mt-6">
            <ComingSoonBadge />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this for?</h2>
            <p className="text-page-muted mb-4">The sauna suits a wide range of people. It&apos;s a good fit if you&apos;re:</p>
            <ul className="space-y-2">
              {[
                'A runner or gym-goer recovering between sessions',
                'Living with chronic muscular tightness or stiffness',
                'A desk worker who needs to properly switch off',
                'Looking to support sleep quality and relaxation',
                'Curious about heat exposure as a regular health practice',
                'Recovering from a hard week, a race, or a long training block',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Choose your session</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { duration: '30 Minutes – Solo', desc: 'A focused recovery session for one. Ideal if you\'re fitting it in around training, work or a busy week.' },
                { duration: '45 Minutes – Solo', desc: 'A longer session for proper switch-off time. Recommended for evenings or rest days when you want to settle in.' },
                { duration: '30 or 45 Min – Two Person', desc: 'Bring a partner, friend or training mate. The cabin comfortably fits two and pricing reflects shared use.' },
              ].map((option) => (
                <div key={option.duration} className="bg-page-sage rounded-xl p-5">
                  <p className="font-bold text-page text-lg mb-2">{option.duration}</p>
                  <p className="text-page-muted text-sm">{option.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-page-muted text-sm mt-3 italic">Pricing announced at launch.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What people use it for</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Muscle recovery between training sessions',
                'Improved circulation',
                'Better perceived sleep quality',
                'Time to relax and switch off properly',
                'A regular wellness habit close to home',
                'Support alongside cold exposure or other recovery practices',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-page-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-page-muted text-sm mt-4">
              Many users report these benefits with regular use, but everyone responds differently. Use the sauna as part of a balanced lifestyle rather than a fix on its own.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Traditional vs full spectrum infrared</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-page-sage rounded-xl p-5">
                <p className="font-bold text-page text-lg mb-2">Traditional sauna</p>
                <p className="text-page-muted text-sm">Heats the air around you to a high temperature. Classic Finnish-style experience, deep sweat, intense heat. Great if you like the feeling of being properly enveloped in heat.</p>
              </div>
              <div className="bg-page-sage rounded-xl p-5">
                <p className="font-bold text-page text-lg mb-2">Full spectrum infrared</p>
                <p className="text-page-muted text-sm">Uses light waves to warm your body directly. Air stays cooler so it&apos;s easier to breathe, but you still get a proper sweat. Suits people who find traditional saunas a bit too intense.</p>
              </div>
            </div>
            <p className="text-page-muted text-sm mt-4">The Vidalux is a hybrid cabin, so you can use either mode or combine both depending on how you want the session to feel.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">What to expect on your first visit</h2>
            <ul className="space-y-2">
              {[
                'Arrive 5 minutes early to settle in',
                'Towels and water are provided',
                'Carlos will run you through the controls and answer any questions',
                'Take your time during the session, you can step out and back in if you need to',
                'Cool down and rehydrate properly before you leave',
                'Optional: combine with a Normatec compression session or a sports massage in the same visit',
              ].map((step) => (
                <li key={step} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Safety and contraindications</h2>
            <p className="text-page-muted mb-3">Heat exposure isn&apos;t suitable for everyone. Please check with your GP first if any of the following apply:</p>
            <ul className="space-y-2">
              {[
                'Pregnancy',
                'Heart conditions or recent cardiac events',
                'Low or high blood pressure',
                'Medication that affects how you regulate heat',
                'Recent surgery or open wounds',
                'Acute illness, fever, or infection',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-page-muted">
                  <span className="w-2 h-2 rounded-full bg-[#2ab4b8] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-page-muted mt-4 italic">If in doubt, ask Carlos before booking. We&apos;d rather have a quick chat first than risk a session that doesn&apos;t suit you.</p>
          </section>

          {/* Pair with */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Pair your sauna session with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/services/sports-deep-tissue-massage" className="bg-card border-2 border-[#1a3d3a] rounded-xl p-5 card-lift block">
                <p className="font-bold text-page mb-1">Sports &amp; Deep Tissue Massage</p>
                <p className="text-page-muted text-sm">Add hands-on work after your sauna. Heat first, then targeted soft tissue therapy.</p>
              </Link>
              <Link href="/recovery-suite/recovery-packages" className="bg-card border-2 border-[#1a3d3a] rounded-xl p-5 card-lift block">
                <p className="font-bold text-page mb-1">Recovery Packages</p>
                <p className="text-page-muted text-sm">Save when you combine sauna, compression and massage as one visit.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Common questions</h2>
            <FaqAccordion items={faqs} />
          </section>

          {/* Coming Soon CTA */}
          <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
            <h2 className="text-2xl font-black text-[#1a2330] mb-4">Sauna sessions opening soon at Range and Restore</h2>
            <p className="text-[#1a3d3a] font-semibold mb-6">
              The new Recovery Suite is being built right now. Sauna, compression and full recovery sessions launching soon in Archway, North London.
            </p>
            <ComingSoonBadge />
          </section>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Normatec Compression Therapy
              </Link>
              <Link href="/recovery-suite/recovery-packages" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
                → Recovery Packages and Combos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
