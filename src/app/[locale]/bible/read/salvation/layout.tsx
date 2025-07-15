import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "What Does It Mean to Be Saved? | Bible Study Curriculum",
  description: "Learn about the meaning and process of salvation in Christian faith.",
}

export default function SalvationLayout({
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
          { title: "Salvation", href: "/bible/read/salvation" },
        ]}
      />
      {children}
    </div>
  )
} 