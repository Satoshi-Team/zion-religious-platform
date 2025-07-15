import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Protestant Christianity | History, Traditions, and Beliefs',
  description: 'Comprehensive guide to Protestant Christianity, including major denominations, theological principles, and historical development. Explore Protestant beliefs, practices, and diverse traditions.',
  keywords: [
    'Protestant Christianity',
    'Protestant Reformation',
    'Protestant denominations',
    'Protestant theology',
    'Sola scriptura',
    'Sola fide',
    'Lutheran Church',
    'Reformed Churches',
    'Baptist Churches',
    'Methodist Churches',
    'Protestant worship',
    'Protestant ethics'
  ].join(', '),
  openGraph: {
    title: 'Protestant Christianity | Comprehensive Guide to Protestant Traditions',
    description: 'In-depth exploration of Protestant Christianity, its theological principles, major denominations, and historical development.',
    images: [{ url: '/images/protestant-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface ProtestantTradition {
  id: string
  name: string
  founder: string
  established: string
  keyPrinciples: string[]
  distinctiveFeatures: string[]
  majorBranches: string[]
  significantFigures: Array<{
    name: string
    period: string
    contributions: string[]
  }>
  url: string
}

const protestantTraditions: ProtestantTradition[] = [
  {
    id: 'lutheran',
    name: 'Lutheran',
    founder: 'Martin Luther',
    established: '1517',
    keyPrinciples: [
      'Justification by faith alone',
      'Scripture as sole authority',
      'Priesthood of all believers',
      'Two sacraments: Baptism and Eucharist'
    ],
    distinctiveFeatures: [
      'Law and Gospel distinction',
      'Consubstantiation in Eucharist',
      'Strong emphasis on liturgical worship',
      'Conservative reformation principles'
    ],
    majorBranches: [
      'Evangelical Lutheran Church in America (ELCA)',
      'Lutheran Church—Missouri Synod (LCMS)',
      'Wisconsin Evangelical Lutheran Synod (WELS)'
    ],
    significantFigures: [
      {
        name: 'Martin Luther',
        period: '1483-1546',
        contributions: [
          'Ninety-five Theses',
          'Translation of Bible into German',
          'Small and Large Catechisms',
          'Reformation theology development'
        ]
      },
      {
        name: 'Philip Melanchthon',
        period: '1497-1560',
        contributions: [
          'Augsburg Confession',
          'Lutheran systematic theology',
          'Educational reforms',
          'Ecumenical dialogues'
        ]
      }
    ],
    url: '/religion/christianity/protestant/lutheran'
  },
  {
    id: 'reformed',
    name: 'Reformed/Presbyterian',
    founder: 'John Calvin',
    established: '1536',
    keyPrinciples: [
      'Divine sovereignty',
      'Covenant theology',
      'Predestination',
      'Reformed worship regulation'
    ],
    distinctiveFeatures: [
      'TULIP theology',
      'Presbyterian church governance',
      'Emphasis on God\'s glory',
      'Cultural transformation focus'
    ],
    majorBranches: [
      'Presbyterian Church (USA)',
      'Presbyterian Church in America (PCA)',
      'Reformed Church in America (RCA)'
    ],
    significantFigures: [
      {
        name: 'John Calvin',
        period: '1509-1564',
        contributions: [
          'Institutes of the Christian Religion',
          'Geneva church organization',
          'Biblical commentaries',
          'Reformed systematic theology'
        ]
      },
      {
        name: 'Heinrich Bullinger',
        period: '1504-1575',
        contributions: [
          'Second Helvetic Confession',
          'Covenant theology development',
          'Reformed church leadership',
          'Protestant unity efforts'
        ]
      }
    ],
    url: '/religion/christianity/protestant/reformed'
  }
  // Additional traditions defined here...
]

const academicResources = [
  {
    title: 'Yale Divinity School',
    url: 'https://divinity.yale.edu/',
    description: 'Leading Protestant theological institution offering extensive resources on Protestant theology and history.',
    type: 'academic'
  },
  {
    title: 'Princeton Theological Seminary',
    url: 'https://www.ptsem.edu/',
    description: 'Historic Reformed seminary with comprehensive Protestant theological resources.',
    type: 'academic'
  },
  {
    title: 'Luther Seminary',
    url: 'https://www.luthersem.edu/',
    description: 'Major Lutheran seminary providing resources on Protestant theology and ministry.',
    type: 'academic'
  }
]

export default function ProtestantChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Protestant Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the diverse traditions, theological principles, and historical development
          of Protestant Christianity from the Reformation to the present day
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="worship">Worship</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>The Protestant Reformation and Its Legacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Reformation Period (16th Century)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Luther's 95 Theses (1517)</li>
                      <li>Spread of Reformed theology</li>
                      <li>Development of Protestant confessions</li>
                      <li>Formation of Protestant churches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Protestant Development</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Confessional movements</li>
                      <li>Pietism and revivals</li>
                      <li>Missionary movements</li>
                      <li>Modern denominationalism</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Protestant Principles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Five Solas</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Sola Scriptura (Scripture alone)</li>
                      <li>Sola Fide (Faith alone)</li>
                      <li>Sola Gratia (Grace alone)</li>
                      <li>Solus Christus (Christ alone)</li>
                      <li>Soli Deo Gloria (Glory to God alone)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Key Doctrines</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Priesthood of all believers</li>
                      <li>Biblical authority</li>
                      <li>Justification by faith</li>
                      <li>Two sacraments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Major Traditions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {protestantTraditions.map((tradition) => (
                    <Link 
                      key={tradition.id}
                      href={tradition.url}
                      className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <h4 className="font-medium">{tradition.name}</h4>
                      <p className="text-sm mt-2">Founded: {tradition.established}</p>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.keyPrinciples.slice(0, 2).map((principle, index) => (
                          <li key={index}>{principle}</li>
                        ))}
                      </ul>
                    </Link>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Additional TabsContent sections... */}
      </Tabs>
    </div>
  )
} 