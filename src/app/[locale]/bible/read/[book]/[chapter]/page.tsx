import { notFound } from "next/navigation"
import { BibleReader } from "@/components/bible/bible-reader"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { getBibleChapter, getAllBibleBooks } from "@/lib/bible-text-enhanced"
import { bibleEnhancedService } from "@/lib/services/bible-enhanced-service"
import { BibleChapter } from "@/lib/bible-text-data"
import { Metadata } from "next"

interface BibleChapterPageProps {
  params: {
    book: string
    chapter: string
    locale: string
  }
}

export async function generateMetadata({ params }: BibleChapterPageProps): Promise<Metadata> {
  const { book, chapter } = params
  const chapterNumber = parseInt(chapter)
  
  if (isNaN(chapterNumber) || chapterNumber < 1) {
    return {
      title: "Chapter Not Found",
      description: "The requested Bible chapter could not be found."
    }
  }

  try {
    const bookInfo = await bibleEnhancedService.getBookInfo(book)
    if (!bookInfo) {
      return {
        title: "Book Not Found",
        description: "The requested Bible book could not be found."
      }
    }

    if (!bibleEnhancedService.isValidChapter(book, chapterNumber)) {
      return {
        title: "Chapter Not Found",
        description: `Chapter ${chapterNumber} does not exist in ${bookInfo.name}.`
      }
    }

    const chapterSummary = await bibleEnhancedService.getChapterSummary(book, chapterNumber)
    
    return {
      title: `${bookInfo.name} Chapter ${chapterNumber} - Bible`,
      description: chapterSummary,
      keywords: [bookInfo.name, "Bible", "Scripture", "Christian", bookInfo.testament + " Testament"],
      openGraph: {
        title: `${bookInfo.name} Chapter ${chapterNumber}`,
        description: chapterSummary,
        type: "article"
      }
    }
  } catch (error) {
  return {
      title: "Bible Chapter",
      description: "Read the Bible online with multiple translations."
    }
  }
}

export default async function BibleChapterPage({ params }: BibleChapterPageProps) {
  const { book, chapter } = params
  const chapterNumber = parseInt(chapter)

  // Validate chapter number
  if (isNaN(chapterNumber) || chapterNumber < 1) {
    notFound()
  }

  // Validate book and chapter
  if (!bibleEnhancedService.isValidBook(book)) {
    notFound()
  }

  if (!bibleEnhancedService.isValidChapter(book, chapterNumber)) {
    notFound()
  }
  
  let chapterData: BibleChapter | null = null
  let bookInfo: any = null

  // Get book information
  bookInfo = await bibleEnhancedService.getBookInfo(book)
  if (!bookInfo) {
    notFound()
  }

  // Try to get chapter from enhanced service
  const verses = await bibleEnhancedService.getChapter(book, chapterNumber, 'WEB')
      
      if (verses && verses.length > 0) {
    // Convert service response to expected format
        chapterData = {
          number: chapterNumber,
      name: `${bookInfo.name} Chapter ${chapterNumber}`,
      book: bookInfo.name,
      testament: bookInfo.testament,
          verses: verses.length,
          versesData: verses.map(verse => ({
            number: parseInt(verse.reference.split(':')[1]),
            text: verse.text,
            translation: verse.translation || 'WEB',
            commentary: verse.commentary
          })),
      summary: await bibleEnhancedService.getChapterSummary(book, chapterNumber),
          themes: [],
          keyVerses: []
    }
  }

  if (!chapterData) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Bible", href: "/sacred-texts/bible" },
    { label: bookInfo.name, href: `/sacred-texts/bible/${book}` },
    { label: `Chapter ${chapterNumber}`, href: `/sacred-texts/bible/${book}/${chapterNumber}` }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <BibleReader chapter={chapterData} />
    </div>
  )
} 
