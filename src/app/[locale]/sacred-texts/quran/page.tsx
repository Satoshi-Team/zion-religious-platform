import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar, Star } from "lucide-react"
import { getAllQuranSurahs, getQuranStatistics, getPopularQuranSurahs } from "@/lib/quran-complete-data"

export default function QuranPage() {
  const allSurahs = getAllQuranSurahs()
  const statistics = getQuranStatistics()
  const popularSurahs = getPopularQuranSurahs()

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Holy Quran</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The central religious text of Islam, believed to be a revelation from Allah (God) 
          to Prophet Muhammad ﷺ. Discover divine guidance, spiritual wisdom, and the path to righteousness.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sacred-texts/quran/1">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Quran
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/studies/islam">
              <BookMarked className="mr-2 h-5 w-5" />
              Islamic Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Quran Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {statistics.totalSurahs} Surahs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Quran consists of {statistics.totalSurahs} chapters (surahs) of varying lengths, 
              revealed over 23 years to Prophet Muhammad ﷺ.
            </p>
            <Badge variant="secondary">Divine Revelation</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5" />
              Meccan & Medinan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {statistics.meccanSurahs} Meccan and {statistics.medinanSurahs} Medinan surahs, 
              each with distinct themes and characteristics.
            </p>
            <Badge variant="secondary">Historical Context</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              {statistics.totalVerses} Verses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Quran contains {statistics.totalVerses} verses providing guidance for the Five Pillars of Islam: 
              Shahada, Salah, Zakat, Sawm, and Hajj.
            </p>
            <Badge variant="secondary">Islamic Practice</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Popular Surahs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Surahs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularSurahs.map((surah) => (
            <Card key={surah.surahNumber}>
            <CardHeader>
                <CardTitle className="text-lg">{surah.name.english}</CardTitle>
                <CardDescription>{surah.surahNumber}:1-{surah.versesCount} • {surah.name.transliteration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                  {surah.description}
              </p>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{surah.revelationType}</Badge>
                  <Badge variant="outline">{surah.versesCount} verses</Badge>
                </div>
              <Button asChild size="sm">
                  <Link href={`/sacred-texts/quran/${surah.surahNumber}`}>Read Surah</Link>
              </Button>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>

      {/* All Surahs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Surahs (Chapters)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {allSurahs.map((surah) => (
            <Button key={surah.surahNumber} variant="outline" asChild className="h-auto p-3 text-sm">
              <Link href={`/sacred-texts/quran/${surah.surahNumber}`}>
                {surah.surahNumber}. {surah.name.english}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Study Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Quran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Search for specific words, phrases, or topics across the entire Quran.
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/quran/search">Search Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Tafsir Studies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Explore detailed interpretations and explanations of Quranic verses.
              </p>
              <Button asChild size="sm">
                <Link href="/studies/quran-tafsir">Study Tafsir</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Daily Verses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Receive daily Quranic verses with translations and reflections.
              </p>
              <Button asChild size="sm">
                <Link href="/daily-verses">Subscribe</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Memorization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Tools and resources to help memorize Quranic verses and chapters.
              </p>
              <Button asChild size="sm">
                <Link href="/memorization">Start Memorizing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Data Status */}
      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Data Status</CardTitle>
            <CardDescription>
              Current status of Quran data in our database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{statistics.totalSurahs}</div>
                <div className="text-sm text-muted-foreground">Total Surahs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{statistics.totalVerses}</div>
                <div className="text-sm text-muted-foreground">Total Verses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2</div>
                <div className="text-sm text-muted-foreground">Surahs with Complete Data</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                <strong>Note:</strong> We are progressively adding complete verse data for all surahs. 
                Currently, Al-Fatiha and Al-Baqarah have complete data with Arabic text, English translations, 
                transliterations, and tafsir. Other surahs have placeholder data that will be replaced with 
                complete content.
              </p>
        </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 