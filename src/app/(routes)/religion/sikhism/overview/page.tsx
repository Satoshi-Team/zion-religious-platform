import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Sikhism Overview | Sacred Texts & Religious Studies',
    description: 'Explore Sikhism, a monotheistic religion founded in the 15th century, including its beliefs, practices, history, and emphasis on equality and service.',
    keywords: 'Sikhism, Sikh religion, Guru Nanak, Sikh beliefs, Sikh practices, Sikh history, Sikh culture',
    openGraph: {
      title: 'Sikhism Overview | Sacred Texts & Religious Studies',
      description: 'Explore Sikhism, a monotheistic religion founded in the 15th century, including its beliefs, practices, history, and emphasis on equality and service.',
      type: 'website',
    },
  }
}

export default async function SikhismOverviewPage({ params }: { params: { locale: string } }) {

  const coreBeliefs = [
    {
      belief: "Ik Onkar (One God)",
      description: "Belief in one supreme, formless God",
      details: [
        "Single, eternal, and formless divine reality",
        "Present in all creation and beyond",
        "Accessible through meditation and devotion",
        "Transcends all religious boundaries",
        "Source of all existence and truth"
      ],
      significance: "Forms the foundation of Sikh monotheism and spiritual practice"
    },
    {
      belief: "Guru Granth Sahib",
      description: "Eternal Guru and sacred scripture",
      details: [
        "Living Guru for all Sikhs",
        "Contains teachings of Sikh Gurus and saints",
        "Written in Gurmukhi script",
        "Treated with utmost reverence",
        "Source of spiritual guidance and wisdom"
      ],
      significance: "Provides eternal guidance and unites Sikh community"
    },
    {
      belief: "Equality and Social Justice",
      description: "Universal equality of all human beings",
      details: [
        "No discrimination based on caste, gender, or religion",
        "Equal access to spiritual practice",
        "Service to humanity (seva)",
        "Standing against oppression",
        "Promotion of social justice"
      ],
      significance: "Challenges social hierarchies and promotes human dignity"
    },
    {
      belief: "Three Pillars of Sikhism",
      description: "Core principles guiding Sikh life",
      details: [
        "Naam Japna: Remembering and meditating on God",
        "Kirat Karni: Earning honest living through hard work",
        "Vand Chakna: Sharing with others and serving community",
        "Integration of spiritual and worldly life",
        "Balance of meditation and social responsibility"
      ],
      significance: "Provides practical framework for spiritual and ethical living"
    },
    {
      belief: "Karma and Reincarnation",
      description: "Understanding of action and rebirth",
      details: [
        "Actions determine future consequences",
        "Cycle of birth and death (samsara)",
        "Liberation through divine grace",
        "Union with God as ultimate goal",
        "Free will and divine grace working together"
      ],
      significance: "Encourages ethical living and spiritual growth"
    }
  ]

  const sacredTexts = [
    {
      text: "Guru Granth Sahib",
      description: "The eternal Guru and primary scripture",
      features: [
        "1,430 pages of sacred poetry and hymns",
        "Teachings of 10 Sikh Gurus and other saints",
        "Written in Gurmukhi script",
        "Organized by musical ragas",
        "Treated as living Guru"
      ],
      significance: "Central authority and spiritual guide for all Sikhs"
    },
    {
      text: "Dasam Granth",
      description: "Collection of Guru Gobind Singh's writings",
      features: [
        "Composed by the 10th Guru",
        "Contains historical narratives",
        "Martial poetry and spiritual teachings",
        "Jaap Sahib and other compositions",
        "Important for Sikh history and culture"
      ],
      significance: "Provides historical and cultural context for Sikhism"
    },
    {
      text: "Sikh Rehat Maryada",
      description: "Code of conduct and discipline",
      features: [
        "Guidelines for Sikh behavior",
        "Ritual practices and ceremonies",
        "Community organization",
        "Ethical standards",
        "Modern interpretation of Sikh principles"
      ],
      significance: "Guides Sikh practice and community life"
    }
  ]

  const religiousPractices = [
    {
      practice: "Nitnem (Daily Prayers)",
      description: "Daily spiritual practice and meditation",
      elements: [
        "Japji Sahib: Morning prayer by Guru Nanak",
        "Jaap Sahib: Morning prayer by Guru Gobind Singh",
        "Tav-Prasad Savaiye: Morning prayer",
        "Chaupai Sahib: Evening prayer",
        "Ardas: Prayer for community and world"
      ],
      significance: "Maintains spiritual connection and discipline"
    },
    {
      practice: "Gurdwara (Sikh Temple)",
      description: "Place of worship and community gathering",
      elements: [
        "Guru Granth Sahib as central focus",
        "Langar: Free community kitchen",
        "Kirtan: Devotional singing",
        "Sangat: Community congregation",
        "Service and learning opportunities"
      ],
      significance: "Creates community and promotes equality"
    },
    {
      practice: "Five Ks (Kakars)",
      description: "Outward symbols of Sikh identity",
      elements: [
        "Kesh: Uncut hair as natural form",
        "Kanga: Wooden comb for cleanliness",
        "Kara: Steel bracelet for strength",
        "Kachera: Cotton undergarment for modesty",
        "Kirpan: Ceremonial sword for protection"
      ],
      significance: "Expresses commitment to Sikh values and identity"
    },
    {
      practice: "Seva (Selfless Service)",
      description: "Service to humanity and community",
      elements: [
        "Langar: Free meals for all",
        "Community service projects",
        "Helping those in need",
        "Environmental protection",
        "Promoting social justice"
      ],
      significance: "Demonstrates love for God through service to creation"
    }
  ]

  const majorHolidays = [
    {
      holiday: "Gurpurabs",
      period: "Throughout the year",
      description: "Birth and death anniversaries of Sikh Gurus",
      practices: [
        "Akhand Path: Continuous reading of Guru Granth Sahib",
        "Kirtan and devotional singing",
        "Langar and community meals",
        "Processions and celebrations",
        "Reflection on Guru's teachings"
      ]
    },
    {
      holiday: "Vaisakhi",
      period: "April 13-14",
      description: "Sikh New Year and Khalsa founding",
      practices: [
        "Celebration of Khalsa creation",
        "Amrit ceremony for new initiates",
        "Nagar Kirtan processions",
        "Community gatherings and feasts",
        "Reflection on Sikh identity"
      ]
    },
    {
      holiday: "Guru Nanak Gurpurab",
      period: "October/November",
      description: "Birth anniversary of Guru Nanak",
      practices: [
        "Three-day celebrations",
        "Akhand Path and kirtan",
        "Processions with Guru Granth Sahib",
        "Community service projects",
        "Reflection on Sikhism's founding"
      ]
    },
    {
      holiday: "Martyrdom Days",
      period: "Various dates",
      description: "Commemoration of Sikh martyrs",
      practices: [
        "Remembering sacrifices of Gurus",
        "Reading of historical accounts",
        "Community prayers and kirtan",
        "Reflection on courage and faith",
        "Commitment to Sikh values"
      ]
    }
  ]

  const sikhGurus = [
    {
      guru: "Guru Nanak Dev (1469-1539)",
      period: "1st Guru",
      contributions: [
        "Founded Sikhism and established core beliefs",
        "Taught monotheism and equality",
        "Established langar tradition",
        "Composed Japji Sahib and other hymns",
        "Traveled extensively spreading message"
      ],
      significance: "Founder of Sikhism and spiritual guide"
    },
    {
      guru: "Guru Angad Dev (1504-1552)",
      period: "2nd Guru",
      contributions: [
        "Developed Gurmukhi script",
        "Established Sikh educational system",
        "Expanded langar tradition",
        "Collected Guru Nanak's hymns",
        "Strengthened Sikh community"
      ],
      significance: "Established Sikh identity and education"
    },
    {
      guru: "Guru Amar Das (1479-1574)",
      period: "3rd Guru",
      contributions: [
        "Established equality for women",
        "Created 22 manjis (preaching centers)",
        "Composed Anand Sahib",
        "Abolished purdah and sati",
        "Promoted social reform"
      ],
      significance: "Advanced social equality and reform"
    },
    {
      guru: "Guru Ram Das (1534-1581)",
      period: "4th Guru",
      contributions: [
        "Founded Amritsar city",
        "Established Harmandir Sahib (Golden Temple)",
        "Composed Lavan (wedding ceremony)",
        "Strengthened Sikh institutions",
        "Promoted community building"
      ],
      significance: "Established Sikh spiritual center"
    },
    {
      guru: "Guru Arjan Dev (1563-1606)",
      period: "5th Guru",
      contributions: [
        "Compiled Adi Granth (first Sikh scripture)",
        "Built Harmandir Sahib",
        "Established masand system",
        "Composed Sukhmani Sahib",
        "Became first Sikh martyr"
      ],
      significance: "Created Sikh scripture and faced persecution"
    },
    {
      guru: "Guru Hargobind (1595-1644)",
      period: "6th Guru",
      contributions: [
        "Introduced martial training",
        "Built Akal Takht",
        "Established Sikh military tradition",
        "Balanced spiritual and temporal power",
        "Defended Sikh community"
      ],
      significance: "Established Sikh martial tradition"
    },
    {
      guru: "Guru Har Rai (1630-1661)",
      period: "7th Guru",
      contributions: [
        "Maintained peace during conflict",
        "Established medical clinics",
        "Promoted healing and compassion",
        "Protected Sikh community",
        "Continued spiritual leadership"
      ],
      significance: "Emphasized healing and compassion"
    },
    {
      guru: "Guru Har Krishan (1656-1664)",
      period: "8th Guru",
      contributions: [
        "Became Guru at age 5",
        "Healed many during smallpox epidemic",
        "Demonstrated divine wisdom",
        "Sacrificed life helping others",
        "Youngest Guru in Sikh history"
      ],
      significance: "Demonstrated selfless service and sacrifice"
    },
    {
      guru: "Guru Tegh Bahadur (1621-1675)",
      period: "9th Guru",
      contributions: [
        "Defended religious freedom",
        "Protected Kashmiri Pandits",
        "Sacrificed life for others' rights",
        "Composed many hymns",
        "Established preaching centers"
      ],
      significance: "Martyr for religious freedom and human rights"
    },
    {
      guru: "Guru Gobind Singh (1666-1708)",
      period: "10th Guru",
      contributions: [
        "Created Khalsa order",
        "Established Five Ks",
        "Compiled Dasam Granth",
        "Declared Guru Granth Sahib as eternal Guru",
        "Established Sikh identity and discipline"
      ],
      significance: "Established Khalsa and completed Sikh evolution"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikhism Overview</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover Sikhism, a vibrant monotheistic religion founded in the 15th century, emphasizing 
          equality, service, and devotion to one God, with a rich tradition of spiritual and social reform.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreBeliefs.map((belief, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-orange-600" />
                <div>
                  <CardTitle className="text-2xl">{belief.belief}</CardTitle>
                  <CardDescription className="text-lg">{belief.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Elements
                  </h3>
                  <ul className="space-y-2">
                    {belief.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
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
                    {belief.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Sacred Texts</h2>
        <div className="grid gap-6">
          {sacredTexts.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{text.text}</CardTitle>
                <CardDescription>{text.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {text.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{text.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Religious Practices</h2>
        <div className="grid gap-6">
          {religiousPractices.map((practice, index) => (
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
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Major Holidays</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {majorHolidays.map((holiday, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{holiday.holiday}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {holiday.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{holiday.description}</p>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practices</h4>
                <ul className="space-y-2">
                  {holiday.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{practice}</span>
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
        <h2 className="text-3xl font-bold mb-8 text-center">The Ten Sikh Gurus</h2>
        <div className="grid gap-6">
          {sikhGurus.map((guru, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{guru.guru}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {guru.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {guru.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Significance</h4>
                    <p className="text-sm text-muted-foreground">{guru.significance}</p>
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
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/teachings`}>
              Sikh Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 