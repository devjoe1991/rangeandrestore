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
        sizes: '1079x1010',
        type: 'image/png',
      },
    ],
  }
}
