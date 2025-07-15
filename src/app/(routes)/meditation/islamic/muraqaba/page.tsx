import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Muraqaba Meditation | Islamic Practice",
  description: "Learn about Muraqaba meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Muraqaba Meditation | Islamic Practice",
    description: "Comprehensive guide to Muraqaba meditation practice",
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
    title: "The Art of Muraqaba",
    description: "Comprehensive guide to Islamic contemplative practices by Sheikh Kabir Helminski.",
    type: "book",
    author: "Sheikh Kabir Helminski",
    publisher: "The Book Foundation",
    link: "https://www.amazon.com/Art-Muraqaba-Islamic-Contemplation/dp/1887752307",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$24.95",
    rating: 4.8,
    reviews: 1567
  },
  {
    title: "Principles of Islamic Spirituality",
    description: "In-depth exploration of Muraqaba and Sufi practices by Dr. Javad Nurbakhsh.",
    type: "book",
    author: "Dr. Javad Nurbakhsh",
    publisher: "Khaniqahi Nimatullahi Publications",
    link: "https://www.amazon.com/Principles-Islamic-Spirituality-Sufism-Practice/dp/0933546688",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$22.95",
    rating: 4.7,
    reviews: 923
  },
  {
    title: "Muraqaba Meditation Fundamentals",
    description: "Online course covering the basics of Muraqaba meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/muraqaba-meditation",
    price: "$49.99/month"
  },
  {
    title: "Muraqaba Timer",
    description: "Digital tool for practicing Muraqaba meditation with guided sessions.",
    type: "tool",
    link: "https://muraqabatimer.com"
  },
  {
    title: "Muraqaba Meditation Community",
    description: "Online community for Muraqaba meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.muraqabameditation.org/community"
  }
]

export default function MuraqabaMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Muraqaba Meditation</h1>
        <p className="text-xl mb-4">
          Discover Muraqaba meditation, a profound Islamic practice of contemplation and spiritual vigilance that cultivates inner awareness and divine presence. This comprehensive guide explores the techniques, principles, and practical applications of Muraqaba meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Muraqaba meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Muhasaba (Self-Examination)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Regular practice of self-examination and spiritual accounting.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Mushahada (Witnessing)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Developing the capacity for spiritual witnessing and presence.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tawajjuh (Attention)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Cultivating focused attention and spiritual concentration.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Yaqin (Certainty)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Developing spiritual certainty through direct experience.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Muraqaba meditation practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Muraqaba meditation practice.</p>
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
            <p className="text-slate-600">Connect with other Muraqaba meditation practitioners.</p>
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Islamic Meditation Practices</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/meditation/islamic/dhikr" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Dhikr Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Dhikr meditation and its practice of divine remembrance.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/islamic/sufi" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Sufi Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the mystical practices of Sufi meditation traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 