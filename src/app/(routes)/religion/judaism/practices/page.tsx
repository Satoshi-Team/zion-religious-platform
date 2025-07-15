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
    title: 'Jewish Practices | Sacred Texts & Religious Studies',
    description: 'Explore Jewish religious practices, rituals, customs, and daily observances that guide Jewish life and spiritual development.',
    keywords: 'Jewish practices, Jewish rituals, Jewish customs, Jewish observances, Jewish prayer, Jewish holidays, Jewish life',
    openGraph: {
      title: 'Jewish Practices | Sacred Texts & Religious Studies',
      description: 'Explore Jewish religious practices, rituals, customs, and daily observances that guide Jewish life and spiritual development.',
      type: 'website',
    },
  }
}

export default async function JudaismPracticesPage({ params }: { params: { locale: string } }) {

  const dailyPractices = [
    {
      practice: "Daily Prayer (Tefillah)",
      description: "Three daily prayer services connecting Jews with God",
      details: [
        "Shacharit: Morning prayer service with sunrise",
        "Mincha: Afternoon prayer service",
        "Ma'ariv: Evening prayer service after sunset",
        "Amidah: Central prayer with 19 blessings",
        "Shema: Declaration of faith recited twice daily"
      ],
      significance: "Maintains constant connection with God and community",
      requirements: "Requires minyan (quorum of 10) for full service"
    },
    {
      practice: "Torah Study (Talmud Torah)",
      description: "Lifelong learning and study of sacred texts",
      details: [
        "Daily study of Torah and Talmud",
        "Study sessions with partners (chavruta)",
        "Attending classes and lectures",
        "Reading commentaries and interpretations",
        "Teaching others what one learns"
      ],
      significance: "Fulfills divine commandment and preserves Jewish knowledge",
      requirements: "Obligatory for all Jews, especially men"
    },
    {
      practice: "Kashrut (Dietary Laws)",
      description: "Jewish dietary regulations and food practices",
      details: [
        "Separation of meat and dairy products",
        "Only kosher animals (split hooves, chew cud)",
        "Ritual slaughter (shechita) requirements",
        "Passover dietary restrictions",
        "Certification and supervision systems"
      ],
      significance: "Elevates eating to a spiritual act and maintains Jewish identity",
      requirements: "Strict observance varies by denomination"
    },
    {
      practice: "Tzitzit and Tefillin",
      description: "Ritual garments and phylacteries",
      details: [
        "Tzitzit: Fringed garment worn by men",
        "Tefillin: Leather boxes with Torah verses",
        "Worn during morning prayers",
        "Reminders of divine commandments",
        "Physical connection to spiritual practice"
      ],
      significance: "Physical reminders of divine commandments and presence",
      requirements: "Obligatory for Jewish men over 13"
    }
  ]

  const weeklyPractices = [
    {
      practice: "Sabbath (Shabbat)",
      description: "Day of rest and spiritual renewal",
      timing: "Friday sunset to Saturday night",
      preparations: [
        "Candle lighting before sunset",
        "Preparation of festive meals",
        "Cleaning and beautifying the home",
        "Setting aside work and technology",
        "Inviting guests and family"
      ],
      observances: [
        "Three festive meals with family and community",
        "Study of Torah and Jewish texts",
        "Synagogue attendance and prayer",
        "Rest from creative work (39 categories)",
        "Havdalah ceremony to end Shabbat"
      ],
      significance: "Sanctifies time and provides spiritual refreshment"
    },
    {
      practice: "Torah Reading",
      description: "Weekly public reading of Torah portion",
      timing: "Monday, Thursday, and Shabbat mornings",
      structure: [
        "Weekly portion (parashah) divided into sections",
        "Seven people called to Torah (aliyot)",
        "Haftarah reading from Prophets",
        "Blessings before and after reading",
        "Commentary and discussion"
      ],
      significance: "Ensures completion of Torah reading annually and community learning"
    }
  ]

  const lifeCycleRituals = [
    {
      ritual: "Brit Milah (Circumcision)",
      timing: "8th day after birth",
      description: "Covenant of circumcision for boys",
      elements: [
        "Circumcision performed by mohel",
        "Naming ceremony and blessings",
        "Family and community celebration",
        "Covenant with Abraham renewed",
        "Welcome into Jewish community"
      ],
      significance: "Physical sign of covenant with God and Jewish identity"
    },
    {
      ritual: "Bar/Bat Mitzvah",
      timing: "13 for boys, 12 for girls",
      description: "Coming of age ceremony",
      elements: [
        "Torah reading and leading services",
        "Speech or d'var Torah",
        "Family and community celebration",
        "Assumption of religious responsibilities",
        "Welcome into adult Jewish community"
      ],
      significance: "Marks transition to religious adulthood and responsibility"
    },
    {
      ritual: "Marriage (Kiddushin)",
      description: "Sacred union and covenant",
      elements: [
        "Ketubah: Marriage contract",
        "Kiddushin: Betrothal ceremony",
        "Nissuin: Wedding ceremony",
        "Breaking of glass",
        "Seven blessings (Sheva Brachot)"
      ],
      significance: "Creates sacred partnership and family foundation"
    },
    {
      ritual: "Death and Mourning",
      description: "Sacred approach to death and loss",
      stages: [
        "Aninut: Period between death and burial",
        "Kevurah: Burial with simple wooden coffin",
        "Shiva: Seven days of intense mourning",
        "Shloshim: Thirty days of mourning",
        "Yahrzeit: Annual remembrance"
      ],
      significance: "Honors the deceased and comforts the living"
    }
  ]

  const holidayPractices = [
    {
      holiday: "Rosh Hashanah",
      period: "September/October",
      practices: [
        "Blowing the shofar (ram's horn) 100 times",
        "Special prayers and synagogue services",
        "Tashlich: Casting sins into water",
        "Festive meals with symbolic foods",
        "Reflection and repentance"
      ],
      significance: "Day of judgment and new year celebration"
    },
    {
      holiday: "Yom Kippur",
      period: "September/October",
      practices: [
        "25-hour fast from food and drink",
        "Intensive prayer and repentance",
        "White clothing symbolizing purity",
        "Kol Nidre service on eve",
        "Neilah: Closing service"
      ],
      significance: "Day of atonement and spiritual renewal"
    },
    {
      holiday: "Sukkot",
      period: "September/October",
      practices: [
        "Building and dwelling in sukkah",
        "Four species (lulav, etrog, hadass, aravah)",
        "Festive meals in the sukkah",
        "Simchat Torah: Rejoicing with the Torah",
        "Harvest celebration and gratitude"
      ],
      significance: "Festival of booths and harvest celebration"
    },
    {
      holiday: "Passover (Pesach)",
      period: "March/April",
      practices: [
        "Seder meal with symbolic foods",
        "Matzah: Unleavened bread",
        "Retelling of Exodus story",
        "Removal of chametz (leavened products)",
        "Family gatherings and traditions"
      ],
      significance: "Festival of freedom and redemption"
    },
    {
      holiday: "Shavuot",
      period: "May/June",
      practices: [
        "All-night Torah study (Tikkun Leil Shavuot)",
        "Reading of Book of Ruth",
        "Dairy foods and special meals",
        "Decoration with flowers and greenery",
        "Celebration of Torah and learning"
      ],
      significance: "Festival of weeks and receiving Torah"
    }
  ]

  const ethicalPractices = [
    {
      practice: "Tzedakah (Charity)",
      description: "Obligatory giving to those in need",
      levels: [
        "10% of income as minimum obligation",
        "Anonymous giving preferred",
        "Support for poor, sick, and vulnerable",
        "Educational and community institutions",
        "Emergency relief and assistance"
      ],
      significance: "Fulfills divine commandment and promotes social justice"
    },
    {
      practice: "Gemilut Chasadim (Acts of Loving-Kindness)",
      description: "Deeds of compassion and kindness",
      examples: [
        "Visiting the sick (bikur cholim)",
        "Welcoming guests (hachnasat orchim)",
        "Comforting mourners (nichum aveilim)",
        "Providing for the poor",
        "Supporting the community"
      ],
      significance: "Demonstrates divine attributes and builds community"
    },
    {
      practice: "Kavod HaBriyot (Human Dignity)",
      description: "Respect for all human beings",
      applications: [
        "Treating all people with respect",
        "Avoiding embarrassment or humiliation",
        "Protecting human rights",
        "Honoring the elderly",
        "Respecting differences"
      ],
      significance: "Reflects divine image in all humanity"
    },
    {
      practice: "Shalom Bayit (Peace in the Home)",
      description: "Promoting harmony and peace",
      applications: [
        "Resolving conflicts peacefully",
        "Maintaining family harmony",
        "Building strong relationships",
        "Avoiding gossip and slander",
        "Promoting community unity"
      ],
      significance: "Creates foundation for peaceful society"
    }
  ]

  const synagoguePractices = [
    {
      practice: "Synagogue Attendance",
      description: "Regular participation in communal worship",
      elements: [
        "Daily prayer services",
        "Shabbat and holiday services",
        "Torah reading and study",
        "Community events and celebrations",
        "Social and educational programs"
      ],
      significance: "Strengthens community bonds and spiritual connection"
    },
    {
      practice: "Minyan (Prayer Quorum)",
      description: "Requirement of 10 Jewish adults for certain prayers",
      requirements: [
        "Minimum 10 Jewish adults (traditionally men)",
        "Required for full prayer service",
        "Enables communal prayer obligations",
        "Creates sacred community space",
        "Ensures proper prayer structure"
      ],
      significance: "Emphasizes communal nature of Jewish worship"
    },
    {
      practice: "Aliyah (Torah Honors)",
      description: "Being called to the Torah for blessings",
      process: [
        "Being called by Hebrew name",
        "Reciting blessings before and after reading",
        "Standing beside Torah reader",
        "Honoring family and community",
        "Celebrating life events"
      ],
      significance: "Connects individual to Torah and community"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish Practices</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich tapestry of Jewish religious practices, from daily observances to life cycle rituals, 
          that guide Jewish life and create meaningful spiritual connections with God and community.
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
                    {practice.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Weekly Practices</h2>
        <div className="grid gap-6">
          {weeklyPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{practice.practice}</CardTitle>
                    <CardDescription>{practice.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{practice.timing}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Preparations</h4>
                    <ul className="space-y-2">
                      {practice.preparations?.map((prep, prepIndex) => (
                        <li key={prepIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{prep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Observances</h4>
                    <ul className="space-y-2">
                      {practice.observances?.map((observance, obsIndex) => (
                        <li key={obsIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{observance}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Holiday Practices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Applications</h4>
                <ul className="space-y-2">
                  {(practice.levels || practice.examples || practice.applications).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Judaism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/overview`}>
              Jewish Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/scriptures`}>
              Jewish Scriptures
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/history`}>
              Jewish History
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/teachings`}>
              Jewish Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 