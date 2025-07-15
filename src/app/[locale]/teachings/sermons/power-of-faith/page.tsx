import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Play, BookOpen, Clock, Calendar, Mic, Users, Heart, Download, Share2, Bookmark, MessageCircle, ArrowLeft, Volume2, Pause } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Power of Faith - Dr. Sarah Johnson | Sermons & Teachings | ZION.FM',
  description: 'Listen to "The Power of Faith" by Dr. Sarah Johnson. Discover how faith transforms our lives and gives us strength in difficult times. Complete with transcript and study guide.',
  keywords: 'power of faith, Dr. Sarah Johnson, sermon, christian teaching, faith transformation, spiritual growth, Hebrews 11',
  openGraph: {
    title: 'The Power of Faith - Dr. Sarah Johnson',
    description: 'Discover how faith transforms our lives and gives us strength in difficult times.',
    type: 'website',
  },
}

const sermonData = {
  title: "The Power of Faith",
  speaker: "Dr. Sarah Johnson",
  duration: "45 min",
  date: "2024-01-15",
  description: "Exploring how faith transforms our lives and gives us strength in difficult times.",
  category: "Faith",
  scripture: "Hebrews 11:1-6",
  series: "Faith Foundations",
  seriesPart: 1,
  totalParts: 5,
  audioUrl: "/audio/sermons/power-of-faith.mp3",
  
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
  ],
  
  studyNotes: {
    scriptureReferences: [
      "Hebrews 11:1-6 - Definition of faith",
      "Philippians 4:7 - Peace through faith",
      "Matthew 17:20 - Faith moves mountains",
      "Romans 10:17 - Faith comes from hearing",
      "James 2:14-26 - Faith and works"
    ],
    keyTerms: [
      "Faith - Confidence in what we hope for",
      "Assurance - Certainty about what we do not see",
      "Perspective - Seeing beyond current circumstances",
      "Peace - Inner tranquility through faith",
      "Power - God's strength unleashed through faith"
    ],
    applicationPoints: [
      "Trust God's character in difficult times",
      "Rely on God's promises daily",
      "Study Scripture to grow in faith",
      "Pray for increased faith",
      "Share your faith journey with others"
    ]
  }
}

export default function PowerOfFaithSermonPage() {
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
              <h1 className="text-3xl font-bold mb-2">{sermonData.title}</h1>
              <p className="text-lg text-muted-foreground mb-2">{sermonData.speaker}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {sermonData.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(sermonData.date).toLocaleDateString()}
                </span>
                <Badge variant="secondary">{sermonData.category}</Badge>
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
            {sermonData.description}
          </p>
          
          {/* Audio Player */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Audio Player</h3>
                  <p className="text-sm text-muted-foreground">{sermonData.title}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button size="lg" className="rounded-full w-12 h-12 p-0">
                  <Play className="h-6 w-6" />
                </Button>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>11:15</span>
                    <span>{sermonData.duration}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4 mb-6">
            <Button asChild size="lg">
              <Link href={`/teachings/sermons/series/${sermonData.series.toLowerCase().replace(/\s+/g, '-')}`}>
                <Play className="mr-2 h-5 w-5" />
                Continue Series
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/teachings/sermons/series">
                <Mic className="mr-2 h-5 w-5" />
                View All Series
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="transcript" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="study">Study Guide</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
          </TabsList>

          <TabsContent value="transcript" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Transcript</CardTitle>
                <CardDescription>Complete written version of the sermon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {sermonData.transcript.split('\n').map((paragraph, index) => (
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
                <CardTitle>Key Points</CardTitle>
                <CardDescription>Main takeaways from the sermon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sermonData.keyPoints.map((point, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-semibold mb-1">Point {index + 1}</h4>
                      <p className="text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Discussion Questions</CardTitle>
                <CardDescription>Reflect on these questions individually or in a group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sermonData.discussionQuestions.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Question {index + 1}</h4>
                      <p className="text-sm">{question}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Notes</CardTitle>
                <CardDescription>Additional resources for deeper study</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Scripture References</h4>
                    <ul className="space-y-2">
                      {sermonData.studyNotes.scriptureReferences.map((ref, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {ref}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Terms</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sermonData.studyNotes.keyTerms.map((term, index) => (
                        <div key={index} className="p-3 border rounded">
                          <p className="font-medium text-sm">{term.split(' - ')[0]}</p>
                          <p className="text-xs text-muted-foreground">{term.split(' - ')[1]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Application Points</h4>
                    <ul className="space-y-2">
                      {sermonData.studyNotes.applicationPoints.map((point, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  {sermonData.relatedSermons.map((sermon, index) => (
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