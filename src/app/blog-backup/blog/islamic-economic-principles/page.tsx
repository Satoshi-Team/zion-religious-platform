import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Islamic Economic Principles: Justice, Equity, and Sustainable Development | Religious Studies Blog",
  description: "Explore the comprehensive economic framework of Islam - from foundational principles to modern applications. Understand how Islamic economics promotes social justice, ethical business practices, and sustainable development.",
  openGraph: {
    title: "Islamic Economic Principles: Justice, Equity, and Sustainable Development | Religious Studies Blog",
    description: "Explore the comprehensive economic framework of Islam - from foundational principles to modern applications. Understand how Islamic economics promotes social justice, ethical business practices, and sustainable development.",
    type: "article",
  },
}

export default function IslamicEconomicPrinciplesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>•</span>
          <Link href="/religion/islam" className="hover:underline">
            Islam
          </Link>
          <span>•</span>
          <span>Foundations</span>
        </div>

        <h1>Islamic Economic Principles: Justice, Equity, and Sustainable Development</h1>

        <div className="space-y-6">
          <p>
            Islamic economic principles embody a comprehensive framework that
            integrates spiritual values with practical economic activities. This
            exploration examines the Quranic foundations, prophetic teachings, and
            historical development of Islamic economic thought and practice.
          </p>

          <h2>Quranic Foundation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Economic Principles:</h3>
              <ul>
                <li>Wealth Distribution (Al-Hashr 59:7)</li>
                <li>Fair Trade (Al-Baqarah 2:275-279)</li>
                <li>Social Responsibility (Al-Ma'un 107:1-7)</li>
                <li>Economic Justice (Al-Hadid 57:25)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ethical Guidelines:</h3>
              <ul>
                <li>Prohibition of Interest (Riba)</li>
                <li>Fair Business Practices</li>
                <li>Wealth Purification (Zakat)</li>
                <li>Economic Moderation</li>
              </ul>
            </div>
          </div>

          <h2>Prophetic Guidance</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Economic Practices:</h3>
              <ul>
                <li>Market Regulation</li>
                <li>Fair Pricing</li>
                <li>Wealth Distribution</li>
                <li>Social Welfare</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Business Ethics:</h3>
              <ul>
                <li>Honest Transactions</li>
                <li>Fair Competition</li>
                <li>Consumer Protection</li>
                <li>Worker Rights</li>
              </ul>
            </div>
          </div>

          <h2>Historical Development</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Economic Systems:</h3>
              <ul>
                <li>Market Economy</li>
                <li>Welfare State</li>
                <li>Trade Networks</li>
                <li>Financial Institutions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Institutional Framework:</h3>
              <ul>
                <li>Bait al-Mal</li>
                <li>Trade Guilds</li>
                <li>Charitable Endowments</li>
                <li>Financial Markets</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Finance:</h3>
              <ul>
                <li>Islamic Banking</li>
                <li>Sukuk (Islamic Bonds)</li>
                <li>Takaful (Islamic Insurance)</li>
                <li>Microfinance</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Business Practices:</h3>
              <ul>
                <li>Ethical Investment</li>
                <li>Corporate Social Responsibility</li>
                <li>Sustainable Development</li>
                <li>Fair Trade</li>
              </ul>
            </div>
          </div>

          <h2>Global Impact</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Economic Development:</h3>
              <ul>
                <li>Poverty Alleviation</li>
                <li>Social Welfare</li>
                <li>Economic Growth</li>
                <li>Sustainable Development</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Future Directions:</h3>
              <ul>
                <li>Digital Finance</li>
                <li>Green Economy</li>
                <li>Social Enterprise</li>
                <li>Global Integration</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/islamic-perspectives-on-social-justice-and-human-rights"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Islamic Perspectives on Social Justice and Human Rights</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the foundations of economic justice
              </p>
            </Link>
            <Link
              href="/blog/islamic-perspectives-on-education-and-learning"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Islamic Perspectives on Education and Learning</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the role of education in economic development
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Islamic economic principles through our comprehensive
              learning path in the{" "}
              <Link href="/religion/islam" className="hover:underline">
                Islam section
              </Link>
              . Compare and contrast with other religious traditions in our{" "}
              <Link href="/religion/comparative" className="hover:underline">
                Comparative Religion
              </Link>{" "}
              section.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 