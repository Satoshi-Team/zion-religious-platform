import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hindu Cosmology & Time Cycles: Yugas, Kalpas, and Cosmic Creation | Religious Studies Blog",
  description: "Delve into Hindu cosmology, exploring vast time cycles (Yugas, Kalpas), the process of cosmic creation (Srishti) and dissolution (Pralaya), and the concept of Brahman as the ultimate reality. Understand how these concepts shape the Hindu worldview.",
  openGraph: {
    title: "Hindu Cosmology & Time Cycles: Yugas, Kalpas, and Cosmic Creation | Religious Studies Blog",
    description: "A comprehensive exploration of Hindu cosmological concepts, including the cyclical nature of time (Yugas, Manvantaras, Kalpas), the creation and dissolution of universes, and their philosophical implications.",
    type: "article",
    images: [
      {
        url: "/images/hindu-cosmology.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Hindu Cosmic Cycles and Yugas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindu Cosmology & Time Cycles: Yugas, Kalpas, and Cosmic Creation",
    description: "Explore the vast time cycles (Yugas, Kalpas) and cosmic creation narratives within Hindu cosmology.",
    images: ["/images/hindu-cosmology.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduCosmologyPage() {
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
          <span aria-current="page">Hindu Cosmology</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hindu Cosmology and Time Cycles
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Yugas</Badge>
            <Badge variant="secondary">Kalpa</Badge>
            <Badge variant="secondary">Pralaya</Badge>
            <Badge variant="secondary">Srishti</Badge>
            <Badge variant="secondary">Brahman</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hindu cosmology presents a breathtakingly vast and cyclical understanding of time, space,
            and existence. It describes immense epochs of creation, sustenance, and dissolution, governed by divine principles
            and offering profound insights into the nature of reality and the journey of the soul.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Units of Cosmic Time</h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Micro and Macro Measures</h3>
                    <ul className="mt-2">
                      <li><strong>Nimesha:</strong> The smallest unit, a blink of an eye.</li>
                      <li><strong>Kshana:</strong> A moment.</li>
                      <li><strong>Muhurta:</strong> Approximately 48 minutes.</li>
                      <li><strong>Chatur Yuga / Maha Yuga:</strong> A cycle of four ages (4.32 million human years).</li>
                      <li><strong>Manvantara:</strong> A period ruled by a Manu (71 Maha Yugas).</li>
                      <li><strong>Kalpa (Day of Brahma):</strong> 1,000 Maha Yugas (4.32 billion human years), representing one day in the life of Brahma, the creator god. A night of Brahma is of equal length.</li>
                      <li><strong>Life of Brahma:</strong> Brahma lives for 100 divine years, each composed of 360 such days and nights.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">The Concept of Cyclical Time</h3>
                    <p className="mt-2">
                      Unlike linear conceptions of time, Hindu cosmology views time as cyclical, with endless repetitions of creation and dissolution. This reflects the eternal nature of Brahman, the ultimate reality.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Four Yugas (Ages of a Maha Yuga)</h2>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Each Maha Yuga is divided into four Yugas, characterized by a progressive decline in Dharma (righteousness), virtue, wisdom, and human lifespan.
                </p>
                <div className="grid gap-6 mt-4 sm:grid-cols-1 md:grid-cols-2">
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">1. Satya Yuga (Krita Yuga - Golden Age)</h3>
                    <Badge variant="outline">Duration: 1,728,000 human years</Badge>
                    <ul className="mt-2 text-sm">
                      <li>Dharma prevails completely (four pillars: austerity, purity, compassion, truth).</li>
                      <li>Humans are virtuous, wise, and long-lived.</li>
                      <li>No widespread disease, conflict, or malevolence.</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">2. Treta Yuga (Silver Age)</h3>
                    <Badge variant="outline">Duration: 1,296,000 human years</Badge>
                    <ul className="mt-2 text-sm">
                      <li>Dharma reduced by one-fourth (three pillars remain).</li>
                      <li>Virtue and piety begin to decline.</li>
                      <li>Rise of sacrifices and rituals to attain desires.</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">3. Dvapara Yuga (Bronze Age)</h3>
                    <Badge variant="outline">Duration: 864,000 human years</Badge>
                    <ul className="mt-2 text-sm">
                      <li>Dharma further reduced by half (two pillars remain).</li>
                      <li>Increased disease, discontent, and falsehood.</li>
                      <li>Vedas are divided; scriptures become more complex.</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">4. Kali Yuga (Iron Age - Current Age)</h3>
                    <Badge variant="outline">Duration: 432,000 human years</Badge>
                    <ul className="mt-2 text-sm">
                      <li>Dharma reduced to one-fourth (one pillar: truth, albeit diminished).</li>
                      <li>Characterized by strife, ignorance, materialism, and spiritual decline.</li>
                      <li>Short lifespans, widespread suffering.</li>
                      <li>However, liberation is considered easier to attain through devotion.</li>
                    </ul>
                  </Card>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Cosmic Cycles: Srishti (Creation) and Pralaya (Dissolution)</h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Srishti (Creation)</h3>
                    <p className="mt-2">
                      At the beginning of each Kalpa (Brahma's day), creation emanates from Brahman, the ultimate source. Brahma, as the instrumental creator, brings forth the universe and its beings according to cosmic laws and karmic imprints from previous cycles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Pralaya (Dissolution)</h3>
                    <p className="mt-2">
                      At the end of Brahma's day (Naimittika Pralaya), the three worlds (earth, atmosphere, heavens) are dissolved. At the end of Brahma's life (Prakritika Pralaya), the entire cosmos, including Brahma himself, merges back into the unmanifest Brahman, awaiting a new cycle of creation.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li><strong>Types of Pralaya:</strong> Nitya (constant individual), Naimittika (occasional, end of Brahma's day), Prakritika (elemental, end of Brahma's life), Atyantika (absolute, individual liberation).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Philosophical Implications
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Understanding Existence</h3>
                    <ul className="mt-2">
                      <li>The vastness of cosmic time relativizes human concerns.</li>
                      <li>Emphasizes the impermanence of the material world.</li>
                      <li>Highlights the cyclical nature of existence, driven by Karma.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Spiritual Goal: Moksha</h3>
                    <ul className="mt-2">
                      <li>The ultimate aim is Moksha (liberation) from the cycle of Samsara (birth and rebirth).</li>
                      <li>Understanding cosmic cycles can inspire detachment and focus on spiritual pursuits.</li>
                      <li>Divine grace and intervention (Avatars) play a role in guiding souls.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/avatars-of-vishnu" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Avatars of Vishnu</h3>
                    <p className="text-sm text-muted-foreground">
                      Divine incarnations appearing across different Yugas.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-philosophy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Philosophy</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore concepts like Brahman, Atman, Karma, and Moksha.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the concept of the{" "}
                  <Link href="/hinduism/concepts/yugas" className="hover:underline">
                    Yugas in detail
                  </Link>
                  , understand the nature of{" "}
                  <Link href="/hinduism/concepts/brahman" className="hover:underline">
                    Brahman (The Ultimate Reality)
                  </Link>
                  , or delve into the process of{" "}
                  <Link href="/hinduism/concepts/pralaya" className="hover:underline">
                    Pralaya (Cosmic Dissolution)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/texts/puranas">The Puranas</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/concepts/karma-samsara">Karma and Samsara</Link>
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