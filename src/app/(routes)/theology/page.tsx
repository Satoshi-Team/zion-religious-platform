import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TheologicalTradition {
  id: string
  name: string
  description: string
  keyTopics: string[]
  resources: Resource[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface TheologyContent {
  introduction: string
  traditions: TheologicalTradition[]
}

export const metadata: Metadata = {
  title: "Theology | Understanding Divine Truth Across Traditions",
  description: "Explore the systematic study of divine truth across major religious traditions. Discover key theological concepts, comparative analysis, and scholarly resources.",
  openGraph: {
    title: "Theology | Understanding Divine Truth Across Traditions",
    description: "Comprehensive guide to theological studies across religious traditions",
    type: "website",
  },
}

const theologyContent: TheologyContent = {
  introduction: `Theology, often described as "faith seeking understanding," is the systematic study of divine truth and religious belief. This discipline examines fundamental questions about God, existence, and humanity's relationship with the divine across various religious traditions. Through careful analysis of sacred texts, historical developments, and philosophical inquiry, theology provides frameworks for understanding ultimate reality and meaning.`,
  traditions: [
    {
      id: "christian",
      name: "Christian Theology",
      description: "The systematic study of Christian doctrine and God's self-revelation through Scripture, tradition, reason, and experience.",
      keyTopics: [
        "The nature of God and the Trinity",
        "Christology and salvation",
        "Biblical interpretation and hermeneutics",
        "Ecclesiology and sacramental theology",
        "Eschatology and the kingdom of God"
      ],
      resources: [
        {
          title: "Systematic Theology: An Introduction to Biblical Doctrine",
          author: "Wayne Grudem",
          url: "/resources/systematic-theology-grudem",
          type: "Book",
          description: "A comprehensive introduction to systematic theology from an evangelical perspective.",
          affiliate: true,
          affiliateUrl: "https://amazon.com/dp/0310286700"
        },
        {
          title: "The King James Study Bible",
          author: "Thomas Nelson",
          url: "/resources/kjv-study-bible",
          type: "Sacred Text",
          description: "The classic King James Version with comprehensive study notes and resources.",
          affiliate: true,
          affiliateUrl: "https://amazon.com/dp/0529100146"
        }
      ]
    },
    {
      id: "islamic",
      name: "Islamic Theology (Kalam)",
      description: "The intellectual tradition of studying Islamic doctrine, divine attributes, and religious truth through rational discourse.",
      keyTopics: [
        "Divine unity (Tawhid)",
        "Prophetic revelation",
        "Divine attributes and names",
        "Free will and predestination",
        "Islamic jurisprudence (Fiqh)"
      ],
      resources: [
        {
          title: "The Vision of Islam",
          author: "Sachiko Murata and William C. Chittick",
          url: "/resources/vision-of-islam",
          type: "Book",
          description: "A comprehensive introduction to Islamic theology and spirituality.",
          affiliate: true,
          affiliateUrl: "https://amazon.com/dp/1557785163"
        }
      ]
    },
    {
      id: "jewish",
      name: "Jewish Theology",
      description: "The exploration of Jewish religious thought, divine-human relationship, and interpretation of Torah.",
      keyTopics: [
        "Nature of God and monotheism",
        "Torah interpretation and Oral Law",
        "Covenant and chosen people",
        "Ethics and Halakha",
        "Messianic age and redemption"
      ],
      resources: [
        {
          title: "The Jewish Study Bible",
          author: "Adele Berlin and Marc Zvi Brettler",
          url: "/resources/jewish-study-bible",
          type: "Sacred Text",
          description: "Academic study Bible with Jewish perspectives and commentary.",
          affiliate: true,
          affiliateUrl: "https://amazon.com/dp/0199978465"
        }
      ]
    }
  ]
}

export default function TheologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Theology: Understanding Divine Truth</h1>
        <p className="text-xl mb-8">{theologyContent.introduction}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {theologyContent.traditions.map((tradition) => (
          <Card key={tradition.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{tradition.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="mb-4">{tradition.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Key Topics:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {tradition.keyTopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Recommended Resources:</h3>
                <div className="space-y-2">
                  {tradition.resources.map((resource, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-lg">
                      <h4 className="font-medium">{resource.title}</h4>
                      {resource.author && <p className="text-sm text-slate-600">By {resource.author}</p>}
                      <p className="text-sm text-slate-600 mt-1">{resource.description}</p>
                      <div className="mt-2 space-x-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={resource.url}>Learn More</Link>
                        </Button>
                        {resource.affiliate && (
                          <Button asChild variant="default" size="sm">
                            <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Further</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/teachings/christianity/trinity" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>The Trinity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Christian doctrine of the Trinity and its theological implications.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/tawhid" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Divine Unity (Tawhid)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the Islamic concept of God's absolute oneness.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/divine-human" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Divine-Human Relationship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare perspectives on the relationship between divine and human across traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 