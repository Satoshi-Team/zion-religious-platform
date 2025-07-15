import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Early Church | Bible Study Curriculum",
  description: "Explore the formation and growth of the early Christian church.",
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
          { title: "Early Church", href: "/bible/read/early-church" },
        ]}
      />
      {children}
    </div>
  )
} 