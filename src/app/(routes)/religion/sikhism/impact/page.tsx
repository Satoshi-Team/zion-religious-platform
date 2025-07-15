import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Sikh Impact | Sacred Texts & Religious Studies',
    description: 'Explore Sikhism\'s profound impact on world civilization, including its influence on social justice, equality, community service, and global cultural contributions.',
    keywords: 'Sikh impact, Sikh contributions, social justice, Sikh culture, Sikh philosophy, equality, community service, Sikh influence',
    openGraph: {
      title: 'Sikh Impact | Sacred Texts & Religious Studies',
      description: 'Explore Sikhism\'s profound impact on world civilization, including its influence on social justice, equality, community service, and global cultural contributions.',
      type: 'website',
    },
  }
}

export default async function SikhismImpactPage({ params }: { params: { locale: string } }) {

  const religiousImpact = [
    {
      title: "Monotheism and Universalism",
      description: "Sikhism's unique approach to monotheism and religious tolerance",
      contributions: [
        "One God accessible to all humanity",
        "Rejection of religious exclusivism",
        "Respect for all religious traditions",
        "Universal spiritual principles",
        "Interfaith dialogue and understanding"
      ],
      globalInfluence: "Promotes religious harmony and universal spiritual values",
      significance: "Demonstrates how monotheism can embrace religious diversity"
    },
    {
      title: "Guru Granth Sahib",
      description: "Living Guru and eternal spiritual guide",
      contributions: [
        "Eternal Guru concept",
        "Inclusive scripture with multiple voices",
        "Musical and poetic spiritual expression",
        "Continuous spiritual guidance",
        "Community unity and identity"
      ],
      globalInfluence: "Model for inclusive religious leadership and community organization",
      significance: "Shows how sacred texts can unite diverse communities"
    },
    {
      title: "Khalsa Identity",
      description: "Distinct Sikh identity and discipline",
      contributions: [
        "Five Ks as spiritual symbols",
        "Martial traditions and courage",
        "Distinct religious identity",
        "Commitment to justice and protection",
        "Spiritual warrior concept"
      ],
      globalInfluence: "Demonstrates how religious identity can promote courage and justice",
      significance: "Establishes model for religious commitment and social responsibility"
    },
    {
      title: "Three Pillars Philosophy",
      description: "Integration of spiritual and worldly life",
      contributions: [
        "Balance of meditation and action",
        "Honest work as spiritual practice",
        "Service to humanity as worship",
        "Integration of spiritual and material",
        "Practical spiritual living"
      ],
      globalInfluence: "Provides framework for balanced spiritual and worldly life",
      significance: "Shows how spirituality can be practical and socially engaged"
    }
  ]

  const socialJusticeImpact = [
    {
      category: "Equality and Anti-Discrimination",
      contributions: [
        "Rejection of caste system",
        "Gender equality and women's rights",
        "Equal access to spiritual practice",
        "Universal human dignity",
        "Standing against oppression"
      ],
      notableFigures: "Guru Nanak, Guru Amar Das, Sikh reformers",
      influence: "Pioneered social equality and challenged discrimination"
    },
    {
      category: "Community Service (Seva)",
      contributions: [
        "Langar: Free community kitchen",
        "Selfless service to humanity",
        "Community welfare programs",
        "Disaster relief and humanitarian aid",
        "Environmental protection"
      ],
      notableFigures: "Sikh communities worldwide",
      influence: "Established model for community service and humanitarian aid"
    },
    {
      category: "Religious Freedom",
      contributions: [
        "Defense of religious minorities",
        "Sacrifice for religious freedom",
        "Interfaith solidarity",
        "Protection of human rights",
        "Standing against religious persecution"
      ],
      notableFigures: "Guru Tegh Bahadur, Sikh martyrs",
      influence: "Demonstrated commitment to religious freedom and human rights"
    },
    {
      category: "Social Reform",
      contributions: [
        "Abolition of social evils",
        "Women's empowerment",
        "Education for all",
        "Healthcare accessibility",
        "Community development"
      ],
      notableFigures: "Sikh reformers, community leaders",
      influence: "Advanced social reform and community development"
    }
  ]

  const culturalContributions = [
    {
      category: "Literature and Language",
      contributions: [
        "Gurmukhi script development",
        "Rich poetic and spiritual literature",
        "Sikh historical narratives",
        "Philosophical and theological works",
        "Contemporary Sikh literature"
      ],
      notableFigures: "Guru Angad, Sikh scholars and writers",
      influence: "Enriched world literature with unique spiritual perspectives"
    },
    {
      category: "Music and Arts",
      contributions: [
        "Gurbani Kirtan tradition",
        "Traditional Sikh music",
        "Sikh visual arts and architecture",
        "Gurdwara design and decoration",
        "Contemporary Sikh arts"
      ],
      notableFigures: "Sikh musicians, artists, architects",
      influence: "Contributed unique musical and artistic traditions"
    },
    {
      category: "Cuisine and Traditions",
      contributions: [
        "Langar tradition and community meals",
        "Sikh vegetarian cuisine",
        "Festival foods and celebrations",
        "Community cooking traditions",
        "Cultural food practices"
      ],
      notableFigures: "Sikh communities worldwide",
      influence: "Enriched global cuisine with community-oriented food traditions"
    },
    {
      category: "Education and Learning",
      contributions: [
        "Gurmukhi script and literacy",
        "Sikh educational institutions",
        "Preservation of knowledge",
        "Community learning centers",
        "Modern Sikh universities"
      ],
      notableFigures: "Sikh educators and scholars",
      influence: "Promoted education and knowledge preservation"
    }
  ]

  const militaryAndPoliticalImpact = [
    {
      field: "Sikh Empire",
      period: "1799-1849",
      contributions: [
        "Modernization of administration",
        "Religious tolerance and pluralism",
        "Military innovation and organization",
        "Cultural patronage and development",
        "Diplomatic relations and trade"
      ],
      notableFigures: "Maharaja Ranjit Singh, Sikh generals",
      impact: "Demonstrated Sikh governance capabilities and military prowess"
    },
    {
      field: "Military Service",
      period: "19th-21st Centuries",
      contributions: [
        "British Indian Army service",
        "World War contributions",
        "Modern military excellence",
        "Peacekeeping missions",
        "Defense of democratic values"
      ],
      notableFigures: "Sikh soldiers and officers worldwide",
      impact: "Established reputation for military courage and discipline"
    },
    {
      field: "Political Leadership",
      period: "20th-21st Centuries",
      contributions: [
        "Indian independence movement",
        "Democratic governance",
        "Human rights advocacy",
        "Community representation",
        "International diplomacy"
      ],
      notableFigures: "Sikh political leaders and activists",
      impact: "Contributed to democratic governance and human rights"
    },
    {
      field: "Global Diaspora",
      period: "19th-21st Centuries",
      contributions: [
        "Community building worldwide",
        "Cultural preservation",
        "Economic development",
        "Interfaith dialogue",
        "Global Sikh identity"
      ],
      notableFigures: "Sikh communities in various countries",
      impact: "Created global Sikh presence and cultural exchange"
    }
  ]

  const humanitarianContributions = [
    {
      organization: "Sikh Aid and Relief",
      description: "Humanitarian assistance and disaster relief",
      activities: [
        "Disaster relief operations",
        "Medical assistance and healthcare",
        "Food and shelter provision",
        "Educational support",
        "Community development projects"
      ],
      impact: "Provides humanitarian aid worldwide during crises and disasters"
    },
    {
      organization: "Sikh Environmental Initiatives",
      description: "Environmental protection and sustainability",
      activities: [
        "Tree planting campaigns",
        "Environmental education",
        "Sustainable development",
        "Climate change awareness",
        "Green technology promotion"
      ],
      impact: "Promotes environmental stewardship and sustainability"
    },
    {
      organization: "Sikh Educational Programs",
      description: "Education and knowledge sharing",
      activities: [
        "Scholarship programs",
        "Educational institutions",
        "Literacy campaigns",
        "Skill development",
        "Cultural education"
      ],
      impact: "Advances education and knowledge sharing globally"
    },
    {
      organization: "Sikh Healthcare Services",
      description: "Healthcare and medical assistance",
      activities: [
        "Medical camps and clinics",
        "Healthcare accessibility",
        "Medical research and innovation",
        "Mental health support",
        "Preventive healthcare"
      ],
      impact: "Improves healthcare access and medical services"
    }
  ]

  const contemporaryImpact = [
    {
      area: "Technology and Innovation",
      description: "Sikh contributions to modern technology",
      contributions: [
        "Software development and IT",
        "Scientific research and innovation",
        "Entrepreneurship and business",
        "Medical technology",
        "Environmental technology"
      ],
      impact: "Advances technology and innovation in various fields"
    },
    {
      area: "Business and Economics",
      description: "Sikh business practices and economic contributions",
      contributions: [
        "Honest business practices",
        "Community economic development",
        "International trade and commerce",
        "Social entrepreneurship",
        "Economic empowerment"
      ],
      impact: "Promotes ethical business practices and economic development"
    },
    {
      area: "Interfaith Dialogue",
      description: "Sikh participation in religious harmony",
      contributions: [
        "Interfaith understanding",
        "Religious tolerance promotion",
        "Peace and harmony initiatives",
        "Cultural exchange programs",
        "Religious education"
      ],
      impact: "Advances interfaith understanding and religious harmony"
    },
    {
      area: "Human Rights Advocacy",
      description: "Sikh commitment to human rights",
      contributions: [
        "Religious freedom advocacy",
        "Human rights protection",
        "Social justice campaigns",
        "Anti-discrimination work",
        "Community empowerment"
      ],
      impact: "Promotes human rights and social justice worldwide"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh Impact on World Civilization</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover Sikhism's profound influence on world civilization, from religious and social reform 
          to cultural contributions and humanitarian service that have shaped human progress and values.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {religiousImpact.map((impact, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-orange-600" />
                <div>
                  <CardTitle className="text-2xl">{impact.title}</CardTitle>
                  <CardDescription className="text-lg">{impact.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Contributions
                  </h3>
                  <ul className="space-y-2">
                    {impact.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    Global Influence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {impact.globalInfluence}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    Historical Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {impact.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Social Justice Impact</h2>
        <div className="grid gap-6">
          {socialJusticeImpact.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Social Justice
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{category.notableFigures}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {category.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Global Influence</h4>
                    <p className="text-sm text-muted-foreground">{category.influence}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Contributions</h2>
        <div className="grid gap-6">
          {culturalContributions.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Cultural Impact
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{category.notableFigures}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {category.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Global Influence</h4>
                    <p className="text-sm text-muted-foreground">{category.influence}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Military and Political Impact</h2>
        <div className="grid gap-6">
          {militaryAndPoliticalImpact.map((field, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{field.field}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      {field.period}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{field.notableFigures}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {field.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Impact</h4>
                    <p className="text-sm text-muted-foreground">{field.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Humanitarian Contributions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {humanitarianContributions.map((organization, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{organization.organization}</CardTitle>
                <CardDescription>{organization.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Activities</h4>
                <ul className="space-y-2 mb-4">
                  {organization.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Global Impact</h4>
                <p className="text-sm text-muted-foreground">{organization.impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Contemporary Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {contemporaryImpact.map((area, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{area.area}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {area.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">{area.impact}</p>
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