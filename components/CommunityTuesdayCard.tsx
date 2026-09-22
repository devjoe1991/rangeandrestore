import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

/**
 * The Community Tuesday Clinic card for the homepage carousel. Lifted out of
 * app/page.tsx unchanged apart from the section wrapper, which the carousel
 * now supplies, and h-full so it stretches with the rest of the row.
 *
 * Two actions — book a Tuesday, or read the page — so the card itself is not
 * a link.
 */
export function CommunityTuesdayCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-panel border-2 border-brand-green bg-page-sage">
      <div style={{ height: '4px', background: 'var(--color-brand-teal)', width: '100%' }} />
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10 lg:flex-row lg:items-center gap-6 lg:gap-10">
        <div className="flex-1">
          <span className="eyebrow block mb-2">New · Community Initiative</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-page tracking-tight mb-2">
            Community Tuesday Clinic
          </h2>
          <p className="text-page font-bold text-base sm:text-lg mb-3">
            The same expert treatment. More accessible pricing. Available every Tuesday.
          </p>
          <p className="text-page-muted text-sm font-medium leading-relaxed">
            A community-focused clinic helping more people across Archway and North London access expert treatment for back pain, neck pain, sports injuries, muscle tension, mobility and wellbeing.
          </p>
        </div>

        <div className="flex-shrink-0 lg:w-64">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-card rounded-xl border border-brand-green/15 p-4 text-center">
              <p className="text-brand-teal text-[0.65rem] font-black uppercase tracking-widest mb-1">60 min</p>
              <p className="text-2xl font-black text-page leading-none">£60</p>
            </div>
            <div className="flex-1 bg-card rounded-xl border border-brand-green/15 p-4 text-center">
              <p className="text-brand-teal text-[0.65rem] font-black uppercase tracking-widest mb-1">90 min</p>
              <p className="text-2xl font-black text-page leading-none">£85</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={BOOKING_URLS.communityTuesday}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm w-full"
            >
              Book a Tuesday session
            </a>
            <Link
              href={ROUTES.services.communityTuesdayClinic}
              className="text-page text-sm font-bold hover:text-brand-teal transition-colors min-h-[44px] flex items-center justify-center underline underline-offset-2"
            >
              Learn more<span className="sr-only"> about the Community Tuesday Clinic</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
