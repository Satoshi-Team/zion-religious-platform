import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Clock, ArrowRight, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Philosophy - Intellectual and Ethical Thought',
  description: 'Explore the profound influence of Jainism on Indian philosophy, from metaphysics and ethics to logic and epistemology. Discover the philosophical heritage of Jain thought.',
  keywords: 'Jain philosophy, Indian philosophy, metaphysics, ethics, logic, epistemology, philosophical thought, non-violence',
  openGraph: {
    title: 'Jain Philosophy - Intellectual and Ethical Thought',
    description: 'Explore the profound influence of Jainism on Indian philosophy, from metaphysics and ethics to logic and epistemology.',
    type: 'website',
  },
}

export default function JainismPhilosophyImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Philosophical Heritage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Metaphysics, Ethics, and Logic in Indian Philosophical Thought
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Brain className="w-3 h-3 mr-1" />
              Philosophical Thought
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
              <Brain className="w-5 h-5" />
              Philosophical Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jain philosophy has fundamentally shaped Indian intellectual traditions, 
              providing comprehensive frameworks for metaphysics, ethics, logic, and 
              epistemology. Its emphasis on non-violence, truth, and spiritual liberation 
              has influenced philosophical thought for over three millennia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The philosophical impact of Jainism extends beyond religious thought to 
              encompass logic, ethics, metaphysics, and epistemology throughout Indian 
              and world philosophy.
            </p>
          </CardContent>
        </Card>

        {/* Philosophical Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Metaphysics
              </CardTitle>
              <CardDescription>Nature of Reality</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain metaphysics explores the nature of reality, consciousness, and 
                the fundamental structure of the universe through sophisticated analysis.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Substance theory</li>
                <li>• Consciousness analysis</li>
                <li>• Reality structure</li>
                <li>• Ontological frameworks</li>
              </ul>
              <Badge variant="outline" className="text-xs">Metaphysical</Badge>
            </CardContent>
          </Card>

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
                Jain ethics emphasizes non-violence, truth, and spiritual development 
                as the foundation of moral life and social harmony.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Ahimsa principle</li>
                <li>• Truth and honesty</li>
                <li>• Moral virtues</li>
                <li>• Social ethics</li>
              </ul>
              <Badge variant="outline" className="text-xs">Ethical System</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Logic & Epistemology
              </CardTitle>
              <CardDescription>Knowledge Theory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Sophisticated logical systems and epistemological frameworks for 
                understanding knowledge, truth, and valid reasoning.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Logical systems</li>
                <li>• Knowledge theory</li>
                <li>• Valid reasoning</li>
                <li>• Truth criteria</li>
              </ul>
              <Badge variant="outline" className="text-xs">Logical</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Spiritual Philosophy
              </CardTitle>
              <CardDescription>Liberation Theory</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Comprehensive philosophy of spiritual liberation, karma theory, and 
                the path to ultimate freedom and enlightenment.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Liberation theory</li>
                <li>• Karma philosophy</li>
                <li>• Spiritual path</li>
                <li>• Enlightenment</li>
              </ul>
              <Badge variant="outline" className="text-xs">Spiritual</Badge>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Anekantavada (Non-Absolutism)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The principle that reality is complex and can be viewed from multiple 
                  perspectives, promoting tolerance and intellectual humility.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Multiple perspectives</li>
                  <li>• Intellectual tolerance</li>
                  <li>• Relativistic thinking</li>
                  <li>• Humble inquiry</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Syadvada (Conditional Logic)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  A sophisticated logical system that acknowledges the conditional 
                  nature of truth and knowledge claims.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Conditional truth</li>
                  <li>• Logical frameworks</li>
                  <li>• Knowledge claims</li>
                  <li>• Reasoning methods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ahimsa (Non-Violence)</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The fundamental principle of non-violence that extends beyond physical 
                  harm to include mental and spiritual violence.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Physical non-violence</li>
                  <li>• Mental peace</li>
                  <li>• Spiritual harmony</li>
                  <li>• Universal compassion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Karma Theory</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Sophisticated understanding of cause and effect, moral responsibility, 
                  and the mechanics of spiritual progress.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cause and effect</li>
                  <li>• Moral responsibility</li>
                  <li>• Spiritual progress</li>
                  <li>• Liberation path</li>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Indian Philosophy</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain philosophy has shaped intellectual traditions across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Indian philosophical schools</li>
                  <li>• Logical traditions</li>
                  <li>• Ethical systems</li>
                  <li>• Spiritual thought</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Applications</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary relevance includes:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Environmental ethics</li>
                  <li>• Peace studies</li>
                  <li>• Interfaith dialogue</li>
                  <li>• Global philosophy</li>
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
            <Link href="/religion/jainism/impact/literature">
              Jain Literature
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/jainism/impact/music">
              Jain Music
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 