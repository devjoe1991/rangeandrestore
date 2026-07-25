import type { Metadata } from 'next'
import Link from 'next/link'
import { CharityBlock } from '@/components/CharityBlock'
import type { CharityPhoto } from '@/components/CharityBlock'
import { buildMetadata, buildBreadcrumbs, BASE_URL, personSchema } from '@/lib/seo'

const WHITTINGTON = {
  name: 'Whittington Health Charity',
  url: 'https://www.whittingtonhealthcharity.org/',
  donate: 'https://www.whittingtonhealthcharity.org/donations-landing-page',
  instagram: 'https://www.instagram.com/whittington_health_charity/',
  handle: '@whittington_health_charity',
  charityNo: '1056452',
} as const

const PHAB = {
  name: 'Phab',
  url: 'https://phab.org.uk/',
  donate: 'https://phab.org.uk/support-us/',
  instagram: 'https://www.instagram.com/phabcharity',
  handle: '@phabcharity',
  charityNo: '283931',
} as const

/**
 * Photo carousels. Both arrays are empty until the image files are saved to
 * /public/giving-back/, because a missing file ships a 404 image. The block
 * renders no carousel at all while an array is empty.
 *
 * To switch the photos on, save the files under the names below and replace
 * the empty array with the commented block underneath it. Nothing else changes.
 *
 * const whittingtonPhotos: CharityPhoto[] = [
 *   { src: '/giving-back/whittington-health-charity-christmas-market-range-and-restore-raffle-voucher-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore holding the donated 60 minute sports massage voucher at the Whittington Health Charity Christmas Market raffle stall, Whittington Hospital, North London' },
 *   { src: '/giving-back/whittington-health-charity-christmas-market-fundraising-stall-whittington-hospital-archway-north-london.jpg',
 *     alt: 'The Whittington Health Charity Christmas Market fundraising stall and raffle hampers in the main entrance of Whittington Hospital, North London' },
 *   { src: '/giving-back/whittington-health-charity-christmas-market-carlos-bonvicine-range-and-restore-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore at the Whittington Health Charity Christmas Market stall, Whittington Hospital, North London' },
 *   { src: '/giving-back/range-and-restore-sports-massage-station-whittington-hospital-charity-event-archway-north-london.jpg',
 *     alt: 'The Range and Restore sports massage couch and banner set up for a Whittington Health Charity fundraising event at Whittington Hospital, North London' },
 *   { src: '/giving-back/carlos-bonvicine-sports-massage-calf-treatment-whittington-health-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore giving a calf treatment at a Whittington Health Charity fundraising event, Whittington Hospital, North London' },
 *   { src: '/giving-back/range-and-restore-massage-couch-banner-whittington-hospital-clinical-skills-centre-archway-north-london.jpg',
 *     alt: 'The Range and Restore massage couch and banner beside the Whittington Health Clinical Skills Centre during a charity fundraising event, North London' },
 *   { src: '/giving-back/carlos-bonvicine-sports-massage-whittington-hospital-lecture-theatre-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore giving sports massage by the lecture theatre at a Whittington Health Charity fundraising event, North London' },
 *   { src: '/giving-back/carlos-bonvicine-range-and-restore-massage-station-whittington-health-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore at his massage station during a Whittington Health Charity fundraising event, Whittington Hospital, North London' },
 *   { src: '/giving-back/carlos-bonvicine-lower-leg-sports-massage-whittington-health-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore working on a lower leg at a Whittington Health Charity fundraising event, Whittington Hospital, North London' },
 *   { src: '/giving-back/carlos-bonvicine-back-and-shoulder-massage-whittington-health-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore treating a back and shoulder at a Whittington Health Charity fundraising event, Whittington Hospital, North London' },
 *   { src: '/giving-back/carlos-bonvicine-with-visitor-whittington-health-charity-event-archway-north-london.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore with a visitor at a Whittington Health Charity fundraising event, Whittington Hospital, North London' },
 * ]
 *
 * const phabPhotos: CharityPhoto[] = [
 *   { src: '/giving-back/carlos-bonvicine-phab-runner-tcs-london-marathon-post-race-sports-massage-range-and-restore.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore with a Phab runner and their finisher medal in the Phab recovery tent at the TCS London Marathon',
 *     objectPosition: 'object-top' },
 *   { src: '/giving-back/carlos-bonvicine-phab-charity-runner-london-marathon-recovery-tent-range-and-restore.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore with a Phab runner after post-race sports massage in the Phab recovery tent at the TCS London Marathon',
 *     objectPosition: 'object-top' },
 *   { src: '/giving-back/carlos-bonvicine-phab-kids-runner-tcs-london-marathon-post-race-massage-range-and-restore.jpg',
 *     alt: 'Carlos Bonvicine of Range and Restore in Phab Kids kit with a Phab Kids runner in the recovery tent at the TCS London Marathon' },
 * ]
 */
const whittingtonPhotos: CharityPhoto[] = []
const phabPhotos: CharityPhoto[] = []

export const metadata: Metadata = buildMetadata({
  title: 'Giving Back | Whittington Health Charity & Phab',
  description:
    'The charities Range and Restore supports. Donated sports massage treatments and gift vouchers for Whittington Health Charity fundraising, and Carlos volunteering at the London Marathon for Phab.',
  path: '/giving-back',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Giving Back', path: '/giving-back' }])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Giving Back, the charities Range and Restore supports',
  description:
    'Range and Restore supports Whittington Health Charity and Phab. Donated sports massage treatments and gift vouchers for fundraising raffles and events, and Carlos Bonvicine volunteering at Whittington Hospital events and at the TCS London Marathon.',
  url: `${BASE_URL}/giving-back`,
  isPartOf: { '@id': `${BASE_URL}/#business` },
  mainEntity: { '@id': `${BASE_URL}/#business` },
  about: [
    { '@id': `${WHITTINGTON.url}#organization` },
    { '@id': `${PHAB.url}#organization` },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Whittington Christmas Market' },
    { '@type': 'Thing', name: 'TCS London Marathon' },
    { '@type': 'Thing', name: 'Charity fundraising raffle' },
    { '@type': 'Thing', name: 'Sports massage' },
    { '@type': 'Thing', name: 'NHS staff wellbeing' },
    { '@type': 'Thing', name: 'Post-race recovery' },
  ],
}

const whittingtonSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'NGO'],
  '@id': `${WHITTINGTON.url}#organization`,
  name: WHITTINGTON.name,
  legalName: 'The Whittington Hospital NHS Trust Charitable Funds',
  url: WHITTINGTON.url,
  description:
    'The dedicated charity for Whittington Health NHS Trust, which supports over 500,000 people across north London from the main hospital and over 40 community sites. The charity funds equipment, care environments, staff wellbeing and patient experience beyond core NHS provision.',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'GB-CHC',
    name: 'Registered charity number, Charity Commission for England and Wales',
    value: WHITTINGTON.charityNo,
  },
  areaServed: { '@type': 'Place', name: 'North London' },
  sameAs: [WHITTINGTON.instagram],
  sponsor: { '@id': `${BASE_URL}/#business` },
  potentialAction: {
    '@type': 'DonateAction',
    name: 'Donate to Whittington Health Charity',
    target: { '@type': 'EntryPoint', urlTemplate: WHITTINGTON.donate },
    recipient: { '@id': `${WHITTINGTON.url}#organization` },
  },
}

const phabSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'NGO'],
  '@id': `${PHAB.url}#organization`,
  name: PHAB.name,
  url: PHAB.url,
  description:
    'A national charity, almost 70 years old, running more than 100 local clubs that bring disabled and non-disabled people together. Phab also runs challenge events to raise funds, including the TCS London Marathon.',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'GB-CHC',
    name: 'Registered charity number, Charity Commission for England and Wales',
    value: PHAB.charityNo,
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  sameAs: [PHAB.instagram],
  sponsor: { '@id': `${BASE_URL}/#business` },
  potentialAction: {
    '@type': 'DonateAction',
    name: 'Support Phab',
    target: { '@type': 'EntryPoint', urlTemplate: PHAB.donate },
    recipient: { '@id': `${PHAB.url}#organization` },
  },
}

/**
 * Every answer here must appear verbatim in the visible FAQ block below.
 * Google drops the rich result when the answer is not on the page.
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which charities does Range and Restore support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range and Restore supports two registered charities. Whittington Health Charity, registered charity number 1056452, which is the dedicated charity for Whittington Health NHS Trust in north London. And Phab, registered charity number 283931, which brings disabled and non-disabled people together through more than 100 local clubs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Range and Restore give to Whittington Health Charity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We donate sports massage treatments and gift vouchers as prizes for the charity raffles and fundraising events. At the Whittington Christmas Market we put in a 60 minute sports massage and soft tissue remedial therapy voucher, worth £85, as one of the raffle prizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Carlos volunteer at the Whittington Hospital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Carlos volunteers at Whittington Health Charity fundraising events at the hospital. At the Christmas Market he set up a couch in the main entrance and gave free 10 minute taster massages through the afternoon to NHS staff, patients and visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Range and Restore do for Phab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carlos has volunteered at the TCS London Marathon for three years running, working in the Phab recovery tent and giving post-race sports massage to runners who took part to raise money for Phab.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I donate to Whittington Health Charity or Phab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both charities take donations directly on their own websites. Whittington Health Charity has a donations page at whittingtonhealthcharity.org, and Phab has a support us page at phab.org.uk. Range and Restore does not handle or hold any donations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Range and Restore based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Range and Restore is at 130 Junction Road, Archway, London N19 5LB. The Whittington Hospital is on Magdala Avenue, a seven minute walk up the hill from the clinic.',
      },
    },
  ],
}

const proseLink =
  'text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold'

export default function GivingBackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(whittingtonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(phabSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero band ─────────────────────── */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">
            Supporting Our Community &middot; Archway &middot; North London
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Giving Back: The Charities We Support
          </h1>
          <p className="text-lg text-page-muted font-medium mb-4">
            Range and Restore is one clinic on Junction Road. Supporting the people around us is part of how it runs.
          </p>
          <p className="text-lg text-page-muted font-medium">
            Two charities in particular. Whittington Health Charity, the dedicated charity for the hospital up the hill from our door. And Phab, who bring disabled and non-disabled people together through clubs across the country.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* ── Intro ─────────────────────── */}
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <h2 className="text-2xl font-bold text-page mt-2 mb-3">Why we do this</h2>
          <p>
            We treat staff from the Whittington. Nurses, doctors and allied health staff who work seven minutes up the hill on Magdala Avenue and need treatment that fits round a shift pattern. Carlos has also worked the London Marathon every spring for the last three years. Neither of those started as a charity plan. Both turned into one.
          </p>
          <p>
            What we give is what we have. Treatment time, vouchers for the prize table, and a long day on our feet. Donations go straight to the charities on their own sites. We never handle the money.
          </p>
        </div>

        {/* ── Charity blocks ─────────────────────── */}
        <div className="mt-12 space-y-10">

          <CharityBlock
            id="whittington-health-charity"
            name="Whittington Health Charity"
            shortName="Whittington Health Charity"
            eyebrow={`Registered charity no. ${WHITTINGTON.charityNo} · North London`}
            donateUrl={WHITTINGTON.donate}
            instagramUrl={WHITTINGTON.instagram}
            instagramHandle={WHITTINGTON.handle}
            photos={whittingtonPhotos}
          >
            <p>
              Whittington Health Charity is the dedicated charity for Whittington Health NHS Trust. It is the working name of The Whittington Hospital NHS Trust Charitable Funds, registered charity number {WHITTINGTON.charityNo}. The trust looks after more than 500,000 people across north London, from the main hospital on Magdala Avenue to over 40 community sites.
            </p>
            <p>
              The charity pays for what core NHS budgets do not stretch to. Equipment, the care environment, staff wellbeing and patient experience. Their site is at{' '}
              <a href={WHITTINGTON.url} target="_blank" rel="noopener noreferrer" className={proseLink}>
                whittingtonhealthcharity.org
              </a>.
            </p>

            <h3 className="text-lg font-bold text-page mt-6 mb-2">What Range and Restore does</h3>
            <p>
              We donate sports massage treatments and gift vouchers as prizes for the charity raffles and fundraising events. At the Whittington Christmas Market we put in a 60 minute sports massage and soft tissue remedial therapy voucher, worth &pound;85, as one of the raffle prizes.
            </p>
            <p>
              Carlos works the day as well. At the Christmas Market he set up a couch in the main entrance and gave free 10 minute taster massages through the afternoon, to staff coming off shift, to patients and to visitors walking through.
            </p>
            <p>
              The Whittington is a seven minute walk up the hill from 130 Junction Road, and a lot of our regular clients work there. This is the most direct way we have of putting something back into the building.
            </p>
          </CharityBlock>

          <CharityBlock
            id="phab"
            name="Phab"
            shortName="Phab"
            eyebrow={`Registered charity no. ${PHAB.charityNo} · UK wide`}
            donateUrl={PHAB.donate}
            instagramUrl={PHAB.instagram}
            instagramHandle={PHAB.handle}
            photos={phabPhotos}
          >
            <p>
              Phab is a national charity, registered number {PHAB.charityNo}, and it is almost 70 years old. It runs more than 100 local clubs that bring disabled and non-disabled people together, on the straightforward basis that everyone should be able to join in. Phab also runs challenge events to raise money, including the TCS London Marathon. Their site is at{' '}
              <a href={PHAB.url} target="_blank" rel="noopener noreferrer" className={proseLink}>
                phab.org.uk
              </a>.
            </p>

            <h3 className="text-lg font-bold text-page mt-6 mb-2">What Range and Restore does</h3>
            <p>
              Carlos has volunteered at the TCS London Marathon for three years running, working in the Phab recovery tent and giving post-race sports massage to runners who took it on for Phab. It started while he was still training as a therapist, and he has gone back every year since.
            </p>
            <p>
              Legs that have just covered 26.2 miles need somewhere to go, and the tent is where the day ends for most of the Phab team.{' '}
              <Link href="/blog/marathon-sports-massage-archway" className={proseLink}>
                Our marathon recovery guide
              </Link>{' '}
              covers what to do in the days after.
            </p>
          </CharityBlock>

        </div>

        {/* ── Donate CTA ─────────────────────── */}
        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Support these charities directly</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Every donation goes to the charity, on their own site. Range and Restore does not handle or hold any of it.
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href={WHITTINGTON.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline min-h-[44px]"
            >
              Donate to Whittington Health Charity <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={PHAB.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-[#1a3d3a] min-h-[44px]"
            >
              Support Phab <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* ── Visible FAQ. Text must stay verbatim identical to faqSchema. ── */}
        <div className="prose prose-lg max-w-none text-page-muted space-y-6 mt-12">
          <h2 className="text-2xl font-bold text-page mt-2 mb-3">Giving back FAQs</h2>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Which charities does Range and Restore support?</h3>
          <p>
            Range and Restore supports two registered charities. Whittington Health Charity, registered charity number 1056452, which is the dedicated charity for Whittington Health NHS Trust in north London. And Phab, registered charity number 283931, which brings disabled and non-disabled people together through more than 100 local clubs.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">What does Range and Restore give to Whittington Health Charity?</h3>
          <p>
            We donate sports massage treatments and gift vouchers as prizes for the charity raffles and fundraising events. At the Whittington Christmas Market we put in a 60 minute sports massage and soft tissue remedial therapy voucher, worth &pound;85, as one of the raffle prizes.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Does Carlos volunteer at the Whittington Hospital?</h3>
          <p>
            Yes. Carlos volunteers at Whittington Health Charity fundraising events at the hospital. At the Christmas Market he set up a couch in the main entrance and gave free 10 minute taster massages through the afternoon to NHS staff, patients and visitors.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">What does Range and Restore do for Phab?</h3>
          <p>
            Carlos has volunteered at the TCS London Marathon for three years running, working in the Phab recovery tent and giving post-race sports massage to runners who took part to raise money for Phab.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">How can I donate to Whittington Health Charity or Phab?</h3>
          <p>
            Both charities take donations directly on their own websites. Whittington Health Charity has a donations page at whittingtonhealthcharity.org, and Phab has a support us page at phab.org.uk. Range and Restore does not handle or hold any donations.
          </p>

          <h3 className="text-lg font-bold text-page mt-6 mb-2">Where is Range and Restore based?</h3>
          <p>
            Range and Restore is at 130 Junction Road, Archway, London N19 5LB. The Whittington Hospital is on Magdala Avenue, a seven minute walk up the hill from the clinic.
          </p>
        </div>

        {/* ── Related ─────────────────────── */}
        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Our Archway community and local partners
            </Link>
            <Link href="/about" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href="/areas-served/archway-n19" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Archway N19
            </Link>
            <Link href="/blog/marathon-sports-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Marathon massage and recovery guide
            </Link>
            <Link href="/press" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Press, media and interview enquiries
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
