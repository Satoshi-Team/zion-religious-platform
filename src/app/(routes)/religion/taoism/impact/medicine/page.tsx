import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Medicine and Alchemy Impact | Taoist Impact",
  description: "Explore Taoism's profound influence on Chinese medicine, alchemical practices, longevity techniques, and health cultivation methods from ancient times to modern applications.",
  keywords: "Taoist Medicine, Chinese Alchemy, Traditional Chinese Medicine, Neidan, Waidan, Qi Cultivation, Longevity Practices, Herbal Medicine, Meditation Techniques, Energy Work"
}

interface MedicineContent {
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

const medicineContent: MedicineContent[] = [
  {
    title: "Traditional Medical Theory",
    description: "Examining the foundational concepts of Taoist medicine and its influence on Traditional Chinese Medicine.",
    keyPoints: [
      "Qi theory development",
      "Five Elements system",
      "Yin-Yang balance",
      "Meridian mapping",
      "Organ systems theory",
      "Disease causation",
      "Diagnostic methods",
      "Treatment principles"
    ],
    historicalRefs: [
      {
        text: "Yellow Emperor's Inner Canon (Huangdi Neijing) compilation in the Han Dynasty.",
        source: "Classical Chinese Medical Texts"
      },
      {
        text: "Sun Simiao's integration of Taoist principles in medical practice, 7th century.",
        source: "History of Chinese Medicine"
      }
    ],
    significance: "Taoist medical theory established the theoretical framework for Traditional Chinese Medicine that continues to influence global healthcare practices.",
    elements: [
      "Energy pathways",
      "Organ networks",
      "Element cycles",
      "Balance principles",
      "Diagnostic systems",
      "Treatment methods",
      "Preventive approaches",
      "Holistic understanding"
    ],
    practices: [
      "Pulse diagnosis",
      "Tongue examination",
      "Energy assessment",
      "Pattern identification",
      "Treatment planning",
      "Herbal prescription",
      "Lifestyle guidance",
      "Preventive care"
    ],
    recommendedReading: [
      {
        title: "The Foundations of Chinese Medicine",
        author: "Giovanni Maciocia",
        description: "Comprehensive study of Traditional Chinese Medicine's Taoist roots",
        amazonLink: "https://www.amazon.com/Foundations-Chinese-Medicine-Comprehensive-Text/dp/0702052167"
      }
    ]
  },
  {
    title: "External Alchemy (Waidan)",
    description: "Analyzing the development and influence of external alchemical practices in Taoist tradition.",
    keyPoints: [
      "Mineral processing",
      "Elixir creation",
      "Laboratory techniques",
      "Material purification",
      "Chemical discoveries",
      "Equipment innovation",
      "Safety protocols",
      "Theoretical frameworks"
    ],
    historicalRefs: [
      {
        text: "Ge Hong's alchemical treatises in the 4th century CE.",
        source: "History of Chinese Alchemy"
      },
      {
        text: "Tang Dynasty imperial sponsorship of alchemical research.",
        source: "Imperial Records of Alchemical Studies"
      }
    ],
    significance: "External alchemy contributed significantly to the development of chemistry, pharmacology, and material science in China.",
    elements: [
      "Laboratory setup",
      "Material selection",
      "Processing methods",
      "Equipment design",
      "Safety measures",
      "Theoretical principles",
      "Documentation methods",
      "Transmission systems"
    ],
    practices: [
      "Material refinement",
      "Compound creation",
      "Equipment maintenance",
      "Process documentation",
      "Safety procedures",
      "Quality testing",
      "Knowledge transmission",
      "Theoretical study"
    ],
    recommendedReading: [
      {
        title: "Chinese Alchemy: Preliminary Studies",
        author: "Joseph Needham",
        description: "Detailed analysis of Taoist external alchemy",
        amazonLink: "https://www.amazon.com/Chinese-Alchemy-Preliminary-Studies-Civilization/dp/0674121503"
      }
    ]
  },
  {
    title: "Internal Alchemy (Neidan)",
    description: "Exploring the sophisticated system of internal cultivation and transformation in Taoist tradition.",
    keyPoints: [
      "Energy cultivation",
      "Meditation methods",
      "Body refinement",
      "Spirit cultivation",
      "Consciousness transformation",
      "Breathing techniques",
      "Visualization practices",
      "Integration methods"
    ],
    historicalRefs: [
      {
        text: "Zhang Boduan's systematization of internal alchemy in the Song Dynasty.",
        source: "Internal Alchemy Classics"
      },
      {
        text: "Development of the Three Treasures theory in Tang Dynasty texts.",
        source: "Taoist Internal Arts Records"
      }
    ],
    significance: "Internal alchemy developed sophisticated methods for physical and spiritual transformation that influence modern wellness practices.",
    elements: [
      "Energy centers",
      "Circulation paths",
      "Meditation stages",
      "Transformation processes",
      "Integration methods",
      "Consciousness levels",
      "Body-mind connection",
      "Spirit refinement"
    ],
    practices: [
      "Meditation techniques",
      "Breathing exercises",
      "Energy circulation",
      "Body awareness",
      "Mind cultivation",
      "Spirit refinement",
      "Integration methods",
      "Progressive stages"
    ],
    recommendedReading: [
      {
        title: "The Secret of the Golden Flower",
        author: "Thomas Cleary",
        description: "Translation and analysis of classic internal alchemy text",
        amazonLink: "https://www.amazon.com/Secret-Golden-Flower-Chinese-Book/dp/0062501933"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Examining contemporary applications and adaptations of Taoist medical and alchemical principles.",
    keyPoints: [
      "Clinical integration",
      "Research validation",
      "Modern adaptations",
      "Wellness applications",
      "Scientific studies",
      "Healthcare integration",
      "Global influence",
      "Therapeutic innovations"
    ],
    historicalRefs: [
      {
        text: "WHO recognition of Traditional Chinese Medicine in 2019.",
        source: "World Health Organization Reports"
      },
      {
        text: "Integration of Taoist practices in modern healthcare settings.",
        source: "Contemporary Medical Studies"
      }
    ],
    significance: "Taoist medical and alchemical principles continue to influence modern healthcare, wellness practices, and scientific research.",
    elements: [
      "Clinical protocols",
      "Research methods",
      "Integration models",
      "Treatment systems",
      "Wellness programs",
      "Educational frameworks",
      "Practice standards",
      "Evidence base"
    ],
    practices: [
      "Clinical application",
      "Research design",
      "Treatment planning",
      "Patient education",
      "Professional training",
      "Quality assurance",
      "Documentation methods",
      "Outcome assessment"
    ],
    recommendedReading: [
      {
        title: "The Practice of Chinese Medicine",
        author: "Giovanni Maciocia",
        description: "Modern clinical applications of traditional principles",
        amazonLink: "https://www.amazon.com/Practice-Chinese-Medicine-Treatment-Conditions/dp/0702047732"
      }
    ]
  }
]

export default function MedicinePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Taoist Impact on Medicine and Alchemy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Taoism's profound influence on Chinese medicine, alchemical practices, longevity techniques, and health cultivation methods from ancient times to modern applications.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="theory">Medical Theory</TabsTrigger>
          <TabsTrigger value="external">External Alchemy</TabsTrigger>
          <TabsTrigger value="internal">Internal Alchemy</TabsTrigger>
          <TabsTrigger value="modern">Modern Applications</TabsTrigger>
        </TabsList>

        {medicineContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({theory: true, external: true, internal: true, modern: true})[index]}>
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
              title: "Philosophy Impact",
              href: "/religion/taoism/impact/philosophy"
            },
            {
              title: "Science Impact",
              href: "/religion/taoism/impact/science"
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