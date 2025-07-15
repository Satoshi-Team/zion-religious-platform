import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Dhikr Meditation | Islamic Practice",
  description: "Learn about Dhikr meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Dhikr Meditation | Islamic Practice",
    description: "Comprehensive guide to Dhikr meditation practice",
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
    title: "The Book of Remembrance",
    description: "Comprehensive guide to Dhikr practices in Islam by Imam Al-Ghazali.",
    type: "book",
    author: "Imam Al-Ghazali",
    publisher: "Islamic Texts Society",
    link: "https://www.amazon.com/Book-Remembrance-Dhikr-Imam-Ghazali/dp/0946621136",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$24.95",
    rating: 4.8,
    reviews: 1234
  },
  {
    title: "The Path of Dhikr",
    description: "Practical guide to Dhikr meditation by Sheikh Hamza Yusuf.",
    type: "book",
    author: "Sheikh Hamza Yusuf",
    publisher: "Sandala Press",
    link: "https://www.amazon.com/Path-Dhikr-Practical-Guide-Remembrance/dp/1935952753",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$19.95",
    rating: 4.7,
    reviews: 856
  },
  {
    title: "Dhikr Meditation Fundamentals",
    description: "Online course covering the basics of Dhikr meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/dhikr-meditation",
    price: "$49.99/month"
  },
  {
    title: "Dhikr Timer",
    description: "Digital tool for practicing Dhikr meditation with guided sessions.",
    type: "tool",
    link: "https://dhikrtimer.com"
  },
  {
    title: "Dhikr Meditation Community",
    description: "Online community for Dhikr meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.dhikrmeditation.org/community"
  }
]

export default function DhikrMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Dhikr Meditation</h1>
        <p className="text-xl mb-4">
          Discover Dhikr meditation, an Islamic practice of remembrance and mindfulness that strengthens one's connection with Allah. This comprehensive guide explores the techniques, principles, and practical applications of Dhikr meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Dhikr meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tasbih (Glorification)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Regular glorification of Allah through specific phrases.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tahmid (Praise)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Expressing gratitude and praise to Allah.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tahlil (Oneness)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Affirming the oneness of Allah through meditation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Takbir (Greatness)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Recognizing and contemplating Allah's greatness.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Dhikr meditation practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Dhikr meditation practice.</p>
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
            <p className="text-slate-600">Connect with other Dhikr meditation practitioners.</p>
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
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/islamic/muraqaba" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Muraqaba Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Muraqaba meditation and its focus on mindfulness and self-awareness.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/islamic/sufi" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Sufi Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Sufi meditation and its emphasis on spiritual purification and divine love.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 