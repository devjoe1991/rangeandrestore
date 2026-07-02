export const BOOKING_BASE = 'https://rangeandrestoresportsmassage.janeapp.co.uk'

export const RELIABLE_SCAN_URL = 'https://reliablescanltd.com/'

export const BOOKING_URLS = {
  general: `${BOOKING_BASE}/#/list`,
  advancedClinical: `${BOOKING_BASE}/#/discipline/1/treatment/1`,
  sportsDeepTissue: `${BOOKING_BASE}/#/discipline/2/treatment/7`,
  backNeckMot: `${BOOKING_BASE}/#/discipline/3/treatment/13`,
  relaxation: `${BOOKING_BASE}/#/discipline/4/treatment/19`,
  mld: `${BOOKING_BASE}/#/discipline/5/treatment/25`,
  twoHourRelief: `${BOOKING_BASE}/#/discipline/7/treatment/32`,
  cuppingSportsDeepTissue: `${BOOKING_BASE}/#/discipline/9/treatment/36`,
  communityTuesday: `${BOOKING_BASE}/#/community-tuesday-clinic`,
  recoverySuite: `${BOOKING_BASE}/#/recovery-suite`,
  saunaSolo: `${BOOKING_BASE}/#/recovery-suite`,
  saunaShared: `${BOOKING_BASE}/#/recovery-suite`,
  compressionLegs: `${BOOKING_BASE}/#/recovery-suite`,
  compressionFull: `${BOOKING_BASE}/#/recovery-suite`,
  packageSaunaMassage: `${BOOKING_BASE}/#/recovery-suite`,
  packageCompressionMassage: `${BOOKING_BASE}/#/recovery-suite`,
  packageFullRecovery: `${BOOKING_BASE}/#/recovery-suite`,
  packageSaunaCompression: `${BOOKING_BASE}/#/recovery-suite`,
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
      { label: 'Community Tuesday Clinic', href: '/services/community-tuesday-clinic' },
      { label: '2-Hour Pain Relief', href: '/services/2-hour-pain-relief-massage' },
      { label: 'Manual Lymphatic Drainage', href: '/services/manual-lymphatic-drainage' },
      { label: 'Relaxation Massage', href: '/services/relaxation-restorative-massage' },
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
