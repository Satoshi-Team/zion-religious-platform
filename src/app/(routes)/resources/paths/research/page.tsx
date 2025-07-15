import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Research Path | Religious Studies",
  description: "Advanced research resources and academic materials for religious studies scholars and researchers.",
  openGraph: {
    title: "Research Path | Religious Studies",
    description: "Comprehensive research resources for religious studies scholars",
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
    title: "The Oxford Handbook of Religious Studies",
    description: "A comprehensive reference work covering major approaches and methodologies in religious studies.",
    type: "book",
    author: "John R. Hinnells",
    publisher: "Oxford University Press",
    link: "https://www.amazon.com/Oxford-Handbook-Religious-Studies-Handbooks/dp/0199244413",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$49.95",
    rating: 4.5,
    reviews: 12
  },
  {
    title: "Research Methods in Religious Studies",
    description: "A practical guide to conducting research in religious studies, including qualitative and quantitative methods.",
    type: "book",
    author: "Russell T. McCutcheon",
    publisher: "Equinox Publishing",
    link: "https://www.amazon.com/Research-Methods-Religious-Studies-McCutcheon/dp/1845530165",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$34.95",
    rating: 4.2,
    reviews: 8
  },
  {
    title: "Academic Writing for Religious Studies",
    description: "Learn advanced academic writing techniques specific to religious studies research.",
    type: "course",
    link: "https://www.coursera.org/learn/academic-writing-religious-studies",
    price: "$49.99/month"
  },
  {
    title: "Zotero",
    description: "Free research management tool for collecting, organizing, and citing sources.",
    type: "tool",
    link: "https://www.zotero.org"
  },
  {
    title: "Religious Studies Research Network",
    description: "Online community for religious studies researchers to share resources and collaborate.",
    type: "community",
    link: "https://www.religiousstudies.net"
  },
  {
    title: "The Cambridge Companion to Religious Studies",
    description: "An authoritative guide to the field of religious studies and its key debates.",
    type: "book",
    author: "Robert A. Orsi",
    publisher: "Cambridge University Press",
    link: "https://www.amazon.com/Cambridge-Companion-Religious-Studies-Companions/dp/0521615352",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$32.99",
    rating: 4.7,
    reviews: 15
  },
  {
    title: "Research Design in Religious Studies",
    description: "Learn how to design and implement research projects in religious studies.",
    type: "course",
    link: "https://www.coursera.org/learn/research-design-religious-studies",
    price: "$49.99/month"
  },
  {
    title: "EndNote",
    description: "Professional reference management software for academic research.",
    type: "tool",
    link: "https://endnote.com",
    price: "$249.99"
  },
  {
    title: "Society for the Scientific Study of Religion",
    description: "Professional association for researchers in religious studies.",
    type: "community",
    link: "https://www.sssrweb.org"
  }
]

export default function ResearchPathPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Research Path</h1>
        <p className="text-xl mb-4">
          Advanced research resources and academic materials for religious studies scholars and researchers. This path provides comprehensive tools, courses, and communities for conducting academic research in religious studies.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Research Methodology</h2>
            <p className="text-slate-600">Essential resources for understanding and applying research methods in religious studies.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "book" && resource.title.toLowerCase().includes("method"))
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
            <h2 className="text-3xl font-bold">Research Tools</h2>
            <p className="text-slate-600">Essential software and platforms for academic research.</p>
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
                    {resource.price && (
                      <p className="text-sm font-medium mt-2">{resource.price}</p>
                    )}
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
            <h2 className="text-3xl font-bold">Research Communities</h2>
            <p className="text-slate-600">Connect with other researchers and scholars in religious studies.</p>
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

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Research Courses</h2>
            <p className="text-slate-600">Online courses to enhance your research skills.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "course")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    {resource.price && (
                      <p className="text-sm font-medium mt-2">{resource.price}</p>
                    )}
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.link}>
                        Enroll Now
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Learning Paths</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/resources/paths/beginner" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Beginner Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Start your journey in religious studies with foundational concepts and resources.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resources/paths/intermediate" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Intermediate Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Deepen your understanding with more advanced concepts and practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resources/paths/advanced" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Advanced Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master complex theological concepts and advanced practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 