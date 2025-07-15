import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Jainism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Jain traditions, beliefs, practices, and history. Explore the principles of non-violence, sacred texts, and spiritual practices.',
  keywords: 'Jainism, Jain faith, Ahimsa, Jain philosophy, Jain practices, Jain history, Jain traditions, Jain spirituality',
  openGraph: {
    title: 'Jainism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Jainism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/jainism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function JainismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Jainism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the ancient Indian religion emphasizing non-violence, truth, and spiritual liberation through the teachings of the Tirthankaras
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
                  <li>Ahimsa (non-violence)</li>
                  <li>Anekantavada (multiple viewpoints)</li>
                  <li>Aparigraha (non-attachment)</li>
                  <li>Karma and rebirth</li>
                  <li>Path to liberation (Moksha)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Agamas</h4>
                    <p className="text-sm mt-2">
                      Sacred texts containing the teachings of the Tirthankaras
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Tattvartha Sutra</h4>
                    <p className="text-sm mt-2">
                      Comprehensive text on Jain philosophy and ethics
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