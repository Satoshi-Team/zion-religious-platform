import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, ArrowLeft, Play, Volume2 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Christian Meditation - Contemplative Prayer & Spiritual Practices | ZION.FM',
  description: 'Explore Christian meditation practices including Lectio Divina, Centering Prayer, Jesus Prayer, and contemplative prayer. Learn from verified sources and historical traditions.',
  keywords: 'christian meditation, lectio divina, centering prayer, jesus prayer, contemplative prayer, christian spirituality, monastic prayer',
  openGraph: {
    title: 'Christian Meditation - Contemplative Prayer & Spiritual Practices',
    description: 'Discover authentic Christian meditation practices and contemplative prayer traditions.',
    type: 'website',
  },
}

const christianMeditationData = {
  title: "Christian Meditation",
  description: "Contemplative prayer and spiritual practices from the Christian tradition",
  overview: `
    Christian meditation has a rich history spanning over two millennia, from the desert fathers and mothers 
    to modern contemplative movements. Unlike some Eastern traditions that seek to empty the mind, 
    Christian meditation focuses on filling the mind and heart with God's presence through prayer, 
    scripture, and contemplation.
    
    The goal of Christian meditation is to deepen our relationship with God, grow in spiritual awareness, 
    and experience the transformative power of divine love. These practices help us to "be still and know 
    that I am God" (Psalm 46:10) while remaining grounded in Christian faith and theology.
  `,
  
  practices: [
    {
      name: "Lectio Divina",
      description: "Sacred reading of scripture with meditation and prayer",
      duration: "20-30 minutes",
      difficulty: "Beginner",
      history: "Developed by Benedictine monks in the 6th century",
      steps: [
        "Lectio (Reading): Read a scripture passage slowly and attentively",
        "Meditatio (Meditation): Reflect on the meaning and significance",
        "Oratio (Prayer): Respond to God in prayer",
        "Contemplatio (Contemplation): Rest in God's presence"
      ],
      scripture: "Psalm 119:15 - 'I meditate on your precepts and consider your ways.'",
      quote: "In daily life we must see that it is not happiness that makes us grateful, but gratefulness that makes us happy.",
      author: "Brother David Steindl-Rast",
      link: "/meditation/christian/lectio-divina"
    },
    {
      name: "Centering Prayer",
      description: "Silent prayer focusing on a sacred word or phrase",
      duration: "20 minutes",
      difficulty: "Intermediate",
      history: "Rooted in the Cloud of Unknowing and developed by Thomas Keating",
      steps: [
        "Choose a sacred word as a symbol of your intention",
        "Sit comfortably with eyes closed",
        "Silently introduce the sacred word",
        "When thoughts arise, gently return to the word",
        "End with the Lord's Prayer"
      ],
      scripture: "Matthew 6:6 - 'But when you pray, go into your room, close the door and pray to your Father, who is unseen.'",
      quote: "The goal of Centering Prayer is to consent to God's presence and action within.",
      author: "Thomas Keating",
      link: "/meditation/christian/centering"
    },
    {
      name: "Jesus Prayer",
      description: "Repetitive prayer focusing on the name of Jesus",
      duration: "10-20 minutes",
      difficulty: "Beginner",
      history: "Ancient practice from the Eastern Orthodox tradition",
      steps: [
        "Find a quiet place and comfortable position",
        "Breathe naturally and rhythmically",
        "With each breath, silently pray: 'Lord Jesus Christ, have mercy on me'",
        "Focus on the meaning and presence of Jesus",
        "Continue for the desired duration"
      ],
      scripture: "1 Thessalonians 5:17 - 'Pray continually.'",
      quote: "The Jesus Prayer is a prayer of the heart that leads to the union of mind and heart in God.",
      author: "Theophan the Recluse",
      link: "/meditation/christian/jesus-prayer"
    },
    {
      name: "Contemplative Prayer",
      description: "Deep spiritual reflection and divine union",
      duration: "30-60 minutes",
      difficulty: "Advanced",
      history: "Practiced by mystics throughout Christian history",
      steps: [
        "Begin with Lectio Divina or Centering Prayer",
        "Allow the mind to rest in God's presence",
        "Let go of thoughts and images",
        "Rest in the awareness of God's love",
        "End with gratitude and thanksgiving"
      ],
      scripture: "Psalm 46:10 - 'Be still, and know that I am God.'",
      quote: "Contemplative prayer is the prayer of the heart, not the head.",
      author: "Teresa of Avila",
      link: "/meditation/christian/contemplative"
    }
  ],
  
  historicalFigures: [
    {
      name: "Desert Fathers and Mothers",
      period: "3rd-5th centuries",
      contribution: "Early Christian hermits who developed contemplative practices",
      quote: "The cell teaches us everything.",
      practices: ["Silent prayer", "Scripture meditation", "Ascetic practices"]
    },
    {
      name: "Benedict of Nursia",
      period: "480-547",
      contribution: "Founded Benedictine monasticism and Lectio Divina",
      quote: "Listen with the ear of your heart.",
      practices: ["Lectio Divina", "Monastic prayer", "Ora et labora"]
    },
    {
      name: "Teresa of Avila",
      period: "1515-1582",
      contribution: "Carmelite mystic and author of The Interior Castle",
      quote: "Prayer is nothing else than being on terms of friendship with God.",
      practices: ["Mental prayer", "Contemplation", "Spiritual direction"]
    },
    {
      name: "John of the Cross",
      period: "1542-1591",
      contribution: "Carmelite mystic and poet",
      quote: "In the evening of life, we will be judged on love alone.",
      practices: ["Dark night of the soul", "Contemplative prayer", "Spiritual poetry"]
    }
  ],
  
  benefits: [
    {
      category: "Spiritual Growth",
      benefits: [
        "Deepened relationship with God",
        "Increased spiritual awareness",
        "Greater sense of divine presence",
        "Enhanced prayer life"
      ]
    },
    {
      category: "Mental Health",
      benefits: [
        "Reduced stress and anxiety",
        "Improved focus and concentration",
        "Better emotional regulation",
        "Increased inner peace"
      ]
    },
    {
      category: "Physical Health",
      benefits: [
        "Lower blood pressure",
        "Improved sleep quality",
        "Reduced muscle tension",
        "Enhanced immune function"
      ]
    }
  ],
  
  resources: [
    {
      title: "The Cloud of Unknowing",
      author: "Anonymous (14th century)",
      description: "Classic text on contemplative prayer",
      link: "/studies/theology/historical/medieval"
    },
    {
      title: "Open Mind, Open Heart",
      author: "Thomas Keating",
      description: "Guide to Centering Prayer",
      link: "/teachings/meditation/centering-prayer"
    },
    {
      title: "The Way of the Heart",
      author: "Henri Nouwen",
      description: "Desert spirituality and prayer",
      link: "/teachings/meditation/desert-spirituality"
    }
  ]
}

export default function ChristianMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/meditation"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Meditation
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{christianMeditationData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {christianMeditationData.description}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/meditation/christian/guided">
                  <Play className="mr-2 h-5 w-5" />
                  Guided Practice
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/meditation/christian/history">
                  <Book className="mr-2 h-5 w-5" />
                  Learn History
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is Christian Meditation?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {christianMeditationData.overview.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-600" />
                      Relationship with God
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Christian meditation focuses on deepening our relationship with God rather than 
                      achieving altered states of consciousness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Scripture-Based
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Many practices are rooted in scripture and biblical prayer traditions, 
                      providing a solid theological foundation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Intentional Focus
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practices emphasize intentional focus on God's presence rather than 
                      emptying the mind completely.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-purple-600" />
                      Community Context
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      While personal, these practices are meant to be shared within 
                      the Christian community and church tradition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {christianMeditationData.practices.map((practice, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{practice.difficulty}</Badge>
                      <Badge variant="outline">{practice.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{practice.name}</CardTitle>
                    <CardDescription className="mb-3">{practice.description}</CardDescription>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mb-3">
                      <p className="text-sm font-medium mb-1">Scripture:</p>
                      <p className="text-sm italic">{practice.scripture}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Steps:</h4>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        {practice.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1 font-medium">{stepIndex + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="border-l-4 border-blue-200 pl-3">
                      <p className="text-sm italic text-muted-foreground mb-1">"{practice.quote}"</p>
                      <p className="text-xs text-muted-foreground">— {practice.author}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={practice.link}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Learn More
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`${practice.link}/guided`}>
                          <Play className="mr-2 h-4 w-4" />
                          Guided
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historical Development</CardTitle>
                <CardDescription>Key figures and movements in Christian meditation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {christianMeditationData.historicalFigures.map((figure, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{figure.name}</h4>
                        <Badge variant="outline">{figure.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{figure.contribution}</p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mb-3">
                        <p className="text-sm italic">"{figure.quote}"</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-1">Practices:</h5>
                        <div className="flex flex-wrap gap-1">
                          {figure.practices.map((practice, pIndex) => (
                            <Badge key={pIndex} variant="secondary" className="text-xs">
                              {practice}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {christianMeditationData.benefits.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Study Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
            <CardDescription>Books and materials for deeper study</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {christianMeditationData.resources.map((resource, index) => (
                <Link key={index} href={resource.link}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">by {resource.author}</p>
                      <p className="text-sm">{resource.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Explore Other Traditions</CardTitle>
            <CardDescription>Learn about meditation practices from other faiths</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/meditation/buddhist">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Target className="h-6 w-6 mb-2 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Buddhist Meditation</h4>
                    <p className="text-sm text-muted-foreground">Mindfulness, Vipassana, Zen practices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/meditation/hindu">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Zap className="h-6 w-6 mb-2 text-orange-600" />
                    <h4 className="font-semibold mb-2">Hindu Meditation</h4>
                    <p className="text-sm text-muted-foreground">Mantra, Yoga, Vedantic practices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/meditation/islamic">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Globe className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Islamic Meditation</h4>
                    <p className="text-sm text-muted-foreground">Dhikr, Sufi practices, Muraqaba</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/meditation/modern">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Lightbulb className="h-6 w-6 mb-2 text-purple-600" />
                    <h4 className="font-semibold mb-2">Modern Meditation</h4>
                    <p className="text-sm text-muted-foreground">Mindfulness, secular practices</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 