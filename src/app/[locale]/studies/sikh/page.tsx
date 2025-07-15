import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star } from 'lucide-react'
import Link from 'next/link'

interface SikhStudiesPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: SikhStudiesPageProps): Promise<Metadata> {
  
  return {
    title: 'Sikh Studies - Comprehensive Learning Resources | Sacred Texts',
    description: 'Explore Sikh philosophy, practice, history, and sacred texts through comprehensive study guides, academic resources, and community learning materials.',
    keywords: 'Sikh studies, Sikhism, Guru Granth Sahib, Sikh philosophy, Sikh practice, Sikh history, Sikh community, Sikh learning, Sikh education, Sikh spirituality',
    openGraph: {
      title: 'Sikh Studies - Comprehensive Learning Resources',
      description: 'Explore Sikh philosophy, practice, history, and sacred texts through comprehensive study guides and academic resources.',
      type: 'website',
    },
  }
}

export default async function SikhStudiesPage({ params }: SikhStudiesPageProps) {

  const studyAreas = [
    {
      title: 'Sikh Philosophy',
      description: 'Core teachings of Sikhism including the concept of One God, equality, and selfless service',
      icon: Lightbulb,
      topics: ['Ik Onkar (One God)', 'Guru Nanak\'s Teachings', 'Sikh Ethics', 'Spiritual Equality', 'Seva (Selfless Service)'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Sikh Practice',
      description: 'Daily practices, rituals, and spiritual disciplines in Sikhism',
      icon: Heart,
      topics: ['Nitnem (Daily Prayers)', 'Kirtan (Sacred Music)', 'Langar (Community Kitchen)', 'Amrit Ceremony', 'Sikh Lifestyle'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Sikh History',
      description: 'Historical development from Guru Nanak to modern Sikhism',
      icon: Clock,
      topics: ['Ten Sikh Gurus', 'Sikh Empire', 'Sikh Diaspora', 'Modern Sikhism', 'Sikh Martyrs'],
      color: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      title: 'Sacred Texts',
      description: 'Study of Guru Granth Sahib and other important Sikh scriptures',
      icon: BookMarked,
      topics: ['Guru Granth Sahib', 'Dasam Granth', 'Sikh Hymns', 'Scriptural Interpretation', 'Sacred Poetry'],
      color: 'bg-orange-50 dark:bg-orange-950'
    }
  ]

  const studyGuides = [
    {
      title: 'Introduction to Sikhism',
      description: 'A beginner-friendly guide to Sikh beliefs and practices',
      level: 'Beginner',
      duration: '4-6 weeks',
      topics: ['Basic Concepts', 'Guru Nanak\'s Life', 'Core Teachings', 'Daily Practices']
    },
    {
      title: 'Guru Granth Sahib Study',
      description: 'In-depth study of Sikhism\'s sacred scripture',
      level: 'Intermediate',
      duration: '8-12 weeks',
      topics: ['Scripture Structure', 'Key Hymns', 'Theological Themes', 'Historical Context']
    },
    {
      title: 'Sikh History and Culture',
      description: 'Comprehensive overview of Sikh historical development',
      level: 'Intermediate',
      duration: '6-8 weeks',
      topics: ['Guru Period', 'Sikh Empire', 'Colonial Period', 'Modern Era']
    },
    {
      title: 'Sikh Philosophy and Ethics',
      description: 'Advanced study of Sikh philosophical concepts',
      level: 'Advanced',
      duration: '10-12 weeks',
      topics: ['Metaphysics', 'Ethics', 'Social Philosophy', 'Comparative Religion']
    }
  ]

  const resources = [
    {
      title: 'Academic Institutions',
      items: [
        { name: 'Punjab University', location: 'Chandigarh, India', focus: 'Sikh Studies Department' },
        { name: 'Guru Nanak Dev University', location: 'Amritsar, India', focus: 'Sikh History and Culture' },
        { name: 'University of Toronto', location: 'Toronto, Canada', focus: 'Sikh and Punjabi Studies' },
        { name: 'University of California', location: 'Santa Barbara, USA', focus: 'Sikh Studies Program' }
      ]
    },
    {
      title: 'Online Learning Platforms',
      items: [
        { name: 'SikhNet', type: 'Educational Website', focus: 'Sikh Education and Resources' },
        { name: 'Sikh Research Institute', type: 'Academic Organization', focus: 'Sikh Studies and Research' },
        { name: 'Gurbani.org', type: 'Scripture Study', focus: 'Guru Granth Sahib Study' },
        { name: 'Sikh Foundation', type: 'Cultural Organization', focus: 'Sikh Heritage and Education' }
      ]
    },
    {
      title: 'Community Resources',
      items: [
        { name: 'Local Gurdwaras', type: 'Religious Centers', focus: 'Community Learning and Practice' },
        { name: 'Sikh Student Associations', type: 'Student Groups', focus: 'Peer Learning and Support' },
        { name: 'Sikh Cultural Centers', type: 'Cultural Organizations', focus: 'Heritage and Education' },
        { name: 'Sikh Youth Programs', type: 'Youth Organizations', focus: 'Next Generation Education' }
      ]
    }
  ]

  const recommendedBooks = [
    {
      title: 'The Sikh Religion: Its Gurus, Sacred Writings and Authors',
      author: 'Max Arthur Macauliffe',
      description: 'Comprehensive six-volume work on Sikh history and scriptures'
    },
    {
      title: 'Sikhism: A Very Short Introduction',
      author: 'Eleanor Nesbitt',
      description: 'Concise introduction to Sikh beliefs and practices'
    },
    {
      title: 'The Guru Granth Sahib: Canon, Meaning and Authority',
      author: 'Pashaura Singh',
      description: 'Academic study of Sikhism\'s sacred scripture'
    },
    {
      title: 'Sikhism: An Introduction',
      author: 'Nikky-Guninder Kaur Singh',
      description: 'Modern introduction to Sikh philosophy and practice'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sikh Studies
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive resources for studying Sikh philosophy, practice, history, and sacred texts. 
          Explore the rich spiritual tradition of Sikhism through academic study and community learning.
        </p>
      </div>

      {/* Study Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Core Study Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studyAreas.map((area, index) => (
            <Card key={index} className={`${area.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <area.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Guides */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Structured Study Guides
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studyGuides.map((guide, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <Badge variant={guide.level === 'Beginner' ? 'default' : guide.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                    {guide.level}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    {guide.duration}
                  </div>
                </div>
                <div className="space-y-2">
                  {guide.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Learning Resources
        </h2>
        <div className="space-y-8">
          {resources.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.location || item.type}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {item.focus}
                          </p>
                        </div>
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Books */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Recommended Reading
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendedBooks.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{book.title}</CardTitle>
                <CardDescription className="text-base">
                  by {book.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {book.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Start Your Sikh Studies Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're a beginner exploring Sikhism or an advanced student deepening your understanding, 
              these resources provide comprehensive guidance for your spiritual and academic journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/sikhism">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Sikhism
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">
                  <Globe className="mr-2 h-5 w-5" />
                  More Resources
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 