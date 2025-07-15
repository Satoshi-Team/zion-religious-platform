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
      section: 'Rastafarianism',
      tags: ['Rastafarianism', 'Modern History', 'Contemporary Practice', 'Global Communities', 'Modern Challenges', 'Rastafari Today']
    }
  }
}

export default async function ModernRastafarianismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
          Modern Rastafarianism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The development of Rastafarianism from the 1990s to the present, encompassing contemporary practice, global communities, modern challenges, and the ongoing evolution of Rastafari culture and spirituality.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1990 - Present
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
            Key periods in the modern development of Rastafarianism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Global Expansion (1990–2000)</h4>
                <p className="text-sm text-muted-foreground">
                  Continued international spread and community development
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Digital Age (2000–2010)</h4>
                <p className="text-sm text-muted-foreground">
                  Internet and technology impact on Rastafari culture
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Contemporary Era (2010–Present)</h4>
                <p className="text-sm text-muted-foreground">
                  Modern challenges, opportunities, and cultural evolution
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Global Communities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Global Communities
            </CardTitle>
            <CardDescription>Worldwide Rastafari communities and diversity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">International Spread</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari communities have established themselves in countries across the globe, adapting to local cultures while maintaining core beliefs and practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Communities in Europe, North America, Africa</li>
                <li>• Adaptation to local cultures</li>
                <li>• Preservation of core beliefs</li>
                <li>• Cultural exchange and influence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Diverse Expressions</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Rastafari communities express their faith and culture in diverse ways, reflecting local contexts and individual interpretations.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Local cultural adaptations</li>
                <li>• Individual interpretations</li>
                <li>• Community-specific practices</li>
                <li>• Unity in diversity</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contemporary Practice */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Contemporary Practice
            </CardTitle>
            <CardDescription>Modern Rastafari lifestyle and spirituality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Lifestyle and Culture</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Contemporary Rastafari practice includes various lifestyle choices and cultural expressions that reflect spiritual beliefs and values.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Natural and organic lifestyle</li>
                <li>• Dreadlocks and natural hair</li>
                <li>• Ital (natural) diet</li>
                <li>• Environmental consciousness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Spiritual Practices</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Rastafari spirituality encompasses prayer, meditation, study, and community practices that maintain connection with the divine.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Daily prayer and meditation</li>
                <li>• Biblical study and reasoning</li>
                <li>• Community gatherings</li>
                <li>• Spiritual consciousness</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modern Challenges and Opportunities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Modern Challenges and Opportunities
          </CardTitle>
          <CardDescription>Contemporary issues and developments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Social and Political Issues</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Rastafari communities continue to address social justice, human rights, and political issues while promoting peace and unity.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Social justice advocacy</li>
                <li>• Human rights activism</li>
                <li>• Environmental protection</li>
                <li>• Peace and unity promotion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Cultural Preservation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari communities work to preserve their cultural heritage while adapting to modern circumstances and technological changes.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Cultural heritage preservation</li>
                <li>• Adaptation to modern life</li>
                <li>• Technology integration</li>
                <li>• Intergenerational transmission</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Education and Outreach</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Rastafari communities engage in educational initiatives and outreach programs to share their culture and beliefs with others.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Educational programs</li>
                <li>• Cultural workshops</li>
                <li>• Interfaith dialogue</li>
                <li>• Community outreach</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Economic Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari communities develop economic initiatives that align with their values, including sustainable agriculture, crafts, and cultural tourism.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Sustainable agriculture</li>
                <li>• Cultural crafts and arts</li>
                <li>• Cultural tourism</li>
                <li>• Cooperative economics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Music and Culture */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Contemporary Music and Culture
          </CardTitle>
          <CardDescription>Modern Rastafari cultural expression</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Music Evolution</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Rastafari music continues to evolve, incorporating new styles and technologies while maintaining spiritual and cultural messages.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Contemporary reggae and dancehall</li>
                <li>• Digital music production</li>
                <li>• Global music collaborations</li>
                <li>• Spiritual and social messages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Cultural Expression</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Modern Rastafari culture finds expression in various art forms, literature, film, and digital media.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Visual arts and crafts</li>
                <li>• Literature and poetry</li>
                <li>• Film and documentary</li>
                <li>• Digital media and social networks</li>
              </ul>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Global Cultural Impact</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Rastafari culture continues to influence global music, fashion, and spirituality.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Music Influence</h5>
                <p className="text-xs text-muted-foreground">
                  Impact on global music styles and artists
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Fashion and Style</h5>
                <p className="text-xs text-muted-foreground">
                  Influence on global fashion and lifestyle
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Spiritual Awareness</h5>
                <p className="text-xs text-muted-foreground">
                  Contribution to global spiritual consciousness
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
            Key Figures in Modern Rastafarianism
          </CardTitle>
          <CardDescription>Influential modern Rastafari leaders and cultural figures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Ziggy Marley (1968–)</h4>
              <p className="text-sm text-muted-foreground">
                Son of Bob Marley and prominent Rastafari musician who continues to spread Rastafari culture and messages through his music.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Damian Marley (1978–)</h4>
              <p className="text-sm text-muted-foreground">
                Son of Bob Marley and Grammy-winning artist who combines reggae with hip-hop and promotes Rastafari culture globally.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Burning Spear (1945–)</h4>
              <p className="text-sm text-muted-foreground">
                Veteran Rastafari musician who has been promoting Rastafari culture and consciousness for over five decades.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ras Iyah V (1950–)</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari elder and musician who has been instrumental in preserving and promoting traditional Rastafari culture.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Contemporary Rastafari Scholars</h4>
              <p className="text-sm text-muted-foreground">
                Modern scholars and writers who study and document Rastafari culture, history, and contemporary developments.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Community Leaders</h4>
              <p className="text-sm text-muted-foreground">
                Rastafari community leaders and activists who work to preserve culture, promote social justice, and build community.
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
                <li>• <em>Contemporary Rastafari writings and speeches</em></li>
                <li>• <em>Modern Rastafari music and lyrics</em></li>
                <li>• <em>Community publications and newsletters</em></li>
                <li>• <em>Digital media and online resources</em></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Rastafari: Roots and Ideology</em> by Barry Chevannes</li>
                <li>• <em>The Rastafarians</em> by Leonard Barrett</li>
                <li>• <em>Dread: The Rastafarians of Jamaica</em> by Joseph Owens</li>
                <li>• <em>Contemporary Rastafari Studies</em> by various authors</li>
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
          <Link href="/religion/rastafarianism/history/medieval">
            Medieval Rastafarianism
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
  title: 'Modern Rastafarianism – Contemporary Practice and Global Community',
  description: 'Explore the development of Rastafarianism from the 1990s to the present, encompassing contemporary practice, global communities, modern challenges, and the ongoing evolution of Rastafari culture and spirituality.',
  keywords: 'Modern Rastafarianism, Contemporary Practice, Global Communities, Rastafari Today, Modern Challenges, Cultural Evolution'
} 