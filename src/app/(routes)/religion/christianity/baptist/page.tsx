import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Baptist Christianity | History, Beliefs, and Practice',
  description: 'Comprehensive guide to Baptist Christianity, including Baptist distinctives, congregational polity, beliefs, and global presence. Explore Baptist traditions, practices, and contributions to Christianity.',
  keywords: [
    'Baptist Church',
    'Baptist beliefs',
    'Baptist distinctives',
    'Believers baptism',
    'Congregational polity',
    'Baptist history',
    'Baptist missions',
    'Baptist theology',
    'Soul competency',
    'Religious liberty',
    'Baptist associations',
    'Baptist conventions'
  ].join(', '),
  openGraph: {
    title: 'Baptist Christianity | Comprehensive Guide to Baptist Faith',
    description: 'In-depth exploration of Baptist Christianity, its theological heritage, distinctive practices, and global impact.',
    images: [{ url: '/images/baptist-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface BaptistOrganization {
  name: string
  type: 'Convention' | 'Association' | 'Union' | 'Alliance'
  founded: string
  members: string
  location: string
  distinctives: string[]
  website: string
}

const baptistOrganizations: BaptistOrganization[] = [
  {
    name: 'Southern Baptist Convention',
    type: 'Convention',
    founded: '1845',
    members: '13.7 million (2021)',
    location: 'United States',
    distinctives: [
      'Largest Protestant denomination in US',
      'Conservative theology',
      'Strong missions emphasis',
      'Cooperative Program funding'
    ],
    website: 'https://www.sbc.net'
  },
  {
    name: 'Baptist World Alliance',
    type: 'Alliance',
    founded: '1905',
    members: '47 million in 126 countries',
    location: 'Global',
    distinctives: [
      'Global Baptist fellowship',
      'Unity in diversity',
      'Human rights advocacy',
      'International aid coordination'
    ],
    website: 'https://www.baptistworld.org'
  },
  {
    name: 'Baptist Union of Great Britain',
    type: 'Union',
    founded: '1813',
    members: '126,000',
    location: 'United Kingdom',
    distinctives: [
      'Historic Baptist presence',
      'Moderate theology',
      'Ecumenical engagement',
      'Social action focus'
    ],
    website: 'https://www.baptist.org.uk'
  }
]

interface BaptistDistinctive {
  name: string
  description: string
  biblicalBasis: string[]
  historicalDevelopment: string[]
  modernApplication: string[]
}

const baptistDistinctives: BaptistDistinctive[] = [
  {
    name: 'Biblical Authority',
    description: 'The Bible as the sole authority for faith and practice',
    biblicalBasis: [
      '2 Timothy 3:16-17',
      'Psalm 119:105',
      '2 Peter 1:20-21',
      'Matthew 4:4'
    ],
    historicalDevelopment: [
      'Early Baptist confessions',
      'Sola Scriptura emphasis',
      'Opposition to creeds',
      'Individual interpretation'
    ],
    modernApplication: [
      'Bible-centered preaching',
      'Personal Bible study emphasis',
      'Scripture-based practice',
      'Biblical literacy programs'
    ]
  },
  {
    name: 'Believers\' Baptism',
    description: 'Baptism by immersion of professing believers only',
    biblicalBasis: [
      'Matthew 28:19-20',
      'Acts 2:41',
      'Romans 6:3-4',
      'Colossians 2:12'
    ],
    historicalDevelopment: [
      'Anabaptist influence',
      'Rejection of infant baptism',
      'Immersion practice',
      'Baptismal theology development'
    ],
    modernApplication: [
      'Baptism requirements',
      'Church membership basis',
      'Testimony emphasis',
      'Discipleship connection'
    ]
  },
  {
    name: 'Soul Competency',
    description: 'Direct access to God and responsibility for interpretation',
    biblicalBasis: [
      '1 Peter 2:9',
      'John 14:6',
      'Hebrews 4:16',
      '1 Timothy 2:5'
    ],
    historicalDevelopment: [
      'Priesthood of believers',
      'Religious liberty advocacy',
      'Individual conscience',
      'Democratic church governance'
    ],
    modernApplication: [
      'Personal faith emphasis',
      'Individual interpretation',
      'Religious freedom advocacy',
      'Congregational decisions'
    ]
  }
]

const academicResources = [
  {
    title: "Spurgeon's College",
    url: 'https://www.spurgeons.ac.uk',
    description: "Historic Baptist college in London continuing Spurgeon's legacy.",
    type: 'academic'
  },
  {
    title: 'Southern Baptist Theological Seminary',
    url: 'https://www.sbts.edu',
    description: 'Premier theological institution of the Southern Baptist Convention.',
    type: 'academic'
  },
  {
    title: 'Baptist History & Heritage Society',
    url: 'http://www.baptisthistory.org',
    description: 'Organization dedicated to Baptist historical research and preservation.',
    type: 'research'
  }
]

interface BaptistContribution {
  category: string
  contributions: Array<{
    title: string
    description: string
    impact: string[]
    examples: string[]
  }>
}

const baptistContributions: BaptistContribution[] = [
  {
    category: 'Religious Liberty',
    contributions: [
      {
        title: 'Separation of Church and State',
        description: 'Historic Baptist advocacy for religious freedom and church-state separation',
        impact: [
          'First Amendment influence',
          'Global religious freedom',
          'Pluralistic society',
          'Religious tolerance'
        ],
        examples: [
          'Roger Williams in Rhode Island',
          'Baptist Joint Committee work',
          'International advocacy',
          'Constitutional protections'
        ]
      }
    ]
  },
  {
    category: 'Missions and Evangelism',
    contributions: [
      {
        title: 'Modern Missionary Movement',
        description: 'Pioneer work in global missions and cross-cultural ministry',
        impact: [
          'Global Christianity spread',
          'Indigenous church development',
          'Mission methodology',
          'Cultural engagement'
        ],
        examples: [
          'William Carey in India',
          'Lottie Moon in China',
          'Adoniram Judson in Burma',
          'Modern mission boards'
        ]
      }
    ]
  }
]

export default function BaptistChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Baptist Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the distinctive beliefs, practices, and global impact of Baptist Christianity,
          from its historical roots to contemporary expressions
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="distinctives">Distinctives</TabsTrigger>
          <TabsTrigger value="polity">Polity</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="contributions">Contributions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Baptist Heritage and Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Origins and Early Development</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>English Separatist roots (early 1600s)</li>
                      <li>John Smyth and Thomas Helwys</li>
                      <li>First Baptist Church in Amsterdam (1609)</li>
                      <li>General and Particular Baptist streams</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">American Development</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Roger Williams in Rhode Island (1638)</li>
                      <li>First Baptist Church in America</li>
                      <li>Great Awakening influence</li>
                      <li>Denominational growth and division</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Core Principles</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Biblical authority</li>
                      <li>Believers' baptism</li>
                      <li>Congregational governance</li>
                      <li>Religious liberty</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Contemporary Identity</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Evangelical emphasis</li>
                      <li>Missions focus</li>
                      <li>Local church autonomy</li>
                      <li>Diverse expressions</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distinctives" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Baptist Distinctives and Beliefs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                {baptistDistinctives.map((distinctive) => (
                  <div key={distinctive.name} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">{distinctive.name}</h4>
                    <p className="text-sm mt-2">{distinctive.description}</p>
                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-sm font-medium">Biblical Basis</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {distinctive.biblicalBasis.map((verse, index) => (
                            <li key={index}>{verse}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Historical Development</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {distinctive.historicalDevelopment.map((dev, index) => (
                            <li key={index}>{dev}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Modern Application</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {distinctive.modernApplication.map((app, index) => (
                            <li key={index}>{app}</li>
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

        <TabsContent value="polity" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Baptist Church Polity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Congregational Governance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Local Church Autonomy</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Self-governing congregation</li>
                      <li>Democratic decision-making</li>
                      <li>Membership authority</li>
                      <li>Independent leadership selection</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Church Leadership</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Pastor/Elder role</li>
                      <li>Deacon ministry</li>
                      <li>Committee structure</li>
                      <li>Congregational meetings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Associational Relationships</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Voluntary Cooperation</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Association membership</li>
                      <li>Convention participation</li>
                      <li>Mission partnerships</li>
                      <li>Resource sharing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Cooperative Programs</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Mission funding</li>
                      <li>Educational institutions</li>
                      <li>Ministry resources</li>
                      <li>Disaster relief</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="global" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Global Baptist Presence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">International Organizations</h3>
                <div className="grid gap-4">
                  {baptistOrganizations.map((org) => (
                    <div key={org.name} className="p-4 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{org.name}</h4>
                        <Badge>{org.type}</Badge>
                      </div>
                      <p className="text-sm mt-2">Founded: {org.founded}</p>
                      <p className="text-sm">Members: {org.members}</p>
                      <p className="text-sm">Location: {org.location}</p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Distinctive Features:</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {org.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={org.website}
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

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Regional Developments</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Growth Regions</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Africa (rapid church planting)</li>
                      <li>Asia (indigenous leadership)</li>
                      <li>Latin America (evangelical growth)</li>
                      <li>Eastern Europe (post-communist revival)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Mission Initiatives</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>International partnerships</li>
                      <li>Leadership development</li>
                      <li>Theological education</li>
                      <li>Humanitarian aid</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contributions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Baptist Contributions to Christianity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                {baptistContributions.map((category) => (
                  <div key={category.category} className="space-y-4">
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                    <div className="grid gap-4">
                      {category.contributions.map((contribution) => (
                        <div key={contribution.title} className="p-4 bg-secondary rounded-lg">
                          <h4 className="font-medium">{contribution.title}</h4>
                          <p className="text-sm mt-2">{contribution.description}</p>
                          <div className="mt-4 grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium">Historical Impact:</h5>
                              <ul className="list-disc list-inside mt-2 text-sm">
                                {contribution.impact.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium">Notable Examples:</h5>
                              <ul className="list-disc list-inside mt-2 text-sm">
                                {contribution.examples.map((example, index) => (
                                  <li key={index}>{example}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Educational Legacy</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Higher Education</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>University founding</li>
                      <li>Seminary development</li>
                      <li>Global education networks</li>
                      <li>Scholarship programs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Publishing and Literature</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Bible translation work</li>
                      <li>Christian literature</li>
                      <li>Sunday School materials</li>
                      <li>Academic publications</li>
                    </ul>
                  </div>
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

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Research Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Archives and Libraries</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Southern Baptist Historical Library and Archives</li>
                      <li>American Baptist Historical Society</li>
                      <li>Angus Library and Archive (Oxford)</li>
                      <li>Baptist History and Heritage Society</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Online Resources</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Baptist History Homepage</li>
                      <li>Digital theological libraries</li>
                      <li>Denominational research databases</li>
                      <li>Ministry training resources</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 