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
      section: 'Taoism',
      tags: ['Taoism', 'Medieval History', 'Chinese Religion', 'Taoist Institutions', 'Alchemy', 'Meditation']
    }
  }
}

export default async function MedievalTaoismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Medieval Taoism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The development of Taoism during the medieval period, marked by religious institutionalization, 
          alchemical practices, and the emergence of organized Taoist schools and traditions.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            220-1368 CE
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Imperial China
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Religious Development
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
            Key periods in medieval Taoist development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Three Kingdoms & Jin (220-420)</h4>
                <p className="text-sm text-muted-foreground">
                  Early religious Taoism and the Celestial Masters
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Tang Dynasty (618-907)</h4>
                <p className="text-sm text-muted-foreground">
                  Golden age of Taoism and imperial patronage
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Song Dynasty (960-1279)</h4>
                <p className="text-sm text-muted-foreground">
                  Neo-Taoism and integration with Confucianism
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Religious Institutionalization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Religious Institutionalization
            </CardTitle>
            <CardDescription>The development of organized Taoist religion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Celestial Masters (Tianshi)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The first organized Taoist religious movement, founded by Zhang Daoling in the 
                second century CE, established a hierarchical religious structure.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Founded by Zhang Daoling (c. 142 CE)</li>
                <li>• Hierarchical religious organization</li>
                <li>• Ritual practices and ceremonies</li>
                <li>• Community-based religious life</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Religious Practices</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Medieval Taoism developed comprehensive religious practices including rituals, 
                ceremonies, and community organization.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Regular religious ceremonies and festivals</li>
                <li>• Community rituals and purification practices</li>
                <li>• Religious education and training</li>
                <li>• Social welfare and community service</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Alchemy and Immortality */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Alchemy and Immortality
            </CardTitle>
            <CardDescription>The quest for physical and spiritual transformation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">External Alchemy (Waidan)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The practice of creating elixirs and medicines to achieve physical immortality 
                and spiritual transformation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Laboratory alchemy and elixir making</li>
                <li>• Use of minerals, metals, and herbs</li>
                <li>• Refinement and purification processes</li>
                <li>• Integration with medical knowledge</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Internal Alchemy (Neidan)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The practice of internal transformation through meditation, breathing, 
                and energy cultivation techniques.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Energy cultivation and circulation</li>
                <li>• Meditation and visualization practices</li>
                <li>• Breathing techniques and control</li>
                <li>• Spiritual transformation and enlightenment</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Major Schools and Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Major Schools and Traditions
          </CardTitle>
          <CardDescription>Diverse approaches to Taoist practice and belief</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Shangqing (Highest Clarity)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Founded in the 4th century, this school emphasized meditation, visualization, 
                and communication with celestial beings.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Founded by Yang Xi (330-386)</li>
                <li>• Emphasis on meditation and visualization</li>
                <li>• Communication with celestial beings</li>
                <li>• Sophisticated ritual practices</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Lingbao (Numinous Treasure)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Developed in the 5th century, this school integrated Buddhist elements 
                and emphasized universal salvation.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Founded by Ge Chaofu (fl. 400)</li>
                <li>• Integration with Buddhist concepts</li>
                <li>• Universal salvation and compassion</li>
                <li>• Complex ritual and liturgical systems</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Quanzhen (Complete Perfection)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Founded in the 12th century, this school emphasized monastic life, 
                meditation, and the integration of Confucian, Buddhist, and Taoist teachings.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Founded by Wang Chongyang (1113-1170)</li>
                <li>• Monastic organization and discipline</li>
                <li>• Integration of three teachings</li>
                <li>• Emphasis on inner cultivation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Zhengyi (Orthodox Unity)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The continuation of the Celestial Masters tradition, emphasizing 
                ritual practices and community service.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Continuation of Celestial Masters</li>
                <li>• Ritual and ceremonial practices</li>
                <li>• Community service and welfare</li>
                <li>• Family-based religious organization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Imperial Patronage */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Imperial Patronage and Political Influence
          </CardTitle>
          <CardDescription>Taoism's relationship with imperial power</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Tang Dynasty Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Tang dynasty (618-907) was a golden age for Taoism, with extensive 
                imperial patronage and support.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Imperial sponsorship of Taoist temples</li>
                <li>• Official recognition of Taoist institutions</li>
                <li>• Support for Taoist scholarship and texts</li>
                <li>• Integration with imperial rituals</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Political Integration</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoism became integrated with imperial governance and political structures.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Taoist advisors to emperors</li>
                <li>• Official Taoist bureaucracy</li>
                <li>• State-sponsored religious activities</li>
                <li>• Integration with Confucian governance</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Cultural Impact</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Imperial patronage led to significant cultural and artistic developments.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Architecture</h5>
                <p className="text-xs text-muted-foreground">
                  Construction of magnificent Taoist temples and monasteries
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Art</h5>
                <p className="text-xs text-muted-foreground">
                  Development of Taoist iconography and religious art
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Literature</h5>
                <p className="text-xs text-muted-foreground">
                  Production of Taoist texts, commentaries, and religious literature
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
            Key Figures in Medieval Taoism
          </CardTitle>
          <CardDescription>Influential Taoist masters and scholars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Zhang Daoling (c. 142 CE)</h4>
              <p className="text-sm text-muted-foreground">
                Founder of the Celestial Masters tradition and the first organized 
                Taoist religious movement.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ge Hong (283-343)</h4>
              <p className="text-sm text-muted-foreground">
                Alchemist and scholar who wrote extensively on external alchemy 
                and immortality techniques.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tao Hongjing (456-536)</h4>
              <p className="text-sm text-muted-foreground">
                Shangqing master who compiled and organized Taoist texts and 
                established religious practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Wang Chongyang (1113-1170)</h4>
              <p className="text-sm text-muted-foreground">
                Founder of the Quanzhen school, which integrated Confucian, 
                Buddhist, and Taoist teachings.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Zhang Boduan (984-1082)</h4>
              <p className="text-sm text-muted-foreground">
                Internal alchemy master who wrote the "Understanding Reality" 
                and influenced later Taoist practice.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Liu Haichan (fl. 10th century)</h4>
              <p className="text-sm text-muted-foreground">
                Legendary Taoist immortal and alchemist who contributed to 
                the development of internal alchemy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Religious Practices and Rituals */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Religious Practices and Rituals
          </CardTitle>
          <CardDescription>Developed practices and ceremonies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Meditation and Cultivation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Sophisticated meditation techniques and spiritual cultivation practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Visualization of celestial beings</li>
                <li>• Energy circulation and refinement</li>
                <li>• Breathing techniques and control</li>
                <li>• Inner alchemy and transformation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Ritual and Ceremony</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Complex religious rituals and ceremonial practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Regular religious ceremonies</li>
                <li>• Purification and renewal rituals</li>
                <li>• Communication with spirits and deities</li>
                <li>• Community festivals and celebrations</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Community Organization</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Structured religious communities and social organization.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Monastic Life</h5>
                <p className="text-xs text-muted-foreground">
                  Organized monastic communities with rules and discipline
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Lay Communities</h5>
                <p className="text-xs text-muted-foreground">
                  Family-based religious organization and community service
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Religious Education</h5>
                <p className="text-xs text-muted-foreground">
                  Training programs and religious instruction for practitioners
                </p>
              </div>
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
                <li>• <em>Baopuzi</em> - Ge Hong's alchemical treatise</li>
                <li>• <em>Zhen'gao</em> - Shangqing revelations</li>
                <li>• <em>Lingbao Scriptures</em> - Numinous Treasure texts</li>
                <li>• <em>Quanzhen Texts</em> - Complete Perfection writings</li>
                <li>• <em>Wuzhen Pian</em> - Zhang Boduan's alchemical work</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Taoism: Growth of a Religion</em> by Isabelle Robinet</li>
                <li>• <em>Early Chinese Mysticism</em> by Livia Kohn</li>
                <li>• <em>The Taoist Experience</em> by Livia Kohn</li>
                <li>• <em>Chinese Alchemy</em> by Joseph Needham</li>
                <li>• <em>Taoist Ritual in Chinese Society</em> by Kristofer Schipper</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/taoism/history/early-taoism">
            Early Taoism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/taoism/history/modern">
            Modern Taoism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/taoism/overview">
            Taoism Overview
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
  title: 'Medieval Taoism - Religious Development and Institutionalization',
  description: 'Explore the development of Taoism during the medieval period, marked by religious institutionalization, alchemical practices, and the emergence of organized Taoist schools.',
  keywords: 'Medieval Taoism, Religious Taoism, Chinese Religion, Taoist Schools, Alchemy, Internal Alchemy, Celestial Masters, Shangqing, Lingbao, Quanzhen'
} 