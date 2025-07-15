import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Timer } from "lucide-react"
import Link from "next/link"

interface HinduPracticesPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Hindu Practices | Studies",
  description: "Learn about Hindu spiritual practices including yoga, meditation, puja, and various paths to spiritual realization.",
  keywords: "Hindu practices, yoga, meditation, puja, bhakti, karma yoga, jnana yoga, Hindu rituals, spiritual practices"
}

export default function HinduPracticesPage({ params }: HinduPracticesPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts/hindu`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hindu Scriptures
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Hindu Practices</Badge>
        <h1 className="text-4xl font-bold mb-4">Hindu Spiritual Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore the diverse spiritual practices of Hinduism, from yoga and meditation to 
          devotional worship and ritual ceremonies.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Yoga
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Bhakti
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Meditation
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Four Paths of Yoga */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Four Paths of Yoga
              </CardTitle>
              <CardDescription>
                The four main paths to spiritual realization in Hinduism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="karma" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="karma">Karma Yoga</TabsTrigger>
                  <TabsTrigger value="bhakti">Bhakti Yoga</TabsTrigger>
                  <TabsTrigger value="jnana">Jnana Yoga</TabsTrigger>
                  <TabsTrigger value="raja">Raja Yoga</TabsTrigger>
                </TabsList>

                <TabsContent value="karma" className="space-y-4">
                  <p className="text-muted-foreground">
                    Karma Yoga is the path of selfless action. It involves performing one's duties 
                    without attachment to the results, dedicating all actions to God.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Selfless Service</h4>
                      <p className="text-sm text-muted-foreground">
                        Performing actions for the welfare of others without expecting personal gain. 
                        This purifies the mind and reduces ego.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Detachment from Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Focusing on the action itself rather than its outcome. This teaches 
                        acceptance and reduces anxiety about success or failure.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Duty and Dharma</h4>
                      <p className="text-sm text-muted-foreground">
                        Performing one's duties according to dharma, understanding that every action 
                        contributes to the cosmic order.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Practical Application</h4>
                      <p className="text-sm text-muted-foreground">
                        Can be practiced in daily life through work, family responsibilities, 
                        and community service with a spiritual attitude.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bhakti" className="space-y-4">
                  <p className="text-muted-foreground">
                    Bhakti Yoga is the path of devotion and love for God. It involves developing 
                    a personal relationship with the divine through worship, prayer, and surrender.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Devotional Practices</h4>
                      <p className="text-sm text-muted-foreground">
                        Puja (worship), japa (mantra repetition), kirtan (devotional singing), 
                        and reading sacred texts with devotion.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nine Forms of Bhakti</h4>
                      <p className="text-sm text-muted-foreground">
                        Shravana (listening), Kirtana (singing), Smarana (remembering), 
                        Padasevana (serving), Archana (worshipping), Vandana (praying), 
                        Dasya (servitude), Sakhya (friendship), Atmanivedana (surrender).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Personal Relationship</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing love for God as a parent, friend, master, or beloved. 
                        This emotional connection leads to spiritual transformation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Surrender</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete surrender to God's will, trusting in divine grace and 
                        accepting all circumstances as God's gift.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="jnana" className="space-y-4">
                  <p className="text-muted-foreground">
                    Jnana Yoga is the path of knowledge and wisdom. It involves intellectual inquiry 
                    and direct realization of the true nature of reality.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Study and Inquiry</h4>
                      <p className="text-sm text-muted-foreground">
                        Studying sacred texts, especially the Upanishads, and engaging in 
                        philosophical inquiry about the nature of reality and the self.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Discrimination</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing viveka (discrimination) between the real and unreal, 
                        permanent and impermanent, self and non-self.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Direct Realization</h4>
                      <p className="text-sm text-muted-foreground">
                        Moving beyond intellectual understanding to direct experience of 
                        the unity of Atman and Brahman through meditation and contemplation.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mahavakyas</h4>
                      <p className="text-sm text-muted-foreground">
                        Contemplating the great sayings: "Tat Tvam Asi" (That Thou Art), 
                        "Aham Brahmasmi" (I am Brahman), "Prajnanam Brahma" (Consciousness is Brahman).
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="raja" className="space-y-4">
                  <p className="text-muted-foreground">
                    Raja Yoga is the royal path of meditation and mind control. It involves 
                    systematic practices to control the mind and achieve spiritual realization.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Eight Limbs of Yoga</h4>
                      <p className="text-sm text-muted-foreground">
                        Yama (restraints), Niyama (observances), Asana (posture), Pranayama (breath control), 
                        Pratyahara (withdrawal), Dharana (concentration), Dhyana (meditation), Samadhi (absorption).
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mind Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Systematic practices to still the mind and achieve one-pointed concentration, 
                        leading to higher states of consciousness.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Meditation Techniques</h4>
                      <p className="text-sm text-muted-foreground">
                        Various meditation methods including breath awareness, mantra meditation, 
                        visualization, and mindfulness practices.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Samadhi</h4>
                      <p className="text-sm text-muted-foreground">
                        The ultimate goal - complete absorption in pure consciousness, 
                        transcending the individual mind and experiencing unity with the divine.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Ritual Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Ritual Practices
              </CardTitle>
              <CardDescription>
                Traditional Hindu rituals and ceremonies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Puja (Worship)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Home Puja</h4>
                      <p className="text-sm text-muted-foreground">
                        Daily worship at home altar, offering flowers, incense, food, and prayers 
                        to deities. Creates sacred space and spiritual atmosphere.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Temple Worship</h4>
                      <p className="text-sm text-muted-foreground">
                        Visiting temples for darshan (sacred viewing), participating in ceremonies, 
                        and receiving blessings from the divine.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Aarti</h4>
                      <p className="text-sm text-muted-foreground">
                        Ceremonial waving of lamps before deities, accompanied by devotional songs. 
                        Symbolizes the offering of light and devotion.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Prasad</h4>
                      <p className="text-sm text-muted-foreground">
                        Food offerings to deities that become blessed and are distributed to devotees. 
                        Represents divine grace and blessing.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Sacred Ceremonies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Samskaras</h4>
                      <p className="text-sm text-muted-foreground">
                        Life-cycle ceremonies from birth to death: naming, sacred thread, marriage, 
                        and funeral rites. Mark important transitions.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Yajna</h4>
                      <p className="text-sm text-muted-foreground">
                        Fire ceremonies where offerings are made to the sacred fire. Purify the environment 
                        and invoke divine blessings.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Pilgrimage</h4>
                      <p className="text-sm text-muted-foreground">
                        Visiting sacred places like Varanasi, Vrindavan, and the four dhams. 
                        Spiritual journey that purifies and transforms the pilgrim.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Festivals</h4>
                      <p className="text-sm text-muted-foreground">
                        Celebrations like Diwali, Holi, and Navaratri that commemorate divine events 
                        and strengthen community bonds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meditation and Contemplation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600" />
                Meditation and Contemplation
              </CardTitle>
              <CardDescription>
                Various meditation techniques and contemplative practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Meditation Techniques</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Mantra Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Repetition of sacred sounds like "Om," "Hare Krishna," or personal mantras. 
                        Focuses the mind and connects with divine vibration.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Breath Awareness</h4>
                      <p className="text-sm text-muted-foreground">
                        Observing the natural breath to calm the mind and develop concentration. 
                        Foundation for deeper meditation practices.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Visualization</h4>
                      <p className="text-sm text-muted-foreground">
                        Creating mental images of deities, sacred symbols, or spiritual concepts. 
                        Develops concentration and devotional feelings.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Self-Inquiry</h4>
                      <p className="text-sm text-muted-foreground">
                        Asking "Who am I?" to investigate the nature of the self. 
                        Leads to realization of one's true identity as pure consciousness.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contemplative Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Satsang</h4>
                      <p className="text-sm text-muted-foreground">
                        Gathering with spiritual seekers to discuss sacred texts, share experiences, 
                        and receive guidance from teachers.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Svadhyaya</h4>
                      <p className="text-sm text-muted-foreground">
                        Self-study of sacred texts with reflection and contemplation. 
                        Deepens understanding and spiritual insight.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mauna</h4>
                      <p className="text-sm text-muted-foreground">
                        Observing silence to quiet the mind and turn inward. 
                        Creates space for inner reflection and spiritual growth.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dhyana</h4>
                      <p className="text-sm text-muted-foreground">
                        Sustained meditation leading to absorption in the object of meditation. 
                        Bridge between concentration and samadhi.
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
                  <Link href={`/${params.locale}/sacred-texts/hindu/practice-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Practice Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/hindu/guided-practices`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Guided Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.sacred-texts.com/hin" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Sacred Texts
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.hinduismtoday.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Hinduism Today
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
                  <Link href={`/${params.locale}/studies/hindu/philosophy`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Hindu Philosophy
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Hindu History
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/beginner`}>
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
                  <p className="text-sm">Deepening connection with the divine</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Self-Realization</span>
                  <p className="text-sm">Understanding true nature</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Karmic Purification</span>
                  <p className="text-sm">Clearing past impressions</p>
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
            <Link href={`/${params.locale}/studies/hindu/beginner`}>
              <Search className="mr-2 h-5 w-5" />
              Start Practicing
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/hindu`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Scriptures
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 