import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Timer } from "lucide-react"
import Link from "next/link"

interface BuddhistMeditationPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Buddhist Meditation | Studies",
  description: "Learn about Buddhist meditation practices including mindfulness, concentration, and insight meditation techniques.",
  keywords: "Buddhist meditation, mindfulness, vipassana, samatha, insight meditation, concentration meditation, Buddhist practices"
}

export default function BuddhistMeditationPage({ params }: BuddhistMeditationPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts/buddhist`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Buddhist Scriptures
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Buddhist Meditation</Badge>
        <h1 className="text-4xl font-bold mb-4">Buddhist Meditation Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore the diverse meditation techniques of Buddhism, from mindfulness and concentration 
          to insight meditation and loving-kindness practices.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Mindfulness
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Concentration
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Insight
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Meditation Types */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Core Meditation Types
              </CardTitle>
              <CardDescription>
                The fundamental meditation practices that form the foundation of Buddhist spiritual development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mindfulness" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
                  <TabsTrigger value="concentration">Concentration</TabsTrigger>
                  <TabsTrigger value="insight">Insight</TabsTrigger>
                </TabsList>

                <TabsContent value="mindfulness" className="space-y-4">
                  <p className="text-muted-foreground">
                    Mindfulness (Sati) is the practice of paying attention to the present moment with 
                    non-judgmental awareness. It is the foundation of all Buddhist meditation practices.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Four Foundations of Mindfulness</h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">1. Mindfulness of Body (Kayanupassana)</h5>
                          <p className="text-sm text-muted-foreground">
                            Observing the body, breath, and physical sensations with awareness.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">2. Mindfulness of Feelings (Vedananupassana)</h5>
                          <p className="text-sm text-muted-foreground">
                            Observing pleasant, unpleasant, and neutral feelings as they arise.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">3. Mindfulness of Mind (Cittanupassana)</h5>
                          <p className="text-sm text-muted-foreground">
                            Observing the states of mind: greedy, angry, concentrated, or distracted.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">4. Mindfulness of Mental Objects (Dhammanupassana)</h5>
                          <p className="text-sm text-muted-foreground">
                            Observing thoughts, emotions, and mental phenomena as they arise and pass.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Breath Awareness</h4>
                      <p className="text-sm text-muted-foreground">
                        Focusing attention on the natural breath, observing its rhythm and quality 
                        without trying to control it. This is often the first meditation practice taught.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="concentration" className="space-y-4">
                  <p className="text-muted-foreground">
                    Concentration meditation (Samatha) develops focused attention and mental stability, 
                    leading to deep states of absorption and tranquility.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kasina Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Focusing on visual objects like colored discs, fire, or earth to develop 
                        concentration and enter meditative absorptions (jhanas).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Loving-Kindness (Metta)</h4>
                      <p className="text-sm text-muted-foreground">
                        Cultivating unconditional love and goodwill toward oneself and others, 
                        starting with oneself and gradually extending to all beings.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Compassion (Karuna)</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing empathy and the wish to relieve suffering in others, 
                        leading to compassionate action and mental purification.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mantra Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Repeating sacred syllables or phrases to focus the mind and connect 
                        with spiritual qualities. Common mantras include "Om Mani Padme Hum."
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="insight" className="space-y-4">
                  <p className="text-muted-foreground">
                    Insight meditation (Vipassana) develops wisdom by directly observing the nature 
                    of reality, leading to the understanding of impermanence, suffering, and non-self.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Body Scanning</h4>
                      <p className="text-sm text-muted-foreground">
                        Systematically observing sensations throughout the body, developing 
                        awareness of physical experience and its changing nature.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Walking Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Practicing mindfulness while walking, observing the sensations of movement 
                        and the contact of feet with the ground.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Noting Practice</h4>
                      <p className="text-sm text-muted-foreground">
                        Mentally noting experiences as they arise: "thinking," "feeling," "hearing," 
                        etc., to develop clear awareness of mental processes.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Contemplation of Impermanence</h4>
                      <p className="text-sm text-muted-foreground">
                        Directly observing how all phenomena arise and pass away, developing 
                        insight into the transient nature of existence.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Meditation Techniques by Tradition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Meditation Techniques by Tradition
              </CardTitle>
              <CardDescription>
                Specific meditation practices from different Buddhist traditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Theravada Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vipassana</h4>
                      <p className="text-sm text-muted-foreground">
                        Systematic insight meditation focusing on the three characteristics: 
                        impermanence, suffering, and non-self.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Anapanasati</h4>
                      <p className="text-sm text-muted-foreground">
                        Mindfulness of breathing, developing concentration and insight through 
                        awareness of the breath.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Satipatthana</h4>
                      <p className="text-sm text-muted-foreground">
                        The four foundations of mindfulness as a complete path to liberation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Brahmaviharas</h4>
                      <p className="text-sm text-muted-foreground">
                        The four divine abodes: loving-kindness, compassion, sympathetic joy, and equanimity.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Mahayana Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Tonglen</h4>
                      <p className="text-sm text-muted-foreground">
                        Taking and sending meditation: breathing in suffering and breathing out compassion.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Zen Meditation (Zazen)</h4>
                      <p className="text-sm text-muted-foreground">
                        Sitting meditation focusing on posture and breath, allowing thoughts to arise and pass.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Pure Land Practice</h4>
                      <p className="text-sm text-muted-foreground">
                        Reciting the name of Amitabha Buddha to develop faith and devotion.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Bodhicitta Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Cultivating the mind of enlightenment and the aspiration to benefit all beings.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Vajrayana Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Deity Yoga</h4>
                      <p className="text-sm text-muted-foreground">
                        Visualizing oneself as an enlightened being to realize Buddha nature.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mantra Recitation</h4>
                      <p className="text-sm text-muted-foreground">
                        Repeating sacred syllables to purify mind and connect with enlightened qualities.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mandala Visualization</h4>
                      <p className="text-sm text-muted-foreground">
                        Creating and dissolving sacred geometric patterns in meditation.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dzogchen</h4>
                      <p className="text-sm text-muted-foreground">
                        Direct recognition of the natural state of mind, beyond conceptual thinking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practical Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-orange-600" />
                Practical Guidelines
              </CardTitle>
              <CardDescription>
                Essential tips and instructions for establishing a meditation practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Getting Started</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Posture</h4>
                      <p className="text-sm text-muted-foreground">
                        Sit comfortably with a straight back, either cross-legged on a cushion or in a chair. 
                        Keep your head balanced and your hands resting gently in your lap.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Duration</h4>
                      <p className="text-sm text-muted-foreground">
                        Start with 10-15 minutes daily and gradually increase to 30-45 minutes. 
                        Consistency is more important than duration.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Environment</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose a quiet, clean space with minimal distractions. 
                        You can use a meditation cushion, bench, or chair.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Common Challenges</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Wandering Mind</h4>
                      <p className="text-sm text-muted-foreground">
                        When your mind wanders, gently bring it back to your meditation object 
                        without judgment. This is normal and part of the practice.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Physical Discomfort</h4>
                      <p className="text-sm text-muted-foreground">
                        Adjust your posture if needed, but try to maintain stillness. 
                        Observe discomfort with equanimity when possible.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Expectations</h4>
                      <p className="text-sm text-muted-foreground">
                        Let go of expectations about what meditation should be like. 
                        Each session is unique, and progress is gradual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Free Meditation Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Meditation Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/buddhist/meditation-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Meditation Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/buddhist/guided-meditations`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Guided Meditations
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.dhammatalks.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Dhamma Talks
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.accesstoinsight.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access to Insight
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Study Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/buddhist/philosophy`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Buddhist Philosophy
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/buddhist/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Buddhist History
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/buddhist/beginner`}>
                    <Search className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Meditation Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Meditation Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Mental Clarity</span>
                  <p className="text-sm">Improved focus and concentration</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Emotional Balance</span>
                  <p className="text-sm">Greater equanimity and peace</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Insight</span>
                  <p className="text-sm">Direct understanding of reality</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Compassion</span>
                  <p className="text-sm">Increased empathy and kindness</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Meditation Practice</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start with simple mindfulness practices and gradually develop your meditation skills. 
          Remember that consistency and patience are key to progress.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist/beginner`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Start Practicing
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/buddhist`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Scriptures
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 