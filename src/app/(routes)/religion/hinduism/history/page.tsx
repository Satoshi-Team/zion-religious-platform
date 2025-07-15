import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, BookOpen, Users, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'History of Hinduism - Ancient to Modern Development',
  description: 'Explore the rich history of Hinduism from its ancient Vedic origins through classical periods, medieval developments, and modern transformations. Discover key historical events, figures, and cultural influences.',
  keywords: 'Hinduism history, Vedic period, classical Hinduism, medieval Hinduism, modern Hinduism, Hindu civilization, Indian history, religious history',
  openGraph: {
    title: 'History of Hinduism - Ancient to Modern Development',
    description: 'Explore the rich history of Hinduism from its ancient Vedic origins through classical periods, medieval developments, and modern transformations.',
    type: 'website',
  },
}

export default function HinduismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            History of Hinduism
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            From Ancient Vedic Traditions to Modern Global Faith
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              5000+ Years
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              Indian Subcontinent
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-3 h-3 mr-1" />
              1.2+ Billion Followers
            </Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Historical Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hinduism, the world's oldest living religion, has evolved over more than 5,000 years through 
              multiple historical periods, each contributing to its rich tapestry of beliefs, practices, and 
              cultural expressions. From the ancient Vedic traditions to modern global Hinduism, the faith 
              has continuously adapted while maintaining its core spiritual principles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The history of Hinduism is deeply intertwined with the cultural, social, and political 
              developments of the Indian subcontinent, reflecting the dynamic nature of religious evolution 
              and the human quest for spiritual understanding.
            </p>
          </CardContent>
        </Card>

        {/* Historical Periods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Early Hinduism
              </CardTitle>
              <CardDescription>1500 BCE - 500 CE</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The formative period of Hinduism, beginning with the Vedic civilization and the composition 
                of sacred texts that would become the foundation of Hindu thought and practice.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Vedic Period and Sanskrit literature</li>
                <li>• Development of ritual practices</li>
                <li>• Emergence of philosophical schools</li>
                <li>• Formation of social structures</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/hinduism/history/early-hinduism">
                  Explore Early Period
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Medieval Hinduism
              </CardTitle>
              <CardDescription>500 CE - 1500 CE</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A period of great intellectual and spiritual flowering, marked by the development of 
                bhakti movements, temple architecture, and the consolidation of Hindu philosophical systems.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Bhakti and devotional movements</li>
                <li>• Temple building and art</li>
                <li>• Philosophical synthesis</li>
                <li>• Regional variations</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/hinduism/history/medieval">
                  Explore Medieval Period
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Modern Hinduism
              </CardTitle>
              <CardDescription>1500 CE - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The contemporary period of Hinduism, characterized by reform movements, global spread, 
                and adaptation to modern challenges while preserving traditional wisdom.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Reform and revival movements</li>
                <li>• Global diaspora</li>
                <li>• Modern interpretations</li>
                <li>• Interfaith dialogue</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/hinduism/history/modern">
                  Explore Modern Period
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Cultural Impact
              </CardTitle>
              <CardDescription>Art, Literature, Philosophy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hinduism's profound influence on world culture, from classical arts and literature to 
                modern philosophy, science, and global spirituality.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Classical arts and architecture</li>
                <li>• Literary traditions</li>
                <li>• Philosophical contributions</li>
                <li>• Global cultural exchange</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/hinduism/impact">
                  Explore Cultural Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Key Historical Themes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Historical Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Continuity and Change</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hinduism's remarkable ability to maintain core spiritual principles while adapting to 
                  changing historical circumstances, demonstrating both resilience and flexibility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Diversity and Unity</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The historical development of multiple traditions, schools, and practices within the 
                  broader framework of Hindu thought and spirituality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Integration</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  How Hinduism has influenced and been influenced by various cultural, social, and 
                  political developments throughout Indian and world history.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Global Expansion</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  The modern spread of Hinduism beyond the Indian subcontinent and its adaptation to 
                  diverse cultural contexts worldwide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/religion/hinduism">
              ← Back to Hinduism
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/overview">
              Hinduism Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/scriptures">
              Sacred Texts
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/practices">
              Practices & Rituals
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 