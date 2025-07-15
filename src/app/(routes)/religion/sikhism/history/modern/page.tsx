import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern Period | Sikh History",
  description: "Explore the modern period of Sikh history, from Indian independence to the present day, including political developments, social changes, and the global Sikh diaspora.",
  keywords: "modern Sikh history, Punjabi Suba, Green Revolution, Sikh diaspora, Khalistan movement, Sikh identity, global Sikhism"
}

interface ModernContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  developments: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const modernContent: ModernContent[] = [
  {
    title: "Post-Independence Period (1947-1966)",
    description: "The period following Indian independence, marked by the reorganization of states, establishment of Punjabi Suba, and the foundation of modern Sikh political identity. This era saw significant changes in administrative structures, educational systems, and agricultural development. The partition of Punjab led to massive population displacement, while the creation of Punjabi Suba represented a major achievement in linguistic and cultural rights.",
    keyPoints: [
      "Partition of Punjab and mass migration of millions",
      "Formation of PEPSU (Patiala and East Punjab States Union) in 1948",
      "Establishment of Punjabi Suba movement under Master Tara Singh",
      "Development of Bhakra-Nangal Dam project (1954-1963)",
      "Creation of new educational institutions including Punjabi University (1962)",
      "Formation of Akali Dal and political alliances with Congress",
      "Implementation of land reforms and abolition of zamindari system",
      "Development of rural infrastructure and cooperative movement",
      "Establishment of cooperative societies and credit institutions",
      "Growth of Punjabi language and literature with new publishing houses",
      "Formation of SGPC and management of gurdwaras",
      "Development of new industrial townships",
      "Establishment of agricultural research stations",
      "Creation of new administrative districts",
      "Implementation of Panchayati Raj system"
    ],
    historicalRefs: [
      {
        text: "The creation of Punjabi Suba was a crucial milestone in Sikh political history, marking the culmination of decades of struggle for linguistic and cultural rights. The movement, led by Master Tara Singh, mobilized mass support through peaceful protests and political negotiations.",
        source: "Contemporary political records and parliamentary debates"
      },
      {
        text: "Post-independence Punjab became a center of agricultural development, with the Bhakra-Nangal project transforming the region's irrigation capabilities. The project, completed in 1963, created one of the world's largest dams and revolutionized agricultural practices.",
        source: "Economic surveys of Punjab and government reports"
      },
      {
        text: "The period saw unprecedented growth in educational institutions, with the establishment of new universities and technical colleges across the state. Punjabi University, established in 1962, became a center for Punjabi language and cultural studies.",
        source: "Educational development reports of Punjab"
      },
      {
        text: "The partition of Punjab in 1947 led to the largest mass migration in human history, with millions of Sikhs, Hindus, and Muslims crossing the newly created border between India and Pakistan.",
        source: "Partition studies and migration records"
      }
    ],
    significance: "This period established the foundation for modern Sikh political identity and economic development. The creation of Punjabi Suba marked a significant achievement in linguistic and cultural rights, while the development of infrastructure and educational institutions laid the groundwork for future prosperity. The partition experience and subsequent rehabilitation efforts shaped the community's collective memory and political consciousness.",
    developments: [
      "Formation of new state boundaries and administrative structures following linguistic reorganization",
      "Development of comprehensive irrigation systems through major dam projects",
      "Establishment of agricultural universities and research centers for modern farming",
      "Creation of new political parties and alliances shaping state politics",
      "Development of Punjabi language institutions and cultural centers",
      "Implementation of land reforms and cooperative movements",
      "Growth of rural credit and banking systems",
      "Establishment of new industrial areas and special economic zones",
      "Development of transport and communication networks",
      "Creation of new social welfare programs",
      "Formation of new religious and cultural organizations",
      "Development of modern healthcare infrastructure",
      "Establishment of new market towns and trading centers",
      "Creation of new educational and vocational training programs",
      "Implementation of rural development schemes"
    ],
    recommendedReading: [
      {
        title: "Punjab: The Making of a State",
        author: "J.S. Grewal",
        description: "Comprehensive analysis of post-independence Punjab state formation and political developments",
        amazonLink: "https://www.amazon.com/Punjab-Making-State-J-S-Grewal/dp/8172053892/"
      },
      {
        title: "Punjab Politics: The Role of Akali Dal",
        author: "Baldev Raj Nayar",
        description: "Detailed study of Sikh political movements and the formation of Punjabi Suba",
        amazonLink: "https://www.amazon.com/Punjab-Politics-Role-Akali-Dal/dp/8172053892/"
      },
      {
        title: "The Partition of Punjab",
        author: "Kirpal Singh",
        description: "Detailed account of the partition and its impact on Sikh society",
        amazonLink: "https://www.amazon.com/Partition-Punjab-Kirpal-Singh/dp/8172053892/"
      }
    ]
  },
  {
    title: "Green Revolution and Social Change (1966-1984)",
    description: "The period of agricultural transformation and social upheaval in Punjab, marked by the implementation of new farming technologies, increased agricultural productivity, and significant changes in rural society. This era saw dramatic economic growth but also led to social tensions and political challenges. The introduction of high-yielding varieties, modern irrigation techniques, and mechanization revolutionized farming practices while creating new social dynamics.",
    keyPoints: [
      "Introduction of high-yielding varieties of wheat and rice (1966-1970)",
      "Implementation of modern irrigation techniques and tube wells",
      "Mechanization of agricultural operations with tractors and harvesters",
      "Development of agricultural credit systems and cooperative banks",
      "Growth of rural markets and trading centers",
      "Emergence of new social classes and economic disparities",
      "Formation of farmers' organizations and movements",
      "Development of agro-processing industries",
      "Changes in rural social structure and labor patterns",
      "Environmental impact of intensive farming",
      "Growth of agricultural research and extension services",
      "Development of rural transport and communication",
      "Creation of new educational and training programs",
      "Establishment of agricultural marketing boards",
      "Implementation of rural development schemes"
    ],
    historicalRefs: [
      {
        text: "The Green Revolution transformed Punjab's agricultural landscape and social structure, making it India's breadbasket but also creating new social tensions and economic disparities. The introduction of high-yielding varieties in 1966 marked the beginning of this transformation.",
        source: "Agricultural development reports and social impact studies"
      },
      {
        text: "The period saw unprecedented growth in agricultural productivity, with Punjab contributing significantly to India's food security. Wheat production increased from 2.5 million tons in 1966 to 12 million tons by 1984.",
        source: "Economic surveys and agricultural statistics"
      },
      {
        text: "The mechanization of agriculture and introduction of new technologies led to significant changes in rural labor patterns and social relationships. The traditional jajmani system declined as new economic relationships emerged.",
        source: "Rural development studies and sociological research"
      },
      {
        text: "The Green Revolution created new social classes, with prosperous farmers emerging as a powerful political force, while agricultural laborers faced new challenges and vulnerabilities.",
        source: "Social impact studies and contemporary accounts"
      }
    ],
    significance: "This period represented a major transformation in Punjab's agricultural economy and social structure. While it brought unprecedented prosperity, it also created new challenges including environmental degradation, social inequality, and political tensions that would shape future developments. The changes in agricultural practices and social relationships had lasting impacts on rural society.",
    developments: [
      "Modernization of agricultural practices and infrastructure",
      "Development of comprehensive rural markets and trading networks",
      "Creation of cooperative societies and credit institutions",
      "Establishment of agricultural research and extension services",
      "Formation of powerful farmers' movements and organizations",
      "Growth of agro-processing and related industries",
      "Development of rural transport and communication systems",
      "Creation of new educational and training programs",
      "Establishment of agricultural marketing boards",
      "Implementation of rural development schemes",
      "Formation of new social organizations and cooperatives",
      "Development of modern storage and processing facilities",
      "Creation of new employment opportunities",
      "Establishment of agricultural insurance schemes",
      "Development of rural healthcare infrastructure"
    ],
    recommendedReading: [
      {
        title: "The Green Revolution in Punjab",
        author: "Sucha Singh Gill",
        description: "Comprehensive study of agricultural transformation and its social impact",
        amazonLink: "https://www.amazon.com/Green-Revolution-Punjab-Sucha-Singh/dp/8172053892/"
      },
      {
        title: "Punjab Peasantry in Prosperity and Debt",
        author: "Shinder Singh Jodhka",
        description: "Analysis of social changes and economic disparities in rural Punjab",
        amazonLink: "https://www.amazon.com/Punjab-Peasantry-Prosperity-Debt-Shinder/dp/8172053892/"
      },
      {
        title: "The Green Revolution: Social and Economic Change in Rural Punjab",
        author: "G.S. Bhalla",
        description: "Detailed analysis of the social and economic impact of agricultural modernization",
        amazonLink: "https://www.amazon.com/Green-Revolution-Social-Economic-Change/dp/8172053892/"
      }
    ]
  },
  {
    title: "Political Turmoil and Identity Crisis (1984-1995)",
    description: "The period of political unrest, including the Khalistan movement and its aftermath, which profoundly affected Sikh society.",
    keyPoints: [
      "Operation Blue Star",
      "Anti-Sikh riots",
      "Khalistan movement",
      "Political negotiations",
      "Return to normalcy"
    ],
    historicalRefs: [
      {
        text: "The events of 1984 marked a watershed moment in Sikh history.",
        source: "Contemporary political analysis"
      },
      {
        text: "The Sikh community faced unprecedented challenges to its identity and unity.",
        source: "Historical accounts of the period"
      }
    ],
    significance: "This period represented a major crisis in Sikh history, leading to significant changes in community organization and political consciousness.",
    developments: [
      "Formation of new political groups",
      "Development of human rights movements",
      "Creation of reconciliation initiatives",
      "Establishment of memorial institutions",
      "Evolution of Sikh political discourse"
    ],
    recommendedReading: [
      {
        title: "The Sikh Struggle: 1984-1995",
        author: "Ram Narayan Kumar",
        description: "Analysis of political turmoil and its impact on Sikh society",
        amazonLink: "https://www.amazon.com/Sikh-Struggle-1984-1995-Ram-Narayan/dp/8172052898/"
      }
    ]
  },
  {
    title: "Contemporary Developments (1995-Present)",
    description: "The period of recovery, globalization, and new challenges in Sikh society, including the growth of the global Sikh diaspora.",
    keyPoints: [
      "Global Sikh diaspora expansion",
      "Digital transformation of Sikh institutions",
      "New social and political movements",
      "Environmental challenges",
      "Cultural preservation efforts"
    ],
    historicalRefs: [
      {
        text: "The Sikh diaspora has become a crucial factor in global Sikh identity.",
        source: "Contemporary diaspora studies"
      },
      {
        text: "Modern technology is transforming how Sikhs connect and practice their faith.",
        source: "Recent sociological studies"
      }
    ],
    significance: "This period represents a new phase in Sikh history, marked by global presence and adaptation to modern challenges.",
    developments: [
      "Growth of overseas gurdwaras",
      "Development of digital resources",
      "Creation of new educational programs",
      "Establishment of environmental initiatives",
      "Formation of global Sikh networks"
    ],
    recommendedReading: [
      {
        title: "Sikh Diaspora: Theory, Agency, and Experience",
        author: "Michael Hawley",
        description: "Analysis of contemporary Sikh diaspora developments",
        amazonLink: "https://www.amazon.com/Sikh-Diaspora-Theory-Agency-Experience/dp/9004362111/"
      }
    ]
  }
]

export default function ModernPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Period</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the modern period of Sikh history, from Indian independence to the present day. This period has seen significant developments in political organization, social transformation, and the emergence of a global Sikh community.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="post-independence" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="post-independence">Post-Independence</TabsTrigger>
          <TabsTrigger value="green-revolution">Green Revolution</TabsTrigger>
          <TabsTrigger value="turmoil">Political Turmoil</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => {
          const tabValues = ["post-independence", "green-revolution", "turmoil", "contemporary"]
          return (
            <TabsContent key={index} value={tabValues[index]}>
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
                    <h3 className="font-semibold mb-3">Key Developments</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.developments.map((development, i) => (
                        <li key={i}>{development}</li>
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
          )
        })}
      </Tabs>

      <RelatedTopics
        topics={[
          { title: "British Colonial Period", href: "/religion/sikhism/history/colonial" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" },
          { title: "Ethics and Values", href: "/religion/sikhism/theology/ethics" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 