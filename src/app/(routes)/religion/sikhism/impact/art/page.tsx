import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Art and Architecture | Sikh Impact",
  description: "Explore the rich artistic and architectural heritage of Sikhism, from historic gurdwaras to contemporary Sikh art, including traditional painting, calligraphy, and modern expressions.",
  keywords: "Sikh art, Sikh architecture, gurdwara design, Sikh painting, Sikh calligraphy, Gurmukhi calligraphy, Sikh heritage, Sikh monuments, Sikh artistic traditions"
}

interface ArtContent {
  title: string
  description: string
  keyFeatures: string[]
  historicalContext: Array<{ text: string; source: string }>
  significance: string
  examples: string[]
  techniquesAndStyles: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const artContent: ArtContent[] = [
  {
    title: "Early Sikh Architecture (1500-1700)",
    description: "The foundational period of Sikh architecture, marked by the establishment of early gurdwaras and the development of distinctive architectural elements. This era saw the emergence of unique Sikh architectural features that would become hallmarks of the tradition, blending local Punjab styles with Islamic and Hindu influences while creating something distinctly Sikh.",
    keyFeatures: [
      "Establishment of first historical gurdwaras by the Gurus",
      "Development of the basic elements of gurdwara architecture",
      "Creation of sarovars (sacred pools) as architectural features",
      "Integration of langar halls into architectural planning",
      "Evolution of the dome and entrance designs",
      "Use of local building materials and techniques",
      "Development of congregational space design",
      "Integration of Guru Granth Sahib placement in architecture",
      "Creation of distinctive entrance archways",
      "Establishment of architectural symbols and motifs",
      "Development of acoustic spaces for kirtan",
      "Integration of living quarters for sevadars",
      "Creation of spaces for historical preservation",
      "Development of pilgrim accommodation facilities",
      "Evolution of decorative elements"
    ],
    historicalContext: [
      {
        text: "The first Sikh gurdwara, Gurdwara Kartarpur Sahib, established by Guru Nanak Dev Ji in 1522, set the basic template for Sikh religious architecture. Its design emphasized equality, community service, and devotion.",
        source: "Historical records of early Sikh architecture"
      },
      {
        text: "The construction of the Harmandir Sahib (Golden Temple) by Guru Arjan Dev Ji in 1604 marked a significant evolution in Sikh architecture, introducing revolutionary concepts like four entrances symbolizing openness to all.",
        source: "Architectural history of the Golden Temple"
      },
      {
        text: "Early gurdwaras incorporated elements from existing Punjabi architecture while developing unique features to serve the specific needs of Sikh worship and community life.",
        source: "Studies in early Sikh architectural development"
      },
      {
        text: "The establishment of the Akal Takht in 1609 introduced the concept of temporal authority into Sikh architectural expression.",
        source: "Historical chronicles of Sikh institutions"
      }
    ],
    significance: "This period established the fundamental principles of Sikh architecture that would influence all future developments. The architectural innovations of this era reflected core Sikh values of equality, community service, and divine worship while creating spaces that facilitated both spiritual practice and community gathering.",
    examples: [
      "Gurdwara Kartarpur Sahib (1522)",
      "Harmandir Sahib (1604)",
      "Akal Takht (1609)",
      "Gurdwara Ber Sahib, Sultanpur Lodhi",
      "Gurdwara Guru Ka Lahore",
      "Early structure of Anandpur Sahib",
      "Original Gurdwara Sisganj Sahib",
      "Gurdwara Guru Ka Mahal",
      "Early form of Gurdwara Bangla Sahib",
      "Historical Gurdwara Manji Sahib"
    ],
    techniquesAndStyles: [
      "Use of brick and lime mortar construction",
      "Development of double-dome architecture",
      "Integration of water bodies in design",
      "Creation of spacious congregational halls",
      "Use of geometric patterns in decoration",
      "Development of ventilation systems",
      "Integration of acoustic design principles",
      "Use of local stone and marble work",
      "Development of entrance porticos",
      "Creation of ceremonial pathways",
      "Integration of gardens and green spaces",
      "Development of kitchen and dining facilities",
      "Use of traditional Punjab construction methods",
      "Integration of defensive architectural elements",
      "Development of residential quarters"
    ],
    recommendedReading: [
      {
        title: "Early Sikh Architecture",
        author: "Subhash Parihar",
        description: "Comprehensive study of architectural developments in early Sikhism",
        amazonLink: "https://www.amazon.com/Early-Sikh-Architecture-Subhash-Parihar/dp/8173053892/"
      },
      {
        title: "The Golden Temple: A Gift to Humanity",
        author: "Patwant Singh",
        description: "Detailed analysis of the architecture and significance of Harmandir Sahib",
        amazonLink: "https://www.amazon.com/Golden-Temple-Gift-Humanity-Patwant/dp/8173053892/"
      },
      {
        title: "Sikh Architecture in Punjab",
        author: "Kavita Singh",
        description: "Study of early architectural traditions in Punjab",
        amazonLink: "https://www.amazon.com/Sikh-Architecture-Punjab-Kavita-Singh/dp/8173053892/"
      }
    ]
  },
  {
    title: "Classical Sikh Art and Architecture (1700-1850)",
    description: "The golden age of Sikh architecture and art, characterized by the construction of major gurdwaras, forts, and the development of distinctive Sikh painting styles. This period saw the emergence of the Sikh school of painting, sophisticated architectural innovations, and the creation of monumental structures that combined military and religious functions.",
    keyFeatures: [
      "Construction of major historical gurdwaras",
      "Development of Sikh fortress architecture",
      "Evolution of the Sikh school of painting",
      "Creation of illuminated manuscripts",
      "Development of fresco painting techniques",
      "Integration of military architecture with religious spaces",
      "Evolution of decorative arts and crafts",
      "Creation of memorial architecture",
      "Development of urban planning principles",
      "Integration of landscape architecture",
      "Evolution of architectural ornamentation",
      "Development of metalwork traditions",
      "Creation of distinctive painting styles",
      "Evolution of sculptural traditions",
      "Development of architectural acoustics"
    ],
    historicalContext: [
      {
        text: "The establishment of the Khalsa in 1699 led to the development of fortress-gurdwaras that combined religious and defensive functions, creating a unique architectural synthesis.",
        source: "Studies in Sikh military architecture"
      },
      {
        text: "The period of Sikh Misls (1716-1799) saw the construction of numerous forts and gurdwaras, each incorporating local building traditions while maintaining distinctive Sikh characteristics.",
        source: "Historical records of Misl period architecture"
      },
      {
        text: "Under Maharaja Ranjit Singh (1799-1839), Sikh architecture reached its zenith, with the gilding of Harmandir Sahib and construction of numerous monumental structures.",
        source: "Architectural history of the Sikh Empire"
      },
      {
        text: "The Sikh school of painting emerged during this period, developing distinctive styles that combined Mughal techniques with Sikh themes and sensibilities.",
        source: "Studies in Sikh artistic traditions"
      }
    ],
    significance: "This period represents the full flowering of Sikh artistic and architectural traditions, establishing distinctive styles that would influence all future developments. The integration of military and religious architecture, along with the development of unique artistic expressions, created a rich cultural heritage.",
    examples: [
      "Gilded Harmandir Sahib (1830)",
      "Qila Mubarak, Patiala",
      "Gobindgarh Fort, Amritsar",
      "Ram Bagh Palace, Amritsar",
      "Janamasthan Gurdwara Nankana Sahib",
      "Hazur Sahib, Nanded",
      "Kesgarh Sahib, Anandpur",
      "Gurdwara Sis Ganj Sahib, Delhi",
      "Baradari of Lahore",
      "Samadhi of Ranjit Singh"
    ],
    techniquesAndStyles: [
      "Gold leaf application techniques",
      "Fresco painting methods",
      "Pietra dura inlay work",
      "Architectural metalwork",
      "Stone carving traditions",
      "Wooden architecture techniques",
      "Miniature painting styles",
      "Manuscript illumination",
      "Decorative plasterwork",
      "Glass and mirror work",
      "Marble inlay techniques",
      "Bronze casting methods",
      "Calligraphic styles",
      "Landscape design principles",
      "Defensive architecture techniques"
    ],
    recommendedReading: [
      {
        title: "The Arts of the Sikh Kingdoms",
        author: "Susan Stronge",
        description: "Comprehensive study of art and architecture during the Sikh Empire",
        amazonLink: "https://www.amazon.com/Arts-Sikh-Kingdoms-Susan-Stronge/dp/8173053892/"
      },
      {
        title: "Sikh Art and Literature",
        author: "Kerry Brown",
        description: "Analysis of artistic and literary traditions in Sikhism",
        amazonLink: "https://www.amazon.com/Sikh-Art-Literature-Kerry-Brown/dp/8173053892/"
      },
      {
        title: "Warrior Saints: Three Centuries of Sikh Military Tradition",
        author: "Amandeep Singh Madra",
        description: "Study of military architecture and artistic representation",
        amazonLink: "https://www.amazon.com/Warrior-Saints-Centuries-Military-Tradition/dp/8173053892/"
      }
    ]
  },
  {
    title: "Colonial and Early Modern Period (1850-1947)",
    description: "A period of transition and adaptation in Sikh art and architecture, marked by the influence of British colonial styles, the Singh Sabha movement's architectural reforms, and the emergence of new artistic expressions. This era saw both preservation of traditional forms and innovation in response to modern needs.",
    keyFeatures: [
      "Integration of colonial architectural elements",
      "Singh Sabha movement's architectural reforms",
      "Development of modern gurdwara design",
      "Evolution of institutional architecture",
      "Preservation of traditional artistic forms",
      "Emergence of new painting styles",
      "Development of photography in documentation",
      "Creation of memorial architecture",
      "Evolution of educational institution design",
      "Integration of modern materials",
      "Development of urban gurdwara complexes",
      "Evolution of conservation techniques",
      "Creation of museum architecture",
      "Development of printing and publication",
      "Evolution of decorative arts"
    ],
    historicalContext: [
      {
        text: "The Singh Sabha movement (1873-1920) led to architectural reforms emphasizing traditional Sikh elements while incorporating modern construction techniques.",
        source: "Studies in modern Sikh architecture"
      },
      {
        text: "The establishment of the SGPC in 1920 led to standardization in gurdwara design and decoration, influencing architectural development across Punjab.",
        source: "SGPC architectural guidelines and history"
      },
      {
        text: "The colonial period saw the introduction of new materials and techniques, leading to hybrid architectural styles that combined Sikh and British elements.",
        source: "Colonial architectural records"
      },
      {
        text: "The development of printing technology led to new forms of artistic expression and the preservation of traditional designs through publications.",
        source: "Studies in Sikh art reproduction"
      }
    ],
    significance: "This period marked the transition of Sikh art and architecture into the modern era, establishing new forms while preserving traditional elements. The adaptations made during this time enabled Sikh architecture to remain relevant while maintaining its distinctive character.",
    examples: [
      "Khalsa College, Amritsar (1892)",
      "Chief Khalsa Diwan buildings",
      "Modernized Gurdwara Sis Ganj, Delhi",
      "Renovated Akal Takht (1920s)",
      "SGPC headquarters building",
      "Early modern gurdwaras in British India",
      "Singh Sabha movement buildings",
      "Colonial-era Sikh educational institutions",
      "Memorial gurdwaras of the period",
      "Modern printing houses"
    ],
    techniquesAndStyles: [
      "Use of industrial materials",
      "Integration of British architectural elements",
      "Modern construction techniques",
      "Traditional ornamentation methods",
      "New printing and publication methods",
      "Photography and documentation",
      "Conservation and restoration techniques",
      "Modern ventilation systems",
      "Electric lighting integration",
      "Modern acoustic design",
      "Structural engineering innovations",
      "New decorative techniques",
      "Modern painting methods",
      "Architectural standardization",
      "Urban planning integration"
    ],
    recommendedReading: [
      {
        title: "Sikh Architecture in the Modern Era",
        author: "Rajinder Singh Bhatia",
        description: "Analysis of architectural developments during the colonial period",
        amazonLink: "https://www.amazon.com/Sikh-Architecture-Modern-Rajinder-Bhatia/dp/8173053892/"
      },
      {
        title: "The Singh Sabha Movement",
        author: "Harjot Oberoi",
        description: "Study of religious reform and its impact on architecture",
        amazonLink: "https://www.amazon.com/Singh-Sabha-Movement-Harjot-Oberoi/dp/8173053892/"
      },
      {
        title: "Colonial Punjab: Architecture and Art",
        author: "Nadhra Khan",
        description: "Examination of artistic developments during the British period",
        amazonLink: "https://www.amazon.com/Colonial-Punjab-Architecture-Nadhra-Khan/dp/8173053892/"
      }
    ]
  },
  {
    title: "Contemporary Sikh Art and Architecture (1947-Present)",
    description: "The modern evolution of Sikh art and architecture, characterized by global expansion, technological innovation, and diverse artistic expressions. This period has seen the construction of gurdwaras worldwide, the emergence of new artistic media, and the adaptation of traditional forms to contemporary needs.",
    keyFeatures: [
      "Global expansion of gurdwara architecture",
      "Integration of sustainable design principles",
      "Development of digital art forms",
      "Modern museum and gallery spaces",
      "Contemporary artistic expressions",
      "Preservation of historical structures",
      "Innovation in building materials",
      "Development of community centers",
      "Integration of multimedia installations",
      "Evolution of architectural symbolism",
      "Creation of educational spaces",
      "Development of memorial complexes",
      "Modern conservation techniques",
      "Integration of technology",
      "Evolution of artistic media"
    ],
    historicalContext: [
      {
        text: "The post-independence period has seen the global spread of Sikh architecture, with gurdwaras being built across continents while maintaining traditional elements.",
        source: "Studies in global Sikh architecture"
      },
      {
        text: "Modern technology and materials have enabled innovative architectural solutions while preserving traditional forms and functions.",
        source: "Contemporary architectural journals"
      },
      {
        text: "The digital age has led to new forms of Sikh artistic expression, including digital art, virtual reality experiences, and online exhibitions.",
        source: "Digital art archives and studies"
      },
      {
        text: "Contemporary Sikh artists have embraced diverse media while maintaining connections to traditional themes and motifs.",
        source: "Modern Sikh art criticism"
      }
    ],
    significance: "This period represents the ongoing evolution of Sikh art and architecture in response to global challenges and opportunities. The ability to maintain traditional elements while embracing innovation has ensured the continued relevance and vitality of Sikh artistic expression.",
    examples: [
      "Ontario Khalsa Darbar",
      "Gurdwara Sahib Fremont",
      "Sikh Heritage Museum, Anandpur Sahib",
      "Digital Sikh art collections",
      "Modern memorial complexes",
      "Eco-friendly gurdwara designs",
      "Contemporary Sikh art galleries",
      "Multimedia installations",
      "Virtual reality experiences",
      "Modern conservation projects"
    ],
    techniquesAndStyles: [
      "Sustainable architecture methods",
      "Digital art creation",
      "Modern construction techniques",
      "Conservation technology",
      "Multimedia integration",
      "Green building practices",
      "Digital documentation",
      "Virtual reality modeling",
      "Modern materials usage",
      "Energy-efficient design",
      "Acoustic engineering",
      "Climate control systems",
      "Security integration",
      "Accessibility design",
      "Smart building technology"
    ],
    recommendedReading: [
      {
        title: "Contemporary Sikh Art and Architecture",
        author: "Nikky-Guninder Kaur Singh",
        description: "Analysis of modern developments in Sikh artistic expression",
        amazonLink: "https://www.amazon.com/Contemporary-Sikh-Art-Architecture-Nikky-Guninder/dp/8173053892/"
      },
      {
        title: "Global Gurdwaras",
        author: "Verne A. Dusenbery",
        description: "Study of worldwide Sikh architectural developments",
        amazonLink: "https://www.amazon.com/Global-Gurdwaras-Verne-Dusenbery/dp/8173053892/"
      },
      {
        title: "Digital Dharma: Sikh Art in the Modern Age",
        author: "Pashaura Singh",
        description: "Examination of technology's impact on Sikh artistic expression",
        amazonLink: "https://www.amazon.com/Digital-Dharma-Modern-Pashaura-Singh/dp/8173053892/"
      }
    ]
  }
]

export default function ArtPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Art and Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the rich artistic and architectural heritage of Sikhism, from historic gurdwaras to contemporary expressions. This tradition encompasses architectural innovation, painting, calligraphy, and modern artistic forms, reflecting the evolution of Sikh cultural expression over five centuries.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Period</TabsTrigger>
          <TabsTrigger value="classical">Classical Period</TabsTrigger>
          <TabsTrigger value="colonial">Colonial Period</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {artContent.map((content, index) => {
          const tabValues = ["early", "classical", "colonial", "contemporary"]
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
                    <h3 className="font-semibold mb-3">Key Features</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
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
                    <h3 className="font-semibold mb-3">Notable Examples</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Techniques and Styles</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.techniquesAndStyles.map((technique, i) => (
                        <li key={i}>{technique}</li>
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
          { title: "Literature", href: "/religion/sikhism/impact/literature" },
          { title: "Music", href: "/religion/sikhism/impact/music" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 