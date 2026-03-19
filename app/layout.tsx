import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
