import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Ethics and Precepts | Religious Studies Blog",
  description: "Explore Buddhist ethical principles, moral guidelines, and precepts. Learn about the foundations of Buddhist ethics, their practical application, and relevance in contemporary life.",
  openGraph: {
    title: "Buddhist Ethics and Precepts | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist moral teachings and ethical practice",
    type: "article",
  },
}

export default function BuddhistEthicsPage() {
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
          <span>Ethics</span>
        </div>

        <h1>Buddhist Ethics and Precepts: Guidelines for Virtuous Living</h1>

        <div className="space-y-6">
          <p>
            Buddhist ethics provides a comprehensive framework for moral conduct, based on principles 
            of non-harm, mindfulness, and compassion. These ethical guidelines, developed over 
            centuries of practice and reflection, offer practical direction for both personal 
            development and harmonious social relationships.
          </p>

          <h2>Foundations of Buddhist Ethics</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Principles:</h3>
              <ul>
                <li>Non-harm (ahiṃsā)</li>
                <li>Compassion (karuṇā)</li>
                <li>Mindfulness (sati)</li>
                <li>Wisdom (paññā)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ethical Framework:</h3>
              <ul>
                <li>Intention (cetanā)</li>
                <li>Karma and consequences</li>
                <li>Skillful action (kusala)</li>
                <li>Mental cultivation</li>
              </ul>
            </div>
          </div>

          <h2>The Five Precepts</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Basic Guidelines:</h3>
              <ul>
                <li>Abstaining from killing</li>
                <li>Avoiding stealing</li>
                <li>Sexual misconduct</li>
                <li>False speech</li>
                <li>Intoxicants</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Positive Aspects:</h3>
              <ul>
                <li>Protecting life</li>
                <li>Practicing generosity</li>
                <li>Maintaining relationships</li>
                <li>Speaking truthfully</li>
                <li>Mental clarity</li>
              </ul>
            </div>
          </div>

          <h2>Advanced Ethical Training</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Eight Precepts:</h3>
              <ul>
                <li>Additional restraints</li>
                <li>Periodic observance</li>
                <li>Spiritual development</li>
                <li>Meditation support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ten Precepts:</h3>
              <ul>
                <li>Novice monastic rules</li>
                <li>Further refinements</li>
                <li>Preparatory training</li>
                <li>Ethical foundation</li>
              </ul>
            </div>
          </div>

          <h2>Bodhisattva Ethics</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mahāyāna Principles:</h3>
              <ul>
                <li>Universal compassion</li>
                <li>Benefiting others</li>
                <li>Skillful means (upāya)</li>
                <li>Six perfections (pāramitā)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Advanced Vows:</h3>
              <ul>
                <li>Bodhisattva precepts</li>
                <li>Altruistic commitment</li>
                <li>Ethical flexibility</li>
                <li>Wisdom application</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Contexts:</h3>
              <ul>
                <li>Environmental ethics</li>
                <li>Business ethics</li>
                <li>Medical ethics</li>
                <li>Digital conduct</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Social Engagement:</h3>
              <ul>
                <li>Social justice</li>
                <li>Peace activism</li>
                <li>Economic ethics</li>
                <li>Political involvement</li>
              </ul>
            </div>
          </div>

          <h2>Practical Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Practice:</h3>
              <ul>
                <li>Ethical reflection</li>
                <li>Mindful awareness</li>
                <li>Precept recitation</li>
                <li>Personal assessment</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Challenging Situations:</h3>
              <ul>
                <li>Ethical dilemmas</li>
                <li>Conflict resolution</li>
                <li>Decision-making</li>
                <li>Balancing factors</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-monasticism"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Monasticism</h3>
              <p className="text-sm text-muted-foreground">
                Explore monastic ethical training and discipline
              </p>
            </Link>
            <Link
              href="/blog/buddhist-meditation-techniques"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Meditation</h3>
              <p className="text-sm text-muted-foreground">
                Learn how meditation supports ethical development
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of Buddhist ethics through our{" "}
              <Link href="/religion/buddhism/ethics" className="hover:underline">
                Buddhist Ethics
              </Link>{" "}
              section. Compare different moral systems in our{" "}
              <Link href="/religion/comparative/ethics" className="hover:underline">
                Comparative Ethics
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 