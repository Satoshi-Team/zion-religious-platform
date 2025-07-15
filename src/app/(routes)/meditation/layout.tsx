import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Religious & Spiritual Meditation Practices | Comprehensive Guide',
  description: 'Explore traditional meditation practices from various religious and spiritual traditions. Learn techniques, history, and benefits.',
  openGraph: {
    title: 'Religious & Spiritual Meditation Practices',
    description: 'Comprehensive guide to religious and spiritual meditation practices',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Religious & Spiritual Meditation Practices',
    description: 'Comprehensive guide to religious and spiritual meditation practices',
  }
}

export default function MeditationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 