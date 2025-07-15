import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Miracles of Jesus | Bible Study Curriculum",
  description: "Study the miracles performed by Jesus Christ and their significance.",
}

export default function MiraclesLayout({
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
          { title: "Miracles", href: "/bible/read/life-of-jesus-christ/miracles" },
        ]}
      />
      {children}
    </div>
  )
} 