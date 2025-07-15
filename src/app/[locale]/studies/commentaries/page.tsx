import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Religious Commentaries - Biblical & Sacred Text Interpretations | ZION.FM',
  description: 'Explore comprehensive commentaries on sacred texts from various religious traditions. Access biblical commentaries, Quranic tafsir, Talmudic insights, and scholarly interpretations.',
  keywords: 'religious commentaries, biblical commentary, quranic tafsir, talmudic commentary, sacred text interpretation, scholarly commentary, religious study',
  openGraph: {
    title: 'Religious Commentaries - Biblical & Sacred Text Interpretations',
    description: 'Comprehensive commentaries and interpretations of sacred texts from world religions.',
    type: 'website',
  },
}

const commentaryTraditions = [
  {
    tradition: 'Christian Commentaries',
    description: 'Biblical commentaries from Christian theological perspectives',
    icon: Shield,
    commentaries: [
      {
        name: 'Matthew Henry Commentary',
        author: 'Matthew Henry',
        period: '1706-1714',
        description: 'Comprehensive verse-by-verse commentary on the entire Bible',
        features: ['Practical application', 'Historical context', 'Theological insights', 'Devotional focus'],
        link: '/studies/commentaries/christian/matthew-henry'
      },
      {
        name: 'Jamieson-Fausset-Brown',
        author: 'Robert Jamieson, A.R. Fausset, David Brown',
        period: '1871',
        description: 'Critical and explanatory commentary on the Old and New Testaments',
        features: ['Critical analysis', 'Linguistic insights', 'Historical background', 'Scholarly approach'],
        link: '/studies/commentaries/christian/jfb'
      },
      {
        name: 'Pulpit Commentary',
        author: 'Various Authors',
        period: '1880-1919',
        description: 'Extensive commentary series with homiletical applications',
        features: ['Homiletical insights', 'Exegetical analysis', 'Practical preaching', 'Comprehensive coverage'],
        link: '/studies/commentaries/christian/pulpit'
      },
      {
        name: 'Barnes\' Notes',
        author: 'Albert Barnes',
        period: '1834-1851',
        description: 'Practical and accessible commentary for general readers',
        features: ['Accessible language', 'Practical insights', 'Clear explanations', 'Devotional focus'],
        link: '/studies/commentaries/christian/barnes'
      }
    ]
  },
  {
    tradition: 'Islamic Commentaries (Tafsir)',
    description: 'Quranic commentaries from Islamic scholarly traditions',
    icon: Heart,
    commentaries: [
      {
        name: 'Tafsir Ibn Kathir',
        author: 'Ibn Kathir',
        period: '1301-1373',
        description: 'Comprehensive Quranic commentary based on authentic sources',
        features: ['Authentic narrations', 'Historical context', 'Linguistic analysis', 'Theological insights'],
        link: '/studies/commentaries/islamic/ibn-kathir'
      },
      {
        name: 'Tafsir Al-Tabari',
        author: 'Muhammad ibn Jarir al-Tabari',
        period: '839-923',
        description: 'Historical and linguistic commentary on the Quran',
        features: ['Historical analysis', 'Linguistic insights', 'Early Islamic scholarship', 'Comprehensive coverage'],
        link: '/studies/commentaries/islamic/al-tabari'
      },
      {
        name: 'Tafsir Al-Qurtubi',
        author: 'Al-Qurtubi',
        period: '1214-1273',
        description: 'Legal and theological commentary on the Quran',
        features: ['Legal analysis', 'Theological insights', 'Practical applications', 'Scholarly approach'],
        link: '/studies/commentaries/islamic/al-qurtubi'
      },
      {
        name: 'Tafsir Al-Jalalayn',
        author: 'Jalal al-Din al-Mahalli & Jalal al-Din al-Suyuti',
        period: '1389-1455 & 1445-1505',
        description: 'Concise and accessible Quranic commentary',
        features: ['Concise explanations', 'Accessible language', 'Clear insights', 'Widely used'],
        link: '/studies/commentaries/islamic/al-jalalayn'
      }
    ]
  },
  {
    tradition: 'Jewish Commentaries',
    description: 'Torah and Talmudic commentaries from Jewish scholarly traditions',
    icon: Target,
    commentaries: [
      {
        name: 'Rashi Commentary',
        author: 'Rabbi Shlomo Yitzchaki (Rashi)',
        period: '1040-1105',
        description: 'Classic medieval commentary on Torah and Talmud',
        features: ['Verse-by-verse commentary', 'Traditional insights', 'Linguistic analysis', 'Historical context'],
        link: '/studies/commentaries/jewish/rashi'
      },
      {
        name: 'Ibn Ezra',
        author: 'Abraham ibn Ezra',
        period: '1089-1167',
        description: 'Grammatical and philosophical commentary on Torah',
        features: ['Grammatical analysis', 'Philosophical insights', 'Scientific approach', 'Linguistic precision'],
        link: '/studies/commentaries/jewish/ibn-ezra'
      },
      {
        name: 'Ramban (Nachmanides)',
        author: 'Moses ben Nachman',
        period: '1194-1270',
        description: 'Comprehensive commentary combining traditional and philosophical insights',
        features: ['Traditional approach', 'Philosophical insights', 'Kabbalistic elements', 'Historical context'],
        link: '/studies/commentaries/jewish/ramban'
      },
      {
        name: 'Sforno',
        author: 'Obadiah ben Jacob Sforno',
        period: '1475-1550',
        description: 'Clear and accessible commentary on Torah',
        features: ['Clear explanations', 'Accessible language', 'Practical insights', 'Educational focus'],
        link: '/studies/commentaries/jewish/sforno'
      }
    ]
  },
  {
    tradition: 'Buddhist Commentaries',
    description: 'Commentaries on Buddhist scriptures and teachings',
    icon: Lightbulb,
    commentaries: [
      {
        name: 'Visuddhimagga',
        author: 'Buddhaghosa',
        period: '5th century',
        description: 'Comprehensive commentary on Buddhist meditation and practice',
        features: ['Meditation guidance', 'Philosophical analysis', 'Practical instructions', 'Theravada perspective'],
        link: '/studies/commentaries/buddhist/visuddhimagga'
      },
      {
        name: 'Abhidhammattha Sangaha',
        author: 'Anuruddha',
        period: '11th-12th century',
        description: 'Commentary on Buddhist psychology and philosophy',
        features: ['Psychological analysis', 'Philosophical insights', 'Systematic approach', 'Abhidhamma focus'],
        link: '/studies/commentaries/buddhist/abhidhamma'
      },
      {
        name: 'Madhyamakavatara',
        author: 'Chandrakirti',
        period: '7th century',
        description: 'Commentary on Nagarjuna\'s Madhyamaka philosophy',
        features: ['Philosophical analysis', 'Madhyamaka insights', 'Logical reasoning', 'Mahayana perspective'],
        link: '/studies/commentaries/buddhist/madhyamakavatara'
      },
      {
        name: 'Bodhicharyavatara',
        author: 'Shantideva',
        period: '8th century',
        description: 'Commentary on the bodhisattva path and practice',
        features: ['Bodhisattva path', 'Ethical practice', 'Compassion focus', 'Mahayana teachings'],
        link: '/studies/commentaries/buddhist/bodhicharyavatara'
      }
    ]
  }
]

const commentaryTypes = [
  {
    title: 'Exegetical Commentaries',
    description: 'Detailed analysis of the literal meaning of texts',
    features: [
      'Word-by-word analysis',
      'Grammatical explanations',
      'Historical context',
      'Linguistic insights'
    ]
  },
  {
    title: 'Homiletical Commentaries',
    description: 'Commentaries focused on practical application and preaching',
    features: [
      'Practical applications',
      'Sermon preparation',
      'Life lessons',
      'Devotional insights'
    ]
  },
  {
    title: 'Critical Commentaries',
    description: 'Scholarly analysis using modern critical methods',
    features: [
      'Historical criticism',
      'Source analysis',
      'Textual criticism',
      'Academic approach'
    ]
  },
  {
    title: 'Devotional Commentaries',
    description: 'Commentaries focused on spiritual growth and personal application',
    features: [
      'Spiritual insights',
      'Personal application',
      'Prayer guidance',
      'Meditation focus'
    ]
  }
]

const studyResources = [
  {
    category: 'Online Commentary Libraries',
    resources: [
      { name: 'Bible Gateway Commentaries', url: 'https://www.biblegateway.com/', description: 'Multiple biblical commentaries online' },
      { name: 'Sefaria', url: 'https://www.sefaria.org/', description: 'Jewish texts and commentaries' },
      { name: 'Quran.com Tafsir', url: 'https://quran.com/', description: 'Quranic commentaries and tafsir' },
      { name: 'Access to Insight', url: 'https://www.accesstoinsight.org/', description: 'Buddhist texts and commentaries' }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      { name: 'JSTOR Religious Studies', url: 'https://www.jstor.org/', description: 'Academic religious commentary research' },
      { name: 'ATLA Religion Database', url: 'https://www.atla.com/', description: 'Religious studies database' },
      { name: 'Oxford Biblical Studies', url: 'https://www.oxfordbibliographies.com/', description: 'Biblical studies resources' },
      { name: 'Cambridge Companions', url: 'https://www.cambridge.org/', description: 'Comprehensive religious studies' }
    ]
  },
  {
    category: 'Traditional Sources',
    resources: [
      { name: 'Christian Classics Ethereal Library', url: 'https://www.ccel.org/', description: 'Classic Christian commentaries' },
      { name: 'Internet Sacred Texts Archive', url: 'https://www.sacred-texts.com/', description: 'Sacred texts and commentaries' },
      { name: 'Buddhist Digital Library', url: 'https://www.buddhistelibrary.org/', description: 'Buddhist texts and commentaries' },
      { name: 'Islamic Text Society', url: 'https://www.islamic-texts.org/', description: 'Islamic texts and tafsir' }
    ]
  }
]

const commentaryMethods = [
  {
    title: 'Historical-Critical Method',
    description: 'Analyzing texts in their historical and cultural context',
    steps: [
      'Examine historical background',
      'Analyze cultural context',
      'Study linguistic development',
      'Consider authorial intent'
    ],
    benefits: ['Historical accuracy', 'Cultural understanding', 'Contextual insights', 'Scholarly rigor']
  },
  {
    title: 'Literary Analysis',
    description: 'Studying texts as literary works with artistic and structural elements',
    steps: [
      'Analyze literary structure',
      'Examine narrative techniques',
      'Study poetic devices',
      'Consider thematic development'
    ],
    benefits: ['Literary appreciation', 'Artistic understanding', 'Structural insights', 'Aesthetic value']
  },
  {
    title: 'Theological Interpretation',
    description: 'Understanding texts within religious and theological frameworks',
    steps: [
      'Examine theological themes',
      'Study doctrinal implications',
      'Analyze spiritual meaning',
      'Consider religious context'
    ],
    benefits: ['Theological understanding', 'Spiritual insights', 'Doctrinal clarity', 'Religious perspective']
  },
  {
    title: 'Comparative Analysis',
    description: 'Comparing commentaries across different traditions and perspectives',
    steps: [
      'Compare different commentaries',
      'Analyze varying perspectives',
      'Identify common themes',
      'Study interpretive differences'
    ],
    benefits: ['Broader perspective', 'Comparative insights', 'Interfaith understanding', 'Comprehensive view']
  }
]

const practicalGuidance = [
  {
    title: 'Choosing Commentaries',
    tips: [
      'Consider your study goals and level',
      'Look for commentaries from respected scholars',
      'Check the commentary\'s approach and methodology',
      'Read sample passages to assess style and depth',
      'Consider multiple commentaries for different perspectives'
    ]
  },
  {
    title: 'Effective Study Methods',
    tips: [
      'Read the original text first',
      'Compare multiple commentaries on the same passage',
      'Take notes on key insights and interpretations',
      'Consider historical and cultural context',
      'Apply insights to personal understanding and practice'
    ]
  },
  {
    title: 'Critical Evaluation',
    tips: [
      'Evaluate the commentator\'s background and expertise',
      'Consider the historical context of the commentary',
      'Assess the methodology and approach used',
      'Compare with other scholarly perspectives',
      'Maintain an open and critical mindset'
    ]
  }
]

export default function CommentariesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Religious Commentaries
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore comprehensive commentaries on sacred texts from various religious traditions. 
          Access biblical commentaries, Quranic tafsir, Talmudic insights, and scholarly interpretations 
          to deepen your understanding of religious texts.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Biblical Commentary</Badge>
          <Badge variant="secondary" className="text-sm">Quranic Tafsir</Badge>
          <Badge variant="secondary" className="text-sm">Talmudic Insights</Badge>
          <Badge variant="secondary" className="text-sm">Scholarly Analysis</Badge>
          <Badge variant="secondary" className="text-sm">Traditional Interpretation</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="traditions" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="guidance">Guidance</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="traditions" className="space-y-8">
          {commentaryTraditions.map((tradition) => {
            const Icon = tradition.icon
            return (
              <Card key={tradition.tradition}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{tradition.tradition}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {tradition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tradition.commentaries.map((commentary) => (
                      <Card key={commentary.name} className="h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{commentary.name}</CardTitle>
                            <Badge variant="outline">{commentary.period}</Badge>
                          </div>
                          <CardDescription className="text-base">
                            by {commentary.author}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground">{commentary.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {commentary.features.map((feature) => (
                                <Badge key={feature} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <Link href={commentary.link}>
                              Explore Commentary
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="types" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {commentaryTypes.map((type) => (
              <Card key={type.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="methods" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {commentaryMethods.map((method) => (
              <Card key={method.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ol className="space-y-1 text-sm">
                      {method.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="font-semibold text-primary">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {method.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guidance" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {practicalGuidance.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          {studyResources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Deepen Your Understanding with Commentaries</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore commentaries from various religious traditions to gain deeper insights 
              into sacred texts and enhance your religious studies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/guides">Study Guides</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/theology">Theology Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Study Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 