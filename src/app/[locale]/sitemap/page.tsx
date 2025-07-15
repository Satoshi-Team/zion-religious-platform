import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  BookOpen, 
  Users, 
  Globe, 
  Lightbulb, 
  Heart, 
  Music, 
  MapPin, 
  Calendar,
  Search,
  Layers,
  Star,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Zion.FM Sitemap - Complete Site Navigation',
    description: 'Complete sitemap of Zion.FM featuring all pages, sections, and resources for easy navigation and discovery.',
    keywords: 'Sitemap, Navigation, Zion.FM, Site Structure, Religious Resources, Sacred Texts, Studies',
    openGraph: {
      title: 'Zion.FM Sitemap - Complete Site Navigation',
      description: 'Complete sitemap of Zion.FM featuring all pages, sections, and resources for easy navigation and discovery.',
      type: 'website'
    }
  }
}

export default async function SitemapPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Zion.FM Sitemap
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Complete navigation guide to all pages, sections, and resources on Zion.FM
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Search className="w-3 h-3 mr-1" />
            Easy Navigation
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Layers className="w-3 h-3 mr-1" />
            Complete Structure
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Star className="w-3 h-3 mr-1" />
            All Resources
          </Badge>
        </div>
      </div>

      {/* Main Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Main Navigation
          </CardTitle>
          <CardDescription>Primary sections and core features of Zion.FM</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-600 flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}`} className="text-blue-600 hover:underline">Main Page</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Sacred Texts
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/sacred-texts`} className="text-blue-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/bible`} className="text-blue-600 hover:underline">Bible</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/quran`} className="text-blue-600 hover:underline">Quran</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/torah`} className="text-blue-600 hover:underline">Torah</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/buddhist`} className="text-blue-600 hover:underline">Buddhist Texts</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/hindu`} className="text-blue-600 hover:underline">Hindu Texts</Link></li>
                <li>• <Link href={`/${locale}/sacred-texts/sikh`} className="text-blue-600 hover:underline">Sikh Texts</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Studies
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/studies`} className="text-green-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/studies/bible`} className="text-green-600 hover:underline">Bible Studies</Link></li>
                <li>• <Link href={`/${locale}/studies/theology`} className="text-green-600 hover:underline">Theology</Link></li>
                <li>• <Link href={`/${locale}/studies/history`} className="text-green-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/studies/guides`} className="text-green-600 hover:underline">Study Guides</Link></li>
                <li>• <Link href={`/${locale}/studies/commentaries`} className="text-green-600 hover:underline">Commentaries</Link></li>
                <li>• <Link href={`/${locale}/studies/comparative`} className="text-green-600 hover:underline">Comparative</Link></li>
                <li>• <Link href={`/${locale}/studies/academic`} className="text-green-600 hover:underline">Academic</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-600 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Meditation
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/meditation`} className="text-orange-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/meditation/christian`} className="text-orange-600 hover:underline">Christian</Link></li>
                <li>• <Link href={`/${locale}/meditation/buddhist`} className="text-orange-600 hover:underline">Buddhist</Link></li>
                <li>• <Link href={`/${locale}/meditation/islamic`} className="text-orange-600 hover:underline">Islamic</Link></li>
                <li>• <Link href={`/${locale}/meditation/hindu`} className="text-orange-600 hover:underline">Hindu</Link></li>
                <li>• <Link href={`/${locale}/meditation/modern`} className="text-orange-600 hover:underline">Modern</Link></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Religious Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            World Religious Traditions
          </CardTitle>
          <CardDescription>Complete coverage of major world religions with historical periods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Christianity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-red-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Christianity
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/christianity/overview`} className="text-red-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/christianity/theology`} className="text-red-600 hover:underline">Theology</Link></li>
                <li>• <Link href={`/${locale}/christianity/christology`} className="text-red-600 hover:underline">Christology</Link></li>
                <li>• <Link href={`/${locale}/christianity/history`} className="text-red-600 hover:underline">History</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/christianity/history/early-church`} className="text-red-600 hover:underline">Early Church</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/christianity/history/medieval`} className="text-red-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/christianity/history/reformation`} className="text-red-600 hover:underline">Reformation</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/christianity/history/modern`} className="text-red-600 hover:underline">Modern</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/christianity/history/contemporary`} className="text-red-600 hover:underline">Contemporary</Link></li>
              </ul>
            </div>

            {/* Islam */}
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Islam
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/islam/overview`} className="text-green-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/islam/teachings`} className="text-green-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/islam/history`} className="text-green-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/islam/practices`} className="text-green-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/islam/history/early-islam`} className="text-green-600 hover:underline">Early Islam</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/islam/history/medieval`} className="text-green-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/islam/history/modern`} className="text-green-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            {/* Hinduism */}
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Hinduism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/hinduism/overview`} className="text-orange-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/hinduism/scriptures`} className="text-orange-600 hover:underline">Scriptures</Link></li>
                <li>• <Link href={`/${locale}/religion/hinduism/deities`} className="text-orange-600 hover:underline">Deities</Link></li>
                <li>• <Link href={`/${locale}/religion/hinduism/practices`} className="text-orange-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/hinduism/history/early-hinduism`} className="text-orange-600 hover:underline">Early Hinduism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/hinduism/history/medieval`} className="text-orange-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/hinduism/history/modern`} className="text-orange-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            {/* Buddhism */}
            <div className="space-y-3">
              <h3 className="font-semibold text-yellow-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Buddhism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/buddhism/overview`} className="text-yellow-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/buddhism/scriptures`} className="text-yellow-600 hover:underline">Scriptures</Link></li>
                <li>• <Link href={`/${locale}/religion/buddhism/teachings`} className="text-yellow-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/buddhism/practices`} className="text-yellow-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/buddhism/history/early-buddhism`} className="text-yellow-600 hover:underline">Early Buddhism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/buddhism/history/medieval`} className="text-yellow-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/buddhism/history/modern`} className="text-yellow-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            {/* Judaism */}
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Judaism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/judaism/overview`} className="text-blue-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/judaism/scriptures`} className="text-blue-600 hover:underline">Scriptures</Link></li>
                <li>• <Link href={`/${locale}/religion/judaism/history`} className="text-blue-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/judaism/practices`} className="text-blue-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/judaism/history/early-judaism`} className="text-blue-600 hover:underline">Early Judaism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/judaism/history/medieval`} className="text-blue-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/judaism/history/modern`} className="text-blue-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            {/* Sikhism */}
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Sikhism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/sikhism/overview`} className="text-purple-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/sikhism/scriptures`} className="text-purple-600 hover:underline">Scriptures</Link></li>
                <li>• <Link href={`/${locale}/religion/sikhism/history`} className="text-purple-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/sikhism/practices`} className="text-purple-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/sikhism/history/early-sikhism`} className="text-purple-600 hover:underline">Early Sikhism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/sikhism/history/medieval`} className="text-purple-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/sikhism/history/modern`} className="text-purple-600 hover:underline">Modern</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional Traditions */}
            <div className="space-y-3">
              <h3 className="font-semibold text-teal-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Jainism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/jainism/overview`} className="text-teal-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/jainism/scriptures`} className="text-teal-600 hover:underline">Scriptures</Link></li>
                <li>• <Link href={`/${locale}/religion/jainism/principles`} className="text-teal-600 hover:underline">Principles</Link></li>
                <li>• <Link href={`/${locale}/religion/jainism/practices`} className="text-teal-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/jainism/history/early-jainism`} className="text-teal-600 hover:underline">Early Jainism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/jainism/history/medieval`} className="text-teal-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/jainism/history/modern`} className="text-teal-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-indigo-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Confucianism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/confucianism/overview`} className="text-indigo-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/confucianism/teachings`} className="text-indigo-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/confucianism/history`} className="text-indigo-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/confucianism/practices`} className="text-indigo-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/confucianism/history/early-confucianism`} className="text-indigo-600 hover:underline">Early Confucianism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/confucianism/history/medieval`} className="text-indigo-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/confucianism/history/modern`} className="text-indigo-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-emerald-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Taoism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/taoism/overview`} className="text-emerald-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/taoism/teachings`} className="text-emerald-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/taoism/philosophy`} className="text-emerald-600 hover:underline">Philosophy</Link></li>
                <li>• <Link href={`/${locale}/religion/taoism/practices`} className="text-emerald-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/taoism/history/early-taoism`} className="text-emerald-600 hover:underline">Early Taoism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/taoism/history/medieval`} className="text-emerald-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/taoism/history/modern`} className="text-emerald-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-amber-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Shinto
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/shinto/overview`} className="text-amber-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/shinto/teachings`} className="text-amber-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/shinto/history`} className="text-amber-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/shinto/practices`} className="text-amber-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/shinto/history/early-shinto`} className="text-amber-600 hover:underline">Early Shinto</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/shinto/history/medieval`} className="text-amber-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/shinto/history/modern`} className="text-amber-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-cyan-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Bahai Faith
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/bahai/overview`} className="text-cyan-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/bahai/teachings`} className="text-cyan-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/bahai/history`} className="text-cyan-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/bahai/practices`} className="text-cyan-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/bahai/history/early-bahai`} className="text-cyan-600 hover:underline">Early Bahai</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/bahai/history/medieval`} className="text-cyan-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/bahai/history/modern`} className="text-cyan-600 hover:underline">Modern</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-pink-600 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Rastafarianism
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/religion/rastafarianism/overview`} className="text-pink-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/religion/rastafarianism/teachings`} className="text-pink-600 hover:underline">Teachings</Link></li>
                <li>• <Link href={`/${locale}/religion/rastafarianism/history`} className="text-pink-600 hover:underline">History</Link></li>
                <li>• <Link href={`/${locale}/religion/rastafarianism/practices`} className="text-pink-600 hover:underline">Practices</Link></li>
                <li className="ml-4 text-xs text-muted-foreground">Historical Periods:</li>
                <li className="ml-4">• <Link href={`/${locale}/religion/rastafarianism/history/early-rastafarianism`} className="text-pink-600 hover:underline">Early Rastafarianism</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/rastafarianism/history/medieval`} className="text-pink-600 hover:underline">Medieval</Link></li>
                <li className="ml-4">• <Link href={`/${locale}/religion/rastafarianism/history/modern`} className="text-pink-600 hover:underline">Modern</Link></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Additional Resources
          </CardTitle>
          <CardDescription>Cultural, historical, and practical resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Resources
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/resources`} className="text-purple-600 hover:underline">Overview</Link></li>
                <li>• <Link href={`/${locale}/resources/history`} className="text-purple-600 hover:underline">Religious History</Link></li>
                <li>• <Link href={`/${locale}/resources/places`} className="text-purple-600 hover:underline">Sacred Places</Link></li>
                <li>• <Link href={`/${locale}/resources/art`} className="text-purple-600 hover:underline">Religious Art</Link></li>
                <li>• <Link href={`/${locale}/resources/music`} className="text-purple-600 hover:underline">Sacred Music</Link></li>
                <li>• <Link href={`/${locale}/resources/calendar`} className="text-purple-600 hover:underline">Religious Calendar</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                <Music className="w-4 h-4" />
                Audio & Media
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/listen`} className="text-blue-600 hover:underline">Listen</Link></li>
                <li>• <Link href={`/${locale}/teachings/sermons`} className="text-blue-600 hover:underline">Sermons</Link></li>
                <li>• <Link href={`/${locale}/teachings/devotionals`} className="text-blue-600 hover:underline">Devotionals</Link></li>
                <li>• <Link href={`/${locale}/teachings/bible`} className="text-blue-600 hover:underline">Bible Teachings</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-green-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Content & Blog
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/blog`} className="text-green-600 hover:underline">Blog</Link></li>
                <li>• <Link href={`/${locale}/en/blog`} className="text-green-600 hover:underline">English Blog</Link></li>
                <li>• <Link href={`/${locale}/teachings`} className="text-green-600 hover:underline">Teachings</Link></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Specialized Studies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Specialized Studies
          </CardTitle>
          <CardDescription>Religion-specific study resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Buddhist Studies
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/studies/buddhist`} className="text-orange-600 hover:underline">Overview</Link></li>
                <li>• Philosophy and meditation</li>
                <li>• Historical development</li>
                <li>• Practice and application</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-red-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Hindu Studies
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/studies/hindu`} className="text-red-600 hover:underline">Overview</Link></li>
                <li>• Philosophy and scriptures</li>
                <li>• Practice and rituals</li>
                <li>• Cultural aspects</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Sikh Studies
              </h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href={`/${locale}/studies/sikh`} className="text-blue-600 hover:underline">Overview</Link></li>
                <li>• Teachings and practices</li>
                <li>• Historical development</li>
                <li>• Community and culture</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Quick Navigation
          </CardTitle>
          <CardDescription>Popular and frequently accessed pages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href={`/${locale}/sacred-texts`}>
                <BookOpen className="w-6 h-6" />
                <span className="text-sm">Sacred Texts</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href={`/${locale}/studies`}>
                <Lightbulb className="w-6 h-6" />
                <span className="text-sm">Studies</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href={`/${locale}/meditation`}>
                <Heart className="w-6 h-6" />
                <span className="text-sm">Meditation</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href={`/${locale}/resources`}>
                <MapPin className="w-6 h-6" />
                <span className="text-sm">Resources</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer Navigation */}
      <div className="text-center">
        <p className="text-muted-foreground mb-4">
          This sitemap provides complete navigation to all pages on Zion.FM. 
          Use it to explore our comprehensive collection of religious and spiritual resources.
        </p>
        <Button asChild>
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
} 