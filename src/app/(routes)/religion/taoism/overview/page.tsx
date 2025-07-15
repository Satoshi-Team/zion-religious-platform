import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Heart, Target, Lightbulb, Globe, YinYang, Mountain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taoism Overview - Ancient Chinese Philosophy and Religion',
  description: 'Explore Taoism, the ancient Chinese philosophy and religion founded on the teachings of Laozi. Learn about the Tao, Wu Wei, Yin and Yang, and the pursuit of harmony with nature.',
  keywords: 'Taoism, Daoism, Laozi, Tao Te Ching, Wu Wei, Yin Yang, Chinese philosophy, natural harmony, Tao',
  openGraph: {
    title: 'Taoism Overview - Ancient Chinese Philosophy and Religion',
    description: 'Discover the wisdom of Taoism and its profound teachings about living in harmony with the natural way.',
    type: 'website',
  },
}

const overviewContent = {
  title: 'Taoism',
  subtitle: 'Ancient Chinese Philosophy and Religion',
  description: 'Taoism (Daoism) is one of the major philosophical and religious traditions of China, emphasizing harmony with the Tao (the Way), natural simplicity, and the balance of opposing forces. It teaches the art of living in accordance with the natural order of the universe.',
  
  corePrinciples: [
    {
      title: 'Tao (The Way)',
      description: 'The ultimate reality and natural order that governs all things in the universe.',
      icon: Target
    },
    {
      title: 'Wu Wei (Non-Action)',
      description: 'The practice of effortless action and going with the natural flow of things.',
      icon: Heart
    },
    {
      title: 'Yin and Yang',
      description: 'The complementary and interconnected nature of opposing forces in the universe.',
      icon: YinYang
    },
    {
      title: 'Natural Simplicity',
      description: 'Living simply and in harmony with nature, free from artificial desires.',
      icon: Mountain
    }
  ],

  keyTeachings: [
    'Harmony with the natural way of the universe',
    'Simplicity and contentment with what is',
    'Non-interference and letting things take their course',
    'Balance between opposing forces and energies',
    'Spontaneous and effortless action',
    'Inner peace through alignment with the Tao'
  ],

  historicalDevelopment: [
    {
      period: 'Ancient Period (6th-4th century BCE)',
      description: 'Life of Laozi and compilation of the Tao Te Ching'
    },
    {
      period: 'Warring States Period (475-221 BCE)',
      description: 'Development by Zhuangzi and other early Taoist philosophers'
    },
    {
      period: 'Han Dynasty (206 BCE-220 CE)',
      description: 'Emergence of religious Taoism and institutional development'
    },
    {
      period: 'Tang Dynasty (618-907 CE)',
      description: 'Golden age of Taoism, integration with Buddhism and Confucianism'
    },
    {
      period: 'Modern Period',
      description: 'Adaptation to contemporary society and global influence'
    }
  ],

  culturalImpact: [
    'Shaped Chinese art, literature, and poetry',
    'Influenced traditional Chinese medicine and health practices',
    'Guided principles of governance and leadership',
    'Promoted environmental awareness and nature appreciation',
    'Influenced martial arts and physical practices',
    'Continues to inspire modern philosophy and lifestyle movements'
  ]
}

export default function TaoismOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
                <principle.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
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
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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
                <CardTitle className="text-xl text-green-600">{period.period}</CardTitle>
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
                  <Globe className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p>{impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Taoism</h2>
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
              <Link href="/religion/taoism/scriptures">
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
              <Link href="/religion/taoism/teachings">
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
              <Link href="/religion/taoism/practices">
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
              <Link href="/religion/taoism/history">
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
              <Link href="/religion/taoism/philosophy">
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
              <Link href="/religion/taoism/impact">
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
              <div className="text-2xl font-bold text-green-600">6th BCE</div>
              <p className="text-sm text-muted-foreground">Traditional founding</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">81</div>
              <p className="text-sm text-muted-foreground">Tao Te Ching chapters</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">道</div>
              <p className="text-sm text-muted-foreground">Tao (The Way)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">2,500+</div>
              <p className="text-sm text-muted-foreground">Years of influence</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Confucianism
            </Badge>
          </Link>
          <Link href="/religion/buddhism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Buddhism
            </Badge>
          </Link>
          <Link href="/religion/chinese-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Chinese Philosophy
            </Badge>
          </Link>
          <Link href="/religion/neo-confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Neo-Confucianism
            </Badge>
          </Link>
          <Link href="/religion/east-asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              East Asian Philosophy
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 