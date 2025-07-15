import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Han Synthesis | Confucian History",
  description: "Explore the Han Synthesis period (206 BCE - 220 CE) of Confucianism, when it became the state orthodoxy and incorporated elements from other schools of thought.",
  keywords: "Han Dynasty, Confucianism, State Orthodoxy, Dong Zhongshu, New Text School, Old Text School, Chinese Philosophy, Imperial Examination"
}

interface HanContent {
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

const hanContent: HanContent[] = [
  {
    title: "State Orthodoxy",
    description: "The establishment of Confucianism as the official state ideology during the Han Dynasty, particularly under Emperor Wu (141-87 BCE).",
    keyPoints: [
      "Imperial patronage",
      "Dong Zhongshu's influence",
      "State examination system",
      "Official academies",
      "Canonical texts",
      "Political application",
      "Educational reform",
      "Administrative structure"
    ],
    historicalRefs: [
      {
        text: "Heaven and Man are united as one.",
        source: "Chunqiu Fanlu 天人三策"
      },
      {
        text: "The Three Bonds and Five Relationships form the basis of social order.",
        source: "Han Shu 漢書"
      }
    ],
    significance: "The Han Synthesis transformed Confucianism from a school of thought into the foundation of Chinese imperial governance and social order.",
    elements: [
      "State ideology",
      "Imperial bureaucracy",
      "Educational system",
      "Social hierarchy",
      "Political theory",
      "Moral standards",
      "Cultural norms",
      "Administrative practices"
    ],
    practices: [
      "Civil service exams",
      "Official appointments",
      "Text memorization",
      "Ritual performance",
      "Administrative duties",
      "Educational training",
      "Court ceremonies",
      "Document preparation"
    ],
    recommendedReading: [
      {
        title: "The Formation of Chinese Imperial Ideology",
        author: "Michael Loewe",
        description: "Study of Han Dynasty state ideology",
        amazonLink: "https://www.amazon.com/Formation-Chinese-Imperial-Ideology/dp/0674436153"
      }
    ]
  },
  {
    title: "Philosophical Integration",
    description: "The synthesis of Confucian thought with elements from other schools, particularly Legalism, Daoism, and Yin-Yang cosmology.",
    keyPoints: [
      "Cosmological theories",
      "Five Elements theory",
      "Yin-Yang philosophy",
      "Legalist methods",
      "Daoist concepts",
      "Moral metaphysics",
      "Natural philosophy",
      "Political theory"
    ],
    historicalRefs: [
      {
        text: "The Five Phases correspond to the Five Virtues.",
        source: "Dong Zhongshu's Essays"
      },
      {
        text: "Heaven, Earth, and Man form the Three Powers.",
        source: "Baihu Tong 白虎通"
      }
    ],
    significance: "The philosophical synthesis created a comprehensive worldview that integrated moral, political, and cosmological dimensions.",
    elements: [
      "Cosmological framework",
      "Moral philosophy",
      "Political theory",
      "Natural philosophy",
      "Social ethics",
      "Ritual system",
      "Educational methods",
      "Administrative principles"
    ],
    practices: [
      "Cosmological correlation",
      "Moral cultivation",
      "Political application",
      "Ritual performance",
      "Educational methods",
      "Administrative techniques",
      "Text interpretation",
      "Philosophical discourse"
    ],
    recommendedReading: [
      {
        title: "Dong Zhongshu: A 'Confucian' Heritage and the Chunqiu Fanlu",
        author: "Sarah Queen",
        description: "Study of Han Confucian synthesis",
        amazonLink: "https://www.amazon.com/Dong-Zhongshu-Confucian-Heritage-Chunqiu/dp/0791426912"
      }
    ]
  },
  {
    title: "Textual Traditions",
    description: "The development of New Text and Old Text schools, and the establishment of the Confucian canon during the Han period.",
    keyPoints: [
      "New Text School",
      "Old Text School",
      "Canon formation",
      "Text recovery",
      "Commentary traditions",
      "Interpretive methods",
      "Educational texts",
      "Scholarly debates"
    ],
    historicalRefs: [
      {
        text: "The Five Classics become the basis of education.",
        source: "Han Shu 藝文志"
      },
      {
        text: "The New Text and Old Text schools debate interpretation.",
        source: "Shi Ji 史記"
      }
    ],
    significance: "The Han period established the textual foundation and interpretive traditions that would shape Confucian learning for centuries.",
    elements: [
      "Classical texts",
      "Commentary systems",
      "Interpretive methods",
      "Educational materials",
      "Scholarly traditions",
      "Textual studies",
      "Literary forms",
      "Academic debates"
    ],
    practices: [
      "Text study",
      "Commentary writing",
      "Manuscript preservation",
      "Educational use",
      "Scholarly debate",
      "Interpretive methods",
      "Teaching techniques",
      "Research methods"
    ],
    recommendedReading: [
      {
        title: "Text and Ritual in Early China",
        author: "Martin Kern",
        description: "Study of Han textual traditions",
        amazonLink: "https://www.amazon.com/Text-Ritual-Early-China-Martin/dp/0295987871"
      }
    ]
  },
  {
    title: "Social Impact",
    description: "The transformation of Chinese society through the institutionalization of Confucian values and practices during the Han period.",
    keyPoints: [
      "Social structure",
      "Family system",
      "Gender roles",
      "Educational practices",
      "Ritual customs",
      "Moral standards",
      "Cultural patterns",
      "Class mobility"
    ],
    historicalRefs: [
      {
        text: "The worthy man may rise from humble origins.",
        source: "Han Shu 漢書"
      },
      {
        text: "Ritual and music shape the people's character.",
        source: "Baihu Tong 白虎通"
      }
    ],
    significance: "Han Confucianism established enduring patterns of social organization and cultural practice in Chinese civilization.",
    elements: [
      "Social hierarchy",
      "Family structure",
      "Educational system",
      "Ritual practices",
      "Moral values",
      "Cultural norms",
      "Class relations",
      "Gender roles"
    ],
    practices: [
      "Family rituals",
      "Educational methods",
      "Social ceremonies",
      "Moral instruction",
      "Cultural activities",
      "Status maintenance",
      "Role fulfillment",
      "Social networking"
    ],
    recommendedReading: [
      {
        title: "Family and State in Early Imperial China",
        author: "Michael Nylan",
        description: "Analysis of Han social structure",
        amazonLink: "https://www.amazon.com/Family-State-Early-Imperial-China/dp/0674017528"
      }
    ]
  }
]

export default function HanPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Han Synthesis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Han Synthesis period (206 BCE - 220 CE) of Confucianism, when it became the state orthodoxy and incorporated elements from other schools of thought.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="orthodoxy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="orthodoxy">Orthodoxy</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="texts">Texts</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        {hanContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({orthodoxy: true, philosophy: true, texts: true, impact: true})[index]}>
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
              title: "Classical Period",
              href: "/religion/confucianism/history/classical"
            },
            {
              title: "Neo-Confucianism",
              href: "/religion/confucianism/history/neo"
            },
            {
              title: "Modern Revival",
              href: "/religion/confucianism/history/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 