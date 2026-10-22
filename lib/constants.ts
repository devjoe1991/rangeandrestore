export const BOOKING_BASE = 'https://rangeandrestoresportsmassage.janeapp.co.uk'

export const RELIABLE_SCAN_URL = 'https://reliablescanltd.com/'

/**
 * Jane deep links. Jane silently sends an unknown treatment or section link to
 * its front page, so these break without any error when treatments are moved
 * or renumbered in Jane. After changing anything in Jane, run
 * `npm run check:booking` to confirm every link still lands where it should.
 *
 * Treatment links open the first-session booking for that treatment; the
 * service pages show the other lengths, which are on the same Jane list.
 */
const SAUNA_SECTION = `${BOOKING_BASE}/#/infrared-hybrid-sauna`

export const BOOKING_URLS = {
  general: `${BOOKING_BASE}/#/list`,
  advancedClinical: `${BOOKING_BASE}/#/discipline/16/treatment/3`,
  sportsDeepTissue: `${BOOKING_BASE}/#/discipline/16/treatment/8`,
  backNeckMot: `${BOOKING_BASE}/#/discipline/16/treatment/14`,
  relaxation: `${BOOKING_BASE}/#/discipline/16/treatment/20`,
  mld: `${BOOKING_BASE}/#/discipline/16/treatment/27`,
  twoHourRelief: `${BOOKING_BASE}/#/discipline/16/treatment/32`,
  cuppingSportsDeepTissue: `${BOOKING_BASE}/#/discipline/16/treatment/38`,
  mskUltrasoundMassage: `${BOOKING_BASE}/#/discipline/13/treatment/71`,
  pregnancyMassage: `${BOOKING_BASE}/#/discipline/14/treatment/72`,
  reflexology: `${BOOKING_BASE}/#/discipline/15/treatment/49`,
  communityTuesday: `${BOOKING_BASE}/#/community-tuesday-clinic`,
  recoverySuite: SAUNA_SECTION,
  infraredHybridSauna: SAUNA_SECTION,
  // The £85 and £90 massage + sauna packages are not in Jane yet, so this
  // opens the sauna section until they are added there.
  packageSaunaMassage: SAUNA_SECTION,
  packageCompressionMassage: `${BOOKING_BASE}/#/discipline/16/treatment/76`,
  giftCards: `${BOOKING_BASE}/online_gift_cards/new`,
  bundles: `${BOOKING_BASE}/#packages`,
  staffCarlos: `${BOOKING_BASE}/#/staff_member/1`,
  staffDarael: `${BOOKING_BASE}/#/staff_member/2`,
  staffMateja: `${BOOKING_BASE}/#/staff_member/3`,
  staffAlison: `${BOOKING_BASE}/#/staff_member/4`,
} as const

export const BUSINESS = {
  name: 'Range and Restore Sports Massage',
  founder: 'Carlos Bonvicine',
  founderTitle: 'Founder & Lead Therapist',
  address: '130 Junction Road, Archway, London N19 5LB',
  phone: '07890 716154',
  phoneTel: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
} as const

/**
 * WhatsApp click-to-chat. `wa.me` wants the number in full international form
 * with no "+" or spaces, so it's derived from phoneTel rather than duplicated.
 * The message is pre-filled but deliberately left open at the end — the two
 * blank fields are what the client completes before sending.
 */
export const WHATSAPP_NUMBER = BUSINESS.phoneTel.replace(/[^0-9]/g, '')

export const WHATSAPP_MESSAGE =
  "Hi, I'd like to make a booking at Range and Restore. Do you have availability for:\n\nTreatment: \nPreferred date/time: "

// encodeURIComponent leaves apostrophes alone, which is legal in a query but
// renders as a &#x27; entity in the markup. Encoding it keeps the href clean.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
).replace(/'/g, '%27')}`

/**
 * Corporate wellbeing enquiries open a pre-filled email to the clinic inbox.
 * As with WhatsApp, the fields are left blank for the company to complete.
 */
export const CORPORATE_ENQUIRY_SUBJECT = 'Corporate wellbeing enquiry'

export const CORPORATE_ENQUIRY_MESSAGE =
  "Hi Range and Restore,\n\nWe'd like to find out more about corporate wellbeing for our team.\n\nCompany name: \nWorkplace location / postcode: \nNumber of staff: \nOn-site at our workplace, at your clinic, or both: \nHow often / preferred dates: \nBest phone number: \n"

export const CORPORATE_ENQUIRY_URL = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
  CORPORATE_ENQUIRY_SUBJECT,
)}&body=${encodeURIComponent(CORPORATE_ENQUIRY_MESSAGE).replace(/'/g, '%27')}`

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Awards', href: '/awards' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'MSK Scan + Clinical Massage', href: '/services/msk-ultrasound-clinical-massage' },
      { label: 'Back & Neck Pain MOT', href: '/services/back-neck-pain-mot' },
      { label: 'Advanced Clinical Massage', href: '/services/advanced-clinical-massage' },
      { label: 'Sports & Deep Tissue Massage', href: '/services/sports-deep-tissue-massage' },
      { label: 'Cupping + Sports Massage', href: '/services/advanced-cupping-sports-deep-tissue' },
      { label: 'Community Tuesday Clinic', href: '/services/community-tuesday-clinic' },
      { label: '2-Hour Pain Relief', href: '/services/2-hour-pain-relief-massage' },
      { label: 'Manual Lymphatic Drainage', href: '/services/manual-lymphatic-drainage' },
      { label: 'Relaxation Massage', href: '/services/relaxation-restorative-massage' },
      { label: 'Pregnancy Massage', href: '/services/pregnancy-massage' },
      { label: 'Reflexology', href: '/services/reflexology' },
    ],
  },
  {
    label: 'Recovery',
    href: '/recovery-suite',
    children: [
      { label: 'Infrared Hybrid Sauna', href: '/recovery-suite/infrared-sauna' },
      { label: 'Compression Therapy', href: '/recovery-suite/compression-therapy' },
      { label: 'Recovery Packages', href: '/recovery-suite/recovery-packages' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Bundles', href: '/services/massage-bundles' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
] as const

/**
 * NHS and emergency services discount. Clients book and pay the normal price
 * online, show a Blue Light Card or workplace ID at the clinic on the day, and
 * take the £10 back as a refund or as credit against the next session.
 *
 * The amount lives here because it appears in the strip, on the discount page
 * and in the LocalBusiness schema — one edit changes all three. `amount` is a
 * string because schema.org wants prices as strings.
 */
export const NHS_DISCOUNT = {
  amount: '10',
  display: '£10',
} as const
