import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Christianity | Sacred Traditions and Practices',
  description: 'Comprehensive guide to Christian traditions, beliefs, practices, and history. Explore denominations, sacred texts, liturgical traditions, and theological concepts.',
  keywords: 'Christianity, Christian faith, Christian denominations, Christian theology, Christian practices, Christian history, Biblical studies, Christian traditions, Christian worship, Christian spirituality',
  openGraph: {
    title: 'Christianity | Sacred Traditions and Practices',
    description: 'In-depth exploration of Christian faith, traditions, and practices across different denominations and historical periods.',
    images: [{ url: '/images/christianity-overview.jpg', width: 1200, height: 630 }]
  }
}

interface Denomination {
  id: string
  name: string
  founded: string
  adherents: string
  mainBeliefs: string[]
  distinctiveFeatures: string[]
  practices: {
    worship: string[]
    sacraments: string[]
    holidays: string[]
  }
  organization: {
    structure: string
    leadership: string
    governance: string
  }
}

interface TheologicalTradition {
  id: string
  name: string
  period: string
  keyFigures: Array<{
    name: string
    dates: string
    contributions: string[]
  }>
  mainConcepts: string[]
  texts: Array<{
    title: string
    author: string
    significance: string
  }>
}

export default function ChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the rich traditions, beliefs, and practices of Christianity across its major denominations and historical developments
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="denominations">Denominations</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
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
                  <li>Monotheism and the Trinity doctrine</li>
                  <li>Divinity and humanity of Jesus Christ</li>
                  <li>Salvation through faith in Christ</li>
                  <li>Authority of Scripture</li>
                  <li>Resurrection and eternal life</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Early Church (1st-3rd centuries)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Apostolic period and early Christian communities</li>
                      <li>Development of church structure</li>
                      <li>Early Christian writings and canon formation</li>
                      <li>Persecution and martyrdom</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Medieval Period (4th-15th centuries)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      <li>Establishment of Christian orthodoxy</li>
                      <li>Rise of monasticism</li>
                      <li>East-West Schism</li>
                      <li>Scholasticism and theological development</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Old Testament</h4>
                    <p className="text-sm mt-2">
                      Collection of ancient Hebrew scriptures, including the Torah,
                      Prophets, and Writings, forming the first part of the Christian Bible
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">New Testament</h4>
                    <p className="text-sm mt-2">
                      27 books including the Gospels, Acts, Epistles, and Revelation,
                      focusing on Jesus's life, early church, and Christian teachings
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