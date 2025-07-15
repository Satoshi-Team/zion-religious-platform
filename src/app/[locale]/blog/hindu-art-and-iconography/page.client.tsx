import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Art and Iconography: Sacred Symbols and Visual Language | Religious Studies Blog",
  description: "Explore the rich tradition of Hindu art and iconography - from ancient sculptures to temple murals. Discover how these visual expressions embody spiritual concepts, divine attributes, and cosmic principles.",
  openGraph: {
    title: "Hindu Art and Iconography: Sacred Symbols and Visual Language | Religious Studies Blog",
    description: "Explore the rich tradition of Hindu art and iconography - from ancient sculptures to temple murals. Discover how these visual expressions embody spiritual concepts, divine attributes, and cosmic principles.",
    type: "article",
  },
}

export default function HinduArtAndIconographyPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>•</span>
          <Link href="/religion/hinduism" className="hover:underline">
            Hinduism
          </Link>
          <span>•</span>
          <span>Foundations</span>
        </div>

        <h1>Hindu Art and Iconography: Sacred Symbols and Visual Language</h1>

        <div className="space-y-6">
          <p>
            Hindu art and iconography form a profound visual language that expresses
            spiritual concepts, divine attributes, and cosmic principles. From
            ancient sculptures to temple murals, these artistic traditions serve as
            windows into the rich philosophical and theological dimensions of
            Hinduism.
          </p>

          <h2>Sacred Symbols</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Primary Symbols:</h3>
              <ul>
                <li>Om (Aum) - Cosmic Sound</li>
                <li>Swastika - Auspiciousness</li>
                <li>Lotus - Spiritual Purity</li>
                <li>Trishula - Divine Power</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Yantras and Mandalas:</h3>
              <ul>
                <li>Geometric Patterns</li>
                <li>Cosmic Diagrams</li>
                <li>Meditation Tools</li>
                <li>Sacred Architecture</li>
              </ul>
            </div>
          </div>

          <h2>Divine Forms</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Deity Representations:</h3>
              <ul>
                <li>Anthropomorphic Forms</li>
                <li>Symbolic Attributes</li>
                <li>Mudras and Postures</li>
                <li>Vahanas (Mounts)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Iconographic Elements:</h3>
              <ul>
                <li>Multiple Arms</li>
                <li>Divine Weapons</li>
                <li>Ornamentation</li>
                <li>Color Symbolism</li>
              </ul>
            </div>
          </div>

          <h2>Artistic Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Sculpture:</h3>
              <ul>
                <li>Temple Architecture</li>
                <li>Stone Carvings</li>
                <li>Bronze Casting</li>
                <li>Wood Carving</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Painting:</h3>
              <ul>
                <li>Miniature Art</li>
                <li>Temple Murals</li>
                <li>Folk Traditions</li>
                <li>Modern Expressions</li>
              </ul>
            </div>
          </div>

          <h2>Regional Styles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>North Indian Art:</h3>
              <ul>
                <li>Mathura School</li>
                <li>Kashmiri Style</li>
                <li>Rajasthani Miniatures</li>
                <li>Pahari Paintings</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>South Indian Art:</h3>
              <ul>
                <li>Chola Bronzes</li>
                <li>Hoysala Sculpture</li>
                <li>Vijayanagara Style</li>
                <li>Temple Murals</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/hindu-temples"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Hindu Temples</h3>
              <p className="text-sm text-muted-foreground">
                Sacred architecture and spaces
              </p>
            </Link>
            <Link
              href="/blog/hindu-rituals-and-worship"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Hindu Rituals</h3>
              <p className="text-sm text-muted-foreground">
                Sacred practices and traditions
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Hindu art and iconography through our
              comprehensive learning path in the{" "}
              <Link href="/religion/hinduism" className="hover:underline">
                Hinduism section
              </Link>
              . Compare and contrast with other religious traditions in our{" "}
              <Link href="/religion/comparative" className="hover:underline">
                Comparative Religion
              </Link>{" "}
              section.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 