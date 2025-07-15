import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Scroll, FileText, Quote, Calendar, User, YinYang, Users, Target, Globe, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taoist Scriptures - Tao Te Ching, Zhuangzi, and Sacred Texts',
  description: 'Explore the sacred texts of Taoism including the Tao Te Ching (Dao De Jing), Zhuangzi (Chuang Tzu), and other important philosophical and religious works that form the foundation of Taoist thought.',
  keywords: 'Taoist scriptures, Tao Te Ching, Dao De Jing, Zhuangzi, Chuang Tzu, Laozi, Taoist texts, Chinese philosophy',
  openGraph: {
    title: 'Taoist Scriptures - Tao Te Ching, Zhuangzi, and Sacred Texts',
    description: 'Discover the foundational texts of Taoism that have inspired philosophers and seekers for over two millennia.',
    type: 'website',
  },
}

const scripturesContent = {
  title: 'Taoist Scriptures',
  subtitle: 'Sacred Texts and Philosophical Works',
  description: 'The sacred texts of Taoism include both philosophical works and religious scriptures. The most important are the Tao Te Ching (Dao De Jing) and the Zhuangzi (Chuang Tzu), which form the foundation of Taoist thought and practice.',

  coreTexts: [
    {
      title: 'Tao Te Ching (Dao De Jing)',
      chinese: '道德经',
      description: 'The fundamental text of Taoism, attributed to Laozi, containing 81 chapters of poetic wisdom.',
      content: 'Explores the nature of the Tao, the principles of Wu Wei (non-action), and the art of living in harmony with the natural way.',
      significance: 'The most translated and studied Chinese text, forming the foundation of Taoist philosophy.',
      author: 'Laozi (attributed)',
      icon: BookOpen
    },
    {
      title: 'Zhuangzi (Chuang Tzu)',
      chinese: '庄子',
      description: 'A collection of philosophical writings that expand on Taoist themes through stories and parables.',
      content: 'Uses humor, paradox, and allegory to illustrate Taoist principles and challenge conventional thinking.',
      significance: 'Provides practical applications of Taoist philosophy through engaging narratives.',
      author: 'Zhuangzi',
      icon: Scroll
    },
    {
      title: 'Liezi',
      chinese: '列子',
      description: 'A collection of Taoist stories and philosophical discussions.',
      content: 'Contains teachings on meditation, the nature of reality, and the cultivation of inner peace.',
      significance: 'Important for understanding early Taoist practices and beliefs.',
      author: 'Liezi (attributed)',
      icon: FileText
    }
  ],

  religiousTexts: [
    {
      title: 'Daozang (Taoist Canon)',
      chinese: '道藏',
      description: 'The complete collection of Taoist texts, compiled over centuries.',
      content: 'Contains thousands of texts including scriptures, rituals, alchemy, and meditation practices.',
      significance: 'The most comprehensive collection of Taoist literature and religious texts.',
      icon: BookOpen
    },
    {
      title: 'Baopuzi',
      chinese: '抱朴子',
      description: 'A text combining Taoist philosophy with alchemy and immortality practices.',
      content: 'Discusses methods for achieving longevity and spiritual transformation.',
      significance: 'Important for understanding religious Taoism and esoteric practices.',
      author: 'Ge Hong',
      icon: YinYang
    },
    {
      title: 'Huangdi Neijing',
      chinese: '黄帝内经',
      description: 'The Yellow Emperor\'s Inner Canon, foundational text of Chinese medicine.',
      content: 'Integrates Taoist philosophy with medical theory and health practices.',
      significance: 'Bridges Taoist philosophy with practical health and wellness.',
      icon: FileText
    }
  ],

  keyThemes: [
    'The nature and characteristics of the Tao',
    'Wu Wei (effortless action) and natural spontaneity',
    'Yin and Yang balance and harmony',
    'Simplicity and contentment with what is',
    'The relativity of human knowledge and values',
    'Harmony with nature and the natural way',
    'Inner cultivation and spiritual transformation',
    'The art of living and governing'
  ],

  studyMethods: [
    'Contemplative reading and reflection',
    'Meditation on key passages and concepts',
    'Application to daily life and situations',
    'Discussion and interpretation with others',
    'Integration with personal practice',
    'Study of commentaries and interpretations'
  ]
}

export default function TaoismScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
        <h2 className="text-3xl font-bold mb-8 text-center">Core Philosophical Texts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scripturesContent.coreTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-green-600" />
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

      {/* Religious Texts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Religious and Practical Texts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {scripturesContent.religiousTexts.map((text, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <text.icon className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">{text.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {text.chinese}
                  </Badge>
                  {text.author && (
                    <Badge variant="secondary" className="w-fit">
                      {text.author}
                    </Badge>
                  )}
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

      {/* Key Themes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Themes in Taoist Scriptures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripturesContent.keyThemes.map((theme, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
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
                  <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
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
                Core doctrines and philosophical concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/taoism/teachings">
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
              <Link href="/religion/taoism/practices">
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
              <Link href="/religion/taoism/history">
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
              <Link href="/religion/taoism/philosophy">
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
              <Link href="/religion/taoism/impact">
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
                Introduction to Taoism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/taoism/overview">
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
              <div className="text-2xl font-bold text-green-600">81</div>
              <p className="text-sm text-muted-foreground">Tao Te Ching Chapters</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-sm text-muted-foreground">Core Philosophical Texts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">道藏</div>
              <p className="text-sm text-muted-foreground">Daozang (Canon)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">2,500+</div>
              <p className="text-sm text-muted-foreground">Years of Influence</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/confucianism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Confucian Scriptures
            </Badge>
          </Link>
          <Link href="/religion/buddhism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Buddhist Scriptures
            </Badge>
          </Link>
          <Link href="/religion/chinese-classics">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Chinese Classics
            </Badge>
          </Link>
          <Link href="/religion/east-asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              East Asian Philosophy
            </Badge>
          </Link>
          <Link href="/religion/chinese-medicine">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-green-100">
              Chinese Medicine
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 