import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Calendar, MapPin, User } from "lucide-react"
import Link from "next/link"

interface BuddhistHistoryPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Buddhist History | Studies",
  description: "Explore the rich history of Buddhism from its origins in ancient India to its spread across Asia and the modern world.",
  keywords: "Buddhist history, Buddha's life, Buddhist councils, spread of Buddhism, Buddhist schools, historical development"
}

export default function BuddhistHistoryPage({ params }: BuddhistHistoryPageProps) {
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
        <Badge variant="secondary" className="mb-4">Buddhist History</Badge>
        <h1 className="text-4xl font-bold mb-4">Buddhist History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Journey through the rich historical development of Buddhism, from the life of the Buddha 
          to its spread across Asia and adaptation to diverse cultures.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <User className="mr-1 h-3 w-3" />
            Buddha's Life
          </Badge>
          <Badge variant="outline">
            <Calendar className="mr-1 h-3 w-3" />
            Historical Periods
          </Badge>
          <Badge variant="outline">
            <MapPin className="mr-1 h-3 w-3" />
            Geographic Spread
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Life of the Buddha */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Life of the Buddha
              </CardTitle>
              <CardDescription>
                The historical Buddha Siddhartha Gautama and his path to enlightenment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="early-life" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="early-life">Early Life</TabsTrigger>
                  <TabsTrigger value="renunciation">Renunciation</TabsTrigger>
                  <TabsTrigger value="enlightenment">Enlightenment</TabsTrigger>
                  <TabsTrigger value="teaching">Teaching</TabsTrigger>
                </TabsList>

                <TabsContent value="early-life" className="space-y-4">
                  <p className="text-muted-foreground">
                    Siddhartha Gautama was born around 563 BCE in Lumbini, present-day Nepal, 
                    into the Shakya clan. His father was King Suddhodana and his mother was Queen Maya.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Birth and Prophecy</h4>
                      <p className="text-sm text-muted-foreground">
                        Born under a sal tree in Lumbini, the sage Asita predicted that the child would 
                        either become a great king or a great spiritual teacher. His mother passed away 
                        seven days after his birth.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Royal Upbringing</h4>
                      <p className="text-sm text-muted-foreground">
                        Raised in luxury in Kapilavastu, Siddhartha was shielded from the suffering 
                        of the world. He excelled in martial arts, philosophy, and the arts.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Marriage and Family</h4>
                      <p className="text-sm text-muted-foreground">
                        Married Princess Yasodhara at age 16, and they had a son named Rahula. 
                        Despite his privileged life, Siddhartha felt a deep spiritual calling.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="renunciation" className="space-y-4">
                  <p className="text-muted-foreground">
                    At age 29, Siddhartha encountered the "Four Sights" that led to his renunciation 
                    of worldly life and his quest for spiritual truth.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Four Sights</h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">1. Old Age</h5>
                          <p className="text-sm text-muted-foreground">
                            Seeing an elderly person, Siddhartha realized the inevitability of aging.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">2. Sickness</h5>
                          <p className="text-sm text-muted-foreground">
                            Encountering a sick person, he understood the reality of disease and suffering.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">3. Death</h5>
                          <p className="text-sm text-muted-foreground">
                            Witnessing a funeral procession, he confronted the certainty of death.
                          </p>
                        </div>
                        <div className="p-2 bg-white dark:bg-gray-800 rounded">
                          <h5 className="font-medium">4. Ascetic</h5>
                          <p className="text-sm text-muted-foreground">
                            Meeting a wandering ascetic, he saw a path to spiritual liberation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Great Renunciation</h4>
                      <p className="text-sm text-muted-foreground">
                        Leaving his palace, family, and royal life behind, Siddhartha became a wandering 
                        ascetic, seeking teachers and practicing extreme austerities for six years.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="enlightenment" className="space-y-4">
                  <p className="text-muted-foreground">
                    After years of spiritual practice, Siddhartha attained enlightenment under the 
                    Bodhi tree, becoming the Buddha - the Awakened One.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Middle Way</h4>
                      <p className="text-sm text-muted-foreground">
                        Realizing that neither extreme asceticism nor indulgence led to liberation, 
                        Siddhartha discovered the Middle Way - a balanced approach to spiritual practice.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Bodhi Tree</h4>
                      <p className="text-sm text-muted-foreground">
                        Sitting under a pipal tree in Bodh Gaya, Siddhartha vowed not to rise until 
                        he attained enlightenment. After 49 days of meditation, he achieved complete awakening.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Three Watches</h4>
                      <p className="text-sm text-muted-foreground">
                        During the night of enlightenment, the Buddha gained three insights: 
                        knowledge of past lives, understanding of karma and rebirth, and the Four Noble Truths.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="teaching" className="space-y-4">
                  <p className="text-muted-foreground">
                    After enlightenment, the Buddha spent 45 years teaching the Dharma, establishing 
                    the Sangha, and spreading his message of liberation.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">First Teaching</h4>
                      <p className="text-sm text-muted-foreground">
                        At Sarnath, the Buddha delivered his first sermon to five former companions, 
                        teaching the Four Noble Truths and the Noble Eightfold Path.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Sangha</h4>
                      <p className="text-sm text-muted-foreground">
                        Established the monastic community (Sangha) for both men and women, 
                        creating a spiritual community that continues to this day.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Final Years</h4>
                      <p className="text-sm text-muted-foreground">
                        At age 80, the Buddha passed into final Nirvana (Parinirvana) at Kushinagar, 
                        having established a complete path to liberation for future generations.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Historical Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                Historical Development
              </CardTitle>
              <CardDescription>
                Major periods and events in Buddhist history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Early Buddhism (5th-3rd century BCE)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">First Buddhist Council</h4>
                      <p className="text-sm text-muted-foreground">
                        Held shortly after the Buddha's death to preserve his teachings. 
                        The Pali Canon was first compiled during this period.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">King Ashoka</h4>
                      <p className="text-sm text-muted-foreground">
                        The Mauryan emperor converted to Buddhism and became its greatest patron, 
                        spreading the Dharma throughout his empire and beyond.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Missionary Activity</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhist missionaries were sent to various regions, including Sri Lanka, 
                        Central Asia, and Southeast Asia.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Development of Schools (3rd century BCE - 1st century CE)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Theravada Formation</h4>
                      <p className="text-sm text-muted-foreground">
                        The "School of the Elders" emerged, emphasizing the original teachings 
                        and the path of individual liberation.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Mahayana Emergence</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Great Vehicle" movement developed, emphasizing the bodhisattva path 
                        and universal compassion.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Buddhist Councils</h4>
                      <p className="text-sm text-muted-foreground">
                        Additional councils were held to address doctrinal disputes and 
                        preserve the teachings.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Spread Across Asia (1st-10th century CE)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Central Asia</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism spread along the Silk Road, reaching China, Korea, and Japan. 
                        The translation of texts into Chinese began.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Southeast Asia</h4>
                      <p className="text-sm text-muted-foreground">
                        Theravada Buddhism became established in Sri Lanka, Myanmar, Thailand, 
                        Laos, and Cambodia.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Tibet</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism was introduced to Tibet, leading to the development of 
                        Vajrayana and the Tibetan Buddhist tradition.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Decline in India</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism gradually declined in India due to various factors, including 
                        the rise of Hinduism and Muslim invasions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modern Period */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-600" />
                Modern Period
              </CardTitle>
              <CardDescription>
                Buddhism in the modern world and its global spread
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">19th-20th Century Revival</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Colonial Period</h4>
                      <p className="text-sm text-muted-foreground">
                        Western scholars and colonial officials rediscovered Buddhism, 
                        leading to academic study and renewed interest in Buddhist texts.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Buddhist Revival</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhist leaders like Anagarika Dharmapala worked to revive Buddhism 
                        in Sri Lanka and spread it globally.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Western Interest</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism began to attract Western practitioners, leading to the 
                        establishment of Buddhist centers in Europe and America.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contemporary Buddhism</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Global Spread</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism has spread to all continents, with millions of practitioners 
                        worldwide and diverse expressions in different cultures.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Engaged Buddhism</h4>
                      <p className="text-sm text-muted-foreground">
                        Modern movements emphasize social action, environmentalism, and 
                        applying Buddhist principles to contemporary issues.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Interfaith Dialogue</h4>
                      <p className="text-sm text-muted-foreground">
                        Buddhism participates in interfaith dialogue and contributes to 
                        global discussions on peace, ethics, and spirituality.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Digital Age</h4>
                      <p className="text-sm text-muted-foreground">
                        Technology has made Buddhist texts and teachings more accessible, 
                        with online resources, apps, and virtual communities.
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
          {/* Free Historical Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Historical Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/buddhist/historical-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Historical Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/buddhist/biographies`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Buddha Biographies
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.accesstoinsight.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access to Insight
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.buddhanet.net" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    BuddhaNet
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
                  <Link href={`/${params.locale}/studies/buddhist/meditation`}>
                    <Search className="mr-2 h-4 w-4" />
                    Meditation Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/buddhist/beginner`}>
                    <History className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Historical Figures */}
          <Card>
            <CardHeader>
              <CardTitle>Key Historical Figures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">King Ashoka</span>
                  <p className="text-sm">Mauryan emperor, greatest patron of Buddhism</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Nagarjuna</span>
                  <p className="text-sm">Founder of Madhyamaka school</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Bodhidharma</span>
                  <p className="text-sm">Brought Chan/Zen to China</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Padmasambhava</span>
                  <p className="text-sm">Introduced Buddhism to Tibet</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Historical Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore the philosophical teachings, meditation practices, and sacred texts 
          that have shaped Buddhist history and continue to inspire millions today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Study Philosophy
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