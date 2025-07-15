import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Women in Hinduism: Divine Feminine and Social Evolution",
  description: "Explore the profound role of women in Hinduism - from the divine feminine to social reformers. Discover how women have shaped Hindu philosophy, spirituality, and social progress throughout history.",
  openGraph: {
    title: "Women in Hinduism: Divine Feminine and Social Evolution",
    description: "Explore the profound role of women in Hinduism - from the divine feminine to social reformers. Discover how women have shaped Hindu philosophy, spirituality, and social progress throughout history.",
    type: "article",
  },
}

export default function WomenInHinduismPage() {
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
            <li>Women in Hinduism: Divine Feminine and Social Evolution</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Women in Hinduism: Divine Feminine and Social Evolution</h1>
          
          <section>
            <h2>Divine Feminine</h2>
            <ul>
              <li>
                <strong>Devi Mahatmya:</strong> The celebration of the Divine Mother, as documented in the Markandeya Purana and Devi Bhagavata Purana
              </li>
              <li>
                <strong>Shakti Tradition:</strong> The worship of divine feminine energy, as described in the Tantras and practiced in Shakta traditions
              </li>
              <li>
                <strong>Goddess Forms:</strong> The manifestations of the divine feminine, as detailed in the Puranas and celebrated in temple traditions
              </li>
              <li>
                <strong>Sacred Feminine:</strong> The concept of Prakriti (nature) as feminine, as expounded in the Samkhya philosophy and Upanishads
              </li>
            </ul>
          </section>

          <section>
            <h2>Historical Figures</h2>
            <ul>
              <li>
                <strong>Vedic Scholars:</strong> Women sages like Gargi and Maitreyi, as mentioned in the Brihadaranyaka Upanishad and other Vedic texts
              </li>
              <li>
                <strong>Bhakti Saints:</strong> Devotional poets like Mirabai and Andal, as documented in their compositions and hagiographies
              </li>
              <li>
                <strong>Social Reformers:</strong> Pioneers like Savitribai Phule and Pandita Ramabai, as chronicled in historical records
              </li>
              <li>
                <strong>Spiritual Leaders:</strong> Modern gurus like Amma and Anandamayi Ma, as evidenced in their teachings and charitable works
              </li>
            </ul>
          </section>

          <section>
            <h2>Social Evolution</h2>
            <ul>
              <li>
                <strong>Vedic Period:</strong> The role of women in early Vedic society, as described in the Rig Veda and other Vedic texts
              </li>
              <li>
                <strong>Medieval Period:</strong> The development of women's roles, as documented in the Dharma Shastras and historical records
              </li>
              <li>
                <strong>Colonial Era:</strong> The impact of social reform movements, as evidenced in the works of reformers and colonial archives
              </li>
              <li>
                <strong>Modern Times:</strong> The contemporary status of women, as reflected in social studies and demographic data
              </li>
            </ul>
          </section>

          <section>
            <h2>Contemporary Contributions</h2>
            <ul>
              <li>
                <strong>Spiritual Leadership:</strong> Women's roles in modern spiritual organizations, as demonstrated in various ashrams and temples
              </li>
              <li>
                <strong>Academic Excellence:</strong> Contributions to Hindu studies and philosophy, as seen in university faculties and research
              </li>
              <li>
                <strong>Social Service:</strong> Leadership in charitable organizations, as documented in community service records
              </li>
              <li>
                <strong>Cultural Preservation:</strong> Efforts in maintaining and promoting Hindu traditions, as evidenced in cultural programs
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-philosophy" className="hover:underline">
                  Hindu Philosophy: Schools and Thought
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-social-structure" className="hover:underline">
                  Hindu Social Structure and Values: Dharma in Practice
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-ethics" className="hover:underline">
                  Hindu Ethics: Principles and Applications
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