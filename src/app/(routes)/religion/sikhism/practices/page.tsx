import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin, Clock, Home } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Sikh Practices | Sacred Texts & Religious Studies',
    description: 'Explore Sikh religious practices, rituals, customs, and daily observances that guide Sikh life and spiritual development.',
    keywords: 'Sikh practices, Sikh rituals, Sikh customs, Sikh observances, Sikh prayer, Sikh holidays, Sikh life',
    openGraph: {
      title: 'Sikh Practices | Sacred Texts & Religious Studies',
      description: 'Explore Sikh religious practices, rituals, customs, and daily observances that guide Sikh life and spiritual development.',
      type: 'website',
    },
  }
}

export default async function SikhismPracticesPage({ params }: { params: { locale: string } }) {

  const dailyPractices = [
    {
      practice: "Nitnem (Daily Prayers)",
      description: "Daily spiritual practice and meditation",
      elements: [
        "Japji Sahib: Morning prayer by Guru Nanak (recited at dawn)",
        "Jaap Sahib: Morning prayer by Guru Gobind Singh",
        "Tav-Prasad Savaiye: Morning prayer",
        "Chaupai Sahib: Evening prayer",
        "Ardas: Prayer for community and world",
        "Kirtan Sohila: Night prayer before sleep"
      ],
      significance: "Maintains spiritual connection and discipline",
      requirements: "Recommended for all Sikhs, especially Amritdhari Sikhs"
    },
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
      significance: "Core spiritual practice for union with God",
      requirements: "Can be practiced anytime, anywhere"
    },
    {
      practice: "Seva (Selfless Service)",
      description: "Service to humanity and community",
      elements: [
        "Langar: Free community kitchen",
        "Community service projects",
        "Helping those in need",
        "Environmental protection",
        "Promoting social justice",
        "Volunteering in gurdwaras"
      ],
      significance: "Demonstrates love for God through service to creation",
      requirements: "Obligatory for all Sikhs as part of spiritual practice"
    },
    {
      practice: "Kirat Karni (Honest Living)",
      description: "Earning honest living through hard work",
      elements: [
        "Honest work and business practices",
        "Avoiding exploitation and fraud",
        "Fair treatment of employees",
        "Environmental responsibility",
        "Contribution to society",
        "Balancing work and spirituality"
      ],
      significance: "Integrates spiritual and worldly responsibilities",
      requirements: "Obligatory for all Sikhs as one of three pillars"
    }
  ]

  const gurdwaraPractices = [
    {
      practice: "Gurdwara Attendance",
      description: "Regular participation in Sikh temple worship",
      elements: [
        "Attending kirtan (devotional singing)",
        "Listening to katha (scriptural discourse)",
        "Participating in sangat (congregation)",
        "Receiving karah parshad (sacred food)",
        "Offering ardas (prayers)",
        "Contributing to community welfare"
      ],
      significance: "Strengthens community bonds and spiritual connection"
    },
    {
      practice: "Kirtan (Devotional Singing)",
      description: "Sacred music and hymn singing",
      elements: [
        "Singing hymns from Guru Granth Sahib",
        "Traditional ragas and musical modes",
        "Community participation",
        "Spiritual experience through music",
        "Preservation of musical traditions",
        "Devotional atmosphere creation"
      ],
      significance: "Enhances spiritual experience and community unity"
    },
    {
      practice: "Langar (Community Kitchen)",
      description: "Free meals for all visitors",
      elements: [
        "Vegetarian meals prepared with love",
        "Served to all regardless of background",
        "Community participation in preparation",
        "Equality demonstration",
        "Service to humanity",
        "Breaking social barriers"
      ],
      significance: "Demonstrates equality and service to humanity"
    },
    {
      practice: "Guru Granth Sahib Veneration",
      description: "Reverence for the eternal Guru",
      elements: [
        "Proper covering and placement",
        "Reading and listening respectfully",
        "Cleaning and maintenance",
        "Transportation with care",
        "Sleeping arrangements",
        "Continuous reading (akhand path)"
      ],
      significance: "Shows respect for the living Guru and spiritual guidance"
    }
  ]

  const lifeCycleRituals = [
    {
      ritual: "Naming Ceremony (Naam Karan)",
      timing: "Soon after birth",
      description: "Naming of newborn child",
      elements: [
        "Opening Guru Granth Sahib randomly",
        "Reading first letter of hymn on that page",
        "Choosing name beginning with that letter",
        "Announcing name to congregation",
        "Blessings from sangat",
        "Karah parshad distribution"
      ],
      significance: "Connects child to Sikh community and spiritual tradition"
    },
    {
      ritual: "Amrit Sanchar (Initiation)",
      timing: "When ready to commit to Sikh way of life",
      description: "Baptism ceremony for Khalsa initiation",
      elements: [
        "Amrit preparation with prayers",
        "Five beloved ones (panj pyare)",
        "Drinking amrit and sprinkling on hair",
        "Taking vows and commitments",
        "Receiving Five Ks",
        "New name with 'Singh' or 'Kaur'"
      ],
      significance: "Formal commitment to Sikh way of life and Khalsa identity"
    },
    {
      ritual: "Anand Karaj (Marriage)",
      description: "Sikh wedding ceremony",
      elements: [
        "Ardas and blessings",
        "Four laavan (circumambulations)",
        "Reading of wedding hymns",
        "Exchange of garlands",
        "Karah parshad distribution",
        "Community celebration"
      ],
      significance: "Sacred union and commitment to Sikh values"
    },
    {
      ritual: "Antam Sanskar (Funeral)",
      description: "Sikh funeral and cremation ceremony",
      elements: [
        "Bathing and dressing the deceased",
        "Ardas and prayers",
        "Cremation with prayers",
        "Ashes disposal in flowing water",
        "Bhog ceremony (completion)",
        "Community support and langar"
      ],
      significance: "Honors the deceased and comforts the living"
    }
  ]

  const fiveKs = [
    {
      k: "Kesh (Uncut Hair)",
      description: "Natural form as given by God",
      significance: [
        "Acceptance of God's will",
        "Natural form and identity",
        "Spiritual discipline",
        "Distinct Sikh appearance",
        "Connection to divine creation"
      ],
      maintenance: "Regular washing, combing, and covering with turban"
    },
    {
      k: "Kanga (Wooden Comb)",
      description: "Tool for cleanliness and discipline",
      significance: [
        "Cleanliness and hygiene",
        "Mental discipline",
        "Order and organization",
        "Spiritual purification",
        "Practical daily reminder"
      ],
      maintenance: "Used daily to keep hair clean and organized"
    },
    {
      k: "Kara (Steel Bracelet)",
      description: "Symbol of strength and unity",
      significance: [
        "Strength and courage",
        "Unity with God",
        "Reminder of divine presence",
        "Protection and blessing",
        "Connection to Sikh community"
      ],
      maintenance: "Worn on right wrist, kept clean and polished"
    },
    {
      k: "Kachera (Cotton Undergarment)",
      description: "Symbol of modesty and self-control",
      significance: [
        "Modesty and dignity",
        "Self-control and discipline",
        "Purity of character",
        "Practical comfort",
        "Spiritual awareness"
      ],
      maintenance: "Clean, white cotton garment, changed regularly"
    },
    {
      k: "Kirpan (Ceremonial Sword)",
      description: "Symbol of protection and justice",
      significance: [
        "Protection of the weak",
        "Defense of righteousness",
        "Courage and bravery",
        "Commitment to justice",
        "Spiritual warrior identity"
      ],
      maintenance: "Kept clean and sharp, worn with respect and responsibility"
    }
  ]

  const holidayPractices = [
    {
      holiday: "Gurpurabs",
      period: "Throughout the year",
      practices: [
        "Akhand Path: 48-hour continuous reading of Guru Granth Sahib",
        "Kirtan and devotional singing",
        "Langar and community meals",
        "Processions and celebrations",
        "Reflection on Guru's teachings",
        "Community service projects"
      ],
      significance: "Celebrates lives and teachings of Sikh Gurus"
    },
    {
      holiday: "Vaisakhi",
      period: "April 13-14",
      practices: [
        "Celebration of Khalsa creation",
        "Amrit ceremony for new initiates",
        "Nagar Kirtan processions",
        "Community gatherings and feasts",
        "Reflection on Sikh identity",
        "Agricultural harvest celebration"
      ],
      significance: "Sikh New Year and Khalsa founding anniversary"
    },
    {
      holiday: "Guru Nanak Gurpurab",
      period: "October/November",
      practices: [
        "Three-day celebrations",
        "Akhand Path and kirtan",
        "Processions with Guru Granth Sahib",
        "Community service projects",
        "Reflection on Sikhism's founding",
        "Interfaith dialogue and understanding"
      ],
      significance: "Birth anniversary of Guru Nanak, founder of Sikhism"
    },
    {
      holiday: "Martyrdom Days",
      period: "Various dates",
      practices: [
        "Remembering sacrifices of Gurus",
        "Reading of historical accounts",
        "Community prayers and kirtan",
        "Reflection on courage and faith",
        "Commitment to Sikh values",
        "Educational programs"
      ],
      significance: "Commemorates Sikh martyrs and their sacrifices"
    }
  ]

  const ethicalPractices = [
    {
      practice: "Vand Chakna (Sharing)",
      description: "Sharing with others and community",
      elements: [
        "Sharing wealth and resources",
        "Contributing to community welfare",
        "Supporting charitable causes",
        "Helping those in need",
        "Environmental stewardship",
        "Promoting social justice"
      ],
      significance: "Demonstrates love for God through generosity"
    },
    {
      practice: "Truth and Honesty",
      description: "Living with truth and integrity",
      elements: [
        "Speaking truth always",
        "Honest business practices",
        "Avoiding deception and fraud",
        "Keeping promises and commitments",
        "Transparency in dealings",
        "Moral courage and integrity"
      ],
      significance: "Essential for spiritual growth and community trust"
    },
    {
      practice: "Equality and Justice",
      description: "Promoting equality and social justice",
      elements: [
        "Treating all people equally",
        "Standing against discrimination",
        "Promoting human rights",
        "Supporting the oppressed",
        "Working for social justice",
        "Interfaith understanding"
      ],
      significance: "Core Sikh values of equality and justice"
    },
    {
      practice: "Forgiveness and Compassion",
      description: "Practicing forgiveness and compassion",
      elements: [
        "Forgiving others' mistakes",
        "Showing compassion to all",
        "Avoiding revenge and hatred",
        "Promoting peace and harmony",
        "Helping those who harm us",
        "Spreading love and kindness"
      ],
      significance: "Reflects divine attributes of mercy and compassion"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the rich tapestry of Sikh religious practices, from daily observances to life cycle rituals, 
          that guide Sikh life and create meaningful spiritual connections with God and community.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {dailyPractices.map((practice, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-orange-600" />
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Gurdwara Practices</h2>
        <div className="grid gap-6">
          {gurdwaraPractices.map((practice, index) => (
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">The Five Ks (Kakars)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiveKs.map((k, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{k.k}</CardTitle>
                <CardDescription>{k.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                <ul className="space-y-2 mb-4">
                  {k.significance.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Maintenance</h4>
                <p className="text-sm text-muted-foreground">{k.maintenance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Holiday Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {holidayPractices.map((holiday, index) => (
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
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practices</h4>
                <ul className="space-y-2">
                  {holiday.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{holiday.significance}</p>
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
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                <ul className="space-y-2">
                  {practice.elements.map((element, elementIndex) => (
                    <li key={elementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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