import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Locale } from '@/config/i18n'
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar, ScrollText } from "lucide-react"
import { torahService } from "@/lib/services/torah-service"

interface BereshitPageProps {
  params: {
    locale: Locale
  }
}

export default async function BereshitPage({ params }: BereshitPageProps) {
  // Get Bereshit book information
  const bookInfo = await torahService.getBook('Bereshit')
  const portions = await torahService.getAllPortions()
  const bereshitPortions = portions.filter(p => p.book === 'Bereshit')

  // Get verse of the day from Bereshit
  const verseOfDay = await torahService.getVerse('bereshit', '1', 1)

  // Popular passages from Bereshit
  const popularPassages = [
    {
      reference: "Bereshit 1:1",
      title: "Bereshit 1:1",
      description: "In the beginning God created...",
      hebrewText: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
      englishText: "In the beginning God created the heavens and the earth.",
      link: `/${params.locale}/sacred-texts/torah/portion/bereshit`
    },
    {
      reference: "Bereshit 12:1",
      title: "Bereshit 12:1",
      description: "God's call to Abram...",
      hebrewText: "וַיֹּאמֶר יְהוָה אֶל־אַבְרָם לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ",
      englishText: "Now the Lord said to Abram, 'Go from your country and your kindred and your father's house to the land that I will show you.'",
      link: `/${params.locale}/sacred-texts/torah/portion/lech-lecha`
    },
    {
      reference: "Bereshit 22:2",
      title: "Bereshit 22:2",
      description: "The binding of Isaac...",
      hebrewText: "וַיֹּאמֶר קַח־נָא אֶת־בִּנְךָ אֶת־יְחִידְךָ אֲשֶׁר־אָהַבְתָּ אֶת־יִצְחָק וְלֶךְ־לְךָ אֶל־אֶרֶץ הַמֹּרִיָּה וְהַעֲלֵהוּ שָׁם לְעֹלָה",
      englishText: "He said, 'Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering.'",
      link: `/${params.locale}/sacred-texts/torah/portion/vayera`
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">בְּרֵאשִׁית - Bereshit</h1>
        <h2 className="text-2xl text-muted-foreground mb-4">Genesis</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The first book of the Torah, containing the creation of the world, the stories of the patriarchs and matriarchs, 
          and the foundation of the Jewish people. Discover divine wisdom, spiritual guidance, and the beginning of God's 
          relationship with humanity.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/torah/portion/bereshit`}>
              <ScrollText className="mr-2 h-5 w-5" />
              Read Bereshit Portion
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
              {bereshitPortions.length} weekly portions (parashot) covering the entire book of Bereshit, 
              from creation through the death of Joseph.
            </p>
            <Badge variant="secondary">{bereshitPortions.length} Portions</Badge>
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
              {bookInfo?.chapters || 50} chapters containing the foundational stories of Judaism, 
              including creation, the patriarchs, and the descent to Egypt.
            </p>
            <Badge variant="secondary">{bookInfo?.chapters || 50} Chapters</Badge>
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
              Adam and Eve, Noah, Abraham and Sarah, Isaac and Rebecca, Jacob and Rachel, 
              and Joseph - the founding families of the Jewish people.
            </p>
            <Badge variant="secondary">Founding Families</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Portions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Portions (Parashot)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {bereshitPortions.map((portion) => (
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
                <Link href={`/${params.locale}/sacred-texts/torah/portion/bereshit`}>
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
                <Link href={`/${params.locale}/sacred-texts/torah/portion/bereshit`}>Start Studying</Link>
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
            <Link href={`/${params.locale}/sacred-texts/torah/portion/bereshit`}>
              <ScrollText className="mr-2 h-5 w-5" />
              Read Bereshit Portion
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