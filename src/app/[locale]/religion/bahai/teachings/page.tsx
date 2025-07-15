import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Teachings | Bahai',
  description: 'Core teachings and principles of the Bahá\'í Faith',
  keywords: 'Bahai, teachings, bahai teachings',
  openGraph: {
    title: 'Teachings | Bahai',
    description: 'Core teachings and principles of the Bahá\'í Faith',
    images: [{ url: '/images/bahai-teachings.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function BahaiTeachingsPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Teachings</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Core teachings and principles of the Bahá'í Faith
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Teachings in Bahai</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about teachings in the context of bahai. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of bahai faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern bahai communities</li>
              <li>Interconnections with other aspects of bahai tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to bahai. 
              For more detailed information, explore the other sections in our bahai overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}