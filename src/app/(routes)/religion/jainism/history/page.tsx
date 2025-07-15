import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jain History | Sacred Texts & Religious Studies',
    description: 'Explore the rich history of Jainism from its ancient origins through the era of the Tirthankaras to modern Jain communities worldwide.',
    keywords: 'Jain history, Tirthankaras, Mahavira, Jain development, Jain communities, Jain tradition',
    openGraph: {
      title: 'Jain History | Sacred Texts & Religious Studies',
      description: 'Explore the rich history of Jainism from its ancient origins through the era of the Tirthankaras to modern Jain communities worldwide.',
      type: 'website',
    },
  }
}

export default async function JainismHistoryPage({ params }: { params: { locale: string } }) {

  const historicalPeriods = [
    {
      title: "Ancient Origins (Pre-6th Century BCE)",
      description: "Early development and pre-Mahavira period",
      keyEvents: [
        "Ancient roots in Indus Valley civilization",
        "Pre-Mahavira spiritual traditions",
        "Development of ascetic practices",
        "Early karma and reincarnation beliefs",
        "Formation of spiritual communities"
      ],
      significance: "Established foundation for Jain spiritual tradition"
    },
    {
      title: "Mahavira Era (6th Century BCE)",
      description: "Life and teachings of Lord Mahavira",
      keyEvents: [
        "Birth of Mahavira in 599 BCE",
        "Renunciation and spiritual quest",
        "Attainment of kevala jnana (omniscience)",
        "Establishment of fourfold sangha",
        "Final liberation in 527 BCE"
      ],
      significance: "Established Jainism as distinct religious tradition"
    },
    {
      title: "Early Development (5th-3rd Century BCE)",
      description: "Spread and consolidation of Jainism",
      keyEvents: [
        "Spread across North India",
        "Establishment of monastic orders",
        "Development of canonical literature",
        "Royal patronage and support",
        "Formation of lay community"
      ],
      significance: "Built strong foundation for Jain community and institutions"
    },
    {
      title: "Classical Period (3rd Century BCE-6th Century CE)",
      description: "Golden age of Jain literature and philosophy",
      keyEvents: [
        "Compilation of Agamas",
        "Development of philosophical systems",
        "Construction of temples and monuments",
        "Royal patronage under various dynasties",
        "Scholarly and literary achievements"
      ],
      significance: "Created comprehensive philosophical and literary tradition"
    },
    {
      title: "Medieval Period (6th-16th Century CE)",
      description: "Jainism under various dynasties and challenges",
      keyEvents: [
        "Survival under Muslim rule",
        "Development of new sects",
        "Construction of magnificent temples",
        "Preservation of manuscripts",
        "Adaptation to changing political landscape"
      ],
      significance: "Maintained Jain tradition through political challenges"
    },
    {
      title: "Modern Period (16th Century-Present)",
      description: "Jainism in modern India and global diaspora",
      keyEvents: [
        "Reform movements and modernization",
        "Global spread of Jain communities",
        "Educational and social institutions",
        "Interfaith dialogue and understanding",
        "Preservation and promotion of culture"
      ],
      significance: "Jainism becomes global religion with diverse communities"
    }
  ]

  const tirthankaras = [
    {
      name: "Rishabhanatha (Adinatha)",
      period: "1st Tirthankara",
      description: "First Tirthankara and founder of civilization",
      contributions: [
        "Established social institutions",
        "Introduced agriculture and arts",
        "Taught spiritual discipline",
        "Set example of renunciation",
        "Founded first Jain community"
      ],
      significance: "Established foundation for human civilization and spirituality"
    },
    {
      name: "Parshvanatha",
      period: "23rd Tirthankara",
      description: "Predecessor of Mahavira",
      contributions: [
        "Established fourfold restraint",
        "Taught non-violence and compassion",
        "Built strong monastic community",
        "Spread Jain teachings widely",
        "Prepared ground for Mahavira"
      ],
      significance: "Revived Jain tradition before Mahavira"
    },
    {
      name: "Mahavira",
      period: "24th Tirthankara",
      description: "Last Tirthankara and reformer",
      contributions: [
        "Attained kevala jnana (omniscience)",
        "Established fourfold sangha",
        "Compiled canonical literature",
        "Reformed monastic discipline",
        "Spread Jainism across India"
      ],
      significance: "Established Jainism as major religious tradition"
    }
  ]

  const historicalFigures = [
    {
      name: "Bhadrabahu",
      period: "4th-3rd Century BCE",
      role: "Jain scholar and leader",
      impact: "Led migration to South India, preserved canonical literature, established monastic discipline"
    },
    {
      name: "Umasvati",
      period: "2nd Century CE",
      role: "Philosopher and systematizer",
      impact: "Wrote Tattvartha Sutra, systematized Jain philosophy, influenced all Jain sects"
    },
    {
      name: "Kundakunda",
      period: "2nd Century CE",
      role: "Digambara philosopher",
      impact: "Wrote Samayasara and other works, established Digambara philosophy, influenced spiritual practice"
    },
    {
      name: "Hemachandra",
      period: "12th Century CE",
      role: "Scholar and polymath",
      impact: "Wrote comprehensive works on grammar, philosophy, and history, served as royal advisor"
    },
    {
      name: "Acharya Tulsi",
      period: "20th Century CE",
      role: "Modern reformer and leader",
      impact: "Founded Anuvrat movement, promoted non-violence, modernized Jain practices"
    }
  ]

  const historicalEvents = [
    {
      event: "Mahavira's Enlightenment",
      date: "527 BCE",
      description: "Mahavira attains kevala jnana",
      significance: [
        "Established omniscience as spiritual goal",
        "Confirmed Jain spiritual path",
        "Began teaching career",
        "Founded fourfold sangha",
        "Established monastic discipline"
      ],
      impact: "Established Jainism as complete spiritual tradition"
    },
    {
      event: "First Council at Pataliputra",
      date: "3rd Century BCE",
      description: "Compilation of canonical literature",
      significance: [
        "Preserved Mahavira's teachings",
        "Established canonical texts",
        "Standardized monastic practices",
        "Created literary tradition",
        "Ensured knowledge transmission"
      ],
      impact: "Preserved and systematized Jain teachings"
    },
    {
      event: "Migration to South India",
      date: "3rd Century BCE",
      description: "Led by Bhadrabahu",
      significance: [
        "Preserved Jain tradition",
        "Established South Indian Jainism",
        "Protected canonical literature",
        "Maintained monastic discipline",
        "Created regional variations"
      ],
      impact: "Ensured survival of Jainism during political changes"
    },
    {
      event: "Division into Sects",
      date: "1st Century CE",
      description: "Formation of Digambara and Shvetambara sects",
      significance: [
        "Different interpretations of monastic life",
        "Separate canonical traditions",
        "Distinct philosophical approaches",
        "Regional variations",
        "Preserved diversity within unity"
      ],
      impact: "Created two main branches of Jainism"
    },
    {
      event: "Temple Building Period",
      date: "5th-12th Century CE",
      description: "Construction of magnificent Jain temples",
      significance: [
        "Created architectural masterpieces",
        "Established religious centers",
        "Preserved artistic traditions",
        "Strengthened community identity",
        "Demonstrated royal patronage"
      ],
      impact: "Created lasting cultural and religious monuments"
    }
  ]

  const jainCommunities = [
    {
      region: "North India",
      period: "Ancient to present",
      characteristics: "Traditional heartland, diverse sects, strong monastic tradition",
      contributions: "Preservation of canonical literature, philosophical development, monastic leadership"
    },
    {
      region: "South India",
      period: "3rd Century BCE to present",
      characteristics: "Strong Digambara tradition, magnificent temples, scholarly tradition",
      contributions: "Temple architecture, philosophical works, preservation of manuscripts"
    },
    {
      region: "Western India",
      period: "Medieval to present",
      characteristics: "Strong Shvetambara tradition, business communities, modern institutions",
      contributions: "Business ethics, educational institutions, social reform"
    },
    {
      region: "Global Diaspora",
      period: "19th Century to present",
      characteristics: "Modern Jain communities, professional success, cultural preservation",
      contributions: "Global spread of Jainism, interfaith dialogue, modern applications"
    }
  ]

  const culturalContributions = [
    {
      category: "Architecture",
      description: "Jain temple and monument building",
      contributions: [
        "Magnificent temple complexes",
        "Unique architectural styles",
        "Intricate carvings and sculptures",
        "Sacred geometry and design",
        "Preservation of ancient techniques"
      ],
      significance: "Created architectural masterpieces and cultural heritage"
    },
    {
      category: "Literature",
      description: "Rich literary and philosophical tradition",
      contributions: [
        "Canonical texts and commentaries",
        "Philosophical treatises",
        "Poetry and devotional literature",
        "Historical narratives",
        "Modern writings and interpretations"
      ],
      significance: "Preserved knowledge and spiritual wisdom"
    },
    {
      category: "Art and Sculpture",
      description: "Visual arts and artistic traditions",
      contributions: [
        "Temple sculptures and carvings",
        "Manuscript illustrations",
        "Ritual art and objects",
        "Contemporary Jain art",
        "Preservation of artistic traditions"
      ],
      significance: "Enriched Indian artistic heritage"
    },
    {
      category: "Education and Scholarship",
      description: "Learning and knowledge preservation",
      contributions: [
        "Traditional educational institutions",
        "Modern schools and universities",
        "Research and scholarship",
        "Manuscript preservation",
        "Cultural education"
      ],
      significance: "Advanced education and knowledge preservation"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jain History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich and complex history of Jainism, from its ancient origins through the era of 
          the Tirthankaras to become a global religion with millions of followers and profound cultural impact.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {historicalPeriods.map((period, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{period.title}</CardTitle>
                  <CardDescription className="text-lg">{period.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Key Events
                  </h3>
                  <ul className="space-y-2">
                    {period.keyEvents.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    Historical Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {period.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Tirthankaras</h2>
        <div className="grid gap-6">
          {tirthankaras.map((tirthankara, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{tirthankara.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {tirthankara.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {tirthankara.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Significance</h4>
                    <p className="text-sm text-muted-foreground">{tirthankara.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Historical Figures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historicalFigures.map((figure, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{figure.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {figure.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Role</h4>
                  <p className="text-sm">{figure.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground">Impact</h4>
                  <p className="text-sm">{figure.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Pivotal Historical Events</h2>
        <div className="grid gap-6">
          {historicalEvents.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{event.event}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Description</h4>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <ul className="space-y-2">
                      {event.significance.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Impact</h4>
                    <p className="text-sm text-muted-foreground">{event.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Jain Communities Worldwide</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {jainCommunities.map((community, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  {community.region}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {community.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Characteristics</h4>
                  <p className="text-sm">{community.characteristics}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Contributions</h4>
                  <p className="text-sm">{community.contributions}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Contributions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {culturalContributions.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {category.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{category.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Jainism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/overview`}>
              Jain Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/scriptures`}>
              Jain Scriptures
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/practices`}>
              Jain Practices
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/teachings`}>
              Jain Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 