import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  title: "Sacred Space in Religious Studies | Holy Places and Spatial Concepts",
  description: "Explore concepts of sacred space, holy places, and religious architecture across traditions. Study temples, churches, mosques, and other sacred sites.",
  openGraph: {
    title: "Sacred Space in Religious Studies | Holy Places and Spatial Concepts",
    description: "Explore concepts of sacred space, holy places, and religious architecture across traditions. Study temples, churches, mosques, and other sacred sites.",
    type: "website",
    images: [{ url: "/images/og/studies-themes-space.jpg" }],
  },
  keywords: [
    "sacred space",
    "holy places",
    "religious architecture",
    "sacred sites",
    "temples",
    "churches",
    "mosques",
    "religious geography",
    "sacred landscape",
    "pilgrimage sites"
  ]
}

interface SpaceThemeCategory {
  title: string
  description: string
  path: string
}

const spaceCategories: SpaceThemeCategory[] = [
  {
    title: "Sacred Architecture",
    description: "Study religious buildings, temples, and sacred structures",
    path: "/studies/themes/space/architecture"
  },
  {
    title: "Holy Sites",
    description: "Explore sacred places and pilgrimage destinations",
    path: "/studies/themes/space/sites"
  },
  {
    title: "Sacred Geography",
    description: "Learn about religious landscapes and sacred territories",
    path: "/studies/themes/space/geography"
  },
  {
    title: "Symbolic Spaces",
    description: "Study symbolic and cosmological spaces in religion",
    path: "/studies/themes/space/symbolic"
  }
]

export default function SpaceThemePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Sacred Space Studies"
          description="Explore concepts of sacred space and holy places across traditions"
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {spaceCategories.map((category) => (
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