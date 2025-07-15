import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen, Search, Bookmark, Share2, Download, Eye, Heart, MessageSquare, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Read Bible Online - Multiple Translations & Study Tools | ZION.FM',
  description: 'Read the Bible online with multiple translations including KJV, NIV, ESV, and more. Access study tools, commentaries, and search functionality for comprehensive Bible study.',
  keywords: 'read bible online, bible translations, KJV, NIV, ESV, bible study, bible search, bible commentary, sacred texts, christian scriptures',
  openGraph: {
    title: 'Read Bible Online - Multiple Translations & Study Tools',
    description: 'Access the Bible in multiple translations with advanced study tools and search functionality.',
    type: 'website',
  },
}

const bibleTranslations = [
  {
    name: 'King James Version (KJV)',
    abbreviation: 'KJV',
    year: '1611',
    description: 'Classic English translation with beautiful language',
    features: ['Traditional language', 'Poetic style', 'Historical significance'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=KJV'
  },
  {
    name: 'New International Version (NIV)',
    abbreviation: 'NIV',
    year: '1978',
    description: 'Modern, readable translation for contemporary readers',
    features: ['Clear language', 'Accurate translation', 'Widely used'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=NIV'
  },
  {
    name: 'English Standard Version (ESV)',
    abbreviation: 'ESV',
    year: '2001',
    description: 'Word-for-word translation with literary excellence',
    features: ['Literal translation', 'Literary quality', 'Academic use'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=ESV'
  },
  {
    name: 'New American Standard Bible (NASB)',
    abbreviation: 'NASB',
    year: '1971',
    description: 'Most literal English translation available',
    features: ['Word-for-word accuracy', 'Study Bible standard', 'Precise translation'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=NASB'
  },
  {
    name: 'New Living Translation (NLT)',
    abbreviation: 'NLT',
    year: '1996',
    description: 'Thought-for-thought translation for easy reading',
    features: ['Easy to read', 'Contemporary language', 'Clear meaning'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=NLT'
  },
  {
    name: 'Christian Standard Bible (CSB)',
    abbreviation: 'CSB',
    year: '2017',
    description: 'Optimal equivalence translation balancing accuracy and readability',
    features: ['Balanced approach', 'Modern language', 'Reliable translation'],
    link: 'https://www.biblegateway.com/passage/?search=John+3:16&version=CSB'
  }
]

const bibleBooks = [
  {
    testament: 'Old Testament',
    books: [
      { name: 'Genesis', chapters: 50, category: 'Law' },
      { name: 'Exodus', chapters: 40, category: 'Law' },
      { name: 'Leviticus', chapters: 27, category: 'Law' },
      { name: 'Numbers', chapters: 36, category: 'Law' },
      { name: 'Deuteronomy', chapters: 34, category: 'Law' },
      { name: 'Joshua', chapters: 24, category: 'Historical' },
      { name: 'Judges', chapters: 21, category: 'Historical' },
      { name: 'Ruth', chapters: 4, category: 'Historical' },
      { name: '1 Samuel', chapters: 31, category: 'Historical' },
      { name: '2 Samuel', chapters: 24, category: 'Historical' },
      { name: '1 Kings', chapters: 22, category: 'Historical' },
      { name: '2 Kings', chapters: 25, category: 'Historical' },
      { name: '1 Chronicles', chapters: 29, category: 'Historical' },
      { name: '2 Chronicles', chapters: 36, category: 'Historical' },
      { name: 'Ezra', chapters: 10, category: 'Historical' },
      { name: 'Nehemiah', chapters: 13, category: 'Historical' },
      { name: 'Esther', chapters: 10, category: 'Historical' },
      { name: 'Job', chapters: 42, category: 'Wisdom' },
      { name: 'Psalms', chapters: 150, category: 'Wisdom' },
      { name: 'Proverbs', chapters: 31, category: 'Wisdom' },
      { name: 'Ecclesiastes', chapters: 12, category: 'Wisdom' },
      { name: 'Song of Solomon', chapters: 8, category: 'Wisdom' },
      { name: 'Isaiah', chapters: 66, category: 'Prophetic' },
      { name: 'Jeremiah', chapters: 52, category: 'Prophetic' },
      { name: 'Lamentations', chapters: 5, category: 'Prophetic' },
      { name: 'Ezekiel', chapters: 48, category: 'Prophetic' },
      { name: 'Daniel', chapters: 12, category: 'Prophetic' },
      { name: 'Hosea', chapters: 14, category: 'Prophetic' },
      { name: 'Joel', chapters: 3, category: 'Prophetic' },
      { name: 'Amos', chapters: 9, category: 'Prophetic' },
      { name: 'Obadiah', chapters: 1, category: 'Prophetic' },
      { name: 'Jonah', chapters: 4, category: 'Prophetic' },
      { name: 'Micah', chapters: 7, category: 'Prophetic' },
      { name: 'Nahum', chapters: 3, category: 'Prophetic' },
      { name: 'Habakkuk', chapters: 3, category: 'Prophetic' },
      { name: 'Zephaniah', chapters: 3, category: 'Prophetic' },
      { name: 'Haggai', chapters: 2, category: 'Prophetic' },
      { name: 'Zechariah', chapters: 14, category: 'Prophetic' },
      { name: 'Malachi', chapters: 4, category: 'Prophetic' }
    ]
  },
  {
    testament: 'New Testament',
    books: [
      { name: 'Matthew', chapters: 28, category: 'Gospel' },
      { name: 'Mark', chapters: 16, category: 'Gospel' },
      { name: 'Luke', chapters: 24, category: 'Gospel' },
      { name: 'John', chapters: 21, category: 'Gospel' },
      { name: 'Acts', chapters: 28, category: 'Historical' },
      { name: 'Romans', chapters: 16, category: 'Epistle' },
      { name: '1 Corinthians', chapters: 16, category: 'Epistle' },
      { name: '2 Corinthians', chapters: 13, category: 'Epistle' },
      { name: 'Galatians', chapters: 6, category: 'Epistle' },
      { name: 'Ephesians', chapters: 6, category: 'Epistle' },
      { name: 'Philippians', chapters: 4, category: 'Epistle' },
      { name: 'Colossians', chapters: 4, category: 'Epistle' },
      { name: '1 Thessalonians', chapters: 5, category: 'Epistle' },
      { name: '2 Thessalonians', chapters: 3, category: 'Epistle' },
      { name: '1 Timothy', chapters: 6, category: 'Epistle' },
      { name: '2 Timothy', chapters: 4, category: 'Epistle' },
      { name: 'Titus', chapters: 3, category: 'Epistle' },
      { name: 'Philemon', chapters: 1, category: 'Epistle' },
      { name: 'Hebrews', chapters: 13, category: 'Epistle' },
      { name: 'James', chapters: 5, category: 'Epistle' },
      { name: '1 Peter', chapters: 5, category: 'Epistle' },
      { name: '2 Peter', chapters: 3, category: 'Epistle' },
      { name: '1 John', chapters: 5, category: 'Epistle' },
      { name: '2 John', chapters: 1, category: 'Epistle' },
      { name: '3 John', chapters: 1, category: 'Epistle' },
      { name: 'Jude', chapters: 1, category: 'Epistle' },
      { name: 'Revelation', chapters: 22, category: 'Apocalyptic' }
    ]
  }
]

const studyTools = [
  {
    title: 'Cross-References',
    description: 'Find related verses and passages',
    icon: BookOpen,
    features: ['Parallel passages', 'Thematic connections', 'Prophetic fulfillments', 'New Testament quotes']
  },
  {
    title: 'Commentaries',
    description: 'Access scholarly interpretations and insights',
    icon: MessageSquare,
    features: ['Historical context', 'Cultural background', 'Theological insights', 'Practical applications']
  },
  {
    title: 'Concordance',
    description: 'Search for specific words and phrases',
    icon: Search,
    features: ['Word search', 'Phrase search', 'Original language', 'Frequency analysis']
  },
  {
    title: 'Maps & Timelines',
    description: 'Visual aids for understanding biblical context',
    icon: Eye,
    features: ['Geographic locations', 'Historical timelines', 'Journey maps', 'Empire boundaries']
  }
]

const readingPlans = [
  {
    title: 'Bible in a Year',
    description: 'Complete Bible reading plan',
    duration: '365 days',
    dailyReading: '3-4 chapters',
    link: '/en/sacred-texts/bible/plans/year'
  },
  {
    title: 'New Testament in 90 Days',
    description: 'Focus on the New Testament',
    duration: '90 days',
    dailyReading: '2-3 chapters',
    link: '/en/sacred-texts/bible/plans/new-testament'
  },
  {
    title: 'Psalms & Proverbs',
    description: 'Wisdom literature reading plan',
    duration: '60 days',
    dailyReading: '1-2 chapters',
    link: '/en/sacred-texts/bible/plans/wisdom'
  },
  {
    title: 'Gospels in 30 Days',
    description: 'Read the four Gospels',
    duration: '30 days',
    dailyReading: '2-3 chapters',
    link: '/en/sacred-texts/bible/plans/gospels'
  }
]

const externalResources = [
  {
    category: 'Bible Study Websites',
    resources: [
      { name: 'Bible Gateway', url: 'https://www.biblegateway.com/', description: 'Multiple translations and study tools' },
      { name: 'Bible.org', url: 'https://bible.org/', description: 'Scholarly Bible study resources' },
      { name: 'Blue Letter Bible', url: 'https://www.blueletterbible.org/', description: 'Original language study tools' },
      { name: 'Bible Hub', url: 'https://biblehub.com/', description: 'Parallel Bible and commentaries' }
    ]
  },
  {
    category: 'Commentaries',
    resources: [
      { name: 'Matthew Henry Commentary', url: 'https://www.biblestudytools.com/commentaries/', description: 'Classic Bible commentary' },
      { name: 'Jamieson-Fausset-Brown', url: 'https://www.biblestudytools.com/commentaries/', description: 'Comprehensive commentary' },
      { name: 'Pulpit Commentary', url: 'https://www.biblestudytools.com/commentaries/', description: 'Detailed verse-by-verse commentary' },
      { name: 'Barnes\' Notes', url: 'https://www.biblestudytools.com/commentaries/', description: 'Practical commentary' }
    ]
  },
  {
    category: 'Study Tools',
    resources: [
      { name: 'Strong\'s Concordance', url: 'https://www.biblestudytools.com/concordances/', description: 'Original language concordance' },
      { name: 'Bible Atlas', url: 'https://www.biblestudytools.com/atlas/', description: 'Biblical geography and maps' },
      { name: 'Bible Timeline', url: 'https://www.biblestudytools.com/timeline/', description: 'Biblical history timeline' },
      { name: 'Bible Dictionary', url: 'https://www.biblestudytools.com/dictionary/', description: 'Biblical terms and definitions' }
    ]
  }
]

export default function BibleReadingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Read Bible Online
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Access the Bible in multiple translations with advanced study tools, commentaries, 
          and search functionality. Explore God\'s Word with ease and depth.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Multiple Translations</Badge>
          <Badge variant="secondary" className="text-sm">Study Tools</Badge>
          <Badge variant="secondary" className="text-sm">Commentaries</Badge>
          <Badge variant="secondary" className="text-sm">Search Function</Badge>
          <Badge variant="secondary" className="text-sm">Reading Plans</Badge>
        </div>
      </div>

      {/* Quick Search Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Search className="h-6 w-6 text-primary" />
            Quick Bible Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Book" />
              </SelectTrigger>
              <SelectContent>
                {bibleBooks.map((testament) => (
                  <div key={testament.testament}>
                    <div className="font-semibold text-sm text-muted-foreground px-2 py-1">
                      {testament.testament}
                    </div>
                    {testament.books.map((book) => (
                      <SelectItem key={book.name} value={book.name}>
                        {book.name}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Chapter" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 50 }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Translation" />
              </SelectTrigger>
              <SelectContent>
                {bibleTranslations.map((translation) => (
                  <SelectItem key={translation.abbreviation} value={translation.abbreviation}>
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
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="tools">Study Tools</TabsTrigger>
          <TabsTrigger value="plans">Reading Plans</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="translations" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {bibleTranslations.map((translation) => (
              <Card key={translation.abbreviation} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{translation.name}</CardTitle>
                    <Badge variant="outline">{translation.year}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {translation.description}
                  </CardDescription>
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
          {bibleBooks.map((testament) => (
            <Card key={testament.testament}>
              <CardHeader>
                <CardTitle className="text-2xl">{testament.testament}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {testament.books.map((book) => (
                    <div key={book.name} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{book.name}</h4>
                        <Badge variant="outline" className="text-xs">{book.chapters}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{book.category}</p>
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/en/sacred-texts/bible/book/${book.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          Read {book.name}
                        </Link>
                      </Button>
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
            <h3 className="text-2xl font-bold mb-4">Begin Your Bible Study Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose your preferred translation, explore study tools, and dive deep into God\'s Word 
              with our comprehensive Bible reading platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/en/sacred-texts/quran">Read Quran</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/bible">Bible Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/teachings/bible">Bible Teachings</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 