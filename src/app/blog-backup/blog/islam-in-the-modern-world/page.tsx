import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islam in the Modern World: Challenges, Adaptations & Opportunities | Religious Studies Blog",
  description: "Explore Islam's engagement with modernity: challenges (globalization, secularism, Islamophobia), adaptations (Ijtihad, educational reform), and opportunities (digital da'wah, interfaith dialogue).",
  openGraph: {
    title: "Islam in the Modern World: Challenges, Adaptations & Opportunities | Religious Studies Blog",
    description: "A comprehensive look at how Islam navigates the modern world, addressing contemporary challenges like secularism and Islamophobia, adapting through Ijtihad and reform, and seizing opportunities in technology and global dialogue.",
    type: "article",
    images: [
      {
        url: "/images/islam-modern-world.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islam in the Modern World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam in the Modern World: Challenges, Adaptations & Opportunities",
    description: "Explore Islam's engagement with modernity: challenges, adaptations (Ijtihad, reform), and opportunities (digital da'wah, interfaith dialogue).",
    images: ["/images/islam-modern-world.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamInTheModernWorldPage() {
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
          <span aria-current="page">Modern World</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islam in the Modern World: Challenges, Adaptations, and Opportunities
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Contemporary Islam</Badge>
            <Badge variant="secondary">Globalization</Badge>
            <Badge variant="secondary">Social Change</Badge>
            <Badge variant="secondary">Ijtihad & Reform</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The contemporary world presents Muslim societies with a unique set of challenges, opportunities, and imperatives for adaptation.
            This exploration examines how Islamic teachings and communities engage with globalization, technological advancements,
            social transformations, and intellectual currents, while striving to maintain faith, identity, and contribute positively to humanity.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Key Challenges Facing Muslims Today
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Socio-Political & Economic Issues</h3>
                    <ul className="mt-2">
                      <li>Political instability and conflict in some Muslim-majority regions.</li>
                      <li>Economic disparities and development challenges.</li>
                      <li>Governance, human rights, and rule of law issues.</li>
                      <li>Impact of post-colonial legacies and geopolitics.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Cultural & Ideological Challenges</h3>
                    <ul className="mt-2">
                      <li><strong>Globalization & Secularism:</strong> Navigating cultural homogenization and the influence of secular ideologies.</li>
                      <li><strong>Islamophobia & Misrepresentation:</strong> Countering negative stereotypes and discrimination.</li>
                      <li><strong>Extremism & Radicalization:</strong> Addressing deviant interpretations and violence falsely attributed to Islam.</li>
                      <li>Maintaining religious identity and values amidst modernity.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Adaptations and Intellectual Responses (Ijtihad & Islah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Revival of Ijtihad (Independent Reasoning)</h3>
                    <ul className="mt-2">
                      <li>Reinterpreting Islamic texts to address contemporary issues (e.g., Maqasid al-Sharia).</li>
                      <li>Development of contemporary Islamic jurisprudence (Fiqh al-Nawazil, Fiqh al-Aqalliyyat).</li>
                      <li>Promoting critical thinking and scholarly engagement.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Islah (Reform) Movements</h3>
                    <ul className="mt-2">
                      <li>Educational reforms in religious and secular institutions.</li>
                      <li>Social reforms addressing issues like poverty, gender equity, and social justice.</li>
                      <li>Efforts to promote good governance and combat corruption.</li>
                      <li>Emphasis on spiritual renewal and ethical development.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Opportunities and Positive Developments
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Technological Advancement & Communication</h3>
                    <ul className="mt-2">
                      <li><strong>Digital Da'wah:</strong> Utilizing internet and social media for Islamic education and outreach.</li>
                      <li>Access to Islamic knowledge and resources globally.</li>
                      <li>Online Muslim communities and networks.</li>
                      <li>Development of Islamic apps and digital tools.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Global Presence & Interfaith Engagement</h3>
                    <ul className="mt-2">
                      <li>Growth of Muslim communities in the West and globally.</li>
                      <li>Increased participation in interfaith dialogue and cooperation.</li>
                      <li>Contributions to global discussions on ethics, peace, and social issues.</li>
                      <li>Emergence of influential Muslim thinkers, activists, and artists on the world stage.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Future Outlook and Aspirations
                </h2>
                <Separator className="my-4" />
                <ul className="mt-2">
                  <li>Striving for just and prosperous societies guided by Islamic values.</li>
                  <li>Enhancing educational standards and scientific research.</li>
                  <li>Promoting intra-faith unity and understanding.</li>
                  <li>Contributing to global peace, environmental sustainability, and human development.</li>
                  <li>Empowering youth and women in Muslim communities.</li>
                </ul>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Ethics (Akhlaq)</h3>
                    <p className="text-sm text-muted-foreground">
                      Guiding principles for navigating modern complexities.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islam-and-interfaith-relations" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islam and Interfaith Relations</h3>
                    <p className="text-sm text-muted-foreground">
                      Building bridges in a globalized world.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Delve into discussions on{" "}
                  <Link href="/islam/concepts/ijtihad" className="hover:underline">
                    Ijtihad and Islamic Reform
                  </Link>
                  , or explore the impact of{" "}
                  <Link href="/islam/society/globalization" className="hover:underline">
                    Globalization on Muslim Societies
                  </Link>
                  . Consider the role of{" "}
                  <Link href="/islam/movements/islamic-feminism" className="hover:underline">
                    Islamic Feminism
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/contemporary-issues/islamophobia">Addressing Islamophobia</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/technology/digital-islam">Digital Islam</Link>
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