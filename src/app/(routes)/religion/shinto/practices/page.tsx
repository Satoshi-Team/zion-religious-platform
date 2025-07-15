import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Users, Heart, Target, BookOpen, Lightbulb, Globe, Home, Tree } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shinto Practices - Rituals, Ceremonies, and Daily Life',
  description: 'Explore the practices of Shinto including purification rituals, shrine ceremonies, seasonal festivals, and daily practices that maintain harmony with the kami and natural world.',
  keywords: 'Shinto practices, purification rituals, shrine ceremonies, seasonal festivals, kami worship, Japanese rituals',
  openGraph: {
    title: 'Shinto Practices - Rituals, Ceremonies, and Daily Life',
    description: 'Discover the traditional practices of Shinto that promote spiritual purity and harmony with the natural world.',
    type: 'website',
  },
}

const practicesContent = {
  title: 'Shinto Practices',
  subtitle: 'Rituals, Ceremonies, and Daily Life',
  description: 'Shinto practices emphasize purification, harmony with nature, and proper communication with the kami. These practices range from daily personal rituals to elaborate community ceremonies and seasonal festivals.',

  purificationPractices: [
    {
      title: 'Misogi (禊)',
      description: 'Water purification rituals to cleanse body, mind, and spirit.',
      details: 'Includes cold water immersion, waterfall purification, and ritual bathing to remove spiritual impurities.',
      significance: 'Essential for maintaining spiritual purity and proper relationship with the kami.',
      icon: Target
    },
    {
      title: 'Salt Purification',
      description: 'Using salt to cleanse spaces, objects, and people.',
      details: 'Sprinkling salt around doorways, on people, or in spaces to remove negative influences and impurities.',
      significance: 'Salt is considered purifying and protective in Shinto tradition.',
      icon: Heart
    },
    {
      title: 'Harai (祓)',
      description: 'Ritual purification ceremonies performed by priests.',
      details: 'Formal purification ceremonies using sacred objects like gohei (paper streamers) and tamagushi (sacred branches).',
      significance: 'Removes spiritual pollution and restores harmony with the kami.',
      icon: Users
    }
  ],

  shrinePractices: [
    {
      title: 'Shrine Visits',
      description: 'Regular visits to shrines to pay respects to the kami.',
      details: 'Includes bowing, clapping, offering prayers, and making offerings at shrine altars.',
      significance: 'Maintains connection with the kami and shows respect for the sacred.',
      icon: Home
    },
    {
      title: 'Kamidana (神棚)',
      description: 'Home shrine for daily worship and offerings.',
      details: 'Small altar in the home where daily prayers and offerings are made to the kami and ancestors.',
      significance: 'Brings the sacred into daily life and maintains family spiritual practices.',
      icon: Home
    },
    {
      title: 'Omamori (御守)',
      description: 'Sacred amulets and talismans for protection and blessings.',
      details: 'Small charms purchased at shrines that provide protection, good fortune, or specific blessings.',
      significance: 'Physical connection to the kami and reminder of spiritual protection.',
      icon: Heart
    }
  ],

  seasonalPractices: [
    {
      title: 'New Year (正月)',
      description: 'Annual purification and renewal ceremonies.',
      details: 'Hatsumode (first shrine visit), purification rituals, and prayers for the new year.',
      significance: 'Starts the year with spiritual purity and good fortune.',
      icon: Calendar
    },
    {
      title: 'Obon (お盆)',
      description: 'Ancestor festival and remembrance ceremonies.',
      details: 'Welcoming ancestors back to the world of the living, offering food and prayers.',
      significance: 'Maintains connection with ancestors and shows filial piety.',
      icon: Users
    },
    {
      title: 'Seasonal Festivals',
      description: 'Festivals marking seasonal changes and agricultural cycles.',
      details: 'Spring festivals for good harvest, summer purification, autumn thanksgiving, winter preparation.',
      significance: 'Maintains harmony with natural cycles and shows gratitude for nature\'s bounty.',
      icon: Tree
    }
  ],

  dailyPractices: [
    {
      title: 'Morning Rituals',
      description: 'Daily purification and prayer practices.',
      details: 'Cold water purification, prayers of gratitude, and preparation for the day.',
      significance: 'Starts each day with spiritual purity and proper mindset.',
      icon: Target
    },
    {
      title: 'Meal Blessings',
      description: 'Expressing gratitude before and after meals.',
      details: 'Saying "itadakimasu" before eating and "gochisosama" after, showing gratitude for food.',
      significance: 'Recognizes the sacred nature of food and shows appreciation for life\'s blessings.',
      icon: Heart
    },
    {
      title: 'Mindful Living',
      description: 'Living with awareness of the sacred in daily activities.',
      details: 'Being mindful of one\'s actions, showing respect for others and the environment.',
      significance: 'Maintains spiritual awareness and harmony in daily life.',
      icon: Lightbulb
    }
  ],

  ceremonialPractices: [
    {
      title: 'Wedding Ceremonies',
      description: 'Traditional Shinto wedding rituals.',
      details: 'Purification ceremonies, sake sharing, and prayers for marital harmony and fertility.',
      significance: 'Blesses the marriage and ensures harmony between families.',
      icon: Users
    },
    {
      title: 'Coming of Age',
      description: 'Ceremonies marking the transition to adulthood.',
      details: 'Purification rituals, prayers for wisdom and responsibility, and community recognition.',
      significance: 'Acknowledges the spiritual and social transition to adulthood.',
      icon: Users
    },
    {
      title: 'Groundbreaking',
      description: 'Ceremonies for new construction and development.',
      details: 'Purification of the land, prayers to local kami, and requests for protection and blessing.',
      significance: 'Ensures harmony with the land and local kami spirits.',
      icon: Home
    }
  ],

  communityPractices: [
    {
      title: 'Matsuri (祭り)',
      description: 'Community festivals and celebrations.',
      details: 'Parades, music, dance, and ceremonies involving the entire community.',
      significance: 'Strengthens community bonds and honors local kami.',
      icon: Users
    },
    {
      title: 'Shrine Maintenance',
      description: 'Community care and maintenance of local shrines.',
      details: 'Cleaning, repairs, and upkeep of shrine buildings and grounds.',
      significance: 'Shows respect for the kami and maintains sacred spaces.',
      icon: Home
    },
    {
      title: 'Environmental Stewardship',
      description: 'Caring for natural areas and sacred sites.',
      details: 'Protecting forests, rivers, and other natural areas considered sacred.',
      significance: 'Maintains harmony with nature and respects the kami of natural places.',
      icon: Tree
    }
  ],

  modernAdaptations: [
    'Integration with modern lifestyle and technology',
    'Adaptation to urban environments and contemporary needs',
    'Use in business and organizational settings',
    'Application to environmental conservation efforts',
    'Integration with other spiritual practices',
    'Use in personal development and wellness'
  ]
}

export default function ShintoPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          {practicesContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {practicesContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {practicesContent.description}
        </p>
      </div>

      {/* Purification Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Purification Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.purificationPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shrine Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Shrine Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.shrinePractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seasonal Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Seasonal Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.seasonalPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Daily Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Daily Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.dailyPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ceremonial Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ceremonial Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.ceremonialPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Community Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.communityPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{practice.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Modern Adaptations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Modern Adaptations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicesContent.modernAdaptations.map((adaptation, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>{adaptation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Further</h2>
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Overview</span>
              </CardTitle>
              <CardDescription>
                Introduction to Shinto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/overview">
                <Button className="w-full">Back to Overview</Button>
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
              <div className="text-2xl font-bold text-red-600">禊</div>
              <p className="text-sm text-muted-foreground">Misogi (Purification)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">神棚</div>
              <p className="text-sm text-muted-foreground">Kamidana (Home Shrine)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">祭り</div>
              <p className="text-sm text-muted-foreground">Matsuri (Festival)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">御守</div>
              <p className="text-sm text-muted-foreground">Omamori (Amulet)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/buddhism/practices">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Buddhist Practices
            </Badge>
          </Link>
          <Link href="/religion/japanese-culture">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Japanese Culture
            </Badge>
          </Link>
          <Link href="/religion/japanese-festivals">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Japanese Festivals
            </Badge>
          </Link>
          <Link href="/religion/purification-rituals">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Purification Rituals
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