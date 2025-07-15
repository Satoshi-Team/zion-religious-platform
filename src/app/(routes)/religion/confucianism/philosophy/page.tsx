import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Heart, Users, Target, BookOpen, Globe, Star, ArrowRight, Balance } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Philosophy - Metaphysical Concepts and Worldview',
  description: 'Explore the philosophical foundations of Confucianism including concepts of Heaven, human nature, the Way, moral cultivation, and the relationship between self and society.',
  keywords: 'Confucian philosophy, Heaven, human nature, the Way, moral cultivation, self-cultivation, Chinese philosophy, metaphysical concepts',
  openGraph: {
    title: 'Confucian Philosophy - Metaphysical Concepts and Worldview',
    description: 'Discover the profound philosophical concepts that underpin Confucian thought and worldview.',
    type: 'website',
  },
}

const philosophyContent = {
  title: 'Confucian Philosophy',
  subtitle: 'Metaphysical Concepts and Worldview',
  description: 'Confucian philosophy provides a comprehensive worldview that addresses fundamental questions about human nature, the cosmos, morality, and the proper way to live. It emphasizes the interconnectedness of all things and the importance of moral cultivation.',

  metaphysicalConcepts: [
    {
      title: 'Tian (Heaven)',
      chinese: '天',
      description: 'The ultimate source of moral order and cosmic harmony.',
      details: 'Tian is not a personal deity but the natural order of the universe that provides moral guidance and sets the standard for human behavior.',
      significance: 'Provides the foundation for moral authority and ethical principles.',
      icon: Star
    },
    {
      title: 'Dao (The Way)',
      chinese: '道',
      description: 'The proper path of human conduct and cosmic order.',
      details: 'The Dao represents the natural way of things and the proper course of human action that leads to harmony and flourishing.',
      significance: 'Guides all human behavior and provides the standard for moral action.',
      icon: Target
    },
    {
      title: 'Li (Principle)',
      chinese: '理',
      description: 'The underlying patterns and principles that govern the universe.',
      details: 'Li refers to the rational order and patterns that exist in nature and human society, which can be understood through study and reflection.',
      significance: 'Provides the basis for understanding the world and human nature.',
      icon: Lightbulb
    },
    {
      title: 'Qi (Vital Energy)',
      chinese: '气',
      description: 'The vital energy that animates all things in the universe.',
      details: 'Qi is the fundamental substance that constitutes all things and flows through the universe, connecting all phenomena.',
      significance: 'Explains the unity and interconnectedness of all things.',
      icon: Heart
    }
  ],

  humanNature: [
    {
      view: 'Mencius\' View',
      description: 'Human nature is inherently good and inclined toward virtue.',
      details: 'All humans possess the "sprouts" of virtue (ren, yi, li, zhi) that can be cultivated through education and practice.',
      implications: 'Emphasizes the importance of education and moral cultivation to develop innate goodness.',
      philosopher: 'Mencius (372-289 BCE)'
    },
    {
      view: 'Xunzi\'s View',
      description: 'Human nature is inherently selfish and requires education to become good.',
      details: 'Humans are born with selfish desires that must be controlled through ritual, education, and moral training.',
      implications: 'Emphasizes the importance of external guidance and social institutions for moral development.',
      philosopher: 'Xunzi (310-235 BCE)'
    },
    {
      view: 'Neo-Confucian View',
      description: 'Human nature contains both good and evil tendencies.',
      details: 'The "original nature" is good, but it can be obscured by "physical nature" which includes selfish desires.',
      implications: 'Emphasizes the need for constant self-cultivation to overcome selfish tendencies.',
      philosopher: 'Zhu Xi and others'
    }
  ],

  moralCultivation: [
    {
      title: 'Self-Cultivation',
      description: 'The process of developing moral character and wisdom.',
      methods: [
        'Study of classical texts and moral principles',
        'Reflection and self-examination',
        'Practice of ritual propriety',
        'Development of empathy and compassion',
        'Cultivation of wisdom through experience'
      ],
      goal: 'To become a junzi (noble person) who serves as a moral example for others.'
    },
    {
      title: 'Social Harmony',
      description: 'Creating harmonious relationships and social order.',
      principles: [
        'Proper observance of the Five Relationships',
        'Ritual propriety in all social interactions',
        'Moral leadership and virtuous governance',
        'Education and moral instruction',
        'Mutual respect and cooperation'
      ],
      goal: 'To create a society based on moral principles and harmonious relationships.'
    },
    {
      title: 'Cosmic Harmony',
      description: 'Aligning human behavior with the natural order of the universe.',
      aspects: [
        'Understanding the patterns of Heaven and Earth',
        'Following the natural way (Dao)',
        'Maintaining balance and harmony',
        'Respecting the interconnectedness of all things',
        'Living in accordance with moral principles'
      ],
      goal: 'To achieve harmony between human society and the natural world.'
    }
  ],

  epistemology: [
    {
      title: 'Learning and Knowledge',
      description: 'The process of acquiring knowledge and wisdom.',
      methods: [
        'Study of classical texts and commentaries',
        'Learning from teachers and mentors',
        'Reflection and contemplation',
        'Practical experience and application',
        'Discussion and debate with others'
      ],
      emphasis: 'Knowledge must be put into practice to be truly meaningful.'
    },
    {
      title: 'Intuitive Understanding',
      description: 'Direct apprehension of moral principles and truth.',
      aspects: [
        'Moral intuition and ethical insight',
        'Understanding of human nature',
        'Recognition of proper relationships',
        'Grasp of the underlying patterns (li)',
        'Wisdom that comes from experience'
      ],
      importance: 'Intuitive understanding complements rational knowledge.'
    }
  ],

  ethics: [
    {
      title: 'Virtue Ethics',
      description: 'Focus on developing virtuous character rather than following rules.',
      virtues: [
        'Ren (humaneness) - compassion and benevolence',
        'Yi (righteousness) - moral rightness and duty',
        'Li (ritual propriety) - proper conduct and etiquette',
        'Zhi (wisdom) - knowledge and understanding',
        'Xin (trustworthiness) - faithfulness and reliability'
      ],
      approach: 'Emphasizes the development of moral character through cultivation and practice.'
    },
    {
      title: 'Relational Ethics',
      description: 'Ethics based on proper relationships and social roles.',
      relationships: [
        'Ruler-subject: mutual responsibility and loyalty',
        'Father-son: filial piety and parental care',
        'Husband-wife: mutual respect and harmony',
        'Elder-younger: respect and guidance',
        'Friend-friend: trust and mutual support'
      ],
      principle: 'Each relationship has specific duties and responsibilities that must be fulfilled.'
    },
    {
      title: 'Harmonious Ethics',
      description: 'Ethics that promote social harmony and cosmic balance.',
      principles: [
        'The Golden Rule: treat others as you wish to be treated',
        'Balance between individual and collective good',
        'Moderation and avoiding extremes',
        'Respect for tradition and cultural heritage',
        'Promotion of social welfare and cooperation'
      ],
      goal: 'To create a harmonious society that benefits all members.'
    }
  ],

  cosmology: [
    {
      title: 'Unity of Heaven and Humanity',
      description: 'The interconnected relationship between the cosmos and human society.',
      concept: 'Heaven provides the moral order that humans should follow, and human actions affect the harmony of the cosmos.',
      implications: 'Moral behavior contributes to cosmic harmony, while immoral behavior disrupts it.'
    },
    {
      title: 'Cyclical Time',
      description: 'The view that time moves in cycles rather than linearly.',
      concept: 'Natural and social processes follow cyclical patterns that repeat and renew.',
      implications: 'Emphasizes the importance of tradition and learning from the past.'
    },
    {
      title: 'Organic Universe',
      description: 'The universe as an interconnected, living system.',
      concept: 'All things are connected and interdependent, forming a unified whole.',
      implications: 'Promotes respect for nature and understanding of interconnectedness.'
    }
  ]
}

export default function ConfucianismPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {philosophyContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {philosophyContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {philosophyContent.description}
        </p>
      </div>

      {/* Metaphysical Concepts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Metaphysical Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {philosophyContent.metaphysicalConcepts.map((concept, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <concept.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{concept.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit text-lg">
                  {concept.chinese}
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

      {/* Human Nature */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Views on Human Nature</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyContent.humanNature.map((view, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{view.view}</CardTitle>
                <Badge variant="outline">{view.philosopher}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{view.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <p className="text-sm text-muted-foreground">{view.details}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Implications:</h4>
                  <p className="text-sm text-muted-foreground">{view.implications}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Moral Cultivation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Moral Cultivation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyContent.moralCultivation.map((cultivation, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{cultivation.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{cultivation.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Methods/Principles:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {cultivation.methods?.map((method, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{method}</span>
                      </li>
                    ))}
                    {cultivation.principles?.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{principle}</span>
                      </li>
                    ))}
                    {cultivation.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Goal:</h4>
                  <p className="text-sm text-muted-foreground">{cultivation.goal}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Epistemology */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Epistemology</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {philosophyContent.epistemology.map((epistemology, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{epistemology.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{epistemology.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Methods/Aspects:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {epistemology.methods?.map((method, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{method}</span>
                      </li>
                    ))}
                    {epistemology.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emphasis/Importance:</h4>
                  <p className="text-sm text-muted-foreground">{epistemology.emphasis || epistemology.importance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ethics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ethical Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyContent.ethics.map((ethic, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{ethic.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{ethic.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Elements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {ethic.virtues?.map((virtue, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{virtue}</span>
                      </li>
                    ))}
                    {ethic.relationships?.map((relationship, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{relationship}</span>
                      </li>
                    ))}
                    {ethic.principles?.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-3 h-3 text-orange-600 mt-1 flex-shrink-0" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Approach/Principle/Goal:</h4>
                  <p className="text-sm text-muted-foreground">{ethic.approach || ethic.principle || ethic.goal}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cosmology */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cosmology</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophyContent.cosmology.map((cosmology, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{cosmology.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{cosmology.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Concept:</h4>
                  <p className="text-sm text-muted-foreground">{cosmology.concept}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Implications:</h4>
                  <p className="text-sm text-muted-foreground">{cosmology.implications}</p>
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
              <div className="text-2xl font-bold text-orange-600">4</div>
              <p className="text-sm text-muted-foreground">Metaphysical Concepts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-sm text-muted-foreground">Views on Human Nature</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-sm text-muted-foreground">Ethical Approaches</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">天</div>
              <p className="text-sm text-muted-foreground">Tian (Heaven)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoist Philosophy
            </Badge>
          </Link>
          <Link href="/religion/buddhism/philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhist Philosophy
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