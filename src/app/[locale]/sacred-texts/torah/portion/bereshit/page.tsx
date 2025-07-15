import React from 'react'
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Locale } from '@/config/i18n'
import Link from "next/link"
import { ChevronLeft, ChevronRight, BookOpen, Search, BookMarked, Users, Calendar, ScrollText, Eye, EyeOff } from "lucide-react"
import { torahService } from "@/lib/services/torah-service"

interface BereshitPortionPageProps {
  params: {
    locale: Locale
  }
}

export default async function BereshitPortionPage({ params }: BereshitPortionPageProps) {
  // Get Bereshit portion information
  const portion = await torahService.getPortion('bereshit')
  if (!portion) {
    notFound()
  }

  // Get all chapters for this portion
  const chapters = portion.chapters
  const allVerses: { [chapter: string]: any[] } = {}

  // Fetch verses for each chapter
  for (const chapter of chapters) {
    try {
      const verses = await torahService.getChapter('bereshit', chapter, 'ENGLISH')
      allVerses[chapter] = verses
    } catch (error) {
      console.error(`Error fetching chapter ${chapter}:`, error)
      allVerses[chapter] = []
    }
  }

  // Get book information
  const bookInfo = await torahService.getBook('Bereshit')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="outline" asChild size="sm">
            <Link href={`/${params.locale}/sacred-texts/torah/bereshit`}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Bereshit
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm">
            <Link href={`/${params.locale}/sacred-texts/torah`}>
              <BookMarked className="h-4 w-4 mr-2" />
              All Torah Books
            </Link>
          </Button>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{portion.hebrewName} - {portion.name}</h1>
          <h2 className="text-2xl text-muted-foreground mb-4">{portion.transliteratedName}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            {portion.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {portion.themes.map((theme) => (
              <Badge key={theme} variant="secondary">{theme}</Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">{portion.verses}</div>
              <div className="text-sm text-muted-foreground">Verses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{chapters.length}</div>
              <div className="text-sm text-muted-foreground">Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{portion.book}</div>
              <div className="text-sm text-muted-foreground">Book</div>
            </div>
          </div>
        </div>
      </div>

      {/* Haftarah Information */}
      {portion.haftarah && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScrollText className="h-5 w-5" />
              Haftarah
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-2">{portion.haftarah}</p>
            <p className="text-sm text-muted-foreground">
              The Haftarah is a selection from the Prophets that is read in synagogue following the Torah portion.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Torah Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Torah Text</h2>
        
        {chapters.map((chapter) => (
          <Card key={chapter} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Chapter {chapter}
              </CardTitle>
              <CardDescription>
                {portion.name} {chapter} - {allVerses[chapter]?.length || 0} verses
              </CardDescription>
            </CardHeader>
            <CardContent>
              {allVerses[chapter] && allVerses[chapter].length > 0 ? (
                <div className="space-y-6">
                  {allVerses[chapter].map((verse, index) => {
                    // Check if there's any meaningful commentary
                    const hasCommentary = verse.commentary || verse.rashi || verse.ibnEzra || verse.rambam || verse.chabad || verse.artscroll
                    
                    return (
                    <div key={index} className="border-b border-muted pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{verse.reference}</h3>
                        <Badge variant="outline">Verse {index + 1}</Badge>
                      </div>
                      
                                              <Tabs defaultValue="hebrew" className="w-full">
                          <TabsList className={`grid w-full ${hasCommentary ? 'grid-cols-3' : 'grid-cols-2'}`}>
                            <TabsTrigger value="hebrew">Hebrew</TabsTrigger>
                            <TabsTrigger value="english">English</TabsTrigger>
                            {hasCommentary && <TabsTrigger value="commentary">Commentary</TabsTrigger>}
                          </TabsList>
                        
                        <TabsContent value="hebrew" className="mt-4">
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p 
                              className="text-lg text-right leading-relaxed" 
                              dir="rtl"
                              dangerouslySetInnerHTML={{ 
                                __html: verse.hebrewText || '<span class="text-muted-foreground">[Hebrew not available]</span>' 
                              }}
                            />
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="english" className="mt-4">
                          <div className="bg-muted/50 rounded-lg p-4">
                            <p 
                              className="text-lg leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: verse.englishText ? `"${verse.englishText}"` : '<span class="text-muted-foreground">[English not available]</span>' 
                              }}
                            />
                          </div>
                        </TabsContent>
                        

                        
                        {hasCommentary && (
                          <TabsContent value="commentary" className="mt-4">
                            <div className="space-y-4">
                              {verse.commentary && (
                                <div>
                                  <h4 className="font-semibold mb-2">General Commentary</h4>
                                  <p className="text-sm text-muted-foreground">{verse.commentary}</p>
                                </div>
                              )}
                              {verse.rashi && (
                                <div>
                                  <h4 className="font-semibold mb-2">Rashi</h4>
                                  <p className="text-sm text-muted-foreground">{verse.rashi}</p>
                                </div>
                              )}
                              {verse.ibnEzra && (
                                <div>
                                  <h4 className="font-semibold mb-2">Ibn Ezra</h4>
                                  <p className="text-sm text-muted-foreground">{verse.ibnEzra}</p>
                                </div>
                              )}
                              {verse.rambam && (
                                <div>
                                  <h4 className="font-semibold mb-2">Rambam</h4>
                                  <p className="text-sm text-muted-foreground">{verse.rambam}</p>
                                </div>
                              )}
                              {verse.chabad && (
                                <div>
                                  <h4 className="font-semibold mb-2">Chabad</h4>
                                  <p className="text-sm text-muted-foreground">{verse.chabad}</p>
                                </div>
                              )}
                              {verse.artscroll && (
                                <div>
                                  <h4 className="font-semibold mb-2">ArtScroll</h4>
                                  <p className="text-sm text-muted-foreground">{verse.artscroll}</p>
                                </div>
                              )}
                            </div>
                          </TabsContent>
                        )}
                      </Tabs>
                    </div>
                  )})}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No verses available for this chapter.</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Study Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search This Portion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Search for specific words or phrases within this Torah portion.</p>
              <Button asChild size="sm">
                <Link href="/torah/search">Search Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Join Discussion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Join Torah study groups and discuss this portion with others.</p>
              <Button asChild size="sm">
                <Link href="/studies/torah">Join Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Reading Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Follow a structured reading plan for this Torah portion.</p>
              <Button asChild size="sm">
                <Link href="/studies/reading-plans">View Plans</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Related Portions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Explore other Torah portions and their connections.</p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/sacred-texts/torah`}>Browse All</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href={`/${params.locale}/sacred-texts/torah/bereshit`}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Bereshit
          </Link>
        </Button>
        
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/${params.locale}/sacred-texts/torah/portion/noach`}>
              Next: Noach
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 