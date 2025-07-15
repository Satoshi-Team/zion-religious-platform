import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Timer } from "lucide-react"
import Link from "next/link"

interface SikhPracticesPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Sikh Practices | Studies",
  description: "Learn about Sikh spiritual practices including meditation, prayer, service, and various paths to spiritual realization.",
  keywords: "Sikh practices, Nam Simran, meditation, prayer, seva, Sikh rituals, spiritual practices, Gurdwara"
}

export default function SikhPracticesPage({ params }: SikhPracticesPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts/sikh`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sikh Scriptures
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Sikh Practices</Badge>
        <h1 className="text-4xl font-bold mb-4">Sikh Spiritual Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore the spiritual practices of Sikhism, from meditation and prayer to 
          selfless service and community worship.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Meditation
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Service
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Prayer
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Core Spiritual Practices
              </CardTitle>
              <CardDescription>
                The fundamental practices that form the foundation of Sikh spiritual life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="nam-simran" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="nam-simran">Nam Simran</TabsTrigger>
                  <TabsTrigger value="prayer">Prayer</TabsTrigger>
                  <TabsTrigger value="seva">Seva</TabsTrigger>
                </TabsList>

                <TabsContent value="nam-simran" className="space-y-4">
                  <p className="text-muted-foreground">
                    Nam Simran is the practice of remembering and meditating on God's name. 
                    It is the primary spiritual practice in Sikhism, leading to purification of mind and union with God.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">What is Nam Simran?</h4>
                      <p className="text-sm text-muted-foreground">
                        Nam Simran means "remembering the Name." It involves focusing the mind on God's name 
                        (Waheguru) through repetition, meditation, and contemplation.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Methods of Practice</h4>
                      <p className="text-sm text-muted-foreground">
                        Can be practiced through silent meditation, chanting aloud, or mental repetition. 
                        The key is to focus the mind and heart on the divine name.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <p className="text-sm text-muted-foreground">
                        Purifies the mind, removes ego, reduces stress, and connects the soul with God. 
                        Regular practice leads to inner peace and spiritual progress.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Integration in Daily Life</h4>
                      <p className="text-sm text-muted-foreground">
                        Can be practiced while walking, working, or doing daily activities. 
                        The goal is to maintain awareness of God's presence throughout the day.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="prayer" className="space-y-4">
                  <p className="text-muted-foreground">
                    Prayer in Sikhism is both a formal practice and a way of life. It includes 
                    reciting sacred texts, offering gratitude, and seeking divine guidance.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nitnem (Daily Prayers)</h4>
                      <p className="text-sm text-muted-foreground">
                        The five daily prayers that Sikhs are encouraged to recite: Japji Sahib, 
                        Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, and Anand Sahib.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Japji Sahib</h4>
                      <p className="text-sm text-muted-foreground">
                        The morning prayer composed by Guru Nanak, containing the essence of Sikh philosophy. 
                        It is recited at dawn to start the day with divine wisdom.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Ardas (Supplication)</h4>
                      <p className="text-sm text-muted-foreground">
                        A formal prayer of supplication that includes remembering the Gurus, 
                        seeking blessings, and offering gratitude for divine grace.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Personal Prayer</h4>
                      <p className="text-sm text-muted-foreground">
                        Informal communication with God, expressing gratitude, seeking guidance, 
                        and asking for strength to live according to Sikh principles.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="seva" className="space-y-4">
                  <p className="text-muted-foreground">
                    Seva (selfless service) is a fundamental practice in Sikhism. It involves 
                    serving others without expecting anything in return, recognizing the divine in all beings.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Types of Seva</h4>
                      <p className="text-sm text-muted-foreground">
                        Tan (physical service), Man (mental service), and Dhan (material service). 
                        All forms of seva are equally valuable and contribute to spiritual growth.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Langar (Community Kitchen)</h4>
                      <p className="text-sm text-muted-foreground">
                        The practice of serving free meals to all, regardless of religion, caste, or status. 
                        It promotes equality, community, and selfless service.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Gurdwara Seva</h4>
                      <p className="text-sm text-muted-foreground">
                        Volunteering at the Gurdwara through cleaning, cooking, serving, or other tasks. 
                        This service helps maintain the sacred space and serves the community.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Community Service</h4>
                      <p className="text-sm text-muted-foreground">
                        Helping those in need, supporting charitable causes, and contributing to 
                        the welfare of society. This includes education, healthcare, and social justice.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Gurdwara Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Gurdwara Practices
              </CardTitle>
              <CardDescription>
                Practices and rituals associated with Sikh places of worship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Gurdwara Etiquette</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Covering Head</h4>
                      <p className="text-sm text-muted-foreground">
                        All visitors must cover their head as a sign of respect. 
                        This can be done with a turban, scarf, or any head covering.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Removing Shoes</h4>
                      <p className="text-sm text-muted-foreground">
                        Shoes must be removed before entering the Gurdwara as a sign of respect 
                        for the sacred space and the Guru Granth Sahib.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Washing Hands</h4>
                      <p className="text-sm text-muted-foreground">
                        Hands should be washed before entering the main hall as a sign of 
                        cleanliness and respect for the sacred environment.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Proper Attire</h4>
                      <p className="text-sm text-muted-foreground">
                        Modest and respectful clothing should be worn. 
                        Avoid revealing or inappropriate attire.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Gurdwara Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kirtan</h4>
                      <p className="text-sm text-muted-foreground">
                        Devotional singing of hymns from the Guru Granth Sahib, accompanied by 
                        traditional instruments like the harmonium and tabla.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Katha</h4>
                      <p className="text-sm text-muted-foreground">
                        Religious discourse explaining the teachings of the Gurus and 
                        their application in daily life.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Ardas</h4>
                      <p className="text-sm text-muted-foreground">
                        Formal prayer offered by the congregation, remembering the Gurus 
                        and seeking divine blessings.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hukamnama</h4>
                      <p className="text-sm text-muted-foreground">
                        A random reading from the Guru Granth Sahib that provides 
                        guidance and wisdom for the day.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Langar (Community Meal)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Purpose of Langar</h4>
                      <p className="text-sm text-muted-foreground">
                        To promote equality, community, and selfless service. All people, regardless of 
                        religion, caste, or status, sit together and share a meal.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Vegetarian Food</h4>
                      <p className="text-sm text-muted-foreground">
                        Langar is always vegetarian to accommodate people of all faiths and 
                        to promote non-violence and compassion.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Volunteer Service</h4>
                      <p className="text-sm text-muted-foreground">
                        The preparation and serving of langar is done by volunteers as an act of seva. 
                        This includes cooking, cleaning, and serving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-purple-600" />
                Daily Practices
              </CardTitle>
              <CardDescription>
                Practices that can be integrated into daily life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Morning Routine</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Amrit Vela</h4>
                      <p className="text-sm text-muted-foreground">
                        The ambrosial hours before dawn (3-6 AM) are considered the best time for 
                        meditation and prayer. Sikhs are encouraged to wake up early for spiritual practice.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Japji Sahib</h4>
                      <p className="text-sm text-muted-foreground">
                        Reciting Japji Sahib in the morning sets the tone for the day, 
                        providing spiritual guidance and wisdom.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Gratitude Practice</h4>
                      <p className="text-sm text-muted-foreground">
                        Starting the day with gratitude for life, health, and all blessings. 
                        This creates a positive mindset and spiritual awareness.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Throughout the Day</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mindful Living</h4>
                      <p className="text-sm text-muted-foreground">
                        Being aware of thoughts, words, and actions throughout the day. 
                        Practicing the three pillars: Nam Japna, Kirat Karni, Vand Chakna.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Honest Work</h4>
                      <p className="text-sm text-muted-foreground">
                        Earning a living through honest means, avoiding exploitation, 
                        and contributing positively to society.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Helping Others</h4>
                      <p className="text-sm text-muted-foreground">
                        Looking for opportunities to help others, whether through small acts of kindness 
                        or more significant service.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Remembering God</h4>
                      <p className="text-sm text-muted-foreground">
                        Maintaining awareness of God's presence throughout daily activities, 
                        practicing Nam Simran in the background of the mind.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Evening Reflection</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Evening Prayers</h4>
                      <p className="text-sm text-muted-foreground">
                        Reciting evening prayers like Rehras Sahib and Kirtan Sohila to 
                        end the day with gratitude and spiritual reflection.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Daily Review</h4>
                      <p className="text-sm text-muted-foreground">
                        Reflecting on the day's actions, learning from experiences, 
                        and planning to improve in areas that need attention.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Seeking Forgiveness</h4>
                      <p className="text-sm text-muted-foreground">
                        Asking for forgiveness for any mistakes or wrong actions, 
                        and resolving to do better the next day.
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
          {/* Free Practice Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Practice Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/practice-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Practice Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/guided-practices`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Guided Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.srigranth.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    SriGranth.org
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.sikhnet.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    SikhNet
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
                  <Link href={`/${params.locale}/studies/sikh/philosophy`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Sikh Philosophy
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/sikh/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Sikh History
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/sikh/beginner`}>
                    <Search className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Practice Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Practice Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Inner Peace</span>
                  <p className="text-sm">Calm mind and emotional balance</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Spiritual Growth</span>
                  <p className="text-sm">Deepening connection with God</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Community</span>
                  <p className="text-sm">Sense of belonging and support</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Purpose</span>
                  <p className="text-sm">Clear direction and meaning in life</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Practice Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Start with simple practices and gradually deepen your spiritual journey. 
          Remember that consistency and sincerity are more important than perfection.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh/beginner`}>
              <Search className="mr-2 h-5 w-5" />
              Start Practicing
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/sikh`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Scriptures
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 