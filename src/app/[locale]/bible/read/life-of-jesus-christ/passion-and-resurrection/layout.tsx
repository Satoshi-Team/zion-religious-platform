import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Passion and Resurrection of Jesus | Bible Study Curriculum",
  description: "Study the final events of Jesus' life, His death, and resurrection from the Gospels.",
}

export default function PassionAndResurrectionLayout({
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
          { title: "Passion and Resurrection", href: "/bible/read/life-of-jesus-christ/passion-and-resurrection" },
        ]}
      />
      {children}
    </div>
  )
} 