import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhism's Spread Across Asia: A Journey of Transformation | Religious Studies Blog",
  description: "Explore the remarkable journey of Buddhism across Asia - from its origins in India to its diverse expressions across the continent. Discover how Buddhist teachings adapted to different cultures while maintaining their core wisdom.",
  openGraph: {
    title: "Buddhism's Spread Across Asia: A Journey of Transformation | Religious Studies Blog",
    description: "Explore the remarkable journey of Buddhism across Asia - from its origins in India to its diverse expressions across the continent. Discover how Buddhist teachings adapted to different cultures while maintaining their core wisdom.",
    type: "article",
  },
}

export default function BuddhismsSpreadAcrossAsiaPage() {
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

        <h1>Buddhism's Spread Across Asia: A Journey of Transformation</h1>

        <div className="space-y-6">
          <p>
            The spread of Buddhism across Asia represents one of the most
            significant cultural and religious transformations in human history.
            This exploration examines how Buddhist teachings adapted to diverse
            cultures while maintaining their core wisdom, creating a rich tapestry
            of spiritual traditions across the continent.
          </p>

          <h2>Early Expansion</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Indian Origins:</h3>
              <ul>
                <li>Magadha Kingdom</li>
                <li>Mauryan Empire</li>
                <li>Ashoka's Mission</li>
                <li>Early Buddhist Councils</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Initial Spread:</h3>
              <ul>
                <li>Trade Routes</li>
                <li>Monastic Networks</li>
                <li>Royal Patronage</li>
                <li>Cultural Exchange</li>
              </ul>
            </div>
          </div>

          <h2>Regional Development</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>South Asia:</h3>
              <ul>
                <li>Sri Lankan Buddhism</li>
                <li>Nepalese Traditions</li>
                <li>Bangladeshi Heritage</li>
                <li>Indian Revival</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Southeast Asia:</h3>
              <ul>
                <li>Thai Buddhism</li>
                <li>Burmese Traditions</li>
                <li>Cambodian Heritage</li>
                <li>Laotian Practices</li>
              </ul>
            </div>
          </div>

          <h2>East Asian Transmission</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Chinese Buddhism:</h3>
              <ul>
                <li>Silk Road Transmission</li>
                <li>Chan/Zen Development</li>
                <li>Pure Land Tradition</li>
                <li>Cultural Integration</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>East Asian Traditions:</h3>
              <ul>
                <li>Japanese Buddhism</li>
                <li>Korean Buddhism</li>
                <li>Vietnamese Traditions</li>
                <li>Mongolian Buddhism</li>
              </ul>
            </div>
          </div>

          <h2>Cultural Adaptations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Artistic Expressions:</h3>
              <ul>
                <li>Architectural Styles</li>
                <li>Visual Arts</li>
                <li>Literary Traditions</li>
                <li>Musical Heritage</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Social Integration:</h3>
              <ul>
                <li>Local Customs</li>
                <li>Folk Traditions</li>
                <li>Social Structures</li>
                <li>Political Systems</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-art-and-architecture"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Art and Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Visual expressions of enlightenment
              </p>
            </Link>
            <Link
              href="/blog/buddhist-festivals-and-rituals"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Festivals and Rituals</h3>
              <p className="text-sm text-muted-foreground">
                Sacred time and practice
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhism's spread across Asia through our
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