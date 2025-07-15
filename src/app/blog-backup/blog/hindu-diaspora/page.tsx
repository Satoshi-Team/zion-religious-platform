import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Diaspora and Global Presence: Tradition Meets Modernity",
  description: "Explore the global journey of Hinduism - from ancient trade routes to modern diaspora communities. Discover how Hindu traditions have adapted and flourished across continents while maintaining their spiritual essence.",
  openGraph: {
    title: "Hindu Diaspora and Global Presence: Tradition Meets Modernity",
    description: "Explore the global journey of Hinduism - from ancient trade routes to modern diaspora communities. Discover how Hindu traditions have adapted and flourished across continents while maintaining their spiritual essence.",
    type: "article",
  },
}

export default function HinduDiasporaPage() {
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
            <li>Hindu Diaspora and Global Presence: Tradition Meets Modernity</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Diaspora and Global Presence: Tradition Meets Modernity</h1>
          
          <section>
            <h2>Historical Migration</h2>
            <ul>
              <li>
                <strong>Ancient Trade Routes:</strong> The spread of Hindu culture through maritime trade, as documented in the Periplus of the Erythraean Sea and ancient Sanskrit texts
              </li>
              <li>
                <strong>Colonial Period:</strong> The migration of indentured laborers, as recorded in colonial archives and preserved in oral histories
              </li>
              <li>
                <strong>Modern Migration:</strong> The professional diaspora movement, as evidenced in contemporary demographic studies and immigration records
              </li>
              <li>
                <strong>Cultural Exchange:</strong> The influence of Hindu thought on global philosophy, as seen in the works of Western scholars and Eastern wisdom traditions
              </li>
            </ul>
          </section>

          <section>
            <h2>Global Communities</h2>
            <ul>
              <li>
                <strong>North America:</strong> The establishment of temples and cultural centers, as documented in the Hindu American Foundation archives
              </li>
              <li>
                <strong>United Kingdom:</strong> The development of Hindu communities, as chronicled in the Hindu Forum of Britain records
              </li>
              <li>
                <strong>Southeast Asia:</strong> The preservation of ancient Hindu traditions, as evidenced in temple architecture and cultural practices
              </li>
              <li>
                <strong>Caribbean:</strong> The adaptation of Hindu practices, as preserved in local traditions and documented in academic studies
              </li>
            </ul>
          </section>

          <section>
            <h2>Cultural Adaptation</h2>
            <ul>
              <li>
                <strong>Temple Architecture:</strong> The evolution of temple design, as seen in modern structures like the BAPS Shri Swaminarayan Mandir
              </li>
              <li>
                <strong>Festival Celebrations:</strong> The adaptation of traditional festivals, as documented in community records and cultural studies
              </li>
              <li>
                <strong>Language Preservation:</strong> The maintenance of Sanskrit and regional languages, as supported by educational institutions
              </li>
              <li>
                <strong>Youth Engagement:</strong> The development of modern approaches to tradition, as evidenced in youth organizations and cultural programs
              </li>
            </ul>
          </section>

          <section>
            <h2>Contemporary Impact</h2>
            <ul>
              <li>
                <strong>Interfaith Dialogue:</strong> The contribution to global religious understanding, as demonstrated in international conferences
              </li>
              <li>
                <strong>Cultural Diplomacy:</strong> The role in fostering international relations, as evidenced in cultural exchange programs
              </li>
              <li>
                <strong>Social Service:</strong> The establishment of charitable organizations, as documented in community service records
              </li>
              <li>
                <strong>Educational Initiatives:</strong> The development of Hindu studies programs, as seen in university curricula worldwide
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-festivals" className="hover:underline">
                  Hindu Festivals and Celebrations: Sacred Time and Community
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-social-structure" className="hover:underline">
                  Hindu Social Structure and Values: Dharma in Practice
                </Link>
              </li>
              <li>
                <Link href="/blog/hinduism-and-ecology" className="hover:underline">
                  Hinduism and Ecology: Environmental Ethics and Practices
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