import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Music | Sikh Impact",
  description: "Explore Gurmat Sangeet, the classical musical tradition of Sikhism, including its historical development, musical forms, raag system, instruments, and contemporary practice.",
  keywords: "Gurmat Sangeet, Sikh music, Kirtan, Raag, Shabad Kirtan, Taal, Sikh musical instruments, Rabab, Taus, Dilruba, Sikh musicians, Rababis, Ragis"
}

interface MusicContent {
  title: string
  description: string
  musicalForms: string[]
  historicalContext: Array<{ text: string; source: string }>
  significance: string
  technicalElements: string[]
  performance: string[]
  recommendedListening?: Array<{
    title: string
    performer: string
    description: string
    link: string
  }>
}

const musicContent: MusicContent[] = [
  {
    title: "Foundations and Development (1469-1708)",
    description: "The foundational period of Sikh musical tradition established by Guru Nanak Dev Ji and developed through successive Gurus. This era saw the creation of the unique Gurmat Sangeet tradition, combining spiritual message with classical Indian music in a distinctive form.",
    musicalForms: [
      "Shabad Kirtan in prescribed Raags",
      "Asa Di Var tradition",
      "Dhrupad style compositions",
      "Vars (heroic ballads)",
      "Gurbani Sangeet",
      "Parthay (instructional compositions)",
      "Alahunian (dirges)",
      "Ghoriyan (wedding songs)",
      "Lawan (marriage hymns)",
      "Karhale (camel-rider songs)",
      "Chhant (lyrical poems)",
      "Pade (verse compositions)",
      "Sohile (songs of praise)",
      "Anjulian (prayers)",
      "Thittin (calendar compositions)"
    ],
    historicalContext: [
      {
        text: "Guru Nanak Dev Ji established the tradition of Kirtan with Bhai Mardana as the first rababi, introducing the use of rabab for musical accompaniment.",
        source: "Historical accounts of early Sikh music"
      },
      {
        text: "Guru Arjan Dev Ji systematized the musical framework by organizing compositions according to raags in the Adi Granth.",
        source: "Studies in Guru Granth Sahib musical structure"
      },
      {
        text: "The development of specific time-theory (Ghari system) for performing particular compositions established a unique temporal framework for Sikh music.",
        source: "Research on historical Kirtan traditions"
      },
      {
        text: "The tradition of Rababi musicians flourished, creating a distinctive style of Gurbani presentation that would influence generations.",
        source: "Documentation of early Sikh musical lineages"
      }
    ],
    significance: "This period established the fundamental principles of Gurmat Sangeet, creating a unique musical tradition that integrated spiritual teaching with sophisticated musical expression. The musical framework developed during this era continues to guide contemporary practice.",
    technicalElements: [
      "31 main Raags of Guru Granth Sahib",
      "Prescribed time theory (Ghari system)",
      "Specific musical measures (Taal)",
      "Traditional instrumental accompaniment",
      "Authentic performance practices",
      "Shabad-Reet (text-music relationship)",
      "Raag forms and variations",
      "Compositional structures",
      "Melodic frameworks",
      "Rhythmic patterns",
      "Voice culture techniques",
      "Instrumental techniques",
      "Improvisational guidelines",
      "Performance sequences",
      "Musical notation systems"
    ],
    performance: [
      "Traditional seating arrangements",
      "Proper pronunciation guidelines",
      "Instrumental accompaniment rules",
      "Time-specific performance practices",
      "Sangat (congregation) participation",
      "Rahao (refrain) emphasis",
      "Authentic ornamentation techniques",
      "Traditional performance sequence",
      "Voice projection methods",
      "Ensemble coordination",
      "Devotional expression",
      "Musical interpretation guidelines",
      "Stage deportment",
      "Acoustic considerations",
      "Performance etiquette"
    ],
    recommendedListening: [
      {
        title: "Traditional Asa Di Var",
        performer: "Bhai Balbir Singh",
        description: "Authentic rendition of morning Kirtan in traditional style",
        link: "https://www.youtube.com/watch?v=example1"
      },
      {
        title: "Classical Raag-based Kirtan",
        performer: "Prof. Kartar Singh",
        description: "Demonstrations of prescribed raags in Guru Granth Sahib",
        link: "https://www.youtube.com/watch?v=example2"
      },
      {
        title: "Historical Dhrupad Compositions",
        performer: "Bhai Avtar Singh",
        description: "Collection of traditional dhrupad-style compositions",
        link: "https://www.youtube.com/watch?v=example3"
      }
    ]
  },
  {
    title: "Classical Traditions (1708-1850)",
    description: "A period of refinement and expansion in Sikh musical traditions, characterized by the development of distinct gharanas (schools) and the flourishing of the Rababi tradition. This era saw the consolidation of performance practices and the emergence of new musical forms.",
    musicalForms: [
      "Traditional Khayal-based compositions",
      "Extended Var singing",
      "Complex Dhrupad compositions",
      "Thumri-influenced devotional forms",
      "Specialized Partaal compositions",
      "Regional folk adaptations",
      "Court music traditions",
      "Martial music forms",
      "Devotional light compositions",
      "Seasonal celebration music",
      "Festival-specific compositions",
      "Narrative musical forms",
      "Philosophical musical expositions",
      "Meditative musical forms",
      "Ceremonial music traditions"
    ],
    historicalContext: [
      {
        text: "The establishment of Rababi gharanas led to the development of distinctive styles and interpretations of Gurbani Kirtan.",
        source: "Studies in Sikh musical schools"
      },
      {
        text: "The period saw the emergence of major centers of Kirtan excellence, particularly around historical Gurdwaras.",
        source: "Historical documentation of Kirtan centers"
      },
      {
        text: "The development of martial music traditions complemented the existing devotional forms.",
        source: "Research on Sikh martial music"
      },
      {
        text: "Traditional teaching methods and guru-shishya parampara were formalized during this period.",
        source: "Studies in Sikh music pedagogy"
      }
    ],
    significance: "This era consolidated the musical traditions established by the Gurus while developing new forms of expression. The period saw the emergence of distinctive schools of performance and the preservation of authentic practices.",
    technicalElements: [
      "Advanced Raag elaboration",
      "Complex rhythmic patterns",
      "Extended performance formats",
      "Sophisticated ornamentation",
      "Specialized instrumental techniques",
      "Advanced compositional forms",
      "Detailed improvisation methods",
      "School-specific features",
      "Traditional notation systems",
      "Voice culture methods",
      "Instrumental virtuosity",
      "Ensemble techniques",
      "Performance structures",
      "Musical analysis methods",
      "Teaching methodologies"
    ],
    performance: [
      "School-specific presentation styles",
      "Traditional concert formats",
      "Ceremonial performance practices",
      "Festival-specific traditions",
      "Court performance protocols",
      "Teaching demonstrations",
      "Public concert practices",
      "Intimate gathering formats",
      "Martial music presentations",
      "Seasonal celebration formats",
      "Special occasion performances",
      "Educational presentations",
      "Competition formats",
      "Recording practices",
      "Documentation methods"
    ],
    recommendedListening: [
      {
        title: "Traditional Gharana Recordings",
        performer: "Various Artists",
        description: "Historical recordings from major Kirtan schools",
        link: "https://www.youtube.com/watch?v=example4"
      },
      {
        title: "Classical Rababi Traditions",
        performer: "Bhai Chand",
        description: "Authentic Rababi-style performances",
        link: "https://www.youtube.com/watch?v=example5"
      },
      {
        title: "Martial Music Collection",
        performer: "Traditional Artists",
        description: "Historical recordings of Sikh martial music",
        link: "https://www.youtube.com/watch?v=example6"
      }
    ]
  },
  {
    title: "Modern Developments (1850-1947)",
    description: "The period of adaptation and preservation during colonial rule, marked by efforts to maintain traditional practices while incorporating new influences. This era saw the emergence of modern teaching institutions and the beginning of systematic documentation.",
    musicalForms: [
      "Standardized Kirtan formats",
      "Academic compositions",
      "Modern devotional forms",
      "Educational presentations",
      "Concert hall adaptations",
      "Recorded music formats",
      "Revival of traditional forms",
      "New compositional styles",
      "Simplified teaching forms",
      "Public performance formats",
      "Documentary recordings",
      "Research presentations",
      "Comparative studies",
      "Cross-cultural adaptations",
      "Modern ensemble forms"
    ],
    historicalContext: [
      {
        text: "The establishment of formal music institutions led to systematic documentation and preservation of traditional practices.",
        source: "Studies in modern Sikh music education"
      },
      {
        text: "The impact of recording technology transformed the transmission and preservation of Kirtan traditions.",
        source: "Analysis of early recordings"
      },
      {
        text: "The emergence of public concert formats influenced performance practices and presentation styles.",
        source: "Research on modern Kirtan practices"
      },
      {
        text: "Educational reforms led to the development of structured teaching methods and materials.",
        source: "Documentation of music education"
      }
    ],
    significance: "This period marked the transition to modern forms of musical preservation and transmission while maintaining connections with traditional practices. The adaptations made during this era enabled the survival and growth of Gurmat Sangeet in changing times.",
    technicalElements: [
      "Modern notation systems",
      "Standardized teaching methods",
      "Recording techniques",
      "Concert hall acoustics",
      "Amplification practices",
      "Documentation methods",
      "Research methodologies",
      "Comparative analysis",
      "Technical studies",
      "Performance analysis",
      "Teaching materials",
      "Practice methods",
      "Theory development",
      "Structural analysis",
      "Historical research"
    ],
    performance: [
      "Modern concert formats",
      "Recording sessions",
      "Educational presentations",
      "Research demonstrations",
      "Public lectures",
      "Teaching sessions",
      "Competition events",
      "Festival performances",
      "Media presentations",
      "Documentary recordings",
      "Academic conferences",
      "Workshop formats",
      "Student recitals",
      "Professional concerts",
      "Community events"
    ],
    recommendedListening: [
      {
        title: "Early Recorded Kirtan",
        performer: "Various Artists",
        description: "Historical recordings from colonial period",
        link: "https://www.youtube.com/watch?v=example7"
      },
      {
        title: "Academic Presentations",
        performer: "Prof. Tara Singh",
        description: "Educational recordings of traditional forms",
        link: "https://www.youtube.com/watch?v=example8"
      },
      {
        title: "Modern Adaptations",
        performer: "Contemporary Artists",
        description: "Early modern interpretations of traditional forms",
        link: "https://www.youtube.com/watch?v=example9"
      }
    ]
  },
  {
    title: "Contemporary Practice (1947-Present)",
    description: "The current era of Sikh music, characterized by global reach, technological innovation, and efforts to balance tradition with contemporary expression. This period has seen the revival of classical forms alongside the development of new approaches to musical practice and preservation.",
    musicalForms: [
      "Traditional Kirtan",
      "Modern interpretations",
      "Global fusion forms",
      "Digital compositions",
      "Educational presentations",
      "Research demonstrations",
      "Revival performances",
      "Contemporary adaptations",
      "Cross-cultural collaborations",
      "Multimedia presentations",
      "Online formats",
      "Workshop presentations",
      "Concert performances",
      "Festival productions",
      "Documentary projects"
    ],
    historicalContext: [
      {
        text: "The global spread of Sikhism has led to diverse interpretations and adaptations of traditional musical forms.",
        source: "Studies in global Sikh music"
      },
      {
        text: "Digital technology has transformed the teaching, performance, and preservation of Gurmat Sangeet.",
        source: "Analysis of technological impact"
      },
      {
        text: "Revival movements have led to renewed interest in classical forms and traditional practices.",
        source: "Research on contemporary revival"
      },
      {
        text: "Academic institutions worldwide have contributed to the systematic study and documentation of Sikh music.",
        source: "Documentation of academic developments"
      }
    ],
    significance: "This period represents the ongoing evolution of Sikh musical traditions in response to global contexts and modern challenges. The diversity of expression has enriched the tradition while efforts to preserve classical forms ensure continuity with historical practices.",
    technicalElements: [
      "Digital recording techniques",
      "Online teaching methods",
      "Virtual collaboration tools",
      "Modern acoustics",
      "Sound engineering",
      "Digital preservation",
      "Multimedia integration",
      "Research tools",
      "Analysis software",
      "Teaching technology",
      "Performance technology",
      "Documentation systems",
      "Archive management",
      "Digital distribution",
      "Online resources"
    ],
    performance: [
      "Traditional settings",
      "Concert halls",
      "Digital platforms",
      "Global venues",
      "Educational institutions",
      "Cultural centers",
      "Online streaming",
      "Festival stages",
      "Community events",
      "Academic conferences",
      "Workshop venues",
      "Recording studios",
      "Media productions",
      "Virtual performances",
      "Hybrid formats"
    ],
    recommendedListening: [
      {
        title: "Contemporary Classical",
        performer: "Dr. Gurnam Singh",
        description: "Modern renditions of traditional forms",
        link: "https://www.youtube.com/watch?v=example10"
      },
      {
        title: "Global Interpretations",
        performer: "Various Artists",
        description: "International adaptations of Kirtan",
        link: "https://www.youtube.com/watch?v=example11"
      },
      {
        title: "Digital Productions",
        performer: "Modern Artists",
        description: "Contemporary technological approaches",
        link: "https://www.youtube.com/watch?v=example12"
      }
    ]
  }
]

export default function MusicPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Music (Gurmat Sangeet)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the rich tradition of Gurmat Sangeet, the classical music of Sikhism. This sacred musical tradition combines spiritual teaching with sophisticated musical expression, encompassing various forms, styles, and practices developed over five centuries.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="classical">Classical</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {musicContent.map((content, index) => {
          const tabValues = ["foundations", "classical", "modern", "contemporary"]
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
                    <h3 className="font-semibold mb-3">Musical Forms</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.musicalForms.map((form, i) => (
                        <li key={i}>{form}</li>
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
                    <h3 className="font-semibold mb-3">Technical Elements</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.technicalElements.map((element, i) => (
                        <li key={i}>{element}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Performance Practices</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.performance.map((practice, i) => (
                        <li key={i}>{practice}</li>
                      ))}
                    </ul>
                  </div>

                  {content.recommendedListening && (
                    <div>
                      <h3 className="font-semibold mb-3">Recommended Listening</h3>
                      <div className="space-y-4">
                        {content.recommendedListening.map((recording, i) => (
                          <Card key={i} className="p-4">
                            <h4 className="font-semibold">{recording.title}</h4>
                            <p className="text-sm text-muted-foreground">By {recording.performer}</p>
                            <p className="text-sm text-muted-foreground mt-2">{recording.description}</p>
                            <Button asChild className="mt-4">
                              <a href={recording.link} target="_blank" rel="noopener noreferrer">
                                Listen Now
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
          { title: "Art and Architecture", href: "/religion/sikhism/impact/art" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 