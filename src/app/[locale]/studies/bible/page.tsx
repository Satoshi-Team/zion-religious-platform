import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Search, Users, Calendar, ArrowRight, Play, Heart } from "lucide-react"

interface BibleStudiesPageProps {
  params: {
    locale: string
  }
}

export default function BibleStudiesPage({ params }: BibleStudiesPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bible Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deepen your understanding of the Bible through comprehensive studies, 
          guided readings, and theological insights. Explore the Word of God 
          with historical context and practical applications.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Read the Bible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access the complete Bible with multiple translations and study tools.
            </p>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/sacred-texts/bible`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Open Bible
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-green-600" />
              Bible Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Structured Bible studies and guided readings with commentary.
            </p>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/teachings/bible`}>
                <Play className="mr-2 h-4 w-4" />
                Start Study
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-purple-600" />
              Daily Devotionals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Daily spiritual reflections and devotional readings.
            </p>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/teachings/devotionals`}>
                <Heart className="mr-2 h-4 w-4" />
                Daily Devotional
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Old Testament Studies */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <CardTitle>Old Testament</CardTitle>
                <CardDescription>Hebrew Scriptures</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Study the 39 books of the Old Testament, including the Law, Historical Books, 
              Wisdom Literature, and Prophets.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Torah</Badge>
              <Badge variant="secondary">History</Badge>
              <Badge variant="secondary">Wisdom</Badge>
              <Badge variant="secondary">Prophets</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/sacred-texts/bible`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Old Testament
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* New Testament Studies */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle>New Testament</CardTitle>
                <CardDescription>Christian Scriptures</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Explore the 27 books of the New Testament, including the Gospels, 
              Acts, Epistles, and Revelation.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Gospels</Badge>
              <Badge variant="secondary">Acts</Badge>
              <Badge variant="secondary">Epistles</Badge>
              <Badge variant="secondary">Revelation</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/sacred-texts/bible`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Explore New Testament
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Topical Studies */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle>Topical Studies</CardTitle>
                <CardDescription>Theme-based exploration</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Study specific themes and topics across the Bible, including love, 
              faith, prayer, forgiveness, and more.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Love</Badge>
              <Badge variant="secondary">Faith</Badge>
              <Badge variant="secondary">Prayer</Badge>
              <Badge variant="secondary">Forgiveness</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/studies/themes`}>
                <Search className="mr-2 h-4 w-4" />
                Explore Topics
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Character Studies */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle>Character Studies</CardTitle>
                <CardDescription>Biblical figures and heroes</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Learn from the lives of biblical characters like Abraham, Moses, 
              David, Paul, and many others.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Abraham</Badge>
              <Badge variant="secondary">Moses</Badge>
              <Badge variant="secondary">David</Badge>
              <Badge variant="secondary">Paul</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/teachings`}>
                <Users className="mr-2 h-4 w-4" />
                Study Characters
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Historical Context */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <CardTitle>Historical Context</CardTitle>
                <CardDescription>Background and archaeology</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Understand the historical, cultural, and archaeological context 
              of biblical events and teachings.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Archaeology</Badge>
              <Badge variant="secondary">Culture</Badge>
              <Badge variant="secondary">Geography</Badge>
              <Badge variant="secondary">Timeline</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/studies/philosophy`}>
                <Calendar className="mr-2 h-4 w-4" />
                Explore History
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Theology */}
        <Card className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <CardTitle>Theology</CardTitle>
                <CardDescription>Doctrinal studies</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Study biblical theology, systematic theology, and doctrinal 
              concepts found throughout Scripture.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">God</Badge>
              <Badge variant="secondary">Christ</Badge>
              <Badge variant="secondary">Salvation</Badge>
              <Badge variant="secondary">Church</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href={`/${params.locale}/studies/philosophy`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Study Theology
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Popular Study Series */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Study Series</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Foundations of Faith</CardTitle>
              <CardDescription>Essential Christian beliefs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                A comprehensive study of core Christian doctrines and beliefs 
                found throughout the Bible.
              </p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/teachings/bible`}>
                  Start Series
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Life of Jesus</CardTitle>
              <CardDescription>Gospel harmony study</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Follow the life, ministry, death, and resurrection of Jesus 
                Christ through all four Gospels.
              </p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/sacred-texts/bible/matthew`}>
                  Start Series
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Psalms & Wisdom</CardTitle>
              <CardDescription>Poetry and wisdom literature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Explore the Psalms, Proverbs, Ecclesiastes, and other wisdom 
                books for spiritual guidance.
              </p>
              <Button asChild size="sm">
                <Link href={`/${params.locale}/sacred-texts/bible/psalms`}>
                  Start Series
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Start Your Bible Study Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're new to Bible study or a seasoned student, our resources 
          will help you grow in your understanding and relationship with God's Word.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/bible`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read the Bible
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/teachings/bible`}>
              <Play className="mr-2 h-5 w-5" />
              Bible Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 