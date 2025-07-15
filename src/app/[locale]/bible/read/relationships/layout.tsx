import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Relationships and Family | Bible Study Curriculum",
  description: "Learn about biblical principles for building healthy relationships and strong families.",
}

export default function RelationshipsLayout({
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
          { title: "Relationships", href: "/bible/read/relationships" },
        ]}
      />
      {children}
    </div>
  )
} 