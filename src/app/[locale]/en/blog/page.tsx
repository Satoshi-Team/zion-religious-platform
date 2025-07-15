import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Calendar, BookOpen, Users, Globe, Lightbulb, Heart, Music, MapPin, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'What is Included in Zion.FM Version 1 - Complete Feature Overview',
    description: 'Explore the comprehensive features of Zion.FM Version 1, including sacred texts, religious studies, meditation guides, cultural resources, and global spiritual content.',
    keywords: 'Zion.FM, Features, Sacred Texts, Religious Studies, Meditation, Cultural Resources, Spiritual Content, Religious Education',
    openGraph: {
      title: 'What is Included in Zion.FM Version 1 - Complete Feature Overview',
      description: 'Explore the comprehensive features of Zion.FM Version 1, including sacred texts, religious studies, meditation guides, cultural resources, and global spiritual content.',
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Blog',
      tags: ['Zion.FM', 'Features', 'Sacred Texts', 'Religious Studies', 'Meditation', 'Cultural Resources']
    }
  }
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Zion.FM Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Insights, updates, and explorations of spiritual wisdom and religious traditions
        </p>
      </div>

      {/* Featured Article */}
      <Card className="mb-12">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm">
              <Star className="w-3 h-3 mr-1" />
              Featured Article
            </Badge>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
            What is Included in Zion.FM Version 1
          </CardTitle>
          <CardDescription className="text-lg">
            A comprehensive overview of our complete spiritual and religious platform
          </CardDescription>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 1, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Zion.FM Team
            </div>
          </div>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Welcome to Zion.FM Version 1</h2>
              <p className="text-lg leading-relaxed mb-4">
                Zion.FM represents a comprehensive digital platform dedicated to exploring the world's religious traditions, 
                sacred texts, and spiritual practices. Our Version 1 release brings together an extensive collection of 
                resources designed to educate, inspire, and connect people across different faiths and cultures.
              </p>
            </div>

            {/* Sacred Texts Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Sacred Texts & Scriptures
              </h2>
              <p className="mb-4">
                Our platform features comprehensive collections of sacred texts from major world religions:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-600">Abrahamic Traditions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/sacred-texts/bible" className="text-blue-600 hover:underline">Christian Bible</Link> - Complete text with multiple translations</li>
                    <li>• <Link href="/sacred-texts/quran" className="text-blue-600 hover:underline">Islamic Quran</Link> - Sacred text with commentary</li>
                    <li>• <Link href="/sacred-texts/torah" className="text-blue-600 hover:underline">Jewish Torah</Link> - Five Books of Moses</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-600">Eastern Traditions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/sacred-texts/buddhist" className="text-green-600 hover:underline">Buddhist Scriptures</Link> - Pali Canon and Mahayana texts</li>
                    <li>• <Link href="/sacred-texts/hindu" className="text-green-600 hover:underline">Hindu Sacred Texts</Link> - Vedas, Upanishads, Bhagavad Gita</li>
                    <li>• <Link href="/sacred-texts/sikh" className="text-green-600 hover:underline">Sikh Scriptures</Link> - Guru Granth Sahib and teachings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Religious Studies Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Comprehensive Religious Studies
              </h2>
              <p className="mb-4">
                Our studies section provides in-depth academic and spiritual resources:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-orange-600">Academic Resources</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/studies/bible" className="text-orange-600 hover:underline">Bible Studies</Link> - Historical and theological analysis</li>
                    <li>• <Link href="/studies/theology" className="text-orange-600 hover:underline">Theology Studies</Link> - Systematic religious thought</li>
                    <li>• <Link href="/studies/history" className="text-orange-600 hover:underline">Religious History</Link> - Historical development of faiths</li>
                    <li>• <Link href="/studies/academic" className="text-orange-600 hover:underline">Academic Studies</Link> - Scholarly research and analysis</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-teal-600">Comparative & Specialized</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/studies/comparative" className="text-teal-600 hover:underline">Comparative Studies</Link> - Interfaith analysis</li>
                    <li>• <Link href="/studies/commentaries" className="text-teal-600 hover:underline">Religious Commentaries</Link> - Expert interpretations</li>
                    <li>• <Link href="/studies/guides" className="text-teal-600 hover:underline">Study Guides</Link> - Educational resources</li>
                    <li>• <Link href="/studies/buddhist" className="text-teal-600 hover:underline">Buddhist Studies</Link> - Philosophy and practice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Religious Traditions Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                World Religious Traditions
              </h2>
              <p className="mb-4">
                Comprehensive coverage of major world religions with detailed historical periods:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-red-600">Major World Religions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/christianity/overview" className="text-red-600 hover:underline">Christianity</Link> - Complete historical coverage</li>
                    <li>• <Link href="/religion/islam/overview" className="text-red-600 hover:underline">Islam</Link> - Early, medieval, and modern periods</li>
                    <li>• <Link href="/religion/hinduism/overview" className="text-red-600 hover:underline">Hinduism</Link> - Ancient to contemporary</li>
                    <li>• <Link href="/religion/buddhism/overview" className="text-red-600 hover:underline">Buddhism</Link> - All major traditions</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-600">Additional Traditions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/religion/judaism/overview" className="text-blue-600 hover:underline">Judaism</Link> - Complete historical development</li>
                    <li>• <Link href="/religion/sikhism/overview" className="text-blue-600 hover:underline">Sikhism</Link> - From origins to modern practice</li>
                    <li>• <Link href="/religion/jainism/overview" className="text-blue-600 hover:underline">Jainism</Link> - Philosophy and practice</li>
                    <li>• <Link href="/religion/confucianism/overview" className="text-blue-600 hover:underline">Confucianism</Link> - Ethical and philosophical tradition</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-600">Eastern & Modern Traditions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/religion/taoism/overview" className="text-green-600 hover:underline">Taoism</Link> - Philosophical and religious aspects</li>
                    <li>• <Link href="/religion/shinto/overview" className="text-green-600 hover:underline">Shinto</Link> - Japanese spiritual tradition</li>
                    <li>• <Link href="/religion/bahai/overview" className="text-green-600 hover:underline">Bahai Faith</Link> - Modern religious movement</li>
                    <li>• <Link href="/religion/rastafarianism/overview" className="text-green-600 hover:underline">Rastafarianism</Link> - Contemporary spiritual movement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Meditation & Spiritual Practice */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Meditation & Spiritual Practice
              </h2>
              <p className="mb-4">
                Comprehensive meditation guides and spiritual practices from various traditions:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-indigo-600">Traditional Practices</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/meditation/christian" className="text-indigo-600 hover:underline">Christian Meditation</Link> - Contemplative prayer and reflection</li>
                    <li>• <Link href="/meditation/buddhist" className="text-indigo-600 hover:underline">Buddhist Meditation</Link> - Mindfulness and insight practices</li>
                    <li>• <Link href="/meditation/islamic" className="text-indigo-600 hover:underline">Islamic Meditation</Link> - Dhikr and spiritual contemplation</li>
                    <li>• <Link href="/meditation/hindu" className="text-indigo-600 hover:underline">Hindu Meditation</Link> - Yoga and spiritual disciplines</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-purple-600">Contemporary Approaches</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/meditation/modern" className="text-purple-600 hover:underline">Modern Meditation</Link> - Contemporary mindfulness practices</li>
                    <li>• <Link href="/teachings/sermons" className="text-purple-600 hover:underline">Spiritual Teachings</Link> - Sermons and religious discourse</li>
                    <li>• <Link href="/teachings/devotionals" className="text-purple-600 hover:underline">Devotional Practices</Link> - Daily spiritual exercises</li>
                    <li>• <Link href="/teachings/bible" className="text-purple-600 hover:underline">Biblical Teachings</Link> - Scripture study and application</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cultural Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Cultural & Historical Resources
              </h2>
              <p className="mb-4">
                Rich cultural and historical resources that bring religious traditions to life:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-amber-600">Historical & Cultural</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/resources/history" className="text-amber-600 hover:underline">Religious History</Link> - Historical development and events</li>
                    <li>• <Link href="/resources/places" className="text-amber-600 hover:underline">Sacred Places</Link> - Important religious sites and locations</li>
                    <li>• <Link href="/resources/art" className="text-amber-600 hover:underline">Religious Art</Link> - Artistic expressions of faith</li>
                    <li>• <Link href="/resources/music" className="text-amber-600 hover:underline">Sacred Music</Link> - Musical traditions and compositions</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-emerald-600">Practical Resources</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• <Link href="/resources/calendar" className="text-emerald-600 hover:underline">Religious Calendar</Link> - Festivals, holidays, and observances</li>
                    <li>• <Link href="/listen" className="text-emerald-600 hover:underline">Audio Resources</Link> - Sacred music and spiritual content</li>
                    <li>• <Link href="/blog" className="text-emerald-600 hover:underline">Blog & Articles</Link> - Regular content and insights</li>
                    <li>• <Link href="/resources" className="text-emerald-600 hover:underline">Resource Library</Link> - Comprehensive educational materials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Platform Features & Technology
              </h2>
              <p className="mb-4">
                Zion.FM is built with modern technology to provide the best user experience:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-cyan-600">User Experience</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Responsive design for all devices</li>
                    <li>• Fast loading and optimized performance</li>
                    <li>• Intuitive navigation and search</li>
                    <li>• Accessibility features for all users</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-pink-600">Content Quality</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Expert-reviewed and accurate content</li>
                    <li>• Comprehensive coverage of topics</li>
                    <li>• Regular updates and additions</li>
                    <li>• Multiple perspectives and traditions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Join Our Spiritual Journey</h2>
              <p className="text-lg leading-relaxed mb-4">
                Zion.FM Version 1 represents a comprehensive platform for spiritual exploration and religious education. 
                Whether you're a student, practitioner, or simply curious about world religions, our platform provides 
                the tools and resources you need to deepen your understanding and practice.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link href="/sacred-texts">
                    Explore Sacred Texts
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/studies">
                    Start Learning
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/meditation">
                    Practice Meditation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Blog Features */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We're constantly adding new content and features to enhance your spiritual journey.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Weekly spiritual insights and reflections</li>
              <li>• Expert interviews and guest articles</li>
              <li>• Community discussions and forums</li>
              <li>• Interactive learning modules</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Stay Connected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Join our community and stay updated with the latest content and features.
            </p>
            <div className="space-y-2 text-sm">
              <p>• Subscribe to our newsletter for updates</p>
              <p>• Follow us on social media</p>
              <p>• Share your feedback and suggestions</p>
              <p>• Participate in our growing community</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 