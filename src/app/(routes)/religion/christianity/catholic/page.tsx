import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Catholic Christianity | History, Beliefs, and Traditions',
  description: 'Comprehensive exploration of Roman Catholic Christianity, including doctrine, traditions, sacraments, and theological foundations. Learn about Catholic beliefs, practices, and spiritual heritage.',
  keywords: [
    'Catholic Church',
    'Roman Catholic',
    'Catholic doctrine',
    'Catholic sacraments',
    'Catholic traditions',
    'Catholic theology',
    'Catholic liturgy',
    'Catholic spirituality',
    'Vatican',
    'papal authority',
    'apostolic succession',
    'Catholic social teaching'
  ].join(', '),
  openGraph: {
    title: 'Catholic Christianity | Sacred Traditions and Practices',
    description: 'In-depth study of Catholic Christianity, its rich theological heritage, liturgical traditions, and contemporary practice.',
    images: [{ url: '/images/catholic-christianity.jpg', width: 1200, height: 630 }]
  }
}

interface Resource {
  title: string
  url: string
  description: string
  type: 'official' | 'academic' | 'educational'
}

const officialResources: Resource[] = [
  {
    title: 'The Holy See (Vatican)',
    url: 'https://www.vatican.va',
    description: 'Official website of the Vatican, containing papal documents, teachings, and news.',
    type: 'official'
  },
  {
    title: 'United States Conference of Catholic Bishops',
    url: 'https://www.usccb.org',
    description: 'Official site of the U.S. Catholic bishops, offering resources on Catholic teaching and practice.',
    type: 'official'
  },
  {
    title: 'Catechism of the Catholic Church',
    url: 'https://www.vatican.va/archive/ENG0015/_INDEX.HTM',
    description: 'Complete text of the Catechism, the official compilation of Catholic doctrine.',
    type: 'official'
  }
]

const academicResources: Resource[] = [
  {
    title: 'Catholic University of America',
    url: 'https://www.catholic.edu/index.html',
    description: 'Leading Catholic research university offering extensive theological resources.',
    type: 'academic'
  },
  {
    title: 'Pontifical Gregorian University',
    url: 'https://www.unigre.it/en/',
    description: 'Prestigious Roman university for theological and philosophical studies.',
    type: 'academic'
  },
  {
    title: 'Notre Dame Theology Department',
    url: 'https://theology.nd.edu/',
    description: 'Academic resources and research in Catholic theology and religious studies.',
    type: 'academic'
  }
]

export default function CatholicChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Catholic Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Explore the traditions, beliefs, and practices of the Catholic Church, the largest Christian denomination globally
        </p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="doctrine">Doctrine</TabsTrigger>
          <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
          <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Foundations and History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Development</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Apostolic Era (1st Century)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Foundation by Jesus Christ and the Apostles</li>
                      <li>Ministry of Peter and Paul in Rome</li>
                      <li>Early Christian communities and martyrs</li>
                      <li>Development of apostolic succession</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Early Church (2nd-5th Centuries)</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Development of episcopal structure</li>
                      <li>Ecumenical councils and creeds</li>
                      <li>Augustine and Latin Church Fathers</li>
                      <li>Rise of monasticism</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Beliefs</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Divine Revelation</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Sacred Scripture (Bible)</li>
                      <li>Sacred Tradition</li>
                      <li>Magisterial teaching authority</li>
                      <li>Development of doctrine</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Ecclesiology</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>One, Holy, Catholic, and Apostolic Church</li>
                      <li>Papal primacy and infallibility</li>
                      <li>Apostolic succession</li>
                      <li>Communion of saints</li>
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
                      <li>Over 1.3 billion members worldwide</li>
                      <li>Largest Christian denomination</li>
                      <li>Present in every continent</li>
                      <li>Cultural diversity and inculturation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Modern Challenges</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Secularization and evangelization</li>
                      <li>Interfaith dialogue</li>
                      <li>Social justice and environmental concerns</li>
                      <li>Church renewal and reform</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="doctrine" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Catholic Doctrine and Dogma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Fundamental Doctrines</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">God and Trinity</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>One God in three Divine Persons</li>
                      <li>Consubstantiality of the Trinity</li>
                      <li>Divine attributes and operations</li>
                      <li>Creation and providence</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Christology</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Incarnation of the Word</li>
                      <li>Two natures of Christ</li>
                      <li>Redemption and salvation</li>
                      <li>Resurrection and ascension</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Mariology</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Marian Dogmas</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Divine Motherhood</li>
                      <li>Perpetual Virginity</li>
                      <li>Immaculate Conception</li>
                      <li>Assumption into Heaven</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Marian Devotion</h4>
                    <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                      <li>Intercessory role</li>
                      <li>Marian prayers and devotions</li>
                      <li>Apparitions and shrines</li>
                      <li>Relationship to the Church</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sacraments" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>The Seven Sacraments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Sacraments of Initiation</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Baptism</h4>
                      <p className="text-sm mt-2">
                        Foundational sacrament that cleanses original sin and incorporates
                        one into the Church
                      </p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Confirmation</h4>
                      <p className="text-sm mt-2">
                        Strengthens baptismal graces and bestows the gifts of the Holy Spirit
                      </p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Eucharist</h4>
                      <p className="text-sm mt-2">
                        Source and summit of Christian life, the real presence of Christ
                        under the forms of bread and wine
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Sacraments of Healing and Service</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Reconciliation</h4>
                      <p className="text-sm mt-2">
                        Forgiveness of sins committed after baptism through confession
                        and absolution
                      </p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Anointing of the Sick</h4>
                      <p className="text-sm mt-2">
                        Spiritual and sometimes physical healing for those who are ill
                        or near death
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hierarchy" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Church Hierarchy and Governance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ecclesiastical Hierarchy</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">The Pope</h4>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                        <li>Supreme head of the Catholic Church</li>
                        <li>Successor of Saint Peter</li>
                        <li>Universal jurisdiction</li>
                        <li>Infallible teaching authority</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Cardinals</h4>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                        <li>Principal advisors to the Pope</li>
                        <li>Elect new Pope in conclave</li>
                        <li>Lead major dioceses and curial offices</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Local Church Structure</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Bishops</h4>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                        <li>Successors of the Apostles</li>
                        <li>Lead individual dioceses</li>
                        <li>Full sacramental authority</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Priests and Deacons</h4>
                      <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                        <li>Parish leadership</li>
                        <li>Sacramental ministry</li>
                        <li>Pastoral care</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Official and Academic Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Official Church Resources</h3>
                <div className="grid gap-4">
                  {officialResources.map((resource) => (
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
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Academic Resources</h3>
                <div className="grid gap-4">
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
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 