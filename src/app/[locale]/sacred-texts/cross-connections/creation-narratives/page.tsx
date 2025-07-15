import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CrossTextConnectionsService } from "@/lib/services/cross-text-connections"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe } from "lucide-react"
import Link from "next/link"

interface CreationNarrativesPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Creation Narratives | Cross-Text Connections",
  description: "Explore the foundational creation narratives across Quran, Bible, and Torah. Discover shared themes, theological insights, and the universal understanding of divine creation.",
  keywords: "Creation narratives, Genesis 1:1, Quran 2:255, Torah creation, Divine creation, Biblical creation, Islamic creation, Jewish creation, Comparative creation stories, Religious cosmology"
}

export default async function CreationNarrativesPage({ params }: CreationNarrativesPageProps) {
  const connectionsService = new CrossTextConnectionsService()
  const connection = await connectionsService.getConnectionById('creation-narratives')
  const relatedConnections = await connectionsService.getRelatedConnections('creation-narratives')

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
        <Badge variant="secondary" className="mb-4">Creation</Badge>
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
              <CardTitle>Sacred Verses</CardTitle>
              <CardDescription>Compare the creation narratives across traditions</CardDescription>
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
                  <Link href={`/${params.locale}/sacred-texts/bible`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Bible Study
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/quran`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Quran Study
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/torah`}>
                    <Library className="mr-2 h-4 w-4" />
                    Torah Study
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/comparative/creation`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Comparative Study
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* Call to Action */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore more cross-text connections and deepen your understanding of the shared wisdom across religious traditions.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/cross-connections/monotheistic-declarations`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Monotheistic Declarations
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