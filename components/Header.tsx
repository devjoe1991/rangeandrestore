'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS, NAV_ITEMS, BOOKING_URLS } from '@/lib/constants'
import { SearchTrigger } from './SiteSearch'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Desktop header ─────────────────────────────────── */}
      <header className={`hidden lg:block sticky top-0 z-50 transition-all duration-200 bg-header ${scrolled ? 'shadow-sm dark:shadow-black/40' : 'border-b border-header'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" aria-label="Range and Restore — Home" className="flex items-center min-h-[44px]">
            <Image
              src="/rangeandrestorelogo.png"
              alt="Range and Restore Sports Massage"
              width={120}
              height={72}
              className="h-12 w-auto object-contain rounded-lg ring-1 border-page"
              priority
            />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href}
                  className="flex items-center gap-0.5 px-3 h-[44px] text-[0.875rem] font-semibold text-page hover:text-[#2a9d8f] rounded-lg hover:bg-page-sage transition-colors">
                  {item.label}
                  {'children' in item && item.children && <ChevronIcon />}
                </Link>
                {'children' in item && item.children && (
                  <div className="absolute top-full left-0 mt-1 bg-card rounded-2xl shadow-xl border border-page p-2 min-w-[230px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-page hover:bg-page-sage rounded-xl transition-colors font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#618020] flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: search + theme toggle + phone + CTA */}
          <div className="flex items-center gap-3">
            <SearchTrigger />
            <ThemeToggle />
            <a href={`tel:${BUSINESS.phoneTel}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-page hover:text-[#618020] transition-colors min-h-[44px]">
              <PhoneIcon /> {BUSINESS.phone}
            </a>
            <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary text-sm">Book Now</a>
          </div>
        </div>
      </header>

      {/* ── Mobile sticky bar ──────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-50 bg-header border-b border-header h-[60px] flex items-center px-4 gap-2">
        <Link href="/" aria-label="Range and Restore — Home" className="mr-auto flex items-center min-h-[44px]">
          <Image
            src="/rangeandrestorelogo.png"
            alt="Range and Restore Sports Massage"
            width={90}
            height={54}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <SearchTrigger className="text-page-muted opacity-70 w-10 h-10 justify-center flex-shrink-0" />
        <a href={`tel:${BUSINESS.phoneTel}`} aria-label={`Call us on ${BUSINESS.phone}`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a9d8f] text-white flex-shrink-0">
          <PhoneIcon />
        </a>
        <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary text-xs px-4 py-2 min-h-[40px]">
          Book Now
        </a>
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="text-page min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}>
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* ── Mobile drawer ──────────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-header flex flex-col transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!mobileOpen}>
        {/* Spacer matches mobile bar height */}
        <div className="h-[60px] flex-shrink-0 border-b border-header" />

        <nav className="flex-1 overflow-y-auto px-6 pt-2 pb-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link href={item.href} onClick={() => setMobileOpen(false)}
                className="block text-[1.25rem] font-bold text-page py-4 border-b border-page tracking-tight">
                {item.label}
              </Link>
              {'children' in item && item.children && (
                <div className="pt-1 pb-2 pl-4 flex flex-col gap-0.5">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-sm text-[#618020] hover:text-page py-2.5 transition-colors min-h-[44px] font-medium">
                      <span className="w-1 h-1 rounded-full bg-[#618020]" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 pb-10 pt-4 border-t border-header flex flex-col gap-3">
          <a href={BOOKING_URLS.general} target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary w-full justify-center text-base py-4">
            Book Your Session
          </a>
          <a href={`tel:${BUSINESS.phoneTel}`}
            className="flex items-center justify-center gap-2 text-page font-semibold text-base min-h-[48px]">
            <PhoneIcon /> {BUSINESS.phone}
          </a>
          <div className="flex items-center justify-between pt-2 pb-1">
            <div>
              <span className="text-sm font-semibold text-page">Appearance</span>
              <p className="text-xs text-page-muted mt-0.5">Light · Dark · System</p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
function ChevronIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  )
}
