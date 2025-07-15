import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The New Creation | Bible Study Curriculum",
  description: "Study the New Creation and its significance.",
}

export default function NewCreationLayout({
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
          { title: "New Creation", href: "/bible/read/life-of-jesus-christ/new-creation" },
        ]}
      />
      {children}
    </div>
  )
} 