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

interface MonotheisticDeclarationsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Monotheistic Declarations | Cross-Text Connections",
  description: "Explore the core monotheistic declarations across Quran, Bible, and Torah. Discover the Shema, al-Ikhlas, and Jesus' affirmation of divine unity.",
  keywords: "Monotheistic declarations, Shema, al-Ikhlas, Mark 12:29, Deuteronomy 6:4, Quran 112, Divine unity, Monotheism, Religious identity, Faith declarations"
}

export default async function MonotheisticDeclarationsPage({ params }: MonotheisticDeclarationsPageProps) {
  const connectionsService = new CrossTextConnectionsService()
  const connection = await connectionsService.getConnectionById('monotheistic-declarations')
  const relatedConnections = await connectionsService.getRelatedConnections('monotheistic-declarations')

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
        <Badge variant="secondary" className="mb-4">Monotheism</Badge>
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
              <CardTitle>Sacred Declarations</CardTitle>
              <CardDescription>Compare the foundational monotheistic statements across traditions</CardDescription>
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
                      <h4 className="font-medium mb-2">Unifying Elements</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Absolute divine unity</li>
                        <li>• Rejection of polytheism</li>
                        <li>• Central faith declarations</li>
                        <li>• Religious identity markers</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Distinctive Emphases</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Covenantal relationship (Jewish)</li>
                        <li>• Divine transcendence (Islamic)</li>
                        <li>• Christological affirmation (Christian)</li>
                        <li>• Different theological priorities</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="historical" className="space-y-4">
                  <p className="text-muted-foreground">{connection.historicalContext}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Ancient Context</h4>
                      <p className="text-sm">Emergence in polytheistic environments where monotheism was revolutionary</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Religious Identity</h4>
                      <p className="text-sm">Statements that defined religious communities and distinguished them from others</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Cultural Impact</h4>
                      <p className="text-sm">Influence on art, literature, and daily religious practice across centuries</p>
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
                  <Link href={`/${params.locale}/studies/theology/monotheism`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Monotheism Studies
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/comparative/faith-declarations`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Faith Declarations
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/interfaith/dialogue`}>
                    <Users className="mr-2 h-4 w-4" />
                    Interfaith Dialogue
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
                <CardTitle>Theological Unity</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore how these declarations establish theological unity while respecting distinctive traditions.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/theology/unity`}>
                  Explore Unity
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
                <CardTitle>Historical Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Trace the historical development of monotheistic thought and its impact on religious history.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/history/monotheism`}>
                  Study History
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
                <CardTitle>Modern Relevance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Understand the contemporary significance of these declarations in our diverse world.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/modern/relevance`}>
                  Modern Context
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
          Explore more cross-text connections and deepen your understanding of the shared monotheistic heritage.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/cross-connections/prayer-traditions`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Prayer Traditions
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