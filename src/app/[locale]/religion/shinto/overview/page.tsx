import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Shinto | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Shinto traditions, beliefs, practices, and history. Explore kami worship, rituals, and spiritual practices.',
  keywords: 'Shinto, Shinto faith, Kami, Japanese religion, Shinto practices, Shinto history, Shinto traditions, Shinto spirituality',
  openGraph: {
    title: 'Shinto | Sacred Traditions and Practices',
    description: 'In-depth exploration of Shinto faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/shinto-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function ShintoOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Shinto</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the indigenous religion of Japan emphasizing reverence for kami (spirits) and harmony with nature
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
                  <li>Kami (spirits/deities)</li>
                  <li>Harmony with nature</li>
                  <li>Purity and purification</li>
                  <li>Ancestor veneration</li>
                  <li>Ritual practices</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Kojiki</h4>
                    <p className="text-sm mt-2">
                      Records of Ancient Matters, the oldest chronicle of Japan
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Nihon Shoki</h4>
                    <p className="text-sm mt-2">
                      Chronicles of Japan, historical and mythological text
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