import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The New Heaven and Earth | Bible Study Curriculum",
  description: "Study the New Heaven and Earth and its significance.",
}

export default function NewHeavenEarthLayout({
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
          { title: "New Heaven and Earth", href: "/bible/read/life-of-jesus-christ/new-heaven-earth" },
        ]}
      />
      {children}
    </div>
  )
} 