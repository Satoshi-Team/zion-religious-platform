import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Calendar, Clock, BookOpen, Users, Star, ArrowRight, BookMarked } from "lucide-react"

export default function DevotionalsPage() {
  const featuredDevotionals = [
    {
      title: "Morning Prayer",
      description: "Start your day with gratitude and purpose through guided morning prayers.",
      duration: "10 min",
      category: "Prayer",
      author: "Daily Devotions Team",
      rating: 4.8,
      participants: 2500
    },
    {
      title: "Evening Reflection",
      description: "End your day with peaceful reflection and spiritual renewal.",
      duration: "15 min",
      category: "Reflection",
      author: "Rev. Sarah Johnson",
      rating: 4.7,
      participants: 1800
    },
    {
      title: "Gratitude Practice",
      description: "Cultivate a heart of gratitude through daily thanksgiving exercises.",
      duration: "8 min",
      category: "Gratitude",
      author: "Dr. Michael Chen",
      rating: 4.9,
      participants: 3200
    }
  ]

  const devotionalCategories = [
    "Prayer", "Gratitude", "Forgiveness", "Hope", "Love", "Peace", 
    "Faith", "Service", "Wisdom", "Joy", "Patience", "Kindness"
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Daily Devotionals</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Begin each day with inspiring devotionals, spiritual reflections, and guided prayers. 
          Strengthen your faith and deepen your relationship with God through daily spiritual practices.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/teachings/devotionals/today">
              <Heart className="mr-2 h-5 w-5" />
              Today's Devotional
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/devotionals/subscribe">
              <Calendar className="mr-2 h-5 w-5" />
              Subscribe
            </Link>
          </Button>
        </div>
      </div>

      {/* Today's Devotional */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Today's Devotional</h2>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Walking in Faith</CardTitle>
                <CardDescription className="text-lg mb-2">
                  "Now faith is confidence in what we hope for and assurance about what we do not see." - Hebrews 11:1
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    12 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    1,247 reading today
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    4.9 ★
                  </span>
                </div>
              </div>
              <Badge variant="secondary">Today</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Faith is not just a belief system; it's a way of life. When we walk in faith, 
              we trust that God is working in our lives even when we can't see the full picture. 
              Today's devotional explores how to cultivate and strengthen your faith in daily life.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/teachings/devotionals/today/read">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Full Devotional
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/teachings/devotionals/today/audio">
                  <Heart className="mr-2 h-4 w-4" />
                  Listen
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Devotionals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Devotionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDevotionals.map((devotional) => (
            <Card key={devotional.title} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{devotional.title}</CardTitle>
                    <CardDescription className="mb-2">{devotional.description}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {devotional.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {devotional.participants}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">{devotional.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">by {devotional.author}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4" />
                    {devotional.rating} ★
                  </span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/teachings/devotionals/${devotional.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Heart className="mr-2 h-4 w-4" />
                    Start Devotional
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Devotional Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Theme</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {devotionalCategories.map((category) => (
            <Button key={category} variant="outline" asChild className="h-auto p-4">
              <Link href={`/teachings/devotionals/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Weekly Devotional Plan */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Devotional Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
            <Card key={day} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{day}</CardTitle>
                <CardDescription>
                  {['Prayer Focus', 'Gratitude', 'Forgiveness', 'Hope', 'Love', 'Rest', 'Worship'][index]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {['Start your week with prayer', 'Practice gratitude', 'Reflect on forgiveness', 'Find hope in scripture', 'Show love to others', 'Rest and renew', 'Worship and praise'][index]}
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href={`/teachings/devotionals/weekly/${day.toLowerCase()}`}>
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Read
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Devotionals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Devotionals</h2>
        <div className="space-y-4">
          {Array.from({ length: 5 }, (_, i) => ({
            title: ['Finding Peace in Chaos', 'The Power of Gratitude', 'Walking in Love', 'Trusting God\'s Plan', 'Living with Purpose'][i],
            author: ['Rev. Emily Rodriguez', 'Dr. Sarah Johnson', 'Pastor Michael Chen', 'Dr. David Kim', 'Rev. Lisa Thompson'][i],
            date: new Date(2024, 0, 15 - i).toLocaleDateString(),
            category: ['Peace', 'Gratitude', 'Love', 'Trust', 'Purpose'][i],
            duration: `${8 + i * 2} min`
          })).map((devotional) => (
            <Card key={devotional.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{devotional.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">by {devotional.author}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {devotional.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {devotional.duration}
                      </span>
                      <Badge variant="outline">{devotional.category}</Badge>
                    </div>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/teachings/devotionals/${devotional.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Heart className="mr-2 h-4 w-4" />
                      Read
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Devotional Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Devotional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Daily Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive fresh devotionals every morning in your email or app.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Scripture Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Each devotional centers on specific Bible passages and their application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Prayer Prompts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Guided prayer prompts to help you connect with God more deeply.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Share insights and pray with others in our devotional community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Start Your Daily Devotional Practice</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Transform your spiritual life with daily devotionals that inspire, encourage, 
          and draw you closer to God. Begin your journey of daily spiritual growth today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/teachings/devotionals/today">
              <Heart className="mr-2 h-5 w-5" />
              Today's Devotional
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/devotionals/subscribe">
              <Calendar className="mr-2 h-5 w-5" />
              Subscribe Daily
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 