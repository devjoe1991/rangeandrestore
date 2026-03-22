import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Range and Restore | Sports Massage Archway London',
  description: 'Expert sports massage, deep tissue and soft tissue remedial therapy in Archway, North London. Book your session with Carlos Bonvicine today.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rangeandrestore.co.uk'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={dmSans.variable} suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
