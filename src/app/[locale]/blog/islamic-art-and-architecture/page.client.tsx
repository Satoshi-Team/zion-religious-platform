import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Art and Architecture: A Visual Journey Through Faith | Religious Studies Blog",
  description: "Explore the rich artistic heritage of Islamic civilization - from geometric patterns and calligraphy to magnificent mosques and palaces. Discover how art and architecture express Islamic values and spirituality.",
  openGraph: {
    title: "Islamic Art and Architecture: A Visual Journey Through Faith | Religious Studies Blog",
    description: "Comprehensive guide to the diverse forms, symbolic meanings, and historical development of Islamic artistic traditions.",
    type: "article",
    images: [
      {
        url: "/images/islamic-art-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Art and Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Art and Architecture: A Visual Journey Through Faith",
    description: "Comprehensive guide to the diverse forms, symbolic meanings, and historical development of Islamic artistic traditions.",
    images: ["/images/islamic-art-architecture.jpg"],
  },
}

export default function IslamicArtAndArchitecturePage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/religion/islam" className="hover:underline">
            Islam
          </Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Art & Architecture</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Art and Architecture: A Visual Journey Through Faith
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Artistic Heritage</Badge>
            <Badge variant="secondary">Cultural Expression</Badge>
            <Badge variant="secondary">Architectural Marvels</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islamic art and architecture represent a unique fusion of spiritual expression, cultural
            heritage, and artistic innovation. This exploration examines the diverse forms, symbolic
            meanings, and historical development of Islamic artistic traditions across different
            regions and periods, reflecting the unity and diversity of Islamic civilization.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Visual Arts
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Calligraphy (Khatt)</h3>
                    <ul className="mt-2">
                      <li>Kufic Script (Early Islamic)</li>
                      <li>Naskh Script (Classical)</li>
                      <li>Thuluth Script (Decorative)</li>
                      <li>Diwani Script (Ottoman)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Geometric Patterns</h3>
                    <ul className="mt-2">
                      <li>Star Patterns (Najm)</li>
                      <li>Interlacing Designs (Tawriq)</li>
                      <li>Arabesque (Islimi)</li>
                      <li>Mosaic Work (Zillij)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Architectural Elements
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Mosque Design</h3>
                    <ul className="mt-2">
                      <li>Prayer Hall (Musalla)</li>
                      <li>Minaret (Manara)</li>
                      <li>Mihrab (Prayer Niche)</li>
                      <li>Dome (Qubba)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Palace Architecture</h3>
                    <ul className="mt-2">
                      <li>Courtyard Design (Sahn)</li>
                      <li>Iwan (Vaulted Hall)</li>
                      <li>Harem Quarters</li>
                      <li>Gardens (Bagh)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Decorative Arts
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Textile Arts</h3>
                    <ul className="mt-2">
                      <li>Carpet Weaving</li>
                      <li>Silk Production</li>
                      <li>Embroidery</li>
                      <li>Dyeing Techniques</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Ceramic Arts</h3>
                    <ul className="mt-2">
                      <li>Lusterware</li>
                      <li>Iznik Tiles</li>
                      <li>Mina'i Ware</li>
                      <li>Fritware</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Regional Styles
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Middle Eastern</h3>
                    <ul className="mt-2">
                      <li>Umayyad Architecture</li>
                      <li>Abbasid Innovations</li>
                      <li>Mamluk Style</li>
                      <li>Fatimid Art</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Asian Traditions</h3>
                    <ul className="mt-2">
                      <li>Mughal Architecture</li>
                      <li>Persian Gardens</li>
                      <li>Central Asian Styles</li>
                      <li>Indonesian Influence</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Expressions
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Modern Architecture</h3>
                    <ul className="mt-2">
                      <li>Contemporary Mosques</li>
                      <li>Islamic Centers</li>
                      <li>Cultural Institutions</li>
                      <li>Urban Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Digital Art</h3>
                    <ul className="mt-2">
                      <li>Digital Calligraphy</li>
                      <li>3D Modeling</li>
                      <li>Virtual Exhibitions</li>
                      <li>Interactive Installations</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-contributions-to-civilization" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Contributions to Civilization</h3>
                    <p className="text-sm text-muted-foreground">
                      Understanding the broader cultural impact of Islamic civilization
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-spirituality" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Spirituality</h3>
                    <p className="text-sm text-muted-foreground">
                      Exploring the spiritual wellsprings of Islamic artistic expression
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Continue your exploration through our{" "}
                  <Link href="/religion/islam/art-architecture" className="hover:underline">
                    Islamic Art & Architecture
                  </Link>{" "}
                  section. Compare artistic traditions in our{" "}
                  <Link href="/religion/comparative-art" className="hover:underline">
                    Comparative Religious Art
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/art-architecture">Explore Islamic Art</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-art">Compare Artistic Traditions</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </article>
  )
} 