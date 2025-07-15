import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Share2, Bookmark, Info } from 'lucide-react'
import Link from 'next/link'
import { getQuranSurah, getAllQuranSurahs } from '@/lib/quran-complete-data'

interface QuranChapterPageProps {
  params: {
    locale: string
    chapter: string
  }
}

export default function QuranChapterPage({ params }: QuranChapterPageProps) {
  const chapterNumber = parseInt(params.chapter)
  const chapter = getQuranSurah(chapterNumber)
  const allChapters = getAllQuranSurahs()

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
            <Link href={`/${params.locale}/sacred-texts/quran`} className="hover:text-foreground">
              Quran
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">Chapter {chapter.surahNumber}</li>
        </ol>
      </nav>

      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href={`/${params.locale}/sacred-texts/quran`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Quran
            </Button>
          </Link>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
              {chapter.name.arabic}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {chapter.name.english}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {chapter.name.transliteration}
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Chapter {chapter.surahNumber}</span>
              <span>•</span>
              <span>{chapter.versesCount} verses</span>
              <span>•</span>
              <span>{chapter.revelationType}</span>
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
                <BookOpen className="h-5 w-5 text-emerald-600" />
                Chapter {chapter.surahNumber}: {chapter.name.english}
              </CardTitle>
              <CardDescription>
                {chapter.name.transliteration} • {chapter.versesCount} verses • {chapter.revelationType}
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
                    {chapter.description}
                  </p>
                </div>

                {/* Bismillah */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                  <p className="text-center text-gray-600 dark:text-gray-400 italic text-xl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-2">
                    In the name of Allah, the Entirely Merciful, the Especially Merciful
                  </p>
                </div>
                
                {/* Verses */}
                <div className="space-y-8">
                  {chapter.verses.map((verse) => (
                    <div key={verse.verseNumber} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                          <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                            {verse.verseNumber}
                          </span>
                        </div>
                        <div className="flex-1 space-y-4">
                          {/* Arabic Text */}
                          <div className="text-right">
                            <p className="text-2xl leading-relaxed text-gray-900 dark:text-gray-100 font-arabic">
                              {verse.arabicText}
                            </p>
                          </div>
                          
                          {/* English Translation */}
                          <div>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                              {verse.englishTranslation}
                            </p>
                          </div>
                          
                          {/* Transliteration */}
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                              {verse.transliteration}
                            </p>
                          </div>
                          
                          {/* Tafsir */}
                          {verse.tafsir && (
                            <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 p-3 rounded">
                              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Tafsir:</strong> {verse.tafsir}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data Quality Notice */}
                {chapter.verses.some(verse => verse.arabicText.includes('[')) && (
                  <div className="mt-8 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 rounded">
                    <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      Data Status
                    </h3>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      This chapter contains placeholder data for some verses. Complete verse data is being added progressively.
                    </p>
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
              {chapter.surahNumber > 1 && (
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/quran/${chapter.surahNumber - 1}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous Chapter
                  </Link>
                </Button>
              )}
              {chapter.surahNumber < allChapters.length && (
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/quran/${chapter.surahNumber + 1}`}>
                    Next Chapter
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Chapter Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Chapter Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Number:</span>
                <p className="text-sm">{chapter.surahNumber}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Name:</span>
                <p className="text-sm">{chapter.name.english}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Arabic:</span>
                <p className="text-sm font-arabic">{chapter.name.arabic}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Verses:</span>
                <p className="text-sm">{chapter.versesCount}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Revelation:</span>
                <p className="text-sm">{chapter.revelationType}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Bookmark className="h-4 w-4 mr-2" />
                Bookmark Chapter
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="h-4 w-4 mr-2" />
                Share Chapter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 