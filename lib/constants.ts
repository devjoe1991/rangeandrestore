export const BOOKING_BASE = 'https://rangeandrestoresportsmassage.janeapp.co.uk'

export const RELIABLE_SCAN_URL = 'https://reliablescanltd.com/'

export const BOOKING_URLS = {
  general: `${BOOKING_BASE}/#/list`,
  advancedClinical: `${BOOKING_BASE}/#/discipline/1/treatment/1`,
  sportsDeepTissue: `${BOOKING_BASE}/#/discipline/2/treatment/7`,
  backNeckMot: `${BOOKING_BASE}/#/discipline/3/treatment/13`,
  relaxation: `${BOOKING_BASE}/#/discipline/4/treatment/19`,
  mld: `${BOOKING_BASE}/#/discipline/5/treatment/2`,
  twoHourRelief: `${BOOKING_BASE}/#/discipline/7/treatment/32`,
  // TODO: replace with Jane discipline/treatment IDs for the new cupping service once available
  cuppingSportsDeepTissue: `${BOOKING_BASE}/#/list`,
  // TODO: replace with Jane discipline/treatment IDs for the Recovery Suite services once Carlos has set them up
  saunaSolo: `${BOOKING_BASE}/#/list`,
  saunaShared: `${BOOKING_BASE}/#/list`,
  compressionLegs: `${BOOKING_BASE}/#/list`,
  compressionFull: `${BOOKING_BASE}/#/list`,
  packageSaunaMassage: `${BOOKING_BASE}/#/list`,
  packageCompressionMassage: `${BOOKING_BASE}/#/list`,
  packageFullRecovery: `${BOOKING_BASE}/#/list`,
  packageSaunaCompression: `${BOOKING_BASE}/#/list`,
  giftCards: `${BOOKING_BASE}/online_gift_cards/new`,
  bundles: `${BOOKING_BASE}/#packages`,
} as const

export const BUSINESS = {
  name: 'Range and Restore Sports Massage',
  therapist: 'Carlos Bonvicine',
  address: '130 Junction Road, Archway, London N19 5LB',
  phone: '07890 716154',
  phoneTel: '+447890716154',
  email: 'carlos@rangeandrestore.co.uk',
} as const

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Back & Neck Pain MOT', href: '/services/back-neck-pain-mot' },
      { label: 'Advanced Clinical Massage', href: '/services/advanced-clinical-massage' },
      { label: 'Sports & Deep Tissue Massage', href: '/services/sports-deep-tissue-massage' },
      { label: 'Cupping + Sports Massage', href: '/services/advanced-cupping-sports-deep-tissue' },
      { label: '2-Hour Pain Relief', href: '/services/2-hour-pain-relief-massage' },
      { label: 'Manual Lymphatic Drainage', href: '/services/manual-lymphatic-drainage' },
      { label: 'Relaxation Massage', href: '/services/relaxation-restorative-massage' },
    ],
  },
  {
    label: 'Recovery',
    href: '/recovery-suite',
    children: [
      { label: 'Infrared Sauna', href: '/recovery-suite/infrared-sauna' },
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
