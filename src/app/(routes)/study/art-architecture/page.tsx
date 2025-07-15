import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Religious Art & Architecture Through History | Sacred Spaces & Symbolism",
  description: "Explore the evolution of religious art and architecture across major traditions. Discover sacred spaces, symbolic elements, and architectural innovations from ancient temples to modern religious buildings.",
  keywords: [
    "religious architecture",
    "sacred art",
    "temple architecture",
    "church design",
    "mosque architecture",
    "Buddhist temples",
    "religious symbolism",
    "sacred geometry",
    "religious iconography",
    "sacred spaces"
  ],
  openGraph: {
    title: "Religious Art & Architecture Through History",
    description: "Comprehensive guide to religious art, architecture, and sacred spaces across traditions",
    images: [
      {
        url: "/images/religious-architecture-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Religious Architecture Through History"
      }
    ]
  }
}

interface ArtPeriod {
  id: string
  name: string
  timeframe: string
  traditions: ArtTradition[]
}

interface ArtTradition {
  id: string
  name: string
  overview: string
  architecturalElements: {
    name: string
    description: string
    significance: string
    examples: string[]
    technicalDetails?: string[]
  }[]
  artworks: {
    type: string
    description: string
    significance: string
    materials: string[]
    techniques: string[]
    notableExamples: {
      name: string
      location: string
      date: string
      significance: string
      preservation: string
    }[]
  }[]
  innovations: {
    technical: string[]
    artistic: string[]
    cultural: string[]
  }
  symbolism: {
    elements: {
      name: string
      meaning: string
      usage: string[]
    }[]
    colors: {
      color: string
      significance: string
      applications: string[]
    }[]
    patterns: {
      name: string
      description: string
      meaning: string
      examples: string[]
    }[]
  }
  preservation: {
    challenges: string[]
    techniques: string[]
    currentProjects: {
      name: string
      location: string
      description: string
      status: string
    }[]
  }
  influence: {
    contemporary: string[]
    historical: string[]
    crossCultural: string[]
  }
  resources: {
    academic: {
      title: string
      author: string
      publication: string
      year: number
      doi?: string
    }[]
    conservation: {
      organization: string
      project: string
      website: string
    }[]
    digitalArchives: {
      name: string
      description: string
      url: string
      access: string
    }[]
  }
}

const artPeriods: ArtPeriod[] = [
  {
    id: "ancient",
    name: "Ancient Period",
    timeframe: "3000 BCE - 500 CE",
    traditions: [
      {
        id: "egyptian",
        name: "Ancient Egyptian Religious Architecture",
        overview: "Monumental temple complexes and tomb architecture characterized by massive stone construction, hierarchical spaces, and symbolic decoration",
        architecturalElements: [
          {
            name: "Pylon",
            description: "Massive trapezoidal towers flanking temple entrances",
            significance: "Symbolic gateway between secular and sacred spaces",
            examples: [
              "Luxor Temple",
              "Temple of Edfu",
              "Temple of Karnak"
            ],
            technicalDetails: [
              "Constructed of sandstone blocks",
              "Typically decorated with reliefs",
              "Internal stairways to roof"
            ]
          },
          {
            name: "Hypostyle Hall",
            description: "Large columned hall with clerestory lighting",
            significance: "Representation of primordial marsh and creation mythology",
            examples: [
              "Great Hypostyle Hall at Karnak",
              "Ramesseum",
              "Temple of Khonsu"
            ],
            technicalDetails: [
              "Column spacing based on stone beam lengths",
              "Clerestory lighting system",
              "Hierarchical column sizes"
            ]
          }
        ],
        artworks: [
          {
            type: "Relief Sculpture",
            description: "Carved and painted wall reliefs depicting religious scenes",
            significance: "Documentation of rituals and mythological narratives",
            materials: [
              "Limestone",
              "Sandstone",
              "Mineral pigments"
            ],
            techniques: [
              "Sunken relief (en creux)",
              "Raised relief",
              "Painted relief"
            ],
            notableExamples: [
              {
                name: "Battle of Kadesh Relief",
                location: "Abu Simbel",
                date: "c. 1274 BCE",
                significance: "Largest ancient battle relief",
                preservation: "Well preserved due to desert climate"
              }
            ]
          }
        ],
        innovations: {
          technical: [
            "Post and lintel construction",
            "Stone cutting techniques",
            "Astronomical alignment"
          ],
          artistic: [
            "Hierarchical scale",
            "Composite perspective",
            "Symbolic color system"
          ],
          cultural: [
            "Integration of text and image",
            "Standardized iconography",
            "Ritual architecture"
          ]
        },
        symbolism: {
          elements: [
            {
              name: "Djed Pillar",
              meaning: "Stability and resurrection",
              usage: [
                "Temple columns",
                "Tomb decoration",
                "Amulets"
              ]
            }
          ],
          colors: [
            {
              color: "Blue",
              significance: "Sky, water, rebirth",
              applications: [
                "Ceiling decoration",
                "Divine figures",
                "Water symbols"
              ]
            }
          ],
          patterns: [
            {
              name: "Kheker Frieze",
              description: "Bundled reed pattern",
              meaning: "Protection and divine shelter",
              examples: [
                "Temple cornices",
                "Tomb decoration",
                "Palace friezes"
              ]
            }
          ]
        },
        preservation: {
          challenges: [
            "Environmental erosion",
            "Groundwater damage",
            "Tourism impact"
          ],
          techniques: [
            "Environmental monitoring",
            "Stone consolidation",
            "Digital documentation"
          ],
          currentProjects: [
            {
              name: "Karnak Conservation Project",
              location: "Luxor, Egypt",
              description: "Comprehensive documentation and conservation of temple complex",
              status: "Ongoing"
            }
          ]
        },
        influence: {
          contemporary: [
            "Modern museum design",
            "Monumental architecture",
            "Environmental design principles"
          ],
          historical: [
            "Greek architecture",
            "Roman temple design",
            "Renaissance revival"
          ],
          crossCultural: [
            "African architecture",
            "Mediterranean styles",
            "Colonial architecture"
          ]
        },
        resources: {
          academic: [
            {
              title: "Egyptian Temples: Religious Architecture and Sacred Space",
              author: "Dieter Arnold",
              publication: "Oxford University Press",
              year: 2018,
              doi: "10.1093/oxfordhb/9780199271870.013.0005"
            }
          ],
          conservation: [
            {
              organization: "Supreme Council of Antiquities",
              project: "Egyptian Heritage Conservation",
              website: "https://sca-egypt.org"
            }
          ],
          digitalArchives: [
            {
              name: "Digital Karnak Project",
              description: "3D models and documentation of Karnak Temple",
              url: "https://digitalkarnak.org",
              access: "Open Access"
            }
          ]
        }
      }
    ]
  }
]

export default function ReligiousArtArchitecturePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Religious Art & Architecture</h1>
        <p className="text-xl text-muted-foreground">
          Explore the evolution of sacred spaces and religious artistic expression through history
        </p>
      </section>

      <Tabs defaultValue={artPeriods[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {artPeriods.map((period) => (
            <TabsTrigger key={period.id} value={period.id}>
              {period.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {artPeriods.map((period) => (
          <TabsContent key={period.id} value={period.id} className="space-y-8">
            {period.traditions.map((tradition) => (
              <Card key={tradition.id}>
                <CardHeader>
                  <CardTitle>{tradition.name}</CardTitle>
                  <p className="text-muted-foreground">{tradition.overview}</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Architectural Elements */}
                  <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Architectural Elements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tradition.architecturalElements.map((element) => (
                        <div
                          key={element.name}
                          className="p-4 bg-secondary rounded-lg space-y-2"
                        >
                          <h4 className="font-medium">{element.name}</h4>
                          <p className="text-sm">{element.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {element.significance}
                          </p>
                          <div className="space-y-1">
                            <h5 className="text-sm font-medium">Examples:</h5>
                            <ul className="list-disc list-inside text-sm">
                              {element.examples.map((example, index) => (
                                <li key={index}>{example}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Artworks */}
                  <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Religious Artworks</h3>
                    {tradition.artworks.map((artwork) => (
                      <div key={artwork.type} className="space-y-4">
                        <h4 className="font-medium">{artwork.type}</h4>
                        <p className="text-sm">{artwork.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium">Materials & Techniques</h5>
                            <ul className="list-disc list-inside text-sm">
                              {artwork.materials.map((material, index) => (
                                <li key={index}>{material}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Notable Examples</h5>
                            {artwork.notableExamples.map((example) => (
                              <div key={example.name} className="text-sm space-y-1">
                                <p className="font-medium">{example.name}</p>
                                <p>{example.location} • {example.date}</p>
                                <p className="text-muted-foreground">
                                  {example.significance}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Symbolism */}
                  <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Religious Symbolism</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium">Symbolic Elements</h4>
                        {tradition.symbolism.elements.map((element) => (
                          <div key={element.name} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{element.name}</p>
                            <p className="text-sm">{element.meaning}</p>
                            <ul className="list-disc list-inside text-sm">
                              {element.usage.map((use, index) => (
                                <li key={index}>{use}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-medium">Color Symbolism</h4>
                        {tradition.symbolism.colors.map((color) => (
                          <div key={color.color} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{color.color}</p>
                            <p className="text-sm">{color.significance}</p>
                            <ul className="list-disc list-inside text-sm">
                              {color.applications.map((app, index) => (
                                <li key={index}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-medium">Symbolic Patterns</h4>
                        {tradition.symbolism.patterns.map((pattern) => (
                          <div key={pattern.name} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{pattern.name}</p>
                            <p className="text-sm">{pattern.description}</p>
                            <p className="text-sm text-muted-foreground">
                              {pattern.meaning}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Conservation */}
                  <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Conservation & Preservation</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium">Challenges & Techniques</h4>
                        <div className="space-y-2">
                          <div>
                            <h5 className="text-sm font-medium">Challenges</h5>
                            <ul className="list-disc list-inside text-sm">
                              {tradition.preservation.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Conservation Techniques</h5>
                            <ul className="list-disc list-inside text-sm">
                              {tradition.preservation.techniques.map((technique, index) => (
                                <li key={index}>{technique}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Current Projects</h4>
                        {tradition.preservation.currentProjects.map((project) => (
                          <div key={project.name} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{project.name}</p>
                            <p className="text-sm">{project.location}</p>
                            <p className="text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <p className="text-sm">Status: {project.status}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Resources */}
                  <section className="space-y-4">
                    <h3 className="text-xl font-semibold">Academic Resources</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium">Publications</h4>
                        {tradition.resources.academic.map((resource) => (
                          <div key={resource.title} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{resource.title}</p>
                            <p className="text-sm">
                              {resource.author} • {resource.publication}, {resource.year}
                            </p>
                            {resource.doi && (
                              <a
                                href={`https://doi.org/${resource.doi}`}
                                className="text-primary hover:underline text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                DOI: {resource.doi}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-medium">Digital Archives</h4>
                        {tradition.resources.digitalArchives.map((archive) => (
                          <div key={archive.name} className="mt-2 space-y-1">
                            <p className="text-sm font-medium">{archive.name}</p>
                            <p className="text-sm">{archive.description}</p>
                            <a
                              href={archive.url}
                              className="text-primary hover:underline text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Archive
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 