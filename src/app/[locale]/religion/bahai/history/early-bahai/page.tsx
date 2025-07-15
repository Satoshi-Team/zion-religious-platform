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
      tags: ['Bahai Faith', 'Early History', 'Babi Movement', 'Baha\'u\'llah', 'Persian Religion', 'Religious Reform']
    }
  }
}

export default async function EarlyBahaiPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Early Bahai Faith
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The origins and early development of the Bahai Faith, from the Babi movement in 19th-century Persia to the revelation of Baha'u'llah and the establishment of early Bahai communities.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1844–1892
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Qajar Persia
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Religious Reform
          </Badge>
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
            Key periods in the early development of the Bahai Faith
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Babi Period (1844–1853)</h4>
                <p className="text-sm text-muted-foreground">
                  The Bab's declaration, Babi community, and persecution
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Baha'u'llah's Ministry (1853–1892)</h4>
                <p className="text-sm text-muted-foreground">
                  Revelation, exile, and establishment of Bahai teachings
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Early Bahai Community (1863–1892)</h4>
                <p className="text-sm text-muted-foreground">
                  Spread of Bahai teachings and community formation
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* The Babi Movement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              The Babi Movement
            </CardTitle>
            <CardDescription>1844–1853: The Bab's revelation and Babi community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">The Bab's Declaration</h4>
              <p className="text-sm text-muted-foreground mb-3">
                On May 23, 1844, Siyyid Ali-Muhammad, known as the Bab (Gate), declared his mission in Shiraz, Persia, claiming to be the promised Qa'im (Resurrector) awaited by Shi'i Muslims.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Declaration to Mulla Husayn in Shiraz</li>
                <li>• Claim to be the Qa'im of Shi'i tradition</li>
                <li>• Revelation of the Bayan (Exposition)</li>
                <li>• Call for religious and social reform</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Babi Community and Persecution</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bab's teachings attracted followers but faced severe persecution from religious and political authorities in Qajar Persia.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Rapid spread of Babi teachings</li>
                <li>• Opposition from Shi'i clergy</li>
                <li>• Government persecution and imprisonment</li>
                <li>• Martyrdom of the Bab in 1850</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Baha'u'llah's Revelation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Baha'u'llah's Revelation
            </CardTitle>
            <CardDescription>1853–1892: The founder of the Bahai Faith</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Early Life and Conversion</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Mirza Husayn-Ali, later known as Baha'u'llah (Glory of God), was born in Tehran in 1817 and became a prominent Babi leader.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Birth into noble family in Tehran</li>
                <li>• Early interest in religious and social reform</li>
                <li>• Conversion to Babi Faith in 1844</li>
                <li>• Leadership role in Babi community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Revelation and Mission</h4>
              <p className="text-sm text-muted-foreground mb-3">
                In 1853, while imprisoned in the Siyah-Chal (Black Pit) of Tehran, Baha'u'llah received his divine revelation and began his mission as the promised one foretold by the Bab.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Revelation in Siyah-Chal prison</li>
                <li>• Claim to be "He Whom God shall make manifest"</li>
                <li>• Beginning of Bahai revelation</li>
                <li>• Establishment of Bahai teachings</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Concepts and Teachings */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Key Concepts and Teachings
          </CardTitle>
          <CardDescription>Fundamental Bahai principles and beliefs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Progressive Revelation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai Faith teaches that God has sent messengers throughout history, each bringing teachings appropriate for their time and place.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Unity of all religions</li>
                <li>• Progressive spiritual education</li>
                <li>• Adaptation to human capacity</li>
                <li>• Continuous divine guidance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Unity of Humanity</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Baha'u'llah emphasized the fundamental unity of all human beings and the need to eliminate prejudice and discrimination.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Oneness of humanity</li>
                <li>• Elimination of prejudice</li>
                <li>• Equality of men and women</li>
                <li>• Universal education</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">World Order</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Baha'u'llah outlined principles for a new world order based on justice, unity, and cooperation among nations.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Universal peace and disarmament</li>
                <li>• World government and federation</li>
                <li>• International cooperation</li>
                <li>• Economic justice and equity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Spiritual Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai Faith emphasizes individual spiritual development through prayer, meditation, and service to humanity.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Daily prayer and meditation</li>
                <li>• Service to others</li>
                <li>• Moral and ethical development</li>
                <li>• Study of sacred writings</li>
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
          <CardDescription>The social and political environment of 19th-century Persia</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Qajar Persia</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Bahai Faith emerged during the Qajar dynasty (1789–1925), a period of significant social, political, and religious change in Persia.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Weak central government</li>
                <li>• Religious conservatism and clerical power</li>
                <li>• European colonial influence</li>
                <li>• Social and economic challenges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Religious Environment</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shi'i Islam dominated Persian society, with strong clerical influence and expectations of the return of the Hidden Imam.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Shi'i clerical authority</li>
                <li>• Messianic expectations</li>
                <li>• Religious reform movements</li>
                <li>• Opposition to innovation</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-blue-600">Social and Political Challenges</h4>
            <p className="text-sm text-muted-foreground mb-3">
              The Bahai Faith emerged in response to the social, political, and spiritual challenges facing 19th-century Persia.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Social Reform</h5>
                <p className="text-xs text-muted-foreground">
                  Addressing inequality, prejudice, and social injustice
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Religious Renewal</h5>
                <p className="text-xs text-muted-foreground">
                  Providing spiritual guidance for modern challenges
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Global Unity</h5>
                <p className="text-xs text-muted-foreground">
                  Promoting international cooperation and peace
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
            Key Figures in Early Bahai History
          </CardTitle>
          <CardDescription>Influential early Bahai leaders and figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">The Bab (1819–1850)</h4>
              <p className="text-sm text-muted-foreground">
                Siyyid Ali-Muhammad, the forerunner of Baha'u'llah, who declared his mission in 1844 and prepared the way for the Bahai Faith.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Baha'u'llah (1817–1892)</h4>
              <p className="text-sm text-muted-foreground">
                Mirza Husayn-Ali, the founder of the Bahai Faith, who revealed the Bahai teachings and established the foundation of the religion.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Abdu'l-Baha (1844–1921)</h4>
              <p className="text-sm text-muted-foreground">
                Baha'u'llah's eldest son and successor, who led the Bahai community and spread the Faith internationally.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mulla Husayn (1813–1849)</h4>
              <p className="text-sm text-muted-foreground">
                The first disciple of the Bab and a prominent Babi leader who played a key role in the early movement.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tahirih (1817–1852)</h4>
              <p className="text-sm text-muted-foreground">
                A prominent Babi poet and women's rights advocate who was martyred for her beliefs and activism.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Subh-i-Azal (1831–1912)</h4>
              <p className="text-sm text-muted-foreground">
                Baha'u'llah's half-brother and the Bab's appointed successor, who later opposed Baha'u'llah's claims.
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
                <li>• <em>The Kitab-i-Aqdas</em> – Baha'u'llah's Most Holy Book</li>
                <li>• <em>The Kitab-i-Iqan</em> – Book of Certitude</li>
                <li>• <em>The Hidden Words</em> – Spiritual aphorisms</li>
                <li>• <em>The Bayan</em> – The Bab's major work</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>The Bahai Faith: A Short Introduction</em> by Moojan Momen</li>
                <li>• <em>Baha'u'llah: A Short Biography</em> by Moojan Momen</li>
                <li>• <em>The Babi and Bahai Religions</em> by Peter Smith</li>
                <li>• <em>God Passes By</em> by Shoghi Effendi</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/bahai/history/medieval">
            Medieval Bahai
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
  title: 'Early Bahai Faith – Origins and Foundation',
  description: 'Explore the origins and early development of the Bahai Faith, from the Babi movement in 19th-century Persia to the revelation of Baha\'u\'llah and the establishment of early Bahai communities.',
  keywords: 'Early Bahai Faith, Babi Movement, Baha\'u\'llah, Persian Religion, Religious Reform, Progressive Revelation, Unity of Humanity'
} 