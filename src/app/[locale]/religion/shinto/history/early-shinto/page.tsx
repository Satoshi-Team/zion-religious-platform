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
      tags: ['Shinto', 'Early History', 'Japanese Religion', 'Kami', 'Kojiki', 'Nihon Shoki']
    }
  }
}

export default async function EarlyShintoPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
          Early Shinto
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The origins and early development of Shinto, Japan’s indigenous spiritual tradition, from ancient myths and rituals to the formation of early shrines and the codification of foundational texts.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            Prehistory – 8th Century CE
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Ancient Japan
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Myth & Ritual
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
            Key periods in the early development of Shinto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Jomon & Yayoi Periods (c. 14,000 BCE – 250 CE)</h4>
                <p className="text-sm text-muted-foreground">
                  Prehistoric animism, nature worship, and early ritual practices
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Kofun Period (250–538 CE)</h4>
                <p className="text-sm text-muted-foreground">
                  Emergence of clan-based kami worship and early shrine formation
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Asuka & Nara Periods (538–794 CE)</h4>
                <p className="text-sm text-muted-foreground">
                  Codification of myths in Kojiki and Nihon Shoki, syncretism with Buddhism
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Origins and Mythology */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Origins and Mythology
            </CardTitle>
            <CardDescription>Creation myths and the kami</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Creation Myths</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Kojiki (712 CE) and Nihon Shoki (720 CE) record Japan’s creation myths, including the birth of the islands and the kami (deities) by Izanagi and Izanami, and the descent of Amaterasu, the sun goddess.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Izanagi and Izanami: Creators of the Japanese islands</li>
                <li>• Amaterasu: Sun goddess and imperial ancestor</li>
                <li>• Susanoo and Tsukuyomi: Sibling deities of storm and moon</li>
                <li>• Mythic origins of the imperial line</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Kami and Animism</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Early Shinto was characterized by animistic beliefs, reverence for natural phenomena, and the worship of kami—spiritual beings inhabiting nature, ancestors, and extraordinary people.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Kami as spirits of nature, ancestors, and objects</li>
                <li>• Sacred mountains, trees, rocks, and rivers</li>
                <li>• Ritual purity and avoidance of pollution (kegare)</li>
                <li>• Festivals (matsuri) to honor and appease kami</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Early Practices and Shrines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Early Practices and Shrines
            </CardTitle>
            <CardDescription>Rituals, festivals, and sacred spaces</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Rituals and Festivals</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Early Shinto rituals focused on maintaining harmony with the kami through offerings, prayers, and seasonal festivals.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Offerings of food, sake, and symbolic objects</li>
                <li>• Purification rites (harae) to cleanse individuals and spaces</li>
                <li>• Community festivals (matsuri) for agricultural cycles</li>
                <li>• Divination and oracular practices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Shrine Formation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The earliest Shinto shrines were simple sacred spaces, often marked by natural features or torii gates, evolving into more elaborate structures over time.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Sacred groves and natural sites as original shrines</li>
                <li>• Emergence of clan-based ujigami shrines</li>
                <li>• Construction of permanent shrine buildings</li>
                <li>• Use of torii gates to mark sacred boundaries</li>
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
          <CardDescription>Fundamental ideas in early Shinto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Kami</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Kami are the spiritual essence present in all things, from natural phenomena to ancestors and deified heroes.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Multiplicity and diversity of kami</li>
                <li>• Local and national kami</li>
                <li>• Relationship between kami and community</li>
                <li>• Kami as both benevolent and potentially dangerous</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Purity and Pollution</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Maintaining ritual purity (harae) was central to early Shinto, with pollution (kegare) seen as a source of misfortune.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ritual washing and purification rites</li>
                <li>• Avoidance of death and blood in sacred spaces</li>
                <li>• Seasonal and life-cycle purification</li>
                <li>• Social harmony through collective purity</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Syncretism</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Early Shinto was open to influences from continental Asia, especially Buddhism, which began to merge with native beliefs during the Asuka and Nara periods.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Introduction of Buddhism in the 6th century</li>
                <li>• Shinbutsu-shūgō: Syncretism of kami and buddhas</li>
                <li>• Shared sacred sites and rituals</li>
                <li>• Influence on art, architecture, and ritual</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Imperial Mythology</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The imperial family traced its lineage to Amaterasu, legitimizing rule and connecting political authority to divine origins.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Emperor as high priest of Shinto</li>
                <li>• Rituals for national unity and prosperity</li>
                <li>• Use of myth to legitimize political power</li>
                <li>• Ongoing role in Japanese identity</li>
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
          <CardDescription>Foundational works and further study</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Kojiki</em> (712 CE) – Japan’s oldest chronicle of myths and history</li>
                <li>• <em>Nihon Shoki</em> (720 CE) – Official history and mythology</li>
                <li>• <em>Engishiki</em> (927 CE) – Ritual regulations and shrine records</li>
                <li>• <em>Fudoki</em> – Regional gazetteers with local myths and customs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Shinto: The Kami Way</em> by Sokyo Ono</li>
                <li>• <em>Shinto in History: Ways of the Kami</em> by John Breen & Mark Teeuwen</li>
                <li>• <em>The Essence of Shinto</em> by Motohisa Yamakage</li>
                <li>• <em>Shinto: Origins, Rituals, Festivals, Spirits, Sacred Places</em> by C. Scott Littleton</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/shinto/history/medieval">
            Medieval Shinto
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
  title: 'Early Shinto – Origins, Mythology, and Ancient Practice',
  description: 'Explore the origins and early development of Shinto, Japan’s indigenous spiritual tradition, from ancient myths and rituals to the formation of early shrines and the codification of foundational texts.',
  keywords: 'Early Shinto, Japanese Religion, Kami, Kojiki, Nihon Shoki, Shinto Mythology, Ancient Japan, Shinto Shrines, Ritual Purity'
} 