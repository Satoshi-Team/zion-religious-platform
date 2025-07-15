import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, Brain, Leaf, Mountain, Eye } from 'lucide-react'
import Link from 'next/link'

interface MeditationStudiesPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: MeditationStudiesPageProps): Promise<Metadata> {
  
  return {
    title: 'Meditation Studies - Comprehensive Learning Resources | Sacred Texts',
    description: 'Explore meditation traditions, techniques, and academic research through comprehensive study guides, scientific studies, and practical resources.',
    keywords: 'meditation studies, mindfulness, Buddhist meditation, Hindu meditation, Christian meditation, Islamic meditation, meditation research, meditation techniques, meditation science, contemplative practices',
    openGraph: {
      title: 'Meditation Studies - Comprehensive Learning Resources',
      description: 'Explore meditation traditions, techniques, and academic research through comprehensive study guides and scientific resources.',
      type: 'website',
    },
  }
}

export default async function MeditationStudiesPage({ params }: MeditationStudiesPageProps) {

  const meditationTraditions = [
    {
      title: 'Buddhist Meditation',
      description: 'Mindfulness, concentration, and insight meditation practices from various Buddhist traditions',
      icon: Brain,
      techniques: ['Vipassana (Insight)', 'Samatha (Concentration)', 'Metta (Loving-kindness)', 'Zen Meditation', 'Tibetan Practices'],
      color: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      title: 'Hindu Meditation',
      description: 'Yogic meditation practices including Raja Yoga, Jnana Yoga, and Bhakti Yoga',
      icon: Leaf,
      techniques: ['Raja Yoga', 'Jnana Yoga', 'Bhakti Yoga', 'Karma Yoga', 'Kundalini Meditation'],
      color: 'bg-red-50 dark:bg-red-950'
    },
    {
      title: 'Christian Meditation',
      description: 'Contemplative prayer, lectio divina, and mystical practices from Christian traditions',
      icon: Heart,
      techniques: ['Contemplative Prayer', 'Lectio Divina', 'Centering Prayer', 'Ignatian Exercises', 'Desert Fathers'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Islamic Meditation',
      description: 'Dhikr (remembrance), Muraqaba (contemplation), and Sufi meditation practices',
      icon: Eye,
      techniques: ['Dhikr (Remembrance)', 'Muraqaba (Contemplation)', 'Sufi Practices', 'Tasawwuf', 'Islamic Mindfulness'],
      color: 'bg-green-50 dark:bg-green-950'
    }
  ]

  const studyAreas = [
    {
      title: 'Scientific Research',
      description: 'Neuroscientific studies on meditation effects on brain structure and function',
      topics: ['Brain Plasticity', 'Stress Reduction', 'Cognitive Enhancement', 'Emotional Regulation', 'Neuroimaging Studies'],
      research: ['Harvard Medical School', 'UCLA Mindful Awareness Research Center', 'Max Planck Institute', 'Stanford Center for Compassion']
    },
    {
      title: 'Historical Development',
      description: 'Evolution of meditation practices across cultures and time periods',
      topics: ['Ancient Origins', 'Cross-cultural Exchange', 'Modern Adaptations', 'Secular Applications', 'Contemporary Research'],
      research: ['Archaeological Evidence', 'Textual Analysis', 'Anthropological Studies', 'Comparative Religion']
    },
    {
      title: 'Psychological Effects',
      description: 'Impact of meditation on mental health, well-being, and psychological functioning',
      topics: ['Stress Management', 'Anxiety Reduction', 'Depression Treatment', 'Attention Enhancement', 'Emotional Intelligence'],
      research: ['Clinical Trials', 'Meta-analyses', 'Longitudinal Studies', 'Randomized Controlled Trials']
    },
    {
      title: 'Philosophical Foundations',
      description: 'Theoretical frameworks and philosophical underpinnings of meditation practices',
      topics: ['Consciousness Studies', 'Mind-Body Philosophy', 'Ethics and Values', 'Spiritual Development', 'Existential Questions'],
      research: ['Philosophical Analysis', 'Comparative Studies', 'Phenomenological Research', 'Ethical Inquiry']
    }
  ]

  const academicPrograms = [
    {
      title: 'Graduate Programs',
      items: [
        { name: 'Naropa University', location: 'Boulder, Colorado', program: 'Contemplative Psychology MA' },
        { name: 'University of California', location: 'San Diego, California', program: 'Mindfulness Studies Certificate' },
        { name: 'University of Oxford', location: 'Oxford, UK', program: 'Mindfulness-Based Cognitive Therapy' },
        { name: 'Mahidol University', location: 'Bangkok, Thailand', program: 'Buddhist Studies with Meditation' }
      ]
    },
    {
      title: 'Research Centers',
      items: [
        { name: 'Mind & Life Institute', location: 'Charlottesville, Virginia', focus: 'Contemplative Science Research' },
        { name: 'UCLA Mindful Awareness Research Center', location: 'Los Angeles, California', focus: 'Mindfulness Research' },
        { name: 'Center for Contemplative Mind in Society', location: 'Amherst, Massachusetts', focus: 'Contemplative Education' },
        { name: 'Max Planck Institute', location: 'Leipzig, Germany', focus: 'Neuroscience of Meditation' }
      ]
    },
    {
      title: 'Online Learning',
      items: [
        { name: 'Coursera', type: 'Online Platform', course: 'Buddhism and Modern Psychology' },
        { name: 'edX', type: 'Online Platform', course: 'Mindfulness and Well-being' },
        { name: 'Insight Timer', type: 'App Platform', course: 'Meditation Teacher Training' },
        { name: 'Mindful Schools', type: 'Educational Organization', course: 'Mindfulness in Education' }
      ]
    }
  ]

  const recommendedBooks = [
    {
      title: 'The Science of Meditation: How to Change Your Brain, Mind and Body',
      author: 'Daniel Goleman and Richard Davidson',
      description: 'Comprehensive overview of scientific research on meditation effects'
    },
    {
      title: 'Mindfulness: A Practical Guide to Awakening',
      author: 'Joseph Goldstein',
      description: 'In-depth exploration of Buddhist mindfulness practices'
    },
    {
      title: 'The Mind Illuminated: A Complete Meditation Guide',
      author: 'Culadasa (John Yates)',
      description: 'Comprehensive guide to meditation from a scientific perspective'
    },
    {
      title: 'Contemplative Practices in Higher Education',
      author: 'Daniel P. Barbezat and Mirabai Bush',
      description: 'Academic integration of meditation in educational settings'
    }
  ]

  const researchTopics = [
    {
      category: 'Neuroscience',
      studies: [
        'Meditation and brain plasticity',
        'Default mode network changes',
        'Attention and concentration effects',
        'Emotional regulation mechanisms',
        'Stress response modification'
      ]
    },
    {
      category: 'Psychology',
      studies: [
        'Anxiety and depression treatment',
        'Cognitive enhancement',
        'Emotional intelligence development',
        'Resilience building',
        'Well-being improvement'
      ]
    },
    {
      category: 'Medicine',
      studies: [
        'Pain management',
        'Immune system effects',
        'Cardiovascular health',
        'Sleep improvement',
        'Chronic disease management'
      ]
    },
    {
      category: 'Education',
      studies: [
        'Academic performance',
        'Attention and focus',
        'Social-emotional learning',
        'Teacher well-being',
        'Classroom management'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Meditation Studies
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive academic resources for studying meditation traditions, techniques, and scientific research. 
          Explore the intersection of ancient wisdom and modern science in contemplative practices.
        </p>
      </div>

      {/* Meditation Traditions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Meditation Traditions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {meditationTraditions.map((tradition, index) => (
            <Card key={index} className={`${tradition.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <tradition.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{tradition.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {tradition.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tradition.techniques.map((technique, techniqueIndex) => (
                    <div key={techniqueIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{technique}</span>
                    </div>
                  ))}
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Institutions:</h4>
                    <div className="space-y-1">
                      {area.research.map((institution, instIndex) => (
                        <div key={instIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{institution}</span>
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

      {/* Academic Programs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic Programs & Research Centers
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
                            {item.program || item.focus || item.course}
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

      {/* Research Topics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Current Research Topics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {researchTopics.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.studies.map((study, studyIndex) => (
                    <div key={studyIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{study}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
              Begin Your Meditation Studies Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're interested in the scientific research, historical development, or practical applications 
              of meditation, these resources provide comprehensive academic and experiential learning opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/resources">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Resources
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/studies">
                  <Globe className="mr-2 h-5 w-5" />
                  All Study Areas
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 