import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Monasticism | Religious Studies Blog",
  description: "Explore Buddhist monastic traditions, from ancient vinaya rules to contemporary practices. Learn about monastery life, ordination, training, and the role of monastics in Buddhist society.",
  openGraph: {
    title: "Buddhist Monasticism | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist monastic life and traditions",
    type: "article",
  },
}

export default function BuddhistMonasticismPage() {
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
          <span>Monasticism</span>
        </div>

        <h1>Buddhist Monasticism: The Path of Renunciation</h1>

        <div className="space-y-6">
          <p>
            Buddhist monasticism forms the cornerstone of Buddhist tradition, providing a structured 
            environment for intensive spiritual practice and preservation of the Buddha's teachings. 
            From ancient India to the modern world, the Sangha has maintained an unbroken lineage of 
            practice, study, and realization.
          </p>

          <h2>Monastic Origins</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Historical Development:</h3>
              <ul>
                <li>First Buddhist Sangha</li>
                <li>Buddha's guidelines</li>
                <li>Early community structure</li>
                <li>Evolution of rules</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Foundational Elements:</h3>
              <ul>
                <li>Four assemblies (parisā)</li>
                <li>Gender and ordination</li>
                <li>Community governance</li>
                <li>Patronage systems</li>
              </ul>
            </div>
          </div>

          <h2>Vinaya: Monastic Code</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Rules:</h3>
              <ul>
                <li>Pātimokkha regulations</li>
                <li>Major precepts (pārājika)</li>
                <li>Minor training rules</li>
                <li>Disciplinary procedures</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Daily Discipline:</h3>
              <ul>
                <li>Alms rounds (piṇḍapāta)</li>
                <li>Meal regulations</li>
                <li>Robe wearing</li>
                <li>Personal conduct</li>
              </ul>
            </div>
          </div>

          <h2>Monastery Life</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Schedule:</h3>
              <ul>
                <li>Morning meditation</li>
                <li>Chanting services</li>
                <li>Study periods</li>
                <li>Community duties</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Training System:</h3>
              <ul>
                <li>Novice training</li>
                <li>Full ordination</li>
                <li>Spiritual mentoring</li>
                <li>Advanced studies</li>
              </ul>
            </div>
          </div>

          <h2>Regional Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Theravāda Monasticism:</h3>
              <ul>
                <li>Forest traditions</li>
                <li>City monasteries</li>
                <li>Study centers</li>
                <li>Meditation lineages</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Mahāyāna Forms:</h3>
              <ul>
                <li>Chan/Zen temples</li>
                <li>Pure Land communities</li>
                <li>Japanese traditions</li>
                <li>Korean monasticism</li>
              </ul>
            </div>
          </div>

          <h2>Vajrayāna Institutions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Tibetan Monasteries:</h3>
              <ul>
                <li>Major monasteries (gompa)</li>
                <li>Retreat centers</li>
                <li>Scholastic colleges</li>
                <li>Tantric institutions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Special Features:</h3>
              <ul>
                <li>Reincarnation system</li>
                <li>Ritual training</li>
                <li>Debate practices</li>
                <li>Artistic traditions</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Challenges</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Issues:</h3>
              <ul>
                <li>Adaptation to change</li>
                <li>Education reform</li>
                <li>Gender equality</li>
                <li>Financial sustainability</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Western Integration:</h3>
              <ul>
                <li>New monasteries</li>
                <li>Cultural adaptation</li>
                <li>Training methods</li>
                <li>Lay-monastic relations</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-schools-and-traditions"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Schools</h3>
              <p className="text-sm text-muted-foreground">
                Explore different monastic lineages and traditions
              </p>
            </Link>
            <Link
              href="/blog/buddhist-ethics-and-precepts"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Ethics</h3>
              <p className="text-sm text-muted-foreground">
                Learn about monastic rules and ethical guidelines
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of monastic life through our{" "}
              <Link href="/religion/buddhism/monasticism" className="hover:underline">
                Buddhist Monasticism
              </Link>{" "}
              section. Compare different religious orders in our{" "}
              <Link href="/religion/comparative/monasticism" className="hover:underline">
                Comparative Monasticism
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 