import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hinduism & Ecology: Sacred Nature, Environmental Ethics & Practices | Religious Studies Blog",
  description: "Explore Hindu perspectives on ecology: the sacredness of nature (Pancha Mahabhutas, sacred rivers/groves/animals), environmental ethics (Ahimsa, Vasudhaiva Kutumbakam), traditional conservation practices, and their relevance today.",
  openGraph: {
    title: "Hinduism & Ecology: Sacred Nature, Environmental Ethics & Practices | Religious Studies Blog",
    description: "A comprehensive look at Hinduism's deep connection with ecology, covering the sanctity of nature, ethical principles like Ahimsa, and traditional sustainable practices.",
    type: "article",
    images: [
      {
        url: "/images/hinduism-ecology.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Hinduism and Ecology: Sacredness of Nature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinduism & Ecology: Sacred Nature, Ethics & Sustainable Practices",
    description: "Discover Hindu teachings on the sacredness of nature, environmental ethics (Ahimsa), and traditional conservation methods.",
    images: ["/images/hinduism-ecology.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduismAndEcologyPage() {
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
          <span aria-current="page">Hinduism & Ecology</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hinduism and Ecology: Sacred Nature, Environmental Ethics, and Traditional Practices
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Pancha Mahabhutas</Badge>
            <Badge variant="secondary">Sacred Groves</Badge>
            <Badge variant="secondary">Ahimsa</Badge>
            <Badge variant="secondary">Vasudhaiva Kutumbakam</Badge>
            <Badge variant="secondary">Agroecology</Badge>
            <Badge variant="secondary">Chipko Movement</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hinduism fosters a deep reverence for nature, viewing the environment as sacred and interconnected with human life.
            This perspective is rooted in core philosophical concepts, ethical principles, and traditional practices that promote
            harmony with the natural world and offer valuable insights for contemporary environmental challenges.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Sacredness of Nature</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Pancha Mahabhutas:</strong> The five great elements—Prithvi (Earth), Apas/Jala (Water), Agni (Fire),
                    Vayu (Air), and Akasha (Ether/Space)—are considered the fundamental constituents of the universe and the
                    human body. Their purity and balance are essential for well-being.
                  </li>
                  <li>
                    <strong>Sacred Rivers:</strong> Rivers like the Ganga, Yamuna, Godavari, and Kaveri are revered as goddesses, symbolizing
                    life-giving and purifying forces. Their protection is a spiritual duty.
                  </li>
                  <li>
                    <strong>Sacred Groves (Dev Vana/Deorai):</strong> Patches of forest dedicated to deities or ancestral spirits, traditionally
                    protected from exploitation, thus preserving biodiversity.
                  </li>
                  <li>
                    <strong>Sacred Mountains and Trees:</strong> Mountains like the Himalayas are seen as abodes of gods. Trees like the Banyan,
                    Peepal (Ashvattha), and Tulsi (Holy Basil) are considered sacred and are objects of worship and protection.
                  </li>
                  <li>
                    <strong>Sacred Animals:</strong> Many animals are revered and associated with deities (e.g., the cow as Kamadhenu, the elephant with Ganesha, the monkey with Hanuman). This fosters compassion and discourages harm.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Environmental Ethics in Hinduism</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Ahimsa (Non-violence):</strong> A core ethical principle extending to all living beings and nature itself.
                    It encourages minimizing harm to the environment and its inhabitants.
                  </li>
                  <li>
                    <strong>Vasudhaiva Kutumbakam ("The world is one family"):</strong> This Maha Upanishad teaching promotes a sense of universal kinship,
                    implying a responsibility to care for all beings and the planet.
                  </li>
                  <li>
                    <strong>Dharma (Righteous Duty):</strong> Includes the duty to protect and preserve the natural order (Rta). Harming nature
                    is considered Adharma.
                  </li>
                  <li>
                    <strong>Interconnectedness:</strong> Hindu philosophy emphasizes the interdependence of all life forms and the environment.
                    What affects one part affects the whole.
                  </li>
                  <li>
                    <strong>Sustainable Living & Non-Possessiveness (Aparigraha):</strong> Teachings advocate for simple living, contentment with what is necessary, and avoiding greed and overconsumption of natural resources.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Traditional Ecological Practices</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Agroecology:</strong> Traditional farming methods often emphasized sustainability, crop rotation, organic fertilizers,
                    and respect for the land and its cycles.
                  </li>
                  <li>
                    <strong>Water Conservation:</strong> Ancient practices included building temple tanks (Kalyanis), step-wells (Baoris),
                    and traditional irrigation systems to manage water resources efficiently.
                  </li>
                  <li>
                    <strong>Forest Conservation:</strong> Besides sacred groves, traditional communities often had rules for sustainable harvesting
                    of forest produce.
                  </li>
                  <li>
                    <strong>Waste Management & Recycling:</strong> Principles of minimizing waste and utilizing resources fully were common in traditional lifestyles.
                  </li>
                  <li>
                    <strong>Respect for Biodiversity:</strong> Traditional knowledge systems often included deep understanding and respect for local flora and fauna.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Modern Relevance and Applications</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Environmental Movements:</strong> Hindu ecological principles have inspired modern conservation efforts, such as the Chipko Movement, which involved villagers hugging trees to prevent deforestation.
                  </li>
                  <li>
                    <strong>Climate Action:</strong> Traditional wisdom about respecting nature and sustainable living provides a framework for addressing climate change at individual and community levels.
                  </li>
                  <li>
                    <strong>Sustainable Development:</strong> Integrating Hindu environmental ethics into development policies can promote models that are ecologically sound and socially just.
                  </li>
                  <li>
                    <strong>Global Environmental Discourse:</strong> Hindu perspectives contribute to international discussions on environmental protection, biodiversity, and the ethical dimensions of human-nature relationship.
                  </li>
                </ul>
              </Card>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/blog/hindu-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Ethics</h3>
                    <p className="text-sm text-muted-foreground">Core principles like Ahimsa.</p>
                  </Card>
                </Link>
                <Link href="/blog/concepts-of-dharma-and-karma" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Dharma & Karma</h3>
                    <p className="text-sm text-muted-foreground">Duty towards nature.</p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-philosophy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Philosophy</h3>
                    <p className="text-sm text-muted-foreground">Interconnectedness of all beings.</p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the concept of the{" "}
                  <Link href="/hinduism/concepts/pancha-mahabhutas" className="hover:underline">
                    Pancha Mahabhutas in Depth
                  </Link>
                  , the role of{" "}
                  <Link href="/hinduism/ethics/ahimsa-environmentalism" className="hover:underline">
                    Ahimsa in Environmentalism
                  </Link>
                  , or learn about{" "}
                  <Link href="/hinduism/movements/eco-movements-india" className="hover:underline">
                    Modern Hindu Ecological Movements
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/texts/vedas-nature">Vedic Hymns on Nature</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/practices/sacred-plants-animals">Sacred Plants & Animals</Link>
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