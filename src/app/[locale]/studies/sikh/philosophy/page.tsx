import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye } from "lucide-react"
import Link from "next/link"

interface SikhPhilosophyPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Sikh Philosophy | Studies",
  description: "Explore the profound philosophical teachings of Sikhism, from the concept of Ik Onkar to the path of righteous living.",
  keywords: "Sikh philosophy, Ik Onkar, Waheguru, Sikh teachings, Sikh concepts, Guru Granth Sahib, Sikh wisdom"
}

export default function SikhPhilosophyPage({ params }: SikhPhilosophyPageProps) {
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
        <Badge variant="secondary" className="mb-4">Sikh Philosophy</Badge>
        <h1 className="text-4xl font-bold mb-4">Sikh Philosophy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore the profound philosophical teachings of Sikhism, from the concept of One God 
          to the path of righteous living and spiritual realization.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Core Concepts
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Divine Wisdom
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Nature of Reality
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Philosophical Concepts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Core Philosophical Concepts
              </CardTitle>
              <CardDescription>
                The fundamental philosophical principles that underlie Sikh thought
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ik-onkar" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="ik-onkar">Ik Onkar</TabsTrigger>
                  <TabsTrigger value="waheguru">Waheguru</TabsTrigger>
                  <TabsTrigger value="guru">Guru</TabsTrigger>
                  <TabsTrigger value="hukam">Hukam</TabsTrigger>
                </TabsList>

                <TabsContent value="ik-onkar" className="space-y-4">
                  <p className="text-muted-foreground">
                    Ik Onkar is the fundamental concept of Sikhism - "One God." It represents the 
                    belief in a single, formless, eternal, and all-pervading divine reality.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Oneness of God</h4>
                      <p className="text-sm text-muted-foreground">
                        There is only one God, who is the creator, sustainer, and destroyer of all existence. 
                        This God is beyond all forms, names, and attributes, yet is present in everything.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Beyond Religious Boundaries</h4>
                      <p className="text-sm text-muted-foreground">
                        This one God is not limited to any particular religion, culture, or tradition. 
                        All paths that lead to truth ultimately point to the same divine reality.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Unity in Diversity</h4>
                      <p className="text-sm text-muted-foreground">
                        While God is one, this oneness manifests in infinite diversity. 
                        All creation is a reflection of the divine, and all beings are interconnected.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Practical Implications</h4>
                      <p className="text-sm text-muted-foreground">
                        Understanding Ik Onkar leads to seeing the divine in all beings, 
                        promoting equality, compassion, and service to humanity.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="waheguru" className="space-y-4">
                  <p className="text-muted-foreground">
                    Waheguru is the name for God in Sikhism, meaning "Wonderful Lord" or "Wonderful Teacher." 
                    It represents the divine wisdom and grace that guides the soul to liberation.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Divine Wisdom</h4>
                      <p className="text-sm text-muted-foreground">
                        Waheguru is the source of all wisdom and knowledge. Through divine grace, 
                        the soul can overcome ignorance and realize its true nature.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Guru and Grace</h4>
                      <p className="text-sm text-muted-foreground">
                        Waheguru works through the Guru (divine teacher) to dispel darkness and 
                        bring light to the soul. The Guru is the manifestation of divine wisdom.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nam Simran</h4>
                      <p className="text-sm text-muted-foreground">
                        Remembering and meditating on Waheguru's name purifies the mind and 
                        connects the soul with the divine. This is the primary spiritual practice.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Liberation</h4>
                      <p className="text-sm text-muted-foreground">
                        Through Waheguru's grace, the soul can break free from the cycle of birth and death, 
                        achieving union with the divine and eternal bliss.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="guru" className="space-y-4">
                  <p className="text-muted-foreground">
                    The concept of Guru in Sikhism is central to spiritual development. The Guru is the 
                    divine teacher who dispels darkness and leads the soul to enlightenment.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Ten Gurus</h4>
                      <p className="text-sm text-muted-foreground">
                        From Guru Nanak to Guru Gobind Singh, each Guru was a manifestation of the same 
                        divine light, teaching and guiding humanity toward spiritual realization.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Guru Granth Sahib</h4>
                      <p className="text-sm text-muted-foreground">
                        The eternal Guru, containing the divine wisdom of the Gurus and other enlightened beings. 
                        It is the living embodiment of the Guru's teachings.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Inner Guru</h4>
                      <p className="text-sm text-muted-foreground">
                        The divine light within each person that guides them toward truth. 
                        The external Guru awakens this inner wisdom.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Guru's Grace</h4>
                      <p className="text-sm text-muted-foreground">
                        The Guru's blessings and guidance are essential for spiritual progress. 
                        Through devotion and service, one receives the Guru's grace.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hukam" className="space-y-4">
                  <p className="text-muted-foreground">
                    Hukam is the divine order or will of God. Understanding and accepting Hukam is 
                    essential for spiritual growth and inner peace.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Divine Will</h4>
                      <p className="text-sm text-muted-foreground">
                        Everything that happens is according to God's will. Understanding this 
                        helps one accept life's circumstances with equanimity.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Surrender</h4>
                      <p className="text-sm text-muted-foreground">
                        Accepting Hukam means surrendering one's ego and personal will to divine will. 
                        This leads to inner peace and spiritual progress.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Karma and Hukam</h4>
                      <p className="text-sm text-muted-foreground">
                        While we have free will to act, the results of our actions are determined by Hukam. 
                        Understanding this helps one act righteously without attachment to results.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Practical Application</h4>
                      <p className="text-sm text-muted-foreground">
                        Living according to Hukam means doing one's duty with devotion, 
                        accepting both success and failure as God's grace.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Sikh Teachings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Core Sikh Teachings
              </CardTitle>
              <CardDescription>
                The fundamental teachings that guide Sikh life and practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">The Three Pillars</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Naam Japna</h4>
                      <p className="text-sm text-muted-foreground">
                        Remembering and meditating on God's name. This purifies the mind, 
                        removes ego, and connects the soul with the divine.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kirat Karni</h4>
                      <p className="text-sm text-muted-foreground">
                        Earning an honest living through hard work and ethical means. 
                        This includes being truthful, fair, and avoiding exploitation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vand Chakna</h4>
                      <p className="text-sm text-muted-foreground">
                        Sharing with others and serving humanity. This includes giving to charity, 
                        helping those in need, and contributing to community welfare.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Five Virtues</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Sat (Truth)</h4>
                      <p className="text-sm text-muted-foreground">
                        Living truthfully in thought, word, and deed. Being honest with oneself and others, 
                        and seeking truth in all aspects of life.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Santokh (Contentment)</h4>
                      <p className="text-sm text-muted-foreground">
                        Being satisfied with what one has and accepting God's will. 
                        This leads to inner peace and freedom from greed and envy.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Daya (Compassion)</h4>
                      <p className="text-sm text-muted-foreground">
                        Showing kindness and empathy toward all beings. Understanding that all creation 
                        is divine and deserving of love and respect.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nimrata (Humility)</h4>
                      <p className="text-sm text-muted-foreground">
                        Being humble and modest, recognizing that all good comes from God. 
                        Avoiding pride and ego, and treating all as equals.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg md:col-span-2">
                      <h4 className="font-medium mb-2">Pyar (Love)</h4>
                      <p className="text-sm text-muted-foreground">
                        Loving God and all creation unconditionally. This love manifests as service, 
                        compassion, and the desire to help others.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Five Evils</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kaam (Lust)</h4>
                      <p className="text-sm text-muted-foreground">
                        Excessive desire for sensual pleasures that clouds judgment and 
                        leads to attachment and suffering.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Krodh (Anger)</h4>
                      <p className="text-sm text-muted-foreground">
                        Uncontrolled anger that destroys peace of mind and harms relationships. 
                        It leads to violence and negative karma.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Lobh (Greed)</h4>
                      <p className="text-sm text-muted-foreground">
                        Excessive desire for wealth and possessions that creates attachment 
                        and prevents spiritual growth.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Moh (Attachment)</h4>
                      <p className="text-sm text-muted-foreground">
                        Emotional attachment to people, things, or outcomes that causes suffering 
                        when they change or are lost.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg md:col-span-2">
                      <h4 className="font-medium mb-2">Ahankar (Ego)</h4>
                      <p className="text-sm text-muted-foreground">
                        Pride and self-centeredness that creates separation from God and others. 
                        It is the root cause of all other evils.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nature of Reality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600" />
                Nature of Reality
              </CardTitle>
              <CardDescription>
                Sikh perspectives on the nature of existence, consciousness, and spiritual reality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Maya and Reality</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Maya (Illusion)</h4>
                      <p className="text-sm text-muted-foreground">
                        The world of material existence that appears real but is temporary and changing. 
                        It creates attachment and prevents realization of the divine.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">True Reality</h4>
                      <p className="text-sm text-muted-foreground">
                        The eternal, unchanging reality of God. Beyond the world of maya lies 
                        the true nature of existence - pure consciousness and bliss.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Transcending Maya</h4>
                      <p className="text-sm text-muted-foreground">
                        Through devotion, meditation, and righteous living, one can see through maya 
                        and realize the divine reality that underlies all existence.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Soul and Liberation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Atma (Soul)</h4>
                      <p className="text-sm text-muted-foreground">
                        The eternal soul that is a part of God. It is pure consciousness and 
                        is trapped in the cycle of birth and death due to karma and maya.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mukti (Liberation)</h4>
                      <p className="text-sm text-muted-foreground">
                        Freedom from the cycle of birth and death, achieved through union with God. 
                        The soul realizes its true nature and merges with the divine.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Jivan Mukta</h4>
                      <p className="text-sm text-muted-foreground">
                        One who is liberated while still living in the body. Such a person 
                        lives in the world but is not affected by its attachments and sufferings.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Sach Khand</h4>
                      <p className="text-sm text-muted-foreground">
                        The realm of truth, the highest spiritual state where the soul 
                        experiences complete union with God and eternal bliss.
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
          {/* Free Text Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Text Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/guru-granth-sahib`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Guru Granth Sahib
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/japji-sahib`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Japji Sahib
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/sikh-texts`}>
                    <Library className="mr-2 h-4 w-4" />
                    Sikh Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.srigranth.org" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    SriGranth.org
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
                  <Link href={`/${params.locale}/studies/sikh/practices`}>
                    <Search className="mr-2 h-4 w-4" />
                    Sikh Practices
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
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Concepts */}
          <Card>
            <CardHeader>
              <CardTitle>Key Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Ik Onkar</span>
                  <p className="text-sm">One God, the ultimate reality</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Waheguru</span>
                  <p className="text-sm">Wonderful Lord, divine wisdom</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Guru</span>
                  <p className="text-sm">Divine teacher and guide</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Hukam</span>
                  <p className="text-sm">Divine will and order</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Philosophical Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Deepen your understanding of Sikh philosophy through practice, study of sacred texts, 
          and exploration of the wisdom that has guided Sikhs for generations.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh/practices`}>
              <Search className="mr-2 h-5 w-5" />
              Learn Practices
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