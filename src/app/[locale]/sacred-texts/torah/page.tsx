import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar, Star, ScrollText } from "lucide-react"
import { torahService } from "@/lib/services/torah-service"

async function getTorahData() {
  try {
    const [verseOfDay, currentParasha, books] = await Promise.all([
      torahService.getVerseOfDay(),
      torahService.getCurrentParasha(),
      torahService.getBooks()
    ])

    return {
      verseOfDay,
      currentParasha,
      books
    }
  } catch (error) {
    console.error('Failed to load Torah data:', error)
    return {
      verseOfDay: null,
      currentParasha: null,
      books: []
    }
  }
}

export default async function TorahPage() {
  const { verseOfDay, currentParasha, books } = await getTorahData()

  const weeklyPortions = [
    "Bereshit", "Noach", "Lech-Lecha", "Vayeira", "Chayei Sara",
    "Toldot", "Vayeitzei", "Vayishlach", "Vayeishev", "Miketz",
    "Vayigash", "Vayechi", "Shemot", "Va'eira", "Bo",
    "Beshalach", "Yitro", "Mishpatim", "Terumah", "Tetzaveh",
    "Ki Tisa", "Vayakhel", "Pekudei", "Vayikra", "Tzav",
    "Shmini", "Tazria", "Metzora", "Achrei Mot", "Kedoshim",
    "Emor", "Behar", "Bechukotai", "Bamidbar", "Nasso",
    "Beha'alotcha", "Sh'lach", "Korach", "Chukat", "Balak",
    "Pinchas", "Matot", "Masei", "Devarim", "Va'etchanan",
    "Eikev", "Re'eh", "Shoftim", "Ki Teitzei", "Ki Tavo",
    "Nitzavim", "Vayeilech", "Ha'azinu", "Vezot Haberakhah"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Torah</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The foundational text of Judaism, consisting of the first five books of the Hebrew Bible. 
          Discover divine law, spiritual wisdom, and the covenant between God and the Jewish people.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sacred-texts/torah/read">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Torah
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/studies/judaism">
              <BookMarked className="mr-2 h-5 w-5" />
              Jewish Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Torah Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Five Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Torah consists of five books: Genesis, Exodus, Leviticus, Numbers, and Deuteronomy, 
              also known as the Pentateuch.
            </p>
            <Badge variant="secondary">Divine Law</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5" />
              Weekly Portions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Torah is divided into 54 weekly portions (parashot) that are read in synagogues 
              throughout the year.
            </p>
            <Badge variant="secondary">Annual Cycle</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Covenant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The Torah establishes the covenant between God and the Jewish people, 
              containing laws, teachings, and the history of the Israelites.
            </p>
            <Badge variant="secondary">Sacred Agreement</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Verse of the Day */}
      {verseOfDay && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Verse of the Day</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                {verseOfDay.reference}
                {verseOfDay.parsha && (
                  <Badge variant="outline" className="ml-2">
                    {verseOfDay.parsha}
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-right text-lg font-semibold text-gray-700 dark:text-gray-300">
                {verseOfDay.hebrew}
              </div>
              <div className="text-lg leading-relaxed">
                "{verseOfDay.english}"
              </div>
              <div className="text-sm text-muted-foreground italic">
                {verseOfDay.transliteration}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Current Parasha */}
      {currentParasha && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">This Week's Parasha</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5" />
                {currentParasha.name}
                <Badge variant="secondary">{currentParasha.book}</Badge>
              </CardTitle>
              <CardDescription>
                {currentParasha.chapters} • {currentParasha.summary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Hebrew Name:</span>
                  <p className="text-lg font-semibold">{currentParasha.hebrewName}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Themes:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {currentParasha.themes.map((theme, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild size="sm" className="mt-4">
                  <Link href={`/sacred-texts/torah/parasha/${currentParasha.name.toLowerCase()}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Parasha
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Five Books of Torah */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Five Books of Torah</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <Card key={book.name} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{book.englishName}</CardTitle>
                <CardDescription className="text-right text-lg font-semibold">
                  {book.hebrewName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {book.summary}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {book.keyThemes?.slice(0, 3).map((theme, themeIndex) => (
                    <Badge key={themeIndex} variant="outline" className="text-xs">
                      {theme}
                    </Badge>
                  )) || (
                    <Badge variant="outline" className="text-xs">
                      Torah
                    </Badge>
                  )}
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href={`/sacred-texts/torah/${book.name.toLowerCase()}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read {book.englishName}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Weekly Portions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Torah Portions (Parashot)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {weeklyPortions.map((portion, index) => (
            <Button key={portion} variant="outline" asChild className="h-auto p-3 text-sm">
              <Link href={`/sacred-texts/torah/portion/${portion.toLowerCase()}`}>
                {index + 1}. {portion}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Popular Passages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Passages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shema Yisrael</CardTitle>
              <CardDescription>Deuteronomy 6:4-9 • The Jewish Declaration of Faith</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "Hear, O Israel: The Lord our God, the Lord is one. 
                Love the Lord your God with all your heart and with all your soul and with all your strength."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/torah/deuteronomy/6:4-9">Read Full Passage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ten Commandments</CardTitle>
              <CardDescription>Exodus 20:1-17 • Divine Moral Law</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "I am the Lord your God, who brought you out of Egypt, out of the land of slavery. 
                You shall have no other gods before me..."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/torah/exodus/20:1-17">Read Full Passage</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Creation Story</CardTitle>
              <CardDescription>Genesis 1:1-2:3 • The Beginning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                "In the beginning God created the heavens and the earth. 
                Now the earth was formless and empty, darkness was over the surface of the deep..."
              </p>
              <Button asChild size="sm">
                <Link href="/sacred-texts/torah/genesis/1:1-2:3">Read Full Passage</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Study Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Torah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Search through the entire Torah text to find specific verses, themes, or keywords.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/sacred-texts/torah/search">
                  <Search className="mr-2 h-4 w-4" />
                  Search Now
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Parasha Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                View the annual cycle of Torah readings and upcoming parashiyot.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/sacred-texts/torah/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Daily Study
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access daily Torah study materials, commentaries, and insights.
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/sacred-texts/torah/daily">
                  <BookMarked className="mr-2 h-4 w-4" />
                  Daily Study
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Themes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Themes in the Torah</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Monotheism
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The fundamental belief in one God and the rejection of idolatry and polytheism.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Covenant Relationship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The special relationship between God and the Jewish people through divine covenant.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Divine Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive legal and ethical guidelines for righteous living and community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Torah Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're reading the Torah for the first time or seeking deeper understanding, 
          our comprehensive study tools and resources are here to guide your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sacred-texts/torah/read">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Torah Online
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/studies/judaism">
              <BookMarked className="mr-2 h-5 w-5" />
              Start Jewish Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 