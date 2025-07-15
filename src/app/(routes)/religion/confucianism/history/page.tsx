import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Users, BookOpen, Globe, Target, Lightbulb, Heart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucianism History - Historical Development and Influence',
  description: 'Explore the history of Confucianism from its origins with Confucius in ancient China through its development during the Warring States period, Han dynasty adoption, Song dynasty Neo-Confucianism, and modern influence.',
  keywords: 'Confucianism history, Confucius, Warring States period, Han dynasty, Song dynasty, Neo-Confucianism, Chinese history, East Asian influence',
  openGraph: {
    title: 'Confucianism History - Historical Development and Influence',
    description: 'Discover the fascinating history of Confucianism and its profound impact on Chinese culture and East Asian societies.',
    type: 'website',
  },
}

const historyContent = {
  title: 'Confucianism History',
  subtitle: 'Historical Development and Influence',
  description: 'Confucianism has evolved over more than 2,500 years, from its origins with Confucius in the Spring and Autumn period through various dynasties and adaptations to modern times. Its influence has spread throughout East Asia and continues to shape contemporary thought and culture.',

  ancientPeriod: {
    title: 'Ancient Period (551-479 BCE)',
    description: 'The life and teachings of Confucius during the Spring and Autumn period.',
    events: [
      {
        year: '551 BCE',
        event: 'Birth of Confucius in Qufu, State of Lu',
        details: 'Confucius was born into a family of minor nobility during a time of political and social upheaval.'
      },
      {
        year: '522-479 BCE',
        event: 'Confucius\' Teaching Career',
        details: 'Confucius traveled throughout various states, teaching his philosophy and seeking political positions to implement his ideas.'
      },
      {
        year: '479 BCE',
        event: 'Death of Confucius',
        details: 'Confucius died in Qufu, leaving behind a legacy of teachings that would be compiled by his disciples.'
      }
    ],
    significance: 'Established the foundational principles and teachings that would become the core of Confucianism.'
  },

  warringStatesPeriod: {
    title: 'Warring States Period (475-221 BCE)',
    description: 'Development and expansion of Confucian thought by major philosophers.',
    philosophers: [
      {
        name: 'Mencius (Mengzi)',
        period: '372-289 BCE',
        contributions: 'Developed the theory of innate human goodness and emphasized the importance of moral cultivation.',
        influence: 'Became known as the "Second Sage" and his work became part of the Four Books.'
      },
      {
        name: 'Xunzi',
        period: '310-235 BCE',
        contributions: 'Argued that human nature is inherently selfish and requires education and ritual to become good.',
        influence: 'Provided an alternative view to Mencius and influenced later Legalist thought.'
      }
    ],
    significance: 'Expanded and systematized Confucian philosophy, creating different schools of interpretation.'
  },

  hanDynasty: {
    title: 'Han Dynasty (206 BCE-220 CE)',
    description: 'Official adoption of Confucianism as state ideology.',
    developments: [
      {
        title: 'State Adoption',
        description: 'Emperor Wu of Han officially adopted Confucianism as the state ideology.',
        year: '136 BCE',
        impact: 'Confucianism became the foundation of Chinese government and education.'
      },
      {
        title: 'Civil Service Examinations',
        description: 'Establishment of the examination system based on Confucian classics.',
        year: '165 BCE',
        impact: 'Created a meritocratic system for selecting government officials.'
      },
      {
        title: 'Text Compilation',
        description: 'Systematic compilation and editing of Confucian texts.',
        year: '1st century CE',
        impact: 'Standardized the Five Classics and established canonical versions.'
      }
    ],
    significance: 'Confucianism became the dominant ideology of Chinese civilization for the next two millennia.'
  },

  songDynasty: {
    title: 'Song Dynasty (960-1279)',
    description: 'The rise of Neo-Confucianism and philosophical synthesis.',
    developments: [
      {
        title: 'Neo-Confucianism',
        description: 'Synthesis of Confucianism with Buddhist and Daoist elements.',
        philosophers: 'Zhu Xi, Cheng Yi, Cheng Hao',
        impact: 'Created a comprehensive philosophical system that addressed metaphysical questions.'
      },
      {
        title: 'Four Books',
        description: 'Establishment of the Four Books as the core curriculum.',
        texts: 'Analects, Mencius, Great Learning, Doctrine of the Mean',
        impact: 'Simplified the study of Confucianism and made it more accessible.'
      },
      {
        title: 'Educational Reform',
        description: 'Expansion of education and the examination system.',
        impact: 'Increased literacy and social mobility through education.'
      }
    ],
    significance: 'Neo-Confucianism became the dominant form of Confucianism throughout East Asia.'
  },

  mingQingDynasties: {
    title: 'Ming and Qing Dynasties (1368-1911)',
    description: 'Institutionalization and spread of Confucianism.',
    developments: [
      {
        title: 'Institutionalization',
        description: 'Confucianism became deeply embedded in all aspects of society.',
        aspects: 'Government, education, family life, social customs'
      },
      {
        title: 'International Spread',
        description: 'Confucianism spread to Korea, Japan, and Vietnam.',
        influence: 'Shaped the cultures and societies of these countries.'
      },
      {
        title: 'Ritual Practices',
        description: 'Development of elaborate ritual practices and ceremonies.',
        forms: 'Ancestor worship, temple ceremonies, family rituals'
      }
    ],
    significance: 'Confucianism reached its peak influence and became the defining characteristic of East Asian civilization.'
  },

  modernPeriod: {
    title: 'Modern Period (1911-Present)',
    description: 'Challenges, adaptations, and contemporary relevance.',
    developments: [
      {
        title: 'Early 20th Century',
        description: 'Confucianism faced criticism during the New Culture Movement and Cultural Revolution.',
        challenges: 'Seen as backward and responsible for China\'s problems.'
      },
      {
        title: 'Late 20th Century',
        description: 'Revival of interest in Confucianism in China and abroad.',
        factors: 'Economic development, cultural identity, academic interest.'
      },
      {
        title: 'Contemporary Period',
        description: 'Adaptation of Confucianism to modern society.',
        applications: 'Business ethics, education, social harmony, environmental ethics.'
      }
    ],
    significance: 'Confucianism continues to evolve and find new relevance in the modern world.'
  },

  globalInfluence: [
    {
      region: 'China',
      influence: 'Foundation of Chinese culture, government, and social structure for over 2,000 years.',
      impact: 'Shaped language, customs, family values, and political systems.'
    },
    {
      region: 'Korea',
      influence: 'Adopted during the Three Kingdoms period and became the dominant ideology.',
      impact: 'Influenced education, government, and social hierarchy.'
    },
    {
      region: 'Japan',
      influence: 'Introduced during the Asuka period and adapted to Japanese culture.',
      impact: 'Shaped samurai ethics, education, and social organization.'
    },
    {
      region: 'Vietnam',
      influence: 'Adopted during Chinese rule and maintained after independence.',
      impact: 'Influenced government, education, and family structure.'
    },
    {
      region: 'Southeast Asia',
      influence: 'Spread through Chinese diaspora and cultural exchange.',
      impact: 'Influenced business practices, family values, and social customs.'
    }
  ]
}

export default function ConfucianismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {historyContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {historyContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {historyContent.description}
        </p>
      </div>

      {/* Ancient Period */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.ancientPeriod.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.ancientPeriod.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {historyContent.ancientPeriod.events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Badge variant="outline" className="flex-shrink-0">
                    {event.year}
                  </Badge>
                  <div>
                    <h4 className="font-semibold">{event.event}</h4>
                    <p className="text-sm text-muted-foreground">{event.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.ancientPeriod.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Warring States Period */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.warringStatesPeriod.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.warringStatesPeriod.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {historyContent.warringStatesPeriod.philosophers.map((philosopher, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{philosopher.name}</CardTitle>
                    <Badge variant="outline">{philosopher.period}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Contributions:</h4>
                      <p className="text-sm text-muted-foreground">{philosopher.contributions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Influence:</h4>
                      <p className="text-sm text-muted-foreground">{philosopher.influence}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.warringStatesPeriod.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Han Dynasty */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.hanDynasty.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.hanDynasty.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {historyContent.hanDynasty.developments.map((development, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{development.title}</CardTitle>
                      <Badge variant="outline">{development.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{development.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Impact:</h4>
                      <p className="text-sm text-muted-foreground">{development.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.hanDynasty.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Song Dynasty */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.songDynasty.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.songDynasty.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {historyContent.songDynasty.developments.map((development, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{development.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{development.description}</p>
                    {development.philosophers && (
                      <div>
                        <h4 className="font-semibold mb-2">Key Figures:</h4>
                        <p className="text-sm text-muted-foreground">{development.philosophers}</p>
                      </div>
                    )}
                    {development.texts && (
                      <div>
                        <h4 className="font-semibold mb-2">Core Texts:</h4>
                        <p className="text-sm text-muted-foreground">{development.texts}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold mb-2">Impact:</h4>
                      <p className="text-sm text-muted-foreground">{development.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.songDynasty.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ming and Qing Dynasties */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.mingQingDynasties.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.mingQingDynasties.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {historyContent.mingQingDynasties.developments.map((development, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{development.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{development.description}</p>
                    {development.aspects && (
                      <div>
                        <h4 className="font-semibold mb-2">Areas:</h4>
                        <p className="text-sm text-muted-foreground">{development.aspects}</p>
                      </div>
                    )}
                    {development.influence && (
                      <div>
                        <h4 className="font-semibold mb-2">Influence:</h4>
                        <p className="text-sm text-muted-foreground">{development.influence}</p>
                      </div>
                    )}
                    {development.forms && (
                      <div>
                        <h4 className="font-semibold mb-2">Forms:</h4>
                        <p className="text-sm text-muted-foreground">{development.forms}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.mingQingDynasties.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modern Period */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{historyContent.modernPeriod.title}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">{historyContent.modernPeriod.description}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {historyContent.modernPeriod.developments.map((development, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{development.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{development.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Factors:</h4>
                      <p className="text-sm text-muted-foreground">{development.challenges || development.factors || development.applications}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-sm text-muted-foreground">{historyContent.modernPeriod.significance}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Global Influence */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Global Influence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyContent.globalInfluence.map((region, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{region.region}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Influence:</h4>
                  <p className="text-sm text-muted-foreground">{region.influence}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <p className="text-sm text-muted-foreground">{region.impact}</p>
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
              <div className="text-2xl font-bold text-orange-600">2,500+</div>
              <p className="text-sm text-muted-foreground">Years of History</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">551 BCE</div>
              <p className="text-sm text-muted-foreground">Birth of Confucius</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">136 BCE</div>
              <p className="text-sm text-muted-foreground">Han Dynasty Adoption</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Major Dynasties</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/history">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoism History
            </Badge>
          </Link>
          <Link href="/religion/buddhism/history">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhism History
            </Badge>
          </Link>
          <Link href="/religion/chinese-history">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese History
            </Badge>
          </Link>
          <Link href="/religion/east-asian-history">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian History
            </Badge>
          </Link>
          <Link href="/religion/neo-confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Neo-Confucianism
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 