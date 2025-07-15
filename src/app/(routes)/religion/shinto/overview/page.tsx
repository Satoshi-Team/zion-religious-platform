import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Heart, Target, Lightbulb, Globe, Tree, Mountain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shinto Overview - Ancient Japanese Religion and Way of Life',
  description: 'Explore Shinto, the indigenous religion of Japan. Learn about kami (spirits), shrines, purification rituals, and the deep connection between nature, ancestors, and Japanese culture.',
  keywords: 'Shinto, kami, Japanese religion, shrines, purification, nature worship, Japanese culture, indigenous religion',
  openGraph: {
    title: 'Shinto Overview - Ancient Japanese Religion and Way of Life',
    description: 'Discover the ancient spiritual tradition of Japan that honors kami and maintains harmony with nature.',
    type: 'website',
  },
}

const overviewContent = {
  title: 'Shinto',
  subtitle: 'Ancient Japanese Religion and Way of Life',
  description: 'Shinto is the indigenous religion of Japan, characterized by the worship of kami (spirits or deities) and a deep reverence for nature. It emphasizes purification, harmony with the natural world, and respect for ancestors and tradition.',
  
  corePrinciples: [
    {
      title: 'Kami (神)',
      description: 'Sacred spirits or deities that inhabit natural phenomena, objects, and ancestors.',
      icon: Heart
    },
    {
      title: 'Purification (禊)',
      description: 'Ritual cleansing to maintain spiritual purity and harmony with the kami.',
      icon: Target
    },
    {
      title: 'Harmony with Nature',
      description: 'Living in balance with the natural world and respecting all living things.',
      icon: Tree
    },
    {
      title: 'Ancestor Veneration',
      description: 'Honoring and maintaining connection with deceased family members and ancestors.',
      icon: Users
    }
  ],

  keyTeachings: [
    'Respect for all living things and natural phenomena',
    'Maintenance of purity through ritual cleansing',
    'Harmony between humans, nature, and the kami',
    'Gratitude for the blessings of life and nature',
    'Connection with ancestors and family traditions',
    'Simplicity and sincerity in spiritual practice'
  ],

  historicalDevelopment: [
    {
      period: 'Prehistoric Period (Before 300 CE)',
      description: 'Indigenous animistic beliefs and nature worship practices'
    },
    {
      period: 'Yayoi Period (300 BCE-300 CE)',
      description: 'Development of agricultural rituals and community kami worship'
    },
    {
      period: 'Kofun Period (300-538 CE)',
      description: 'Emergence of formal shrine structures and imperial kami worship'
    },
    {
      period: 'Nara and Heian Periods (710-1185)',
      description: 'Integration with Buddhism and development of Shinto theology'
    },
    {
      period: 'Modern Period',
      description: 'Adaptation to contemporary society while preserving traditional practices'
    }
  ],

  culturalImpact: [
    'Shaped Japanese art, architecture, and garden design',
    'Influenced Japanese festivals and seasonal celebrations',
    'Guided principles of environmental stewardship',
    'Promoted community harmony and social cohesion',
    'Influenced Japanese aesthetics and cultural values',
    'Continues to inspire modern Japanese spirituality and culture'
  ]
}

export default function ShintoOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
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
                <principle.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
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
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
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
                <CardTitle className="text-xl text-red-600">{period.period}</CardTitle>
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
                  <Globe className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p>{impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Shinto</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Scriptures</span>
              </CardTitle>
              <CardDescription>
                Sacred texts and mythological works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/scriptures">
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
                Core doctrines and spiritual concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/teachings">
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
              <Link href="/religion/shinto/practices">
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
              <Link href="/religion/shinto/history">
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
              <Link href="/religion/shinto/philosophy">
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
              <Link href="/religion/shinto/impact">
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
              <div className="text-2xl font-bold text-red-600">神道</div>
              <p className="text-sm text-muted-foreground">Shinto (Way of the Gods)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">80,000+</div>
              <p className="text-sm text-muted-foreground">Shrines in Japan</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">8</div>
              <p className="text-sm text-muted-foreground">Million Gods (Kami)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">2,000+</div>
              <p className="text-sm text-muted-foreground">Years of Tradition</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/buddhism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Buddhism
            </Badge>
          </Link>
          <Link href="/religion/confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Confucianism
            </Badge>
          </Link>
          <Link href="/religion/japanese-culture">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Japanese Culture
            </Badge>
          </Link>
          <Link href="/religion/animism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Animism
            </Badge>
          </Link>
          <Link href="/religion/nature-worship">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Nature Worship
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 