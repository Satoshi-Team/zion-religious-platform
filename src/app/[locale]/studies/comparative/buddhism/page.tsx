import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Scale } from "lucide-react"
import Link from "next/link"

interface ComparativeBuddhismPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Comparative Buddhism | Studies",
  description: "Explore how Buddhist teachings compare with other religious traditions, highlighting similarities and differences in philosophy and practice.",
  keywords: "comparative Buddhism, Buddhist philosophy, interfaith dialogue, religious comparison, Buddhist teachings"
}

export default function ComparativeBuddhismPage({ params }: ComparativeBuddhismPageProps) {
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
        <Badge variant="secondary" className="mb-4">Comparative Study</Badge>
        <h1 className="text-4xl font-bold mb-4">Comparative Buddhism</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore how Buddhist teachings compare with other religious traditions, 
          discovering both shared wisdom and unique perspectives on life's deepest questions.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Scale className="mr-1 h-3 w-3" />
            Comparisons
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Shared Wisdom
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Unique Perspectives
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Concepts Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-blue-600" />
                Core Concepts Comparison
              </CardTitle>
              <CardDescription>
                How Buddhist concepts relate to other religious traditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="suffering" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="suffering">Suffering</TabsTrigger>
                  <TabsTrigger value="liberation">Liberation</TabsTrigger>
                  <TabsTrigger value="ethics">Ethics</TabsTrigger>
                </TabsList>

                <TabsContent value="suffering" className="space-y-4">
                  <p className="text-muted-foreground">
                    Different traditions address the universal experience of suffering, 
                    each offering unique perspectives and solutions.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Buddhism: Dukkha</h4>
                      <p className="text-sm text-muted-foreground">
                        Suffering is inherent in existence due to craving and attachment. 
                        The solution is the Eightfold Path leading to Nirvana.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hinduism: Maya</h4>
                      <p className="text-sm text-muted-foreground">
                        Suffering comes from illusion (maya) and ignorance of true reality. 
                        Liberation comes through knowledge and devotion.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Christianity: Sin</h4>
                      <p className="text-sm text-muted-foreground">
                        Suffering results from sin and separation from God. 
                        Salvation comes through faith in Christ and divine grace.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Islam: Test</h4>
                      <p className="text-sm text-muted-foreground">
                        Suffering is a test from Allah to strengthen faith and character. 
                        Patience and submission to God's will bring reward.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="liberation" className="space-y-4">
                  <p className="text-muted-foreground">
                    Each tradition offers a path to liberation or salvation, 
                    though the ultimate goal and means differ significantly.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Buddhism: Nirvana</h4>
                      <p className="text-sm text-muted-foreground">
                        Liberation from the cycle of rebirth through extinguishing craving. 
                        Achieved through wisdom, ethical conduct, and meditation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hinduism: Moksha</h4>
                      <p className="text-sm text-muted-foreground">
                        Liberation from samsara through realizing one's identity with Brahman. 
                        Achieved through knowledge, devotion, or selfless action.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Christianity: Salvation</h4>
                      <p className="text-sm text-muted-foreground">
                        Eternal life with God through faith in Christ's sacrifice. 
                        Achieved through grace, faith, and good works.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Islam: Paradise</h4>
                      <p className="text-sm text-muted-foreground">
                        Eternal paradise through submission to Allah and following the Five Pillars. 
                        Achieved through faith and righteous deeds.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ethics" className="space-y-4">
                  <p className="text-muted-foreground">
                    Ethical principles form the foundation of all major religious traditions, 
                    though specific guidelines may vary.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Buddhism: Five Precepts</h4>
                      <p className="text-sm text-muted-foreground">
                        Avoid harming living beings, stealing, sexual misconduct, lying, and intoxicants. 
                        Based on compassion and wisdom.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hinduism: Dharma</h4>
                      <p className="text-sm text-muted-foreground">
                        Righteous duty based on caste, stage of life, and cosmic order. 
                        Includes ahimsa (non-violence) and other virtues.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Christianity: Love</h4>
                      <p className="text-sm text-muted-foreground">
                        Love God and neighbor as yourself. Ten Commandments and Golden Rule. 
                        Based on divine law and love.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Islam: Sharia</h4>
                      <p className="text-sm text-muted-foreground">
                        Divine law covering all aspects of life. Five Pillars and moral guidelines. 
                        Based on Quran and Hadith.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Meditation and Prayer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Meditation and Prayer Practices
              </CardTitle>
              <CardDescription>
                Comparing spiritual practices across traditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Buddhist Meditation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mindfulness</h4>
                      <p className="text-sm text-muted-foreground">
                        Present-moment awareness without judgment. Focus on breath, body, 
                        feelings, and mental states.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Loving-Kindness</h4>
                      <p className="text-sm text-muted-foreground">
                        Cultivating unconditional love and goodwill toward all beings. 
                        Extending compassion to self and others.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Insight Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Direct observation of the three characteristics: impermanence, 
                        suffering, and non-self.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Concentration</h4>
                      <p className="text-sm text-muted-foreground">
                        Single-pointed focus to develop mental stability and enter 
                        meditative absorptions (jhanas).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Other Traditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hindu Yoga</h4>
                      <p className="text-sm text-muted-foreground">
                        Eight-limbed path including physical postures, breath control, 
                        and meditation leading to samadhi.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Christian Prayer</h4>
                      <p className="text-sm text-muted-foreground">
                        Personal communication with God through petition, thanksgiving, 
                        confession, and contemplation.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Islamic Salah</h4>
                      <p className="text-sm text-muted-foreground">
                        Structured prayer five times daily with specific movements and recitations. 
                        Includes dhikr (remembrance of God).
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Jewish Meditation</h4>
                      <p className="text-sm text-muted-foreground">
                        Kabbalistic practices, Torah study, and hitbodedut (personal prayer). 
                        Focus on divine unity and ethical living.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Philosophical Perspectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Philosophical Perspectives
              </CardTitle>
              <CardDescription>
                Comparing fundamental philosophical views
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Nature of Reality</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Buddhism: Anatta (No-Self)</h4>
                      <p className="text-sm text-muted-foreground">
                        No permanent, unchanging self. Reality is impermanent and interdependent. 
                        Ultimate reality is emptiness (sunyata).
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Hinduism: Atman-Brahman</h4>
                      <p className="text-sm text-muted-foreground">
                        Individual soul (atman) is identical to universal reality (Brahman). 
                        Ultimate reality is consciousness and bliss.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Christianity: Personal God</h4>
                      <p className="text-sm text-muted-foreground">
                        Personal, loving God who created and sustains the universe. 
                        Humans have immortal souls created in God's image.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Islam: Tawhid</h4>
                      <p className="text-sm text-muted-foreground">
                        Absolute oneness of God (Allah). God is transcendent and immanent. 
                        Humans are God's vicegerents on earth.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Karma and Divine Justice</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Buddhism: Karma</h4>
                      <p className="text-sm text-muted-foreground">
                        Natural law of cause and effect. Actions have consequences that affect 
                        future rebirths. No divine judge.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Hinduism: Karma</h4>
                      <p className="text-sm text-muted-foreground">
                        Cosmic law of action and reaction. Actions determine future rebirths. 
                        God oversees but doesn't interfere.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Christianity: Divine Judgment</h4>
                      <p className="text-sm text-muted-foreground">
                        God judges all actions. Salvation through faith and grace. 
                        Eternal consequences in heaven or hell.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Islam: Divine Justice</h4>
                      <p className="text-sm text-muted-foreground">
                        Allah judges all actions on Day of Judgment. Balance of good and bad deeds. 
                        Paradise or hell as consequences.
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
          {/* Free Comparative Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Comparative Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/buddhist/comparative-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Comparative Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/comparative/hinduism`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Compare with Hinduism
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/comparative/christianity`}>
                    <Library className="mr-2 h-4 w-4" />
                    Compare with Christianity
                  </Link>
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
                  <Link href={`/${params.locale}/studies/buddhist/meditation`}>
                    <Search className="mr-2 h-4 w-4" />
                    Buddhist Meditation
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/buddhist/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Buddhist History
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Similarities */}
          <Card>
            <CardHeader>
              <CardTitle>Key Similarities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Ethical Living</span>
                  <p className="text-sm">All emphasize moral conduct and compassion</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Spiritual Practice</span>
                  <p className="text-sm">Meditation, prayer, and devotion are common</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Community Service</span>
                  <p className="text-sm">Helping others is valued in all traditions</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Inner Peace</span>
                  <p className="text-sm">All seek to overcome suffering and find peace</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Comparative Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore how different traditions address life's deepest questions and discover 
          the shared wisdom that unites humanity across cultures and beliefs.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/comparative/hinduism`}>
              <Scale className="mr-2 h-5 w-5" />
              Compare with Hinduism
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/buddhist`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Buddhist Texts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 