import Link from 'next/link'
import { BOOKING_URLS, BUSINESS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2c3d1f] flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <p className="text-[#d4ecea] text-[8rem] sm:text-[12rem] font-black leading-none tracking-tighter opacity-20 select-none">
          404
        </p>
        <div className="-mt-8 sm:-mt-12 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            This page does not exist
          </h1>
          <p className="text-[#d4ecea]/70 text-base max-w-md mx-auto mb-8">
            It may have moved or the link is out of date. Here are some helpful places to go instead.
          </p>
        </div>

        {/* Treatment links grid */}
        <div className="w-full max-w-2xl mb-10">
          <p className="text-[#d4ecea]/50 text-xs font-black uppercase tracking-widest mb-5">I need help with...</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {[
              ['Sports injury or muscle pain',        '/services/sports-deep-tissue-massage'],
              ['Chronic pain or sciatica',            '/services/advanced-clinical-massage'],
              ['Back pain or a stiff neck',           '/services/back-neck-pain-mot'],
              ['Stress and feeling burnt out',        '/services/relaxation-restorative-massage'],
              ['Post-surgery swelling or recovery',   '/services/manual-lymphatic-drainage'],
              ['Multiple problem areas',              '/services/2-hour-pain-relief-massage'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2.5 bg-[#1f2d15] hover:bg-[#2a9d8f]/15 border border-[#2a9d8f]/25 hover:border-[#d4ecea]/40 rounded-xl px-4 py-3 text-sm text-[#d4ecea]/80 hover:text-white transition-all min-h-[44px]"
              >
                <span className="text-[#2a9d8f] text-xs flex-shrink-0">→</span>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={BOOKING_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Your Session
          </a>
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline-white">
            {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-[#d4ecea]/40 text-sm hover:text-[#d4ecea] transition-colors">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
