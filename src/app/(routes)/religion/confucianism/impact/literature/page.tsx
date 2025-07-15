import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Clock, ArrowRight, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Literature - Classical Texts and Literary Tradition',
  description: 'Explore the profound influence of Confucianism on East Asian literature, from classical texts and poetry to educational writings and moral narratives. Discover the literary heritage of Confucian thought.',
  keywords: 'Confucian literature, classical texts, East Asian literature, Chinese poetry, educational texts, moral narratives, literary tradition',
  openGraph: {
    title: 'Confucian Literature - Classical Texts and Literary Tradition',
    description: 'Explore the profound influence of Confucianism on East Asian literature, from classical texts and poetry to educational writings and moral narratives.',
    type: 'website',
  },
}

export default function ConfucianismLiteratureImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Confucian Literary Tradition
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Classical Texts, Moral Education, and Cultural Expression
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <BookOpen className="w-3 h-3 mr-1" />
              Classical Literature
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              2500+ Years
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-3 h-3 mr-1" />
              East Asian Influence
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
              Confucian literature encompasses a vast tradition of classical texts, poetry, 
              educational writings, and moral narratives that have shaped East Asian culture 
              and intellectual life for over two millennia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These literary works serve not only as philosophical texts but also as cultural 
              touchstones, educational resources, and expressions of moral and social values.
            </p>
          </CardContent>
        </Card>

        {/* Literary Forms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Classical Texts
              </CardTitle>
              <CardDescription>Sacred Writings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The foundational texts of Confucianism, including the Four Books and Five Classics, 
                form the core of East Asian literary and philosophical tradition.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Analects of Confucius</li>
                <li>• Mencius</li>
                <li>• Great Learning</li>
                <li>• Doctrine of the Mean</li>
              </ul>
              <Badge variant="outline" className="text-xs">Sacred Texts</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Poetry
              </CardTitle>
              <CardDescription>Literary Expression</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Confucian poetry emphasizes moral themes, social harmony, and personal cultivation, 
                using elegant language to convey ethical principles.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Shi poetry</li>
                <li>• Moral themes</li>
                <li>• Nature symbolism</li>
                <li>• Social commentary</li>
              </ul>
              <Badge variant="outline" className="text-xs">Cultural Poetry</Badge>
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
                Educational texts designed to teach moral principles, social values, and 
                practical wisdom to students of all ages.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Children's primers</li>
                <li>• Moral instruction</li>
                <li>• Social etiquette</li>
                <li>• Practical wisdom</li>
              </ul>
              <Badge variant="outline" className="text-xs">Educational</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Historical Literature
              </CardTitle>
              <CardDescription>Cultural Memory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Historical writings that preserve cultural memory, moral lessons, and 
                examples of virtuous behavior from the past.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Historical records</li>
                <li>• Biographical accounts</li>
                <li>• Moral exemplars</li>
                <li>• Cultural preservation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Historical</Badge>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Moral Cultivation</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literature serves as a vehicle for moral education and character development, 
                  teaching virtues and ethical behavior.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Virtue development</li>
                  <li>• Character formation</li>
                  <li>• Ethical behavior</li>
                  <li>• Self-improvement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Social Harmony</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literary works emphasize the importance of harmonious relationships and 
                  social order in creating a stable society.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Family relationships</li>
                  <li>• Social hierarchy</li>
                  <li>• Community values</li>
                  <li>• Cultural harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Educational Value</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literature is designed to educate and enlighten, providing practical wisdom 
                  and knowledge for daily life.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Practical wisdom</li>
                  <li>• Life lessons</li>
                  <li>• Cultural knowledge</li>
                  <li>• Intellectual development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Preservation</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Literary works preserve cultural traditions, values, and historical memory 
                  for future generations.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural memory</li>
                  <li>• Traditional values</li>
                  <li>• Historical lessons</li>
                  <li>• Cultural continuity</li>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Educational Systems</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Confucian literature has shaped educational practices across East Asia:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Classical education</li>
                  <li>• Civil service examinations</li>
                  <li>• Moral instruction</li>
                  <li>• Cultural literacy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Literary Traditions</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Influence on literary development includes:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Chinese literary forms</li>
                  <li>• Korean literature</li>
                  <li>• Japanese writing</li>
                  <li>• Vietnamese texts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/religion/confucianism/impact">
              ← Back to Confucian Impact
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/confucianism/impact/art">
              Confucian Art
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/confucianism/impact/music">
              Confucian Music
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/confucianism/impact/science">
              Confucian Science
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 