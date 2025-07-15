import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Theology Proper - Study of God | Theology Studies | ZION.FM',
  description: 'Explore the nature, attributes, and character of God through systematic theology. Study divine attributes, Trinity doctrine, and theological concepts about God.',
  keywords: 'theology proper, study of God, divine attributes, Trinity doctrine, omnipotence, omniscience, omnipresence, systematic theology',
  openGraph: {
    title: 'Theology Proper - Study of God',
    description: 'Comprehensive study of the nature, attributes, and character of God.',
    type: 'website',
  },
}

const theologyData = {
  title: "Theology Proper (Study of God)",
  description: "Understanding the nature, attributes, and character of God",
  category: "Systematic Theology",
  level: "Advanced",
  duration: "8 weeks",
  lessons: 16,
  
  overview: `
    Theology Proper is the branch of systematic theology that focuses specifically on the study of God Himself. 
    It examines God's nature, attributes, character, and being. This foundational area of theology provides the 
    basis for understanding all other theological concepts, as everything in theology flows from our understanding of God.
    
    The study of God is both the most important and most challenging area of theology. It's important because 
    our understanding of God shapes everything else we believe about faith, salvation, and the Christian life. 
    It's challenging because we are finite creatures trying to understand an infinite God.
  `,
  
  divineAttributes: [
    {
      category: "Communicable Attributes",
      description: "Attributes that God shares with humans in a limited way",
      attributes: [
        {
          name: "Love",
          definition: "God's perfect, self-giving love for His creation",
          scripture: "1 John 4:8 - 'God is love'",
          explanation: "God's love is not emotional or conditional, but a perfect, self-giving love that seeks the good of others. This love is the foundation of God's relationship with humanity and the motivation for salvation."
        },
        {
          name: "Wisdom",
          definition: "God's perfect knowledge and understanding of all things",
          scripture: "Romans 11:33 - 'Oh, the depth of the riches of the wisdom and knowledge of God!'",
          explanation: "God's wisdom encompasses perfect knowledge of all things past, present, and future, along with perfect understanding of how all things work together for His purposes."
        },
        {
          name: "Holiness",
          definition: "God's moral perfection and separation from sin",
          scripture: "Isaiah 6:3 - 'Holy, holy, holy is the Lord Almighty'",
          explanation: "God's holiness means He is completely pure, morally perfect, and separate from all sin and evil. This holiness is the standard by which all moral judgments are made."
        },
        {
          name: "Justice",
          definition: "God's perfect fairness and righteous judgment",
          scripture: "Deuteronomy 32:4 - 'He is the Rock, his works are perfect, and all his ways are just'",
          explanation: "God's justice means He always does what is right and fair. He cannot be bribed or influenced, and His judgments are always perfect and righteous."
        }
      ]
    },
    {
      category: "Incommunicable Attributes",
      description: "Attributes that belong to God alone and cannot be shared with humans",
      attributes: [
        {
          name: "Omnipotence",
          definition: "God's unlimited power to do all things that are consistent with His nature",
          scripture: "Jeremiah 32:17 - 'Nothing is too hard for you'",
          explanation: "God's omnipotence means He has unlimited power to do anything that is consistent with His character. He cannot do things that are logically impossible or contrary to His nature."
        },
        {
          name: "Omniscience",
          definition: "God's perfect knowledge of all things past, present, and future",
          scripture: "Psalm 147:5 - 'His understanding has no limit'",
          explanation: "God knows everything that has happened, is happening, and will happen. He knows all possibilities and all actualities. His knowledge is perfect and complete."
        },
        {
          name: "Omnipresence",
          definition: "God's presence everywhere at all times",
          scripture: "Psalm 139:7-10 - 'Where can I go from your Spirit?'",
          explanation: "God is present everywhere in the universe at all times. He is not limited by space or time. This doesn't mean God is everything (pantheism), but that He is present everywhere."
        },
        {
          name: "Immutability",
          definition: "God's unchanging nature and character",
          scripture: "Malachi 3:6 - 'I the Lord do not change'",
          explanation: "God's character, nature, and purposes never change. He is the same yesterday, today, and forever. This doesn't mean God is static, but that His essential nature is constant."
        }
      ]
    }
  ],
  
  trinityDoctrine: {
    title: "The Trinity",
    description: "The Christian doctrine that God exists as three persons in one essence",
    definition: "God is one in essence but three in person: Father, Son, and Holy Spirit",
    keyPoints: [
      "There is only one God (monotheism)",
      "The Father is God",
      "The Son is God",
      "The Holy Spirit is God",
      "The Father, Son, and Holy Spirit are distinct persons",
      "The three persons are co-equal and co-eternal"
    ],
    biblicalEvidence: [
      {
        reference: "Matthew 28:19",
        text: "Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit"
      },
      {
        reference: "2 Corinthians 13:14",
        text: "May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all"
      },
      {
        reference: "John 1:1",
        text: "In the beginning was the Word, and the Word was with God, and the Word was God"
      }
    ],
    historicalDevelopment: [
      {
        period: "Early Church",
        description: "Development of Trinitarian language and concepts",
        keyFigures: ["Irenaeus", "Tertullian", "Origen"]
      },
      {
        period: "Council of Nicaea (325)",
        description: "Affirmation of Christ's divinity and the Trinity",
        keyFigures: ["Athanasius", "Constantine"]
      },
      {
        period: "Council of Constantinople (381)",
        description: "Clarification of the Holy Spirit's divinity",
        keyFigures: ["Gregory of Nazianzus", "Basil the Great"]
      }
    ]
  },
  
  practicalApplications: [
    {
      title: "Worship and Prayer",
      description: "Understanding God's nature shapes how we worship and pray",
      applications: [
        "Worship God for who He is, not just what He does",
        "Pray with confidence in God's power and love",
        "Recognize God's holiness in worship",
        "Trust in God's wisdom and justice"
      ]
    },
    {
      title: "Christian Living",
      description: "God's attributes guide our daily lives",
      applications: [
        "Imitate God's love in relationships",
        "Seek wisdom from God's Word",
        "Pursue holiness in personal conduct",
        "Trust in God's justice and timing"
      ]
    },
    {
      title: "Ministry and Service",
      description: "God's character informs our service to others",
      applications: [
        "Serve with God's love and compassion",
        "Rely on God's power in ministry",
        "Trust in God's guidance and wisdom",
        "Reflect God's holiness in service"
      ]
    }
  ],
  
  studyResources: [
    {
      title: "Systematic Theology",
      author: "Wayne Grudem",
      description: "Comprehensive systematic theology with excellent section on theology proper",
      link: "/studies/theology/systematic"
    },
    {
      title: "The Doctrine of God",
      author: "John Frame",
      description: "In-depth study of God's attributes and nature",
      link: "/studies/theology/systematic/attributes"
    },
    {
      title: "The Trinity",
      author: "Various Authors",
      description: "Historical and theological development of Trinitarian doctrine",
      link: "/studies/theology/systematic/trinity"
    }
  ]
}

export default function TheologyProperPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/studies/theology"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Theology Studies
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{theologyData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {theologyData.description}
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary">{theologyData.category}</Badge>
              <Badge variant="outline">{theologyData.level}</Badge>
              <Badge variant="outline">{theologyData.duration}</Badge>
              <Badge variant="outline">{theologyData.lessons} lessons</Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attributes">Divine Attributes</TabsTrigger>
            <TabsTrigger value="trinity">Trinity</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is Theology Proper?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {theologyData.overview.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Theological Method</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Brain className="h-4 w-4 mt-0.5 text-blue-600" />
                        Systematic analysis of biblical teaching
                      </li>
                      <li className="flex items-start gap-2">
                        <Book className="h-4 w-4 mt-0.5 text-green-600" />
                        Historical development of doctrine
                      </li>
                      <li className="flex items-start gap-2">
                        <Compass className="h-4 w-4 mt-0.5 text-purple-600" />
                        Philosophical reflection on divine nature
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="h-4 w-4 mt-0.5 text-red-600" />
                        Practical application to Christian life
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Study Areas</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 mt-0.5 text-blue-600" />
                        Divine attributes and characteristics
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="h-4 w-4 mt-0.5 text-green-600" />
                        Trinity doctrine and relationships
                      </li>
                      <li className="flex items-start gap-2">
                        <Eye className="h-4 w-4 mt-0.5 text-purple-600" />
                        God's self-revelation and names
                      </li>
                      <li className="flex items-start gap-2">
                        <Globe className="h-4 w-4 mt-0.5 text-red-600" />
                        God's relationship to creation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attributes" className="space-y-6">
            {theologyData.divineAttributes.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.attributes.map((attribute, attrIndex) => (
                      <div key={attrIndex} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-lg mb-2">{attribute.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{attribute.definition}</p>
                        <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mb-3">
                          <p className="text-sm font-medium mb-1">Scripture Reference:</p>
                          <p className="text-sm italic">{attribute.scripture}</p>
                        </div>
                        <p className="text-sm">{attribute.explanation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="trinity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{theologyData.trinityDoctrine.title}</CardTitle>
                <CardDescription>{theologyData.trinityDoctrine.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Definition</h4>
                    <p className="text-sm bg-blue-50 dark:bg-blue-950 p-3 rounded">
                      {theologyData.trinityDoctrine.definition}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Points</h4>
                    <ul className="space-y-2">
                      {theologyData.trinityDoctrine.keyPoints.map((point, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Biblical Evidence</h4>
                    <div className="space-y-3">
                      {theologyData.trinityDoctrine.biblicalEvidence.map((evidence, index) => (
                        <div key={index} className="p-3 border rounded">
                          <p className="font-medium text-sm mb-1">{evidence.reference}</p>
                          <p className="text-sm italic">{evidence.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Historical Development</h4>
                    <div className="space-y-3">
                      {theologyData.trinityDoctrine.historicalDevelopment.map((period, index) => (
                        <div key={index} className="p-3 border rounded">
                          <h5 className="font-medium mb-1">{period.period}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{period.description}</p>
                          <p className="text-sm"><strong>Key Figures:</strong> {period.keyFigures.join(', ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {theologyData.practicalApplications.map((application, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{application.title}</CardTitle>
                    <CardDescription>{application.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {application.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Resources</CardTitle>
                <CardDescription>Additional materials for deeper study</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {theologyData.studyResources.map((resource, index) => (
                    <Link key={index} href={resource.link}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-1">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">by {resource.author}</p>
                          <p className="text-sm">{resource.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Studies</CardTitle>
                <CardDescription>Other theological topics to explore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/studies/theology/systematic/christology">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <Shield className="h-6 w-6 mb-2 text-blue-600" />
                        <h4 className="font-semibold mb-2">Christology</h4>
                        <p className="text-sm text-muted-foreground">Study of the person and work of Jesus Christ</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/studies/theology/systematic/pneumatology">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <Zap className="h-6 w-6 mb-2 text-yellow-600" />
                        <h4 className="font-semibold mb-2">Pneumatology</h4>
                        <p className="text-sm text-muted-foreground">Study of the Holy Spirit and spiritual gifts</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 