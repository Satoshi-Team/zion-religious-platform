import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Heart, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, Lotus } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhist Studies - Philosophy, Meditation, History & Practice | ZION.FM',
  description: 'Explore Buddhist philosophy, meditation, history, and practice. Access study guides, canonical texts, academic resources, and practical tools for deepening your understanding of Buddhism.',
  keywords: 'buddhist studies, buddhist philosophy, buddhist meditation, buddhist history, buddhist practice, buddhist texts, buddhist resources, buddhist study guides',
  openGraph: {
    title: 'Buddhist Studies - Philosophy, Meditation, History & Practice',
    description: 'Comprehensive Buddhist studies resources: philosophy, meditation, history, practice, and canonical texts.',
    type: 'website',
  },
}

const studyAreas = [
  {
    area: 'Buddhist Philosophy',
    description: 'Core teachings, schools, and philosophical systems',
    icon: Brain,
    topics: [
      {
        name: 'The Four Noble Truths',
        description: 'The foundation of Buddhist understanding of suffering and liberation',
        link: '/religion/buddhism/teachings'
      },
      {
        name: 'The Noble Eightfold Path',
        description: 'The practical path to end suffering and achieve enlightenment',
        link: '/religion/buddhism/practices'
      },
      {
        name: 'Madhyamaka & Yogacara',
        description: 'Major Mahayana philosophical schools',
        link: '/religion/buddhism/philosophy'
      },
      {
        name: 'Abhidharma',
        description: 'Buddhist psychology and analysis of mind',
        link: '/religion/buddhism/abhidharma'
      }
    ]
  },
  {
    area: 'Meditation & Mind Training',
    description: 'Meditation techniques, mindfulness, and mental cultivation',
    icon: Lotus,
    topics: [
      {
        name: 'Samatha & Vipassana',
        description: 'Calm abiding and insight meditation',
        link: '/meditation/buddhist'
      },
      {
        name: 'Zen & Chan Meditation',
        description: 'Direct experience and non-conceptual awareness',
        link: '/religion/buddhism/practices'
      },
      {
        name: 'Tibetan Vajrayana Practices',
        description: 'Mantra, visualization, and advanced yogas',
        link: '/religion/buddhism/vajrayana'
      },
      {
        name: 'Mindfulness in Daily Life',
        description: 'Practical applications of mindfulness and awareness',
        link: '/meditation/buddhist'
      }
    ]
  },
  {
    area: 'Buddhist History',
    description: 'Historical development, spread, and cultural adaptation',
    icon: Clock,
    topics: [
      {
        name: 'Early Buddhism',
        description: 'Origins and teachings of the historical Buddha',
        link: '/religion/buddhism/history/early-buddhism'
      },
      {
        name: 'Spread Across Asia',
        description: 'Transmission to Sri Lanka, China, Tibet, Japan, and beyond',
        link: '/religion/buddhism/history/medieval'
      },
      {
        name: 'Modern Buddhism',
        description: 'Contemporary movements and global presence',
        link: '/religion/buddhism/history/modern'
      },
      {
        name: 'Buddhism in the West',
        description: 'Adaptation and influence in Western societies',
        link: '/religion/buddhism/history/modern'
      }
    ]
  },
  {
    area: 'Practice & Community',
    description: 'Ethics, rituals, sangha, and engaged Buddhism',
    icon: Heart,
    topics: [
      {
        name: 'Five Precepts & Lay Ethics',
        description: 'Moral guidelines for lay practitioners',
        link: '/religion/buddhism/practices'
      },
      {
        name: 'Monastic Life',
        description: 'Role and rules of the Buddhist monastic community',
        link: '/religion/buddhism/monasticism'
      },
      {
        name: 'Engaged Buddhism',
        description: 'Buddhist social action and contemporary issues',
        link: '/religion/buddhism/engaged-buddhism'
      },
      {
        name: 'Festivals & Rituals',
        description: 'Major Buddhist festivals and ritual practices',
        link: '/religion/buddhism/festivals'
      }
    ]
  }
]

const canonicalTexts = [
  {
    tradition: 'Theravada',
    texts: [
      {
        name: 'Pali Canon (Tipitaka)',
        description: 'The earliest complete Buddhist canon, preserved in Pali',
        link: '/sacred-texts/buddhist/pali-canon',
        resources: [
          { name: 'SuttaCentral', url: 'https://suttacentral.net/', description: 'Pali Canon and parallels in many languages' },
          { name: 'Access to Insight', url: 'https://www.accesstoinsight.org/', description: 'English translations and study guides' },
          { name: 'Tipitaka.org', url: 'https://tipitaka.org/', description: 'Pali Canon in Pali and English' }
        ]
      }
    ]
  },
  {
    tradition: 'Mahayana',
    texts: [
      {
        name: 'Mahayana Sutras',
        description: 'Key scriptures of the Mahayana tradition',
        link: '/sacred-texts/buddhist/mahayana-sutras',
        resources: [
          { name: '84000: Translating the Words of the Buddha', url: 'https://84000.co/', description: 'English translations of Mahayana sutras' },
          { name: 'Buddhist Digital Resource Center', url: 'https://www.bdrc.io/', description: 'Tibetan and Sanskrit texts' }
        ]
      }
    ]
  },
  {
    tradition: 'Vajrayana',
    texts: [
      {
        name: 'Tantras & Commentaries',
        description: 'Esoteric scriptures and practice manuals',
        link: '/sacred-texts/buddhist/vajrayana',
        resources: [
          { name: 'Lotsawa House', url: 'https://www.lotsawahouse.org/', description: 'Translations of Tibetan Buddhist texts' },
          { name: 'Rigpa Wiki', url: 'https://www.rigpawiki.org/', description: 'Tibetan Buddhist teachings and history' }
        ]
      }
    ]
  }
]

const studyResources = [
  {
    category: 'Online Libraries',
    resources: [
      { name: 'SuttaCentral', url: 'https://suttacentral.net/', description: 'Pali Canon and parallels' },
      { name: 'Access to Insight', url: 'https://www.accesstoinsight.org/', description: 'Theravada texts and guides' },
      { name: '84000', url: 'https://84000.co/', description: 'Mahayana sutras in English' },
      { name: 'Buddhist Digital Resource Center', url: 'https://www.bdrc.io/', description: 'Tibetan and Sanskrit texts' }
    ]
  },
  {
    category: 'Academic & Research',
    resources: [
      { name: 'Oxford Centre for Buddhist Studies', url: 'https://www.ocbs.org/', description: 'Academic research and publications' },
      { name: 'Buddhist Studies Online', url: 'https://www.buddhiststudiesonline.com/', description: 'Courses and lectures' },
      { name: 'Journal of Buddhist Ethics', url: 'https://blogs.dickinson.edu/buddhistethics/', description: 'Peer-reviewed journal' },
      { name: 'Buddhist Digital Library', url: 'https://www.buddhistelibrary.org/', description: 'Digital Buddhist texts' }
    ]
  },
  {
    category: 'Practice & Community',
    resources: [
      { name: 'Dhamma Talks', url: 'https://www.dhammatalks.org/', description: 'Audio and text teachings' },
      { name: 'Tricycle', url: 'https://tricycle.org/', description: 'Buddhist magazine and resources' },
      { name: 'BuddhaNet', url: 'https://www.buddhanet.net/', description: 'Educational and practice resources' },
      { name: 'Insight Meditation Society', url: 'https://www.dharma.org/', description: 'Retreats and teachings' }
    ]
  }
]

const studyGuides = [
  {
    title: 'Beginner’s Guide to Buddhism',
    description: 'Step-by-step introduction to Buddhist teachings, meditation, and community',
    link: '/studies/guides/buddhism'
  },
  {
    title: 'Comparative Buddhism',
    description: 'Compare Buddhist traditions, texts, and practices',
    link: '/studies/comparative/dharmic-religions'
  },
  {
    title: 'Buddhist Meditation Guide',
    description: 'Practical instructions for meditation and mindfulness',
    link: '/meditation/buddhist'
  },
  {
    title: 'Buddhist History Timeline',
    description: 'Chronological overview of Buddhist history',
    link: '/religion/buddhism/history/early-buddhism'
  }
]

export default function BuddhistStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Buddhist Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the depth and diversity of Buddhist thought, meditation, history, and practice. 
          Access canonical texts, study guides, and resources for a comprehensive understanding of Buddhism.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Philosophy</Badge>
          <Badge variant="secondary" className="text-sm">Meditation</Badge>
          <Badge variant="secondary" className="text-sm">History</Badge>
          <Badge variant="secondary" className="text-sm">Practice</Badge>
          <Badge variant="secondary" className="text-sm">Canonical Texts</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="areas" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="areas">Areas</TabsTrigger>
          <TabsTrigger value="texts">Texts</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="areas" className="space-y-8">
          {studyAreas.map((area) => {
            const Icon = area.icon
            return (
              <Card key={area.area}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{area.area}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {area.topics.map((topic) => (
                      <Card key={topic.name} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{topic.name}</CardTitle>
                          <CardDescription className="text-base">
                            {topic.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button asChild className="w-full mt-2">
                            <Link href={topic.link}>
                              Learn More
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="texts" className="space-y-8">
          {canonicalTexts.map((tradition) => (
            <Card key={tradition.tradition}>
              <CardHeader>
                <CardTitle className="text-2xl">{tradition.tradition} Canonical Texts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {tradition.texts.map((text) => (
                    <Card key={text.name} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">{text.name}</CardTitle>
                        <CardDescription className="text-base">
                          {text.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button asChild className="w-full">
                          <Link href={text.link}>
                            Explore {text.name}
                          </Link>
                        </Button>
                        <div className="mt-2">
                          <h4 className="font-semibold mb-2">Online Resources:</h4>
                          <div className="flex flex-wrap gap-2">
                            {text.resources.map((resource) => (
                              <Button asChild key={resource.name} size="sm" variant="outline">
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  {resource.name}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="guides" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {studyGuides.map((guide) => (
              <Card key={guide.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription className="text-base">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full mt-2">
                    <Link href={guide.link}>
                      View Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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

        <TabsContent value="community" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Join the Buddhist Community</CardTitle>
              <CardDescription className="text-base">
                Connect with practitioners, teachers, and study groups worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="outline">
                  <a href="https://tricycle.org/community/" target="_blank" rel="noopener noreferrer">
                    Tricycle Community
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.dharma.org/teachers/" target="_blank" rel="noopener noreferrer">
                    IMS Teachers
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.buddhanet.net/links.htm" target="_blank" rel="noopener noreferrer">
                    BuddhaNet Directory
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Begin Your Buddhist Studies Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore Buddhist philosophy, meditation, and history with our curated guides, canonical texts, and community resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/sacred-texts/buddhist">Buddhist Sacred Texts</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/guides/buddhism">Beginner’s Guide</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/meditation/buddhist">Meditation Guide</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 