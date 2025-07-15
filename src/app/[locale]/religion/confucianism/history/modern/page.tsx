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
      section: 'Confucianism',
      tags: ['Confucianism', 'Modern History', 'Chinese Philosophy', 'Cultural Heritage', 'Neo-Confucianism']
    }
  }
}

export default async function ModernConfucianismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Modern Confucianism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The evolution of Confucian thought from the late imperial period through the modern era, 
          exploring its adaptation to contemporary society and global influence.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            1600 - Present
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
            Key periods in the development of modern Confucianism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">Late Imperial Period (1600-1911)</h4>
                <p className="text-sm text-muted-foreground">
                  Neo-Confucianism dominance, examination system, and cultural synthesis
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">Republican Era (1911-1949)</h4>
                <p className="text-sm text-muted-foreground">
                  New Culture Movement, May Fourth Movement, and intellectual reform
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-600">Contemporary Period (1949-Present)</h4>
                <p className="text-sm text-muted-foreground">
                  Revival movements, academic studies, and global Confucianism
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Late Imperial Confucianism */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Late Imperial Confucianism
            </CardTitle>
            <CardDescription>1600-1911: The final flowering of traditional Confucianism</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Neo-Confucian Synthesis</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The late imperial period saw the full development of Neo-Confucianism, particularly 
                the Cheng-Zhu school, which became the official state ideology.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Zhu Xi's synthesis of Confucian, Buddhist, and Daoist elements</li>
                <li>• Emphasis on self-cultivation and moral development</li>
                <li>• Integration with the civil service examination system</li>
                <li>• Development of family rituals and social practices</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Cultural Institutions</h4>
              <p className="text-sm text-muted-foreground">
                Confucian academies, family schools, and community organizations flourished, 
                creating a comprehensive educational and cultural system that shaped Chinese society.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Republican Era Reforms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Republican Era Reforms
            </CardTitle>
            <CardDescription>1911-1949: Intellectual revolution and cultural reform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">New Culture Movement</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The May Fourth Movement of 1919 marked a turning point in Chinese intellectual history, 
                with many intellectuals calling for the rejection of traditional Confucian values.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Criticism of Confucian family structure and gender roles</li>
                <li>• Advocacy for democracy, science, and individualism</li>
                <li>• Introduction of Western philosophical and political ideas</li>
                <li>• Debate over cultural identity and modernization</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Intellectual Responses</h4>
              <p className="text-sm text-muted-foreground">
                Some scholars, like Liang Shuming and Xiong Shili, sought to modernize Confucianism 
                while preserving its core values, creating new interpretations for the modern era.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contemporary Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Contemporary Confucianism
          </CardTitle>
          <CardDescription>1949-Present: Revival, academic study, and global influence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Academic Revival</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Since the 1980s, there has been a significant revival of Confucian studies in academia, 
                both in China and internationally.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Establishment of Confucian research institutes</li>
                <li>• Publication of classical texts and commentaries</li>
                <li>• Interdisciplinary studies combining philosophy, history, and sociology</li>
                <li>• Comparative studies with Western philosophy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">New Confucianism</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Contemporary scholars have developed new interpretations of Confucianism that address 
                modern challenges while maintaining traditional values.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Integration with democratic principles</li>
                <li>• Environmental ethics and sustainability</li>
                <li>• Global citizenship and cross-cultural dialogue</li>
                <li>• Technology and digital age applications</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-orange-600">Global Influence</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Confucianism has gained international recognition as a valuable philosophical tradition 
              that offers insights into ethics, education, and social harmony.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Education</h5>
                <p className="text-xs text-muted-foreground">
                  Influence on educational philosophy and character development
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Business Ethics</h5>
                <p className="text-xs text-muted-foreground">
                  Application in corporate governance and leadership
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Interfaith Dialogue</h5>
                <p className="text-xs text-muted-foreground">
                  Contribution to global philosophical and religious discourse
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
            Key Figures in Modern Confucianism
          </CardTitle>
          <CardDescription>Influential thinkers and reformers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">Liang Shuming (1893-1988)</h4>
              <p className="text-sm text-muted-foreground">
                Philosopher who sought to modernize Confucianism while preserving its essence, 
                emphasizing rural reconstruction and cultural revival.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Xiong Shili (1885-1968)</h4>
              <p className="text-sm text-muted-foreground">
                Neo-Confucian philosopher who developed a new metaphysical system combining 
                traditional Confucianism with Buddhist insights.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tu Weiming (1940-)</h4>
              <p className="text-sm text-muted-foreground">
                Contemporary scholar who has promoted Confucianism globally, emphasizing 
                its relevance to modern ethical and social issues.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Yu Yingshi (1930-2021)</h4>
              <p className="text-sm text-muted-foreground">
                Historian who provided new interpretations of Confucian intellectual history 
                and its relationship to Chinese modernization.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mou Zongsan (1909-1995)</h4>
              <p className="text-sm text-muted-foreground">
                Philosopher who developed a systematic interpretation of Confucianism 
                that addressed modern philosophical concerns.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Li Zehou (1930-2021)</h4>
              <p className="text-sm text-muted-foreground">
                Scholar who integrated Confucian thought with Marxist philosophy, 
                creating new perspectives on Chinese cultural identity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Issues */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Contemporary Issues and Challenges
          </CardTitle>
          <CardDescription>Modern applications and ongoing debates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Cultural Identity</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Confucianism continues to play a role in shaping Chinese cultural identity 
                and values in the modern world.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Balance between tradition and modernity</li>
                <li>• Integration with global cultural trends</li>
                <li>• Preservation of cultural heritage</li>
                <li>• Adaptation to changing social structures</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Social Harmony</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Confucian principles of harmony, respect, and social responsibility 
                remain relevant to contemporary social issues.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Family relationships and generational dynamics</li>
                <li>• Community building and social cohesion</li>
                <li>• Environmental stewardship and sustainability</li>
                <li>• Global cooperation and peace</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-orange-600">Educational Applications</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Confucian educational principles continue to influence modern approaches 
              to teaching and learning.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Character Education</h5>
                <p className="text-xs text-muted-foreground">
                  Emphasis on moral development and ethical behavior
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Lifelong Learning</h5>
                <p className="text-xs text-muted-foreground">
                  Continuous self-improvement and knowledge acquisition
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Teacher-Student Relationship</h5>
                <p className="text-xs text-muted-foreground">
                  Respect, guidance, and mutual learning
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
              <h4 className="font-semibold mb-3 text-orange-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>The Analects</em> - Core Confucian teachings</li>
                <li>• <em>Mencius</em> - Development of Confucian thought</li>
                <li>• <em>The Great Learning</em> - Educational philosophy</li>
                <li>• <em>The Doctrine of the Mean</em> - Ethical principles</li>
                <li>• <em>Zhu Xi's Collected Commentaries</em> - Neo-Confucian synthesis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-orange-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Confucianism: A Very Short Introduction</em> by Daniel K. Gardner</li>
                <li>• <em>The Trouble with Confucianism</em> by Wm. Theodore de Bary</li>
                <li>• <em>Confucianism and Modernization</em> by Tu Weiming</li>
                <li>• <em>Confucianism in Contemporary China</em> by various authors</li>
                <li>• <em>Global Confucianism</em> by various scholars</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/confucianism/history/early-confucianism">
            Early Confucianism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/confucianism/history/medieval">
            Medieval Confucianism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/confucianism/overview">
            Confucianism Overview
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
  title: 'Modern Confucianism - Historical Development and Contemporary Relevance',
  description: 'Explore the evolution of Confucianism from the late imperial period through the modern era, including its adaptation to contemporary society and global influence.',
  keywords: 'Modern Confucianism, Chinese Philosophy, Neo-Confucianism, Cultural Heritage, Contemporary Confucianism, Global Confucianism, Chinese Intellectual History'
} 