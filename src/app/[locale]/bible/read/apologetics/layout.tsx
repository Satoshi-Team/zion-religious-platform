import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Apologetics and Evangelism | Bible Study Curriculum",
  description: "Learn how to defend your faith and share the gospel effectively through biblical apologetics and evangelism.",
}

export default function ApologeticsLayout({
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
          { title: "Apologetics", href: "/bible/read/apologetics" },
        ]}
      />
      {children}
    </div>
  )
} 