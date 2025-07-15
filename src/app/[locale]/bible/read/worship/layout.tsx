import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Worship and Prayer | Bible Study Curriculum",
  description: "Learn how to develop a meaningful worship and prayer life according to biblical principles.",
}

export default function WorshipLayout({
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
          { title: "Worship", href: "/bible/read/worship" },
        ]}
      />
      {children}
    </div>
  )
} 