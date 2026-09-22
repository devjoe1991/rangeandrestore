import Link from 'next/link'
import { FEATURE_CARD_SHELL, FeatureCardContent } from '@/components/FeatureCard'
import { BOOKING_URLS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

/**
 * The Community Tuesday Clinic card for the homepage carousel.
 *
 * The teal rule along the top is absolutely positioned on purpose: as a
 * flow element it pushed this card's eyebrow 4px below every other card's,
 * which is exactly the kind of drift the carousel makes obvious.
 *
 * Two actions — book a Tuesday, or read the page — so the card itself is not
 * a link.
 */
export function CommunityTuesdayCard() {
  return (
    <div
      className={`${FEATURE_CARD_SHELL} relative overflow-hidden border-2 border-brand-green bg-page-sage`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-brand-teal"
      />
      <FeatureCardContent
        eyebrow="New · Community Initiative"
        title="Community Tuesday Clinic"
        lead="The same expert treatment. More accessible pricing. Available every Tuesday."
        body={
          <p>
            A community-focused clinic helping more people across Archway and North London access
            expert treatment for back pain, neck pain, sports injuries, muscle tension, mobility and
            wellbeing.
          </p>
        }
        aside={
          <>
            <div className="mb-4 flex gap-3">
              <div className="flex-1 rounded-xl border border-brand-green/15 bg-card p-4 text-center">
                <p className="mb-1 text-[0.65rem] font-black uppercase tracking-widest text-brand-teal">
                  60 min
                </p>
                <p className="text-2xl font-black leading-none text-page">£60</p>
              </div>
              <div className="flex-1 rounded-xl border border-brand-green/15 bg-card p-4 text-center">
                <p className="mb-1 text-[0.65rem] font-black uppercase tracking-widest text-brand-teal">
                  90 min
                </p>
                <p className="text-2xl font-black leading-none text-page">£85</p>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <a
                href={BOOKING_URLS.communityTuesday}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-sm"
              >
                Book a Tuesday session
              </a>
              <Link
                href={ROUTES.services.communityTuesdayClinic}
                className="flex min-h-[44px] items-center justify-center text-sm font-bold text-page underline underline-offset-2 transition-colors hover:text-brand-teal"
              >
                Learn more<span className="sr-only"> about the Community Tuesday Clinic</span>
              </Link>
            </div>
          </>
        }
      />
    </div>
  )
}
