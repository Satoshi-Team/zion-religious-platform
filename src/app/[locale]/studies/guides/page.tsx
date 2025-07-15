import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Study Guides - Religious Education & Learning Paths | ZION.FM',
  description: 'Comprehensive study guides for religious education. Explore structured learning paths for Christianity, Islam, Buddhism, Hinduism, and other world religions with curated resources and study plans.',
  keywords: 'study guides, religious education, learning paths, religious studies, educational resources, religious curriculum, study plans',
  openGraph: {
    title: 'Study Guides - Religious Education & Learning Paths',
    description: 'Structured learning paths and study guides for comprehensive religious education.',
    type: 'website',
  },
}

const studyPaths = [
  {
    title: 'Beginner Path',
    description: 'Foundational knowledge for newcomers to religious studies',
    icon: BookOpen,
    duration: '3-6 months',
    difficulty: 'Beginner',
    topics: [
      'Introduction to World Religions',
      'Basic Religious Concepts',
      'Sacred Texts Overview',
      'Religious Practices and Rituals',
      'Religious History Timeline'
    ],
    resources: [
      'Essential religious texts',
      'Introductory videos and podcasts',
      'Basic terminology guides',
      'Timeline of religious development',
      'Interactive learning modules'
    ],
    link: '/studies/guides/beginner'
  },
  {
    title: 'Intermediate Path',
    description: 'Deeper exploration of religious traditions and theology',
    icon: GraduationCap,
    duration: '6-12 months',
    difficulty: 'Intermediate',
    topics: [
      'Comparative Theology',
      'Religious Philosophy',
      'Historical Development',
      'Religious Ethics and Morality',
      'Interfaith Dialogue'
    ],
    resources: [
      'Advanced theological texts',
      'Academic commentaries',
      'Historical documents',
      'Philosophical treatises',
      'Comparative analysis tools'
    ],
    link: '/studies/guides/intermediate'
  },
  {
    title: 'Advanced Path',
    description: 'Specialized study in specific religious traditions',
    icon: Lightbulb,
    duration: '12+ months',
    difficulty: 'Advanced',
    topics: [
      'Specialized Religious Studies',
      'Academic Research Methods',
      'Religious Leadership',
      'Contemporary Religious Issues',
      'Theological Debates'
    ],
    resources: [
      'Academic journals and papers',
      'Primary source documents',
      'Research methodologies',
      'Expert commentaries',
      'Advanced theological works'
    ],
    link: '/studies/guides/advanced'
  }
]

const religiousStudies = [
  {
    religion: 'Christianity',
    description: 'Study of Christian theology, history, and practice',
    levels: [
      {
        level: 'Beginner',
        topics: ['Bible basics', 'Christian history', 'Core doctrines', 'Christian practices'],
        duration: '3 months',
        link: '/studies/guides/christianity/beginner'
      },
      {
        level: 'Intermediate',
        topics: ['Systematic theology', 'Church history', 'Biblical interpretation', 'Christian ethics'],
        duration: '6 months',
        link: '/studies/guides/christianity/intermediate'
      },
      {
        level: 'Advanced',
        topics: ['Advanced theology', 'Historical theology', 'Biblical studies', 'Christian philosophy'],
        duration: '12 months',
        link: '/studies/guides/christianity/advanced'
      }
    ]
  },
  {
    religion: 'Islam',
    description: 'Study of Islamic theology, law, and spiritual practice',
    levels: [
      {
        level: 'Beginner',
        topics: ['Quran basics', 'Islamic history', 'Five pillars', 'Islamic practices'],
        duration: '3 months',
        link: '/studies/guides/islam/beginner'
      },
      {
        level: 'Intermediate',
        topics: ['Islamic theology', 'Sharia law', 'Hadith studies', 'Islamic philosophy'],
        duration: '6 months',
        link: '/studies/guides/islam/intermediate'
      },
      {
        level: 'Advanced',
        topics: ['Advanced Islamic studies', 'Sufism', 'Islamic jurisprudence', 'Contemporary issues'],
        duration: '12 months',
        link: '/studies/guides/islam/advanced'
      }
    ]
  },
  {
    religion: 'Buddhism',
    description: 'Study of Buddhist philosophy, meditation, and practice',
    levels: [
      {
        level: 'Beginner',
        topics: ['Four Noble Truths', 'Eightfold Path', 'Buddhist history', 'Basic meditation'],
        duration: '3 months',
        link: '/studies/guides/buddhism/beginner'
      },
      {
        level: 'Intermediate',
        topics: ['Buddhist philosophy', 'Meditation techniques', 'Buddhist texts', 'Ethics and morality'],
        duration: '6 months',
        link: '/studies/guides/buddhism/intermediate'
      },
      {
        level: 'Advanced',
        topics: ['Advanced meditation', 'Buddhist psychology', 'Mahayana philosophy', 'Vajrayana practices'],
        duration: '12 months',
        link: '/studies/guides/buddhism/advanced'
      }
    ]
  },
  {
    religion: 'Hinduism',
    description: 'Study of Hindu philosophy, scriptures, and spiritual practices',
    levels: [
      {
        level: 'Beginner',
        topics: ['Vedas and Upanishads', 'Hindu deities', 'Dharma and karma', 'Basic practices'],
        duration: '3 months',
        link: '/studies/guides/hinduism/beginner'
      },
      {
        level: 'Intermediate',
        topics: ['Vedanta philosophy', 'Yoga and meditation', 'Hindu ethics', 'Sacred texts'],
        duration: '6 months',
        link: '/studies/guides/hinduism/intermediate'
      },
      {
        level: 'Advanced',
        topics: ['Advanced Vedanta', 'Tantra and yoga', 'Hindu philosophy', 'Contemporary Hinduism'],
        duration: '12 months',
        link: '/studies/guides/hinduism/advanced'
      }
    ]
  }
]

const studyResources = [
  {
    category: 'Textbooks and References',
    resources: [
      { name: 'World Religions: The Great Faiths Explored', author: 'John Bowker', description: 'Comprehensive overview of world religions' },
      { name: 'The World\'s Religions', author: 'Huston Smith', description: 'Classic introduction to religious traditions' },
      { name: 'Religions of the World', author: 'Lewis M. Hopfe', description: 'Academic textbook on world religions' },
      { name: 'The Sacred Texts of the World', author: 'Various', description: 'Collection of primary religious texts' }
    ]
  },
  {
    category: 'Online Courses',
    resources: [
      { name: 'Coursera World Religions', url: 'https://www.coursera.org/', description: 'University-level religious studies courses' },
      { name: 'edX Religious Studies', url: 'https://www.edx.org/', description: 'Free online religious education courses' },
      { name: 'Khan Academy Religion', url: 'https://www.khanacademy.org/', description: 'Free religious studies lessons' },
      { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', description: 'Free religious studies course materials' }
    ]
  },
  {
    category: 'Academic Journals',
    resources: [
      { name: 'Journal of Religious Studies', url: 'https://www.cambridge.org/', description: 'Academic religious studies research' },
      { name: 'Religious Studies Review', url: 'https://onlinelibrary.wiley.com/', description: 'Reviews of religious studies literature' },
      { name: 'Journal of World Religions', url: 'https://www.jstor.org/', description: 'Comparative religious studies' },
      { name: 'Religious Education', url: 'https://www.tandfonline.com/', description: 'Religious education research and practice' }
    ]
  }
]

const studyMethods = [
  {
    title: 'Reading and Reflection',
    description: 'Deep reading of sacred texts and commentaries',
    steps: [
      'Choose a text or topic to study',
      'Read slowly and carefully',
      'Take notes and highlight key passages',
      'Reflect on the meaning and implications',
      'Discuss with others or write reflections'
    ],
    benefits: ['Deepens understanding', 'Improves critical thinking', 'Develops spiritual insight', 'Builds knowledge base']
  },
  {
    title: 'Comparative Study',
    description: 'Comparing different religious traditions and perspectives',
    steps: [
      'Identify a common theme or concept',
      'Research how different religions approach it',
      'Compare similarities and differences',
      'Analyze underlying principles',
      'Draw conclusions about human spirituality'
    ],
    benefits: ['Broadens perspective', 'Reduces bias', 'Fosters understanding', 'Enhances appreciation']
  },
  {
    title: 'Practical Application',
    description: 'Applying religious teachings to daily life',
    steps: [
      'Study religious practices and rituals',
      'Learn the underlying principles',
      'Practice in daily life',
      'Reflect on experiences',
      'Adjust and improve practice'
    ],
    benefits: ['Integrates learning', 'Develops character', 'Enhances spiritual growth', 'Provides practical wisdom']
  },
  {
    title: 'Community Learning',
    description: 'Learning with and from others in a community',
    steps: [
      'Join study groups or classes',
      'Participate in discussions',
      'Share insights and experiences',
      'Learn from diverse perspectives',
      'Build supportive relationships'
    ],
    benefits: ['Provides accountability', 'Offers diverse perspectives', 'Builds community', 'Enhances motivation']
  }
]

const assessmentTools = [
  {
    title: 'Self-Assessment Quizzes',
    description: 'Test your knowledge and understanding',
    tools: [
      'Multiple choice quizzes',
      'Essay questions',
      'Reflection prompts',
      'Knowledge checks',
      'Progress tracking'
    ]
  },
  {
    title: 'Study Journals',
    description: 'Document your learning journey',
    tools: [
      'Daily reflection entries',
      'Key insights recording',
      'Question tracking',
      'Goal setting and review',
      'Progress documentation'
    ]
  },
  {
    title: 'Discussion Forums',
    description: 'Engage with other learners',
    tools: [
      'Online discussion boards',
      'Study group meetings',
      'Peer feedback',
      'Expert Q&A sessions',
      'Community challenges'
    ]
  }
]

export default function StudyGuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Study Guides
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Embark on a structured journey of religious education with our comprehensive study guides. 
          From beginner-friendly introductions to advanced theological studies, find the perfect 
          learning path for your spiritual and academic growth.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Beginner</Badge>
          <Badge variant="secondary" className="text-sm">Intermediate</Badge>
          <Badge variant="secondary" className="text-sm">Advanced</Badge>
          <Badge variant="secondary" className="text-sm">Structured Learning</Badge>
          <Badge variant="secondary" className="text-sm">Religious Education</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="paths" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="paths">Study Paths</TabsTrigger>
          <TabsTrigger value="religions">Religions</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="paths" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {studyPaths.map((path) => {
              const Icon = path.icon
              return (
                <Card key={path.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {path.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      <Badge variant="outline">{path.duration}</Badge>
                      <Badge variant="secondary">{path.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Topics Covered:</h4>
                      <ul className="space-y-1 text-sm">
                        {path.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Resources Included:</h4>
                      <ul className="space-y-1 text-sm">
                        {path.resources.map((resource) => (
                          <li key={resource} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={path.link}>
                        Start {path.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="religions" className="space-y-8">
          {religiousStudies.map((religion) => (
            <Card key={religion.religion}>
              <CardHeader>
                <CardTitle className="text-2xl">{religion.religion}</CardTitle>
                <CardDescription className="text-base">
                  {religion.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {religion.levels.map((level) => (
                    <div key={level.level} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{level.level}</h4>
                        <Badge variant="outline">{level.duration}</Badge>
                      </div>
                      <ul className="space-y-1 text-sm mb-4">
                        {level.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild size="sm" className="w-full">
                        <Link href={level.link}>
                          Start {level.level} Study
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="methods" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {studyMethods.map((method) => (
              <Card key={method.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ol className="space-y-1 text-sm">
                      {method.steps.map((step, index) => (
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

        <TabsContent value="assessment" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {assessmentTools.map((tool) => (
              <Card key={tool.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.tools.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                      <h4 className="font-semibold mb-1">{resource.name}</h4>
                      {resource.author && <p className="text-sm text-muted-foreground mb-2">by {resource.author}</p>}
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      {resource.url ? (
                        <Button asChild size="sm" variant="outline">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Visit Resource
                          </a>
                        </Button>
                      ) : (
                        <Badge variant="secondary" className="text-xs">Available in libraries</Badge>
                      )}
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
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Religious Studies Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose your study path, explore different religious traditions, and develop 
              a deeper understanding of world religions through structured learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/theology">Theology Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/history">History Studies</Link>
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