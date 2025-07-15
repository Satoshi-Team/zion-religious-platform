import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Literature Impact | Taoist Impact",
  description: "Explore Taoism's profound influence on Chinese and East Asian literature, examining its impact on poetry, prose, philosophical texts, and modern literary expressions.",
  keywords: "Taoist Literature, Chinese Poetry, Classical Texts, Philosophical Writing, Literary Theory, Modern Literature, Taoist Poetry, Literary Influence"
}

interface LiteratureContent {
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

const literatureContent: LiteratureContent[] = [
  {
    title: "Classical Texts and Commentaries",
    description: "Examining the foundational Taoist texts and their literary influence on Chinese intellectual tradition.",
    keyPoints: [
      "Daodejing composition",
      "Zhuangzi's influence",
      "Commentary traditions",
      "Textual transmission",
      "Literary innovations",
      "Philosophical style",
      "Metaphorical language",
      "Interpretive methods"
    ],
    historicalRefs: [
      {
        text: "Wang Bi's influential commentary on the Daodejing in the 3rd century CE.",
        source: "Classical Chinese Textual Studies"
      },
      {
        text: "Guo Xiang's edition and commentary of the Zhuangzi in the late 3rd century.",
        source: "History of Chinese Philosophy"
      }
    ],
    significance: "The classical Taoist texts established unique literary forms and philosophical expressions that influenced all subsequent Chinese literature.",
    elements: [
      "Paradoxical expression",
      "Natural metaphors",
      "Philosophical dialogue",
      "Mystical narrative",
      "Poetic philosophy",
      "Allegorical tales",
      "Wisdom literature",
      "Commentary methods"
    ],
    practices: [
      "Textual study",
      "Commentary writing",
      "Literary analysis",
      "Philosophical interpretation",
      "Manuscript preservation",
      "Teaching methods",
      "Translation practices",
      "Scholarly debate"
    ],
    recommendedReading: [
      {
        title: "The Classic of the Way and Virtue",
        author: "Philip J. Ivanhoe",
        description: "A scholarly translation and analysis of the Daodejing",
        amazonLink: "https://www.amazon.com/Classic-Way-Virtue-Translation-Selections/dp/0872207013"
      }
    ]
  },
  {
    title: "Poetry and Verse",
    description: "Analyzing Taoist influences in Chinese poetry and poetic theory throughout history.",
    keyPoints: [
      "Nature poetry",
      "Hermit tradition",
      "Mountain-water verse",
      "Spiritual themes",
      "Aesthetic theory",
      "Spontaneous expression",
      "Mystical imagery",
      "Poetic philosophy"
    ],
    historicalRefs: [
      {
        text: "Tao Yuanming's nature poetry in the 4th-5th centuries.",
        source: "Classical Chinese Poetry"
      },
      {
        text: "Li Bai's Taoist-influenced verses in the Tang Dynasty.",
        source: "Tang Dynasty Literary History"
      }
    ],
    significance: "Taoist poetry created a distinctive tradition of nature-centered, spiritually profound verse that shaped East Asian poetic expression.",
    elements: [
      "Natural imagery",
      "Spiritual insight",
      "Spontaneous style",
      "Mystical themes",
      "Philosophical depth",
      "Emotional resonance",
      "Symbolic language",
      "Aesthetic harmony"
    ],
    practices: [
      "Nature contemplation",
      "Poetic composition",
      "Spiritual cultivation",
      "Literary meditation",
      "Aesthetic refinement",
      "Creative spontaneity",
      "Symbolic expression",
      "Artistic freedom"
    ],
    recommendedReading: [
      {
        title: "Mountain Home: The Wilderness Poetry of Ancient China",
        author: "David Hinton",
        description: "Translation and analysis of Taoist nature poetry",
        amazonLink: "https://www.amazon.com/Mountain-Home-Wilderness-Poetry-Ancient/dp/0811216241"
      }
    ]
  },
  {
    title: "Prose and Narrative",
    description: "Exploring Taoist influences in Chinese prose, fiction, and narrative traditions.",
    keyPoints: [
      "Philosophical essays",
      "Mystical tales",
      "Biographical writing",
      "Historical narrative",
      "Religious stories",
      "Literary theory",
      "Aesthetic principles",
      "Narrative techniques"
    ],
    historicalRefs: [
      {
        text: "Strange Tales from a Chinese Studio by Pu Songling, influenced by Taoist concepts.",
        source: "Chinese Literary Traditions"
      },
      {
        text: "Journey to the West's incorporation of Taoist themes and characters.",
        source: "Classical Chinese Fiction"
      }
    ],
    significance: "Taoist prose and narrative traditions developed unique storytelling methods and philosophical expressions that enriched Chinese literature.",
    elements: [
      "Mystical narratives",
      "Philosophical dialogue",
      "Allegorical stories",
      "Character development",
      "Symbolic meaning",
      "Natural description",
      "Spiritual themes",
      "Literary innovation"
    ],
    practices: [
      "Story crafting",
      "Character creation",
      "Narrative structure",
      "Philosophical writing",
      "Literary analysis",
      "Creative process",
      "Symbolic expression",
      "Aesthetic development"
    ],
    recommendedReading: [
      {
        title: "The Literary Mind and the Carving of Dragons",
        author: "Liu Xie",
        description: "Classic work on Chinese literary theory with Taoist influences",
        amazonLink: "https://www.amazon.com/Literary-Mind-Carving-Dragons-Translation/dp/9622019102"
      }
    ]
  },
  {
    title: "Modern Interpretations",
    description: "Examining contemporary literary expressions and adaptations of Taoist themes.",
    keyPoints: [
      "Modern adaptations",
      "Global influence",
      "Contemporary poetry",
      "Fiction writing",
      "Literary theory",
      "Cultural translation",
      "Digital expression",
      "Cross-cultural impact"
    ],
    historicalRefs: [
      {
        text: "Ursula K. Le Guin's adaptation of Taoist themes in science fiction.",
        source: "Contemporary Literary Studies"
      },
      {
        text: "Development of Taoist-influenced environmental literature since the 1960s.",
        source: "Modern Literary Movements"
      }
    ],
    significance: "Taoist literary principles continue to inspire and influence contemporary global literature and creative expression.",
    elements: [
      "Contemporary forms",
      "Global perspectives",
      "Environmental themes",
      "Cultural fusion",
      "Digital media",
      "Modern philosophy",
      "Creative innovation",
      "Social engagement"
    ],
    practices: [
      "Modern writing",
      "Digital publishing",
      "Literary experimentation",
      "Cultural adaptation",
      "Environmental writing",
      "Cross-cultural dialogue",
      "Creative workshops",
      "Literary translation"
    ],
    recommendedReading: [
      {
        title: "The Tao of Writing",
        author: "Ralph L. Wahlstrom",
        description: "Application of Taoist principles to modern writing",
        amazonLink: "https://www.amazon.com/Tao-Writing-Imagine-Create-Flow/dp/1593371373"
      }
    ]
  }
]

export default function LiteraturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Taoist Impact on Literature</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Taoism's profound influence on Chinese and East Asian literature, examining its impact on poetry, prose, philosophical texts, and modern literary expressions.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="classical" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="classical">Classical</TabsTrigger>
          <TabsTrigger value="poetry">Poetry</TabsTrigger>
          <TabsTrigger value="prose">Prose</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {literatureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({classical: true, poetry: true, prose: true, modern: true})[index]}>
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
              title: "Art Impact",
              href: "/religion/taoism/impact/art"
            },
            {
              title: "Cultural Impact",
              href: "/religion/taoism/impact/culture"
            },
            {
              title: "Philosophy Impact",
              href: "/religion/taoism/impact/philosophy"
            }
          ]}
        />
      </div>
    </div>
  )
} 