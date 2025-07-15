import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Clock, ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Literature - Sacred Texts and Literary Tradition',
  description: 'Explore the profound influence of Jainism on Indian literature, from sacred texts and philosophical writings to educational literature and moral narratives. Discover the literary heritage of Jain thought.',
  keywords: 'Jain literature, sacred texts, Indian literature, Jain philosophy, educational texts, moral narratives, literary tradition',
  openGraph: {
    title: 'Jain Literature - Sacred Texts and Literary Tradition',
    description: 'Explore the profound influence of Jainism on Indian literature, from sacred texts and philosophical writings to educational literature and moral narratives.',
    type: 'website',
  },
}

export default function JainismLiteratureImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Literary Tradition
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Sacred Texts, Philosophical Writings, and Cultural Expression
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="w-3 h-3 mr-1" />
              Sacred Literature
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
              <FileText className="w-5 h-5" />
              Literary Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jain literature encompasses a vast tradition of sacred texts, philosophical 
              writings, educational literature, and moral narratives that have shaped Indian 
              culture and intellectual life for over three millennia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These literary works serve not only as religious texts but also as cultural 
              touchstones, educational resources, and expressions of moral and spiritual values.
            </p>
          </CardContent>
        </Card>

        {/* Literary Forms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Sacred Texts
              </CardTitle>
              <CardDescription>Canonical Literature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Agamas and other sacred texts form the foundation of Jain religious 
                and philosophical tradition.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Agama texts</li>
                <li>• Tattvartha Sutra</li>
                <li>• Sacred commentaries</li>
                <li>• Canonical literature</li>
              </ul>
              <Badge variant="outline" className="text-xs">Sacred Canon</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Philosophical Writings
              </CardTitle>
              <CardDescription>Intellectual Tradition</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain philosophical literature explores metaphysics, ethics, and spiritual 
                practices with profound depth and clarity.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Metaphysical treatises</li>
                <li>• Ethical philosophy</li>
                <li>• Spiritual practices</li>
                <li>• Logical systems</li>
              </ul>
              <Badge variant="outline" className="text-xs">Philosophical</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Educational Literature
              </CardTitle>
              <CardDescription>Learning and Teaching</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Educational texts designed to teach moral principles, spiritual practices, 
                and practical wisdom to students of all ages.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Moral instruction</li>
                <li>• Spiritual guidance</li>
                <li>• Practical wisdom</li>
                <li>• Cultural education</li>
              </ul>
              <Badge variant="outline" className="text-xs">Educational</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Narrative Literature
              </CardTitle>
              <CardDescription>Stories and Tales</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Rich narrative traditions including stories of Tirthankaras, moral tales, 
                and cultural narratives that convey spiritual teachings.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Tirthankara stories</li>
                <li>• Moral narratives</li>
                <li>• Cultural tales</li>
                <li>• Devotional stories</li>
              </ul>
              <Badge variant="outline" className="text-xs">Narrative</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Literary Themes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Literary Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Non-Violence and Ahimsa</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literature emphasizes the principle of non-violence as the foundation 
                  of moral and spiritual life.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Ahimsa philosophy</li>
                  <li>• Compassion teachings</li>
                  <li>• Peace narratives</li>
                  <li>• Moral guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Spiritual Liberation</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Texts focus on the path to spiritual liberation through right knowledge, 
                  right faith, and right conduct.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Liberation path</li>
                  <li>• Spiritual practices</li>
                  <li>• Karma doctrine</li>
                  <li>• Soul purification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ethical Conduct</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literature provides comprehensive guidance on ethical behavior and 
                  moral development.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Moral principles</li>
                  <li>• Ethical behavior</li>
                  <li>• Character development</li>
                  <li>• Social responsibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Knowledge and Wisdom</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Emphasis on the acquisition of knowledge and wisdom as essential 
                  for spiritual progress.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Knowledge acquisition</li>
                  <li>• Wisdom cultivation</li>
                  <li>• Intellectual development</li>
                  <li>• Learning traditions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cultural and Educational Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Indian Literature</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain literature has influenced literary development across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Sanskrit literature</li>
                  <li>• Prakrit texts</li>
                  <li>• Regional languages</li>
                  <li>• Modern literature</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Educational Systems</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Impact on educational practices includes:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Moral education</li>
                  <li>• Philosophical training</li>
                  <li>• Cultural literacy</li>
                  <li>• Spiritual instruction</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/religion/jainism/impact">
              ← Back to Jain Impact
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/impact/art">
              Jain Art
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/impact/music">
              Jain Music
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/impact/science">
              Jain Science
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 