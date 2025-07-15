import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n-fixed'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, BookOpen, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { type Locale } from '@/config/i18n'

interface BookPageProps {
  params: {
    locale: Locale
    book: string
  }
}

const BIBLE_BOOKS = {
  'genesis': { name: 'Genesis', chapters: 50 },
  'exodus': { name: 'Exodus', chapters: 40 },
  'leviticus': { name: 'Leviticus', chapters: 27 },
  'numbers': { name: 'Numbers', chapters: 36 },
  'deuteronomy': { name: 'Deuteronomy', chapters: 34 },
  'joshua': { name: 'Joshua', chapters: 24 },
  'judges': { name: 'Judges', chapters: 21 },
  'ruth': { name: 'Ruth', chapters: 4 },
  '1-samuel': { name: '1 Samuel', chapters: 31 },
  '2-samuel': { name: '2 Samuel', chapters: 24 },
  '1-kings': { name: '1 Kings', chapters: 22 },
  '2-kings': { name: '2 Kings', chapters: 25 },
  '1-chronicles': { name: '1 Chronicles', chapters: 29 },
  '2-chronicles': { name: '2 Chronicles', chapters: 36 },
  'ezra': { name: 'Ezra', chapters: 10 },
  'nehemiah': { name: 'Nehemiah', chapters: 13 },
  'esther': { name: 'Esther', chapters: 10 },
  'job': { name: 'Job', chapters: 42 },
  'psalms': { name: 'Psalms', chapters: 150 },
  'proverbs': { name: 'Proverbs', chapters: 31 },
  'ecclesiastes': { name: 'Ecclesiastes', chapters: 12 },
  'song-of-solomon': { name: 'Song of Solomon', chapters: 8 },
  'isaiah': { name: 'Isaiah', chapters: 66 },
  'jeremiah': { name: 'Jeremiah', chapters: 52 },
  'lamentations': { name: 'Lamentations', chapters: 5 },
  'ezekiel': { name: 'Ezekiel', chapters: 48 },
  'daniel': { name: 'Daniel', chapters: 12 },
  'hosea': { name: 'Hosea', chapters: 14 },
  'joel': { name: 'Joel', chapters: 3 },
  'amos': { name: 'Amos', chapters: 9 },
  'obadiah': { name: 'Obadiah', chapters: 1 },
  'jonah': { name: 'Jonah', chapters: 4 },
  'micah': { name: 'Micah', chapters: 7 },
  'nahum': { name: 'Nahum', chapters: 3 },
  'habakkuk': { name: 'Habakkuk', chapters: 3 },
  'zephaniah': { name: 'Zephaniah', chapters: 3 },
  'haggai': { name: 'Haggai', chapters: 2 },
  'zechariah': { name: 'Zechariah', chapters: 14 },
  'malachi': { name: 'Malachi', chapters: 4 },
  'matthew': { name: 'Matthew', chapters: 28 },
  'mark': { name: 'Mark', chapters: 16 },
  'luke': { name: 'Luke', chapters: 24 },
  'john': { name: 'John', chapters: 21 },
  'acts': { name: 'Acts', chapters: 28 },
  'romans': { name: 'Romans', chapters: 16 },
  '1-corinthians': { name: '1 Corinthians', chapters: 16 },
  '2-corinthians': { name: '2 Corinthians', chapters: 13 },
  'galatians': { name: 'Galatians', chapters: 6 },
  'ephesians': { name: 'Ephesians', chapters: 6 },
  'philippians': { name: 'Philippians', chapters: 4 },
  'colossians': { name: 'Colossians', chapters: 4 },
  '1-thessalonians': { name: '1 Thessalonians', chapters: 5 },
  '2-thessalonians': { name: '2 Thessalonians', chapters: 3 },
  '1-timothy': { name: '1 Timothy', chapters: 6 },
  '2-timothy': { name: '2 Timothy', chapters: 4 },
  'titus': { name: 'Titus', chapters: 3 },
  'philemon': { name: 'Philemon', chapters: 1 },
  'hebrews': { name: 'Hebrews', chapters: 13 },
  'james': { name: 'James', chapters: 5 },
  '1-peter': { name: '1 Peter', chapters: 5 },
  '2-peter': { name: '2 Peter', chapters: 3 },
  '1-john': { name: '1 John', chapters: 5 },
  '2-john': { name: '2 John', chapters: 1 },
  '3-john': { name: '3 John', chapters: 1 },
  'jude': { name: 'Jude', chapters: 1 },
  'revelation': { name: 'Revelation', chapters: 22 }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale)
  const bookInfo = BIBLE_BOOKS[params.book as keyof typeof BIBLE_BOOKS]
  
  return {
    title: `${bookInfo?.name || params.book} - Bible | ZION.FM`,
    description: "Explore sacred scriptures from various religions",
    keywords: ["Bible", bookInfo?.name || params.book, "Sacred Texts", "Christianity"],
    openGraph: {
      title: `${bookInfo?.name || params.book} - Bible`,
      description: "Explore sacred scriptures from various religions",
      type: 'website',
    },
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const bookInfo = BIBLE_BOOKS[params.book as keyof typeof BIBLE_BOOKS]

  if (!bookInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground">
            The book "{params.book}" was not found.
          </p>
        </div>
      </div>
    )
  }

  // Generate chapter numbers
  const chapters = Array.from({ length: bookInfo.chapters }, (_, i) => i + 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href={`/${params.locale}`} className="hover:text-foreground">
              {t('common.navigation.home')}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${params.locale}/sacred-texts`} className="hover:text-foreground">
              {t('common.navigation.sacredTexts')}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${params.locale}/sacred-texts/bible`} className="hover:text-foreground">
              {t('common.navigation.bible')}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">{bookInfo.name}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href={`/${params.locale}/sacred-texts/bible`}>
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Bible
            </Button>
          </Link>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 ml-2" />
              Bookmark
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {bookInfo.name}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{t('common.navigation.bible')}</span>
            </div>
            <span>•</span>
            <span>{bookInfo.chapters} chapters</span>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chapters</CardTitle>
          <CardDescription>
            Select a chapter to read
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-2">
            {chapters.map((chapter) => (
              <Button
                key={chapter}
                variant="outline"
                size="sm"
                asChild
                className="h-12"
              >
                <Link href={`/${params.locale}/sacred-texts/bible/${params.book}/${chapter}`}>
                  {chapter}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 