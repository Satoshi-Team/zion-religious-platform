import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Marriage and Family | Bible Study Curriculum",
  description: "Learn how to build and maintain strong, godly marriages and families according to biblical principles.",
}

export default function MarriageLayout({
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
          { title: "Marriage", href: "/bible/read/marriage" },
        ]}
      />
      {children}
    </div>
  )
} 