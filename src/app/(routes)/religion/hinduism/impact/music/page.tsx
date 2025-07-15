import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Music, BookOpen, Users, Clock, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hindu Music - Sacred Sounds and Cultural Influence',
  description: 'Explore the rich musical traditions of Hinduism, from ancient Vedic chants to classical ragas, devotional bhajans, and modern adaptations. Discover how Hindu music has influenced world music and spirituality.',
  keywords: 'Hindu music, Vedic chants, classical ragas, bhajans, devotional music, Indian classical music, spiritual music, sacred sounds',
  openGraph: {
    title: 'Hindu Music - Sacred Sounds and Cultural Influence',
    description: 'Explore the rich musical traditions of Hinduism, from ancient Vedic chants to classical ragas, devotional bhajans, and modern adaptations.',
    type: 'website',
  },
}

export default function HinduismMusicImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hindu Music Traditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Sacred Sounds, Devotional Melodies, and Cultural Harmony
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">
              <Music className="w-3 h-3 mr-1" />
              Sacred Music
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              3000+ Years
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-3 h-3 mr-1" />
              Global Influence
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
              Hindu music encompasses a vast spectrum of sacred and devotional musical traditions, from 
              the ancient Vedic chants to classical ragas, devotional bhajans, and modern spiritual music. 
              These musical forms serve as vehicles for spiritual expression, meditation, and cultural 
              preservation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The musical traditions of Hinduism have profoundly influenced not only Indian classical 
              music but also world music, meditation practices, and spiritual expression across cultures.
            </p>
          </CardContent>
        </Card>

        {/* Musical Traditions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Vedic Chants
              </CardTitle>
              <CardDescription>Ancient Sacred Recitation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The oldest form of Hindu music, Vedic chants preserve the sacred texts through precise 
                oral transmission, maintaining the exact pronunciation and intonation for thousands of years.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Rigvedic chanting traditions</li>
                <li>• Samavedic musical patterns</li>
                <li>• Preservation of sacred sounds</li>
                <li>• Spiritual resonance</li>
              </ul>
              <Badge variant="outline" className="text-xs">UNESCO Heritage</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Classical Ragas
              </CardTitle>
              <CardDescription>Melodic Framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The sophisticated system of ragas provides the foundation for Indian classical music, 
                with each raga associated with specific moods, times, and spiritual qualities.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Morning and evening ragas</li>
                <li>• Seasonal associations</li>
                <li>• Emotional expression</li>
                <li>• Spiritual meditation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Classical Tradition</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Bhajans & Kirtans
              </CardTitle>
              <CardDescription>Devotional Songs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Devotional songs that express love and devotion to the divine, often performed in 
                community settings and temple ceremonies.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Community participation</li>
                <li>• Simple melodies</li>
                <li>• Repetitive mantras</li>
                <li>• Spiritual ecstasy</li>
              </ul>
              <Badge variant="outline" className="text-xs">Popular Devotion</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Temple Music
              </CardTitle>
              <CardDescription>Sacred Ceremonial Music</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Musical traditions specifically developed for temple rituals and ceremonies, creating 
                sacred atmospheres for worship and meditation.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Ritual accompaniment</li>
                <li>• Sacred instruments</li>
                <li>• Ceremonial timing</li>
                <li>• Divine invocation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Ritual Music</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Musical Instruments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sacred Instruments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">String Instruments</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Sitar - Classical melody instrument</li>
                  <li>• Veena - Ancient sacred instrument</li>
                  <li>• Tanpura - Drone accompaniment</li>
                  <li>• Sarod - Deep resonant tones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Percussion Instruments</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Tabla - Rhythmic foundation</li>
                  <li>• Mridangam - Classical drum</li>
                  <li>• Ghatam - Clay pot percussion</li>
                  <li>• Bells - Sacred sound markers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Wind Instruments</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Bansuri - Bamboo flute</li>
                  <li>• Shehnai - Sacred wind instrument</li>
                  <li>• Conch shell - Ritual calls</li>
                  <li>• Harmonium - Devotional accompaniment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Adaptations</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Fusion with world music</li>
                  <li>• Electronic adaptations</li>
                  <li>• Global collaborations</li>
                  <li>• Contemporary expressions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Global Cultural Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">World Music Influence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Hindu musical traditions have influenced global music through:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Classical music collaborations</li>
                  <li>• Jazz and fusion movements</li>
                  <li>• Rock and pop adaptations</li>
                  <li>• Electronic music sampling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Spiritual Music</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Hindu music has shaped modern spiritual practices:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Meditation and yoga music</li>
                  <li>• Healing sound therapy</li>
                  <li>• Mindfulness practices</li>
                  <li>• Wellness applications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notable Musicians */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Renowned Hindu Musicians</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Classical Masters</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Ravi Shankar - Sitar virtuoso</li>
                  <li>• M.S. Subbulakshmi - Carnatic vocalist</li>
                  <li>• Zakir Hussain - Tabla maestro</li>
                  <li>• Hariprasad Chaurasia - Flute master</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Devotional Singers</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Anup Jalota - Bhajan singer</li>
                  <li>• Jagjit Singh - Ghazal artist</li>
                  <li>• Lata Mangeshkar - Playback legend</li>
                  <li>• A.R. Rahman - Modern composer</li>
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
            <Link href="/religion/hinduism/impact/science">
              Hindu Science
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 