import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Philosophy and Logic | Religious Studies Blog",
  description: "Explore Buddhist philosophical schools, logical methods, and epistemological frameworks. Learn about Buddhist approaches to knowledge, reality, and reasoning across different traditions.",
  openGraph: {
    title: "Buddhist Philosophy and Logic | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist philosophical thought and logical analysis",
    type: "article",
  },
}

export default function BuddhistPhilosophyPage() {
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
          <span>Philosophy</span>
        </div>

        <h1>Buddhist Philosophy and Logic: Methods of Understanding Reality</h1>

        <div className="space-y-6">
          <p>
            Buddhist philosophy represents a sophisticated system of thought that combines rigorous 
            logical analysis with profound insights into the nature of mind, reality, and human 
            experience. Through various schools and traditions, Buddhism has developed comprehensive 
            frameworks for understanding existence and the path to liberation.
          </p>

          <h2>Early Buddhist Philosophy</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Foundational Concepts:</h3>
              <ul>
                <li>Non-self (anattā)</li>
                <li>Impermanence (anicca)</li>
                <li>Suffering (dukkha)</li>
                <li>Dependent origination (paṭiccasamuppāda)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Analytical Methods:</h3>
              <ul>
                <li>Five aggregates (khandhas)</li>
                <li>Eighteen elements (dhātus)</li>
                <li>Twelve sense bases (āyatanas)</li>
                <li>Four noble truths analysis</li>
              </ul>
            </div>
          </div>

          <h2>Abhidhamma Philosophy</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Systematic Analysis:</h3>
              <ul>
                <li>Theory of consciousness (citta)</li>
                <li>Mental factors (cetasika)</li>
                <li>Material phenomena (rūpa)</li>
                <li>Causal relations (paccaya)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Classification Systems:</h3>
              <ul>
                <li>Momentary analysis</li>
                <li>Conditional relations</li>
                <li>Process of cognition</li>
                <li>States of consciousness</li>
              </ul>
            </div>
          </div>

          <h2>Madhyamaka Philosophy</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Teachings:</h3>
              <ul>
                <li>Emptiness (śūnyatā)</li>
                <li>Two truths doctrine</li>
                <li>Middle way dialectics</li>
                <li>Tetralemma logic</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Key Thinkers:</h3>
              <ul>
                <li>Nāgārjuna's analysis</li>
                <li>Candrakīrti's interpretations</li>
                <li>Bhāviveka's approach</li>
                <li>Tibetan developments</li>
              </ul>
            </div>
          </div>

          <h2>Yogācāra Philosophy</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mind-Only School:</h3>
              <ul>
                <li>Eight consciousnesses</li>
                <li>Three natures theory</li>
                <li>Store consciousness (ālayavijñāna)</li>
                <li>Transformation of consciousness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Key Concepts:</h3>
              <ul>
                <li>Representation-only</li>
                <li>Seeds and perfuming</li>
                <li>Non-dual awareness</li>
                <li>Buddha nature theory</li>
              </ul>
            </div>
          </div>

          <h2>Buddhist Logic</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Logical Methods:</h3>
              <ul>
                <li>Valid cognition (pramāṇa)</li>
                <li>Inference (anumāna)</li>
                <li>Direct perception (pratyakṣa)</li>
                <li>Debate techniques</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Epistemological Framework:</h3>
              <ul>
                <li>Sources of knowledge</li>
                <li>Types of reasoning</li>
                <li>Logical fallacies</li>
                <li>Validation methods</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Dialogue:</h3>
              <ul>
                <li>Science and Buddhism</li>
                <li>Environmental ethics</li>
                <li>Social philosophy</li>
                <li>Cognitive science</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Practical Applications:</h3>
              <ul>
                <li>Critical thinking</li>
                <li>Ethical reasoning</li>
                <li>Mental cultivation</li>
                <li>Contemplative practice</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-scriptures-and-texts"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Scriptures</h3>
              <p className="text-sm text-muted-foreground">
                Explore the textual foundations of Buddhist philosophy
              </p>
            </Link>
            <Link
              href="/blog/buddhist-schools-and-traditions"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Schools</h3>
              <p className="text-sm text-muted-foreground">
                Discover different philosophical traditions in Buddhism
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of Buddhist thought through our{" "}
              <Link href="/religion/buddhism/philosophy" className="hover:underline">
                Buddhist Philosophy
              </Link>{" "}
              section. Compare different philosophical approaches in our{" "}
              <Link href="/religion/comparative/philosophy" className="hover:underline">
                Comparative Philosophy
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 