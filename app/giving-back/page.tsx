import type { Metadata } from 'next'
import Link from 'next/link'
import { CharityBlock } from '@/components/CharityBlock'
import type { CharityPhoto } from '@/components/CharityBlock'
import { FaqAccordion } from '@/components/FaqAccordion'
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

const whittingtonPhotos: CharityPhoto[] = [
  {
    src: '/giving-back/whittington-health-charity-christmas-market-raffle-voucher-range-and-restore-sports-massage.jpg',
    alt: 'Carlos Bonvicine of Range and Restore holding the donated 60 minute sports massage voucher at the Whittington Health Charity Christmas Market raffle stall, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/whittington-health-charity-christmas-market-fundraising-stall-whittington-hospital.jpg',
    alt: 'The Whittington Health Charity Christmas Market fundraising stalls and raffle hampers in the main entrance of Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-whittington-health-charity-christmas-market-stall-range-and-restore.jpg',
    alt: 'Carlos Bonvicine of Range and Restore at the Whittington Health Charity Christmas Market stall in the main entrance of Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-sports-massage-whittington-health-charity-christmas-market-archway-north-london.jpg',
    alt: 'Carlos Bonvicine of Range and Restore giving a taster sports massage at the Whittington Health Charity Christmas Market, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-massage-station-whittington-health-charity-event-range-and-restore.jpg',
    alt: 'Carlos Bonvicine beside the Range and Restore massage couch and banner at a Whittington Health Charity fundraising event, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-sports-massage-lecture-theatre-whittington-health-charity-event-north-london.jpg',
    alt: 'Carlos Bonvicine of Range and Restore treating a lower leg by the lecture theatre at a Whittington Health Charity fundraising event, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-back-shoulder-massage-whittington-health-charity-event-north-london.jpg',
    alt: 'Carlos Bonvicine of Range and Restore working on a back and shoulder at a Whittington Health Charity fundraising event, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-calf-sports-massage-whittington-health-charity-event-archway-north-london.jpg',
    alt: 'Carlos Bonvicine of Range and Restore giving a calf treatment at a Whittington Health Charity fundraising event, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/carlos-bonvicine-with-visitor-whittington-health-charity-christmas-market-north-london.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a visitor at the Whittington Health Charity Christmas Market, Whittington Hospital, North London',
  },
  {
    src: '/giving-back/range-and-restore-sports-massage-station-whittington-hospital-charity-event-north-london.jpg',
    alt: 'The Range and Restore massage couch and banner set up for a Whittington Health Charity fundraising event at Whittington Hospital, North London',
  },
  {
    src: '/giving-back/range-and-restore-sports-massage-whittington-hospital-charity-event-atrium-north-london.jpg',
    alt: 'A taster sports massage under way at the Range and Restore station during a Whittington Health Charity fundraising event, Whittington Hospital, North London',
  },
]

const phabPhotos: CharityPhoto[] = [
  {
    src: '/giving-back/carlos-bonvicine-phab-meet-and-greet-tcs-london-marathon-range-and-restore.jpg',
    alt: 'Carlos Bonvicine of Range and Restore in Phab kit at the Phab meet and greet point on the TCS London Marathon course',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-massage-couch-phab-recovery-tent-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore beside a made up massage couch in the Phab recovery tent at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/phab-volunteer-massage-team-tcs-london-marathon-recovery-tent-range-and-restore.jpg',
    alt: 'The Phab volunteer massage team, including Carlos Bonvicine of Range and Restore, in the recovery tent at the TCS London Marathon',
  },
  {
    src: '/giving-back/carlos-bonvicine-post-race-back-massage-phab-runner-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore giving a post-race back massage to a Phab runner in the recovery tent at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-post-race-leg-massage-phab-runner-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore working on a Phab runner leg after the race in the Phab recovery tent at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-post-race-shoulder-massage-phab-runner-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore treating a Phab runner shoulder and arm after the race at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/phab-runner-tcs-london-marathon-finisher-medal-post-race-massage-range-and-restore.jpg',
    alt: 'A Phab runner holding their TCS London Marathon finisher medal during post-race sports massage from Range and Restore',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-runner-tcs-london-marathon-post-race-sports-massage.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a Phab runner and their finisher medal in the Phab recovery tent at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-runner-finisher-medal-tcs-london-marathon-recovery-tent.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a Phab runner wearing their TCS London Marathon finisher medal in the recovery tent',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-vest-runner-post-race-recovery-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a runner in a Phab vest after the race at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-runner-post-race-sports-massage-recovery-tent-tcs-london-marathon.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a Phab runner and their finisher medal after post-race sports massage at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-charity-runner-london-marathon-recovery-tent.jpg',
    alt: 'Carlos Bonvicine of Range and Restore with a Phab runner after post-race sports massage in the Phab recovery tent at the TCS London Marathon',
    orientation: 'portrait',
  },
  {
    src: '/giving-back/carlos-bonvicine-phab-kids-runner-tcs-london-marathon-post-race-massage.jpg',
    alt: 'Carlos Bonvicine of Range and Restore in Phab Kids kit with a Phab Kids runner in the recovery tent at the TCS London Marathon',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Giving Back | Whittington Health Charity & Phab',
  description:
    'The charities Range and Restore supports. Donated sports massage treatments and gift vouchers for Whittington Health Charity fundraising, and Carlos volunteering at the London Marathon for Phab.',
  path: '/giving-back',
  image: `${BASE_URL}/giving-back/whittington-health-charity-christmas-market-raffle-voucher-range-and-restore-sports-massage.jpg`,
  author: true,
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Giving Back', path: '/giving-back' }])

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Giving Back, the charities Range and Restore supports',
  description:
    'Range and Restore supports Whittington Health Charity and Phab. Donated sports massage treatments and gift vouchers for fundraising raffles, and Carlos Bonvicine volunteering at Whittington Hospital events and at the TCS London Marathon.',
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

/** FaqAccordion emits its own FAQPage schema, so none is added here. */
const faqs = [
  {
    q: 'Which charities does Range and Restore support?',
    a: 'Two registered charities. Whittington Health Charity, number 1056452, the dedicated charity for Whittington Health NHS Trust in north London. And Phab, number 283931, which brings disabled and non-disabled people together through more than 100 local clubs.',
  },
  {
    q: 'What does Range and Restore give to Whittington Health Charity?',
    a: 'Sports massage treatments and gift vouchers as raffle prizes, plus Carlos working the fundraising days in person. At the Christmas Market we donated a 60 minute sports massage voucher worth £85, and Carlos gave free 10 minute taster massages in the hospital main entrance through the afternoon.',
  },
  {
    q: 'What does Range and Restore do for Phab?',
    a: 'Carlos has volunteered at the TCS London Marathon for three years running, working in the Phab recovery tent and giving post-race sports massage to runners who took part to raise money for Phab.',
  },
  {
    q: 'How can I donate to either charity?',
    a: 'Both take donations directly on their own websites, linked above. Range and Restore does not handle or hold any donations.',
  },
]

const proseLink =
  'text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] font-semibold'

export default function GivingBackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(whittingtonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(phabSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero band ─────────────────────── */}
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">
            Supporting Our Community &middot; Archway &middot; North London
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Giving Back: The Charities We Support
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Two charities. Whittington Health Charity, for the hospital seven minutes up the hill from our door. And Phab, who bring disabled and non-disabled people together through clubs across the country.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* ── Charity blocks ─────────────────────── */}
        <div className="space-y-12 [&>section+section]:border-t [&>section+section]:border-page [&>section+section]:pt-12">

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
              Whittington Health Charity is the dedicated charity for Whittington Health NHS Trust, registered charity number {WHITTINGTON.charityNo}. The trust looks after more than 500,000 people across north London, from the main hospital on Magdala Avenue to over 40 community sites. The charity pays for what core NHS budgets do not stretch to. Equipment, the care environment, staff wellbeing and patient experience. Their site is at{' '}
              <a href={WHITTINGTON.url} target="_blank" rel="noopener noreferrer" className={proseLink}>
                whittingtonhealthcharity.org
              </a>.
            </p>

            <h3 className="text-lg font-bold text-page mt-6 mb-2">What we do</h3>
            <p>
              We donate sports massage treatments and gift vouchers as raffle prizes. At the Christmas Market we put in a 60 minute sports massage voucher worth &pound;85, and Carlos worked the day, giving free 10 minute taster massages in the main entrance to staff coming off shift, patients and visitors.
            </p>
            <p>
              The Whittington is a seven minute walk up the hill from 130 Junction Road, and a lot of our regular clients work there.
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
              Phab is a national charity, registered number {PHAB.charityNo}, and it is almost 70 years old. It runs more than 100 local clubs that bring disabled and non-disabled people together, plus challenge events including the TCS London Marathon. Their site is at{' '}
              <a href={PHAB.url} target="_blank" rel="noopener noreferrer" className={proseLink}>
                phab.org.uk
              </a>.
            </p>

            <h3 className="text-lg font-bold text-page mt-6 mb-2">What we do</h3>
            <p>
              Carlos has volunteered at the TCS London Marathon for three years running, working in the Phab recovery tent and giving post-race sports massage to runners who took it on for Phab. It started while he was still training as a therapist.{' '}
              <Link href="/blog/marathon-sports-massage-archway" className={proseLink}>
                Our marathon recovery guide
              </Link>{' '}
              covers what to do in the days after.
            </p>
          </CharityBlock>

        </div>

        {/* ── FAQs ─────────────────────── */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-page mt-12 mb-4">Giving back FAQs</h2>
          <FaqAccordion items={faqs} />
        </div>

        {/* ── Related ─────────────────────── */}
        <div className="max-w-3xl mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Our Archway community and local partners
            </Link>
            <Link href="/about" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
            <Link href="/blog/marathon-sports-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Marathon massage and recovery guide
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
