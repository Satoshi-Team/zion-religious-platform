import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Art: Expressions of Divine Beauty",
  description: "Explore the rich visual language of Hindu art - from ancient cave paintings to contemporary expressions. Discover how sacred iconography, temple sculptures, and devotional art convey profound spiritual truths and cultural heritage.",
  openGraph: {
    title: "Hindu Art: Expressions of Divine Beauty",
    description: "Explore the rich visual language of Hindu art - from ancient cave paintings to contemporary expressions. Discover how sacred iconography, temple sculptures, and devotional art convey profound spiritual truths and cultural heritage.",
    type: "article",
  },
}

export default function HinduArtPage() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li>Hindu Art</li>
          </ol>
        </nav>
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <h1>Hindu Art: Expressions of Divine Beauty</h1>

        <section>
          <h2>Sacred Iconography</h2>
          <h3>Divine Forms</h3>
          <ul>
            <li>Trimurti representations</li>
            <li>Devi manifestations</li>
            <li>Avatar depictions</li>
            <li>Cosmic symbolism</li>
          </ul>

          <h3>Symbolic Elements</h3>
          <ul>
            <li>Sacred geometry</li>
            <li>Mudras and gestures</li>
            <li>Vahanas and attributes</li>
            <li>Cosmic elements</li>
          </ul>

          <h3>Visual Narratives</h3>
          <ul>
            <li>Mythological scenes</li>
            <li>Epic depictions</li>
            <li>Devotional stories</li>
            <li>Historical events</li>
          </ul>
        </section>

        <section>
          <h2>Artistic Traditions</h2>
          <h3>Ancient Period</h3>
          <ul>
            <li>Indus Valley artifacts</li>
            <li>Mauryan sculptures</li>
            <li>Gupta masterpieces</li>
            <li>Early temple art</li>
          </ul>

          <h3>Medieval Development</h3>
          <ul>
            <li>Regional styles</li>
            <li>Temple architecture</li>
            <li>Miniature paintings</li>
            <li>Textile arts</li>
          </ul>

          <h3>Modern Expressions</h3>
          <ul>
            <li>Contemporary adaptations</li>
            <li>Digital art forms</li>
            <li>Global influences</li>
            <li>Cultural fusion</li>
          </ul>
        </section>

        <section>
          <h2>Artistic Media</h2>
          <h3>Sculpture</h3>
          <ul>
            <li>Stone carvings</li>
            <li>Bronze casting</li>
            <li>Wood carving</li>
            <li>Terracotta work</li>
          </ul>

          <h3>Painting</h3>
          <ul>
            <li>Fresco techniques</li>
            <li>Miniature styles</li>
            <li>Folk traditions</li>
            <li>Modern media</li>
          </ul>

          <h3>Architecture</h3>
          <ul>
            <li>Temple design</li>
            <li>Sacred geometry</li>
            <li>Ornamental elements</li>
            <li>Space symbolism</li>
          </ul>
        </section>

        <section>
          <h2>Cultural Significance</h2>
          <h3>Spiritual Expression</h3>
          <ul>
            <li>Devotional art</li>
            <li>Meditation aids</li>
            <li>Ritual objects</li>
            <li>Sacred spaces</li>
          </ul>

          <h3>Educational Role</h3>
          <ul>
            <li>Visual storytelling</li>
            <li>Moral teachings</li>
            <li>Historical records</li>
            <li>Cultural transmission</li>
          </ul>

          <h3>Contemporary Impact</h3>
          <ul>
            <li>Cultural preservation</li>
            <li>Global appreciation</li>
            <li>Artistic innovation</li>
            <li>Interfaith dialogue</li>
          </ul>
        </section>

        <section>
          <h2>Related Topics</h2>
          <ul>
            <li>
              <Link href="/blog/hindu-temples">
                Hindu Temples
              </Link>
            </li>
            <li>
              <Link href="/blog/hindu-rituals">
                Hindu Rituals
              </Link>
            </li>
            <li>
              <Link href="/blog/hindu-festivals">
                Hindu Festivals
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Further Study</h2>
          <p>
            Continue your exploration of Hinduism through our comprehensive learning
            paths. Discover more about Hindu philosophy, practices, and their global
            impact in our Hinduism section, or explore comparative perspectives in
            our Comparative Religion section.
          </p>
        </section>
      </div>
    </article>
  )
} 