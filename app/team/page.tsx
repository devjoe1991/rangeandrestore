import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, daraelPersonSchema, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Meet the Team | Sports Massage Therapists Archway',
  description: 'Meet Carlos Bonvicine and Darael Beckles, BTEC Level 5 sports massage and soft tissue therapists at Range and Restore in Archway, North London.',
  path: '/team',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Meet the Team', path: '/team' }])

const CARLOS_PHOTO = 'https://lh3.googleusercontent.com/p/AF1QipNb_-WtjX3QYbhg6w0HeOOH05KicwaduJ5_svW0=s800-k-no'
const DARAEL_PORTRAIT = '/darael-beckles-sports-massage-therapist-range-and-restore-archway-north-london.jpeg'
const DARAEL_BANNER = '/darael-beckles-range-and-restore-sports-massage-banner-archway-london.jpeg'

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(daraelPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-page">Meet the Team – Sports Massage &amp; Soft Tissue Therapists in Archway</h1>
          <p className="mt-4 text-xl text-page-muted">Assessment-led sports massage and soft tissue therapy from two BTEC Level 5 qualified therapists, serving Islington, Tufnell Park, Finsbury Park and North London.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Rated 5 Stars on Google
            </span>
            <span className="inline-flex items-center gap-1.5 bg-badge-teal text-page font-semibold px-3 py-1.5 rounded-full border border-[#2ab4b8]/30">BTEC Level 5 Qualified Therapists</span>
            <span className="inline-flex items-center gap-1.5 bg-page-alt text-page font-semibold px-3 py-1.5 rounded-full border border-page">Archway, N19</span>
          </div>
        </div>
      </div>

      {/* Team intro cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link href="/about" className="group bg-card rounded-2xl overflow-hidden border-2 border-page card-lift block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={CARLOS_PHOTO}
                alt="Carlos Bonvicine, sports massage therapist at Range and Restore, Archway"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
              />
            </div>
            <div className="p-5">
              <p className="text-xl font-black text-page">Carlos Bonvicine</p>
              <p className="text-[#2ab4b8] text-xs font-bold mt-1">BTEC Level 5 Sports Massage &amp; Soft Tissue Remedial Therapist</p>
              <p className="text-page-muted text-xs font-medium mt-1">Certified MLD · Cupping Therapy</p>
              <p className="text-page font-bold text-sm mt-3">Read Carlos&rsquo;s full profile →</p>
            </div>
          </Link>
          <a href="#darael-beckles" className="group bg-card rounded-2xl overflow-hidden border-2 border-page card-lift block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={DARAEL_PORTRAIT}
                alt="Darael Beckles, sports massage and soft tissue therapist at Range and Restore, Archway, North London"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
              />
            </div>
            <div className="p-5">
              <p className="text-xl font-black text-page">Darael Beckles</p>
              <p className="text-[#2ab4b8] text-xs font-bold mt-1">BTEC Level 5 Sports Massage &amp; Soft Tissue Remedial Therapist</p>
              <p className="text-page-muted text-xs font-medium mt-1">NLSSM Graduate · SMRT, MSMA</p>
              <p className="text-page font-bold text-sm mt-3">Read Darael&rsquo;s full profile ↓</p>
            </div>
          </a>
        </div>
      </div>

      {/* Darael full profile */}
      <section id="darael-beckles" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[3/4] relative w-full">
              <Image
                src={DARAEL_PORTRAIT}
                alt="Darael Beckles, BTEC Level 5 sports massage and soft tissue therapist at Range and Restore, Archway, North London"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold text-page mb-2">Darael Beckles</h2>
            <p className="text-[#2ab4b8] font-semibold mb-1">BTEC Level 5 Sports Massage and Soft Tissue Remedial Therapist</p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2ab4b8' }} aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm leading-snug">{qual}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookingButton label="Book Your Session with Darael" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative w-full">
              <Image
                src={DARAEL_BANNER}
                alt="Darael Beckles standing beside his Range and Restore sports massage banner at the Archway clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

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
                    <span className="text-[#2ab4b8] font-bold text-xl leading-none mt-0.5">→</span>
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
      </section>

      {/* Closing CTA */}
      <section className="section-sm bg-[#7dd94a]" aria-label="Book a session with Darael">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-[#1a2330] tracking-tight mb-3">
            Ready to Feel Better?
          </h2>
          <p className="text-[#1a3d3a]/80 mb-7 text-base font-semibold">
            Whether you&rsquo;re recovering from an injury, managing persistent aches and pains, training for an event, or simply looking to improve your mobility and wellbeing, Darael is here to help.
          </p>
          <BookingButton label="Book Your Session with Darael" className="bg-white/60 backdrop-blur-sm border border-[#2ab4b8]/50 text-[#1a2330] hover:bg-white hover:border-[#2ab4b8] transition-all" />
        </div>
      </section>
    </>
  )
}
