import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, personSchema, buildBreadcrumbs } from '@/lib/seo'
import { RELIABLE_SCAN_URL } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Carlos Bonvicine | Sports Massage Therapist Archway',
  description: 'Range and Restore is led by Carlos Bonvicine, a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified MLD practitioner in Archway, North London. Five-star rated, assessment-led, and built around your results.',
  path: '/about',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'About', path: '/about' }])

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">BTEC Level 5 Sports Massage &amp; Soft Tissue Remedial Therapist in Archway – Carlos Bonvicine</h1>
          <p className="mt-4 text-xl text-page-muted">Sports massage and soft tissue remedial therapy in Archway, rated five stars by clients across Islington, Tufnell Park, Finsbury Park and North London.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Rated 5 Stars on Google
            </span>
            <span className="inline-flex items-center gap-1.5 bg-badge-teal text-page font-semibold px-3 py-1.5 rounded-full border border-[#2ab4b8]/30">BTEC Level 5 Qualified</span>
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">Certified MLD Practitioner</span>
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">Archway, N19</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Therapist hero image */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no"
                alt="Carlos Bonvicine, sports massage therapist at Range and Restore, Archway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-page mb-2">Carlos Bonvicine</h2>
            <p className="text-[#2ab4b8] font-semibold mb-1">BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist</p>
            <p className="text-page-muted font-medium mb-6 text-sm">Certified MLD Practitioner · Cupping Therapy · Fully Insured</p>
            <div className="space-y-4 text-page-muted text-lg">
              <p>
                Range and Restore is a specialist clinic in Archway led by Carlos Bonvicine — a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist and certified Manual Lymphatic Drainage (MLD) practitioner with a five-star reputation built on genuine results.
              </p>
              <p>
                Carlos works with clients dealing with chronic pain, acute injury, post-surgery recovery, stress, and everything in between. Every session is shaped around you — not a generic treatment protocol. He starts with a full assessment of your posture, movement, and history before any hands-on work begins.
              </p>
              <p>
                His approach balances the clinical and the performance-focused. Whether you need deep structural soft tissue work, sports recovery therapy, lymphatic support, or cupping treatment, Carlos selects the right techniques for where you are right now — and explains everything along the way.
              </p>
              <p>
                Range and Restore is based within a professional healthcare setting at 130 Junction Road, Archway, alongside{' '}
                <a
                  href={RELIABLE_SCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold"
                >
                  Reliable Scan
                </a>
                {' '}— a private diagnostic ultrasound clinic. This means imaging and hands-on therapy can be coordinated in one place when needed.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist',
                'Fully Insured',
                'Certified Full Body Manual Lymphatic Drainage (MLD) Practitioner',
                'Certified Cupping Therapy Practitioner',
              ].map((qual) => (
                <div key={qual} className="flex items-start gap-2 text-page">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2ab4b8' }} aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm leading-snug">{qual}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookingButton label="Book Your Session with Carlos" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-page-sage rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-page mb-4">The Range and Restore Approach</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Full Assessment First', desc: 'Every session begins with a posture and movement assessment to identify the root cause of your symptoms.' },
                  { title: 'Tailored Treatment', desc: 'No two sessions are the same. Techniques are selected specifically for your needs and stage of recovery.' },
                  { title: 'Clear Communication', desc: 'Pressure and techniques are adjusted throughout the session based on your feedback and comfort.' },
                  { title: 'Aftercare Advice', desc: 'You leave with practical advice and, where needed, movement and exercise recommendations.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-[#2ab4b8] font-bold text-xl leading-none mt-0.5">→</span>
                    <div>
                      <p className="font-semibold text-page">{item.title}</p>
                      <p className="text-page-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reliable Scan — compact card */}
            <div className="bg-[#F2EDE4] text-[#1a2330] rounded-2xl p-8 border border-[#1a3d3a]/10">
              <h3 className="text-xl font-bold mb-2 text-[#1a3d3a]">Clinical Collaboration</h3>
              <p className="text-[#1a3d3a]/80 mb-4 text-sm font-medium">
                Range and Restore is based at 130 Junction Road, Archway, within the same building as{' '}
                <a
                  href={RELIABLE_SCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a7a3a] underline decoration-[#2a7a3a]/40 hover:text-[#1a3d3a] hover:decoration-[#1a3d3a] transition-colors font-bold"
                >
                  Reliable Scan
                </a>
                {' '}— a private diagnostic ultrasound clinic led by GMC-registered doctors.
              </p>
              <Link
                href="/clinical-collaboration"
                className="inline-flex items-center gap-2 text-[#2a7a3a] font-bold hover:text-[#1a3d3a] transition-colors min-h-[44px]"
              >
                Learn about clinical collaboration →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
