import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Play, BookOpen, Clock, Calendar, Mic, Users, Heart, Download } from "lucide-react"

export default function SermonsPage() {
  const featuredSermons = [
    {
      title: "The Power of Faith",
      speaker: "Dr. Sarah Johnson",
      duration: "45 min",
      date: "2024-01-15",
      description: "Exploring how faith transforms our lives and gives us strength in difficult times.",
      category: "Faith",
      audioUrl: "/sermons/power-of-faith",
      readUrl: "/sermons/power-of-faith/read"
    },
    {
      title: "Walking in Love",
      speaker: "Pastor Michael Chen",
      duration: "38 min",
      date: "2024-01-08",
      description: "Understanding God's love and how to reflect it in our daily relationships.",
      category: "Love",
      audioUrl: "/sermons/walking-in-love",
      readUrl: "/sermons/walking-in-love/read"
    },
    {
      title: "Finding Peace in Chaos",
      speaker: "Rev. Emily Rodriguez",
      duration: "42 min",
      date: "2024-01-01",
      description: "Biblical wisdom for maintaining inner peace during life's storms.",
      category: "Peace",
      audioUrl: "/sermons/finding-peace",
      readUrl: "/sermons/finding-peace/read"
    }
  ]

  const sermonCategories = [
    "Faith", "Love", "Hope", "Peace", "Forgiveness", "Gratitude", 
    "Service", "Prayer", "Bible Study", "Spiritual Growth", "Family", "Community"
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sermons</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Listen to and read inspiring sermons from spiritual leaders, pastors, and teachers. 
          Discover messages of hope, faith, and spiritual guidance to strengthen your walk with God.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/teachings/sermons/latest">
              <Play className="mr-2 h-5 w-5" />
              Latest Sermon
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/sermons/series">
              <Mic className="mr-2 h-5 w-5" />
              Sermon Series
            </Link>
          </Button>
        </div>
      </div>

      {/* Featured Sermons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Sermons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSermons.map((sermon) => (
            <Card key={sermon.title} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{sermon.title}</CardTitle>
                    <CardDescription className="mb-2">{sermon.speaker}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sermon.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(sermon.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary">{sermon.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {sermon.description}
                </p>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={sermon.audioUrl}>
                      <Play className="mr-2 h-4 w-4" />
                      Listen
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={sermon.readUrl}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sermon Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Topic</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {sermonCategories.map((category) => (
            <Button key={category} variant="outline" asChild className="h-auto p-4">
              <Link href={`/teachings/sermons/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Recent Sermons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Sermons</h2>
        <div className="space-y-4">
          {Array.from({ length: 5 }, (_, i) => ({
            title: `Sermon ${i + 1}: ${['Faith in Action', 'The Heart of Worship', 'Living with Purpose', 'God\'s Grace', 'Building Community'][i]}`,
            speaker: ['Dr. Sarah Johnson', 'Pastor Michael Chen', 'Rev. Emily Rodriguez', 'Dr. David Kim', 'Pastor Lisa Thompson'][i],
            duration: `${35 + i * 5} min`,
            date: new Date(2024, 0, 15 - i * 7).toISOString().split('T')[0],
            category: ['Faith', 'Worship', 'Purpose', 'Grace', 'Community'][i]
          })).map((sermon) => (
            <Card key={sermon.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{sermon.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{sermon.speaker}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {sermon.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(sermon.date).toLocaleDateString()}
                      </span>
                      <Badge variant="outline">{sermon.category}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <Link href={`/teachings/sermons/${sermon.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Play className="mr-2 h-4 w-4" />
                        Listen
                      </Link>
                    </Button>
                    <Button variant="outline" asChild size="sm">
                      <Link href={`/teachings/sermons/${sermon.title.toLowerCase().replace(/\s+/g, '-')}/read`}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sermon Series */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sermon Series</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Fruit of the Spirit</CardTitle>
              <CardDescription>9-part series on Galatians 5:22-23</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Explore the nine fruits of the Spirit and how to cultivate them in your daily life.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">9 Episodes</Badge>
                <Button asChild size="sm">
                  <Link href="/teachings/sermons/series/fruit-of-spirit">Start Series</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">The Beatitudes</CardTitle>
              <CardDescription>8-part series on Matthew 5:1-12</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Discover the profound wisdom of Jesus' Sermon on the Mount and its relevance today.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">8 Episodes</Badge>
                <Button asChild size="sm">
                  <Link href="/teachings/sermons/series/beatitudes">Start Series</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Psalms of David</CardTitle>
              <CardDescription>12-part series on selected Psalms</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Journey through the emotional and spiritual depth of David's psalms and prayers.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">12 Episodes</Badge>
                <Button asChild size="sm">
                  <Link href="/teachings/sermons/series/psalms-david">Start Series</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sermon Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Audio & Video
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Listen to sermons in high-quality audio or watch video recordings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Download sermons for offline listening on your devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Transcripts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Read full transcripts and take notes on key points.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Favorites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Save your favorite sermons and create playlists.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Subscribe to our sermon podcast or newsletter to receive new messages 
          and spiritual insights delivered to your inbox or podcast app.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/teachings/sermons/subscribe">
              <Play className="mr-2 h-5 w-5" />
              Subscribe to Podcast
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/teachings/sermons/newsletter">
              <Heart className="mr-2 h-5 w-5" />
              Weekly Newsletter
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 