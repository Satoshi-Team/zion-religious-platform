import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Play, BookOpen, Clock, Calendar, Mic, Users, Heart, Download, Share2, Bookmark, MessageCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Latest Sermon - The Power of Faith | Sermons & Teachings | ZION.FM',
  description: 'Listen to the latest sermon "The Power of Faith" by Dr. Sarah Johnson. Discover how faith transforms our lives and gives us strength in difficult times.',
  keywords: 'latest sermon, power of faith, Dr. Sarah Johnson, Christian teaching, spiritual growth, faith transformation',
  openGraph: {
    title: 'Latest Sermon - The Power of Faith',
    description: 'Discover how faith transforms our lives and gives us strength in difficult times.',
    type: 'website',
  },
}

const latestSermon = {
  title: "The Power of Faith",
  speaker: "Dr. Sarah Johnson",
  duration: "45 min",
  date: "2024-01-15",
  description: "Exploring how faith transforms our lives and gives us strength in difficult times.",
  category: "Faith",
  scripture: "Hebrews 11:1-6",
  audioUrl: "/sermons/power-of-faith",
  readUrl: "/sermons/power-of-faith/read",
  series: "Faith Foundations",
  seriesPart: 1,
  totalParts: 5,
  
  transcript: `
    Good morning, beloved. Today we're going to explore one of the most fundamental aspects of our spiritual journey: the power of faith.

    Hebrews 11:1 tells us, "Now faith is confidence in what we hope for and assurance about what we do not see." This simple yet profound definition opens up a world of understanding about how faith operates in our lives.

    Faith is not blind belief or wishful thinking. It's a confident trust in God's character and His promises. When we have faith, we're not just hoping something will happen; we're confident that God will fulfill His word.

    Let me share with you three ways that faith transforms our lives:

    First, faith gives us perspective. When we face difficult circumstances, faith helps us see beyond our current situation. We understand that God is working all things together for our good, even when we can't see how.

    Second, faith gives us peace. Philippians 4:7 promises that the peace of God, which transcends all understanding, will guard our hearts and minds in Christ Jesus. This peace comes through faith.

    Third, faith gives us power. Jesus said in Matthew 17:20 that if we have faith as small as a mustard seed, we can move mountains. Faith unleashes God's power in our lives.

    But how do we grow in faith? Romans 10:17 tells us that "faith comes from hearing the message, and the message is heard through the word about Christ." We grow in faith by immersing ourselves in God's Word and spending time in His presence.

    Let me encourage you today: whatever you're facing, whatever mountain seems impossible to move, remember that faith is the key. Trust in God's character, rely on His promises, and watch as He transforms your life through the power of faith.

    Let's pray together: Heavenly Father, thank You for the gift of faith. Help us to grow in our confidence in You and Your promises. Give us the perspective, peace, and power that come through faith. In Jesus' name, amen.
  `,
  
  keyPoints: [
    "Faith is confidence in what we hope for and assurance about what we do not see",
    "Faith gives us perspective beyond our current circumstances",
    "Faith provides peace that transcends understanding",
    "Faith unleashes God's power in our lives",
    "Faith grows through hearing and studying God's Word"
  ],
  
  discussionQuestions: [
    "What does faith mean to you personally?",
    "How has faith helped you through difficult times?",
    "What areas of your life do you need more faith in?",
    "How can you grow in your faith this week?",
    "What promises of God do you need to trust more fully?"
  ],
  
  relatedSermons: [
    {
      title: "Walking in Love",
      speaker: "Pastor Michael Chen",
      duration: "38 min",
      date: "2024-01-08",
      link: "/teachings/sermons/walking-in-love"
    },
    {
      title: "Finding Peace in Chaos",
      speaker: "Rev. Emily Rodriguez",
      duration: "42 min",
      date: "2024-01-01",
      link: "/teachings/sermons/finding-peace"
    },
    {
      title: "Trusting God's Plan",
      speaker: "Dr. Sarah Johnson",
      duration: "40 min",
      date: "2023-12-25",
      link: "/teachings/sermons/trusting-gods-plan"
    }
  ]
}

export default function LatestSermonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
          
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{latestSermon.title}</h1>
              <p className="text-lg text-muted-foreground mb-2">{latestSermon.speaker}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {latestSermon.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(latestSermon.date).toLocaleDateString()}
                </span>
                <Badge variant="secondary">{latestSermon.category}</Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            {latestSermon.description}
          </p>
          
          <div className="flex gap-4 mb-6">
            <Button asChild size="lg">
              <Link href={latestSermon.audioUrl}>
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href={latestSermon.readUrl}>
                <BookOpen className="mr-2 h-5 w-5" />
                Read Transcript
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="study">Study Guide</TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sermon Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Scripture Reference</h4>
                    <p className="text-sm text-muted-foreground">{latestSermon.scripture}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Series</h4>
                    <p className="text-sm text-muted-foreground">
                      {latestSermon.series} (Part {latestSermon.seriesPart} of {latestSermon.totalParts})
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Points</h4>
                  <ul className="space-y-2">
                    {latestSermon.keyPoints.map((point, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transcript" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Transcript</CardTitle>
                <CardDescription>Complete written version of the sermon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {latestSermon.transcript.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="study" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Questions</CardTitle>
                <CardDescription>Reflect on these questions individually or in a group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestSermon.discussionQuestions.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Question {index + 1}</h4>
                      <p className="text-sm">{question}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Further Study</CardTitle>
                <CardDescription>Additional resources to deepen your understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/teachings/bible">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <BookOpen className="h-6 w-6 mb-2 text-blue-600" />
                        <h4 className="font-semibold mb-2">Bible Study</h4>
                        <p className="text-sm text-muted-foreground">Explore related Bible passages and teachings</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/teachings/devotionals">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <Heart className="h-6 w-6 mb-2 text-red-600" />
                        <h4 className="font-semibold mb-2">Daily Devotionals</h4>
                        <p className="text-sm text-muted-foreground">Daily reflections on faith and spiritual growth</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="related" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Related Sermons</CardTitle>
                <CardDescription>Other sermons you might find helpful</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestSermon.relatedSermons.map((sermon, index) => (
                    <Link key={index} href={sermon.link}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{sermon.title}</h4>
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
                              </div>
                            </div>
                            <Button size="sm">
                              <Play className="mr-2 h-4 w-4" />
                              Listen
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Series Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Faith Foundations Series</CardTitle>
            <CardDescription>Continue your journey through this sermon series</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Button 
                  key={i} 
                  variant={i === 0 ? "default" : "outline"}
                  asChild
                  className="h-auto p-3"
                >
                  <Link href={`/teachings/sermons/series/faith-foundations/${i + 1}`}>
                    <div className="text-center">
                      <div className="font-semibold">Part {i + 1}</div>
                      <div className="text-xs text-muted-foreground">
                        {i === 0 ? "The Power of Faith" : 
                         i === 1 ? "Walking in Love" :
                         i === 2 ? "Finding Peace" :
                         i === 3 ? "Trusting God" : "Living with Purpose"}
                      </div>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community */}
        <Card>
          <CardHeader>
            <CardTitle>Join the Discussion</CardTitle>
            <CardDescription>Share your thoughts and connect with others</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Share Your Thoughts</div>
                  <div className="text-sm text-muted-foreground">Comment on this sermon</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-4">
                <Users className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Join Study Group</div>
                  <div className="text-sm text-muted-foreground">Discuss with others</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 