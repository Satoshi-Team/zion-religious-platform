import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
// import { Breadcrumbs } from "@/components/navigation/breadcrumbs" // Removing this import
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vajrayāna Buddhism: Beliefs and Practices | Buddhist Studies",
  description: "Explore the esoteric teachings, tantric practices, and philosophical foundations of Vajrayāna Buddhism, including its major lineages, core practices, and historical development.",
  openGraph: {
    title: "Vajrayāna Buddhism: Beliefs and Practices",
    description: "Comprehensive guide to Vajrayāna Buddhism's beliefs, practices, and traditions",
    type: "article",
    images: [{ url: "/images/og/vajrayana-buddhism.jpg" }],
  },
  keywords: [
    "Vajrayana Buddhism",
    "Tantric Buddhism",
    "Buddhist tantra",
    "Tibetan Buddhism",
    "Buddhist meditation",
    "Buddhist practices",
    "Deity yoga",
    "Mandala practice",
    "Buddhist lineages",
    "Esoteric Buddhism"
  ]
}

// Removing the breadcrumbs array definition
// const breadcrumbs = [
//   { title: "Home", href: "/" },
//   { title: "Blog", href: "/blog" },
//   { title: "Buddhism", href: "/blog/buddhism" },
//   { title: "Vajrayāna Buddhism: Beliefs and Practices", href: "/blog/vajrayana-buddhism-beliefs-and-practices" }
// ]

export default function VajrayanaBuddhismPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        {/* <Breadcrumbs items={breadcrumbs} /> */}
        {/* Replace with inline breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Home</Link>
          <span aria-hidden="true">•</span>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <span aria-hidden="true">•</span>
          <Link href="/blog/buddhism" className="hover:underline">Buddhism</Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Vajrayāna Buddhism</span>
        </nav>
        
        <h1 className="text-4xl font-bold mt-8 mb-4">Vajrayāna Buddhism: Beliefs and Practices</h1>
        
        <div className="prose max-w-none">
          <p className="lead">
            Vajrayāna Buddhism, also known as the Diamond Vehicle or Tantric Buddhism, represents a sophisticated 
            system of esoteric Buddhist practice that emerged in India and later flourished in Tibet and surrounding 
            regions. This tradition combines the foundational teachings of Buddhism with advanced tantric methods, 
            offering practitioners a direct path to enlightenment through specialized practices and techniques.
          </p>

          <h2>Historical Development</h2>
          <p>
            Emerging around the 3rd-7th centuries CE in India, Vajrayāna Buddhism developed as an extension of 
            Mahāyāna Buddhism, incorporating tantric practices and esoteric teachings. The tradition reached its 
            fullest development in Tibet, where it became integrated with local cultural and religious elements, 
            forming distinct schools and lineages that continue to thrive today.
          </p>

          <h2>Major Lineages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Nyingma Tradition</h3>
              <p className="text-muted-foreground mb-4">The oldest school of Tibetan Buddhism, emphasizing Dzogchen teachings</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Founded by Padmasambhava</li>
                <li>Emphasis on Dzogchen practice</li>
                <li>Terma tradition of hidden teachings</li>
                <li>Nine-vehicle system</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Kagyu Tradition</h3>
              <p className="text-muted-foreground mb-4">Known for the Mahāmudrā teachings and oral transmission lineage</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Emphasis on direct experience</li>
                <li>Six Yogas of Nāropa</li>
                <li>Mahāmudrā meditation</li>
                <li>Strong meditation emphasis</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Gelug Tradition</h3>
              <p className="text-muted-foreground mb-4">The tradition emphasizing systematic study and practice</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Founded by Tsongkhapa</li>
                <li>Lamrim teachings</li>
                <li>Emphasis on scholarship</li>
                <li>Monastic discipline</li>
              </ul>
            </Card>
          </div>

          <h2>Core Beliefs and Concepts</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Foundational Principles</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Buddha nature is present in all beings</li>
                <li>The unity of wisdom and compassion</li>
                <li>The importance of the guru-disciple relationship</li>
                <li>The potential for enlightenment in one lifetime</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Philosophical Framework</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Integration of Sūtra and Tantra</li>
                <li>Non-dual understanding of reality</li>
                <li>Theory of subtle body and channels</li>
                <li>Transformation of emotions into wisdom</li>
              </ul>
            </div>
          </div>

          <h2>Essential Practices</h2>
          <div className="grid gap-6 md:grid-cols-2 my-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Generation Stage</h3>
              <p className="text-muted-foreground mb-4">Visualization practices for transformation and purification</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Deity yoga practice</li>
                <li>Mandala visualization</li>
                <li>Mantra recitation</li>
                <li>Ritual performance</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Completion Stage</h3>
              <p className="text-muted-foreground mb-4">Advanced practices working with subtle energies</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Inner heat practice</li>
                <li>Channel practices</li>
                <li>Clear light meditation</li>
                <li>Dream yoga</li>
              </ul>
            </Card>
          </div>

          <h2>Prerequisites and Path Structure</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Foundation Requirements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Preliminary practices (Ngöndro)</li>
                <li>Empowerment (Wang)</li>
                <li>Transmission (Lung)</li>
                <li>Instructions (Tri)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Path Progression</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Common preliminary practices</li>
                <li>Special preliminary practices</li>
                <li>Generation stage practices</li>
                <li>Completion stage practices</li>
              </ul>
            </div>
          </div>

          <h2>Sacred Texts and Literature</h2>
          <div className="space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Tantric texts (Guhyasamāja, Hevajra, Kālacakra)</li>
              <li>Terma literature (revealed teachings)</li>
              <li>Commentarial traditions</li>
              <li>Practice manuals and instructions</li>
            </ul>
          </div>

          <h2>Contemporary Relevance</h2>
          <p>
            Today, Vajrayāna Buddhism continues to attract practitioners worldwide, offering a comprehensive 
            path that combines philosophical depth with practical methods. Its emphasis on transformation, 
            direct experience, and the integration of all aspects of life into spiritual practice makes it 
            particularly relevant to contemporary seekers.
          </p>

          <div className="my-8">
            <h2>Further Study</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/blog/buddhism/mahayana-buddhism-beliefs-and-practices">
                <Button variant="outline" className="w-full">
                  ← Mahāyāna Buddhism: Beliefs and Practices
                </Button>
              </Link>
              <Link href="/blog/buddhism/buddhist-meditation-techniques">
                <Button variant="outline" className="w-full">
                  Buddhist Meditation Techniques →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  )
} 