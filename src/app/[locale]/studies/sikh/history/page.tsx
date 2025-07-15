import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye, Calendar, MapPin, User } from "lucide-react"
import Link from "next/link"

interface SikhHistoryPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Sikh History | Studies",
  description: "Explore the rich history of Sikhism from its origins with Guru Nanak to its development through the ten Gurus and its modern global presence.",
  keywords: "Sikh history, Guru Nanak, ten Gurus, Sikh Empire, Sikh diaspora, historical development, Sikh community"
}

export default function SikhHistoryPage({ params }: SikhHistoryPageProps) {
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
        <Badge variant="secondary" className="mb-4">Sikh History</Badge>
        <h1 className="text-4xl font-bold mb-4">Sikh History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Journey through the rich historical development of Sikhism, from the life of Guru Nanak 
          to the establishment of a global community with a unique spiritual and cultural identity.
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
            Ten Gurus
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Life of Guru Nanak */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Life of Guru Nanak
              </CardTitle>
              <CardDescription>
                The founder of Sikhism and his spiritual journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="early-life" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="early-life">Early Life</TabsTrigger>
                  <TabsTrigger value="enlightenment">Enlightenment</TabsTrigger>
                  <TabsTrigger value="travels">Travels</TabsTrigger>
                  <TabsTrigger value="teachings">Teachings</TabsTrigger>
                </TabsList>

                <TabsContent value="early-life" className="space-y-4">
                  <p className="text-muted-foreground">
                    Guru Nanak was born in 1469 in the village of Talwandi (now Nankana Sahib, Pakistan) 
                    to Hindu parents. From an early age, he showed signs of spiritual wisdom and questioning nature.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Birth and Family</h4>
                      <p className="text-sm text-muted-foreground">
                        Born to Mehta Kalu and Mata Tripta, Guru Nanak was the eldest of two children. 
                        His sister, Bibi Nanaki, was his lifelong supporter and first disciple.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Early Education</h4>
                      <p className="text-sm text-muted-foreground">
                        He learned Sanskrit, Persian, and Arabic, and showed great interest in 
                        spiritual matters rather than worldly pursuits.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Marriage and Family</h4>
                      <p className="text-sm text-muted-foreground">
                        Married Sulakhni at age 16, and they had two sons: Sri Chand and Lakhmi Das. 
                        However, his spiritual calling was stronger than family life.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Employment</h4>
                      <p className="text-sm text-muted-foreground">
                        Worked as an accountant for the local Muslim ruler, where he gained 
                        experience with different religious communities.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="enlightenment" className="space-y-4">
                  <p className="text-muted-foreground">
                    At age 30, Guru Nanak experienced a profound spiritual awakening that 
                    transformed his life and led to the founding of Sikhism.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Divine Call</h4>
                      <p className="text-sm text-muted-foreground">
                        While bathing in the Bein River, Guru Nanak disappeared for three days. 
                        When he returned, he proclaimed, "There is no Hindu, there is no Muslim."
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Divine Commission</h4>
                      <p className="text-sm text-muted-foreground">
                        He received a divine commission to spread the message of one God and 
                        the path of truthful living to all humanity.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">First Disciple</h4>
                      <p className="text-sm text-muted-foreground">
                        Bhai Mardana, a Muslim musician, became his first disciple and companion, 
                        accompanying him on his spiritual journeys.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mission Begins</h4>
                      <p className="text-sm text-muted-foreground">
                        He began his mission to spread the message of unity, equality, and 
                        devotion to the one God who is beyond all religious labels.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="travels" className="space-y-4">
                  <p className="text-muted-foreground">
                    Guru Nanak undertook four major journeys (Udasis) covering thousands of miles 
                    across India, Sri Lanka, Tibet, and the Middle East.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">First Udasi (1500-1506)</h4>
                      <p className="text-sm text-muted-foreground">
                        Traveled east to Bengal, Assam, and Sri Lanka, spreading his message 
                        and establishing communities of followers.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Second Udasi (1506-1513)</h4>
                      <p className="text-sm text-muted-foreground">
                        Journeyed south to Tamil Nadu and Kerala, reaching as far as Sri Lanka. 
                        He challenged caste discrimination and religious superstitions.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Third Udasi (1514-1518)</h4>
                      <p className="text-sm text-muted-foreground">
                        Traveled north to Kashmir, Ladakh, and Tibet, spreading his message 
                        in the Himalayan regions.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Fourth Udasi (1519-1521)</h4>
                      <p className="text-sm text-muted-foreground">
                        Journeyed west to Mecca, Medina, and Baghdad, challenging religious orthodoxy 
                        and promoting universal brotherhood.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="teachings" className="space-y-4">
                  <p className="text-muted-foreground">
                    Guru Nanak's teachings formed the foundation of Sikhism, emphasizing 
                    monotheism, equality, and righteous living.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Ik Onkar</h4>
                      <p className="text-sm text-muted-foreground">
                        The fundamental teaching of one God who is formless, eternal, and all-pervading. 
                        This God is beyond all religious labels and divisions.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Equality</h4>
                      <p className="text-sm text-muted-foreground">
                        All human beings are equal before God, regardless of caste, creed, gender, or religion. 
                        He challenged the caste system and promoted social equality.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Three Pillars</h4>
                      <p className="text-sm text-muted-foreground">
                        Nam Japna (remembering God), Kirat Karni (honest work), and Vand Chakna (sharing with others). 
                        These form the foundation of Sikh practice.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Langar</h4>
                      <p className="text-sm text-muted-foreground">
                        The practice of serving free meals to all, promoting equality and community. 
                        This tradition continues in every Gurdwara today.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* The Ten Gurus */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                The Ten Gurus
              </CardTitle>
              <CardDescription>
                The succession of spiritual masters who guided Sikhism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Nanak (1469-1539)</h3>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Founder of Sikhism. Established the basic principles and practices. 
                      Composed Japji Sahib and other hymns. Appointed Guru Angad as his successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Angad (1504-1552)</h3>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Developed the Gurmukhi script for writing Punjabi. Established langar tradition. 
                      Composed 62 hymns. Appointed Guru Amar Das as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Amar Das (1479-1574)</h3>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Established the Manji system for spreading Sikhism. Composed Anand Sahib. 
                      Promoted equality for women. Appointed Guru Ram Das as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Ram Das (1534-1581)</h3>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Founded Amritsar and began construction of Harmandir Sahib (Golden Temple). 
                      Composed Lavan (wedding hymns). Appointed Guru Arjan as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Arjan (1563-1606)</h3>
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Compiled the Adi Granth (first version of Guru Granth Sahib). Completed Harmandir Sahib. 
                      Martyred by Mughal Emperor Jahangir. Appointed Guru Hargobind as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Hargobind (1595-1644)</h3>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Introduced the concept of Miri-Piri (temporal and spiritual authority). 
                      Built Akal Takht. Established Sikh military tradition. Appointed Guru Har Rai as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Har Rai (1630-1661)</h3>
                  <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Maintained peace with Mughals while strengthening Sikh community. 
                      Established medical clinics. Appointed Guru Har Krishan as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Har Krishan (1656-1664)</h3>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Youngest Guru (8 years old). Provided spiritual guidance during smallpox epidemic. 
                      Died at age 8. Appointed Guru Tegh Bahadur as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Tegh Bahadur (1621-1675)</h3>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Martyred defending religious freedom of Hindus. Composed many hymns. 
                      Established Anandpur Sahib. Appointed Guru Gobind Singh as successor.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Guru Gobind Singh (1666-1708)</h3>
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Founded the Khalsa (1699). Established the Five Ks. Compiled final version of Guru Granth Sahib. 
                      Declared Guru Granth Sahib as the eternal Guru. Martyred in 1708.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Historical Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-600" />
                Historical Development
              </CardTitle>
              <CardDescription>
                Major periods and events in Sikh history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Formation Period (1469-1708)</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Foundation</h4>
                      <p className="text-sm text-muted-foreground">
                        Guru Nanak established the basic principles and practices of Sikhism, 
                        emphasizing monotheism, equality, and righteous living.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Institutional Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Successive Gurus developed institutions like langar, Gurdwaras, and 
                        the compilation of sacred texts.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Khalsa Foundation</h4>
                      <p className="text-sm text-muted-foreground">
                        Guru Gobind Singh created the Khalsa in 1699, establishing a distinct 
                        Sikh identity and military tradition.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Sikh Empire (1799-1849)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Maharaja Ranjit Singh</h4>
                      <p className="text-sm text-muted-foreground">
                        Unified Sikh misls and established the Sikh Empire, ruling from 1799 to 1839. 
                        Known for religious tolerance and military prowess.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Territorial Expansion</h4>
                      <p className="text-sm text-muted-foreground">
                        Empire extended from the Khyber Pass to the Sutlej River, including 
                        present-day Punjab, Kashmir, and parts of Afghanistan.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Cultural Flourishing</h4>
                      <p className="text-sm text-muted-foreground">
                        Period of great cultural and artistic achievement, including the 
                        beautification of Harmandir Sahib with gold.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">British Annexation</h4>
                      <p className="text-sm text-muted-foreground">
                        After the Anglo-Sikh Wars (1845-1849), the Sikh Empire was annexed 
                        by the British East India Company.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Modern Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Colonial Period</h4>
                      <p className="text-sm text-muted-foreground">
                        Sikhs served in the British Indian Army and contributed significantly 
                        to India's independence movement.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Partition</h4>
                      <p className="text-sm text-muted-foreground">
                        The 1947 partition of India and Pakistan displaced millions of Sikhs, 
                        with many migrating to India and other countries.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Global Diaspora</h4>
                      <p className="text-sm text-muted-foreground">
                        Sikhs have established communities worldwide, particularly in the UK, 
                        Canada, USA, and Australia.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Contemporary Challenges</h4>
                      <p className="text-sm text-muted-foreground">
                        Sikhs continue to face challenges related to identity, discrimination, 
                        and maintaining their distinct religious and cultural heritage.
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
                  <Link href={`/${params.locale}/sacred-texts/sikh/historical-texts`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Historical Texts
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/sikh/biographies`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Guru Biographies
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
                  <Link href={`/${params.locale}/studies/sikh/practices`}>
                    <Search className="mr-2 h-4 w-4" />
                    Sikh Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/sikh/beginner`}>
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
                  <span className="text-sm font-medium text-muted-foreground">1469-1539</span>
                  <p className="text-sm">Guru Nanak</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1539-1708</span>
                  <p className="text-sm">Successive Gurus</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1699</span>
                  <p className="text-sm">Khalsa Founded</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1799-1849</span>
                  <p className="text-sm">Sikh Empire</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1849-1947</span>
                  <p className="text-sm">British Rule</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">1947-Present</span>
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
          that have shaped Sikh history and continue to inspire millions today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Study Philosophy
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