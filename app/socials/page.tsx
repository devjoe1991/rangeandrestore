import type { Metadata } from 'next'
import Link from 'next/link'
import { BookingButton } from '@/components/BookingButton'
import { FacebookFeed } from '@/components/FacebookFeed'
import { BUSINESS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Socials – Follow Range and Restore Sports Massage',
  description:
    'Follow Range and Restore on Facebook, Instagram and Google for clinic updates, treatment tips, event appearances and recovery advice from Archway, North London.',
  path: '/socials',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Socials', path: '/socials' }])

const INSTAGRAM_URL = 'https://www.instagram.com/rangeandrestore'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61572962878628'
const GOOGLE_URL = 'https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9'

const channels = [
  {
    name: 'Facebook',
    handle: 'Range and Restore Sports Massage',
    description: 'Clinic news, marathon event coverage and treatment updates.',
    href: FACEBOOK_URL,
    Icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    handle: '@rangeandrestore',
    description: 'Behind the scenes, technique demonstrations and client results.',
    href: INSTAGRAM_URL,
    Icon: InstagramIcon,
  },
  {
    name: 'Google',
    handle: 'Leave a review',
    description: 'See what clients across North London are saying about their sessions.',
    href: GOOGLE_URL,
    Icon: GoogleIcon,
  },
]

export default function SocialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Follow Range and Restore</h1>
          <p className="mt-4 text-xl text-page-muted max-w-2xl">
            Stay connected for clinic news, event coverage, recovery tips and updates from Carlos in Archway, North London.
          </p>
        </div>
      </div>

      {/* Social channel cards */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {channels.map(({ name, handle, description, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[20px] overflow-hidden bg-card shadow-sm card-lift flex flex-col"
              style={{ border: '2px solid #1a3d3a' }}
            >
              <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1a3d3a]/10 text-[#1a3d3a] group-hover:bg-[#2ab4b8] group-hover:text-white transition-colors">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-black text-page text-base leading-tight">{name}</p>
                    <p className="text-page-muted text-xs font-semibold">{handle}</p>
                  </div>
                </div>
                <p className="text-page-muted text-sm leading-relaxed flex-1">{description}</p>
                <span className="text-[#1a3d3a] text-xs font-black uppercase tracking-wide min-h-[24px] flex items-center gap-2 group-hover:text-[#2ab4b8] transition-colors">
                  Visit {name} <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Recent activity – Facebook feed */}
      <FacebookFeed />

      {/* CTA */}
      <section className="section-sm bg-[#7dd94a]" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1a2330] tracking-tight mb-3">
            Ready to book a session?
          </h2>
          <p className="text-[#1a3d3a]/80 mb-7 text-base font-semibold">
            See what we share online, then come in for an assessment-led treatment with Carlos.
          </p>
          <div className="flex flex-row gap-3 justify-center flex-wrap">
            <BookingButton label="Book Your Session" className="bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all" />
            <Link
              href="/contact"
              className="btn bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all"
            >
              Contact the clinic
            </Link>
          </div>
          <p className="text-[#1a3d3a]/70 text-xs font-semibold mt-5">
            130 Junction Road, Archway, London N19 5LB · <a href={`tel:${BUSINESS.phoneTel}`} className="underline">{BUSINESS.phone}</a>
          </p>
        </div>
      </section>
    </>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}
