import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calculator, BookOpen, Users, Clock, ArrowRight, Atom } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hindu Science - Ancient Wisdom and Modern Discoveries',
  description: 'Explore the remarkable scientific contributions of Hindu civilization, from ancient mathematics and astronomy to modern physics and medicine. Discover how Hindu thought has influenced scientific understanding.',
  keywords: 'Hindu science, Indian mathematics, Vedic astronomy, Ayurveda, zero concept, decimal system, ancient Indian science, scientific heritage',
  openGraph: {
    title: 'Hindu Science - Ancient Wisdom and Modern Discoveries',
    description: 'Explore the remarkable scientific contributions of Hindu civilization, from ancient mathematics and astronomy to modern physics and medicine.',
    type: 'website',
  },
}

export default function HinduismScienceImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hindu Scientific Heritage
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
              Hindu civilization has made extraordinary contributions to science and mathematics, from 
              the invention of zero and the decimal system to advanced astronomical calculations and 
              medical knowledge. These discoveries have fundamentally shaped modern science and continue 
              to influence contemporary research.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The scientific achievements of Hindu scholars demonstrate a sophisticated understanding 
              of mathematics, astronomy, medicine, and natural philosophy that was centuries ahead of 
              its time.
            </p>
          </CardContent>
        </Card>

        {/* Mathematical Contributions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mathematical Innovations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Concept of Zero</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  One of the most revolutionary mathematical discoveries, the concept of zero as both 
                  a placeholder and a number was developed in ancient India around 500 CE.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Brahmagupta's mathematical rules</li>
                  <li>• Place value system</li>
                  <li>• Algebraic operations</li>
                  <li>• Foundation for modern computing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Decimal System</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The decimal number system, now used worldwide, was developed in India and spread 
                  through mathematical texts and trade routes.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Base-10 number system</li>
                  <li>• Positional notation</li>
                  <li>• Efficient calculations</li>
                  <li>• Global adoption</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Algebra and Trigonometry</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Ancient Indian mathematicians made significant advances in algebra, including 
                  solutions to quadratic equations and trigonometric functions.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Quadratic equations</li>
                  <li>• Trigonometric ratios</li>
                  <li>• Infinite series</li>
                  <li>• Calculus precursors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Fibonacci Sequence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The famous Fibonacci sequence was known to Indian mathematicians centuries before 
                  Fibonacci, appearing in Sanskrit poetry and mathematical texts.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Sanskrit poetry patterns</li>
                  <li>• Natural growth patterns</li>
                  <li>• Golden ratio connections</li>
                  <li>• Mathematical beauty</li>
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
                  Hindu astronomers developed sophisticated methods for calculating planetary positions, 
                  eclipses, and celestial events with remarkable accuracy.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Planetary motion models</li>
                  <li>• Eclipse predictions</li>
                  <li>• Sidereal time calculations</li>
                  <li>• Astronomical instruments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Heliocentric Theory</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Ancient Indian texts contain references to heliocentric models of the solar system, 
                  predating Copernicus by centuries.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Aryabhata's calculations</li>
                  <li>• Solar system models</li>
                  <li>• Earth's rotation</li>
                  <li>• Gravitational concepts</li>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ayurveda</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  The ancient system of medicine that emphasizes holistic health, natural remedies, 
                  and the balance of body, mind, and spirit.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Herbal medicine</li>
                  <li>• Body constitution types</li>
                  <li>• Preventive healthcare</li>
                  <li>• Mind-body connection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Surgical Techniques</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Ancient Indian surgeons developed sophisticated surgical procedures, including 
                  plastic surgery and cataract removal.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Rhinoplasty techniques</li>
                  <li>• Cataract surgery</li>
                  <li>• Surgical instruments</li>
                  <li>• Anesthesia methods</li>
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
                  Hindu mathematical concepts continue to influence modern computing and information 
                  technology.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Binary number system</li>
                  <li>• Algorithm development</li>
                  <li>• Cryptography</li>
                  <li>• Artificial intelligence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Physics and Cosmology</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Ancient Hindu concepts of time, space, and matter resonate with modern physics 
                  theories.
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
            <CardTitle>Renowned Hindu Scientists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ancient Scholars</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Aryabhata - Mathematics & Astronomy</li>
                  <li>• Brahmagupta - Algebra & Zero</li>
                  <li>• Bhaskara II - Calculus & Trigonometry</li>
                  <li>• Charaka - Medicine & Ayurveda</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Scientists</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• C.V. Raman - Physics Nobel Laureate</li>
                  <li>• Subrahmanyan Chandrasekhar - Astrophysics</li>
                  <li>• Har Gobind Khorana - Biochemistry</li>
                  <li>• Venkatraman Ramakrishnan - Structural Biology</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/impact">
              ← Back to Hindu Impact
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/impact/art">
              Hindu Art
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/impact/literature">
              Hindu Literature
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/religion/hinduism/impact/music">
              Hindu Music
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 