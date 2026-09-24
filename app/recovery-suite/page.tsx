import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SAUNA_PHOTOS } from '@/components/SaunaPhotos'
import { FaqAccordion } from '@/components/FaqAccordion'
import { RecoverySuiteCard } from '@/components/RecoverySuiteCard'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Recovery Suite – Infrared Hybrid Sauna & Compression Therapy in Archway London',
  description: 'Recovery and wellness suite at Range and Restore, Archway. Infrared Hybrid Sauna and Normatec compression. Private sauna sessions from £19, recovery packages from £85, plus Restore+ memberships.',
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
      { '@type': 'ListItem', position: 1, name: 'Infrared Hybrid Sauna', url: 'https://rangeandrestore.co.uk/recovery-suite/infrared-sauna' },
      { '@type': 'ListItem', position: 2, name: 'Compression Therapy', url: 'https://rangeandrestore.co.uk/recovery-suite/compression-therapy' },
      { '@type': 'ListItem', position: 3, name: 'Recovery Packages', url: 'https://rangeandrestore.co.uk/recovery-suite/recovery-packages' },
    ],
  },
}

const faqs = [
  {
    q: 'Do I need to be an existing client to use the Recovery Suite?',
    a: 'No. The sauna is open to anyone, and you don\'t need to have had a sports massage with us to book a session. Normatec compression is different: it is only available as part of our 90-minute Sports Massage + Normatec package (£110).',
  },
  {
    q: 'Can I bring a guest into the sauna?',
    a: 'Yes. The sauna fits two people comfortably and every session is private, so you\'re welcome to bring a partner, training mate or friend along. The price is per session, not per person. Just mention it when you book.',
  },
  {
    q: 'How do I book a sauna and a massage together?',
    a: 'Book your massage, then a sauna session straight after it. If you\'d like help lining the two up, call or message us and we\'ll arrange it. After any massage you can also ask on the day for a 45-minute sauna for £10 (usually £19). The Sports Massage + Normatec package (£110) is booked online as one appointment.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />

      {/* Hero */}
      <div className="relative bg-brand-green py-16 lg:py-24 overflow-hidden">
        <Image
          src={SAUNA_PHOTOS.front.src}
          alt={SAUNA_PHOTOS.front.alt}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Private Sauna &middot; Normatec Compression &middot; Archway</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Recovery Suite in Archway, North London</h1>
          <p className="mt-4 text-xl text-teal-tint/90 max-w-2xl">
            A dedicated space for recovery and wellness, designed around the same assessment-led care you already trust at the clinic.
          </p>
          <p className="mt-3 text-teal-tint/70 max-w-2xl">
            Private Infrared &amp; Traditional Hybrid Sauna sessions from £19 (the whole room for you, up to two people), sports massage + sauna packages from £85, Normatec compression as part of our £110 sports massage package, and Restore+ monthly memberships.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href={BOOKING_URLS.recoverySuite} target="_blank" rel="noopener noreferrer" className="btn btn-white">Book a Sauna Session</a>
            <Link href="#whats-in-the-suite" className="btn btn-outline-white">Explore the suite</Link>
          </div>
        </div>
      </div>

      {/* About the suite */}
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="eyebrow block mb-2">About the Suite</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-5">
            More than a sports massage clinic
          </h2>
          <p className="text-page-muted font-medium mb-4">
            The private sauna room sits at the quiet back of the clinic at 130 Junction Road, with its own shower. It is yours alone for the length of your session.
          </p>
          <p className="text-page-muted font-medium">
            Alongside the hands-on sports and soft tissue work our team offers, the Recovery Suite adds two pieces of recovery kit. A two person hybrid infrared sauna, which you can book on its own or after a massage. And a Normatec 3 Full Body compression system for the legs, hips and arms, used as the last 30 minutes of our 90-minute Sports Massage + Normatec package.
          </p>
        </div>
      </div>

      {/* What's in the suite */}
      <div id="whats-in-the-suite" className="container-page container-full">
        <div className="text-center mb-10">
          <span className="eyebrow block mb-2">What&apos;s in the Suite</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
            Three ways to recover
          </h2>
          <p className="text-page-muted font-medium mt-3 max-w-2xl mx-auto">
            Book the sauna on its own, or pair a sports massage with the sauna or with Normatec compression.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RecoverySuiteCard
            title="Infrared Hybrid Sauna"
            summary="Hybrid two person Vidalux sauna with traditional and full spectrum infrared heat. Private sessions for one or two people, with time to switch off. From £19 a session."
            href={ROUTES.recoverySuite.infraredSauna}
            image={SAUNA_PHOTOS.front.src}
            imageAlt={SAUNA_PHOTOS.front.alt}
          />
          <RecoverySuiteCard
            title="Compression Therapy"
            summary="Hyperice Normatec 3 Full Body pneumatic compression for the legs, hips and arms. Available as part of our 90-minute Sports Massage + Normatec package, £110."
            href={ROUTES.recoverySuite.compressionTherapy}
            image="/recovery-suite/normatec-compression-therapy-archway.jpg"
            imageAlt="Hyperice Normatec 3 Full Body compression boots and attachments laid out on a treatment table at Range and Restore, Archway, North London"
          />
          <RecoverySuiteCard
            title="Recovery Sessions & Packages"
            summary="Private Infrared Hybrid Sauna sessions from £19, sports massage + sauna packages from £85, the £110 Sports Massage + Normatec package, plus Restore+ monthly memberships. Pick the level that suits you."
            href={ROUTES.recoverySuite.recoveryPackages}
            image={SAUNA_PHOTOS.suite.src}
            imageAlt={SAUNA_PHOTOS.suite.alt}
          />
        </div>
      </div>

      {/* How to use it */}
      <div className="bg-page section-md">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="eyebrow block mb-2">How To Use It</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight">
              Three simple ways in
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Standalone recovery', desc: 'A private Infrared & Traditional Hybrid Sauna session from £19, for one or two people. Quick to fit in around training or a busy week, no massage needed.' },
              { step: '02', title: 'Recovery with massage', desc: 'Sports massage followed by the sauna (from £85), or by Normatec compression (£110). Or ask on the day for a 45-minute sauna for £10 after any massage.' },
              { step: '03', title: 'Become a member', desc: 'Restore+ sauna and Signature Treatment memberships, from £49 a month. Set up personally — call or email to join.' },
            ].map((item) => (
              <div key={item.step} className="bg-page-sage rounded-2xl p-6">
                <p className="text-brand-teal font-black text-sm tracking-widest mb-3">{item.step}</p>
                <h3 className="font-bold text-page text-lg mb-2">{item.title}</h3>
                <p className="text-page-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 section-md">
        <h2 className="text-2xl font-bold text-page mb-4">Who is the Recovery Suite for?</h2>
        <p className="text-page-muted mb-4">The suite is built for anyone who wants a proper recovery routine close to home. That includes:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Runners and gym-goers between training sessions',
            'Desk workers managing tightness and stiffness',
            'Anyone recovering from a race, event or hard training block',
            'Clients post-massage who want to extend the benefits',
            'Post-surgery and MLD clients (please check with your therapist first)',
            'Anyone wanting a wellness habit close to home',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-page-muted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-6">FAQs</h2>
          <FaqAccordion items={faqs} />
        </div>
      </div>

      {/* Book Now CTA */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 section-md">
        <section className="bg-accent rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-ink mb-4">Book the Recovery Suite</h2>
          <p className="text-brand-green font-semibold mb-6">
            Private sauna sessions, sports massage + sauna packages and the Sports Massage + Normatec package at Range and Restore in Archway, North London.
          </p>
          <a
            href={BOOKING_URLS.recoverySuite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-ink text-white font-black uppercase tracking-widest text-sm hover:bg-brand-green-dark transition-colors"
          >
            Book a Sauna Session
          </a>
        </section>
      </div>
    </>
  )
}
