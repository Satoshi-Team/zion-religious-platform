import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Scriptures and Texts | Religious Studies Blog",
  description: "Explore the vast collection of Buddhist scriptures, including the Tripitaka, Mahayana sutras, and Vajrayana tantras. Learn about the preservation, interpretation, and study of Buddhist texts.",
  openGraph: {
    title: "Buddhist Scriptures and Texts | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist canonical texts and their traditions",
    type: "article",
  },
}

export default function BuddhistScripturesPage() {
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
          <span>Scriptures</span>
        </div>

        <h1>Buddhist Scriptures and Texts: Sacred Literature of Buddhism</h1>

        <div className="space-y-6">
          <p>
            Buddhist scriptures represent one of the world's most extensive collections of religious texts, 
            spanning multiple languages, traditions, and historical periods. From the earliest oral 
            traditions to later written canons, these texts preserve and transmit the Buddha's teachings 
            through diverse cultural contexts and philosophical developments.
          </p>

          <h2>Early Buddhist Texts</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Oral Tradition:</h3>
              <ul>
                <li>Preservation methods</li>
                <li>Memorization techniques</li>
                <li>Communal recitation</li>
                <li>First Buddhist Council</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Early Written Texts:</h3>
              <ul>
                <li>Gāndhārī manuscripts</li>
                <li>Pāli palm leaf texts</li>
                <li>Sanskrit fragments</li>
                <li>Cave inscriptions</li>
              </ul>
            </div>
          </div>

          <h2>Pāli Canon (Tipiṭaka)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Vinaya Piṭaka:</h3>
              <ul>
                <li>Monastic rules (Pātimokkha)</li>
                <li>Origin stories (Suttavibhaṅga)</li>
                <li>Supplementary rules (Khandhaka)</li>
                <li>Commentary (Parivāra)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Sutta Piṭaka:</h3>
              <ul>
                <li>Long discourses (Dīgha Nikāya)</li>
                <li>Middle-length discourses (Majjhima Nikāya)</li>
                <li>Connected discourses (Saṃyutta Nikāya)</li>
                <li>Numerical discourses (Aṅguttara Nikāya)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Abhidhamma Piṭaka:</h3>
              <ul>
                <li>Dhammasaṅgaṇī</li>
                <li>Vibhaṅga</li>
                <li>Dhātukathā</li>
                <li>Systematic analysis</li>
              </ul>
            </div>
          </div>

          <h2>Mahāyāna Scriptures</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Major Sūtras:</h3>
              <ul>
                <li>Heart Sūtra (Prajñāpāramitā Hṛdaya)</li>
                <li>Lotus Sūtra (Saddharmapuṇḍarīka)</li>
                <li>Diamond Sūtra (Vajracchedikā)</li>
                <li>Pure Land sūtras</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Philosophical Texts:</h3>
              <ul>
                <li>Madhyamaka works</li>
                <li>Yogācāra treatises</li>
                <li>Tathāgatagarbha texts</li>
                <li>Chinese Āgamas</li>
              </ul>
            </div>
          </div>

          <h2>Vajrayāna Texts</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Tantric Literature:</h3>
              <ul>
                <li>Highest Yoga Tantras</li>
                <li>Meditation manuals</li>
                <li>Ritual texts (sādhanas)</li>
                <li>Esoteric instructions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Tibetan Canon:</h3>
              <ul>
                <li>Kangyur (Buddha's words)</li>
                <li>Tengyur (commentaries)</li>
                <li>Terma literature</li>
                <li>Practice lineage texts</li>
              </ul>
            </div>
          </div>

          <h2>Commentarial Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Classical Commentaries:</h3>
              <ul>
                <li>Buddhaghosa's works</li>
                <li>Vasubandhu's treatises</li>
                <li>Nāgārjuna's writings</li>
                <li>Chinese masters' commentaries</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Regional Developments:</h3>
              <ul>
                <li>East Asian compilations</li>
                <li>Tibetan commentaries</li>
                <li>Southeast Asian traditions</li>
                <li>Modern interpretations</li>
              </ul>
            </div>
          </div>

          <h2>Modern Study and Translation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Academic Research:</h3>
              <ul>
                <li>Critical editions</li>
                <li>Comparative studies</li>
                <li>Digital archives</li>
                <li>Translation projects</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Contemporary Access:</h3>
              <ul>
                <li>Online resources</li>
                <li>Study guides</li>
                <li>Practice manuals</li>
                <li>Educational materials</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-cosmology"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Cosmology</h3>
              <p className="text-sm text-muted-foreground">
                Explore the universe as described in Buddhist texts
              </p>
            </Link>
            <Link
              href="/blog/buddhist-philosophy-and-logic"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Philosophy</h3>
              <p className="text-sm text-muted-foreground">
                Discover the philosophical foundations in Buddhist texts
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of Buddhist texts through our{" "}
              <Link href="/religion/buddhism/texts" className="hover:underline">
                Buddhist Texts
              </Link>{" "}
              section. Compare different scriptural traditions in our{" "}
              <Link href="/religion/comparative/sacred-texts" className="hover:underline">
                Comparative Sacred Texts
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 