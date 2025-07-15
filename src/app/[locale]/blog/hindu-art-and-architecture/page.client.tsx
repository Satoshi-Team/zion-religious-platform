import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Art and Architecture: Sacred Expressions of Divine Beauty",
  description: "Explore the profound artistic and architectural traditions of Hinduism - from ancient temple designs to sacred iconography. Discover how these visual expressions embody divine principles and spiritual wisdom.",
  openGraph: {
    title: "Hindu Art and Architecture: Sacred Expressions of Divine Beauty",
    description: "Explore the profound artistic and architectural traditions of Hinduism - from ancient temple designs to sacred iconography. Discover how these visual expressions embody divine principles and spiritual wisdom.",
    type: "article",
  },
}

export default function HinduArtAndArchitecturePage() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
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
            <li>Hindu Art and Architecture: Sacred Expressions of Divine Beauty</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Art and Architecture: Sacred Expressions of Divine Beauty</h1>
          
          <section>
            <h2>Temple Architecture</h2>
            <ul>
              <li>
                <strong>Nagara Style:</strong> The northern temple architecture, characterized by curvilinear spires (shikharas), as exemplified in the Khajuraho temples and documented in the Shilpa Shastras
              </li>
              <li>
                <strong>Dravida Style:</strong> The southern temple architecture, featuring pyramidal towers (vimanas), as seen in the Brihadeeswara Temple and described in the Agama texts
              </li>
              <li>
                <strong>Vesara Style:</strong> The hybrid architecture of central India, combining elements of both Nagara and Dravida styles, as preserved in the temples of Karnataka
              </li>
              <li>
                <strong>Kalinga Style:</strong> The distinctive architecture of Odisha, known for its intricate carvings and unique tower design, as exemplified in the Sun Temple at Konark
              </li>
            </ul>
          </section>

          <section>
            <h2>Sacred Iconography</h2>
            <ul>
              <li>
                <strong>Murti Making:</strong> The sacred art of creating divine images, as detailed in the Shilpa Shastras and Agama texts, following precise measurements and proportions
              </li>
              <li>
                <strong>Symbolic Elements:</strong> The rich symbolism in Hindu art, from the lotus representing purity to the chakra symbolizing cosmic order, as documented in the Puranas
              </li>
              <li>
                <strong>Mudras and Postures:</strong> The symbolic hand gestures and body positions in divine images, conveying specific spiritual meanings and divine attributes
              </li>
              <li>
                <strong>Vahanas and Attributes:</strong> The divine vehicles and symbolic objects associated with deities, as described in the Agama texts and Puranic literature
              </li>
            </ul>
          </section>

          <section>
            <h2>Artistic Traditions</h2>
            <ul>
              <li>
                <strong>Mural Paintings:</strong> The ancient tradition of temple wall paintings, as preserved in the Ajanta caves and described in the Chitrasutra
              </li>
              <li>
                <strong>Sculpture:</strong> The three-dimensional art forms, from rock-cut temples to bronze casting, as documented in the Shilpa Shastras
              </li>
              <li>
                <strong>Miniature Paintings:</strong> The intricate art of detailed illustrations, as developed in various regional schools like Pahari and Rajasthani
              </li>
              <li>
                <strong>Textile Arts:</strong> The sacred traditions of temple textiles and religious motifs in fabric, as preserved in temple traditions
              </li>
            </ul>
          </section>

          <section>
            <h2>Spiritual Significance</h2>
            <ul>
              <li>
                <strong>Vastu Shastra:</strong> The ancient science of architecture and design, as expounded in the Vastu Shastras, ensuring harmony between built spaces and cosmic energies
              </li>
              <li>
                <strong>Sacred Geometry:</strong> The mathematical principles underlying temple design, as detailed in the Shulba Sutras and Agama texts
              </li>
              <li>
                <strong>Cosmic Symbolism:</strong> The representation of cosmic principles in art and architecture, as described in the Puranas and Tantric texts
              </li>
              <li>
                <strong>Devotional Expression:</strong> The role of art in facilitating divine connection and spiritual experience, as emphasized in the Bhakti tradition
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-rituals" className="hover:underline">
                  Hindu Rituals: Sacred Practices and Ceremonies
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-music-and-dance" className="hover:underline">
                  Hindu Music and Dance: Sacred Arts and Devotional Expressions
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-philosophy" className="hover:underline">
                  Hindu Philosophy: Schools and Thought
                </Link>
              </li>
            </ul>
          </section>

          {/* Further Study */}
          <section>
            <h2>Further Study</h2>
            <ul>
              <li>
                <Link href="/religion/hinduism" className="hover:underline">
                  Hinduism Learning Path
                </Link>
              </li>
              <li>
                <Link href="/religion/comparative" className="hover:underline">
                  Comparative Religion
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
} 