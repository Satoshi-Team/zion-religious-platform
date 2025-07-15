import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Parables of Jesus | Bible Study Curriculum",
  description: "Study the parables taught by Jesus Christ and their meaning.",
}

export default function ParablesLayout({
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
          { title: "Parables", href: "/bible/read/life-of-jesus-christ/parables" },
        ]}
      />
      {children}
    </div>
  )
} 