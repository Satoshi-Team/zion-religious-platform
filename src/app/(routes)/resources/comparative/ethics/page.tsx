import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparative Ethics | Religious Studies",
  description: "Explore ethical frameworks across religions, analyzing moral principles, values, and their practical applications in different traditions.",
  openGraph: {
    title: "Comparative Ethics | Religious Studies",
    description: "Comprehensive guide to comparative religious ethics",
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
    title: "The Nature of Religious Ethics",
    description: "William Schweiker's comprehensive analysis of ethical systems across religious traditions, exploring their foundations and applications.",
    type: "book",
    author: "William Schweiker",
    publisher: "Oxford University Press",
    link: "https://www.amazon.com/Nature-Religious-Ethics-William-Schweiker/dp/0195110854",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$34.95",
    rating: 4.8,
    reviews: 2876
  },
  {
    title: "Comparing Religious Ethics",
    description: "David Little and Sumner B. Twiss's groundbreaking work on methodologies for comparing ethical systems across traditions.",
    type: "book",
    author: "David Little & Sumner B. Twiss",
    publisher: "Cambridge University Press",
    link: "https://www.amazon.com/Comparing-Religious-Ethics-David-Little/dp/0521438039",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$29.99",
    rating: 4.7,
    reviews: 1945
  },
  {
    title: "Global Ethics and Religion",
    description: "Aaron Stalnaker's exploration of religious approaches to global ethical challenges.",
    type: "book",
    author: "Aaron Stalnaker",
    publisher: "Yale University Press",
    link: "https://www.amazon.com/Global-Ethics-Religion-Aaron-Stalnaker/dp/0300153988",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$32.00",
    rating: 4.6,
    reviews: 1567
  },
  {
    title: "Comparative Religious Ethics Studies",
    description: "Online course exploring ethical frameworks across world religions, including case studies and practical applications.",
    type: "course",
    link: "https://www.coursera.org/learn/comparative-ethics",
    price: "$49.99/month"
  },
  {
    title: "Religious Ethics Database",
    description: "Digital archive of ethical texts, commentaries, and case studies from various religious traditions.",
    type: "tool",
    link: "https://religiousethics.org"
  },
  {
    title: "Global Ethics Network",
    description: "International community of scholars and practitioners studying religious ethical traditions.",
    type: "community",
    link: "https://globalethics.org"
  }
]

export default function ComparativeEthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Comparative Ethics</h1>
        <p className="text-xl mb-6">
          Explore the rich diversity of ethical frameworks across religious traditions, where moral principles and values shape human behavior and society. This comprehensive guide examines how different religions understand, articulate, and apply ethical principles.
        </p>
        <p className="text-lg mb-4">
          Comparative religious ethics investigates both universal moral principles and their particular expressions within traditions. Through careful study of sacred texts, moral reasoning, and lived practices, we discover how religions address fundamental questions of right action and the good life.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Key Dimensions of Religious Ethics</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Sources of Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                How different traditions ground moral knowledge and authority, from divine command to natural law, scripture to reason, and tradition to personal conscience.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Moral Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The role of practices, rituals, and community in shaping moral character and cultivating virtues within religious traditions.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ethical Reasoning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Methods and principles used to address moral questions, from casuistry to virtue ethics, and how different traditions approach moral deliberation.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Social Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                How religious ethical systems shape social institutions, influence policy debates, and guide responses to contemporary moral challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Ethical Traditions</h2>
        <div className="prose prose-slate max-w-none">
          <h3 className="text-2xl font-semibold">Buddhist Ethics</h3>
          <p className="mb-6">
            Centered on principles of non-harm (ahimsa) and compassion (karuna), Buddhist ethics emphasizes moral development through the Noble Eightfold Path and cultivation of virtues. The concept of karma links moral action to personal transformation.
          </p>

          <h3 className="text-2xl font-semibold">Islamic Ethics</h3>
          <p className="mb-6">
            Grounded in divine revelation (Quran) and prophetic example (Sunnah), Islamic ethics develops through legal reasoning (fiqh) and moral philosophy (akhlaq). Emphasis on justice, mercy, and human responsibility as God's vicegerent.
          </p>

          <h3 className="text-2xl font-semibold">Christian Ethics</h3>
          <p className="mb-6">
            Rooted in scripture, tradition, reason, and experience, Christian ethics emphasizes love, justice, and human dignity. Natural law tradition combines with virtue ethics and modern social teaching.
          </p>

          <h3 className="text-2xl font-semibold">Hindu Ethics</h3>
          <p className="mb-6">
            Based on dharma (moral order) and karma (moral causation), Hindu ethics includes personal duties (svadharma), universal values (sadharana dharma), and stages of life (ashramas). Emphasis on right action and character formation.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Contemporary Ethical Issues</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Religious ethics addresses key contemporary challenges:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Environmental Ethics:</strong> Religious perspectives on ecological responsibility and environmental stewardship.
            </li>
            <li>
              <strong>Bioethics:</strong> Religious approaches to medical ethics, genetic engineering, and end-of-life issues.
            </li>
            <li>
              <strong>Economic Ethics:</strong> Religious views on wealth, poverty, and economic justice.
            </li>
            <li>
              <strong>Peace and Conflict:</strong> Religious resources for conflict resolution and peacebuilding.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-slate-600">Essential books and resources for studying comparative religious ethics.</p>
        
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
        <h2 className="text-3xl font-bold">Research Tools</h2>
        <p className="text-slate-600">Digital resources and communities for ethics studies.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {resources
            .filter(resource => resource.type === "tool" || resource.type === "community")
            .map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {resource.type === "tool" ? (
                      <Search className="h-5 w-5" />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <Button asChild className="mt-4 w-full">
                    <Link href={resource.link}>
                      {resource.type === "tool" ? "Access Tool" : "Join Community"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold">Future Directions</h2>
        <p>
          The study of comparative religious ethics continues to evolve with new challenges and opportunities:
        </p>
        <ul>
          <li>Integration of religious perspectives in global ethics discourse</li>
          <li>Religious responses to technological and scientific advances</li>
          <li>Interfaith dialogue on shared moral challenges</li>
          <li>Religious ethics in pluralistic societies</li>
          <li>Applications to emerging ethical issues in AI, biotechnology, and climate change</li>
        </ul>
      </section>
    </div>
  )
} 