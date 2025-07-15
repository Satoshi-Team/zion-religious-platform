import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Community and Fellowship | Bible Study Curriculum",
  description: "Learn how to build and maintain meaningful relationships within the body of Christ according to biblical principles.",
}

export default function CommunityLayout({
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
          { title: "Community", href: "/bible/read/community" },
        ]}
      />
      {children}
    </div>
  )
} 