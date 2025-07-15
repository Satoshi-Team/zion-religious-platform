import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen, Search, Bookmark, Share2, Download, Eye, Heart, MessageSquare, Clock, Star, Scroll } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Read Torah Online - Hebrew Text & English Translations | ZION.FM',
  description: 'Read the Torah online with Hebrew text and multiple English translations. Access Rashi commentary, Talmudic insights, and Jewish study tools for comprehensive Torah study.',
  keywords: 'read torah online, torah translations, hebrew torah, jewish texts, torah study, rashi commentary, talmud, sacred texts, jewish scriptures',
  openGraph: {
    title: 'Read Torah Online - Hebrew Text & English Translations',
    description: 'Access the Torah in Hebrew with multiple English translations and comprehensive Jewish study tools.',
    type: 'website',
  },
}

const torahTranslations = [
  {
    name: 'Jewish Publication Society (JPS)',
    translator: 'Jewish Publication Society',
    year: '1917/1985',
    description: 'Authoritative Jewish translation with traditional commentary',
    features: ['Traditional Jewish approach', 'Rashi commentary', 'Historical accuracy', 'Widely respected'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  },
  {
    name: 'Artscroll Stone Edition',
    translator: 'Rabbi Nosson Scherman',
    year: '1993',
    description: 'Comprehensive translation with extensive commentary',
    features: ['Detailed commentary', 'Traditional insights', 'Study-friendly', 'Comprehensive notes'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  },
  {
    name: 'Robert Alter',
    translator: 'Robert Alter',
    year: '2004',
    description: 'Literary translation preserving Hebrew poetry and prose',
    features: ['Literary excellence', 'Poetic preservation', 'Academic approach', 'Beautiful language'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  },
  {
    name: 'Everett Fox',
    translator: 'Everett Fox',
    year: '1995',
    description: 'Translation emphasizing Hebrew sound and rhythm',
    features: ['Hebrew sound patterns', 'Rhythmic translation', 'Oral tradition', 'Linguistic accuracy'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  },
  {
    name: 'Chabad Translation',
    translator: 'Chabad.org',
    year: '2001',
    description: 'Clear, accessible translation with Chassidic insights',
    features: ['Clear language', 'Chassidic commentary', 'Accessible style', 'Spiritual insights'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  },
  {
    name: 'Koren Jerusalem Bible',
    translator: 'Koren Publishers',
    year: '1962',
    description: 'Classic translation with traditional Jewish commentary',
    features: ['Traditional commentary', 'Historical significance', 'Reliable translation', 'Jewish perspective'],
    link: 'https://www.sefaria.org/texts/Tanakh'
  }
]

const torahBooks = [
  {
    name: 'Bereshit (Genesis)',
    hebrew: 'בראשית',
    english: 'Genesis',
    parashot: [
      'Bereshit', 'Noach', 'Lech-Lecha', 'Vayera', 'Chayei Sara', 'Toldot', 'Vayetzei', 'Vayishlach',
      'Vayeshev', 'Miketz', 'Vayigash', 'Vayechi'
    ],
    chapters: 50,
    description: 'The beginning of creation and the patriarchs'
  },
  {
    name: 'Shemot (Exodus)',
    hebrew: 'שמות',
    english: 'Exodus',
    parashot: [
      'Shemot', 'Vaera', 'Bo', 'Beshalach', 'Yitro', 'Mishpatim', 'Terumah', 'Tetzaveh',
      'Ki Tisa', 'Vayakhel', 'Pekudei'
    ],
    chapters: 40,
    description: 'The exodus from Egypt and receiving the Torah'
  },
  {
    name: 'Vayikra (Leviticus)',
    hebrew: 'ויקרא',
    english: 'Leviticus',
    parashot: [
      'Vayikra', 'Tzav', 'Shmini', 'Tazria', 'Metzora', 'Achrei Mot', 'Kedoshim', 'Emor',
      'Behar', 'Bechukotai'
    ],
    chapters: 27,
    description: 'Laws of sacrifices, purity, and holiness'
  },
  {
    name: 'Bamidbar (Numbers)',
    hebrew: 'במדבר',
    english: 'Numbers',
    parashot: [
      'Bamidbar', 'Nasso', 'Beha\'alotcha', 'Sh\'lach', 'Korach', 'Chukat', 'Balak', 'Pinchas',
      'Matot', 'Masei'
    ],
    chapters: 36,
    description: 'The journey through the wilderness'
  },
  {
    name: 'Devarim (Deuteronomy)',
    hebrew: 'דברים',
    english: 'Deuteronomy',
    parashot: [
      'Devarim', 'Vaetchanan', 'Eikev', 'Re\'eh', 'Shoftim', 'Ki Teitzei', 'Ki Tavo', 'Nitzavim',
      'Vayeilech', 'Ha\'azinu', 'Vezot Haberakhah'
    ],
    chapters: 34,
    description: 'Moses\' final teachings and the covenant'
  }
]

const studyTools = [
  {
    title: 'Rashi Commentary',
    description: 'Classic medieval commentary by Rabbi Shlomo Yitzchaki',
    icon: BookOpen,
    features: ['Verse-by-verse commentary', 'Traditional insights', 'Linguistic analysis', 'Historical context']
  },
  {
    title: 'Talmudic Insights',
    description: 'Rabbinic discussions and interpretations',
    icon: MessageSquare,
    features: ['Legal discussions', 'Philosophical insights', 'Ethical teachings', 'Practical applications']
  },
  {
    title: 'Midrash',
    description: 'Rabbinic stories and interpretations',
    icon: Scroll,
    features: ['Narrative expansions', 'Moral lessons', 'Historical background', 'Spiritual insights']
  },
  {
    title: 'Hebrew Grammar',
    description: 'Linguistic analysis and word study',
    icon: Search,
    features: ['Root word analysis', 'Grammatical structure', 'Semantic meaning', 'Biblical Hebrew']
  }
]

const readingPlans = [
  {
    title: 'Weekly Parashah',
    description: 'Read the weekly Torah portion',
    duration: '1 week',
    dailyReading: 'Daily portion of parashah',
    link: '/en/sacred-texts/torah/plans/weekly'
  },
  {
    title: 'Complete Torah in a Year',
    description: 'Read the entire Torah in one year',
    duration: '52 weeks',
    dailyReading: 'Weekly parashah',
    link: '/en/sacred-texts/torah/plans/yearly'
  },
  {
    title: 'Daf Yomi',
    description: 'Daily Talmud study program',
    duration: '7.5 years',
    dailyReading: '1 page of Talmud',
    link: '/en/sacred-texts/torah/plans/daf-yomi'
  },
  {
    title: 'Nach Yomi',
    description: 'Daily study of Prophets and Writings',
    duration: '1 year',
    dailyReading: 'Daily portion of Nach',
    link: '/en/sacred-texts/torah/plans/nach-yomi'
  }
]

const externalResources = [
  {
    category: 'Torah Study Websites',
    resources: [
      { name: 'Sefaria', url: 'https://www.sefaria.org/', description: 'Digital library of Jewish texts' },
      { name: 'Chabad.org', url: 'https://www.chabad.org/', description: 'Torah study and Jewish resources' },
      { name: 'Aish.com', url: 'https://www.aish.com/', description: 'Jewish learning and Torah study' },
      { name: 'My Jewish Learning', url: 'https://www.myjewishlearning.com/', description: 'Jewish education resources' }
    ]
  },
  {
    category: 'Commentaries',
    resources: [
      { name: 'Rashi Commentary', url: 'https://www.sefaria.org/Rashi', description: 'Classic Torah commentary' },
      { name: 'Ibn Ezra', url: 'https://www.sefaria.org/Ibn_Ezra', description: 'Medieval Torah commentary' },
      { name: 'Ramban', url: 'https://www.sefaria.org/Ramban', description: 'Nachmanides commentary' },
      { name: 'Sforno', url: 'https://www.sefaria.org/Sforno', description: 'Italian Torah commentary' }
    ]
  },
  {
    category: 'Talmud and Midrash',
    resources: [
      { name: 'Talmud Bavli', url: 'https://www.sefaria.org/Talmud', description: 'Babylonian Talmud' },
      { name: 'Talmud Yerushalmi', url: 'https://www.sefaria.org/Jerusalem_Talmud', description: 'Jerusalem Talmud' },
      { name: 'Midrash Rabbah', url: 'https://www.sefaria.org/Midrash_Rabbah', description: 'Classic midrashic works' },
      { name: 'Pirkei Avot', url: 'https://www.sefaria.org/Pirkei_Avot', description: 'Ethics of the Fathers' }
    ]
  }
]

const torahFeatures = [
  {
    title: 'Hebrew Text',
    description: 'Original Hebrew text with proper vocalization',
    features: ['Masoretic text', 'Proper nikud', 'Cantillation marks', 'Verse numbering']
  },
  {
    title: 'Audio Recitations',
    description: 'Beautiful Torah readings by expert readers',
    features: ['Weekly parashah', 'Haftarah readings', 'High quality audio', 'Traditional melodies']
  },
  {
    title: 'Search Functionality',
    description: 'Advanced search tools for Torah study',
    features: ['Word search', 'Phrase search', 'Commentary search', 'Cross-reference search']
  },
  {
    title: 'Study Notes',
    description: 'Personal study notes and bookmarks',
    features: ['Personal annotations', 'Verse bookmarks', 'Study notes', 'Reading progress']
  }
]

const jewishHolidays = [
  {
    name: 'Rosh Hashanah',
    description: 'Jewish New Year',
    torahReading: 'Genesis 21:1-34, Numbers 29:1-6',
    link: '/en/sacred-texts/torah/holidays/rosh-hashanah'
  },
  {
    name: 'Yom Kippur',
    description: 'Day of Atonement',
    torahReading: 'Leviticus 16:1-34, Numbers 29:7-11',
    link: '/en/sacred-texts/torah/holidays/yom-kippur'
  },
  {
    name: 'Sukkot',
    description: 'Feast of Tabernacles',
    torahReading: 'Leviticus 22:26-23:44, Numbers 29:12-16',
    link: '/en/sacred-texts/torah/holidays/sukkot'
  },
  {
    name: 'Pesach',
    description: 'Passover',
    torahReading: 'Exodus 12:21-51, Numbers 28:16-25',
    link: '/en/sacred-texts/torah/holidays/pesach'
  }
]

export default function TorahReadingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Read Torah Online
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Access the Torah in Hebrew with multiple English translations, Rashi commentary, and comprehensive 
          Jewish study tools. Explore the divine revelation with traditional Jewish insights.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Hebrew Text</Badge>
          <Badge variant="secondary" className="text-sm">Multiple Translations</Badge>
          <Badge variant="secondary" className="text-sm">Rashi Commentary</Badge>
          <Badge variant="secondary" className="text-sm">Weekly Parashah</Badge>
          <Badge variant="secondary" className="text-sm">Jewish Study Tools</Badge>
        </div>
      </div>

      {/* Quick Search Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            Quick Torah Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Book" />
              </SelectTrigger>
              <SelectContent>
                {torahBooks.map((book) => (
                  <SelectItem key={book.name} value={book.name}>
                    {book.name} ({book.hebrew})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Chapter number" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Translation" />
              </SelectTrigger>
              <SelectContent>
                {torahTranslations.map((translation) => (
                  <SelectItem key={translation.name} value={translation.name}>
                    {translation.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="translations" className="mb-12">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="translations">Translations</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="tools">Study Tools</TabsTrigger>
          <TabsTrigger value="plans">Reading Plans</TabsTrigger>
          <TabsTrigger value="holidays">Holidays</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="translations" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {torahTranslations.map((translation) => (
              <Card key={translation.name} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{translation.name}</CardTitle>
                    <Badge variant="outline">{translation.year}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    by {translation.translator}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{translation.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {translation.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <a href={translation.link} target="_blank" rel="noopener noreferrer">
                        Read Online
                      </a>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="books" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {torahBooks.map((book) => (
              <Card key={book.name} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{book.name}</CardTitle>
                    <div className="text-right">
                      <p className="text-lg font-hebrew">{book.hebrew}</p>
                      <Badge variant="outline">{book.chapters} chapters</Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {book.english} • {book.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Weekly Portions (Parashot):</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {book.parashot.map((parashah) => (
                        <Badge key={parashah} variant="outline" className="text-xs">
                          {parashah}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/en/sacred-texts/torah/book/${book.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Read {book.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {studyTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Card key={tool.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {readingPlans.map((plan) => (
              <Card key={plan.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-sm font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">{plan.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Daily Reading</p>
                      <p className="text-sm text-muted-foreground">{plan.dailyReading}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={plan.link}>
                      Start Plan
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="holidays" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {jewishHolidays.map((holiday) => (
              <Card key={holiday.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{holiday.name}</CardTitle>
                  <CardDescription className="text-base">
                    {holiday.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Torah Reading:</h4>
                    <p className="text-sm text-muted-foreground">{holiday.torahReading}</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={holiday.link}>
                      Read Holiday Portion
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          {externalResources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Begin Your Torah Study Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose your preferred translation, explore study tools, and dive deep into the divine revelation 
              with our comprehensive Torah reading platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/en/sacred-texts/bible">Read Bible</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/jewish">Jewish Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/teachings/jewish">Jewish Teachings</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 