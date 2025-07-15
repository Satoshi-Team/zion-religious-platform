import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n-fixed'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Locale } from '@/config/i18n'
import { ChevronLeft, BookOpen, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

interface BookPageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  
  return {
    title: `1 Samuel - Bible | ZION.FM`,
    description: 'Explore the Book of 1 Samuel with commentaries and study tools.',
    keywords: ['Bible', '1 Samuel', 'Sacred Texts', 'Christianity', 'Old Testament'],
    openGraph: {
      title: `1 Samuel - Bible`,
      description: 'Explore the Book of 1 Samuel with commentaries and study tools.',
      type: 'website',
    },
  }
}

export default async function BookPage({ params }: BookPageProps) {
  
  const chapters = Array.from({ length: 31 }, (_, i) => i + 1)
  
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
              Bible
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">1 Samuel</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href={`/${params.locale}/sacred-texts/bible`}>
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Bible
            </Button>
          </Link>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">1 Samuel</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Old Testament</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Historical Books</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Chapters: 31</span>
            </div>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Book Overview</CardTitle>
          <CardDescription>
            Introduction to the Book of 1 Samuel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p>
              The First Book of Samuel covers the transition from the period of judges to the establishment of the monarchy, including the stories of Samuel, Saul, and the early years of David.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {chapters.map((chapter) => (
              <Link key={chapter} href={`/${params.locale}/sacred-texts/bible/1-samuel/${chapter}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-semibold">{chapter}</div>
                    <div className="text-xs text-muted-foreground">Chapter</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <p className="text-sm text-muted-foreground">Explore related content and resources</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/${params.locale}/teachings`}>
              <Button variant="outline">
                {t('common.navigation.teachings')}
              </Button>
            </Link>
            <Link href={`/${params.locale}/studies`}>
              <Button variant="outline">
                {t('common.navigation.studies')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
