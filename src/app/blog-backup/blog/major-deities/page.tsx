import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Major Hindu Deities: Brahma, Vishnu, Shiva, Devi, Ganesha & Hanuman | Religious Studies Blog",
  description: "Explore the Hindu pantheon: Trimurti (Brahma, Vishnu, Shiva), Devi (Durga, Kali, Lakshmi, Saraswati), Ganesha, Hanuman, and their symbolism, attributes, and significance in worship and philosophy.",
  openGraph: {
    title: "Major Hindu Deities: Brahma, Vishnu, Shiva, Devi, Ganesha & Hanuman | Religious Studies Blog",
    description: "A comprehensive guide to the primary deities in Hinduism, including the Trimurti, various forms of the Goddess (Devi), Ganesha, Hanuman, and their roles and importance.",
    type: "article",
    images: [
      {
        url: "/images/major-hindu-deities.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Major Hindu Deities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Major Hindu Deities: Brahma, Vishnu, Shiva, Devi, Ganesha & Hanuman",
    description: "Explore the Hindu pantheon: Trimurti, Devi (Durga, Kali, Lakshmi, Saraswati), Ganesha, Hanuman, and their significance.",
    images: ["/images/major-hindu-deities.jpg"], // Placeholder - ensure image exists
  },
}

export default function MajorDeitiesPage() {
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
          <span aria-current="page">Major Deities</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Major Hindu Deities and Their Significance
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Trimurti</Badge>
            <Badge variant="secondary">Devi</Badge>
            <Badge variant="secondary">Ganesha</Badge>
            <Badge variant="secondary">Hanuman</Badge>
            <Badge variant="secondary">Hindu Pantheon</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Hindu pantheon is vast and diverse, featuring a multitude of deities (Devas and Devis) who represent
            various aspects of the one ultimate reality, Brahman. Understanding these deities, their symbolism, and
            their stories is key to comprehending Hindu philosophy, worship, and cultural practices.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Trimurti: The Divine Trinity
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Brahma: The Creator</h3>
                    <p className="mt-2 text-sm">
                      Represents the creative aspect of Brahman. Often depicted with four heads (symbolizing the four
                      Vedas) and four arms. His consort is Saraswati, the goddess of knowledge. Worship of Brahma is
                      less common compared to Vishnu and Shiva.
                    </p>
                    <ul className="mt-2 text-xs">
                      <li><strong>Attributes:</strong> Creation, knowledge, Vedas.</li>
                      <li><strong>Symbolism:</strong> Lotus, rosary, water pot, scriptures.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Vishnu: The Preserver</h3>
                    <p className="mt-2 text-sm">
                      Represents the sustaining and protective aspect of Brahman. He maintains cosmic order (Dharma)
                      and is believed to incarnate (avatars) in times of crisis. His consort is Lakshmi, the goddess
                      of wealth and prosperity.
                    </p>
                    <ul className="mt-2 text-xs">
                      <li><strong>Attributes:</strong> Preservation, order, righteousness, grace.</li>
                      <li><strong>Symbolism:</strong> Conch, discus, mace, lotus; often depicted reclining on the serpent Ananta.</li>
                      <li><strong>Avatars:</strong> Rama, Krishna are among his most popular incarnations.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Shiva: The Destroyer & Transformer</h3>
                    <p className="mt-2 text-sm">
                      Represents the destructive and transformative aspect of Brahman, leading to regeneration. He is
                      also the supreme ascetic, the lord of dance (Nataraja), and a compassionate deity. His consort is
                      Parvati (Devi).
                    </p>
                    <ul className="mt-2 text-xs">
                      <li><strong>Attributes:</strong> Destruction, transformation, asceticism, meditation, cosmic dance.</li>
                      <li><strong>Symbolism:</strong> Trishula (trident), Damaru (drum), crescent moon, serpent Vasuki, Nandi (bull).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Devi: The Divine Feminine (The Goddess)
                </h2>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  The Goddess, or Devi, is worshipped in numerous forms, representing the dynamic energy (Shakti) of the
                  universe. She is both a compassionate mother and a fierce protector.
                </p>
                <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h3 className="text-lg font-medium">Durga</h3>
                    <p className="mt-2 text-sm">
                      A powerful warrior goddess, created to combat demons. She symbolizes protection, strength, and
                      the victory of good over evil. Often depicted riding a lion or tiger, with multiple arms
                      wielding various weapons.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Kali</h3>
                    <p className="mt-2 text-sm">
                      A fierce and formidable aspect of Devi, associated with time, change, and destruction of ego and
                      negativity. Though fearsome in appearance, she is also a compassionate mother to her devotees,
                      granting liberation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Lakshmi</h3>
                    <p className="mt-2 text-sm">
                      Goddess of wealth, prosperity, fortune, and beauty. Consort of Vishnu. Worshipped for material
                      well-being and spiritual abundance. Often depicted with lotus flowers and gold coins.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Saraswati</h3>
                    <p className="mt-2 text-sm">
                      Goddess of knowledge, music, arts, wisdom, and learning. Consort of Brahma. Worshipped by
                      students, scholars, and artists. Often depicted with a veena (musical instrument), scriptures,
                      and a swan or peacock.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Other Prominent Deities
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Ganesha</h3>
                    <p className="mt-2 text-sm">
                      The elephant-headed god, son of Shiva and Parvati. Revered as the remover of obstacles, god of
                      beginnings, wisdom, and intellect. Worshipped at the start of any new venture or ritual.
                    </p>
                    <ul className="mt-2 text-xs">
                      <li><strong>Attributes:</strong> Wisdom, intellect, remover of obstacles, good fortune.</li>
                      <li><strong>Symbolism:</strong> Elephant head, large belly, broken tusk, mouse (vahana).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Hanuman</h3>
                    <p className="mt-2 text-sm">
                      The mighty ape-god, a central figure in the Ramayana, renowned for his unwavering devotion (bhakti)
                      to Lord Rama, strength, courage, and selfless service.
                    </p>
                    <ul className="mt-2 text-xs">
                      <li><strong>Attributes:</strong> Devotion, strength, courage, loyalty, selfless service.</li>
                      <li><strong>Symbolism:</strong> Mace, depicted flying or carrying a mountain.</li>
                    </ul>
                  </div>
                  {/* Indra could be added here if desired, as per original code, but content-modules.txt doesn't list him explicitly */}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Significance and Worship
                </h2>
                <Separator className="my-4" />
                <p className="text-sm">
                  The worship of these deities involves various rituals (puja), chanting of mantras, meditation, and
                  celebration of festivals. Each deity offers a unique path to understanding the divine and achieving
                  spiritual goals. The concept of Ishta-devata (chosen deity) allows for a personalized approach to
                  devotion, where an individual can focus on a particular form of God that resonates with them.
                </p>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/avatars-of-vishnu" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Avatars of Vishnu</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore the divine incarnations of Lord Vishnu.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-rituals-and-worship" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Rituals and Worship</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about sacred practices and ceremonies.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your understanding of the{" "}
                  <Link href="/hinduism/deities/trimurti" className="hover:underline">
                    Trimurti
                  </Link>
                  , the various forms of{" "}
                  <Link href="/hinduism/deities/devi" className="hover:underline">
                    Devi (the Goddess)
                  </Link>
                  , or learn more about specific deities like{" "}
                  <Link href="/hinduism/deities/ganesha" className="hover:underline">
                    Ganesha
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/hinduism/pantheon">Hindu Pantheon Overview</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/concepts/ishta-devata">Ishta-Devata (Chosen Deity)</Link>
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