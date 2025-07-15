import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "The Life and Teachings of Prophet Muhammad ﷺ | Religious Studies Blog",
  description: "Explore the life, mission, and teachings of Prophet Muhammad ﷺ - from his early years in Mecca to his final days in Medina. Understand his impact on Islamic civilization and his relevance today.",
  openGraph: {
    title: "The Life and Teachings of Prophet Muhammad ﷺ | Religious Studies Blog",
    description: "A comprehensive guide to the life, character, prophetic mission, and enduring teachings of Prophet Muhammad ﷺ, the final messenger in Islam.",
    type: "article",
    images: [
      {
        url: "/images/prophet-muhammad-life.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Life and Teachings of Prophet Muhammad ﷺ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Life and Teachings of Prophet Muhammad ﷺ",
    description: "Explore the life, mission, and teachings of Prophet Muhammad ﷺ - from his early years in Mecca to his final days in Medina.",
    images: ["/images/prophet-muhammad-life.jpg"], // Placeholder - ensure image exists
  },
}

export default function LifeAndTeachingsOfProphetMuhammadPage() {
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
          <span aria-current="page">Prophet Muhammad ﷺ</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Life and Teachings of Prophet Muhammad ﷺ
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Prophetic Biography (Seerah)</Badge>
            <Badge variant="secondary">Islamic History</Badge>
            <Badge variant="secondary">Moral Exemplar</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Prophet Muhammad ﷺ (peace be upon him) is the final messenger of Allah in Islam,
            whose life and teachings form the bedrock of Islamic civilization.
            His exemplary character (Sunnah), profound wisdom, and transformative leadership
            continue to guide over 1.8 billion Muslims worldwide, offering a timeless model for spiritual, ethical, and social conduct.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Early Life in Mecca (c. 570-610 CE)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Birth and Lineage</h3>
                    <ul className="mt-2">
                      <li>Born in the "Year of the Elephant" (Amul-Fil)</li>
                      <li>Belonged to the esteemed Banu Hashim clan of Quraysh</li>
                      <li>Father: Abdullah ibn Abd al-Muttalib (died before his birth)</li>
                      <li>Mother: Aminah bint Wahb (died when he was six)</li>
                      <li>Raised by grandfather Abd al-Muttalib, then uncle Abu Talib</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Character and Reputation</h3>
                    <ul className="mt-2">
                      <li>Known as Al-Amin (The Trustworthy) and As-Sadiq (The Truthful)</li>
                      <li>Renowned for honesty in trade and conduct</li>
                      <li>Sought as a mediator in tribal disputes (e.g., Black Stone placement)</li>
                      <li>Inclined towards contemplation and reflection</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Prophetic Call (610 CE)
                </h2>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Read! In the Name of your Lord Who has created (all that exists). He has created man from a clot. Read! And your Lord is the Most Generous. Who has taught (the writing) by the pen. He has taught man that which he knew not."
                    <footer className="mt-2 text-sm text-muted-foreground">
                      — Quran 96:1-5 (Surah Al-Alaq)
                    </footer>
                  </blockquote>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium">The First Revelation</h3>
                      <ul className="mt-2">
                        <li>Received at age 40 in the Cave of Hira</li>
                        <li>Angel Jibril (Gabriel) delivered the message</li>
                        <li>Initial period of private preaching</li>
                        <li>First believers: Khadijah, Ali, Zayd, Abu Bakr</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Public Proclamation & Opposition</h3>
                      <ul className="mt-2">
                        <li>Open call to Islam after three years</li>
                        <li>Rejection of idolatry and call to monotheism (Tawhid)</li>
                        <li>Intense opposition from Meccan aristocracy</li>
                        <li>Persecution of early Muslims</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Meccan Period: Perseverance and Trials (610-622 CE)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Key Challenges</h3>
                    <ul className="mt-2">
                      <li>Social and economic boycott of Banu Hashim</li>
                      <li>Migration of some Muslims to Abyssinia (Ethiopia)</li>
                      <li>The "Year of Sorrow" (Aam al-Huzn): Deaths of Khadijah and Abu Talib</li>
                      <li>The Isra and Mi'raj (Night Journey and Ascension)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Core Meccan Teachings</h3>
                    <ul className="mt-2">
                      <li>Oneness of God (Allah) and rejection of shirk</li>
                      <li>Resurrection and Day of Judgment</li>
                      <li>Moral accountability and ethical conduct</li>
                      <li>Importance of prayer, charity, and justice</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Hijra and Establishment in Medina (622-632 CE)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Migration and Community Building</h3>
                    <ul className="mt-2">
                      <li>The Hijra (Migration) from Mecca to Yathrib (Medina)</li>
                      <li>Establishment of the first Islamic state and community (Ummah)</li>
                      <li>The Constitution of Medina (Sahifat al-Madinah)</li>
                      <li>Brotherhood between Muhajirun (emigrants) and Ansar (helpers)</li>
                      <li>Building of Masjid an-Nabawi (The Prophet's Mosque)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Major Events and Developments</h3>
                    <ul className="mt-2">
                      <li>Key battles: Badr, Uhud, Khandaq (Trench)</li>
                      <li>Treaty of Hudaybiyyah</li>
                      <li>Conquest of Mecca (Fath Makkah) peacefully</li>
                      <li>The Farewell Pilgrimage (Hajjat al-Wada) and Sermon</li>
                      <li>Passing of the Prophet ﷺ in 632 CE</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Key Teachings and Principles (Sunnah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Spiritual Guidance</h3>
                    <ul className="mt-2">
                      <li>Emphasis on sincere worship (Ikhlas)</li>
                      <li>Regular prayer (Salah) and remembrance of God (Dhikr)</li>
                      <li>Fasting, charity (Zakat), and pilgrimage (Hajj)</li>
                      <li>Personal development and self-purification (Tazkiyah)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Moral and Ethical Conduct</h3>
                    <ul className="mt-2">
                      <li>Honesty, trustworthiness, and integrity</li>
                      <li>Mercy (Rahmah), compassion, and forgiveness</li>
                      <li>Justice (Adl) and fairness in all dealings</li>
                      <li>Humility, patience (Sabr), and gratitude (Shukr)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Social Principles</h3>
                    <ul className="mt-2">
                      <li>Equality of all humans before God</li>
                      <li>Rights and kind treatment of women, children, orphans</li>
                      <li>Respect for neighbors and elders</li>
                      <li>Importance of family and community bonds</li>
                      <li>Justice for the oppressed and care for the needy</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Legacy and Impact
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Historical and Civilizational Impact</h3>
                    <ul className="mt-2">
                      <li>Unification of the Arabian Peninsula</li>
                      <li>Foundation of Islamic civilization and its Golden Age</li>
                      <li>Preservation and advancement of knowledge</li>
                      <li>Spread of a universal message of peace and submission to God</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Contemporary Relevance</h3>
                    <ul className="mt-2">
                      <li>The Prophet ﷺ as Uswa Hasanah (Excellent Model)</li>
                      <li>Source of moral, ethical, and spiritual guidance</li>
                      <li>Example of compassionate leadership and social reform</li>
                      <li>Inspiration for personal growth and community development</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-quran-structure-themes-and-interpretation" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Quran</h3>
                    <p className="text-sm text-muted-foreground">
                      Divine revelation received by Prophet Muhammad ﷺ.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/hadith-literature-and-its-significance" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hadith & Sunnah</h3>
                    <p className="text-sm text-muted-foreground">
                      Recorded sayings and actions of the Prophet ﷺ.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore deeper into the life of the Prophet through our dedicated section on the{" "}
                  <Link href="/religion/islam/prophet-muhammad" className="hover:underline">
                    Seerah (Prophetic Biography)
                  </Link>
                  . Understand his role alongside other messengers in our{" "}
                  <Link href="/religion/comparative-prophets" className="hover:underline">
                    Comparative Study of Prophets
                  </Link>
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/prophet-muhammad">Explore Seerah</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-prophets">Compare Prophets</Link>
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