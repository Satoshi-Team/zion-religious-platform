import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Millennium | Bible Study Curriculum",
  description: "Study the Millennium and its significance.",
}

export default function MillenniumLayout({
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
          { title: "Millennium", href: "/bible/read/life-of-jesus-christ/millennium" },
        ]}
      />
      {children}
    </div>
  )
} 