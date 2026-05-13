import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaqAccordion } from '@/components/FaqAccordion'
import { RecoverySuiteCard } from '@/components/RecoverySuiteCard'
import { ComingSoonBadge } from '@/components/ComingSoonBadge'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Suite – Infrared Sauna & Compression Therapy in Archway London',
  description: 'A new recovery and wellness suite at Range and Restore, Archway. Hybrid infrared sauna and Normatec full body compression therapy. Book solo sessions or pair with sports massage.',
  path: '/recovery-suite',
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
])

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Recovery Suite in Archway, North London',
  description: 'Infrared sauna, Normatec compression therapy and recovery packages at Range and Restore, Archway, North London.',
  url: 'https://rangeandrestore.co.uk/recovery-suite',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Infrared Sauna', url: 'https://rangeandrestore.co.uk/recovery-suite/infrared-sauna' },
      { '@type': 'ListItem', position: 2, name: 'Compression Therapy', url: 'https://rangeandrestore.co.uk/recovery-suite/compression-therapy' },
      { '@type': 'ListItem', position: 3, name: 'Recovery Packages', url: 'https://rangeandrestore.co.uk/recovery-suite/recovery-packages' },
    ],
  },
}

const faqs = [
  {
    q: 'Do I need to be an existing client to use the Recovery Suite?',
    a: 'No. The sauna and compression therapy are open to anyone. You don\'t need to have had a sports massage with Carlos to book a recovery session.',
  },
  {
    q: 'Can I bring a guest into the sauna?',
    a: 'Yes. The sauna fits two people comfortably, so you\'re welcome to bring a partner, training mate or friend along. There\'s a separate two person booking option.',
  },
  {
    q: 'How do I book a combined session like sauna and massage together?',
    a: 'Recovery packages are bookable as a single appointment, so you don\'t need to chain bookings together. Pick the package that suits and Carlos will run the full session in one visit.',
  },
  {
    q: 'What should I bring with me?',
    a: 'Just yourself. Towels, water and everything else you need is provided. Wear or bring loose, comfortable kit if you\'re combining your session with massage.',
  },
]

export default function RecoverySuitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Hero */}
      <div className="relative bg-[#1a3d3a] py-16 lg:py-24 overflow-hidden">
        {/* TODO: replace with real photo of the redesigned recovery room */}
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=75"
          alt="Premium recovery and wellness suite with warm lighting and natural materials"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#7dd94a] font-semibold uppercase tracking-widest text-sm mb-3">New at Range and Restore &middot; Coming Soon</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Recovery Suite in Archway, North London</h1>
          <p className="mt-4 text-xl text-[#d4ecea]/90 max-w-2xl">
            A dedicated space for recovery and wellness, designed around the same assessment-led care you already trust at the clinic.
          </p>
          <p className="mt-3 text-[#d4ecea]/70 max-w-2xl">
            Hybrid infrared sauna, Normatec full body compression, and a full range of single recovery sessions and recovery packages with sports massage. Launching soon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <ComingSoonBadge />
            <Link href="#whats-in-the-suite" className="btn btn-outline-white">Explore the suite</Link>
          </div>
        </div>
      </div>

      {/* The story */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow block mb-2">The Story</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-5">
            More than a sports massage clinic
          </h2>
          <p className="text-page-muted font-medium mb-4">
            The treatment room at 130 Junction Road has been redesigned into a premium recovery and wellness space. Warm lighting, natural materials, plants and considered details, built around how you actually want to feel when you walk in.
          </p>
          <p className="text-page-muted font-medium">
            Sitting alongside the hands-on sports and soft tissue work Carlos already offers, the new Recovery Suite brings two pieces of premium recovery kit into one place. A two person hybrid infrared sauna for heat-based recovery, and a Normatec 3 Full Body compression system for the legs, hips and arms. Use them on their own, or pair them with massage for a complete session.
          </p>
        </div>
      </div>

      {/* What's in the suite */}
      <div id="whats-in-the-suite" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-10">
          <span className="eyebrow block mb-2">What&apos;s in the Suite</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
            Three ways to recover
          </h2>
          <p className="text-page-muted font-medium mt-3 max-w-2xl mx-auto">
            Use a single modality on its own or build a combined recovery session that takes you from heat to compression to hands-on work in one visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RecoverySuiteCard
            title="Infrared Sauna"
            summary="Hybrid two person Vidalux sauna with traditional and full spectrum infrared heat. Solo or shared sessions to support muscle recovery, circulation and proper time to switch off."
            href="/recovery-suite/infrared-sauna"
            // TODO: replace with real photo of the sauna
            image="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=1200&q=75"
            imageAlt="Vidalux 2 person hybrid infrared sauna at Range and Restore Archway"
          />
          <RecoverySuiteCard
            title="Compression Therapy"
            summary="Hyperice Normatec 3 Full Body. Pneumatic compression for the legs, hips and arms. Ideal after a long run, a leg session or a long week on your feet."
            href="/recovery-suite/compression-therapy"
            // TODO: replace with real photo of the Normatec setup
            image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=75"
            imageAlt="Normatec 3 full body compression therapy setup at Range and Restore Archway"
          />
          <RecoverySuiteCard
            title="Recovery Sessions & Packages"
            summary="Standalone sauna, compression or combined recovery sessions, plus full recovery packages with sports massage. Pick the level that suits you."
            href="/recovery-suite/recovery-packages"
            // TODO: replace with real photo or composite shot
            image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=75"
            imageAlt="Recovery sessions and packages combining sauna compression and sports massage in Archway"
          />
        </div>
      </div>

      {/* How to use it */}
      <div className="bg-page py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="eyebrow block mb-2">How To Use It</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
              Three simple ways in
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Standalone recovery', desc: 'Sauna, compression, or both together. Quick to fit in around training or a busy week, no massage needed.' },
              { step: '02', title: 'Recovery with massage', desc: 'Add sports massage to your sauna or compression session. The full sequence in one visit.' },
              { step: '03', title: 'Become a member', desc: 'Recovery memberships for athletes and regulars. Coming soon.' },
            ].map((item) => (
              <div key={item.step} className="bg-page-sage rounded-2xl p-6">
                <p className="text-[#2ab4b8] font-black text-sm tracking-widest mb-3">{item.step}</p>
                <h3 className="font-bold text-page text-lg mb-2">{item.title}</h3>
                <p className="text-page-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="text-2xl font-bold text-page mb-4">Who is the Recovery Suite for?</h2>
        <p className="text-page-muted mb-4">The suite is built for anyone who wants a proper recovery routine close to home. That includes:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Runners and gym-goers between training sessions',
            'Desk workers managing tightness and stiffness',
            'Anyone recovering from a race, event or hard training block',
            'Clients post-massage who want to extend the benefits',
            'Post-surgery and MLD clients (please check with Carlos first)',
            'Anyone wanting a wellness habit close to home',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-page-muted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#2ab4b8] flex-shrink-0 mt-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-6">FAQs</h2>
          <FaqAccordion items={faqs} />
        </div>
      </div>

      {/* Coming Soon CTA */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <section className="bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">The Recovery Suite is opening soon</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            A new dedicated recovery and wellness space is being built right now at Range and Restore in Archway, North London. Sauna, compression and full recovery sessions launching soon.
          </p>
          <ComingSoonBadge />
        </section>
      </div>
    </>
  )
}
