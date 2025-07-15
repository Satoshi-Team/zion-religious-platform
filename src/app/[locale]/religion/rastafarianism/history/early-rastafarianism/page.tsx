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

export default async function EarlyRastafarianismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
          Early Rastafarianism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The origins and early development of Rastafarianism, from the coronation of Haile Selassie I in 1930 to the formation of early Rastafari communities in Jamaica and the establishment of foundational beliefs and practices.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1930–1960
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Jamaica & Ethiopia
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Religious Awakening
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
            Key periods in the early development of Rastafarianism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Coronation Period (1930–1935)</h4>
                <p className="text-sm text-muted-foreground">
                  Haile Selassie's coronation and early recognition in Jamaica
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Community Formation (1935–1950)</h4>
                <p className="text-sm text-muted-foreground">
                  Early Rastafari communities and persecution in Jamaica
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Consolidation (1950–1960)</h4>
                <p className="text-sm text-muted-foreground">
                  Development of practices, beliefs, and early leaders
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Haile Selassie and the Coronation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Haile Selassie and the Coronation
            </CardTitle>
            <CardDescription>1930: The fulfillment of prophecy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">The Coronation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                On November 2, 1930, Ras Tafari Makonnen was crowned Emperor Haile Selassie I of Ethiopia, an event that many in Jamaica saw as the fulfillment of biblical prophecy and the return of the Messiah.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Coronation as Emperor of Ethiopia</li>
                <li>• Biblical prophecy fulfillment</li>
                <li>• Return of the Messiah</li>
                <li>• Hope for African redemption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Biblical Significance</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The coronation was interpreted through biblical prophecy, particularly Revelation 5:5, which speaks of the "Lion of Judah" who has prevailed to open the book.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Lion of Judah symbolism</li>
                <li>• King of Kings title</li>
                <li>• Conquering Lion of Judah</li>
                <li>• Biblical messianic expectations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Early Recognition in Jamaica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Early Recognition in Jamaica
            </CardTitle>
            <CardDescription>Jamaican response and early believers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Jamaican Response</h4>
              <p className="text-sm text-muted-foreground mb-3">
                News of the coronation reached Jamaica through newspapers and radio, inspiring many to see Haile Selassie as the fulfillment of Marcus Garvey's prophecy about a black king being crowned in Africa.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Marcus Garvey's prophecy</li>
                <li>• Media coverage of coronation</li>
                <li>• Biblical interpretation</li>
                <li>• Hope for African redemption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Early Believers</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The first Rastafari believers emerged from various backgrounds, including former Garveyites, members of the Ethiopian Orthodox Church, and those seeking spiritual and social liberation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Former Garveyites</li>
                <li>• Ethiopian Orthodox members</li>
                <li>• Spiritual seekers</li>
                <li>• Social reformers</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Concepts and Beliefs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Key Concepts and Beliefs
          </CardTitle>
          <CardDescription>Foundational Rastafari beliefs and principles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Divinity of Haile Selassie</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari believe that Haile Selassie I is the living God, the Messiah returned, and the fulfillment of biblical prophecy.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Living God incarnate</li>
                <li>• Messiah returned</li>
                <li>• Biblical prophecy fulfillment</li>
                <li>• Divine authority and power</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Repatriation to Africa</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Central to early Rastafari belief was the concept of repatriation to Africa, particularly Ethiopia, as the promised land and spiritual home.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Return to Africa</li>
                <li>• Ethiopia as Zion</li>
                <li>• Liberation from Babylon</li>
                <li>• Spiritual and physical return</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Babylon and Zion</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari cosmology divides the world into Babylon (oppressive systems) and Zion (the promised land and spiritual freedom).
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Babylon as oppressive system</li>
                <li>• Zion as spiritual freedom</li>
                <li>• Ethiopia as physical Zion</li>
                <li>• Liberation from Babylon</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">African Identity</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari emphasizes African identity, heritage, and pride, rejecting Eurocentric standards and celebrating African culture and spirituality.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• African pride and identity</li>
                <li>• Rejection of Eurocentrism</li>
                <li>• Celebration of African culture</li>
                <li>• Connection to African heritage</li>
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
          <CardDescription>The social and political environment of early 20th-century Jamaica</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Colonial Jamaica</h4>
              <p className="text-sm text-muted-foreground mb-3">
              Jamaica was a British colony with a deeply stratified society based on race, class, and economic inequality, creating fertile ground for religious and social movements.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• British colonial rule</li>
                <li>• Racial and class inequality</li>
                <li>• Economic exploitation</li>
                <li>• Social discrimination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Marcus Garvey's Influence</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Marcus Garvey's Universal Negro Improvement Association (UNIA) had a profound impact on Jamaican society, promoting black pride, African identity, and the prophecy of a black king.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Black pride and identity</li>
                <li>• African redemption</li>
                <li>• Prophecy of black king</li>
                <li>• Pan-African consciousness</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Religious Environment</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Jamaica's religious landscape included various Christian denominations, African-derived religions, and spiritual movements that influenced Rastafari development.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Christianity</h5>
                <p className="text-xs text-muted-foreground">
                  Various denominations and biblical interpretation
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">African Traditions</h5>
                <p className="text-xs text-muted-foreground">
                  Preserved African spiritual practices and beliefs
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Revivalism</h5>
                <p className="text-xs text-muted-foreground">
                  Spiritual revival movements and practices
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
            Key Figures in Early Rastafarianism
          </CardTitle>
          <CardDescription>Influential early Rastafari leaders and figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Haile Selassie I (1892–1975)</h4>
              <p className="text-sm text-muted-foreground">
                Emperor of Ethiopia from 1930 to 1974, revered by Rastafari as the living God and Messiah returned.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Marcus Garvey (1887–1940)</h4>
              <p className="text-sm text-muted-foreground">
                Jamaican political leader whose prophecy about a black king being crowned in Africa influenced early Rastafari beliefs.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Leonard Howell (1898–1981)</h4>
              <p className="text-sm text-muted-foreground">
                One of the first Rastafari leaders, known as the "First Rasta," who established the Pinnacle community.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Joseph Hibbert (1894–1986)</h4>
              <p className="text-sm text-muted-foreground">
                Early Rastafari leader and founder of the Ethiopian Coptic Church in Jamaica.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Archibald Dunkley (1906–1977)</h4>
              <p className="text-sm text-muted-foreground">
                Early Rastafari leader and preacher who helped spread Rastafari teachings in Jamaica.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Robert Hinds (1905–1950)</h4>
              <p className="text-sm text-muted-foreground">
                Early Rastafari leader and associate of Leonard Howell who helped establish early Rastafari communities.
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
                <li>• <em>The Promised Key</em> by Leonard Howell</li>
                <li>• <em>My Life and Ethiopia's Progress</em> by Haile Selassie</li>
                <li>• <em>Philosophy and Opinions</em> by Marcus Garvey</li>
                <li>• <em>Early Rastafari writings and speeches</em></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Rastafari: Roots and Ideology</em> by Barry Chevannes</li>
                <li>• <em>The Rastafarians</em> by Leonard Barrett</li>
                <li>• <em>Dread: The Rastafarians of Jamaica</em> by Joseph Owens</li>
                <li>• <em>Rastafari: A Very Short Introduction</em> by Ennis Edmonds</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/rastafarianism/history/medieval">
            Medieval Rastafarianism
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
  title: 'Early Rastafarianism – Origins and Foundation',
  description: 'Explore the origins and early development of Rastafarianism, from the coronation of Haile Selassie I in 1930 to the formation of early Rastafari communities in Jamaica and the establishment of foundational beliefs and practices.',
  keywords: 'Early Rastafarianism, Haile Selassie, Jamaica, African Diaspora, Religious Movement, Rastafari Origins, Ethiopian Coronation'
} 