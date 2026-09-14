import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'THANAL – Sodality for Terminating Extreme Poverty (STEP)',
    short_name: 'THANAL STEP',
    description:
      'THANAL is a registered charitable society in Kommady, Alappuzha, driving community healthcare, super speciality medical camps, educational scholarships, and STEP micro-contributions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08291d',
    theme_color: '#0b3d30',
    icons: [
      {
        src: '/images/thanal-logo-white-bg.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/thanal-logo-white-bg.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
