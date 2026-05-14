import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL, personSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Press, Media & Interview Enquiries | Archway, North London',
  description: 'Press, media, podcast and interview enquiries for Range and Restore. Carlos Bonvicine, sports massage and Manual Lymphatic Drainage expert in Archway, North London, available for quotes, interviews and on-camera appearances.',
  path: '/press',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Press', path: '/press' },
])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Press, Media and Interview Enquiries — Range and Restore',
  description: 'Press contact page for Range and Restore in Archway, North London. Carlos Bonvicine is available for interviews, quotes, podcasts and on-camera appearances on sports massage, recovery, lymphatic drainage and the local independent scene.',
  url: `${BASE_URL}/press`,
  isPartOf: { '@id': `${BASE_URL}/#business` },
  about: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    url: `${BASE_URL}/about`,
  },
  mainEntity: { '@id': `${BASE_URL}/#business` },
  mentions: [
    { '@type': 'Thing', name: 'Sports massage' },
    { '@type': 'Thing', name: 'Manual Lymphatic Drainage' },
    { '@type': 'Thing', name: 'Soft tissue therapy' },
    { '@type': 'Thing', name: 'Marathon recovery' },
    { '@type': 'Thing', name: 'Infrared sauna recovery' },
    { '@type': 'Thing', name: 'Compression therapy' },
    { '@type': 'Thing', name: 'North London local independents' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do journalists and producers contact Range and Restore for press enquiries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press, podcast and media enquiries should be sent through the Range and Restore contact form at /contact. Include the outlet, the angle, your deadline and any preferred interview format. Carlos Bonvicine responds personally to all press requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What subjects can Carlos Bonvicine speak on as an expert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carlos can comment on sports massage, soft tissue therapy, Manual Lymphatic Drainage (MLD), post-surgery and oncology aftercare, pregnancy MLD, marathon and endurance recovery, sauna and compression recovery, desk-posture pain, and the independent business scene on Junction Road in Archway, North London.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Carlos available for on-camera, podcast and panel appearances?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Carlos is available for filmed interviews at the clinic at 130 Junction Road, podcast recordings (remote or in-studio), expert panels, and broadcast or print commentary on sports massage, recovery and lymphatic health.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Range and Restore based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range and Restore is at 130 Junction Road, Archway, London N19 5LB. The clinic shares the building with Reliable Scan, a private diagnostic ultrasound clinic, and serves clients across Archway, Tufnell Park, Holloway, Islington, Finsbury Park, Highgate, Crouch End and the wider North London area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can journalists visit the clinic for filming or photography?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We host clinic visits, behind-the-scenes filming, photography and interview shoots at 130 Junction Road by appointment. Get in touch via the contact form to arrange access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Range and Restore work with local community groups, charities and clubs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Carlos supports and collaborates with local charities, mental health support services, wellbeing practitioners, yoga and Pilates studios, cycling clubs and marathon and running clubs across Archway and North London, alongside independent cafés, restaurants and bars in the local community.',
      },
    },
  ],
}

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero band ─────────────────────── */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Press &middot; Media &middot; Interviews &middot; Archway, North London</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Press, Media and Interview Enquiries
          </h1>
          <p className="text-lg text-page-muted font-medium mb-4">
            Range and Restore is a specialist sports massage, soft tissue therapy and Manual Lymphatic Drainage clinic at 130 Junction Road in Archway, rooted deeply in the North London community. If you&apos;re writing, filming, recording or researching a story that touches our patch, get in touch.
          </p>
          <p className="text-lg text-page-muted font-medium">
            Carlos Bonvicine, BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified MLD practitioner, is available for interviews, expert quotes, podcasts, panels, on-camera work and clinic visits.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-2 mb-3">Rooted in the Archway community</h2>
          <p>
            Range and Restore is a community-focused clinic, built shoulder to shoulder with the independents around us. Our hub on Junction Road sits inside a healthcare building shared with{' '}
            <Link href="/community/reliable-scan" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Reliable Scan</Link>
            , a private diagnostic ultrasound clinic, a short walk from local cafés like{' '}
            <Link href="/community/the-dynamic-spud" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">The Dynamic Spud</Link>
            , yoga and Pilates studios like{' '}
            <Link href="/community/sol-centre" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Sol Centre</Link>
            , bars, restaurants and the cycling and running scene that defines this part of North London. We work where we live, with the people we live alongside.
          </p>
          <p>
            That isn&apos;t a marketing line. It&apos;s the actual day to day. Local business owners talk about us, recommend us, and collaborate with us. We thrive because the cafés, studios, bars and shops in our community thrive, and we work to send trade, clients and trust back their way.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How Carlos works with the community</h2>
          <p>
            Carlos&apos;s work goes beyond the treatment room. The clinic supports and collaborates with a range of local groups and services across Archway, Tufnell Park, Holloway, Islington, Finsbury Park, Highgate, Crouch End, Kentish Town and the wider North London area.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Local charities.</strong> Honest support for community fundraising, charity events and grassroots causes across N19 and the wider North London area.</li>
            <li><strong className="text-page">Mental health support services.</strong> Soft tissue therapy and recovery work alongside mental health, with referrals in both directions where the work overlaps.</li>
            <li><strong className="text-page">Wellbeing services.</strong> Collaboration with local wellbeing practitioners and clinics around shared clients, education and an honest, joined-up approach to health.</li>
            <li><strong className="text-page">Yoga and Pilates studios.</strong> Carlos works closely with independent yoga and Pilates studios across Archway and North London, supporting their members with recovery and injury work between classes.</li>
            <li><strong className="text-page">Cycling clubs.</strong> Pre and post-ride soft tissue work for local cyclists and clubs, including riders training for sportives and longer routes out of London.</li>
            <li><strong className="text-page">Marathon and running clubs.</strong> Marathon prep, taper, race-day recovery and return-to-running rehab for local runners and running groups across the city.</li>
            <li><strong className="text-page">Independent businesses.</strong> Independent cafés, restaurants, bars and high street businesses we&apos;re proud to send our clients to, and who send theirs to us. See our{' '}
              <Link href="/community" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Archway community page</Link>{' '}
              for the partners we&apos;re publicly working with.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What Carlos can talk about as an expert</h2>
          <p>
            Carlos Bonvicine is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and a certified Manual Lymphatic Drainage practitioner. Subjects he&apos;s available to speak on, in plain language, without jargon:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Sports and deep tissue massage</Link> for everyday people, not just athletes.</li>
            <li><Link href="/services/manual-lymphatic-drainage" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Manual Lymphatic Drainage (MLD)</Link>, including post-surgery, oncology aftercare and pregnancy.</li>
            <li><Link href="/blog/marathon-sports-massage-archway" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Recovery for marathons</Link>, half marathons, and amateur endurance athletes.</li>
            <li><Link href="/recovery-suite/infrared-sauna" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Infrared sauna</Link>,{' '}
              <Link href="/recovery-suite/compression-therapy" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">compression therapy</Link>{' '}
              and contrast recovery for general wellbeing.
            </li>
            <li><Link href="/blog/desk-posture-pain-massage" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Desk-posture pain</Link>, chronic tension and stress-related musculoskeletal issues.</li>
            <li><Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Advanced clinical massage</Link> for sciatica, RSI, tension headaches and complex postural conditions.</li>
            <li>How small independent clinics survive and thrive on a North London high street.</li>
            <li>The local independent scene in Archway, and why community-rooted businesses matter.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What we can provide</h2>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li>Interviews, quotes and written commentary on the topics above.</li>
            <li>Podcast and on-camera appearances, remote or at the clinic.</li>
            <li>Clinic visits and behind-the-scenes access at 130 Junction Road, Archway.</li>
            <li>High-resolution images and clinic photography on request.</li>
            <li>Introductions to the local independents and partners in our community network.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Press contact details</h2>
          <p>
            <strong className="text-page">Contact:</strong> Carlos Bonvicine, Founder &amp; Lead Therapist<br />
            <strong className="text-page">Clinic:</strong> Range and Restore, 130 Junction Road, Archway, London N19 5LB<br />
            <strong className="text-page">Press enquiries:</strong>{' '}
            <Link href="/contact" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">use our contact form</Link>{' '}
            with the outlet, angle and deadline.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Press FAQs</h2>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">How do journalists and producers contact Range and Restore?</h3>
          <p>
            Press, podcast and media enquiries should be sent through the{' '}
            <Link href="/contact" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">Range and Restore contact form</Link>. Include the outlet, the angle, your deadline and any preferred interview format. Carlos responds personally to all press requests.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">What subjects can Carlos speak on as an expert?</h3>
          <p>
            Sports massage, soft tissue therapy, Manual Lymphatic Drainage, post-surgery and oncology aftercare, pregnancy MLD, marathon and endurance recovery, sauna and compression recovery, desk-posture pain, and the independent business scene on Junction Road in Archway.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Is Carlos available for on-camera, podcast and panel appearances?</h3>
          <p>
            Yes. Filmed interviews at the clinic, podcast recordings (remote or in-studio), expert panels, broadcast and print commentary on sports massage, recovery and lymphatic health.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Where is Range and Restore based?</h3>
          <p>
            130 Junction Road, Archway, London N19 5LB. The clinic shares the building with Reliable Scan, a private diagnostic ultrasound clinic, and serves clients across Archway, Tufnell Park, Holloway, Islington, Finsbury Park, Highgate, Crouch End and the wider{' '}
            <Link href="/areas-served" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] font-semibold">North London area</Link>.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Can journalists visit the clinic for filming or photography?</h3>
          <p>
            Yes, by appointment. Clinic visits, behind-the-scenes filming, photography and interview shoots at 130 Junction Road. Get in touch via the contact form to arrange access.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Does Range and Restore work with local community groups, charities and clubs?</h3>
          <p>
            Yes. Carlos supports and collaborates with local charities, mental health support services, wellbeing practitioners, yoga and Pilates studios, cycling clubs and marathon and running clubs across Archway and North London, alongside independent cafés, restaurants and bars in the local community.
          </p>
        </div>

        {/* ── Contact CTA ─────────────────────── */}
        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Press, interview and media enquiries</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Send a message through our contact form with a short note on the outlet, the angle and your deadline. Carlos comes back personally on everything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
          >
            Contact Carlos <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── Related ─────────────────────── */}
        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Our Archway community and local partners
            </Link>
            <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href="/areas-served" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Areas we serve across North London
            </Link>
            <Link href="/clinical-collaboration" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Clinical collaboration at 130 Junction Road
            </Link>
            <Link href="/blog" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Range and Restore Wellness Hub
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
