import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, Moon, Eye, Prayer } from 'lucide-react'
import Link from 'next/link'

interface IslamicMeditationPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: IslamicMeditationPageProps): Promise<Metadata> {
  
  return {
    title: 'Islamic Meditation - Dhikr, Muraqaba & Sufi Practices | Sacred Texts',
    description: 'Explore Islamic meditation practices including dhikr (remembrance), muraqaba (contemplation), and Sufi spiritual techniques for inner peace and divine connection.',
    keywords: 'Islamic meditation, dhikr, muraqaba, Sufi meditation, Islamic spirituality, tasawwuf, Islamic mindfulness, Islamic contemplation, Islamic prayer, Islamic spiritual practices',
    openGraph: {
      title: 'Islamic Meditation - Dhikr, Muraqaba & Sufi Practices',
      description: 'Explore Islamic meditation practices including dhikr, muraqaba, and Sufi spiritual techniques.',
      type: 'website',
    },
  }
}

export default async function IslamicMeditationPage({ params }: IslamicMeditationPageProps) {

  const meditationPractices = [
    {
      title: 'Dhikr (Remembrance)',
      description: 'The practice of remembering and glorifying Allah through repetitive prayer and contemplation',
      icon: Prayer,
      techniques: ['Silent Dhikr', 'Vocal Dhikr', 'Group Dhikr', 'Personal Dhikr', 'Dhikr with Prayer Beads'],
      benefits: ['Spiritual Connection', 'Inner Peace', 'Mental Clarity', 'Emotional Balance', 'Divine Presence'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Muraqaba (Contemplation)',
      description: 'Meditative practice of focused attention and spiritual awareness',
      icon: Eye,
      techniques: ['Breath Awareness', 'Heart Contemplation', 'Divine Names', 'Spiritual Visualization', 'Mindful Presence'],
      benefits: ['Enhanced Awareness', 'Spiritual Insight', 'Mental Discipline', 'Emotional Stability', 'Divine Guidance'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Sufi Meditation',
      description: 'Advanced spiritual practices from the Sufi tradition for mystical experience',
      icon: Heart,
      techniques: ['Sama (Spiritual Music)', 'Whirling Meditation', 'Sufi Breathing', 'Spiritual Poetry', 'Mystical Contemplation'],
      benefits: ['Mystical Experience', 'Spiritual Awakening', 'Divine Love', 'Transcendence', 'Unity Consciousness'],
      color: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      title: 'Islamic Mindfulness',
      description: 'Contemporary approaches to mindfulness within Islamic spiritual framework',
      icon: Lightbulb,
      techniques: ['Present Moment Awareness', 'Gratitude Practice', 'Compassion Meditation', 'Mindful Prayer', 'Spiritual Reflection'],
      benefits: ['Stress Reduction', 'Mental Health', 'Spiritual Growth', 'Better Relationships', 'Life Balance'],
      color: 'bg-orange-50 dark:bg-orange-950'
    }
  ]

  const traditionalMethods = [
    {
      title: 'Pre-Meditative Preparation',
      description: 'Essential preparations for Islamic meditation practice',
      steps: [
        'Perform ablution (wudu) for spiritual purity',
        'Find a clean, quiet space for practice',
        'Face the qibla (direction of Mecca)',
        'Begin with sincere intention (niyyah)',
        'Recite opening prayers and seek refuge'
      ]
    },
    {
      title: 'Breathing Techniques',
      description: 'Islamic breathing practices for spiritual focus',
      methods: [
        'Natural breathing with awareness of Allah\'s presence',
        'Rhythmic breathing synchronized with dhikr',
        'Deep breathing for relaxation and focus',
        'Breath counting as a form of dhikr',
        'Mindful breathing during prayer'
      ]
    },
    {
      title: 'Posture and Position',
      description: 'Proper physical positioning for Islamic meditation',
      positions: [
        'Sitting cross-legged (like in prayer)',
        'Kneeling position (sajdah)',
        'Standing with hands raised in supplication',
        'Prostration position for deep contemplation',
        'Comfortable seated position with back straight'
      ]
    }
  ]

  const dhikrPractices = [
    {
      title: 'Personal Dhikr',
      description: 'Individual remembrance practices for daily spiritual connection',
      practices: [
        {
          name: 'Subhanallah (Glory be to Allah)',
          description: 'Remembrance of Allah\'s perfection and transcendence',
          benefits: 'Purifies the heart and removes spiritual impurities'
        },
        {
          name: 'Alhamdulillah (Praise be to Allah)',
          description: 'Expression of gratitude and thankfulness',
          benefits: 'Increases gratitude and positive outlook'
        },
        {
          name: 'Allahu Akbar (Allah is Greatest)',
          description: 'Recognition of Allah\'s supreme greatness',
          benefits: 'Strengthens faith and reduces worldly concerns'
        },
        {
          name: 'La ilaha illallah (There is no god but Allah)',
          description: 'Declaration of monotheism and divine unity',
          benefits: 'Deepens understanding of tawhid (divine unity)'
        }
      ]
    },
    {
      title: 'Group Dhikr',
      description: 'Collective remembrance practices in community settings',
      practices: [
        {
          name: 'Hadra (Sufi Group Dhikr)',
          description: 'Collective rhythmic chanting and movement',
          benefits: 'Creates spiritual energy and community bonding'
        },
        {
          name: 'Qawwali (Sufi Music)',
          description: 'Devotional music and poetry recitation',
          benefits: 'Elevates spiritual consciousness and emotion'
        },
        {
          name: 'Majlis-e-Dhikr (Dhikr Gathering)',
          description: 'Formal gathering for collective remembrance',
          benefits: 'Strengthens community and spiritual learning'
        }
      ]
    }
  ]

  const sufismPractices = [
    {
      title: 'Sama (Spiritual Music)',
      description: 'Listening to devotional music and poetry for spiritual elevation',
      elements: ['Qawwali Music', 'Spiritual Poetry', 'Rhythmic Chanting', 'Emotional Expression', 'Divine Love'],
      benefits: ['Spiritual Ecstasy', 'Emotional Healing', 'Divine Connection', 'Community Unity', 'Cultural Preservation']
    },
    {
      title: 'Whirling Meditation',
      description: 'Sufi dance meditation for spiritual transcendence',
      elements: ['Circular Movement', 'Centered Focus', 'Spiritual Surrender', 'Physical Discipline', 'Mystical Experience'],
      benefits: ['Physical Balance', 'Mental Clarity', 'Spiritual Awakening', 'Emotional Release', 'Unity Consciousness']
    },
    {
      title: 'Sufi Breathing',
      description: 'Advanced breathing techniques for spiritual development',
      elements: ['Controlled Breathing', 'Energy Circulation', 'Spiritual Visualization', 'Divine Names', 'Heart Focus'],
      benefits: ['Energy Balance', 'Spiritual Vitality', 'Mental Focus', 'Emotional Stability', 'Divine Presence']
    }
  ]

  const contemporaryApplications = [
    {
      title: 'Stress Management',
      description: 'Using Islamic meditation for modern stress relief',
      applications: [
        'Daily dhikr for anxiety reduction',
        'Mindful prayer for mental clarity',
        'Breathing exercises for relaxation',
        'Spiritual reflection for perspective',
        'Gratitude practice for positive mindset'
      ]
    },
    {
      title: 'Mental Health',
      description: 'Islamic meditation for psychological well-being',
      applications: [
        'Depression management through dhikr',
        'Anxiety relief through muraqaba',
        'Mindfulness for emotional regulation',
        'Spiritual counseling integration',
        'Community support through group practices'
      ]
    },
    {
      title: 'Spiritual Development',
      description: 'Contemporary approaches to Islamic spirituality',
      applications: [
        'Digital dhikr apps and reminders',
        'Online meditation communities',
        'Interfaith meditation dialogue',
        'Academic study of Islamic meditation',
        'Integration with modern psychology'
      ]
    }
  ]

  const resources = [
    {
      title: 'Traditional Texts',
      items: [
        { name: 'The Alchemy of Happiness', author: 'Al-Ghazali', focus: 'Classic Sufi spiritual guide' },
        { name: 'The Conference of the Birds', author: 'Attar', focus: 'Sufi allegorical poetry' },
        { name: 'The Mathnawi', author: 'Rumi', focus: 'Sufi mystical poetry and teachings' },
        { name: 'The Book of Assistance', author: 'Al-Haddad', focus: 'Practical spiritual guidance' }
      ]
    },
    {
      title: 'Contemporary Books',
      items: [
        { name: 'The Heart of Islamic Meditation', author: 'Various Scholars', focus: 'Modern Islamic meditation guide' },
        { name: 'Sufi Meditation', author: 'Various Authors', focus: 'Contemporary Sufi practices' },
        { name: 'Islamic Mindfulness', author: 'Modern Scholars', focus: 'Mindfulness in Islamic context' },
        { name: 'The Way of the Sufi', author: 'Idries Shah', focus: 'Introduction to Sufi practices' }
      ]
    },
    {
      title: 'Online Resources',
      items: [
        { name: 'Islamic Meditation Apps', type: 'Digital Tools', focus: 'Dhikr and meditation apps' },
        { name: 'Sufi Music Platforms', type: 'Audio Resources', focus: 'Qawwali and spiritual music' },
        { name: 'Islamic Meditation Videos', type: 'Visual Guides', focus: 'Instructional meditation videos' },
        { name: 'Online Dhikr Communities', type: 'Social Platforms', focus: 'Virtual group practices' }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Islamic Meditation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the rich tradition of Islamic meditation practices including dhikr (remembrance), 
          muraqaba (contemplation), and Sufi spiritual techniques for inner peace and divine connection.
        </p>
      </div>

      {/* Meditation Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Core Islamic Meditation Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {meditationPractices.map((practice, index) => (
            <Card key={index} className={`${practice.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <practice.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {practice.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Techniques:</h4>
                    <div className="space-y-1">
                      {practice.techniques.map((technique, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {practice.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
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

      {/* Traditional Methods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Traditional Methods and Preparation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {traditionalMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-base">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(method.steps || method.methods || method.positions).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dhikr Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Dhikr (Remembrance) Practices
        </h2>
        <div className="space-y-8">
          {dhikrPractices.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {category.practices.map((practice, practiceIndex) => (
                  <Card key={practiceIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{practice.name}</CardTitle>
                      <CardDescription className="text-base">
                        {practice.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Benefits:</strong> {practice.benefits}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sufism Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Sufi Meditation Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sufismPractices.map((practice, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{practice.title}</CardTitle>
                <CardDescription className="text-base">
                  {practice.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Elements:</h4>
                    <div className="space-y-1">
                      {practice.elements.map((element, elementIndex) => (
                        <div key={elementIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{element}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {practice.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
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

      {/* Contemporary Applications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contemporary Applications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {contemporaryApplications.map((application, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{application.title}</CardTitle>
                <CardDescription className="text-base">
                  {application.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {application.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{app}</span>
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
                            {item.author || item.type}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {item.focus}
                          </p>
                        </div>
                        <BookOpen className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Begin Your Islamic Meditation Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're new to Islamic meditation or seeking to deepen your practice, 
              these traditional and contemporary methods offer pathways to spiritual growth and inner peace.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/islam">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Islam
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/meditation">
                  <Globe className="mr-2 h-5 w-5" />
                  All Meditation Types
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 