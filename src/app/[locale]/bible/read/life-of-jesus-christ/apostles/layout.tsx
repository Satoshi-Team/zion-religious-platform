import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Apostles | Bible Study Curriculum",
  description: "Study the lives, ministries, and legacies of Jesus' twelve apostles and other key disciples.",
}

export default function ApostlesLayout({
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
          { title: "Apostles", href: "/bible/read/life-of-jesus-christ/apostles" },
        ]}
      />
      {children}
    </div>
  )
} 