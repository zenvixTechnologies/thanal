import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Noto_Sans_Malayalam } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const malayalam = Noto_Sans_Malayalam({ subsets: ['malayalam'], variable: '--font-noto-malayalam' })

export const metadata: Metadata = {
  title: 'THANAL – Sodality for Terminating Extreme Poverty',
  description: 'A community-led movement turning compassion into consistent action and building pathways toward dignity for all.',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'THANAL – Sodality for Terminating Extreme Poverty',
    description: 'Small steps. Lasting change.',
    type: 'website',
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
