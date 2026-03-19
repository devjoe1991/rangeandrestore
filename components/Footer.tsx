import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, BOOKING_URLS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#334311] text-[#c6e28a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand + contact */}
          <div>
            {/* Logo on white pill so it reads on dark bg */}
            <div className="inline-block bg-white rounded-xl px-3 py-2 mb-5">
              <Image
                src="/rangeandrestorelogo.png"
                alt="Range and Restore Sports Massage"
                width={130}
                height={78}
                className="h-14 w-auto object-contain"
              />
            </div>
            <address className="not-italic text-sm space-y-2 text-[#c6e28a]/75">
              <p className="text-[#c6e28a]/50 text-xs font-semibold uppercase tracking-widest mb-3">
                Sports Massage · Archway · London
              </p>
              <p>{BUSINESS.address}</p>
              <p>
                <a href={`tel:${BUSINESS.phoneTel}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 min-h-[44px]">
                  <PhoneIcon /> {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white transition-colors break-all min-h-[44px] flex items-center">
                  {BUSINESS.email}
                </a>
              </p>
            </address>
            <div className="mt-5">
              <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary text-sm px-5">
                Book Now
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p className="text-white font-bold text-sm mb-4 tracking-tight">Treatments</p>
            <ul className="space-y-1 text-sm text-[#c6e28a]/75">
              {[
                ['Sports & Deep Tissue Massage', '/services/sports-deep-tissue-massage'],
                ['Advanced Clinical Massage',     '/services/advanced-clinical-massage'],
                ['Back & Neck Pain MOT',           '/services/back-neck-pain-mot'],
                ['Relaxation Massage',             '/services/relaxation-restorative-massage'],
                ['Manual Lymphatic Drainage',      '/services/manual-lymphatic-drainage'],
                ['2-Hour Pain Relief',             '/services/2-hour-pain-relief-massage'],
                ['Massage Bundles',                '/services/massage-bundles'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors min-h-[36px] flex items-center">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-bold text-sm mb-4 tracking-tight">Quick Links</p>
            <ul className="space-y-1 text-sm text-[#c6e28a]/75">
              {[
                ['About Carlos',           '/about'],
                ['Gallery',                '/gallery'],
                ['Gift Cards',             '/gift-cards'],
                ['Wellness Hub',           '/blog'],
                ['FAQs',                   '/faqs'],
                ['Contact',                '/contact'],
                ['Clinical Collaboration', '/clinical-collaboration'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors min-h-[36px] flex items-center">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#618020]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#c6e28a]/40">
          <p>© {new Date().getFullYear()} Range and Restore Sports Massage. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy"      className="hover:text-[#c6e28a] transition-colors min-h-[36px] flex items-center">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-[#c6e28a] transition-colors min-h-[36px] flex items-center">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}
