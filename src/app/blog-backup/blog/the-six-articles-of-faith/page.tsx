import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "The Six Articles of Faith in Islam | Religious Studies Blog",
  description: "Explore the fundamental beliefs of Islam through its Six Articles of Faith: Belief in Allah, Angels, Divine Books, Prophets, Day of Judgment, and Divine Decree.",
  openGraph: {
    title: "The Six Articles of Faith in Islam | Religious Studies Blog",
    description: "Comprehensive guide to the core beliefs and theological foundations of Islam",
    type: "article",
    images: [
      {
        url: "/images/six-articles.jpg",
        width: 1200,
        height: 630,
        alt: "The Six Articles of Faith in Islam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Six Articles of Faith in Islam",
    description: "Comprehensive guide to the core beliefs and theological foundations of Islam",
    images: ["/images/six-articles.jpg"],
  },
}

export default function SixArticlesPage() {
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
          <span aria-current="page">Articles of Faith</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Six Articles of Faith: Core Beliefs in Islam
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Core Beliefs</Badge>
            <Badge variant="secondary">Islamic Theology</Badge>
            <Badge variant="secondary">Faith Foundations</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Six Articles of Faith (Arkan al-Iman) constitute the foundational beliefs of Islam,
            shaping a Muslim's worldview and understanding of existence. These articles establish
            the theological framework through which Muslims interpret reality, purpose, and their
            relationship with the Divine.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in Allah (Tawhid)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Divine Unity</h3>
                    <ul className="mt-2">
                      <li>Absolute monotheism</li>
                      <li>Divine attributes</li>
                      <li>Creator and Sustainer</li>
                      <li>Perfect and unique</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Implications</h3>
                    <ul className="mt-2">
                      <li>Worship direction</li>
                      <li>Life purpose</li>
                      <li>Moral foundation</li>
                      <li>Spiritual orientation</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in Angels (Malaikah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Angelic Nature</h3>
                    <ul className="mt-2">
                      <li>Created from light</li>
                      <li>Specific roles</li>
                      <li>Divine servants</li>
                      <li>Constant worship</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Key Angels</h3>
                    <ul className="mt-2">
                      <li>Jibril (Gabriel)</li>
                      <li>Mikail (Michael)</li>
                      <li>Israfil</li>
                      <li>Recording angels</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in Divine Books (Kutub)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Sacred Texts</h3>
                    <ul className="mt-2">
                      <li>The Quran</li>
                      <li>Previous scriptures</li>
                      <li>Divine guidance</li>
                      <li>Preservation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Significance</h3>
                    <ul className="mt-2">
                      <li>Moral guidance</li>
                      <li>Legal framework</li>
                      <li>Historical context</li>
                      <li>Spiritual wisdom</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in Prophets (Rusul)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Prophetic Mission</h3>
                    <ul className="mt-2">
                      <li>Divine messengers</li>
                      <li>Moral exemplars</li>
                      <li>Human nature</li>
                      <li>Progressive revelation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Key Prophets</h3>
                    <ul className="mt-2">
                      <li>Muhammad (ﷺ)</li>
                      <li>Ibrahim (Abraham)</li>
                      <li>Musa (Moses)</li>
                      <li>Isa (Jesus)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in the Day of Judgment (Yawm al-Qiyamah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Final Day</h3>
                    <ul className="mt-2">
                      <li>Resurrection</li>
                      <li>Accountability</li>
                      <li>Divine justice</li>
                      <li>Eternal life</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Implications</h3>
                    <ul className="mt-2">
                      <li>Moral responsibility</li>
                      <li>Life purpose</li>
                      <li>Ethical behavior</li>
                      <li>Hope and fear</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Belief in Divine Decree (Qadar)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Divine Will</h3>
                    <ul className="mt-2">
                      <li>Predestination</li>
                      <li>Free will</li>
                      <li>Divine knowledge</li>
                      <li>Human responsibility</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Understanding</h3>
                    <ul className="mt-2">
                      <li>Trust in Allah</li>
                      <li>Life trials</li>
                      <li>Personal effort</li>
                      <li>Divine wisdom</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-five-pillars-of-islam" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Five Pillars of Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore the fundamental practices in Islam
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-theology" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Theology</h3>
                    <p className="text-sm text-muted-foreground">
                      Delve deeper into Islamic theological concepts
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Expand your knowledge through our{" "}
                  <Link href="/religion/islam/beliefs" className="hover:underline">
                    Islamic Beliefs
                  </Link>{" "}
                  section. Compare belief systems in our{" "}
                  <Link href="/religion/comparative-theology" className="hover:underline">
                    Comparative Theology
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/beliefs">Explore Islamic Beliefs</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-theology">Compare Beliefs</Link>
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