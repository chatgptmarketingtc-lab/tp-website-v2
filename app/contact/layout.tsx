import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Get in touch with the TatvaPractice team. Book a demo, talk to sales, or reach our support team.',
  alternates: { canonical: 'https://tatvapractice.com/contact' },
  openGraph: {
    title: 'Contact us | TatvaPractice',
    description: 'Get in touch with the TatvaPractice team. Book a demo, talk to sales, or reach support.',
    type: 'website',
    url: 'https://tatvapractice.com/contact',
  },
  twitter: {
    title: 'Contact TatvaPractice',
    description: 'Book a demo, talk to sales, or reach our support team.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
