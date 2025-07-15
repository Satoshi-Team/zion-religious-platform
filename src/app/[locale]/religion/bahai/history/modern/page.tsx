import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Calendar, BookOpen, Users, Globe, Lightbulb, Heart } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Bahai',
      tags: ['Bahai Faith', 'Modern History', 'Shoghi Effendi', 'Universal House of Justice', 'Contemporary Bahai', 'Global Bahai Community']
    }
  }
}

export default async function ModernBahaiPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Modern Bahai Faith
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The development of the Bahai Faith from the 1920s to the present, encompassing the ministry of Shoghi Effendi, the establishment of the Universal House of Justice, and the growth of a global Bahai community.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1921 - Present
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Global Community
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Contemporary Practice
          </Lightbulb>
        </div>
      </div>

      {/* Timeline Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Historical Timeline
          </CardTitle>
          <CardDescription>
            Key periods in the modern development of the Bahai Faith
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Shoghi Effendi Era (1921–1957)</h4>
                <p className="text-sm text-muted-foreground">
                  Guardianship, administrative development, and global expansion
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Custodians Period (1957–1963)</h4>
                <p className="text-sm text-muted-foreground">
                  Transition period and preparation for Universal House of Justice
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Universal House of Justice (1963–Present)</h4>
                <p className="text-sm text-muted-foreground">
                  Elected leadership and contemporary Bahai development
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Shoghi Effendi's Ministry */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Shoghi Effendi's Ministry
            </CardTitle>
            <CardDescription>1921–1957: The Guardian of the Bahai Faith</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Guardianship</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Upon Abdu'l-Baha's passing in 1921, his grandson Shoghi Effendi (1897–1957) assumed leadership as the Guardian of the Bahai Faith, serving as the authorized interpreter of Bahai writings.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Appointment as Guardian</li>
                <li>• Authority to interpret Bahai texts</li>
                <li>• Protection of Bahai unity</li>
                <li>• Development of administrative order</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Administrative Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shoghi Effendi established the Bahai administrative system, including local and national spiritual assemblies, and prepared for the Universal House of Justice.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Local spiritual assemblies</li>
                <li>• National spiritual assemblies</li>
                <li>• Hands of the Cause</li>
                <li>• International Bahai Council</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Global Expansion */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Global Expansion
            </CardTitle>
            <CardDescription>Worldwide spread and community development</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Teaching Plans</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shoghi Effendi initiated systematic teaching plans that expanded the Bahai Faith to nearly every country and territory in the world.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ten Year Crusade (1953–1963)</li>
                <li>• National teaching plans</li>
                <li>• Pioneer movement</li>
                <li>• Translation of Bahai texts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">World Center Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shoghi Effendi developed the Bahai World Center in Haifa, Israel, including the Shrine of the Bab and administrative buildings.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Shrine of the Bab</li>
                <li>• International Archives</li>
                <li>• Administrative buildings</li>
                <li>• Gardens and terraces</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Universal House of Justice Era */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Universal House of Justice Era
          </CardTitle>
          <CardDescription>1963–Present: Elected leadership and contemporary development</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Establishment</h4>
              <p className="text-sm text-muted-foreground mb-3">
                In 1963, the first Universal House of Justice was elected, marking the beginning of the elected leadership phase of the Bahai Faith.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• First election in 1963</li>
                <li>• Nine-member elected body</li>
                <li>• Authority over Bahai affairs</li>
                <li>• Continuation of Bahai development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Global Plans</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Universal House of Justice has guided the Bahai community through a series of global plans focused on community building and social transformation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Nine Year Plan (1964–1973)</li>
                <li>• Five Year Plans (1974–present)</li>
                <li>• Community building focus</li>
                <li>• Social action and development</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Institutional Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai administrative order has continued to develop, with new institutions and processes supporting community growth.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Continental Boards of Counselors</li>
                <li>• Auxiliary Boards</li>
                <li>• Regional Bahai Councils</li>
                <li>• Cluster development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Social Action</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai community has increasingly engaged in social action and development work, applying Bahai principles to address contemporary challenges.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Education and literacy programs</li>
                <li>• Environmental initiatives</li>
                <li>• Gender equality projects</li>
                <li>• Interfaith cooperation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Practice */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Contemporary Practice
          </CardTitle>
          <CardDescription>Modern Bahai community life and activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Community Building</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Contemporary Bahai communities focus on building vibrant, united communities that contribute to social transformation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Devotional gatherings</li>
                <li>• Study circles and education</li>
                <li>• Children's classes</li>
                <li>• Junior youth programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Social Action</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Bahai communities engage in various forms of social action, from grassroots initiatives to international development projects.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Local development projects</li>
                <li>• Environmental stewardship</li>
                <li>• Interfaith dialogue</li>
                <li>• Human rights advocacy</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-blue-600">Global Challenges and Opportunities</h4>
            <p className="text-sm text-muted-foreground mb-3">
              The contemporary Bahai community addresses modern challenges while contributing to global solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Unity in Diversity</h5>
                <p className="text-xs text-muted-foreground">
                  Promoting unity while celebrating cultural diversity
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Sustainable Development</h5>
                <p className="text-xs text-muted-foreground">
                  Contributing to environmental and social sustainability
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Global Cooperation</h5>
                <p className="text-xs text-muted-foreground">
                  Working with other organizations for common goals
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Figures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Key Figures in Modern Bahai History
          </CardTitle>
          <CardDescription>Influential modern Bahai leaders and figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Shoghi Effendi (1897–1957)</h4>
              <p className="text-sm text-muted-foreground">
                The Guardian of the Bahai Faith who established the administrative order and guided global expansion from 1921 to 1957.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ruhiyyih Khanum (1910–2000)</h4>
              <p className="text-sm text-muted-foreground">
                Shoghi Effendi's wife and a prominent Bahai figure who served as a Hand of the Cause and international teacher.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Hands of the Cause</h4>
              <p className="text-sm text-muted-foreground">
                Distinguished Bahai teachers appointed by Shoghi Effendi to protect and propagate the Faith, including Ruhiyyih Khanum and others.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Universal House of Justice Members</h4>
              <p className="text-sm text-muted-foreground">
                Elected members of the Bahai Faith's supreme governing body, including figures like Glenford Mitchell, Peter Khan, and others.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Contemporary Bahai Scholars</h4>
              <p className="text-sm text-muted-foreground">
                Modern Bahai scholars and writers who have contributed to Bahai studies and understanding, including Moojan Momen, Peter Smith, and others.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Social Action Leaders</h4>
              <p className="text-sm text-muted-foreground">
                Bahai individuals and organizations leading social action and development initiatives worldwide, including the Bahai International Community.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Study Resources
          </CardTitle>
          <CardDescription>Further reading and research materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>God Passes By</em> – Shoghi Effendi's historical overview</li>
                <li>• <em>The World Order of Baha'u'llah</em> – Administrative principles</li>
                <li>• <em>Messages from the Universal House of Justice</em></li>
                <li>• <em>The Promise of World Peace</em> – Peace statement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>The Bahai Faith: A Short Introduction</em> by Moojan Momen</li>
                <li>• <em>The Babi and Bahai Religions</em> by Peter Smith</li>
                <li>• <em>Shoghi Effendi: Recollections</em> by Ugo Giachery</li>
                <li>• <em>The Covenant of Baha'u'llah</em> by Adib Taherzadeh</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/bahai/history/early-bahai">
            Early Bahai
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/bahai/history/medieval">
            Medieval Bahai
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/bahai/overview">
            Bahai Overview
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/studies/guides">
            Study Guides
          </Link>
        </Button>
      </div>
    </div>
  )
}

// Static content for translations
const content = {
  title: 'Modern Bahai Faith – Contemporary Development and Global Community',
  description: 'Explore the development of the Bahai Faith from the 1920s to the present, encompassing the ministry of Shoghi Effendi, the establishment of the Universal House of Justice, and the growth of a global Bahai community.',
  keywords: 'Modern Bahai Faith, Shoghi Effendi, Universal House of Justice, Contemporary Bahai, Global Bahai Community, Bahai Administration'
} 