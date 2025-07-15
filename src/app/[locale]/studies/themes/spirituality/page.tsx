import React from 'react'
import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  title: "Spirituality Studies | Religious Experience and Practice",
  description: "Explore spiritual practices, mystical experiences, and religious consciousness across faith traditions. Study meditation, prayer, contemplation, and spiritual development.",
  openGraph: {
    title: "Spirituality Studies | Religious Experience and Practice",
    description: "Explore spiritual practices, mystical experiences, and religious consciousness across faith traditions. Study meditation, prayer, contemplation, and spiritual development.",
    type: "website",
    images: [{ url: "/images/og/studies-themes-spirituality.jpg" }],
  },
  keywords: [
    "spirituality",
    "religious experience",
    "mysticism",
    "meditation",
    "prayer",
    "contemplation",
    "spiritual practices",
    "religious consciousness",
    "spiritual development",
    "mystical traditions"
  ]
}

interface SpiritualityThemeCategory {
  title: string
  description: string
  path: string
}

const spiritualityCategories: SpiritualityThemeCategory[] = [
  {
    title: "Mystical Experience",
    description: "Study mystical experiences and religious consciousness",
    path: "/studies/themes/spirituality/mysticism"
  },
  {
    title: "Spiritual Practices",
    description: "Explore meditation, prayer, and contemplative techniques",
    path: "/studies/themes/spirituality/practices"
  },
  {
    title: "Personal Development",
    description: "Learn about spiritual growth and transformation",
    path: "/studies/themes/spirituality/development"
  },
  {
    title: "Religious Experience",
    description: "Study the nature and varieties of religious experience",
    path: "/studies/themes/spirituality/experience"
  }
]

export default function SpiritualityThemePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Spirituality Studies"
          description="Explore spiritual practices and religious experiences across traditions"
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {spiritualityCategories.map((category) => (
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