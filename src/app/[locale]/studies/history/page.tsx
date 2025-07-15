import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, Users, BookOpen, Globe, Star, Shield, Heart, Target, Zap, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Church History Studies - Christian Historical Development | ZION.FM',
  description: 'Explore the rich history of Christianity from the early church to modern times. Study church fathers, medieval developments, reformation, and contemporary church history with comprehensive resources.',
  keywords: 'church history, Christian history, early church, medieval church, reformation, church fathers, ecclesiastical history, Christian development',
  openGraph: {
    title: 'Church History Studies - Christian Historical Development',
    description: 'Journey through 2000 years of Christian history, from the apostolic age to contemporary developments.',
    type: 'website',
  },
}

const historicalPeriods = [
  {
    title: 'Apostolic Age (30-100 AD)',
    description: 'The foundational period of the early church',
    icon: Star,
    keyEvents: [
      'Pentecost and the birth of the church',
      'Apostolic preaching and missionary journeys',
      'Writing of the New Testament',
      'Persecution under Roman emperors',
      'Establishment of early Christian communities'
    ],
    keyFigures: ['Peter', 'Paul', 'John', 'James', 'Stephen'],
    link: '/studies/history/apostolic-age'
  },
  {
    title: 'Patristic Period (100-451 AD)',
    description: 'The age of the church fathers and early theology',
    icon: BookOpen,
    keyEvents: [
      'Development of Christian doctrine',
      'Church councils and creeds',
      'Persecutions and martyrdoms',
      'Monasticism begins',
      'Christianity becomes state religion'
    ],
    keyFigures: ['Augustine', 'Athanasius', 'Jerome', 'Chrysostom', 'Cyprian'],
    link: '/studies/history/patristic-period'
  },
  {
    title: 'Medieval Period (451-1517)',
    description: 'The age of Christendom and scholastic theology',
    icon: Shield,
    keyEvents: [
      'Rise of monastic orders',
      'Crusades and holy wars',
      'Scholastic theology development',
      'Great Schism (1054)',
      'Medieval universities and learning'
    ],
    keyFigures: ['Thomas Aquinas', 'Francis of Assisi', 'Anselm', 'Bernard of Clairvaux', 'Hildegard of Bingen'],
    link: '/studies/history/medieval-period'
  },
  {
    title: 'Reformation Period (1517-1648)',
    description: 'The Protestant Reformation and Catholic Counter-Reformation',
    icon: Zap,
    keyEvents: [
      'Luther\'s 95 Theses (1517)',
      'Protestant Reformation begins',
      'Catholic Counter-Reformation',
      'Religious wars in Europe',
      'Translation of Bible into vernacular'
    ],
    keyFigures: ['Martin Luther', 'John Calvin', 'Ulrich Zwingli', 'John Knox', 'Ignatius of Loyola'],
    link: '/studies/history/reformation-period'
  },
  {
    title: 'Modern Period (1648-1900)',
    description: 'The age of Enlightenment and modern theology',
    icon: Lightbulb,
    keyEvents: [
      'Age of Enlightenment',
      'Great Awakenings',
      'Modern missions movement',
      'Industrial Revolution impact',
      'Liberal theology emergence'
    ],
    keyFigures: ['Jonathan Edwards', 'John Wesley', 'Charles Spurgeon', 'Friedrich Schleiermacher', 'Søren Kierkegaard'],
    link: '/studies/history/modern-period'
  },
  {
    title: 'Contemporary Period (1900-Present)',
    description: 'The modern church in a changing world',
    icon: Globe,
    keyEvents: [
      'Ecumenical movement',
      'Pentecostal revival',
      'Vatican II Council',
      'Global Christianity growth',
      'Digital age and church'
    ],
    keyFigures: ['Karl Barth', 'Dietrich Bonhoeffer', 'Billy Graham', 'Pope John Paul II', 'Desmond Tutu'],
    link: '/studies/history/contemporary-period'
  }
]

const historicalThemes = [
  {
    title: 'Doctrinal Development',
    description: 'How Christian beliefs evolved and were formulated',
    topics: [
      'Trinity doctrine development',
      'Christology controversies',
      'Salvation theology evolution',
      'Church authority and structure',
      'Sacramental theology'
    ]
  },
  {
    title: 'Mission and Expansion',
    description: 'The spread of Christianity across the world',
    topics: [
      'Early missionary journeys',
      'Medieval missions',
      'Colonial era missions',
      'Modern missions movement',
      'Global Christianity today'
    ]
  },
  {
    title: 'Church and State',
    description: 'The relationship between church and political authority',
    topics: [
      'Roman persecution',
      'Constantinian era',
      'Medieval church-state relations',
      'Reformation politics',
      'Modern church-state separation'
    ]
  },
  {
    title: 'Christian Art and Culture',
    description: 'The cultural impact and artistic expression of Christianity',
    topics: [
      'Early Christian art',
      'Medieval architecture',
      'Renaissance religious art',
      'Reformation cultural changes',
      'Modern Christian culture'
    ]
  }
]

const studyResources = [
  {
    category: 'Primary Sources',
    resources: [
      { name: 'Church Fathers Collection', url: 'https://www.newadvent.org/fathers/', description: 'Complete writings of early church fathers' },
      { name: 'Medieval Sourcebook', url: 'https://sourcebooks.fordham.edu/sbook.asp', description: 'Medieval Christian texts and documents' },
      { name: 'Reformation Documents', url: 'https://www.ccel.org/', description: 'Key Reformation texts and writings' },
      { name: 'Vatican Documents', url: 'http://www.vatican.va/', description: 'Official Catholic church documents' }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      { name: 'Church History Journal', url: 'https://www.cambridge.org/core/journals/church-history', description: 'Leading church history research journal' },
      { name: 'Journal of Early Christian Studies', url: 'https://www.press.jhu.edu/journals/journal-early-christian-studies', description: 'Early church history research' },
      { name: 'Sixteenth Century Journal', url: 'https://www.escj.org/', description: 'Reformation and early modern studies' },
      { name: 'Catholic Historical Review', url: 'https://www.catholicu.edu/catholic-historical-review', description: 'Catholic church history research' }
    ]
  },
  {
    category: 'Online Libraries',
    resources: [
      { name: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/', description: 'Free historical Christian texts' },
      { name: 'Internet Medieval Sourcebook', url: 'https://sourcebooks.fordham.edu/sbook.asp', description: 'Medieval history resources' },
      { name: 'Reformation 500', url: 'https://reformation500.csl.edu/', description: 'Reformation history and resources' },
      { name: 'Early Church History', url: 'https://www.earlychurchhistory.org/', description: 'Early church historical resources' }
    ]
  }
]

const historicalTimeline = [
  {
    period: '30-100 AD',
    title: 'Apostolic Age',
    events: ['Pentecost (30 AD)', 'Paul\'s missionary journeys', 'Destruction of Jerusalem (70 AD)', 'John\'s Revelation (95 AD)']
  },
  {
    period: '100-451 AD',
    title: 'Patristic Period',
    events: ['Persecutions under various emperors', 'Council of Nicaea (325)', 'Augustine\'s Confessions (397)', 'Council of Chalcedon (451)']
  },
  {
    period: '451-1517',
    title: 'Medieval Period',
    events: ['Great Schism (1054)', 'First Crusade (1096)', 'Thomas Aquinas\' Summa (1274)', 'Fall of Constantinople (1453)']
  },
  {
    period: '1517-1648',
    title: 'Reformation Period',
    events: ['Luther\'s 95 Theses (1517)', 'Diet of Worms (1521)', 'Council of Trent (1545-63)', 'Peace of Westphalia (1648)']
  },
  {
    period: '1648-1900',
    title: 'Modern Period',
    events: ['Great Awakening (1730s)', 'French Revolution (1789)', 'Vatican I (1870)', 'Modern missions movement']
  },
  {
    period: '1900-Present',
    title: 'Contemporary Period',
    events: ['Pentecostal revival (1906)', 'Vatican II (1962-65)', 'Fall of Communism (1989)', 'Digital revolution']
  }
]

export default function ChurchHistoryStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Church History Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Journey through 2000 years of Christian history, from the apostolic age to contemporary developments. 
          Explore the people, events, and movements that shaped the church and continue to influence Christianity today.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Early Church</Badge>
          <Badge variant="secondary" className="text-sm">Medieval Period</Badge>
          <Badge variant="secondary" className="text-sm">Reformation</Badge>
          <Badge variant="secondary" className="text-sm">Modern Era</Badge>
          <Badge variant="secondary" className="text-sm">Contemporary</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="periods" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="periods">Historical Periods</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="periods" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {historicalPeriods.map((period) => {
              const Icon = period.icon
              return (
                <Card key={period.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{period.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {period.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Events:</h4>
                      <ul className="space-y-1 text-sm">
                        {period.keyEvents.map((event) => (
                          <li key={event} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Figures:</h4>
                      <div className="flex flex-wrap gap-2">
                        {period.keyFigures.map((figure) => (
                          <Badge key={figure} variant="outline" className="text-xs">
                            {figure}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={period.link}>
                        Explore {period.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="themes" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {historicalThemes.map((theme) => (
              <Card key={theme.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{theme.title}</CardTitle>
                  <CardDescription className="text-base">
                    {theme.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {theme.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                Christian History Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {historicalTimeline.map((era, index) => (
                  <div key={era.period} className="flex gap-6">
                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">
                      {era.period}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{era.title}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {era.events.map((event) => (
                          <li key={event} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          {studyResources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore Church History?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dive deeper into specific historical periods, study the church fathers, 
              and understand how historical developments shape contemporary Christianity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/theology">Theology Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/teachings">Historical Teachings</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Historical Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 