import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Range and Restore Sports Massage',
    short_name: 'Range & Restore',
    description:
      'Sports massage, clinical massage and the Recovery Suite (Infrared Hybrid Sauna and Normatec compression) in Archway, North London.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a3d3a',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
