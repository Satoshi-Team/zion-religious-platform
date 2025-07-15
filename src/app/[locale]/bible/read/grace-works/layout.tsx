import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Grace vs. Works | Bible Study Curriculum",
  description: "Learn about the relationship between grace and works in Christian faith.",
}

export default function GraceWorksLayout({
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
          { title: "Grace vs. Works", href: "/bible/read/grace-works" },
        ]}
      />
      {children}
    </div>
  )
} 