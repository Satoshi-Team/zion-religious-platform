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
      tags: ['Bahai Faith', 'Medieval History', 'Abdu\'l-Baha', 'International Expansion', 'Religious Development']
    }
  }
}

export default async function MedievalBahaiPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Medieval Bahai Faith
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The development of the Bahai Faith during the late 19th and early 20th centuries, marked by the ministry of Abdu'l-Baha, international expansion, and the establishment of Bahai institutions and communities worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1892–1921
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Ottoman Empire & Global
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            International Expansion
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
            Key periods in the medieval development of the Bahai Faith
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Early Ministry (1892–1908)</h4>
                <p className="text-sm text-muted-foreground">
                  Abdu'l-Baha's leadership under Ottoman restrictions
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">International Travels (1908–1913)</h4>
                <p className="text-sm text-muted-foreground">
                  Freedom from imprisonment and global teaching missions
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Later Ministry (1913–1921)</h4>
                <p className="text-sm text-muted-foreground">
                  Return to Haifa and establishment of Bahai institutions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Abdu'l-Baha's Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Abdu'l-Baha's Leadership
            </CardTitle>
            <CardDescription>1892–1921: The Center of the Covenant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Succession and Authority</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Upon Baha'u'llah's passing in 1892, his eldest son Abdu'l-Baha (1844–1921) assumed leadership of the Bahai community as the Center of the Covenant and the authorized interpreter of Baha'u'llah's writings.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Designation as Center of the Covenant</li>
                <li>• Authority to interpret Bahai teachings</li>
                <li>• Leadership of the Bahai community</li>
                <li>• Continuation of Baha'u'llah's mission</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Early Challenges</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Abdu'l-Baha faced opposition from his half-brother Mirza Muhammad-Ali and continued Ottoman restrictions, but maintained the unity and integrity of the Bahai community.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Opposition from Covenant-breakers</li>
                <li>• Ottoman surveillance and restrictions</li>
                <li>• Protection of Bahai unity</li>
                <li>• Steadfast leadership under pressure</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* International Expansion */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              International Expansion
            </CardTitle>
            <CardDescription>Global spread of the Bahai Faith</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Teaching Missions</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Following the Young Turk Revolution of 1908, Abdu'l-Baha gained freedom from imprisonment and undertook extensive travels to spread the Bahai Faith internationally.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Travels to Egypt (1910)</li>
                <li>• European tours (1911, 1913)</li>
                <li>• North American visits (1912)</li>
                <li>• Establishment of Bahai communities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Early Communities</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Bahai communities were established in North America, Europe, and other regions, with local spiritual assemblies and institutions developing.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• North American Bahai community</li>
                <li>• European Bahai groups</li>
                <li>• Local spiritual assemblies</li>
                <li>• Translation of Bahai texts</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Concepts and Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Key Concepts and Developments
          </CardTitle>
          <CardDescription>Medieval developments in Bahai thought and practice</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Covenant</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai Covenant established the authority of Abdu'l-Baha and subsequent leaders, ensuring unity and preventing schism.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Baha'u'llah's appointment of Abdu'l-Baha</li>
                <li>• Protection against division</li>
                <li>• Authority of interpretation</li>
                <li>• Continuity of leadership</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Administrative Order</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Abdu'l-Baha began establishing the Bahai administrative system, including local spiritual assemblies and consultative bodies.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Local spiritual assemblies</li>
                <li>• Consultative decision-making</li>
                <li>• Democratic principles</li>
                <li>• Unity in diversity</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Social Principles</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Abdu'l-Baha emphasized practical application of Bahai principles in addressing social issues and promoting human welfare.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Service to humanity</li>
                <li>• Social justice and equality</li>
                <li>• Education and literacy</li>
                <li>• Economic cooperation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Interfaith Dialogue</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Abdu'l-Baha promoted dialogue and cooperation among religions, emphasizing the fundamental unity of all faiths.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Unity of religions</li>
                <li>• Interfaith cooperation</li>
                <li>• Respect for all faiths</li>
                <li>• Common spiritual principles</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Context */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Historical Context
          </CardTitle>
          <CardDescription>The social and political environment of the late 19th and early 20th centuries</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Ottoman Empire</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai Faith developed within the context of the declining Ottoman Empire, facing both restrictions and opportunities for expansion.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ottoman surveillance and restrictions</li>
                <li>• Young Turk Revolution (1908)</li>
                <li>• Religious tolerance and persecution</li>
                <li>• Political instability and change</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Global Changes</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The late 19th and early 20th centuries saw significant social, political, and technological changes that influenced the Bahai Faith's development.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Industrialization and urbanization</li>
                <li>• Colonialism and imperialism</li>
                <li>• Social reform movements</li>
                <li>• International communication</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-blue-600">Religious Environment</h4>
            <p className="text-sm text-muted-foreground mb-3">
              The Bahai Faith emerged during a period of religious reform, secularization, and interfaith dialogue.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Religious Reform</h5>
                <p className="text-xs text-muted-foreground">
                  Movements for religious renewal and modernization
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Interfaith Dialogue</h5>
                <p className="text-xs text-muted-foreground">
                  Growing cooperation between different faiths
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Secularization</h5>
                <p className="text-xs text-muted-foreground">
                  Separation of religion from state and society
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
            Key Figures in Medieval Bahai History
          </CardTitle>
          <CardDescription>Influential medieval Bahai leaders and figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Abdu'l-Baha (1844–1921)</h4>
              <p className="text-sm text-muted-foreground">
                Baha'u'llah's eldest son and successor, who led the Bahai community and spread the Faith internationally through extensive travels and writings.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Shoghi Effendi (1897–1957)</h4>
              <p className="text-sm text-muted-foreground">
                Abdu'l-Baha's grandson and successor, who would later lead the Bahai community and establish its administrative order.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Thornton Chase (1847–1912)</h4>
              <p className="text-sm text-muted-foreground">
                The first American Bahai and a prominent early believer who helped establish the Bahai community in North America.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">May Maxwell (1870–1940)</h4>
              <p className="text-sm text-muted-foreground">
                A prominent early Bahai teacher and mother of Amatu'l-Baha Ruhiyyih Khanum, who played a key role in Bahai expansion.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mirza Muhammad-Ali (1853–1937)</h4>
              <p className="text-sm text-muted-foreground">
                Abdu'l-Baha's half-brother who opposed his leadership and was declared a Covenant-breaker for his attempts to divide the community.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ibrahim Kheiralla (1849–1929)</h4>
              <p className="text-sm text-muted-foreground">
                An early Bahai teacher in North America who later broke the Covenant and formed his own group, causing temporary division.
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
                <li>• <em>Some Answered Questions</em> – Abdu'l-Baha's explanations</li>
                <li>• <em>The Secret of Divine Civilization</em> – Social reform</li>
                <li>• <em>Memorials of the Faithful</em> – Biographical sketches</li>
                <li>• <em>Tablets of the Divine Plan</em> – Teaching instructions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Abdu'l-Baha: The Center of the Covenant</em> by H.M. Balyuzi</li>
                <li>• <em>The Bahai Faith: A Short Introduction</em> by Moojan Momen</li>
                <li>• <em>God Passes By</em> by Shoghi Effendi</li>
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
          <Link href="/religion/bahai/history/modern">
            Modern Bahai
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
  title: 'Medieval Bahai Faith – International Expansion and Development',
  description: 'Explore the development of the Bahai Faith during the late 19th and early 20th centuries, marked by the ministry of Abdu\'l-Baha, international expansion, and the establishment of Bahai institutions and communities worldwide.',
  keywords: 'Medieval Bahai Faith, Abdu\'l-Baha, International Expansion, Bahai Covenant, Administrative Order, Religious Development'
} 