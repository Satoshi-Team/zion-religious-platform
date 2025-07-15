import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Repentance and Forgiveness | Bible Study Curriculum",
  description: "Learn about repentance and forgiveness in Christian faith.",
}

export default function RepentanceLayout({
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
          { title: "Repentance", href: "/bible/read/repentance" },
        ]}
      />
      {children}
    </div>
  )
} 