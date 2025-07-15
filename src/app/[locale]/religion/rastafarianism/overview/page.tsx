import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Rastafarianism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Rastafarian traditions, beliefs, practices, and history. Explore the teachings, cultural practices, and spiritual beliefs.',
  keywords: 'Rastafarianism, Rastafarian faith, Haile Selassie, Rastafarian practices, Rastafarian history, Rastafarian traditions, Rastafarian spirituality',
  openGraph: {
    title: 'Rastafarianism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Rastafarianism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/rastafarianism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function RastafarianismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Rastafarianism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the religious and cultural movement that emerged in Jamaica, emphasizing African identity and spiritual liberation
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
                  <li>Divinity of Haile Selassie I</li>
                  <li>African identity and pride</li>
                  <li>Repatriation to Africa</li>
                  <li>Natural living and Ital diet</li>
                  <li>Resistance to oppression</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Holy Piby</h4>
                    <p className="text-sm mt-2">
                      The Black Man's Bible, a key Rastafarian text
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Bible</h4>
                    <p className="text-sm mt-2">
                      Interpreted through Rastafarian perspective and African lens
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