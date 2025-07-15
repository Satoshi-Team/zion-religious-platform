import { Metadata } from 'next'
import { getTranslations } from '@/lib/i18n-fixed'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, BookOpen, Users, Calendar } from 'lucide-react'
import Link from 'next/link'
import { type Locale } from '@/config/i18n'

interface BookPageProps {
  params: {
    locale: Locale
    }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  
  return {
    title: `Genesis - Bible | ${'ZION.FM' || 'ZION.FM'}`,
    description: 'Explore sacred scriptures from various religions' || 'Explore sacred scriptures from various religions',
    keywords: ['Bible', 'Genesis', 'Sacred Texts' || 'Sacred Texts', 'Christianity'],
    openGraph: {
      title: `Genesis - Bible`,
      description: 'Explore sacred scriptures from various religions' || 'Explore sacred scriptures from various religions',
      type: 'website',
    },
  }
}

export default async function BookPage({ params }: BookPageProps) {
  
  const chapters = Array.from({ length: 50 }, (_, i) => i + 1)
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
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
              {'Sacred Texts' || 'Sacred Texts'}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/${params.locale}/sacred-texts/bible`} className="hover:text-foreground">
              Bible
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">Genesis</li>
        </ol>
      </nav>

      {/* Header */}
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
          <h1 className="text-4xl font-bold tracking-tight">Genesis</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Old Testament</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Pentateuch</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Chapters: 50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Book Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Book Overview</CardTitle>
          <CardDescription>
            Introduction to the Book of Genesis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p>
              The Book of Genesis is the first book of the Bible and the first book of the Pentateuch. 
              It contains the foundational stories of creation, the fall of humanity, the flood, and the 
              beginnings of the Israelite people through the patriarchs Abraham, Isaac, and Jacob.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Chapters Grid */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {chapters.map((chapter) => (
              <Link key={chapter} href={`/${params.locale}/sacred-texts/bible/genesis/${chapter}`}>
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

      {/* Navigation */}
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
                Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 