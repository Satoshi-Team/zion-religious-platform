import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Practices | Hinduism',
  description: 'Hindu religious practices and rituals',
  keywords: 'Hinduism, practices, hinduism practices',
  openGraph: {
    title: 'Practices | Hinduism',
    description: 'Hindu religious practices and rituals',
    images: [{ url: '/images/hinduism-practices.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function HinduismPracticesPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Practices</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Hindu religious practices and rituals
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Practices in Hinduism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about practices in the context of hinduism. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of hinduism faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern hinduism communities</li>
              <li>Interconnections with other aspects of hinduism tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to hinduism. 
              For more detailed information, explore the other sections in our hinduism overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}