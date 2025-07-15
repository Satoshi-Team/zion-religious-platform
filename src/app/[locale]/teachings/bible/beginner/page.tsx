import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Search, Users, Calendar, Clock, BookMarked, Heart, Target, ArrowLeft, Play, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beginner Bible Studies - Start Your Journey | Bible Teachings | ZION.FM',
  description: 'Perfect for those new to Bible study. Learn basic reading techniques, understand historical context, and discover key themes with our structured beginner courses.',
  keywords: 'beginner bible study, bible basics, how to read the bible, bible study for beginners, christian education',
  openGraph: {
    title: 'Beginner Bible Studies - Start Your Journey',
    description: 'Learn essential Bible study techniques and foundational knowledge.',
    type: 'website',
  },
}

const beginnerStudies = [
  {
    id: "understanding-the-bible",
    title: "Understanding the Bible",
    description: "Learn essential techniques for reading and studying scripture effectively.",
    duration: "6 weeks",
    level: "Beginner",
    category: "Foundations",
    lessons: 12,
    progress: 0,
    image: "/images/bible-study-1.jpg",
    topics: [
      "How to read the Bible effectively",
      "Understanding different Bible translations",
      "Historical and cultural context",
      "Basic interpretation principles",
      "Finding key themes and messages",
      "Applying scripture to daily life"
    ],
    lessons: [
      { title: "Introduction to Bible Study", duration: "30 min", completed: false },
      { title: "Choosing a Bible Translation", duration: "25 min", completed: false },
      { title: "Understanding Biblical Genres", duration: "35 min", completed: false },
      { title: "Historical Context Basics", duration: "40 min", completed: false },
      { title: "Reading for Understanding", duration: "30 min", completed: false },
      { title: "Finding Key Themes", duration: "35 min", completed: false },
      { title: "Cross-References", duration: "25 min", completed: false },
      { title: "Prayer and Bible Study", duration: "30 min", completed: false },
      { title: "Study Tools and Resources", duration: "35 min", completed: false },
      { title: "Creating a Study Plan", duration: "30 min", completed: false },
      { title: "Group Study Basics", duration: "25 min", completed: false },
      { title: "Applying What You Learn", duration: "35 min", completed: false }
    ]
  },
  {
    id: "bible-basics",
    title: "Bible Basics",
    description: "Essential knowledge about the Bible's structure, history, and key concepts.",
    duration: "4 weeks",
    level: "Beginner",
    category: "Foundations",
    lessons: 8,
    progress: 0,
    image: "/images/bible-study-2.jpg",
    topics: [
      "Bible structure and organization",
      "Old Testament overview",
      "New Testament overview",
      "Key biblical concepts",
      "Important biblical figures",
      "Major events and stories"
    ],
    lessons: [
      { title: "What is the Bible?", duration: "30 min", completed: false },
      { title: "Old Testament Overview", duration: "40 min", completed: false },
      { title: "New Testament Overview", duration: "40 min", completed: false },
      { title: "Key Biblical Concepts", duration: "35 min", completed: false },
      { title: "Important Biblical Figures", duration: "45 min", completed: false },
      { title: "Major Biblical Events", duration: "40 min", completed: false },
      { title: "Bible Timeline", duration: "30 min", completed: false },
      { title: "Review and Application", duration: "35 min", completed: false }
    ]
  },
  {
    id: "gospel-introduction",
    title: "Introduction to the Gospels",
    description: "Discover the life and teachings of Jesus through the four Gospels.",
    duration: "5 weeks",
    level: "Beginner",
    category: "Gospels",
    lessons: 10,
    progress: 0,
    image: "/images/bible-study-3.jpg",
    topics: [
      "Overview of the four Gospels",
      "The life of Jesus",
      "Key teachings and parables",
      "Miracles and their meaning",
      "The death and resurrection",
      "Following Jesus today"
    ],
    lessons: [
      { title: "What are the Gospels?", duration: "30 min", completed: false },
      { title: "The Life of Jesus", duration: "40 min", completed: false },
      { title: "Jesus' Birth and Early Life", duration: "35 min", completed: false },
      { title: "Jesus' Ministry Begins", duration: "40 min", completed: false },
      { title: "Jesus' Teachings", duration: "45 min", completed: false },
      { title: "Jesus' Parables", duration: "40 min", completed: false },
      { title: "Jesus' Miracles", duration: "35 min", completed: false },
      { title: "Jesus' Death and Resurrection", duration: "45 min", completed: false },
      { title: "Following Jesus", duration: "30 min", completed: false },
      { title: "Living the Gospel", duration: "35 min", completed: false }
    ]
  },
  {
    id: "prayer-basics",
    title: "Prayer Basics",
    description: "Learn how to pray effectively and develop a meaningful prayer life.",
    duration: "3 weeks",
    level: "Beginner",
    category: "Spiritual Growth",
    lessons: 6,
    progress: 0,
    image: "/images/bible-study-4.jpg",
    topics: [
      "What is prayer?",
      "Different types of prayer",
      "The Lord's Prayer",
      "Praying with scripture",
      "Developing a prayer habit",
      "Prayer and daily life"
    ],
    lessons: [
      { title: "What is Prayer?", duration: "30 min", completed: false },
      { title: "Types of Prayer", duration: "35 min", completed: false },
      { title: "The Lord's Prayer", duration: "40 min", completed: false },
      { title: "Praying with Scripture", duration: "30 min", completed: false },
      { title: "Developing a Prayer Habit", duration: "35 min", completed: false },
      { title: "Prayer in Daily Life", duration: "30 min", completed: false }
    ]
  }
]

const learningPath = [
  {
    step: 1,
    title: "Start with Bible Basics",
    description: "Learn the fundamentals of the Bible's structure and history",
    study: "Bible Basics",
    duration: "4 weeks",
    status: "available"
  },
  {
    step: 2,
    title: "Learn Study Methods",
    description: "Develop effective Bible reading and study techniques",
    study: "Understanding the Bible",
    duration: "6 weeks",
    status: "locked"
  },
  {
    step: 3,
    title: "Explore the Gospels",
    description: "Discover the life and teachings of Jesus",
    study: "Introduction to the Gospels",
    duration: "5 weeks",
    status: "locked"
  },
  {
    step: 4,
    title: "Develop Prayer Life",
    description: "Learn to pray effectively and meaningfully",
    study: "Prayer Basics",
    duration: "3 weeks",
    status: "locked"
  }
]

export default function BeginnerBibleStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/teachings/bible"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Bible Studies
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Beginner Bible Studies</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Perfect for those new to Bible study. Learn basic reading techniques, 
              understand historical context, and discover key themes with our structured courses.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/bible">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Bible Online
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/teachings/bible/beginner/learning-path">
                  <Target className="mr-2 h-5 w-5" />
                  Follow Learning Path
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="courses" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Available Courses</TabsTrigger>
            <TabsTrigger value="path">Learning Path</TabsTrigger>
            <TabsTrigger value="resources">Study Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beginnerStudies.map((study) => (
                <Card key={study.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{study.level}</Badge>
                      <Badge variant="outline">{study.category}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{study.title}</CardTitle>
                    <CardDescription className="mb-3">{study.description}</CardDescription>
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
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {study.topics.slice(0, 3).map((topic, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 mt-0.5 text-green-600" />
                            {topic}
                          </li>
                        ))}
                        {study.topics.length > 3 && (
                          <li className="text-blue-600 text-xs">+{study.topics.length - 3} more topics</li>
                        )}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/teachings/bible/beginner/${study.id}`}>
                          <Play className="mr-2 h-4 w-4" />
                          Start Course
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/teachings/bible/beginner/${study.id}/overview`}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Overview
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="path" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Learning Path</CardTitle>
                <CardDescription>Follow this structured path for the best learning experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningPath.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step.status === 'completed' ? 'bg-green-600 text-white' :
                        step.status === 'available' ? 'bg-blue-600 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">{step.study}</span> • {step.duration}
                          </div>
                          {step.status === 'available' && (
                            <Button asChild size="sm">
                              <Link href={`/teachings/bible/beginner/${step.study.toLowerCase().replace(/\s+/g, '-')}`}>
                                Start Now
                              </Link>
                            </Button>
                          )}
                          {step.status === 'locked' && (
                            <Button variant="outline" size="sm" disabled>
                              Locked
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Study Guides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Downloadable study guides and worksheets to enhance your learning.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/teachings/bible/beginner/study-guides">View Guides</Link>
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
                  <p className="text-sm text-muted-foreground mb-4">
                    Join a study group to learn with others and share insights.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/teachings/bible/beginner/study-groups">Find Groups</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Recommended Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Books, apps, and tools to support your Bible study journey.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/teachings/bible/beginner/resources">View Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tips for Beginners */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tips for Beginner Bible Study</CardTitle>
            <CardDescription>Helpful advice to get you started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Start Small</h4>
                  <p className="text-sm text-muted-foreground">
                    Begin with short passages and gradually increase your reading time. 
                    Quality is more important than quantity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pray Before Reading</h4>
                  <p className="text-sm text-muted-foreground">
                    Ask God to help you understand His Word and apply it to your life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Use Study Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    Bible dictionaries, commentaries, and study Bibles can help clarify 
                    difficult passages.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Read in Context</h4>
                  <p className="text-sm text-muted-foreground">
                    Always read verses in their surrounding context to understand 
                    the full meaning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Apply What You Learn</h4>
                  <p className="text-sm text-muted-foreground">
                    Look for practical ways to apply biblical principles to your daily life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Join a Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Studying with others can provide new insights and keep you motivated.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Ready for More?</CardTitle>
            <CardDescription>Continue your Bible study journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/teachings/bible/intermediate">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <BookMarked className="h-6 w-6 mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-2">Intermediate Studies</h4>
                    <p className="text-sm text-muted-foreground">Dive deeper into theological concepts and analysis</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/teachings/devotionals">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Heart className="h-6 w-6 mb-2 text-red-600" />
                    <h4 className="font-semibold mb-2">Daily Devotionals</h4>
                    <p className="text-sm text-muted-foreground">Short daily readings and reflections</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/teachings/sermons">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Play className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Sermons</h4>
                    <p className="text-sm text-muted-foreground">Listen to inspiring messages and teachings</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 