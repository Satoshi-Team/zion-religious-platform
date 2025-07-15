import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Locale } from '@/config/i18n'
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar, ScrollText } from "lucide-react"
import { torahService } from "@/lib/services/torah-service"

interface ShemotPageProps {
  params: {
    locale: Locale
  }
}

export default async function ShemotPage({ params }: ShemotPageProps) {
  // Get Shemot book information
  const bookInfo = await torahService.getBook('Shemot')
  const portions = await torahService.getAllPortions()
  const shemotPortions = portions.filter(p => p.book === 'Shemot')

  // Get verse of the day from Shemot
  const verseOfDay = await torahService.getVerse('shemot', '1', 1)

  // Popular passages from Shemot
  const popularPassages = [
    {
      reference: "Shemot 1:1",
      title: "Shemot 1:1",
      description: "The children of Israel in Egypt...",
      hebrewText: "וְאֵלֶּה שְׁמוֹת בְּנֵי יִשְׂרָאֵל הַבָּאִים מִצְרָיְמָה אֵת יַעֲקֹב אִישׁ וּבֵיתוֹ בָּאוּ",
      englishText: "Now these are the names of the children of Israel who came to Egypt with Jacob, each man with his household.",
      link: `/${params.locale}/sacred-texts/torah/portion/shemot`
    },
    {
      reference: "Shemot 3:14",
      title: "Shemot 3:14",
      description: "I am who I am...",
      hebrewText: "וַיֹּאמֶר אֱלֹהִים אֶל־מֹשֶׁה אֶהְיֶה אֲשֶׁר אֶהְיֶה וַיֹּאמֶר כֹּה תֹאמַר לִבְנֵי יִשְׂרָאֵל אֶהְיֶה שְׁלָחַנִי אֲלֵיכֶם",
      englishText: "God said to Moses, 'I am who I am.' And he said, 'Say this to the people of Israel: I am has sent me to you.'",
      link: `/${params.locale}/sacred-texts/torah/portion/shemot`
    },
    {
      reference: "Shemot 20:2",
      title: "Shemot 20:2",
      description: "I am the Lord your God...",
      hebrewText: "אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים",
      englishText: "I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.",
      link: `/${params.locale}/sacred-texts/torah/portion/yitro`
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">שְׁמוֹת - Shemot</h1>
        <h2 className="text-2xl text-muted-foreground mb-4">Exodus</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The second book of the Torah, containing the story of the Exodus from Egypt, the giving of the Torah at Mount Sinai, 
          and the construction of the Tabernacle. Discover the journey from slavery to freedom and the establishment of divine law.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/torah/portion/shemot`}>
              <ScrollText className="mr-2 h-5 w-5" />
              Read Shemot Portion
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/torah`}>
              <BookMarked className="mr-2 h-5 w-5" />
              All Torah Books
            </Link>
          </Button>
        </div>
      </div>

      {/* Book Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ScrollText className="h-5 w-5" />
              Weekly Portions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {shemotPortions.length} weekly portions (parashot) covering the entire book of Shemot, 
              from slavery in Egypt through the construction of the Tabernacle.
            </p>
            <Badge variant="secondary">{shemotPortions.length} Portions</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5" />
              Chapters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {bookInfo?.chapters || 40} chapters containing the story of liberation, divine revelation, 
              and the establishment of the covenant between God and Israel.
            </p>
            <Badge variant="secondary">{bookInfo?.chapters || 40} Chapters</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Key Figures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Moses, Aaron, Miriam, Pharaoh, Jethro, and the entire nation of Israel - 
              the story of liberation and the birth of a people.
            </p>
            <Badge variant="secondary">Liberation Story</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Portions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Portions (Parashot)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {shemotPortions.map((portion) => (
            <Button key={portion.key} asChild variant="outline" className="h-auto p-3 text-sm">
              <Link href={`/${params.locale}/sacred-texts/torah/portion/${portion.key}`}>
                <div className="text-center">
                  <div className="font-semibold">{portion.name}</div>
                  <div className="text-xs text-muted-foreground">{portion.hebrewName}</div>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Verse of the Day */}
      {verseOfDay && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Verse of the Day</h2>
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-lg">{verseOfDay.reference}</div>
              <div className="text-sm text-muted-foreground">Hebrew Text</div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-lg mb-4 text-right" dir="rtl">{verseOfDay.hebrewText}</p>
              <p className="text-lg mb-4 italic">"{verseOfDay.englishText}"</p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/sacred-texts/torah/portion/shemot`}>
                  Read Full Context
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Popular Passages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Passages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularPassages.map((passage) => (
            <Card key={passage.reference}>
              <CardHeader>
                <CardTitle className="text-lg">{passage.title}</CardTitle>
                <CardDescription>{passage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3 text-right" dir="rtl">{passage.hebrewText}</p>
                <p className="text-sm text-muted-foreground mb-3">"{passage.englishText}"</p>
                <Button asChild size="sm">
                  <Link href={passage.link}>Read Full Verse</Link>
                </Button>
              </CardContent>
            </Card>
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
                Search Torah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Search for specific words, phrases, or topics across the entire Torah.</p>
              <Button asChild size="sm">
                <Link href="/torah/search">Search Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Weekly Study
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Study the weekly Torah portion with commentaries and insights.</p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/sacred-texts/torah/portion/shemot`}>Start Studying</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Torah Studies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Join Torah study groups and explore deeper theological topics.</p>
              <Button asChild size="sm">
                <Link href="/studies/torah">Join Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Reading Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Follow structured reading plans to study the Torah systematically.</p>
              <Button asChild size="sm">
                <Link href="/studies/reading-plans">View Plans</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Torah Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're reading the Torah for the first time or seeking deeper understanding, 
          our comprehensive Torah study tools and resources are here to guide your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/torah/portion/shemot`}>
              <ScrollText className="mr-2 h-5 w-5" />
              Read Shemot Portion
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/torah`}>
              <BookMarked className="mr-2 h-5 w-5" />
              Explore All Torah Books
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 