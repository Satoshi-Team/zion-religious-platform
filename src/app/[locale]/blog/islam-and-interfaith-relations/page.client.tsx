import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islam & Interfaith Relations: Quranic Principles, Prophetic Examples & Dialogue | Religious Studies Blog",
  description: "Explore Islam's approach to interfaith relations: Quranic teachings on People of the Book (Ahl al-Kitab), prophetic examples (Medina Charter), historical interactions, and contemporary dialogue initiatives.",
  openGraph: {
    title: "Islam & Interfaith Relations: Quranic Principles, Prophetic Examples & Dialogue | Religious Studies Blog",
    description: "A comprehensive guide to interfaith relations in Islam, covering Quranic foundations (e.g., common word, no compulsion in religion), Prophetic guidance (Medina Charter, Najran delegation), historical precedents, and modern interfaith efforts.",
    type: "article",
    images: [
      {
        url: "/images/islam-interfaith-relations.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islam and Interfaith Relations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam & Interfaith Relations: Principles, Examples & Dialogue",
    description: "Explore Islam's approach to interfaith relations: Quranic teachings, prophetic examples, historical interactions, and contemporary dialogue.",
    images: ["/images/islam-interfaith-relations.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamAndInterfaithRelationsPage() {
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
          <span aria-current="page">Interfaith Relations</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islam and Interfaith Relations: Building Bridges of Understanding
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Religious Dialogue</Badge>
            <Badge variant="secondary">Peaceful Coexistence</Badge>
            <Badge variant="secondary">Comparative Religion</Badge>
            <Badge variant="secondary">People of the Book (Ahl al-Kitab)</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islam places significant emphasis on fostering understanding and peaceful relations with followers of other faiths.
            The Quran and Prophetic traditions (Sunnah) provide a comprehensive framework for interfaith dialogue,
            cooperation, and mutual respect, recognizing shared values and common humanity while upholding distinct
            theological tenets.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Quranic Foundations for Interfaith Engagement
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Core Principles</h3>
                    <ul className="mt-2">
                      <li><strong>No Compulsion in Religion:</strong> "There shall be no compulsion in [acceptance of] the religion." (Al-Baqarah 2:256)</li>
                      <li><strong>Recognizing Common Ground:</strong> "Say, 'O People of the Scripture (Ahl al-Kitab), come to a common word between us and you..." (Aal 'Imran 3:64)</li>
                      <li><strong>Justice and Kindness:</strong> "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes - from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly." (Al-Mumtahanah 60:8)</li>
                      <li><strong>Respectful Dialogue:</strong> "And do not argue with the People of the Scripture except in a way that is best..." (Al-'Ankabut 29:46)</li>
                      <li><strong>Diversity as Divine Will:</strong> "And if your Lord had willed, He could have made mankind one community; but they will not cease to differ." (Hud 11:118)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">People of the Book (Ahl al-Kitab)</h3>
                    <ul className="mt-2">
                      <li>Special status given to Jews and Christians as recipients of earlier revelations.</li>
                      <li>Permission to marry their chaste women and eat their permissible food.</li>
                      <li>Call for dialogue and finding commonalities in belief in One God and ethical principles.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Prophetic Examples (Sunnah) and Historical Precedents
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Key Historical Interactions</h3>
                    <ul className="mt-2">
                      <li><strong>The Constitution of Medina (Sahifat al-Madinah):</strong> Established a pluralistic society with rights and responsibilities for all communities, including Jews.</li>
                      <li><strong>Reception of the Najran Christians:</strong> Prophet Muhammad ﷺ hosted a Christian delegation in his mosque in Medina, allowing them to pray according to their tradition.</li>
                      <li><strong>Treaties with Jewish and Christian communities:</strong> Ensuring protection and freedom of religion.</li>
                      <li>Engagement with Zoroastrians and other religious groups.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Principles from Prophetic Conduct</h3>
                    <ul className="mt-2">
                      <li>Emphasis on justice, fairness, and good neighborliness.</li>
                      <li>Protection of non-Muslims (Dhimmis) under Islamic rule.</li>
                      <li>Encouragement of cooperation for common good.</li>
                      <li>Tolerance and respect for differing beliefs and practices.</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-medium mt-4">Golden Age of Islam</h3>
                <p className="text-sm text-muted-foreground">
                  During the Islamic Golden Age, scholars from diverse religious backgrounds (Muslim, Christian, Jewish) often collaborated in intellectual centers like the House of Wisdom in Baghdad, translating and advancing knowledge in various fields.
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Interfaith Dialogue and Initiatives
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Modern Efforts & Organizations</h3>
                    <ul className="mt-2">
                      <li>Formal dialogues (e.g., A Common Word Between Us and You initiative).</li>
                      <li>International interfaith organizations (e.g., KAICIID Dialogue Centre, Religions for Peace).</li>
                      <li>Local community-based initiatives and bridge-building projects.</li>
                      <li>Academic programs in interreligious studies.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Areas of Focus & Challenges</h3>
                    <ul className="mt-2">
                      <li>Addressing misunderstandings and stereotypes.</li>
                      <li>Promoting religious freedom and human rights.</li>
                      <li>Collaborating on social justice issues (poverty, environment, peace).</li>
                      <li>Navigating theological differences respectfully.</li>
                      <li>Countering extremism and religious intolerance.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-perspectives-on-peace-and-conflict-resolution" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Peace & Conflict Resolution in Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      Foundational principles for peaceful coexistence.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Ethics (Akhlaq)</h3>
                    <p className="text-sm text-muted-foreground">
                      Moral guidelines for interacting with others.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the historical context of the{" "}
                  <Link href="/islam/history/medina-charter" className="hover:underline">
                    Medina Charter
                  </Link>
                  , or learn about Islam's view on{" "}
                  <Link href="/islam/concepts/ahl-al-kitab" className="hover:underline">
                    Ahl al-Kitab (People of the Book)
                  </Link>
                  . See our section on{" "}
                  <Link href="/religion/comparative-dialogue" className="hover:underline">
                    Comparative Interfaith Dialogue
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/concepts/dhimmi">Status of Dhimmis</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/initiatives/a-common-word">A Common Word Initiative</Link>
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