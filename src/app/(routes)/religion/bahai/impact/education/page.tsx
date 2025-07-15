import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Impact on Education | Bahá'í Faith",
  description: "Explore the profound influence of the Bahá'í Faith on educational theory and practice, from moral education and spiritual development to academic institutions and training programs.",
  keywords: "Bahá'í Education, Moral Education, Training Institutes, Ruhi Institute, Tutorial Schools, Academic Excellence, Character Development, Spiritual Education"
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
    title: "Educational Philosophy and Principles",
    description: "The foundational concepts and principles that guide Bahá'í approaches to education, emphasizing the integration of spiritual and material knowledge.",
    keyPoints: [
      "Unity of science and religion",
      "Universal education",
      "Moral development",
      "Character formation",
      "Independent investigation",
      "Service orientation",
      "Gender equality",
      "Cultural diversity"
    ],
    historicalRefs: [
      {
        text: "Educational principles in Bahá'u'lláh's writings.",
        source: "Tablets of Bahá'u'lláh"
      },
      {
        text: "Development of educational theory in 'Abdu'l-Bahá's works.",
        source: "Secret of Divine Civilization"
      }
    ],
    significance: "Bahá'í educational philosophy provides a framework for integrating spiritual and material education while promoting universal access and moral development.",
    elements: [
      "Spiritual foundations",
      "Scientific knowledge",
      "Moral principles",
      "Cultural elements",
      "Gender perspectives",
      "Service components",
      "Character aspects",
      "Unity principles"
    ],
    practices: [
      "Curriculum design",
      "Teaching methods",
      "Assessment approaches",
      "Character development",
      "Service integration",
      "Cultural inclusion",
      "Gender equality",
      "Moral education"
    ],
    recommendedReading: [
      {
        title: "Bahá'í Education: A Compilation",
        author: "Universal House of Justice",
        description: "Comprehensive collection of writings on Bahá'í educational principles",
        amazonLink: "https://www.amazon.com/Bahai-Education-Compilation-Universal-Justice/dp/0877432716"
      }
    ]
  },
  {
    title: "Training Institutes and Capacity Building",
    description: "The development and implementation of systematic training programs for spiritual and moral education through the institute process.",
    keyPoints: [
      "Ruhi Institute curriculum",
      "Tutor training",
      "Study circles",
      "Service components",
      "Systematic learning",
      "Community development",
      "Youth empowerment",
      "Capacity building"
    ],
    historicalRefs: [
      {
        text: "Development of training institutes in Turning Point.",
        source: "Turning Point"
      },
      {
        text: "Evolution of institute process in Century of Light.",
        source: "Century of Light"
      }
    ],
    significance: "Training institutes provide a systematic approach to building capacity for service while fostering spiritual and intellectual development.",
    elements: [
      "Study materials",
      "Service projects",
      "Tutoring system",
      "Learning methods",
      "Practice components",
      "Community action",
      "Youth focus",
      "Reflection process"
    ],
    practices: [
      "Facilitator training",
      "Study circle coordination",
      "Service planning",
      "Progress assessment",
      "Resource development",
      "Community consultation",
      "Youth mentoring",
      "Capacity evaluation"
    ],
    recommendedReading: [
      {
        title: "Releasing the Powers of Junior Youth",
        author: "Ruhi Institute",
        description: "Analysis of the junior youth spiritual empowerment program",
        amazonLink: "https://www.amazon.com/Releasing-Powers-Junior-Youth-Institute/dp/0877432724"
      }
    ]
  },
  {
    title: "Academic Institutions and Schools",
    description: "The establishment and development of Bahá'í-inspired schools and educational institutions worldwide.",
    keyPoints: [
      "Tutorial schools",
      "Community schools",
      "Universities",
      "Teacher training",
      "Curriculum development",
      "Academic excellence",
      "Moral leadership",
      "Service learning"
    ],
    historicalRefs: [
      {
        text: "Development of early Bahá'í schools in God Passes By.",
        source: "God Passes By"
      },
      {
        text: "Educational institutions in The Bahá'í World volumes.",
        source: "The Bahá'í World"
      }
    ],
    significance: "Bahá'í-inspired educational institutions demonstrate the practical application of spiritual principles in academic settings.",
    elements: [
      "Academic programs",
      "Moral education",
      "Service projects",
      "Cultural integration",
      "Community engagement",
      "Leadership development",
      "Research initiatives",
      "Professional training"
    ],
    practices: [
      "School administration",
      "Teacher development",
      "Curriculum planning",
      "Student support",
      "Community outreach",
      "Quality assessment",
      "Research programs",
      "Professional mentoring"
    ],
    recommendedReading: [
      {
        title: "Bahá'í-Inspired Schools",
        author: "Boris Handal",
        description: "Study of educational institutions worldwide",
        amazonLink: "https://www.amazon.com/Bahai-Inspired-Schools-Boris-Handal/dp/0877432732"
      }
    ]
  },
  {
    title: "Educational Innovation and Methods",
    description: "The development of innovative educational approaches and methods inspired by Bahá'í principles.",
    keyPoints: [
      "Experiential learning",
      "Spiritual education",
      "Arts integration",
      "Scientific inquiry",
      "Collaborative learning",
      "Service projects",
      "Character development",
      "Cultural education"
    ],
    historicalRefs: [
      {
        text: "Educational methods in Bahá'í World Centre documents.",
        source: "Bahá'í World Centre Documents"
      },
      {
        text: "Innovative approaches in Five Year Plan messages.",
        source: "Five Year Plan Messages"
      }
    ],
    significance: "Educational innovation in the Bahá'í community demonstrates new approaches to integrating spiritual and material education.",
    elements: [
      "Teaching methods",
      "Learning tools",
      "Assessment systems",
      "Creative approaches",
      "Technology use",
      "Cultural elements",
      "Service learning",
      "Reflection practices"
    ],
    practices: [
      "Method development",
      "Innovation testing",
      "Resource creation",
      "Program evaluation",
      "Technology integration",
      "Cultural adaptation",
      "Service coordination",
      "Impact assessment"
    ],
    recommendedReading: [
      {
        title: "Transformative Education",
        author: "Stephen Lambden",
        description: "Study of innovative Bahá'í educational approaches",
        amazonLink: "https://www.amazon.com/Transformative-Education-Stephen-Lambden/dp/0877432740"
      }
    ]
  }
]

export default function EducationPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Impact on Education</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound influence of the Bahá'í Faith on educational theory and practice, from moral education and spiritual development to academic institutions and training programs.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="philosophy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="innovation">Innovation</TabsTrigger>
        </TabsList>

        {educationContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({philosophy: true, training: true, institutions: true, innovation: true})[index]}>
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
              title: "Impact on Social Development",
              href: "/religion/bahai/impact/social"
            },
            {
              title: "Training Institutes",
              href: "/religion/bahai/community/institutes"
            },
            {
              title: "Educational Principles",
              href: "/religion/bahai/teachings/education"
            }
          ]}
        />
      </div>
    </div>
  )
} 