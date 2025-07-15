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
    title: `Matthew ${params.chapter} - Bible | ZION.FM`,
    description: "Explore sacred scriptures from various religions",
    keywords: ["Bible", "Matthew", "Sacred Texts", "Christianity"],
    openGraph: {
      title: `Matthew ${params.chapter} - Bible`,
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
      book: 'Matthew',
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
            <Link href={`/${params.locale}/sacred-texts/bible/matthew`} className="hover:text-foreground">
              Matthew
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Chapter {chapterNumber}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href={`/${params.locale}/sacred-texts/bible/matthew`}>
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
                      The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham.
                    </p>
                  </div>
                  <div key={2} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      2
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Abraham was the father of Isaac, Isaac the father of Jacob, and Jacob the father of Judah and his brothers.
                    </p>
                  </div>
                  <div key={3} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      3
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Judah was the father of Perez and Zerah by Tamar, Perez was the father of Hezron, and Hezron the father of Ram.
                    </p>
                  </div>
                  <div key={4} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      4
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Ram was the father of Amminadab, Amminadab the father of Nahshon, and Nahshon the father of Salmon.
                    </p>
                  </div>
                  <div key={5} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      5
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Salmon was the father of Boaz by Rahab, Boaz was the father of Obed by Ruth, and Obed the father of Jesse.
                    </p>
                  </div>
                  <div key={6} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      6
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Jesse was the father of David the king. David was the father of Solomon by Bathsheba who had been the wife of Uriah.
                    </p>
                  </div>
                  <div key={7} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      7
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Solomon was the father of Rehoboam, Rehoboam the father of Abijah, and Abijah the father of Asa.
                    </p>
                  </div>
                  <div key={8} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      8
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Asa was the father of Jehoshaphat, Jehoshaphat the father of Joram, and Joram the father of Uzziah.
                    </p>
                  </div>
                  <div key={9} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      9
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Uzziah was the father of Jotham, Jotham the father of Ahaz, and Ahaz the father of Hezekiah.
                    </p>
                  </div>
                  <div key={10} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      10
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Hezekiah was the father of Manasseh, Manasseh the father of Amon, and Amon the father of Josiah.
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
                    This chapter contains sacred teachings and divine wisdom from the Holy Scriptures.
                  </p>
                </div>
                <div key={2} className="flex gap-4">
                  <span className="font-semibold text-muted-foreground min-w-[3rem]">
                    2
                  </span>
                  <p className="flex-1 leading-relaxed">
                    The verses reveal God's guidance for righteous living and spiritual growth.
                  </p>
                </div>
                <div key={3} className="flex gap-4">
                  <span className="font-semibold text-muted-foreground min-w-[3rem]">
                    3
                  </span>
                  <p className="flex-1 leading-relaxed">
                    Through careful study and meditation, we discover deeper spiritual truths.
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
            <Link href={`/${params.locale}/sacred-texts/bible/matthew/${chapterNumber - 1}`}>
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
          <Link href={`/${params.locale}/sacred-texts/bible/matthew/${chapterNumber + 1}`}>
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
