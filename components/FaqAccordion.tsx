interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  includeSchema?: boolean
}

export function FaqAccordion({ items, includeSchema = true }: FaqAccordionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="rounded-2xl border-2 border-[#1a3d3a] overflow-hidden bg-card">
        {items.map((faq, i) => (
          <details key={faq.q} className={`group ${i < items.length - 1 ? 'border-b border-[#1a3d3a]/15' : ''}`}>
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-page text-base leading-snug hover:bg-page-sage transition-colors min-h-[56px]">
              {faq.q}
              <span className="relative flex-shrink-0 w-7 h-7 rounded-full bg-[#1a3d3a]/10 flex items-center justify-center text-[#1a3d3a]">
                <span className="absolute w-3 h-[2px] bg-current rounded-sm"></span>
                <span className="absolute w-[2px] h-3 bg-current rounded-sm transition-transform duration-300 group-open:rotate-90"></span>
              </span>
            </summary>
            <div className="px-5 pb-5 text-page-muted leading-relaxed text-sm">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}
