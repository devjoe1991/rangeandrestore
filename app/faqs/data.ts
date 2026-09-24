import { BOOKING_URLS, BUSINESS } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export type Faq = {
  q: string
  a: string
  /** Optional link shown under the answer on /faqs. Not part of the schema text. */
  link?: { href: string; label: string }
}

// The home page shows the first three, so keep those general.
export const faqs: Faq[] = [
  {
    q: 'What treatment length should I book for my first session?',
    a: 'For a first visit we recommend 60 or 90 minutes. That gives your therapist time to assess your posture, talk through your needs and carry out targeted hands-on treatment. A 30-minute session suits returning clients and follow-ups but is often too short for a first assessment.',
  },
  {
    q: "What's the difference between Sports Massage and Deep Tissue Massage?",
    a: 'Sports Massage is tailored to performance, recovery and injury prevention, while Deep Tissue Massage focuses on releasing tension and chronic tightness in deeper layers of muscle. Your therapist can blend both in one session depending on your needs.',
  },
  {
    q: 'What issues can Sports Massage and Soft Tissue Therapy help with?',
    a: 'Many clients come to us with back and neck pain, sciatica, plantar fasciitis, postural imbalances, muscle tightness, joint stiffness, running injuries, stress, or recovery from hard training or injury.',
  },
  {
    q: 'How do I book?',
    a: `Book online any time through our booking system, Jane, where you can pick your treatment, therapist and time. You can also call us or message us on WhatsApp using the buttons on any page.`,
    link: { href: BOOKING_URLS.general, label: 'Book online' },
  },
  {
    q: 'How much does a massage cost?',
    a: 'Sports & Deep Tissue Massage is £50 for 30 minutes, £75 for 60 minutes and £110 for 90 minutes. Most of our other massages start at £75 for 60 minutes, and Cupping + Sports Massage starts at £85. See every treatment and price on our services page.',
    link: { href: ROUTES.services.index, label: 'See all treatments and prices' },
  },
  {
    q: 'What is your cancellation policy?',
    a: "We need at least 24 hours' notice to cancel or reschedule. Cancellations with less than 24 hours' notice may be charged at the full session rate, and missed appointments without notice are charged at the full session rate. If you arrive late, your session may be shorter and the full fee still applies.",
    link: { href: ROUTES.termsAndConditions, label: 'Read our terms and conditions' },
  },
  {
    q: 'What should I wear to my massage appointment?',
    a: "Wear loose, comfortable clothing. For lower body treatment, shorts are ideal, and for upper body work, a sports bra or vest is fine. You'll be professionally draped at all times and only the area being treated will be exposed.",
  },
  {
    q: 'Can I book the sauna on its own?',
    a: 'Yes. A private sauna session in our Recovery Suite is £19 for 45 minutes or £29 for 60 minutes. The suite is yours for the session, for up to two people, and the price is per session. It is sauna only: Normatec compression comes only with the Sports Massage + Normatec package.',
    link: { href: ROUTES.recoverySuite.infraredSauna, label: 'About the sauna' },
  },
  {
    q: 'Is Sports Massage supposed to hurt? Will I be sore afterwards?',
    a: "You may feel some discomfort when your therapist works through tight or scarred tissue, but it should always be manageable. Your therapist will check in with you throughout so you stay comfortable. Some soreness afterwards is normal and usually eases within 24 to 48 hours.",
  },
  {
    q: 'Do I need to be an athlete to benefit from Sports Massage?',
    a: "Not at all. Sports Massage can help anyone with muscular discomfort, stiffness from desk work, poor posture or stress. It's just as useful for office workers, parents and retirees as it is for runners.",
  },
  {
    q: 'How often should I get a massage?',
    a: 'It depends on your goals and lifestyle. Some people book weekly during heavy training, while others come monthly for general maintenance. Your therapist will give you a recommendation during your session.',
  },
  {
    q: 'Can massage therapy help with injuries?',
    a: 'Yes. Sports and remedial massage may help with injury rehabilitation by easing muscle tightness, improving mobility and addressing compensatory movement patterns. Your therapist adapts the techniques to your stage of recovery.',
  },
  {
    q: "Can I have a massage if I'm in pain or injured?",
    a: 'In many cases yes, but it depends on the nature and severity of your condition. Please tell us about any pain, injury or medical conditions when you book, so we can check massage is appropriate and adapt the session safely.',
  },
]
