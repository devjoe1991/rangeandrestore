import Image from 'next/image'

/**
 * The real photos of the sauna suite. Every page that shows the sauna takes
 * its src and alt from here, so a new shoot is a change to this list only.
 * The files live in public/Gallery, which /gallery also scans.
 */
export const SAUNA_PHOTOS = {
  front: {
    src: '/Gallery/private-infrared-hybrid-sauna-suite-range-and-restore-archway-north-london.jpg',
    alt: 'The two person Vidalux infrared hybrid sauna in the private Recovery Suite at Range and Restore, Archway, North London, heaters glowing red',
  },
  portrait: {
    src: '/Gallery/two-person-infrared-sauna-red-light-heaters-range-and-restore-archway-north-london.jpg',
    alt: 'Inside the private infrared sauna at Range and Restore, Archway: red light heaters, timber bench and a bath mat ready at the door',
  },
  suite: {
    src: '/Gallery/infrared-sauna-room-with-private-shower-range-and-restore-archway-north-london.jpg',
    alt: 'The private sauna room at Range and Restore, Archway, with the infrared sauna, a shower and a lit full length mirror',
  },
  shower: {
    src: '/Gallery/private-shower-sauna-recovery-suite-range-and-restore-archway-north-london.jpg',
    alt: 'The private shower in the sauna Recovery Suite at Range and Restore, Archway, North London',
  },
} as const

const GRID = [SAUNA_PHOTOS.portrait, SAUNA_PHOTOS.suite, SAUNA_PHOTOS.shower]

/** A photo grid of the sauna suite for the sauna booking pages. */
export function SaunaPhotos() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-page mb-4">Inside the sauna room</h2>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={SAUNA_PHOTOS.front.src}
          alt={SAUNA_PHOTOS.front.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {GRID.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1280px) 33vw, 400px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
