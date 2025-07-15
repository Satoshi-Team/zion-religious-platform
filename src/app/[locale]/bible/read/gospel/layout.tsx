import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "What Is the Gospel? | Bible Study Curriculum",
  description: "Learn about the core message of the Gospel and its significance in Christian faith.",
}

export default function GospelLayout({
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
          { title: "Gospel", href: "/bible/read/gospel" },
        ]}
      />
      {children}
    </div>
  )
} 