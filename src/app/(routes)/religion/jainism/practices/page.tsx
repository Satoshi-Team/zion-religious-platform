import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin, Clock, Home } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jain Practices | Sacred Texts & Religious Studies',
    description: 'Explore Jain religious practices, rituals, customs, and daily observances that guide Jain life and spiritual development.',
    keywords: 'Jain practices, Jain rituals, Jain customs, Jain observances, Jain prayer, Jain meditation, Jain life',
    openGraph: {
      title: 'Jain Practices | Sacred Texts & Religious Studies',
      description: 'Explore Jain religious practices, rituals, customs, and daily observances that guide Jain life and spiritual development.',
      type: 'website',
    },
  }
}

export default async function JainismPracticesPage({ params }: { params: { locale: string } }) {

  const dailyPractices = [
    {
      practice: "Samayika (Meditation)",
      description: "Daily meditation and spiritual practice",
      elements: [
        "48-minute meditation sessions",
        "Focus on soul nature",
        "Purification of thoughts",
        "Spiritual contemplation",
        "Inner peace and tranquility"
      ],
      significance: "Purifies karma and advances spiritual progress",
      requirements: "Recommended three times daily for serious practitioners"
    },
    {
      practice: "Pratikramana (Repentance)",
      description: "Daily repentance and self-reflection",
      elements: [
        "Reflection on daily actions",
        "Repentance for harmful deeds",
        "Renewal of vows",
        "Purification of karma",
        "Spiritual cleansing"
      ],
      significance: "Removes accumulated karma and purifies soul",
      requirements: "Performed twice daily by monks, regularly by laypeople"
    },
    {
      practice: "Ahimsa in Daily Life",
      description: "Non-violence in all activities",
      elements: [
        "Vegetarian diet",
        "Careful movement and speech",
        "Avoiding harm to microscopic life",
        "Compassionate thoughts",
        "Protection of all beings"
      ],
      significance: "Central practice for spiritual progress",
      requirements: "Obligatory for all Jains"
    },
    {
      practice: "Aparigraha (Non-Possessiveness)",
      description: "Limiting possessions and attachments",
      elements: [
        "Minimizing material possessions",
        "Avoiding excessive attachment",
        "Sharing with others",
        "Simple living",
        "Focus on spiritual wealth"
      ],
      significance: "Reduces karma and promotes detachment",
      requirements: "Varies by spiritual level and commitment"
    }
  ]

  const monasticPractices = [
    {
      practice: "Complete Renunciation",
      description: "Full monastic life and discipline",
      elements: [
        "Renunciation of all possessions",
        "Begging for food (bhiksha)",
        "Walking barefoot",
        "Sleeping on ground",
        "Complete celibacy"
      ],
      significance: "Highest path for spiritual attainment",
      requirements: "Complete commitment to monastic vows"
    },
    {
      practice: "Five Great Vows (Mahavratas)",
      description: "Complete vows for monks and nuns",
      elements: [
        "Ahimsa: Complete non-violence",
        "Satya: Absolute truth",
        "Asteya: Complete non-stealing",
        "Brahmacharya: Complete celibacy",
        "Aparigraha: Complete non-possession"
      ],
      significance: "Foundation of monastic discipline",
      requirements: "Absolute adherence for monks and nuns"
    },
    {
      practice: "Intensive Meditation",
      description: "Deep spiritual practice",
      elements: [
        "Extended meditation sessions",
        "Study of scriptures",
        "Teaching lay community",
        "Spiritual guidance",
        "Preservation of knowledge"
      ],
      significance: "Advanced spiritual development",
      requirements: "Dedicated monastic life"
    },
    {
      practice: "Austerities (Tapas)",
      description: "Spiritual austerities and penance",
      elements: [
        "Fasting and dietary restrictions",
        "Physical austerities",
        "Mental discipline",
        "Spiritual purification",
        "Karma removal"
      ],
      significance: "Accelerates karma removal and spiritual progress",
      requirements: "Under proper guidance and supervision"
    }
  ]

  const layPractices = [
    {
      practice: "Twelve Vows (Anuvratas)",
      description: "Modified vows for lay followers",
      elements: [
        "Limited non-violence",
        "Limited truthfulness",
        "Limited non-stealing",
        "Limited celibacy",
        "Limited non-possession"
      ],
      significance: "Practical spiritual path for householders",
      requirements: "Adapted to lay life circumstances"
    },
    {
      practice: "Supporting Monastic Community",
      description: "Service to monks and nuns",
      elements: [
        "Providing food and shelter",
        "Supporting educational activities",
        "Preserving scriptures",
        "Building temples and institutions",
        "Financial support"
      ],
      significance: "Creates merit and supports spiritual community",
      requirements: "According to means and ability"
    },
    {
      practice: "Regular Temple Visits",
      description: "Worship and spiritual activities",
      elements: [
        "Visiting Jain temples",
        "Worshipping Tirthankaras",
        "Participating in ceremonies",
        "Listening to discourses",
        "Community activities"
      ],
      significance: "Strengthens spiritual connection and community",
      requirements: "Regular participation recommended"
    },
    {
      practice: "Ethical Business Practices",
      description: "Honest and ethical livelihood",
      elements: [
        "Honest business dealings",
        "Avoiding harmful occupations",
        "Fair treatment of employees",
        "Environmental responsibility",
        "Social contribution"
      ],
      significance: "Integrates spiritual values with worldly life",
      requirements: "Essential for lay spiritual progress"
    }
  ]

  const fastingPractices = [
    {
      practice: "Paryushana",
      period: "August-September",
      description: "Annual festival of forgiveness",
      practices: [
        "Eight-day fasting period",
        "Intensive spiritual practice",
        "Seeking and granting forgiveness",
        "Study of scriptures",
        "Community gatherings"
      ],
      significance: "Most important Jain festival"
    },
    {
      practice: "Ayambil",
      description: "Simple food fasting",
      practices: [
        "Eating only boiled grains",
        "No spices or condiments",
        "Single meal per day",
        "Spiritual contemplation",
        "Karma purification"
      ],
      significance: "Purifies body and mind"
    },
    {
      practice: "Upvas",
      description: "Complete fasting",
      practices: [
        "No food or water",
        "Intensive meditation",
        "Spiritual reading",
        "Self-reflection",
        "Karma removal"
      ],
      significance: "Advanced spiritual practice"
    },
    {
      practice: "Ekashana",
      description: "One meal per day",
      practices: [
        "Single meal at specific time",
        "Mindful eating",
        "Gratitude for food",
        "Spiritual awareness",
        "Discipline practice"
      ],
      significance: "Develops self-discipline"
    }
  ]

  const templePractices = [
    {
      practice: "Temple Worship",
      description: "Worship of Tirthankaras",
      elements: [
        "Offering flowers and incense",
        "Reciting mantras and prayers",
        "Circumambulation (pradakshina)",
        "Meditation and contemplation",
        "Seeking spiritual guidance"
      ],
      significance: "Connects with spiritual masters and divine energy"
    },
    {
      practice: "Abhisheka",
      description: "Ritual bathing of idols",
      elements: [
        "Bathing Tirthankara idols",
        "Offering milk, water, and flowers",
        "Reciting sacred mantras",
        "Spiritual purification",
        "Devotional expression"
      ],
      significance: "Purifies mind and creates merit"
    },
    {
      practice: "Puja Ceremonies",
      description: "Ritual worship ceremonies",
      elements: [
        "Elaborate worship rituals",
        "Offering various substances",
        "Recitation of sacred texts",
        "Community participation",
        "Spiritual celebration"
      ],
      significance: "Strengthens spiritual community and devotion"
    },
    {
      practice: "Temple Festivals",
      description: "Special celebrations and events",
      elements: [
        "Birth anniversaries of Tirthankaras",
        "Temple consecration ceremonies",
        "Community gatherings",
        "Spiritual discourses",
        "Cultural celebrations"
      ],
      significance: "Preserves tradition and builds community"
    }
  ]

  const lifeCycleRituals = [
    {
      ritual: "Naming Ceremony",
      timing: "Soon after birth",
      description: "Naming of newborn child",
      elements: [
        "Consultation with astrologer",
        "Choosing auspicious name",
        "Temple ceremony",
        "Community blessings",
        "Spiritual protection"
      ],
      significance: "Connects child to Jain community and tradition"
    },
    {
      ritual: "Initiation Ceremony",
      timing: "When ready for spiritual commitment",
      description: "Taking vows and commitments",
      elements: [
        "Taking anuvratas (limited vows)",
        "Spiritual guidance",
        "Community support",
        "Renewal of commitment",
        "Spiritual protection"
      ],
      significance: "Formal commitment to Jain way of life"
    },
    {
      ritual: "Marriage Ceremony",
      description: "Jain wedding rituals",
      elements: [
        "Traditional Jain ceremonies",
        "Blessings from monks",
        "Community celebration",
        "Spiritual guidance",
        "Commitment to Jain values"
      ],
      significance: "Sacred union and commitment to Jain values"
    },
    {
      ritual: "Funeral Ceremonies",
      description: "Jain death and mourning rituals",
      elements: [
        "Cremation with prayers",
        "Ashes disposal in flowing water",
        "Community support",
        "Spiritual guidance",
        "Remembrance ceremonies"
      ],
      significance: "Honors the deceased and comforts the living"
    }
  ]

  const ethicalPractices = [
    {
      practice: "Truthfulness (Satya)",
      description: "Speaking truth always",
      applications: [
        "Honest communication",
        "Avoiding falsehood",
        "Speaking with kindness",
        "Keeping promises",
        "Integrity in all dealings"
      ],
      significance: "Builds trust and spiritual purity"
    },
    {
      practice: "Non-Stealing (Asteya)",
      description: "Not taking what is not given",
      applications: [
        "Respecting others' property",
        "Avoiding theft and fraud",
        "Fair business practices",
        "Giving to others",
        "Contentment with what one has"
      ],
      significance: "Promotes honesty and contentment"
    },
    {
      practice: "Celibacy (Brahmacharya)",
      description: "Sexual restraint and purity",
      applications: [
        "Monastic celibacy",
        "Marital fidelity",
        "Control of sensual desires",
        "Focus on spiritual goals",
        "Energy conservation"
      ],
      significance: "Conserves energy for spiritual practice"
    },
    {
      practice: "Compassion and Service",
      description: "Service to humanity and all beings",
      applications: [
        "Helping those in need",
        "Protecting animals",
        "Environmental conservation",
        "Community service",
        "Promoting peace"
      ],
      significance: "Demonstrates love for all creation"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jain Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the rich tapestry of Jain religious practices, from daily observances to monastic disciplines, 
          that guide Jain life and create meaningful spiritual connections with the divine and community.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {dailyPractices.map((practice, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{practice.practice}</CardTitle>
                  <CardDescription className="text-lg">{practice.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Elements
                  </h3>
                  <ul className="space-y-2">
                    {practice.elements.map((element, elementIndex) => (
                      <li key={elementIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Spiritual Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {practice.significance}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Requirements
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {practice.requirements}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Monastic Practices</h2>
        <div className="grid gap-6">
          {monasticPractices.map((practice, index) => (
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
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Lay Practices</h2>
        <div className="grid gap-6">
          {layPractices.map((practice, index) => (
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
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Fasting Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fastingPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{practice.practice}</CardTitle>
                    <CardDescription>{practice.description}</CardDescription>
                  </div>
                  {practice.period && <Badge variant="secondary">{practice.period}</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practices</h4>
                <ul className="space-y-2">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Temple Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {templePractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{practice.practice}</CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                <ul className="space-y-2">
                  {practice.elements.map((element, elementIndex) => (
                    <li key={elementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{practice.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Life Cycle Rituals</h2>
        <div className="grid gap-6">
          {lifeCycleRituals.map((ritual, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{ritual.ritual}</CardTitle>
                    <CardDescription>{ritual.description}</CardDescription>
                  </div>
                  {ritual.timing && <Badge variant="secondary">{ritual.timing}</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                <ul className="space-y-2">
                  {ritual.elements.map((element, elementIndex) => (
                    <li key={elementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{ritual.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ethical Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ethicalPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{practice.practice}</CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {practice.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{practice.significance}</p>
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
            <Link href={`/${params.locale}/religion/jainism/history`}>
              Jain History
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