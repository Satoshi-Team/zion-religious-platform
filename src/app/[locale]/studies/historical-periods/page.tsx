import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, History, Building, Scroll, Crown } from 'lucide-react'
import Link from 'next/link'

interface HistoricalPeriodsPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: HistoricalPeriodsPageProps): Promise<Metadata> {
  
  return {
    title: 'Historical Periods - Religious History Study Resources | Sacred Texts',
    description: 'Explore major historical periods in religious development, from ancient civilizations to modern times, with comprehensive timelines and study resources.',
    keywords: 'religious history, historical periods, ancient religions, medieval religion, modern religion, religious timeline, religious development, religious studies, historical theology, comparative religion',
    openGraph: {
      title: 'Historical Periods - Religious History Study Resources',
      description: 'Explore major historical periods in religious development with comprehensive timelines and study resources.',
      type: 'website',
    },
  }
}

export default async function HistoricalPeriodsPage({ params }: HistoricalPeriodsPageProps) {

  const historicalPeriods = [
    {
      title: 'Ancient Period (3000 BCE - 500 CE)',
      description: 'Formation of major world religions and early religious practices',
      icon: Scroll,
      religions: ['Hinduism', 'Judaism', 'Buddhism', 'Christianity', 'Zoroastrianism'],
      keyEvents: ['Vedic Period', 'Babylonian Exile', 'Life of Buddha', 'Life of Jesus', 'Roman Empire'],
      color: 'bg-amber-50 dark:bg-amber-950'
    },
    {
      title: 'Medieval Period (500 - 1500 CE)',
      description: 'Development of religious institutions and theological systems',
      icon: Building,
      religions: ['Christianity', 'Islam', 'Buddhism', 'Hinduism', 'Judaism'],
      keyEvents: ['Rise of Islam', 'Crusades', 'Scholasticism', 'Bhakti Movement', 'Golden Age of Judaism'],
      color: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      title: 'Early Modern Period (1500 - 1800 CE)',
      description: 'Religious reformations and global expansion of religions',
      icon: Crown,
      religions: ['Protestantism', 'Catholicism', 'Islam', 'Buddhism', 'Hinduism'],
      keyEvents: ['Protestant Reformation', 'Counter-Reformation', 'Mughal Empire', 'Tokugawa Shogunate', 'Colonial Expansion'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Modern Period (1800 - Present)',
      description: 'Religious responses to modernity and contemporary developments',
      icon: History,
      religions: ['All Major Religions', 'New Religious Movements', 'Secularism', 'Interfaith Dialogue'],
      keyEvents: ['Industrial Revolution', 'World Wars', 'Decolonization', 'Vatican II', 'Digital Age'],
      color: 'bg-green-50 dark:bg-green-950'
    }
  ]

  const studyAreas = [
    {
      title: 'Religious Development',
      description: 'How religions evolved and adapted over time',
      topics: ['Doctrinal Development', 'Institutional Growth', 'Cultural Adaptation', 'Schism and Unity', 'Reform Movements'],
      methods: ['Textual Analysis', 'Archaeological Evidence', 'Comparative Studies', 'Historical Documentation']
    },
    {
      title: 'Social and Political Context',
      description: 'Religious interaction with social and political systems',
      topics: ['State-Religion Relations', 'Religious Wars', 'Colonialism', 'Nationalism', 'Globalization'],
      methods: ['Political History', 'Social History', 'Economic Analysis', 'Cultural Studies']
    },
    {
      title: 'Intellectual History',
      description: 'Development of religious thought and philosophy',
      topics: ['Theological Debates', 'Philosophical Systems', 'Scientific Revolution', 'Enlightenment', 'Modern Theology'],
      methods: ['Philosophical Analysis', 'Intellectual History', 'Comparative Philosophy', 'Theological Studies']
    },
    {
      title: 'Cultural Exchange',
      description: 'Cross-cultural religious interactions and influences',
      topics: ['Silk Road', 'Maritime Trade', 'Missionary Activity', 'Diaspora Communities', 'Interfaith Dialogue'],
      methods: ['Cultural Anthropology', 'Migration Studies', 'Trade History', 'Comparative Religion']
    }
  ]

  const academicPrograms = [
    {
      title: 'University Programs',
      items: [
        { name: 'Harvard Divinity School', location: 'Cambridge, Massachusetts', program: 'Religious History and Theology' },
        { name: 'University of Oxford', location: 'Oxford, UK', program: 'History of Religion' },
        { name: 'University of Chicago', location: 'Chicago, Illinois', program: 'History of Religions' },
        { name: 'Hebrew University', location: 'Jerusalem, Israel', program: 'Jewish History and Religion' }
      ]
    },
    {
      title: 'Research Centers',
      items: [
        { name: 'Center for the Study of World Religions', location: 'Harvard University', focus: 'Comparative Religious History' },
        { name: 'Institute for Advanced Study', location: 'Princeton, New Jersey', focus: 'Historical Religious Studies' },
        { name: 'Warburg Institute', location: 'London, UK', focus: 'Cultural and Religious History' },
        { name: 'Max Weber Centre', location: 'Erfurt, Germany', focus: 'Religious and Social History' }
      ]
    },
    {
      title: 'Online Resources',
      items: [
        { name: 'Internet Sacred Texts Archive', type: 'Digital Library', focus: 'Historical Religious Texts' },
        { name: 'Perseus Digital Library', type: 'Classical Studies', focus: 'Ancient Religious Sources' },
        { name: 'JSTOR', type: 'Academic Database', focus: 'Religious History Research' },
        { name: 'Cambridge Histories Online', type: 'Historical Reference', focus: 'Comprehensive Religious History' }
      ]
    }
  ]

  const recommendedBooks = [
    {
      title: 'A History of Religious Ideas',
      author: 'Mircea Eliade',
      description: 'Comprehensive three-volume history of religious ideas from prehistoric times to the present'
    },
    {
      title: 'The World\'s Religions',
      author: 'Huston Smith',
      description: 'Classic introduction to the major world religions and their historical development'
    },
    {
      title: 'Religions of the Ancient World',
      author: 'Sarah Iles Johnston',
      description: 'Detailed study of religious practices in ancient civilizations'
    },
    {
      title: 'The Oxford History of Christianity',
      author: 'John McManners',
      description: 'Comprehensive history of Christianity from its origins to the modern era'
    }
  ]

  const timelineEvents = [
    {
      period: 'Ancient Period',
      events: [
        { year: '3000 BCE', event: 'Early Vedic Period begins' },
        { year: '1500 BCE', event: 'Rigveda composed' },
        { year: '1200 BCE', event: 'Moses and Exodus' },
        { year: '563 BCE', event: 'Birth of Siddhartha Gautama' },
        { year: '4 BCE', event: 'Birth of Jesus Christ' },
        { year: '70 CE', event: 'Destruction of Second Temple' }
      ]
    },
    {
      period: 'Medieval Period',
      events: [
        { year: '570 CE', event: 'Birth of Prophet Muhammad' },
        { year: '632 CE', event: 'Death of Prophet Muhammad' },
        { year: '1095 CE', event: 'First Crusade begins' },
        { year: '1206 CE', event: 'Delhi Sultanate established' },
        { year: '1453 CE', event: 'Fall of Constantinople' }
      ]
    },
    {
      period: 'Early Modern Period',
      events: [
        { year: '1517 CE', event: 'Protestant Reformation begins' },
        { year: '1545 CE', event: 'Council of Trent begins' },
        { year: '1600 CE', event: 'Tokugawa Shogunate established' },
        { year: '1707 CE', event: 'Mughal Empire at peak' }
      ]
    },
    {
      period: 'Modern Period',
      events: [
        { year: '1789 CE', event: 'French Revolution' },
        { year: '1868 CE', event: 'Meiji Restoration' },
        { year: '1947 CE', event: 'Partition of India' },
        { year: '1962 CE', event: 'Vatican II begins' },
        { year: '2001 CE', event: '9/11 attacks' }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Historical Periods
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore the major historical periods in religious development, from ancient civilizations to modern times. 
          Understand how religions evolved, interacted, and shaped human history across different eras.
        </p>
      </div>

      {/* Historical Periods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Major Historical Periods
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {historicalPeriods.map((period, index) => (
            <Card key={index} className={`${period.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <period.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{period.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {period.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Major Religions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {period.religions.map((religion, relIndex) => (
                        <Badge key={relIndex} variant="secondary">{religion}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Events:</h4>
                    <div className="space-y-1">
                      {period.keyEvents.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic Study Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studyAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Topics:</h4>
                    <div className="space-y-1">
                      {area.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Methods:</h4>
                    <div className="space-y-1">
                      {area.methods.map((method, methodIndex) => (
                        <div key={methodIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Historical Timeline
        </h2>
        <div className="space-y-8">
          {timelineEvents.map((period, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {period.period}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {period.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{event.event}</h4>
                        </div>
                        <Badge variant="outline">{event.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Programs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic Programs & Resources
        </h2>
        <div className="space-y-8">
          {academicPrograms.map((category, index) => (
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
                            {item.program || item.focus}
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
              Explore Religious History
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Understanding religious history provides crucial context for contemporary religious practices, 
              interfaith dialogue, and the role of religion in modern society.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/studies">
                  <BookOpen className="mr-2 h-5 w-5" />
                  All Study Areas
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