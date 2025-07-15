import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Scroll, FileText, Quote, Calendar, User, Tree, Users, Target, Globe, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shinto Scriptures - Kojiki, Nihon Shoki, and Sacred Texts',
  description: 'Explore the sacred texts of Shinto including the Kojiki (Records of Ancient Matters), Nihon Shoki (Chronicles of Japan), and other important mythological and historical works.',
  keywords: 'Shinto scriptures, Kojiki, Nihon Shoki, Japanese mythology, kami, sacred texts, Japanese history',
  openGraph: {
    title: 'Shinto Scriptures - Kojiki, Nihon Shoki, and Sacred Texts',
    description: 'Discover the foundational texts of Shinto that preserve Japanese mythology and the stories of the kami.',
    type: 'website',
  },
}

const scripturesContent = {
  title: 'Shinto Scriptures',
  subtitle: 'Sacred Texts and Mythological Works',
  description: 'The sacred texts of Shinto include historical chronicles, mythological compilations, and ritual texts that preserve the stories of the kami and the origins of Japan. Unlike many other religions, Shinto does not have a single authoritative scripture but rather a collection of texts that document its traditions and beliefs.',

  coreTexts: [
    {
      title: 'Kojiki (古事記)',
      english: 'Records of Ancient Matters',
      description: 'The oldest surviving text of Japanese mythology and history, compiled in 712 CE.',
      content: 'Contains the creation myth of Japan, the stories of the kami, and the lineage of the imperial family from the divine origins.',
      significance: 'The most important text for understanding early Shinto beliefs and Japanese mythology.',
      author: 'Ō no Yasumaro',
      icon: BookOpen
    },
    {
      title: 'Nihon Shoki (日本書紀)',
      english: 'Chronicles of Japan',
      description: 'The second oldest text of Japanese history, compiled in 720 CE.',
      content: 'A more detailed historical chronicle that includes mythological stories, historical events, and official records.',
      significance: 'Provides additional perspectives on Shinto mythology and early Japanese history.',
      author: 'Prince Toneri and others',
      icon: Scroll
    },
    {
      title: 'Kogoshūi (古語拾遺)',
      english: 'Gleanings from Ancient Stories',
      description: 'A collection of ancient traditions and rituals compiled in 807 CE.',
      content: 'Records of ancient ceremonies, rituals, and traditions that were in danger of being lost.',
      significance: 'Preserves important information about early Shinto practices and ceremonies.',
      author: 'Inbe no Hironari',
      icon: FileText
    }
  ],

  ritualTexts: [
    {
      title: 'Engishiki (延喜式)',
      english: 'Procedures of the Engi Era',
      description: 'A compilation of laws and regulations including detailed shrine rituals.',
      content: 'Contains detailed descriptions of shrine ceremonies, purification rituals, and festival procedures.',
      significance: 'Essential for understanding formal Shinto ritual practices and ceremonies.',
      icon: Calendar
    },
    {
      title: 'Norito (祝詞)',
      english: 'Ritual Prayers',
      description: 'Ancient prayers and incantations used in Shinto ceremonies.',
      content: 'Formal prayers addressed to kami during ceremonies, expressing gratitude, purification, and requests.',
      significance: 'Provides insight into the spiritual communication between humans and kami.',
      icon: Quote
    }
  ],

  regionalTexts: [
    {
      title: 'Fudoki (風土記)',
      english: 'Records of Wind and Earth',
      description: 'Regional gazetteers compiled in the 8th century.',
      content: 'Describe local geography, customs, and kami worship practices in different regions of Japan.',
      significance: 'Shows the diversity of Shinto practices across different regions of Japan.',
      icon: Tree
    },
    {
      title: 'Shoku Nihongi (続日本紀)',
      english: 'Continued Chronicles of Japan',
      description: 'Continuation of the Nihon Shoki covering later periods.',
      content: 'Records historical events and religious developments in Japan from 697 to 791 CE.',
      significance: 'Documents the evolution of Shinto practices and beliefs over time.',
      icon: FileText
    }
  ],

  keyThemes: [
    'Creation of Japan and the world by the kami',
    'Stories of the major kami and their relationships',
    'The divine origins of the Japanese imperial family',
    'Purification and ritual practices',
    'Harmony between humans, nature, and the kami',
    'Ancestor worship and family traditions',
    'Seasonal festivals and agricultural rituals',
    'The sacred nature of natural phenomena'
  ],

  studyMethods: [
    'Reading and contemplation of mythological stories',
    'Study of ritual practices and ceremonies',
    'Understanding the historical context of texts',
    'Application of teachings to daily life',
    'Participation in shrine ceremonies and festivals',
    'Learning from shrine priests and practitioners'
  ]
}

export default function ShintoScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          {scripturesContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {scripturesContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {scripturesContent.description}
        </p>
      </div>

      {/* Core Texts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Mythological Texts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scripturesContent.coreTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.chinese}
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    {text.author}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {text.english}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{text.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Content:</h4>
                  <p className="text-sm text-muted-foreground">{text.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{text.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ritual Texts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ritual and Ceremonial Texts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.ritualTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.chinese}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {text.english}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{text.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Content:</h4>
                  <p className="text-sm text-muted-foreground">{text.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{text.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Regional Texts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Regional and Historical Texts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.regionalTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.chinese}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {text.english}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{text.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Content:</h4>
                  <p className="text-sm text-muted-foreground">{text.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{text.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Themes in Shinto Scriptures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripturesContent.keyThemes.map((theme, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{theme}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Methods */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Traditional Study Methods</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scripturesContent.studyMethods.map((method, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p>{method}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Further</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Teachings</span>
              </CardTitle>
              <CardDescription>
                Core doctrines and spiritual concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/teachings">
                <Button className="w-full">Learn Teachings</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Practices</span>
              </CardTitle>
              <CardDescription>
                Rituals, ceremonies, and daily practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/practices">
                <Button className="w-full">Discover Practices</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>History</span>
              </CardTitle>
              <CardDescription>
                Historical development and influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/history">
                <Button className="w-full">Study History</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Philosophy</span>
              </CardTitle>
              <CardDescription>
                Philosophical concepts and worldview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/philosophy">
                <Button className="w-full">Explore Philosophy</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Impact</span>
              </CardTitle>
              <CardDescription>
                Cultural and social influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/impact">
                <Button className="w-full">Learn Impact</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Overview</span>
              </CardTitle>
              <CardDescription>
                Introduction to Shinto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/shinto/overview">
                <Button className="w-full">Back to Overview</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Facts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">712 CE</div>
              <p className="text-sm text-muted-foreground">Kojiki Compiled</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">720 CE</div>
              <p className="text-sm text-muted-foreground">Nihon Shoki Compiled</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">古事記</div>
              <p className="text-sm text-muted-foreground">Kojiki (Ancient Records)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-red-600">神</div>
              <p className="text-sm text-muted-foreground">Kami (Spirits)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/buddhism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Buddhist Scriptures
            </Badge>
          </Link>
          <Link href="/religion/japanese-mythology">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Japanese Mythology
            </Badge>
          </Link>
          <Link href="/religion/chinese-classics">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Chinese Classics
            </Badge>
          </Link>
          <Link href="/religion/east-asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              East Asian Philosophy
            </Badge>
          </Link>
          <Link href="/religion/indigenous-religions">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-red-100">
              Indigenous Religions
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 