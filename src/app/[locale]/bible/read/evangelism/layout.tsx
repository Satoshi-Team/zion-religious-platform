import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Evangelism and Missions | Bible Study Curriculum",
  description: "Learn how to share your faith effectively and engage in missions work through biblical principles and practical strategies.",
}

export default function EvangelismLayout({
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
          { title: "Evangelism", href: "/bible/read/evangelism" },
        ]}
      />
      {children}
    </div>
  )
} 