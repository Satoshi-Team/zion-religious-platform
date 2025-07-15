import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Schools and Traditions | Religious Studies Blog",
  description: "Explore the diverse schools and traditions of Buddhism, from early Buddhist sects to contemporary movements. Learn about their distinctive teachings, practices, and historical development.",
  openGraph: {
    title: "Buddhist Schools and Traditions | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist lineages and their unique approaches",
    type: "article",
  },
}

export default function BuddhistSchoolsPage() {
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
          <span>Schools</span>
        </div>

        <h1>Buddhist Schools and Traditions: Diverse Paths to Awakening</h1>

        <div className="space-y-6">
          <p>
            Buddhism has evolved into numerous schools and traditions over its long history, each 
            offering distinct interpretations of the Buddha's teachings and unique approaches to 
            spiritual practice. While sharing common foundations, these traditions have developed 
            diverse methods and emphases in their pursuit of enlightenment.
          </p>

          <h2>Early Buddhist Schools</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Historical Development:</h3>
              <ul>
                <li>First Buddhist Council</li>
                <li>Early schisms</li>
                <li>Eighteen early schools</li>
                <li>Textual traditions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Major Early Schools:</h3>
              <ul>
                <li>Sthaviravāda lineage</li>
                <li>Mahāsāṃghika development</li>
                <li>Sarvāstivāda tradition</li>
                <li>Pudgalavāda school</li>
              </ul>
            </div>
          </div>

          <h2>Theravāda Buddhism</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Features:</h3>
              <ul>
                <li>Pāli Canon emphasis</li>
                <li>Monastic tradition</li>
                <li>Individual liberation</li>
                <li>Meditation practices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Regional Traditions:</h3>
              <ul>
                <li>Sri Lankan Buddhism</li>
                <li>Thai Forest Tradition</li>
                <li>Burmese meditation</li>
                <li>Southeast Asian forms</li>
              </ul>
            </div>
          </div>

          <h2>Mahāyāna Buddhism</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Major Traditions:</h3>
              <ul>
                <li>Chinese Chan Buddhism</li>
                <li>Japanese Zen schools</li>
                <li>Pure Land traditions</li>
                <li>Tiantai and Huayan</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Key Features:</h3>
              <ul>
                <li>Bodhisattva path</li>
                <li>Universal liberation</li>
                <li>Upāya (skillful means)</li>
                <li>Buddha nature theory</li>
              </ul>
            </div>
          </div>

          <h2>Vajrayāna Buddhism</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Tibetan Schools:</h3>
              <ul>
                <li>Nyingma tradition</li>
                <li>Kagyu lineages</li>
                <li>Sakya school</li>
                <li>Gelug tradition</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Distinctive Elements:</h3>
              <ul>
                <li>Tantric practices</li>
                <li>Guru-disciple relationship</li>
                <li>Deity yoga</li>
                <li>Ritual and mandala</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Movements</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Developments:</h3>
              <ul>
                <li>Engaged Buddhism</li>
                <li>Secular Buddhism</li>
                <li>Western adaptations</li>
                <li>Interfaith dialogue</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Global Spread:</h3>
              <ul>
                <li>Western Buddhism</li>
                <li>Modern movements</li>
                <li>Cultural adaptations</li>
                <li>Contemporary teachers</li>
              </ul>
            </div>
          </div>

          <h2>Comparative Elements</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Shared Features:</h3>
              <ul>
                <li>Four Noble Truths</li>
                <li>Noble Eightfold Path</li>
                <li>Three Jewels</li>
                <li>Ethical precepts</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Distinctive Approaches:</h3>
              <ul>
                <li>Practice methods</li>
                <li>Philosophical views</li>
                <li>Cultural expressions</li>
                <li>Organizational structures</li>
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
                Explore philosophical developments across traditions
              </p>
            </Link>
            <Link
              href="/blog/buddhist-monasticism"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Monasticism</h3>
              <p className="text-sm text-muted-foreground">
                Learn about monastic traditions in different schools
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of Buddhist traditions through our{" "}
              <Link href="/religion/buddhism/traditions" className="hover:underline">
                Buddhist Traditions
              </Link>{" "}
              section. Compare different religious movements in our{" "}
              <Link href="/religion/comparative/traditions" className="hover:underline">
                Comparative Traditions
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 