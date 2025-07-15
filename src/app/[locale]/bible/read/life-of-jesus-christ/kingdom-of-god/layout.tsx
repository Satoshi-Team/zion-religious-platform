import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Kingdom of God | Bible Study Curriculum",
  description: "Study the kingdom of God and its significance.",
}

export default function KingdomOfGodLayout({
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
          { title: "Kingdom of God", href: "/bible/read/life-of-jesus-christ/kingdom-of-god" },
        ]}
      />
      {children}
    </div>
  )
} 