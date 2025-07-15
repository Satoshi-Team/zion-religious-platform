import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Globe, BookOpen, Target, Lightbulb, Building, GraduationCap, Briefcase, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucianism Impact - Cultural and Social Influence',
  description: 'Explore the profound impact of Confucianism on Chinese culture, East Asian societies, education systems, government, family values, and modern business practices.',
  keywords: 'Confucianism impact, Chinese culture, East Asian influence, education, government, family values, business ethics, social harmony',
  openGraph: {
    title: 'Confucianism Impact - Cultural and Social Influence',
    description: 'Discover how Confucianism has shaped cultures, societies, and institutions throughout East Asia and beyond.',
    type: 'website',
  },
}

const impactContent = {
  title: 'Confucianism Impact',
  subtitle: 'Cultural and Social Influence',
  description: 'Confucianism has profoundly influenced Chinese culture and East Asian societies for over two millennia. Its impact extends to education, government, family life, business practices, and social values, creating a distinctive cultural tradition that continues to shape contemporary society.',

  culturalImpact: [
    {
      title: 'Language and Literature',
      description: 'Confucian texts and concepts have shaped Chinese language and literary traditions.',
      details: [
        'Classical Chinese language development',
        'Literary forms and styles',
        'Proverbs and idiomatic expressions',
        'Educational terminology',
        'Moral and ethical vocabulary'
      ],
      significance: 'Created a shared cultural language and literary heritage.',
      icon: BookOpen
    },
    {
      title: 'Arts and Aesthetics',
      description: 'Confucian values have influenced artistic expression and aesthetic principles.',
      details: [
        'Calligraphy and painting traditions',
        'Music and poetry',
        'Architecture and garden design',
        'Ceremonial arts',
        'Cultural symbolism'
      ],
      significance: 'Shaped artistic expression to reflect moral and cultural values.',
      icon: Heart
    },
    {
      title: 'Social Customs',
      description: 'Confucian principles have shaped social behavior and customs.',
      details: [
        'Etiquette and manners',
        'Ceremonial practices',
        'Social hierarchy and respect',
        'Family rituals and traditions',
        'Community celebrations'
      ],
      significance: 'Established social norms that promote harmony and respect.',
      icon: Users
    }
  ],

  educationalImpact: [
    {
      title: 'Traditional Education',
      description: 'Confucianism created a comprehensive educational system.',
      features: [
        'Civil service examination system',
        'Classical text study and memorization',
        'Moral and character education',
        'Teacher-student relationships',
        'Lifelong learning emphasis'
      ],
      influence: 'Shaped education for over 2,000 years and influenced modern systems.',
      icon: GraduationCap
    },
    {
      title: 'Modern Education',
      description: 'Confucian values continue to influence contemporary education.',
      aspects: [
        'Respect for teachers and learning',
        'Emphasis on hard work and discipline',
        'Moral character development',
        'Family involvement in education',
        'Academic achievement values'
      ],
      influence: 'Contributes to high educational standards and achievement.',
      icon: Lightbulb
    }
  ],

  politicalImpact: [
    {
      title: 'Government Systems',
      description: 'Confucianism shaped traditional Chinese government and administration.',
      features: [
        'Meritocratic civil service',
        'Moral leadership principles',
        'Bureaucratic organization',
        'Ritual and ceremonial governance',
        'People-centered policies'
      ],
      influence: 'Created stable government systems that lasted for centuries.',
      icon: Building
    },
    {
      title: 'Leadership Philosophy',
      description: 'Confucian principles guide leadership and governance.',
      principles: [
        'Leading by moral example',
        'Benevolent governance',
        'Responsibility to the people',
        'Harmonious social order',
        'Cultural preservation'
      ],
      influence: 'Influences leadership styles and political philosophy.',
      icon: Target
    }
  ],

  familyImpact: [
    {
      title: 'Family Structure',
      description: 'Confucianism established the foundation for family organization.',
      aspects: [
        'Filial piety and respect for elders',
        'Family hierarchy and roles',
        'Ancestor worship and remembrance',
        'Family education and moral training',
        'Intergenerational relationships'
      ],
      significance: 'Created stable family structures that promote social harmony.',
      icon: Home
    },
    {
      title: 'Family Values',
      description: 'Confucian values shape family life and relationships.',
      values: [
        'Respect and care for parents',
        'Harmony between family members',
        'Education and moral development',
        'Responsibility and duty',
        'Cultural transmission'
      ],
      significance: 'Established enduring family values that continue today.',
      icon: Heart
    }
  ],

  businessImpact: [
    {
      title: 'Business Ethics',
      description: 'Confucian principles influence business practices and ethics.',
      principles: [
        'Trust and relationship building',
        'Moral leadership in business',
        'Harmonious workplace relations',
        'Long-term thinking and planning',
        'Social responsibility'
      ],
      influence: 'Shapes business culture and ethical standards.',
      icon: Briefcase
    },
    {
      title: 'Management Philosophy',
      description: 'Confucian values guide management and organizational practices.',
      approaches: [
        'People-oriented management',
        'Moral leadership and example',
        'Harmonious team relationships',
        'Education and development',
        'Cultural sensitivity'
      ],
      influence: 'Influences modern management practices and corporate culture.',
      icon: Users
    }
  ],

  socialImpact: [
    {
      title: 'Social Harmony',
      description: 'Confucianism promotes social cohesion and cooperation.',
      aspects: [
        'Proper social relationships',
        'Community cooperation',
        'Social responsibility',
        'Cultural unity',
        'Conflict resolution'
      ],
      significance: 'Creates stable and harmonious societies.',
      icon: Users
    },
    {
      title: 'Moral Development',
      description: 'Confucianism emphasizes personal and social moral cultivation.',
      elements: [
        'Self-cultivation and improvement',
        'Moral education and training',
        'Character development',
        'Social responsibility',
        'Cultural values'
      ],
      significance: 'Promotes moral development and social ethics.',
      icon: Heart
    }
  ],

  globalInfluence: [
    {
      region: 'China',
      impact: 'Foundation of Chinese civilization and culture for over 2,000 years.',
      areas: 'Government, education, family, social customs, arts, and philosophy.'
    },
    {
      region: 'Korea',
      impact: 'Shaped Korean culture, government, and social structure.',
      areas: 'Education, family values, social hierarchy, and cultural identity.'
    },
    {
      region: 'Japan',
      impact: 'Influenced Japanese society, education, and cultural values.',
      areas: 'Samurai ethics, education, social organization, and cultural practices.'
    },
    {
      region: 'Vietnam',
      impact: 'Shaped Vietnamese culture and social institutions.',
      areas: 'Government, education, family structure, and cultural traditions.'
    },
    {
      region: 'Southeast Asia',
      impact: 'Influenced through Chinese diaspora and cultural exchange.',
      areas: 'Business practices, family values, education, and social customs.'
    },
    {
      region: 'Global',
      impact: 'Growing interest in Confucian values and philosophy worldwide.',
      areas: 'Business ethics, education, leadership, and cultural understanding.'
    }
  ],

  contemporaryRelevance: [
    {
      title: 'Modern Challenges',
      description: 'Confucianism addresses contemporary social and moral issues.',
      applications: [
        'Environmental ethics and sustainability',
        'Social justice and equality',
        'Technology and human values',
        'Globalization and cultural identity',
        'Education and moral development'
      ]
    },
    {
      title: 'Cross-Cultural Understanding',
      description: 'Confucianism promotes understanding between cultures.',
      benefits: [
        'Cultural sensitivity and respect',
        'Harmonious international relations',
        'Business and diplomatic practices',
        'Educational exchange',
        'Cultural preservation'
      ]
    },
    {
      title: 'Personal Development',
      description: 'Confucian principles guide personal growth and fulfillment.',
      aspects: [
        'Moral character development',
        'Lifelong learning and education',
        'Relationship building',
        'Social responsibility',
        'Cultural appreciation'
      ]
    }
  ]
}

export default function ConfucianismImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {impactContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {impactContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {impactContent.description}
        </p>
      </div>

      {/* Cultural Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {impactContent.culturalImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Areas of Influence:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{impact.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Educational Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impactContent.educationalImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features/Aspects:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {impact.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Influence:</h4>
                  <p className="text-sm text-muted-foreground">{impact.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Political Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Political Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impactContent.politicalImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features/Principles:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {impact.principles?.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Influence:</h4>
                  <p className="text-sm text-muted-foreground">{impact.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Family Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Family Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impactContent.familyImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Aspects/Values:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{aspect}</span>
                      </li>
                    ))}
                    {impact.values?.map((value, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{impact.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Business Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impactContent.businessImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Principles/Approaches:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.principles?.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{principle}</span>
                      </li>
                    ))}
                    {impact.approaches?.map((approach, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Influence:</h4>
                  <p className="text-sm text-muted-foreground">{impact.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Impact */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Social Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {impactContent.socialImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <impact.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{impact.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Aspects/Elements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {impact.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{aspect}</span>
                      </li>
                    ))}
                    {impact.elements?.map((element, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{impact.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Global Influence */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Global Influence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactContent.globalInfluence.map((region, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">{region.region}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <p className="text-sm text-muted-foreground">{region.impact}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas of Influence:</h4>
                  <p className="text-sm text-muted-foreground">{region.areas}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contemporary Relevance */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Contemporary Relevance</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {impactContent.contemporaryRelevance.map((relevance, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{relevance.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{relevance.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Applications/Benefits/Aspects:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {relevance.applications?.map((application, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </li>
                    ))}
                    {relevance.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                    {relevance.aspects?.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
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
              <p className="text-sm text-muted-foreground">Years of Influence</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">6</div>
              <p className="text-sm text-muted-foreground">Major Regions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Impact Areas</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">∞</div>
              <p className="text-sm text-muted-foreground">Ongoing Relevance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/impact">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoist Impact
            </Badge>
          </Link>
          <Link href="/religion/buddhism/impact">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhist Impact
            </Badge>
          </Link>
          <Link href="/religion/chinese-culture">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese Culture
            </Badge>
          </Link>
          <Link href="/religion/east-asian-culture">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian Culture
            </Badge>
          </Link>
          <Link href="/religion/asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Asian Philosophy
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 