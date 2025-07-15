import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Birth and Early Life of Jesus | Bible Study Curriculum",
  description: "Study the birth, childhood, and early years of Jesus Christ.",
}

export default function BirthAndEarlyLifeLayout({
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
          { title: "Birth and Early Life", href: "/bible/read/life-of-jesus-christ/birth-and-early-life" },
        ]}
      />
      {children}
    </div>
  )
} 