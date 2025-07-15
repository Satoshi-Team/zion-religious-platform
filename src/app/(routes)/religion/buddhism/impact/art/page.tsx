import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ArtisticTradition {
  name: string
  sanskritName: string
  paliName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  materials: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    paliTitle: string
    date: string
    location: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Artist {
  name: string
  sanskritName: string
  paliName: string
  period: string
  tradition: string
  biography: {
    origin: string
    training: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      paliTitle: string
      date: string
      location: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    artistic: string[]
    technical: string[]
    theoretical: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface ArtisticForm {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    paliName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface Material {
  name: string
  sanskritName: string
  paliName: string
  period: string
  description: string
  construction: Array<{
    material: string
    technique: string
    features: string[]
  }>
  significance: string[]
  evolution: string
  modernUse: string[]
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

interface BuddhistArtContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  artisticTraditions: ArtisticTradition[]
  artists: Artist[]
  artisticForms: ArtisticForm[]
  materials: Material[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Art | Buddhist Impact",
  description: "Comprehensive exploration of Buddhist artistic traditions, forms, and their lasting impact on global art.",
  openGraph: {
    title: "Buddhist Art | Buddhist Impact",
    description: "In-depth study of Buddhist artistic heritage and its influence on global artistic traditions",
    type: "website",
  },
}

const buddhistArtContent: BuddhistArtContent = {
  introduction: `Buddhist art represents a rich and diverse tradition that has evolved over centuries, encompassing various regional styles, spiritual expressions, and artistic innovations. From the ancient cave paintings of Ajanta to the contemporary Buddhist art of the global diaspora, Buddhist artistic traditions have contributed significantly to world art. These artistic expressions serve both as spiritual practice and cultural heritage, combining religious devotion with artistic excellence.`,
  timeline: {
    start: "3rd Century BCE",
    end: "Present",
    overview: "Buddhist art emerged with the rise of Buddhism and developed into diverse traditions across different regions. From early aniconic representations to complex artistic systems, it has evolved while maintaining its spiritual essence.",
    significance: [
      "Development of artistic traditions",
      "Evolution of iconography",
      "Creation of unique techniques",
      "Influence on global art",
      "Preservation of cultural heritage",
      "Development of regional styles",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  artisticTraditions: [
    {
      name: "Gandharan Art",
      sanskritName: "गान्धार कला",
      paliName: "Gandhāra Kala",
      period: "1st-5th Century CE",
      regions: [
        "Gandhara",
        "Northwest India",
        "Central Asia"
      ],
      description: "A sophisticated artistic tradition that developed in the ancient region of Gandhara, combining Greek, Roman, and Indian elements into a unique Buddhist artistic style.",
      characteristics: [
        "Hellenistic influence",
        "Naturalistic style",
        "Complex iconography",
        "Stone sculpture",
        "Narrative reliefs"
      ],
      materials: [
        "Schist",
        "Stucco",
        "Terracotta",
        "Bronze",
        "Gold"
      ],
      significance: [
        "First human Buddha images",
        "Cultural synthesis",
        "Artistic innovation",
        "Iconographic development",
        "Regional influence"
      ],
      majorWorks: [
        {
          title: "Standing Buddha",
          sanskritTitle: "स्थित बुद्ध",
          paliTitle: "Thita Buddha",
          date: "2nd-3rd Century CE",
          location: "Gandhara",
          description: "A classical Gandharan Buddha statue showing Hellenistic influence",
          significance: "Early example of human Buddha representation",
          influence: [
            "Buddhist sculpture",
            "Icon development",
            "Regional styles",
            "Artistic techniques",
            "Cultural exchange"
          ]
        }
      ],
      influence: [
        "Central Asian art",
        "Chinese Buddhist art",
        "Korean Buddhist art",
        "Japanese Buddhist art",
        "Global Buddhist art"
      ]
    }
  ],
  artists: [
    {
      name: "Ananda Coomaraswamy",
      sanskritName: "आनन्द कुमारस्वामी",
      paliName: "Ānanda Kumārasvāmī",
      period: "1877-1947 CE",
      tradition: "Art History",
      biography: {
        origin: "Sri Lanka",
        training: [
          "University College London",
          "Geological Survey of Ceylon",
          "Art historical research",
          "Cultural studies"
        ],
        positions: [
          "Museum of Fine Arts, Boston",
          "Art historical research",
          "Cultural preservation"
        ],
        teachers: [
          "Various scholars",
          "Traditional artists"
        ],
        students: [
          "Art historians",
          "Cultural researchers"
        ],
        majorWorks: [
          {
            title: "History of Indian and Indonesian Art",
            sanskritTitle: "भारतीय और इंडोनेशियाई कला का इतिहास",
            paliTitle: "Bhāratīya ca Indonesia Kala Itihāsa",
            date: "1927 CE",
            location: "United States",
            description: "Comprehensive study of Asian art traditions",
            significance: "Foundational work in Asian art history",
            keyFeatures: [
              "Historical analysis",
              "Cultural context",
              "Artistic development",
              "Regional variations",
              "Cultural exchange"
            ]
          }
        ]
      },
      contributions: {
        artistic: [
          "Art historical research",
          "Cultural preservation",
          "Traditional documentation",
          "Artistic analysis",
          "Cultural synthesis"
        ],
        technical: [
          "Research methods",
          "Documentation techniques",
          "Analysis frameworks",
          "Preservation methods",
          "Cultural mapping"
        ],
        theoretical: [
          "Art theory",
          "Cultural studies",
          "Historical analysis",
          "Philosophical interpretation",
          "Aesthetic theory"
        ],
        innovation: [
          "Research approaches",
          "Documentation methods",
          "Analysis techniques",
          "Cultural preservation",
          "Global perspective"
        ],
        other: [
          "Cultural preservation",
          "Educational work",
          "Museum development",
          "Research organization",
          "International relations"
        ]
      },
      legacy: "Ananda Coomaraswamy's work has been crucial in developing the study of Asian art and establishing the field of art history in the context of cultural studies.",
      modernRelevance: [
        "Art historical research",
        "Cultural preservation",
        "Museum studies",
        "Cultural exchange",
        "Global art history"
      ]
    }
  ],
  artisticForms: [
    {
      name: "Thangka Painting",
      sanskritName: "तंका चित्र",
      paliName: "Thaṅka Citta",
      category: "Sacred Art",
      description: "A traditional form of Tibetan Buddhist painting on cotton or silk, used for meditation and teaching.",
      origins: [
        "Tibetan traditions",
        "Indian painting",
        "Chinese influences"
      ],
      development: [
        "Tibetan adaptation",
        "Regional variations",
        "Technical evolution",
        "Contemporary forms"
      ],
      keyPractitioners: [
        {
          name: "Tenzin Norbu",
          sanskritName: "तेन्जिन नोरबु",
          paliName: "Tenjin Norabu",
          contribution: "Contemporary thangka master"
        }
      ],
      characteristics: [
        "Iconographic precision",
        "Symbolic elements",
        "Meditative focus",
        "Technical complexity",
        "Spiritual purpose"
      ],
      significance: [
        "Meditation tool",
        "Teaching aid",
        "Cultural preservation",
        "Artistic tradition",
        "Spiritual practice"
      ],
      modernApplications: [
        "Contemporary art",
        "Digital media",
        "Educational tools",
        "Cultural preservation",
        "Global exhibitions"
      ]
    }
  ],
  materials: [
    {
      name: "Gold Leaf",
      sanskritName: "स्वर्ण पत्र",
      paliName: "Suvanna Paṭṭa",
      period: "Ancient to Present",
      description: "A traditional material used in Buddhist art for gilding and decorative elements, symbolizing spiritual purity and enlightenment.",
      construction: [
        {
          material: "Gold",
          technique: "Traditional gilding",
          features: [
            "Thin application",
            "Luminous effect",
            "Durability",
            "Symbolic meaning",
            "Technical precision"
          ]
        }
      ],
      significance: [
        "Spiritual symbolism",
        "Artistic enhancement",
        "Cultural tradition",
        "Technical mastery",
        "Visual impact"
      ],
      evolution: "Developed from ancient techniques, modern versions use both traditional and contemporary methods",
      modernUse: [
        "Traditional art",
        "Contemporary works",
        "Restoration",
        "Cultural preservation",
        "Global exhibitions"
      ]
    }
  ],
  resources: [
    {
      title: "Buddhist Art: An Historical and Cultural Journey",
      author: "Gilles Béguin",
      year: "2009",
      type: "Book",
      description: "Comprehensive study of Buddhist art across different regions and periods",
      language: "English",
      level: "Advanced",
      isbn: "978-0500288655"
    }
  ]
}

export default function BuddhistArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Art</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistArtContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {buddhistArtContent.timeline.start} - {buddhistArtContent.timeline.end}</p>
            <p>{buddhistArtContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {buddhistArtContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Artistic Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Artistic Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistArtContent.artisticTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Artists */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Artists</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistArtContent.artists.map((artist, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {artist.name} ({artist.sanskritName} / {artist.paliName})
              </h3>
              <p className="mb-2">Period: {artist.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(artist.contributions).map(([category, items]) => (
                      <li key={category}>
                        <strong>{category}:</strong>
                        <ul className="list-disc pl-6">
                          {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{artist.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Artistic Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Artistic Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistArtContent.artisticForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName} / {form.paliName})
              </h3>
              <p className="mb-2">{form.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {form.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {form.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Materials */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Traditional Materials</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistArtContent.materials.map((material, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {material.name} ({material.sanskritName} / {material.paliName})
              </h3>
              <p className="mb-2">{material.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Construction:</h4>
                  <ul className="list-disc pl-6">
                    {material.construction.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.material}:</strong>
                        <ul className="list-disc pl-6">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Use:</h4>
                  <ul className="list-disc pl-6">
                    {material.modernUse.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buddhistArtContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                {resource.amazonUrl && (
                  <Link href={resource.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-2">Purchase on Amazon</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Further Reading CTA */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Explore More Buddhist Art</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Buddhist art, its history, and its influence on global artistic traditions.
            </p>
            <Link href="/religion/buddhism/impact/literature">
              <Button size="lg" className="mt-4">
                Explore Buddhist Literature
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 