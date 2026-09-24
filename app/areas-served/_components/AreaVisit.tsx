import Image from 'next/image'
import { BOOKING_URLS, BUSINESS, WHATSAPP_URL } from '@/lib/constants'

interface AreaVisitProps {
  heading: string
  /** One line under the heading, e.g. how to get here from this area. */
  text: string
}

/**
 * Shared foot of every area page: a photo of the clinic front so people know
 * what to look for, then the booking box with Book, Call and WhatsApp.
 * Same photo and alt text as the /contact page.
 */
export function AreaVisit({ heading, text }: AreaVisitProps) {
  return (
    <>
      <figure className="mt-12 rounded-2xl overflow-hidden relative aspect-[16/9]">
        <Image
          src="/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpeg"
          alt="Exterior of Range and Restore Sports Massage clinic at 130 Junction Road, Archway, London N19 5LB — near Archway tube station, Northern Line"
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-white text-xs font-medium">
          130 Junction Road, inside the Reliable Scan building. This is what to look for when you arrive.
        </figcaption>
      </figure>

      <div className="mt-8 bg-accent rounded-2xl p-8 text-center sm:text-left">
        <h2 className="text-2xl font-black text-ink mb-4">{heading}</h2>
        <p className="text-brand-green font-semibold mb-6">{text}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
          <a
            href={BOOKING_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink"
          >
            Book Your Session
          </a>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="btn-ink-outline"
          >
            Call {BUSINESS.phone}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink-outline"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
