'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, BookOpen, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { RelatedText, VerseInterlinks } from '@/types/related-texts'

interface RelatedTextsDisplayProps {
  interlinks: VerseInterlinks
  currentTextType: 'quran' | 'bible' | 'torah'
  currentReference: string
  className?: string
}

export function RelatedTextsDisplay({ 
  interlinks, 
  currentTextType, 
  currentReference, 
  className = '' 
}: RelatedTextsDisplayProps) {
  if (!interlinks || interlinks.relatedTexts.length === 0) {
    return null
  }

  const getTextTypeIcon = (type: string) => {
    switch (type) {
      case 'quran':
        return '☪️'
      case 'bible':
        return '✝️'
      case 'torah':
        return '✡️'
      case 'external':
        return <ExternalLink className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  const getTextTypeColor = (type: string) => {
    switch (type) {
      case 'quran':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'bible':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'torah':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'external':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'direct':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'thematic':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'historical':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      case 'prophetic':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      case 'parallel':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const generateLink = (relatedText: RelatedText) => {
    if (relatedText.url) {
      return relatedText.url
    }

    // Generate internal links based on reference
    const [textType, reference] = relatedText.reference.split(' ')
    if (!textType || !reference) return '#'

    switch (textType.toLowerCase()) {
      case 'quran':
        const [surah, ayah] = reference.split(':')
        return `/sacred-texts/quran/${surah}/${ayah}`
      case 'bible':
        const [book, chapterVerse] = reference.split(' ')
        const [chapter, verse] = chapterVerse.split(':')
        return `/sacred-texts/bible/${book.toLowerCase()}/${chapter}/${verse}`
      case 'torah':
        const [torahBook, torahChapterVerse] = reference.split(' ')
        const [torahChapter, torahVerse] = torahChapterVerse.split(':')
        return `/sacred-texts/torah/${torahBook.toLowerCase()}/${torahChapter}/${torahVerse}`
      default:
        return '#'
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* SEO Description */}
      {interlinks.seoDescription && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Cross-Text Connections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900 dark:text-blue-100 leading-relaxed">
              {interlinks.seoDescription}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Related Texts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Related Sacred Texts
            <Badge variant="secondary" className="ml-2">
              {interlinks.relatedTexts.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {interlinks.relatedTexts.map((relatedText, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTextTypeIcon(relatedText.type)}</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getTextTypeColor(relatedText.type)}>
                        {relatedText.type.toUpperCase()}
                      </Badge>
                      <Badge className={getRelevanceColor(relatedText.relevance)}>
                        {relatedText.relevance}
                      </Badge>
                      <span className="font-semibold text-sm text-muted-foreground">
                        {relatedText.reference}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg">{relatedText.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {relatedText.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {relatedText.keywords.slice(0, 4).map((keyword, keywordIndex) => (
                        <Badge key={keywordIndex} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={generateLink(relatedText)}>
                      View Text
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Cross References */}
      {interlinks.crossReferences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LinkIcon className="w-5 h-5" />
              Direct Cross-References
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interlinks.crossReferences.map((reference, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {reference}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Themes */}
      {interlinks.themes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Thematic Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interlinks.themes.map((theme, index) => (
                <Badge key={index} variant="outline" className="capitalize">
                  {theme}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* SEO Keywords */}
      {interlinks.keywords.length > 0 && (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 dark:text-green-200">
              SEO Keywords & Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interlinks.keywords.map((keyword, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-green-700 dark:text-green-300 border-green-300 dark:border-green-700"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Separator />

      {/* Footer with additional resources */}
      <div className="text-center text-sm text-muted-foreground">
        <p>
          Explore these connections to deepen your understanding of sacred texts across religious traditions.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/sacred-texts" className="text-primary hover:underline">
            All Sacred Texts
          </Link>
          <Link href="/studies/comparative" className="text-primary hover:underline">
            Comparative Studies
          </Link>
          <Link href="/resources/interfaith" className="text-primary hover:underline">
            Interfaith Resources
          </Link>
        </div>
      </div>
    </div>
  )
} 