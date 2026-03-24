import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Range and Restore Sports Massage in Archway, North London.',
  path: '/terms-and-conditions',
})

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Terms and Conditions</h1>
          <p className="mt-4 text-page-muted opacity-80">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-page">1. About These Terms</h2>
            <p>
              These terms and conditions govern the use of services provided by Range and Restore Sports Massage, operated by Carlos Bonvicine, located at {BUSINESS.address}. By booking an appointment or using our services, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">2. Appointments and Booking</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Appointments can be booked online via our booking system at rangeandrestoresportsmassage.janeapp.co.uk or by contacting us directly.</li>
              <li>A booking confirmation will be sent to the email address provided at the time of booking.</li>
              <li>It is your responsibility to ensure that the details provided at booking are accurate.</li>
              <li>We reserve the right to refuse bookings at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">3. Cancellation and Late Arrival Policy</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>We require a minimum of 24 hours&apos; notice to cancel or reschedule an appointment.</li>
              <li>Cancellations made with less than 24 hours&apos; notice may be charged at the full session rate.</li>
              <li>Non-attendance without notice (no-shows) will be charged at the full session rate.</li>
              <li>Late arrivals may result in a shortened session. The full session fee will still apply.</li>
              <li>We will always endeavour to give as much notice as possible if we need to cancel or reschedule your appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">4. Payment</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Payment is due at the time of your appointment unless otherwise agreed.</li>
              <li>We accept cash and card payments.</li>
              <li>Gift cards and bundle packages must be paid for in full at the time of purchase.</li>
              <li>Prices are displayed on our booking system and are subject to change. Your booked price will be honoured at the time of booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">5. Bundle Packages</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Bundle packages are valid for the specified period from the date of first use.</li>
              <li>Bundle packages are non-refundable once purchased.</li>
              <li>Sessions are non-transferable and for personal use only.</li>
              <li>Unused sessions remaining at the end of the validity period will be forfeited.</li>
              <li>We reserve the right to amend bundle terms with reasonable notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">6. Gift Cards</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Gift cards are valid for 12 months from the date of purchase.</li>
              <li>Gift cards are non-refundable and cannot be exchanged for cash.</li>
              <li>Gift cards are redeemable against any treatment at Range and Restore Sports Massage.</li>
              <li>Lost or stolen gift cards cannot be replaced.</li>
              <li>Gift cards cannot be used to purchase other gift cards or bundle packages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">7. Health and Safety</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>You are required to disclose any relevant medical conditions, injuries, medications, or contraindications before your treatment begins.</li>
              <li>Failure to disclose relevant health information may affect the safety and effectiveness of your treatment.</li>
              <li>We reserve the right to decline or modify treatment if we believe it may be unsafe or inappropriate based on your health status.</li>
              <li>Sports massage is not a substitute for medical treatment. If you have a medical condition, please seek advice from your GP or a qualified healthcare professional.</li>
              <li>You must not attend an appointment if you are unwell with a contagious illness.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">8. Conduct</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>We expect all clients to treat our therapist and any associated staff with respect and professionalism.</li>
              <li>Any inappropriate, abusive, or disrespectful behaviour will result in immediate termination of the session, and the client will be charged in full.</li>
              <li>Massage therapy is a professional healthcare service. Any sexual advances or inappropriate behaviour will result in immediate termination of the session and may be reported to the appropriate authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">9. Liability</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>We take all reasonable care in providing our services, but we cannot accept liability for any injury, loss, or damage arising from your use of our services unless caused by our negligence.</li>
              <li>We are not liable for any pre-existing conditions that may be aggravated by treatment, provided that treatment was appropriate given the information you disclosed.</li>
              <li>Our liability to you is limited to the cost of the specific treatment session in question.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">10. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of England and Wales. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these terms and conditions at any time. Changes will be posted on this page with an updated date. Continued use of our services following any changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-page">Contact</h2>
            <p>If you have any questions about these terms, please contact us:</p>
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
