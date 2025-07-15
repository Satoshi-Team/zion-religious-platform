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
      tags: ['Shinto', 'Medieval History', 'Japanese Religion', 'Shinbutsu-shūgō', 'Shrine Networks', 'Kami']
    }
  }
}

export default async function MedievalShintoPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
          Medieval Shinto
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The transformation of Shinto during Japan’s medieval era, marked by syncretism with Buddhism, the rise of shrine networks, and the development of new rituals and beliefs.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            794–1600 CE
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Heian to Edo Japan
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Syncretism & Ritual
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
            Key periods in the medieval development of Shinto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Heian Period (794–1185)</h4>
                <p className="text-sm text-muted-foreground">
                  Courtly ritual, syncretism, and the emergence of shrine-temple complexes
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Kamakura & Muromachi Periods (1185–1573)</h4>
                <p className="text-sm text-muted-foreground">
                  Popularization of Shinto, new sects, and warrior patronage
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Azuchi-Momoyama & Early Edo (1573–1600)</h4>
                <p className="text-sm text-muted-foreground">
                  Consolidation of shrine networks and ritual systems
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Syncretism and Shrine-Temple Complexes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Syncretism and Shrine-Temple Complexes
            </CardTitle>
            <CardDescription>Shinbutsu-shūgō and religious fusion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Shinbutsu-shūgō</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The fusion of Shinto and Buddhism, known as shinbutsu-shūgō, defined medieval Japanese religion. Kami were identified with Buddhist deities, and shrines and temples were often physically and administratively linked.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Kami as manifestations of Buddhas and bodhisattvas</li>
                <li>• Shared sacred sites and rituals</li>
                <li>• Development of shrine-temple complexes (jingū-ji)</li>
                <li>• Buddhist priests serving at Shinto shrines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Court and Warrior Patronage</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The imperial court and samurai clans supported major shrines, shaping ritual and political authority.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ise Grand Shrine and imperial rituals</li>
                <li>• Taira and Minamoto clan patronage</li>
                <li>• Warrior rituals for victory and protection</li>
                <li>• Expansion of shrine networks</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Popularization and Sect Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Popularization and Sect Development
            </CardTitle>
            <CardDescription>New movements and local practices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Emergence of Sects</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Medieval Shinto saw the rise of new sects and local cults, often centered on charismatic leaders or unique kami.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Goryū Shinto, Sannō Ichijitsu Shinto, and others</li>
                <li>• Localized worship and pilgrimage traditions</li>
                <li>• New ritual forms and liturgies</li>
                <li>• Integration of folk beliefs and practices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Festivals and Rituals</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Festivals (matsuri) and rituals became more elaborate, involving entire communities and reflecting agricultural, political, and spiritual concerns.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Grand processions and performances</li>
                <li>• Ritual drama (kagura) and music</li>
                <li>• Agricultural and seasonal festivals</li>
                <li>• Pilgrimages to major shrines</li>
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
          <CardDescription>Medieval developments in Shinto thought</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Honji Suijaku</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The doctrine of honji suijaku held that kami were local manifestations of universal Buddhist deities, allowing for deep integration of the two traditions.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Kami as "trace manifestations" of Buddhas</li>
                <li>• Shared iconography and ritual</li>
                <li>• Theological debates and syncretic texts</li>
                <li>• Enduring influence on Japanese spirituality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Shrine Networks</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Major shrines developed extensive networks, with branch shrines (bunsha) spreading kami worship across Japan.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ise, Hachiman, and Inari shrine networks</li>
                <li>• Standardization of rituals and architecture</li>
                <li>• Pilgrimage routes and religious tourism</li>
                <li>• Economic and political influence of shrines</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Ritual and Purity</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Medieval Shinto continued to emphasize ritual purity, with new forms of purification and exorcism emerging.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Water purification and ablutions</li>
                <li>• Exorcism rites and spirit pacification</li>
                <li>• Ritual drama and performance</li>
                <li>• Community-wide purification festivals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Political and Social Role</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Shrines played a central role in local governance, social organization, and the legitimation of political power.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Shrine officials as local leaders</li>
                <li>• Rituals for political legitimacy</li>
                <li>• Social welfare and community service</li>
                <li>• Mediation of disputes and social order</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Texts and Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Key Texts and Resources
          </CardTitle>
          <CardDescription>Medieval sources and further study</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Engishiki</em> (927 CE) – Ritual regulations and shrine records</li>
                <li>• <em>Shintōshū</em> (14th c.) – Syncretic myths and legends</li>
                <li>• <em>Gukanshō</em> (1220) – Historical and religious chronicle</li>
                <li>• <em>Jinnō Shōtōki</em> (1339) – Imperial legitimacy and Shinto</li>
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
          <Link href="/religion/shinto/history/modern">
            Modern Shinto
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
  title: 'Medieval Shinto – Syncretism, Shrine Networks, and Ritual',
  description: 'Explore the transformation of Shinto during Japan’s medieval era, marked by syncretism with Buddhism, the rise of shrine networks, and the development of new rituals and beliefs.',
  keywords: 'Medieval Shinto, Japanese Religion, Shinbutsu-shūgō, Shrine Networks, Kami, Ritual, Japanese History, Shinto-Buddhist Syncretism'
} 