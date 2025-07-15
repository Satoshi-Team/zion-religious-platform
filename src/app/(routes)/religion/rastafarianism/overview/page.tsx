import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Heart, Target, Lightbulb, Globe, Star, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rastafarianism Overview - African Spirituality and Liberation',
  description: 'Explore Rastafarianism, a religious and cultural movement that emerged in Jamaica in the 1930s. Learn about its African roots, spiritual beliefs, and commitment to liberation and social justice.',
  keywords: 'Rastafarianism, Rastafari, Haile Selassie, Jamaica, African spirituality, liberation theology, reggae music',
  openGraph: {
    title: 'Rastafarianism Overview - African Spirituality and Liberation',
    description: 'Discover the spiritual and cultural movement that celebrates African heritage and promotes liberation.',
    type: 'website',
  },
}

const overviewContent = {
  title: 'Rastafarianism',
  subtitle: 'African Spirituality and Liberation',
  description: 'Rastafarianism is a religious and cultural movement that emerged in Jamaica in the 1930s, emphasizing African heritage, spiritual liberation, and social justice. It combines elements of Christianity, African spirituality, and Pan-Africanism to create a unique spiritual path focused on freedom, equality, and connection to African roots.',
  
  corePrinciples: [
    {
      title: 'African Identity',
      description: 'Reconnection with African heritage and rejection of European cultural dominance.',
      icon: Heart
    },
    {
      title: 'Divine Kingship',
      description: 'Recognition of Haile Selassie I as the living God and messiah.',
      icon: Star
    },
    {
      title: 'Liberation Theology',
      description: 'Spiritual and physical liberation from oppression and injustice.',
      icon: Target
    },
    {
      title: 'Natural Living',
      description: 'Living in harmony with nature and following natural laws.',
      icon: Globe
    }
  ],

  keyTeachings: [
    'The divinity of Emperor Haile Selassie I of Ethiopia',
    'The importance of African identity and heritage',
    'Rejection of Babylon (oppressive systems)',
    'Natural living and dietary practices (Ital)',
    'Spiritual and physical liberation for all people',
    'Unity and equality among all human beings'
  ],

  historicalDevelopment: [
    {
      period: 'Early 1930s',
      description: 'Emergence in Jamaica following the coronation of Haile Selassie I'
    },
    {
      period: '1940s-1950s',
      description: 'Development of Rastafari communities and spiritual practices'
    },
    {
      period: '1960s-1970s',
      description: 'Growth and influence through reggae music and cultural expression'
    },
    {
      period: '1980s-Present',
      description: 'Global spread and adaptation to different cultural contexts'
    }
  ],

  culturalImpact: [
    'Influenced reggae music and Jamaican culture',
    'Promoted African consciousness and identity',
    'Contributed to liberation movements worldwide',
    'Influenced fashion, language, and lifestyle',
    'Promoted environmental awareness and natural living',
    'Inspired social justice and human rights movements'
  ]
}

export default function RastafarianismOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
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
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Rastafarianism</h2>
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
              <Link href="/religion/rastafarianism/scriptures">
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
              <Link href="/religion/rastafarianism/teachings">
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
              <Link href="/religion/rastafarianism/practices">
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
              <Link href="/religion/rastafarianism/history">
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
              <Link href="/religion/rastafarianism/philosophy">
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
              <Link href="/religion/rastafarianism/impact">
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
              <div className="text-2xl font-bold text-green-600">1930</div>
              <p className="text-sm text-muted-foreground">Emergence in Jamaica</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">1930</div>
              <p className="text-sm text-muted-foreground">Haile Selassie Coronation</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">Ethiopia</div>
              <p className="text-sm text-muted-foreground">Promised Land (Zion)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">Global</div>
              <p className="text-sm text-muted-foreground">Worldwide Movement</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/christianity">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Christianity
            </Badge>
          </Link>
          <Link href="/religion/african-spirituality">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              African Spirituality
            </Badge>
          </Link>
          <Link href="/religion/liberation-theology">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Liberation Theology
            </Badge>
          </Link>
          <Link href="/religion/reggae-music">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Reggae Music
            </Badge>
          </Link>
          <Link href="/religion/pan-africanism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Pan-Africanism
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 