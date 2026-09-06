import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

// Posts straight to Mailchimp's hosted subscribe endpoint (audience 942aa5d8ac,
// dc us20). Deliberately not routed through our own API: that would need
// MAILCHIMP_API_KEY set on Netlify, and this form has to keep working whether or
// not that env var is present. No client JS, so this stays a server component.
const MAILCHIMP_U = 'c1f8db5f9bbeec829acb74fb1'
const MAILCHIMP_ID = '942aa5d8ac'
const ACTION = `https://rangeandrestore.us20.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`
// Mailchimp's bot trap: a real browser leaves this empty, bots fill it in.
const HONEYPOT = `b_${MAILCHIMP_U}_${MAILCHIMP_ID}`

export function NewsletterSignup({ variant = 'footer' }: { variant?: 'footer' | 'panel' }) {
  const isPanel = variant === 'panel'

  return (
    <section
      className={
        isPanel
          ? 'rounded-2xl border border-sand bg-sand-deep p-6 sm:p-8'
          : 'mt-10 pt-8 border-t border-brand-green/15'
      }
      aria-labelledby="newsletter-heading"
    >
      <div className={isPanel ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start'}>
        <div>
          <h2
            id="newsletter-heading"
            className="text-ink font-extrabold text-lg md:text-base tracking-tight mb-2"
          >
            Recovery Notes
          </h2>
          <p className="text-sm text-brand-green/90 font-medium leading-relaxed max-w-prose">
            Occasional practical emails on managing pain, training and recovery, plus clinic
            news and availability. Written by our therapists. No more than once or twice a month.
          </p>
        </div>

        <form
          action={ACTION}
          method="post"
          target="_blank"
          rel="noopener noreferrer"
          noValidate
          className={isPanel ? 'mt-5' : 'lg:mt-1'}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="mce-FNAME" className="sr-only">
                First name
              </label>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                autoComplete="given-name"
                placeholder="First name (optional)"
                className="w-full min-h-[44px] rounded-full border border-brand-green/20 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="mce-EMAIL" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                autoComplete="email"
                placeholder="Email address"
                className="w-full min-h-[44px] rounded-full border border-brand-green/20 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
              />
            </div>
            <button
              type="submit"
              name="subscribe"
              className="btn bg-brand-green text-white hover:bg-brand-green-mid text-sm px-6 min-h-[44px] whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>

          {/* Mailchimp requires this to sit off-screen rather than be display:none */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name={HONEYPOT} tabIndex={-1} defaultValue="" />
          </div>

          <p className="mt-3 text-xs leading-relaxed text-brand-green/75 font-medium">
            We only email about treatment, recovery and the clinic. Unsubscribe any time in one
            click. See our{' '}
            <Link href={ROUTES.privacyPolicy} className="underline hover:text-brand-teal transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
