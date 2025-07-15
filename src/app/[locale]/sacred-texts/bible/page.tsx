import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Locale } from '@/config/i18n'
import Link from "next/link"
import { BookOpen, Search, BookMarked, Users, Calendar } from "lucide-react"
import { bibleEnhancedService } from "@/lib/services/bible-enhanced-service"

interface BiblePageProps {
  params: {
    locale: Locale
  }
}

export default async function BiblePage({ params }: BiblePageProps) {
  // Complete list of all 66 books of the Bible
  const ALL_BIBLE_BOOKS = [
    // Old Testament (39 books)
    { name: "Genesis", testament: "Old", category: "Pentateuch", chapters: 50 },
    { name: "Exodus", testament: "Old", category: "Pentateuch", chapters: 40 },
    { name: "Leviticus", testament: "Old", category: "Pentateuch", chapters: 27 },
    { name: "Numbers", testament: "Old", category: "Pentateuch", chapters: 36 },
    { name: "Deuteronomy", testament: "Old", category: "Pentateuch", chapters: 34 },
    { name: "Joshua", testament: "Old", category: "Historical Books", chapters: 24 },
    { name: "Judges", testament: "Old", category: "Historical Books", chapters: 21 },
    { name: "Ruth", testament: "Old", category: "Historical Books", chapters: 4 },
    { name: "1 Samuel", testament: "Old", category: "Historical Books", chapters: 31 },
    { name: "2 Samuel", testament: "Old", category: "Historical Books", chapters: 24 },
    { name: "1 Kings", testament: "Old", category: "Historical Books", chapters: 22 },
    { name: "2 Kings", testament: "Old", category: "Historical Books", chapters: 25 },
    { name: "1 Chronicles", testament: "Old", category: "Historical Books", chapters: 29 },
    { name: "2 Chronicles", testament: "Old", category: "Historical Books", chapters: 36 },
    { name: "Ezra", testament: "Old", category: "Historical Books", chapters: 10 },
    { name: "Nehemiah", testament: "Old", category: "Historical Books", chapters: 13 },
    { name: "Esther", testament: "Old", category: "Historical Books", chapters: 10 },
    { name: "Job", testament: "Old", category: "Wisdom Literature", chapters: 42 },
    { name: "Psalms", testament: "Old", category: "Wisdom Literature", chapters: 150 },
    { name: "Proverbs", testament: "Old", category: "Wisdom Literature", chapters: 31 },
    { name: "Ecclesiastes", testament: "Old", category: "Wisdom Literature", chapters: 12 },
    { name: "Song of Solomon", testament: "Old", category: "Wisdom Literature", chapters: 8 },
    { name: "Isaiah", testament: "Old", category: "Major Prophets", chapters: 66 },
    { name: "Jeremiah", testament: "Old", category: "Major Prophets", chapters: 52 },
    { name: "Lamentations", testament: "Old", category: "Major Prophets", chapters: 5 },
    { name: "Ezekiel", testament: "Old", category: "Major Prophets", chapters: 48 },
    { name: "Daniel", testament: "Old", category: "Major Prophets", chapters: 12 },
    { name: "Hosea", testament: "Old", category: "Minor Prophets", chapters: 14 },
    { name: "Joel", testament: "Old", category: "Minor Prophets", chapters: 3 },
    { name: "Amos", testament: "Old", category: "Minor Prophets", chapters: 9 },
    { name: "Obadiah", testament: "Old", category: "Minor Prophets", chapters: 1 },
    { name: "Jonah", testament: "Old", category: "Minor Prophets", chapters: 4 },
    { name: "Micah", testament: "Old", category: "Minor Prophets", chapters: 7 },
    { name: "Nahum", testament: "Old", category: "Minor Prophets", chapters: 3 },
    { name: "Habakkuk", testament: "Old", category: "Minor Prophets", chapters: 3 },
    { name: "Zephaniah", testament: "Old", category: "Minor Prophets", chapters: 3 },
    { name: "Haggai", testament: "Old", category: "Minor Prophets", chapters: 2 },
    { name: "Zechariah", testament: "Old", category: "Minor Prophets", chapters: 14 },
    { name: "Malachi", testament: "Old", category: "Minor Prophets", chapters: 4 },
    
    // New Testament (27 books)
    { name: "Matthew", testament: "New", category: "Gospels", chapters: 28 },
    { name: "Mark", testament: "New", category: "Gospels", chapters: 16 },
    { name: "Luke", testament: "New", category: "Gospels", chapters: 24 },
    { name: "John", testament: "New", category: "Gospels", chapters: 21 },
    { name: "Acts", testament: "New", category: "Historical", chapters: 28 },
    { name: "Romans", testament: "New", category: "Pauline Epistles", chapters: 16 },
    { name: "1 Corinthians", testament: "New", category: "Pauline Epistles", chapters: 16 },
    { name: "2 Corinthians", testament: "New", category: "Pauline Epistles", chapters: 13 },
    { name: "Galatians", testament: "New", category: "Pauline Epistles", chapters: 6 },
    { name: "Ephesians", testament: "New", category: "Pauline Epistles", chapters: 6 },
    { name: "Philippians", testament: "New", category: "Pauline Epistles", chapters: 4 },
    { name: "Colossians", testament: "New", category: "Pauline Epistles", chapters: 4 },
    { name: "1 Thessalonians", testament: "New", category: "Pauline Epistles", chapters: 5 },
    { name: "2 Thessalonians", testament: "New", category: "Pauline Epistles", chapters: 3 },
    { name: "1 Timothy", testament: "New", category: "Pauline Epistles", chapters: 6 },
    { name: "2 Timothy", testament: "New", category: "Pauline Epistles", chapters: 4 },
    { name: "Titus", testament: "New", category: "Pauline Epistles", chapters: 3 },
    { name: "Philemon", testament: "New", category: "Pauline Epistles", chapters: 1 },
    { name: "Hebrews", testament: "New", category: "General Epistles", chapters: 13 },
    { name: "James", testament: "New", category: "General Epistles", chapters: 5 },
    { name: "1 Peter", testament: "New", category: "General Epistles", chapters: 5 },
    { name: "2 Peter", testament: "New", category: "General Epistles", chapters: 3 },
    { name: "1 John", testament: "New", category: "General Epistles", chapters: 5 },
    { name: "2 John", testament: "New", category: "General Epistles", chapters: 1 },
    { name: "3 John", testament: "New", category: "General Epistles", chapters: 1 },
    { name: "Jude", testament: "New", category: "General Epistles", chapters: 1 },
    { name: "Revelation", testament: "New", category: "Apocalyptic", chapters: 22 }
  ]
  
  const oldTestamentBooks = ALL_BIBLE_BOOKS.filter(book => book.testament === "Old").map(book => book.name)
  const newTestamentBooks = ALL_BIBLE_BOOKS.filter(book => book.testament === "New").map(book => book.name)
  
  // Get verse of the day
  const verseOfDay = await bibleEnhancedService.getVerseOfDay()
  
  // Get popular passages with real data
  const popularPassages = [
    {
      reference: "Genesis 1:1",
      title: "Genesis 1:1",
      description: "In the beginning God created...",
      text: "In the beginning God created the heavens and the earth.",
      link: `/${params.locale}/sacred-texts/bible/genesis/1:1`
    },
    {
      reference: "John 3:16",
      title: "John 3:16",
      description: "For God so loved the world...",
      text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      link: `/${params.locale}/sacred-texts/bible/john/3:16`
    },
    {
      reference: "Matthew 1:1",
      title: "Matthew 1:1",
      description: "The genealogy of Jesus...",
      text: "This is the genealogy of Jesus the Messiah the son of David, the son of Abraham:",
      link: `/${params.locale}/sacred-texts/bible/matthew/1:1`
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">The Holy Bible</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          The sacred text of Christianity, containing the Old Testament (Hebrew Scriptures) 
          and New Testament (Christian Scriptures). Discover divine wisdom, spiritual guidance, 
          and the story of God's relationship with humanity.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/bible`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Bible Online
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies`}>
              <BookMarked className="mr-2 h-5 w-5" />
              Bible Studies
            </Link>
          </Button>
        </div>
      </div>

      {/* Bible Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Old Testament
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              39 books containing the Hebrew Scriptures, including the Law (Torah), 
              Historical Books, Wisdom Literature, and Prophets.
            </p>
            <Badge variant="secondary">39 Books</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5" />
              New Testament
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              27 books containing the Christian Scriptures, including the Gospels, 
              Acts, Epistles, and Revelation.
            </p>
            <Badge variant="secondary">27 Books</Badge>
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
              Jesus Christ, Moses, David, Paul, Peter, and many other biblical figures 
              whose stories and teachings continue to inspire millions.
            </p>
            <Badge variant="secondary">Inspiring Stories</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Old Testament */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Old Testament</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {oldTestamentBooks.map((book) => (
            <Button key={book} variant="outline" asChild className="h-auto p-3 text-sm">
              <Link href={`/${params.locale}/sacred-texts/bible/${book.toLowerCase().replace(/\s+/g, '-')}`}>
                {book}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* New Testament */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">New Testament</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {newTestamentBooks.map((book) => (
            <Button key={book} variant="outline" asChild className="h-auto p-3 text-sm">
              <Link href={`/${params.locale}/sacred-texts/bible/${book.toLowerCase().replace(/\s+/g, '-')}`}>
                {book}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Verse of the Day */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Verse of the Day</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{verseOfDay.reference}</CardTitle>
            <CardDescription>World English Bible</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4 italic">"{verseOfDay.text}"</p>
            <Button asChild size="sm">
              <Link href={`/${params.locale}/sacred-texts/bible/${verseOfDay.reference.toLowerCase().replace(/\s+/g, '/').replace(':', '/')}`}>
                Read Full Context
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

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
                <p className="text-sm text-muted-foreground mb-3">
                  "{passage.text}"
                </p>
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
                Search Bible
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Search for specific words, phrases, or topics across the entire Bible.
              </p>
              <Button asChild size="sm">
                <Link href="/bible/search">Search Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Daily Reading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Start your day with a daily Bible reading plan and devotionals.
              </p>
              <Button asChild size="sm">
                <Link href="/teachings/devotionals">Start Reading</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Bible Studies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Join Bible study groups and explore deeper theological topics.
              </p>
              <Button asChild size="sm">
                <Link href="/studies/bible">Join Studies</Link>
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
              <p className="text-sm text-muted-foreground mb-3">
                Follow structured reading plans to read through the Bible systematically.
              </p>
              <Button asChild size="sm">
                <Link href="/studies/reading-plans">View Plans</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Bible Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're reading the Bible for the first time or seeking deeper understanding, 
          our comprehensive Bible study tools and resources are here to guide your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/bible">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Bible Online
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/studies/bible">
              <BookMarked className="mr-2 h-5 w-5" />
              Start Bible Study
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 