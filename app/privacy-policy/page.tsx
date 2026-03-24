import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Range and Restore Sports Massage. How we collect, use, and protect your personal information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Privacy Policy</h1>
          <p className="mt-4 text-page-muted opacity-80">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-page">1. Who We Are</h2>
            <p>
              Range and Restore Sports Massage is operated by Carlos Bonvicine, a sole trader based at {BUSINESS.address}. We are committed to protecting your personal information and being transparent about how we use it.
            </p>
            <p>
              If you have any questions about this policy, please contact us at{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-[#2ab4b8] hover:underline">{BUSINESS.email}</a>.
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
              <li><strong>Website usage data:</strong> anonymised analytics data collected via PostHog (where you have consented)</li>
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
              <li><strong>Email service providers:</strong> to send booking confirmations and communications</li>
              <li><strong>Analytics providers:</strong> anonymised usage data only, where you have consented</li>
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
              <a href={`mailto:${BUSINESS.email}`} className="text-[#2ab4b8] hover:underline">{BUSINESS.email}</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">9. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and analytics tools to understand how visitors use the site. Where analytics tools are used, data is collected anonymously and aggregated. You will be asked for consent before any tracking takes place.
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
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2ab4b8] hover:underline">ico.org.uk</a>.
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
              <a href={`mailto:${BUSINESS.email}`} className="text-[#2ab4b8] hover:underline">{BUSINESS.email}</a><br />
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#2ab4b8] hover:underline">{BUSINESS.phone}</a>
            </address>
          </section>
        </div>
      </div>
    </>
  )
}
