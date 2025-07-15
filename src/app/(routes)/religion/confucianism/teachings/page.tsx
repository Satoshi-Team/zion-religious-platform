import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Target, Lightbulb, BookOpen, Globe, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Teachings - Core Doctrines and Philosophical Concepts',
  description: 'Explore the core teachings of Confucianism including Ren (humaneness), Li (ritual propriety), Xiao (filial piety), and the concept of the Junzi (noble person). Learn about the Five Relationships and moral cultivation.',
  keywords: 'Confucian teachings, Ren, Li, Xiao, Junzi, Five Relationships, moral cultivation, Chinese philosophy, Confucius teachings',
  openGraph: {
    title: 'Confucian Teachings - Core Doctrines and Philosophical Concepts',
    description: 'Discover the fundamental teachings of Confucius that have shaped Chinese culture and philosophy for over two millennia.',
    type: 'website',
  },
}

const teachingsContent = {
  title: 'Confucian Teachings',
  subtitle: 'Core Doctrines and Philosophical Concepts',
  description: 'Confucian teachings center on moral cultivation, social harmony, and proper relationships. The philosophy emphasizes the development of virtuous character and the importance of education in creating a harmonious society.',

  coreVirtues: [
    {
      title: 'Ren (Humaneness)',
      chinese: '仁',
      description: 'The supreme virtue of compassion, benevolence, and human-heartedness.',
      details: 'Ren is the foundation of all other virtues and represents the ideal of treating others with kindness and respect. It involves empathy, compassion, and the ability to put oneself in another\'s position.',
      significance: 'Forms the basis for all moral relationships and social harmony.',
      icon: Heart
    },
    {
      title: 'Li (Ritual Propriety)',
      chinese: '礼',
      description: 'Proper conduct, etiquette, and ritual that maintain social order.',
      details: 'Li encompasses all forms of proper behavior, from formal ceremonies to daily interactions. It includes etiquette, manners, and the observance of traditional customs and rituals.',
      significance: 'Creates social harmony and demonstrates respect for others and tradition.',
      icon: Target
    },
    {
      title: 'Xiao (Filial Piety)',
      chinese: '孝',
      description: 'Respect and care for parents and ancestors.',
      details: 'Xiao is the foundation of family relationships and extends to respect for all elders and authority figures. It includes both material support and emotional care.',
      significance: 'The cornerstone of all other relationships and social stability.',
      icon: Users
    },
    {
      title: 'Yi (Righteousness)',
      chinese: '义',
      description: 'Moral rightness and the sense of duty.',
      details: 'Yi involves doing what is morally right regardless of personal gain or loss. It includes integrity, honesty, and the courage to stand up for what is just.',
      significance: 'Ensures moral behavior and social justice.',
      icon: Star
    },
    {
      title: 'Zhi (Wisdom)',
      chinese: '智',
      description: 'Knowledge, understanding, and practical wisdom.',
      details: 'Zhi involves both theoretical knowledge and practical understanding. It includes the ability to apply moral principles in real situations.',
      significance: 'Guides moral decision-making and personal development.',
      icon: Lightbulb
    },
    {
      title: 'Xin (Trustworthiness)',
      chinese: '信',
      description: 'Faithfulness, reliability, and keeping one\'s word.',
      details: 'Xin involves being honest, reliable, and trustworthy in all relationships. It includes both keeping promises and being truthful.',
      significance: 'Essential for maintaining relationships and social trust.',
      icon: Heart
    }
  ],

  fiveRelationships: [
    {
      relationship: 'Ruler and Subject',
      description: 'The ruler should be benevolent and just, while subjects should be loyal and obedient.',
      principle: 'Mutual responsibility and moral leadership'
    },
    {
      relationship: 'Father and Son',
      description: 'Fathers should be caring and instructive, while sons should be respectful and filial.',
      principle: 'Filial piety and parental care'
    },
    {
      relationship: 'Husband and Wife',
      description: 'Husbands should be righteous and kind, while wives should be obedient and supportive.',
      principle: 'Mutual respect and harmony'
    },
    {
      relationship: 'Elder and Younger',
      description: 'Elders should be gentle and caring, while younger people should be respectful and deferential.',
      principle: 'Respect for age and experience'
    },
    {
      relationship: 'Friend and Friend',
      description: 'Friends should be trustworthy and loyal to each other.',
      principle: 'Mutual trust and support'
    }
  ],

  junziConcept: {
    title: 'Junzi (Noble Person)',
    chinese: '君子',
    description: 'The ideal of the morally cultivated person who serves as a model for others.',
    characteristics: [
      'Moral cultivation and self-improvement',
      'Benevolence and compassion toward others',
      'Proper conduct and ritual observance',
      'Wisdom and practical knowledge',
      'Integrity and trustworthiness',
      'Leadership through moral example',
      'Balance between learning and action',
      'Harmony between personal and social duties'
    ]
  },

  educationalPrinciples: [
    {
      title: 'Learning for Self-Cultivation',
      description: 'Education is primarily for moral development and character formation.',
      details: 'Knowledge should be used to improve oneself and benefit others, not for personal gain alone.'
    },
    {
      title: 'Learning by Doing',
      description: 'Knowledge must be put into practice to be truly meaningful.',
      details: 'Theoretical understanding must be accompanied by practical application in daily life.'
    },
    {
      title: 'Respect for Teachers',
      description: 'Teachers should be respected and their guidance followed.',
      details: 'The teacher-student relationship is a model for proper human relationships.'
    },
    {
      title: 'Lifelong Learning',
      description: 'Learning is a continuous process that never ends.',
      details: 'One should always be open to new knowledge and self-improvement.'
    }
  ],

  politicalPhilosophy: [
    {
      title: 'Moral Leadership',
      description: 'Government should be based on moral principles and virtuous leadership.',
      details: 'Rulers should lead by example and promote moral education among the people.'
    },
    {
      title: 'Meritocracy',
      description: 'Government positions should be filled by the most qualified and virtuous individuals.',
      details: 'The civil service examination system was designed to select officials based on merit and moral character.'
    },
    {
      title: 'People-Centered Governance',
      description: 'The welfare of the people should be the primary concern of government.',
      details: 'Good governance focuses on the well-being and moral development of the population.'
    },
    {
      title: 'Harmonious Society',
      description: 'Government should promote social harmony and proper relationships.',
      details: 'Laws and policies should encourage moral behavior and social cooperation.'
    }
  ],

  goldenRule: {
    title: 'The Golden Rule',
    chinese: '己所不欲，勿施于人',
    translation: 'Do not do to others what you do not want done to yourself.',
    significance: 'This principle guides all moral behavior and relationships, emphasizing empathy and reciprocity.'
  }
}

export default function ConfucianismTeachingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {teachingsContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {teachingsContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {teachingsContent.description}
        </p>
      </div>

      {/* Core Virtues */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Virtues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingsContent.coreVirtues.map((virtue, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <virtue.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{virtue.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit text-lg">
                  {virtue.chinese}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{virtue.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{virtue.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{virtue.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Five Relationships */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Five Relationships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingsContent.fiveRelationships.map((relationship, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{relationship.relationship}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{relationship.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Principle:</h4>
                  <p className="text-sm text-muted-foreground">{relationship.principle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Junzi Concept */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{teachingsContent.junziConcept.title}</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Badge variant="outline" className="text-xl">
                  {teachingsContent.junziConcept.chinese}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{teachingsContent.junziConcept.title}</CardTitle>
              <CardDescription className="text-lg">
                {teachingsContent.junziConcept.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-4 text-center">Characteristics of the Junzi:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {teachingsContent.junziConcept.characteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-sm">{characteristic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Principles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teachingsContent.educationalPrinciples.map((principle, index) => (
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
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Political Philosophy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Political Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teachingsContent.politicalPhilosophy.map((philosophy, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{philosophy.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{philosophy.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{philosophy.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Golden Rule */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{teachingsContent.goldenRule.title}</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <Badge variant="outline" className="text-lg mx-auto mb-4">
                {teachingsContent.goldenRule.chinese}
              </Badge>
              <CardTitle className="text-xl">{teachingsContent.goldenRule.translation}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                {teachingsContent.goldenRule.significance}
              </p>
            </CardContent>
          </Card>
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
              <div className="text-2xl font-bold text-orange-600">6</div>
              <p className="text-sm text-muted-foreground">Core Virtues</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Five Relationships</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">1</div>
              <p className="text-sm text-muted-foreground">Golden Rule</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">君子</div>
              <p className="text-sm text-muted-foreground">Junzi (Noble Person)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/teachings">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoist Teachings
            </Badge>
          </Link>
          <Link href="/religion/buddhism/teachings">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhist Teachings
            </Badge>
          </Link>
          <Link href="/religion/chinese-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese Philosophy
            </Badge>
          </Link>
          <Link href="/religion/neo-confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Neo-Confucianism
            </Badge>
          </Link>
          <Link href="/religion/east-asian-ethics">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian Ethics
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 