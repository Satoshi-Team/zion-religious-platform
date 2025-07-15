import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'History | Islam',
  description: 'The historical development of Islam from its origins to the present',
  keywords: 'Islam, history, islam history',
  openGraph: {
    title: 'History | Islam',
    description: 'The historical development of Islam from its origins to the present',
    images: [{ url: '/images/islam-history.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function IslamHistoryPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">History</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          The historical development of Islam from its origins to the present
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>History in Islam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about history in the context of islam. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of islam faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern islam communities</li>
              <li>Interconnections with other aspects of islam tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to islam. 
              For more detailed information, explore the other sections in our islam overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}