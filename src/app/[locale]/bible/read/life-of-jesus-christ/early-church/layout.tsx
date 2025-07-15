import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Early Church | Bible Study Curriculum",
  description: "Study the formation and growth of the early Christian community after Jesus' ascension.",
}

export default function EarlyChurchLayout({
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
          { title: "Early Church", href: "/bible/read/life-of-jesus-christ/early-church" },
        ]}
      />
      {children}
    </div>
  )
} 