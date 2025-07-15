import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Perspectives on Technology & Innovation: Ethics, Progress & Tradition | Religious Studies Blog",
  description: "Explore Islam's engagement with technology (Sina'a) and innovation (Ibda'). Understand the ethical framework (Adab, Maslaha), historical technological achievements (Al-Jazari), and contemporary issues like AI and digital ethics.",
  openGraph: {
    title: "Islamic Perspectives on Technology & Innovation: Ethics, Progress & Tradition | Religious Studies Blog",
    description: "A comprehensive guide to Islamic views on technology and innovation, covering ethical guidelines, historical contributions, and modern challenges including AI, bioethics, and digital transformation from an Islamic standpoint.",
    type: "article",
    images: [
      {
        url: "/images/islamic-technology-innovation.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Perspectives on Technology and Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Perspectives on Technology & Innovation: Ethics, Progress & Tradition",
    description: "Explore Islam's engagement with technology (Sina'a) and innovation (Ibda'), covering ethical frameworks, historical achievements, and contemporary issues.",
    images: ["/images/islamic-technology-innovation.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicPerspectivesOnTechnologyAndInnovationPage() {
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
          <span aria-current="page">Technology & Innovation</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Perspectives on Technology (Sina'a) and Innovation (Ibda')
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Sina'a (Technology)</Badge>
            <Badge variant="secondary">Ibda' (Innovation)</Badge>
            <Badge variant="secondary">Maslaha (Public Interest)</Badge>
            <Badge variant="secondary">Islamic Ethics</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islam encourages the pursuit of beneficial technology (Sina'a) and innovation (Ibda') that aligns with ethical
            principles and serves the public interest (Maslaha). This involves a dynamic engagement with modernity,
            rooted in Quranic values and the Prophetic tradition, to harness technological advancements for the betterment
            of humanity and the environment.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Foundational Principles and Ethical Framework
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Quranic Guidance</h3>
                    <ul className="mt-2">
                      <li>Encouragement to utilize earth's resources for benefit (e.g., Al-Jathiya 45:13).</li>
                      <li>Responsibility as stewards (Khalifa) of the Earth.</li>
                      <li>Prohibition of causing corruption (Fasad) or harm.</li>
                      <li>Emphasis on justice (Adl) and public interest (Maslaha).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Prophetic Teachings (Sunnah)</h3>
                    <ul className="mt-2">
                      <li>Approval of beneficial innovations and technologies.</li>
                      <li>Emphasis on intention (Niyyah) behind actions.</li>
                      <li>Warnings against harmful innovations (Bid'ah in religious matters vs. worldly innovation).</li>
                      <li>Practical examples of utilizing available technology (e.g., digging the trench in Battle of Khandaq).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Historical Contributions to Technology and Engineering
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Mechanical Engineering</h3>
                    <ul className="mt-2">
                      <li><strong>Al-Jazari:</strong> Ingenious automata, water clocks, pumps, and other mechanical devices detailed in "The Book of Knowledge of Ingenious Mechanical Devices."</li>
                      <li>Windmills and watermills for grinding grain and irrigation.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Other Technological Advances</h3>
                    <ul className="mt-2">
                      <li><strong>Papermaking:</strong> Adopted and spread from China, revolutionizing knowledge dissemination.</li>
                      <li><strong>Agricultural Technology:</strong> Advanced irrigation systems, crop rotation.</li>
                      <li><strong>Chemical Technology:</strong> Distillation (for perfumes, alchemy), soap-making.</li>
                      <li><strong>Navigational Instruments:</strong> Astrolabe, compass improvements for trade and travel.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Issues in Technology and Innovation
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Artificial Intelligence (AI)</h3>
                    <ul className="mt-2">
                      <li>Ethical considerations: Bias in algorithms, job displacement, autonomous decision-making.</li>
                      <li>Potential benefits in medicine, education, etc.</li>
                      <li>Developing AI aligned with Islamic values (AI Fiqh).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Biotechnology & Bioethics</h3>
                    <ul className="mt-2">
                      <li>Genetic engineering, cloning, stem cell research.</li>
                      <li>Islamic bioethical perspectives on life, health, and medical interventions (Fiqh al-Tibb).</li>
                      <li>Organ transplantation, end-of-life care.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Digital Technologies & Media</h3>
                    <ul className="mt-2">
                      <li>Internet, social media, digital da'wah.</li>
                      <li>Privacy, data security, cybersecurity.</li>
                      <li>Combating misinformation and harmful content.</li>
                      <li>Digital divide and access to technology.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Environmental Technology</h3>
                    <ul className="mt-2">
                      <li>Renewable energy solutions.</li>
                      <li>Sustainable agriculture and resource management.</li>
                      <li>Technology for pollution control and conservation.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Financial Technology (FinTech)</h3>
                    <ul className="mt-2">
                      <li>Islamic finance-compliant digital platforms.</li>
                      <li>Blockchain and cryptocurrencies from an Islamic perspective.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">General Ethical Considerations</h3>
                    <ul className="mt-2">
                      <li>Ensuring technology serves human dignity and well-being.</li>
                      <li>Avoiding harm (Darar) and promoting benefit (Maslaha).</li>
                      <li>Upholding justice and equity in access and impact.</li>
                      <li>The role of Ijtihad (independent legal reasoning) in addressing new technological issues.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-perspectives-on-science-and-knowledge" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Science & Knowledge in Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      The intellectual foundations for technological advancement.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-environmental-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Environmental Ethics</h3>
                    <p className="text-sm text-muted-foreground">
                      Guiding sustainable and responsible innovation.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the works of{" "}
                  <Link href="/islam/scholars/al-jazari" className="hover:underline">
                    Al-Jazari
                  </Link>
                  , or delve into contemporary discussions on{" "}
                  <Link href="/islam/contemporary-issues/ai-ethics" className="hover:underline">
                    AI Ethics in Islam
                  </Link>
                  . Consider the concept of{" "}
                  <Link href="/islam/concepts/maslaha" className="hover:underline">
                    Maslaha (Public Interest)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/ethics/technology">Islamic Ethics of Technology</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/history/golden-age/technology">Golden Age Technology</Link>
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