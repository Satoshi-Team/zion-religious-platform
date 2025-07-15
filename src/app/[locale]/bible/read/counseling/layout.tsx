import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Counseling and Care | Bible Study Curriculum",
  description: "Learn how to provide biblical counsel and care to others through scriptural principles and practical wisdom.",
}

export default function CounselingLayout({
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
          { title: "Counseling", href: "/bible/read/counseling" },
        ]}
      />
      {children}
    </div>
  )
} 