import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Church | Bible Study Curriculum",
  description: "Study the Church and its significance.",
}

export default function ChurchLayout({
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
          { title: "Church", href: "/bible/read/life-of-jesus-christ/church" },
        ]}
      />
      {children}
    </div>
  )
} 