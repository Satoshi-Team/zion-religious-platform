import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Perspectives on Social Justice & Human Rights | Religious Studies Blog",
  description: "Explore Islamic teachings on social justice (Adl, Qist) and human rights: Quranic foundations, Prophetic examples, historical context, and contemporary applications in areas like economic justice and equality.",
  openGraph: {
    title: "Islamic Perspectives on Social Justice & Human Rights | Religious Studies Blog",
    description: "A comprehensive guide to Islam's emphasis on social justice and human rights, covering key Quranic concepts (Adl, Qist, Ihsan), the Prophetic model, historical precedents, and relevance to modern challenges.",
    type: "article",
    images: [
      {
        url: "/images/islamic-social-justice.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Perspectives on Social Justice and Human Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Perspectives on Social Justice & Human Rights",
    description: "Explore Islamic teachings on social justice (Adl, Qist) and human rights: Quranic foundations, Prophetic examples, and contemporary applications.",
    images: ["/images/islamic-social-justice.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicPerspectivesOnSocialJusticeAndHumanRightsPage() {
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
          <span aria-current="page">Social Justice & Human Rights</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Perspectives on Social Justice and Human Rights
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Adl (Justice)</Badge>
            <Badge variant="secondary">Qist (Equity)</Badge>
            <Badge variant="secondary">Islamic Ethics</Badge>
            <Badge variant="secondary">Human Dignity (Karamah)</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islam places profound emphasis on social justice (Adl and Qist) and the upholding of human rights,
            considering them integral to faith and righteous living. The Quran and Sunnah provide a comprehensive
            framework for ensuring fairness, equality, compassion, and dignity for all individuals within society,
            regardless of their background.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Quranic Foundations and Key Concepts
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Core Principles</h3>
                    <ul className="mt-2">
                      <li><strong>Adl (Justice):</strong> Absolute fairness, impartiality, and giving everyone their due rights. A core attribute of God and a command for believers. (e.g., An-Nahl 16:90, Al-Ma'idah 5:8)</li>
                      <li><strong>Qist (Equity/Balance):</strong> Upholding justice in a balanced and equitable manner, ensuring fair distribution and preventing oppression. (e.g., Al-Hadid 57:25)</li>
                      <li><strong>Ihsan (Excellence/Benevolence):</strong> Going beyond mere justice to act with compassion, kindness, and excellence in all dealings. (e.g., Al-Baqarah 2:195)</li>
                      <li><strong>Karamah Insaniyyah (Human Dignity):</strong> Affirmation of the inherent dignity of every human being. (e.g., Al-Isra 17:70)</li>
                      <li><strong>Amanah (Trust):</strong> Responsibilities and trusts given to humans, including just governance and care for creation.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Specific Rights Emphasized</h3>
                    <ul className="mt-2">
                      <li>Right to Life and Security</li>
                      <li>Right to Freedom of Conscience and Religion (Al-Baqarah 2:256)</li>
                      <li>Right to Basic Needs (food, shelter, healthcare)</li>
                      <li>Right to Property and Economic Well-being</li>
                      <li>Right to Education and Knowledge</li>
                      <li>Right to Equality and Non-Discrimination (Al-Hujurat 49:13)</li>
                      <li>Rights of Women, Children, Orphans, and the Vulnerable</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Prophetic Teachings (Sunnah) and Historical Examples
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">The Prophet Muhammad ﷺ as a Model</h3>
                    <ul className="mt-2">
                      <li>Establishing justice in Medina (Constitution of Medina).</li>
                      <li>Advocacy for the rights of the poor, oppressed, and marginalized.</li>
                      <li>Emphasis on fair dealings in trade and social interactions.</li>
                      <li>Condemnation of tribalism, racism, and social hierarchies.</li>
                      <li>The Farewell Sermon: A charter of human rights.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Early Islamic Governance</h3>
                    <ul className="mt-2">
                      <li>Examples from the Rightly Guided Caliphs (Rashidun) in upholding justice and accountability.</li>
                      <li>Development of institutions for redress of grievances (Mazalim courts).</li>
                      <li>Welfare systems (Diwan) and social support mechanisms.</li>
                      <li>Protection of non-Muslim minorities (Dhimmis).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Issues and Applications
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Economic Justice</h3>
                    <ul className="mt-2">
                      <li>Zakat (obligatory charity) and Sadaqah (voluntary charity) as tools for wealth redistribution.</li>
                      <li>Prohibition of Riba (usury/interest) and exploitative economic practices.</li>
                      <li>Fair wages, workers' rights, and ethical business conduct.</li>
                      <li>Addressing poverty and inequality.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Social and Political Rights</h3>
                    <ul className="mt-2">
                      <li>Promoting good governance, transparency, and accountability (Shura).</li>
                      <li>Combating corruption and tyranny.</li>
                      <li>Ensuring minority rights and religious freedom.</li>
                      <li>Advocating for political participation and civil liberties.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Gender Justice & Equality</h3>
                    <ul className="mt-2">
                      <li>Affirming spiritual equality of men and women.</li>
                      <li>Ensuring women's rights in marriage, inheritance, education, and public life.</li>
                      <li>Addressing cultural practices that contradict Islamic principles of gender justice.</li>
                      <li>Empowerment of women in society.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Environmental Justice</h3>
                    <ul className="mt-2">
                      <li>Humans as stewards (Khalifa) of the Earth.</li>
                      <li>Responsibility to protect and preserve the environment.</li>
                      <li>Condemnation of wastefulness (Israf) and corruption of the Earth (Fasad fil-Ardh).</li>
                      <li>Sustainable development and resource management.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Racial Justice and Equality</h3>
                    <ul className="mt-2">
                      <li>Strong condemnation of racism and tribalism (Asabiyyah).</li>
                      <li>Emphasis on the unity of humanity.</li>
                      <li>Promoting intercultural understanding and harmony.</li>
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-lg font-medium">Global Justice</h3>
                    <ul className="mt-2">
                      <li>Concern for the oppressed and vulnerable worldwide.</li>
                      <li>Advocacy for fair international relations and trade.</li>
                      <li>Contribution to humanitarian aid and development.</li>
                      <li>Seeking peace and conflict resolution based on justice.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Challenges and Ongoing Discourse
                </h2>
                <Separator className="my-4" />
                <ul className="mt-2">
                  <li>Reconciling traditional interpretations with modern human rights frameworks.</li>
                  <li>Addressing gaps between Islamic ideals and practices in some Muslim societies.</li>
                  <li>Countering extremist interpretations that violate principles of justice and compassion.</li>
                  <li>The role of Ijtihad (independent reasoning) in evolving understandings of social justice.</li>
                  <li>Promoting education and awareness about Islamic teachings on justice and rights.</li>
                </ul>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-law-sharia-sources-and-applications" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Law (Sharia)</h3>
                    <p className="text-sm text-muted-foreground">
                      The legal framework for implementing justice.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Ethics (Akhlaq)</h3>
                    <p className="text-sm text-muted-foreground">
                      The moral compass for just behavior and societal well-being.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore key concepts like{" "}
                  <Link href="/islam/concepts/adl-qist" className="hover:underline">
                    Adl and Qist in Islam
                  </Link>
                  , or the historical significance of the{" "}
                  <Link href="/islam/history/farewell-sermon" className="hover:underline">
                    Prophet's Farewell Sermon
                  </Link>
                  . Consider contemporary movements for{" "}
                  <Link href="/islam/movements/social-justice-activism" className="hover:underline">
                    Islamic Social Justice Activism
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/concepts/maqasid-al-sharia">Maqasid al-Sharia</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/contemporary-issues/human-rights">Human Rights in Islam</Link>
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