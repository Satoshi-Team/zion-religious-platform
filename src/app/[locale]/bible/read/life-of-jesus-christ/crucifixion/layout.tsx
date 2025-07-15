import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Crucifixion of Jesus | Bible Study Curriculum",
  description: "Study the crucifixion of Jesus Christ and its significance for salvation.",
}

export default function CrucifixionLayout({
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
          { title: "Crucifixion", href: "/bible/read/life-of-jesus-christ/crucifixion" },
        ]}
      />
      {children}
    </div>
  )
} 