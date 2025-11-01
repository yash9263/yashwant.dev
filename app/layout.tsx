import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'
import { cn } from '@/utils/cn'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yashwant',
  description: "yashwant's little corner of the internet",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://yashwant.dev',
    title: 'Yashwant',
    description: "yashwant's little corner of the internet",
  },
  twitter: {
    card: 'summary',
    creator: '@yashwant0098',
    title: 'Yashwant',
    description: "yashwant's little corner of the internet",
  },
  authors: [{ name: 'yashwant', url: 'https://yashwant.dev' }],
  metadataBase: new URL('https://yashwant.dev'),
  alternates: {
    canonical: 'https://yashwant.dev',
  },
  robots: {
    index: true,
  },
  keywords: [
    'yashwant',
    'developer',
    'software engineer',
    'web developer',
    'full stack developer',
    'front end developer',
    'back end developer',
    'portfolio',
    'blog',
    'portfolio website',
    'blog website',
  ],
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Yashwant',
  url: 'https://yashwant.dev',
  description: "yashwant's little corner of the internet",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable, 'antialiased')}
        suppressHydrationWarning
      >
        {children}
        {process.env.NODE_ENV === 'production' &&
          process.env.GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
          )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
