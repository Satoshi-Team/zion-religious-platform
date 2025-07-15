import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CrossTextConnectionsService, CrossTextConnection, CrossTextTheme } from "@/lib/services/cross-text-connections"
import { BookOpen, ScrollText, Library, Search, ExternalLink, Lightbulb, Users, Globe } from "lucide-react"
import Link from "next/link"

interface CrossConnectionsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Cross-Text Connections | Sacred Texts",
  description: "Explore the profound connections between Quran, Bible, and Torah texts. Discover shared themes, parallel passages, and interfaith insights across Abrahamic traditions.",
  keywords: "Cross-text connections, Interfaith study, Quran Bible Torah parallels, Abrahamic traditions, Comparative religion, Sacred text analysis, Religious harmony, Interfaith dialogue"
}

export default async function CrossConnectionsPage({ params }: CrossConnectionsPageProps) {
  const connectionsService = new CrossTextConnectionsService()
  const connections = await connectionsService.getKeyConnections()
  const themes = await connectionsService.getCrossTextThemes()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cross-Text Connections</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Discover the profound connections between sacred texts across Abrahamic traditions. 
          Explore shared themes, parallel passages, and the universal wisdom that unites our spiritual heritage.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-sm">
            <BookOpen className="mr-1 h-3 w-3" />
            Bible
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <ScrollText className="mr-1 h-3 w-3" />
            Quran
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Library className="mr-1 h-3 w-3" />
            Torah
          </Badge>
        </div>
      </div>

      {/* Key Connections Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Key Cross-Text Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connections.map((connection) => (
            <Card key={connection.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{connection.title}</CardTitle>
                  <Badge variant="outline">{connection.category}</Badge>
                </div>
                <CardDescription>{connection.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {connection.verses.bible && (
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-sm">Bible</span>
                      </div>
                      <p className="text-sm font-medium">{connection.verses.bible.reference}</p>
                      <p className="text-sm text-muted-foreground">{connection.verses.bible.text}</p>
                    </div>
                  )}
                  {connection.verses.quran && (
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <ScrollText className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-sm">Quran</span>
                      </div>
                      <p className="text-sm font-medium">{connection.verses.quran.reference}</p>
                      <p className="text-sm text-muted-foreground">{connection.verses.quran.english}</p>
                    </div>
                  )}
                  {connection.verses.torah && (
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Library className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-sm">Torah</span>
                      </div>
                      <p className="text-sm font-medium">{connection.verses.torah.reference}</p>
                      <p className="text-sm text-muted-foreground">{connection.verses.torah.english}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {connection.themes.map((theme) => (
                    <Badge key={theme} variant="secondary" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/${params.locale}/sacred-texts/cross-connections/${connection.id}`}>
                    <Search className="mr-2 h-4 w-4" />
                    Explore Connection
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Thematic Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Thematic Analysis</h2>
        <Tabs defaultValue={themes[0]?.id} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <TabsTrigger key={theme.id} value={theme.id}>
                {theme.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {themes.map((theme) => (
            <TabsContent key={theme.id} value={theme.id} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{theme.name}</h3>
                  <p className="text-muted-foreground mb-4">{theme.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Significance</h4>
                      <p className="text-sm text-muted-foreground">{theme.significance}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Study Resources</h4>
                      <div className="space-y-2">
                        {theme.studyResources.map((resource) => (
                          <Link
                            key={resource.title}
                            href={resource.url}
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {resource.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Related Connections</h4>
                  <div className="space-y-2">
                    {theme.connections.map((connection) => (
                      <Link
                        key={connection.id}
                        href={`/${params.locale}/sacred-texts/cross-connections/${connection.id}`}
                        className="block p-3 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <h5 className="font-medium">{connection.title}</h5>
                        <p className="text-sm text-muted-foreground">{connection.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Separator className="my-12" />

      {/* Interfaith Insights */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Interfaith Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Shared Wisdom</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Discover the universal spiritual principles that transcend religious boundaries and unite humanity in shared values.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/comparative/wisdom`}>
                  Explore Shared Wisdom
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Dialogue & Understanding</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn how comparative study of sacred texts can foster interfaith dialogue and mutual understanding.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/interfaith/dialogue`}>
                  Learn About Dialogue
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Global Perspective</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Gain a global perspective on religious traditions and their contributions to human civilization.
              </p>
              <Button asChild variant="outline">
                <Link href={`/${params.locale}/studies/global/religions`}>
                  Explore Global Traditions
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Study Tools */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Study Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href={`/${params.locale}/sacred-texts/bible`}>
              <BookOpen className="h-6 w-6" />
              <span>Bible Study</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href={`/${params.locale}/sacred-texts/quran`}>
              <ScrollText className="h-6 w-6" />
              <span>Quran Study</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href={`/${params.locale}/sacred-texts/torah`}>
              <Library className="h-6 w-6" />
              <span>Torah Study</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2">
            <Link href={`/${params.locale}/studies/comparative`}>
              <Search className="h-6 w-6" />
              <span>Comparative Study</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Interfaith Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore the rich tapestry of sacred texts and discover the profound connections that unite our spiritual traditions. 
          Start with any connection above or dive deeper into individual texts.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/cross-connections/creation-narratives`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Start with Creation
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Studies
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 