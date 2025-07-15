import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Taoism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Taoist traditions, beliefs, practices, and history. Explore the Tao Te Ching, philosophical concepts, and spiritual practices.',
  keywords: 'Taoism, Taoist philosophy, Lao Tzu, Tao Te Ching, Chinese philosophy, Taoist practices, Taoist history, Taoist traditions',
  openGraph: {
    title: 'Taoism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Taoism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/taoism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function TaoismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Taoism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the ancient Chinese philosophy and religion emphasizing harmony with the Tao (the Way) and natural living
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
                  <li>The Tao (the Way)</li>
                  <li>Wu Wei (non-action)</li>
                  <li>Yin and Yang balance</li>
                  <li>Natural simplicity</li>
                  <li>Immortality and longevity</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Tao Te Ching</h4>
                    <p className="text-sm mt-2">
                      The fundamental text of Taoism attributed to Lao Tzu
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Zhuangzi</h4>
                    <p className="text-sm mt-2">
                      Philosophical text exploring Taoist concepts and stories
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