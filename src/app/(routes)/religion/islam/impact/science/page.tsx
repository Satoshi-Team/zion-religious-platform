import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScientificField {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  innovations: string[]
  significance: string[]
  majorDiscoveries: Array<{
    name: string
    discoverer: string
    date: string
    description: string
    significance: string
    modernApplications: string[]
  }>
  influence: string[]
}

interface Institution {
  name: string
  arabicName: string
  period: string
  location: string
  description: string
  characteristics: string[]
  fields: string[]
  notableScholars: Array<{
    name: string
    arabicName: string
    field: string
    contributions: string[]
  }>
  significance: string[]
  legacy: string
}

interface Scholar {
  name: string
  arabicName: string
  period: string
  fields: string[]
  biography: {
    origin: string
    education: string[]
    positions: string[]
    majorWorks: Array<{
      title: string
      arabicTitle: string
      date: string
      field: string
      significance: string
      innovations: string[]
    }>
  }
  discoveries: string[]
  legacy: string
}

interface Methodology {
  name: string
  arabicName: string
  period: string
  description: string
  principles: string[]
  applications: string[]
  keyFigures: Array<{
    name: string
    arabicName: string
    contribution: string
  }>
  significance: string[]
  modernRelevance: string[]
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

interface IslamicScienceContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  scientificFields: ScientificField[]
  institutions: Institution[]
  scholars: Scholar[]
  methodologies: Methodology[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Science | Islamic Studies",
  description: "Comprehensive exploration of Islamic scientific achievements, methodologies, and their lasting impact on modern science.",
  openGraph: {
    title: "Islamic Science | Islamic Studies",
    description: "In-depth study of Islamic scientific heritage and its influence on modern science",
    type: "website",
  },
}

const islamicScienceContent: IslamicScienceContent = {
  introduction: `Islamic science represents one of history's most remarkable scientific traditions, characterized by groundbreaking discoveries and methodological innovations that laid the foundation for modern scientific inquiry. From the 8th to 14th centuries, Muslim scholars made significant contributions to mathematics, astronomy, medicine, chemistry, and numerous other fields, while developing sophisticated methodologies for empirical research and experimental verification.`,
  timeline: {
    start: "750 CE",
    end: "Present",
    overview: "Islamic science flourished during the Golden Age of Islam, with scholars making groundbreaking discoveries and developing innovative methodologies. This scientific tradition integrated Greek, Indian, and Persian knowledge while making original contributions that significantly influenced the development of modern science.",
    significance: [
      "Development of empirical methodology",
      "Mathematical innovations",
      "Medical advancements",
      "Astronomical discoveries",
      "Chemical experimentation",
      "Technological innovations",
      "Knowledge preservation",
      "Cross-cultural scientific exchange"
    ]
  },
  scientificFields: [
    {
      name: "Mathematics",
      arabicName: "الرياضيات",
      period: "8th-14th Century",
      regions: [
        "Baghdad",
        "Cairo",
        "Cordoba",
        "Samarkand"
      ],
      description: "Islamic mathematics made groundbreaking contributions to algebra, geometry, and trigonometry, developing new methods for solving equations and establishing the foundations of modern mathematical notation.",
      characteristics: [
        "Systematic problem-solving",
        "Algebraic innovation",
        "Geometric applications",
        "Numerical systems",
        "Practical applications"
      ],
      innovations: [
        "Algebra as distinct discipline",
        "Algorithm development",
        "Decimal fractions",
        "Spherical trigonometry",
        "Mathematical notation"
      ],
      significance: [
        "Foundation of modern algebra",
        "Development of algorithms",
        "Advanced calculation methods",
        "Astronomical applications"
      ],
      majorDiscoveries: [
        {
          name: "Algebra (Al-Jabr)",
          discoverer: "Al-Khwarizmi",
          date: "820 CE",
          description: "Systematic approach to solving linear and quadratic equations using standardized methods",
          significance: "Established algebra as an independent mathematical discipline",
          modernApplications: [
            "Computer science",
            "Engineering",
            "Economic modeling",
            "Scientific research"
          ]
        }
      ],
      influence: [
        "Modern mathematics",
        "Computer science",
        "Engineering",
        "Scientific methodology"
      ]
    }
  ],
  institutions: [
    {
      name: "House of Wisdom",
      arabicName: "بيت الحكمة",
      period: "8th-13th Century",
      location: "Baghdad",
      description: "Major intellectual center that facilitated the translation and development of scientific works while fostering original research and innovation.",
      characteristics: [
        "Multi-disciplinary research",
        "Translation movement",
        "Empirical methodology",
        "Collaborative environment",
        "Royal patronage"
      ],
      fields: [
        "Mathematics",
        "Astronomy",
        "Medicine",
        "Chemistry",
        "Physics"
      ],
      notableScholars: [
        {
          name: "Al-Khwarizmi",
          arabicName: "الخوارزمي",
          field: "Mathematics",
          contributions: [
            "Algebraic methods",
            "Astronomical tables",
            "Geographic works",
            "Mathematical algorithms"
          ]
        }
      ],
      significance: [
        "Knowledge preservation",
        "Scientific advancement",
        "Cultural exchange",
        "Methodological development"
      ],
      legacy: "Established model for research institutions and influenced development of universities globally"
    }
  ],
  scholars: [
    {
      name: "Ibn al-Haytham",
      arabicName: "ابن الهيثم",
      period: "965-1040 CE",
      fields: [
        "Optics",
        "Physics",
        "Mathematics",
        "Astronomy"
      ],
      biography: {
        origin: "Basra, Iraq",
        education: [
          "Self-taught in sciences",
          "Studied Greek works",
          "Experimental methodology"
        ],
        positions: [
          "Court scientist",
          "Independent researcher",
          "Author and teacher"
        ],
        majorWorks: [
          {
            title: "Book of Optics",
            arabicTitle: "كتاب المناظر",
            date: "1011-1021 CE",
            field: "Optics",
            significance: "Foundational work in optics and scientific methodology",
            innovations: [
              "Theory of vision",
              "Camera obscura explanation",
              "Light behavior studies",
              "Experimental method"
            ]
          }
        ]
      },
      discoveries: [
        "Scientific method foundations",
        "Vision theory",
        "Light reflection laws",
        "Atmospheric refraction"
      ],
      legacy: "Father of modern optics and pioneer of scientific methodology"
    }
  ],
  methodologies: [
    {
      name: "Empirical Method",
      arabicName: "المنهج التجريبي",
      period: "9th-14th Century",
      description: "Systematic approach to scientific inquiry combining observation, experimentation, and mathematical analysis.",
      principles: [
        "Systematic observation",
        "Controlled experimentation",
        "Mathematical verification",
        "Repeatable results",
        "Peer review"
      ],
      applications: [
        "Astronomical observations",
        "Medical treatments",
        "Chemical processes",
        "Physical phenomena"
      ],
      keyFigures: [
        {
          name: "Ibn al-Haytham",
          arabicName: "ابن الهيثم",
          contribution: "Developed systematic experimental method"
        }
      ],
      significance: [
        "Scientific method development",
        "Experimental verification",
        "Methodological innovation",
        "Knowledge systematization"
      ],
      modernRelevance: [
        "Scientific research",
        "Laboratory practices",
        "Academic methodology",
        "Industrial innovation"
      ]
    }
  ],
  resources: [
    {
      title: "Science in Medieval Islam",
      author: "Howard R. Turner",
      year: "1997",
      type: "Academic",
      description: "Comprehensive overview of scientific achievements in medieval Islamic civilization",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Science-Medieval-Islam-Illustrated-Introduction/dp/0292781490",
      isbn: "978-0292781498"
    },
    {
      title: "Lost History: The Enduring Legacy of Muslim Scientists, Thinkers, and Artists",
      author: "Michael Hamilton Morgan",
      year: "2008",
      type: "Historical",
      description: "Exploration of Islamic scientific and cultural achievements and their global influence",
      language: "English",
      level: "General",
      amazonUrl: "https://www.amazon.com/Lost-History-Enduring-Scientists-Thinkers/dp/1426202806",
      isbn: "978-1426202803"
    }
  ]
}

export default function IslamicSciencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Science</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{islamicScienceContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {islamicScienceContent.timeline.start} - {islamicScienceContent.timeline.end}
            </p>
            <p className="mb-4">{islamicScienceContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {islamicScienceContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Scientific Fields */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scientific Fields</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicScienceContent.scientificFields.map((field, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {field.name} ({field.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {field.period} | Regions: {field.regions.join(", ")}
              </p>
              
              <p className="mb-4">{field.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {field.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovations:</h4>
                  <ul className="list-disc pl-6">
                    {field.innovations.map((innovation, idx) => (
                      <li key={idx}>{innovation}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Discoveries:</h4>
                {field.majorDiscoveries.map((discovery, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{discovery.name}</h5>
                    <p>{discovery.description}</p>
                    <p className="text-sm text-gray-600">Discoverer: {discovery.discoverer}</p>
                    <p className="text-sm text-gray-600">Date: {discovery.date}</p>
                    <p className="text-sm text-gray-600">Significance: {discovery.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Modern Applications:</h6>
                      <ul className="list-disc pl-6">
                        {discovery.modernApplications.map((app, appIdx) => (
                          <li key={appIdx} className="text-sm">{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {field.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {field.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Institutions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scientific Institutions</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicScienceContent.institutions.map((institution, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {institution.name} ({institution.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {institution.period} | Location: {institution.location}
              </p>
              
              <p className="mb-4">{institution.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {institution.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fields of Study:</h4>
                  <ul className="list-disc pl-6">
                    {institution.fields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Scholars:</h4>
                {institution.notableScholars.map((scholar, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {scholar.name} ({scholar.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Field: {scholar.field}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Contributions:</h6>
                      <ul className="list-disc pl-6">
                        {scholar.contributions.map((contribution, contIdx) => (
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
                  {institution.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {institution.legacy}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scholars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Scientists</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicScienceContent.scholars.map((scholar, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {scholar.name} ({scholar.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {scholar.period}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Fields:</h4>
                  <ul className="list-disc pl-6">
                    {scholar.fields.map((field, idx) => (
                      <li key={idx}>{field}</li>
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
                      Date: {work.date} | Field: {work.field}
                    </p>
                    <p className="text-sm text-gray-600">Significance: {work.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Innovations:</h6>
                      <ul className="list-disc pl-6">
                        {work.innovations.map((innovation, innIdx) => (
                          <li key={innIdx} className="text-sm">{innovation}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Discoveries:</h4>
                <ul className="list-disc pl-6">
                  {scholar.discoveries.map((discovery, idx) => (
                    <li key={idx}>{discovery}</li>
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

      {/* Methodologies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scientific Methodologies</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicScienceContent.methodologies.map((methodology, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {methodology.name} ({methodology.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {methodology.period}</p>
              
              <p className="mb-4">{methodology.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Principles:</h4>
                  <ul className="list-disc pl-6">
                    {methodology.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul className="list-disc pl-6">
                    {methodology.applications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Figures:</h4>
                {methodology.keyFigures.map((figure, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {figure.name} ({figure.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Contribution: {figure.contribution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {methodology.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Relevance:</h4>
                <ul className="list-disc pl-6">
                  {methodology.modernRelevance.map((rel, idx) => (
                    <li key={idx}>{rel}</li>
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
            {islamicScienceContent.resources.map((resource, index) => (
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