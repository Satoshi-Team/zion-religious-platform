import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Missions and Evangelism | Bible Study Curriculum",
  description: "Learn how to share your faith effectively and engage in missions work based on biblical principles.",
}

export default function MissionsLayout({
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
          { title: "Missions", href: "/bible/read/missions" },
        ]}
      />
      {children}
    </div>
  )
} 