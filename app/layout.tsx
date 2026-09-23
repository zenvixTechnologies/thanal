import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Noto_Sans_Malayalam } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const malayalam = Noto_Sans_Malayalam({ subsets: ['malayalam'], variable: '--font-noto-malayalam' })

export const metadata: Metadata = {
  metadataBase: new URL('https://thanalcharitabletrust.org'),
  title: {
    default: 'THANAL Charitable Society, Alappuzha | Healthcare, Education & STEP',
    template: '%s | THANAL Charitable Society, Alappuzha',
  },
  description:
    'Official website of THANAL Charitable Society (Reg No: A 542/04 Kommady, Alappuzha). Empowering communities through STEP micro-contributions, super speciality medical camps, and educational scholarships.',
  keywords: [
    'THANAL',
    'THANAL Charitable Society',
    'THANAL Charitable Society Alappuzha',
    'THANAL Alappuzha',
    'THANAL Kommady',
    'THANAL Kerala',
    'THANAL STEP',
    'THANAL charitable organisation',
    'THANAL medical camps',
    'THANAL educational scholarships',
    'THANAL Charitable Trust',
    'തണൽ ചാരിറ്റബിൾ സൊസൈറ്റി',
    'തണൽ അലപ്പുഴ',
    'തണൽ കൊമ്മാടി',
    'തണൽ കേരള',
    'STEP',
    'Sodality for Terminating Extreme Poverty',
    'STEP Thanal',
    'Micro Contribution Macro Social Benefit',
    'STEP micro contribution',
    'അതിരൂക്ഷ ദാരിദ്ര്യത്തിനെതിരെയുള്ള സാമൂഹ്യ കൂട്ടായ്മ',
    'Kommady',
    'Alappuzha',
    'Thumpoly',
    'Aryad panchayat',
    'Kerala charity organization',
    'Alappuzha NGO',
    'Alappuzha charitable society',
    'Super speciality medical camp Alappuzha',
    'Free medical camp Kerala',
    'Dr K Venugopal Pulmonologist',
    'Dr V Jayaram Cardiologist',
    'Cancer patient financial assistance Kerala',
    'Educational scholarship Alappuzha',
    'Students financial aid Kerala',
    'Poor students educational support',
    'Direct bank transfer donation Kerala',
    'Verified transparent charity Kerala',
    'thanalcharitabletrust.org',
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'THANAL Charitable Society, Alappuzha | Healthcare, Education & STEP',
    description:
      'Micro Contribution – Macro Social Benefit. Community-led healthcare, educational scholarships, and emergency financial support in Kommady, Alappuzha.',
    url: 'https://thanalcharitabletrust.org/',
    siteName: 'THANAL Charitable Society, Alappuzha',
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
    title: 'THANAL Charitable Society, Alappuzha | Healthcare, Education & STEP',
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
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${malayalam.variable} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
