import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Search, Users, Calendar, Clock, BookMarked, Heart, Target } from "lucide-react"

export default function BibleStudiesPage() {
  const featuredStudies = [
    {
      title: "Understanding the Bible",
      description: "Learn essential techniques for reading and studying scripture effectively.",
      duration: "6 weeks",
      level: "Beginner",
      category: "Foundations",
      lessons: 12,
      image: "/images/bible-study-1.jpg"
    },
    {
      title: "The Life of Jesus",
      description: "Journey through the Gospels and discover the teachings and ministry of Christ.",
      duration: "8 weeks",
      level: "Intermediate",
      category: "Gospels",
      lessons: 16,
      image: "/images/bible-study-2.jpg"
    },
    {
      title: "Psalms & Wisdom Literature",
      description: "Explore the poetic books and wisdom teachings of the Old Testament.",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Wisdom",
      lessons: 20,
      image: "/images/bible-study-3.jpg"
    }
  ]

  const studyCategories = [
    "Foundations", "Gospels", "Old Testament", "New Testament", "Wisdom Literature", 
    "Prophets", "Epistles", "Apocalyptic", "Historical Books", "Poetry"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bible Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Deepen your understanding of scripture through structured studies, guided readings, 
          and comprehensive commentaries. Explore the Bible's historical context, theological themes, 
          and practical applications for daily life.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/bible">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Bible Online
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/bible/beginner">
              <Target className="mr-2 h-5 w-5" />
              Start Here
            </Link>
          </Button>
        </div>
      </div>

      {/* Featured Studies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Bible Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStudies.map((study) => (
            <Card key={study.title} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{study.title}</CardTitle>
                    <CardDescription className="mb-2">{study.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookMarked className="h-4 w-4" />
                        {study.lessons} lessons
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">{study.level}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{study.category}</Badge>
                  <Button asChild size="sm">
                    <Link href={`/teachings/bible/study/${study.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Study Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {studyCategories.map((category) => (
            <Button key={category} variant="outline" asChild className="h-auto p-4">
              <Link href={`/teachings/bible/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Study Levels */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Choose Your Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Beginner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for those new to Bible study. Learn basic reading techniques, 
                understand historical context, and discover key themes.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Bible reading basics</li>
                <li>• Historical background</li>
                <li>• Key themes and stories</li>
                <li>• Simple study methods</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/teachings/bible/beginner">Start Beginner Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5" />
                Intermediate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For those with some Bible knowledge. Dive deeper into theological concepts, 
                literary analysis, and practical applications.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Theological concepts</li>
                <li>• Literary analysis</li>
                <li>• Cross-references</li>
                <li>• Practical applications</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/teachings/bible/intermediate">Start Intermediate Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Advanced
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For experienced students. Explore complex theological issues, 
                original languages, and scholarly perspectives.
              </p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Original languages</li>
                <li>• Scholarly perspectives</li>
                <li>• Complex theology</li>
                <li>• Research methods</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/teachings/bible/advanced">Start Advanced Studies</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Popular Studies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Studies</h2>
        <div className="space-y-4">
          {Array.from({ length: 5 }, (_, i) => ({
            title: ['The Book of Genesis', 'The Gospel of John', 'The Book of Psalms', 'The Book of Romans', 'The Book of Revelation'][i],
            description: ['Creation, covenant, and the patriarchs', 'The Word became flesh', 'Prayers and praises of Israel', 'Paul\'s letter to the Romans', 'Apocalyptic vision of John'][i],
            duration: `${4 + i * 2} weeks`,
            participants: 1000 + i * 200,
            rating: 4.5 + (i * 0.1)
          })).map((study) => (
            <Card key={study.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{study.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {study.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {study.participants} participants
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {study.rating} ★
                      </span>
                    </div>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/teachings/bible/study/${study.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Join Study
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Study Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Study Tools & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Bible Search
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
                Commentaries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Access trusted biblical commentaries and scholarly interpretations.
              </p>
              <Button asChild size="sm">
                <Link href="/teachings/bible/commentaries">Browse Commentaries</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Join online Bible study groups to learn and discuss with others.
              </p>
              <Button asChild size="sm">
                <Link href="/teachings/bible/study-groups">Join Groups</Link>
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
                <Link href="/teachings/bible/reading-plans">View Plans</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Start Your Bible Study Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're new to Bible study or seeking deeper understanding, 
          our comprehensive resources and guided studies will help you grow in your faith.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/bible">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Bible Online
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/bible/beginner">
              <Target className="mr-2 h-5 w-5" />
              Start Bible Study
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 