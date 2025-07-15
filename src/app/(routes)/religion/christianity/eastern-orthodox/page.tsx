import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Eastern Orthodox Christianity | Ancient Traditions and Modern Practice',
  description: 'Comprehensive guide to Eastern Orthodox Christianity, including theology, liturgy, spirituality, and traditions of the Eastern Orthodox Church. Explore Orthodox beliefs, practices, and rich spiritual heritage.',
  keywords: [
    'Eastern Orthodox Church',
    'Orthodox Christianity',
    'Divine Liturgy',
    'Orthodox theology',
    'Orthodox traditions',
    'Orthodox spirituality',
    'Orthodox icons',
    'Orthodox saints',
    'Orthodox monasticism',
    'Orthodox sacraments',
    'Orthodox mysticism',
    'Orthodox ecclesiology'
  ].join(', '),
  openGraph: {
    title: 'Eastern Orthodox Christianity | Sacred Traditions and Practices',
    description: 'In-depth exploration of Eastern Orthodox Christianity, its theological heritage, liturgical life, and spiritual practices.',
    images: [{ url: '/images/eastern-orthodox.jpg', width: 1200, height: 630 }]
  }
}

interface PatriarchateInfo {
  name: string
  location: string
  founded: string
  jurisdiction: string[]
  currentPatriarch: string
  significance: string[]
}

interface TheologicalConcept {
  name: string
  description: string
  significance: string[]
  keyTexts: string[]
  relatedPractices: string[]
}

const ancientPatriarchates: PatriarchateInfo[] = [
  {
    name: 'Ecumenical Patriarchate of Constantinople',
    location: 'Istanbul, Turkey',
    founded: '330 AD',
    jurisdiction: [
      'Direct jurisdiction in Turkey and parts of Greece',
      'Coordination role among Orthodox churches',
      'Oversight of Mount Athos',
      'Diaspora communities in Europe and Americas'
    ],
    currentPatriarch: 'Bartholomew I',
    significance: [
      'First among equals in Orthodox hierarchy',
      'Historical continuation of Byzantine Church',
      'Center of Pan-Orthodox unity',
      'Leader in inter-Christian dialogue'
    ]
  },
  {
    name: 'Patriarchate of Alexandria',
    location: 'Alexandria, Egypt',
    founded: '42 AD',
    jurisdiction: [
      'All of Africa',
      'Historical See of Saint Mark',
      'Orthodox missions in Sub-Saharan Africa'
    ],
    currentPatriarch: 'Theodore II',
    significance: [
      'Second in honorary rank',
      'Apostolic foundation',
      'Major center of early Christian theology',
      'Modern African mission work'
    ]
  }
  // Additional patriarchates would be listed here
]

const officialResources = [
  {
    title: 'Ecumenical Patriarchate of Constantinople',
    url: 'https://www.patriarchate.org/',
    description: 'Official website of the Ecumenical Patriarchate, the spiritual center of Orthodox Christianity.',
    type: 'official'
  },
  {
    title: 'Greek Orthodox Archdiocese of America',
    url: 'https://www.goarch.org/',
    description: 'Official site of the Greek Orthodox Church in America, offering resources on Orthodox faith and practice.',
    type: 'official'
  },
  {
    title: 'Orthodox Church in America (OCA)',
    url: 'https://www.oca.org/',
    description: 'Comprehensive resource for Orthodox Christianity in North America, including theological and liturgical materials.',
    type: 'official'
  }
]

const academicResources = [
  {
    title: 'St. Vladimir\'s Orthodox Theological Seminary',
    url: 'https://www.svots.edu/',
    description: 'Leading Orthodox seminary offering academic resources and publications on Orthodox theology.',
    type: 'academic'
  },
  {
    title: 'Holy Cross Greek Orthodox School of Theology',
    url: 'https://www.hchc.edu/',
    description: 'Academic institution dedicated to Orthodox theological education and research.',
    type: 'academic'
  },
  {
    title: 'Orthodox Christian Studies Center at Fordham University',
    url: 'https://www.fordham.edu/orthodoxy',
    description: 'Academic center for Orthodox Christian studies and research.',
    type: 'academic'
  }
]

export default function EasternOrthodoxPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Eastern Orthodox Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the ancient traditions, theology, and practices of the Eastern Orthodox Church,
          maintaining unbroken continuity with the apostolic church
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="spirituality">Spirituality</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development and Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Apostolic Origins</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Early Church Period</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Apostolic foundations in Jerusalem, Antioch, and Alexandria</li>
                      <li>Development of liturgical traditions</li>
                      <li>Early church fathers and theological development</li>
                      <li>Formation of canonical tradition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Byzantine Era</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Constantinople as New Rome</li>
                      <li>Ecumenical Councils (325-787 AD)</li>
                      <li>Development of iconography</li>
                      <li>Monastic traditions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Distinctive Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Theological Emphasis</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Divine mystery and apophatic theology</li>
                      <li>Theosis (deification)</li>
                      <li>Essence-energies distinction</li>
                      <li>Pneumatological focus</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Liturgical Life</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Divine Liturgy centrality</li>
                      <li>Liturgical calendar and fasts</li>
                      <li>Sacred art and iconography</li>
                      <li>Mystical worship tradition</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Contemporary Church</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Global Presence</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Over 200 million adherents worldwide</li>
                      <li>Autocephalous churches structure</li>
                      <li>Diaspora communities</li>
                      <li>Missionary activities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Modern Challenges</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Inter-Orthodox relations</li>
                      <li>Ecumenical dialogue</li>
                      <li>Secularization response</li>
                      <li>Cultural adaptation</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theology" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Orthodox Theology and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Doctrinal Foundations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Holy Trinity</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>One essence, three persons</li>
                      <li>Monarchy of the Father</li>
                      <li>Double procession controversy</li>
                      <li>Trinitarian theology in worship</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Christology</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Chalcedonian definition</li>
                      <li>Hypostatic union</li>
                      <li>Theotokos doctrine</li>
                      <li>Salvation through incarnation</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Soteriology</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Theosis</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Deification of human nature</li>
                      <li>Participation in divine life</li>
                      <li>Role of the Holy Spirit</li>
                      <li>Ascetic practice</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Ecclesiology</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Body of Christ</li>
                      <li>Conciliar nature</li>
                      <li>Apostolic succession</li>
                      <li>Sacramental life</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Additional TabsContent sections for liturgy, spirituality, structure, and resources... */}
      </Tabs>
    </div>
  )
} 