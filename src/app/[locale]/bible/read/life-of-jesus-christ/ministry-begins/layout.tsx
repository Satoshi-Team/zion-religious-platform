import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Ministry Begins | Bible Study Curriculum",
  description: "Study the beginning of Jesus' public ministry, including his baptism, temptation, and early teachings.",
}

export default function MinistryBeginsLayout({
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
          { title: "Ministry Begins", href: "/bible/read/life-of-jesus-christ/ministry-begins" },
        ]}
      />
      {children}
    </div>
  )
} 