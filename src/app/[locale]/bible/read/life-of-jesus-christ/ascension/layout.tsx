import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Ascension | Bible Study Curriculum",
  description: "Study the Ascension and its significance.",
}

export default function AscensionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <BreadcrumbNav
        items={[
          { title: "Bible", href: "/bible" },
          { title: "Read", href: "/bible/read" },
          { title: "Life of Jesus Christ", href: "/bible/read/life-of-jesus-christ" },
          { title: "Ascension", href: "/bible/read/life-of-jesus-christ/ascension" },
        ]}
      />
      {children}
    </div>
  )
} 