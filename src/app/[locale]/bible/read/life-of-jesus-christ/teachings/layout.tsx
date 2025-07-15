import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Teachings of Jesus | Bible Study Curriculum",
  description: "Study Jesus' key teachings, parables, and sermons from the Gospels.",
}

export default function TeachingsLayout({
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
          { title: "Teachings", href: "/bible/read/life-of-jesus-christ/teachings" },
        ]}
      />
      {children}
    </div>
  )
} 