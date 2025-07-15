import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ArtisticTradition {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  techniques: string[]
  materials: string[]
  significance: string[]
  examples: Array<{
    name: string
    location?: string
    date: string
    description: string
    significance: string
  }>
  influence: string[]
}

interface Architecture {
  style: string
  arabicName: string
  period: string
  regions: string[]
  features: string[]
  elements: Array<{
    name: string
    arabicName: string
    description: string
    significance: string
    examples: string[]
  }>
  monuments: Array<{
    name: string
    arabicName: string
    location: string
    date: string
    description: string
    significance: string[]
    features: string[]
  }>
  influence: string[]
}

interface Artisan {
  name: string
  arabicName: string
  period: string
  specialty: string[]
  biography: {
    origin: string
    patrons: string[]
    majorWorks: Array<{
      name: string
      date: string
      location: string
      significance: string
    }>
  }
  contributions: string[]
  legacy: string
}

interface Calligraphy {
  style: string
  arabicName: string
  period: string
  origin: string
  characteristics: string[]
  usage: string[]
  masters: Array<{
    name: string
    arabicName: string
    period: string
    contributions: string[]
  }>
  examples: Array<{
    name: string
    date: string
    location: string
    description: string
  }>
  significance: string[]
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

interface IslamicArtContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  artisticTraditions: ArtisticTradition[]
  architecture: Architecture[]
  calligraphy: Calligraphy[]
  artisans: Artisan[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Art & Architecture | Islamic Studies",
  description: "Comprehensive exploration of Islamic art, architecture, calligraphy, and their cultural significance.",
  openGraph: {
    title: "Islamic Art & Architecture | Islamic Studies",
    description: "In-depth study of Islamic artistic traditions and architectural heritage",
    type: "website",
  },
}

const islamicArtContent: IslamicArtContent = {
  introduction: `Islamic art and architecture represent one of the world's most remarkable artistic traditions, characterized by its emphasis on abstract geometric patterns, calligraphy, and architectural innovation. This rich heritage, spanning over 1400 years, reflects the cultural diversity of the Islamic world while maintaining distinctive unifying principles derived from Islamic values and aesthetics.`,
  timeline: {
    start: "622 CE",
    end: "Present",
    overview: "Islamic art and architecture evolved from the founding of Islam, incorporating and transforming elements from various cultures while developing unique characteristics guided by Islamic principles. This tradition continues to influence contemporary design and architecture globally.",
    significance: [
      "Development of unique artistic vocabulary",
      "Innovation in architectural design",
      "Advancement of geometric patterns",
      "Evolution of calligraphic styles",
      "Cultural synthesis and exchange",
      "Technological innovations",
      "Preservation of knowledge",
      "Global influence on design"
    ]
  },
  artisticTraditions: [
    {
      name: "Arabesque",
      arabicName: "التوريق",
      period: "8th Century - Present",
      regions: [
        "Middle East",
        "North Africa",
        "Spain",
        "Central Asia"
      ],
      description: "Intricate pattern of intertwined flowing lines, based on rhythmic repetition of vegetal, floral, or geometric elements.",
      characteristics: [
        "Infinite patterns",
        "Mathematical precision",
        "Botanical inspiration",
        "Geometric harmony",
        "Rhythmic repetition"
      ],
      techniques: [
        "Surface carving",
        "Inlay work",
        "Painted decoration",
        "Stucco modeling",
        "Tile work"
      ],
      materials: [
        "Stone",
        "Wood",
        "Ceramic",
        "Metal",
        "Stucco"
      ],
      significance: [
        "Expression of divine infinity",
        "Unity in multiplicity",
        "Harmony with nature",
        "Mathematical sophistication"
      ],
      examples: [
        {
          name: "Alhambra Palace Decorations",
          location: "Granada, Spain",
          date: "14th Century",
          description: "Complex arabesque patterns covering walls and ceilings",
          significance: "Supreme example of Islamic geometric and floral patterns"
        }
      ],
      influence: [
        "European decorative arts",
        "Modern pattern design",
        "Contemporary architecture",
        "Textile patterns"
      ]
    }
  ],
  architecture: [
    {
      style: "Classical Ottoman",
      arabicName: "العمارة العثمانية",
      period: "15th-17th Century",
      regions: [
        "Turkey",
        "Balkans",
        "Middle East"
      ],
      features: [
        "Central dome system",
        "Pencil minarets",
        "Courtyard organization",
        "Geometric harmony",
        "Iznik tile decoration"
      ],
      elements: [
        {
          name: "Muqarnas",
          arabicName: "المقرنص",
          description: "Three-dimensional decorative corbel used in transitions and cornices",
          significance: "Represents the complexity of Islamic geometric design",
          examples: [
            "Suleymaniye Mosque cornices",
            "Blue Mosque portal"
          ]
        }
      ],
      monuments: [
        {
          name: "Suleymaniye Mosque",
          arabicName: "جامع السليمانية",
          location: "Istanbul, Turkey",
          date: "1557",
          description: "Masterpiece of Ottoman architecture by Mimar Sinan",
          significance: [
            "Perfect proportion and harmony",
            "Innovative structural solutions",
            "Integration of social functions",
            "Acoustic excellence"
          ],
          features: [
            "Central dome",
            "Four minarets",
            "Courtyard design",
            "Complex support system"
          ]
        }
      ],
      influence: [
        "Modern mosque design",
        "Contemporary Turkish architecture",
        "Global sacred architecture",
        "Urban planning"
      ]
    }
  ],
  calligraphy: [
    {
      style: "Thuluth",
      arabicName: "خط الثلث",
      period: "11th Century - Present",
      origin: "Baghdad",
      characteristics: [
        "Curved letters",
        "Extended vertical strokes",
        "Complex compositions",
        "Vowel marks integration",
        "Proportional system"
      ],
      usage: [
        "Quranic manuscripts",
        "Architectural inscriptions",
        "Official documents",
        "Decorative panels"
      ],
      masters: [
        {
          name: "Ibn al-Bawwab",
          arabicName: "ابن البواب",
          period: "10th-11th Century",
          contributions: [
            "Standardization of script",
            "Development of proportional rules",
            "Innovation in composition"
          ]
        }
      ],
      examples: [
        {
          name: "Blue Mosque Inscriptions",
          date: "17th Century",
          location: "Istanbul, Turkey",
          description: "Monumental Thuluth inscriptions adorning the mosque interior"
        }
      ],
      significance: [
        "Sacred art form",
        "Architectural decoration",
        "Cultural preservation",
        "Artistic innovation"
      ]
    }
  ],
  artisans: [
    {
      name: "Mimar Sinan",
      arabicName: "معمار سنان",
      period: "1489-1588",
      specialty: [
        "Architecture",
        "Engineering",
        "Urban Planning"
      ],
      biography: {
        origin: "Kayseri, Turkey",
        patrons: [
          "Sultan Suleiman I",
          "Sultan Selim II",
          "Sultan Murad III"
        ],
        majorWorks: [
          {
            name: "Suleymaniye Mosque",
            date: "1557",
            location: "Istanbul",
            significance: "Masterpiece of Ottoman architecture"
          }
        ]
      },
      contributions: [
        "Dome construction innovation",
        "Structural engineering advances",
        "Urban complex integration",
        "Acoustic design principles"
      ],
      legacy: "Defined classical Ottoman architecture and influenced global architectural development"
    }
  ],
  resources: [
    {
      title: "Islamic Art and Architecture: 650-1250",
      author: "Richard Ettinghausen",
      year: "2001",
      type: "Academic",
      description: "Comprehensive survey of early Islamic art and architecture",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Islamic-Art-Architecture-650-1250-Pelican/dp/0300088698",
      isbn: "978-0300088694"
    },
    {
      title: "The Art and Architecture of Islam: 1250-1800",
      author: "Sheila S. Blair and Jonathan M. Bloom",
      year: "1994",
      type: "Reference",
      description: "Detailed examination of Islamic artistic and architectural developments",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Art-Architecture-Islam-1250-1800-History/dp/0300064659",
      isbn: "978-0300064650"
    }
  ]
}

export default function IslamicArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Art & Architecture</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{islamicArtContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {islamicArtContent.timeline.start} - {islamicArtContent.timeline.end}
            </p>
            <p className="mb-4">{islamicArtContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {islamicArtContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Artistic Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Artistic Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicArtContent.artisticTraditions.map((tradition, index) => (
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
                  <h4 className="font-semibold mb-2">Techniques:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.techniques.map((technique, idx) => (
                      <li key={idx}>{technique}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Materials:</h4>
                <ul className="list-disc pl-6">
                  {tradition.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Examples:</h4>
                {tradition.examples.map((example, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{example.name}</h5>
                    <p>{example.description}</p>
                    {example.location && (
                      <p className="text-sm text-gray-600">Location: {example.location}</p>
                    )}
                    <p className="text-sm text-gray-600">Date: {example.date}</p>
                    <p className="text-sm text-gray-600">Significance: {example.significance}</p>
                  </div>
                ))}
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

      {/* Architecture */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Architectural Styles</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicArtContent.architecture.map((style, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {style.style} ({style.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {style.period} | Regions: {style.regions.join(", ")}
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-6">
                  {style.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Architectural Elements:</h4>
                {style.elements.map((element, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {element.name} ({element.arabicName})
                    </h5>
                    <p>{element.description}</p>
                    <p className="text-sm text-gray-600">Significance: {element.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Examples:</h6>
                      <ul className="list-disc pl-6">
                        {element.examples.map((example, exIdx) => (
                          <li key={exIdx} className="text-sm">{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Monuments:</h4>
                {style.monuments.map((monument, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {monument.name} ({monument.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">
                      Location: {monument.location} | Date: {monument.date}
                    </p>
                    <p className="mt-2">{monument.description}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Significance:</h6>
                      <ul className="list-disc pl-6">
                        {monument.significance.map((sig, sigIdx) => (
                          <li key={sigIdx} className="text-sm">{sig}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2">
                      <h6 className="font-medium">Features:</h6>
                      <ul className="list-disc pl-6">
                        {monument.features.map((feature, featIdx) => (
                          <li key={featIdx} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {style.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Calligraphy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Calligraphic Styles</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicArtContent.calligraphy.map((style, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {style.style} ({style.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {style.period} | Origin: {style.origin}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {style.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Usage:</h4>
                  <ul className="list-disc pl-6">
                    {style.usage.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Master Calligraphers:</h4>
                {style.masters.map((master, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {master.name} ({master.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Period: {master.period}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Contributions:</h6>
                      <ul className="list-disc pl-6">
                        {master.contributions.map((contribution, contIdx) => (
                          <li key={contIdx} className="text-sm">{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Examples:</h4>
                {style.examples.map((example, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{example.name}</h5>
                    <p className="text-sm text-gray-600">
                      Location: {example.location} | Date: {example.date}
                    </p>
                    <p>{example.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {style.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Artisans */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Artisans</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicArtContent.artisans.map((artisan, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {artisan.name} ({artisan.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {artisan.period}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Specialties:</h4>
                  <ul className="list-disc pl-6">
                    {artisan.specialty.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Biography:</h4>
                  <p><strong>Origin:</strong> {artisan.biography.origin}</p>
                  <div className="mt-2">
                    <strong>Patrons:</strong>
                    <ul className="list-disc pl-6">
                      {artisan.biography.patrons.map((patron, idx) => (
                        <li key={idx}>{patron}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {artisan.biography.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{work.name}</h5>
                    <p className="text-sm text-gray-600">
                      Location: {work.location} | Date: {work.date}
                    </p>
                    <p className="text-sm text-gray-600">Significance: {work.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Contributions:</h4>
                <ul className="list-disc pl-6">
                  {artisan.contributions.map((contribution, idx) => (
                    <li key={idx}>{contribution}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {artisan.legacy}
                </p>
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
            {islamicArtContent.resources.map((resource, index) => (
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