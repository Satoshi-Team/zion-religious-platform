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
      section: 'Taoism',
      tags: ['Taoism', 'Modern History', 'Chinese Religion', 'Contemporary Taoism', 'Global Taoism', 'Taoist Revival']
    }
  }
}

export default async function ModernTaoismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Modern Taoism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The evolution of Taoism from the late imperial period through the modern era, 
          exploring its adaptation to contemporary society and global influence.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1368 - Present
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Global Influence
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Modern Adaptation
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
            Key periods in the development of modern Taoism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Ming-Qing Period (1368-1911)</h4>
                <p className="text-sm text-muted-foreground">
                  Late imperial Taoism and cultural synthesis
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Republican Era (1911-1949)</h4>
                <p className="text-sm text-muted-foreground">
                  Modernization and religious reform movements
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Contemporary Period (1949-Present)</h4>
                <p className="text-sm text-muted-foreground">
                  Revival, academic study, and global Taoism
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Late Imperial Period */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Late Imperial Period
            </CardTitle>
            <CardDescription>1368-1911: Ming and Qing dynasty developments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ming Dynasty (1368-1644)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Ming dynasty saw the consolidation of Taoist traditions and the 
                development of new practices and institutions.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Imperial patronage of Taoist institutions</li>
                <li>• Compilation of the Taoist Canon</li>
                <li>• Development of popular Taoist practices</li>
                <li>• Integration with folk religion</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Qing Dynasty (1644-1911)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Qing period witnessed both official support and challenges to Taoism, 
                with the emergence of new religious movements.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Official recognition and regulation</li>
                <li>• Popular religious movements</li>
                <li>• Integration with local cultures</li>
                <li>• Preservation of traditional practices</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Republican Era */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Republican Era
            </CardTitle>
            <CardDescription>1911-1949: Modernization and reform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Religious Reform</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Republican period saw efforts to modernize Taoism and adapt it 
                to the changing social and political environment.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Establishment of Taoist associations</li>
                <li>• Modernization of religious practices</li>
                <li>• Integration with nationalist movements</li>
                <li>• Preservation of cultural heritage</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Intellectual Developments</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Scholars and practitioners worked to preserve and reinterpret 
                Taoist traditions for the modern era.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Academic study of Taoist texts</li>
                <li>• Publication of Taoist literature</li>
                <li>• Interfaith dialogue and cooperation</li>
                <li>• Cultural preservation efforts</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contemporary Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Contemporary Taoism
          </CardTitle>
          <CardDescription>1949-Present: Revival, academic study, and global influence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Academic Revival</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Since the 1980s, there has been a significant revival of Taoist studies 
                in academia, both in China and internationally.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Establishment of Taoist research institutes</li>
                <li>• Publication of classical texts and commentaries</li>
                <li>• Interdisciplinary studies and research</li>
                <li>• International academic conferences</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Religious Revival</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Contemporary Taoism has experienced a revival in religious practice 
                and community organization.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Restoration of Taoist temples and monasteries</li>
                <li>• Training of new Taoist priests and practitioners</li>
                <li>• Revival of traditional rituals and ceremonies</li>
                <li>• Community-based religious activities</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Global Influence</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Taoism has gained international recognition and influence, 
              particularly in areas of health, wellness, and spirituality.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Health and Wellness</h5>
                <p className="text-xs text-muted-foreground">
                  Influence on traditional Chinese medicine and qigong
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Martial Arts</h5>
                <p className="text-xs text-muted-foreground">
                  Integration with tai chi and other internal martial arts
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Spirituality</h5>
                <p className="text-xs text-muted-foreground">
                  Influence on modern spiritual and mindfulness practices
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modern Applications */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Modern Applications and Adaptations
          </CardTitle>
          <CardDescription>Contemporary uses of Taoist principles and practices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Health and Medicine</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoist principles continue to influence traditional Chinese medicine 
                and modern health practices.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Integration with traditional Chinese medicine</li>
                <li>• Qigong and energy cultivation practices</li>
                <li>• Meditation and stress reduction techniques</li>
                <li>• Holistic approaches to health and wellness</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Environmental Ethics</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoist environmental principles have gained relevance in addressing 
                modern ecological challenges.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Harmony with nature and natural processes</li>
                <li>• Sustainable living and resource conservation</li>
                <li>• Environmental stewardship and protection</li>
                <li>• Ecological balance and interdependence</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Personal Development</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoist principles of self-cultivation and inner development 
                remain relevant to modern personal growth.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Inner cultivation and self-improvement</li>
                <li>• Balance and harmony in daily life</li>
                <li>• Authenticity and natural expression</li>
                <li>• Wisdom and intuitive understanding</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Social Harmony</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoist social principles offer insights for modern community 
                building and social organization.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Natural social order and cooperation</li>
                <li>• Leadership through example and virtue</li>
                <li>• Community harmony and mutual respect</li>
                <li>• Minimal interference and natural governance</li>
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
            Key Figures in Modern Taoism
          </CardTitle>
          <CardDescription>Influential modern Taoist practitioners and scholars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Chen Yingning (1880-1969)</h4>
              <p className="text-sm text-muted-foreground">
                Modern Taoist master who worked to preserve and modernize 
                Taoist practices during the Republican period.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Liu Yiming (1734-1821)</h4>
              <p className="text-sm text-muted-foreground">
                Qing dynasty Taoist master who wrote influential commentaries 
                on internal alchemy and Taoist philosophy.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Wang Liping (1949-)</h4>
              <p className="text-sm text-muted-foreground">
                Contemporary Taoist master who has worked to preserve and 
                transmit traditional Taoist practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Kristofer Schipper (1934-2021)</h4>
              <p className="text-sm text-muted-foreground">
                Dutch scholar who made significant contributions to the study 
                of Taoist ritual and religious practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Livia Kohn (1956-)</h4>
              <p className="text-sm text-muted-foreground">
                Contemporary scholar who has written extensively on Taoist 
                history, philosophy, and religious practices.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Isabelle Robinet (1932-2000)</h4>
              <p className="text-sm text-muted-foreground">
                French scholar who made important contributions to the study 
                of Taoist texts and religious development.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Issues */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Contemporary Issues and Challenges
          </CardTitle>
          <CardDescription>Modern challenges and opportunities for Taoism</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Cultural Preservation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Efforts to preserve and transmit traditional Taoist knowledge 
                and practices in the modern world.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Documentation of traditional practices</li>
                <li>• Training of new practitioners</li>
                <li>• Preservation of sacred texts and rituals</li>
                <li>• Cultural heritage protection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Adaptation</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Balancing traditional authenticity with modern relevance 
                and accessibility.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Adaptation to modern lifestyles</li>
                <li>• Integration with contemporary culture</li>
                <li>• Accessibility for new practitioners</li>
                <li>• Preservation of core principles</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Global Outreach</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Taoism's growing international presence and influence.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">International Centers</h5>
                <p className="text-xs text-muted-foreground">
                  Establishment of Taoist centers and organizations worldwide
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Cultural Exchange</h5>
                <p className="text-xs text-muted-foreground">
                  Cross-cultural dialogue and understanding
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Academic Study</h5>
                <p className="text-xs text-muted-foreground">
                  International scholarship and research on Taoism
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
                <li>• <em>Taoist Canon</em> - Complete collection of Taoist texts</li>
                <li>• <em>Modern Taoist Writings</em> - Contemporary commentaries</li>
                <li>• <em>Taoist Ritual Texts</em> - Ceremonial and liturgical works</li>
                <li>• <em>Internal Alchemy Texts</em> - Neidan practices and theory</li>
                <li>• <em>Taoist Philosophy</em> - Modern interpretations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Taoism: An Essential Guide</em> by Eva Wong</li>
                <li>• <em>The Taoist Experience</em> by Livia Kohn</li>
                <li>• <em>Taoist Ritual in Chinese Society</em> by Kristofer Schipper</li>
                <li>• <em>Taoism: Growth of a Religion</em> by Isabelle Robinet</li>
                <li>• <em>Contemporary Taoism</em> by various authors</li>
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
          <Link href="/religion/taoism/history/medieval">
            Medieval Taoism
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
  title: 'Modern Taoism - Contemporary Development and Global Influence',
  description: 'Explore the evolution of Taoism from the late imperial period through the modern era, including its adaptation to contemporary society and global influence.',
  keywords: 'Modern Taoism, Contemporary Taoism, Chinese Religion, Global Taoism, Taoist Revival, Modern Taoist Practice, Taoist Philosophy'
} 