import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Reformed and Presbyterian Christianity | History, Theology, and Practice',
  description: 'Comprehensive guide to Reformed and Presbyterian Christianity, including Calvinist theology, covenant theology, church governance, and contemporary expressions of Reformed faith.',
  keywords: [
    'Reformed Christianity',
    'Presbyterian Church',
    'Calvinism',
    'Reformed theology',
    'Covenant theology',
    'TULIP doctrine',
    'Presbyterian governance',
    'Westminster Confession',
    'Reformed worship',
    'John Calvin',
    'Reformed tradition',
    'Presbyterian denominations'
  ].join(', '),
  openGraph: {
    title: 'Reformed and Presbyterian Christianity | Comprehensive Guide',
    description: 'In-depth exploration of Reformed and Presbyterian traditions, their theological heritage, and contemporary practice.',
    images: [{ url: '/images/reformed-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface ReformedDenomination {
  name: string
  type: 'Presbyterian' | 'Continental Reformed' | 'Global Alliance'
  founded: string
  members: string
  distinctives: string[]
  website: string
}

const majorDenominations: ReformedDenomination[] = [
  {
    name: 'Presbyterian Church (USA)',
    type: 'Presbyterian',
    founded: '1983',
    members: '1.1 million (2021)',
    distinctives: [
      'Largest Presbyterian denomination in USA',
      'Progressive theological orientation',
      "Women's ordination",
      'Strong social justice emphasis'
    ],
    website: 'https://www.pcusa.org'
  },
  {
    name: 'Presbyterian Church in America (PCA)',
    type: 'Presbyterian',
    founded: '1973',
    members: '384,793 (2021)',
    distinctives: [
      'Conservative Reformed theology',
      'Biblical inerrancy',
      'Male-only ordination',
      'Strong missions focus'
    ],
    website: 'https://www.pcanet.org'
  },
  {
    name: 'World Communion of Reformed Churches',
    type: 'Global Alliance',
    founded: '2010',
    members: '100 million across 233 churches',
    distinctives: [
      'Largest Reformed communion globally',
      'Ecumenical engagement',
      'Social justice advocacy',
      'Global Reformed unity'
    ],
    website: 'https://wcrc.ch'
  }
]

const confessionalDocuments = [
  {
    title: 'Westminster Confession of Faith (1646)',
    authors: 'Westminster Assembly',
    significance: 'Primary confession for Presbyterian churches',
    content: [
      'Systematic presentation of Reformed doctrine',
      'Presbyterian church government',
      'Covenant theology framework',
      'Reformed worship principles'
    ],
    url: 'https://www.pcaac.org/bco/westminster-confession/'
  },
  {
    title: 'Heidelberg Catechism (1563)',
    authors: 'Zacharias Ursinus and Caspar Olevianus',
    significance: 'Primary confession for Continental Reformed churches',
    content: [
      'Question and answer format',
      'Comfort-oriented approach',
      'Trinity-based structure',
      'Practical Christian living'
    ],
    url: 'https://www.crcna.org/welcome/beliefs/confessions/heidelberg-catechism'
  },
  {
    title: 'Belgic Confession (1561)',
    authors: 'Guido de Brès',
    significance: 'Standard for Dutch Reformed churches',
    content: [
      'Reformed doctrinal standards',
      'Church and sacraments',
      'Civil authority teaching',
      'Scripture authority'
    ],
    url: 'https://www.crcna.org/welcome/beliefs/confessions/belgic-confession'
  }
]

const academicResources = [
  {
    title: 'Westminster Theological Seminary',
    url: 'https://www.wts.edu',
    description: 'Leading Reformed seminary maintaining conservative Presbyterian scholarship.',
    type: 'academic'
  },
  {
    title: 'Calvin Theological Seminary',
    url: 'https://www.calvinseminary.edu',
    description: 'Seminary of the Christian Reformed Church offering Reformed theological education.',
    type: 'academic'
  },
  {
    title: 'Reformed Theological Seminary',
    url: 'https://www.rts.edu',
    description: 'Multi-campus Reformed seminary system providing comprehensive theological education.',
    type: 'academic'
  }
]

interface TheologicalConcept {
  name: string
  description: string
  keyPoints: string[]
  biblicalBasis: string[]
}

const tulipDoctrines: TheologicalConcept[] = [
  {
    name: 'Total Depravity',
    description: 'Human inability to save oneself due to the comprehensive effects of sin',
    keyPoints: [
      'All aspects of human nature affected by sin',
      'Inability to choose God without grace',
      'Universal need for divine intervention',
      'Preservation of human responsibility'
    ],
    biblicalBasis: [
      'Romans 3:10-18',
      'Ephesians 2:1-3',
      'Jeremiah 17:9',
      'John 6:44'
    ]
  },
  {
    name: 'Unconditional Election',
    description: 'God\'s sovereign choice in salvation not based on human merit',
    keyPoints: [
      'Divine initiative in salvation',
      'Election not based on foreseen faith',
      'God\'s purpose in election',
      'Mystery of divine sovereignty'
    ],
    biblicalBasis: [
      'Ephesians 1:4-5',
      'Romans 9:11-13',
      'John 15:16',
      '2 Timothy 1:9'
    ]
  }
  // Additional TULIP points would be defined here
]

export default function ReformedPresbyterianPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Reformed and Presbyterian Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the theological heritage, ecclesiastical traditions, and contemporary expressions
          of Reformed and Presbyterian Christianity
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="worship">Worship</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="confessions">Confessions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Reformed Heritage and Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Reformation Origins</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Zwingli in Zürich (1519-1531)</li>
                      <li>Calvin in Geneva (1536-1564)</li>
                      <li>Knox in Scotland (1560s)</li>
                      <li>Reformed spread across Europe</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Development and Expansion</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Westminster Assembly (1643-1649)</li>
                      <li>Puritan movement</li>
                      <li>Global missionary expansion</li>
                      <li>Modern denominational formation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Continue with additional sections... */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theology" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Reformed Theology and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">TULIP - Reformed Soteriology</h3>
                <div className="grid gap-4">
                  {tulipDoctrines.map((doctrine) => (
                    <div key={doctrine.name} className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">{doctrine.name}</h4>
                      <p className="text-sm mt-2">{doctrine.description}</p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium">Key Points</h5>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {doctrine.keyPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Biblical Basis</h5>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {doctrine.biblicalBasis.map((verse, index) => (
                              <li key={index}>{verse}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Covenant Theology</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Covenant of Works</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Made with Adam in Eden</li>
                      <li>Condition of perfect obedience</li>
                      <li>Promise of eternal life</li>
                      <li>Broken through the Fall</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Covenant of Grace</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Established after the Fall</li>
                      <li>Fulfilled in Christ</li>
                      <li>Administration through history</li>
                      <li>Unity of Old and New Testaments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Reformed Distinctives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Divine Sovereignty</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>God's absolute control</li>
                      <li>Providence in all events</li>
                      <li>Purpose in history</li>
                      <li>Human responsibility</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Biblical Authority</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Scripture's supreme authority</li>
                      <li>Sufficiency of Scripture</li>
                      <li>Reformed hermeneutics</li>
                      <li>Role of confessions</li>
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
              <CardTitle>Reformed Worship and Practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Regulative Principle</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Biblical Basis</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Worship commanded by Scripture</li>
                      <li>Elements vs. circumstances</li>
                      <li>Simplicity in worship</li>
                      <li>Opposition to human innovations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Application</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Reading and preaching of Word</li>
                      <li>Administration of sacraments</li>
                      <li>Prayer and praise</li>
                      <li>Collection for saints</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Worship Elements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Psalm Singing</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Historical practice</li>
                      <li>Exclusive psalmody tradition</li>
                      <li>Modern adaptations</li>
                      <li>Musical accompaniment debate</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sacraments</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Baptism (infant and adult)</li>
                      <li>Lord's Supper frequency</li>
                      <li>Spiritual presence view</li>
                      <li>Covenant significance</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Presbyterian Church Government</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Church Officers</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Teaching Elders (Ministers)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Word and Sacrament ministry</li>
                      <li>Theological training</li>
                      <li>Ordination requirements</li>
                      <li>Pastoral responsibilities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Ruling Elders</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Spiritual oversight</li>
                      <li>Session membership</li>
                      <li>Congregational leadership</li>
                      <li>Disciplinary role</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Deacons</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Mercy ministry</li>
                      <li>Physical needs</li>
                      <li>Financial stewardship</li>
                      <li>Service coordination</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Church Courts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Session</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Local church governance</li>
                      <li>Membership oversight</li>
                      <li>Discipline administration</li>
                      <li>Worship supervision</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Presbytery</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Regional oversight</li>
                      <li>Ministerial examination</li>
                      <li>Church planting</li>
                      <li>Appeals court</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="confessions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Reformed Confessional Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Major Confessions</h3>
                {confessionalDocuments.map((doc) => (
                  <div key={doc.title} className="p-4 bg-secondary rounded-lg space-y-4">
                    <div>
                      <h4 className="font-medium">{doc.title}</h4>
                      <p className="text-sm mt-1">Authors: {doc.authors}</p>
                      <p className="text-sm mt-1">Significance: {doc.significance}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Key Content:</h5>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doc.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={doc.url}
                      className="text-primary hover:underline text-sm block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Document
                    </a>
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Reformed Catechisms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Westminster Shorter Catechism</h4>
                    <p className="text-sm mt-2">
                      Primary teaching tool for Reformed doctrine, consisting of 107 questions and answers
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Basic Christian doctrine</li>
                      <li>Moral law exposition</li>
                      <li>Sacraments teaching</li>
                      <li>Prayer instruction</li>
                    </ul>
                    <a
                      href="https://www.pcaac.org/bco/westminster-shorter-catechism/"
                      className="text-primary hover:underline text-sm block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Catechism
                    </a>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Westminster Larger Catechism</h4>
                    <p className="text-sm mt-2">
                      Detailed exposition of Reformed doctrine with 196 questions and answers
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Advanced theological content</li>
                      <li>Detailed commandment exposition</li>
                      <li>Comprehensive sacramental theology</li>
                      <li>Extended treatment of Christian life</li>
                    </ul>
                    <a
                      href="https://www.pcaac.org/bco/westminster-larger-catechism/"
                      className="text-primary hover:underline text-sm block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Catechism
                    </a>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Modern Confessional Statements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Contemporary Testimonies</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Our World Belongs to God (CRC)</li>
                      <li>Living Faith (PCC)</li>
                      <li>Testimony of the Reformed Presbyterian Church</li>
                      <li>Contemporary witness statements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Confessional Revision</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Modern language updates</li>
                      <li>Contemporary application</li>
                      <li>Theological clarifications</li>
                      <li>Cultural engagement</li>
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
                <h3 className="text-xl font-semibold">Seminary Education</h3>
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
                <h3 className="text-xl font-semibold">Scholarly Publications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Academic Journals</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>
                        <a 
                          href="https://www.wts.edu/resources/wtj.html"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Westminster Theological Journal
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.calvin.edu/library/database/crcpi/calvin-theological-journal.htm"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Calvin Theological Journal
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.prts.edu/puritan-reformed-journal/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Puritan Reformed Journal
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Research Centers</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>
                        <a 
                          href="https://www.prts.edu/research/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Puritan Research Center
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.meeter.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          H. Henry Meeter Center for Calvin Studies
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.junius.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Junius Institute for Digital Reformation Research
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Online Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Digital Libraries</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>
                        <a 
                          href="https://www.monergism.com/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Monergism
                        </a>
                        {' '}- Reformed theological resources
                      </li>
                      <li>
                        <a 
                          href="https://www.ccel.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Christian Classics Ethereal Library
                        </a>
                        {' '}- Historical Reformed texts
                      </li>
                      <li>
                        <a 
                          href="https://reformedbooksonline.com/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reformed Books Online
                        </a>
                        {' '}- Free Reformed resources
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Study Resources</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>
                        <a 
                          href="https://reformedstandards.com/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reformed Standards
                        </a>
                        {' '}- Confessional documents
                      </li>
                      <li>
                        <a 
                          href="https://www.thegospelcoalition.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          The Gospel Coalition
                        </a>
                        {' '}- Reformed perspective resources
                      </li>
                      <li>
                        <a 
                          href="https://www.ligonier.org/"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ligonier Ministries
                        </a>
                        {' '}- Reformed teaching platform
                      </li>
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