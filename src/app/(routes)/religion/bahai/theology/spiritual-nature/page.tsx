import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Spiritual Nature | Bahá'í Theology",
  description: "Explore the Bahá'í teachings on human spiritual nature, the soul's reality, spiritual development, and the purpose of human existence.",
  keywords: "Bahá'í Spiritual Nature, Human Soul, Spiritual Development, Divine Attributes, Prayer and Meditation, Spiritual Growth, Life After Death, Human Purpose"
}

interface SpiritualNatureContent {
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

const spiritualNatureContent: SpiritualNatureContent[] = [
  {
    title: "Soul and Spirit",
    description: "Understanding the Bahá'í concept of the human soul and its relationship with the body and spirit.",
    keyPoints: [
      "Immortality of the soul",
      "Relationship between soul and body",
      "Divine attributes and human potential",
      "Stages of spiritual existence",
      "Purpose of physical life",
      "Nature of consciousness",
      "Spiritual perception",
      "Individual identity"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's teachings on the soul in Gleanings from the Writings.",
        source: "Gleanings from the Writings of Bahá'u'lláh"
      },
      {
        text: "'Abdu'l-Bahá's explanations in Some Answered Questions.",
        source: "Some Answered Questions"
      }
    ],
    significance: "Understanding the soul's reality and its relationship to physical existence provides the foundation for spiritual development and purpose.",
    elements: [
      "Spiritual essence",
      "Divine qualities",
      "Eternal nature",
      "Conscious awareness",
      "Spiritual capacities",
      "Individual identity",
      "Soul's journey",
      "Spiritual reality"
    ],
    practices: [
      "Self-reflection",
      "Character development",
      "Spiritual education",
      "Prayer practice",
      "Meditation",
      "Service to others",
      "Study of writings",
      "Community participation"
    ],
    recommendedReading: [
      {
        title: "Life, Death and Immortality",
        author: "Julio Savi",
        description: "Comprehensive exploration of Bahá'í teachings on the soul",
        amazonLink: "https://www.amazon.com/Life-Death-Immortality-Julio-Savi/dp/0853984771"
      }
    ]
  },
  {
    title: "Spiritual Development",
    description: "Examining the process of spiritual growth and the development of divine attributes in human beings.",
    keyPoints: [
      "Progressive development",
      "Tests and difficulties",
      "Acquiring virtues",
      "Spiritual education",
      "Role of free will",
      "Divine assistance",
      "Community support",
      "Service and growth"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's guidance in The Hidden Words.",
        source: "The Hidden Words"
      },
      {
        text: "'Abdu'l-Bahá's explanations of spiritual growth in Paris Talks.",
        source: "Paris Talks"
      }
    ],
    significance: "Spiritual development is the primary purpose of human existence and the means of acquiring divine qualities.",
    elements: [
      "Progressive nature",
      "Divine assistance",
      "Individual effort",
      "Community support",
      "Educational process",
      "Character building",
      "Service orientation",
      "Spiritual disciplines"
    ],
    practices: [
      "Daily prayer",
      "Regular meditation",
      "Scripture study",
      "Service projects",
      "Character development",
      "Community involvement",
      "Teaching activities",
      "Reflection practices"
    ],
    recommendedReading: [
      {
        title: "The Divine Art of Living",
        author: "Mabel Hyde Paine",
        description: "Practical guidance for spiritual development",
        amazonLink: "https://www.amazon.com/Divine-Art-Living-Selections-Writings/dp/1931847673"
      }
    ]
  },
  {
    title: "Prayer and Meditation",
    description: "Understanding the role of prayer and meditation in spiritual growth and connection with the Divine.",
    keyPoints: [
      "Nature of prayer",
      "Types of meditation",
      "Spiritual connection",
      "Divine communion",
      "Personal transformation",
      "Collective worship",
      "Sacred writings",
      "Spiritual practices"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's revelations in Prayers and Meditations.",
        source: "Prayers and Meditations"
      },
      {
        text: "'Abdu'l-Bahá's guidance on prayer in Tablets.",
        source: "Tablets of 'Abdu'l-Bahá"
      }
    ],
    significance: "Prayer and meditation are essential tools for spiritual growth and maintaining connection with the Divine.",
    elements: [
      "Sacred words",
      "Inner reflection",
      "Divine connection",
      "Spiritual attitude",
      "Regular practice",
      "Sacred times",
      "Holy places",
      "Community worship"
    ],
    practices: [
      "Obligatory prayers",
      "Morning devotions",
      "Evening reflection",
      "Sacred reading",
      "Contemplation",
      "Group prayer",
      "Meditation practice",
      "Devotional gatherings"
    ],
    recommendedReading: [
      {
        title: "Prayer, Meditation, and the Devotional Attitude",
        author: "Bahá'í International Community",
        description: "Collection of writings on prayer and meditation",
        amazonLink: "https://www.amazon.com/Prayer-Meditation-Devotional-Attitude-Compilation/dp/0877432317"
      }
    ]
  },
  {
    title: "Life's Purpose",
    description: "Exploring the Bahá'í understanding of the purpose of human existence and spiritual destiny.",
    keyPoints: [
      "Divine purpose",
      "Spiritual progress",
      "Service to humanity",
      "Knowledge of God",
      "Character refinement",
      "Social transformation",
      "Unity building",
      "Eternal journey"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's teachings on life's purpose in The Seven Valleys.",
        source: "The Seven Valleys"
      },
      {
        text: "'Abdu'l-Bahá's explanations in The Secret of Divine Civilization.",
        source: "The Secret of Divine Civilization"
      }
    ],
    significance: "Understanding life's spiritual purpose provides direction and meaning to human existence and development.",
    elements: [
      "Divine creation",
      "Spiritual journey",
      "Service orientation",
      "Knowledge seeking",
      "Character building",
      "Social contribution",
      "Unity creation",
      "Eternal progress"
    ],
    practices: [
      "Purpose reflection",
      "Service planning",
      "Knowledge acquisition",
      "Character development",
      "Community building",
      "Teaching work",
      "Unity activities",
      "Spiritual growth"
    ],
    recommendedReading: [
      {
        title: "The Purpose of Physical Reality",
        author: "John S. Hatcher",
        description: "Analysis of the purpose of physical existence",
        amazonLink: "https://www.amazon.com/Purpose-Physical-Reality-Kingdom-Metaphor/dp/1931847673"
      }
    ]
  }
]

export default function SpiritualNaturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Spiritual Nature in the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Bahá'í teachings on human spiritual nature, the soul's reality, spiritual development, and the purpose of human existence.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="soul" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="soul">Soul & Spirit</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="prayer">Prayer</TabsTrigger>
          <TabsTrigger value="purpose">Purpose</TabsTrigger>
        </TabsList>

        {spiritualNatureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({soul: true, development: true, prayer: true, purpose: true})[index]}>
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
              title: "Divine Manifestations",
              href: "/religion/bahai/theology/manifestations"
            },
            {
              title: "Social Principles",
              href: "/religion/bahai/theology/social-principles"
            },
            {
              title: "Progressive Revelation",
              href: "/religion/bahai/theology/progressive-revelation"
            }
          ]}
        />
      </div>
    </div>
  )
} 