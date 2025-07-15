import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CrossTextConnectionsService } from "@/lib/services/cross-text-connections"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe } from "lucide-react"
import Link from "next/link"

interface PrayerTraditionsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Prayer Traditions | Cross-Text Connections",
  description: "Explore the foundational prayer traditions across Quran, Bible, and Torah. Discover the Lord's Prayer, Al-Fatiha, and Priestly Blessing patterns.",
  keywords: "Prayer traditions, Lord's Prayer, Al-Fatiha, Priestly Blessing, Matthew 6:9, Quran 1:1, Numbers 6:24, Worship patterns, Spiritual practices, Divine communication"
}

export default async function PrayerTraditionsPage({ params }: PrayerTraditionsPageProps) {
  const connectionsService = new CrossTextConnectionsService()
  const connection = await connectionsService.getConnectionById('prayer-traditions')
  const relatedConnections = await connectionsService.getRelatedConnections('prayer-traditions')

  if (!connection) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Connection Not Found</h1>
          <Button asChild>
            <Link href={`/${params.locale}/sacred-texts/cross-connections`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Connections
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts/cross-connections`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cross-Text Connections
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Prayer</Badge>
        <h1 className="text-4xl font-bold mb-4">{connection.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          {connection.description}
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Bible
          </Badge>
          <Badge variant="outline">
            <ScrollText className="mr-1 h-3 w-3" />
            Quran
          </Badge>
          <Badge variant="outline">
            <Library className="mr-1 h-3 w-3" />
            Torah
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Verses */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sacred Prayers</CardTitle>
              <CardDescription>Compare the foundational prayer texts across traditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {connection.verses.bible && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Bible - {connection.verses.bible.reference}</h3>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-lg font-medium mb-2">{connection.verses.bible.text}</p>
                    <p className="text-sm text-muted-foreground">{connection.verses.bible.context}</p>
                  </div>
                </div>
              )}

              {connection.verses.quran && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ScrollText className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Quran - {connection.verses.quran.reference}</h3>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-lg font-medium mb-2 text-right" dir="rtl">
                      {connection.verses.quran.arabic}
                    </p>
                    <p className="text-lg font-medium mb-2">{connection.verses.quran.english}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Transliteration: {connection.verses.quran.transliteration}
                    </p>
                    <p className="text-sm text-muted-foreground">{connection.verses.quran.context}</p>
                  </div>
                </div>
              )}

              {connection.verses.torah && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Library className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-semibold">Torah - {connection.verses.torah.reference}</h3>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <p className="text-lg font-medium mb-2 text-right" dir="rtl">
                      {connection.verses.torah.hebrew}
                    </p>
                    <p className="text-lg font-medium mb-2">{connection.verses.torah.english}</p>
                    <p className="text-sm text-muted-foreground">{connection.verses.torah.context}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="significance" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="significance">Significance</TabsTrigger>
                  <TabsTrigger value="historical">Historical Context</TabsTrigger>
                  <TabsTrigger value="theological">Theological Implications</TabsTrigger>
                  <TabsTrigger value="study">Study Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="significance" className="space-y-4">
                  <p className="text-muted-foreground">{connection.significance}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Common Elements</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Divine praise and adoration</li>
                        <li>• Supplication and petition</li>
                        <li>• Blessing and benediction</li>
                        <li>• Communal worship patterns</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Distinctive Features</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Kingdom focus (Christian)</li>
                        <li>• Divine guidance (Islamic)</li>
                        <li>• Priestly blessing (Jewish)</li>
                        <li>• Different theological emphases</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="historical" className="space-y-4">
                  <p className="text-muted-foreground">{connection.historicalContext}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Ancient Origins</h4>
                      <p className="text-sm">Roots in ancient Near Eastern prayer traditions and liturgical practices</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Liturgical Development</h4>
                      <p className="text-sm">Evolution of formal prayer structures and communal worship patterns</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Cultural Adaptation</h4>
                      <p className="text-sm">Adaptation to different cultural contexts while maintaining core elements</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="theological" className="space-y-4">
                  <div className="space-y-4">
                    {connection.theologicalImplications.map((implication, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Implication {index + 1}</h4>
                        <p className="text-sm text-muted-foreground">{implication}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="study" className="space-y-4">
                  <div className="space-y-4">
                    {connection.studyNotes.map((note, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Study Note {index + 1}</h4>
                        <p className="text-sm text-muted-foreground">{note}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Themes */}
          <Card>
            <CardHeader>
              <CardTitle>Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {connection.themes.map((theme) => (
                  <Badge key={theme} variant="secondary">
                    {theme}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Connections */}
          <Card>
            <CardHeader>
              <CardTitle>Related Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {relatedConnections.map((related) => (
                  <Link
                    key={related.id}
                    href={`/${params.locale}/sacred-texts/cross-connections/${related.id}`}
                    className="block p-3 border rounded-lg hover:bg-muted transition-colors"
                  >
                    <h4 className="font-medium">{related.title}</h4>
                    <p className="text-sm text-muted-foreground">{related.description}</p>
                  </Link>
                ))}
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
                  <Link href={`/${params.locale}/studies/practice/prayer-traditions`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Prayer Studies
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/comparative/worship`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Worship Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/spiritual/communication`}>
                    <Users className="mr-2 h-4 w-4" />
                    Spiritual Communication
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Insights */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Additional Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Prayer Psychology</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore the psychological and spiritual benefits of structured prayer practices.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/psychology/prayer`}>
                  Explore Psychology
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <History className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Liturgical History</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trace the historical development of liturgical practices and prayer structures.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/history/liturgy`}>
                  Study Liturgy
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Contemporary Practice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn how these ancient prayer traditions continue to inspire modern spiritual practice.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/modern/practice`}>
                  Modern Practice
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore more cross-text connections and deepen your understanding of spiritual practices across traditions.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/cross-connections/messianic-prophecies`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Messianic Prophecies
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/cross-connections`}>
              <Globe className="mr-2 h-5 w-5" />
              All Connections
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 