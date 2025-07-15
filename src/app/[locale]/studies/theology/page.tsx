import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Theology Studies - Systematic Theology & Religious Philosophy | ZION.FM',
  description: 'Explore systematic theology, comparative religion, and theological concepts from various religious traditions. Study God, divine nature, religious philosophy, and theological systems.',
  keywords: 'theology studies, systematic theology, religious philosophy, comparative religion, theological concepts, divine nature, religious studies, theological systems',
  openGraph: {
    title: 'Theology Studies - Systematic Theology & Religious Philosophy',
    description: 'Comprehensive theology studies covering systematic theology and religious philosophy.',
    type: 'website',
  },
}

const theologicalAreas = [
  {
    area: 'Systematic Theology',
    description: 'Organized study of theological doctrines and beliefs',
    icon: Brain,
    topics: [
      {
        name: 'Theology Proper (Study of God)',
        description: 'Understanding the nature, attributes, and character of God',
        subtopics: ['Divine attributes', 'Trinity doctrine', 'Omnipotence', 'Omniscience', 'Omnipresence'],
        link: '/studies/theology/systematic/god'
      },
      {
        name: 'Christology',
        description: 'Study of the person and work of Jesus Christ',
        subtopics: ['Incarnation', 'Divine nature', 'Human nature', 'Atonement', 'Resurrection'],
        link: '/studies/theology/systematic/christology'
      },
      {
        name: 'Pneumatology',
        description: 'Study of the Holy Spirit and spiritual gifts',
        subtopics: ['Spirit\'s work', 'Spiritual gifts', 'Indwelling', 'Fruit of the Spirit', 'Spiritual guidance'],
        link: '/studies/theology/systematic/pneumatology'
      },
      {
        name: 'Soteriology',
        description: 'Study of salvation and redemption',
        subtopics: ['Grace', 'Faith', 'Justification', 'Sanctification', 'Election'],
        link: '/studies/theology/systematic/soteriology'
      },
      {
        name: 'Ecclesiology',
        description: 'Study of the church and community',
        subtopics: ['Church nature', 'Church government', 'Sacraments', 'Ministry', 'Unity'],
        link: '/studies/theology/systematic/ecclesiology'
      },
      {
        name: 'Eschatology',
        description: 'Study of end times and final things',
        subtopics: ['Second coming', 'Resurrection', 'Judgment', 'Heaven', 'Hell'],
        link: '/studies/theology/systematic/eschatology'
      }
    ]
  },
  {
    area: 'Comparative Theology',
    description: 'Comparing theological concepts across religious traditions',
    icon: Globe,
    topics: [
      {
        name: 'Monotheism vs Polytheism',
        description: 'Comparing belief in one God vs multiple deities',
        subtopics: ['Abrahamic monotheism', 'Hindu polytheism', 'Buddhist non-theism', 'Indigenous traditions'],
        link: '/studies/theology/comparative/monotheism-polytheism'
      },
      {
        name: 'Divine Nature',
        description: 'Understanding concepts of divinity across religions',
        subtopics: ['Personal God', 'Impersonal Brahman', 'Buddha nature', 'Divine attributes'],
        link: '/studies/theology/comparative/divine-nature'
      },
      {
        name: 'Salvation and Liberation',
        description: 'Comparing paths to salvation and spiritual liberation',
        subtopics: ['Christian salvation', 'Hindu moksha', 'Buddhist nirvana', 'Islamic paradise'],
        link: '/studies/theology/comparative/salvation'
      },
      {
        name: 'Ethics and Morality',
        description: 'Comparing ethical systems and moral frameworks',
        subtopics: ['Divine command', 'Natural law', 'Karma', 'Dharma', 'Virtue ethics'],
        link: '/studies/theology/comparative/ethics'
      }
    ]
  },
  {
    area: 'Philosophical Theology',
    description: 'Philosophical analysis of religious concepts and beliefs',
    icon: Compass,
    topics: [
      {
        name: 'Arguments for God\'s Existence',
        description: 'Philosophical arguments supporting belief in God',
        subtopics: ['Ontological argument', 'Cosmological argument', 'Teleological argument', 'Moral argument'],
        link: '/studies/theology/philosophical/god-arguments'
      },
      {
        name: 'Problem of Evil',
        description: 'Addressing the existence of evil in a world created by a good God',
        subtopics: ['Theodicy', 'Free will defense', 'Soul-making theodicy', 'Process theology'],
        link: '/studies/theology/philosophical/problem-of-evil'
      },
      {
        name: 'Faith and Reason',
        description: 'Relationship between religious faith and rational inquiry',
        subtopics: ['Fideism', 'Rationalism', 'Reformed epistemology', 'Natural theology'],
        link: '/studies/theology/philosophical/faith-reason'
      },
      {
        name: 'Religious Language',
        description: 'How we speak about and understand religious concepts',
        subtopics: ['Analogical language', 'Symbolic language', 'Mystical language', 'Metaphorical language'],
        link: '/studies/theology/philosophical/religious-language'
      }
    ]
  },
  {
    area: 'Historical Theology',
    description: 'Development of theological thought throughout history',
    icon: Book,
    topics: [
      {
        name: 'Patristic Theology',
        description: 'Theology of the early church fathers',
        subtopics: ['Apostolic fathers', 'Church councils', 'Creeds', 'Early heresies'],
        link: '/studies/theology/historical/patristic'
      },
      {
        name: 'Medieval Theology',
        description: 'Theological developments in the Middle Ages',
        subtopics: ['Scholasticism', 'Thomas Aquinas', 'Mysticism', 'Monastic theology'],
        link: '/studies/theology/historical/medieval'
      },
      {
        name: 'Reformation Theology',
        description: 'Theological changes during the Protestant Reformation',
        subtopics: ['Lutheranism', 'Calvinism', 'Anabaptism', 'Anglicanism'],
        link: '/studies/theology/historical/reformation'
      },
      {
        name: 'Modern Theology',
        description: 'Theological developments in the modern era',
        subtopics: ['Liberal theology', 'Neo-orthodoxy', 'Process theology', 'Liberation theology'],
        link: '/studies/theology/historical/modern'
      }
    ]
  }
]

const theologicalMethods = [
  {
    title: 'Biblical Theology',
    description: 'Studying theology through biblical narrative and themes',
    features: [
      'Redemptive-historical approach',
      'Covenant theology',
      'Biblical narrative analysis',
      'Thematic development'
    ],
    benefits: ['Biblical grounding', 'Narrative coherence', 'Historical progression', 'Covenant framework']
  },
  {
    title: 'Systematic Theology',
    description: 'Organizing theological concepts into coherent systems',
    features: [
      'Logical organization',
      'Doctrinal coherence',
      'Systematic presentation',
      'Theological integration'
    ],
    benefits: ['Logical clarity', 'Doctrinal consistency', 'Comprehensive coverage', 'Educational structure']
  },
  {
    title: 'Historical Theology',
    description: 'Understanding theology through historical development',
    features: [
      'Historical context',
      'Development tracking',
      'Influence analysis',
      'Tradition understanding'
    ],
    benefits: ['Historical perspective', 'Development awareness', 'Contextual understanding', 'Tradition appreciation']
  },
  {
    title: 'Practical Theology',
    description: 'Applying theological insights to practical ministry and life',
    features: [
      'Practical application',
      'Ministry relevance',
      'Life integration',
      'Service orientation'
    ],
    benefits: ['Practical relevance', 'Ministry effectiveness', 'Life application', 'Service focus']
  }
]

const studyResources = [
  {
    category: 'Theological Libraries',
    resources: [
      { name: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/', description: 'Classic theological works online' },
      { name: 'Theology Library', url: 'https://www.theology.edu/', description: 'Theological resources and materials' },
      { name: 'Monergism', url: 'https://www.monergism.com/', description: 'Reformed theological resources' },
      { name: 'Theopedia', url: 'https://www.theopedia.com/', description: 'Theological encyclopedia' }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      { name: 'JSTOR Theology', url: 'https://www.jstor.org/', description: 'Academic theological research' },
      { name: 'ATLA Religion Database', url: 'https://www.atla.com/', description: 'Religious studies database' },
      { name: 'Oxford Theology', url: 'https://www.oxfordbibliographies.com/', description: 'Theological bibliography' },
      { name: 'Cambridge Theology', url: 'https://www.cambridge.org/', description: 'Theological publications' }
    ]
  },
  {
    category: 'Comparative Religion',
    resources: [
      { name: 'Harvard Pluralism Project', url: 'https://pluralism.org/', description: 'Religious diversity studies' },
      { name: 'World Religions Database', url: 'https://worldreligionsdatabase.org/', description: 'Global religious data' },
      { name: 'Religious Studies Web Guide', url: 'https://www.vlib.us/religion/', description: 'Religious studies resources' },
      { name: 'Interfaith Dialogue', url: 'https://www.interfaith.org/', description: 'Interfaith resources' }
    ]
  }
]

const theologicalConcepts = [
  {
    title: 'Divine Attributes',
    concepts: [
      'Omnipotence (All-powerful)',
      'Omniscience (All-knowing)',
      'Omnipresence (All-present)',
      'Omnibenevolence (All-good)',
      'Immutability (Unchanging)',
      'Eternality (Timeless)',
      'Simplicity (Non-composite)',
      'Aseity (Self-existent)'
    ]
  },
  {
    title: 'Theological Systems',
    concepts: [
      'Calvinism (Reformed Theology)',
      'Arminianism (Wesleyan Theology)',
      'Lutheranism (Confessional Theology)',
      'Catholicism (Roman Catholic Theology)',
      'Orthodoxy (Eastern Orthodox Theology)',
      'Pentecostalism (Charismatic Theology)',
      'Liberation Theology',
      'Process Theology'
    ]
  },
  {
    title: 'Religious Traditions',
    concepts: [
      'Abrahamic Religions (Judaism, Christianity, Islam)',
      'Dharmic Religions (Hinduism, Buddhism, Jainism, Sikhism)',
      'Indigenous Religions',
      'New Religious Movements',
      'Secular Humanism',
      'Agnosticism',
      'Atheism',
      'Spiritual but not Religious'
    ]
  }
]

const studyApproaches = [
  {
    title: 'Analytical Approach',
    description: 'Using logical analysis and critical thinking',
    steps: [
      'Define theological terms clearly',
      'Analyze logical consistency',
      'Examine evidence and arguments',
      'Evaluate competing viewpoints'
    ],
    benefits: ['Logical clarity', 'Critical thinking', 'Rigorous analysis', 'Intellectual honesty']
  },
  {
    title: 'Historical Approach',
    description: 'Understanding theology in historical context',
    steps: [
      'Study historical development',
      'Examine cultural context',
      'Analyze influential figures',
      'Track doctrinal evolution'
    ],
    benefits: ['Historical perspective', 'Contextual understanding', 'Development awareness', 'Tradition appreciation']
  },
  {
    title: 'Comparative Approach',
    description: 'Comparing theological concepts across traditions',
    steps: [
      'Identify common themes',
      'Compare different perspectives',
      'Analyze similarities and differences',
      'Seek mutual understanding'
    ],
    benefits: ['Broader perspective', 'Interfaith dialogue', 'Comparative insights', 'Mutual respect']
  },
  {
    title: 'Experiential Approach',
    description: 'Understanding theology through personal experience',
    steps: [
      'Reflect on personal experiences',
      'Integrate theology with life',
      'Practice spiritual disciplines',
      'Engage in community worship'
    ],
    benefits: ['Personal relevance', 'Life integration', 'Spiritual growth', 'Practical application']
  }
]

export default function TheologyStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Theology Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore systematic theology, comparative religion, and theological concepts from various religious traditions. 
          Study the nature of God, divine attributes, religious philosophy, and theological systems.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Systematic Theology</Badge>
          <Badge variant="secondary" className="text-sm">Comparative Religion</Badge>
          <Badge variant="secondary" className="text-sm">Philosophical Theology</Badge>
          <Badge variant="secondary" className="text-sm">Historical Theology</Badge>
          <Badge variant="secondary" className="text-sm">Religious Philosophy</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="areas" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="areas">Areas</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="concepts">Concepts</TabsTrigger>
          <TabsTrigger value="approaches">Approaches</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="areas" className="space-y-8">
          {theologicalAreas.map((area) => {
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
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Topics:</h4>
                            <div className="flex flex-wrap gap-2">
                              {topic.subtopics.map((subtopic) => (
                                <Badge key={subtopic} variant="secondary" className="text-xs">
                                  {subtopic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <Link href={topic.link}>
                              Study {topic.name}
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

        <TabsContent value="methods" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {theologicalMethods.map((method) => (
              <Card key={method.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {method.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="concepts" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {theologicalConcepts.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.concepts.map((concept) => (
                      <li key={concept} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approaches" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {studyApproaches.map((approach) => (
              <Card key={approach.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ol className="space-y-1 text-sm">
                      {approach.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-semibold text-primary">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {approach.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
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
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Deepen Your Theological Understanding</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore systematic theology, comparative religion, and philosophical theology 
              to develop a comprehensive understanding of religious thought and practice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/commentaries">Commentaries</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/guides">Study Guides</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Study Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 