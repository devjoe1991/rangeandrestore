import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS, BOOKING_URLS } from '@/lib/constants'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = buildMetadata({
  title: 'Contact – Range and Restore Sports Massage Archway',
  description: 'Get in touch with Range and Restore Sports Massage in Archway, North London. Call, email, or send a message to book or ask a question.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#c6e28a] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334311]">Contact</h1>
          <p className="mt-4 text-xl text-[#334311]/80">Get in touch with Range and Restore</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#334311] mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#334311] mb-1">Address</h3>
                <address className="not-italic text-gray-700">
                  {BUSINESS.address}
                </address>
              </div>

              <div>
                <h3 className="font-semibold text-[#334311] mb-1">Phone</h3>
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-[#618020] hover:text-[#334311] font-medium min-h-[44px] inline-flex items-center">
                  {BUSINESS.phone}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-[#334311] mb-1">Email</h3>
                <a href={`mailto:${BUSINESS.email}`} className="text-[#618020] hover:text-[#334311] font-medium min-h-[44px] inline-flex items-center">
                  {BUSINESS.email}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-[#334311] mb-2">Book Online</h3>
                <a
                  href={BOOKING_URLS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#618020] text-white font-semibold px-6 py-3 hover:bg-[#334311] transition-colors min-h-[44px]"
                >
                  Book Your Session
                </a>
              </div>
            </div>

            <div className="mt-8 bg-[#c6e28a] rounded-xl p-6">
              <h3 className="font-bold text-[#334311] mb-2">Location</h3>
              <p className="text-[#334311]/80 text-sm mb-3">
                Range and Restore is located at 130 Junction Road, Archway, London N19 5LB, within the same building as Reliable Scan, a private diagnostic ultrasound clinic.
              </p>
              <p className="text-[#334311]/80 text-sm">
                A short walk from Archway tube (Northern Line). Easy to reach from Tufnell Park, Islington and across North London. Street parking is available nearby.
              </p>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.420517744654!2d-0.1374028!3d51.560524099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bee259e36a3%3A0x91aa9e204602d18b!2sRange%20and%20Restore%20Sports%20Massage!5e0!3m2!1sen!2suk!4v1774130167749!5m2!1sen!2suk"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Range and Restore Sports Massage location"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-[#334311] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
