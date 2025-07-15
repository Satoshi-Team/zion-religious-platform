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
    title: 'Sikh History | Sacred Texts & Religious Studies',
    description: 'Explore the rich history of Sikhism from its founding by Guru Nanak through the era of the ten Gurus to modern Sikh communities worldwide.',
    keywords: 'Sikh history, Guru Nanak, Sikh Gurus, Khalsa, Sikh empire, Sikh diaspora, Sikh communities',
    openGraph: {
      title: 'Sikh History | Sacred Texts & Religious Studies',
      description: 'Explore the rich history of Sikhism from its founding by Guru Nanak through the era of the ten Gurus to modern Sikh communities worldwide.',
      type: 'website',
    },
  }
}

export default async function SikhismHistoryPage({ params }: { params: { locale: string } }) {

  const historicalPeriods = [
    {
      title: "Founding Period (1469-1539)",
      description: "The birth of Sikhism under Guru Nanak Dev",
      keyEvents: [
        "Birth of Guru Nanak in 1469 in Talwandi (Nankana Sahib)",
        "Divine revelation and spiritual awakening",
        "Extensive travels (udasis) across India and beyond",
        "Establishment of Kartarpur as first Sikh community",
        "Composition of foundational teachings and Japji Sahib",
        "Appointment of Guru Angad as successor"
      ],
      significance: "Established core Sikh beliefs and practices, challenging social inequalities"
    },
    {
      title: "Early Development (1539-1606)",
      description: "Consolidation and growth under early Gurus",
      keyEvents: [
        "Guru Angad develops Gurmukhi script and educational system",
        "Guru Amar Das establishes equality for women and abolishes purdah",
        "Guru Ram Das founds Amritsar and establishes Harmandir Sahib",
        "Guru Arjan compiles Adi Granth (first Sikh scripture)",
        "Guru Arjan becomes first Sikh martyr in 1606",
        "Establishment of Sikh institutions and community practices"
      ],
      significance: "Built strong foundation for Sikh community and institutions"
    },
    {
      title: "Martial Period (1606-1708)",
      description: "Development of martial traditions and defense",
      keyEvents: [
        "Guru Hargobind establishes martial training and Akal Takht",
        "Guru Har Rai maintains peace during Mughal conflicts",
        "Guru Har Krishan serves during smallpox epidemic",
        "Guru Tegh Bahadur martyred defending religious freedom",
        "Guru Gobind Singh creates Khalsa order in 1699",
        "Establishment of Five Ks and Sikh identity"
      ],
      significance: "Developed Sikh martial traditions and established distinct Sikh identity"
    },
    {
      title: "Khalsa Era (1708-1799)",
      description: "Rise of Khalsa and Sikh political power",
      keyEvents: [
        "Guru Gobind Singh declares Guru Granth Sahib as eternal Guru",
        "Banda Singh Bahadur leads Sikh resistance against Mughals",
        "Formation of Sikh misls (confederacies)",
        "Sikh victories in battles against Afghan invaders",
        "Establishment of Sikh rule in Punjab",
        "Development of Sikh military and political organization"
      ],
      significance: "Established Sikh political power and military strength"
    },
    {
      title: "Sikh Empire (1799-1849)",
      description: "Rise and fall of the Sikh Empire under Maharaja Ranjit Singh",
      keyEvents: [
        "Maharaja Ranjit Singh unifies Sikh misls",
        "Expansion of Sikh Empire across North India",
        "Modernization of army and administration",
        "Religious tolerance and cultural patronage",
        "Anglo-Sikh Wars and annexation by British",
        "End of Sikh political sovereignty"
      ],
      significance: "Created powerful Sikh state and demonstrated Sikh governance capabilities"
    },
    {
      title: "Colonial Period (1849-1947)",
      description: "Sikhs under British rule and independence movement",
      keyEvents: [
        "Sikh participation in British Indian Army",
        "Sikh reform movements and Singh Sabha",
        "Gurdwara Reform Movement and Akali Dal",
        "Sikh contributions to independence movement",
        "Partition of India and Sikh migration",
        "Establishment of Sikh political organizations"
      ],
      significance: "Maintained Sikh identity and contributed to Indian independence"
    },
    {
      title: "Modern Period (1947-Present)",
      description: "Sikhism in independent India and global diaspora",
      keyEvents: [
        "Sikh migration to countries worldwide",
        "Establishment of global Sikh communities",
        "Sikh political movements and demands",
        "Sikh contributions to various fields",
        "Interfaith dialogue and understanding",
        "Preservation and promotion of Sikh culture"
      ],
      significance: "Sikhism becomes global religion with diverse communities worldwide"
    }
  ]

  const keyFigures = [
    {
      name: "Guru Nanak Dev",
      period: "1469-1539",
      role: "Founder of Sikhism and first Guru",
      impact: "Established core Sikh beliefs, challenged social inequalities, created foundation for Sikh community"
    },
    {
      name: "Guru Arjan Dev",
      period: "1563-1606",
      role: "Fifth Guru and first Sikh martyr",
      impact: "Compiled Adi Granth, built Harmandir Sahib, established Sikh institutions, sacrificed life for religious freedom"
    },
    {
      name: "Guru Tegh Bahadur",
      period: "1621-1675",
      role: "Ninth Guru and defender of religious freedom",
      impact: "Sacrificed life protecting Kashmiri Pandits, demonstrated commitment to religious freedom and human rights"
    },
    {
      name: "Guru Gobind Singh",
      period: "1666-1708",
      role: "Tenth Guru and creator of Khalsa",
      impact: "Created Khalsa order, established Five Ks, compiled Dasam Granth, declared Guru Granth Sahib as eternal Guru"
    },
    {
      name: "Maharaja Ranjit Singh",
      period: "1780-1839",
      role: "Founder of Sikh Empire",
      impact: "Unified Sikh misls, created powerful Sikh state, demonstrated Sikh governance and military capabilities"
    },
    {
      name: "Banda Singh Bahadur",
      period: "1670-1716",
      role: "Sikh military leader and revolutionary",
      impact: "Led Sikh resistance against Mughals, established Sikh rule in parts of Punjab, demonstrated Sikh martial spirit"
    }
  ]

  const historicalEvents = [
    {
      event: "Creation of Khalsa (1699)",
      date: "1699 CE",
      description: "Guru Gobind Singh creates the Khalsa order",
      significance: [
        "Established distinct Sikh identity",
        "Created Five Ks as outward symbols",
        "Established martial traditions",
        "Unified Sikh community",
        "Provided framework for Sikh discipline"
      ],
      impact: "Transformed Sikhism into distinct religious community with clear identity and discipline"
    },
    {
      event: "Martyrdom of Guru Arjan (1606)",
      date: "1606 CE",
      description: "First Sikh martyr under Mughal persecution",
      significance: [
        "Demonstrated Sikh commitment to truth",
        "Established tradition of sacrifice",
        "Strengthened Sikh resolve",
        "Inspired future generations",
        "Highlighted religious persecution"
      ],
      impact: "Established Sikh tradition of martyrdom and resistance to oppression"
    },
    {
      event: "Martyrdom of Guru Tegh Bahadur (1675)",
      date: "1675 CE",
      description: "Ninth Guru sacrificed for religious freedom",
      significance: [
        "Protected religious minorities",
        "Demonstrated universal human rights",
        "Established Sikh commitment to justice",
        "Inspired resistance to tyranny",
        "Showed interfaith solidarity"
      ],
      impact: "Established Sikh commitment to religious freedom and human rights"
    },
    {
      event: "Annexation of Sikh Empire (1849)",
      date: "1849 CE",
      description: "British annexation of Punjab",
      significance: [
        "Ended Sikh political sovereignty",
        "Sikhs became part of British India",
        "Sikh military traditions continued",
        "Sikh identity preserved",
        "Sikhs adapted to new political reality"
      ],
      impact: "Ended Sikh political independence but preserved Sikh identity and traditions"
    },
    {
      event: "Partition of India (1947)",
      date: "1947 CE",
      description: "Division of India and Pakistan",
      significance: [
        "Mass migration of Sikhs to India",
        "Loss of historical Sikh sites in Pakistan",
        "Sikhs became minority in India",
        "Sikh political consciousness increased",
        "Sikh diaspora began"
      ],
      impact: "Transformed Sikh demography and created global Sikh diaspora"
    }
  ]

  const sikhCommunities = [
    {
      region: "Punjab, India",
      period: "15th century - present",
      characteristics: "Heartland of Sikhism, majority Sikh population, rich cultural traditions",
      contributions: "Preservation of Sikh culture, agricultural development, military service, political leadership"
    },
    {
      region: "United Kingdom",
      period: "19th century - present",
      characteristics: "Large Sikh diaspora, strong community organizations, political representation",
      contributions: "Sikh temples (gurdwaras), community service, interfaith dialogue, cultural preservation"
    },
    {
      region: "North America",
      period: "20th century - present",
      characteristics: "Growing Sikh communities, professional success, cultural integration",
      contributions: "Sikh advocacy, community service, educational initiatives, interfaith understanding"
    },
    {
      region: "Southeast Asia",
      period: "19th century - present",
      characteristics: "Historical Sikh presence, trade and business communities",
      contributions: "Economic development, cultural exchange, religious tolerance, community building"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich and complex history of Sikhism, from its founding by Guru Nanak through 
          centuries of development, persecution, and triumph to become a global religion with millions of followers.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {historicalPeriods.map((period, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-orange-600" />
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
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Key Historical Figures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFigures.map((figure, index) => (
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
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Sikh Communities Worldwide</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {sikhCommunities.map((community, index) => (
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
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Themes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Resistance and Perseverance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sikh history demonstrates remarkable resilience in the face of persecution, 
                maintaining faith and identity through centuries of challenges and oppression.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Community and Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sikh communities have consistently emphasized service to humanity, 
                building strong institutions and contributing to society through langar and seva.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-500" />
                Global Expansion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From its origins in Punjab, Sikhism has spread worldwide, 
                creating diverse communities while maintaining core values and traditions.
              </p>
            </CardContent>
          </Card>
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
            <Link href={`/${params.locale}/religion/sikhism/teachings`}>
              Sikh Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 