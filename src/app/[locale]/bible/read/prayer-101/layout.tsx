import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Prayer 101: Talking with God | Bible Study Curriculum",
  description: "Learn the fundamentals of prayer and how to communicate with God effectively.",
}

export default function Prayer101Layout({
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
          { title: "Prayer 101", href: "/bible/read/prayer-101" },
        ]}
      />
      {children}
    </div>
  )
} 