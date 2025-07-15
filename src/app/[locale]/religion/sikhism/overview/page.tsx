import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Sikhism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Sikh traditions, beliefs, practices, and history. Explore the teachings of the Gurus, sacred texts, and spiritual practices.',
  keywords: 'Sikhism, Sikh faith, Guru Granth Sahib, Sikh theology, Sikh practices, Sikh history, Sikh traditions, Sikh spirituality',
  openGraph: {
    title: 'Sikhism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Sikhism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/sikhism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function SikhismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Sikhism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the monotheistic faith, traditions, and practices of Sikhism founded by Guru Nanak and developed through ten Gurus
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
          <TabsTrigger value="teachings">Teachings</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Beliefs and Foundations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Central Beliefs</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>One God (Ik Onkar)</li>
                  <li>Equality of all human beings</li>
                  <li>Service to humanity (Seva)</li>
                  <li>Honest living and sharing</li>
                  <li>Meditation on God's name</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Guru Granth Sahib</h4>
                    <p className="text-sm mt-2">
                      The holy scripture containing the teachings of the Sikh Gurus
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Dasam Granth</h4>
                    <p className="text-sm mt-2">
                      Collection of writings by Guru Gobind Singh
                    </p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Additional tab content components... */}
      </Tabs>
    </div>
  )
}