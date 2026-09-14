import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Noto_Sans_Malayalam } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const malayalam = Noto_Sans_Malayalam({ subsets: ['malayalam'], variable: '--font-noto-malayalam' })

export const metadata: Metadata = {
  metadataBase: new URL('https://thanalcharitabletrust.org'),
  title: {
    default: 'THANAL – Sodality for Terminating Extreme Poverty (STEP)',
    template: '%s | THANAL Charitable Society',
  },
  description:
    'THANAL is a registered charitable society (Reg No: A 542/04 Kommady, Alappuzha) driving community healthcare, super speciality medical camps, educational scholarships, and STEP micro-contributions.',
  keywords: [
    'THANAL',
    'THANAL Charitable Society',
    'STEP',
    'Sodality for Terminating Extreme Poverty',
    'Kommady',
    'Alappuzha',
    'Kerala charity',
    'micro contribution',
    'medical camp Alappuzha',
    'educational scholarship Kerala',
    'Thumpoly',
    'Aryad panchayat',
  ],
  authors: [{ name: 'THANAL Charitable Society', url: 'https://thanalcharitabletrust.org' }],
  creator: 'THANAL Charitable Society',
  publisher: 'THANAL Charitable Society',
  alternates: {
    canonical: 'https://thanalcharitabletrust.org/',
    languages: {
      'en-US': 'https://thanalcharitabletrust.org/',
      'ml-IN': 'https://thanalcharitabletrust.org/',
    },
  },
  icons: {
    icon: [
      { url: '/images/thanal-logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/images/thanal-logo.png',
    apple: [
      { url: '/images/thanal-logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'THANAL – Sodality for Terminating Extreme Poverty (STEP)',
    description:
      'Micro Contribution – Macro Social Benefit. Community-led healthcare, educational scholarships, and emergency financial support in Kommady, Alappuzha.',
    url: 'https://thanalcharitabletrust.org/',
    siteName: 'THANAL Charitable Society',
    images: [
      {
        url: '/images/thanal-community.png',
        width: 1200,
        height: 630,
        alt: 'THANAL Charitable Society & STEP Community Action',
      },
    ],
    locale: 'ml_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THANAL – Sodality for Terminating Extreme Poverty (STEP)',
    description:
      'Micro Contribution – Macro Social Benefit. Community care and educational support in Alappuzha.',
    images: ['/images/thanal-community.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#0b3d30', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${dmSans.variable} ${malayalam.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
