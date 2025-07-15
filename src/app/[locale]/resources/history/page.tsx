import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, ArrowLeft, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Religious History - Timeline & Historical Development | Resources | ZION.FM',
  description: 'Explore the comprehensive timeline of world religions, historical developments, key figures, and major events. Access verified historical resources and academic materials.',
  keywords: 'religious history, world religions timeline, religious development, historical figures, religious events, academic history',
  openGraph: {
    title: 'Religious History - Timeline & Historical Development',
    description: 'Comprehensive timeline and historical development of world religions.',
    type: 'website',
  },
}

const historyData = {
  title: "Religious History",
  description: "Comprehensive timeline and historical development of world religions",
  overview: `
    The history of religion spans thousands of years and encompasses the spiritual, cultural, and social 
    development of human societies. From ancient animistic beliefs to modern organized religions, 
    religious history reveals how humans have sought to understand the divine, find meaning in existence, 
    and create communities of faith.
    
    This timeline covers major religious traditions, key historical figures, significant events, and 
    the evolution of religious thought and practice. Understanding religious history helps us appreciate 
    the diversity of human spiritual expression and the profound impact of religion on world civilization.
  `,
  
  timeline: [
    {
      period: "Prehistoric (Before 3000 BCE)",
      events: [
        {
          date: "40,000-10,000 BCE",
          event: "Earliest evidence of religious practices",
          description: "Burial rituals, cave art, and animistic beliefs",
          religions: ["Animism", "Shamanism"]
        },
        {
          date: "10,000-3000 BCE",
          event: "Development of agricultural religions",
          description: "Fertility cults, earth goddess worship, seasonal rituals",
          religions: ["Agricultural religions", "Fertility cults"]
        }
      ]
    },
    {
      period: "Ancient Civilizations (3000-500 BCE)",
      events: [
        {
          date: "3000-2000 BCE",
          event: "Egyptian religion develops",
          description: "Complex pantheon, pharaonic cult, afterlife beliefs",
          religions: ["Ancient Egyptian religion"]
        },
        {
          date: "2500-1500 BCE",
          event: "Indus Valley civilization",
          description: "Early Hindu practices, yoga, meditation",
          religions: ["Proto-Hinduism"]
        },
        {
          date: "2000-1500 BCE",
          event: "Abrahamic tradition begins",
          description: "Abraham's covenant, monotheistic development",
          religions: ["Judaism", "Christianity", "Islam"]
        },
        {
          date: "1500-500 BCE",
          event: "Vedic period in India",
          description: "Rigveda, Brahmanism, early Hindu practices",
          religions: ["Hinduism"]
        }
      ]
    },
    {
      period: "Axial Age (800-200 BCE)",
      events: [
        {
          date: "800-400 BCE",
          event: "Upanishadic period",
          description: "Philosophical development, karma, reincarnation",
          religions: ["Hinduism"]
        },
        {
          date: "600-400 BCE",
          event: "Buddhism founded",
          description: "Siddhartha Gautama, Four Noble Truths, Eightfold Path",
          religions: ["Buddhism"]
        },
        {
          date: "500-400 BCE",
          event: "Jainism develops",
          description: "Mahavira, ahimsa, ascetic practices",
          religions: ["Jainism"]
        },
        {
          date: "500-300 BCE",
          event: "Confucianism and Taoism",
          description: "Confucius, Laozi, philosophical traditions",
          religions: ["Confucianism", "Taoism"]
        }
      ]
    },
    {
      period: "Classical Period (200 BCE-500 CE)",
      events: [
        {
          date: "1st century CE",
          event: "Christianity emerges",
          description: "Jesus Christ, early church, Paul's missions",
          religions: ["Christianity"]
        },
        {
          date: "100-300 CE",
          event: "Mahayana Buddhism develops",
          description: "Bodhisattva ideal, new scriptures, spread to China",
          religions: ["Buddhism"]
        },
        {
          date: "300-500 CE",
          event: "Christianity becomes state religion",
          description: "Constantine, Council of Nicaea, church establishment",
          religions: ["Christianity"]
        }
      ]
    },
    {
      period: "Medieval Period (500-1500 CE)",
      events: [
        {
          date: "570-632 CE",
          event: "Islam founded",
          description: "Muhammad, Quran, early Islamic community",
          religions: ["Islam"]
        },
        {
          date: "700-1200 CE",
          event: "Islamic Golden Age",
          description: "Scientific advances, philosophical development, cultural flourishing",
          religions: ["Islam"]
        },
        {
          date: "1000-1500 CE",
          event: "Bhakti movement in India",
          description: "Devotional Hinduism, saints, vernacular literature",
          religions: ["Hinduism"]
        },
        {
          date: "1200-1500 CE",
          event: "Zen Buddhism in Japan",
          description: "Dogen, Rinzai and Soto schools, cultural integration",
          religions: ["Buddhism"]
        }
      ]
    },
    {
      period: "Early Modern (1500-1800 CE)",
      events: [
        {
          date: "1517 CE",
          event: "Protestant Reformation",
          description: "Martin Luther, religious reform, church division",
          religions: ["Christianity"]
        },
        {
          date: "1500-1700 CE",
          event: "Sikhism founded",
          description: "Guru Nanak, ten gurus, scripture compilation",
          religions: ["Sikhism"]
        },
        {
          date: "1600-1800 CE",
          event: "Enlightenment and secularization",
          description: "Rationalism, religious tolerance, scientific worldview",
          religions: ["Various"]
        }
      ]
    },
    {
      period: "Modern Period (1800-Present)",
      events: [
        {
          date: "1800-1900 CE",
          event: "Religious revival and reform",
          description: "Great Awakenings, missionary movements, religious reform",
          religions: ["Various"]
        },
        {
          date: "1900-1950 CE",
          event: "Modernist movements",
          description: "Liberal theology, interfaith dialogue, secularization",
          religions: ["Various"]
        },
        {
          date: "1950-Present",
          event: "Contemporary religious landscape",
          description: "Religious diversity, new religious movements, interfaith cooperation",
          religions: ["Various"]
        }
      ]
    }
  ],
  
  keyFigures: [
    {
      name: "Abraham",
      period: "2000-1500 BCE",
      religion: "Judaism/Christianity/Islam",
      contribution: "Father of monotheistic faith, covenant with God",
      significance: "Foundational figure for three major world religions"
    },
    {
      name: "Siddhartha Gautama (Buddha)",
      period: "563-483 BCE",
      religion: "Buddhism",
      contribution: "Founder of Buddhism, Four Noble Truths, Eightfold Path",
      significance: "One of history's most influential spiritual teachers"
    },
    {
      name: "Confucius",
      period: "551-479 BCE",
      religion: "Confucianism",
      contribution: "Ethical philosophy, social harmony, education",
      significance: "Shaped Chinese culture and East Asian societies"
    },
    {
      name: "Jesus Christ",
      period: "4 BCE-30 CE",
      religion: "Christianity",
      contribution: "Founder of Christianity, teachings of love and salvation",
      significance: "Central figure of Christianity, influenced world history"
    },
    {
      name: "Muhammad",
      period: "570-632 CE",
      religion: "Islam",
      contribution: "Founder of Islam, Quran, monotheistic reform",
      significance: "Unified Arabian Peninsula, spread monotheism"
    },
    {
      name: "Guru Nanak",
      period: "1469-1539 CE",
      religion: "Sikhism",
      contribution: "Founder of Sikhism, monotheistic synthesis",
      significance: "Created bridge between Hinduism and Islam"
    }
  ],
  
  academicResources: [
    {
      title: "Encyclopedia Britannica Religion",
      description: "Comprehensive encyclopedia of world religions",
      url: "https://www.britannica.com/topic/religion",
      type: "Reference"
    },
    {
      title: "Metropolitan Museum Timeline",
      description: "Art historical timeline of religious traditions",
      url: "https://www.metmuseum.org/toah/ht/?period=01&region=waa",
      type: "Art History"
    },
    {
      title: "JSTOR Religion Collection",
      description: "Academic articles and research papers",
      url: "https://www.jstor.org/subject/religion",
      type: "Academic"
    },
    {
      title: "Oxford Bibliographies Religion",
      description: "Curated bibliographies of religious studies",
      url: "https://www.oxfordbibliographies.com/obo/page/religion",
      type: "Bibliography"
    }
  ],
  
  studyAreas: [
    {
      title: "Comparative Religion",
      description: "Comparing religious traditions and practices",
      link: "/studies/comparative",
      topics: ["Similarities and differences", "Cross-cultural influence", "Religious dialogue"]
    },
    {
      title: "Religious Philosophy",
      description: "Philosophical analysis of religious concepts",
      link: "/studies/philosophy",
      topics: ["Theological arguments", "Ethics and morality", "Metaphysics"]
    },
    {
      title: "Religious Art History",
      description: "Artistic expression in religious traditions",
      link: "/resources/art",
      topics: ["Iconography", "Architecture", "Sacred art"]
    },
    {
      title: "Religious Literature",
      description: "Sacred texts and religious writings",
      link: "/sacred-texts",
      topics: ["Scriptures", "Commentaries", "Religious poetry"]
    }
  ]
}

export default function ReligiousHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/resources"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{historyData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {historyData.description}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/history">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Academic Studies
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/studies/comparative">
                  <Globe className="mr-2 h-5 w-5" />
                  Comparative Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="figures">Key Figures</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Religious History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {historyData.overview.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Areas</CardTitle>
                <CardDescription>Explore different aspects of religious history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {historyData.studyAreas.map((area, index) => (
                    <Link key={index} href={area.link}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-2">{area.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                          <div className="space-y-1">
                            {area.topics.map((topic, tIndex) => (
                              <p key={tIndex} className="text-xs text-muted-foreground">• {topic}</p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <div className="space-y-8">
              {historyData.timeline.map((period, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {period.period}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {period.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="border-l-4 border-blue-200 pl-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold">{event.event}</h4>
                            <Badge variant="outline">{event.date}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {event.religions.map((religion, rIndex) => (
                              <Badge key={rIndex} variant="secondary" className="text-xs">
                                {religion}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="figures" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {historyData.keyFigures.map((figure, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{figure.name}</CardTitle>
                        <CardDescription>{figure.period}</CardDescription>
                      </div>
                      <Badge variant="secondary">{figure.religion}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Contribution:</h4>
                        <p className="text-sm text-muted-foreground">{figure.contribution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Significance:</h4>
                        <p className="text-sm text-muted-foreground">{figure.significance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Academic Resources</CardTitle>
                <CardDescription>Verified sources for further study</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {historyData.academicResources.map((resource, index) => (
                    <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold mb-1">{resource.title}</h4>
                              <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                            <Badge variant="outline">{resource.type}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Studies</CardTitle>
                <CardDescription>Explore other aspects of religious studies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/studies/theology">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <Brain className="h-6 w-6 mb-2 text-blue-600" />
                        <h4 className="font-semibold mb-2">Theology Studies</h4>
                        <p className="text-sm text-muted-foreground">Systematic theology and religious philosophy</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/studies/academic">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <Book className="h-6 w-6 mb-2 text-green-600" />
                        <h4 className="font-semibold mb-2">Academic Studies</h4>
                        <p className="text-sm text-muted-foreground">Research methods and scholarly approaches</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 