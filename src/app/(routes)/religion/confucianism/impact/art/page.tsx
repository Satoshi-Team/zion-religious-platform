import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Palette, BookOpen, Users, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Art - Cultural Expression and Aesthetic Values',
  description: 'Explore the profound influence of Confucianism on East Asian art, from calligraphy and painting to architecture and decorative arts. Discover how Confucian values shaped artistic expression.',
  keywords: 'Confucian art, East Asian art, Chinese calligraphy, Confucian painting, cultural aesthetics, traditional art, artistic values',
  openGraph: {
    title: 'Confucian Art - Cultural Expression and Aesthetic Values',
    description: 'Explore the profound influence of Confucianism on East Asian art, from calligraphy and painting to architecture and decorative arts.',
    type: 'website',
  },
}

export default function ConfucianismArtImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Confucian Art Traditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Harmony, Balance, and Moral Expression in East Asian Art
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Palette className="w-3 h-3 mr-1" />
              Cultural Art
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
              <Palette className="w-5 h-5" />
              Artistic Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Confucian values have profoundly influenced East Asian art, emphasizing harmony, 
              balance, moral cultivation, and respect for tradition. These principles have shaped 
              artistic expression across calligraphy, painting, architecture, and decorative arts.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Confucian art reflects the philosophy's emphasis on self-cultivation, social harmony, 
              and the integration of moral values with aesthetic beauty.
            </p>
          </CardContent>
        </Card>

        {/* Art Forms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Calligraphy
              </CardTitle>
              <CardDescription>The Art of Writing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Calligraphy is considered the highest form of art in Confucian culture, combining 
                aesthetic beauty with moral cultivation and scholarly achievement.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Brush and ink techniques</li>
                <li>• Character formation</li>
                <li>• Moral expression</li>
                <li>• Scholarly tradition</li>
              </ul>
              <Badge variant="outline" className="text-xs">Cultural Heritage</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Landscape Painting
              </CardTitle>
              <CardDescription>Nature and Harmony</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Landscape painting reflects Confucian values of harmony with nature, moral cultivation, 
                and the search for balance in life.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Mountain and water themes</li>
                <li>• Seasonal representations</li>
                <li>• Philosophical symbolism</li>
                <li>• Meditative qualities</li>
              </ul>
              <Badge variant="outline" className="text-xs">Spiritual Expression</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Architecture
              </CardTitle>
              <CardDescription>Harmonious Design</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Confucian architecture emphasizes balance, hierarchy, and harmony with the natural 
                environment, reflecting social order and moral values.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Temple complexes</li>
                <li>• Courtyard houses</li>
                <li>• Garden design</li>
                <li>• Spatial harmony</li>
              </ul>
              <Badge variant="outline" className="text-xs">Cultural Design</Badge>
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
                Decorative arts in Confucian culture combine aesthetic beauty with moral symbolism, 
                creating objects that serve both practical and spiritual purposes.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Ceramic traditions</li>
                <li>• Textile arts</li>
                <li>• Metalwork</li>
                <li>• Lacquerware</li>
              </ul>
              <Badge variant="outline" className="text-xs">Traditional Craft</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Artistic Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Confucian Artistic Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Harmony and Balance</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Art should reflect the natural harmony and balance found in the universe, 
                  promoting social stability and personal cultivation.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Yin-yang balance</li>
                  <li>• Spatial harmony</li>
                  <li>• Color coordination</li>
                  <li>• Proportion and scale</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Moral Expression</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Art serves as a vehicle for moral education and the expression of virtuous 
                  qualities and ethical values.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Virtue symbolism</li>
                  <li>• Ethical themes</li>
                  <li>• Character cultivation</li>
                  <li>• Social values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Respect for Tradition</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Artistic expression honors traditional forms and techniques while allowing 
                  for individual creativity within established parameters.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Classical forms</li>
                  <li>• Master-apprentice tradition</li>
                  <li>• Cultural continuity</li>
                  <li>• Innovation within tradition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Integration of Arts</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Different art forms work together to create unified cultural expressions 
                  that serve both aesthetic and moral purposes.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Poetry and painting</li>
                  <li>• Calligraphy and literature</li>
                  <li>• Architecture and gardens</li>
                  <li>• Music and performance</li>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">East Asian Art History</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Confucian art principles have shaped artistic development across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Chinese painting traditions</li>
                  <li>• Korean artistic heritage</li>
                  <li>• Japanese aesthetic values</li>
                  <li>• Vietnamese cultural arts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Influence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary applications of Confucian art principles include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Modern calligraphy</li>
                  <li>• Contemporary painting</li>
                  <li>• Architectural design</li>
                  <li>• Cultural preservation</li>
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
            <Link href="/religion/confucianism/impact/literature">
              Confucian Literature
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