import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbs, BASE_URL } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'MODE Personal Training and Range and Restore | Strength Training and Recovery in North London',
  description: 'Range and Restore in Archway partners with MODE Personal Training in East Finchley, Crouch Hill and Archway. Strength training, injury prevention and sports massage recovery, with referrals both ways.',
  path: '/community/mode-personal-training',
})

const PARTNER_URL = 'https://www.modepersonaltraining.com/'

const breadcrumbs = buildBreadcrumbs([
  { name: 'Community', path: '/community' },
  { name: 'MODE Personal Training', path: '/community/mode-personal-training' },
])

const partnerOrgSchema = {
  '@context': 'https://schema.org',
  '@type': ['SportsActivityLocation', 'ExerciseGym'],
  name: 'MODE Personal Training',
  url: PARTNER_URL,
  description: 'MODE are three independent personal training studios in East Finchley, Crouch Hill and Archway, North London, offering one-to-one personal training, weightlifting, boxing, small classes, yoga, physio and personal nutrition.',
  areaServed: [
    { '@type': 'Place', name: 'East Finchley, London N2' },
    { '@type': 'Place', name: 'Crouch Hill, London N4' },
    { '@type': 'Place', name: 'Archway, London N19' },
    { '@type': 'Place', name: 'North London' },
  ],
  memberOf: { '@id': `${BASE_URL}/#business` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Range and Restore work with personal training clients?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Range and Restore at 130 Junction Road, Archway N19 regularly supports personal training and strength clients, including members of MODE Personal Training in East Finchley, Crouch Hill and Archway. Treatment focuses on recovery between sessions, injury prevention, mobility, muscular balance and resolving the tightness and niggles that build up through consistent training.' },
    },
    {
      '@type': 'Question',
      name: 'How do MODE clients book a sports massage with Range and Restore?',
      acceptedAnswer: { '@type': 'Answer', text: 'MODE clients can book directly with Range and Restore at 130 Junction Road, Archway N19, three minutes from Archway tube. Mention MODE when you book to claim the introductory partner offer. Same-week appointments are usually available, so you can fit recovery around your training schedule.' },
    },
    {
      '@type': 'Question',
      name: 'Where are MODE Personal Training and Range and Restore based?',
      acceptedAnswer: { '@type': 'Answer', text: 'MODE Personal Training runs three independent studios in East Finchley (N2), Crouch Hill (N4) and Archway (N19). Range and Restore is at 130 Junction Road, Archway, London N19 5LB, three minutes from Archway tube on the Northern Line, serving N19, N7, N6, N8, N2, N4, NW5 and the wider North London area.' },
    },
  ],
}

export default function ModePersonalTrainingPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerOrgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Local Partner &middot; North London &middot; Personal Training and Strength</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            MODE Personal Training and Range and Restore
          </h1>
          <p className="text-lg text-page-muted font-medium">
            Strength training, boxing and tailored coaching with MODE across East Finchley, Crouch Hill and Archway, sports and soft tissue remedial therapy with Range and Restore at 130 Junction Road, N19. Two independents looking after the same North London community, one building strength and performance, the other looking after recovery, mobility and long-term health.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="rounded-[20px] overflow-hidden border-2 border-[#1a3d3a] bg-black mb-10 flex items-center justify-center aspect-[16/9] p-8">
          <span className="text-white text-center font-black uppercase tracking-[0.2em] leading-tight text-3xl sm:text-4xl lg:text-5xl">
            MODE<br />Personal Training
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">An introduction to the partnership</h2>
          <p>
            Range and Restore Sports Massage in Archway and MODE Personal Training have come together around a simple, shared belief: people get fitter, stronger and healthier when training and recovery work hand in hand. MODE are three independent personal training studios in East Finchley, Crouch Hill and Archway, where you come as you are and do your best. Range and Restore is a community-focused sports massage and soft tissue clinic at 130 Junction Road, N19, built shoulder to shoulder with the other independents around it.
          </p>
          <p>
            This is a genuine, mutually beneficial partnership built on referrals both ways. MODE coaches help clients build strength, capacity and performance through tailored, in-person programmes. Range and Restore keeps those same clients moving well, recovering properly and staying clear of the niggles and overuse injuries that derail consistent training. Two North London independents, one community, looking after the same people from two complementary angles.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">About MODE Personal Training</h2>
          <p>
            MODE are three independent personal training studios in East Finchley, Crouch Hill and Archway, where you come as you are and do your best. Their trainers offer tailored, in-person programmes built around each client&apos;s goals, with modern facilities and a community-led approach to fitness. Their offering spans one-to-one and small group classes, personal trainers, weightlifting, boxing, physio, personal nutrition, yoga and monthly guest passes, and they&apos;re always expanding their services to meet the needs of their community.
          </p>
          <p>
            With a studio in Archway, MODE sits right alongside Range and Restore in the same corner of North London, which makes joining up training and recovery genuinely easy for clients who live and train locally.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Benefits for MODE clients</h2>
          <p>
            Strength training, boxing and weightlifting place real, repeated demand on the body. MODE clients training hard benefit from having trusted hands-on recovery and injury support a few minutes away:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Faster recovery between sessions:</strong> assessment-led <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">sports and deep tissue massage</Link> to ease post-training tightness and keep you training consistently.</li>
            <li><strong className="text-page">Injury prevention:</strong> regular soft tissue work to address muscular imbalance, restricted mobility and the overuse patterns that lead to strains and flare-ups.</li>
            <li><strong className="text-page">Targeted help when something flares:</strong> the <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium">Back and Neck Pain MOT</Link>, <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium">advanced clinical massage</Link> and <Link href="/services/2-hour-pain-relief-massage" className="text-[#2ab4b8] hover:text-page font-medium">2-hour pain-relief sessions</Link> for tight shoulders, stiff hips, a cranky lower back or a recovering strain.</li>
            <li><strong className="text-page">Deeper recovery:</strong> the <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium">recovery suite</Link> with infrared and traditional sauna and Hyperice Normatec compression, to extend recovery on rest days.</li>
            <li><strong className="text-page">An introductory partner discount</strong> on your first session (see below).</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Benefits for Range and Restore clients</h2>
          <p>
            Plenty of Range and Restore clients reach a point where the best next step isn&apos;t another treatment, it&apos;s building strength, capacity and resilience so problems stop coming back. That&apos;s exactly where MODE comes in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">Structured, tailored coaching:</strong> in-person personal training programmes built around your goals, whether that&apos;s getting stronger, returning to sport or simply moving better for life.</li>
            <li><strong className="text-page">Build on the work in the treatment room:</strong> targeted strength and conditioning to support the mobility and recovery gains made at Range and Restore, so they hold long term.</li>
            <li><strong className="text-page">Variety and progression:</strong> weightlifting, boxing, small classes, yoga and personal nutrition, all under expert coaching.</li>
            <li><strong className="text-page">Local and convenient:</strong> studios in Archway, Crouch Hill and East Finchley, close to home for most of our North London clients.</li>
            <li><strong className="text-page">A warm introduction</strong> to a coach we trust, rather than starting from scratch.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How the referral partnership works</h2>
          <p>
            This partnership runs on honest referrals both ways, with no commissions and no pressure, just two businesses sending people to a service they genuinely rate.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-page-muted">
            <li><strong className="text-page">MODE to Range and Restore:</strong> when a coach spots a client who&apos;d benefit from soft tissue therapy, recovery work or help with an injury or niggle, they point them to Range and Restore. Clients mention MODE when they book to claim the partner offer.</li>
            <li><strong className="text-page">Range and Restore to MODE:</strong> when a client is ready to build strength, prevent recurring problems or train towards a goal, we introduce them to a MODE coach near them.</li>
            <li><strong className="text-page">Joined-up care:</strong> with a client&apos;s consent, the coach and therapist can stay loosely in the loop, so training load and recovery are pulling in the same direction rather than against each other.</li>
          </ul>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Introductory offer</h2>
          <p>
            To launch the partnership, MODE clients get <strong className="text-page">15% off their first session at Range and Restore</strong>, whether that&apos;s a sports massage, an injury-focused treatment or the recovery suite. Just mention MODE when you book. Range and Restore clients heading to MODE get a warm introduction and an <strong className="text-page">introductory personal training offer</strong> on their first block of sessions, arranged through us. Ask us for details when you&apos;re in.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">How we support recovery, performance and long-term health</h2>
          <p>
            Training and recovery aren&apos;t separate things, they&apos;re two halves of the same process. MODE builds the strength, capacity and skill that move a client forward. Range and Restore manages the load that comes with it, keeping tissue healthy, mobility open and small problems from becoming big ones. Together that means clients can train harder and more consistently, recover faster, prevent injuries before they happen and stay active and pain-free for the long run, not just for a few weeks.
          </p>
          <p>
            For anyone serious about their fitness in North London, having a trusted coach and a trusted therapist who talk the same language is a genuine advantage. It&apos;s the difference between chasing short-term results and building real, lasting physical health.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Two North London businesses, one community</h2>
          <p>
            MODE&apos;s studios in <strong>East Finchley (N2)</strong>, <strong>Crouch Hill (N4)</strong> and <strong>Archway (N19)</strong> sit right in the heart of the same North London community Range and Restore serves. The Range and Restore clinic at <Link href="/areas-served/archway-n19" className="text-[#2ab4b8] hover:text-page font-medium">130 Junction Road, Archway, London N19 5LB</Link> is three minutes&apos; walk from Archway tube (Northern Line), with clients regularly travelling in from <strong>Archway (N19)</strong>, <strong>Upper Holloway (N19)</strong>, <Link href="/areas-served/tufnell-park-n7" className="text-[#2ab4b8] hover:text-page font-medium"><strong>Tufnell Park (N7)</strong></Link>, <strong>Crouch End (N8)</strong>, <strong>Hornsey (N8)</strong>, <strong>Highgate (N6)</strong>, <strong>East Finchley (N2)</strong>, <strong>Finsbury Park (N4)</strong>, <strong>Stroud Green (N4)</strong>, <strong>Kentish Town (NW5)</strong> and the wider <Link href="/areas-served" className="text-[#2ab4b8] hover:text-page font-medium">North London service area</Link>. For anyone training at MODE Archway, recovery is a few minutes&apos; walk away, so it&apos;s easy to combine a strength session with a sports massage or recovery suite visit on the same day.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-3">Train with MODE, recover with Range and Restore</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Training at MODE in East Finchley, Crouch Hill or Archway? Range and Restore at 130 Junction Road, Archway N19 offers assessment-led sports massage, deep tissue, injury support and a full recovery suite. Mention MODE for 15% off your first session. Same-week appointments, three minutes from Archway tube. New to training? Visit MODE to book in with a coach near you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a3d3a] text-white hover:bg-[#2a7a3a] transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline"
            >
              Book Range and Restore <span aria-hidden="true">→</span>
            </Link>
            <a
              href={PARTNER_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-[#1a3d3a] hover:bg-[#1a3d3a] hover:text-white transition-colors font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full no-underline border-2 border-[#1a3d3a]"
            >
              Visit modepersonaltraining.com <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/community" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &larr; Back to Our Archway Community
            </Link>
            <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports and deep tissue remedial therapy
            </Link>
            <Link href="/services/back-neck-pain-mot" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Back and Neck Pain MOT
            </Link>
            <Link href="/services/2-hour-pain-relief-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; 2-hour pain-relief session
            </Link>
            <Link href="/recovery-suite" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Recovery suite: sauna and compression
            </Link>
            <Link href="/areas-served/archway-n19" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Archway N19
            </Link>
            <Link href="/areas-served/tufnell-park-n7" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports massage in Tufnell Park N7
            </Link>
            <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; About Carlos and Range and Restore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
