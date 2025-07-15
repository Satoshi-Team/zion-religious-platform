import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Leadership and Service | Bible Study Curriculum",
  description: "Learn how to develop leadership skills and serve others according to biblical principles.",
}

export default function LeadershipLayout({
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
          { title: "Leadership", href: "/bible/read/leadership" },
        ]}
      />
      {children}
    </div>
  )
} 