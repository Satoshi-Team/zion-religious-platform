import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Festivals and Celebrations | Religious Studies Blog",
  description: "Explore the major Islamic festivals and celebrations, including Eid al-Fitr, Eid al-Adha, and other significant religious observances in the Islamic calendar.",
  openGraph: {
    title: "Islamic Festivals and Celebrations | Religious Studies Blog",
    description: "Comprehensive guide to Islamic festivals, celebrations, and religious observances",
    type: "article",
    images: [
      {
        url: "/images/islamic-festivals.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Festivals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Festivals and Celebrations",
    description: "Comprehensive guide to Islamic festivals, celebrations, and religious observances",
    images: ["/images/islamic-festivals.jpg"],
  },
}

export default function IslamicFestivalsPage() {
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
          <span aria-current="page">Festivals</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Festivals: Celebrating Faith and Community
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Religious Celebrations</Badge>
            <Badge variant="secondary">Community Events</Badge>
            <Badge variant="secondary">Sacred Times</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islamic festivals mark significant religious occasions and historical events in the
            Muslim calendar. These celebrations combine spiritual observance with communal
            gatherings, fostering unity, joy, and remembrance within the Muslim community while
            reinforcing religious values and cultural traditions.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Eid al-Fitr
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Significance</h3>
                    <ul className="mt-2">
                      <li>End of Ramadan</li>
                      <li>Breaking the fast</li>
                      <li>Spiritual renewal</li>
                      <li>Community unity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Observances</h3>
                    <ul className="mt-2">
                      <li>Special prayers</li>
                      <li>Charitable giving</li>
                      <li>Family gatherings</li>
                      <li>Festive meals</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Eid al-Adha
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Historical Significance</h3>
                    <ul className="mt-2">
                      <li>Prophet Ibrahim's sacrifice</li>
                      <li>Hajj completion</li>
                      <li>Divine obedience</li>
                      <li>Spiritual devotion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Practices</h3>
                    <ul className="mt-2">
                      <li>Animal sacrifice</li>
                      <li>Meat distribution</li>
                      <li>Community prayers</li>
                      <li>Family celebrations</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Islamic New Year
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Historical Context</h3>
                    <ul className="mt-2">
                      <li>Hijri calendar start</li>
                      <li>Prophet's migration</li>
                      <li>Islamic civilization</li>
                      <li>Historical reflection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Observances</h3>
                    <ul className="mt-2">
                      <li>Quiet reflection</li>
                      <li>Historical lessons</li>
                      <li>Community programs</li>
                      <li>Special prayers</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Prophet's Birthday (Mawlid)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Celebrations</h3>
                    <ul className="mt-2">
                      <li>Prophetic biography</li>
                      <li>Poetry recitation</li>
                      <li>Communal gatherings</li>
                      <li>Charitable acts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Cultural Variations</h3>
                    <ul className="mt-2">
                      <li>Regional customs</li>
                      <li>Traditional foods</li>
                      <li>Special programs</li>
                      <li>Community events</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Sacred Nights
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Special Occasions</h3>
                    <ul className="mt-2">
                      <li>Night of Power (Laylat al-Qadr)</li>
                      <li>Night Journey (Isra wal Miraj)</li>
                      <li>Mid-Shaban (Laylat al-Baraat)</li>
                      <li>First revelation (Laylat al-Qadr)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Observances</h3>
                    <ul className="mt-2">
                      <li>Night prayers</li>
                      <li>Quran recitation</li>
                      <li>Spiritual reflection</li>
                      <li>Special supplications</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-calendar" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Calendar</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand the lunar calendar system that determines Islamic festivals
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-worship" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Worship</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore the devotional practices during Islamic festivals
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your understanding through our{" "}
                  <Link href="/religion/islam/festivals" className="hover:underline">
                    Islamic Festivals
                  </Link>{" "}
                  section. Compare celebrations in our{" "}
                  <Link href="/religion/comparative-festivals" className="hover:underline">
                    Comparative Religious Festivals
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/festivals">Explore Islamic Festivals</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-festivals">Compare Festival Traditions</Link>
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