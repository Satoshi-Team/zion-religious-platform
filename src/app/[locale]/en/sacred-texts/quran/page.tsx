import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen, Search, Bookmark, Share2, Download, Eye, Heart, MessageSquare, Clock, Star, Moon } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Read Quran Online - Arabic Text & Multiple Translations | ZION.FM',
  description: 'Read the Quran online with Arabic text and multiple English translations. Access tafsir, hadith, and Islamic study tools for comprehensive Quran study.',
  keywords: 'read quran online, quran translations, arabic quran, islamic texts, quran study, tafsir, hadith, sacred texts, muslim scriptures',
  openGraph: {
    title: 'Read Quran Online - Arabic Text & Multiple Translations',
    description: 'Access the Quran in Arabic with multiple English translations and comprehensive study tools.',
    type: 'website',
  },
}

const quranTranslations = [
  {
    name: 'Sahih International',
    translator: 'Saheeh International',
    year: '1997',
    description: 'Clear and accurate English translation',
    features: ['Modern English', 'Accurate translation', 'Widely respected', 'Easy to understand'],
    link: 'https://quran.com/1?translations=131'
  },
  {
    name: 'Pickthall',
    translator: 'Muhammad Marmaduke Pickthall',
    year: '1930',
    description: 'Classic English translation with beautiful language',
    features: ['Traditional language', 'Poetic style', 'Historical significance', 'Literary quality'],
    link: 'https://quran.com/1?translations=95'
  },
  {
    name: 'Yusuf Ali',
    translator: 'Abdullah Yusuf Ali',
    year: '1934',
    description: 'Comprehensive translation with extensive commentary',
    features: ['Detailed commentary', 'Historical context', 'Comprehensive notes', 'Scholarly approach'],
    link: 'https://quran.com/1?translations=131'
  },
  {
    name: 'Hilali & Khan',
    translator: 'Muhsin Khan & Taqi-ud-Din Hilali',
    year: '1996',
    description: 'Word-for-word translation with detailed explanations',
    features: ['Word-for-word accuracy', 'Detailed explanations', 'Study-friendly', 'Comprehensive notes'],
    link: 'https://quran.com/1?translations=101'
  },
  {
    name: 'Dr. Mustafa Khattab',
    translator: 'Dr. Mustafa Khattab',
    year: '2013',
    description: 'Modern, clear translation for contemporary readers',
    features: ['Contemporary language', 'Clear meaning', 'Modern context', 'Accessible style'],
    link: 'https://quran.com/1?translations=131'
  },
  {
    name: 'Abdul Haleem',
    translator: 'M.A.S. Abdel Haleem',
    year: '2004',
    description: 'Oxford University Press translation with literary excellence',
    features: ['Literary quality', 'Academic standard', 'Clear prose', 'Reliable translation'],
    link: 'https://quran.com/1?translations=131'
  }
]

const quranSurahs = [
  {
    juz: 'Juz 1',
    surahs: [
      { number: 1, name: 'Al-Fatiha', arabic: 'الفاتحة', english: 'The Opening', verses: 7, revelation: 'Meccan' },
      { number: 2, name: 'Al-Baqarah', arabic: 'البقرة', english: 'The Cow', verses: 286, revelation: 'Medinan' },
      { number: 3, name: 'Al-Imran', arabic: 'آل عمران', english: 'Family of Imran', verses: 200, revelation: 'Medinan' },
      { number: 4, name: 'An-Nisa', arabic: 'النساء', english: 'The Women', verses: 176, revelation: 'Medinan' },
      { number: 5, name: 'Al-Ma\'idah', arabic: 'المائدة', english: 'The Table Spread', verses: 120, revelation: 'Medinan' }
    ]
  },
  {
    juz: 'Juz 2',
    surahs: [
      { number: 6, name: 'Al-An\'am', arabic: 'الأنعام', english: 'The Cattle', verses: 165, revelation: 'Meccan' },
      { number: 7, name: 'Al-A\'raf', arabic: 'الأعراف', english: 'The Heights', verses: 206, revelation: 'Meccan' },
      { number: 8, name: 'Al-Anfal', arabic: 'الأنفال', english: 'The Spoils of War', verses: 75, revelation: 'Medinan' },
      { number: 9, name: 'At-Tawbah', arabic: 'التوبة', english: 'The Repentance', verses: 129, revelation: 'Medinan' },
      { number: 10, name: 'Yunus', arabic: 'يونس', english: 'Jonah', verses: 109, revelation: 'Meccan' }
    ]
  },
  {
    juz: 'Juz 3',
    surahs: [
      { number: 11, name: 'Hud', arabic: 'هود', english: 'Hud', verses: 123, revelation: 'Meccan' },
      { number: 12, name: 'Yusuf', arabic: 'يوسف', english: 'Joseph', verses: 111, revelation: 'Meccan' },
      { number: 13, name: 'Ar-Ra\'d', arabic: 'الرعد', english: 'The Thunder', verses: 43, revelation: 'Medinan' },
      { number: 14, name: 'Ibrahim', arabic: 'إبراهيم', english: 'Abraham', verses: 52, revelation: 'Meccan' },
      { number: 15, name: 'Al-Hijr', arabic: 'الحجر', english: 'The Rocky Tract', verses: 99, revelation: 'Meccan' }
    ]
  }
]

const studyTools = [
  {
    title: 'Tafsir (Exegesis)',
    description: 'Scholarly interpretation and commentary',
    icon: BookOpen,
    features: ['Historical context', 'Linguistic analysis', 'Theological insights', 'Practical applications']
  },
  {
    title: 'Hadith References',
    description: 'Prophetic traditions and sayings',
    icon: MessageSquare,
    features: ['Prophetic commentary', 'Historical context', 'Practical guidance', 'Authentic narrations']
  },
  {
    title: 'Arabic Grammar',
    description: 'Linguistic analysis and word study',
    icon: Search,
    features: ['Root word analysis', 'Grammatical structure', 'Semantic meaning', 'Linguistic beauty']
  },
  {
    title: 'Historical Context',
    description: 'Revelation circumstances and background',
    icon: Eye,
    features: ['Asbab al-Nuzul', 'Historical events', 'Cultural context', 'Geographic setting']
  }
]

const readingPlans = [
  {
    title: 'Complete Quran in Ramadan',
    description: 'Read the entire Quran during Ramadan',
    duration: '30 days',
    dailyReading: '1 juz per day',
    link: '/en/sacred-texts/quran/plans/ramadan'
  },
  {
    title: 'Juz Amma (Last Juz)',
    description: 'Read the 30th juz of the Quran',
    duration: '30 days',
    dailyReading: '1 surah per day',
    link: '/en/sacred-texts/quran/plans/juz-amma'
  },
  {
    title: 'Meccan Surahs',
    description: 'Focus on Meccan revelations',
    duration: '60 days',
    dailyReading: '2-3 surahs per day',
    link: '/en/sacred-texts/quran/plans/meccan'
  },
  {
    title: 'Medinan Surahs',
    description: 'Study Medinan revelations',
    duration: '45 days',
    dailyReading: '2-3 surahs per day',
    link: '/en/sacred-texts/quran/plans/medinan'
  }
]

const externalResources = [
  {
    category: 'Quran Study Websites',
    resources: [
      { name: 'Quran.com', url: 'https://quran.com/', description: 'Multiple translations and recitations' },
      { name: 'Tanzil.net', url: 'https://tanzil.net/', description: 'Arabic text and translations' },
      { name: 'Al-Quran.info', url: 'https://al-quran.info/', description: 'Comprehensive Quran resources' },
      { name: 'Quranic Arabic Corpus', url: 'http://corpus.quran.com/', description: 'Linguistic analysis tools' }
    ]
  },
  {
    category: 'Tafsir Resources',
    resources: [
      { name: 'Tafsir Ibn Kathir', url: 'https://quran.com/tafsir/en-tafisr-ibn-kathir', description: 'Classic Quranic commentary' },
      { name: 'Tafsir Al-Tabari', url: 'https://quran.com/tafsir/en-tafisr-ibn-kathir', description: 'Historical Quranic commentary' },
      { name: 'Tafsir Al-Qurtubi', url: 'https://quran.com/tafsir/en-tafisr-ibn-kathir', description: 'Comprehensive commentary' },
      { name: 'Tafsir Al-Jalalayn', url: 'https://quran.com/tafsir/en-tafisr-ibn-kathir', description: 'Concise commentary' }
    ]
  },
  {
    category: 'Hadith Collections',
    resources: [
      { name: 'Sahih Bukhari', url: 'https://sunnah.com/bukhari', description: 'Authentic hadith collection' },
      { name: 'Sahih Muslim', url: 'https://sunnah.com/muslim', description: 'Authentic hadith collection' },
      { name: 'Sunan Abu Dawud', url: 'https://sunnah.com/abudawud', description: 'Hadith collection' },
      { name: 'Jami at-Tirmidhi', url: 'https://sunnah.com/tirmidhi', description: 'Hadith collection' }
    ]
  }
]

const quranFeatures = [
  {
    title: 'Arabic Text',
    description: 'Original Arabic text with proper diacritics',
    features: ['Uthmani script', 'Indopak script', 'Proper tajweed marks', 'Verse numbering']
  },
  {
    title: 'Audio Recitations',
    description: 'Beautiful Quranic recitations by renowned Qaris',
    features: ['Multiple reciters', 'High quality audio', 'Verse-by-verse recitation', 'Download options']
  },
  {
    title: 'Search Functionality',
    description: 'Advanced search tools for Quranic study',
    features: ['Word search', 'Phrase search', 'Topic search', 'Cross-reference search']
  },
  {
    title: 'Bookmarking',
    description: 'Save and organize your Quranic study',
    features: ['Verse bookmarks', 'Surah bookmarks', 'Study notes', 'Reading progress']
  }
]

export default function QuranReadingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Read Quran Online
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Access the Quran in Arabic with multiple English translations, tafsir, and comprehensive 
          study tools. Explore the divine revelation with ease and depth.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Arabic Text</Badge>
          <Badge variant="secondary" className="text-sm">Multiple Translations</Badge>
          <Badge variant="secondary" className="text-sm">Tafsir</Badge>
          <Badge variant="secondary" className="text-sm">Audio Recitations</Badge>
          <Badge variant="secondary" className="text-sm">Study Tools</Badge>
        </div>
      </div>

      {/* Quick Search Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            Quick Quran Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Surah" />
              </SelectTrigger>
              <SelectContent>
                {quranSurahs.map((juz) => (
                  <div key={juz.juz}>
                    <div className="font-semibold text-sm text-muted-foreground px-2 py-1">
                      {juz.juz}
                    </div>
                    {juz.surahs.map((surah) => (
                      <SelectItem key={surah.number} value={surah.name}>
                        {surah.number}. {surah.name} - {surah.english}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Verse number" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Translation" />
              </SelectTrigger>
              <SelectContent>
                {quranTranslations.map((translation) => (
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
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="translations">Translations</TabsTrigger>
          <TabsTrigger value="surahs">Surahs</TabsTrigger>
          <TabsTrigger value="tools">Study Tools</TabsTrigger>
          <TabsTrigger value="plans">Reading Plans</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="translations" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {quranTranslations.map((translation) => (
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

        <TabsContent value="surahs" className="space-y-8">
          {quranSurahs.map((juz) => (
            <Card key={juz.juz}>
              <CardHeader>
                <CardTitle className="text-2xl">{juz.juz}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {juz.surahs.map((surah) => (
                    <div key={surah.number} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{surah.number}. {surah.name}</h4>
                          <p className="text-sm text-muted-foreground">{surah.english}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-arabic">{surah.arabic}</p>
                          <Badge variant="outline" className="text-xs">{surah.verses} verses</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{surah.revelation}</Badge>
                        <Button asChild size="sm">
                          <Link href={`/en/sacred-texts/quran/surah/${surah.number}`}>
                            Read Surah
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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
            <h3 className="text-2xl font-bold mb-4">Begin Your Quran Study Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose your preferred translation, explore study tools, and dive deep into the divine revelation 
              with our comprehensive Quran reading platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/en/sacred-texts/bible">Read Bible</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/islamic">Islamic Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/teachings/islamic">Islamic Teachings</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 