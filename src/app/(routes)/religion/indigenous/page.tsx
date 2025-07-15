import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Indigenous Traditions | Religious Studies Portal",
  description: "Explore the diverse spiritual traditions, practices, and wisdom of Indigenous peoples worldwide"
}

export default function IndigenousTraditionsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Indigenous Traditions</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the diverse spiritual traditions, ecological wisdom, and cultural heritage of Indigenous peoples worldwide
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Note: These traditions are living, diverse, and complex. This overview is presented with respect 
            and acknowledgment of the unique nature of each tradition and the ongoing significance of 
            Indigenous spirituality in contemporary life.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Regional Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REGIONAL_TRADITIONS.map(region => (
            <Card key={region.path}>
              <CardHeader>
                <CardTitle>{region.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {region.traditions.map(tradition => (
                    <li key={tradition.path}>
                      <Link href={tradition.path} className="hover:underline">
                        {tradition.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={region.path}>Explore Region</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Themes</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {COMMON_THEMES.map(theme => (
            <Button key={theme.path} variant="outline" asChild className="h-auto py-6">
              <Link href={theme.path}>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold">{theme.name}</span>
                  <span className="text-sm text-muted-foreground">{theme.description}</span>
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sacred Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SACRED_PRACTICES.map(practice => (
            <Card key={practice.path}>
              <CardHeader>
                <CardTitle>{practice.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{practice.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={practice.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contemporary Issues</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONTEMPORARY_TOPICS.map(topic => (
            <Card key={topic.path}>
              <CardHeader>
                <CardTitle>{topic.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{topic.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={topic.path}>Explore Topic</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

const REGIONAL_TRADITIONS = [
  {
    name: "Americas",
    path: "/religion/indigenous/americas",
    traditions: [
      { name: "Native North American", path: "/religion/indigenous/americas/north" },
      { name: "Mesoamerican (Maya, Aztec)", path: "/religion/indigenous/americas/meso" },
      { name: "Andean (Inca)", path: "/religion/indigenous/americas/andean" },
      { name: "Amazon Basin", path: "/religion/indigenous/americas/amazon" }
    ]
  },
  {
    name: "Oceania",
    path: "/religion/indigenous/oceania",
    traditions: [
      { name: "Aboriginal Australian", path: "/religion/indigenous/oceania/aboriginal" },
      { name: "Māori", path: "/religion/indigenous/oceania/maori" },
      { name: "Pacific Islander", path: "/religion/indigenous/oceania/pacific" },
      { name: "Melanesian", path: "/religion/indigenous/oceania/melanesian" }
    ]
  },
  {
    name: "Africa",
    path: "/religion/indigenous/africa",
    traditions: [
      { name: "West African", path: "/religion/indigenous/africa/west" },
      { name: "East African", path: "/religion/indigenous/africa/east" },
      { name: "Southern African", path: "/religion/indigenous/africa/south" },
      { name: "Central African", path: "/religion/indigenous/africa/central" }
    ]
  },
  {
    name: "Asia",
    path: "/religion/indigenous/asia",
    traditions: [
      { name: "Siberian", path: "/religion/indigenous/asia/siberian" },
      { name: "Ainu", path: "/religion/indigenous/asia/ainu" },
      { name: "Himalayan", path: "/religion/indigenous/asia/himalayan" },
      { name: "Southeast Asian", path: "/religion/indigenous/asia/southeast" }
    ]
  },
  {
    name: "Arctic",
    path: "/religion/indigenous/arctic",
    traditions: [
      { name: "Inuit", path: "/religion/indigenous/arctic/inuit" },
      { name: "Sámi", path: "/religion/indigenous/arctic/sami" },
      { name: "Siberian Peoples", path: "/religion/indigenous/arctic/siberian" }
    ]
  }
]

const COMMON_THEMES = [
  {
    name: "Sacred Land",
    path: "/religion/indigenous/themes/sacred-land",
    description: "Connection to territory and place"
  },
  {
    name: "Ancestral Wisdom",
    path: "/religion/indigenous/themes/ancestors",
    description: "Relationship with ancestors"
  },
  {
    name: "Natural Cycles",
    path: "/religion/indigenous/themes/cycles",
    description: "Seasonal and celestial knowledge"
  },
  {
    name: "Community Life",
    path: "/religion/indigenous/themes/community",
    description: "Social and spiritual bonds"
  }
]

const SACRED_PRACTICES = [
  {
    name: "Ceremonies & Rituals",
    path: "/religion/indigenous/practices/ceremonies",
    description: "Traditional ceremonies, rites of passage, and seasonal celebrations"
  },
  {
    name: "Healing Traditions",
    path: "/religion/indigenous/practices/healing",
    description: "Traditional medicine, spiritual healing, and wellness practices"
  },
  {
    name: "Oral Traditions",
    path: "/religion/indigenous/practices/oral",
    description: "Stories, songs, and transmission of knowledge"
  },
  {
    name: "Sacred Arts",
    path: "/religion/indigenous/practices/arts",
    description: "Traditional art, music, dance, and material culture"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Cultural Preservation",
    path: "/religion/indigenous/contemporary/preservation",
    description: "Efforts to maintain and revitalize traditional practices"
  },
  {
    name: "Environmental Wisdom",
    path: "/religion/indigenous/contemporary/environment",
    description: "Traditional ecological knowledge and conservation"
  },
  {
    name: "Sacred Sites",
    path: "/religion/indigenous/contemporary/sites",
    description: "Protection and preservation of sacred places"
  },
  {
    name: "Modern Practice",
    path: "/religion/indigenous/contemporary/modern",
    description: "Contemporary expression of traditional spirituality"
  },
  {
    name: "Indigenous Rights",
    path: "/religion/indigenous/contemporary/rights",
    description: "Religious freedom and cultural sovereignty"
  }
] 