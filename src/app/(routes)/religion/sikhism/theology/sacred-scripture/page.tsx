import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Sacred Scripture | Sikh Theology",
  description: "Explore the sacred scriptures of Sikhism, including the Guru Granth Sahib, its compilation, interpretation, and significance in Sikh life.",
  keywords: "Guru Granth Sahib, Sikh Scripture, Gurbani, Adi Granth, Dasam Granth, Vars, Janamsakhis, Sikh texts"
}

interface ScriptureContent {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{ text: string; source: string }>
  significance: string
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const scriptureContent: ScriptureContent[] = [
  {
    title: "Guru Granth Sahib - The Eternal Guru",
    description: "The Guru Granth Sahib, installed as the eternal Guru by Guru Gobind Singh in 1708, is the supreme spiritual authority and living Guru of the Sikhs, containing 1430 pages of divine wisdom.",
    keyPoints: [
      "Compilation began by Guru Arjan Dev in 1604 as Adi Granth",
      "Contains hymns from six Sikh Gurus and 30 other saints",
      "Written in Gurmukhi script with multiple languages",
      "Organized by musical measures (Raags)",
      "Emphasizes universal brotherhood and divine unity"
    ],
    scriptureRefs: [
      {
        text: "In this Dark Age of Kali Yuga, the Granth is the Guru; through it, one knows the True Lord.",
        source: "Guru Granth Sahib, Page 387"
      },
      {
        text: "The Bani is the Guru, and the Guru is the Bani. Within the Bani, the Ambrosial Nectar is contained.",
        source: "Guru Ram Das, Guru Granth Sahib, Page 982"
      }
    ],
    significance: "The Guru Granth Sahib serves as the eternal living Guru, providing spiritual guidance, moral framework, and divine wisdom for all aspects of life.",
    practices: [
      "Daily reading (Nitnem) and contemplation",
      "Proper protocols for handling and housing",
      "Taking Hukam (divine command) for guidance",
      "Musical recitation (Kirtan)",
      "Continuous reading (Akhand Path)"
    ],
    recommendedReading: [
      {
        title: "The Guru Granth Sahib: Its Physics and Metaphysics",
        author: "Trilochan Singh",
        description: "Detailed analysis of the philosophical and spiritual dimensions of the sacred text",
        amazonLink: "https://www.amazon.com/Guru-Granth-Sahib-Physics-Metaphysics/dp/8172052669/"
      }
    ]
  },
  {
    title: "Structure and Content",
    description: "The Guru Granth Sahib follows a unique structure organized by musical measures (Raags) and contains diverse forms of spiritual poetry expressing divine truth.",
    keyPoints: [
      "31 main Raags (musical measures)",
      "Different forms: Shabads, Vars, Saloks",
      "Multiple languages: Punjabi, Sanskrit, Persian, Arabic",
      "Systematic arrangement of compositions",
      "Numerical organization system"
    ],
    scriptureRefs: [
      {
        text: "Through the Word of the Shabad, the Name of the Lord comes to dwell in the mind.",
        source: "Guru Granth Sahib, Page 67"
      },
      {
        text: "The True Lord has established His True Throne. He administers true justice.",
        source: "Guru Granth Sahib, Page 1088"
      }
    ],
    significance: "The structure ensures preservation of authentic teachings and facilitates understanding through musical and poetic expression.",
    practices: [
      "Study of Raag traditions",
      "Understanding poetic meters",
      "Learning Gurmukhi script",
      "Memorization of key passages",
      "Regular scriptural study"
    ],
    recommendedReading: [
      {
        title: "Musical Framework of Sri Guru Granth Sahib",
        author: "Gobind Singh Mansukhani",
        description: "Comprehensive study of the musical structure and arrangement of the sacred text",
        amazonLink: "https://www.amazon.com/Indian-Classical-Music-Sikh-Tradition/dp/8172052669/"
      }
    ]
  },
  {
    title: "Other Sacred Texts",
    description: "While the Guru Granth Sahib is supreme, Sikhism recognizes other important texts that provide historical context and additional teachings.",
    keyPoints: [
      "Dasam Granth - compositions of Guru Gobind Singh",
      "Vars (ballads) of Bhai Gurdas",
      "Janamsakhis (hagiographies)",
      "Hukamnamas (edicts of the Gurus)",
      "Historical texts and commentaries"
    ],
    scriptureRefs: [
      {
        text: "The wise person reads, hears and acts upon the written word of the Guru.",
        source: "Bhai Gurdas, Var 1"
      },
      {
        text: "Through understanding comes devotion; through devotion comes peace.",
        source: "Dasam Granth"
      }
    ],
    significance: "These texts provide valuable historical context, philosophical explanations, and practical guidance for Sikh life.",
    practices: [
      "Study of historical contexts",
      "Understanding multiple perspectives",
      "Critical analysis of sources",
      "Application to contemporary life",
      "Preservation of textual heritage"
    ],
    recommendedReading: [
      {
        title: "The Making of Sikh Scripture",
        author: "Gurinder Singh Mann",
        description: "Historical analysis of the development of Sikh sacred texts",
        amazonLink: "https://www.amazon.com/Making-Sikh-Scripture-Gurinder-Singh/dp/0195130243/"
      }
    ]
  },
  {
    title: "Interpretation and Application",
    description: "The interpretation of Sikh scripture involves careful study, scholarly analysis, and practical application in daily life, guided by established traditions and contemporary understanding.",
    keyPoints: [
      "Traditional exegetical methods",
      "Role of Sikh scholars (Gianis)",
      "Contemporary interpretations",
      "Application to modern issues",
      "Preservation of authenticity"
    ],
    scriptureRefs: [
      {
        text: "Those who understand the Guru's teachings and meditate on them, obtain the fruits of their rewards.",
        source: "Guru Granth Sahib, Page 1239"
      },
      {
        text: "The Guru's Word is the philosopher's stone; by its touch, iron is turned into gold.",
        source: "Guru Granth Sahib, Page 920"
      }
    ],
    significance: "Proper interpretation ensures the continued relevance and application of sacred teachings in contemporary life.",
    practices: [
      "Regular study with learned scholars",
      "Participation in scriptural discussion",
      "Application to daily decisions",
      "Sharing understanding with others",
      "Continuous learning and reflection"
    ],
    recommendedReading: [
      {
        title: "Studying the Sikhs: Issues for North America",
        author: "John Stratton Hawley",
        description: "Contemporary approaches to understanding and interpreting Sikh scripture",
        amazonLink: "https://www.amazon.com/Studying-Sikhs-America-SUNY-Series/dp/0791421759/"
      }
    ]
  }
]

export default function SacredScripturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sacred Scripture in Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the sacred scriptures of Sikhism, from the supreme authority of the Guru Granth Sahib to other important texts, their interpretation, and application in Sikh life.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="guru-granth" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="guru-granth">Guru Granth Sahib</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="other-texts">Other Texts</TabsTrigger>
          <TabsTrigger value="interpretation">Interpretation</TabsTrigger>
        </TabsList>

        {scriptureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({"guru-granth": true, structure: true, "other-texts": true, interpretation: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Scripture References</h3>
                  <div className="space-y-4">
                    {content.scriptureRefs.map((ref, i) => (
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

      <RelatedTopics
        topics={[
          { title: "The Guru Tradition", href: "/religion/sikhism/theology/guru-tradition" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" },
          { title: "Ethics and Values", href: "/religion/sikhism/theology/ethics-values" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 