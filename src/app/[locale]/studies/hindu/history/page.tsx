import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Calendar, MapPin, User } from "lucide-react"
import Link from "next/link"

interface HinduHistoryPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Hindu History | Studies",
  description: "Explore the rich history of Hinduism from its ancient origins to its development through various periods and its global influence.",
  keywords: "Hindu history, Vedic period, Upanishadic period, classical Hinduism, medieval period, modern Hinduism, historical development"
}

export default function HinduHistoryPage({ params }: HinduHistoryPageProps) {
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
        <Badge variant="secondary" className="mb-4">Hindu History</Badge>
        <h1 className="text-4xl font-bold mb-4">Hindu History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Journey through the rich historical development of Hinduism, from its ancient Vedic roots 
          to its evolution into one of the world's oldest and most diverse religious traditions.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Calendar className="mr-1 h-3 w-3" />
            Historical Periods
          </Badge>
          <Badge variant="outline">
            <MapPin className="mr-1 h-3 w-3" />
            Geographic Spread
          </Badge>
          <Badge variant="outline">
            <User className="mr-1 h-3 w-3" />
            Key Figures
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Historical Periods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Historical Periods
              </CardTitle>
              <CardDescription>
                Major periods in the development of Hinduism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="vedic" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="vedic">Vedic</TabsTrigger>
                  <TabsTrigger value="upanishadic">Upanishadic</TabsTrigger>
                  <TabsTrigger value="classical">Classical</TabsTrigger>
                  <TabsTrigger value="medieval">Medieval</TabsTrigger>
                </TabsList>

                <TabsContent value="vedic" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Vedic period (1500-500 BCE) marks the beginning of Hinduism with the composition 
                    of the sacred Vedas and the development of early religious practices.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Rig Veda</h4>
                      <p className="text-sm text-muted-foreground">
                        The oldest of the Vedas, composed around 1500-1200 BCE. Contains hymns to various 
                        deities and reflects the religious and social life of early Vedic society.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vedic Deities</h4>
                      <p className="text-sm text-muted-foreground">
                        Worship of natural forces personified as gods: Indra (thunder), Agni (fire), 
                        Varuna (cosmic order), and Soma (sacred plant). Ritual sacrifices were central.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Social Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        Development of the varna system (Brahmins, Kshatriyas, Vaishyas, Shudras) 
                        and the ashrama system (stages of life).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Later Vedas</h4>
                      <p className="text-sm text-muted-foreground">
                        Sama Veda (chants), Yajur Veda (ritual formulas), and Atharva Veda (spells and charms) 
                        were composed, expanding the religious literature.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="upanishadic" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Upanishadic period (800-400 BCE) saw the development of philosophical thought 
                    and the shift from external rituals to internal spiritual inquiry.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Philosophical Revolution</h4>
                      <p className="text-sm text-muted-foreground">
                        The Upanishads introduced profound philosophical concepts: Brahman (ultimate reality), 
                        Atman (individual soul), and their identity. This marked a shift from ritual to knowledge.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Key Teachings</h4>
                      <p className="text-sm text-muted-foreground">
                        "Tat Tvam Asi" (That Thou Art), the concept of karma and rebirth, 
                        and the path to moksha (liberation) through knowledge and meditation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Renunciation Movement</h4>
                      <p className="text-sm text-muted-foreground">
                        Rise of sannyasins (renunciants) who left household life to pursue spiritual knowledge. 
                        This tradition continues to this day.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Influence on Later Thought</h4>
                      <p className="text-sm text-muted-foreground">
                        The Upanishads became the foundation for all later Hindu philosophy, 
                        including Vedanta and the various schools of thought.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="classical" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Classical period (500 BCE - 500 CE) saw the development of major philosophical schools, 
                    the composition of epic literature, and the establishment of temple worship.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Epic Literature</h4>
                      <p className="text-sm text-muted-foreground">
                        Composition of the Mahabharata and Ramayana, which contain profound spiritual teachings 
                        and have shaped Hindu culture and values for millennia.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Bhagavad Gita</h4>
                      <p className="text-sm text-muted-foreground">
                        Part of the Mahabharata, this sacred text presents the synthesis of different paths 
                        to spiritual realization: karma yoga, bhakti yoga, and jnana yoga.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Philosophical Schools</h4>
                      <p className="text-sm text-muted-foreground">
                        Development of the six classical schools: Nyaya, Vaisheshika, Samkhya, Yoga, 
                        Mimamsa, and Vedanta. Each offered different approaches to understanding reality.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Temple Culture</h4>
                      <p className="text-sm text-muted-foreground">
                        Emergence of temple worship and the development of elaborate rituals and ceremonies. 
                        Temples became centers of religious, cultural, and social life.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="medieval" className="space-y-4">
                  <p className="text-muted-foreground">
                    The Medieval period (500-1500 CE) saw the rise of devotional movements, 
                    the development of various sects, and the spread of Hinduism across South Asia.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Bhakti Movement</h4>
                      <p className="text-sm text-muted-foreground">
                        Rise of devotional movements emphasizing personal love for God. Saints like 
                        Ramanuja, Madhva, and Chaitanya spread bhakti across India.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Advaita Vedanta</h4>
                      <p className="text-sm text-muted-foreground">
                        Adi Shankara (788-820 CE) systematized Advaita Vedanta, teaching the non-dual nature 
                        of reality and establishing monastic orders across India.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Tantric Traditions</h4>
                      <p className="text-sm text-muted-foreground">
                        Development of tantric practices emphasizing the divine feminine, 
                        ritual practices, and the transformation of ordinary experience into spiritual realization.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Regional Variations</h4>
                      <p className="text-sm text-muted-foreground">
                        Hinduism adapted to local cultures across South Asia, leading to diverse 
                        regional traditions while maintaining core philosophical principles.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Modern Period */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                Modern Period
              </CardTitle>
              <CardDescription>
                Hinduism in the modern era and its global influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Colonial Period (1500-1947)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">European Contact</h4>
                      <p className="text-sm text-muted-foreground">
                        European traders and colonizers encountered Hinduism, leading to both 
                        misunderstanding and scholarly study of Indian traditions.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Reform Movements</h4>
                      <p className="text-sm text-muted-foreground">
                        Leaders like Raja Ram Mohan Roy, Swami Vivekananda, and Sri Aurobindo 
                        worked to reform and revitalize Hinduism in response to colonial challenges.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Global Spread</h4>
                      <p className="text-sm text-muted-foreground">
                        Hindu teachers began traveling to the West, introducing yoga, meditation, 
                        and Hindu philosophy to global audiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Contemporary Hinduism</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Global Presence</h4>
                      <p className="text-sm text-muted-foreground">
                        Hinduism has spread worldwide through migration, spiritual teachers, 
                        and the popularity of yoga and meditation practices.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Modern Adaptations</h4>
                      <p className="text-sm text-muted-foreground">
                        Hinduism continues to adapt to modern life while preserving its core teachings. 
                        New interpretations and practices emerge while maintaining tradition.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Interfaith Dialogue</h4>
                      <p className="text-sm text-muted-foreground">
                        Hindu leaders participate in global interfaith discussions, contributing 
                        perspectives on spirituality, ethics, and world peace.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Digital Age</h4>
                      <p className="text-sm text-muted-foreground">
                        Technology has made Hindu texts and teachings more accessible globally, 
                        with online resources, virtual temples, and digital communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Historical Figures */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" />
                Key Historical Figures
              </CardTitle>
              <CardDescription>
                Influential figures who shaped Hindu history and thought
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ancient Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vyasa</h4>
                      <p className="text-sm text-muted-foreground">
                        Compiler of the Vedas and author of the Mahabharata. 
                        Considered the father of Hindu literature.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Valmiki</h4>
                      <p className="text-sm text-muted-foreground">
                        Author of the Ramayana, one of the most important Hindu epics. 
                        His work has influenced culture and values for millennia.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Medieval Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Adi Shankara</h4>
                      <p className="text-sm text-muted-foreground">
                        Philosopher who systematized Advaita Vedanta and established 
                        monastic centers across India (788-820 CE).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Ramanuja</h4>
                      <p className="text-sm text-muted-foreground">
                        Philosopher who founded Vishishtadvaita (qualified non-dualism) 
                        and emphasized devotion to God (1017-1137 CE).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Madhva</h4>
                      <p className="text-sm text-muted-foreground">
                        Philosopher who established Dvaita Vedanta (dualism) 
                        and emphasized the distinction between God and souls (1238-1317 CE).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Chaitanya</h4>
                      <p className="text-sm text-muted-foreground">
                        Saint who popularized bhakti yoga and kirtan (devotional singing) 
                        in Bengal (1486-1534 CE).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Modern Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Raja Ram Mohan Roy</h4>
                      <p className="text-sm text-muted-foreground">
                        Social reformer who founded the Brahmo Samaj and worked to 
                        modernize Hindu society (1772-1833).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Swami Vivekananda</h4>
                      <p className="text-sm text-muted-foreground">
                        Disciple of Ramakrishna who introduced Hinduism to the West 
                        and founded the Ramakrishna Mission (1863-1902).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Sri Aurobindo</h4>
                      <p className="text-sm text-muted-foreground">
                        Philosopher and yogi who developed Integral Yoga and 
                        wrote extensively on spiritual evolution (1872-1950).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mahatma Gandhi</h4>
                      <p className="text-sm text-muted-foreground">
                        Political and spiritual leader who applied Hindu principles 
                        to social and political reform (1869-1948).
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
                  <Link href={`/${params.locale}/sacred-texts/hindu/historical-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Historical Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/hindu/biographies`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Biographies
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
                  <Link href={`/${params.locale}/studies/hindu/practices`}>
                    <Search className="mr-2 h-4 w-4" />
                    Hindu Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/beginner`}>
                    <History className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Historical Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Historical Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1500-500 BCE</span>
                  <p className="text-sm">Vedic Period</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">800-400 BCE</span>
                  <p className="text-sm">Upanishadic Period</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">500 BCE - 500 CE</span>
                  <p className="text-sm">Classical Period</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">500-1500 CE</span>
                  <p className="text-sm">Medieval Period</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1500 CE - Present</span>
                  <p className="text-sm">Modern Period</p>
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
          Explore the philosophical teachings, spiritual practices, and sacred texts 
          that have shaped Hindu history and continue to inspire millions today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/hindu/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Study Philosophy
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