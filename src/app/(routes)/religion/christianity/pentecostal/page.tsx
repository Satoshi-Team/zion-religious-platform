import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Pentecostal Christianity | Spirit-Filled Faith and Practice',
  description: 'Comprehensive guide to Pentecostal Christianity, including charismatic gifts, Spirit baptism, worship practices, and global impact. Explore Pentecostal beliefs, traditions, and contemporary expressions.',
  keywords: [
    'Pentecostal Church',
    'Spirit baptism',
    'Charismatic gifts',
    'Speaking in tongues',
    'Pentecostal worship',
    'Divine healing',
    'Pentecostal movement',
    'Azusa Street Revival',
    'Pentecostal theology',
    'Spirit-filled Christianity',
    'Pentecostal denominations',
    'Charismatic renewal'
  ].join(', '),
  openGraph: {
    title: 'Pentecostal Christianity | Guide to Spirit-Filled Faith',
    description: 'In-depth exploration of Pentecostal Christianity, its spiritual heritage, distinctive practices, and global impact.',
    images: [{ url: '/images/pentecostal-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface PentecostalDenomination {
  name: string
  founded: string
  members: string
  location: string
  distinctives: string[]
  website: string
}

const pentecostalDenominations: PentecostalDenomination[] = [
  {
    name: 'Assemblies of God',
    founded: '1914',
    members: '69 million globally',
    location: 'Global (HQ in USA)',
    distinctives: [
      'Largest Pentecostal denomination',
      'Strong missions emphasis',
      'Educational institutions',
      'Conservative theology'
    ],
    website: 'https://ag.org'
  },
  {
    name: 'Church of God in Christ',
    founded: '1907',
    members: '6.5 million',
    location: 'Global (HQ in USA)',
    distinctives: [
      'Largest African American Pentecostal denomination',
      'Holiness emphasis',
      'Social justice engagement',
      'Urban ministry focus'
    ],
    website: 'https://www.cogic.org'
  },
  {
    name: 'Foursquare Church',
    founded: '1923',
    members: '8.8 million globally',
    location: 'Global',
    distinctives: [
      'Four-fold ministry of Christ',
      'Women in leadership',
      'Interdenominational cooperation',
      'Global church planting'
    ],
    website: 'https://www.foursquare.org'
  }
]

interface SpiritualGift {
  name: string
  description: string
  biblicalBasis: string[]
  manifestation: string[]
  practice: string[]
}

const spiritualGifts: SpiritualGift[] = [
  {
    name: 'Speaking in Tongues',
    description: 'Supernatural ability to speak in unknown languages for prayer and worship',
    biblicalBasis: [
      'Acts 2:1-4',
      '1 Corinthians 12:10',
      '1 Corinthians 14:2',
      'Mark 16:17'
    ],
    manifestation: [
      'Prayer language',
      'Corporate worship',
      'Message with interpretation',
      'Sign of Spirit baptism'
    ],
    practice: [
      'Personal devotion',
      'Congregational worship',
      'Missionary context',
      'Spiritual warfare'
    ]
  },
  {
    name: 'Divine Healing',
    description: 'Supernatural healing through prayer and faith in Jesus Christ',
    biblicalBasis: [
      'James 5:14-15',
      'Mark 16:17-18',
      'Isaiah 53:5',
      '1 Peter 2:24'
    ],
    manifestation: [
      'Physical healing',
      'Emotional healing',
      'Deliverance ministry',
      'Healing services'
    ],
    practice: [
      'Prayer for the sick',
      'Anointing with oil',
      'Laying on of hands',
      'Faith declaration'
    ]
  }
]

const academicResources = [
  {
    title: 'Pentecostal Theological Seminary',
    url: 'https://www.ptseminary.edu',
    description: 'Premier Pentecostal seminary offering advanced theological education.',
    type: 'academic'
  },
  {
    title: 'Centre for Pentecostal Theology',
    url: 'https://pentecostaltheology.org',
    description: 'Research center dedicated to Pentecostal scholarship and publishing.',
    type: 'academic'
  },
  {
    title: 'Society for Pentecostal Studies',
    url: 'https://www.sps-usa.org',
    description: 'Academic society promoting Pentecostal research and scholarship.',
    type: 'academic'
  }
]

interface HistoricalEvent {
  period: string
  events: Array<{
    date: string
    name: string
    significance: string[]
    impact: string[]
  }>
}

const historicalDevelopment: HistoricalEvent[] = [
  {
    period: 'Early Pentecostalism',
    events: [
      {
        date: '1901',
        name: 'Topeka Outpouring',
        significance: [
          'Initial evidence doctrine',
          'Charles Parham\'s Bible school',
          'Speaking in tongues emphasis',
          'Theological framework development'
        ],
        impact: [
          'Pentecostal doctrine formation',
          'Revival movement catalyst',
          'Missionary impetus',
          'Educational pattern'
        ]
      },
      {
        date: '1906-1909',
        name: 'Azusa Street Revival',
        significance: [
          'Global Pentecostal catalyst',
          'Racial integration',
          'William J. Seymour\'s leadership',
          'International influence'
        ],
        impact: [
          'Worldwide Pentecostal spread',
          'Denominational formation',
          'Multicultural worship model',
          'Urban ministry paradigm'
        ]
      }
    ]
  }
]

export default function PentecostalChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Pentecostal Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the dynamic world of Pentecostal Christianity, its Spirit-empowered
          practices, global impact, and contemporary expressions of faith
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
          <TabsTrigger value="worship">Worship</TabsTrigger>
          <TabsTrigger value="movement">Movement</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Pentecostal Heritage and Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                {historicalDevelopment.map((era) => (
                  <div key={era.period} className="space-y-4">
                    <h4 className="font-medium">{era.period}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {era.events.map((event) => (
                        <div key={event.date} className="p-4 bg-secondary rounded-lg">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium">{event.name}</h5>
                            <Badge>{event.date}</Badge>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-sm font-medium">Significance:</h6>
                            <ul className="list-disc list-inside mt-2 text-sm">
                              {event.significance.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-sm font-medium">Impact:</h6>
                            <ul className="list-disc list-inside mt-2 text-sm">
                              {event.impact.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Distinctive Features</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Spirit baptism emphasis</li>
                      <li>Charismatic gifts operation</li>
                      <li>Experiential worship</li>
                      <li>Evangelistic fervor</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Contemporary Expression</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Global movement</li>
                      <li>Cultural adaptability</li>
                      <li>Media and technology use</li>
                      <li>Social engagement</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beliefs" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Pentecostal Theology and Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Doctrines</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Spirit Baptism</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Subsequent to salvation</li>
                      <li>Initial evidence doctrine</li>
                      <li>Empowerment for witness</li>
                      <li>Ongoing Spirit-filled life</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Divine Healing</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Atonement provision</li>
                      <li>Faith and prayer emphasis</li>
                      <li>Healing ministry</li>
                      <li>Testimonial evidence</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Spiritual Gifts</h3>
                {spiritualGifts.map((gift) => (
                  <div key={gift.name} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">{gift.name}</h4>
                    <p className="text-sm mt-2">{gift.description}</p>
                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="text-sm font-medium">Biblical Basis</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {gift.biblicalBasis.map((verse, index) => (
                            <li key={index}>{verse}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Manifestation</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {gift.manifestation.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Practice</h5>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {gift.practice.map((item, index) => (
                            <li key={index}>{item}</li>
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

        <TabsContent value="worship" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Pentecostal Worship and Expression</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Worship Characteristics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Expressive Worship</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Spontaneous praise</li>
                      <li>Physical expression</li>
                      <li>Musical diversity</li>
                      <li>Spirit-led flexibility</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Worship Elements</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Contemporary music</li>
                      <li>Prophetic ministry</li>
                      <li>Altar ministry</li>
                      <li>Testimonies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Service Structure</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Typical Elements</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Extended worship time</li>
                      <li>Spirit-empowered preaching</li>
                      <li>Ministry time</li>
                      <li>Corporate prayer</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Special Services</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Revival meetings</li>
                      <li>Healing services</li>
                      <li>Prayer and fasting</li>
                      <li>Baptismal services</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movement" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Global Pentecostal Movement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Denominational Presence</h3>
                {pentecostalDenominations.map((denom) => (
                  <div key={denom.name} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{denom.name}</h4>
                      <Badge>{denom.founded}</Badge>
                    </div>
                    <p className="text-sm mt-2">Members: {denom.members}</p>
                    <p className="text-sm">Location: {denom.location}</p>
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
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contemporary Influence and Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Cultural Impact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Social Influence</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Community transformation</li>
                      <li>Social services</li>
                      <li>Educational initiatives</li>
                      <li>Media presence</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Global Impact</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Cross-cultural missions</li>
                      <li>Indigenous leadership</li>
                      <li>Humanitarian aid</li>
                      <li>Interfaith dialogue</li>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 