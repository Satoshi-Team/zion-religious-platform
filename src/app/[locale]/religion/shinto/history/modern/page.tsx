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
      section: 'Shinto',
      tags: ['Shinto', 'Modern History', 'Japanese Religion', 'State Shinto', 'Contemporary Shinto', 'Shrine Shinto']
    }
  }
}

export default async function ModernShintoPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
          Modern Shinto
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The evolution of Shinto from the Edo period through the present, encompassing state Shinto, postwar reforms, and contemporary practice in modern Japan and beyond.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1600 - Present
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Modern Japan & Global
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Contemporary Practice
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
            Key periods in the modern development of Shinto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Edo Period (1600-1868)</h4>
                <p className="text-sm text-muted-foreground">
                  Tokugawa consolidation, shrine registration, and popular Shinto
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Meiji to WWII (1868-1945)</h4>
                <p className="text-sm text-muted-foreground">
                  State Shinto, separation from Buddhism, and imperial ideology
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Postwar to Present (1945-)</h4>
                <p className="text-sm text-muted-foreground">
                  Religious freedom, shrine Shinto, and contemporary practice
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Edo Period Developments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Edo Period Developments
            </CardTitle>
            <CardDescription>1600-1868: Tokugawa consolidation and popular Shinto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Tokugawa Religious Policy</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Tokugawa shogunate implemented a comprehensive religious registration system, requiring all Japanese to register with Buddhist temples while maintaining Shinto shrines as local religious centers.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Danka system: Buddhist temple registration</li>
                <li>• Shrine registration and administration</li>
                <li>• Control of religious institutions</li>
                <li>• Suppression of Christianity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Popular Shinto</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shinto became increasingly popular among common people, with new forms of worship and pilgrimage emerging.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Rise of Inari and other popular kami</li>
                <li>• Pilgrimage networks and religious tourism</li>
                <li>• Folk beliefs and local practices</li>
                <li>• Shinto-Buddhist syncretism in daily life</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Meiji Restoration and State Shinto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Meiji Restoration and State Shinto
            </CardTitle>
            <CardDescription>1868-1945: Modernization and national ideology</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Shinbutsu Bunri</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Meiji government implemented the separation of Shinto and Buddhism (shinbutsu bunri), establishing Shinto as the state religion and national ideology.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Forced separation of shrines and temples</li>
                <li>• Destruction of Buddhist elements in shrines</li>
                <li>• Establishment of State Shinto</li>
                <li>• Imperial ideology and national unity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">State Shinto System</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shinto was organized into a hierarchical system with the emperor as high priest, serving nationalist and imperialist goals.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• National shrine ranking system</li>
                <li>• Compulsory shrine visits</li>
                <li>• Imperial rituals and ceremonies</li>
                <li>• Education and propaganda</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Postwar Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Postwar Developments
          </CardTitle>
          <CardDescription>1945-Present: Religious freedom and contemporary practice</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Occupation Reforms</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Allied Occupation dismantled State Shinto and established religious freedom, fundamentally changing Shinto's role in Japanese society.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Abolition of State Shinto</li>
                <li>• Emperor's renunciation of divinity</li>
                <li>• Religious freedom and separation of church and state</li>
                <li>• Shrine Shinto as voluntary religious practice</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Contemporary Shrine Shinto</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Shinto operates as a voluntary religious tradition, with shrines serving as community centers and cultural institutions.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Voluntary participation and support</li>
                <li>• Community festivals and cultural events</li>
                <li>• Life-cycle rituals and personal prayer</li>
                <li>• Tourism and cultural heritage</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-yellow-600">Modern Challenges and Adaptations</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Contemporary Shinto faces challenges of secularization, urbanization, and changing social values while adapting to modern life.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Urbanization</h5>
                <p className="text-xs text-muted-foreground">
                  Adaptation to urban life and changing community structures
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Secularization</h5>
                <p className="text-xs text-muted-foreground">
                  Balancing religious practice with secular society
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Cultural Identity</h5>
                <p className="text-xs text-muted-foreground">
                  Preserving Japanese cultural heritage and identity
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Practice */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Contemporary Practice
          </CardTitle>
          <CardDescription>Modern Shinto rituals, festivals, and community life</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Life-Cycle Rituals</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shinto continues to play a role in important life events, from birth to death.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Hatsumiyamairi: First shrine visit for newborns</li>
                <li>• Shichi-go-san: Children's coming-of-age celebration</li>
                <li>• Wedding ceremonies and blessings</li>
                <li>• Funeral and memorial services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Seasonal Festivals</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Annual festivals (matsuri) remain central to Shinto practice and community life.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• New Year celebrations and Hatsumōde</li>
                <li>• Spring and autumn festivals</li>
                <li>• Local community matsuri</li>
                <li>• Agricultural and harvest celebrations</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Shrine Visits and Prayer</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Individual shrine visits for prayer, purification, and spiritual connection remain popular practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Personal prayer and offerings</li>
                <li>• Purification rites and cleansing</li>
                <li>• Omamori (protective amulets) and omikuji (fortunes)</li>
                <li>• Meditation and spiritual reflection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Community and Culture</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shrines serve as community centers, preserving cultural traditions and fostering social connections.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Community gathering and social events</li>
                <li>• Cultural education and preservation</li>
                <li>• Tourism and cultural exchange</li>
                <li>• Environmental stewardship</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Figures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Key Figures in Modern Shinto
          </CardTitle>
          <CardDescription>Influential modern Shinto practitioners and scholars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Motoori Norinaga (1730-1801)</h4>
              <p className="text-sm text-muted-foreground">
                Edo period scholar who emphasized the uniqueness of Japanese culture and Shinto, influencing modern nationalism.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Hirata Atsutane (1776-1843)</h4>
              <p className="text-sm text-muted-foreground">
                National Learning scholar who promoted Shinto as Japan's indigenous religion and influenced Meiji reforms.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Sokyo Ono (1904-1990)</h4>
              <p className="text-sm text-muted-foreground">
                Modern Shinto scholar and priest who wrote extensively on Shinto practice and philosophy for international audiences.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Motohisa Yamakage (1925-)</h4>
              <p className="text-sm text-muted-foreground">
                Contemporary Shinto priest and scholar who has worked to preserve and transmit traditional Shinto practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">John Breen (1956-)</h4>
              <p className="text-sm text-muted-foreground">
                British scholar who has made significant contributions to the study of modern Shinto and Japanese religion.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mark Teeuwen (1963-)</h4>
              <p className="text-sm text-muted-foreground">
                Dutch scholar who has written extensively on Shinto history, particularly the medieval and modern periods.
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
              <h4 className="font-semibold mb-3 text-yellow-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Kokutai no Hongi</em> (1937) – State Shinto ideology</li>
                <li>• <em>Shinto Directive</em> (1945) – Occupation reforms</li>
                <li>• <em>Japanese Constitution</em> (1947) – Religious freedom</li>
                <li>• <em>Modern Shinto texts and commentaries</em></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Shinto in History: Ways of the Kami</em> by John Breen & Mark Teeuwen</li>
                <li>• <em>The Essence of Shinto</em> by Motohisa Yamakage</li>
                <li>• <em>Shinto: The Kami Way</em> by Sokyo Ono</li>
                <li>• <em>Shinto: Origins, Rituals, Festivals, Spirits, Sacred Places</em> by C. Scott Littleton</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/shinto/history/early-shinto">
            Early Shinto
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/shinto/history/medieval">
            Medieval Shinto
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/shinto/overview">
            Shinto Overview
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
  title: 'Modern Shinto – Contemporary Practice and Historical Development',
  description: 'Explore the evolution of Shinto from the Edo period through the present, encompassing state Shinto, postwar reforms, and contemporary practice in modern Japan and beyond.',
  keywords: 'Modern Shinto, Contemporary Shinto, Japanese Religion, State Shinto, Shrine Shinto, Postwar Japan, Religious Freedom, Shinto Practice'
} 