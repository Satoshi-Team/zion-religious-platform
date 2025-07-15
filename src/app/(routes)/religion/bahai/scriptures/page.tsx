import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Scroll, FileText, Quote, Calendar, User, Star, Globe, Users, Target, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bahai Scriptures - Kitab-i-Aqdas, Kitab-i-Iqan, and Sacred Writings',
  description: 'Explore the sacred texts of the Bahai Faith including the Kitab-i-Aqdas (Most Holy Book), Kitab-i-Iqan (Book of Certitude), and the writings of Baha\'u\'llah, the Bab, and Abdu\'l-Baha.',
  keywords: 'Bahai scriptures, Kitab-i-Aqdas, Kitab-i-Iqan, Baha\'u\'llah writings, Bahai sacred texts',
  openGraph: {
    title: 'Bahai Scriptures - Kitab-i-Aqdas, Kitab-i-Iqan, and Sacred Writings',
    description: 'Discover the foundational texts of the Bahai Faith that guide believers toward unity and world peace.',
    type: 'website',
  },
}

const scripturesContent = {
  title: 'Bahai Scriptures',
  subtitle: 'Sacred Texts and Writings',
  description: 'The sacred texts of the Bahai Faith include the writings of Baha\'u\'llah, the Bab, and Abdu\'l-Baha. These texts form the foundation of Bahai belief and practice, providing guidance for personal development and the establishment of world peace and unity.',

  coreTexts: [
    {
      title: 'Kitab-i-Aqdas',
      english: 'The Most Holy Book',
      description: 'The central book of Bahai laws and ordinances revealed by Baha\'u\'llah.',
      content: 'Contains the fundamental laws and principles of the Bahai Faith, including spiritual obligations, social teachings, and administrative guidance.',
      significance: 'The primary source of Bahai law and the foundation of Bahai community life.',
      author: 'Baha\'u\'llah',
      icon: BookOpen
    },
    {
      title: 'Kitab-i-Iqan',
      english: 'The Book of Certitude',
      description: 'A theological work explaining the nature of divine revelation and religious truth.',
      content: 'Explains the concept of progressive revelation, the unity of religions, and the spiritual significance of divine messengers.',
      significance: 'Provides the theological foundation for understanding the Bahai Faith and its relationship to other religions.',
      author: 'Baha\'u\'llah',
      icon: Scroll
    },
    {
      title: 'Hidden Words',
      english: 'Kalimat-i-Maknunih',
      description: 'A collection of short, poetic verses containing spiritual guidance.',
      content: '185 short passages in Arabic and Persian offering moral and spiritual counsel for daily living.',
      significance: 'A beloved text for personal meditation and spiritual development.',
      author: 'Baha\'u\'llah',
      icon: Quote
    }
  ],

  babiTexts: [
    {
      title: 'Bayan',
      english: 'The Exposition',
      description: 'The primary sacred text of the Babi religion.',
      content: 'Contains the Bab\'s laws, teachings, and prophecies about the coming of Baha\'u\'llah.',
      significance: 'Establishes the foundation for the Bahai Faith and the concept of progressive revelation.',
      author: 'The Bab',
      icon: FileText
    },
    {
      title: 'Qayyum al-Asma',
      english: 'The Self-Subsisting',
      description: 'The Bab\'s first major work revealed after his declaration.',
      content: 'A commentary on the Surah of Joseph that announces the Bab\'s mission and prepares for Baha\'u\'llah.',
      significance: 'Marks the beginning of the Babi dispensation and the fulfillment of Islamic prophecies.',
      author: 'The Bab',
      icon: Star
    }
  ],

  abdulBahaWritings: [
    {
      title: 'Some Answered Questions',
      description: 'A compilation of Abdu\'l-Baha\'s responses to philosophical and theological questions.',
      content: 'Addresses topics such as the nature of God, the soul, evolution, and the relationship between science and religion.',
      significance: 'Provides authoritative interpretation of Bahai teachings and addresses contemporary concerns.',
      author: 'Abdu\'l-Baha',
      icon: BookOpen
    },
    {
      title: 'Tablets of the Divine Plan',
      description: 'A series of letters outlining the global expansion of the Bahai Faith.',
      content: 'Provides guidance for teaching the Bahai Faith and establishing communities worldwide.',
      significance: 'The charter for the global expansion and development of the Bahai community.',
      author: 'Abdu\'l-Baha',
      icon: Globe
    }
  ],

  keyThemes: [
    'Unity of humanity and the oneness of religion',
    'Progressive revelation and the evolution of religious truth',
    'World peace and the establishment of global governance',
    'Equality of men and women and elimination of prejudice',
    'Harmony of science and religion',
    'Spiritual development and moral character',
    'Social justice and economic equity',
    'Universal education and the advancement of civilization'
  ],

  studyMethods: [
    'Daily reading and reflection on sacred texts',
    'Study circles and group discussion of Bahai writings',
    'Memorization of key passages and prayers',
    'Application of teachings to daily life and service',
    'Consultation and discussion with other Bahais',
    'Integration of spiritual and material aspects of life'
  ]
}

export default function BahaiScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
        <h2 className="text-3xl font-bold mb-8 text-center">Core Bahai Texts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scripturesContent.coreTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.english}
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    {text.author}
                  </Badge>
                </div>
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

      {/* Babi Texts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Babi Sacred Texts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.babiTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.english}
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    {text.author}
                  </Badge>
                </div>
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

      {/* Abdu'l-Baha Writings */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Abdu\'l-Baha\'s Writings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.abdulBahaWritings.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {text.author}
                </Badge>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Key Themes in Bahai Scriptures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripturesContent.keyThemes.map((theme, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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
                  <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
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
                Core doctrines and principles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/bahai/teachings">
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
              <Link href="/religion/bahai/practices">
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
              <Link href="/religion/bahai/history">
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
              <Link href="/religion/bahai/philosophy">
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
              <Link href="/religion/bahai/impact">
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
                Introduction to Bahai Faith
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/bahai/overview">
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
              <div className="text-2xl font-bold text-blue-600">1873</div>
              <p className="text-sm text-muted-foreground">Kitab-i-Aqdas Revealed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">185</div>
              <p className="text-sm text-muted-foreground">Hidden Words</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <p className="text-sm text-muted-foreground">Central Figures</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">100+</div>
              <p className="text-sm text-muted-foreground">Languages</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/islam/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Islamic Scriptures
            </Badge>
          </Link>
          <Link href="/religion/christianity/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Christian Scriptures
            </Badge>
          </Link>
          <Link href="/religion/judaism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Jewish Scriptures
            </Badge>
          </Link>
          <Link href="/religion/progressive-revelation">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Progressive Revelation
            </Badge>
          </Link>
          <Link href="/religion/interfaith-dialogue">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-blue-100">
              Interfaith Dialogue
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 