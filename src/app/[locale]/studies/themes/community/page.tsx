import React from 'react'
import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  title: "Religious Communities Studies | Faith Groups and Social Structures",
  description: "Study religious communities, social structures, and group dynamics in faith traditions. Explore congregations, monasticism, leadership, and community practices.",
  openGraph: {
    title: "Religious Communities Studies | Faith Groups and Social Structures",
    description: "Study religious communities, social structures, and group dynamics in faith traditions. Explore congregations, monasticism, leadership, and community practices.",
    type: "website",
    images: [{ url: "/images/og/studies-themes-community.jpg" }],
  },
  keywords: [
    "religious communities",
    "faith groups",
    "congregations",
    "monasticism",
    "religious leadership",
    "community practices",
    "social structures",
    "religious organizations",
    "spiritual communities",
    "religious institutions"
  ]
}

interface CommunityThemeCategory {
  title: string
  description: string
  path: string
}

const communityCategories: CommunityThemeCategory[] = [
  {
    title: "Congregational Life",
    description: "Study religious congregations and community gatherings",
    path: "/studies/themes/community/congregations"
  },
  {
    title: "Leadership and Authority",
    description: "Explore religious leadership roles and authority structures",
    path: "/studies/themes/community/leadership"
  },
  {
    title: "Monastic Communities",
    description: "Learn about monastic traditions and religious orders",
    path: "/studies/themes/community/monastic"
  },
  {
    title: "Social Organization",
    description: "Study religious social structures and community organization",
    path: "/studies/themes/community/organization"
  }
]

export default function CommunityThemePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Religious Communities Studies"
          description="Explore religious communities and social structures across traditions"
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {communityCategories.map((category) => (
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