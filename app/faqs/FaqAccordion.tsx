'use client'

import { useState } from 'react'

import { faqs } from './data'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border-b border-page transition-colors ${open ? 'bg-page-sage/20 dark:bg-[#162211]/40' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[56px]"
        aria-expanded={open}
      >
        <span className="font-semibold text-page text-base leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-[#2a9d8f] text-white' : 'bg-[#dde5d0] dark:bg-[#2a3d1f] text-page'}`}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-page-muted leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FaqAccordion() {
  return (
    <div className="bg-card rounded-2xl border border-page overflow-hidden shadow-sm">
      {faqs.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  )
}
