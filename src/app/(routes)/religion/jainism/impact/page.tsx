import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Clock, ArrowRight, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Cultural Impact - Art, Philosophy, and Social Influence',
  description: 'Explore the profound impact of Jainism on Indian culture, art, literature, philosophy, and social values. Discover how Jain principles have shaped societies for over 3,000 years.',
  keywords: 'Jain impact, Indian culture, Jain art, Jain philosophy, social values, cultural influence, non-violence, ahimsa',
  openGraph: {
    title: 'Jain Cultural Impact - Art, Philosophy, and Social Influence',
    description: 'Explore the profound impact of Jainism on Indian culture, art, literature, philosophy, and social values.',
    type: 'website',
  },
}

export default function JainismImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Cultural Impact
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Shaping Indian Civilization Through Non-Violence and Wisdom
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="w-3 h-3 mr-1" />
              Cultural Heritage
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              3000+ Years
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-3 h-3 mr-1" />
              Indian Influence
            </Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Cultural Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jainism has profoundly shaped Indian civilization, influencing art, architecture, 
              literature, philosophy, and social values for over three millennia. Its emphasis 
              on non-violence (ahimsa), truth, and spiritual liberation has created distinctive 
              cultural patterns that continue to resonate in modern society.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The Jain impact extends beyond religion to encompass philosophy, education, 
              social reform, and cultural expression, making it one of the most influential 
              cultural forces in Indian history.
            </p>
          </CardContent>
        </Card>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Art & Architecture
              </CardTitle>
              <CardDescription>Cultural Expression</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain art and architecture reflect spiritual values, with intricate temple 
                designs, sculpture, and painting traditions that embody religious principles.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Temple architecture</li>
                <li>• Sculpture traditions</li>
                <li>• Manuscript painting</li>
                <li>• Cultural aesthetics</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/jainism/impact/art">
                  Explore Art Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Literature & Philosophy
              </CardTitle>
              <CardDescription>Intellectual Tradition</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain literature and philosophical traditions have shaped intellectual discourse, 
                educational practices, and moral thought throughout Indian history.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Sacred texts</li>
                <li>• Philosophical treatises</li>
                <li>• Educational literature</li>
                <li>• Moral narratives</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/jainism/impact/literature">
                  Explore Literature Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Music & Performance
              </CardTitle>
              <CardDescription>Cultural Harmony</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain musical traditions and performance arts reflect spiritual themes and 
                cultural values, contributing to India's rich artistic heritage.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Devotional music</li>
                <li>• Ritual performances</li>
                <li>• Cultural ceremonies</li>
                <li>• Spiritual expression</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/jainism/impact/music">
                  Explore Music Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Science & Knowledge
              </CardTitle>
              <CardDescription>Intellectual Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain scholars have made significant contributions to mathematics, astronomy, 
                and other sciences, advancing human knowledge and understanding.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Mathematical contributions</li>
                <li>• Astronomical knowledge</li>
                <li>• Scientific methodology</li>
                <li>• Scholarly traditions</li>
              </ul>
              <Button asChild size="sm" className="w-full">
                <Link href="/religion/jainism/impact/science">
                  Explore Science Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Social and Cultural Influence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Non-Violence Movement</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain principles of ahimsa have influenced social reform movements and 
                  political philosophy throughout Indian history.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Gandhi's philosophy</li>
                  <li>• Social reform movements</li>
                  <li>• Political non-violence</li>
                  <li>• Peace movements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Social Values</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain ethics have shaped social attitudes toward compassion, truth, and 
                  respect for all living beings.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Compassion and empathy</li>
                  <li>• Truth and honesty</li>
                  <li>• Environmental respect</li>
                  <li>• Social harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Educational Systems</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain educational institutions have contributed to learning and knowledge 
                  preservation throughout Indian history.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Monastic education</li>
                  <li>• Manuscript preservation</li>
                  <li>• Scholarly traditions</li>
                  <li>• Knowledge transmission</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Values</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Core Jain values continue to shape cultural attitudes and social behavior 
                  in modern Indian society.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Simplicity and austerity</li>
                  <li>• Respect for life</li>
                  <li>• Spiritual seeking</li>
                  <li>• Moral conduct</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Influence */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Global Cultural Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Indian Civilization</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jainism has been a defining force in the cultural development of:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Indian philosophy</li>
                  <li>• Cultural traditions</li>
                  <li>• Social values</li>
                  <li>• Artistic heritage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Relevance</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary applications of Jain principles include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Environmental ethics</li>
                  <li>• Animal rights</li>
                  <li>• Peace movements</li>
                  <li>• Interfaith dialogue</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/religion/jainism">
              ← Back to Jainism
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/overview">
              Jainism Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/scriptures">
              Sacred Texts
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/practices">
              Practices & Rituals
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 