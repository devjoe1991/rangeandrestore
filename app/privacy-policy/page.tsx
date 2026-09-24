import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Range and Restore Sports Massage. How we collect, use, and protect your personal information.',
  path: '/privacy-policy',
  noindex: true,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Privacy Policy</h1>
          <p className="mt-4 text-page-muted opacity-80">Last updated: September 2026</p>
        </div>
      </div>

      <div className="container-page container-prose">
        <div className="prose prose-lg max-w-none text-page-muted space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-page">1. Who We Are</h2>
            <p>
              Range and Restore Sports Massage is operated by Carlos Bonvicine, a sole trader based at {BUSINESS.address}. We are committed to protecting your personal information and being transparent about how we use it.
            </p>
            <p>
              If you have any questions about this policy, please contact us at{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-brand-teal hover:underline">{BUSINESS.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Contact information:</strong> your name, email address, phone number</li>
              <li><strong>Health information:</strong> relevant medical history, injury details, and treatment notes — only as necessary for providing massage therapy services</li>
              <li><strong>Booking information:</strong> appointment dates, treatment types, and session notes</li>
              <li><strong>Communication records:</strong> emails, messages, and enquiries you send us</li>
              <li><strong>Website usage data:</strong> pages visited, clicks on booking links and similar activity, collected by Google Analytics, Google Ads and the Meta Pixel only if you accept cookies</li>
              <li><strong>Newsletter sign-ups:</strong> your email address and name, if you join our mailing list</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Provide and manage your massage therapy appointments</li>
              <li>Maintain accurate treatment records and health notes</li>
              <li>Respond to your enquiries and communications</li>
              <li>Process bookings and gift card purchases</li>
              <li>Send appointment reminders where requested</li>
              <li>Send our newsletter, if you have signed up (you can unsubscribe from any email)</li>
              <li>Measure which adverts and pages lead to bookings, if you have accepted cookies</li>
              <li>Improve our services and website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">4. Legal Basis for Processing</h2>
            <p>We process your personal information on the following legal bases:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Contract:</strong> to fulfil your bookings and provide the services you have requested</li>
              <li><strong>Legitimate interests:</strong> to manage our business and communicate with clients</li>
              <li><strong>Legal obligation:</strong> to maintain treatment records as required by professional standards</li>
              <li><strong>Consent:</strong> for marketing communications and optional analytics (where applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">5. Health Information</h2>
            <p>
              Health information is treated as special category data under UK GDPR. We collect health details only where necessary to provide safe and appropriate massage therapy. This information is kept securely and never shared with third parties without your explicit consent, except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">6. Data Sharing</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Our booking system provider (JaneApp):</strong> to manage appointments. JaneApp operates GDPR-compliant data practices.</li>
              <li><strong>Mailchimp (Intuit):</strong> to store newsletter sign-ups and send our newsletter</li>
              <li><strong>Google (Analytics and Ads) and Meta (Facebook and Instagram):</strong> website usage and booking-link clicks, only if you accept cookies</li>
              <li><strong>Google Maps and Facebook:</strong> the map on our contact page and the Facebook feed load content from Google and Meta, who may record your visit under their own privacy policies</li>
              <li><strong>Legal authorities:</strong> where required by law</li>
            </ul>
            <p>
              With your explicit consent, we may also share relevant information with Reliable Scan (the diagnostic ultrasound clinic at the same address) in cases where coordinated care is appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes for which it was collected. Treatment records are typically retained for a minimum of 7 years following your last appointment, in line with professional practice guidelines. Contact enquiries are retained for up to 2 years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to our legal obligations)</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time (where consent is the legal basis)</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-brand-teal hover:underline">{BUSINESS.email}</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">9. Cookies and Analytics</h2>
            <p>
              When you first visit, a banner asks whether you accept cookies. Until you accept, no analytics or advertising cookies are set and nothing is sent to Google or Meta for measurement.
            </p>
            <p>If you accept, we use:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Google Analytics:</strong> to see which pages people visit and how they find us</li>
              <li><strong>Google Ads:</strong> to measure which adverts lead to bookings</li>
              <li><strong>Meta Pixel:</strong> to measure which Facebook and Instagram adverts lead to bookings</li>
            </ul>
            <p>
              Your choice is saved in your browser. To change it, clear this site&apos;s data in your browser settings and the banner will ask again on your next visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">10. Security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes using secure HTTPS connections on our website and secure, access-controlled storage for client records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">11. Complaints</h2>
            <p>
              If you are unhappy with how we handle your personal information, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">ico.org.uk</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">12. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">Contact</h2>
            <p>
              For any privacy-related questions or to exercise your rights, please contact:
            </p>
            <address className="not-italic">
              <strong>Carlos Bonvicine</strong><br />
              Range and Restore Sports Massage<br />
              {BUSINESS.address}<br />
              <a href={`mailto:${BUSINESS.email}`} className="text-brand-teal hover:underline">{BUSINESS.email}</a><br />
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-brand-teal hover:underline">Call us</a>
            </address>
          </section>
        </div>
      </div>
    </>
  )
}
