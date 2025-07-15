"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Bookmark, Share2, Info, BookOpen } from "lucide-react"
import { BibleChapter } from "@/lib/bible-text-data"

interface BibleReaderProps {
  book: string
  chapter: BibleChapter
  verses: {
    verse: number
    text: string
    commentary?: string
  }[]
}

export function BibleReader({ book, chapter, verses }: BibleReaderProps) {
  const [selectedVerses, setSelectedVerses] = useState<number[]>([])

  const toggleVerse = (verse: number) => {
    setSelectedVerses(prev =>
      prev.includes(verse)
        ? prev.filter(v => v !== verse)
        : [...prev, verse]
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-2">
            {book}
          </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              Chapter {chapter.number}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {chapter.name}
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>{chapter.verses} verses</span>
              <span>•</span>
              <span>{chapter.testament} Testament</span>
              <span>•</span>
              <span>{chapter.themes.length} themes</span>
            </div>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                {book} Chapter {chapter.number}: {chapter.name}
              </CardTitle>
              <CardDescription>
                {chapter.testament} Testament • {chapter.verses} verses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {/* Chapter Summary */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Chapter Summary
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    {chapter.summary}
                  </p>
                </div>

                {/* Historical Context */}
                {chapter.historicalContext && (
                  <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 rounded mb-6">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      Historical Context
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      {chapter.historicalContext}
                    </p>
                  </div>
                )}
                
                {/* Verses */}
                <div className="space-y-6">
                  {verses.map(({ verse, text, commentary }) => (
                    <div key={verse} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                            {verse}
                          </span>
                        </div>
                        <div className="flex-1 space-y-3">
                          {/* Bible Text */}
                          <div>
                            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
                              {text}
                            </p>
                          </div>
                          
                          {/* Commentary */}
                          {commentary && (
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-3 rounded">
                              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Commentary:</strong> {commentary}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
          </div>
        ))}
                </div>

                {/* Chapter Themes */}
                <div className="mt-8 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 p-4 rounded">
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    Key Themes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {chapter.themes.map((theme) => (
                      <Badge key={theme} variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Verses */}
                {chapter.keyVerses.length > 0 && (
                  <div className="mt-6 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 rounded">
                    <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Key Verses
                    </h3>
                    <ul className="space-y-1">
                      {chapter.keyVerses.map((keyVerse) => (
                        <li key={keyVerse} className="text-orange-700 dark:text-orange-300 text-sm flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          {keyVerse}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Chapter
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Next Chapter
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Bookmark className="h-4 w-4 mr-2" />
                Bookmark
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </CardContent>
          </Card>

          {/* Chapter Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                Chapter Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Testament:</span>
                <p className="text-sm">{chapter.testament}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Verses:</span>
                <p className="text-sm">{chapter.verses}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Themes:</span>
                <p className="text-sm">{chapter.themes.length}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{chapter.verses}</p>
                  <p className="text-xs text-gray-500">Verses</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{chapter.themes.length}</p>
                  <p className="text-xs text-gray-500">Themes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 