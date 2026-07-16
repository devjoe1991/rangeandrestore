import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FaqAccordion } from '@/components/FaqAccordion'
import { SaunaBenefits } from '@/components/sauna-room/SaunaBenefits'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

// WebGL has no server rendering path, so the scene mounts on the client only.
const SaunaRoomScene = dynamic(() => import('@/components/sauna-room/SaunaRoomScene'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-sm text-white/70">
      Loading the room…
    </div>
  ),
})

export const metadata: Metadata = buildMetadata({
  title: 'Virtual Sauna Room Tour in Archway | An Immersive Wellbeing Experience',
  description:
    'Step inside our private infrared sauna room in Archway, North London before you book. Walk around the members-only two person suite in an immersive 3D tour — lights, mood and complete privacy.',
  path: '/sauna-room',
  image: `${BASE_URL}/sauna-room/hero-portrait.jpg`,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Recovery Suite', path: '/recovery-suite' },
  { name: 'Virtual Sauna Room Tour', path: '/sauna-room' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Virtual Infrared Sauna Room Tour',
  description:
    'An immersive 3D tour of the private infrared sauna suite at Range and Restore, Archway. Explore the members-only two person room, its lighting and its privacy before booking a session.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Range and Restore Sports Massage',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '130 Junction Road',
      addressLocality: 'Archway',
      addressRegion: 'London',
      postalCode: 'N19 5LB',
      addressCountry: 'GB',
    },
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
  url: `${BASE_URL}/sauna-room`,
}

/**
 * The tour itself is the primary content of this page, so it is described as a
 * 3D model rather than leaving search engines to infer meaning from a canvas.
 */
const modelSchema = {
  '@context': 'https://schema.org',
  '@type': '3DModel',
  name: 'Range and Restore Infrared Sauna Room',
  description:
    'An interactive, to-scale 3D model of the private infrared sauna suite at Range and Restore in Archway, North London.',
  encodingFormat: 'model/gltf-binary',
  contentUrl: `${BASE_URL}/sauna-room/sauna-room.glb`,
  thumbnailUrl: `${BASE_URL}/sauna-room/hero-portrait.jpg`,
  isAccessibleForFree: true,
}

const faqs = [
  {
    q: 'Can I look around the sauna room before I book?',
    a: 'Yes — that is exactly what this page is for. The tour is a to-scale 3D model of the real room in Archway, so you can walk around it, flick the lights on and off, and see the space for yourself before you reserve a session.',
  },
  {
    q: 'Is the sauna room private?',
    a: 'Completely. The suite sits at the quiet back of the clinic, enclosed and shut off from the street. It is booked one session at a time, so once the door closes the room is yours — no sharing with strangers and no queue.',
  },
  {
    q: 'How many people can use the sauna at once?',
    a: 'It is a two person cabin. Book it on your own and the whole room is yours, or bring one other person along — it makes an easy hour for couples who want a break away together.',
  },
  {
    q: 'Can I play my own music in the sauna?',
    a: 'Yes. The cabin has Bluetooth audio, so you can pair your phone and bring your own soundtrack. Between that, the lighting and the heat setting, you can set the tone however you like.',
  },
  {
    q: 'Do I need to be a member to book the sauna?',
    a: 'Sessions run on availability first and there is only one room, so members get first pick of the diary. Get in touch or book online and we will find you an hour that works.',
  },
  {
    q: 'Does the virtual tour work on a phone?',
    a: 'It does. On a phone you hold the left side of the screen to walk, drag to look around, and pinch to zoom. On a desktop or laptop it is W, A, S, D to move with the mouse to look. There is also a full screen button on both.',
  },
]

const PROMISES = [
  {
    title: 'Completely private',
    body: 'The suite is tucked away at the quiet back of the clinic, enclosed and shut off from the street. Once the door closes, the room is yours — no sharing with strangers, no queue, no audience.',
  },
  {
    title: 'Made for two',
    body: 'A two person cabin. Come alone and have the whole room to yourself, or bring someone with you. It makes an easy hour for couples who want a break away together.',
  },
  {
    title: 'Away from the hustle',
    body: 'Archway carries on outside. In here it is warm timber, low light, your own music and quiet. An hour that belongs to nobody else, a few minutes from the Tube.',
  },
  {
    title: 'Book with confidence',
    body: 'An award winning clinic with qualified therapists, and a sauna you have already walked around before you arrive. You know exactly what you are booking.',
  },
]

export default function SaunaRoomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(modelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* FaqAccordion emits its own FAQPage schema, so none is added here. */}

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="mb-6 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f767a]">
            An immersive experience in wellbeing
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Virtual sauna room tour in Archway
          </h1>
          <p className="mt-3 text-neutral-600">
            Our members-only infrared sauna suite, rebuilt to scale so you can walk around it before
            you ever book. Explore the room, flick the lights, and see the space for yourself — then
            come and feel it.
          </p>
        </header>

        <div className="h-[70vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
          <SaunaRoomScene />
        </div>

        <p className="mt-4 text-sm text-neutral-500">
          Works on desktop with W, A, S, D and your mouse, and on a phone with touch controls. The
          room is modelled to scale from the real suite, and we are still adding detail.
        </p>

        {/* The pitch, as scannable points. */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Set the tone, however you like it</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Lights off or lights on, complete privacy, and Bluetooth music control so you can enjoy
            the full experience. It is your hour — run it your way.
          </p>
          <div className="mt-6">
            <SaunaBenefits />
          </div>
        </section>

        {/* Why it is worth a session. */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Why members keep coming back</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {PROMISES.map((promise) => (
              <div
                key={promise.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-neutral-900">{promise.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{promise.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Close on the ask. */}
        <section className="mt-14 rounded-3xl bg-[#1a3d3a] px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Sessions run on availability first
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/75">
            There is one room, and one booking at a time — that is what keeps it private. Members get
            first pick of the diary, so reserve the hour you want before it goes.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={BOOKING_URLS.infraredHybridSauna}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1a3d3a] transition hover:bg-white/90"
            >
              Become a member
            </a>
            <Link
              href="/recovery-suite/infrared-sauna"
              className="rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About the infrared sauna
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Questions about the sauna room</h2>
          <div className="mt-5">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/recovery-suite"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
          >
            Explore the recovery suite
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
          >
            Ask us a question
          </Link>
        </div>
      </main>
    </>
  )
}
