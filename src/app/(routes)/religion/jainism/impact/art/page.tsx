import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Palette, BookOpen, Users, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Art - Cultural Expression and Spiritual Aesthetics',
  description: 'Explore the profound influence of Jainism on Indian art, from temple architecture and sculpture to manuscript painting and decorative arts. Discover how Jain values shaped artistic expression.',
  keywords: 'Jain art, Indian art, Jain architecture, Jain sculpture, manuscript painting, temple art, cultural aesthetics, spiritual art',
  openGraph: {
    title: 'Jain Art - Cultural Expression and Spiritual Aesthetics',
    description: 'Explore the profound influence of Jainism on Indian art, from temple architecture and sculpture to manuscript painting and decorative arts.',
    type: 'website',
  },
}

export default function JainismArtImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Art Traditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Spiritual Beauty, Non-Violence, and Cultural Expression in Indian Art
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Palette className="w-3 h-3 mr-1" />
              Spiritual Art
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
              <Palette className="w-5 h-5" />
              Artistic Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jain art reflects the religion's core values of non-violence, truth, and spiritual 
              liberation. From magnificent temple architecture to intricate manuscript paintings, 
              Jain artistic traditions embody both aesthetic beauty and profound spiritual meaning.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The art of Jainism serves as a visual expression of religious principles, creating 
              sacred spaces and objects that inspire devotion and spiritual contemplation.
            </p>
          </CardContent>
        </Card>

        {/* Art Forms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Temple Architecture
              </CardTitle>
              <CardDescription>Sacred Spaces</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain temples are architectural marvels that embody spiritual principles through 
                their design, symbolism, and sacred geometry.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Marble temples</li>
                <li>• Sacred geometry</li>
                <li>• Symbolic design</li>
                <li>• Spiritual atmosphere</li>
              </ul>
              <Badge variant="outline" className="text-xs">Architectural Heritage</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Sculpture
              </CardTitle>
              <CardDescription>Sacred Images</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain sculpture tradition includes images of Tirthankaras, celestial beings, 
                and symbolic representations of spiritual concepts.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Tirthankara images</li>
                <li>• Celestial figures</li>
                <li>• Symbolic motifs</li>
                <li>• Ritual objects</li>
              </ul>
              <Badge variant="outline" className="text-xs">Sacred Sculpture</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Manuscript Painting
              </CardTitle>
              <CardDescription>Sacred Texts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain manuscript painting tradition preserves sacred texts with intricate 
                illustrations that convey spiritual teachings and stories.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Sacred text illustrations</li>
                <li>• Narrative paintings</li>
                <li>• Decorative borders</li>
                <li>• Symbolic imagery</li>
              </ul>
              <Badge variant="outline" className="text-xs">Manuscript Art</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Decorative Arts
              </CardTitle>
              <CardDescription>Cultural Craftsmanship</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jain decorative arts include textiles, metalwork, and ritual objects that 
                combine aesthetic beauty with spiritual significance.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Ritual textiles</li>
                <li>• Metal objects</li>
                <li>• Ceremonial items</li>
                <li>• Cultural artifacts</li>
              </ul>
              <Badge variant="outline" className="text-xs">Traditional Craft</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Artistic Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Jain Artistic Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Non-Violence in Art</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain art reflects the principle of ahimsa through peaceful imagery, 
                  harmonious compositions, and respect for all living beings.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Peaceful imagery</li>
                  <li>• Harmonious design</li>
                  <li>• Respect for life</li>
                  <li>• Compassionate themes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Spiritual Symbolism</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Art serves as a vehicle for spiritual expression and the communication 
                  of religious teachings and values.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Sacred symbols</li>
                  <li>• Religious narratives</li>
                  <li>• Spiritual themes</li>
                  <li>• Devotional expression</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Simplicity and Purity</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain art emphasizes simplicity, purity, and austerity, reflecting 
                  the spiritual values of renunciation and detachment.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Clean lines</li>
                  <li>• Minimal decoration</li>
                  <li>• Pure forms</li>
                  <li>• Austere beauty</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Preservation</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Art preserves cultural traditions and religious heritage, ensuring 
                  their transmission to future generations.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural continuity</li>
                  <li>• Heritage preservation</li>
                  <li>• Traditional techniques</li>
                  <li>• Historical memory</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cultural and Historical Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Indian Art History</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain art has influenced artistic development across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Temple architecture</li>
                  <li>• Sculpture traditions</li>
                  <li>• Painting styles</li>
                  <li>• Decorative arts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Influence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary applications include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural preservation</li>
                  <li>• Museum collections</li>
                  <li>• Artistic inspiration</li>
                  <li>• Heritage tourism</li>
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
            <Link href="/religion/jainism/impact/literature">
              Jain Literature
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