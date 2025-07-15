import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, Scale, ArrowRightLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comparative Religion Studies - Interfaith Dialogue & Religious Comparisons | ZION.FM',
  description: 'Explore comparative religion studies, interfaith dialogue, and cross-cultural religious analysis. Compare religious traditions, beliefs, practices, and theological concepts across world religions.',
  keywords: 'comparative religion, interfaith dialogue, religious comparison, cross-cultural religion, world religions, religious studies, interfaith studies, religious dialogue',
  openGraph: {
    title: 'Comparative Religion Studies - Interfaith Dialogue & Religious Comparisons',
    description: 'Comprehensive comparative religion studies and interfaith dialogue resources.',
    type: 'website',
  },
}

const comparativeTopics = [
  {
    category: 'Religious Traditions Comparison',
    description: 'Comparing major world religious traditions',
    icon: Globe,
    topics: [
      {
        name: 'Abrahamic Religions',
        description: 'Comparing Judaism, Christianity, and Islam',
        religions: ['Judaism', 'Christianity', 'Islam'],
        focus: ['Monotheism', 'Prophetic tradition', 'Sacred texts', 'Ethical monotheism'],
        link: '/studies/comparative/abrahamic-religions'
      },
      {
        name: 'Dharmic Religions',
        description: 'Comparing Hinduism, Buddhism, Jainism, and Sikhism',
        religions: ['Hinduism', 'Buddhism', 'Jainism', 'Sikhism'],
        focus: ['Karma and rebirth', 'Dharma', 'Meditation', 'Spiritual liberation'],
        link: '/studies/comparative/dharmic-religions'
      },
      {
        name: 'Eastern Philosophies',
        description: 'Comparing Confucianism, Taoism, and Shinto',
        religions: ['Confucianism', 'Taoism', 'Shinto'],
        focus: ['Harmony with nature', 'Social ethics', 'Ancestral veneration', 'Philosophical wisdom'],
        link: '/studies/comparative/eastern-philosophies'
      },
      {
        name: 'Indigenous Traditions',
        description: 'Comparing indigenous spiritual traditions worldwide',
        religions: ['Native American', 'African Traditional', 'Australian Aboriginal', 'Pacific Islander'],
        focus: ['Connection to land', 'Ancestral wisdom', 'Community rituals', 'Environmental spirituality'],
        link: '/studies/comparative/indigenous-traditions'
      }
    ]
  },
  {
    category: 'Theological Concepts Comparison',
    description: 'Comparing theological concepts across religions',
    icon: Brain,
    topics: [
      {
        name: 'Concepts of God',
        description: 'Comparing divine concepts across religious traditions',
        concepts: ['Personal God', 'Impersonal Brahman', 'Buddha Nature', 'Divine Unity'],
        focus: ['Divine attributes', 'God\'s relationship to creation', 'Divine intervention', 'Transcendence vs immanence'],
        link: '/studies/comparative/concepts-of-god'
      },
      {
        name: 'Salvation and Liberation',
        description: 'Comparing paths to salvation and spiritual liberation',
        concepts: ['Christian Salvation', 'Hindu Moksha', 'Buddhist Nirvana', 'Islamic Paradise'],
        focus: ['Means of salvation', 'Role of grace vs works', 'Individual vs communal', 'Temporal vs eternal'],
        link: '/studies/comparative/salvation-liberation'
      },
      {
        name: 'Ethics and Morality',
        description: 'Comparing ethical systems and moral frameworks',
        concepts: ['Divine Command', 'Natural Law', 'Karma and Dharma', 'Virtue Ethics'],
        focus: ['Moral authority', 'Ethical decision-making', 'Social responsibility', 'Personal character'],
        link: '/studies/comparative/ethics-morality'
      },
      {
        name: 'Afterlife and Eschatology',
        description: 'Comparing beliefs about death and the afterlife',
        concepts: ['Heaven and Hell', 'Reincarnation', 'Ancestral Realm', 'Spiritual Evolution'],
        focus: ['Judgment and justice', 'Continuity of consciousness', 'Relationship with ancestors', 'Ultimate destiny'],
        link: '/studies/comparative/afterlife-eschatology'
      }
    ]
  },
  {
    category: 'Religious Practices Comparison',
    description: 'Comparing religious practices and rituals',
    icon: Target,
    topics: [
      {
        name: 'Prayer and Meditation',
        description: 'Comparing prayer and meditation practices',
        practices: ['Christian Prayer', 'Islamic Salah', 'Buddhist Meditation', 'Hindu Puja'],
        focus: ['Purpose and intention', 'Physical postures', 'Mental focus', 'Spiritual benefits'],
        link: '/studies/comparative/prayer-meditation'
      },
      {
        name: 'Sacred Texts and Study',
        description: 'Comparing approaches to sacred texts',
        practices: ['Biblical Study', 'Quranic Recitation', 'Torah Study', 'Sutra Reading'],
        focus: ['Textual authority', 'Interpretation methods', 'Memorization', 'Application to life'],
        link: '/studies/comparative/sacred-texts'
      },
      {
        name: 'Worship and Ritual',
        description: 'Comparing worship practices and rituals',
        practices: ['Christian Worship', 'Islamic Worship', 'Hindu Puja', 'Buddhist Ceremonies'],
        focus: ['Community gathering', 'Symbolic actions', 'Sacred space', 'Temporal cycles'],
        link: '/studies/comparative/worship-ritual'
      },
      {
        name: 'Festivals and Celebrations',
        description: 'Comparing religious festivals and celebrations',
        practices: ['Christian Holidays', 'Islamic Festivals', 'Hindu Festivals', 'Buddhist Celebrations'],
        focus: ['Historical significance', 'Seasonal connections', 'Community bonding', 'Spiritual renewal'],
        link: '/studies/comparative/festivals-celebrations'
      }
    ]
  },
  {
    category: 'Interfaith Dialogue',
    description: 'Promoting understanding and cooperation between religions',
    icon: MessageSquare,
    topics: [
      {
        name: 'Dialogue Principles',
        description: 'Principles for effective interfaith dialogue',
        principles: ['Mutual Respect', 'Active Listening', 'Common Ground', 'Honest Differences'],
        focus: ['Communication skills', 'Cultural sensitivity', 'Theological humility', 'Relationship building'],
        link: '/studies/comparative/dialogue-principles'
      },
      {
        name: 'Common Values',
        description: 'Identifying shared values across religions',
        values: ['Compassion', 'Justice', 'Peace', 'Service to Others'],
        focus: ['Universal ethics', 'Human dignity', 'Social responsibility', 'Environmental stewardship'],
        link: '/studies/comparative/common-values'
      },
      {
        name: 'Contemporary Issues',
        description: 'Addressing contemporary issues through interfaith cooperation',
        issues: ['Social Justice', 'Environmental Protection', 'Peace Building', 'Human Rights'],
        focus: ['Collaborative action', 'Shared concerns', 'Diverse perspectives', 'Practical solutions'],
        link: '/studies/comparative/contemporary-issues'
      },
      {
        name: 'Interfaith Organizations',
        description: 'Organizations promoting interfaith understanding',
        organizations: ['World Council of Churches', 'Parliament of Religions', 'Interfaith Alliance', 'Religious Peacemakers'],
        focus: ['Global networks', 'Local initiatives', 'Educational programs', 'Peace building'],
        link: '/studies/comparative/interfaith-organizations'
      }
    ]
  }
]

const comparativeMethods = [
  {
    title: 'Historical-Comparative Method',
    description: 'Comparing religions through historical development',
    features: [
      'Historical context analysis',
      'Development tracking',
      'Influence identification',
      'Cultural interaction study'
    ],
    benefits: ['Historical perspective', 'Development understanding', 'Cultural context', 'Influence awareness']
  },
  {
    title: 'Phenomenological Method',
    description: 'Studying religious phenomena as they appear',
    features: [
      'Bracket personal beliefs',
      'Describe religious phenomena',
      'Identify patterns',
      'Seek understanding'
    ],
    benefits: ['Objective analysis', 'Pattern recognition', 'Deep understanding', 'Respectful approach']
  },
  {
    title: 'Functional Method',
    description: 'Analyzing religions by their social and psychological functions',
    features: [
      'Social function analysis',
      'Psychological function study',
      'Cultural integration',
      'Individual needs'
    ],
    benefits: ['Practical understanding', 'Social relevance', 'Psychological insight', 'Cultural integration']
  },
  {
    title: 'Theological Method',
    description: 'Comparing theological concepts and systems',
    features: [
      'Doctrinal comparison',
      'Theological analysis',
      'Conceptual mapping',
      'Systematic study'
    ],
    benefits: ['Theological clarity', 'Conceptual understanding', 'Systematic approach', 'Doctrinal insight']
  }
]

const studyResources = [
  {
    category: 'Interfaith Organizations',
    resources: [
      { name: 'Parliament of the World\'s Religions', url: 'https://parliamentofreligions.org/', description: 'Global interfaith organization' },
      { name: 'World Council of Churches', url: 'https://www.oikoumene.org/', description: 'Christian interfaith dialogue' },
      { name: 'Interfaith Alliance', url: 'https://interfaithalliance.org/', description: 'US-based interfaith organization' },
      { name: 'Religions for Peace', url: 'https://rfp.org/', description: 'Global interfaith peace organization' }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      { name: 'Harvard Pluralism Project', url: 'https://pluralism.org/', description: 'Religious diversity studies' },
      { name: 'Oxford Centre for Islamic Studies', url: 'https://www.oxcis.ac.uk/', description: 'Islamic studies and dialogue' },
      { name: 'Center for the Study of World Religions', url: 'https://cswr.hds.harvard.edu/', description: 'Comparative religion research' },
      { name: 'Journal of Ecumenical Studies', url: 'https://www.jesdialogue.org/', description: 'Interfaith academic journal' }
    ]
  },
  {
    category: 'Online Libraries',
    resources: [
      { name: 'Internet Sacred Texts Archive', url: 'https://www.sacred-texts.com/', description: 'Sacred texts from world religions' },
      { name: 'World Religions Database', url: 'https://worldreligionsdatabase.org/', description: 'Comprehensive religious data' },
      { name: 'Religious Studies Web Guide', url: 'https://www.vlib.us/religion/', description: 'Religious studies resources' },
      { name: 'Interfaith Calendar', url: 'https://www.interfaith-calendar.org/', description: 'Religious holidays and festivals' }
    ]
  }
]

const dialogueGuidelines = [
  {
    title: 'Preparation for Dialogue',
    guidelines: [
      'Educate yourself about other religions',
      'Approach with humility and openness',
      'Recognize your own biases and assumptions',
      'Prepare thoughtful questions and responses'
    ]
  },
  {
    title: 'During Dialogue',
    guidelines: [
      'Listen actively and respectfully',
      'Ask clarifying questions',
      'Share personal experiences honestly',
      'Focus on understanding, not converting'
    ]
  },
  {
    title: 'After Dialogue',
    guidelines: [
      'Reflect on what you learned',
      'Follow up on commitments made',
      'Continue building relationships',
      'Apply insights to your own practice'
    ]
  }
]

const contemporaryIssues = [
  {
    title: 'Religious Pluralism',
    description: 'Living in religiously diverse societies',
    challenges: ['Coexistence', 'Religious freedom', 'Cultural integration', 'Social harmony'],
    opportunities: ['Mutual learning', 'Cultural enrichment', 'Social cooperation', 'Peace building']
  },
  {
    title: 'Religious Extremism',
    description: 'Addressing religious extremism and violence',
    challenges: ['Misunderstanding', 'Fear and prejudice', 'Violent extremism', 'Social division'],
    opportunities: ['Education', 'Dialogue', 'Peace building', 'Community cooperation']
  },
  {
    title: 'Secularization',
    description: 'Religion in secular societies',
    challenges: ['Declining religious participation', 'Secular values', 'Religious literacy', 'Cultural relevance'],
    opportunities: ['Spiritual seeking', 'Interfaith cooperation', 'Social service', 'Cultural preservation']
  },
  {
    title: 'Globalization',
    description: 'Religion in a globalized world',
    challenges: ['Cultural homogenization', 'Religious competition', 'Migration and diversity', 'Digital communication'],
    opportunities: ['Global networks', 'Cultural exchange', 'Interfaith cooperation', 'Digital outreach']
  }
]

export default function ComparativeStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Comparative Religion Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore comparative religion studies, interfaith dialogue, and cross-cultural religious analysis. 
          Compare religious traditions, beliefs, practices, and theological concepts across world religions 
          to foster understanding and cooperation.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Interfaith Dialogue</Badge>
          <Badge variant="secondary" className="text-sm">Religious Comparison</Badge>
          <Badge variant="secondary" className="text-sm">Cross-Cultural Study</Badge>
          <Badge variant="secondary" className="text-sm">World Religions</Badge>
          <Badge variant="secondary" className="text-sm">Religious Cooperation</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="topics" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="dialogue">Dialogue</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="space-y-8">
          {comparativeTopics.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.topics.map((topic) => (
                      <Card key={topic.name} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{topic.name}</CardTitle>
                          <CardDescription className="text-base">
                            {topic.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              {topic.religions ? 'Religions:' : topic.concepts ? 'Concepts:' : topic.practices ? 'Practices:' : topic.principles ? 'Principles:' : topic.values ? 'Values:' : topic.issues ? 'Issues:' : topic.organizations ? 'Organizations:' : 'Focus:'}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {(topic.religions || topic.concepts || topic.practices || topic.principles || topic.values || topic.issues || topic.organizations)?.map((item) => (
                                <Badge key={item} variant="secondary" className="text-xs">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Focus Areas:</h4>
                            <div className="flex flex-wrap gap-2">
                              {topic.focus.map((item) => (
                                <Badge key={item} variant="outline" className="text-xs">
                                  {item}
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
            {comparativeMethods.map((method) => (
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

        <TabsContent value="dialogue" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {dialogueGuidelines.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.guidelines.map((guideline) => (
                      <li key={guideline} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="issues" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {contemporaryIssues.map((issue) => (
              <Card key={issue.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{issue.title}</CardTitle>
                  <CardDescription className="text-base">
                    {issue.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <div className="flex flex-wrap gap-2">
                      {issue.challenges.map((challenge) => (
                        <Badge key={challenge} variant="destructive" className="text-xs">
                          {challenge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {issue.opportunities.map((opportunity) => (
                        <Badge key={opportunity} variant="default" className="text-xs">
                          {opportunity}
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
            <h3 className="text-2xl font-bold mb-4">Build Bridges Through Understanding</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Engage in comparative religion studies and interfaith dialogue to foster 
              understanding, cooperation, and peace among different religious traditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/theology">Theology Studies</Link>
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