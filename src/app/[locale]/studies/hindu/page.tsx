import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Heart, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, Lotus, Flame } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hindu Studies - Philosophy, Practice, History & Sacred Texts | ZION.FM',
  description: 'Explore Hindu philosophy, spiritual practices, history, and sacred texts. Access study guides, Vedic literature, academic resources, and practical tools for deepening your understanding of Hinduism.',
  keywords: 'hindu studies, hindu philosophy, hindu practice, hindu history, vedic texts, upanishads, bhagavad gita, hindu resources, hindu study guides',
  openGraph: {
    title: 'Hindu Studies - Philosophy, Practice, History & Sacred Texts',
    description: 'Comprehensive Hindu studies resources: philosophy, practice, history, and sacred texts.',
    type: 'website',
  },
}

const studyAreas = [
  {
    area: 'Hindu Philosophy',
    description: 'Core schools, concepts, and philosophical systems',
    icon: Brain,
    topics: [
      {
        name: 'Six Darshanas',
        description: 'The six orthodox schools of Hindu philosophy',
        link: '/religion/hinduism/philosophy'
      },
      {
        name: 'Vedanta',
        description: 'Non-dualism, qualified non-dualism, and dualism',
        link: '/religion/hinduism/vedanta'
      },
      {
        name: 'Samkhya & Yoga',
        description: 'Dualistic philosophy and the path of yoga',
        link: '/religion/hinduism/yoga'
      },
      {
        name: 'Nyaya & Vaisheshika',
        description: 'Logic, epistemology, and metaphysics',
        link: '/religion/hinduism/nyaya-vaisheshika'
      }
    ]
  },
  {
    area: 'Spiritual Practices',
    description: 'Yoga, rituals, devotion, and daily life',
    icon: Lotus,
    topics: [
      {
        name: 'Paths of Yoga',
        description: 'Karma, Bhakti, Jnana, and Raja Yoga',
        link: '/religion/hinduism/practices'
      },
      {
        name: 'Puja & Rituals',
        description: 'Temple worship, home rituals, and festivals',
        link: '/religion/hinduism/rituals'
      },
      {
        name: 'Mantra & Meditation',
        description: 'Chanting, japa, and meditative practices',
        link: '/meditation/hindu'
      },
      {
        name: 'Pilgrimage & Sacred Places',
        description: 'Tirtha yatra and major Hindu pilgrimage sites',
        link: '/resources/places'
      }
    ]
  },
  {
    area: 'Hindu History',
    description: 'Historical development, dynasties, and cultural influence',
    icon: Clock,
    topics: [
      {
        name: 'Vedic Period',
        description: 'Origins and early Vedic civilization',
        link: '/religion/hinduism/history/early-hinduism'
      },
      {
        name: 'Classical & Medieval Hinduism',
        description: 'Epics, Puranas, and Bhakti movements',
        link: '/religion/hinduism/history/medieval'
      },
      {
        name: 'Modern Hinduism',
        description: 'Reform movements and global presence',
        link: '/religion/hinduism/history/modern'
      },
      {
        name: 'Hinduism in the West',
        description: 'Adaptation and influence in Western societies',
        link: '/religion/hinduism/history/modern'
      }
    ]
  },
  {
    area: 'Practice & Community',
    description: 'Ethics, festivals, social structure, and community life',
    icon: Heart,
    topics: [
      {
        name: 'Dharma & Ethics',
        description: 'Moral principles and duties in Hindu life',
        link: '/religion/hinduism/ethics'
      },
      {
        name: 'Festivals & Celebrations',
        description: 'Major Hindu festivals and their significance',
        link: '/religion/hinduism/festivals'
      },
      {
        name: 'Caste & Social Structure',
        description: 'Varna, jati, and social organization',
        link: '/religion/hinduism/social-structure'
      },
      {
        name: 'Hindu Diaspora',
        description: 'Global Hindu communities and cultural exchange',
        link: '/religion/hinduism/diaspora'
      }
    ]
  }
]

const sacredTexts = [
  {
    category: 'Vedas & Upanishads',
    texts: [
      {
        name: 'Rigveda, Yajurveda, Samaveda, Atharvaveda',
        description: 'The four foundational Vedic scriptures',
        link: '/sacred-texts/hindu/vedas',
        resources: [
          { name: 'Sanskrit Documents', url: 'https://sanskritdocuments.org/', description: 'Vedic texts and translations' },
          { name: 'Internet Sacred Texts Archive', url: 'https://www.sacred-texts.com/hin/', description: 'Vedas and Upanishads online' }
        ]
      },
      {
        name: 'Upanishads',
        description: 'Philosophical treatises on ultimate reality',
        link: '/sacred-texts/hindu/upanishads',
        resources: [
          { name: 'Upanishads at Sacred Texts', url: 'https://www.sacred-texts.com/hin/', description: 'English translations' },
          { name: 'Vedanta Spiritual Library', url: 'https://www.vedanta.com/', description: 'Upanishads and commentaries' }
        ]
      }
    ]
  },
  {
    category: 'Epics & Puranas',
    texts: [
      {
        name: 'Mahabharata & Ramayana',
        description: 'Epic narratives of dharma, heroism, and devotion',
        link: '/sacred-texts/hindu/epics',
        resources: [
          { name: 'Mahabharata Online', url: 'https://www.sacred-texts.com/hin/maha/index.htm', description: 'Full English text' },
          { name: 'Valmiki Ramayana', url: 'https://www.valmiki.iitk.ac.in/', description: 'Sanskrit and English' }
        ]
      },
      {
        name: 'Puranas',
        description: 'Mythological and cosmological texts',
        link: '/sacred-texts/hindu/puranas',
        resources: [
          { name: 'Puranas at Sacred Texts', url: 'https://www.sacred-texts.com/hin/', description: 'English translations' },
          { name: 'Ved Puran', url: 'https://www.vedpuran.com/', description: 'Hindi and English' }
        ]
      }
    ]
  },
  {
    category: 'Bhagavad Gita & Other Scriptures',
    texts: [
      {
        name: 'Bhagavad Gita',
        description: 'The song of God, a spiritual classic',
        link: '/sacred-texts/hindu/bhagavad-gita',
        resources: [
          { name: 'Bhagavad Gita Trust', url: 'https://www.bhagavad-gita.org/', description: 'English translations and commentaries' },
          { name: 'Gita Supersite', url: 'https://www.gitasupersite.iitk.ac.in/', description: 'Multilingual Gita resources' }
        ]
      },
      {
        name: 'Agamas & Tantras',
        description: 'Scriptures of temple worship and esoteric practice',
        link: '/sacred-texts/hindu/agamas',
        resources: [
          { name: 'Agamas at Shaivam', url: 'https://www.shaivam.org/scriptures/agamas', description: 'Shaiva Agamas' },
          { name: 'Tantra at Sacred Texts', url: 'https://www.sacred-texts.com/tantra/', description: 'Tantric texts' }
        ]
      }
    ]
  }
]

const studyResources = [
  {
    category: 'Online Libraries',
    resources: [
      { name: 'Sanskrit Documents', url: 'https://sanskritdocuments.org/', description: 'Hindu texts and translations' },
      { name: 'Internet Sacred Texts Archive', url: 'https://www.sacred-texts.com/hin/', description: 'Vedas, Upanishads, and more' },
      { name: 'Vedanta Spiritual Library', url: 'https://www.vedanta.com/', description: 'Upanishads and commentaries' },
      { name: 'Gita Supersite', url: 'https://www.gitasupersite.iitk.ac.in/', description: 'Multilingual Gita resources' }
    ]
  },
  {
    category: 'Academic & Research',
    resources: [
      { name: 'Oxford Centre for Hindu Studies', url: 'https://ochs.org.uk/', description: 'Academic research and publications' },
      { name: 'Digital South Asia Library', url: 'https://dsal.uchicago.edu/', description: 'Texts and resources' },
      { name: 'Indology.info', url: 'https://indology.info/', description: 'Scholarly resources' },
      { name: 'Journal of Hindu Studies', url: 'https://academic.oup.com/jhs', description: 'Peer-reviewed journal' }
    ]
  },
  {
    category: 'Practice & Community',
    resources: [
      { name: 'Hindu American Foundation', url: 'https://www.hafsite.org/', description: 'Advocacy and education' },
      { name: 'ISKCON', url: 'https://www.iskcon.org/', description: 'Bhakti movement and resources' },
      { name: 'Hinduism Today', url: 'https://www.hinduismtoday.com/', description: 'Magazine and resources' },
      { name: 'BAPS Swaminarayan', url: 'https://www.baps.org/', description: 'Community and temple network' }
    ]
  }
]

const studyGuides = [
  {
    title: 'Beginner’s Guide to Hinduism',
    description: 'Step-by-step introduction to Hindu beliefs, practices, and texts',
    link: '/studies/guides/hinduism'
  },
  {
    title: 'Comparative Hinduism',
    description: 'Compare Hindu traditions, texts, and practices',
    link: '/studies/comparative/dharmic-religions'
  },
  {
    title: 'Hindu Meditation Guide',
    description: 'Practical instructions for mantra and yoga meditation',
    link: '/meditation/hindu'
  },
  {
    title: 'Hindu History Timeline',
    description: 'Chronological overview of Hindu history',
    link: '/religion/hinduism/history/early-hinduism'
  }
]

export default function HinduStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Hindu Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the depth and diversity of Hindu philosophy, practice, history, and sacred texts. 
          Access Vedic literature, study guides, and resources for a comprehensive understanding of Hinduism.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Philosophy</Badge>
          <Badge variant="secondary" className="text-sm">Practice</Badge>
          <Badge variant="secondary" className="text-sm">History</Badge>
          <Badge variant="secondary" className="text-sm">Sacred Texts</Badge>
          <Badge variant="secondary" className="text-sm">Community</Badge>
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
          {sacredTexts.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.texts.map((text) => (
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
              <CardTitle className="text-xl">Join the Hindu Community</CardTitle>
              <CardDescription className="text-base">
                Connect with practitioners, teachers, and study groups worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.hafsite.org/" target="_blank" rel="noopener noreferrer">
                    Hindu American Foundation
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.iskcon.org/" target="_blank" rel="noopener noreferrer">
                    ISKCON
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.baps.org/" target="_blank" rel="noopener noreferrer">
                    BAPS Swaminarayan
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
            <h3 className="text-2xl font-bold mb-4">Begin Your Hindu Studies Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore Hindu philosophy, practice, and sacred texts with our curated guides, Vedic literature, and community resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/sacred-texts/hindu">Hindu Sacred Texts</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/guides/hinduism">Beginner’s Guide</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/meditation/hindu">Meditation Guide</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 