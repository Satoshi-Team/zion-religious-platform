import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Bahá\'í Faith | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Bahá\'í traditions, beliefs, practices, and history. Explore the teachings of Bahá\'u\'lláh, unity principles, and spiritual practices.',
  keywords: 'Bahá\'í Faith, Bahá\'u\'lláh, Bahá\'í teachings, Bahá\'í practices, Bahá\'í history, Bahá\'í traditions, Bahá\'í spirituality',
  openGraph: {
    title: 'Bahá\'í Faith | Sacred Traditions and Practices',
    description: 'Comprehensive guide to Bahá\'í traditions, beliefs, practices, and history. Explore the teachings of Bahá\'u\'lláh, unity principles, and spiritual practices.',
    images: [{ url: '/images/bahai-overview.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function BahaiFaithOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Bahá'í Faith</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the monotheistic religion founded by Bahá'u'lláh, emphasizing the unity of humanity and progressive revelation
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
                  <li>Unity of God</li>
                  <li>Unity of religion</li>
                  <li>Unity of humanity</li>
                  <li>Progressive revelation</li>
                  <li>World peace and justice</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Kitáb-i-Aqdas</h4>
                    <p className="text-sm mt-2">
                      The Most Holy Book, the central book of Bahá'í laws
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Kitáb-i-Íqán</h4>
                    <p className="text-sm mt-2">
                      The Book of Certitude, explaining the nature of divine revelation
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