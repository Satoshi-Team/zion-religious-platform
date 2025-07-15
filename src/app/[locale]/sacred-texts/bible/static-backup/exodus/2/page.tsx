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
    title: `Exodus ${params.chapter} - Bible | ZION.FM`,
    description: "Explore sacred scriptures from various religions",
    keywords: ["Bible", "Exodus", "Sacred Texts", "Christianity"],
    openGraph: {
      title: `Exodus ${params.chapter} - Bible`,
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
      book: 'Exodus',
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
            <Link href={`/${params.locale}/sacred-texts/bible/exodus`} className="hover:text-foreground">
              Exodus
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Chapter {chapterNumber}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link href={`/${params.locale}/sacred-texts/bible/exodus`}>
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
                      Now a man from the house of Levi went and married a daughter of Levi.
                    </p>
                  </div>
                  <div key={2} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      2
                    </span>
                    <p className="flex-1 leading-relaxed">
                      The woman conceived and bore a son; and when she saw that he was beautiful, she hid him for three months.
                    </p>
                  </div>
                  <div key={3} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      3
                    </span>
                    <p className="flex-1 leading-relaxed">
                      But when she could hide him no longer, she got him a wicker basket and covered it over with tar and pitch. Then she put the child into it and set it among the reeds by the bank of the Nile.
                    </p>
                  </div>
                  <div key={4} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      4
                    </span>
                    <p className="flex-1 leading-relaxed">
                      His sister stood at a distance to find out what would happen to him.
                    </p>
                  </div>
                  <div key={5} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      5
                    </span>
                    <p className="flex-1 leading-relaxed">
                      The daughter of Pharaoh came down to bathe at the Nile, with her maidens walking alongside the Nile; and she saw the basket among the reeds and sent her maid, and she brought it to her.
                    </p>
                  </div>
                  <div key={6} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      6
                    </span>
                    <p className="flex-1 leading-relaxed">
                      When she opened it, she saw the child, and behold, the boy was crying. And she had pity on him and said, "This is one of the Hebrews' children."
                    </p>
                  </div>
                  <div key={7} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      7
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then his sister said to Pharaoh's daughter, "Shall I go and call a nurse for you from the Hebrew women that she may nurse the child for you?"
                    </p>
                  </div>
                  <div key={8} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      8
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Pharaoh's daughter said to her, "Go ahead." So the girl went and called the child's mother.
                    </p>
                  </div>
                  <div key={9} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      9
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then Pharaoh's daughter said to her, "Take this child away and nurse him for me and I will give you your wages." So the woman took the child and nursed him.
                    </p>
                  </div>
                  <div key={10} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      10
                    </span>
                    <p className="flex-1 leading-relaxed">
                      The child grew, and she brought him to Pharaoh's daughter and he became her son. And she named him Moses, and said, "Because I drew him out of the water."
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
                      Thus the heavens and the earth were completed, and all their hosts.
                    </p>
                  </div>
                  <div key={2} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      2
                    </span>
                    <p className="flex-1 leading-relaxed">
                      By the seventh day God completed His work which He had done.
                    </p>
                  </div>
                  <div key={3} className="flex gap-4">
                    <span className="font-semibold text-muted-foreground min-w-[3rem]">
                      3
                    </span>
                    <p className="flex-1 leading-relaxed">
                      Then God blessed the seventh day and sanctified it.
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
            <Link href={`/${params.locale}/sacred-texts/bible/exodus/${chapterNumber - 1}`}>
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
          <Link href={`/${params.locale}/sacred-texts/bible/exodus/${chapterNumber + 1}`}>
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
