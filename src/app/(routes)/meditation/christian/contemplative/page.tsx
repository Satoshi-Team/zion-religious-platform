import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Contemplative Prayer | Christian Practice",
  description: "Learn about Christian contemplative prayer, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Contemplative Prayer | Christian Practice",
    description: "Comprehensive guide to Christian contemplative prayer practice",
    type: "website",
  },
}

interface Resource {
  title: string
  description: string
  type: "book" | "course" | "tool" | "community"
  link: string
  affiliateLink?: string
  author?: string
  publisher?: string
  price?: string
  rating?: number
  reviews?: number
}

const resources: Resource[] = [
  {
    title: "The Cloud of Unknowing",
    description: "Classic text on contemplative prayer from the Christian mystical tradition.",
    type: "book",
    author: "Anonymous",
    publisher: "Image",
    link: "https://www.amazon.com/Cloud-Unknowing-Contemplative-Classics/dp/0385029758",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$14.99",
    rating: 4.8,
    reviews: 1234
  },
  {
    title: "Open Mind, Open Heart",
    description: "Contemporary guide to contemplative prayer by Thomas Keating.",
    type: "book",
    author: "Thomas Keating",
    publisher: "Continuum",
    link: "https://www.amazon.com/Open-Mind-Heart-Contemplative-Dimension/dp/0826416588",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.7,
    reviews: 856
  },
  {
    title: "Contemplative Prayer Fundamentals",
    description: "Online course covering the basics of contemplative prayer practice.",
    type: "course",
    link: "https://www.coursera.org/learn/contemplative-prayer",
    price: "$49.99/month"
  },
  {
    title: "Prayer Timer",
    description: "Simple prayer timer app with Christian contemplative design.",
    type: "tool",
    link: "https://prayertimer.com"
  },
  {
    title: "Contemplative Prayer Community",
    description: "Online community for contemplative prayer practitioners to share experiences.",
    type: "community",
    link: "https://www.contemplativeoutreach.org/community"
  }
]

export default function ContemplativePrayerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Contemplative Prayer</h1>
        <p className="text-xl mb-4">
          Discover the practice of contemplative prayer, a deep form of Christian prayer that emphasizes silent communion with God. This comprehensive guide explores the techniques, principles, and practical applications of contemplative prayer in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of contemplative prayer.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Silent Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Resting in God's presence without words or thoughts.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Sacred Word</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Using a sacred word or phrase to return to God's presence.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Letting Go</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Releasing thoughts and distractions to rest in God.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your contemplative prayer practice.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "book")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    {resource.author && (
                      <p className="text-sm text-slate-500">By {resource.author}</p>
                    )}
                    {resource.publisher && (
                      <p className="text-sm text-slate-500">Published by {resource.publisher}</p>
                    )}
                    {resource.price && (
                      <p className="text-sm font-medium mt-2">{resource.price}</p>
                    )}
                    {resource.rating && (
                      <p className="text-sm text-slate-500">
                        {resource.rating} ★ ({resource.reviews} reviews)
                      </p>
                    )}
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.affiliateLink || resource.link}>
                        Get it on Amazon
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Tools</h2>
            <p className="text-slate-600">Digital tools and apps to support your contemplative prayer practice.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "tool")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Communities</h2>
            <p className="text-slate-600">Connect with other contemplative prayer practitioners.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "community")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.link}>
                        Join Community
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Christian Prayer Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/christian/lectio-divina" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Lectio Divina</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about sacred reading and its focus on divine encounter through scripture.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/christian/centering" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Centering Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore centering prayer and its emphasis on resting in God's presence.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 