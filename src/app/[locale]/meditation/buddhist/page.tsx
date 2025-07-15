import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, ArrowLeft, Play, Volume2 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhist Meditation - Mindfulness, Vipassana & Zen Practices | ZION.FM',
  description: 'Explore Buddhist meditation practices including mindfulness, Vipassana, Zen, and loving-kindness meditation. Learn from verified sources and authentic Buddhist traditions.',
  keywords: 'buddhist meditation, mindfulness, vipassana, zen meditation, loving-kindness, metta, samatha, insight meditation, buddhist practices',
  openGraph: {
    title: 'Buddhist Meditation - Mindfulness, Vipassana & Zen Practices',
    description: 'Discover authentic Buddhist meditation practices and mindfulness techniques.',
    type: 'website',
  },
}

const buddhistMeditationData = {
  title: "Buddhist Meditation",
  description: "Mindfulness, Vipassana, Zen, and other Buddhist meditation practices",
  overview: `
    Buddhist meditation encompasses a wide range of practices developed over 2,500 years 
    to cultivate mindfulness, wisdom, and compassion. Rooted in the teachings of the Buddha, 
    these practices aim to understand the nature of reality and achieve liberation from suffering.
    
    Buddhist meditation can be broadly categorized into two main types: Samatha (calm abiding) 
    and Vipassana (insight meditation). Samatha practices develop concentration and tranquility, 
    while Vipassana practices develop insight into the true nature of phenomena.
  `,
  
  practices: [
    {
      name: "Mindfulness (Sati)",
      description: "Present-moment awareness and non-judgmental attention",
      duration: "20-45 minutes",
      difficulty: "Beginner",
      history: "Core practice taught by the Buddha in the Satipatthana Sutta",
      steps: [
        "Find a comfortable seated position",
        "Focus on the natural breath",
        "Observe thoughts without judgment",
        "Return attention to the breath when distracted",
        "Maintain awareness of present moment"
      ],
      scripture: "Satipatthana Sutta - 'The Four Foundations of Mindfulness'",
      quote: "You yourself must strive. The Buddhas only point the way.",
      author: "Dhammapada 276",
      link: "/meditation/buddhist/mindfulness"
    },
    {
      name: "Vipassana",
      description: "Insight meditation to see the true nature of reality",
      duration: "30-60 minutes",
      difficulty: "Intermediate",
      history: "Ancient practice rediscovered by the Buddha",
      steps: [
        "Begin with mindfulness of breath",
        "Observe bodily sensations",
        "Notice the arising and passing of phenomena",
        "Develop insight into impermanence",
        "Cultivate equanimity"
      ],
      scripture: "Mahasatipatthana Sutta - 'The Great Discourse on Mindfulness'",
      quote: "All conditioned things are impermanent. When one sees this with wisdom, one turns away from suffering.",
      author: "Dhammapada 277-279",
      link: "/meditation/buddhist/vipassana"
    },
    {
      name: "Zen Meditation (Zazen)",
      description: "Sitting meditation in the Zen tradition",
      duration: "20-40 minutes",
      difficulty: "Intermediate",
      history: "Developed in China and Japan, emphasizing direct experience",
      steps: [
        "Sit in lotus or half-lotus position",
        "Keep eyes half-open, gazing downward",
        "Focus on breath or counting",
        "Maintain upright posture",
        "Let thoughts come and go naturally"
      ],
      scripture: "Zen teachings emphasize direct experience over scripture",
      quote: "When you sit, just sit. When you walk, just walk.",
      author: "Zen Master Dogen",
      link: "/meditation/buddhist/zen"
    },
    {
      name: "Loving-Kindness (Metta)",
      description: "Cultivating unconditional love and compassion",
      duration: "15-30 minutes",
      difficulty: "Beginner",
      history: "Traditional practice from the Metta Sutta",
      steps: [
        "Begin with self-compassion",
        "Extend love to a benefactor",
        "Include a neutral person",
        "Include a difficult person",
        "Extend to all beings"
      ],
      scripture: "Metta Sutta - 'The Discourse on Loving-Kindness'",
      quote: "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.",
      author: "Metta Sutta",
      link: "/meditation/buddhist/loving-kindness"
    },
    {
      name: "Tonglen",
      description: "Tibetan compassion meditation practice",
      duration: "20-40 minutes",
      difficulty: "Advanced",
      history: "Tibetan Buddhist practice for developing compassion",
      steps: [
        "Visualize taking in suffering",
        "Transform it into compassion",
        "Send out healing and peace",
        "Practice with specific situations",
        "Extend to all beings"
      ],
      scripture: "Tibetan Buddhist tradition",
      quote: "In tonglen practice, we take in the pain and suffering of others and send out happiness and well-being.",
      author: "Pema Chödrön",
      link: "/meditation/buddhist/tonglen"
    },
    {
      name: "Walking Meditation",
      description: "Mindful walking as a meditation practice",
      duration: "15-30 minutes",
      difficulty: "Beginner",
      history: "Traditional practice in many Buddhist traditions",
      steps: [
        "Walk slowly and deliberately",
        "Focus on the sensation of walking",
        "Coordinate breath with steps",
        "Maintain awareness of surroundings",
        "Practice in a designated path"
      ],
      scripture: "Satipatthana Sutta includes walking meditation",
      quote: "Peace is every step. The shining red sun is my heart.",
      author: "Thich Nhat Hanh",
      link: "/meditation/buddhist/walking"
    }
  ],
  
  buddhistSchools: [
    {
      name: "Theravada",
      region: "Southeast Asia",
      focus: "Individual liberation and insight",
      practices: ["Vipassana", "Mindfulness", "Metta", "Walking meditation"],
      description: "The oldest form of Buddhism, emphasizing personal liberation through insight and ethical living."
    },
    {
      name: "Mahayana",
      region: "East Asia",
      focus: "Compassion and universal liberation",
      practices: ["Zen", "Pure Land", "Tonglen", "Bodhisattva practices"],
      description: "Emphasizes compassion and the bodhisattva ideal of helping all beings achieve enlightenment."
    },
    {
      name: "Vajrayana",
      region: "Tibet, Himalayas",
      focus: "Transformation and skillful means",
      practices: ["Tonglen", "Visualization", "Mantra", "Tantric practices"],
      description: "Uses skillful means and transformation practices to achieve enlightenment in one lifetime."
    }
  ],
  
  benefits: [
    {
      category: "Mental Benefits",
      benefits: [
        "Reduced stress and anxiety",
        "Improved concentration and focus",
        "Enhanced emotional regulation",
        "Greater self-awareness",
        "Increased mental clarity"
      ]
    },
    {
      category: "Spiritual Benefits",
      benefits: [
        "Deepened understanding of reality",
        "Cultivation of compassion",
        "Development of wisdom",
        "Freedom from suffering",
        "Connection to Buddhist teachings"
      ]
    },
    {
      category: "Physical Benefits",
      benefits: [
        "Lower blood pressure",
        "Improved sleep quality",
        "Reduced inflammation",
        "Enhanced immune function",
        "Better pain management"
      ]
    }
  ],
  
  resources: [
    {
      title: "Mindfulness in Plain English",
      author: "Bhante Henepola Gunaratana",
      description: "Classic guide to mindfulness meditation",
      link: "/studies/buddhist/mindfulness"
    },
    {
      title: "The Heart of Buddhist Meditation",
      author: "Nyanaponika Thera",
      description: "Comprehensive guide to Vipassana practice",
      link: "/studies/buddhist/vipassana"
    },
    {
      title: "Zen Mind, Beginner's Mind",
      author: "Shunryu Suzuki",
      description: "Introduction to Zen meditation",
      link: "/studies/buddhist/zen"
    }
  ]
}

export default function BuddhistMeditationPage() {
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
            <h1 className="text-4xl font-bold mb-4">{buddhistMeditationData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {buddhistMeditationData.description}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/meditation/buddhist/guided">
                  <Play className="mr-2 h-5 w-5" />
                  Guided Practice
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/studies/buddhist">
                  <Book className="mr-2 h-5 w-5" />
                  Buddhist Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is Buddhist Meditation?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {buddhistMeditationData.overview.split('\n').map((paragraph, index) => (
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
                      <Target className="h-5 w-5 text-yellow-600" />
                      Samatha (Calm Abiding)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practices that develop concentration, tranquility, and mental stability. 
                      These include mindfulness of breath and other concentration techniques.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-600" />
                      Vipassana (Insight)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practices that develop insight into the true nature of reality, 
                      including impermanence, suffering, and non-self.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-600" />
                      Metta (Loving-Kindness)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practices that cultivate compassion, loving-kindness, and 
                      positive emotions toward all beings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-green-600" />
                      Ethical Foundation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Meditation is supported by ethical living, including 
                      right speech, right action, and right livelihood.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buddhistMeditationData.practices.map((practice, index) => (
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
                    
                    <div className="border-l-4 border-yellow-200 pl-3">
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

          <TabsContent value="schools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {buddhistMeditationData.buddhistSchools.map((school, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{school.name}</CardTitle>
                    <CardDescription>{school.region}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Focus:</h4>
                        <p className="text-sm text-muted-foreground">{school.focus}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Practices:</h4>
                        <div className="flex flex-wrap gap-1">
                          {school.practices.map((practice, pIndex) => (
                            <Badge key={pIndex} variant="secondary" className="text-xs">
                              {practice}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{school.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {buddhistMeditationData.benefits.map((category, index) => (
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
              {buddhistMeditationData.resources.map((resource, index) => (
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
              <Link href="/meditation/christian">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Heart className="h-6 w-6 mb-2 text-red-600" />
                    <h4 className="font-semibold mb-2">Christian Meditation</h4>
                    <p className="text-sm text-muted-foreground">Contemplative prayer and spiritual practices</p>
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