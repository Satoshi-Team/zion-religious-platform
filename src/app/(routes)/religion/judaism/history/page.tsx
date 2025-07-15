import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, BookOpen, Users, Globe, Star } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jewish History | Sacred Texts & Religious Studies',
    description: 'Explore the rich history of Judaism from biblical times to the modern era. Discover the development of Jewish communities, traditions, and religious practices across centuries.',
    keywords: 'Jewish history, biblical period, diaspora, medieval Judaism, modern Judaism, Jewish communities, Jewish traditions, religious development',
    openGraph: {
      title: 'Jewish History | Sacred Texts & Religious Studies',
      description: 'Explore the rich history of Judaism from biblical times to the modern era. Discover the development of Jewish communities, traditions, and religious practices across centuries.',
      type: 'website',
    },
  }
}

export default async function JudaismHistoryPage({ params }: { params: { locale: string } }) {

  const historicalPeriods = [
    {
      title: "Biblical Period (c. 2000 BCE - 70 CE)",
      description: "The foundational era of Jewish history from the patriarchs to the destruction of the Second Temple",
      keyEvents: [
        "Age of the Patriarchs (Abraham, Isaac, Jacob)",
        "Exodus from Egypt and receiving of the Torah",
        "Conquest of Canaan and period of Judges",
        "United Kingdom under David and Solomon",
        "Division into Israel and Judah",
        "Babylonian Exile and return",
        "Second Temple period and Hellenistic influence",
        "Roman rule and destruction of the Second Temple"
      ],
      significance: "Established core beliefs, practices, and sacred texts that form the foundation of Judaism"
    },
    {
      title: "Rabbinic Period (70 CE - 500 CE)",
      description: "The development of rabbinic Judaism and the creation of the Talmud",
      keyEvents: [
        "Destruction of the Second Temple (70 CE)",
        "Rise of the Pharisees and rabbinic leadership",
        "Compilation of the Mishnah (c. 200 CE)",
        "Development of the Gemara and Talmud",
        "Establishment of Jewish academies in Babylonia",
        "Creation of prayer services to replace Temple worship",
        "Development of halakhic (legal) traditions",
        "Formation of Jewish identity in diaspora"
      ],
      significance: "Transformed Judaism from a Temple-based religion to a text-based, rabbinic tradition"
    },
    {
      title: "Medieval Period (500 CE - 1500 CE)",
      description: "Jewish communities flourished under Islamic and Christian rule, producing great scholars and works",
      keyEvents: [
        "Golden Age of Jewish culture in Islamic Spain",
        "Development of Jewish philosophy and mysticism",
        "Rise of Kabbalah and mystical traditions",
        "Jewish communities in Christian Europe",
        "Persecutions and expulsions (England 1290, Spain 1492)",
        "Development of Ashkenazi and Sephardi traditions",
        "Creation of major commentaries and legal codes",
        "Jewish contributions to medicine, science, and culture"
      ],
      significance: "Preserved and developed Jewish learning despite persecution, creating diverse cultural traditions"
    },
    {
      title: "Early Modern Period (1500 CE - 1800 CE)",
      description: "Jewish communities adapted to new political and social realities",
      keyEvents: [
        "Jewish settlement in the Ottoman Empire",
        "Development of Jewish communities in Eastern Europe",
        "Rise of Hasidism and mystical movements",
        "Jewish Enlightenment (Haskalah)",
        "Emancipation movements in Western Europe",
        "Development of Jewish printing and publishing",
        "Formation of Jewish communities in the Americas",
        "Rise of Jewish secular culture"
      ],
      significance: "Began the process of Jewish integration into modern society while preserving religious traditions"
    },
    {
      title: "Modern Period (1800 CE - Present)",
      description: "Judaism adapts to modernity with new movements and global challenges",
      keyEvents: [
        "Reform, Conservative, and Orthodox movements",
        "Zionism and the establishment of Israel",
        "Holocaust and its impact on Jewish communities",
        "Jewish participation in civil rights movements",
        "Revival of Jewish learning and culture",
        "Jewish communities in the Soviet Union and post-Soviet states",
        "Development of Jewish feminism and egalitarianism",
        "Interfaith dialogue and Jewish-Christian-Muslim relations"
      ],
      significance: "Judaism continues to evolve while maintaining core traditions and values"
    }
  ]

  const keyFigures = [
    {
      name: "Moses",
      period: "Biblical (c. 1400 BCE)",
      role: "Prophet and lawgiver who led the Exodus and received the Torah",
      impact: "Established the foundation of Jewish law and monotheistic belief"
    },
    {
      name: "Hillel the Elder",
      period: "Rabbinic (1st century BCE)",
      role: "Leading rabbi and scholar who established principles of Jewish interpretation",
      impact: "Developed the Golden Rule and methods of Torah study"
    },
    {
      name: "Maimonides",
      period: "Medieval (1138-1204)",
      role: "Philosopher, physician, and legal scholar",
      impact: "Wrote the Mishneh Torah and Guide for the Perplexed, integrating Jewish law with philosophy"
    },
    {
      name: "Rashi",
      period: "Medieval (1040-1105)",
      role: "Commentator on the Bible and Talmud",
      impact: "Created the most influential commentaries on Jewish texts"
    },
    {
      name: "Baal Shem Tov",
      period: "Early Modern (1698-1760)",
      role: "Founder of Hasidism",
      impact: "Revolutionized Jewish spirituality with emphasis on joy and mystical experience"
    },
    {
      name: "Theodor Herzl",
      period: "Modern (1860-1904)",
      role: "Founder of modern Zionism",
      impact: "Established the political movement for Jewish return to the Land of Israel"
    }
  ]

  const diasporaCommunities = [
    {
      region: "Ashkenazi Jews",
      location: "Central and Eastern Europe",
      period: "9th century - present",
      characteristics: "Yiddish language, distinctive religious customs, emphasis on Talmud study",
      contributions: "Hasidic movement, Jewish literature, modern Jewish philosophy"
    },
    {
      region: "Sephardi Jews",
      location: "Spain, Portugal, Mediterranean",
      period: "Roman period - present",
      characteristics: "Ladino language, rich cultural traditions, integration of philosophy",
      contributions: "Golden Age literature, Jewish philosophy, scientific achievements"
    },
    {
      region: "Mizrahi Jews",
      location: "Middle East and North Africa",
      period: "Biblical period - present",
      characteristics: "Arabic language, traditional customs, strong community bonds",
      contributions: "Preservation of ancient traditions, Jewish-Arab cultural synthesis"
    },
    {
      region: "Ethiopian Jews",
      location: "Ethiopia",
      period: "Ancient - present",
      characteristics: "Unique traditions, connection to biblical practices, isolation from other communities",
      contributions: "Preservation of ancient Jewish customs, connection to biblical heritage"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich and complex history of Judaism, from its biblical origins through centuries of diaspora, 
          persecution, and renewal to the modern era of diverse Jewish communities worldwide.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {historicalPeriods.map((period, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Diaspora Communities</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {diasporaCommunities.map((community, index) => (
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
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Location</h4>
                  <p className="text-sm">{community.location}</p>
                </div>
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
                <BookOpen className="h-5 w-5 text-blue-500" />
                Text and Tradition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The preservation and transmission of sacred texts, oral traditions, and religious practices 
                across generations and geographic boundaries.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Community and Identity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The development of strong communal bonds, cultural traditions, and Jewish identity 
                despite dispersion and persecution.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-500" />
                Adaptation and Renewal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Judaism's ability to adapt to new cultural contexts while maintaining core beliefs 
                and practices, leading to diverse expressions of Jewish life.
              </p>
            </CardContent>
          </Card>
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
            <Link href={`/${params.locale}/religion/judaism/practices`}>
              Jewish Practices
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