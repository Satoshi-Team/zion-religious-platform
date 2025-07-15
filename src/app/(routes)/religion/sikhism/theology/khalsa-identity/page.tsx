import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Khalsa Identity | Sikh Theology",
  description: "Explore the Khalsa identity in Sikhism, including its establishment by Guru Gobind Singh, the Five Ks, principles, and contemporary significance.",
  keywords: "Khalsa, Sikhism, Five Ks, Amrit Sanchar, Rehat Maryada, Sikh identity, Guru Gobind Singh"
}

interface KhalsaContent {
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

const khalsaContent: KhalsaContent[] = [
  {
    title: "Establishment and Historical Context",
    description: "The Khalsa (Pure) was established by Guru Gobind Singh Ji on Vaisakhi 1699, marking a pivotal moment in Sikh history that formalized the distinct identity of the Sikh community through initiation (Amrit Sanchar) and a code of conduct.",
    keyPoints: [
      "Creation on Vaisakhi 1699 at Anandpur Sahib",
      "The first Panj Pyare (Five Beloved Ones)",
      "Historical context of resistance against oppression",
      "Transformation of Sikhs into Sant-Sipahi (Saint-Soldiers)",
      "Institution of Amrit Sanchar (initiation ceremony)"
    ],
    scriptureRefs: [
      {
        text: "Wahe Guru ji ka Khalsa, Wahe Guru ji ki Fateh",
        source: "Guru Gobind Singh Ji's declaration"
      },
      {
        text: "He who keeps alight the unquenchable torch of truth, and never swerves from the thought of One God; he who has full love and confidence in God and does not put his faith, even by mistake, in fasting or the graves of Muslim saints, Hindu crematoriums, or Jogis places of sepulcher;",
        source: "Guru Gobind Singh Ji, 33 Swaiyyas"
      }
    ],
    significance: "The establishment of the Khalsa represents the culmination of the Sikh spiritual and temporal tradition, creating a distinct identity and providing a framework for living a disciplined, principled life while standing up against injustice.",
    practices: [
      "Amrit Sanchar ceremony",
      "Maintaining the Five Ks",
      "Following the Rehat Maryada",
      "Daily prayers and meditation",
      "Service to humanity"
    ],
    recommendedReading: [
      {
        title: "The Creation of the Khalsa: A Brief History",
        author: "Guru Gobind Singh Foundation",
        description: "Detailed account of the establishment of the Khalsa and its historical significance",
        amazonLink: "https://www.amazon.com/Creation-Khalsa-Historical-Perspective/dp/0195672305/"
      }
    ]
  },
  {
    title: "The Five Ks and External Identity",
    description: "The Five Ks (Panj Kakkar) are the external symbols of Khalsa identity, each carrying deep spiritual significance and practical purpose, mandated by Guru Gobind Singh Ji for initiated Sikhs.",
    keyPoints: [
      "Kesh (uncut hair) - Natural state and acceptance of God's will",
      "Kangha (wooden comb) - Cleanliness and discipline",
      "Kara (steel bracelet) - Eternity and moral restraint",
      "Kachera (cotton underwear) - Moral character and self-discipline",
      "Kirpan (sword) - Dignity, self-defense, and protection of the weak"
    ],
    scriptureRefs: [
      {
        text: "Khalsa is my special form; I will forever manifest in the Khalsa.",
        source: "Sarbloh Granth"
      },
      {
        text: "Rehat pyari mujh ko, sikh pyara nahin",
        source: "Guru Gobind Singh Ji (The discipline is dear to me, not the disciple without discipline)"
      }
    ],
    significance: "The Five Ks serve as both spiritual reminders and practical tools, forming an integral part of Khalsa identity and distinguishing initiated Sikhs in their commitment to the faith.",
    practices: [
      "Daily maintenance of the Five Ks",
      "Understanding their symbolic meaning",
      "Proper wearing and care protocols",
      "Teaching children their significance",
      "Representing them with dignity"
    ],
    recommendedReading: [
      {
        title: "The Five Ks of the Khalsa Sikhs",
        author: "Pashaura Singh",
        description: "Comprehensive exploration of the Five Ks and their significance",
        amazonLink: "https://www.amazon.com/Sikhism-Introduction-Introductions-Religion/dp/1848853211/"
      }
    ]
  },
  {
    title: "Contemporary Khalsa Living",
    description: "Modern Khalsa identity involves navigating contemporary challenges while maintaining traditional values and practices, adapting to global contexts while preserving core principles.",
    keyPoints: [
      "Maintaining identity in diverse societies",
      "Addressing modern ethical challenges",
      "Adapting practices for contemporary life",
      "Youth engagement and education",
      "Global Khalsa community connections"
    ],
    scriptureRefs: [
      {
        text: "The Khalsa shall rule; no rebel shall survive.",
        source: "Guru Gobind Singh Ji's prophecy"
      },
      {
        text: "Act according to the Guru Granth Sahib; this is what Guru wishes you to do.",
        source: "Guru Granth Sahib, Page 1089"
      }
    ],
    significance: "Contemporary Khalsa living demonstrates the timeless relevance of Sikh principles while addressing modern challenges and opportunities for spiritual growth and community service.",
    practices: [
      "Professional and spiritual balance",
      "Active community involvement",
      "Social justice advocacy",
      "Environmental stewardship",
      "Interfaith dialogue and understanding"
    ],
    recommendedReading: [
      {
        title: "The Khalsa in the 21st Century",
        author: "I.J. Singh",
        description: "Modern perspectives on Khalsa identity and contemporary challenges",
        amazonLink: "https://www.amazon.com/Being-Becoming-Sikh-Reflections-Century/dp/0963201328/"
      }
    ]
  },
  {
    title: "Spiritual and Ethical Dimensions",
    description: "The Khalsa embodies the highest spiritual and ethical ideals of Sikhism, combining personal discipline with social responsibility and divine connection.",
    keyPoints: [
      "Concept of Sant-Sipahi (Saint-Soldier)",
      "Seva (selfless service) as core practice",
      "Gender equality in Khalsa tradition",
      "Democratic principles in Sangat",
      "Universal brotherhood/sisterhood"
    ],
    scriptureRefs: [
      {
        text: "The pure Khalsa is one in whom the Light of the Lord shines fully.",
        source: "Guru Granth Sahib, Page 1305"
      },
      {
        text: "The Khalsa is my own image. The Khalsa is my body and soul.",
        source: "Guru Gobind Singh Ji"
      }
    ],
    significance: "The spiritual and ethical dimensions of Khalsa identity provide a comprehensive framework for personal development and social engagement.",
    practices: [
      "Regular Naam Simran (meditation)",
      "Ethical decision-making",
      "Community leadership",
      "Protection of human rights",
      "Cultivation of spiritual virtues"
    ],
    recommendedReading: [
      {
        title: "The Khalsa Ideal",
        author: "Kapur Singh",
        description: "Philosophical exploration of Khalsa principles and ethics",
        amazonLink: "https://www.amazon.com/Parasaraprasna-Inquiry-Guru-Granth-Prescribes/dp/1783061146/"
      }
    ]
  }
]

export default function KhalsaIdentityPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Khalsa Identity in Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound significance of Khalsa identity in Sikhism, from its historical establishment to contemporary practice, including the Five Ks, spiritual principles, and ethical dimensions.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="establishment" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="establishment">Establishment</TabsTrigger>
          <TabsTrigger value="five-ks">Five Ks</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary Living</TabsTrigger>
          <TabsTrigger value="spiritual">Spiritual Dimensions</TabsTrigger>
        </TabsList>

        {khalsaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({establishment: true, "five-ks": true, contemporary: true, spiritual: true})[index]}>
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
          { title: "Sacred Scripture", href: "/religion/sikhism/theology/sacred-scripture" },
          { title: "Ethics and Values", href: "/religion/sikhism/theology/ethics-values" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 