import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Early Ministry of Jesus | Bible Study Curriculum",
  description: "Study the beginning of Jesus' ministry, including his baptism, temptation, and early teachings.",
}

export default function EarlyMinistryLayout({
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
          { title: "Life of Jesus Christ", href: "/bible/read/life-of-jesus-christ" },
          { title: "Early Ministry", href: "/bible/read/life-of-jesus-christ/early-ministry" },
        ]}
      />
      {children}
    </div>
  )
} 