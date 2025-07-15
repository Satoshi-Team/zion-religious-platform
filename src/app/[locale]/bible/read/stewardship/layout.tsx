import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Stewardship and Giving | Bible Study Curriculum",
  description: "Learn how to practice biblical stewardship and develop a generous heart according to God's principles.",
}

export default function StewardshipLayout({
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
          { title: "Stewardship", href: "/bible/read/stewardship" },
        ]}
      />
      {children}
    </div>
  )
} 