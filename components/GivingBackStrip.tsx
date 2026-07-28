import Link from 'next/link'

/**
 * Homepage strip linking to /giving-back. Deliberately low visual weight: it
 * sits between the Community Tuesday card and the Recovery Suite banner, so it
 * groups the community story in one place before the page returns to the
 * commercial run. Uses semantic classes rather than AwardStrip's fixed sand
 * hex, which only exists there to blend into the Services section.
 *
 * pt-0 is intentional. The Community Tuesday section above already carries the
 * bottom padding that supplies the gap, so no existing section needs editing.
 */
export function GivingBackStrip() {
  return (
    <section className="bg-page pt-0 pb-[clamp(3.5rem,6vw,5.5rem)]" aria-labelledby="giving-back-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/giving-back"
          className="group block rounded-[24px] border-2 border-[#1a3d3a] bg-page-sage px-6 py-5 sm:px-8 sm:py-6 no-underline hover:bg-card transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex-1">
              <span className="eyebrow block mb-2">Supporting Our Community</span>
              <h2 id="giving-back-heading" className="text-xl sm:text-2xl font-extrabold text-page tracking-tight mb-1.5">
                The charities we support
              </h2>
              <p className="text-page-muted text-sm font-medium leading-relaxed">
                Donated treatments and gift vouchers for Whittington Health Charity fundraising, and Carlos in the Phab recovery tent at the London Marathon three years running.
              </p>
            </div>
            <span className="flex-shrink-0 text-[#0f767a] text-xs font-black uppercase tracking-wide inline-flex items-center gap-2 min-h-[44px] group-hover:text-page transition-colors">
              Read more <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
