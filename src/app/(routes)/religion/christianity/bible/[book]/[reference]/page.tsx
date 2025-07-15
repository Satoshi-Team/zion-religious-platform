import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { bibleService, TRANSLATIONS } from "@/lib/services/bible-service"
import { BibleVerse } from "@/types/bible"
import { TranslationSelector } from "@/components/bible/translation-selector"
import { ParallelVerses } from "@/components/bible/parallel-verses"

interface Props {
  params: {
    book: string
    reference: string
  }
  searchParams: {
    translation?: string
  }
}

export function generateStaticParams() {
  // Define the books and references you want to pre-render
  const books = [
    "genesis", "exodus", "leviticus", "numbers", "deuteronomy",
    "matthew", "mark", "luke", "john", "acts",
    "romans", "corinthians", "galatians", "ephesians", "philippians",
    "colossians", "thessalonians", "timothy", "titus", "philemon",
    "hebrews", "james", "peter", "john", "jude", "revelation"
  ]
  
  const references = Array.from({ length: 150 }, (_, i) => (i + 1).toString())
  
  return books.flatMap(book => 
    references.map(reference => ({
      book,
      reference
    }))
  )
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { book, reference } = params
  const translation = searchParams.translation || "NIV"
  const title = `${reference} | ${book.charAt(0).toUpperCase() + book.slice(1)}`
  
  return {
    title,
    description: `Read and study ${reference} from the book of ${book} in ${translation}`,
    openGraph: {
      title,
      description: `Read and study ${reference} from the book of ${book} in ${translation}`,
      type: "website",
    },
  }
}

export default async function BibleVersePage({ params, searchParams }: Props) {
  const { book, reference } = params
  const translation = searchParams.translation || "NIV"
  
  // Fetch verse in primary translation
  const verse = await bibleService.getVerse(reference, translation)
  
  // Fetch parallel translations
  const parallelVerses = await bibleService.getParallelVerses(reference, ["NIV", "ESV", "KJV"])
  
  // Fetch commentary
  const commentaries = await bibleService.getCommentary(reference)

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{verse.reference}</h1>
        <div className="flex items-center gap-4">
          <p className="text-xl text-muted-foreground">
            {book.charAt(0).toUpperCase() + book.slice(1)}
          </p>
          <TranslationSelector defaultValue={translation} />
        </div>
      </div>

      <Tabs defaultValue="text" className="space-y-4">
        <TabsList>
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="parallel">Parallel</TabsTrigger>
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
          <TabsTrigger value="cross-references">Cross References</TabsTrigger>
          <TabsTrigger value="study-notes">Study Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Scripture</CardTitle>
              <CardDescription>
                {verse.reference} - {verse.translation}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg italic">
                "{verse.text}"
              </div>
              {verse.context && (
                <div className="text-sm text-muted-foreground">
                  {verse.context}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parallel" className="space-y-8">
          <ParallelVerses
            reference={reference}
            initialVerses={parallelVerses}
            availableTranslations={TRANSLATIONS.map(t => t.id)}
          />
        </TabsContent>

        <TabsContent value="commentary" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Commentary</CardTitle>
              <CardDescription>
                Theological insights and historical context
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {commentaries.length > 0 ? (
                commentaries.map((commentary, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{commentary.author}</h3>
                      <span className="text-sm text-muted-foreground">
                        {commentary.source}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{commentary.text}</p>
                    {commentary.date && (
                      <p className="text-sm text-muted-foreground">
                        {commentary.date}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No commentary available for this verse.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cross-references" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Cross References</CardTitle>
              <CardDescription>
                Related passages that help understand this verse
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {verse.crossReferences && verse.crossReferences.length > 0 ? (
                verse.crossReferences.map((ref, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <Link 
                      href={`/religion/christianity/bible/${ref.reference.split(" ")[0].toLowerCase()}/${ref.reference}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {ref.reference}
                    </Link>
                    <p className="mt-2 italic">"{ref.text}"</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No cross references available for this verse.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study-notes" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Study Notes</CardTitle>
              <CardDescription>
                Additional insights and study resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">Historical Context</h3>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Understanding the historical and cultural background of this passage.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">Theological Significance</h3>
                  <p className="text-sm mt-2 text-muted-foreground">
                    Key theological themes and their implications.
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">Application</h3>
                  <p className="text-sm mt-2 text-muted-foreground">
                    How this passage applies to our lives today.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Christianity Navigation</CardTitle>
          <CardDescription>
            Explore related topics in Christianity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Core Teachings</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/teachings/christianity/trinity" className="text-primary hover:underline">
                    The Trinity
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/church" className="text-primary hover:underline">
                    The Church
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/salvation" className="text-primary hover:underline">
                    Salvation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-read-the-bible" className="text-primary hover:underline">
                    How to Read the Bible
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Theology</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/theology/pneumatology" className="text-primary hover:underline">
                    Pneumatology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/christology" className="text-primary hover:underline">
                    Christology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/ecclesiology" className="text-primary hover:underline">
                    Ecclesiology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/soteriology" className="text-primary hover:underline">
                    Soteriology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Traditions</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/orthodox" className="text-primary hover:underline">
                    Orthodox Christianity
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/lutheran" className="text-primary hover:underline">
                    Lutheran Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/churches-of-christ" className="text-primary hover:underline">
                    Churches of Christ
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/assyrian-church" className="text-primary hover:underline">
                    Assyrian Church
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">History</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/history/early-church" className="text-primary hover:underline">
                    Early Church History
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/history/reformation" className="text-primary hover:underline">
                    The Reformation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/christian-creeds-and-confessions" className="text-primary hover:underline">
                    Christian Creeds
                  </Link>
                </li>
                <li>
                  <Link href="/blog/who-is-the-holy-spirit" className="text-primary hover:underline">
                    Who Is the Holy Spirit?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 