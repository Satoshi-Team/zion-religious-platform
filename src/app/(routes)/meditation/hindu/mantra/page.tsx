import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mantra Meditation | Hindu Practice",
  description: "Learn about Mantra meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Mantra Meditation | Hindu Practice",
    description: "Comprehensive guide to Mantra meditation practice",
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
    title: "The Power of Mantra",
    description: "Comprehensive guide to Mantra meditation by Thomas Ashley-Farrand.",
    type: "book",
    author: "Thomas Ashley-Farrand",
    publisher: "Ballantine Books",
    link: "https://www.amazon.com/Healing-Mantras-Using-Sound-Affirmations/dp/0345432316",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.7,
    reviews: 1234
  },
  {
    title: "Mantra Meditation Made Simple",
    description: "Practical guide to Mantra meditation by Swami Sivananda.",
    type: "book",
    author: "Swami Sivananda",
    publisher: "Divine Life Society",
    link: "https://www.amazon.com/Japa-Meditation-Guide-Mantra-Practice/dp/8170521796",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$14.95",
    rating: 4.6,
    reviews: 876
  },
  {
    title: "Mantra Meditation Fundamentals",
    description: "Online course covering the basics of Mantra meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/mantra-meditation",
    price: "$49.99/month"
  },
  {
    title: "Mantra Timer",
    description: "Digital tool for practicing Mantra meditation with guided sessions.",
    type: "tool",
    link: "https://mantratimer.com"
  },
  {
    title: "Mantra Meditation Community",
    description: "Online community for Mantra meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.mantrameditation.org/community"
  }
]

export default function MantraMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Mantra Meditation</h1>
        <p className="text-xl mb-4">
          Explore Mantra meditation, an ancient Hindu practice that uses sacred sounds and vibrations to focus the mind and connect with divine consciousness. This comprehensive guide covers the techniques, principles, and practical applications of Mantra meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Mantra meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Mantra Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Choosing appropriate mantras for your practice and spiritual goals.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Japa (Repetition)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Regular repetition of mantras to purify the mind and heart.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Dhyana (Meditation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Deep meditation on the meaning and vibration of the mantra.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Samadhi (Union)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete absorption in the divine consciousness through mantra.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Mantra meditation practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Mantra meditation practice.</p>
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
            <p className="text-slate-600">Connect with other Mantra meditation practitioners.</p>
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Hindu Meditation Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/hindu/yoga" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Yoga Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Yoga meditation and its focus on physical postures and breath control.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/hindu/vedanta" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Vedanta Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Vedanta meditation and its emphasis on self-inquiry and wisdom.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 