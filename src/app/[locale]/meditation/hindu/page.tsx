import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, Lotus, Eye, Flame } from 'lucide-react'
import Link from 'next/link'

interface HinduMeditationPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: HinduMeditationPageProps): Promise<Metadata> {
  
  return {
    title: 'Hindu Meditation - Yoga, Dhyana & Spiritual Practices | Sacred Texts',
    description: 'Explore Hindu meditation practices including yoga, dhyana, pranayama, and various spiritual techniques for self-realization and divine connection.',
    keywords: 'Hindu meditation, yoga meditation, dhyana, pranayama, Hindu spirituality, yogic practices, meditation techniques, Hindu philosophy, spiritual awakening, self-realization',
    openGraph: {
      title: 'Hindu Meditation - Yoga, Dhyana & Spiritual Practices',
      description: 'Explore Hindu meditation practices including yoga, dhyana, pranayama, and spiritual techniques.',
      type: 'website',
    },
  }
}

export default async function HinduMeditationPage({ params }: HinduMeditationPageProps) {

  const meditationPractices = [
    {
      title: 'Dhyana (Meditation)',
      description: 'The seventh limb of yoga, focused meditation for spiritual insight and self-realization',
      icon: Eye,
      techniques: ['Concentration on Object', 'Mindful Awareness', 'Witness Consciousness', 'Transcendental Meditation', 'Vipassana'],
      benefits: ['Mental Clarity', 'Spiritual Insight', 'Inner Peace', 'Self-Realization', 'Divine Connection'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Pranayama (Breath Control)',
      description: 'Breathing techniques for energy regulation and spiritual development',
      icon: Flame,
      techniques: ['Nadi Shodhana', 'Kapalabhati', 'Bhastrika', 'Ujjayi', 'Sitali'],
      benefits: ['Energy Balance', 'Mental Focus', 'Stress Reduction', 'Vitality', 'Spiritual Awakening'],
      color: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      title: 'Yoga Meditation',
      description: 'Meditative practices integrated with physical and spiritual yoga',
      icon: Lotus,
      techniques: ['Raja Yoga', 'Kundalini Yoga', 'Bhakti Yoga', 'Jnana Yoga', 'Karma Yoga'],
      benefits: ['Physical Health', 'Mental Discipline', 'Spiritual Growth', 'Emotional Balance', 'Life Harmony'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Mantra Meditation',
      description: 'Meditation using sacred sounds, words, or phrases for spiritual transformation',
      icon: Heart,
      techniques: ['Om Chanting', 'Gayatri Mantra', 'Personal Mantra', 'Group Chanting', 'Silent Repetition'],
      benefits: ['Vibrational Healing', 'Mental Purification', 'Divine Protection', 'Spiritual Power', 'Consciousness Expansion'],
      color: 'bg-purple-50 dark:bg-purple-950'
    }
  ]

  const yogicPaths = [
    {
      title: 'Raja Yoga (Royal Path)',
      description: 'The path of meditation and mental discipline',
      practices: [
        'Ashtanga Yoga (Eight Limbs)',
        'Meditation techniques',
        'Mental concentration',
        'Spiritual discipline',
        'Self-realization'
      ],
      benefits: ['Mental Mastery', 'Spiritual Insight', 'Inner Peace', 'Self-Control', 'Divine Union']
    },
    {
      title: 'Bhakti Yoga (Devotional Path)',
      description: 'The path of love and devotion to the divine',
      practices: [
        'Kirtan (devotional singing)',
        'Prayer and worship',
        'Service to others',
        'Divine love meditation',
        'Surrender to God'
      ],
      benefits: ['Divine Love', 'Emotional Purification', 'Spiritual Joy', 'Compassion', 'God-Realization']
    },
    {
      title: 'Jnana Yoga (Path of Knowledge)',
      description: 'The path of wisdom and intellectual inquiry',
      practices: [
        'Study of scriptures',
        'Self-inquiry meditation',
        'Philosophical contemplation',
        'Discrimination practice',
        'Truth realization'
      ],
      benefits: ['Wisdom', 'Intellectual Clarity', 'Truth Understanding', 'Self-Knowledge', 'Liberation']
    },
    {
      title: 'Karma Yoga (Path of Action)',
      description: 'The path of selfless service and action',
      practices: [
        'Selfless service',
        'Detached action',
        'Duty fulfillment',
        'Work as worship',
        'Action meditation'
      ],
      benefits: ['Selflessness', 'Karma Purification', 'Spiritual Growth', 'Service Attitude', 'Divine Grace']
    }
  ]

  const traditionalTechniques = [
    {
      title: 'Preparatory Practices',
      description: 'Essential preparations for Hindu meditation',
      steps: [
        'Purification through asana (postures)',
        'Pranayama for energy balance',
        'Pratyahara (withdrawal of senses)',
        'Dharana (concentration)',
        'Setting spiritual intention'
      ]
    },
    {
      title: 'Meditation Postures',
      description: 'Traditional sitting positions for meditation',
      positions: [
        'Padmasana (Lotus Pose)',
        'Siddhasana (Perfect Pose)',
        'Sukhasana (Easy Pose)',
        'Vajrasana (Thunderbolt Pose)',
        'Swastikasana (Auspicious Pose)'
      ]
    },
    {
      title: 'Breathing Methods',
      description: 'Pranayama techniques for meditation',
      methods: [
        'Natural breathing awareness',
        'Ujjayi (victorious breath)',
        'Nadi Shodhana (alternate nostril)',
        'Kapalabhati (skull shining)',
        'Bhramari (bee breath)'
      ]
    }
  ]

  const mantraPractices = [
    {
      title: 'Sacred Mantras',
      description: 'Traditional mantras for meditation and spiritual practice',
      mantras: [
        {
          name: 'Om (Aum)',
          description: 'The primordial sound, representing the ultimate reality',
          benefits: 'Universal consciousness, spiritual awakening, inner peace'
        },
        {
          name: 'Gayatri Mantra',
          description: 'Sacred Vedic mantra for wisdom and enlightenment',
          benefits: 'Intellectual clarity, spiritual illumination, divine protection'
        },
        {
          name: 'Mahamrityunjaya Mantra',
          description: 'Mantra for overcoming death and attaining immortality',
          benefits: 'Healing, protection, spiritual transformation, fearlessness'
        },
        {
          name: 'Om Namah Shivaya',
          description: 'Mantra dedicated to Lord Shiva for liberation',
          benefits: 'Purification, transformation, spiritual awakening, liberation'
        }
      ]
    },
    {
      title: 'Personal Mantras',
      description: 'Individual mantras for personal spiritual practice',
      practices: [
        {
          name: 'Guru Mantra',
          description: 'Mantra received from spiritual teacher',
          benefits: 'Spiritual guidance, protection, accelerated progress'
        },
        {
          name: 'Ishta Mantra',
          description: 'Personal deity mantra for devotion',
          benefits: 'Divine connection, personal transformation, spiritual growth'
        },
        {
          name: 'Bija Mantras',
          description: 'Seed mantras for chakra activation',
          benefits: 'Energy awakening, chakra balance, spiritual development'
        }
      ]
    }
  ]

  const advancedPractices = [
    {
      title: 'Kundalini Meditation',
      description: 'Advanced practice for awakening spiritual energy',
      elements: ['Energy Awareness', 'Chakra Activation', 'Kundalini Awakening', 'Spiritual Energy Flow', 'Consciousness Expansion'],
      benefits: ['Spiritual Awakening', 'Energy Mastery', 'Consciousness Evolution', 'Divine Union', 'Transcendence']
    },
    {
      title: 'Tantric Meditation',
      description: 'Esoteric practices for spiritual transformation',
      elements: ['Sacred Geometry', 'Energy Visualization', 'Ritual Practice', 'Consciousness Alchemy', 'Divine Union'],
      benefits: ['Spiritual Power', 'Consciousness Transformation', 'Divine Realization', 'Energy Mastery', 'Liberation']
    },
    {
      title: 'Vedantic Meditation',
      description: 'Philosophical meditation on ultimate reality',
      elements: ['Self-Inquiry', 'Neti Neti (Not This, Not This)', 'Witness Consciousness', 'Non-Dual Awareness', 'Truth Realization'],
      benefits: ['Self-Realization', 'Truth Understanding', 'Liberation', 'Non-Dual Consciousness', 'Ultimate Peace']
    }
  ]

  const contemporaryApplications = [
    {
      title: 'Health and Wellness',
      description: 'Modern applications of Hindu meditation for physical and mental health',
      applications: [
        'Stress reduction through pranayama',
        'Anxiety management with meditation',
        'Physical health through yoga',
        'Mental clarity and focus',
        'Emotional balance and stability'
      ]
    },
    {
      title: 'Spiritual Development',
      description: 'Contemporary approaches to Hindu spiritual practices',
      applications: [
        'Personal spiritual growth',
        'Consciousness expansion',
        'Self-realization journey',
        'Divine connection',
        'Life purpose discovery'
      ]
    },
    {
      title: 'Integration with Modern Life',
      description: 'Adapting traditional practices for contemporary living',
      applications: [
        'Workplace meditation programs',
        'Family spiritual practices',
        'Community meditation groups',
        'Digital meditation tools',
        'Interfaith spiritual dialogue'
      ]
    }
  ]

  const resources = [
    {
      title: 'Classical Texts',
      items: [
        { name: 'Yoga Sutras of Patanjali', author: 'Patanjali', focus: 'Foundation of yoga and meditation' },
        { name: 'Bhagavad Gita', author: 'Krishna', focus: 'Spiritual wisdom and meditation guidance' },
        { name: 'Upanishads', author: 'Various Sages', focus: 'Philosophical meditation teachings' },
        { name: 'Hatha Yoga Pradipika', author: 'Swatmarama', focus: 'Physical and energy practices' }
      ]
    },
    {
      title: 'Modern Books',
      items: [
        { name: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', focus: 'Spiritual journey and practices' },
        { name: 'The Science of Yoga', author: 'Various Authors', focus: 'Scientific approach to yoga meditation' },
        { name: 'Meditation and Its Methods', author: 'Swami Vivekananda', focus: 'Practical meditation guide' },
        { name: 'The Heart of Yoga', author: 'T.K.V. Desikachar', focus: 'Traditional yoga and meditation' }
      ]
    },
    {
      title: 'Online Resources',
      items: [
        { name: 'Yoga Meditation Apps', type: 'Digital Tools', focus: 'Guided meditation and yoga practices' },
        { name: 'Mantra Chanting Videos', type: 'Audio-Visual', focus: 'Traditional mantra recitation' },
        { name: 'Pranayama Tutorials', type: 'Instructional', focus: 'Breathing technique guides' },
        { name: 'Online Yoga Communities', type: 'Social Platforms', focus: 'Virtual practice groups' }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hindu Meditation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the ancient wisdom of Hindu meditation practices including yoga, dhyana, pranayama, 
          and various spiritual techniques for self-realization and divine connection.
        </p>
      </div>

      {/* Meditation Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Core Hindu Meditation Practices
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

      {/* Yogic Paths */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Four Paths of Yoga
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {yogicPaths.map((path, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{path.title}</CardTitle>
                <CardDescription className="text-base">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Practices:</h4>
                    <div className="space-y-1">
                      {path.practices.map((practice, practiceIndex) => (
                        <div key={practiceIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {path.benefits.map((benefit, benefitIndex) => (
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

      {/* Traditional Techniques */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Traditional Techniques and Preparation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {traditionalTechniques.map((technique, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{technique.title}</CardTitle>
                <CardDescription className="text-base">
                  {technique.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {(technique.steps || technique.positions || technique.methods).map((item, itemIndex) => (
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

      {/* Mantra Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Mantra Meditation Practices
        </h2>
        <div className="space-y-8">
          {mantraPractices.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {(category.mantras || category.practices).map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Benefits:</strong> {item.benefits}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Advanced Meditation Practices
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advancedPractices.map((practice, index) => (
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
              Begin Your Hindu Meditation Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're new to Hindu meditation or seeking to deepen your practice, 
              these ancient and contemporary methods offer pathways to spiritual growth and self-realization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/hinduism">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Hinduism
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