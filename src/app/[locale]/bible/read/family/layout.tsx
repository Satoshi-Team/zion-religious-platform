import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Family and Relationships | Bible Study Curriculum",
  description: "Learn how to build strong family relationships and create a godly home through biblical principles and practical wisdom.",
}

export default function FamilyLayout({
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
          { title: "Family", href: "/bible/read/family" },
        ]}
      />
      {children}
    </div>
  )
} 