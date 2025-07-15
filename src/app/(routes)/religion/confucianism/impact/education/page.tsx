import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Educational Impact | Confucian Cultural Impact",
  description: "Explore Confucianism's profound influence on educational philosophy, practices, and institutions across East Asia and beyond.",
  keywords: "Confucian Education, Moral Cultivation, Scholar-Official System, Civil Service Examinations, Learning Methods, Educational Philosophy, Character Development, Academic Excellence"
}

interface EducationContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  elements: string[]
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const educationContent: EducationContent[] = [
  {
    title: "Educational Philosophy",
    description: "The fundamental principles and values that shape Confucian approaches to education and learning.",
    keyPoints: [
      "Moral Cultivation",
      "Self-Improvement",
      "Character Development",
      "Lifelong Learning",
      "Social Responsibility",
      "Intellectual Growth",
      "Cultural Transmission",
      "Holistic Development"
    ],
    historicalRefs: [
      {
        text: "Learning without thought is labor lost; thought without learning is perilous.",
        source: "Analects 2.15"
      },
      {
        text: "Education is not the filling of a vessel but the kindling of a flame.",
        source: "Xunzi's Educational Theory"
      }
    ],
    significance: "Confucian educational philosophy emphasizes the integration of moral cultivation with intellectual development, shaping educational systems across East Asia.",
    elements: [
      "Moral education",
      "Intellectual rigor",
      "Cultural literacy",
      "Personal cultivation",
      "Social ethics",
      "Critical thinking",
      "Practical wisdom",
      "Character formation"
    ],
    practices: [
      "Text study",
      "Moral reflection",
      "Group discussion",
      "Mentorship",
      "Self-cultivation",
      "Cultural activities",
      "Social service",
      "Ritual practice"
    ],
    recommendedReading: [
      {
        title: "Confucian Education in Premodern East Asia",
        author: "Wm. Theodore de Bary",
        description: "Analysis of traditional Confucian educational philosophy",
        amazonLink: "https://www.amazon.com/Confucian-Education-Premodern-East-Asia/dp/0520234146"
      }
    ]
  },
  {
    title: "Institutional Systems",
    description: "The development and influence of Confucian educational institutions and examination systems.",
    keyPoints: [
      "Scholar-Official System",
      "Civil Service Exams",
      "Academic Institutions",
      "Teacher Training",
      "Curriculum Design",
      "Assessment Methods",
      "Educational Access",
      "Merit-based Selection"
    ],
    historicalRefs: [
      {
        text: "The examination system provided social mobility through education.",
        source: "Benjamin Elman's 'Civil Service Examinations'"
      },
      {
        text: "Education should be available to all, without distinction.",
        source: "Confucius's Democratic Principle"
      }
    ],
    significance: "Confucian institutional systems established meritocratic principles and standardized educational practices that continue to influence modern education.",
    elements: [
      "Examination system",
      "School organization",
      "Teaching methods",
      "Curriculum standards",
      "Student assessment",
      "Teacher qualifications",
      "Educational access",
      "Merit recognition"
    ],
    practices: [
      "Standardized testing",
      "Classical curriculum",
      "Teacher training",
      "Student counseling",
      "Academic research",
      "Educational reform",
      "School management",
      "Quality assurance"
    ],
    recommendedReading: [
      {
        title: "Education and Society in Late Imperial China",
        author: "Benjamin A. Elman",
        description: "Study of traditional Chinese educational institutions",
        amazonLink: "https://www.amazon.com/Education-Society-Late-Imperial-China/dp/0520244400"
      }
    ]
  },
  {
    title: "Learning Methods",
    description: "Traditional and modern approaches to learning and teaching in Confucian educational traditions.",
    keyPoints: [
      "Memorization",
      "Commentary Study",
      "Dialogue Method",
      "Practical Application",
      "Moral Examples",
      "Group Learning",
      "Self-Cultivation",
      "Experiential Learning"
    ],
    historicalRefs: [
      {
        text: "By three methods we may learn wisdom: reflection, imitation, and experience.",
        source: "Confucius's Teaching Methods"
      },
      {
        text: "Learning occurs through active engagement with texts and ideas.",
        source: "Zhu Xi's Learning Theory"
      }
    ],
    significance: "Confucian learning methods combine intellectual rigor with moral development, influencing educational practices worldwide.",
    elements: [
      "Text analysis",
      "Moral reasoning",
      "Critical thinking",
      "Practical skills",
      "Cultural knowledge",
      "Social learning",
      "Self-reflection",
      "Experiential practice"
    ],
    practices: [
      "Text recitation",
      "Group discussion",
      "Case analysis",
      "Moral education",
      "Cultural study",
      "Practical training",
      "Self-assessment",
      "Peer learning"
    ],
    recommendedReading: [
      {
        title: "Learning to Be: The World of Education Today and Tomorrow",
        author: "UNESCO",
        description: "Study of global educational methods including Confucian approaches",
        amazonLink: "https://www.amazon.com/Learning-Be-Education-Today-Tomorrow/dp/9231042475"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of Confucian educational principles in modern contexts.",
    keyPoints: [
      "Character Education",
      "Academic Excellence",
      "Cultural Integration",
      "Global Education",
      "Digital Learning",
      "Moral Leadership",
      "Innovation",
      "Lifelong Learning"
    ],
    historicalRefs: [
      {
        text: "Traditional wisdom enhances modern education.",
        source: "East Asian Educational Success Studies"
      },
      {
        text: "Moral education remains essential in the digital age.",
        source: "Contemporary Educational Theory"
      }
    ],
    significance: "Modern applications of Confucian education demonstrate its continuing relevance and adaptability to contemporary needs.",
    elements: [
      "Digital integration",
      "Global perspective",
      "Cultural awareness",
      "Ethical development",
      "Innovation skills",
      "Leadership training",
      "Social responsibility",
      "Environmental awareness"
    ],
    practices: [
      "Online learning",
      "Global exchange",
      "Cultural programs",
      "Ethics education",
      "Leadership development",
      "Environmental education",
      "Community service",
      "Professional training"
    ],
    recommendedReading: [
      {
        title: "Confucian Education for a Modern World",
        author: "Wei-ming Tu",
        description: "Analysis of modern Confucian educational applications",
        amazonLink: "https://www.amazon.com/Confucian-Education-Modern-World-Wei-ming/dp/0231150830"
      }
    ]
  }
]

export default function EducationPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Educational Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Confucianism's profound influence on educational philosophy, practices, and institutions across East Asia and beyond.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="philosophy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {educationContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({philosophy: true, institutions: true, methods: true, modern: true})[index]}>
            <Card>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground">{content.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Points</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Historical References</h3>
                  <div className="space-y-4">
                    {content.historicalRefs.map((ref, i) => (
                      <div key={i} className="pl-6 border-l-2">
                        <p className="italic text-muted-foreground">{ref.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">- {ref.source}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Significance</h3>
                  <p className="text-muted-foreground">{content.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Elements</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.elements.map((element, i) => (
                      <li key={i}>{element}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Practices</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.practices.map((practice, i) => (
                      <li key={i}>{practice}</li>
                    ))}
                  </ul>
                </div>

                {content.recommendedReading && (
                  <div>
                    <h3 className="font-semibold mb-3">Recommended Reading</h3>
                    <div className="space-y-4">
                      {content.recommendedReading.map((book, i) => (
                        <Card key={i} className="p-4">
                          <h4 className="font-semibold">{book.title}</h4>
                          <p className="text-sm text-muted-foreground">By {book.author}</p>
                          <p className="text-sm text-muted-foreground mt-2">{book.description}</p>
                          <Button asChild className="mt-4">
                            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </a>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <RelatedTopics
          topics={[
            {
              title: "Political Thought",
              href: "/religion/confucianism/impact/political"
            },
            {
              title: "Social Structure",
              href: "/religion/confucianism/impact/social"
            },
            {
              title: "Modern Influence",
              href: "/religion/confucianism/impact/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 