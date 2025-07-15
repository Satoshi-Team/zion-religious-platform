import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Role of Women in Islam: Rights, Responsibilities, and Contributions | Religious Studies Blog",
  description: "Explore the multifaceted role of women in Islamic tradition - from spiritual equality to social contributions. Understand the rights, responsibilities, and historical achievements of Muslim women.",
  openGraph: {
    title: "Role of Women in Islam: Rights, Responsibilities, and Contributions | Religious Studies Blog",
    description: "Comprehensive overview of the status, rights, and contributions of women in Islam, drawing from scripture, history, and contemporary contexts.",
    type: "article",
    images: [
      {
        url: "/images/role-of-women-islam.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Role of Women in Islam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Role of Women in Islam: Rights, Responsibilities, and Contributions",
    description: "Comprehensive overview of the status, rights, and contributions of women in Islam.",
    images: ["/images/role-of-women-islam.jpg"], // Placeholder - ensure image exists
  },
}

export default function RoleOfWomenInIslamPage() {
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
          <span aria-current="page">Role of Women</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Role of Women in Islam: Rights, Responsibilities, and Contributions
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Social Issues</Badge>
            <Badge variant="secondary">Gender Studies</Badge>
            <Badge variant="secondary">Islamic Jurisprudence</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The role of women in Islam encompasses spiritual equality, social responsibilities, and
            historical achievements. This exploration examines the rights, duties, and contributions
            of Muslim women throughout Islamic history and in contemporary society, addressing common
            misconceptions and highlighting diverse perspectives within the tradition.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Spiritual Foundation
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Quranic Principles</h3>
                    <ul className="mt-2">
                      <li>Spiritual Equality (e.g., Al-Ahzab 33:35)</li>
                      <li>Moral Responsibility (e.g., Al-Nisa 4:1)</li>
                      <li>Educational Rights (e.g., Al-Tawbah 9:122)</li>
                      <li>Economic Rights (e.g., Al-Nisa 4:32)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Prophetic Teachings (Sunnah)</h3>
                    <ul className="mt-2">
                      <li>Emphasis on Respect and Dignity</li>
                      <li>Advocacy for Educational Access</li>
                      <li>Encouragement of Social Participation</li>
                      <li>Provision of Spiritual Guidance for all</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Historical Contributions
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Early Muslim Women</h3>
                    <ul className="mt-2">
                      <li>Khadijah bint Khuwaylid (Entrepreneur, First Believer)</li>
                      <li>Aisha bint Abi Bakr (Scholar, Narrator of Hadith)</li>
                      <li>Fatimah bint Muhammad (Spiritual Figure)</li>
                      <li>Umm Salamah (Political Advisor, Scholar)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Scholarly & Social Achievements</h3>
                    <ul className="mt-2">
                      <li>Hadith Transmission and Preservation</li>
                      <li>Legal Scholarship and Jurisprudence</li>
                      <li>Poetry, Literature, and Arts</li>
                      <li>Establishment of Endowments (Waqf)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Rights and Responsibilities in Society
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Family Life</h3>
                    <ul className="mt-2">
                      <li>Marriage as a Partnership (Consent, Mahr)</li>
                      <li>Parental Responsibilities and Rights</li>
                      <li>Inheritance Rights (Defined Shares)</li>
                      <li>Rights within Marriage and Divorce</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Community Participation</h3>
                    <ul className="mt-2">
                      <li>Access to Education and Knowledge</li>
                      <li>Participation in Social Services</li>
                      <li>Engagement in Charitable Work</li>
                      <li>Role in Public and Political Life (Historical & Modern)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Issues and Perspectives
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Modern Challenges</h3>
                    <ul className="mt-2">
                      <li>Debates on Gender Equality and Equity</li>
                      <li>Access to Education and Leadership Roles</li>
                      <li>Workplace Rights and Opportunities</li>
                      <li>Addressing Cultural vs. Religious Practices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Positive Developments & Activism</h3>
                    <ul className="mt-2">
                      <li>Increasing Educational Achievement</li>
                      <li>Growing Professional Success</li>
                      <li>Islamic Feminism and Reform Movements</li>
                      <li>Interfaith Dialogue and Collaboration</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Cultural Expressions and Diversity
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Regional Variations</h3>
                    <ul className="mt-2">
                      <li>Diverse Cultural Interpretations of Modesty</li>
                      <li>Variations in Social Customs and Traditions</li>
                      <li>Impact of Local Histories and Legal Systems</li>
                      <li>Resilience of Women in Diverse Contexts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Adaptations & Identity</h3>
                    <ul className="mt-2">
                      <li>Contemporary Islamic Fashion and Arts</li>
                      <li>Digital Activism and Online Communities</li>
                      <li>Cultural Innovation and Expression</li>
                      <li>Navigating Global Identities</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-views-on-ethics-and-morality" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Ethics & Morality</h3>
                    <p className="text-sm text-muted-foreground">
                      Ethical framework for women's rights and responsibilities.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-law-sharia" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Law (Sharia)</h3>
                    <p className="text-sm text-muted-foreground">
                      Legal perspectives on women's status and rights.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your understanding through our dedicated section on{" "}
                  <Link href="/religion/islam/women" className="hover:underline">
                    Women in Islam
                  </Link>
                  . Compare with other traditions in our{" "}
                  <Link href="/religion/comparative-gender-roles" className="hover:underline">
                    Comparative Gender Roles in Religion
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/women">Explore Women in Islam</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-gender-roles">Compare Gender Roles</Link>
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