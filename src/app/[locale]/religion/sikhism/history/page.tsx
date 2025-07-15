import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'History | Sikhism',
  description: 'The historical development of Sikhism',
  keywords: 'Sikhism, history, sikhism history',
  openGraph: {
    title: 'History | Sikhism',
    description: 'The historical development of Sikhism',
    images: [{ url: '/images/sikhism-history.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function SikhismHistoryPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">History</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          The historical development of Sikhism
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>History in Sikhism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about history in the context of sikhism. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of sikhism faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern sikhism communities</li>
              <li>Interconnections with other aspects of sikhism tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to sikhism. 
              For more detailed information, explore the other sections in our sikhism overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}