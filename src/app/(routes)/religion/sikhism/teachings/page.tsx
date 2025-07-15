import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Sikh Teachings | Sacred Texts & Religious Studies',
    description: 'Explore Sikh ethical teachings, spiritual principles, wisdom literature, and educational traditions that guide Sikh life and values.',
    keywords: 'Sikh teachings, Sikh ethics, spiritual principles, wisdom literature, Sikh values, Sikh education, Sikh philosophy',
    openGraph: {
      title: 'Sikh Teachings | Sacred Texts & Religious Studies',
      description: 'Explore Sikh ethical teachings, spiritual principles, wisdom literature, and educational traditions that guide Sikh life and values.',
      type: 'website',
    },
  }
}

export default async function SikhismTeachingsPage({ params }: { params: { locale: string } }) {

  const coreTeachings = [
    {
      teaching: "Ik Onkar (One God)",
      description: "Belief in one supreme, formless God",
      principles: [
        "Single, eternal, and formless divine reality",
        "Present in all creation and beyond",
        "Accessible through meditation and devotion",
        "Transcends all religious boundaries",
        "Source of all existence and truth"
      ],
      significance: "Forms the foundation of Sikh monotheism and spiritual practice"
    },
    {
      teaching: "Three Pillars of Sikhism",
      description: "Core principles guiding Sikh life",
      principles: [
        "Naam Japna: Remembering and meditating on God",
        "Kirat Karni: Earning honest living through hard work",
        "Vand Chakna: Sharing with others and serving community",
        "Integration of spiritual and worldly life",
        "Balance of meditation and social responsibility"
      ],
      significance: "Provides practical framework for spiritual and ethical living"
    },
    {
      teaching: "Equality and Social Justice",
      description: "Universal equality of all human beings",
      principles: [
        "No discrimination based on caste, gender, or religion",
        "Equal access to spiritual practice",
        "Service to humanity (seva)",
        "Standing against oppression",
        "Promotion of social justice"
      ],
      significance: "Challenges social hierarchies and promotes human dignity"
    },
    {
      teaching: "Guru Granth Sahib",
      description: "Eternal Guru and sacred scripture",
      principles: [
        "Living Guru for all Sikhs",
        "Contains teachings of Sikh Gurus and saints",
        "Written in Gurmukhi script",
        "Treated with utmost reverence",
        "Source of spiritual guidance and wisdom"
      ],
      significance: "Provides eternal guidance and unites Sikh community"
    },
    {
      teaching: "Karma and Reincarnation",
      description: "Understanding of action and rebirth",
      principles: [
        "Actions determine future consequences",
        "Cycle of birth and death (samsara)",
        "Liberation through divine grace",
        "Union with God as ultimate goal",
        "Free will and divine grace working together"
      ],
      significance: "Encourages ethical living and spiritual growth"
    }
  ]

  const wisdomLiterature = [
    {
      text: "Japji Sahib",
      author: "Guru Nanak Dev",
      description: "Opening composition and morning prayer",
      keyTeachings: [
        "Mool Mantar: Basic creed of Sikhism",
        "Nature of God and creation",
        "Path to spiritual liberation",
        "Divine grace and human effort",
        "Unity of all existence"
      ],
      famousPassages: [
        "Ik Onkar Sat Nam Karta Purakh",
        "Gur parshad jap",
        "Hukam rajaee chalna Nanak likhia naal"
      ],
      influence: "Most important composition, recited daily by Sikhs"
    },
    {
      text: "Sukhmani Sahib",
      author: "Guru Arjan Dev",
      description: "Psalm of peace and comfort",
      keyTeachings: [
        "Peace and tranquility through devotion",
        "Divine protection and care",
        "Spiritual healing and comfort",
        "Importance of meditation",
        "Divine grace and mercy"
      ],
      famousPassages: [
        "Sukhmani sukh amrit prabh naam",
        "Gur parshad jap man mere",
        "Har kaa naam jap nirmal karam"
      ],
      influence: "Provides comfort and spiritual peace"
    },
    {
      text: "Anand Sahib",
      author: "Guru Amar Das",
      description: "Song of bliss and joy",
      keyTeachings: [
        "Spiritual joy and bliss",
        "Union with divine",
        "Community celebration",
        "Gratitude and thanksgiving",
        "Divine love and devotion"
      ],
      famousPassages: [
        "Anand bhaia meri maaie",
        "Gur te gur updes sun",
        "Har kaa naam jap nirmal karam"
      ],
      influence: "Celebrates spiritual joy and community unity"
    },
    {
      text: "Asa di Var",
      author: "Guru Nanak Dev",
      description: "Spiritual journey and social reform",
      keyTeachings: [
        "Social justice and equality",
        "Criticism of religious hypocrisy",
        "True spiritual practice",
        "Service to humanity",
        "Divine justice and mercy"
      ],
      famousPassages: [
        "Asa ki var mahla 1",
        "Gur parshad jap man mere",
        "Har kaa naam jap nirmal karam"
      ],
      influence: "Addresses social issues and spiritual truth"
    }
  ]

  const moralPrinciples = [
    {
      principle: "Truth and Honesty (Sach)",
      description: "Living with truth and integrity",
      applications: [
        "Speaking truth always",
        "Honest business practices",
        "Avoiding deception and fraud",
        "Keeping promises and commitments",
        "Transparency in dealings"
      ]
    },
    {
      principle: "Compassion and Love (Daya)",
      description: "Showing compassion to all beings",
      applications: [
        "Helping those in need",
        "Showing kindness to all",
        "Avoiding cruelty and violence",
        "Promoting peace and harmony",
        "Caring for the environment"
      ]
    },
    {
      principle: "Contentment (Santokh)",
      description: "Finding satisfaction in what one has",
      applications: [
        "Avoiding greed and materialism",
        "Being satisfied with honest earnings",
        "Sharing with others",
        "Focusing on spiritual growth",
        "Practicing gratitude"
      ]
    },
    {
      principle: "Humility (Nimrata)",
      description: "Maintaining humility and modesty",
      applications: [
        "Avoiding pride and ego",
        "Treating all as equals",
        "Learning from others",
        "Serving without expectation",
        "Recognizing divine grace"
      ]
    }
  ]

  const spiritualPractices = [
    {
      practice: "Naam Simran (Meditation)",
      description: "Remembrance and meditation on divine name",
      elements: [
        "Repetition of divine name (Waheguru)",
        "Focus on divine presence",
        "Inner peace and tranquility",
        "Connection with divine reality",
        "Spiritual purification and growth"
      ],
      significance: "Core spiritual practice for union with God"
    },
    {
      practice: "Seva (Selfless Service)",
      description: "Service to humanity and community",
      elements: [
        "Langar: Free community kitchen",
        "Community service projects",
        "Helping those in need",
        "Environmental protection",
        "Promoting social justice"
      ],
      significance: "Demonstrates love for God through service to creation"
    },
    {
      practice: "Sangat (Holy Company)",
      description: "Association with spiritual community",
      elements: [
        "Attending gurdwara regularly",
        "Participating in kirtan",
        "Learning from spiritual teachers",
        "Supporting community activities",
        "Building spiritual relationships"
      ],
      significance: "Strengthens spiritual growth and community bonds"
    },
    {
      practice: "Pangat (Community Eating)",
      description: "Eating together in community",
      elements: [
        "Sharing langar meals",
        "Sitting together regardless of status",
        "Demonstrating equality",
        "Building community bonds",
        "Practicing humility"
      ],
      significance: "Demonstrates equality and community unity"
    }
  ]

  const ethicalGuidelines = [
    {
      guideline: "Five Evils to Avoid",
      description: "Negative qualities to overcome",
      evils: [
        "Kaam (Lust): Excessive desire and attachment",
        "Krodh (Anger): Destructive anger and hatred",
        "Lobh (Greed): Excessive greed and materialism",
        "Moh (Attachment): Excessive attachment to worldly things",
        "Ahankar (Ego): Pride and self-centeredness"
      ],
      significance: "Obstacles to spiritual growth and ethical living"
    },
    {
      guideline: "Five Virtues to Cultivate",
      description: "Positive qualities to develop",
      virtues: [
        "Sat (Truth): Truthfulness and honesty",
        "Santokh (Contentment): Satisfaction and gratitude",
        "Daya (Compassion): Kindness and mercy",
        "Nimrata (Humility): Modesty and humility",
        "Pyar (Love): Love for all creation"
      ],
      significance: "Path to spiritual growth and ethical living"
    },
    {
      guideline: "Social Responsibilities",
      description: "Duties towards society and humanity",
      responsibilities: [
        "Protecting the weak and oppressed",
        "Standing against injustice",
        "Promoting equality and justice",
        "Serving humanity selflessly",
        "Preserving the environment"
      ],
      significance: "Essential for spiritual and social well-being"
    },
    {
      guideline: "Family and Community",
      description: "Duties towards family and community",
      duties: [
        "Respecting and caring for parents",
        "Raising children with Sikh values",
        "Supporting community welfare",
        "Participating in community activities",
        "Maintaining family harmony"
      ],
      significance: "Foundation for strong society and spiritual growth"
    }
  ]

  const educationalTraditions = [
    {
      tradition: "Gurmukhi Script",
      description: "Sikh script and language",
      features: [
        "Developed by Guru Angad Dev",
        "Based on Punjabi language",
        "Used for Sikh scriptures",
        "Preserves Sikh literature",
        "Unites Sikh community"
      ],
      significance: "Preserves Sikh knowledge and unites community"
    },
    {
      tradition: "Gurdwara Education",
      description: "Learning in Sikh temples",
      features: [
        "Scriptural study and interpretation",
        "Kirtan and musical education",
        "Community service learning",
        "Spiritual guidance and counseling",
        "Cultural preservation"
      ],
      significance: "Centers of Sikh learning and community building"
    },
    {
      tradition: "Gurbani Kirtan",
      description: "Musical tradition of Sikh hymns",
      features: [
        "Traditional ragas and musical modes",
        "Devotional singing and chanting",
        "Spiritual experience through music",
        "Community participation",
        "Preservation of musical traditions"
      ],
      significance: "Enhances spiritual experience and community unity"
    },
    {
      tradition: "Sikh Schools and Universities",
      description: "Modern Sikh educational institutions",
      features: [
        "Academic and spiritual education",
        "Preservation of Sikh culture",
        "Research and scholarship",
        "Community service programs",
        "Interfaith understanding"
      ],
      significance: "Advances Sikh education and cultural preservation"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh Teachings</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the rich ethical teachings, spiritual principles, and wisdom traditions of Sikhism that guide 
          Sikh life and provide timeless insights for human flourishing and spiritual growth.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreTeachings.map((teaching, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-orange-600" />
                <div>
                  <CardTitle className="text-2xl">{teaching.teaching}</CardTitle>
                  <CardDescription className="text-lg">{teaching.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Principles
                  </h3>
                  <ul className="space-y-2">
                    {teaching.principles.map((principle, principleIndex) => (
                      <li key={principleIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Religious Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {teaching.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Wisdom Literature</h2>
        <div className="grid gap-6">
          {wisdomLiterature.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{text.text}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {text.author}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Teachings</h4>
                    <ul className="space-y-2">
                      {text.keyTeachings.map((teaching, teachingIndex) => (
                        <li key={teachingIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{teaching}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Famous Passages</h4>
                    <ul className="space-y-2">
                      {text.famousPassages.map((passage, passageIndex) => (
                        <li key={passageIndex} className="text-sm italic text-muted-foreground">
                          "{passage}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Influence</h4>
                  <p className="text-sm text-muted-foreground">{text.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Moral Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {moralPrinciples.map((principle, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{principle.principle}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practical Applications</h4>
                <ul className="space-y-2">
                  {principle.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Spiritual Practices</h2>
        <div className="grid gap-6">
          {spiritualPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{practice.practice}</CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                    <ul className="space-y-2">
                      {practice.elements.map((element, elementIndex) => (
                        <li key={elementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Spiritual Significance</h4>
                    <p className="text-sm text-muted-foreground">{practice.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ethical Guidelines</h2>
        <div className="grid gap-6">
          {ethicalGuidelines.map((guideline, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{guideline.guideline}</CardTitle>
                <CardDescription>{guideline.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Elements</h4>
                    <ul className="space-y-2">
                      {(guideline.evils || guideline.virtues || guideline.responsibilities || guideline.duties).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{guideline.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Traditions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationalTraditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{tradition.tradition}</CardTitle>
                <CardDescription>{tradition.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tradition.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{tradition.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Sikhism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/overview`}>
              Sikh Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/scriptures`}>
              Sikh Scriptures
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/practices`}>
              Sikh Practices
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/history`}>
              Sikh History
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 