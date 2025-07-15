import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Introduction to Islam: Origins and Historical Context | Religious Studies Blog",
  description: "Explore the foundational history and context of Islam, from its origins in Arabia to its development as a major world religion. Learn about key historical events, cultural context, and early Islamic society.",
  openGraph: {
    title: "Introduction to Islam: Origins and Historical Context | Religious Studies Blog",
    description: "Comprehensive guide to the origins and historical development of Islam, covering pre-Islamic Arabia, the Prophet Muhammad, and the early Islamic era.",
    type: "article",
    images: [
      {
        url: "/images/introduction-to-islam.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Introduction to Islam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction to Islam: Origins and Historical Context",
    description: "Explore the foundational history and context of Islam, from its origins in Arabia to its development as a major world religion.",
    images: ["/images/introduction-to-islam.jpg"], // Placeholder - ensure image exists
  },
}

export default function IntroductionToIslamPage() {
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
          <span aria-current="page">Origins & History</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Introduction to Islam: Origins and Historical Context
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Islamic History</Badge>
            <Badge variant="secondary">Religious Origins</Badge>
            <Badge variant="secondary">Early Civilizations</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islam, one of the world's major monotheistic religions, emerged in the 7th century CE
            in the Arabian Peninsula. Its historical development, rich cultural context, and profound
            spiritual teachings have shaped world history and continue to influence global civilization
            today.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Pre-Islamic Arabia (Jahiliyyah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Social Context</h3>
                    <ul className="mt-2">
                      <li>Tribal society structure (Quraysh, etc.)</li>
                      <li>Trade and commerce (Mecca as a hub)</li>
                      <li>Poetry and oral tradition (Souq Okaz)</li>
                      <li>Customary laws and practices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Religious Background</h3>
                    <ul className="mt-2">
                      <li>Polytheistic beliefs and idol worship</li>
                      <li>Presence of Abrahamic faiths (Judaism, Christianity)</li>
                      <li>Hanif tradition (Monotheistic seekers)</li>
                      <li>Significance of the Ka'bah</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Prophet Muhammad ﷺ (c. 570-632 CE)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Early Life & Character</h3>
                    <ul className="mt-2">
                      <li>Birth in Mecca and noble lineage (Banu Hashim)</li>
                      <li>Orphaned childhood and upbringing</li>
                      <li>Reputation as Al-Amin (The Trustworthy)</li>
                      <li>Marriage to Khadijah bint Khuwaylid</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Prophetic Mission</h3>
                    <ul className="mt-2">
                      <li>First revelation in Cave Hira (610 CE)</li>
                      <li>Early followers (Khadijah, Ali, Abu Bakr)</li>
                      <li>Period of persecution in Mecca</li>
                      <li>The Hijra (Migration to Medina) in 622 CE</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Establishment and Spread of Islam
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">The Medinan Period</h3>
                    <ul className="mt-2">
                      <li>Formation of the first Islamic state</li>
                      <li>The Constitution of Medina (Sahifat al-Madinah)</li>
                      <li>Community building (Ummah)</li>
                      <li>Key battles and treaties</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Social and Ethical Reforms</h3>
                    <ul className="mt-2">
                      <li>Emphasis on monotheism (Tawhid)</li>
                      <li>Principles of social justice and equality</li>
                      <li>Elevation of women's status</li>
                      <li>Economic reforms (Zakat, prohibition of Riba)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Early Islamic Caliphate
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">The Rashidun Caliphs (632-661 CE)</h3>
                    <ul className="mt-2">
                      <li>Abu Bakr (Consolidation of Arabia)</li>
                      <li>Umar ibn al-Khattab (Expansion and administration)</li>
                      <li>Uthman ibn Affan (Compilation of the Quran)</li>
                      <li>Ali ibn Abi Talib (Challenges and internal divisions)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Expansion and Governance</h3>
                    <ul className="mt-2">
                      <li>Rapid territorial expansion</li>
                      <li>Development of administrative systems (Diwan)</li>
                      <li>Treatment of non-Muslim populations (Dhimmi)</li>
                      <li>Early legal and jurisprudential developments</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Cultural and Intellectual Development
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Preservation of Knowledge</h3>
                    <ul className="mt-2">
                      <li>Importance of literacy and learning</li>
                      <li>Development of Arabic script</li>
                      <li>Early schools (Maktab) and study circles</li>
                      <li>Compilation of Hadith</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Early Islamic Society</h3>
                    <ul className="mt-2">
                      <li>Urban centers (Medina, Kufa, Basra)</li>
                      <li>Trade and economic activity</li>
                      <li>Diversity of cultures within the Ummah</li>
                      <li>Beginnings of Islamic art and architecture</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-life-and-teachings-of-prophet-muhammad" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Life of Prophet Muhammad ﷺ</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed biography and teachings of the Prophet.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/the-five-pillars-of-islam" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Five Pillars</h3>
                    <p className="text-sm text-muted-foreground">
                      Core practices and obligations in Islam.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your understanding through our dedicated section on{" "}
                  <Link href="/religion/islam/history" className="hover:underline">
                    Islamic History
                  </Link>
                  . Explore religious developments in our{" "}
                  <Link href="/religion/comparative-history" className="hover:underline">
                    Comparative Religious History
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/history">Explore Islamic History</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-history">Compare Histories</Link>
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