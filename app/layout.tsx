import type { Metadata } from 'next'
import './globals.css'
import TopNav from '@/components/TopNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    default: 'TatvaPractice — AI-First EMR for Indian Doctors and Hospitals',
    template: '%s | TatvaPractice',
  },
  description: 'Less typing. More treating. The AI-first EMR built for Indian OPD reality. ABDM-certified, 9 Indian languages, trusted by 10,000+ doctors.',
  metadataBase: new URL('https://tatvapractice.com'),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'TatvaPractice',
    type: 'website',
    locale: 'en_IN',
    title: 'TatvaPractice — AI-First EMR for Indian Doctors and Hospitals',
    description: 'Less typing. More treating. The AI-first EMR built for Indian OPD reality. ABDM-certified, 9 Indian languages, trusted by 10,000+ doctors.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TatvaPractice',
    title: 'TatvaPractice — AI-First EMR for Indian Doctors and Hospitals',
    description: 'Less typing. More treating. The AI-first EMR built for Indian OPD reality.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopNav />
        <main id="main-content" className="pb-12 md:pb-0">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
