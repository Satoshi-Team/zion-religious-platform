import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Impact on Social Development | Bahá'í Faith",
  description: "Explore the profound influence of the Bahá'í Faith on social development, from community building and education to economic justice and gender equality, fostering sustainable social transformation.",
  keywords: "Bahá'í Social Development, Community Building, Social Action, Gender Equality, Economic Justice, Race Unity, Environmental Stewardship, Social Transformation"
}

interface SocialContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  elements: string[]
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const socialContent: SocialContent[] = [
  {
    title: "Community Building and Social Cohesion",
    description: "The systematic approach to building vibrant communities through spiritual empowerment, collective worship, and social action.",
    keyPoints: [
      "Core activities framework",
      "Devotional gatherings",
      "Children's classes",
      "Junior youth programs",
      "Study circles",
      "Community consultation",
      "Social action initiatives",
      "Neighborhood development"
    ],
    historicalRefs: [
      {
        text: "Framework for community building in Messages of the Universal House of Justice.",
        source: "Framework for Action"
      },
      {
        text: "Development of core activities in Five Year Plan guidance.",
        source: "Five Year Plan Messages"
      }
    ],
    significance: "Community building efforts create spaces for spiritual and social transformation while fostering unity in diversity.",
    elements: [
      "Spiritual education",
      "Moral development",
      "Social connections",
      "Youth empowerment",
      "Collective worship",
      "Service projects",
      "Capacity building",
      "Local initiatives"
    ],
    practices: [
      "Activity coordination",
      "Facilitator training",
      "Community outreach",
      "Resource development",
      "Progress reflection",
      "Consultation methods",
      "Service planning",
      "Youth mentoring"
    ],
    recommendedReading: [
      {
        title: "For the Betterment of the World",
        author: "Bahá'í International Community",
        description: "Overview of Bahá'í social and economic development initiatives",
        amazonLink: "https://www.amazon.com/Betterment-World-Development-Initiatives-Community/dp/0877432678"
      }
    ]
  },
  {
    title: "Social Justice and Human Rights",
    description: "The promotion of social justice, human rights, and the elimination of all forms of prejudice through systematic action and advocacy.",
    keyPoints: [
      "Race unity initiatives",
      "Gender equality",
      "Economic justice",
      "Human rights advocacy",
      "Indigenous rights",
      "Religious freedom",
      "Peace building",
      "Social discourse"
    ],
    historicalRefs: [
      {
        text: "Principles of social justice in The Promise of World Peace.",
        source: "The Promise of World Peace"
      },
      {
        text: "Human rights advocacy in BIC statements.",
        source: "Bahá'í International Community Statements"
      }
    ],
    significance: "Social justice work applies spiritual principles to address systemic inequalities and promote the oneness of humanity.",
    elements: [
      "Rights awareness",
      "Advocacy methods",
      "Policy engagement",
      "Public discourse",
      "Unity building",
      "Justice frameworks",
      "Equality promotion",
      "Peace processes"
    ],
    practices: [
      "Rights education",
      "Advocacy training",
      "Discourse participation",
      "Coalition building",
      "Policy analysis",
      "Community dialogue",
      "Project development",
      "Impact assessment"
    ],
    recommendedReading: [
      {
        title: "Century of Light",
        author: "Universal House of Justice",
        description: "Analysis of social transformation in the twentieth century",
        amazonLink: "https://www.amazon.com/Century-Light-Universal-House-Justice/dp/0877432694"
      }
    ]
  },
  {
    title: "Economic Development and Sustainability",
    description: "The application of spiritual principles to economic development, promoting justice, sustainability, and collective prosperity.",
    keyPoints: [
      "Economic justice",
      "Sustainable development",
      "Social enterprise",
      "Capacity building",
      "Rural development",
      "Environmental stewardship",
      "Ethical business",
      "Resource management"
    ],
    historicalRefs: [
      {
        text: "Economic principles in compilation on social and economic development.",
        source: "Social and Economic Development"
      },
      {
        text: "Sustainability guidance in Conservation of the Earth's Resources.",
        source: "Conservation of the Earth's Resources"
      }
    ],
    significance: "Economic development initiatives demonstrate the practical application of spiritual principles in creating sustainable prosperity.",
    elements: [
      "Economic principles",
      "Sustainability frameworks",
      "Business ethics",
      "Development models",
      "Resource systems",
      "Community economics",
      "Social enterprise",
      "Environmental care"
    ],
    practices: [
      "Project planning",
      "Resource assessment",
      "Capacity building",
      "Impact evaluation",
      "Sustainability training",
      "Enterprise development",
      "Community consultation",
      "Environmental protection"
    ],
    recommendedReading: [
      {
        title: "Economics of the Future",
        author: "Gregory C. Dahl",
        description: "Bahá'í perspectives on economic development and justice",
        amazonLink: "https://www.amazon.com/Economics-Future-Gregory-C-Dahl/dp/0853984514"
      }
    ]
  },
  {
    title: "Education and Capacity Building",
    description: "The development of educational approaches that integrate spiritual and material knowledge for individual and collective transformation.",
    keyPoints: [
      "Moral education",
      "Spiritual development",
      "Academic excellence",
      "Service learning",
      "Character building",
      "Skills development",
      "Teacher training",
      "Educational innovation"
    ],
    historicalRefs: [
      {
        text: "Educational principles in Compilation on Bahá'í Education.",
        source: "Compilation on Bahá'í Education"
      },
      {
        text: "Development of training institutes in Turning Point.",
        source: "Turning Point"
      }
    ],
    significance: "Educational initiatives build capacity for service while integrating spiritual and material knowledge for societal transformation.",
    elements: [
      "Curriculum design",
      "Teaching methods",
      "Learning materials",
      "Training systems",
      "Service components",
      "Moral frameworks",
      "Skills development",
      "Assessment tools"
    ],
    practices: [
      "Teacher training",
      "Curriculum development",
      "Program evaluation",
      "Resource creation",
      "Student mentoring",
      "Service integration",
      "Capacity assessment",
      "Learning facilitation"
    ],
    recommendedReading: [
      {
        title: "Foundations for a Spiritual Education",
        author: "National Spiritual Assembly",
        description: "Comprehensive guide to Bahá'í educational principles",
        amazonLink: "https://www.amazon.com/Foundations-Spiritual-Education-Research-Bahai/dp/0877432708"
      }
    ]
  }
]

export default function SocialPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Impact on Social Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound influence of the Bahá'í Faith on social development, from community building and education to economic justice and gender equality, fostering sustainable social transformation.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="community" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="justice">Justice</TabsTrigger>
          <TabsTrigger value="economic">Economic</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        {socialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({community: true, justice: true, economic: true, education: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Historical References</h3>
                  <div className="space-y-4">
                    {content.historicalRefs.map((ref, i) => (
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
                  <h3 className="font-semibold mb-3">Elements</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.elements.map((element, i) => (
                      <li key={i}>{element}</li>
                    ))}
                  </ul>
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

      <div className="mt-8">
        <RelatedTopics
          topics={[
            {
              title: "Impact on Education",
              href: "/religion/bahai/impact/education"
            },
            {
              title: "Community Life",
              href: "/religion/bahai/community/life"
            },
            {
              title: "Social Principles",
              href: "/religion/bahai/teachings/social"
            }
          ]}
        />
      </div>
    </div>
  )
} 