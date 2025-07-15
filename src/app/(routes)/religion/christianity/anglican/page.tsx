import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Anglican Christianity | History, Traditions, and Practice',
  description: 'Comprehensive guide to Anglican Christianity, including its history, theology, liturgy, and worldwide communion. Explore Anglican traditions, worship practices, and contemporary expressions.',
  keywords: [
    'Anglican Church',
    'Church of England',
    'Anglican Communion',
    'Episcopal Church',
    'Anglican theology',
    'Book of Common Prayer',
    'Anglican liturgy',
    'Anglican sacraments',
    'Via Media',
    'Anglican spirituality',
    'Anglican orders',
    'Anglican traditions'
  ].join(', '),
  openGraph: {
    title: 'Anglican Christianity | Comprehensive Guide to Anglican Faith',
    description: 'In-depth exploration of Anglican Christianity, its theological heritage, liturgical traditions, and global communion.',
    images: [{ url: '/images/anglican-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface AnglicanProvince {
  name: string
  location: string
  founded: string
  members: string
  primate: string
  distinctives: string[]
  website: string
}

const majorProvinces: AnglicanProvince[] = [
  {
    name: 'Church of England',
    location: 'England',
    founded: '597 AD (Roman Mission), 1534 (Independence)',
    members: '25 million (nominal)',
    primate: 'Archbishop of Canterbury',
    distinctives: [
      'Mother church of Anglican Communion',
      'Established church status',
      'Cathedral tradition',
      'Parish system'
    ],
    website: 'https://www.churchofengland.org'
  },
  {
    name: 'Episcopal Church (USA)',
    location: 'United States',
    founded: '1789',
    members: '1.8 million',
    primate: 'Presiding Bishop',
    distinctives: [
      'Progressive theological stance',
      'Strong social justice emphasis',
      'Inclusive ministry policies',
      'Rich liturgical tradition'
    ],
    website: 'https://www.episcopalchurch.org'
  },
  {
    name: 'Church of Nigeria',
    location: 'Nigeria',
    founded: '1864',
    members: '18 million',
    primate: 'Archbishop of Nigeria',
    distinctives: [
      'Largest Anglican province',
      'Conservative theology',
      'Rapid growth',
      'Strong evangelistic focus'
    ],
    website: 'https://anglican-nig.org'
  }
]

const liturgicalResources = [
  {
    title: 'Book of Common Prayer (1662)',
    type: 'Primary Liturgical Text',
    description: 'Standard liturgical text of the Anglican Communion',
    contents: [
      'Daily Office',
      'Holy Communion service',
      'Baptism and Confirmation rites',
      'Ordination services',
      'Psalter',
      'Lectionary'
    ],
    url: 'https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/book-common-prayer'
  },
  {
    title: 'Common Worship',
    type: 'Modern Liturgical Series',
    description: 'Contemporary Church of England services and resources',
    contents: [
      'Services for Principal Feasts',
      'Contemporary language liturgies',
      'Alternative services',
      'Pastoral services'
    ],
    url: 'https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/common-worship'
  }
]

const academicResources = [
  {
    title: 'Oxford Centre for Anglican Studies',
    url: 'https://www.oxford.anglican.org',
    description: 'Research center for Anglican theology and history.',
    type: 'academic'
  },
  {
    title: 'Virginia Theological Seminary',
    url: 'https://www.vts.edu',
    description: 'Largest Episcopal seminary in the United States.',
    type: 'academic'
  },
  {
    title: 'Cranmer Hall, Durham',
    url: 'https://www.cranmerhall.com',
    description: 'Anglican theological college within Durham University.',
    type: 'academic'
  }
]

interface TheologicalTradition {
  name: string
  description: string
  keyFigures: Array<{
    name: string
    dates: string
    contributions: string[]
  }>
  principles: string[]
}

const anglicanTraditions: TheologicalTradition[] = [
  {
    name: 'High Church/Anglo-Catholic',
    description: 'Emphasizes Catholic heritage and sacramental theology',
    keyFigures: [
      {
        name: 'Edward Bouverie Pusey',
        dates: '1800-1882',
        contributions: [
          'Oxford Movement leader',
          'Sacramental theology',
          'Church renewal',
          'Patristic scholarship'
        ]
      },
      {
        name: 'John Henry Newman',
        dates: '1801-1890',
        contributions: [
          'Tract 90',
          'Development of doctrine',
          'Anglican identity',
          'Liturgical renewal'
        ]
      }
    ],
    principles: [
      'Apostolic succession',
      'Seven sacraments',
      'Real Presence',
      'Liturgical ceremonial'
    ]
  },
  {
    name: 'Evangelical Anglican',
    description: 'Emphasizes Biblical authority and Reformed theology',
    keyFigures: [
      {
        name: 'J.C. Ryle',
        dates: '1816-1900',
        contributions: [
          'Biblical preaching',
          'Protestant doctrine',
          'Pastoral leadership',
          'Evangelical spirituality'
        ]
      },
      {
        name: 'John Stott',
        dates: '1921-2011',
        contributions: [
          'Biblical exposition',
          'Evangelical leadership',
          'Global mission',
          'Social engagement'
        ]
      }
    ],
    principles: [
      'Biblical authority',
      'Justification by faith',
      'Personal conversion',
      'Evangelistic mission'
    ]
  }
]

export default function AnglicanChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Anglican Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the rich heritage, liturgical traditions, and global communion of
          Anglican Christianity, from its origins to contemporary expression
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="communion">Communion</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Anglican Heritage and Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Early Origins</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Celtic Christianity (2nd-7th centuries)</li>
                      <li>Augustine's Roman Mission (597)</li>
                      <li>Synod of Whitby (664)</li>
                      <li>Medieval English Church</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">English Reformation</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Henry VIII's Break with Rome (1534)</li>
                      <li>Elizabethan Settlement (1559)</li>
                      <li>Development of Via Media</li>
                      <li>Book of Common Prayer (1549, 1552, 1662)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Anglican Identity</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Scripture, Tradition, and Reason</li>
                      <li>Via Media approach</li>
                      <li>Liturgical worship</li>
                      <li>Episcopal governance</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Global Presence</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Anglican Communion structure</li>
                      <li>Cultural adaptation</li>
                      <li>Mission heritage</li>
                      <li>Contemporary challenges</li>
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
              <CardTitle>Anglican Theology and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Theological Foundations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sources of Authority</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Holy Scripture as primary authority</li>
                      <li>Catholic tradition</li>
                      <li>Reason and experience</li>
                      <li>Anglican formularies</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Doctrinal Statements</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Thirty-Nine Articles</li>
                      <li>Chicago-Lambeth Quadrilateral</li>
                      <li>Book of Common Prayer</li>
                      <li>Modern statements</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacramental Theology</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Dominical Sacraments</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Baptismal regeneration</li>
                      <li>Eucharistic doctrine</li>
                      <li>Real Presence understanding</li>
                      <li>Sacramental grace</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Other Sacramental Rites</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Confirmation</li>
                      <li>Holy Orders</li>
                      <li>Holy Matrimony</li>
                      <li>Anointing of the Sick</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liturgy" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Anglican Worship and Liturgy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Liturgical Tradition</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {liturgicalResources.map((resource) => (
                    <div key={resource.title} className="p-4 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{resource.title}</h4>
                        <Badge>{resource.type}</Badge>
                      </div>
                      <p className="text-sm mt-2">{resource.description}</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Contents:</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {resource.contents.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={resource.url}
                        className="text-primary hover:underline text-sm block mt-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Access Resource
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Liturgical Calendar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Major Seasons</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Advent and Christmas</li>
                      <li>Epiphany</li>
                      <li>Lent and Easter</li>
                      <li>Pentecost and Trinity</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Special Observances</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Saints' Days</li>
                      <li>Holy Week services</li>
                      <li>Ember Days</li>
                      <li>National observances</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communion" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Anglican Communion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Global Structure</h3>
                <div className="grid gap-4">
                  {majorProvinces.map((province) => (
                    <div key={province.name} className="p-4 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{province.name}</h4>
                        <Badge>{province.founded}</Badge>
                      </div>
                      <p className="text-sm mt-2">Location: {province.location}</p>
                      <p className="text-sm">Members: {province.members}</p>
                      <p className="text-sm">Primate: {province.primate}</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Distinctive Features:</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {province.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={province.website}
                        className="text-primary hover:underline text-sm block mt-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Official Website
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traditions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Anglican Traditions and Churchmanship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                {anglicanTraditions.map((tradition) => (
                  <div key={tradition.name} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">{tradition.name}</h4>
                    <p className="text-sm mt-2">{tradition.description}</p>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium">Key Figures:</h5>
                        {tradition.keyFigures.map((figure) => (
                          <div key={figure.name} className="mt-2">
                            <p className="text-sm font-medium">{figure.name} ({figure.dates})</p>
                            <ul className="list-disc list-inside mt-1 text-sm">
                              {figure.contributions.map((contribution, index) => (
                                <li key={index}>{contribution}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Key Principles:</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {tradition.principles.map((principle, index) => (
                            <li key={index}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic and Educational Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Academic Institutions</h3>
                {academicResources.map((resource) => (
                  <div key={resource.url} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{resource.title}</h4>
                      <Badge>{resource.type}</Badge>
                    </div>
                    <p className="text-sm mt-2">{resource.description}</p>
                    <a
                      href={resource.url}
                      className="text-primary hover:underline text-sm block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Institution
                    </a>
                  </div>
                ))}
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 