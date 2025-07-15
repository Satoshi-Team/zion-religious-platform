import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Users, Heart, Target, BookOpen, Lightbulb, Globe, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Practices - Rituals, Ceremonies, and Daily Life',
  description: 'Explore the practices of Confucianism including ancestor worship, ritual ceremonies, educational practices, and daily ethical conduct that promote social harmony and moral cultivation.',
  keywords: 'Confucian practices, ancestor worship, ritual ceremonies, filial piety, educational practices, moral cultivation, social harmony, Chinese rituals',
  openGraph: {
    title: 'Confucian Practices - Rituals, Ceremonies, and Daily Life',
    description: 'Discover the traditional practices of Confucianism that promote moral cultivation, social harmony, and proper relationships.',
    type: 'website',
  },
}

const practicesContent = {
  title: 'Confucian Practices',
  subtitle: 'Rituals, Ceremonies, and Daily Life',
  description: 'Confucian practices emphasize moral cultivation, social harmony, and proper relationships through rituals, ceremonies, and daily ethical conduct. These practices are designed to develop virtuous character and maintain social order.',

  ritualPractices: [
    {
      title: 'Ancestor Worship',
      description: 'Ritual veneration of deceased family members and ancestors.',
      details: 'Includes offerings of food, incense, and prayers at ancestral tablets or graves. Performed on death anniversaries, festivals, and special occasions.',
      significance: 'Demonstrates filial piety and maintains connection with family heritage.',
      icon: Heart
    },
    {
      title: 'Confucian Ceremonies',
      description: 'Formal rituals marking important life events and social occasions.',
      details: 'Coming of age ceremonies, weddings, funerals, and official ceremonies. Each follows specific protocols and etiquette.',
      significance: 'Reinforces social roles and responsibilities while promoting harmony.',
      icon: Calendar
    },
    {
      title: 'Temple Rituals',
      description: 'Ceremonies performed at Confucian temples and shrines.',
      details: 'Offerings to Confucius and other sages, reading of classical texts, and moral instruction.',
      significance: 'Honors the tradition and promotes moral education.',
      icon: Target
    }
  ],

  dailyPractices: [
    {
      title: 'Self-Cultivation',
      description: 'Daily practices for moral and intellectual development.',
      details: 'Reading classical texts, meditation, reflection, and moral self-examination.',
      significance: 'Develops virtuous character and wisdom.',
      icon: Lightbulb
    },
    {
      title: 'Filial Piety',
      description: 'Daily expressions of respect and care for parents and elders.',
      details: 'Attending to parents\' needs, showing respect, and maintaining family harmony.',
      significance: 'Foundation of all other relationships and social harmony.',
      icon: Heart
    },
    {
      title: 'Proper Conduct',
      description: 'Observing etiquette and proper behavior in all situations.',
      details: 'Following appropriate dress codes, speech patterns, and social protocols.',
      significance: 'Maintains social order and demonstrates respect for others.',
      icon: Users
    }
  ],

  educationalPractices: [
    {
      title: 'Classical Study',
      description: 'Intensive study of Confucian texts and commentaries.',
      details: 'Memorization, recitation, and interpretation of the Five Classics and Four Books.',
      significance: 'Transmits cultural knowledge and moral wisdom.',
      icon: BookOpen
    },
    {
      title: 'Teacher-Student Relationship',
      description: 'Respectful learning relationship based on mutual respect.',
      details: 'Students show deference to teachers, teachers guide moral and intellectual development.',
      significance: 'Model for proper relationships and knowledge transmission.',
      icon: Users
    },
    {
      title: 'Civil Service Examination',
      description: 'Traditional system for selecting government officials.',
      details: 'Based on knowledge of Confucian classics and ability to apply moral principles.',
      significance: 'Promoted meritocracy and moral leadership in government.',
      icon: Target
    }
  ],

  familyPractices: [
    {
      title: 'Family Rituals',
      description: 'Ceremonies and practices within the family unit.',
      details: 'Birth celebrations, coming of age ceremonies, weddings, and funerals.',
      significance: 'Strengthens family bonds and transmits cultural values.',
      icon: Home
    },
    {
      title: 'Household Management',
      description: 'Proper organization and conduct of family affairs.',
      details: 'Division of responsibilities, financial management, and moral guidance.',
      significance: 'Creates harmonious family environment and social stability.',
      icon: Home
    },
    {
      title: 'Intergenerational Respect',
      description: 'Proper relationships between different generations.',
      details: 'Younger generations respect and care for elders, elders guide and nurture younger.',
      significance: 'Maintains family harmony and cultural continuity.',
      icon: Users
    }
  ],

  socialPractices: [
    {
      title: 'Community Harmony',
      description: 'Practices that promote social cohesion and cooperation.',
      details: 'Community festivals, mutual aid, and collective decision-making.',
      significance: 'Strengthens social bonds and promotes collective welfare.',
      icon: Globe
    },
    {
      title: 'Leadership and Governance',
      description: 'Moral leadership practices for officials and community leaders.',
      details: 'Leading by example, promoting education, and ensuring social welfare.',
      significance: 'Creates just and harmonious society.',
      icon: Target
    },
    {
      title: 'Interpersonal Relationships',
      description: 'Proper conduct in various social relationships.',
      details: 'Following the Five Relationships: ruler-subject, father-son, husband-wife, elder-younger, friend-friend.',
      significance: 'Maintains social order and promotes mutual respect.',
      icon: Users
    }
  ],

  modernAdaptations: [
    'Integration with contemporary education systems',
    'Application to business ethics and leadership',
    'Adaptation to modern family structures',
    'Use in conflict resolution and mediation',
    'Application to environmental ethics',
    'Integration with other religious and philosophical traditions'
  ]
}

export default function ConfucianismPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {practicesContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {practicesContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {practicesContent.description}
        </p>
      </div>

      {/* Ritual Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ritual Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.ritualPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-orange-600" />
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
                  <practice.icon className="w-6 h-6 text-orange-600" />
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

      {/* Educational Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.educationalPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-orange-600" />
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

      {/* Family Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Family Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.familyPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-orange-600" />
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

      {/* Social Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Social Practices</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {practicesContent.socialPractices.map((practice, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <practice.icon className="w-6 h-6 text-orange-600" />
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
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Overview</span>
              </CardTitle>
              <CardDescription>
                Introduction to Confucianism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/overview">
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
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Five Relationships</p>
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
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-sm text-muted-foreground">Three Guidelines</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">8</div>
              <p className="text-sm text-muted-foreground">Eight Steps</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/practices">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoist Practices
            </Badge>
          </Link>
          <Link href="/religion/buddhism/practices">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhist Practices
            </Badge>
          </Link>
          <Link href="/religion/chinese-rituals">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese Rituals
            </Badge>
          </Link>
          <Link href="/religion/ancestor-worship">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Ancestor Worship
            </Badge>
          </Link>
          <Link href="/religion/east-asian-culture">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian Culture
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 