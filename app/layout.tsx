import styles from './layout.module.css'
import '@styles/global.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from '@components/theme-provider'
import { VercelToolbar } from '@vercel/toolbar/next'
import { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' ? <VercelToolbar /> : null}
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://fajarr.space'),
  title: {
    template: '%s | Fajar A.',
    default: 'Fajar A.',
  },
  description: 'A website by Fajar A..',
  openGraph: {
    title: 'Fajar A.',
    url: 'https://fajarr.space',
    siteName: "Fajar A.'s website",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://fajarr.space/api/og?title=${encodeURIComponent(
          "Fajar A.'s site",
        )}`,
        width: 1200,
        height: 630,
        alt: "Fajar A.'s site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'Fajar A.',
    card: 'summary_large_image',
    creator: '@max_leiter',
  },
  icons: {
    shortcut: 'https://fajarr.space/favicons/favicon.ico',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://fajarr.space/feed.xml',
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}
