import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Islam | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Islamic traditions, beliefs, practices, and history. Explore the Five Pillars, sacred texts, theological concepts, and spiritual practices.',
  keywords: 'Islam, Islamic faith, Five Pillars, Quran, Hadith, Islamic theology, Islamic practices, Islamic history, Islamic traditions, Islamic spirituality',
  openGraph: {
    title: 'Islam | Sacred Traditions and Practices',
    description: 'In-depth exploration of Islamic faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/islam-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function IslamOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Islam</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the monotheistic faith, traditions, and practices of Islam across its major schools and historical developments
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pillars">Five Pillars</TabsTrigger>
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
                <h3 className="text-xl font-semibold">Six Articles of Faith</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Belief in Allah (God)</li>
                  <li>Belief in the Angels</li>
                  <li>Belief in the Revealed Books</li>
                  <li>Belief in the Prophets and Messengers</li>
                  <li>Belief in the Day of Judgment</li>
                  <li>Belief in Divine Decree (Qadar)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">The Five Pillars of Islam</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Shahada (Declaration of Faith)</h4>
                    <p className="text-sm mt-2">
                      "There is no god but Allah, and Muhammad is the messenger of Allah"
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Salah (Prayer)</h4>
                    <p className="text-sm mt-2">
                      Five daily prayers performed at specific times
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Zakat (Charity)</h4>
                    <p className="text-sm mt-2">
                      Obligatory giving of a portion of wealth to those in need
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sawm (Fasting)</h4>
                    <p className="text-sm mt-2">
                      Fasting during the month of Ramadan
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Hajj (Pilgrimage)</h4>
                    <p className="text-sm mt-2">
                      Pilgrimage to Mecca at least once in a lifetime
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Quran</h4>
                    <p className="text-sm mt-2">
                      The holy book of Islam, believed to be the word of Allah revealed to Prophet Muhammad
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Hadith</h4>
                    <p className="text-sm mt-2">
                      Collections of sayings and actions of Prophet Muhammad
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