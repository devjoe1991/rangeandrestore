import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, personSchema, daraelPersonSchema, matejaPersonSchema, alisonPersonSchema, buildBreadcrumbs } from '@/lib/seo'
import { RELIABLE_SCAN_URL } from '@/lib/constants'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = buildMetadata({
  title: 'Meet the Team | Sports Massage Therapists Archway',
  description: 'Meet the Range and Restore team — founder Carlos Bonvicine, Alison Isherwood, Darael Beckles and Mateja Bracko-Mounti, sports massage and soft tissue therapists in Archway, North London.',
  path: '/team',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Meet the Team', path: '/team' }])

const CARLOS_PHOTO = '/carlos-bonvicine-founder-lead-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg'
const DARAEL_PHOTO = '/darael-beckles-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg'
const MATEJA_PHOTO = '/mateja-bracko-mounti-sports-massage-soft-tissue-remedial-therapist-range-and-restore-archway-north-london.jpeg'
const ALISON_PHOTO = '/alison-isherwood-sports-massage-soft-tissue-therapist-range-and-restore-archway-north-london.jpeg'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0f767a' }} aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
)

const introCards = [
  { name: 'Carlos Bonvicine', title: 'Founder & Lead Therapist', creds: 'BTEC Level 5 · MLD & Cupping Therapy', img: CARLOS_PHOTO, alt: 'Carlos Bonvicine, founder and lead therapist at Range and Restore, Archway', anchor: '#carlos-bonvicine' },
  { name: 'Alison Isherwood', title: 'Sports Massage & Soft Tissue Remedial Therapist', creds: 'LSSM Graduate · BTEC Level 5', img: ALISON_PHOTO, alt: 'Alison Isherwood, sports massage and soft tissue therapist at Range and Restore, Archway, North London', anchor: '#alison-isherwood' },
  { name: 'Darael Beckles', title: 'Sports Massage & Soft Tissue Remedial Therapist', creds: 'NLSSM Graduate · SMRT, MSMA', img: DARAEL_PHOTO, alt: 'Darael Beckles, sports massage and soft tissue therapist at Range and Restore, Archway, North London', anchor: '#darael-beckles' },
  { name: 'Mateja Bracko-Mounti', title: 'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapist', creds: "LSSM · SMRT, MSMA · 18+ Years' Experience", img: MATEJA_PHOTO, alt: 'Mateja Bracko-Mounti, sports massage and soft tissue therapist at Range and Restore, Archway, North London', anchor: '#mateja-bracko-mounti' },
]

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(alisonPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(daraelPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(matejaPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="bg-page-sage section-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Meet the Team – Sports Massage &amp; Soft Tissue Therapists in Archway</h1>
          <p className="mt-4 text-xl text-page-muted">Assessment-led sports massage and soft tissue therapy from our experienced team, serving Islington, Tufnell Park, Finsbury Park and North London.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Rated 5 Stars on Google
            </span>
            <span className="inline-flex items-center gap-1.5 bg-badge-teal text-page font-semibold px-3 py-1.5 rounded-full border border-brand-teal/30">Sports Massage &amp; Soft Tissue Therapy</span>
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">Archway, N19</span>
          </div>
        </div>
      </div>

      {/* Team intro cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {introCards.map((m) => (
            <a key={m.anchor} href={m.anchor} className="group bg-card rounded-2xl overflow-hidden border-2 border-page card-lift block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={m.img}
                  alt={m.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                />
              </div>
              <div className="p-5">
                <p className="text-xl font-black text-page">{m.name}</p>
                <p className="text-brand-teal text-xs font-bold mt-1">{m.title}</p>
                <p className="text-page-muted text-xs font-medium mt-1">{m.creds}</p>
                <p className="text-page font-bold text-sm mt-3">Read profile ↓</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Carlos full profile */}
      <section id="carlos-bonvicine" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
              <Image
                src={CARLOS_PHOTO}
                alt="Carlos Bonvicine, founder and lead therapist at Range and Restore, Archway, North London"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-page mb-2">Carlos Bonvicine</h2>
            <p className="text-brand-teal font-semibold mb-1">Founder &amp; Lead Therapist</p>
            <p className="text-page-muted font-medium mb-6 text-sm">BTEC Level 5 Sports Massage &amp; Soft Tissue Remedial Therapist · Certified MLD &amp; Cupping Therapy</p>
            <div className="space-y-4 text-page-muted text-lg">
              <p>
                Carlos is the Founder and Lead Therapist of Range and Restore Sports Massage. He is a BTEC Level 5 qualified Sports Massage and Soft Tissue Remedial Therapist, qualified in Manual Lymphatic Drainage (MLD) Therapy and Cupping Therapy.
              </p>
              <p>
                He works with clients dealing with chronic pain, acute injury, post-surgery recovery, stress, and everything in between. Every session is shaped around the individual — never a generic treatment protocol — beginning with a full assessment of posture, movement, and history before any hands-on work begins.
              </p>
              <p>
                His approach balances the clinical and the performance-focused. Whether a client needs deep structural soft tissue work, sports recovery therapy, lymphatic support, or cupping treatment, Carlos selects the right techniques for where they are right now — and explains everything along the way.
              </p>
              <p>
                Carlos founded Range and Restore to deliver assessment-led treatment in a professional healthcare setting at 130 Junction Road, Archway, alongside{' '}
                <a
                  href={RELIABLE_SCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cite"
                >
                  Reliable Scan
                </a>
                {' '}— a private diagnostic ultrasound clinic. He continues to lead the clinical side of the practice as the team grows.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist',
                'Fully Insured',
                'Certified Full Body Manual Lymphatic Drainage (MLD) Practitioner',
                'Certified Cupping Therapy Practitioner',
              ].map((qual) => (
                <div key={qual} className="flex items-start gap-2 text-page">
                  <CheckIcon />
                  <span className="font-medium text-sm leading-snug">{qual}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookingButton label="Book Your Session with Carlos" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-page-sage rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-page mb-4">How Carlos Works</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Full Assessment First', desc: 'Every session begins with a posture and movement assessment to identify the root cause of your symptoms.' },
                  { title: 'Tailored Treatment', desc: 'No two sessions are the same. Techniques are selected specifically for your needs and stage of recovery.' },
                  { title: 'Clear Communication', desc: 'Pressure and techniques are adjusted throughout the session based on your feedback and comfort.' },
                  { title: 'Aftercare Advice', desc: 'You leave with practical advice and, where needed, movement and exercise recommendations.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-brand-teal font-bold text-xl leading-none mt-0.5">→</span>
                    <div>
                      <p className="font-semibold text-page">{item.title}</p>
                      <p className="text-page-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sand-deep text-ink rounded-2xl p-8 border border-brand-green/10">
              <p className="text-brand-green/80 text-sm font-medium">
                Carlos also has a dedicated profile with more on his background and the Range and Restore approach.
              </p>
              <Link
                href={ROUTES.about}
                className="inline-flex items-center gap-2 text-brand-green-mid font-bold hover:text-brand-green transition-colors min-h-[44px] mt-2"
              >
                More about Carlos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Alison full profile */}
      <section id="alison-isherwood" className="bg-page-sage">
        <div className="container-page container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
                <Image
                  src={ALISON_PHOTO}
                  alt="Alison Isherwood, BTEC Level 5 sports massage and soft tissue therapist, standing beside the Range and Restore Sports Massage banner in Archway, North London"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h2 className="text-3xl font-bold text-page mb-2">Alison Isherwood</h2>
              <p className="text-brand-teal font-semibold mb-1">BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist</p>
              <p className="text-page-muted font-medium mb-6 text-sm">LSSM Graduate · Pregnancy &amp; Abdominal Massage</p>
              <div className="space-y-4 text-page-muted text-lg">
                <p>
                  Alison is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist, graduating from the London School of Sports Massage (LSSM), one of the UK&rsquo;s leading providers of advanced clinical and remedial massage training.
                </p>
                <p>
                  Alison believes the best results come from truly listening to her clients. She understands that everybody is different, which is why no two appointments are ever the same. Whether you&rsquo;re recovering from an injury, struggling with back, neck or shoulder pain, feeling stiff after training, or simply looking to move more comfortably, Alison provides personalised, hands-on treatment designed around your needs and goals.
                </p>
                <p>
                  Her calm, friendly and professional approach helps clients feel relaxed, supported and confident throughout their appointment, creating a comfortable environment where recovery can begin.
                </p>
                <p>
                  Alongside sports massage and soft tissue therapy, Alison has a particular interest in{' '}
                  <Link href={ROUTES.services.pregnancyMassage} className="link-cite">Pregnancy Massage</Link>, providing safe, supportive treatments to help relieve the muscular and joint aches that commonly develop throughout pregnancy. She also offers Abdominal Massage, which may help relieve symptoms associated with IBS, bloating, stress and anxiety, muscle tension and abdominal discomfort.
                </p>
                <p>
                  Recovery doesn&rsquo;t end when your appointment finishes. Where appropriate, Alison will provide practical advice, rehabilitation exercises and self-care recommendations to help you maintain the benefits of your treatment and reduce the likelihood of symptoms returning.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapy (LSSM)',
                  'Graduate of the London School of Sports Massage',
                  'Specialist Interest in Pregnancy Massage',
                  'Abdominal Massage',
                ].map((qual) => (
                  <div key={qual} className="flex items-start gap-2 text-page">
                    <CheckIcon />
                    <span className="font-medium text-sm leading-snug">{qual}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <BookingButton label="Book Your Session with Alison" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border-2 border-page rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-page mb-4">How Alison Works</h3>
                <ul className="space-y-3">
                  {[
                    { title: 'Listen', desc: 'Your appointment starts with a conversation about your symptoms, lifestyle, medical history and what you’d like to achieve.' },
                    { title: 'Assess', desc: 'Where appropriate, a thorough assessment helps identify what’s contributing to your pain, movement restrictions or discomfort.' },
                    { title: 'Treat', desc: 'A personalised treatment using a range of advanced soft tissue therapy techniques, designed to reduce pain, improve movement and support your recovery.' },
                    { title: 'Reassess', desc: 'Progress is reassessed throughout your appointment, so you can see and feel the difference before you leave.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-brand-teal font-bold text-xl leading-none mt-0.5">→</span>
                      <div>
                        <p className="font-semibold text-page">{item.title}</p>
                        <p className="text-page-muted text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Darael full profile */}
      <section id="darael-beckles">
        <div className="container-page container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
                <Image
                  src={DARAEL_PHOTO}
                  alt="Darael Beckles, BTEC Level 5 sports massage and soft tissue therapist, standing at the Range and Restore clinic in Archway, North London"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h2 className="text-3xl font-bold text-page mb-2">Darael Beckles</h2>
              <p className="text-brand-teal font-semibold mb-1">BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist</p>
              <p className="text-page-muted font-medium mb-6 text-sm">NLSSM Graduate · SMRT, MSMA · Sports &amp; Exercise Science Background</p>
              <div className="space-y-4 text-page-muted text-lg">
                <p>
                  Darael is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist who graduated from the North London School of Sports Massage (NLSSM), one of the UK&rsquo;s leading providers of advanced sports massage and soft tissue therapy training.
                </p>
                <p>
                  With a strong background in Sports &amp; Exercise Science, Darael combines clinical knowledge with a hands-on, client-focused approach to treatment. He works with a wide range of clients, from athletes and active individuals looking to improve performance and recovery, to those experiencing muscular tension, mobility restrictions, postural issues, and everyday aches and pains.
                </p>
                <p>
                  Every treatment is tailored to the individual&rsquo;s needs, goals, and lifestyle. Whether the aim is pain relief, injury recovery, improved mobility, enhanced sports performance, or ongoing maintenance, Darael takes the time to understand each client and create a treatment plan designed to achieve the best possible results.
                </p>
                <p>
                  His approach focuses on identifying and addressing the underlying causes of discomfort rather than simply treating symptoms. Using a combination of advanced sports massage, soft tissue therapy, rehabilitation-based techniques, and movement-focused treatment, he helps clients move better, recover faster, and return to the activities they enjoy with confidence.
                </p>
                <p>
                  Known for his friendly, professional, and approachable manner, Darael is passionate about helping people achieve lasting improvements in their health, wellbeing, and physical performance.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'BTEC Level 5 Sports Massage & Soft Tissue Remedial Therapy (NLSSM)',
                  'Background in Sports & Exercise Science',
                  'SMRT — Soft Tissue Remedial Therapist',
                  'MSMA — Member of the Sports Massage Association',
                ].map((qual) => (
                  <div key={qual} className="flex items-start gap-2 text-page">
                    <CheckIcon />
                    <span className="font-medium text-sm leading-snug">{qual}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <BookingButton label="Book Your Session with Darael" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-page-sage rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-page mb-4">How Darael Works</h3>
                <ul className="space-y-3">
                  {[
                    { title: 'Tailored to You', desc: 'Every treatment is shaped around your needs, goals, and lifestyle — never a generic protocol.' },
                    { title: 'Root-Cause Focus', desc: 'Treatment targets the underlying causes of discomfort rather than simply treating symptoms.' },
                    { title: 'Advanced Techniques', desc: 'Advanced sports massage, soft tissue therapy, rehabilitation-based techniques, and movement-focused treatment.' },
                    { title: 'Friendly & Approachable', desc: 'A professional, approachable manner focused on lasting improvements in health, wellbeing, and performance.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-brand-teal font-bold text-xl leading-none mt-0.5">→</span>
                      <div>
                        <p className="font-semibold text-page">{item.title}</p>
                        <p className="text-page-muted text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mateja full profile */}
      <section id="mateja-bracko-mounti" className="bg-page-sage">
        <div className="container-page container-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
              <Image
                src={MATEJA_PHOTO}
                alt="Mateja Bracko-Mounti, sports massage and soft tissue therapist at Range and Restore, Archway, North London"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h2 className="text-3xl font-bold text-page mb-2">Mateja Bracko-Mounti</h2>
            <p className="text-brand-teal font-semibold mb-1">BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist</p>
            <p className="text-page-muted font-medium mb-6 text-sm">BTEC Level 5 Soft Tissue Therapy (LSSM) · SMRT, MSMA · 18+ Years&rsquo; Experience</p>
            <div className="space-y-4 text-page-muted text-lg">
              <p>
                Mateja is a BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist who graduated from the London School of Sports Massage (LSSM), one of the UK&rsquo;s leading training providers for advanced clinical and remedial therapists.
              </p>
              <p>
                With over 18 years of experience working in therapeutic settings, Mateja combines extensive hands-on experience with advanced clinical training to help clients reduce pain, improve mobility, recover from injury, and enhance their overall wellbeing.
              </p>
              <p>
                Drawing on a wide range of treatment approaches, including Sports Massage, Soft Tissue Therapy,{' '}
                <Link href={ROUTES.services.reflexology} className="link-cite">Reflexology</Link>, Lymphatic Drainage techniques, Indian Head Massage, Natural Lift Facial Massage, and the Emmett Technique, Mateja tailors every treatment to the individual needs of her clients. Whether you&rsquo;re dealing with muscular tension, reduced mobility, stress-related discomfort, recovery from physical activity, or simply looking to improve your overall wellbeing, her treatments are designed to help you achieve lasting results.
              </p>
              <p>
                Known for her calm, caring, and professional approach, Mateja takes the time to understand each client&rsquo;s goals, concerns, and lifestyle. Her focus is not only on relieving symptoms but also on helping clients move better, feel stronger, and enjoy a better quality of life.
              </p>
              <p>
                Clients appreciate her friendly and supportive nature, as well as her ability to create a welcoming environment where they feel comfortable, listened to, and genuinely cared for throughout their treatment journey.
              </p>
              <p>
                Whether you&rsquo;re recovering from injury, struggling with everyday aches and pains, looking to improve mobility, or simply wanting to invest in your health and wellbeing, Mateja is committed to helping you move better, feel better, and live stronger.
              </p>
              <p>
                Book a session with Mateja today and experience the benefits of personalised treatment tailored to your individual needs and goals.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'BTEC Level 5 Diploma in Soft Tissue Therapy (LSSM)',
                "Over 18 Years' Experience in Therapeutic Settings",
                'SMRT — Soft Tissue Remedial Therapist',
                'MSMA — Member of the Sports Massage Association',
                'Qualified in Reflexology & Lymphatic Drainage Techniques',
                'Indian Head Massage, Natural Lift Facial Massage & Emmett Technique',
              ].map((qual) => (
                <div key={qual} className="flex items-start gap-2 text-page">
                  <CheckIcon />
                  <span className="font-medium text-sm leading-snug">{qual}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookingButton label="Book Your Session with Mateja" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border-2 border-page rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-page mb-4">How Mateja Works</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Personalised Treatment', desc: 'No two clients are the same — Mateja takes time to understand each person’s goals and builds an effective, personalised plan.' },
                  { title: 'Calm & Caring', desc: 'A calm, caring, and professional approach drawn from over 18 years working in therapeutic settings.' },
                  { title: 'Broad Skill Set', desc: 'Soft tissue therapy alongside reflexology, pregnancy massage, Indian head massage, facial massage, and the Emmett Technique.' },
                  { title: 'Whole-Person Wellbeing', desc: 'Focused on reducing pain, improving mobility, supporting recovery, and enhancing overall wellbeing.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="text-brand-teal font-bold text-xl leading-none mt-0.5">→</span>
                    <div>
                      <p className="font-semibold text-page">{item.title}</p>
                      <p className="text-page-muted text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-sm bg-accent" aria-label="Book a session">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-ink tracking-tight mb-3">
            Ready to Feel Better?
          </h2>
          <p className="text-brand-green/80 mb-7 text-base font-semibold">
            Whoever you book with, every session at Range and Restore starts with listening. Book online and our team will help you move better, feel better, and live stronger.
          </p>
          <BookingButton label="Book Your Session" className="bg-white/60 backdrop-blur-sm border border-brand-teal/50 text-ink hover:bg-white hover:border-brand-teal transition-all" />
        </div>
      </section>
    </>
  )
}
