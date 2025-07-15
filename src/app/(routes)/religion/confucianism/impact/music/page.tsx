import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Music, Users, Clock, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Confucian Music - Harmony and Cultural Expression',
  description: 'Explore the influence of Confucianism on East Asian music, from ritual music and court performances to educational songs and cultural harmony. Discover the musical traditions shaped by Confucian values.',
  keywords: 'Confucian music, East Asian music, ritual music, court music, cultural harmony, traditional music, educational songs',
  openGraph: {
    title: 'Confucian Music - Harmony and Cultural Expression',
    description: 'Explore the influence of Confucianism on East Asian music, from ritual music and court performances to educational songs and cultural harmony.',
    type: 'website',
  },
}

export default function ConfucianismMusicImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Confucian Music Traditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Harmony, Ritual, and Cultural Expression in East Asian Music
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Music className="w-3 h-3 mr-1" />
              Cultural Music
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
              <Music className="w-5 h-5" />
              Musical Heritage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Confucian music traditions emphasize harmony, ritual propriety, and moral cultivation. 
              Music serves as a vehicle for social harmony, educational instruction, and cultural 
              expression throughout East Asian societies.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The musical traditions influenced by Confucianism include ritual music, court performances, 
              educational songs, and cultural ceremonies that reflect the philosophy's emphasis on 
              balance and social order.
            </p>
          </CardContent>
        </Card>

        {/* Musical Traditions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Ritual Music
              </CardTitle>
              <CardDescription>Sacred Ceremonial Music</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Music performed during religious ceremonies, ancestral worship, and important 
                cultural rituals, emphasizing reverence and proper conduct.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Ancestral worship music</li>
                <li>• Temple ceremonies</li>
                <li>• Seasonal rituals</li>
                <li>• Sacred chants</li>
              </ul>
              <Badge variant="outline" className="text-xs">Sacred Tradition</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Court Music
              </CardTitle>
              <CardDescription>Imperial and Official Music</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Sophisticated musical performances for imperial courts and official ceremonies, 
                reflecting social hierarchy and cultural refinement.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Imperial ceremonies</li>
                <li>• Official functions</li>
                <li>• Cultural refinement</li>
                <li>• Social hierarchy</li>
              </ul>
              <Badge variant="outline" className="text-xs">Court Tradition</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Educational Music
              </CardTitle>
              <CardDescription>Learning Through Song</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Songs and musical compositions designed to teach moral principles, cultural 
                values, and practical wisdom to students of all ages.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Moral instruction songs</li>
                <li>• Cultural education</li>
                <li>• Memory aids</li>
                <li>• Character development</li>
              </ul>
              <Badge variant="outline" className="text-xs">Educational</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Folk Music
              </CardTitle>
              <CardDescription>Cultural Expression</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Traditional folk music that reflects Confucian values of harmony, community, 
                and cultural continuity in everyday life.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Community celebrations</li>
                <li>• Seasonal festivals</li>
                <li>• Social gatherings</li>
                <li>• Cultural preservation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Folk Tradition</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Musical Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Confucian Musical Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Harmony and Balance</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music should reflect the natural harmony and balance of the universe, 
                  promoting social stability and personal cultivation.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Melodic harmony</li>
                  <li>• Rhythmic balance</li>
                  <li>• Tonal coordination</li>
                  <li>• Emotional equilibrium</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Moral Education</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music serves as a vehicle for moral instruction and character development, 
                  teaching virtues and ethical behavior.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Virtue cultivation</li>
                  <li>• Character formation</li>
                  <li>• Ethical behavior</li>
                  <li>• Social values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ritual Propriety</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Musical performance follows proper ritual forms and social etiquette, 
                  reflecting respect for tradition and authority.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Ceremonial forms</li>
                  <li>• Social etiquette</li>
                  <li>• Traditional respect</li>
                  <li>• Cultural propriety</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Continuity</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music preserves cultural traditions and values, ensuring their transmission 
                  to future generations.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural preservation</li>
                  <li>• Traditional values</li>
                  <li>• Historical memory</li>
                  <li>• Generational transmission</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cultural and Social Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">East Asian Music</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Confucian musical principles have influenced music across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Chinese classical music</li>
                  <li>• Korean court music</li>
                  <li>• Japanese traditional music</li>
                  <li>• Vietnamese music</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Influence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary applications include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural preservation</li>
                  <li>• Educational music</li>
                  <li>• Traditional performances</li>
                  <li>• Cross-cultural exchange</li>
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
            <Link href="/religion/confucianism/impact/science">
              Confucian Science
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 