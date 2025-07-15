import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Last Days | Bible Study Curriculum",
  description: "Study the Last Days and their significance.",
}

export default function LastDaysLayout({
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
          { title: "Last Days", href: "/bible/read/life-of-jesus-christ/last-days" },
        ]}
      />
      {children}
    </div>
  )
} 