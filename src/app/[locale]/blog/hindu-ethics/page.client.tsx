import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Ethics: Principles and Applications - Living Dharma in Modern Times",
  description: "Explore the profound ethical framework of Hinduism - from the principles of Dharma and Karma to their practical applications in daily life. Discover how these timeless values guide moral conduct and spiritual growth.",
  openGraph: {
    title: "Hindu Ethics: Principles and Applications - Living Dharma in Modern Times",
    description: "Explore the profound ethical framework of Hinduism - from the principles of Dharma and Karma to their practical applications in daily life. Discover how these timeless values guide moral conduct and spiritual growth.",
    type: "article",
  },
}

export default function HinduEthicsPage() {
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
            <li>Hindu Ethics: Principles and Applications - Living Dharma in Modern Times</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Ethics: Principles and Applications - Living Dharma in Modern Times</h1>
          
          <section>
            <h2>Foundational Principles</h2>
            <ul>
              <li>
                <strong>Dharma:</strong> The cosmic law of righteousness, as expounded in the Dharma Shastras, Manu Smriti, and Yajnavalkya Smriti, guiding moral conduct and social harmony
              </li>
              <li>
                <strong>Karma:</strong> The law of action and consequence, as detailed in the Bhagavad Gita and Upanishads, emphasizing personal responsibility and moral accountability
              </li>
              <li>
                <strong>Ahimsa:</strong> The principle of non-violence, as taught in the Yoga Sutras and practiced by spiritual leaders throughout history
              </li>
              <li>
                <strong>Satya:</strong> The virtue of truthfulness, as emphasized in the Mahabharata and various ethical treatises
              </li>
            </ul>
          </section>

          <section>
            <h2>Ethical Frameworks</h2>
            <ul>
              <li>
                <strong>Purusharthas:</strong> The four goals of human life - Dharma (duty), Artha (wealth), Kama (pleasure), and Moksha (liberation), as outlined in the Dharma Shastras
              </li>
              <li>
                <strong>Yamas and Niyamas:</strong> The ethical restraints and observances, as codified in Patanjali's Yoga Sutras and elaborated in various commentaries
              </li>
              <li>
                <strong>Varnashrama Dharma:</strong> The duties according to stage of life and social role, as described in the Dharma Shastras and Bhagavad Gita
              </li>
              <li>
                <strong>Pancha Maha Yajnas:</strong> The five great sacrifices, as prescribed in the Taittiriya Aranyaka and other Vedic texts
              </li>
            </ul>
          </section>

          <section>
            <h2>Moral Virtues</h2>
            <ul>
              <li>
                <strong>Daya (Compassion):</strong> The virtue of empathy and kindness, as exemplified in the Ramayana and teachings of various saints
              </li>
              <li>
                <strong>Dana (Charity):</strong> The practice of selfless giving, as detailed in the Bhagavata Purana and various Dharma Shastras
              </li>
              <li>
                <strong>Kshama (Forgiveness):</strong> The quality of forbearance, as demonstrated in the Mahabharata and teachings of spiritual masters
              </li>
              <li>
                <strong>Shanti (Peace):</strong> The state of inner tranquility, as described in the Upanishads and Yoga texts
              </li>
            </ul>
          </section>

          <section>
            <h2>Contemporary Applications</h2>
            <ul>
              <li>
                <strong>Environmental Ethics:</strong> The application of Dharma in ecological conservation, as evidenced in traditional practices and modern environmental movements
              </li>
              <li>
                <strong>Social Justice:</strong> The principles of equality and human dignity, as interpreted by modern reformers and social activists
              </li>
              <li>
                <strong>Business Ethics:</strong> The integration of Dharma in corporate governance and economic activities, as demonstrated in various business models
              </li>
              <li>
                <strong>Global Ethics:</strong> The contribution of Hindu ethical principles to international discourse on human rights and peace
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-philosophy" className="hover:underline">
                  Hindu Philosophy: Schools and Thought - Ancient Wisdom for Modern Understanding
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-social-structure" className="hover:underline">
                  Hindu Social Structure and Values: Dharma in Practice
                </Link>
              </li>
              <li>
                <Link href="/blog/hinduism-and-ecology" className="hover:underline">
                  Hinduism and Ecology: Sacred Nature and Environmental Ethics
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