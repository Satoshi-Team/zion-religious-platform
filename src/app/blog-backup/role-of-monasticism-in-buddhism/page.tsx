import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Role of Monasticism in Buddhism: Preserving and Transmitting the Dharma | Religious Studies Blog",
  description: "Explore the vital role of monastic communities in Buddhism - from preserving ancient traditions to guiding spiritual practice. Discover how monastic life embodies Buddhist values and serves as a bridge between ancient wisdom and modern life.",
  openGraph: {
    title: "Role of Monasticism in Buddhism: Preserving and Transmitting the Dharma | Religious Studies Blog",
    description: "Explore the vital role of monastic communities in Buddhism - from preserving ancient traditions to guiding spiritual practice. Discover how monastic life embodies Buddhist values and serves as a bridge between ancient wisdom and modern life.",
    type: "article",
  },
}

export default function RoleOfMonasticismInBuddhismPage() {
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
          <span>Foundations</span>
        </div>

        <h1>Role of Monasticism in Buddhism: Preserving and Transmitting the Dharma</h1>

        <div className="space-y-6">
          <p>
            The monastic community (Sangha) stands as one of the Three Jewels of
            Buddhism, playing a crucial role in preserving the Buddha's teachings
            and guiding spiritual practice. This exploration examines how monastic
            life embodies Buddhist values and serves as a bridge between ancient
            wisdom and modern life.
          </p>

          <h2>Monastic Life</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Practices:</h3>
              <ul>
                <li>Vinaya (Monastic Discipline)</li>
                <li>Meditation and Study</li>
                <li>Alms Round (Pindapata)</li>
                <li>Community Service</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Monastic Roles:</h3>
              <ul>
                <li>Dharma Teachers</li>
                <li>Spiritual Guides</li>
                <li>Community Leaders</li>
                <li>Cultural Preservers</li>
              </ul>
            </div>
          </div>

          <h2>Monastic Traditions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Major Traditions:</h3>
              <ul>
                <li>Theravada Monasticism</li>
                <li>Mahayana Monastic Orders</li>
                <li>Vajrayana Monastic Lineages</li>
                <li>Zen Monastic Practice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Monastic Institutions:</h3>
              <ul>
                <li>Monasteries and Temples</li>
                <li>Monastic Universities</li>
                <li>Meditation Centers</li>
                <li>Retreat Facilities</li>
              </ul>
            </div>
          </div>

          <h2>Monastic Training</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Education and Study:</h3>
              <ul>
                <li>Scriptural Studies</li>
                <li>Philosophical Training</li>
                <li>Meditation Practice</li>
                <li>Ritual Training</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Monastic Development:</h3>
              <ul>
                <li>Novice Training</li>
                <li>Full Ordination</li>
                <li>Advanced Studies</li>
                <li>Teacher Training</li>
              </ul>
            </div>
          </div>

          <h2>Monastic-Lay Relations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Community Service:</h3>
              <ul>
                <li>Spiritual Guidance</li>
                <li>Educational Programs</li>
                <li>Social Services</li>
                <li>Cultural Preservation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Mutual Support:</h3>
              <ul>
                <li>Material Support</li>
                <li>Spiritual Support</li>
                <li>Community Building</li>
                <li>Interfaith Dialogue</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-festivals-and-rituals"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Festivals and Rituals</h3>
              <p className="text-sm text-muted-foreground">
                Sacred time and practice
              </p>
            </Link>
            <Link
              href="/blog/buddhist-scriptures-and-texts"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Scriptures and Texts</h3>
              <p className="text-sm text-muted-foreground">
                Sacred writings and their significance
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of monasticism in Buddhism through our
              comprehensive learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Compare and contrast with other religious traditions in our{" "}
              <Link href="/religion/comparative" className="hover:underline">
                Comparative Religion
              </Link>{" "}
              section.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 