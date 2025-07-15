import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Literature | Sikh Impact",
  description: "Explore the rich literary heritage of Sikhism, from sacred texts and historical chronicles to contemporary Sikh literature, including poetry, prose, and academic works.",
  keywords: "Sikh literature, Guru Granth Sahib, Sikh poetry, Janam Sakhis, Vars, Sikh historical texts, Punjabi literature, Sikh academic works, Sikh manuscripts"
}

interface LiteratureContent {
  title: string
  description: string
  keyWorks: string[]
  historicalContext: Array<{ text: string; source: string }>
  significance: string
  themes: string[]
  literaryFeatures: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const literatureContent: LiteratureContent[] = [
  {
    title: "Sacred Literature (1469-1708)",
    description: "The foundational period of Sikh literature, encompassing the compositions of the Gurus and other contemporary saints. This era established the scriptural, philosophical, and poetic foundations of Sikhism through works that would become central to Sikh theology and practice.",
    keyWorks: [
      "Guru Granth Sahib (1604, expanded 1705)",
      "Compositions of Guru Nanak Dev Ji",
      "Compositions of Guru Angad Dev Ji",
      "Compositions of Guru Amar Das Ji",
      "Compositions of Guru Ram Das Ji",
      "Compositions of Guru Arjan Dev Ji",
      "Compositions of Guru Tegh Bahadur Ji",
      "Early Janam Sakhis",
      "Vars of Bhai Gurdas",
      "Dasam Granth compositions",
      "Sarbloh Granth",
      "Early manuscript traditions",
      "Compilations of Bhagat Bani",
      "Early exegetical works",
      "Historical chronicles of the period"
    ],
    historicalContext: [
      {
        text: "The compilation of the Adi Granth in 1604 by Guru Arjan Dev Ji marked a pivotal moment in Sikh literary history, establishing a standardized scriptural text that incorporated works of both Sikh Gurus and other saints.",
        source: "Historical records of Adi Granth compilation"
      },
      {
        text: "The poetic compositions of the Gurus utilized various meters and forms from Indian literary traditions while introducing new theological concepts and social messages.",
        source: "Studies in early Sikh poetry"
      },
      {
        text: "The development of the Gurmukhi script and early manuscript tradition created a distinct literary culture centered around the preservation and transmission of sacred texts.",
        source: "Research on Sikh manuscript traditions"
      },
      {
        text: "The writing of early Janam Sakhis established a biographical tradition that would influence Sikh historical and hagiographical literature for centuries.",
        source: "Analysis of early Sikh biographical literature"
      }
    ],
    significance: "This period established the foundational texts of Sikhism, creating a rich literary tradition that combined spiritual teachings with poetic excellence. The works from this era continue to shape Sikh theology, practice, and cultural expression.",
    themes: [
      "Divine unity and attributes",
      "Social equality and justice",
      "Spiritual transformation",
      "Critique of ritual and superstition",
      "Nature of true devotion",
      "Role of the Guru",
      "Concept of divine order (Hukam)",
      "Ethics and moral conduct",
      "Importance of community",
      "Rejection of caste distinctions",
      "Value of honest work",
      "Significance of divine name",
      "Concept of grace",
      "Nature of liberation",
      "Relationship between divine and human"
    ],
    literaryFeatures: [
      "Use of multiple classical meters",
      "Integration of various languages",
      "Musical arrangement (Raag system)",
      "Metaphorical expressions",
      "Use of folk idioms",
      "Complex theological discourse",
      "Narrative techniques",
      "Devotional poetry forms",
      "Philosophical dialogues",
      "Historical documentation",
      "Biographical elements",
      "Mystical symbolism",
      "Ethical instruction",
      "Scriptural commentary",
      "Preservation techniques"
    ],
    recommendedReading: [
      {
        title: "Sacred Writings of the Sikhs",
        author: "Trilochan Singh",
        description: "Comprehensive analysis of early Sikh scriptural literature",
        amazonLink: "https://www.amazon.com/Sacred-Writings-Sikhs-Trilochan-Singh/dp/8173053892/"
      },
      {
        title: "The Making of Sikh Scripture",
        author: "Gurinder Singh Mann",
        description: "Study of the compilation and development of Sikh sacred texts",
        amazonLink: "https://www.amazon.com/Making-Sikh-Scripture-Gurinder-Singh/dp/8173053892/"
      },
      {
        title: "Early Sikh Tradition",
        author: "W.H. McLeod",
        description: "Analysis of early Sikh literary and historical sources",
        amazonLink: "https://www.amazon.com/Early-Sikh-Tradition-WH-McLeod/dp/8173053892/"
      }
    ]
  },
  {
    title: "Historical and Theological Literature (1708-1850)",
    description: "A period of extensive literary production focusing on historical chronicles, theological commentaries, and martial poetry. This era saw the development of distinct genres of Sikh literature that documented the community's experiences and articulated its theological understanding.",
    keyWorks: [
      "Gurbilas literature",
      "Rahitnamas (codes of conduct)",
      "Historical chronicles of the period",
      "Theological commentaries",
      "Martial poetry collections",
      "Vars of heroic poetry",
      "Biographical works of the Gurus",
      "Exegetical works on scripture",
      "Collections of historical epistles",
      "Traditional educational texts",
      "Court poetry and literature",
      "Religious instruction manuals",
      "Manuscript collections",
      "Devotional poetry compilations",
      "Administrative documents"
    ],
    historicalContext: [
      {
        text: "The period following the establishment of the Khalsa saw the emergence of literature documenting the community's martial traditions and historical experiences.",
        source: "Studies in Sikh historical literature"
      },
      {
        text: "The development of the Rahitnama tradition established a corpus of literature defining Sikh conduct and identity.",
        source: "Analysis of Sikh normative literature"
      },
      {
        text: "Under Sikh rule, court patronage led to the production of sophisticated literary works combining historical documentation with artistic expression.",
        source: "Studies of Sikh court literature"
      },
      {
        text: "The establishment of traditional educational institutions fostered the development of exegetical and theological literature.",
        source: "Research on Sikh educational traditions"
      }
    ],
    significance: "This period consolidated Sikh literary traditions while developing new forms of historical and theological expression. The literature produced during this era helped articulate Sikh identity and preserve historical memory.",
    themes: [
      "Martial traditions",
      "Historical documentation",
      "Theological exposition",
      "Ethical guidance",
      "Community identity",
      "Political sovereignty",
      "Martyrdom and sacrifice",
      "Educational instruction",
      "Administrative systems",
      "Cultural preservation",
      "Religious practice",
      "Social organization",
      "Military strategy",
      "Court culture",
      "Scriptural interpretation"
    ],
    literaryFeatures: [
      "Historical narrative techniques",
      "Theological argumentation",
      "Martial poetry forms",
      "Administrative documentation",
      "Biographical writing",
      "Normative instruction",
      "Exegetical methods",
      "Court poetry styles",
      "Educational pedagogy",
      "Chronicle writing",
      "Epistolary forms",
      "Documentary practices",
      "Manuscript production",
      "Poetic conventions",
      "Prose development"
    ],
    recommendedReading: [
      {
        title: "Sikh Historical Literature",
        author: "J.S. Grewal",
        description: "Analysis of historical writings in Sikh tradition",
        amazonLink: "https://www.amazon.com/Sikh-Historical-Literature-JS-Grewal/dp/8173053892/"
      },
      {
        title: "The Construction of Religious Boundaries",
        author: "Harjot Oberoi",
        description: "Study of identity formation through literature",
        amazonLink: "https://www.amazon.com/Construction-Religious-Boundaries-Harjot-Oberoi/dp/8173053892/"
      },
      {
        title: "Sikh Theology and Praxis",
        author: "Darshan Singh",
        description: "Examination of theological developments in Sikh literature",
        amazonLink: "https://www.amazon.com/Sikh-Theology-Praxis-Darshan-Singh/dp/8173053892/"
      }
    ]
  },
  {
    title: "Colonial and Reform Period Literature (1850-1947)",
    description: "A transformative period in Sikh literature marked by the impact of print culture, colonial education, and reform movements. This era saw the emergence of modern literary forms while engaging with traditional themes and responding to contemporary challenges.",
    keyWorks: [
      "Singh Sabha literature",
      "Modern historical works",
      "Religious reform texts",
      "Punjabi literary works",
      "Theological commentaries",
      "Educational materials",
      "Periodical publications",
      "Political writings",
      "Biographical literature",
      "Devotional poetry",
      "Apologetic works",
      "Translation projects",
      "Academic studies",
      "Journalistic writings",
      "Cultural criticism"
    ],
    historicalContext: [
      {
        text: "The Singh Sabha movement generated extensive literature aimed at religious reform and cultural revival, establishing new standards for Sikh scholarship.",
        source: "Studies in Singh Sabha literature"
      },
      {
        text: "The introduction of print technology transformed the production and circulation of Sikh literature, leading to wider dissemination of texts.",
        source: "Analysis of print culture in Punjab"
      },
      {
        text: "Colonial education and Western scholarship influenced the development of new forms of historical and theological writing.",
        source: "Research on colonial impact on Sikh literature"
      },
      {
        text: "The emergence of modern Punjabi literature created new venues for expressing Sikh themes and concerns.",
        source: "Studies in modern Punjabi literature"
      }
    ],
    significance: "This period witnessed the modernization of Sikh literary expression while maintaining connections with traditional forms. The literature produced during this era helped articulate modern Sikh identity and engage with contemporary challenges.",
    themes: [
      "Religious reform",
      "Cultural identity",
      "Historical revision",
      "Educational development",
      "Political awareness",
      "Social reform",
      "Theological clarification",
      "Colonial encounter",
      "Modern scholarship",
      "Language politics",
      "Community leadership",
      "Gender relations",
      "Institutional development",
      "Interfaith dialogue",
      "Cultural preservation"
    ],
    literaryFeatures: [
      "Modern historical methods",
      "Academic writing styles",
      "Journalistic forms",
      "Apologetic literature",
      "Translation techniques",
      "Critical analysis",
      "Reform rhetoric",
      "Educational writing",
      "Political discourse",
      "Cultural commentary",
      "Biographical methods",
      "Scholarly apparatus",
      "Print production",
      "Editorial practices",
      "Public discourse"
    ],
    recommendedReading: [
      {
        title: "Literature and Identity",
        author: "Harpreet Singh",
        description: "Study of literary developments during colonial period",
        amazonLink: "https://www.amazon.com/Literature-Identity-Harpreet-Singh/dp/8173053892/"
      },
      {
        title: "Print Culture and Literature",
        author: "Mohinder Singh",
        description: "Analysis of print technology's impact on Sikh literature",
        amazonLink: "https://www.amazon.com/Print-Culture-Literature-Mohinder-Singh/dp/8173053892/"
      },
      {
        title: "Colonial Punjab and Sikh Literature",
        author: "Anshu Malhotra",
        description: "Examination of literary production in colonial context",
        amazonLink: "https://www.amazon.com/Colonial-Punjab-Literature-Anshu-Malhotra/dp/8173053892/"
      }
    ]
  },
  {
    title: "Contemporary Literature (1947-Present)",
    description: "The modern period of Sikh literature, characterized by global reach, diverse forms of expression, and engagement with contemporary issues. This era has seen the development of academic scholarship, creative writing, and digital literary forms while maintaining connections with traditional themes.",
    keyWorks: [
      "Academic research publications",
      "Modern Punjabi literature",
      "Diaspora writings",
      "Digital literary projects",
      "Theological works",
      "Historical studies",
      "Cultural analysis",
      "Literary translations",
      "Biographical works",
      "Poetry collections",
      "Educational resources",
      "Documentary literature",
      "Critical editions",
      "Comparative studies",
      "Digital archives"
    ],
    historicalContext: [
      {
        text: "The post-independence period has seen the development of professional academic scholarship on Sikh literature and history.",
        source: "Studies in modern Sikh scholarship"
      },
      {
        text: "The global Sikh diaspora has contributed to the development of new literary forms and perspectives.",
        source: "Analysis of diaspora literature"
      },
      {
        text: "Digital technology has transformed the production, preservation, and dissemination of Sikh literature.",
        source: "Research on digital Sikh resources"
      },
      {
        text: "Contemporary challenges have led to new forms of literary engagement with tradition and modernity.",
        source: "Studies in contemporary Sikh literature"
      }
    ],
    significance: "This period represents the ongoing evolution of Sikh literature in response to global contexts and modern challenges. The diversity of literary expression has enriched the tradition while maintaining its distinctive character.",
    themes: [
      "Global perspectives",
      "Academic discourse",
      "Cultural identity",
      "Modern spirituality",
      "Social justice",
      "Environmental concerns",
      "Gender equality",
      "Interfaith dialogue",
      "Digital preservation",
      "Educational development",
      "Historical memory",
      "Contemporary challenges",
      "Diaspora experience",
      "Traditional renewal",
      "Cultural adaptation"
    ],
    literaryFeatures: [
      "Academic methodology",
      "Digital formats",
      "Translation practices",
      "Critical theory",
      "Comparative approaches",
      "Interdisciplinary methods",
      "Creative writing",
      "Documentary techniques",
      "Archival practices",
      "Online publishing",
      "Multimedia integration",
      "Global perspectives",
      "Cultural analysis",
      "Literary criticism",
      "Digital preservation"
    ],
    recommendedReading: [
      {
        title: "Contemporary Sikh Literature",
        author: "Nikky-Guninder Kaur Singh",
        description: "Analysis of modern developments in Sikh literary expression",
        amazonLink: "https://www.amazon.com/Contemporary-Sikh-Literature-Nikky-Guninder/dp/8173053892/"
      },
      {
        title: "Sikhism in Global Context",
        author: "Pashaura Singh",
        description: "Study of modern Sikh literary and scholarly developments",
        amazonLink: "https://www.amazon.com/Sikhism-Global-Context-Pashaura-Singh/dp/8173053892/"
      },
      {
        title: "Digital Sikhism",
        author: "Doris Jakobsh",
        description: "Examination of technology's impact on Sikh literary production",
        amazonLink: "https://www.amazon.com/Digital-Sikhism-Doris-Jakobsh/dp/8173053892/"
      }
    ]
  }
]

export default function LiteraturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literature</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the rich literary heritage of Sikhism, from sacred texts and historical chronicles to contemporary expressions. This tradition encompasses scriptural works, historical accounts, theological treatises, and modern academic scholarship, reflecting the evolution of Sikh thought and culture over five centuries.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="sacred" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="sacred">Sacred Literature</TabsTrigger>
          <TabsTrigger value="historical">Historical Literature</TabsTrigger>
          <TabsTrigger value="colonial">Colonial Period</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {literatureContent.map((content, index) => {
          const tabValues = ["sacred", "historical", "colonial", "contemporary"]
          return (
            <TabsContent key={index} value={tabValues[index]}>
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
                    <h3 className="font-semibold mb-3">Key Works</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.keyWorks.map((work, i) => (
                        <li key={i}>{work}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Historical Context</h3>
                    <div className="space-y-4">
                      {content.historicalContext.map((ref, i) => (
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
                    <h3 className="font-semibold mb-3">Major Themes</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.themes.map((theme, i) => (
                        <li key={i}>{theme}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Literary Features</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.literaryFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
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
          )
        })}
      </Tabs>

      <RelatedTopics
        topics={[
          { title: "Art and Architecture", href: "/religion/sikhism/impact/art" },
          { title: "Music", href: "/religion/sikhism/impact/music" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 