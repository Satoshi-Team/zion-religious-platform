import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Play, BookOpen, Clock, Calendar, Mic, Users, Heart, Download, ArrowLeft, List, Grid, Filter } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sermon Series - Complete Teaching Series | Sermons & Teachings | ZION.FM',
  description: 'Explore complete sermon series on faith, love, spiritual growth, and biblical topics. Deep dive into comprehensive teaching series for spiritual development.',
  keywords: 'sermon series, teaching series, faith series, bible study series, spiritual growth series, christian teaching',
  openGraph: {
    title: 'Sermon Series - Complete Teaching Series',
    description: 'Explore comprehensive sermon series for spiritual growth and biblical understanding.',
    type: 'website',
  },
}

const sermonSeries = [
  {
    id: "fruit-of-spirit",
    title: "The Fruit of the Spirit",
    speaker: "Dr. Sarah Johnson",
    episodes: 9,
    duration: "6 hours 45 min",
    description: "Explore the nine fruits of the Spirit from Galatians 5:22-23 and learn how to cultivate them in your daily life.",
    scripture: "Galatians 5:22-23",
    category: "Spiritual Growth",
    status: "Complete",
    image: "/images/series/fruit-of-spirit.jpg",
    episodes: [
      { title: "Love: The Foundation", duration: "45 min", date: "2024-01-01" },
      { title: "Joy: Finding Happiness in God", duration: "42 min", date: "2024-01-08" },
      { title: "Peace: Inner Tranquility", duration: "48 min", date: "2024-01-15" },
      { title: "Patience: Waiting on God", duration: "40 min", date: "2024-01-22" },
      { title: "Kindness: Showing God's Love", duration: "44 min", date: "2024-01-29" },
      { title: "Goodness: Living Righteously", duration: "46 min", date: "2024-02-05" },
      { title: "Faithfulness: Staying True", duration: "43 min", date: "2024-02-12" },
      { title: "Gentleness: Strength Under Control", duration: "41 min", date: "2024-02-19" },
      { title: "Self-Control: Mastering Our Desires", duration: "47 min", date: "2024-02-26" }
    ]
  },
  {
    id: "faith-foundations",
    title: "Faith Foundations",
    speaker: "Dr. Sarah Johnson",
    episodes: 5,
    duration: "3 hours 45 min",
    description: "Build a strong foundation of faith through biblical teaching on trust, prayer, and spiritual growth.",
    scripture: "Hebrews 11:1-6",
    category: "Faith",
    status: "In Progress",
    image: "/images/series/faith-foundations.jpg",
    episodes: [
      { title: "The Power of Faith", duration: "45 min", date: "2024-01-15" },
      { title: "Walking in Love", duration: "38 min", date: "2024-01-22" },
      { title: "Finding Peace in Chaos", duration: "42 min", date: "2024-01-29" },
      { title: "Trusting God's Plan", duration: "40 min", date: "2024-02-05" },
      { title: "Living with Purpose", duration: "44 min", date: "2024-02-12" }
    ]
  },
  {
    id: "psalms-of-david",
    title: "Psalms of David",
    speaker: "Pastor Michael Chen",
    episodes: 12,
    duration: "8 hours 30 min",
    description: "Journey through the life of David through his psalms, exploring themes of worship, lament, and praise.",
    scripture: "Book of Psalms",
    category: "Bible Study",
    status: "Complete",
    image: "/images/series/psalms-of-david.jpg",
    episodes: [
      { title: "Psalm 23: The Lord is My Shepherd", duration: "50 min", date: "2023-10-01" },
      { title: "Psalm 51: A Prayer of Repentance", duration: "45 min", date: "2023-10-08" },
      { title: "Psalm 1: The Blessed Man", duration: "42 min", date: "2023-10-15" },
      { title: "Psalm 27: The Lord is My Light", duration: "48 min", date: "2023-10-22" },
      { title: "Psalm 139: You Have Searched Me", duration: "52 min", date: "2023-10-29" },
      { title: "Psalm 100: Enter His Gates", duration: "40 min", date: "2023-11-05" },
      { title: "Psalm 46: God is Our Refuge", duration: "44 min", date: "2023-11-12" },
      { title: "Psalm 119: Your Word is a Lamp", duration: "55 min", date: "2023-11-19" },
      { title: "Psalm 150: Let Everything Praise", duration: "38 min", date: "2023-11-26" },
      { title: "Psalm 42: As the Deer Pants", duration: "46 min", date: "2023-12-03" },
      { title: "Psalm 91: He Who Dwells", duration: "43 min", date: "2023-12-10" },
      { title: "Psalm 103: Bless the Lord", duration: "47 min", date: "2023-12-17" }
    ]
  },
  {
    id: "sermon-on-mount",
    title: "The Sermon on the Mount",
    speaker: "Rev. Emily Rodriguez",
    episodes: 8,
    duration: "5 hours 20 min",
    description: "Explore Jesus' most famous teaching from Matthew 5-7, covering the Beatitudes and kingdom living.",
    scripture: "Matthew 5-7",
    category: "Bible Study",
    status: "Complete",
    image: "/images/series/sermon-on-mount.jpg",
    episodes: [
      { title: "The Beatitudes: Blessed Are", duration: "55 min", date: "2023-08-01" },
      { title: "Salt and Light", duration: "42 min", date: "2023-08-08" },
      { title: "The Law and the Prophets", duration: "48 min", date: "2023-08-15" },
      { title: "Anger and Reconciliation", duration: "45 min", date: "2023-08-22" },
      { title: "Adultery and Divorce", duration: "50 min", date: "2023-08-29" },
      { title: "Oaths and Truthfulness", duration: "40 min", date: "2023-09-05" },
      { title: "Love Your Enemies", duration: "52 min", date: "2023-09-12" },
      { title: "The Lord's Prayer", duration: "48 min", date: "2023-09-19" }
    ]
  },
  {
    id: "parables-of-jesus",
    title: "Parables of Jesus",
    speaker: "Dr. David Kim",
    episodes: 10,
    duration: "6 hours 15 min",
    description: "Discover the hidden meanings and timeless wisdom in Jesus' parables.",
    scripture: "Gospels",
    category: "Bible Study",
    status: "In Progress",
    image: "/images/series/parables-of-jesus.jpg",
    episodes: [
      { title: "The Good Samaritan", duration: "45 min", date: "2024-02-01" },
      { title: "The Prodigal Son", duration: "52 min", date: "2024-02-08" },
      { title: "The Sower and the Seed", duration: "48 min", date: "2024-02-15" },
      { title: "The Lost Sheep", duration: "40 min", date: "2024-02-22" },
      { title: "The Talents", duration: "46 min", date: "2024-02-29" },
      { title: "The Wedding Feast", duration: "44 min", date: "2024-03-07" },
      { title: "The Rich Fool", duration: "42 min", date: "2024-03-14" },
      { title: "The Pharisee and Tax Collector", duration: "38 min", date: "2024-03-21" },
      { title: "The Workers in the Vineyard", duration: "45 min", date: "2024-03-28" },
      { title: "The Ten Virgins", duration: "50 min", date: "2024-04-04" }
    ]
  },
  {
    id: "prayer-life",
    title: "A Life of Prayer",
    speaker: "Pastor Lisa Thompson",
    episodes: 6,
    duration: "4 hours 10 min",
    description: "Learn to develop a deeper, more meaningful prayer life that transforms your relationship with God.",
    scripture: "Various",
    category: "Spiritual Growth",
    status: "Complete",
    image: "/images/series/prayer-life.jpg",
    episodes: [
      { title: "What is Prayer?", duration: "45 min", date: "2023-11-01" },
      { title: "The Lord's Prayer Model", duration: "50 min", date: "2023-11-08" },
      { title: "Praying with Scripture", duration: "42 min", date: "2023-11-15" },
      { title: "Intercessory Prayer", duration: "48 min", date: "2023-11-22" },
      { title: "Prayer and Fasting", duration: "44 min", date: "2023-11-29" },
      { title: "Praying in the Spirit", duration: "41 min", date: "2023-12-06" }
    ]
  }
]

const categories = ["All", "Spiritual Growth", "Faith", "Bible Study", "Worship", "Family", "Community"]

export default function SermonSeriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/teachings/sermons"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sermons
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Sermon Series</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6">
            Explore complete teaching series designed to deepen your understanding of God's Word and strengthen your faith journey.
          </p>
          
          <div className="flex gap-4 mb-6">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4 mr-2" />
              Grid View
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4 mr-2" />
              List View
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermonSeries.map((series) => (
            <Card key={series.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={series.status === "Complete" ? "default" : "secondary"}>
                    {series.status}
                  </Badge>
                  <Badge variant="outline">{series.category}</Badge>
                </div>
                <CardTitle className="text-lg mb-2">{series.title}</CardTitle>
                <CardDescription className="mb-2">{series.speaker}</CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mic className="h-4 w-4" />
                    {series.episodes} episodes
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {series.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {series.description}
                </p>
                <div className="text-sm">
                  <span className="font-medium">Scripture:</span> {series.scripture}
                </div>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/teachings/sermons/series/${series.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      Start Series
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/teachings/sermons/series/${series.id}/episodes`}>
                      <List className="mr-2 h-4 w-4" />
                      Episodes
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Series */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Series</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">The Fruit of the Spirit</CardTitle>
              <CardDescription>Our most popular series - 9 episodes on spiritual growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore the nine fruits of the Spirit from Galatians 5:22-23 and learn how to cultivate them in your daily life. 
                    This comprehensive series covers love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild>
                      <Link href="/teachings/sermons/series/fruit-of-spirit">
                        <Play className="mr-2 h-4 w-4" />
                        Start Series
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/teachings/sermons/series/fruit-of-spirit/episodes">
                        View Episodes
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Recent Episodes:</h4>
                  {sermonSeries[0].episodes.slice(0, 3).map((episode, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="text-sm font-medium">{episode.title}</p>
                        <p className="text-xs text-muted-foreground">{episode.duration}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Study Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
            <CardDescription>Enhance your learning with additional resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/teachings/bible">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <BookOpen className="h-6 w-6 mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-2">Bible Study</h4>
                    <p className="text-sm text-muted-foreground">Deep dive into biblical passages and themes</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/teachings/devotionals">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Heart className="h-6 w-6 mb-2 text-red-600" />
                    <h4 className="font-semibold mb-2">Daily Devotionals</h4>
                    <p className="text-sm text-muted-foreground">Daily reflections to complement your study</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/studies/theology">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Users className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Theology Studies</h4>
                    <p className="text-sm text-muted-foreground">Academic study of religious doctrines</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Community */}
        <Card>
          <CardHeader>
            <CardTitle>Join the Community</CardTitle>
            <CardDescription>Connect with others studying these series</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4">
                <Users className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Study Groups</div>
                  <div className="text-sm text-muted-foreground">Join a group studying these series</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Discussion Forums</div>
                  <div className="text-sm text-muted-foreground">Share insights and ask questions</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 