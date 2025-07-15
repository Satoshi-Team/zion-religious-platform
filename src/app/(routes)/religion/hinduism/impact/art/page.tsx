import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ArtisticTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    sanskritName: string
    date: string
    description: string
    significance: string[]
    influence: string[]
  }>
  influence: string[]
}

interface Artist {
  name: string
  sanskritName: string
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
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    technique: string[]
    innovation: string[]
    theory: string[]
    teaching: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface ArtisticForm {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface Artwork {
  name: string
  sanskritName: string
  period: string
  description: string
  creation: Array<{
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

interface HinduArtContent {
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
  artworks: Artwork[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Art | Hindu Impact",
  description: "Comprehensive exploration of Hindu artistic traditions, forms, and their lasting impact on global art.",
  openGraph: {
    title: "Hindu Art | Hindu Impact",
    description: "In-depth study of Hindu artistic heritage and its influence on global artistic traditions",
    type: "website",
  },
}

const hinduArtContent: HinduArtContent = {
  introduction: `Hindu art represents one of the world's richest artistic traditions, encompassing diverse forms, styles, and expressions that have evolved over millennia. From the intricate temple sculptures of Khajuraho to the vibrant paintings of the Rajput courts, Hindu art has developed unique aesthetic principles and techniques that continue to influence global artistic expression. This tradition combines spiritual devotion with artistic excellence, creating works that serve both religious and aesthetic purposes while maintaining deep philosophical underpinnings.`,
  timeline: {
    start: "3000 BCE",
    end: "Present",
    overview: "Hindu art has evolved through various periods, from the ancient Indus Valley civilization to contemporary expressions, developing sophisticated techniques and styles while maintaining spiritual significance.",
    significance: [
      "Development of temple architecture",
      "Evolution of sculpture styles",
      "Creation of painting traditions",
      "Influence on Southeast Asian art",
      "Preservation of ancient techniques",
      "Development of iconography",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  artisticTraditions: [
    {
      name: "Temple Architecture",
      sanskritName: "मन्दिर वास्तुकला",
      period: "300 BCE - Present",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A sophisticated architectural tradition that developed in Hindu temples, combining spiritual symbolism with structural innovation.",
      characteristics: [
        "Vastu Shastra principles",
        "Sacred geometry",
        "Symbolic elements",
        "Ornate decoration",
        "Environmental integration"
      ],
      significance: [
        "Spiritual expression",
        "Cultural preservation",
        "Architectural innovation",
        "Community gathering",
        "Artistic excellence"
      ],
      majorWorks: [
        {
          title: "Kandariya Mahadeva Temple",
          sanskritTitle: "कंदारिया महादेव मन्दिर",
          sanskritName: "कंदारिया महादेव मन्दिर",
          date: "1025-1050 CE",
          description: "A masterpiece of Chandela architecture featuring intricate sculptures and perfect proportions",
          significance: [
            "Architectural excellence",
            "Sculptural detail",
            "Spiritual symbolism",
            "Cultural expression",
            "Historical record"
          ],
          influence: [
            "Temple architecture",
            "Sculptural traditions",
            "Iconographic standards",
            "Cultural expression",
            "Tourist attraction"
          ]
        }
      ],
      influence: [
        "Global architecture",
        "Religious buildings",
        "Cultural expression",
        "Artistic standards",
        "Community spaces"
      ]
    },
    {
      name: "Classical Painting",
      sanskritName: "शास्त्रीय चित्रकला",
      period: "5th century CE - Present",
      regions: [
        "India",
        "Nepal",
        "Southeast Asia"
      ],
      description: "A refined painting tradition that developed in Hindu courts and temples, combining spiritual themes with artistic excellence.",
      characteristics: [
        "Iconographic precision",
        "Color symbolism",
        "Narrative elements",
        "Spiritual themes",
        "Technical mastery"
      ],
      significance: [
        "Cultural preservation",
        "Spiritual expression",
        "Artistic innovation",
        "Historical record",
        "Visual education"
      ],
      majorWorks: [
        {
          title: "Ras Lila Series",
          sanskritTitle: "रास लीला श्रृंखला",
          sanskritName: "रास लीला श्रृंखला",
          date: "18th century CE",
          description: "A series of paintings depicting Krishna's divine dance with the gopis",
          significance: [
            "Artistic excellence",
            "Spiritual expression",
            "Cultural preservation",
            "Technical innovation",
            "Visual narrative"
          ],
          influence: [
            "Indian painting",
            "Religious art",
            "Cultural expression",
            "Artistic standards",
            "Visual storytelling"
          ]
        }
      ],
      influence: [
        "Global painting",
        "Religious art",
        "Cultural expression",
        "Artistic techniques",
        "Visual education"
      ]
    },
    {
      name: "Sculpture",
      sanskritName: "मूर्तिकला",
      period: "3000 BCE - Present",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A sophisticated sculptural tradition that developed in Hindu temples and religious sites, combining spiritual symbolism with technical excellence.",
      characteristics: [
        "Iconographic precision",
        "Symbolic elements",
        "Material mastery",
        "Proportional systems",
        "Spiritual expression"
      ],
      significance: [
        "Religious worship",
        "Cultural preservation",
        "Artistic innovation",
        "Historical record",
        "Spiritual education"
      ],
      majorWorks: [
        {
          title: "Elephanta Caves",
          sanskritTitle: "गजपुरी गुहा",
          sanskritName: "गजपुरी गुहा",
          date: "5th-8th century CE",
          description: "A UNESCO World Heritage site featuring monumental rock-cut sculptures of Shiva and other deities",
          significance: [
            "Architectural innovation",
            "Sculptural excellence",
            "Spiritual symbolism",
            "Cultural expression",
            "Historical record"
          ],
          influence: [
            "Rock-cut architecture",
            "Religious sculpture",
            "Iconographic standards",
            "Cultural expression",
            "Tourist attraction"
          ]
        }
      ],
      influence: [
        "Global sculpture",
        "Religious art",
        "Cultural expression",
        "Artistic standards",
        "Spiritual education"
      ]
    },
    {
      name: "Textile Arts",
      sanskritName: "वस्त्रकला",
      period: "3000 BCE - Present",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A rich tradition of textile arts encompassing weaving, dyeing, and embroidery, combining spiritual symbolism with technical innovation.",
      characteristics: [
        "Intricate patterns",
        "Natural dyes",
        "Symbolic motifs",
        "Technical precision",
        "Cultural elements"
      ],
      significance: [
        "Cultural preservation",
        "Economic activity",
        "Artistic expression",
        "Social identity",
        "Global trade"
      ],
      majorWorks: [
        {
          title: "Kanchipuram Silk",
          sanskritTitle: "कांचीपुरम रेशम",
          sanskritName: "कांचीपुरम रेशम",
          date: "Ancient to Present",
          description: "Luxurious silk textiles featuring intricate zari work and traditional motifs",
          significance: [
            "Technical excellence",
            "Cultural expression",
            "Economic importance",
            "Artistic innovation",
            "Global recognition"
          ],
          influence: [
            "Textile design",
            "Fashion industry",
            "Cultural expression",
            "Artistic standards",
            "Economic development"
          ]
        }
      ],
      influence: [
        "Global textiles",
        "Fashion design",
        "Cultural expression",
        "Artistic techniques",
        "Economic development"
      ]
    },
    {
      name: "Jewelry",
      sanskritName: "आभूषणकला",
      period: "3000 BCE - Present",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A sophisticated tradition of jewelry-making that combines spiritual symbolism with technical excellence and aesthetic beauty.",
      characteristics: [
        "Intricate design",
        "Precious materials",
        "Symbolic elements",
        "Technical precision",
        "Cultural significance"
      ],
      significance: [
        "Cultural expression",
        "Social status",
        "Spiritual symbolism",
        "Artistic innovation",
        "Economic activity"
      ],
      majorWorks: [
        {
          title: "Temple Jewelry",
          sanskritTitle: "मन्दिर आभूषण",
          sanskritName: "मन्दिर आभूषण",
          date: "Ancient to Present",
          description: "Ornate jewelry designs inspired by temple architecture and religious symbolism",
          significance: [
            "Cultural preservation",
            "Artistic excellence",
            "Religious symbolism",
            "Craft tradition",
            "Economic impact"
          ],
          influence: [
            "Jewelry design",
            "Fashion industry",
            "Cultural expression",
            "Artistic standards",
            "Tourist attraction"
          ]
        }
      ],
      influence: [
        "Global jewelry",
        "Fashion design",
        "Cultural expression",
        "Artistic techniques",
        "Social customs"
      ]
    }
  ],
  artists: [
    {
      name: "Raja Ravi Varma",
      sanskritName: "राजा रवि वर्मा",
      period: "1848-1906 CE",
      tradition: "Modern Hindu Art",
      biography: {
        origin: "Kerala",
        training: [
          "Traditional painting",
          "Western techniques",
          "Oil painting",
          "Portrait art",
          "Mythological themes"
        ],
        positions: [
          "Court painter",
          "Art innovator",
          "Cultural ambassador"
        ],
        teachers: [
          "Ram Swarup",
          "Theodore Jensen"
        ],
        students: [
          "Numerous artists",
          "Established art school"
        ],
        majorWorks: [
          {
            title: "Shakuntala",
            sanskritTitle: "शकुन्तला",
            date: "1870 CE",
            genre: "Oil Painting",
            description: "A masterpiece depicting the heroine from Kalidasa's play",
            significance: "Revolutionary fusion of Indian and Western art",
            keyFeatures: [
              "Oil technique",
              "Indian subject",
              "Western style",
              "Cultural synthesis",
              "Artistic innovation"
            ]
          }
        ]
      },
      contributions: {
        technique: [
          "Oil painting adaptation",
          "Color theory",
          "Composition methods",
          "Portrait techniques",
          "Mythological representation"
        ],
        innovation: [
          "Art printing",
          "Mass reproduction",
          "Cultural synthesis",
          "Modern adaptation",
          "Visual education"
        ],
        theory: [
          "Art principles",
          "Cultural expression",
          "Technical standards",
          "Educational methods",
          "Preservation techniques"
        ],
        teaching: [
          "Art education",
          "Technical training",
          "Cultural awareness",
          "Innovation methods",
          "Preservation practices"
        ],
        other: [
          "Cultural revival",
          "Art accessibility",
          "Visual education",
          "Cultural exchange",
          "Modern adaptation"
        ]
      },
      legacy: "Raja Ravi Varma's contributions transformed Indian art by successfully merging traditional themes with modern techniques, making art accessible to the masses and establishing new standards for artistic expression.",
      modernRelevance: [
        "Art education",
        "Cultural preservation",
        "Modern adaptation",
        "Visual communication",
        "Cultural exchange"
      ]
    }
  ],
  artisticForms: [
    {
      name: "Mural Painting",
      sanskritName: "भित्ति चित्रकला",
      category: "Wall Art",
      description: "A tradition of large-scale wall paintings in temples and palaces, combining spiritual themes with artistic excellence.",
      origins: [
        "Ancient cave paintings",
        "Temple decoration",
        "Palace art",
        "Religious expression",
        "Cultural tradition"
      ],
      development: [
        "Technical evolution",
        "Style development",
        "Theme expansion",
        "Cultural synthesis",
        "Modern adaptation"
      ],
      keyPractitioners: [
        {
          name: "Nainsukh",
          sanskritName: "नैनसुख",
          contribution: "Revolutionary techniques and themes"
        }
      ],
      characteristics: [
        "Large scale",
        "Narrative elements",
        "Color symbolism",
        "Spiritual themes",
        "Technical mastery"
      ],
      significance: [
        "Cultural preservation",
        "Spiritual expression",
        "Artistic innovation",
        "Historical record",
        "Visual education"
      ],
      modernApplications: [
        "Public art",
        "Cultural centers",
        "Religious buildings",
        "Educational spaces",
        "Tourist attractions"
      ]
    }
  ],
  artworks: [
    {
      name: "Nataraja Bronze",
      sanskritName: "नटराज कांस्य",
      period: "Chola Dynasty",
      description: "A masterpiece of bronze sculpture depicting Shiva's cosmic dance.",
      creation: [
        {
          material: "Bronze",
          technique: "Lost-wax casting",
          features: [
            "Perfect proportions",
            "Dynamic movement",
            "Symbolic elements",
            "Technical precision",
            "Spiritual expression"
          ]
        }
      ],
      significance: [
        "Spiritual symbolism",
        "Artistic excellence",
        "Technical innovation",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed from earlier forms, perfected during Chola period, continues to influence modern sculpture",
      modernUse: [
        "Religious worship",
        "Cultural display",
        "Artistic inspiration",
        "Educational tool",
        "Tourist attraction"
      ]
    }
  ],
  resources: [
    {
      title: "The Art of Hindu India",
      author: "Vidya Dehejia",
      year: "1997",
      type: "Book",
      description: "Comprehensive study of Hindu artistic traditions, theory, and practice",
      language: "English",
      level: "Advanced",
      isbn: "978-0500237305",
      amazonUrl: "https://www.amazon.com/Art-Hindu-India-Vidya-Dehejia/dp/0500237305"
    },
    {
      title: "Hindu Art and Architecture",
      author: "George Michell",
      year: "2000",
      type: "Book",
      description: "Detailed exploration of Hindu temple architecture and sculpture",
      language: "English",
      level: "Advanced",
      isbn: "978-0500203378",
      amazonUrl: "https://www.amazon.com/Hindu-Art-Architecture-George-Michell/dp/0500203377"
    },
    {
      title: "Indian Art: A Concise History",
      author: "Roy C. Craven",
      year: "1997",
      type: "Book",
      description: "Accessible introduction to Indian art history and traditions",
      language: "English",
      level: "Intermediate",
      isbn: "978-0500201466",
      amazonUrl: "https://www.amazon.com/Indian-Art-Concise-History-World/dp/0500201463"
    }
  ]
}

export default function HinduArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Art</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{hinduArtContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {hinduArtContent.timeline.start} - {hinduArtContent.timeline.end}</p>
            <p>{hinduArtContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {hinduArtContent.timeline.significance.map((item, index) => (
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
          {hinduArtContent.artisticTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName})
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
          {hinduArtContent.artists.map((artist, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {artist.name} ({artist.sanskritName})
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
          {hinduArtContent.artisticForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName})
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

      {/* Artworks */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Artworks</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduArtContent.artworks.map((artwork, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {artwork.name} ({artwork.sanskritName})
              </h3>
              <p className="mb-2">{artwork.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Creation:</h4>
                  <ul className="list-disc pl-6">
                    {artwork.creation.map((item, idx) => (
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
                    {artwork.modernUse.map((use, idx) => (
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
            {hinduArtContent.resources.map((resource, index) => (
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
    </div>
  )
} 