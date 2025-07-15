import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Clock, ArrowRight, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Philosophy - Intellectual and Moral Thought',
  description: 'Explore the profound influence of Confucianism on East Asian philosophy, from ethical systems and moral thought to political philosophy and social theory. Discover the philosophical heritage of Confucian thought.',
  keywords: 'Confucian philosophy, East Asian philosophy, ethical systems, moral thought, political philosophy, social theory, intellectual tradition',
  openGraph: {
    title: 'Confucian Philosophy - Intellectual and Moral Thought',
    description: 'Explore the profound influence of Confucianism on East Asian philosophy, from ethical systems and moral thought to political philosophy and social theory.',
    type: 'website',
  },
}

export default function ConfucianismPhilosophyImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Confucian Philosophical Heritage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Ethics, Governance, and Social Harmony in East Asian Thought
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Brain className="w-3 h-3 mr-1" />
              Philosophical Thought
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
              <Brain className="w-5 h-5" />
              Philosophical Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Confucian philosophy has fundamentally shaped East Asian intellectual traditions, 
              providing comprehensive frameworks for ethics, governance, education, and social 
              organization. Its emphasis on moral cultivation, social harmony, and practical 
              wisdom has influenced philosophical thought for over two millennia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The philosophical impact of Confucianism extends beyond religious thought to 
              encompass political theory, social ethics, educational philosophy, and cultural 
              values throughout East Asia.
            </p>
          </CardContent>
        </Card>

        {/* Philosophical Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Ethics & Morality
              </CardTitle>
              <CardDescription>Moral Philosophy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Confucian ethics emphasizes virtue cultivation, moral relationships, and 
                the development of character through self-cultivation and social practice.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Virtue ethics</li>
                <li>• Moral relationships</li>
                <li>• Character cultivation</li>
                <li>• Social harmony</li>
              </ul>
              <Badge variant="outline" className="text-xs">Ethical System</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Political Philosophy
              </CardTitle>
              <CardDescription>Governance Theory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Confucian political thought emphasizes benevolent governance, merit-based 
                leadership, and the moral responsibility of rulers to serve the people.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Benevolent governance</li>
                <li>• Merit-based leadership</li>
                <li>• Moral authority</li>
                <li>• Public service</li>
              </ul>
              <Badge variant="outline" className="text-xs">Political Theory</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Social Philosophy
              </CardTitle>
              <CardDescription>Social Theory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Social philosophy focuses on harmonious relationships, social hierarchy, 
                and the importance of community and family in human flourishing.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Social harmony</li>
                <li>• Family relationships</li>
                <li>• Community values</li>
                <li>• Cultural continuity</li>
              </ul>
              <Badge variant="outline" className="text-xs">Social Theory</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Educational Philosophy
              </CardTitle>
              <CardDescription>Learning Theory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Educational philosophy emphasizes moral cultivation, practical wisdom, 
                and the integration of knowledge with virtuous character development.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Moral education</li>
                <li>• Character development</li>
                <li>• Practical wisdom</li>
                <li>• Lifelong learning</li>
              </ul>
              <Badge variant="outline" className="text-xs">Educational Theory</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Philosophical Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Core Philosophical Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ren (Humaneness)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The fundamental virtue of humaneness, emphasizing compassion, empathy, 
                  and care for others as the foundation of moral character.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Compassion and empathy</li>
                  <li>• Care for others</li>
                  <li>• Moral character</li>
                  <li>• Human dignity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Li (Ritual Propriety)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The importance of proper conduct, social etiquette, and ritual practices 
                  in maintaining social harmony and moral order.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Proper conduct</li>
                  <li>• Social etiquette</li>
                  <li>• Ritual practices</li>
                  <li>• Social harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Xiao (Filial Piety)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Respect and care for parents and elders, serving as the foundation for 
                  all other social relationships and moral behavior.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Respect for elders</li>
                  <li>• Family relationships</li>
                  <li>• Social foundation</li>
                  <li>• Moral behavior</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Zhi (Wisdom)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Practical wisdom and knowledge that is applied for the benefit of 
                  society and the cultivation of moral character.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Practical wisdom</li>
                  <li>• Knowledge application</li>
                  <li>• Social benefit</li>
                  <li>• Moral cultivation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cultural and Intellectual Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">East Asian Philosophy</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Confucian philosophy has shaped intellectual traditions across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Chinese philosophy</li>
                  <li>• Korean thought</li>
                  <li>• Japanese philosophy</li>
                  <li>• Vietnamese intellectual tradition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Applications</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary relevance includes:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Business ethics</li>
                  <li>• Educational reform</li>
                  <li>• Environmental ethics</li>
                  <li>• Intercultural dialogue</li>
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
            <Link href="/religion/confucianism/impact/literature">
              Confucian Literature
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/confucianism/impact/music">
              Confucian Music
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 