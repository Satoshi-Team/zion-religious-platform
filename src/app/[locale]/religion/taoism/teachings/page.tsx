import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Teachings | Taoism',
  description: 'Core teachings and philosophy of Taoism',
  keywords: 'Taoism, teachings, taoism teachings',
  openGraph: {
    title: 'Teachings | Taoism',
    description: 'Core teachings and philosophy of Taoism',
    images: [{ url: '/images/taoism-teachings.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function TaoismTeachingsPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Teachings</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Core teachings and philosophy of Taoism
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Teachings in Taoism</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground">
              This page provides comprehensive information about teachings in the context of taoism. 
              Explore the key concepts, historical development, and contemporary significance of this important aspect of taoism faith and practice.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical development and origins</li>
              <li>Core principles and concepts</li>
              <li>Contemporary practices and applications</li>
              <li>Significance in modern taoism communities</li>
              <li>Interconnections with other aspects of taoism tradition</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to taoism. 
              For more detailed information, explore the other sections in our taoism overview.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}