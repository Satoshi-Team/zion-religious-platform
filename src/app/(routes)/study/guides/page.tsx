import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Commentary {
  id: string
  title: string
  tradition: string
  author: {
    name: string
    period: string
    background: string
    significance: string
  }
  text: {
    originalTitle: string
    language: string
    period: string
    significance: string
  }
  content: {
    overview: string
    methodology: string[]
    keyThemes: string[]
    uniqueFeatures: string[]
  }
  academicResources: {
    title: string
    author: string
    publisher: string
    year: number
    url: string
    type: string
    description: string
  }[]
  onlineResources: {
    title: string
    url: string
    type: string
    language: string[]
    access: "Free" | "Subscription" | "Purchase"
  }[]
}

const religiousCommentaries: Commentary[] = [
  {
    id: "rashi-torah",
    title: "Rashi's Commentary on the Torah",
    tradition: "Judaism",
    author: {
      name: "Rabbi Shlomo Yitzchaki (Rashi)",
      period: "1040-1105 CE",
      background: "Medieval French rabbi and scholar",
      significance: "Most influential Jewish Bible commentator in history"
    },
    text: {
      originalTitle: "פירוש רש״י על התורה",
      language: "Medieval Hebrew and Aramaic",
      period: "11th Century",
      significance: "Foundational text for Jewish Biblical study"
    },
    content: {
      overview: "Comprehensive verse-by-verse explanation of the Torah combining literal interpretation with midrashic insights",
      methodology: [
        "Precise textual analysis",
        "Integration of oral tradition",
        "Resolution of apparent contradictions",
        "Explanation of unusual words and phrases",
        "Historical and contextual references"
      ],
      keyThemes: [
        "Literal meaning (Peshat)",
        "Traditional interpretations",
        "Linguistic analysis",
        "Ethical teachings",
        "Legal implications"
      ],
      uniqueFeatures: [
        "Clear and concise language",
        "Integration of multiple interpretive layers",
        "Resolution of textual difficulties",
        "Preservation of oral traditions"
      ]
    },
    academicResources: [
      {
        title: "Rashi's Commentary on the Torah: Understanding the Medieval Mind",
        author: "Dr. Sarah Klein",
        publisher: "Oxford University Press",
        year: 2019,
        url: "https://oxford.com/rashi-studies",
        type: "Academic Book",
        description: "Comprehensive analysis of Rashi's methodology and influence"
      }
    ],
    onlineResources: [
      {
        title: "Sefaria Rashi Commentary",
        url: "https://www.sefaria.org/texts/Tanakh/Rashi",
        type: "Digital Text",
        language: ["Hebrew", "English"],
        access: "Free"
      }
    ]
  },
  {
    id: "ibn-kathir-quran",
    title: "Tafsir Ibn Kathir",
    tradition: "Islam",
    author: {
      name: "Ismail ibn Kathir",
      period: "1300-1373 CE",
      background: "Syrian Islamic scholar",
      significance: "One of the most respected Quranic commentators"
    },
    text: {
      originalTitle: "تفسير القرآن العظيم",
      language: "Classical Arabic",
      period: "14th Century",
      significance: "Most widely used traditional Sunni tafsir"
    },
    content: {
      overview: "Comprehensive Quranic exegesis based on hadith and early Muslim scholarship",
      methodology: [
        "Quran interpretation through Quran",
        "Use of authentic hadith",
        "Reference to companion statements",
        "Linguistic analysis",
        "Historical context"
      ],
      keyThemes: [
        "Theological explanations",
        "Legal rulings",
        "Historical narratives",
        "Prophetic traditions",
        "Ethical teachings"
      ],
      uniqueFeatures: [
        "Chain of narration verification",
        "Comprehensive hadith collection",
        "Clear theological positions",
        "Accessible language"
      ]
    },
    academicResources: [
      {
        title: "Ibn Kathir's Methodology in Quranic Interpretation",
        author: "Dr. Mohammad Ahmad",
        publisher: "Brill Academic",
        year: 2020,
        url: "https://brill.com/ibn-kathir-studies",
        type: "Research Publication",
        description: "Analysis of Ibn Kathir's exegetical methodology"
      }
    ],
    onlineResources: [
      {
        title: "Quran.com Ibn Kathir Commentary",
        url: "https://quran.com/tafsir/ibn-kathir",
        type: "Digital Text",
        language: ["Arabic", "English"],
        access: "Free"
      }
    ]
  }
]

export default function StudyGuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Religious Commentaries & Study Guides</h1>
        <p className="text-xl text-muted-foreground">
          Explore authoritative commentaries and study resources from major religious traditions
        </p>
      </section>

      {religiousCommentaries.map((commentary) => (
        <section key={commentary.id} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-2">
                <span>{commentary.title}</span>
                <span className="text-lg text-muted-foreground">
                  {commentary.tradition} • {commentary.text.period}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Author Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Author</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">{commentary.author.name}</p>
                    <p className="text-sm text-muted-foreground">{commentary.author.period}</p>
                    <p className="text-sm">{commentary.author.background}</p>
                  </div>
                  <div>
                    <p className="text-sm">{commentary.author.significance}</p>
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Original Text</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">{commentary.text.originalTitle}</p>
                    <p className="text-sm">Language: {commentary.text.language}</p>
                  </div>
                  <div>
                    <p className="text-sm">{commentary.text.significance}</p>
                  </div>
                </div>
              </div>

              {/* Content Analysis */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Content & Methodology</h3>
                <p>{commentary.content.overview}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium">Methodology:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {commentary.content.methodology.map((method) => (
                        <li key={method}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Key Themes:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {commentary.content.keyThemes.map((theme) => (
                        <li key={theme}>{theme}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Study Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Academic Resources */}
                  <div>
                    <h4 className="font-medium mb-2">Academic Resources</h4>
                    <div className="space-y-2">
                      {commentary.academicResources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{resource.title}</span>
                            <span className="text-sm text-muted-foreground">{resource.type}</span>
                          </div>
                          <p className="text-sm">by {resource.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {resource.publisher}, {resource.year}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Online Resources */}
                  <div>
                    <h4 className="font-medium mb-2">Online Resources</h4>
                    <div className="space-y-2">
                      {commentary.onlineResources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{resource.title}</span>
                            <span className="text-sm text-muted-foreground">{resource.access}</span>
                          </div>
                          <p className="text-sm">Languages: {resource.language.join(", ")}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
} 