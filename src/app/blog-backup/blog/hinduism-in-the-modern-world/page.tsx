import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hinduism in the Modern World: Reform, Diaspora & Contemporary Issues | Religious Studies Blog",
  description: "Explore Hindu reform movements (Brahmo Samaj, Arya Samaj), the global Hindu diaspora, and contemporary issues including social justice, identity, environmental concerns, and interfaith dialogue in the modern world.",
  openGraph: {
    title: "Hinduism in the Modern World: Reform, Diaspora & Contemporary Issues | Religious Studies Blog",
    description: "An overview of modern Hinduism, focusing on significant reform movements, the experiences of the global diaspora, and engagement with contemporary social, ethical, and global issues.",
    type: "article",
    images: [
      {
        url: "/images/hinduism-modern-world.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Hinduism Adapting in the Modern World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Hinduism: Reform Movements, Diaspora & Key Issues",
    description: "Learn about Hindu reform movements, the global diaspora, and how Hinduism addresses contemporary challenges and opportunities.",
    images: ["/images/hinduism-modern-world.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduismInTheModernWorldPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/religion/hinduism" className="hover:underline">
            Hinduism
          </Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Hinduism in the Modern World</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hinduism in the Modern World: Reform Movements, Diaspora, and Contemporary Issues
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Reform Movements</Badge>
            <Badge variant="secondary">Brahmo Samaj</Badge>
            <Badge variant="secondary">Arya Samaj</Badge>
            <Badge variant="secondary">Hindu Diaspora</Badge>
            <Badge variant="secondary">Social Justice</Badge>
            <Badge variant="secondary">Interfaith Dialogue</Badge>
            <Badge variant="secondary">Digital Dharma</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hinduism, a dynamic and ancient tradition, continues to evolve and adapt in the modern era. This exploration covers key reform
            movements that have shaped contemporary Hinduism, the experiences and impact of the global Hindu diaspora, and the ways
            Hindu thought and practice engage with pressing contemporary issues.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Reform Movements and Social Transformation</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  The 19th and 20th centuries witnessed significant reform movements within Hinduism, responding to internal social issues and external influences, aiming to revitalize and reinterpret traditions for the modern age.
                </p>
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Brahmo Samaj (founded 1828):</strong> Led by Raja Ram Mohan Roy, advocated for monotheism, social reforms like the abolition of Sati, opposed idol worship and caste discrimination, and promoted modern education.
                  </li>
                  <li>
                    <strong>Arya Samaj (founded 1875):</strong> Led by Swami Dayananda Saraswati, called for a return to the Vedas, rejected Puranic Hinduism and idol worship, emphasized social reform, education (especially for women), and opposed child marriage and caste rigidity.
                  </li>
                  <li>
                    <strong>Ramakrishna Mission (founded 1897):</strong> Inspired by Sri Ramakrishna and founded by Swami Vivekananda, emphasized the harmony of religions, selfless service (Seva), practical Vedanta, and educational and philanthropic work.
                  </li>
                  <li>
                    <strong>Other Reformers & Movements:</strong> Figures like Ishwar Chandra Vidyasagar (widow remarriage, women's education), and various regional movements contributed to social and religious reforms.
                  </li>
                  <li>
                    <strong>Ongoing Social Transformation:</strong> Contemporary efforts continue to address issues like gender equality, LGBTQ+ inclusion, caste-based discrimination, and access to religious leadership for all sections of society.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Global Hindu Diaspora</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  The Hindu diaspora, comprising millions worldwide, has established vibrant communities, contributing to cultural diversity and the global spread of Hindu thought while navigating challenges of adaptation and identity.
                </p>
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Migration Waves:</strong> From ancient trade routes to colonial-era indentured labor (e.g., Caribbean, Fiji, Mauritius) and post-colonial professional migration (e.g., North America, UK, Australia).
                  </li>
                  <li>
                    <strong>Community Building:</strong> Establishment of temples, cultural centers, and community organizations that serve as focal points for religious practice, cultural preservation, and social life.
                  </li>
                  <li>
                    <strong>Cultural Adaptation and Preservation:</strong> Balancing adherence to traditional practices with adaptation to new cultural contexts; efforts in language preservation, youth engagement, and transmission of values.
                  </li>
                  <li>
                    <strong>Contributions:</strong> Significant contributions to their host societies in various fields, and to the global understanding and practice of Hinduism (e.g., Yoga, Vedanta).
                  </li>
                  <li>
                    <strong>Challenges:</strong> Maintaining cultural identity, addressing intergenerational differences, combating misconceptions, and fostering community cohesion.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Engagement with Contemporary Issues</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  Hinduism engages with a wide range of modern challenges and opportunities, drawing upon its rich philosophical and ethical resources.
                </p>
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Social Justice:</strong> Applying principles of Dharma and equality to address issues like poverty, human rights, and discrimination. Debates continue on reconciling traditional social structures with modern egalitarian values.
                  </li>
                  <li>
                    <strong>Environmental Ethics:</strong> Hindu reverence for nature (Prakriti, Pancha Mahabhutas) informs perspectives on ecological sustainability, biodiversity conservation, and climate action.
                  </li>
                  <li>
                    <strong>Interfaith Dialogue:</strong> Emphasis on principles like "Ekam Sat Vipra Bahudha Vadanti" (Truth is one, sages call it by many names) fosters participation in interreligious understanding and collaboration.
                  </li>
                  <li>
                    <strong>Political Engagement:</strong> Varying degrees of political involvement by Hindu individuals and groups, navigating issues of secularism, religious freedom, and minority rights in diverse national contexts.
                  </li>
                  <li>
                    <strong>Identity and Globalization:</strong> Exploring Hindu identity in a globalized, multicultural world; challenges of cultural appropriation versus appreciation, and the representation of Hinduism in global media and academia.
                  </li>
                  <li>
                    <strong>Bioethics and Technology:</strong> Hindu perspectives on issues arising from scientific advancements, such as genetic engineering, artificial intelligence, and end-of-life care, drawing on concepts like Karma, Ahimsa, and the sanctity of life.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Technological Integration & Future Directions</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Digital Dharma:</strong> Leveraging technology for spiritual learning, online satsangs, virtual temple visits, and connecting global Hindu communities.
                  </li>
                  <li>
                    <strong>Spiritual Innovation:</strong> Development of new forms of spiritual expression and community engagement that resonate with modern sensibilities while rooted in tradition.
                  </li>
                  <li>
                    <strong>Educational Reform:</strong> Integrating Hindu wisdom and ethics into modern educational systems and curricula in a balanced and inclusive manner.
                  </li>
                  <li>
                    <strong>Cultural Preservation and Authentic Representation:</strong> Strategies for maintaining authentic traditions, scriptures, and practices while adapting to changing times and ensuring accurate representation.
                  </li>
                </ul>
              </Card>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/blog/hindu-diaspora" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Diaspora In-Depth</h3>
                    <p className="text-sm text-muted-foreground">Explore global Hindu communities.</p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Ethics</h3>
                    <p className="text-sm text-muted-foreground">Guiding principles for modern life.</p>
                  </Card>
                </Link>
                <Link href="/blog/hinduism-and-science" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hinduism & Science</h3>
                    <p className="text-sm text-muted-foreground">Dialogue between tradition and modernity.</p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore specific{" "}
                  <Link href="/hinduism/reform-movements/19th-century" className="hover:underline">
                    19th Century Reform Movements
                  </Link>
                  , understand the role of{" "}
                  <Link href="/hinduism/contemporary/social-justice-activism" className="hover:underline">
                    Social Justice Activism in Modern Hinduism
                  </Link>
                  , or learn about{" "}
                  <Link href="/hinduism/global/interfaith-initiatives" className="hover:underline">
                    Hindu Interfaith Initiatives Worldwide
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/diaspora/challenges-opportunities">Diaspora: Challenges & Opportunities</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/modern/environmental-activism">Hindu Environmental Activism</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </article>
  )
} 