import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Heart, Target, Lightbulb, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucianism Overview - Ancient Chinese Philosophy and Way of Life',
  description: 'Explore Confucianism, the ancient Chinese philosophy founded by Confucius. Learn about its core teachings, ethical principles, social harmony, and lasting influence on East Asian culture and society.',
  keywords: 'Confucianism, Confucius, Chinese philosophy, ethics, social harmony, filial piety, ren, li, junzi, East Asian culture',
  openGraph: {
    title: 'Confucianism Overview - Ancient Chinese Philosophy and Way of Life',
    description: 'Discover the wisdom of Confucius and the profound influence of Confucianism on Chinese culture, ethics, and social harmony.',
    type: 'website',
  },
}

const overviewContent = {
  title: 'Confucianism',
  subtitle: 'Ancient Chinese Philosophy and Way of Life',
  description: 'Confucianism is one of the most influential philosophical and ethical systems in Chinese history, founded by Confucius (Kong Fuzi) in the 6th-5th century BCE. It emphasizes moral cultivation, social harmony, and proper relationships as the foundation for a well-ordered society.',
  
  corePrinciples: [
    {
      title: 'Ren (Humaneness)',
      description: 'The virtue of compassion, benevolence, and human-heartedness that forms the foundation of moral character.',
      icon: Heart
    },
    {
      title: 'Li (Ritual Propriety)',
      description: 'Proper conduct, etiquette, and ritual that maintain social order and harmony.',
      icon: Target
    },
    {
      title: 'Xiao (Filial Piety)',
      description: 'Respect and care for parents and ancestors, the cornerstone of family relationships.',
      icon: Users
    },
    {
      title: 'Junzi (Noble Person)',
      description: 'The ideal of the morally cultivated person who serves as a model for others.',
      icon: Lightbulb
    }
  ],

  keyTeachings: [
    'The importance of education and self-cultivation',
    'Social harmony through proper relationships',
    'Moral leadership and virtuous governance',
    'Respect for tradition and cultural heritage',
    'The Golden Rule: "Do not do to others what you do not want done to yourself"',
    'The Five Relationships: ruler-subject, father-son, husband-wife, elder-younger, friend-friend'
  ],

  historicalDevelopment: [
    {
      period: 'Ancient Period (551-479 BCE)',
      description: 'Life and teachings of Confucius, compilation of the Analects'
    },
    {
      period: 'Warring States Period (475-221 BCE)',
      description: 'Development by Mencius and Xunzi, expansion of Confucian thought'
    },
    {
      period: 'Han Dynasty (206 BCE-220 CE)',
      description: 'Official adoption as state ideology, establishment of civil service examinations'
    },
    {
      period: 'Song Dynasty (960-1279)',
      description: 'Neo-Confucianism, synthesis with Buddhism and Daoism'
    },
    {
      period: 'Modern Period',
      description: 'Adaptation to contemporary society, global influence'
    }
  ],

  culturalImpact: [
    'Shaped Chinese social structure and family values',
    'Influenced education systems and civil service',
    'Guided principles of governance and leadership',
    'Promoted cultural unity and identity',
    'Spread throughout East Asia (Korea, Japan, Vietnam)',
    'Continues to influence modern business and social ethics'
  ]
}

export default function ConfucianismOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {overviewContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {overviewContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {overviewContent.description}
        </p>
      </div>

      {/* Core Principles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewContent.corePrinciples.map((principle, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <principle.icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Teachings */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Teachings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {overviewContent.keyTeachings.map((teaching, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg">{teaching}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Historical Development */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Development</h2>
        <div className="space-y-6">
          {overviewContent.historicalDevelopment.map((period, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{period.period}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{period.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewContent.culturalImpact.map((impact, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <p>{impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Confucianism</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Scriptures</span>
              </CardTitle>
              <CardDescription>
                Sacred texts and philosophical works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/scriptures">
                <Button className="w-full">Explore Scriptures</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Teachings</span>
              </CardTitle>
              <CardDescription>
                Core doctrines and philosophical concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/teachings">
                <Button className="w-full">Learn Teachings</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Practices</span>
              </CardTitle>
              <CardDescription>
                Rituals, ceremonies, and daily practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/practices">
                <Button className="w-full">Discover Practices</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>History</span>
              </CardTitle>
              <CardDescription>
                Historical development and influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/history">
                <Button className="w-full">Study History</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Philosophy</span>
              </CardTitle>
              <CardDescription>
                Philosophical concepts and worldview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/philosophy">
                <Button className="w-full">Explore Philosophy</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Impact</span>
              </CardTitle>
              <CardDescription>
                Cultural and social influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/impact">
                <Button className="w-full">Learn Impact</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">551 BCE</div>
              <p className="text-sm text-muted-foreground">Birth of Confucius</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Five Classics</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <p className="text-sm text-muted-foreground">Four Books</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">2,500+</div>
              <p className="text-sm text-muted-foreground">Years of Influence</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoism
            </Badge>
          </Link>
          <Link href="/religion/buddhism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhism
            </Badge>
          </Link>
          <Link href="/religion/chinese-folk-religion">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese Folk Religion
            </Badge>
          </Link>
          <Link href="/religion/neo-confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Neo-Confucianism
            </Badge>
          </Link>
          <Link href="/religion/east-asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian Philosophy
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 