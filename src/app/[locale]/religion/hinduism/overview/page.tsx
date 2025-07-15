import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Hinduism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Hindu traditions, beliefs, practices, and history. Explore sacred texts, deities, philosophical schools, and spiritual practices.',
  keywords: 'Hinduism, Hindu faith, Hindu deities, Hindu philosophy, Hindu practices, Hindu history, Hindu scriptures, Hindu traditions, Hindu spirituality',
  openGraph: {
    title: 'Hinduism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Hindu faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/hinduism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function HinduismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Hinduism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the ancient wisdom, diverse traditions, and spiritual practices of Hinduism across its philosophical schools and historical developments
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deities">Deities</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Beliefs and Foundations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Central Concepts</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dharma (righteousness and duty)</li>
                  <li>Karma (action and its consequences)</li>
                  <li>Samsara (cycle of birth and rebirth)</li>
                  <li>Moksha (liberation from samsara)</li>
                  <li>Brahman (ultimate reality)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">The Four Goals of Life (Purusharthas)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Dharma (Righteousness)</h4>
                    <p className="text-sm mt-2">
                      Moral and ethical duties, religious obligations, and righteous living
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Artha (Prosperity)</h4>
                    <p className="text-sm mt-2">
                      Material success, wealth, and economic well-being
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Kama (Pleasure)</h4>
                    <p className="text-sm mt-2">
                      Aesthetic and sensual pleasures, love, and enjoyment
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Moksha (Liberation)</h4>
                    <p className="text-sm mt-2">
                      Spiritual liberation and freedom from the cycle of rebirth
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Vedas</h4>
                    <p className="text-sm mt-2">
                      The oldest sacred texts, containing hymns, rituals, and philosophical teachings
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Upanishads</h4>
                    <p className="text-sm mt-2">
                      Philosophical texts that explore the nature of reality and consciousness
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Bhagavad Gita</h4>
                    <p className="text-sm mt-2">
                      A sacred dialogue between Krishna and Arjuna on duty and spirituality
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Puranas</h4>
                    <p className="text-sm mt-2">
                      Ancient texts containing myths, legends, and religious teachings
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