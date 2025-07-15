import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Eternal State | Bible Study Curriculum",
  description: "Study the Eternal State and its significance.",
}

export default function EternalStateLayout({
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
          { title: "Eternal State", href: "/bible/read/life-of-jesus-christ/eternal-state" },
        ]}
      />
      {children}
    </div>
  )
} 