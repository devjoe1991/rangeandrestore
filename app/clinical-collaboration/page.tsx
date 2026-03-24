import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clinical Collaboration – Archway Massage & Ultrasound',
  description: 'Range and Restore Sports Massage operates alongside Reliable Scan, a private diagnostic ultrasound clinic in Archway. Coordinated assessment and treatment in one location.',
  path: '/clinical-collaboration',
})

export default function ClinicalCollaborationPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Clinical Collaboration</h1>
          <p className="mt-4 text-xl text-page-muted">Range and Restore &amp; <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a> – Assessment and Treatment Under One Roof</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-page mb-4">A Unique Clinical Setting</h2>
            <p className="text-page-muted text-lg mb-4">
              Range and Restore Sports Massage is based at 130 Junction Road, Archway, within the same building as <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a> — a private diagnostic ultrasound clinic led by GMC-registered doctors.
            </p>
            <p className="text-page-muted mb-4">
              This co-location creates a genuine opportunity for coordinated care between sports massage therapy and diagnostic imaging — something rarely available in a community setting. For clients who require both assessment and treatment, everything can be arranged within the same building, with clear communication between practitioners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">About <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a></h2>
            <p className="text-page-muted mb-4">
              <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a> is a private diagnostic ultrasound clinic providing musculoskeletal (MSK) ultrasound imaging, pregnancy scans, and other diagnostic services. The clinic is led by GMC-registered doctors with specialist training in diagnostic imaging.
            </p>
            <p className="text-page-muted mb-4">
              MSK ultrasound is particularly useful for assessing soft tissue injuries that are difficult to diagnose from symptoms alone — including tendon tears, bursitis, muscle tears, joint effusions, and nerve compression. It provides real-time, dynamic imaging that can directly inform treatment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">How the Collaboration Works</h2>
            <div className="space-y-4">
              <div className="bg-page-sage rounded-xl p-6">
                <h3 className="font-bold text-page mb-2">Assessment-led referral</h3>
                <p className="text-page-muted text-sm">If Carlos identifies during a massage assessment that imaging may be useful to clarify a diagnosis or rule out more serious pathology — for example, in cases of suspected tendon tear or persistent unexplained pain — he can discuss a referral to <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a>.</p>
              </div>
              <div className="bg-page-sage rounded-xl p-6">
                <h3 className="font-bold text-page mb-2">Coordinated care</h3>
                <p className="text-page-muted text-sm">Having the imaging clinic and massage clinic in the same building means results can be shared efficiently, treatment can be adapted based on findings, and clients do not have to navigate multiple locations or long waiting lists.</p>
              </div>
              <div className="bg-page-sage rounded-xl p-6">
                <h3 className="font-bold text-page mb-2">Informed treatment</h3>
                <p className="text-page-muted text-sm">Diagnostic imaging does not change the hands-on treatment itself, but it does inform clinical decision-making — how much pressure to use, which areas to prioritise, what contraindications to be aware of, and how realistic the expected recovery timeline is.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page mb-4">Who is this relevant for?</h2>
            <p className="text-page-muted mb-4">Clinical collaboration between Range and Restore and <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] underline decoration-[#2ab4b8]/40 hover:decoration-[#2ab4b8] transition-colors font-semibold">Reliable Scan</a> may be particularly relevant for:</p>
            <ul className="space-y-2">
              {[
                'Clients with persistent or unexplained soft tissue pain that has not responded to treatment',
                'Suspected tendon or muscle tears requiring imaging to confirm',
                'Post-surgical clients where understanding the internal state of the tissue is important',
                'Clients with complex or chronic conditions where a multi-practitioner approach is beneficial',
                'Anyone who has been advised to get an MSK scan by their GP or physiotherapist',
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

          <section className="bg-[#1a3d3a] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Book your sports massage assessment</h2>
            <p className="text-[#d4ecea] mb-4">
              Every treatment at Range and Restore begins with a thorough assessment. If imaging is identified as clinically appropriate, the team at <a href="https://reliablescanltd.com/" target="_blank" rel="noopener noreferrer" className="text-[#7dd94a] underline decoration-[#7dd94a]/40 hover:text-white transition-colors font-semibold">Reliable Scan</a> is on hand in the same building.
            </p>
            <p className="text-[#d4ecea] mb-6">
              Book your initial session with Carlos and take the first step towards a clear diagnosis and effective, targeted treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookingButton label="Book Your Session" />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#d4ecea] text-[#d4ecea] font-semibold px-6 py-3 hover:bg-page-sage hover:text-page transition-colors min-h-[44px]"
              >
                Ask a Question
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
