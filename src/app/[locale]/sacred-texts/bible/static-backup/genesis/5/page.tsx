import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n-fixed'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, BookOpen, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import { type Locale } from '@/config/i18n'
import { bibleWebService } from '@/lib/services/bible-web-service'

interface ChapterPageProps {
  params: {
    locale: Locale
    chapter: string
  }
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale)
  
  return {
    title: `Genesis ${params.chapter} - Bible | ZION.FM`,
    description: "Explore sacred scriptures from various religions",
    keywords: ["Bible", "Genesis", "Sacred Texts", "Christianity"],
    openGraph: {
      title: `Genesis ${params.chapter} - Bible`,
      description: "Explore sacred scriptures from various religions",
      type: 'website',
    },
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const translations = await getTranslations(params.locale)
  const chapterNumber = parseInt(params.chapter)
  
  // Fetch chapter content from Bible service
  let chapterContent = null
  let error = null
  
  try {
    chapterContent = await bibleWebService.getChapter({
      book: 'Genesis',
      chapter: chapterNumber,
      translation: 'WEB'
    })
  } catch (err) {
    console.error('Error fetching chapter content:', err)
    error = err
  }
  
  // Create a translation function that matches the expected interface
  const t = (key: string): string => {
    const keys = key.split('.')
    let value = translations
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

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
          <li>
            <Link href={`/${params.locale}/sacred-texts/bible/genesis`} className="hover:text-foreground">
              Genesis
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Chapter {chapterNumber}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href={`/${params.locale}/sacred-texts/bible/genesis`}>
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
                                  <div key={1} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      1
                    </span>
                    <p className="flex-1 leading-relaxed">
                      This is the book of the generations of Adam. In the day when God created man, He made him in the likeness of God.
                    </p>
                  </div>
                  <div key={2} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      2
                    </span>
                    <p className="flex-1 leading-relaxed">
                      He created them male and female, and He blessed them and named them Man in the day when they were created.
                    </p>
                  </div>
                  <div key={3} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      3
                    </span>
                    <p className="flex-1 leading-relaxed">
                      When Adam had lived one hundred and thirty years, he became the father of a son in his own likeness, according to his image, and named him Seth.
                    </p>
                  </div>
                  <div key={4} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      4
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then the days of Adam after he became the father of Seth were eight hundred years, and he had other sons and daughters.
                    </p>
                  </div>
                  <div key={5} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      5
                    </span>
                    <p className="flex-1 leading-relaxed">
                      So all the days that Adam lived were nine hundred and thirty years, and he died.
                    </p>
                  </div>
                  <div key={6} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      6
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Seth lived one hundred and five years, and became the father of Enosh.
                    </p>
                  </div>
                  <div key={7} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      7
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then Seth lived eight hundred and seven years after he became the father of Enosh, and he had other sons and daughters.
                    </p>
                  </div>
                  <div key={8} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      8
                    </span>
                    <p className="flex-1 leading-relaxed">
                      So all the days of Seth were nine hundred and twelve years, and he died.
                    </p>
                  </div>
                  <div key={9} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      9
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Enosh lived ninety years, and became the father of Kenan.
                    </p>
                  </div>
                  <div key={10} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      10
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then Enosh lived eight hundred and fifteen years after he became the father of Kenan, and he had other sons and daughters.
                    </p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Chapter Content</CardTitle>
          <CardDescription>
            Read the chapter content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            {error ? (
              <div className="space-y-4">
                                  <div key={1} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      1
                    </span>
                    <p className="flex-1 leading-relaxed">
                      This chapter contains important teachings and narratives from the Holy Scriptures.
                    </p>
                  </div>
                  <div key={2} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      2
                    </span>
                    <p className="flex-1 leading-relaxed">
                      The verses in this chapter provide guidance and wisdom for daily living.
                    </p>
                  </div>
                  <div key={3} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      3
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Through careful study and reflection, we can find deeper meaning in these sacred texts.
                    </p>
                  </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mb-8">
        <div>
          {chapterNumber > 1 && (
            <Link href={`/${params.locale}/sacred-texts/bible/genesis/${chapterNumber - 1}`}>
              <Button variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Chapter
              </Button>
            </Link>
          )}
        </div>
        
        <div className="text-sm text-muted-foreground">
          Chapter {chapterNumber}
        </div>
        
        <div>
          <Link href={`/${params.locale}/sacred-texts/bible/genesis/${chapterNumber + 1}`}>
            <Button variant="outline">
              Next Chapter
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Study Resources</CardTitle>
          <CardDescription>
            Explore related study materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={`/${params.locale}/teachings`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{t('common.navigation.teachingsTitle')}</h4>
                  <p className="text-sm text-muted-foreground">{t('common.navigation.teachingsDescription')}</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href={`/${params.locale}/studies`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{t('common.navigation.studiesTitle')}</h4>
                  <p className="text-sm text-muted-foreground">{t('common.navigation.studiesDescription')}</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link href={`/${params.locale}/resources`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{t('common.navigation.resources')}</h4>
                  <p className="text-sm text-muted-foreground">{t('resources.description')}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
