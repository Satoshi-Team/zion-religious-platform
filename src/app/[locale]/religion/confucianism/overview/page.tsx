import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Confucianism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Confucian traditions, beliefs, practices, and history. Explore the teachings of Confucius, ethical principles, and cultural practices.',
  keywords: 'Confucianism, Confucian philosophy, Confucius, Chinese philosophy, Confucian ethics, Confucian practices, Confucian history, Confucian traditions',
  openGraph: {
    title: 'Confucianism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Confucianism faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/confucianism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function ConfucianismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Confucianism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the ethical and philosophical system based on the teachings of Confucius, emphasizing moral cultivation and social harmony
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
                  <li>Ren (humaneness/benevolence)</li>
                  <li>Li (ritual propriety)</li>
                  <li>Xiao (filial piety)</li>
                  <li>Zhong (loyalty)</li>
                  <li>Self-cultivation and education</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Analects</h4>
                    <p className="text-sm mt-2">
                      Collection of sayings and ideas attributed to Confucius
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Five Classics</h4>
                    <p className="text-sm mt-2">
                      Ancient Chinese texts including the Book of Changes and Book of Poetry
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