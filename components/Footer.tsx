import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, BOOKING_URLS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[#001D00] text-white">
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
            <address className="not-italic text-sm space-y-2 text-[#B7D968]/90">
              <p className="text-[#B7D968]/60 text-xs font-semibold uppercase tracking-widest mb-3">
                Sports Massage · Archway · London
              </p>
              <p>{BUSINESS.address}</p>
              <p>
                <a href={`tel:${BUSINESS.phoneTel}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 min-h-[44px]">
                  <PhoneIcon /> {BUSINESS.phone}
                </a>
              </p>

            </address>
            <div className="mt-5">
              <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer"
                className="btn bg-[#B7D968] text-[#001D00] hover:bg-white text-sm px-5">
                Book Now
              </a>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="text-[#B7D968]/70 hover:text-white transition-colors"
              >
                <GoogleIcon />
              </a>
              <a
                href="https://www.facebook.com/share/1DwTr2NUJr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#B7D968]/70 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/rangeandrestore?igsh=MWdiN2M4MjR5eWlvdQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#B7D968]/70 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                aria-label="Email us"
                className="text-[#B7D968]/70 hover:text-white transition-colors"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <p className="text-white font-bold text-sm mb-4 tracking-tight">I need help with...</p>
            <ul className="space-y-1 text-sm text-[#B7D968]/90">
              {[
                ['Sports injury or muscle pain',        '/services/sports-deep-tissue-massage'],
                ['Chronic pain or sciatica',            '/services/advanced-clinical-massage'],
                ['Back pain or a stiff neck',           '/services/back-neck-pain-mot'],
                ['Stress and feeling burnt out',        '/services/relaxation-restorative-massage'],
                ['Post-surgery swelling or recovery',   '/services/manual-lymphatic-drainage'],
                ['Multiple problem areas',              '/services/2-hour-pain-relief-massage'],
                ['Regular treatment at a better price', '/services/massage-bundles'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors min-h-[36px] flex items-center gap-2">
                    <span className="text-[#B7D968] text-xs">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-[#B7D968]/25">
              <a
                href={BOOKING_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B7D968] hover:text-white transition-colors min-h-[44px]"
              >
                <span className="text-[#B7D968] text-xs">→</span>
                Book your session
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-bold text-sm mb-4 tracking-tight">Quick Links</p>
            <ul className="space-y-1 text-sm text-[#B7D968]/90">
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
        <div className="mt-10 pt-6 border-t border-[#B7D968]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B7D968]/60">
          <p>© {new Date().getFullYear()} Range and Restore Sports Massage. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy"      className="hover:text-white transition-colors min-h-[36px] flex items-center">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors min-h-[36px] flex items-center">Terms &amp; Conditions</Link>
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

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  )
}
