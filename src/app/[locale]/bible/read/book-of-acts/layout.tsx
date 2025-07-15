import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Book of Acts | Bible Study Curriculum",
  description: "Study the historical account of the early church's growth and expansion.",
}

export default function BookOfActsLayout({
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
          { title: "Book of Acts", href: "/bible/read/book-of-acts" },
        ]}
      />
      {children}
    </div>
  )
} 