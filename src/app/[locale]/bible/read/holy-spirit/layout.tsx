import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Who Is the Holy Spirit? | Bible Study Curriculum",
  description: "Learn about the Holy Spirit's role and significance in Christian faith.",
}

export default function HolySpiritLayout({
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
          { title: "Holy Spirit", href: "/bible/read/holy-spirit" },
        ]}
      />
      {children}
    </div>
  )
} 