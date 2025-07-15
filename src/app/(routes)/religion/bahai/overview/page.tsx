import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Heart, Target, Lightbulb, Globe, Star, Unity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bahai Faith Overview - Unity, Progressive Revelation, and World Peace',
  description: 'Explore the Bahai Faith, a modern religion founded by Baha\'u\'llah that emphasizes the unity of humanity, progressive revelation, and the establishment of world peace and justice.',
  keywords: 'Bahai Faith, Baha\'u\'llah, unity of humanity, progressive revelation, world peace, Bahai teachings',
  openGraph: {
    title: 'Bahai Faith Overview - Unity, Progressive Revelation, and World Peace',
    description: 'Discover the Bahai Faith and its vision for a united and peaceful world.',
    type: 'website',
  },
}

const overviewContent = {
  title: 'Bahai Faith',
  subtitle: 'Unity, Progressive Revelation, and World Peace',
  description: 'The Bahai Faith is a modern religion founded by Baha\'u\'llah in the 19th century that emphasizes the unity of humanity, progressive revelation, and the establishment of world peace and justice. It teaches that all religions come from the same divine source and that humanity is evolving toward a unified global civilization.',
  
  corePrinciples: [
    {
      title: 'Unity of Humanity',
      description: 'The fundamental principle that all human beings are one family.',
      icon: Unity
    },
    {
      title: 'Progressive Revelation',
      description: 'The belief that God sends divine messengers throughout history to guide humanity.',
      icon: Star
    },
    {
      title: 'Equality of Men and Women',
      description: 'Full equality between the sexes in all aspects of life.',
      icon: Users
    },
    {
      title: 'World Peace',
      description: 'The establishment of lasting peace and justice for all humanity.',
      icon: Heart
    }
  ],

  keyTeachings: [
    'The oneness of God and the unity of all religions',
    'The essential harmony of science and religion',
    'Elimination of all forms of prejudice and discrimination',
    'Universal education and the elimination of extremes of wealth and poverty',
    'The establishment of a world federal system',
    'The adoption of a universal auxiliary language'
  ],

  historicalDevelopment: [
    {
      period: 'Bab\'s Ministry (1844-1850)',
      description: 'The Bab announces the coming of a new divine messenger and prepares the way'
    },
    {
      period: 'Baha\'u\'llah\'s Ministry (1853-1892)',
      description: 'Baha\'u\'llah reveals the Bahai teachings and establishes the faith'
    },
    {
      period: 'Abdu\'l-Baha\'s Ministry (1892-1921)',
      description: 'Abdu\'l-Baha interprets and expands on his father\'s teachings'
    },
    {
      period: 'Shoghi Effendi\'s Ministry (1921-1957)',
      description: 'Shoghi Effendi develops the administrative order and spreads the faith globally'
    },
    {
      period: 'Universal House of Justice (1963-Present)',
      description: 'The elected international governing body guides the global Bahai community'
    }
  ],

  culturalImpact: [
    'Promotes interfaith dialogue and religious unity',
    'Advances the cause of world peace and international cooperation',
    'Contributes to social and economic development projects',
    'Promotes education and literacy worldwide',
    'Advances the status of women and gender equality',
    'Influences global governance and international relations'
  ]
}

export default function BahaiOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
                <principle.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
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
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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
                <CardTitle className="text-xl text-blue-600">{period.period}</CardTitle>
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
                  <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p>{impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Bahai Faith</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Scriptures</span>
              </CardTitle>
              <CardDescription>
                Sacred texts and writings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/bahai/scriptures">
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
                Core doctrines and principles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/bahai/teachings">
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
              <Link href="/religion/bahai/practices">
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
              <Link href="/religion/bahai/history">
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
              <Link href="/religion/bahai/philosophy">
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
              <Link href="/religion/bahai/impact">
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
              <div className="text-2xl font-bold text-blue-600">1844</div>
              <p className="text-sm text-muted-foreground">Declaration of the Bab</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">1863</div>
              <p className="text-sm text-muted-foreground">Declaration of Baha\'u\'llah</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">8+ Million</div>
              <p className="text-sm text-muted-foreground">Bahais Worldwide</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <p className="text-sm text-muted-foreground">Countries and Territories</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/islam">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Islam
            </Badge>
          </Link>
          <Link href="/religion/christianity">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Christianity
            </Badge>
          </Link>
          <Link href="/religion/judaism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Judaism
            </Badge>
          </Link>
          <Link href="/religion/interfaith-dialogue">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Interfaith Dialogue
            </Badge>
          </Link>
          <Link href="/religion/world-peace">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              World Peace
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 