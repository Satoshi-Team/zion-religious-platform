import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Passion Week of Jesus | Bible Study Curriculum",
  description: "Study the final week of Jesus' life, from Palm Sunday to Resurrection Sunday.",
}

export default function PassionWeekLayout({
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
          { title: "Passion Week", href: "/bible/read/life-of-jesus-christ/passion-week" },
        ]}
      />
      {children}
    </div>
  )
} 