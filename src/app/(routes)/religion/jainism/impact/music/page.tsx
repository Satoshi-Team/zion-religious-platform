import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Music, Users, Clock, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jain Music - Sacred Sounds and Cultural Harmony',
  description: 'Explore the influence of Jainism on Indian music, from ritual music and devotional songs to cultural performances and spiritual expression. Discover the musical traditions shaped by Jain values.',
  keywords: 'Jain music, Indian music, ritual music, devotional songs, cultural music, spiritual music, traditional music',
  openGraph: {
    title: 'Jain Music - Sacred Sounds and Cultural Harmony',
    description: 'Explore the influence of Jainism on Indian music, from ritual music and devotional songs to cultural performances and spiritual expression.',
    type: 'website',
  },
}

export default function JainismMusicImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Jain Music Traditions
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
              Indian Influence
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
              Jain music traditions emphasize peace, non-violence, and spiritual devotion. 
              Music serves as a vehicle for spiritual expression, cultural preservation, and 
              community harmony throughout Jain communities.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The musical traditions influenced by Jainism include ritual music, devotional 
              songs, cultural performances, and spiritual chants that reflect the religion's 
              emphasis on harmony and non-violence.
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
                Music performed during religious ceremonies, temple rituals, and important 
                cultural events, emphasizing reverence and spiritual devotion.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Temple ceremonies</li>
                <li>• Religious rituals</li>
                <li>• Sacred chants</li>
                <li>• Devotional music</li>
              </ul>
              <Badge variant="outline" className="text-xs">Sacred Tradition</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Devotional Songs
              </CardTitle>
              <CardDescription>Spiritual Expression</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Songs and hymns that express devotion to Tirthankaras and spiritual 
                principles, often performed in community settings.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Bhajans and hymns</li>
                <li>• Spiritual themes</li>
                <li>• Community participation</li>
                <li>• Devotional expression</li>
              </ul>
              <Badge variant="outline" className="text-xs">Devotional</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Cultural Music
              </CardTitle>
              <CardDescription>Traditional Performances</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Traditional music that reflects Jain cultural values and community 
                celebrations, preserving cultural heritage and social harmony.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Cultural celebrations</li>
                <li>• Community events</li>
                <li>• Traditional songs</li>
                <li>• Cultural preservation</li>
              </ul>
              <Badge variant="outline" className="text-xs">Cultural</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Meditation Music
              </CardTitle>
              <CardDescription>Spiritual Contemplation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Music designed for meditation and spiritual contemplation, helping 
                practitioners achieve inner peace and spiritual focus.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                <li>• Meditation aids</li>
                <li>• Spiritual focus</li>
                <li>• Inner peace</li>
                <li>• Contemplative music</li>
              </ul>
              <Badge variant="outline" className="text-xs">Meditation</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Musical Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Jain Musical Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Non-Violence in Music</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music should reflect the principle of ahimsa through peaceful 
                  melodies and harmonious compositions.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Peaceful melodies</li>
                  <li>• Harmonious sounds</li>
                  <li>• Non-violent themes</li>
                  <li>• Compassionate expression</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Spiritual Devotion</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music serves as a vehicle for spiritual devotion and the 
                  expression of religious faith and values.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Devotional expression</li>
                  <li>• Spiritual themes</li>
                  <li>• Religious faith</li>
                  <li>• Sacred connection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cultural Harmony</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Music promotes social harmony and cultural unity within 
                  Jain communities and beyond.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Social harmony</li>
                  <li>• Cultural unity</li>
                  <li>• Community bonding</li>
                  <li>• Peaceful coexistence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Simplicity and Purity</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Musical expression emphasizes simplicity and purity, reflecting 
                  Jain values of austerity and spiritual focus.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Simple melodies</li>
                  <li>• Pure sounds</li>
                  <li>• Austere expression</li>
                  <li>• Spiritual focus</li>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Indian Music</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Jain musical traditions have influenced music across:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Classical music</li>
                  <li>• Folk traditions</li>
                  <li>• Devotional music</li>
                  <li>• Cultural performances</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Modern Influence</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Contemporary applications include:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Cultural preservation</li>
                  <li>• Spiritual music</li>
                  <li>• Community events</li>
                  <li>• Interfaith dialogue</li>
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
            <Link href="/religion/jainism/impact/science">
              Jain Science
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 