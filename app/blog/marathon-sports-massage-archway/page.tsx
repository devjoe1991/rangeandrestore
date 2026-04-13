import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/BookingButton'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Marathon Massage in Archway | Pre & Post London Marathon Recovery',
  description: 'Marathon preparation and recovery massage in Archway, North London. Pre-marathon and post-marathon sports massage from a therapist with 4 years of hands-on marathon event experience.',
  path: '/blog/marathon-sports-massage-archway',
  author: true,
})

export const revalidate = 3600

const breadcrumbs = buildBreadcrumbs([
  { name: 'Blog', path: '/blog' },
  { name: 'Marathon Massage Archway', path: '/blog/marathon-sports-massage-archway' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Marathon Massage in Archway: Your Pre and Post Race Recovery Guide',
  description: 'Marathon preparation and recovery massage in Archway, North London. Pre-marathon and post-marathon sports massage from a therapist with 4 years of hands-on marathon event experience.',
  image: 'https://rangeandrestore.co.uk/range-and-restore-sports-massage-clinic-130-junction-road-archway-london.jpg',
  author: {
    '@type': 'Person',
    name: 'Carlos Bonvicine',
    jobTitle: 'Soft Tissue Therapist & MLD Practitioner',
    url: 'https://rangeandrestore.co.uk/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Range and Restore Sports Massage',
    url: 'https://rangeandrestore.co.uk',
  },
  datePublished: '2026-04-13',
  dateModified: '2026-04-13',
  url: 'https://rangeandrestore.co.uk/blog/marathon-sports-massage-archway',
  mainEntityOfPage: 'https://rangeandrestore.co.uk/blog/marathon-sports-massage-archway',
  keywords: 'marathon massage Archway, London Marathon massage, pre marathon massage, post marathon recovery massage, marathon sports massage North London, marathon injury prevention massage',
}

type PhotoData = { src: string; width: number; height: number }

async function getMarathonPhotos(): Promise<PhotoData[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/photos`, { next: { revalidate: 3600 } })
    const data = await res.json()
    return (data.photos ?? []).slice(0, 6)
  } catch {
    return []
  }
}

export default async function MarathonSportsMassageArchwayPage() {
  const photos = await getMarathonPhotos()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <div className="bg-page-sage py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#2ab4b8] font-semibold uppercase tracking-widest text-sm mb-3">Wellness Hub &middot; Range and Restore</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-page mb-4">
            Marathon Massage in Archway: Your Pre and Post Race Recovery Guide
          </h1>
          <div className="flex items-center gap-4 text-page-muted opacity-80 text-sm">
            <time dateTime="2026-04-13">13 April 2026</time>
            <span>&middot;</span>
            <span>By Carlos Bonvicine</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <p className="text-xl font-medium text-page">
            Marathon season is here. Thousands of runners across London have spent months building mileage, grinding through long runs, and testing their limits. But the training plan only tells half the story. What separates a strong race from a painful one often comes down to what you do with your soft tissue before and after those 26.2 miles.
          </p>

          <p>
            At <Link href="/about" className="text-[#2ab4b8] hover:text-page font-medium">Range and Restore Sports Massage in Archway, North London</Link>, I have spent the past four years working with marathon runners — both at events and in clinic. I have treated runners in the hours before they line up at the start, and I have treated them in the days after they cross the finish line. That hands-on experience shapes every session I deliver, because I have seen first-hand what 26.2 miles does to the body and what targeted treatment can do to prepare it and repair it.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Who this is for</h2>

          <p>
            If any of the following sounds familiar, this is written for you:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>First-time marathon runners who have never put their body through anything like this before</li>
            <li>Experienced runners who know the toll 26.2 miles takes and want to manage it properly</li>
            <li>Anyone mid-training cycle with tightness, niggles, or areas that have been getting worse week on week</li>
            <li>Runners who have already finished the race and need to recover — not just rest, but actively recover</li>
          </ul>

          <p>
            Whether the London Marathon is still ahead of you or already behind you, the right treatment at the right time makes a measurable difference.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">When to book your marathon massage</h2>

          <p>
            Timing is everything. The wrong session at the wrong time can leave you flat on race day. The right session in the right window can transform how you feel and perform.
          </p>

          <p className="font-semibold text-page">Before the marathon — 3 to 7 days out</p>

          <p>
            A pre-marathon massage is not about going deep and stripping the muscles down. That would leave you sore and fatigued when you need to be sharp. The goal is targeted preparation: releasing accumulated training tension, improving circulation, and restoring range of motion in the areas that have tightened over months of mileage.
          </p>

          <p>
            The sweet spot is 3 to 7 days before race day. This gives your body time to absorb the treatment and settle, so you arrive at the start line feeling loose and ready rather than worked over.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Releases tension built up through months of training without destabilising the muscles</li>
            <li>Improves range of motion in the hips, ankles, and thoracic spine</li>
            <li>Enhances circulation so oxygen-rich blood reaches the muscles more efficiently</li>
            <li>Identifies problem areas before they become race-day issues</li>
          </ul>

          <p className="font-semibold text-page">After the marathon — 24 to 72 hours</p>

          <p>
            Post-marathon, your muscles are dealing with significant trauma. Micro-tears in the muscle fibres, metabolic waste products pooling in overworked tissue, inflammation, and the cumulative impact of sustained eccentric loading over 3 to 5 hours of running. Resting alone will not clear that. A post-marathon recovery massage within 24 to 72 hours accelerates the process your body is already trying to complete.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Flushes metabolic waste products that accumulate during the race</li>
            <li>Reduces the severity and duration of delayed onset muscle soreness (DOMS)</li>
            <li>Catches early signs of strain or soft tissue damage before they become chronic</li>
            <li>Restores normal muscle function and range of motion faster than rest alone</li>
            <li>Supports the nervous system in switching from race-mode stress back to recovery</li>
          </ul>

          <p>
            Having worked at marathon events for four years, I have treated hundreds of runners in this exact window. The difference between runners who get targeted post-race treatment and those who just wait it out is significant — in how fast they recover, how quickly they return to training, and how many post-race injuries they avoid.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">What 26.2 miles actually does to your body</h2>

          <p>
            A marathon is not a long run. It is a sustained assault on your muscular and connective tissue systems that goes well beyond what training prepares you for. The final 6 to 8 miles push most runners into territory their body has never experienced — glycogen stores depleted, running form breaking down, muscles absorbing impact they can no longer cushion properly.
          </p>

          <p>
            The result is predictable:
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Calves and hamstrings tighten and shorten under sustained repetitive load</li>
            <li>Hip flexors lock up from thousands of identical stride cycles</li>
            <li>The IT band thickens and restricts, pulling on the knee and hip</li>
            <li>Lower back muscles fatigue and compensate for failing form in the later miles</li>
            <li>Fascial adhesions develop where tissue has been under continuous stress</li>
          </ul>

          <p>
            Sports massage addresses every one of these issues directly — breaking down adhesions, restoring slide between tissue layers, and giving the body what it needs to repair properly rather than just stiffen up. For a broader look at how sports massage supports runners across all distances, see our <Link href="/blog/sports-massage-for-runners" className="text-[#2ab4b8] hover:text-page font-medium">guide to sports massage for runners</Link>.
          </p>

          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Techniques used with marathon runners</h2>

          <p>
            Every session is tailored to the individual, but marathon runners tend to need a specific combination of techniques. Here is what a typical pre- or post-marathon session at Range and Restore involves and why each one matters:
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li>
              <span className="font-semibold text-page"><Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium">Deep tissue massage</Link></span> — Targets the deeper muscle layers where marathon-distance tension embeds itself. This is not about pressing harder. It is sustained, controlled pressure applied to areas where the tissue has thickened and restricted under months of training load.
            </li>
            <li>
              <span className="font-semibold text-page">Sports massage</span> — A broader, assessment-led treatment covering the full kinetic chain. The calves, hamstrings, quads, hip flexors, glutes, and lower back all take a battering over 26.2 miles. Sports massage works systematically through these areas, restoring function and reducing tension.
            </li>
            <li>
              <span className="font-semibold text-page">Myofascial release</span> — The fascia — the connective tissue wrapping every muscle — thickens and restricts under sustained load. Myofascial work restores slide and glide between tissue layers, improving movement quality and reducing the stiffness that follows a marathon.
            </li>
            <li>
              <span className="font-semibold text-page">Assisted stretching</span> — Guided stretching to restore range in areas that have shortened through training and racing. Particularly effective for hip flexors and hamstrings post-marathon, where passive stretching alone often is not enough.
            </li>
            <li>
              <span className="font-semibold text-page">Cupping therapy</span> — Increases blood flow to specific areas, accelerates recovery, and reduces muscle stiffness. Used where the tissue needs decompression rather than compression — common in the calves and upper back after long-distance running.
            </li>
          </ul>

          <p>
            These techniques are combined and adapted based on where you are in your marathon cycle — preparation looks different from recovery, and the treatment reflects that. For complex or long-standing issues, <Link href="/services/advanced-clinical-massage" className="text-[#2ab4b8] hover:text-page font-medium">advanced clinical massage</Link> may also be incorporated to address the root cause rather than just the symptom.
          </p>
        </div>

        {photos.length > 0 && (
          <div className="mt-10 mb-10">
            <h2 className="text-2xl font-bold text-page mb-4">Carlos at work — marathon events and clinic sessions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photos.map((photo, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden relative">
                  <Image
                    src={photo.src}
                    alt={`Range and Restore Sports Massage — marathon event and clinic photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-page-muted opacity-70 mt-3">
              Photos from the Range and Restore Google Business listing — marathon events and clinic sessions in Archway, North London.
            </p>
          </div>
        )}

        <div className="prose prose-lg max-w-none text-page-muted space-y-6">
          <h2 className="text-2xl font-bold text-page mt-8 mb-3">Local marathon support in Archway, North London</h2>

          <p>
            Range and Restore is based at 130 Junction Road, Archway, London N19 5LB — a short walk from Archway tube station. If you are training for the marathon or recovering after race day, getting the right treatment locally means you are not adding a long commute on top of an already demanding schedule.
          </p>

          <p>
            I work with runners from across North London — Archway, Tufnell Park, Holloway, Islington, Finsbury Park, Highgate, and Crouch End. Many of my marathon clients train locally, run with clubs in the area, and come in regularly through their training block to keep their body in condition.
          </p>

          <ul className="space-y-2 list-disc list-inside">
            <li>Open Monday to Friday 08:00–20:00, Saturday and Sunday 09:00–17:00</li>
            <li>30, 60, and 90-minute sessions available — from a focused post-race flush to a thorough pre-marathon preparation</li>
            <li><Link href="/services/massage-bundles" className="text-[#2ab4b8] hover:text-page font-medium">Massage bundles</Link> available for runners who want a series of sessions through their training cycle</li>
            <li>Four years of hands-on marathon event experience alongside regular clinic work with runners</li>
          </ul>

          <p>
            If you have questions about what session length or timing is right for you, <Link href="/contact" className="text-[#2ab4b8] hover:text-page font-medium">get in touch</Link> and I will point you in the right direction.
          </p>
        </div>

        <div className="mt-12 bg-[#7dd94a] rounded-2xl p-8 text-center sm:text-left">
          <h2 className="text-2xl font-black text-[#1a2330] mb-4">The marathon is not just 26.2 miles — it is everything you do before and after</h2>
          <p className="text-[#1a3d3a] font-semibold mb-6">
            Book your pre-marathon or post-marathon sports massage at Range and Restore in Archway, North London. Four years of hands-on marathon event experience — your body is in the right hands.
          </p>
          <BookingButton label="Book Your Marathon Massage" />
        </div>

        <div className="mt-10 border-t border-page pt-8">
          <h3 className="text-lg font-semibold text-page mb-4">Related</h3>
          <div className="space-y-2">
            <Link href="/services/sports-deep-tissue-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Sports, Deep Tissue &amp; Soft Tissue Remedial Massage
            </Link>
            <Link href="/blog/sports-massage-for-runners" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; How Sports Massage Helps Runners Before and After Races
            </Link>
            <Link href="/blog/achilles-tendinitis-recovery-massage" className="text-[#2ab4b8] hover:text-page font-medium min-h-[44px] flex items-center">
              &rarr; Achilles Tendinitis — How Sports Massage Helps Recovery
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[#2ab4b8] font-semibold hover:text-page min-h-[44px] inline-flex items-center">
            &larr; Back to Wellness Hub
          </Link>
        </div>
      </div>
    </>
  )
}
