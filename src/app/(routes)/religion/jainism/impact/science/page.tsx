import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calculator, BookOpen, Users, Clock, ArrowRight, Atom } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Science - Ancient Wisdom and Mathematical Contributions',
  description: 'Explore the remarkable scientific contributions of Jain scholars, from ancient mathematics and astronomy to modern physics and medicine. Discover how Jain thought has influenced scientific understanding.',
  keywords: 'Jain science, Indian mathematics, Jain astronomy, ancient Indian science, mathematical contributions, scientific heritage, Jain scholars',
  openGraph: {
    title: 'Jain Science - Ancient Wisdom and Mathematical Contributions',
    description: 'Explore the remarkable scientific contributions of Jain scholars, from ancient mathematics and astronomy to modern physics and medicine.',
    type: 'website',
  },
}

export default function JainismScienceImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Scientific Heritage
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Ancient Wisdom, Mathematical Genius, and Scientific Innovation
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Calculator className="w-3 h-3 mr-1" />
              Mathematics
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              3000+ Years
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-3 h-3 mr-1" />
              Global Impact
            </Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Atom className="w-5 h-5" />
              Scientific Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jain scholars have made extraordinary contributions to science and mathematics, 
              from the development of advanced mathematical concepts to sophisticated 
              astronomical calculations and medical knowledge. These discoveries have 
              fundamentally shaped modern science and continue to influence contemporary research.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The scientific achievements of Jain scholars demonstrate a sophisticated 
              understanding of mathematics, astronomy, medicine, and natural philosophy 
              that was centuries ahead of its time.
            </p>
          </CardContent>
        </Card>

        {/* Scientific Contributions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mathematical Innovations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Infinite Sets</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain mathematicians developed sophisticated concepts of infinity and 
                  infinite sets, predating modern mathematical theory by centuries.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Infinite series</li>
                  <li>• Transfinite numbers</li>
                  <li>• Mathematical infinity</li>
                  <li>• Set theory precursors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Combinatorics</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Advanced combinatorial mathematics for calculating permutations and 
                  combinations in religious and practical contexts.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Permutation theory</li>
                  <li>• Combination calculations</li>
                  <li>• Probability concepts</li>
                  <li>• Statistical methods</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Logarithms</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Early development of logarithmic concepts and mathematical tools for 
                  complex calculations and astronomical computations.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Logarithmic functions</li>
                  <li>• Mathematical tools</li>
                  <li>• Calculation methods</li>
                  <li>• Computational aids</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Algebra and Geometry</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Significant advances in algebra, including solutions to complex equations 
                  and geometric problems.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Algebraic equations</li>
                  <li>• Geometric solutions</li>
                  <li>• Mathematical proofs</li>
                  <li>• Problem-solving methods</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Astronomical Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Astronomical Discoveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Celestial Calculations</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain astronomers developed sophisticated methods for calculating planetary 
                  positions, eclipses, and celestial events with remarkable accuracy.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Planetary motion models</li>
                  <li>• Eclipse predictions</li>
                  <li>• Sidereal time calculations</li>
                  <li>• Astronomical instruments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cosmological Models</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Complex cosmological models that describe the structure of the universe 
                  and the nature of space and time.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Universe structure</li>
                  <li>• Space-time concepts</li>
                  <li>• Cosmic dimensions</li>
                  <li>• Multiverse theories</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Science */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Medical Knowledge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Holistic Medicine</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Medical knowledge that integrates physical health with spiritual and 
                  mental well-being, emphasizing balance and harmony.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Mind-body medicine</li>
                  <li>• Preventive healthcare</li>
                  <li>• Herbal remedies</li>
                  <li>• Spiritual healing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Surgical Techniques</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Advanced surgical procedures and medical techniques that demonstrate 
                  sophisticated understanding of human anatomy and physiology.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Surgical procedures</li>
                  <li>• Anatomical knowledge</li>
                  <li>• Medical instruments</li>
                  <li>• Treatment methods</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modern Influence */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contemporary Scientific Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Computer Science</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain mathematical concepts continue to influence modern computing and 
                  information technology.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Algorithm development</li>
                  <li>• Computational theory</li>
                  <li>• Data structures</li>
                  <li>• Artificial intelligence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Physics and Cosmology</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Ancient Jain concepts of time, space, and matter resonate with modern 
                  physics theories.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Quantum mechanics parallels</li>
                  <li>• Multiverse concepts</li>
                  <li>• Time relativity</li>
                  <li>• Energy conservation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notable Scientists */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Renowned Jain Scientists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ancient Scholars</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Mahavira - Mathematics & Logic</li>
                  <li>• Umaswati - Philosophy & Science</li>
                  <li>• Kundakunda - Metaphysics</li>
                  <li>• Samantabhadra - Logic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Scientists</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Dr. H.C. Arya - Mathematics</li>
                  <li>• Dr. L.C. Jain - Computer Science</li>
                  <li>• Dr. S.C. Jain - Physics</li>
                  <li>• Dr. R.C. Jain - Engineering</li>
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