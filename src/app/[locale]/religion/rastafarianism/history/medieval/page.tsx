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
    title: 'Medieval Bahai Faith',
    description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
    keywords: 'Bahai Faith, Medieval History, Abdu'l-Baha, International Expansion',
    openGraph: {
      title: 'Medieval Bahai Faith',
      description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Bahai',
      tags: ['Bahai Faith', 'Medieval History', 'Abdu'l-Baha', 'International Expansion', 'Religious Development']
    }
  }
}
  }
}

export default async function MedievalRastafarianismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
          Medieval Rastafarianism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The development of Rastafarianism from the 1960s through the 1980s, marked by the rise of reggae music, international spread, community development, and the emergence of prominent Rastafari leaders and cultural figures.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1960–1990
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Jamaica & Global
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Cultural Revolution
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
            Key periods in the medieval development of Rastafarianism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Cultural Awakening (1960–1970)</h4>
                <p className="text-sm text-muted-foreground">
                  Rise of reggae music and cultural expression
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">International Spread (1970–1980)</h4>
                <p className="text-sm text-muted-foreground">
                  Global expansion and Bob Marley's influence
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Community Development (1980–1990)</h4>
                <p className="text-sm text-muted-foreground">
                  Institutionalization and diverse expressions
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Rise of Reggae Music */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Rise of Reggae Music
            </CardTitle>
            <CardDescription>1960s–1970s: Musical expression and cultural revolution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Musical Evolution</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Reggae music emerged as the primary vehicle for Rastafari expression, evolving from ska and rocksteady to become a powerful medium for spiritual and social messages.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Evolution from ska to rocksteady to reggae</li>
                <li>• Rastafari themes and messages</li>
                <li>• Spiritual and social commentary</li>
                <li>• Cultural identity and pride</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cultural Impact</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Reggae music brought Rastafari beliefs and culture to a global audience, spreading messages of unity, liberation, and spiritual consciousness.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Global cultural influence</li>
                <li>• Spread of Rastafari ideas</li>
                <li>• Unity and liberation themes</li>
                <li>• Spiritual consciousness</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Bob Marley and International Influence */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Bob Marley and International Influence
            </CardTitle>
            <CardDescription>1970s: Global ambassador of Rastafari</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Bob Marley's Ministry</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Bob Marley (1945–1981) became the most prominent ambassador of Rastafari, using his music to spread Rastafari beliefs and culture worldwide.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Global musical influence</li>
                <li>• Rastafari message and culture</li>
                <li>• Unity and peace themes</li>
                <li>• Spiritual and social consciousness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">International Spread</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Through Marley's music and tours, Rastafari culture spread to Europe, North America, Africa, and other regions, inspiring new communities and followers.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• European and North American spread</li>
                <li>• African connections</li>
                <li>• New Rastafari communities</li>
                <li>• Cultural exchange and influence</li>
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
          <CardDescription>Medieval developments in Rastafari thought and practice</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Cultural Expression</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari developed rich cultural expressions including music, art, language, and lifestyle that became central to the movement's identity.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Reggae music and culture</li>
                <li>• Dreadlocks and natural hair</li>
                <li>• Ital (natural) lifestyle</li>
                <li>• Rastafari language and speech</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Community Building</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari communities developed more structured organizations and practices, including reasoning sessions, nyabinghi ceremonies, and communal living.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Reasoning sessions</li>
                <li>• Nyabinghi ceremonies</li>
                <li>• Communal living</li>
                <li>• Educational programs</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Social Activism</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari became increasingly involved in social and political activism, addressing issues of justice, equality, and human rights.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Social justice advocacy</li>
                <li>• Human rights activism</li>
                <li>• Environmental consciousness</li>
                <li>• Peace and unity movements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Spiritual Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari spirituality deepened with the development of more sophisticated theological interpretations and practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Biblical interpretation</li>
                <li>• Ethiopian Orthodox influence</li>
                <li>• Meditation and prayer</li>
                <li>• Spiritual consciousness</li>
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
          <CardDescription>The social and political environment of the 1960s–1980s</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Jamaican Independence</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Jamaica gained independence from Britain in 1962, creating new opportunities for cultural expression and national identity formation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Independence from Britain (1962)</li>
                <li>• National identity formation</li>
                <li>• Cultural renaissance</li>
                <li>• Political and social change</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Global Social Movements</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The 1960s and 1970s saw global movements for civil rights, anti-colonialism, and social justice that influenced Rastafari development.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Civil rights movement</li>
                <li>• Anti-colonial struggles</li>
                <li>• Black power movement</li>
                <li>• Counterculture movements</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Cultural and Social Changes</h4>
            <p className="text-sm text-muted-foreground mb-3">
              The period saw significant cultural and social changes that shaped Rastafari development and expression.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Cultural Revolution</h5>
                <p className="text-xs text-muted-foreground">
                  Global cultural changes and artistic expression
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Social Justice</h5>
                <p className="text-xs text-muted-foreground">
                  Movements for equality and human rights
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Spiritual Awakening</h5>
                <p className="text-xs text-muted-foreground">
                  Interest in alternative spirituality and consciousness
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
            Key Figures in Medieval Rastafarianism
          </CardTitle>
          <CardDescription>Influential medieval Rastafari leaders and cultural figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Bob Marley (1945–1981)</h4>
              <p className="text-sm text-muted-foreground">
                The most famous Rastafari musician and global ambassador who spread Rastafari culture and beliefs worldwide through his music.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Peter Tosh (1944–1987)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari musician and activist who used his music to promote social justice, human rights, and Rastafari beliefs.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Bunny Wailer (1947–2021)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari musician and member of The Wailers who continued to promote Rastafari culture and spirituality through his music.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ras Michael (1943–)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari musician and nyabinghi drummer who has preserved and promoted traditional Rastafari music and culture.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mortimo Planno (1929–2006)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari elder and teacher who mentored Bob Marley and helped establish Rastafari communities and practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ras Sam Brown (1934–1998)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari leader and political activist who advocated for Rastafari rights and social justice in Jamaica.
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
              <h4 className="font-semibold mb-3 text-green-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Catch a Fire: The Life of Bob Marley</em> by Timothy White</li>
                <li>• <em>Bob Marley: The Untold Story</em> by Chris Salewicz</li>
                <li>• <em>Reggae: The Story of Jamaican Music</em> by Lloyd Bradley</li>
                <li>• <em>Rastafari music and lyrics</em></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Rastafari: Roots and Ideology</em> by Barry Chevannes</li>
                <li>• <em>The Rastafarians</em> by Leonard Barrett</li>
                <li>• <em>Dread: The Rastafarians of Jamaica</em> by Joseph Owens</li>
                <li>• <em>Reggae and Caribbean Music</em> by various authors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/rastafarianism/history/early-rastafarianism">
            Early Rastafarianism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/rastafarianism/history/modern">
            Modern Rastafarianism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/rastafarianism/overview">
            Rastafarianism Overview
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
  title: 'Medieval Rastafarianism – Cultural Revolution and Global Spread',
  description: 'Explore the development of Rastafarianism from the 1960s through the 1980s, marked by the rise of reggae music, international spread, community development, and the emergence of prominent Rastafari leaders and cultural figures.',
  keywords: 'Medieval Rastafarianism, Reggae Music, Bob Marley, International Spread, Cultural Revolution, Rastafari Community'
} 