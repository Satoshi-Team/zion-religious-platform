import React from 'react'
import { Metadata, Viewport } from "next"
import { Toaster } from "sonner"
import { AudioPlayerProvider } from "@/contexts/audio-player-context"
import { PersistentPlayer } from "@/components/audio/persistent-player"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Providers } from "./providers"
import "./globals.css"
import { GoogleAnalytics } from '@/components/analytics/google-analytics'

// Use system font stack as fallback
const fontFamily = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif'
].join(',')

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://zion.fm"),
  title: {
    default: "ZION.FM | Understanding Christianity and Beyond: Explore the Rich Tapestry of World Religions",
    template: "%s | ZION.FM"
  },
  description: "Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings on Christianity, Islam, Hinduism, Buddhism, Judaism, Sikhism, Jainism, Confucianism, Taoism, Shinto, Bahá'í Faith, Rastafarianism, and more. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Perfect for seekers, students, and the curious alike.",
  keywords: [
    "world religions",
    "religious studies",
    "spirituality",
    "theology",
    "sacred texts",
    "faith",
    "history of religions",
    "Christianity",
    "Islam",
    "Hinduism",
    "Buddhism",
    "Judaism",
    "Sikhism",
    "Jainism",
    "Confucianism",
    "Taoism",
    "Shinto",
    "Bahá'í Faith",
    "Rastafarianism"
  ],
  authors: [{ name: "Zion.FM" }],
  creator: "Zion.FM",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zion.fm",
    title: "ZION.FM | Understanding Christianity and Beyond: Explore the Rich Tapestry of World Religions",
    description: "Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings on Christianity, Islam, Hinduism, Buddhism, Judaism, Sikhism, Jainism, Confucianism, Taoism, Shinto, Bahá'í Faith, Rastafarianism, and more. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Perfect for seekers, students, and the curious alike.",
    siteName: "ZION.FM"
  },
  twitter: {
    card: "summary_large_image",
    title: "ZION.FM | Understanding Christianity and Beyond: Explore the Rich Tapestry of World Religions",
    description: "Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings on Christianity, Islam, Hinduism, Buddhism, Judaism, Sikhism, Jainism, Confucianism, Taoism, Shinto, Bahá'í Faith, Rastafarianism, and more. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Perfect for seekers, students, and the curious alike.",
    creator: "@zionfm"
  },
  other: {
    "emoji-source": "The emoji graphics are from the open source project Twemoji. The graphics are copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under CC-BY 4.0.",
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${fontFamily}`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <AudioPlayerProvider>
              {children}
              <PersistentPlayer />
            </AudioPlayerProvider>
          </Providers>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}