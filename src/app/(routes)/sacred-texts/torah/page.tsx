import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata() {
  return {
    title: 'Torah | Sacred Jewish Texts, Translations & Commentary',
    description: 'Comprehensive guide to the Torah, including translations, commentaries, and study resources. Explore the five books of Moses and Jewish sacred texts.',
    openGraph: {
      title: 'Torah | Complete Resource Guide',
      description: 'Explore the Torah with translations, commentary, and study resources',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Torah | Complete Resource Guide',
      description: 'Explore the Torah with translations, commentary, and study resources',
    }
  }
}

const torahResources = [
  {
    id: 'artscroll',
    name: 'ArtScroll Stone Edition',
    year: 1993,
    description: 'A comprehensive English translation with traditional Jewish commentary.',
    features: [
      'Modern English translation',
      'Traditional rabbinic commentary',
      'Hebrew text with vowels',
      'Extensive footnotes'
    ],
    sections: [
      {
        name: 'Bereshit (Genesis)',
        description: 'Creation, the Patriarchs, and the beginnings of the Jewish people',
        keyThemes: ['Creation', 'The Patriarchs', 'The Covenant']
      },
      {
        name: 'Shemot (Exodus)',
        description: 'Egyptian slavery, redemption, and receiving the Torah',
        keyThemes: ['Exodus from Egypt', 'Ten Commandments', 'The Tabernacle']
      },
      // Add remaining books...
    ],
    resources: [
      {
        title: 'ArtScroll Stone Edition Torah',
        url: 'https://artscroll.com/stone',
        type: 'Print Edition'
      }
    ],
    onlineResources: [
      {
        name: 'Sefaria Torah',
        url: 'https://www.sefaria.org/texts/Tanakh'
      }
    ]
  },
  // Add more editions...
]

export default function TorahPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Torah | Sacred Jewish Texts</h1>
        <p className="text-xl text-muted-foreground">
          Explore the Torah, its translations, commentaries, and study resources
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Torah Editions & Resources</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {torahResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl">{resource.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Published: {resource.year}
                    </p>
                  </div>
                </CardTitle>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                {/* Similar structure to Bible page content */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
} 