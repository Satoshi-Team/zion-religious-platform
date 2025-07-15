import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Buddhism | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Buddhist traditions, beliefs, practices, and history. Explore different schools, sacred texts, meditation practices, and philosophical concepts.',
  keywords: 'Buddhism, Buddhist faith, Buddhist schools, Buddhist philosophy, Buddhist practices, Buddhist history, Buddhist meditation, Buddhist traditions, Buddhist spirituality',
  openGraph: {
    title: 'Buddhism | Sacred Traditions and Practices',
    description: 'In-depth exploration of Buddhist faith, traditions, and practices across different schools and historical periods.',
    images: [{ url: '/images/buddhism-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function BuddhismOverviewPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Buddhism</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the profound wisdom, practices, and traditions of Buddhism across its major schools and historical developments
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="schools">Schools</TabsTrigger>
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
                <h3 className="text-xl font-semibold">The Four Noble Truths</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>The truth of suffering (Dukkha)</li>
                  <li>The truth of the cause of suffering (Samudāya)</li>
                  <li>The truth of the end of suffering (Nirodha)</li>
                  <li>The truth of the path to the end of suffering (Magga)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">The Noble Eightfold Path</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Wisdom (Prajñā)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Right Understanding</li>
                      <li>Right Intention</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Ethical Conduct (Śīla)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Right Speech</li>
                      <li>Right Action</li>
                      <li>Right Livelihood</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Mental Discipline (Samādhi)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Right Effort</li>
                      <li>Right Mindfulness</li>
                      <li>Right Concentration</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Pali Canon (Tipitaka)</h4>
                    <p className="text-sm mt-2">
                      The earliest collection of Buddhist scriptures, containing the teachings of the Buddha
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Mahayana Sutras</h4>
                    <p className="text-sm mt-2">
                      Later texts that emphasize the bodhisattva path and universal compassion
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