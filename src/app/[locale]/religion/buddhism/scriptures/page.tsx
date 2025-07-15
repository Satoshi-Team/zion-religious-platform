import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Scriptures | Buddhism',
  description: 'Sacred texts and scriptures of Buddhism',
  keywords: 'Buddhism, scriptures, buddhism scriptures',
  openGraph: {
    title: 'Scriptures | Buddhism',
    description: 'Sacred texts and scriptures of Buddhism',
    images: [{ url: '/images/buddhism-scriptures.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function BuddhismScripturesPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Scriptures</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Sacred texts and scriptures of Buddhism
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Scriptures in Buddhism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about scriptures in the context of buddhism. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of buddhism faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern buddhism communities</li>
              <li>Interconnections with other aspects of buddhism tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to buddhism. 
              For more detailed information, explore the other sections in our buddhism overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}