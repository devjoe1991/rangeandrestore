/**
 * Every internal route on the site, generated from the `app/` directory.
 *
 * Import these instead of writing path strings by hand: a typo becomes a
 * TypeScript error rather than a 404 that only surfaces in production, and
 * renaming a page is a single edit here.
 *
 * `pnpm check:routes` verifies that every value below still has a matching
 * `page.tsx`, and that no `href` in the codebase points at a route that does
 * not exist.
 */
export const ROUTES = {
  about: '/about',
  awards: '/awards',
  clinicalCollaboration: '/clinical-collaboration',
  contact: '/contact',
  faqs: '/faqs',
  gallery: '/gallery',
  giftCards: '/gift-cards',
  givingBack: '/giving-back',
  home: '/',
  press: '/press',
  privacyPolicy: '/privacy-policy',
  saunaRoom: '/sauna-room',
  socials: '/socials',
  team: '/team',
  termsAndConditions: '/terms-and-conditions',

  areasServed: {
    index: '/areas-served',
    archwayN19: '/areas-served/archway-n19',
    crouchEndN8: '/areas-served/crouch-end-n8',
    finsburyParkN4: '/areas-served/finsbury-park-n4',
    highgateN6: '/areas-served/highgate-n6',
    hollowayN7: '/areas-served/holloway-n7',
    islingtonN1: '/areas-served/islington-n1',
    kentishTownNw5: '/areas-served/kentish-town-nw5',
    stroudGreenN4: '/areas-served/stroud-green-n4',
    tufnellParkN7: '/areas-served/tufnell-park-n7',
    upperHollowayN19: '/areas-served/upper-holloway-n19',
  },

  blog: {
    index: '/blog',
    achillesTendinitisRecoveryMassage: '/blog/achilles-tendinitis-recovery-massage',
    deskPosturePainMassage: '/blog/desk-posture-pain-massage',
    frozenShoulderMassageArchway: '/blog/frozen-shoulder-massage-archway',
    hipPainMassageArchway: '/blog/hip-pain-massage-archway',
    hydrationAndMuscleHealth: '/blog/hydration-and-muscle-health',
    lowerBackPainMassageArchway: '/blog/lower-back-pain-massage-archway',
    marathonSportsMassageArchway: '/blog/marathon-sports-massage-archway',
    mindBodyConnectionMassageMentalWellbeingArchway: '/blog/mind-body-connection-massage-mental-wellbeing-archway',
    mskUltrasoundScanMassageArchway: '/blog/msk-ultrasound-scan-massage-archway',
    muscleKnotsTriggerPointMassageArchway: '/blog/muscle-knots-trigger-point-massage-archway',
    neckPainMassageArchway: '/blog/neck-pain-massage-archway',
    normatecFullBodyCompressionRecoveryArchway: '/blog/normatec-full-body-compression-recovery-archway',
    officeWorkerMassageArchway: '/blog/office-worker-massage-archway',
    plantarFasciitisMassageArchway: '/blog/plantar-fasciitis-massage-archway',
    pregnancyMassageBeforeDuringAfterArchway: '/blog/pregnancy-massage-before-during-after-archway',
    sciaticaMassageArchway: '/blog/sciatica-massage-archway',
    sciaticaTreatmentNorthLondon: '/blog/sciatica-treatment-north-london',
    shinSplintsMassageArchway: '/blog/shin-splints-massage-archway',
    sportsMassageArchwayLocalGuide: '/blog/sports-massage-archway-local-guide',
    sportsMassageBenefits: '/blog/sports-massage-benefits',
    sportsMassageCostPrices: '/blog/sports-massage-cost-prices',
    sportsMassageCyclingRecoveryArchway: '/blog/sports-massage-cycling-recovery-archway',
    sportsMassageForRunners: '/blog/sports-massage-for-runners',
    sportsMassageSoftTissueTherapyArchway: '/blog/sports-massage-soft-tissue-therapy-archway',
    sportsRecoveryArchway: '/blog/sports-recovery-archway',
    stressReliefMassageArchway: '/blog/stress-relief-massage-archway',
    tennisElbowMassageArchway: '/blog/tennis-elbow-massage-archway',
    tensionHeadacheMassageArchway: '/blog/tension-headache-massage-archway',
    tightHamstringMassageArchway: '/blog/tight-hamstring-massage-archway',
    trappedNerveMassageArchway: '/blog/trapped-nerve-massage-archway',
  },

  community: {
    index: '/community',
    alaricYoga: '/community/alaric-yoga',
    alisQuiffBarber: '/community/alis-quiff-barber',
    bikeztubeCycles: '/community/bikeztube-cycles',
    glowByD: '/community/glow-by-d',
    ncOsteopathy: '/community/nc-osteopathy',
    privateGpSurgery: '/community/private-gp-surgery',
    reliableScan: '/community/reliable-scan',
    solCentre: '/community/sol-centre',
    theDynamicSpud: '/community/the-dynamic-spud',
  },

  recoverySuite: {
    index: '/recovery-suite',
    compressionTherapy: '/recovery-suite/compression-therapy',
    infraredSauna: '/recovery-suite/infrared-sauna',
    recoveryPackages: '/recovery-suite/recovery-packages',
  },

  services: {
    index: '/services',
    twoHourPainReliefMassage: '/services/2-hour-pain-relief-massage',
    advancedClinicalMassage: '/services/advanced-clinical-massage',
    advancedCuppingSportsDeepTissue: '/services/advanced-cupping-sports-deep-tissue',
    backNeckPainMot: '/services/back-neck-pain-mot',
    communityTuesdayClinic: '/services/community-tuesday-clinic',
    manualLymphaticDrainage: '/services/manual-lymphatic-drainage',
    massageBundles: '/services/massage-bundles',
    mskUltrasoundClinicalMassage: '/services/msk-ultrasound-clinical-massage',
    pregnancyMassage: '/services/pregnancy-massage',
    reflexology: '/services/reflexology',
    relaxationRestorativeMassage: '/services/relaxation-restorative-massage',
    sportsDeepTissueMassage: '/services/sports-deep-tissue-massage',
  },
} as const

type Leaves<T> = T extends string
  ? T
  : { [K in keyof T]: Leaves<T[K]> }[keyof T]

/** Union of every valid internal route string. */
export type Route = Leaves<typeof ROUTES>
