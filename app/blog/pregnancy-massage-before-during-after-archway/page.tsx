import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'
import { buildMetadata, buildBreadcrumbs, buildFaqSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Before, During & After Pregnancy: Supporting Your Body Through Every Stage',
  description: 'Pregnancy massage in Archway, North London. How soft tissue therapy supports back, hip and pelvic discomfort before, during and after pregnancy — with Level 5 therapists trained in pregnancy massage.',
  path: '/blog/pregnancy-massage-before-during-after-archway',
  author: true,
})

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Before, During & After Pregnancy', path: '/blog/pregnancy-massage-before-during-after-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Before, During & After Pregnancy: Supporting Your Body Through Every Stage of Motherhood',
  description: 'How pregnancy changes the demands on your body, what pregnancy-related back and pelvic girdle pain involves, and how individualised soft tissue therapy at Range and Restore in Archway supports women before, during and after pregnancy.',
  image: 'https://rangeandrestore.co.uk/advanced-clinical-massage-assessment-treatment-room-range-and-restore-archway-north-london.jpg',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Founder & Lead Therapist',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-09-05',
  dateModified: '2026-09-05',
  url: 'https://rangeandrestore.co.uk/blog/pregnancy-massage-before-during-after-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/pregnancy-massage-before-during-after-archway',
  keywords: 'pregnancy massage Archway, pregnancy massage North London, prenatal massage London, postnatal massage Archway, pregnancy back pain, pelvic girdle pain, hip and pelvic discomfort pregnancy, postnatal recovery massage, sports massage Islington, soft tissue therapy N19',
}

// Problem-based FAQs — mirror the question-shaped headings in the article so the
// page is eligible for People Also Ask / FAQ rich results on the queries women
// actually type at each stage. Answers are grounded in the article copy and stay
// carefully inside scope: no fertility claims, no claim that massage treats or
// cures pelvic girdle pain, anxiety or depression. Keep the two in sync.
const faqs = [
  {
    q: 'Is massage safe during pregnancy?',
    a: 'For most healthy pregnancies, massage delivered by a therapist trained in pregnancy massage is considered a reasonable comfort measure, and both NHS guidance and the American College of Obstetricians and Gynecologists list massage among the approaches that may help with comfort and relaxation. Positioning, pressure and technique are adapted to your stage of pregnancy — side-lying with cushion support is commonly used as pregnancy advances. If you have any pregnancy complications, or you are in your first trimester, check with your midwife or GP before booking. Anything new, severe or unexplained should be assessed medically first.',
  },
  {
    q: 'Can massage help pregnancy-related back pain?',
    a: 'Back pain is one of the most common complaints in pregnancy, and research into manual therapy has found improvements in pregnancy-related back and pelvic pain compared with usual care or relaxation alone. The evidence is not strong enough to say massage cures these conditions, and we will not tell you it does. What treatment can realistically do is help manage muscular tension, ease discomfort and support comfortable movement while your body adapts.',
  },
  {
    q: 'What is pelvic girdle pain and can massage help?',
    a: 'Pregnancy-related pelvic girdle pain can affect the lower back, hips, pubic region and thighs. For some women it makes walking, stairs, getting dressed or turning over in bed uncomfortable. Where pelvic girdle pain is suspected, proper assessment matters — usually through your midwife, GP or a women’s health physiotherapist. Soft tissue treatment can sit alongside that care to help with the surrounding muscular tension and comfort, but it should complement medical or physiotherapy input rather than replace it.',
  },
  {
    q: 'When should I start pregnancy massage?',
    a: 'There is no single right moment. Some women book in the second trimester when back and hip discomfort begins to build, others come later when positioning and sleep become the issue, and some were already having regular treatment before they were pregnant and simply continue with it adapted. If you are in your first trimester or have any complications, check with your midwife or GP first.',
  },
  {
    q: 'Can I have a massage after giving birth?',
    a: 'Once it is appropriate for you and with medical clearance where required — particularly after a caesarean, complications or any significant ongoing symptoms — postnatal soft tissue treatment can be a useful part of recovery. The demands change completely after birth: feeding positions, carrying, lifting, holding a baby predominantly on one side, pushing a pram and broken sleep all create new patterns of tension. Treatment is built around what your body is actually dealing with now.',
  },
  {
    q: 'Does massage help with stress and relaxation in pregnancy?',
    a: 'Research has associated massage during pregnancy with reductions in self-reported anxiety and low mood, though the quality of the available evidence varies and massage is not a treatment for anxiety or depression. What we can say plainly is that reducing physical tension, easing discomfort and having an hour of dedicated time to switch off matters to a lot of the women we see. If your mood or anxiety is a concern, please speak to your midwife, GP or health visitor.',
  },
  {
    q: 'Who provides pregnancy massage at Range and Restore?',
    a: 'Alison Isherwood and Mateja Bracko-Mounti, both BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists who are also trained in pregnancy massage. That combination means treatment is not a generic relaxing routine — it draws on remedial soft tissue knowledge, adapted appropriately to your stage of pregnancy, symptoms and comfort.',
  },
  {
    q: 'How much is pregnancy massage in Archway?',
    a: 'A 60-minute pregnancy massage at Range and Restore, 130 Junction Road, Archway N19 5LB, is £85 for both first and follow-up appointments. Every session starts with a consultation so treatment is tailored to your stage and how you are feeling that day.',
  },
]

const faqSchema = buildFaqSchema(faqs)

export default function PregnancyMassageStagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#0f767a] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub · Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Before, During &amp; After Pregnancy: Supporting Your Body Through Every Stage of Motherhood
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-09-05">5 September 2026</time>
            <span>·</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Pregnancy changes your body — but your need for care does not begin at conception or end after birth.
          </p>

          <p>
            Most of the attention, understandably, goes to the middle bit. There is a whole industry built around the nine months, and almost nothing built around the woman who had tight hips and a grumbling lower back for two years beforehand, or the woman who is now six weeks postnatal, feeding at 3am in a position no physiotherapist would ever recommend, and has not thought about her own body since the day she went into labour.
          </p>

          <p>
            This piece is about all three stages, and about what soft tissue therapy can honestly offer at each one.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What actually changes, and why it hurts</h2>

          <p>
            Pregnancy places progressively different demands on the body. Body weight increases, posture adapts around it, and the centre of gravity shifts forward. Ligaments become more flexible. The growing uterus changes the load through the abdomen, pelvis and lower back. None of this is a fault or a failure — it is the body doing exactly what it is supposed to do — but the muscles have to work differently to manage it, and that is where the discomfort tends to come from.
          </p>

          <p>
            Back pain is particularly common during pregnancy. Both <a href="https://www.nhs.uk/pregnancy/" target="_blank" rel="noopener noreferrer" className="text-[#0f767a] underline decoration-[#0f767a]/40 hover:decoration-[#0f767a] transition-colors font-semibold">NHS guidance</a> and the American College of Obstetricians and Gynecologists list massage among the approaches that may help with comfort and relaxation. It is not presented as a cure, and neither will we present it that way.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Pelvic girdle pain</h3>
          <p>
            Pregnancy-related pelvic girdle pain deserves its own mention because it is common, it is often dismissed, and it can be genuinely miserable. It can affect the lower back, hips, pubic region and thighs. For some women it makes walking, climbing stairs, getting dressed or turning over in bed uncomfortable — the ordinary things nobody expects to have to think about.
          </p>

          <p>
            Where pelvic girdle pain is suspected, appropriate assessment is important. That usually means your midwife, GP or a women&rsquo;s health physiotherapist. Massage can sit alongside that care and help with the surrounding muscular tension and comfort, but it should complement medical or physiotherapy input, not replace it. If you come to us with that picture, we will say so.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What the evidence actually supports</h2>

          <p>
            Research into manual therapy during pregnancy has found improvements in pregnancy-related back and pelvic pain compared with usual care or relaxation alone. That is worth knowing. It is also worth being straight about the limits: the evidence is not strong enough to claim massage will cure these conditions, and anyone telling you otherwise is selling something.
          </p>

          <p>
            That honest position happens to describe exactly what we do anyway. The realistic aims are helping manage muscular tension, easing discomfort, and supporting comfortable movement while your body adapts — not fixing pregnancy, which does not need fixing.
          </p>

          <p>
            There is a wellbeing side too. Research has associated massage during pregnancy with reductions in self-reported anxiety and low mood, although the quality of the available evidence varies, and massage is not a treatment for anxiety or depression. What we can say without hedging is that lowering physical tension and having a proper hour to switch off, with someone whose only job for that hour is you, matters to a great many of the women who come in.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Before pregnancy: the body you are starting from</h2>

          <p>
            We are not going to make claims about fertility, and we would be sceptical of anyone who does. What we will say is this: pregnancy asks something new of a body that already has a history.
          </p>

          <p>
            Most women arrive at pregnancy with something already going on — tight hips from years at a desk, a lower back that grumbles after a long week, restricted movement through the thoracic spine, muscular tension built up from work, running, the gym, lifting or just ordinary life in London. Pregnancy does not clear that slate. It adds to it.
          </p>

          <p>
            This is where being treated by a Level 5 Sports Massage and Soft Tissue Remedial Therapist earns its keep, because treatment can be built around your movement, your muscular tension, your lifestyle and your goals rather than waiting for something to become painful enough to force the issue. Whether that means <Link href="/services/sports-deep-tissue-massage" className="text-[#0f767a] hover:text-page font-medium">sports and deep tissue massage</Link>, work on <Link href="/blog/hip-pain-massage-archway" className="text-[#0f767a] hover:text-page font-medium">tight hips</Link> or attention to a <Link href="/blog/lower-back-pain-massage-archway" className="text-[#0f767a] hover:text-page font-medium">lower back</Link> that has been complaining for years, it is the same principle: assess first, then treat what is actually there.
          </p>

          <p>
            Pregnancy may ask something new of your body, but looking after it does not have to start on day one of pregnancy.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">During pregnancy: treatment that changes as you do</h2>

          <p>
            As pregnancy progresses, the physical demands change — and they keep changing. The lower back, hips, glutes and legs take on additional loading. The upper back, neck and shoulders often pick up tension of their own, particularly later on and particularly once sleep gets difficult. Swollen, heavy legs are common. Sleep positions that worked at 14 weeks stop working entirely.
          </p>

          <p>
            Which is the whole point: treatment should not be identical at 14 weeks and at 34 weeks. If it is, it is a routine rather than a treatment.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">Who you will see</h3>
          <p>
            At Range and Restore, <Link href="/team#mateja-bracko-mounti" className="text-[#0f767a] hover:text-page font-medium">Mateja Bracko-Mounti</Link> and <Link href="/team#alison-isherwood" className="text-[#0f767a] hover:text-page font-medium">Alison Isherwood</Link> are BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapists who are also trained in pregnancy massage. That combination is the part worth paying attention to.
          </p>

          <p>
            It means you are not simply booking a generic relaxing massage with the word &ldquo;pregnancy&rdquo; in front of it. It means a therapist who understands soft tissue, movement and muscular loading, applying that knowledge with pregnancy-specific training — so treatment is individualised and appropriately adapted to your stage of pregnancy, your symptoms, your comfort and what you actually want out of the session.
          </p>

          <h3 className="text-xl font-bold text-page mt-6 mb-2">How treatment is adapted</h3>
          <p>
            Positioning, pressure and technique all shift as pregnancy advances. Side-lying positioning with cushion support is commonly recommended as pregnancy progresses, with semi-reclined positioning where appropriate. Pressure is adjusted to your preference, not to a house standard, and your therapist checks in as the session goes on rather than assuming.
          </p>

          <p>Depending on what the consultation and your symptoms point to, treatment may help with:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Muscular tension and general aches</li>
            <li>Lower-back, hip and glute tension</li>
            <li>Upper-back, neck and shoulder tension</li>
            <li>Maintaining comfortable movement as loading changes</li>
            <li>Relaxation and reducing physical stress</li>
            <li>Feeling physically supported while your body changes week to week</li>
          </ul>

          <p>
            Every pregnancy is different, so every session starts with consultation and appropriate screening — your stage, how you have been, and anything your midwife or GP has flagged. Where something falls outside our scope, we refer back to your midwife, GP, obstetric team or physiotherapist. That is not a caveat bolted on at the end; it is part of doing the job properly. Our <Link href="/services/pregnancy-massage" className="text-[#0f767a] hover:text-page font-medium">pregnancy massage service page</Link> covers the practical detail, including the 60-minute session at £85.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">After pregnancy: looking after Mum, not just the baby</h2>

          <p>
            Once the baby arrives, attention shifts — completely and understandably — to the newborn. Every appointment, every conversation, every visitor is about the baby.
          </p>

          <p>
            Meanwhile Mum&rsquo;s body has just been through pregnancy and birth, and then walks straight into another physically demanding period with no transition at all.
          </p>

          <p>
            Feeding positions held for forty minutes at a time. Carrying. Lifting a car seat in and out. Picking a baby up thirty times a day. Holding them predominantly on one side, because that is the side that works. Pushing a pram up Junction Road. Interrupted sleep for months. Sitting hunched at 3am in the one position in which the baby will actually settle.
          </p>

          <p>
            All of that builds completely new patterns of muscular tension — usually through the upper back, neck, shoulders and one-sided through the hips and lower back. It is not a pregnancy problem any more. It is a different problem, and it deserves treating as one.
          </p>

          <p>
            Once it is appropriate to receive treatment following birth — and with medical clearance where required, particularly after surgery, complications or significant ongoing symptoms — the focus can move gradually towards helping you feel comfortable in your own body again.
          </p>

          <p>
            And then the goal changes again, because it should. Maybe you want to manage longer walks without your back tightening. Then the gym. Then running. Then sport, or the thing you did before that you have not done since. Or maybe you simply want to pick your baby up without your shoulders and back protesting every single time. There is no single definition of recovery here, and we are not going to impose one on you.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">The Range and Restore difference</h2>

          <p>
            Plenty of places offer pregnancy massage as a spa treatment. That has its place, and if a relaxing hour is genuinely all you want, there is nothing wrong with it.
          </p>

          <p>
            What we do is different in one specific way: your treatment changes as your body changes.
          </p>

          <p>
            One session might be mostly lower-back and hip tension. The next might be almost entirely upper back and shoulders. Later in pregnancy, positioning and techniques may need adapting again. After birth, the demands are different from anything that came before, and treatment changes with them. Rather than a one-off pregnancy massage, this can be ongoing, individualised soft tissue care through each stage.
          </p>

          <p>
            And because Mateja and Alison are Level 5 Sports Massage and Soft Tissue Remedial Therapists as well as being trained in pregnancy massage, they can keep working with you well beyond pregnancy — into your return to normal activity, work, exercise and sport. You do not have to start again with a new therapist who does not know your body.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When massage is not the right first step</h2>

          <p>
            Good remedial therapy is not about trying to treat everything. A large part of it is recognising when somebody needs to be somewhere else.
          </p>

          <p>
            Please speak to your midwife, GP, obstetric team or maternity triage before booking — or instead of booking — if you have any of the following:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>New, severe or unexplained pain</li>
            <li>Any bleeding</li>
            <li>Fever, or feeling generally unwell</li>
            <li>Symptoms that could indicate a blood clot, such as pain, swelling, redness or heat in one leg, or breathlessness and chest pain</li>
            <li>Significant pelvic pain, or pelvic girdle pain that has not been assessed</li>
            <li>Reduced fetal movements, or any pregnancy complication you have been told to monitor</li>
            <li>Anything at all your midwife or GP has asked you to keep an eye on</li>
          </ul>

          <p>
            If you are in your first trimester, or you have any pregnancy complications, check with your midwife or GP before booking. If you are unsure whether treatment is right for you at this stage, <Link href="/contact" className="text-[#0f767a] hover:text-page font-medium">get in touch</Link> and we will give you a straight answer, including if that answer is not yet.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Pregnancy and postnatal massage in Archway, Islington and North London</h2>

          <p>
            Range and Restore is at 130 Junction Road, Archway, London N19 5LB — two minutes from <Link href="/areas-served/archway-n19" className="text-[#0f767a] hover:text-page font-medium">Archway</Link> tube on the Northern Line, with step-free access from the station and buses from across North London. Clients come to us from <Link href="/areas-served/islington-n1" className="text-[#0f767a] hover:text-page font-medium">Islington</Link>, <Link href="/areas-served/holloway-n7" className="text-[#0f767a] hover:text-page font-medium">Holloway</Link>, <Link href="/areas-served/tufnell-park-n7" className="text-[#0f767a] hover:text-page font-medium">Tufnell Park</Link>, <Link href="/areas-served/highgate-n6" className="text-[#0f767a] hover:text-page font-medium">Highgate</Link>, <Link href="/areas-served/crouch-end-n8" className="text-[#0f767a] hover:text-page font-medium">Crouch End</Link>, <Link href="/areas-served/finsbury-park-n4" className="text-[#0f767a] hover:text-page font-medium">Finsbury Park</Link> and <Link href="/areas-served/kentish-town-nw5" className="text-[#0f767a] hover:text-page font-medium">Kentish Town</Link> — N19, N7, N6, N4, N8, N1, NW1 and NW5.
          </p>

          <p>
            If you have been searching for pregnancy massage in North London, prenatal massage near you, or postnatal massage in Archway or Islington, this is the kind of care we are set up to provide: assessment-led, adapted to your stage, and delivered by therapists who will tell you honestly when something needs your midwife or GP instead.
          </p>
        </div>

        {/* Problem-based FAQ — visible copy that matches the FAQPage schema above */}
        <section aria-labelledby="faq-heading" className="mt-12 border-t border-page pt-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-page mb-6">
            Pregnancy and postnatal massage: common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-page mb-2">{f.q}</h3>
                <p className="text-page-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">Book time for you, at whatever stage you are at</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Whether you are preparing for pregnancy, in the middle of it, or months into looking after everyone but yourself, book a pregnancy massage at Range and Restore. Every session starts with a consultation, treatment is adapted to your stage and symptoms, and your therapist will tell you honestly if something needs your midwife or GP first. 60 minutes, £85, at 130 Junction Road, Archway N19.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:flex-wrap">
            <a
              href={BOOKING_URLS.pregnancyMassage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a2330] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3d3a] transition-colors min-h-[44px]"
            >
              Book Pregnancy Massage
            </a>
            <a
              href={BOOKING_URLS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#1a2330] font-semibold px-6 py-3 rounded-lg border-2 border-[#1a2330] hover:bg-[#1a2330] hover:text-white transition-colors min-h-[44px]"
            >
              Buy a Gift Card
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[#1a2330] font-semibold underline min-h-[44px] sm:ml-2"
            >
              Or ask a question first
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/services/pregnancy-massage" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Pregnancy Massage in Archway, North London
            </Link>
            <Link href="/blog/lower-back-pain-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Lower Back Pain: How Massage Can Help
            </Link>
            <Link href="/blog/hip-pain-massage-archway" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Hip Pain and Tight Hips: How Massage Helps
            </Link>
            <Link href="/team" className="text-[#0f767a] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Meet the Range and Restore team
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#0f767a] font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            ← Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
