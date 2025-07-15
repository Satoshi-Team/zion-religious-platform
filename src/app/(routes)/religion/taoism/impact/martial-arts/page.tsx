import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Martial Arts Impact | Taoist Impact",
  description: "Explore Taoism's profound influence on Chinese martial arts, examining internal styles, philosophical principles, training methods, and modern developments in global martial arts.",
  keywords: "Taoist Martial Arts, Internal Styles, Tai Chi, Bagua, Xingyi, Qigong, Martial Philosophy, Combat Theory, Energy Cultivation, Traditional Training"
}

interface MartialArtsContent {
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

const martialArtsContent: MartialArtsContent[] = [
  {
    title: "Philosophical Foundations",
    description: "Examining the core Taoist principles that shaped Chinese martial arts development and practice.",
    keyPoints: [
      "Wu-wei application",
      "Yin-Yang dynamics",
      "Five Elements theory",
      "Energy cultivation",
      "Natural movement",
      "Strategic concepts",
      "Ethical principles",
      "Mind-body unity"
    ],
    historicalRefs: [
      {
        text: "Zhang Sanfeng's synthesis of Taoist principles with martial practice in the 12th century.",
        source: "Classical Martial Arts Texts"
      },
      {
        text: "Development of Taoist warrior-monk traditions at Wudang Mountain.",
        source: "Wudang Martial History"
      }
    ],
    significance: "Taoist philosophy provided the theoretical foundation for internal martial arts and influenced the development of all Chinese martial systems.",
    elements: [
      "Non-resistance principle",
      "Circular movement",
      "Energy awareness",
      "Strategic yielding",
      "Natural alignment",
      "Mental cultivation",
      "Ethical framework",
      "Holistic development"
    ],
    practices: [
      "Standing meditation",
      "Energy cultivation",
      "Movement principles",
      "Combat philosophy",
      "Ethical training",
      "Mind-body exercises",
      "Strategic study",
      "Principle application"
    ],
    recommendedReading: [
      {
        title: "The Tao of Martial Arts",
        author: "John Little",
        description: "Analysis of Taoist principles in martial arts",
        amazonLink: "https://www.amazon.com/Tao-Martial-Arts-John-Little/dp/0892816674"
      }
    ]
  },
  {
    title: "Internal Styles Development",
    description: "Analyzing the evolution and characteristics of Taoist-influenced internal martial arts systems.",
    keyPoints: [
      "Taijiquan origins",
      "Baguazhang development",
      "Xingyiquan principles",
      "Qigong integration",
      "Training methods",
      "Technical principles",
      "System relationships",
      "Transmission methods"
    ],
    historicalRefs: [
      {
        text: "Chen Wang Ting's creation of Chen style Taijiquan in the 17th century.",
        source: "Taijiquan Historical Records"
      },
      {
        text: "Dong Haichuan's systematization of Baguazhang in the 19th century.",
        source: "Internal Arts Chronicles"
      }
    ],
    significance: "Internal martial arts represent the most complete integration of Taoist principles with combat methods.",
    elements: [
      "Internal power",
      "Spiral force",
      "Energy pathways",
      "Body mechanics",
      "Combat strategy",
      "Health benefits",
      "Mental aspects",
      "Spiritual development"
    ],
    practices: [
      "Form training",
      "Partner exercises",
      "Power development",
      "Energy work",
      "Combat applications",
      "Health cultivation",
      "Meditation methods",
      "Progressive learning"
    ],
    recommendedReading: [
      {
        title: "The Power of Internal Martial Arts",
        author: "Bruce Frantzis",
        description: "Comprehensive study of internal martial arts systems",
        amazonLink: "https://www.amazon.com/Power-Internal-Martial-Arts-Combat/dp/1583941908"
      }
    ]
  },
  {
    title: "Training Methods",
    description: "Exploring traditional and modern training methodologies in Taoist martial arts.",
    keyPoints: [
      "Foundation building",
      "Energy development",
      "Body conditioning",
      "Mental training",
      "Combat methods",
      "Health practices",
      "Spiritual cultivation",
      "Teaching systems"
    ],
    historicalRefs: [
      {
        text: "Li Daozi's documentation of Wudang training methods in the Ming Dynasty.",
        source: "Traditional Training Records"
      },
      {
        text: "Yang Chengfu's standardization of Yang style Taiji training in the 1920s.",
        source: "Modern Training Development"
      }
    ],
    significance: "Taoist training methods created a comprehensive system for physical, mental, and spiritual development through martial practice.",
    elements: [
      "Basic exercises",
      "Power training",
      "Energy methods",
      "Combat drills",
      "Health practices",
      "Mental development",
      "Teaching methods",
      "Progressive systems"
    ],
    practices: [
      "Foundational exercises",
      "Form practice",
      "Partner work",
      "Combat training",
      "Energy cultivation",
      "Health maintenance",
      "Teaching methods",
      "System integration"
    ],
    recommendedReading: [
      {
        title: "Traditional Chinese Fitness Exercises",
        author: "Yang Jwing-Ming",
        description: "Comprehensive guide to Taoist training methods",
        amazonLink: "https://www.amazon.com/Traditional-Chinese-Health-Secrets-Essentials/dp/1594392633"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Examining contemporary adaptations and applications of Taoist martial arts principles.",
    keyPoints: [
      "Global spread",
      "Modern adaptation",
      "Health applications",
      "Combat evolution",
      "Research studies",
      "Sports integration",
      "Cultural preservation",
      "Future development"
    ],
    historicalRefs: [
      {
        text: "International spread of Tai Chi as a health practice post-1950s.",
        source: "Global Martial Arts Development"
      },
      {
        text: "Scientific research on martial arts health benefits since the 1990s.",
        source: "Contemporary Martial Studies"
      }
    ],
    significance: "Taoist martial arts continue to evolve and influence global health practices, combat sports, and personal development methods.",
    elements: [
      "Health programs",
      "Combat applications",
      "Research methods",
      "Teaching systems",
      "Cultural aspects",
      "Modern adaptations",
      "Integration methods",
      "Development paths"
    ],
    practices: [
      "Health programs",
      "Combat training",
      "Research projects",
      "Teaching methods",
      "Cultural education",
      "Modern adaptation",
      "Program development",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Science and the Martial Arts",
        author: "Peter Lorge",
        description: "Modern scientific analysis of traditional practices",
        amazonLink: "https://www.amazon.com/Chinese-Martial-Arts-Peter-Lorge/dp/0521878810"
      }
    ]
  }
]

export default function MartialArtsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Taoist Impact on Martial Arts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Taoism's profound influence on Chinese martial arts, examining internal styles, philosophical principles, training methods, and modern developments in global martial arts.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="philosophy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="internal">Internal Styles</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {martialArtsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({philosophy: true, internal: true, training: true, modern: true})[index]}>
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
              title: "Medicine Impact",
              href: "/religion/taoism/impact/medicine"
            },
            {
              title: "Philosophy Impact",
              href: "/religion/taoism/impact/philosophy"
            },
            {
              title: "Modern Practice",
              href: "/religion/taoism/practice/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 