import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Cosmology: Universe and Realms | Religious Studies Blog",
  description: "Explore Buddhist cosmology, including the multiple realms of existence, cycles of time, and understanding of the universe. Learn about traditional Buddhist worldview and its modern interpretations.",
  openGraph: {
    title: "Buddhist Cosmology: Universe and Realms | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist understanding of the cosmos and existence",
    type: "article",
  },
}

export default function BuddhistCosmologyPage() {
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
          <span>Cosmology</span>
        </div>

        <h1>Buddhist Cosmology: Understanding the Universe and Existence</h1>

        <div className="space-y-6">
          <p>
            Buddhist cosmology presents a sophisticated understanding of the universe, encompassing 
            multiple realms of existence, vast cycles of time, and the intricate relationship between 
            consciousness and reality. This worldview combines metaphysical insights with practical 
            implications for spiritual practice and understanding the nature of existence.
          </p>

          <h2>Structure of the Universe</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mount Meru Cosmology:</h3>
              <ul>
                <li>Central axis (Mount Meru)</li>
                <li>Four great continents</li>
                <li>Seven concentric oceans</li>
                <li>Celestial realms above</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>World Systems:</h3>
              <ul>
                <li>Multiple world systems (lokadhātu)</li>
                <li>Infinite buddha-fields</li>
                <li>Three thousand great thousandfold world system</li>
                <li>Interconnected realms</li>
              </ul>
            </div>
          </div>

          <h2>Realms of Existence</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Higher Realms (Sugati):</h3>
              <ul>
                <li>Form realms (rūpadhātu)</li>
                <li>Formless realms (arūpadhātu)</li>
                <li>Heavenly realms (devaloka)</li>
                <li>Pure abodes (suddhāvāsa)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Middle Realms:</h3>
              <ul>
                <li>Human realm (manuṣyaloka)</li>
                <li>Asura realm</li>
                <li>Animal realm (tiryagloka)</li>
                <li>Hungry ghost realm (pretaloka)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Lower Realms (Durgati):</h3>
              <ul>
                <li>Hell realms (naraka)</li>
                <li>Hot hells (uṣṇa naraka)</li>
                <li>Cold hells (śīta naraka)</li>
                <li>Temporary hells</li>
              </ul>
            </div>
          </div>

          <h2>Temporal Cycles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Cosmic Cycles:</h3>
              <ul>
                <li>Great eons (mahākalpa)</li>
                <li>Formation period (vivartakalpa)</li>
                <li>Duration period (vivartasthāyikalpa)</li>
                <li>Dissolution period (saṃvartakalpa)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Time Measurements:</h3>
              <ul>
                <li>Kalpa system</li>
                <li>Buddhist ages</li>
                <li>Day of Brahma</li>
                <li>Cosmic cycles</li>
              </ul>
            </div>
          </div>

          <h2>Metaphysical Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Fundamental Concepts:</h3>
              <ul>
                <li>Dependent origination (pratītyasamutpāda)</li>
                <li>Emptiness (śūnyatā)</li>
                <li>Karma and rebirth</li>
                <li>Mind and consciousness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Causal Relationships:</h3>
              <ul>
                <li>Karmic causation</li>
                <li>Mental formations</li>
                <li>Cosmic order (dharmatā)</li>
                <li>Natural laws</li>
              </ul>
            </div>
          </div>

          <h2>Pure Lands and Buddha-fields</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Pure Land Cosmology:</h3>
              <ul>
                <li>Sukhāvatī (Western Pure Land)</li>
                <li>Abhirati (Eastern Pure Land)</li>
                <li>Tuṣita Heaven</li>
                <li>Other buddha-fields</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Characteristics:</h3>
              <ul>
                <li>Perfect environment</li>
                <li>Dharma teaching</li>
                <li>Spiritual development</li>
                <li>Liberation potential</li>
              </ul>
            </div>
          </div>

          <h2>Modern Interpretations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Scientific Dialogue:</h3>
              <ul>
                <li>Quantum physics parallels</li>
                <li>Multiverse theories</li>
                <li>Consciousness studies</li>
                <li>Cosmological models</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Contemporary Understanding:</h3>
              <ul>
                <li>Psychological interpretation</li>
                <li>States of consciousness</li>
                <li>Metaphorical meaning</li>
                <li>Practical applications</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-meditation-techniques"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Meditation</h3>
              <p className="text-sm text-muted-foreground">
                Explore practices for understanding reality
              </p>
            </Link>
            <Link
              href="/blog/buddhist-scriptures-and-texts"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Scriptures</h3>
              <p className="text-sm text-muted-foreground">
                Discover the textual sources of Buddhist cosmology
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Explore more about Buddhist views of reality in our{" "}
              <Link href="/religion/buddhism/philosophy" className="hover:underline">
                Buddhist Philosophy
              </Link>{" "}
              section. Compare different cosmological systems in our{" "}
              <Link href="/religion/comparative/cosmology" className="hover:underline">
                Comparative Cosmology
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 