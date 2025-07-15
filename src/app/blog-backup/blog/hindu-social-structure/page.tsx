import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hindu Social Structure: Varna, Jati, Ashramas & Gotra Explained | Religious Studies Blog",
  description: "Explore the traditional Hindu social framework: Varna (social classes), Jati (castes/sub-castes), Ashramas (four stages of life), and Gotra (lineage system). Understand their historical context, ideals, and evolution.",
  openGraph: {
    title: "Hindu Social Structure: Varna, Jati, Ashramas & Gotra Explained | Religious Studies Blog",
    description: "A detailed look at Hindu social organization including Varna, Jati, the four Ashramas (stages of life), and the Gotra system, examining their origins and significance.",
    type: "article",
    images: [
      {
        url: "/images/hindu-social-structure.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Elements of Hindu Social Structure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Hindu Social Structure: Varna, Jati, Ashramas, Gotra",
    description: "Delve into the complex systems of Varna, Jati, Ashramas (stages of life), and Gotra that have shaped Hindu society.",
    images: ["/images/hindu-social-structure.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduSocialStructurePage() {
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
          <span aria-current="page">Hindu Social Structure</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hindu Social Structure: Varna, Jati, Ashramas, and Gotra
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Varna</Badge>
            <Badge variant="secondary">Jati</Badge>
            <Badge variant="secondary">Ashrama</Badge>
            <Badge variant="secondary">Gotra</Badge>
            <Badge variant="secondary">Brahmacharya</Badge>
            <Badge variant="secondary">Grihastha</Badge>
            <Badge variant="secondary">Vanaprastha</Badge>
            <Badge variant="secondary">Sannyasa</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hindu social structure is a complex framework of traditional concepts that have organized society and individual
            life for millennia. Key among these are Varna (social classes), Jati (castes/sub-castes),
            Ashramas (stages of life), and Gotra (lineage). Understanding these requires acknowledging their ideal forms,
            historical applications, and ongoing evolution and critique.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="space-y-8">

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Varna System</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  The Varna system, first mentioned in the Purusha Sukta of the Rigveda, is a four-fold division of society based on
                  aptitude, qualities (Gunas), and occupation (Karma), rather than strictly by birth in its ideal conception.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Brahmins:</strong> Traditionally priests, scholars, teachers, and intellectuals; associated with Sattva Guna (purity, knowledge).</li>
                  <li><strong>Kshatriyas:</strong> Warriors, rulers, administrators, and protectors; associated with Rajas Guna (passion, dynamism).</li>
                  <li><strong>Vaishyas:</strong> Merchants, traders, farmers, and artisans; associated with a mix of Rajas and Tamas Guna (activity, inertia).</li>
                  <li><strong>Shudras:</strong> Laborers, service providers, and artisans; associated with Tamas Guna (inertia, materiality).</li>
                  <li><strong>Ideal vs. Reality:</strong> While idealized as a functional division, the Varna system historically became hereditary and hierarchical, leading to social stratification and discrimination.</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Jati System</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  Jati refers to the thousands of endogamous (marrying within the group) occupational and social groups, often
                  translated as "caste" or "sub-caste." It is a more complex and localized system than Varna.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Occupational Basis:</strong> Many Jatis were traditionally associated with specific occupations or crafts.</li>
                  <li><strong>Social Hierarchy:</strong> Jatis are often ranked hierarchically, with varying customs, traditions, and social statuses.</li>
                  <li><strong>Relationship with Varna:</strong> Jatis are often loosely grouped under the four Varnas, but the correlation is not always exact or universally accepted.</li>
                  <li><strong>Social Implications:</strong> The Jati system has been a source of social identity and cohesion but also of deep-rooted discrimination and inequality (e.g., issues related to "untouchability").</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Ashrama System (Stages of Life)</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  The Ashrama system outlines four ideal stages of life for an individual (traditionally for upper-caste males)
                  to progress through, each with specific duties and goals, aimed at fulfilling the Purusharthas.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Brahmacharya (Student Life):</strong> Typically from childhood to early adulthood; focus on education, discipline, character building, and spiritual learning under a Guru. Celibacy is key.</li>
                  <li><strong>Grihastha (Householder Life):</strong> Begins with marriage; focus on family responsibilities, pursuing Artha (wealth) and Kama (pleasure) within Dharma, supporting society, and performing rituals.</li>
                  <li><strong>Vanaprastha (Retired Life/Forest-Dweller):</strong> After fulfilling household duties, typically when grandchildren are born; gradual detachment from worldly affairs, more time for spiritual study and contemplation, often with a spouse.</li>
                  <li><strong>Sannyasa (Renunciate Life):</strong> Complete renunciation of worldly possessions and attachments; focus solely on spiritual practices and pursuit of Moksha (liberation).</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Gotra System</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  Gotra refers to a patrilineal lineage or clan, tracing descent from a common male ancestor, often a revered Vedic sage.
                  It plays a significant role in rituals and social identity, particularly in marriage.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Lineage Tracing:</strong> Identifies individuals as belonging to a specific ancestral line (e.g., Vashistha Gotra, Bharadwaja Gotra).</li>
                  <li><strong>Exogamy in Marriage:</strong> Traditionally, marriage within the same Gotra is prohibited (Sagotra Vivaha) to avoid marrying close relatives. This practice promotes genetic diversity.</li>
                  <li><strong>Ritual Significance:</strong> Gotra is often mentioned during religious ceremonies, rites of passage (Samskaras), and ancestral worship.</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Traditional Values & Social Evolution</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  The concepts of Dharma, family values (Kutumba), community service (Seva), and education have always been integral to Hindu social life, evolving alongside societal changes from Vedic times through medieval periods, colonial rule, and modern reforms led by figures like Raja Ram Mohan Roy and Mahatma Gandhi.
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Contemporary Relevance and Challenges</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  Today, Hindu social structures face challenges of social justice, caste-based discrimination, and evolving family dynamics. Efforts for equality, changing education and employment patterns, and the adaptation of traditions in a globalized Hindu diaspora reflect ongoing transformations.
                </p>
              </Card>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/blog/concepts-of-dharma-and-karma" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Dharma & Karma</h3>
                    <p className="text-sm text-muted-foreground">Underpinning social order.</p>
                  </Card>
                </Link>
                <Link href="/blog/the-four-purusharthas" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Four Purusharthas</h3>
                    <p className="text-sm text-muted-foreground">Goals achieved through Ashramas.</p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Ethics</h3>
                    <p className="text-sm text-muted-foreground">Moral basis of social conduct.</p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the{" "}
                  <Link href="/hinduism/texts/dharma-shastras-social-order" className="hover:underline">
                    Dharma Shastras on Social Order
                  </Link>
                  , understand the practical aspects of the{" "}
                  <Link href="/hinduism/living/ashrama-system-practice" className="hover:underline">
                    Ashrama System in Practice
                  </Link>
                  , or delve into the complexities of{" "}
                  <Link href="/hinduism/society/caste-system-history-issues" className="hover:underline">
                    Caste System: History and Modern Issues
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/society/gotra-exogamy">Gotra and Marriage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/reform-movements/social-change">Social Reform Movements</Link>
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