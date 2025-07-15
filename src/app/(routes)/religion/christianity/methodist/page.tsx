import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Methodist Christianity | Wesleyan Heritage and Practice',
  description: 'Comprehensive guide to Methodist Christianity, including Wesleyan theology, social holiness, worship practices, and global Methodist connections. Explore Methodist traditions, beliefs, and contemporary expressions.',
  keywords: [
    'Methodist Church',
    'Wesleyan theology',
    'John Wesley',
    'Methodist worship',
    'Social holiness',
    'Methodist doctrine',
    'Methodist traditions',
    'Methodist class meetings',
    'Methodist circuit riders',
    'Wesleyan Quadrilateral',
    'Methodist social justice',
    'Methodist spirituality'
  ].join(', '),
  openGraph: {
    title: 'Methodist Christianity | Comprehensive Guide to Methodist Faith',
    description: 'In-depth exploration of Methodist Christianity, its theological heritage, social witness, and contemporary practice.',
    images: [{ url: '/images/methodist-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface MethodistDenomination {
  name: string
  location: string
  founded: string
  members: string
  distinctives: string[]
  website: string
}

const majorDenominations: MethodistDenomination[] = [
  {
    name: 'United Methodist Church',
    location: 'Global (HQ in USA)',
    founded: '1968',
    members: '6.3 million (USA), 12.7 million (global)',
    distinctives: [
      'Largest Methodist denomination globally',
      'Connectional polity',
      'Strong missions focus',
      'Social principles emphasis'
    ],
    website: 'https://www.umc.org'
  },
  {
    name: 'Methodist Church in Britain',
    location: 'United Kingdom',
    founded: '1932',
    members: '164,000',
    distinctives: [
      'Original Methodist homeland',
      'Ecumenical engagement',
      'Social justice emphasis',
      'Fresh expressions of church'
    ],
    website: 'https://www.methodist.org.uk'
  },
  {
    name: 'African Methodist Episcopal Church',
    location: 'Global (HQ in USA)',
    founded: '1816',
    members: '2.5 million',
    distinctives: [
      'Historic Black Methodist denomination',
      'Strong social justice tradition',
      'Educational emphasis',
      'Liberation theology influence'
    ],
    website: 'https://www.ame-church.com'
  }
]

interface WesleyanDoctrine {
  name: string
  description: string
  keyScriptures: string[]
  wesleyQuotes: string[]
  modernApplication: string[]
}

const wesleyanDoctrines: WesleyanDoctrine[] = [
  {
    name: 'Prevenient Grace',
    description: 'God\'s grace that goes before, enabling human response to divine love',
    keyScriptures: [
      'John 6:44',
      'Philippians 2:13',
      'Titus 2:11',
      '1 John 4:19'
    ],
    wesleyQuotes: [
      'Preventing [prevenient] grace, which goes before us and prepares us for all good works.',
      'The grace or love of God, whence cometh our salvation, is FREE IN ALL, and FREE FOR ALL.'
    ],
    modernApplication: [
      'Universal availability of grace',
      'Human dignity and worth',
      'Evangelistic optimism',
      'Inclusive ministry approach'
    ]
  },
  {
    name: 'Christian Perfection',
    description: 'The possibility of perfect love toward God and neighbor in this life',
    keyScriptures: [
      'Matthew 5:48',
      '1 John 4:18',
      'Hebrews 6:1',
      '1 Thessalonians 5:23'
    ],
    wesleyQuotes: [
      'Pure love reigning alone in the heart and life - this is the whole of scriptural perfection.',
      'By perfection I mean the humble, gentle, patient love of God and our neighbor, ruling our tempers, words, and actions.'
    ],
    modernApplication: [
      'Emphasis on spiritual growth',
      'Social holiness practice',
      'Transformative discipleship',
      'Ethical living focus'
    ]
  }
]

const academicResources = [
  {
    title: 'Duke Divinity School',
    url: 'https://divinity.duke.edu',
    description: 'Leading Methodist theological institution with strong Wesleyan scholarship.',
    type: 'academic'
  },
  {
    title: 'Candler School of Theology',
    url: 'https://candler.emory.edu',
    description: 'Methodist seminary emphasizing Wesleyan studies and practical ministry.',
    type: 'academic'
  },
  {
    title: 'Wesley House Cambridge',
    url: 'https://www.wesley.cam.ac.uk',
    description: 'Methodist theological college within Cambridge University.',
    type: 'academic'
  }
]

interface SocialPrinciple {
  category: string
  principles: Array<{
    title: string
    description: string
    applications: string[]
  }>
}

const socialPrinciples: SocialPrinciple[] = [
  {
    category: 'Social Justice',
    principles: [
      {
        title: 'Economic Justice',
        description: 'Commitment to economic fairness and workers\' rights',
        applications: [
          'Living wage advocacy',
          'Fair trade support',
          'Economic inequality focus',
          'Worker rights protection'
        ]
      },
      {
        title: 'Racial Justice',
        description: 'Opposition to racism and promotion of racial equality',
        applications: [
          'Anti-racism initiatives',
          'Multicultural ministry',
          'Racial reconciliation work',
          'Institutional change advocacy'
        ]
      }
    ]
  },
  {
    category: 'Environmental Stewardship',
    principles: [
      {
        title: 'Creation Care',
        description: 'Responsibility for environmental protection',
        applications: [
          'Climate change response',
          'Environmental advocacy',
          'Sustainable practices',
          'Green church initiatives'
        ]
      }
    ]
  }
]

export default function MethodistChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Methodist Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the rich heritage of Methodist Christianity, from its Wesleyan roots
          to its contemporary global expression of faith, social holiness, and mission
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="worship">Worship</TabsTrigger>
          <TabsTrigger value="social">Social Witness</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodist Heritage and Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Wesleyan Origins</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Holy Club at Oxford (1729)</li>
                      <li>John Wesley's Aldersgate experience (1738)</li>
                      <li>Field preaching movement (1739)</li>
                      <li>Methodist societies within Anglican Church</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Methodist Movement</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Class meeting system development</li>
                      <li>Circuit rider ministry</li>
                      <li>American Methodist Episcopal Church (1784)</li>
                      <li>Global missionary expansion</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Methodist Distinctives</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Personal and social holiness</li>
                      <li>Emphasis on God's grace</li>
                      <li>Connectional polity</li>
                      <li>Practical divinity</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Contemporary Expression</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Global Methodist presence</li>
                      <li>Social justice engagement</li>
                      <li>Ecumenical relationships</li>
                      <li>Missional focus</li>
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
              <CardTitle>Wesleyan Theology and Methodist Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Wesleyan Doctrines</h3>
                <div className="grid gap-4">
                  {wesleyanDoctrines.map((doctrine) => (
                    <div key={doctrine.name} className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">{doctrine.name}</h4>
                      <p className="text-sm mt-2">{doctrine.description}</p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium">Biblical Foundation</h5>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {doctrine.keyScriptures.map((scripture, index) => (
                              <li key={index}>{scripture}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Wesley's Words</h5>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {doctrine.wesleyQuotes.map((quote, index) => (
                              <li key={index} className="italic">{quote}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Contemporary Application</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {doctrine.modernApplication.map((app, index) => (
                            <li key={index}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Theological Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Wesleyan Quadrilateral</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Scripture (Primary Authority)</li>
                      <li>Tradition (Church Heritage)</li>
                      <li>Reason (Rational Reflection)</li>
                      <li>Experience (Personal/Communal)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Theological Emphases</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Universal grace</li>
                      <li>Free will</li>
                      <li>Sanctification</li>
                      <li>Practical divinity</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="worship" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodist Worship and Practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Worship Elements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Order of Worship</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Scripture-centered worship</li>
                      <li>Hymn singing tradition</li>
                      <li>Extempore prayer</li>
                      <li>Regular communion</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sacramental Practice</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Baptism (infant and adult)</li>
                      <li>Open communion</li>
                      <li>Confirmation emphasis</li>
                      <li>Memorial understanding</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Special Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Traditional Services</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Love Feast</li>
                      <li>Watch Night Service</li>
                      <li>Covenant Renewal</li>
                      <li>Class Meetings</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Contemporary Adaptations</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Contemporary worship styles</li>
                      <li>Small group ministries</li>
                      <li>Digital worship resources</li>
                      <li>Multicultural expressions</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Social Witness and Action</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Social Principles</h3>
                {socialPrinciples.map((category) => (
                  <div key={category.category} className="space-y-4">
                    <h4 className="font-medium">{category.category}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.principles.map((principle) => (
                        <div key={principle.title} className="p-4 bg-secondary rounded-lg">
                          <h5 className="font-medium">{principle.title}</h5>
                          <p className="text-sm mt-2">{principle.description}</p>
                          <div className="mt-4">
                            <h6 className="text-sm font-medium">Applications:</h6>
                            <ul className="list-disc list-inside mt-2 text-sm">
                              {principle.applications.map((app, index) => (
                                <li key={index}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Methodist Organization and Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Connectional System</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Church Structure</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>General Conference</li>
                      <li>Annual Conferences</li>
                      <li>Districts</li>
                      <li>Local Churches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Leadership Roles</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Bishops</li>
                      <li>District Superintendents</li>
                      <li>Ordained Ministers</li>
                      <li>Lay Leaders</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Global Presence</h3>
                <div className="grid gap-4">
                  {majorDenominations.map((denom) => (
                    <div key={denom.name} className="p-4 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{denom.name}</h4>
                        <Badge>{denom.founded}</Badge>
                      </div>
                      <p className="text-sm mt-2">Location: {denom.location}</p>
                      <p className="text-sm">Members: {denom.members}</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Distinctive Features:</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {denom.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={denom.website}
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