import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calculator, Users, Clock, ArrowRight, Atom } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Science - Knowledge and Intellectual Development',
  description: 'Explore the influence of Confucianism on East Asian science, education, and intellectual development. Discover how Confucian values shaped scientific inquiry and knowledge systems.',
  keywords: 'Confucian science, East Asian science, educational systems, knowledge development, intellectual tradition, scholarly pursuits',
  openGraph: {
    title: 'Confucian Science - Knowledge and Intellectual Development',
    description: 'Explore the influence of Confucianism on East Asian science, education, and intellectual development.',
    type: 'website',
  },
}

export default function ConfucianismScienceImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Confucian Scientific Heritage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Knowledge, Education, and Intellectual Development in East Asia
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Calculator className="w-3 h-3 mr-1" />
              Knowledge Systems
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
              <Atom className="w-5 h-5" />
              Intellectual Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Confucianism has profoundly influenced the development of science, education, and 
              knowledge systems in East Asia. The emphasis on learning, scholarship, and moral 
              cultivation has created distinctive approaches to scientific inquiry and intellectual 
              development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Confucian values have shaped educational systems, scientific methodology, and the 
              integration of moral principles with intellectual pursuits throughout East Asian history.
            </p>
          </CardContent>
        </Card>

        {/* Scientific Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Educational Systems
              </CardTitle>
              <CardDescription>Learning and Scholarship</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Confucian emphasis on education has created sophisticated systems of learning 
                that combine moral cultivation with intellectual development.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Civil service examinations</li>
                <li>• Classical education</li>
                <li>• Moral instruction</li>
                <li>• Scholarly meritocracy</li>
              </ul>
              <Badge variant="outline" className="text-xs">Educational</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Astronomy
              </CardTitle>
              <CardDescription>Celestial Knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Astronomical observations and calculations for agricultural planning, calendar 
                development, and understanding cosmic order.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Calendar systems</li>
                <li>• Agricultural timing</li>
                <li>• Celestial observations</li>
                <li>• Cosmic harmony</li>
              </ul>
              <Badge variant="outline" className="text-xs">Astronomical</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Medicine
              </CardTitle>
              <CardDescription>Health and Healing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Medical knowledge that integrates physical health with moral and spiritual 
                well-being, emphasizing balance and harmony.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Holistic health</li>
                <li>• Herbal medicine</li>
                <li>• Preventive care</li>
                <li>• Mind-body balance</li>
              </ul>
              <Badge variant="outline" className="text-xs">Medical</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Agriculture
              </CardTitle>
              <CardDescription>Agricultural Science</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Agricultural knowledge and techniques that reflect harmony with nature and 
                sustainable practices for food production.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Sustainable farming</li>
                <li>• Seasonal cycles</li>
                <li>• Natural harmony</li>
                <li>• Community cooperation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Agricultural</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Scientific Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Confucian Scientific Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Harmony with Nature</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Scientific inquiry should respect natural order and seek harmony with the 
                  environment rather than domination.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Environmental respect</li>
                  <li>• Natural balance</li>
                  <li>• Sustainable practices</li>
                  <li>• Ecological harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Moral Integration</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Scientific knowledge should be integrated with moral principles and used 
                  for the benefit of society.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Ethical applications</li>
                  <li>• Social benefit</li>
                  <li>• Moral responsibility</li>
                  <li>• Human welfare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Practical Wisdom</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Knowledge should be practical and applicable to daily life, serving both 
                  individual and community needs.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Practical applications</li>
                  <li>• Daily utility</li>
                  <li>• Community service</li>
                  <li>• Life improvement</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Continuous Learning</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Scientific inquiry is a lifelong process of learning and self-improvement, 
                  requiring dedication and humility.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Lifelong learning</li>
                  <li>• Intellectual humility</li>
                  <li>• Continuous improvement</li>
                  <li>• Scholarly dedication</li>
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
                  Confucian influence on education across East Asia:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Merit-based education</li>
                  <li>• Classical curriculum</li>
                  <li>• Moral instruction</li>
                  <li>• Scholarly tradition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Scientific Development</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contributions to scientific knowledge include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Agricultural science</li>
                  <li>• Medical knowledge</li>
                  <li>• Astronomical observations</li>
                  <li>• Environmental wisdom</li>
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