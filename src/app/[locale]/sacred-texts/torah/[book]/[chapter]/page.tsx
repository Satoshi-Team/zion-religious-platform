import React from 'react'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, BookOpen, Share2, Bookmark, Info, Star } from 'lucide-react'
import Link from 'next/link'
import { getTorahChapter, getAllTorahBooks } from '@/lib/torah-text-data'

interface TorahChapterPageProps {
  params: {
    locale: string
    book: string
    chapter: string
  }
}

export default function TorahChapterPage({ params }: TorahChapterPageProps) {
  const bookNumber = parseInt(params.book)
  const chapterNumber = parseInt(params.chapter)
  const allBooks = getAllTorahBooks()
  
  // Get book by number (1-5)
  const book = allBooks[bookNumber - 1]
  if (!book) {
    notFound()
  }

  const chapter = getTorahChapter(book.name, chapterNumber)
  if (!chapter) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href={`/${params.locale}/sacred-texts`} className="hover:text-foreground">
              Sacred Texts
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${params.locale}/sacred-texts/torah`} className="hover:text-foreground">
              Torah
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${params.locale}/sacred-texts/torah/${bookNumber}`} className="hover:text-foreground">
              {book.englishName}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">Chapter {chapter.number}</li>
        </ol>
      </nav>

      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href={`/${params.locale}/sacred-texts/torah/${bookNumber}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {book.englishName}
            </Button>
          </Link>
        </div>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-200 mb-2">
              {chapter.hebrewName}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {book.englishName} Chapter {chapter.number}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {chapter.name}
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>{chapter.verses} verses</span>
              <span>•</span>
              <span>{chapter.parsha || 'No Parasha'}</span>
              <span>•</span>
              <span>Aliyah {chapter.aliyah || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-amber-600" />
                {book.englishName} Chapter {chapter.number}: {chapter.name}
              </CardTitle>
              <CardDescription>
                {chapter.hebrewName} • {chapter.verses} verses • {chapter.parsha || 'No Parasha'}
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
                
                {/* Verses */}
                <div className="space-y-8">
                  {chapter.versesData.map((verse) => (
                    <div key={verse.number} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                          <span className="text-amber-700 dark:text-amber-300 font-semibold text-sm">
                            {verse.number}
                          </span>
                        </div>
                        <div className="flex-1 space-y-4">
                          {/* Hebrew Text */}
                          <div className="text-right">
                            <p 
                              className="text-2xl leading-relaxed text-gray-900 dark:text-gray-100 font-hebrew"
                              dangerouslySetInnerHTML={{ 
                                __html: verse.hebrew || '<span class="text-muted-foreground">[Hebrew not available]</span>' 
                              }}
                            />
                          </div>
                          
                          {/* English Translation */}
                          <div>
                            <p 
                              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                              dangerouslySetInnerHTML={{ 
                                __html: verse.english || '<span class="text-muted-foreground">[English not available]</span>' 
                              }}
                            />
                          </div>
                          

                          
                          {/* Commentary */}
                          {verse.commentary && (
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-3 rounded">
                              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Commentary:</strong> {verse.commentary}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chapter Themes */}
                <div className="mt-8 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 rounded">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    Key Themes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {chapter.themes.map((theme) => (
                      <Badge key={theme} variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Parasha Information */}
                {chapter.parsha && (
                  <div className="mt-6 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500 p-4 rounded">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                      Weekly Torah Portion
                    </h3>
                    <div className="space-y-2">
                      <p className="text-purple-700 dark:text-purple-300">
                        <strong>Parasha:</strong> {chapter.parsha}
                      </p>
                      {chapter.aliyah && (
                        <p className="text-purple-700 dark:text-purple-300">
                          <strong>Aliyah:</strong> {chapter.aliyah}
                        </p>
                      )}
                    </div>
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
              {chapterNumber > 1 && (
                <Link href={`/${params.locale}/sacred-texts/torah/${bookNumber}/${chapterNumber - 1}`}>
                  <Button variant="outline" className="w-full justify-start">
                    ← Chapter {chapterNumber - 1}
                  </Button>
                </Link>
              )}
              {chapterNumber < book.chapters && (
                <Link href={`/${params.locale}/sacred-texts/torah/${bookNumber}/${chapterNumber + 1}`}>
                  <Button variant="outline" className="w-full justify-start">
                    Chapter {chapterNumber + 1} →
                  </Button>
                </Link>
              )}
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
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Book:</span>
                <p className="text-sm">{book.englishName}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Hebrew Name:</span>
                <p className="text-sm">{book.hebrewName}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Verses:</span>
                <p className="text-sm">{chapter.verses}</p>
              </div>
              {chapter.parsha && (
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Parasha:</span>
                  <p className="text-sm">{chapter.parsha}</p>
                </div>
              )}
              {chapter.aliyah && (
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Aliyah:</span>
                  <p className="text-sm">{chapter.aliyah}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Book Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                {book.englishName} Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Hebrew Name:</span>
                <p className="text-sm">{book.hebrewName}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Chapters:</span>
                <p className="text-sm">{book.chapters}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Themes:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {book.keyThemes.slice(0, 3).map((theme) => (
                    <Badge key={theme} variant="outline" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
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
                  <p className="text-2xl font-bold text-amber-600">{chapter.verses}</p>
                  <p className="text-xs text-gray-500">Verses</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600">{chapter.themes.length}</p>
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