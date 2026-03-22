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
        <span className={`faq-icon-container flex-shrink-0 w-7 h-7 rounded-full bg-[#003010]/10 dark:bg-white/10 flex items-center justify-center text-[#003010] dark:text-white select-none transition-colors ${open ? 'is-open' : ''}`} aria-hidden="true" />
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
