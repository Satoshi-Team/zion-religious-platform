import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, Calendar, Clock, BookOpen, Users, Star, ArrowRight, BookMarked, ArrowLeft, Play, Share2, Bookmark, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Today\'s Devotional - Walking in Faith | Daily Devotionals | ZION.FM',
  description: 'Today\'s devotional: "Walking in Faith" - Explore how to cultivate and strengthen your faith in daily life with practical guidance and biblical wisdom.',
  keywords: 'today devotional, walking in faith, daily devotional, christian devotion, faith building, spiritual growth',
  openGraph: {
    title: 'Today\'s Devotional - Walking in Faith',
    description: 'Cultivate and strengthen your faith in daily life.',
    type: 'website',
  },
}

const todaysDevotional = {
  title: "Walking in Faith",
  scripture: "Hebrews 11:1",
  verse: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  author: "Rev. Sarah Johnson",
  date: new Date().toISOString().split('T')[0],
  duration: "12 min read",
  category: "Faith",
  rating: 4.9,
  participants: 1247,
  
  content: `
    Good morning, beloved. As we begin this new day, let's reflect on what it means to walk in faith.

    Faith is not just a belief system; it's a way of life. When we walk in faith, we trust that God is working in our lives even when we can't see the full picture. Hebrews 11:1 reminds us that "faith is confidence in what we hope for and assurance about what we do not see."

    Think about that for a moment. Faith is confidence. It's not wishful thinking or blind optimism. It's a deep, abiding confidence in God's character and His promises. When we have faith, we're not just hoping something will happen; we're confident that God will fulfill His word.

    Faith is also assurance. It's certainty about what we do not see. This means that even when our circumstances seem uncertain, even when the path ahead is unclear, we can have assurance that God is with us and working for our good.

    So how do we walk in faith today? Here are three practical ways:

    First, remember God's faithfulness. Look back at your life and recall the times when God has been faithful to you. Remember the prayers He has answered, the ways He has provided, the times He has comforted you. His faithfulness in the past gives us confidence for the future.

    Second, focus on God's character rather than your circumstances. When we focus on our problems, they seem overwhelming. But when we focus on God's character - His love, His power, His wisdom - our problems seem smaller in comparison.

    Third, take one step at a time. Faith doesn't mean we have all the answers or know exactly how things will work out. It means we trust God enough to take the next step, even when we can't see the whole path.

    Today, let's choose to walk in faith. Let's choose confidence over doubt, assurance over fear, trust over worry. Let's remember that the same God who created the universe is working in our lives, and He is faithful.

    Let's pray together: Heavenly Father, thank You for the gift of faith. Help us to walk in confidence and assurance today. Remind us of Your faithfulness and help us to trust You with every step. In Jesus' name, amen.
  `,
  
  reflectionQuestions: [
    "What does faith mean to you personally?",
    "How has God been faithful to you in the past?",
    "What area of your life do you need more faith in today?",
    "How can you focus on God's character rather than your circumstances?",
    "What is one step of faith you can take today?"
  ],
  
  practicalApplication: [
    "Start your day with a prayer of faith and trust",
    "Write down one way God has been faithful to you",
    "Choose to trust God with one specific concern today",
    "Share your faith journey with someone else",
    "Read a passage about God's faithfulness"
  ],
  
  relatedScriptures: [
    {
      reference: "Romans 8:28",
      verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
    },
    {
      reference: "2 Corinthians 5:7",
      verse: "For we live by faith, not by sight."
    },
    {
      reference: "Proverbs 3:5-6",
      verse: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
    },
    {
      reference: "Isaiah 40:31",
      verse: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."
    }
  ],
  
  prayer: `
    Heavenly Father,
    
    Thank You for this new day and for the gift of faith. Help me to walk in confidence and assurance today, trusting that You are working in my life even when I cannot see the full picture.
    
    Remind me of Your faithfulness in the past and give me strength to trust You with the future. Help me to focus on Your character rather than my circumstances, knowing that You are loving, powerful, and wise.
    
    Give me the courage to take steps of faith today, even when the path is unclear. Help me to remember that You are with me always and that You will never leave me or forsake me.
    
    Thank You for Your promises and for Your faithfulness. Help me to live this day in faith, trusting You with every moment.
    
    In Jesus' name, amen.
  `,
  
  relatedDevotionals: [
    {
      title: "Trusting God's Plan",
      author: "Dr. Michael Chen",
      duration: "10 min",
      category: "Trust",
      link: "/teachings/devotionals/trusting-gods-plan"
    },
    {
      title: "Finding Peace in Uncertainty",
      author: "Rev. Emily Rodriguez",
      duration: "8 min",
      category: "Peace",
      link: "/teachings/devotionals/finding-peace"
    },
    {
      title: "God's Faithfulness",
      author: "Pastor David Kim",
      duration: "12 min",
      category: "Faith",
      link: "/teachings/devotionals/gods-faithfulness"
    }
  ]
}

export default function TodaysDevotionalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/teachings/devotionals"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Devotionals
            </Link>
          </div>
          
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{todaysDevotional.title}</h1>
              <p className="text-lg text-muted-foreground mb-2">{todaysDevotional.author}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(todaysDevotional.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {todaysDevotional.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {todaysDevotional.participants} reading today
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {todaysDevotional.rating} ★
                </span>
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
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 mb-6">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{todaysDevotional.scripture}</h2>
                <p className="text-lg italic text-muted-foreground mb-4">
                  "{todaysDevotional.verse}"
                </p>
                <Badge variant="secondary">{todaysDevotional.category}</Badge>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4 mb-6">
            <Button asChild size="lg">
              <Link href="/teachings/devotionals/today/audio">
                <Play className="mr-2 h-5 w-5" />
                Listen to Audio
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/teachings/devotionals/subscribe">
                <Heart className="mr-2 h-5 w-5" />
                Subscribe Daily
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="content" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Devotional</TabsTrigger>
            <TabsTrigger value="reflection">Reflection</TabsTrigger>
            <TabsTrigger value="prayer">Prayer</TabsTrigger>
            <TabsTrigger value="related">Related</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Message</CardTitle>
                <CardDescription>Reflect on today's devotional content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {todaysDevotional.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Scriptures</CardTitle>
                <CardDescription>Additional verses to meditate on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysDevotional.relatedScriptures.map((scripture, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{scripture.reference}</h4>
                      <p className="text-sm italic text-muted-foreground">"{scripture.verse}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reflection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reflection Questions</CardTitle>
                <CardDescription>Take time to reflect on these questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysDevotional.reflectionQuestions.map((question, index) => (
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
                <CardTitle>Practical Application</CardTitle>
                <CardDescription>Ways to apply today's message to your life</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaysDevotional.practicalApplication.map((application, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-sm">{application}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prayer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Prayer</CardTitle>
                <CardDescription>Pray this prayer or use it as a guide for your own prayer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {todaysDevotional.prayer.split('\n').map((line, index) => (
                    <p key={index} className="mb-2 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prayer Journal</CardTitle>
                <CardDescription>Write down your own prayers and reflections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">My Prayer Today</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg min-h-[100px] text-sm"
                      placeholder="Write your prayer here..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">What I'm Thankful For</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg min-h-[80px] text-sm"
                      placeholder="List your blessings..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Prayer Requests</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg min-h-[80px] text-sm"
                      placeholder="Write your prayer requests..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="related" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Related Devotionals</CardTitle>
                <CardDescription>Other devotionals you might find helpful</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysDevotional.relatedDevotionals.map((devotional, index) => (
                    <Link key={index} href={devotional.link}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{devotional.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{devotional.author}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {devotional.duration}
                                </span>
                                <Badge variant="outline">{devotional.category}</Badge>
                              </div>
                            </div>
                            <Button size="sm">
                              <Heart className="mr-2 h-4 w-4" />
                              Read
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

        {/* Community */}
        <Card>
          <CardHeader>
            <CardTitle>Join the Community</CardTitle>
            <CardDescription>Connect with others reading today's devotional</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Share Your Thoughts</div>
                  <div className="text-sm text-muted-foreground">Comment on today's devotional</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-4">
                <Users className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Join Discussion</div>
                  <div className="text-sm text-muted-foreground">Connect with other readers</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 