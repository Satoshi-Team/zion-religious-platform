import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Judaism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Jewish traditions, beliefs, practices, and history. Explore sacred texts, theological concepts, and spiritual practices.',
  keywords: 'Judaism, Jewish faith, Torah, Talmud, Jewish theology, Jewish practices, Jewish history, Jewish traditions, Jewish spirituality',
  openGraph: {
    title: 'Judaism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Judaism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/judaism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function JudaismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Judaism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the ancient monotheistic faith, traditions, and practices of Judaism across its major movements and historical developments
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
                  <li>Monotheism - belief in one God</li>
                  <li>Covenant relationship with God</li>
                  <li>Divine revelation through Torah</li>
                  <li>Messianic hope and redemption</li>
                  <li>Ethical monotheism and social justice</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Torah</h4>
                    <p className="text-sm mt-2">
                      The Five Books of Moses, the foundation of Jewish law and tradition
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Talmud</h4>
                    <p className="text-sm mt-2">
                      Rabbinic commentary and interpretation of the Torah
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Tanakh</h4>
                    <p className="text-sm mt-2">
                      The Hebrew Bible containing Torah, Prophets, and Writings
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