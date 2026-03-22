'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

type SearchItem = {
  title: string
  description: string
  href: string
  group: 'Services' | 'Blog' | 'Pages'
  keywords: string[]
}

const SEARCH_INDEX: SearchItem[] = [
  // Services
  { title: 'Sports & Deep Tissue Massage', description: 'Muscle tension, runner\'s knee, shoulder strain, injury recovery', href: '/services/sports-deep-tissue-massage', group: 'Services', keywords: ['sports', 'deep tissue', 'muscle', 'injury', 'runner', 'shoulder', 'knee', 'tension', 'athletic'] },
  { title: 'Advanced Clinical Massage', description: 'Chronic pain, sciatica, RSI, tension headaches', href: '/services/advanced-clinical-massage', group: 'Services', keywords: ['clinical', 'chronic', 'pain', 'sciatica', 'rsi', 'headache', 'posture', 'nerve'] },
  { title: 'Back & Neck Pain MOT', description: 'Back pain, neck tension, desk posture, stiffness', href: '/services/back-neck-pain-mot', group: 'Services', keywords: ['back', 'neck', 'posture', 'desk', 'spine', 'stiff', 'pain', 'office'] },
  { title: 'Relaxation Massage', description: 'Stress relief, burnout, calming treatment', href: '/services/relaxation-restorative-massage', group: 'Services', keywords: ['relax', 'stress', 'burnout', 'calm', 'restore', 'gentle', 'unwind'] },
  { title: 'Manual Lymphatic Drainage (MLD)', description: 'Post-surgery swelling, lymphoedema, recovery', href: '/services/manual-lymphatic-drainage', group: 'Services', keywords: ['mld', 'lymphatic', 'drainage', 'swelling', 'surgery', 'lymphoedema', 'oedema', 'immune'] },
  { title: '2-Hour Pain Relief Massage', description: 'Multiple problem areas, extended treatment', href: '/services/2-hour-pain-relief-massage', group: 'Services', keywords: ['2 hour', 'two hour', 'extended', 'multiple', 'long', 'comprehensive'] },
  { title: 'Massage Bundle Offers', description: 'Multi-session packages, save money', href: '/services/massage-bundles', group: 'Services', keywords: ['bundle', 'package', 'save', 'discount', 'sessions', 'buy', 'value'] },
  // Blog
  { title: 'Hydration and Muscle Health', description: 'Why water matters for muscle recovery and massage', href: '/blog/hydration-and-muscle-health', group: 'Blog', keywords: ['hydration', 'water', 'muscle', 'health', 'recovery'] },
  { title: 'Sports Massage for Runners', description: 'Before and after race preparation and recovery', href: '/blog/sports-massage-for-runners', group: 'Blog', keywords: ['runner', 'running', 'race', 'marathon', '10k', 'training'] },
  { title: 'Achilles Tendinitis Recovery', description: 'How sports massage helps Achilles injuries', href: '/blog/achilles-tendinitis-recovery-massage', group: 'Blog', keywords: ['achilles', 'tendinitis', 'tendon', 'ankle', 'heel', 'injury'] },
  { title: 'Desk Posture Pain', description: 'Fixing neck, shoulder and back pain from desk work', href: '/blog/desk-posture-pain-massage', group: 'Blog', keywords: ['desk', 'posture', 'office', 'neck', 'back', 'shoulder', 'sitting'] },
  // Pages
  { title: 'About Carlos Bonvicine', description: 'Meet the therapist behind Range and Restore', href: '/about', group: 'Pages', keywords: ['carlos', 'about', 'therapist', 'biography', 'qualifications', 'mld', 'certified'] },
  { title: 'Contact', description: 'Get in touch, find us in Archway N19', href: '/contact', group: 'Pages', keywords: ['contact', 'phone', 'email', 'address', 'archway', 'n19', 'location', 'find us', 'directions'] },
  { title: 'Gallery', description: 'Photos from the clinic in Archway', href: '/gallery', group: 'Pages', keywords: ['gallery', 'photos', 'clinic', 'images'] },
  { title: 'Gift Cards', description: 'Buy a massage gift for someone you care about', href: '/gift-cards', group: 'Pages', keywords: ['gift', 'voucher', 'present', 'birthday', 'christmas'] },
  { title: 'FAQs', description: 'Common questions about massage therapy', href: '/faqs', group: 'Pages', keywords: ['faq', 'questions', 'how', 'what', 'first time', 'hurt', 'wear'] },
  { title: 'Clinical Collaboration', description: 'Range and Restore alongside Reliable Scan Archway', href: '/clinical-collaboration', group: 'Pages', keywords: ['ultrasound', 'scan', 'reliable', 'collaboration', 'diagnostic'] },
  { title: 'Wellness Hub', description: 'Articles on massage, injury and recovery', href: '/blog', group: 'Pages', keywords: ['blog', 'articles', 'wellness', 'advice', 'tips'] },
]

function score(item: SearchItem, query: string): number {
  const q = query.toLowerCase().trim()
  if (!q) return 0
  const titleLower = item.title.toLowerCase()
  const descLower = item.description.toLowerCase()
  if (titleLower.includes(q)) return 3
  if (descLower.includes(q)) return 2
  if (item.keywords.some(k => k.includes(q) || q.includes(k))) return 1
  return 0
}

export function SearchTrigger({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center gap-2 text-sm text-page-muted opacity-70 hover:opacity-100 hover:text-page transition-colors min-h-[44px] ${className}`}
        aria-label="Search"
      >
        <SearchIcon />
        <span className="hidden lg:inline text-xs">Search</span>
      </button>
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  )
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const results = SEARCH_INDEX
    .map(item => ({ item, s: score(item, query) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 8)
    .map(({ item }) => item)

  // Group results
  const grouped: Record<string, SearchItem[]> = {}
  results.forEach(item => {
    if (!grouped[item.group]) grouped[item.group] = []
    grouped[item.group].push(item)
  })

  const flat = results

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, flat.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && flat[activeIndex]) {
      window.location.href = flat[activeIndex].href
      onClose()
    }
    if (e.key === 'Escape') onClose()
  }, [flat, activeIndex, onClose])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-xl bg-card rounded-2xl shadow-2xl overflow-hidden"
        onKeyDown={handleKey}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-page">
          <SearchIcon className="text-[#2a9d8f] flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search treatments, conditions, pages..."
            className="flex-1 text-page text-base outline-none bg-transparent placeholder:text-page-muted placeholder:opacity-50"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-page-muted opacity-50 hover:opacity-100 hover:text-page transition-colors">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {!query && (
            <div className="px-4 py-8 text-center text-page-muted opacity-50 text-sm">
              Type to search treatments, conditions or pages
            </div>
          )}
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-page-muted opacity-50 text-sm">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
          {query && results.length > 0 && (
            <div className="py-2">
              {(Object.entries(grouped) as [string, SearchItem[]][]).map(([group, items]) => (
                <div key={group}>
                  <p className="px-4 pt-3 pb-1 text-[0.65rem] font-black uppercase tracking-widest text-[#2a9d8f]">{group}</p>
                  {items.map((item) => {
                    const globalIndex = flat.indexOf(item)
                    const isActive = globalIndex === activeIndex
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setActiveIndex(globalIndex)}
                        className={`flex flex-col px-4 py-2.5 transition-colors ${isActive ? 'bg-[#c6e28a]/30 dark:bg-[#2a9d8f]/15' : 'hover:bg-page-alt'}`}
                      >
                        <span className="font-semibold text-page text-sm leading-snug">{item.title}</span>
                        <span className="text-page-muted opacity-60 text-xs mt-0.5">{item.description}</span>
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-page px-4 py-2 flex items-center gap-4 text-[0.65rem] text-page-muted opacity-40">
          <span><kbd className="font-semibold">↑↓</kbd> navigate</span>
          <span><kbd className="font-semibold">↵</kbd> select</span>
          <span><kbd className="font-semibold">Esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}
