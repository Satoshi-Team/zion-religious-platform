import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Who Is Jesus Christ? | Bible Study Curriculum",
  description: "Learn about the person, nature, and significance of Jesus Christ in Christian faith.",
}

export default function JesusLayout({
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
          { title: "Jesus", href: "/bible/read/jesus" },
        ]}
      />
      {children}
    </div>
  )
} 