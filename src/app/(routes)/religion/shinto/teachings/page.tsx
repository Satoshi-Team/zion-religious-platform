import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Target, Lightbulb, BookOpen, Globe, Star, ArrowRight, Tree } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shinto Teachings - Core Doctrines and Spiritual Concepts',
  description: 'Explore the core teachings of Shinto including kami worship, purification practices, harmony with nature, and the spiritual principles that guide Japanese culture and society.',
  keywords: 'Shinto teachings, kami worship, purification, harmony with nature, Japanese spirituality, Shinto principles',
  openGraph: {
    title: 'Shinto Teachings - Core Doctrines and Spiritual Concepts',
    description: 'Discover the fundamental teachings of Shinto that emphasize harmony with nature and reverence for the kami.',
    type: 'website',
  },
}

const teachingsContent = {
  title: 'Shinto Teachings',
  subtitle: 'Core Doctrines and Spiritual Concepts',
  description: 'Shinto teachings emphasize harmony with nature, purification of mind and body, and reverence for the kami (spirits). The religion focuses on maintaining balance and gratitude in daily life while honoring the sacred connections between humans, nature, and the divine.',

  coreConcepts: [
    {
      title: 'Kami (神)',
      description: 'Sacred spirits or deities that inhabit natural phenomena, objects, and ancestors.',
      details: 'Kami can be found in mountains, rivers, trees, animals, and even human beings. They are not all-powerful but represent the sacred essence of all things.',
      significance: 'The foundation of Shinto belief and practice, representing the divine presence in the natural world.',
      icon: Star
    },
    {
      title: 'Misogi (禊)',
      description: 'Purification rituals to cleanse the body, mind, and spirit.',
      details: 'Includes water purification, salt cleansing, and other rituals to remove impurities and restore harmony.',
      significance: 'Essential for maintaining spiritual purity and proper relationship with the kami.',
      icon: Target
    },
    {
      title: 'Kegare (穢れ)',
      description: 'Spiritual pollution or impurity that disrupts harmony.',
      details: 'Can result from death, illness, or improper behavior and must be cleansed through purification rituals.',
      significance: 'Understanding of impurity helps maintain spiritual and social harmony.',
      icon: Heart
    },
    {
      title: 'Makoto (誠)',
      description: 'Sincerity, truthfulness, and genuine heart in all actions.',
      details: 'Emphasizes honest and pure intentions in worship, daily life, and relationships with others.',
      significance: 'The quality of sincerity is essential for proper communication with the kami.',
      icon: Heart
    }
  ],

  spiritualPrinciples: [
    {
      title: 'Harmony with Nature',
      description: 'Living in balance and respect with the natural world.',
      details: 'Recognizing the sacred nature of all living things and maintaining respectful relationships with the environment.',
      practices: 'Environmental stewardship, seasonal observances, and appreciation of natural beauty.'
    },
    {
      title: 'Gratitude and Appreciation',
      description: 'Expressing thankfulness for the blessings of life and nature.',
      details: 'Recognizing and appreciating the gifts provided by the kami, ancestors, and natural world.',
      practices: 'Daily prayers of thanks, offerings to kami, and mindful appreciation of life\'s blessings.'
    },
    {
      title: 'Community and Family',
      description: 'Maintaining harmonious relationships within family and community.',
      details: 'Emphasizing the importance of family bonds, community cooperation, and social harmony.',
      practices: 'Family rituals, community festivals, and respectful treatment of others.'
    },
    {
      title: 'Ancestor Veneration',
      description: 'Honoring and maintaining connection with deceased family members.',
      details: 'Recognizing the ongoing influence and protection of ancestors in daily life.',
      practices: 'Ancestor memorial services, family altars, and remembrance ceremonies.'
    }
  ],

  moralValues: [
    {
      title: 'Respect for All Life',
      description: 'Treating all living beings with reverence and care.',
      details: 'Recognizing the sacred nature of all life forms and treating them with appropriate respect.',
      application: 'Environmental protection, humane treatment of animals, and sustainable living practices.'
    },
    {
      title: 'Purity of Heart',
      description: 'Maintaining clean and sincere intentions in all actions.',
      details: 'Cultivating honest, pure thoughts and motivations in daily life and spiritual practice.',
      application: 'Self-reflection, honest communication, and ethical decision-making.'
    },
    {
      title: 'Harmony in Relationships',
      description: 'Maintaining peaceful and cooperative relationships with others.',
      details: 'Avoiding conflict, promoting understanding, and working toward mutual benefit.',
      application: 'Conflict resolution, community cooperation, and family harmony.'
    },
    {
      title: 'Diligence and Responsibility',
      description: 'Fulfilling one\'s duties and responsibilities with care and effort.',
      details: 'Taking responsibility for one\'s actions and working diligently in all endeavors.',
      application: 'Work ethic, family responsibilities, and community service.'
    }
  ],

  dailyPractices: [
    {
      title: 'Morning Purification',
      description: 'Daily cleansing rituals to start the day with purity.',
      practices: [
        'Cold water purification (misogi)',
        'Salt cleansing',
        'Prayers of gratitude',
        'Mindful preparation for the day'
      ]
    },
    {
      title: 'Kami Worship',
      description: 'Regular communication and offerings to the kami.',
      practices: [
        'Home shrine (kamidana) maintenance',
        'Daily prayers and offerings',
        'Visits to local shrines',
        'Participation in shrine ceremonies'
      ]
    },
    {
      title: 'Mindful Living',
      description: 'Living with awareness and appreciation of the sacred.',
      practices: [
        'Gratitude for daily blessings',
        'Respectful treatment of others',
        'Environmental consciousness',
        'Family and community care'
      ]
    }
  ],

  seasonalObservances: [
    {
      season: 'Spring',
      observances: [
        'Hinamatsuri (Girls\' Day)',
        'Hanami (Cherry blossom viewing)',
        'Spring purification ceremonies',
        'Agricultural blessing rituals'
      ]
    },
    {
      season: 'Summer',
      observances: [
        'Tanabata (Star Festival)',
        'Obon (Ancestor Festival)',
        'Summer purification rituals',
        'Festivals for good harvest'
      ]
    },
    {
      season: 'Autumn',
      observances: [
        'Harvest festivals',
        'Moon viewing ceremonies',
        'Thanksgiving rituals',
        'Preparation for winter'
      ]
    },
    {
      season: 'Winter',
      observances: [
        'New Year purification',
        'Winter solstice ceremonies',
        'Protection rituals',
        'Preparation for spring'
      ]
    }
  ]
}

export default function ShintoTeachingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          {teachingsContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {teachingsContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {teachingsContent.description}
        </p>
      </div>

      {/* Core Concepts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Concepts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingsContent.coreConcepts.map((concept, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <concept.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{concept.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit text-lg">
                  {concept.title.includes('(') ? concept.title.split('(')[1].split(')')[0] : ''}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{concept.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{concept.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{concept.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Spiritual Principles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Spiritual Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teachingsContent.spiritualPrinciples.map((principle, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{principle.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{principle.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practices:</h4>
                  <p className="text-sm text-muted-foreground">{principle.practices}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Moral Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Moral Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teachingsContent.moralValues.map((value, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{value.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{value.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Application:</h4>
                  <p className="text-sm text-muted-foreground">{value.application}</p>
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
          {teachingsContent.dailyPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{practice.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Practices:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {practice.practices.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seasonal Observances */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Seasonal Observances</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingsContent.seasonalObservances.map((season, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">{season.season}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {season.observances.map((observance, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{observance}</span>
                    </li>
                  ))}
                </ul>
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
              <div className="text-2xl font-bold text-red-600">神</div>
              <p className="text-sm text-muted-foreground">Kami (Spirits)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">禊</div>
              <p className="text-sm text-muted-foreground">Misogi (Purification)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">誠</div>
              <p className="text-sm text-muted-foreground">Makoto (Sincerity)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">4</div>
              <p className="text-sm text-muted-foreground">Seasons of Observance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/buddhism/teachings">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Buddhist Teachings
            </Badge>
          </Link>
          <Link href="/religion/confucianism/teachings">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Confucian Teachings
            </Badge>
          </Link>
          <Link href="/religion/japanese-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Japanese Philosophy
            </Badge>
          </Link>
          <Link href="/religion/nature-worship">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Nature Worship
            </Badge>
          </Link>
          <Link href="/religion/animism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Animism
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 