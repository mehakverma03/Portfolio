import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marketing Portfolio | Google Marketing Apprentice Candidate',
  description: 'Professional marketing portfolio showcasing expertise in digital marketing, brand strategy, and data-driven campaigns. Applying for Google Marketing Apprentice Program India.',
  keywords: 'marketing, digital marketing, Google, apprentice, brand strategy, campaigns, PGP marketing, India',
  authors: [{ name: 'Marketing Professional' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  robots: 'index, follow',
  openGraph: {
    title: 'Marketing Portfolio | Google Marketing Apprentice Candidate',
    description: 'Professional marketing portfolio for Google Marketing Apprentice Program India',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}