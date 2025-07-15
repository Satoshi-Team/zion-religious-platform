import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Scroll, FileText, Quote, Calendar, User, Target, Globe, Lightbulb, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Scriptures - Five Classics and Four Books',
  description: 'Explore the sacred texts of Confucianism including the Five Classics (I Ching, Book of Documents, Book of Songs, Book of Rites, Spring and Autumn Annals) and the Four Books (Analects, Mencius, Great Learning, Doctrine of the Mean).',
  keywords: 'Confucian scriptures, Five Classics, Four Books, Analects, I Ching, Book of Documents, Book of Songs, Book of Rites, Spring and Autumn Annals, Mencius, Great Learning, Doctrine of the Mean',
  openGraph: {
    title: 'Confucian Scriptures - Five Classics and Four Books',
    description: 'Discover the foundational texts of Confucianism that have shaped Chinese culture and philosophy for over two millennia.',
    type: 'website',
  },
}

const scripturesContent = {
  title: 'Confucian Scriptures',
  subtitle: 'Five Classics and Four Books',
  description: 'The sacred texts of Confucianism are divided into two main categories: the Five Classics (Wu Jing) and the Four Books (Si Shu). These texts form the foundation of Confucian thought and have been studied by scholars and students for over two thousand years.',

  fiveClassics: [
    {
      title: 'I Ching (Book of Changes)',
      chinese: '易经',
      description: 'An ancient divination text and cosmological manual that explores the principles of change and transformation in the universe.',
      content: 'Contains 64 hexagrams representing different states and situations, with commentaries on their meanings and applications.',
      significance: 'Fundamental to Chinese cosmology and philosophy, influencing both Confucianism and Daoism.',
      icon: Scroll
    },
    {
      title: 'Shu Jing (Book of Documents)',
      chinese: '书经',
      description: 'A collection of historical documents and speeches from ancient Chinese rulers and officials.',
      content: 'Records of government affairs, royal proclamations, and historical events from the Xia, Shang, and Zhou dynasties.',
      significance: 'Provides models of virtuous governance and moral leadership.',
      icon: FileText
    },
    {
      title: 'Shi Jing (Book of Songs)',
      chinese: '诗经',
      description: 'The oldest collection of Chinese poetry, containing 305 poems from various periods and regions.',
      content: 'Folk songs, court hymns, and ceremonial odes that reflect social customs and moral values.',
      significance: 'Demonstrates the power of poetry in moral education and cultural expression.',
      icon: Quote
    },
    {
      title: 'Li Ji (Book of Rites)',
      chinese: '礼记',
      description: 'A comprehensive guide to rituals, ceremonies, and proper conduct in various social situations.',
      content: 'Detailed descriptions of ceremonies, etiquette, and the philosophical basis for ritual behavior.',
      significance: 'Establishes the importance of ritual propriety (li) in maintaining social harmony.',
      icon: Calendar
    },
    {
      title: 'Chunqiu (Spring and Autumn Annals)',
      chinese: '春秋',
      description: 'A historical chronicle of the State of Lu during the Spring and Autumn period.',
      content: 'Concise historical records that convey moral judgments through careful word choice and selective recording.',
      significance: 'Demonstrates how history can be used to teach moral lessons and promote virtuous behavior.',
      icon: BookOpen
    }
  ],

  fourBooks: [
    {
      title: 'Lunyu (Analects)',
      chinese: '论语',
      description: 'A collection of sayings and conversations attributed to Confucius and his disciples.',
      content: 'Dialogues and aphorisms covering ethics, education, governance, and personal cultivation.',
      significance: 'The most important text of Confucianism, containing the core teachings of Confucius.',
      author: 'Confucius and disciples',
      icon: User
    },
    {
      title: 'Mengzi (Mencius)',
      chinese: '孟子',
      description: 'The teachings of Mencius, the most important Confucian philosopher after Confucius.',
      content: 'Discussions on human nature, moral cultivation, and political philosophy.',
      significance: 'Develops and expands upon Confucian thought, particularly regarding human nature and government.',
      author: 'Mencius',
      icon: User
    },
    {
      title: 'Daxue (Great Learning)',
      chinese: '大学',
      description: 'A short text outlining the path to moral cultivation and social harmony.',
      content: 'The "Three Guidelines" and "Eight Steps" for personal and social development.',
      significance: 'Provides a systematic approach to moral cultivation and social reform.',
      author: 'Zengzi (attributed)',
      icon: BookOpen
    },
    {
      title: 'Zhongyong (Doctrine of the Mean)',
      chinese: '中庸',
      description: 'A philosophical text exploring the concept of the mean and moral balance.',
      content: 'Discussions on achieving harmony and balance in all aspects of life.',
      significance: 'Emphasizes the importance of moderation and balance in moral cultivation.',
      author: 'Zisi (attributed)',
      icon: Scroll
    }
  ],

  keyThemes: [
    'Moral cultivation and self-improvement',
    'Social harmony and proper relationships',
    'Virtuous governance and leadership',
    'Education and learning',
    'Ritual propriety and etiquette',
    'Filial piety and family values',
    'The importance of tradition and cultural heritage',
    'The role of the noble person (junzi)'
  ],

  studyMethods: [
    'Memorization and recitation of key passages',
    'Commentary and interpretation by scholars',
    'Application to daily life and conduct',
    'Discussion and debate among students',
    'Integration with other classical texts',
    'Contemporary interpretation and adaptation'
  ]
}

export default function ConfucianismScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          {scripturesContent.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {scripturesContent.subtitle}
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {scripturesContent.description}
        </p>
      </div>

      {/* Five Classics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Five Classics (Wu Jing)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.fiveClassics.map((classic, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <classic.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{classic.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit">
                  {classic.chinese}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{classic.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Content:</h4>
                  <p className="text-sm text-muted-foreground">{classic.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{classic.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Four Books */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">The Four Books (Si Shu)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturesContent.fourBooks.map((book, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <book.icon className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl">{book.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="w-fit">
                    {book.chinese}
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    {book.author}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{book.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Content:</h4>
                  <p className="text-sm text-muted-foreground">{book.content}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <p className="text-sm text-muted-foreground">{book.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Themes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Themes in Confucian Scriptures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripturesContent.keyThemes.map((theme, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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
                  <BookOpen className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
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
                <User className="w-5 h-5" />
                <span>Teachings</span>
              </CardTitle>
              <CardDescription>
                Core doctrines and philosophical concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/teachings">
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
              <Link href="/religion/confucianism/practices">
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
              <Link href="/religion/confucianism/history">
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
              <Link href="/religion/confucianism/philosophy">
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
              <Link href="/religion/confucianism/impact">
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
                Introduction to Confucianism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/religion/confucianism/overview">
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
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-muted-foreground">Five Classics</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <p className="text-sm text-muted-foreground">Four Books</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">305</div>
              <p className="text-sm text-muted-foreground">Poems in Book of Songs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-orange-600">64</div>
              <p className="text-sm text-muted-foreground">Hexagrams in I Ching</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Topics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/religion/daoism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Daoist Scriptures
            </Badge>
          </Link>
          <Link href="/religion/buddhism/scriptures">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Buddhist Scriptures
            </Badge>
          </Link>
          <Link href="/religion/chinese-classics">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Chinese Classics
            </Badge>
          </Link>
          <Link href="/religion/neo-confucianism">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              Neo-Confucianism
            </Badge>
          </Link>
          <Link href="/religion/east-asian-philosophy">
            <Badge variant="secondary" className="text-lg px-4 py-2 hover:bg-orange-100">
              East Asian Philosophy
            </Badge>
          </Link>
        </div>
      </section>
    </div>
  )
} 