import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Lutheran Christianity | History, Beliefs, and Practices',
  description: 'Comprehensive guide to Lutheran Christianity, including Lutheran theology, worship practices, denominations, and historical development from the Protestant Reformation to present day.',
  keywords: [
    'Lutheran Church',
    'Martin Luther',
    'Lutheran theology',
    'Lutheran worship',
    'Book of Concord',
    'Augsburg Confession',
    'Lutheran sacraments',
    'Lutheran denominations',
    'Lutheran liturgy',
    'Lutheran doctrine',
    'Protestant Reformation',
    'Lutheran education'
  ].join(', '),
  openGraph: {
    title: 'Lutheran Christianity | Comprehensive Guide to Lutheran Faith',
    description: 'In-depth exploration of Lutheran Christianity, its theological heritage, worship practices, and contemporary expressions.',
    images: [{ url: '/images/lutheran-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface LutheranDenomination {
  name: string
  founded: string
  location: string
  members: string
  distinctives: string[]
  website: string
}

const majorDenominations: LutheranDenomination[] = [
  {
    name: 'Evangelical Lutheran Church in America (ELCA)',
    founded: '1988',
    location: 'United States',
    members: '3.3 million (2021)',
    distinctives: [
      'Moderate to liberal theological orientation',
      'Full communion with several Protestant denominations',
      'Ordination of women and LGBTQ+ clergy',
      'Strong emphasis on social justice'
    ],
    website: 'https://www.elca.org'
  },
  {
    name: 'Lutheran Church—Missouri Synod (LCMS)',
    founded: '1847',
    location: 'United States',
    members: '1.8 million (2021)',
    distinctives: [
      'Conservative Lutheran theology',
      'Inerrancy of Scripture',
      'Male-only clergy',
      'Strong emphasis on confessional Lutheran identity'
    ],
    website: 'https://www.lcms.org'
  },
  {
    name: 'Lutheran World Federation',
    founded: '1947',
    location: 'Global (HQ in Geneva)',
    members: '77 million across 148 churches',
    distinctives: [
      'Global communion of Lutheran churches',
      'Ecumenical engagement',
      'Humanitarian work',
      'Unity in diversity'
    ],
    website: 'https://www.lutheranworld.org'
  }
]

const academicResources = [
  {
    title: 'Luther Seminary',
    url: 'https://www.luthersem.edu',
    description: 'Largest Lutheran seminary in North America, offering extensive resources on Lutheran theology and ministry.',
    type: 'academic'
  },
  {
    title: 'Concordia Seminary',
    url: 'https://www.csl.edu',
    description: 'Leading confessional Lutheran seminary providing resources on Lutheran doctrine and practice.',
    type: 'academic'
  },
  {
    title: 'Lutheran Quarterly',
    url: 'https://www.lutheranquarterly.com',
    description: 'Academic journal publishing scholarly articles on Lutheran theology and history.',
    type: 'academic'
  }
]

const confessionalDocuments = [
  {
    title: 'Augsburg Confession (1530)',
    author: 'Philip Melanchthon',
    significance: 'Primary confession of Lutheran churches',
    content: [
      'Twenty-eight articles defining Lutheran doctrine',
      'Distinction between Lutheran and Roman Catholic teaching',
      'Foundation for Lutheran identity',
      'Ecumenical importance'
    ],
    url: 'https://bookofconcord.org/augsburg-confession/'
  },
  {
    title: 'Small Catechism (1529)',
    author: 'Martin Luther',
    significance: 'Basic instruction in Lutheran faith',
    content: [
      'Ten Commandments explanation',
      'Apostles\' Creed interpretation',
      'Lord\'s Prayer exposition',
      'Sacraments teaching'
    ],
    url: 'https://bookofconcord.org/small-catechism/'
  },
  {
    title: 'Formula of Concord (1577)',
    author: 'Lutheran theologians',
    significance: 'Resolution of Lutheran theological disputes',
    content: [
      'Original sin doctrine',
      'Free will teaching',
      'Lord\'s Supper doctrine',
      'Person of Christ'
    ],
    url: 'https://bookofconcord.org/formula-of-concord/'
  }
]

export default function LutheranChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Lutheran Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the theological heritage, worship practices, and contemporary expressions
          of Lutheran Christianity, from its Reformation roots to its global presence today
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="worship">Worship</TabsTrigger>
          <TabsTrigger value="denominations">Denominations</TabsTrigger>
          <TabsTrigger value="confessions">Confessions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lutheran Heritage and Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Reformation Origins</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Luther's 95 Theses (1517)</li>
                      <li>Diet of Worms (1521)</li>
                      <li>Augsburg Confession (1530)</li>
                      <li>Formation of Lutheran churches</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Development and Expansion</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Lutheran Orthodoxy (1580-1700)</li>
                      <li>Pietist movement influence</li>
                      <li>Global missionary activity</li>
                      <li>Modern denominational development</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Distinctives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Theological Principles</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Sola Scriptura (Scripture alone)</li>
                      <li>Sola Fide (Faith alone)</li>
                      <li>Sola Gratia (Grace alone)</li>
                      <li>Law and Gospel distinction</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sacramental Theology</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Real Presence in Eucharist</li>
                      <li>Baptismal regeneration</li>
                      <li>Means of grace emphasis</li>
                      <li>Liturgical worship tradition</li>
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
              <CardTitle>Lutheran Theology and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Doctrinal Foundations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Justification</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Justification by faith alone</li>
                      <li>Imputed righteousness of Christ</li>
                      <li>Role of good works</li>
                      <li>Simul justus et peccator</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Scripture and Authority</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Sola Scriptura principle</li>
                      <li>Biblical inspiration and authority</li>
                      <li>Role of confessions</li>
                      <li>Proper distinction of Law and Gospel</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacramental Theology</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Baptism</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Means of grace</li>
                      <li>Infant baptism theology</li>
                      <li>Baptismal regeneration</li>
                      <li>Relationship to faith</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Lord's Supper</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Real Presence doctrine</li>
                      <li>Sacramental union</li>
                      <li>Role in worship</li>
                      <li>Communion practices</li>
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
              <CardTitle>Lutheran Worship and Liturgy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Liturgical Tradition</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Divine Service</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Historic liturgical structure</li>
                      <li>Word and Sacrament focus</li>
                      <li>Lectionary usage</li>
                      <li>Liturgical calendar</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Music and Hymnody</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Lutheran chorale tradition</li>
                      <li>Bach's contributions</li>
                      <li>Contemporary Lutheran music</li>
                      <li>Role of congregational singing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Worship Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Service Books</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Lutheran Service Book (LCMS)</li>
                      <li>Evangelical Lutheran Worship (ELCA)</li>
                      <li>Lutheran Book of Worship</li>
                      <li>Regional variations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Liturgical Practices</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Church year observance</li>
                      <li>Vestments and symbols</li>
                      <li>Altar guild practices</li>
                      <li>Pastoral roles</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="denominations" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lutheran Denominations and Organizations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                {majorDenominations.map((denom) => (
                  <div key={denom.name} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{denom.name}</h4>
                      <Badge>Founded: {denom.founded}</Badge>
                    </div>
                    <p className="text-sm mt-2">Members: {denom.members}</p>
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

        <TabsContent value="confessions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lutheran Confessional Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                {confessionalDocuments.map((doc) => (
                  <div key={doc.title} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">{doc.title}</h4>
                    <p className="text-sm mt-1">Author: {doc.author}</p>
                    <p className="text-sm mt-1">Significance: {doc.significance}</p>
                    <div className="mt-4">
                      <h5 className="text-sm font-medium">Key Content:</h5>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doc.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={doc.url}
                      className="text-primary hover:underline text-sm block mt-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Document
                    </a>
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
                      Visit Resource
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