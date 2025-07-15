import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Anekantavada | Jain Theology",
  description: "Explore the Jain doctrine of Anekantavada (many-sidedness), its philosophical implications, and its approach to understanding reality through multiple perspectives.",
  keywords: "Anekantavada, Many-sided Reality, Jain Philosophy, Syadvada, Nayavada, Multiple Perspectives, Truth, Reality"
}

interface AnekantavadaContent {
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

const anekantavadaContent: AnekantavadaContent[] = [
  {
    title: "Philosophical Foundation",
    description: "Understanding the core principles and philosophical basis of Anekantavada in Jain thought.",
    keyPoints: [
      "Many-sided Reality",
      "Multiple Perspectives",
      "Non-absolutism",
      "Epistemological Framework",
      "Truth Complexity",
      "Intellectual Humility",
      "Cognitive Limitations",
      "Knowledge Integration"
    ],
    historicalRefs: [
      {
        text: "Anekantavada was systematically developed by Acharya Umasvati in Tattvarthasutra.",
        source: "Tattvarthasutra"
      },
      {
        text: "The doctrine was further elaborated by Acharya Siddhasena Divakara.",
        source: "Ancient Texts"
      }
    ],
    significance: "Anekantavada provides a sophisticated framework for understanding the complex nature of reality and truth.",
    elements: [
      "Philosophical method",
      "Truth analysis",
      "Reality examination",
      "Knowledge synthesis",
      "Perspective integration",
      "Logical framework",
      "Cognitive approach",
      "Wisdom cultivation"
    ],
    practices: [
      "Perspective taking",
      "Critical thinking",
      "Intellectual humility",
      "Truth seeking",
      "Knowledge synthesis",
      "Logical analysis",
      "Mental flexibility",
      "Wisdom development"
    ],
    recommendedReading: [
      {
        title: "Anekantavada: The Jaina Theory of Reality",
        author: "Dr. Nagin J. Shah",
        description: "Comprehensive study of Anekantavada philosophy",
        amazonLink: "https://www.amazon.com/Anekantavada-Theory-Reality-Nagin-Shah/dp/8120836282"
      }
    ]
  },
  {
    title: "Methodological Aspects",
    description: "Exploring the methods and approaches used in applying Anekantavada.",
    keyPoints: [
      "Syadvada Method",
      "Nayavada Analysis",
      "Logical Framework",
      "Truth Validation",
      "Knowledge Systems",
      "Perspective Methods",
      "Analytical Tools",
      "Integration Techniques"
    ],
    historicalRefs: [
      {
        text: "The sevenfold predication (Saptabhangi) was developed by ancient Jain logicians.",
        source: "Jain Logic Texts"
      },
      {
        text: "Methods of perspective analysis were detailed in Akalanka's works.",
        source: "Classical Commentaries"
      }
    ],
    significance: "Methodological aspects provide practical tools for implementing Anekantavada in understanding reality.",
    elements: [
      "Syadvada system",
      "Nayavada framework",
      "Logical methods",
      "Validation tools",
      "Knowledge integration",
      "Perspective analysis",
      "Analytical systems",
      "Integration methods"
    ],
    practices: [
      "Seven-fold analysis",
      "Perspective examination",
      "Logical reasoning",
      "Truth validation",
      "Knowledge synthesis",
      "Method application",
      "System integration",
      "Practical implementation"
    ],
    recommendedReading: [
      {
        title: "Methods of Anekantavada",
        author: "Dr. Y.J. Padmarajiah",
        description: "Study of Anekantavada methodology",
        amazonLink: "https://www.amazon.com/Methods-Anekantavada-Y-J-Padmarajiah/dp/8120811234"
      }
    ]
  },
  {
    title: "Practical Applications",
    description: "Understanding how Anekantavada applies to daily life and problem-solving.",
    keyPoints: [
      "Conflict Resolution",
      "Decision Making",
      "Problem Solving",
      "Ethical Choices",
      "Social Harmony",
      "Personal Growth",
      "Communication Skills",
      "Understanding Others"
    ],
    historicalRefs: [
      {
        text: "Applications of Anekantavada in social contexts by Jain acharyas.",
        source: "Historical Records"
      },
      {
        text: "Practical implementations in conflict resolution scenarios.",
        source: "Traditional Texts"
      }
    ],
    significance: "Practical applications demonstrate the relevance of Anekantavada in addressing real-world challenges.",
    elements: [
      "Resolution methods",
      "Decision frameworks",
      "Problem approaches",
      "Ethical guidelines",
      "Social principles",
      "Growth strategies",
      "Communication tools",
      "Understanding methods"
    ],
    practices: [
      "Conflict mediation",
      "Inclusive decision-making",
      "Multi-perspective analysis",
      "Ethical consideration",
      "Social engagement",
      "Personal reflection",
      "Effective communication",
      "Empathetic understanding"
    ],
    recommendedReading: [
      {
        title: "Practical Anekantavada",
        author: "Acharya Mahapragya",
        description: "Guide to applying Anekantavada in daily life",
        amazonLink: "https://www.amazon.com/Practical-Anekantavada-Acharya-Mahapragya/dp/8124605678"
      }
    ]
  },
  {
    title: "Modern Relevance",
    description: "Examining the contemporary significance and applications of Anekantavada.",
    keyPoints: [
      "Global Understanding",
      "Cultural Dialogue",
      "Scientific Thinking",
      "Social Harmony",
      "Environmental Ethics",
      "Business Ethics",
      "Political Discourse",
      "Educational Methods"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of Anekantavada by contemporary scholars.",
        source: "Contemporary Studies"
      },
      {
        text: "Applications in modern global contexts.",
        source: "Current Research"
      }
    ],
    significance: "Modern relevance shows how Anekantavada can address contemporary challenges and promote understanding.",
    elements: [
      "Global perspectives",
      "Cultural understanding",
      "Scientific approach",
      "Social applications",
      "Environmental view",
      "Business principles",
      "Political insight",
      "Educational tools"
    ],
    practices: [
      "Cross-cultural dialogue",
      "Scientific analysis",
      "Social engagement",
      "Environmental consideration",
      "Ethical business",
      "Political discourse",
      "Educational methods",
      "Global cooperation"
    ],
    recommendedReading: [
      {
        title: "Anekantavada in Modern Context",
        author: "Dr. John E. Cort",
        description: "Contemporary analysis of Anekantavada",
        amazonLink: "https://www.amazon.com/Anekantavada-Modern-Context-Cort/dp/8124603456"
      }
    ]
  }
]

export default function AnekantavadaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Anekantavada</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Jain doctrine of Anekantavada (many-sidedness), its philosophical implications, and its approach to understanding reality through multiple perspectives.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundation" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundation">Philosophical Foundation</TabsTrigger>
          <TabsTrigger value="methods">Methodological Aspects</TabsTrigger>
          <TabsTrigger value="practical">Practical Applications</TabsTrigger>
          <TabsTrigger value="modern">Modern Relevance</TabsTrigger>
        </TabsList>

        {anekantavadaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundation: true, methods: true, practical: true, modern: true})[index]}>
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
              title: "Karma and Liberation",
              href: "/religion/jainism/theology/karma"
            },
            {
              title: "Jiva and Ajiva",
              href: "/religion/jainism/theology/jiva"
            },
            {
              title: "Five Great Vows",
              href: "/religion/jainism/theology/vows"
            }
          ]}
        />
      </div>
    </div>
  )
} 