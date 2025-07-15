import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "What Is Baptism? | Bible Study Curriculum",
  description: "Learn about the meaning and significance of baptism in Christian faith.",
}

export default function BaptismLayout({
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
          { title: "Baptism", href: "/bible/read/baptism" },
        ]}
      />
      {children}
    </div>
  )
} 