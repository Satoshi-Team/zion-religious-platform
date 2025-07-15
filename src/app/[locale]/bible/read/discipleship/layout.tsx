import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Discipleship and Mentoring | Bible Study Curriculum",
  description: "Learn how to make disciples and mentor others effectively through biblical principles and practical strategies.",
}

export default function DiscipleshipLayout({
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
          { title: "Discipleship", href: "/bible/read/discipleship" },
        ]}
      />
      {children}
    </div>
  )
} 