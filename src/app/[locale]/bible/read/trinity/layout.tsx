import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Understanding the Trinity | Bible Study Curriculum",
  description: "Learn about the nature and significance of the Trinity in Christian faith.",
}

export default function TrinityLayout({
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
          { title: "Trinity", href: "/bible/read/trinity" },
        ]}
      />
      {children}
    </div>
  )
} 