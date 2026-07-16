import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

// WebGL has no server rendering path, so the scene mounts on the client only.
const SaunaRoomScene = dynamic(() => import('@/components/sauna-room/SaunaRoomScene'), {
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-sm text-white/70">
      Loading the room…
    </div>
  ),
})

export const metadata: Metadata = buildMetadata({
  title: 'Virtual Sauna Room Tour | Range and Restore, Archway',
  description:
    'Step inside our infrared sauna room in Archway, North London before you visit. Walk around the private recovery suite in an interactive 3D tour.',
  path: '/sauna-room',
})

const breadcrumbs = buildBreadcrumbs([{ name: 'Virtual Sauna Room', path: '/sauna-room' }])

export default function SaunaRoomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Step inside the sauna room
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Have a look around our private recovery suite in Archway before you book. Click the room
            to take control, then walk around with W, A, S, D and look about with your mouse.
          </p>
        </header>

        <div className="h-[70vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
          <SaunaRoomScene />
        </div>

        <p className="mt-4 text-sm text-neutral-500">
          Best on a desktop or laptop with a mouse. The tour is a work in progress — the room is
          modelled to scale, and we are still adding detail.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/recovery-suite/infrared-sauna"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            About the infrared sauna
          </Link>
          <Link
            href="/recovery-suite"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
          >
            Explore the recovery suite
          </Link>
        </div>
      </main>
    </>
  )
}
