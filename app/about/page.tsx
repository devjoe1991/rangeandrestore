import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About Carlos Bonvicine',
  description: 'Meet Carlos Bonvicine, expert sports massage therapist and certified MLD practitioner based in Archway, North London. Assessment-led treatment for real results.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311]">About Range and Restore</h1>
          <p className="mt-4 text-xl text-[#334311]/80">Expert soft tissue therapy in Archway, North London</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Therapist hero image */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[4/3] relative w-full">
              <Image
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1000&q=80"
                alt="Sports massage therapist performing soft tissue treatment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-[#334311] mb-6">Carlos Bonvicine</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Range and Restore Sports Massage is led by Carlos Bonvicine, a professional sports massage therapist and certified Manual Lymphatic Drainage (MLD) practitioner based in Archway, North London.
              </p>
              <p>
                Carlos takes an assessment-led approach to every treatment. Before hands-on work begins, he assesses your posture, movement patterns, and specific concerns to ensure the session is fully tailored to your needs and goals.
              </p>
              <p>
                Whether you&apos;re an athlete managing injury, an office worker dealing with postural pain, or someone simply looking to relax and recover, Carlos adapts his approach to deliver the most effective treatment for you.
              </p>
              <p>
                Range and Restore operates within a professional healthcare setting alongside Reliable Scan, a private diagnostic ultrasound clinic in Archway. This allows for coordinated assessment and treatment planning when imaging is required.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Sports Massage Therapist',
                'Certified MLD Practitioner',
                'Soft Tissue Remedial Therapy',
                'Assessment-Led Approach',
                'Sports Injury Rehabilitation',
                'Post-Surgery Recovery Support',
              ].map((qual) => (
                <div key={qual} className="flex items-center gap-2 text-[#334311]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#618020] flex-shrink-0" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{qual}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookingButton label="Book Your Session with Carlos" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#c6e28a] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#334311] mb-4">The Range and Restore Approach</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Full Assessment First', desc: 'Every session begins with a posture and movement assessment to identify the root cause of your symptoms.' },
                  { title: 'Tailored Treatment', desc: 'No two sessions are the same. Techniques are selected specifically for your needs and stage of recovery.' },
                  { title: 'Clear Communication', desc: 'Pressure and techniques are adjusted throughout the session based on your feedback and comfort.' },
                  { title: 'Aftercare Advice', desc: 'You leave with practical advice and, where needed, movement and exercise recommendations.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-[#618020] font-bold text-xl leading-none mt-0.5">→</span>
                    <div>
                      <p className="font-semibold text-[#334311]">{item.title}</p>
                      <p className="text-[#334311]/70 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#334311] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">Clinical Collaboration</h3>
              <p className="text-[#c6e28a]/90 mb-4">
                Range and Restore is based at 130 Junction Road, Archway, within the same building as Reliable Scan — a private diagnostic ultrasound clinic led by GMC-registered doctors.
              </p>
              <Link
                href="/clinical-collaboration"
                className="inline-flex items-center gap-2 text-[#c6e28a] font-semibold hover:text-white transition-colors min-h-[44px]"
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
