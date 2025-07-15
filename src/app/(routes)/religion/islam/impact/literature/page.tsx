import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LiteraryTradition {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  themes: string[]
  significance: string[]
  examples: Array<{
    name: string
    author: string
    date: string
    description: string
    significance: string
  }>
  influence: string[]
}

interface Genre {
  name: string
  arabicName: string
  period: string
  description: string
  characteristics: string[]
  themes: string[]
  majorWorks: Array<{
    title: string
    arabicTitle: string
    author: string
    date: string
    description: string
    significance: string[]
  }>
  significance: string[]
  influence: string[]
}

interface Scholar {
  name: string
  arabicName: string
  period: string
  specialty: string[]
  biography: {
    origin: string
    education: string[]
    positions: string[]
    majorWorks: Array<{
      title: string
      arabicTitle: string
      date: string
      genre: string
      significance: string
    }>
  }
  contributions: string[]
  legacy: string
}

interface Movement {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  keyFigures: Array<{
    name: string
    arabicName: string
    role: string
    contributions: string[]
  }>
  significance: string[]
  influence: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl?: string
  isbn?: string
}

interface IslamicLiteratureContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  literaryTraditions: LiteraryTradition[]
  genres: Genre[]
  scholars: Scholar[]
  movements: Movement[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Literature | Islamic Studies",
  description: "Comprehensive exploration of Islamic literature, its traditions, genres, and cultural significance.",
  openGraph: {
    title: "Islamic Literature | Islamic Studies",
    description: "In-depth study of Islamic literary heritage and its influence",
    type: "website",
  },
}

const islamicLiteratureContent: IslamicLiteratureContent = {
  introduction: `Islamic literature represents a vast and rich tradition that spans over fourteen centuries, encompassing diverse genres, languages, and cultural expressions. From its early foundations in Quranic exegesis and poetry to its development into sophisticated forms of prose, poetry, and philosophical discourse, Islamic literature has profoundly influenced global literary traditions while maintaining its distinctive spiritual and cultural character.`,
  timeline: {
    start: "610 CE",
    end: "Present",
    overview: "Islamic literature evolved from the revelation of the Quran, developing through various stages and incorporating diverse cultural influences while maintaining its unique Islamic character. This literary tradition has continuously adapted to changing times while preserving its core spiritual and cultural values.",
    significance: [
      "Preservation of Islamic knowledge",
      "Development of literary forms",
      "Cultural and linguistic enrichment",
      "Philosophical discourse",
      "Scientific documentation",
      "Spiritual expression",
      "Historical documentation",
      "Cross-cultural exchange"
    ]
  },
  literaryTraditions: [
    {
      name: "Classical Arabic Poetry",
      arabicName: "الشعر العربي الكلاسيكي",
      period: "Pre-Islamic - Present",
      regions: [
        "Arabian Peninsula",
        "Levant",
        "North Africa",
        "Persia"
      ],
      description: "A sophisticated form of literary expression characterized by its strict meter, rhyme schemes, and rich imagery, serving as a repository of cultural wisdom and artistic excellence.",
      characteristics: [
        "Strict metrical patterns",
        "Complex rhyme schemes",
        "Rich metaphorical language",
        "Thematic diversity",
        "Oral transmission tradition"
      ],
      themes: [
        "Love and romance (Ghazal)",
        "Praise (Madih)",
        "Wisdom (Hikma)",
        "Description (Wasf)",
        "Elegy (Ritha)"
      ],
      significance: [
        "Cultural preservation",
        "Linguistic standardization",
        "Artistic expression",
        "Historical documentation"
      ],
      examples: [
        {
          name: "Mu'allaqat",
          author: "Multiple poets",
          date: "6th Century CE",
          description: "Collection of pre-Islamic poems considered the pinnacle of Arabic literary achievement",
          significance: "Foundational texts of Arabic literature and cultural documentation"
        }
      ],
      influence: [
        "Modern Arabic poetry",
        "Global poetic traditions",
        "Literary criticism",
        "Cultural identity"
      ]
    }
  ],
  genres: [
    {
      name: "Sufi Poetry",
      arabicName: "الشعر الصوفي",
      period: "8th Century - Present",
      description: "Mystical Islamic poetry focusing on divine love, spiritual journey, and the relationship between the human and divine.",
      characteristics: [
        "Symbolic language",
        "Metaphysical themes",
        "Personal devotion",
        "Universal spirituality",
        "Allegorical expression"
      ],
      themes: [
        "Divine love",
        "Spiritual journey",
        "Unity of existence",
        "Human-Divine relationship",
        "Mystical experiences"
      ],
      majorWorks: [
        {
          title: "Masnavi",
          arabicTitle: "المثنوي",
          author: "Jalal al-Din Rumi",
          date: "13th Century",
          description: "Six-volume masterpiece of spiritual poetry exploring the path to divine unity",
          significance: [
            "Comprehensive spiritual guide",
            "Masterpiece of Persian literature",
            "Universal spiritual appeal",
            "Philosophical depth"
          ]
        }
      ],
      significance: [
        "Spiritual guidance",
        "Cultural bridge-building",
        "Artistic innovation",
        "Philosophical discourse"
      ],
      influence: [
        "Global mystical literature",
        "Contemporary spirituality",
        "Interfaith dialogue",
        "Modern poetry"
      ]
    }
  ],
  scholars: [
    {
      name: "Al-Jahiz",
      arabicName: "الجاحظ",
      period: "776-868 CE",
      specialty: [
        "Prose",
        "Literary Criticism",
        "Natural Science",
        "Philosophy"
      ],
      biography: {
        origin: "Basra, Iraq",
        education: [
          "Basra School of Grammar",
          "Baghdad intellectual circles",
          "Independent study"
        ],
        positions: [
          "Court writer",
          "Teacher",
          "Independent scholar"
        ],
        majorWorks: [
          {
            title: "Kitab al-Hayawan",
            arabicTitle: "كتاب الحيوان",
            date: "847 CE",
            genre: "Scientific Literature",
            significance: "Pioneering work in zoology and literary prose"
          }
        ]
      },
      contributions: [
        "Development of Arabic prose",
        "Literary criticism foundations",
        "Scientific methodology",
        "Philosophical discourse"
      ],
      legacy: "Established foundations of Arabic literary prose and scientific writing while integrating rational thought with literary excellence"
    }
  ],
  movements: [
    {
      name: "Islamic Literary Modernism",
      arabicName: "الحداثة الأدبية الإسلامية",
      period: "Late 19th Century - Present",
      regions: [
        "Egypt",
        "Levant",
        "South Asia",
        "Southeast Asia"
      ],
      description: "Literary movement combining Islamic values with modern literary forms and themes, addressing contemporary issues while maintaining Islamic principles.",
      characteristics: [
        "Modern forms",
        "Islamic values",
        "Social reform",
        "Cultural synthesis",
        "Contemporary themes"
      ],
      keyFigures: [
        {
          name: "Muhammad Iqbal",
          arabicName: "محمد إقبال",
          role: "Poet-Philosopher",
          contributions: [
            "Modern Islamic poetry",
            "Philosophical innovation",
            "Cultural revival",
            "Political thought"
          ]
        }
      ],
      significance: [
        "Cultural renewal",
        "Literary innovation",
        "Social reform",
        "Identity formation"
      ],
      influence: [
        "Contemporary Islamic literature",
        "Social movements",
        "Cultural discourse",
        "Educational reform"
      ]
    }
  ],
  resources: [
    {
      title: "Arabic Literature in the Post-Classical Period",
      author: "Roger Allen",
      year: "2006",
      type: "Academic",
      description: "Comprehensive survey of Arabic literature from the 12th to 19th centuries",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Arabic-Literature-Post-Classical-Period-Cambridge/dp/0521771609",
      isbn: "978-0521771603"
    },
    {
      title: "Classical Arabic Literature: A Library of Arabic Literature Anthology",
      author: "Geert Jan van Gelder",
      year: "2012",
      type: "Anthology",
      description: "Collection of classical Arabic literary works with analysis and context",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Classical-Arabic-Literature-Library-Anthology/dp/1479800740",
      isbn: "978-1479800742"
    }
  ]
}

export default function IslamicLiteraturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Literature</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{islamicLiteratureContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {islamicLiteratureContent.timeline.start} - {islamicLiteratureContent.timeline.end}
            </p>
            <p className="mb-4">{islamicLiteratureContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {islamicLiteratureContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Literary Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literary Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicLiteratureContent.literaryTraditions.map((tradition, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {tradition.period} | Regions: {tradition.regions.join(", ")}
              </p>
              
              <p className="mb-4">{tradition.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Themes:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.themes.map((theme, idx) => (
                      <li key={idx}>{theme}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Examples:</h4>
                {tradition.examples.map((example, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{example.name}</h5>
                    <p>{example.description}</p>
                    <p className="text-sm text-gray-600">Author: {example.author}</p>
                    <p className="text-sm text-gray-600">Date: {example.date}</p>
                    <p className="text-sm text-gray-600">Significance: {example.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {tradition.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {tradition.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Genres */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literary Genres</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicLiteratureContent.genres.map((genre, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {genre.name} ({genre.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {genre.period}</p>
              
              <p className="mb-4">{genre.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {genre.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Themes:</h4>
                  <ul className="list-disc pl-6">
                    {genre.themes.map((theme, idx) => (
                      <li key={idx}>{theme}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {genre.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {work.title} ({work.arabicTitle})
                    </h5>
                    <p>{work.description}</p>
                    <p className="text-sm text-gray-600">Author: {work.author}</p>
                    <p className="text-sm text-gray-600">Date: {work.date}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Significance:</h6>
                      <ul className="list-disc pl-6">
                        {work.significance.map((sig, sigIdx) => (
                          <li key={sigIdx} className="text-sm">{sig}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {genre.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {genre.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scholars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicLiteratureContent.scholars.map((scholar, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {scholar.name} ({scholar.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {scholar.period}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Specialties:</h4>
                  <ul className="list-disc pl-6">
                    {scholar.specialty.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Biography:</h4>
                  <p><strong>Origin:</strong> {scholar.biography.origin}</p>
                  <div className="mt-2">
                    <strong>Education:</strong>
                    <ul className="list-disc pl-6">
                      {scholar.biography.education.map((edu, idx) => (
                        <li key={idx}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <strong>Positions:</strong>
                    <ul className="list-disc pl-6">
                      {scholar.biography.positions.map((position, idx) => (
                        <li key={idx}>{position}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {scholar.biography.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {work.title} ({work.arabicTitle})
                    </h5>
                    <p className="text-sm text-gray-600">
                      Date: {work.date} | Genre: {work.genre}
                    </p>
                    <p className="text-sm text-gray-600">Significance: {work.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Contributions:</h4>
                <ul className="list-disc pl-6">
                  {scholar.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {scholar.legacy}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Movements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literary Movements</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicLiteratureContent.movements.map((movement, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {movement.name} ({movement.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {movement.period} | Regions: {movement.regions.join(", ")}
              </p>
              
              <p className="mb-4">{movement.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Characteristics:</h4>
                <ul className="list-disc pl-6">
                  {movement.characteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Figures:</h4>
                {movement.keyFigures.map((figure, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {figure.name} ({figure.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Role: {figure.role}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Contributions:</h6>
                      <ul className="list-disc pl-6">
                        {figure.contributions.map((contribution, contIdx) => (
                          <li key={contIdx} className="text-sm">{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {movement.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {movement.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {islamicLiteratureContent.resources.map((resource, index) => (
              <Card key={index} className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Author:</strong> {resource.author}</p>
                  <p className="mb-2"><strong>Year:</strong> {resource.year}</p>
                  <p className="mb-2"><strong>Type:</strong> {resource.type}</p>
                  <p className="mb-2"><strong>Level:</strong> {resource.level}</p>
                  <p className="mb-2"><strong>Language:</strong> {resource.language}</p>
                  {resource.isbn && (
                    <p className="mb-2"><strong>ISBN:</strong> {resource.isbn}</p>
                  )}
                  <p className="mb-4">{resource.description}</p>
                  {resource.amazonUrl && (
                    <Button asChild>
                      <Link href={resource.amazonUrl} target="_blank">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 