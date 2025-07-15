import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  title: "Religious Texts Studies | Sacred Writings and Scripture",
  description: "Explore sacred texts, scriptures, and religious writings from various traditions. In-depth analysis and comparative study of holy books, manuscripts, and spiritual documents.",
  openGraph: {
    title: "Religious Texts Studies | Sacred Writings and Scripture",
    description: "Explore sacred texts, scriptures, and religious writings from various traditions. In-depth analysis and comparative study of holy books, manuscripts, and spiritual documents.",
    type: "website",
    images: [{ url: "/images/og/studies-texts.jpg" }],
  },
  keywords: [
    "religious texts",
    "sacred writings",
    "scripture study",
    "holy books",
    "religious manuscripts",
    "comparative scripture",
    "biblical studies",
    "quranic studies",
    "vedic texts",
    "buddhist sutras"
  ]
}

interface TextCategory {
  title: string
  description: string
  path: string
}

const textCategories: TextCategory[] = [
  {
    title: "Sacred Scriptures",
    description: "Study major religious texts including the Bible, Quran, Vedas, and Buddhist scriptures",
    path: "/studies/texts/scriptures"
  },
  {
    title: "Commentary Traditions",
    description: "Explore historical and modern interpretations of sacred texts",
    path: "/studies/texts/commentaries"
  },
  {
    title: "Mystical Writings",
    description: "Discover mystical and esoteric texts from various traditions",
    path: "/studies/texts/mystical"
  },
  {
    title: "Historical Documents",
    description: "Study historical religious documents and their context",
    path: "/studies/texts/historical"
  }
]

export default function TextsStudyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Religious Texts Studies"
          description="Explore sacred writings and religious texts from various traditions"
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {textCategories.map((category) => (
            <Card key={category.path} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <a 
                href={category.path}
                className="text-primary hover:underline"
              >
                Explore {category.title} →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
} 