import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Vedas & Upanishads | Ancient Hindu Sacred Texts",
  description: "Comprehensive guide to Vedic literature, including the four Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda) and principal Upanishads. Explore their history, interpretation, and significance.",
  keywords: [
    "Vedas",
    "Upanishads",
    "Hindu scriptures",
    "Rigveda",
    "Samaveda",
    "Yajurveda",
    "Atharvaveda",
    "Vedic literature",
    "Sanskrit texts",
    "Hindu philosophy"
  ],
  openGraph: {
    title: "Vedas & Upanishads - Ancient Hindu Sacred Texts",
    description: "Explore the ancient wisdom of Vedic literature and Upanishadic philosophy",
    images: [
      {
        url: "/images/vedic-texts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Vedic Manuscripts"
      }
    ]
  }
}

interface VedicText {
  id: string
  name: string
  category: "Veda" | "Upanishad" | "Commentary"
  period: string
  content: {
    overview: string
    mainThemes: string[]
    structure: {
      sections: string[]
      verses: number
      organization: string
    }
    significance: string[]
  }
  transmission: {
    method: string
    schools: string[]
    preservation: string[]
  }
  manuscripts: {
    oldest: {
      date: string
      location: string
      condition: string
    }
    significant: {
      name: string
      date: string
      location: string
      importance: string
    }[]
  }
}

const vedicTexts: VedicText[] = [
  {
    id: "rigveda",
    name: "Rigveda",
    category: "Veda",
    period: "c. 1500-1200 BCE",
    content: {
      overview: "The oldest of the four Vedas, consisting primarily of hymns to various deities",
      mainThemes: [
        "Hymns to deities",
        "Cosmological speculations",
        "Philosophical inquiries",
        "Ritual instructions"
      ],
      structure: {
        sections: ["10 Mandalas", "85 Anuvakas", "1028 Suktas"],
        verses: 10552,
        organization: "Arranged by meter and deity"
      },
      significance: [
        "Oldest known Sanskrit text",
        "Foundation of Hindu philosophy",
        "Source of many Hindu rituals",
        "Historical linguistic importance"
      ]
    },
    transmission: {
      method: "Oral tradition through specialized recitation techniques",
      schools: [
        "Shakala",
        "Bashkala",
        "Ashvalayana",
        "Shankhyayana"
      ],
      preservation: [
        "Pada-patha system",
        "Kramapatha recitation",
        "Ritualistic memorization",
        "Written manuscripts"
      ]
    },
    manuscripts: {
      oldest: {
        date: "11th century CE",
        location: "Bhandarkar Oriental Research Institute, Pune",
        condition: "Well preserved"
      },
      significant: [
        {
          name: "Kashmir Rigveda",
          date: "14th century CE",
          location: "Bodleian Library, Oxford",
          importance: "Complete text with accents"
        },
        {
          name: "Benares Rigveda",
          date: "15th century CE",
          location: "Banaras Hindu University",
          importance: "Important variant readings"
        }
      ]
    }
  }
  // Additional Vedic texts would be added here
]

export default function VedicTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Vedas & Upanishads</h1>
        <p className="text-xl text-muted-foreground">
          Explore the ancient sacred texts of Hinduism and their profound influence
          on spiritual thought and practice
        </p>
      </section>

      {vedicTexts.map((text) => (
        <Card key={text.id} className="overflow-hidden">
          <CardHeader className="bg-secondary">
            <CardTitle className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl">{text.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {text.category} • {text.period}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Content Overview */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p>{text.content.overview}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Main Themes</h4>
                  <ul className="list-disc list-inside mt-2">
                    {text.content.mainThemes.map((theme, index) => (
                      <li key={index} className="text-sm">{theme}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Significance</h4>
                  <ul className="list-disc list-inside mt-2">
                    {text.content.significance.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Structure */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Structure</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Sections</h4>
                  <ul className="list-disc list-inside mt-2">
                    {text.content.structure.sections.map((section, index) => (
                      <li key={index} className="text-sm">{section}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Organization</h4>
                  <p className="text-sm mt-2">{text.content.structure.organization}</p>
                  <p className="text-sm mt-1">
                    Total verses: {text.content.structure.verses}
                  </p>
                </div>
              </div>
            </section>

            {/* Transmission */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Transmission & Preservation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Method</h4>
                  <p className="text-sm mt-2">{text.transmission.method}</p>
                  <h4 className="font-medium mt-4">Schools</h4>
                  <ul className="list-disc list-inside mt-2">
                    {text.transmission.schools.map((school, index) => (
                      <li key={index} className="text-sm">{school}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Preservation Techniques</h4>
                  <ul className="list-disc list-inside mt-2">
                    {text.transmission.preservation.map((technique, index) => (
                      <li key={index} className="text-sm">{technique}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Manuscripts */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">Important Manuscripts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-medium">Oldest Known Manuscript</h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">Date: {text.manuscripts.oldest.date}</p>
                    <p className="text-sm">
                      Location: {text.manuscripts.oldest.location}
                    </p>
                    <p className="text-sm">
                      Condition: {text.manuscripts.oldest.condition}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Significant Manuscripts</h4>
                  {text.manuscripts.significant.map((manuscript) => (
                    <div
                      key={manuscript.name}
                      className="p-4 bg-secondary rounded-lg"
                    >
                      <h5 className="font-medium">{manuscript.name}</h5>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">Date: {manuscript.date}</p>
                        <p className="text-sm">
                          Location: {manuscript.location}
                        </p>
                        <p className="text-sm">
                          Significance: {manuscript.importance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 