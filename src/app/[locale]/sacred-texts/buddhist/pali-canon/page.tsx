import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye } from "lucide-react"
import Link from "next/link"

interface PaliCanonPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Pali Canon | Buddhist Sacred Texts",
  description: "Explore the Pali Canon, the sacred scriptures of Theravada Buddhism, containing the earliest recorded teachings of the Buddha.",
  keywords: "Pali Canon, Tipitaka, Buddhist scriptures, Theravada, Sutta Pitaka, Vinaya Pitaka, Abhidhamma Pitaka"
}

export default function PaliCanonPage({ params }: PaliCanonPageProps) {
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
        <Badge variant="secondary" className="mb-4">Pali Canon</Badge>
        <h1 className="text-4xl font-bold mb-4">The Pali Canon</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The sacred scriptures of Theravada Buddhism, containing the earliest recorded teachings 
          of the Buddha and his disciples.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Tipitaka
          </Badge>
          <Badge variant="outline">
            <ScrollText className="mr-1 h-3 w-3" />
            Suttas
          </Badge>
          <Badge variant="outline">
            <Library className="mr-1 h-3 w-3" />
            Commentaries
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Overview of the Pali Canon
              </CardTitle>
              <CardDescription>
                Understanding the structure and significance of the Tipitaka
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The Pali Canon, also known as the Tipitaka (Three Baskets), is the complete collection 
                  of the earliest Buddhist scriptures. It contains the teachings of the Buddha as preserved 
                  by the Theravada tradition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-medium mb-2">Sutta Pitaka</h4>
                    <p className="text-sm text-muted-foreground">
                      The "Basket of Discourses" containing the Buddha's teachings and dialogues 
                      with disciples and others.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-medium mb-2">Vinaya Pitaka</h4>
                    <p className="text-sm text-muted-foreground">
                      The "Basket of Discipline" containing the rules and regulations for the 
                      monastic community.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h4 className="font-medium mb-2">Abhidhamma Pitaka</h4>
                    <p className="text-sm text-muted-foreground">
                      The "Basket of Higher Teaching" containing systematic analysis of 
                      consciousness and mental factors.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sutta Pitaka */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-green-600" />
                Sutta Pitaka (Discourses)
              </CardTitle>
              <CardDescription>
                The Buddha's teachings organized into five collections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="digha" className="space-y-4">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="digha">Digha</TabsTrigger>
                  <TabsTrigger value="majjhima">Majjhima</TabsTrigger>
                  <TabsTrigger value="samyutta">Samyutta</TabsTrigger>
                  <TabsTrigger value="anguttara">Anguttara</TabsTrigger>
                  <TabsTrigger value="khuddaka">Khuddaka</TabsTrigger>
                </TabsList>

                <TabsContent value="digha" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Long Discourses (Digha Nikaya) contain 34 suttas, including some of the most 
                    important and comprehensive teachings of the Buddha.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Brahmajala Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Net of Brahma" - discusses 62 wrong views and the Buddha's teaching on 
                        the nature of reality and liberation.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Mahaparinibbana Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Great Discourse on the Final Nibbana" - describes the Buddha's last days, 
                        final teachings, and passing into Nibbana.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Sigalovada Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse to Sigala" - provides comprehensive guidance on ethical living 
                        for laypeople.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="majjhima" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Middle Length Discourses (Majjhima Nikaya) contain 152 suttas of medium length, 
                    covering a wide range of topics.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Satipatthana Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse on the Foundations of Mindfulness" - the primary text on 
                        mindfulness meditation and the four foundations of mindfulness.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Anapanasati Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse on Mindfulness of Breathing" - detailed instructions on 
                        breath meditation leading to liberation.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Cula-Malunkyovada Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Shorter Discourse to Malunkyaputta" - addresses speculative questions 
                        and the Buddha's approach to metaphysical issues.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="samyutta" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Connected Discourses (Samyutta Nikaya) contain 2,889 suttas organized by theme, 
                    making it easy to find teachings on specific topics.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Dhammacakkappavattana Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse on Setting the Wheel of Dhamma in Motion" - the Buddha's 
                        first teaching on the Four Noble Truths.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Anattalakkhana Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse on the Characteristic of Not-Self" - the Buddha's second 
                        discourse on the three characteristics of existence.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Kaccayanagotta Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse to Kaccayana" - explains dependent origination and the 
                        middle way between existence and non-existence.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="anguttara" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Numerical Discourses (Anguttara Nikaya) contain 8,122 suttas organized by 
                    numbers, from ones to elevens.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Kalama Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse to the Kalamas" - encourages independent investigation and 
                        not accepting teachings based on tradition alone.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Metta Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse on Loving-Kindness" - teaches the practice of metta 
                        (loving-kindness) meditation.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Dighajanu Sutta</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Discourse to Dighajanu" - provides guidance for laypeople on 
                        worldly success and spiritual development.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="khuddaka" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Minor Collection (Khuddaka Nikaya) contains 15 books of various types of texts, 
                    including some of the most beloved and frequently recited suttas.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Dhammapada</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Path of Dhamma" - 423 verses organized by topic, containing some of 
                        the most famous and inspiring teachings of the Buddha.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Udana</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Inspired Utterances" - 80 discourses containing verses inspired by 
                        specific events in the Buddha's life.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Itivuttaka</h4>
                      <p className="text-sm text-muted-foreground">
                        The "Thus It Was Said" - 112 short discourses in mixed prose and verse, 
                        organized by numbers.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Vinaya and Abhidhamma */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Library className="h-5 w-5 text-purple-600" />
                Vinaya and Abhidhamma
              </CardTitle>
              <CardDescription>
                The other two baskets of the Tipitaka
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Vinaya Pitaka (Discipline)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Suttavibhanga</h4>
                      <p className="text-sm text-muted-foreground">
                        Analysis of the Patimokkha rules for monks and nuns, with stories about 
                        how each rule came to be established.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Khandhaka</h4>
                      <p className="text-sm text-muted-foreground">
                        Rules for the organization of the monastic community, including ordination, 
                        retreats, and community procedures.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Parivara</h4>
                      <p className="text-sm text-muted-foreground">
                        A summary and classification of the Vinaya rules for easy reference 
                        and study.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Abhidhamma Pitaka (Higher Teaching)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dhammasangani</h4>
                      <p className="text-sm text-muted-foreground">
                        Enumeration and classification of all mental and physical phenomena 
                        (dhammas) into categories.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vibhanga</h4>
                      <p className="text-sm text-muted-foreground">
                        Analysis of various topics including the five aggregates, sense bases, 
                        elements, and dependent origination.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dhatukatha</h4>
                      <p className="text-sm text-muted-foreground">
                        Discussion of the relationship between the five aggregates, 
                        twelve sense bases, and eighteen elements.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Puggalapannatti</h4>
                      <p className="text-sm text-muted-foreground">
                        Description of different types of persons based on their spiritual 
                        development and characteristics.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kathavatthu</h4>
                      <p className="text-sm text-muted-foreground">
                        Points of controversy - debates on various doctrinal issues 
                        that arose in the early Buddhist community.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Yamaka</h4>
                      <p className="text-sm text-muted-foreground">
                        Pairs of questions and answers testing understanding of 
                        various doctrinal concepts.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg md:col-span-2">
                      <h4 className="font-medium mb-2">Patthana</h4>
                      <p className="text-sm text-muted-foreground">
                        Conditional relations - the most complex text, analyzing the 24 types 
                        of conditional relationships between phenomena.
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
          {/* Free Online Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Online Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    SuttaCentral
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.accesstoinsight.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Access to Insight
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.tipitaka.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Tipitaka.org
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
                  <Link href={`/${params.locale}/studies/buddhist/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Buddhist History
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Key Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Total Size</span>
                  <p className="text-sm">Over 15,000 pages in English translation</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Language</span>
                  <p className="text-sm">Originally in Pali, now translated worldwide</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Preservation</span>
                  <p className="text-sm">Orally transmitted for 400+ years before writing</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Tradition</span>
                  <p className="text-sm">Theravada Buddhism's primary scripture</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Study of the Pali Canon</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore the profound wisdom of the Buddha's teachings through these ancient texts. 
          Start with the Dhammapada or a simple sutta and gradually deepen your understanding.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Online
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/buddhist`}>
              <Globe className="mr-2 h-5 w-5" />
              All Buddhist Texts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 