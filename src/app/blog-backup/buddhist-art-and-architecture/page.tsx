import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Art and Architecture | Religious Studies Blog",
  description: "Explore the rich traditions of Buddhist art and architecture across Asia. Learn about stupas, temples, sculptures, paintings, and their symbolic meanings in Buddhist culture.",
  openGraph: {
    title: "Buddhist Art and Architecture | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist artistic and architectural traditions",
    type: "article",
  },
}

export default function BuddhistArtPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>•</span>
          <Link href="/religion/buddhism" className="hover:underline">
            Buddhism
          </Link>
          <span>•</span>
          <span>Art & Architecture</span>
        </div>

        <h1>Buddhist Art and Architecture: Sacred Expressions of Dharma</h1>

        <div className="space-y-6">
          <p>
            Buddhist art and architecture represent the physical manifestation of Buddhist teachings,
            combining spiritual symbolism with aesthetic beauty. These sacred expressions have evolved
            across different cultures and time periods, creating a rich visual language that continues
            to inspire and educate.
          </p>

          <h2>Early Buddhist Art</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Aniconic Period:</h3>
              <ul>
                <li>Early symbols (Dharmachakra)</li>
                <li>Footprint representations</li>
                <li>Empty throne motifs</li>
                <li>Bodhi tree imagery</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Emergence of Buddha Images:</h3>
              <ul>
                <li>Gandhāran influence</li>
                <li>Mathura school</li>
                <li>Iconic representations</li>
                <li>Stylistic development</li>
              </ul>
            </div>
          </div>

          <h2>Sacred Architecture</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Stūpa Development:</h3>
              <ul>
                <li>Structural elements</li>
                <li>Symbolic meanings</li>
                <li>Regional variations</li>
                <li>Ritual functions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Temple Architecture:</h3>
              <ul>
                <li>Monastery layouts</li>
                <li>Cave temples</li>
                <li>Pagoda evolution</li>
                <li>Sacred geometry</li>
              </ul>
            </div>
          </div>

          <h2>Regional Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>South Asian:</h3>
              <ul>
                <li>Ajanta caves</li>
                <li>Sāñcī stūpa</li>
                <li>Sri Lankan dagobas</li>
                <li>Nālandā complex</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>East Asian:</h3>
              <ul>
                <li>Chinese pagodas</li>
                <li>Japanese temples</li>
                <li>Korean architecture</li>
                <li>Vietnamese styles</li>
              </ul>
            </div>
          </div>

          <h2>Artistic Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Sculptural Arts:</h3>
              <ul>
                <li>Buddha images</li>
                <li>Bodhisattva figures</li>
                <li>Relief carvings</li>
                <li>Bronze casting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Painting Traditions:</h3>
              <ul>
                <li>Wall murals</li>
                <li>Thangka paintings</li>
                <li>Mandala designs</li>
                <li>Illuminated texts</li>
              </ul>
            </div>
          </div>

          <h2>Symbolism and Iconography</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Buddha Characteristics:</h3>
              <ul>
                <li>32 major marks</li>
                <li>Mudra gestures</li>
                <li>Posture meanings</li>
                <li>Artistic conventions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Sacred Symbols:</h3>
              <ul>
                <li>Eight auspicious symbols</li>
                <li>Cosmic diagrams</li>
                <li>Ritual implements</li>
                <li>Color symbolism</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Expressions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Adaptations:</h3>
              <ul>
                <li>Contemporary design</li>
                <li>Urban temples</li>
                <li>Digital art</li>
                <li>Global influences</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Conservation:</h3>
              <ul>
                <li>Preservation techniques</li>
                <li>Digital documentation</li>
                <li>Restoration projects</li>
                <li>Heritage management</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-philosophy-and-logic"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Philosophy</h3>
              <p className="text-sm text-muted-foreground">
                Explore the philosophical principles behind Buddhist art
              </p>
            </Link>
            <Link
              href="/blog/buddhist-schools-and-traditions"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Schools</h3>
              <p className="text-sm text-muted-foreground">
                Learn how different traditions influenced artistic styles
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding through our{" "}
              <Link href="/religion/buddhism/art" className="hover:underline">
                Buddhist Art
              </Link>{" "}
              section. Explore architectural traditions in our{" "}
              <Link href="/religion/sacred-architecture" className="hover:underline">
                Sacred Architecture
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 