import React from 'react'
import { notFound } from "next/navigation"
import { AudioPlayer } from "./player"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { bibleService } from "@/lib/services/bible-service"
import { Metadata } from "next"

interface AudioPageProps {
  params: {
    book: string
    chapter: string
  }
  searchParams: Record<string, string | string[] | undefined>
}

export function generateStaticParams() {
  // Define the books and their chapter counts
  const books = [
    { name: "genesis", chapters: 50 },
    { name: "exodus", chapters: 40 },
    { name: "leviticus", chapters: 27 },
    { name: "numbers", chapters: 36 },
    { name: "deuteronomy", chapters: 34 },
    { name: "matthew", chapters: 28 },
    { name: "mark", chapters: 16 },
    { name: "luke", chapters: 24 },
    { name: "john", chapters: 21 },
    { name: "acts", chapters: 28 },
    { name: "romans", chapters: 16 },
    { name: "corinthians", chapters: 16 },
    { name: "galatians", chapters: 6 },
    { name: "ephesians", chapters: 6 },
    { name: "philippians", chapters: 4 },
    { name: "colossians", chapters: 4 },
    { name: "thessalonians", chapters: 5 },
    { name: "timothy", chapters: 6 },
    { name: "titus", chapters: 3 },
    { name: "philemon", chapters: 1 },
    { name: "hebrews", chapters: 13 },
    { name: "james", chapters: 5 },
    { name: "peter", chapters: 5 },
    { name: "john", chapters: 5 },
    { name: "jude", chapters: 1 },
    { name: "revelation", chapters: 22 }
  ]
  
  return books.flatMap(book => 
    Array.from({ length: book.chapters }, (_, i) => ({
      book: book.name,
      chapter: (i + 1).toString()
    }))
  )
}

export async function generateMetadata({ params }: AudioPageProps): Promise<Metadata> {
  const { book, chapter } = params
  
  return {
    title: `${book.charAt(0).toUpperCase() + book.slice(1)} Chapter ${chapter} Audio | Bible Reading`,
    description: `Listen to ${book.charAt(0).toUpperCase() + book.slice(1)} Chapter ${chapter} from the Bible.`
  }
}

export default async function AudioPage({ params }: AudioPageProps) {
  const { book, chapter } = params

  try {
    const chapterData = await bibleService.getChapter(book, parseInt(chapter))

    const breadcrumbItems = [
      { label: "Bible", href: "/bible" },
      { label: "Read", href: "/bible/read" },
      { label: book, href: `/bible/read/${book}` },
      { label: `Chapter ${chapter}`, href: `/bible/read/${book}/${chapter}` },
      { label: "Audio" }
    ]

    return (
      <div className="container mx-auto py-6 space-y-6">
        <Breadcrumbs items={breadcrumbItems} />
        <AudioPlayer params={params} />
      </div>
    )
  } catch (error) {
    console.error("Error loading chapter audio:", error)
    notFound()
  }
} 