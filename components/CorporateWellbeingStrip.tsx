import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import { CORPORATE_ENQUIRY_URL } from '@/lib/constants'

/**
 * Strip for /corporate-wellbeing, used on the homepage and /services. Black and
 * white on purpose, so the business offer stands apart from the green consumer
 * panels. Two actions (enquire by email, or read the page), so the card itself
 * is not a link. The faint white border keeps the panel visible in dark mode.
 * section-flush-t because the section above already supplies the gap.
 */
export function CorporateWellbeingStrip() {
  return (
    <section className="section section-flush-t bg-page" aria-labelledby="corporate-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-panel border border-white/20 bg-black text-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <span className="eyebrow eyebrow-inverse block mb-2">For Businesses</span>
            <h2 id="corporate-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Corporate Massage &amp; Workplace Wellbeing
            </h2>
            <p className="text-white font-bold text-base sm:text-lg mb-3">
              On-site office massage at your workplace, or clinic sessions for your staff in Archway.
            </p>
            <p className="text-white/80 text-sm font-medium leading-relaxed">
              For companies across North London that want to support employee wellbeing: back, neck and shoulder tension, muscular tightness, mobility, recovery and general wellbeing. Tailored to your team size and budget.
            </p>
          </div>
          <div className="flex-shrink-0 lg:w-72 flex flex-col gap-2">
            <a href={CORPORATE_ENQUIRY_URL} className="btn-ink-outline border-white text-sm text-center w-full">
              Enquire about Corporate Wellbeing
            </a>
            <Link
              href={ROUTES.corporateWellbeing}
              className="text-white text-sm font-bold hover:text-white/70 transition-colors min-h-[44px] flex items-center justify-center underline underline-offset-2"
            >
              Learn more<span className="sr-only"> about corporate massage and workplace wellbeing</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
