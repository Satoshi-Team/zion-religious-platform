import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar, Star, ArrowRight } from "lucide-react"
import { QURAN_SURAHS } from "@/lib/quran-data"

export default function QuranReadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Read the Holy Quran</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore all 114 surahs of the Quran with translations, commentary, and study tools. 
          Begin your spiritual journey through the divine revelation.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sacred-texts/quran/1">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading
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

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input 
              placeholder="Search surahs by name or number..." 
              className="w-full"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Surahs</SelectItem>
              <SelectItem value="meccan">Meccan</SelectItem>
              <SelectItem value="medinan">Medinan</SelectItem>
              <SelectItem value="short">Short Surahs</SelectItem>
              <SelectItem value="long">Long Surahs</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quran Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">114</CardTitle>
            <CardDescription>Total Surahs</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">86</CardTitle>
            <CardDescription>Meccan Surahs</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">28</CardTitle>
            <CardDescription>Medinan Surahs</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">6,236</CardTitle>
            <CardDescription>Total Verses</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* All Surahs Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Surahs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {QURAN_SURAHS.map((surah) => (
            <Card key={surah.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-muted-foreground">#{surah.id}</span>
                    <CardTitle className="text-lg">{surah.englishName}</CardTitle>
                  </div>
                  <Badge variant={surah.revelationType === 'Meccan' ? 'default' : 'secondary'}>
                    {surah.revelationType}
                  </Badge>
                </div>
                <CardDescription className="text-right font-arabic text-lg">
                  {surah.arabicName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">
                    {surah.verses} verses
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Juz {surah.juz.join(', ')}
                  </span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href={`/sacred-texts/quran/${surah.id}`}>
                    Read Surah
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Surahs Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Surahs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Al-Fatiha (The Opening)
              </CardTitle>
              <CardDescription>1:1-7 • The Opening Chapter</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "In the name of Allah, the Entirely Merciful, the Especially Merciful. 
                All praise is due to Allah, Lord of the worlds..."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/quran/1">Read Surah</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Ya-Sin
              </CardTitle>
              <CardDescription>36:1-83 • The Heart of the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "Ya, Seen. By the wise Quran. Indeed, you are among the messengers, 
                on a straight path..."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/quran/36">Read Surah</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Al-Mulk (The Sovereignty)
              </CardTitle>
              <CardDescription>67:1-30 • The Sovereignty</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "Blessed is He in whose hand is dominion, and He is over all things competent..."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/quran/67">Read Surah</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reading Tips */}
      <div className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Reading Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">For Beginners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Start with shorter surahs (Al-Fatiha, Al-Ikhlas)</li>
              <li>• Read with translation to understand meaning</li>
              <li>• Focus on one surah at a time</li>
              <li>• Use audio recitation for proper pronunciation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">For Advanced Readers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Study tafsir (commentary) for deeper understanding</li>
              <li>• Explore historical context and revelation circumstances</li>
              <li>• Compare multiple translations</li>
              <li>• Join study groups for discussion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 