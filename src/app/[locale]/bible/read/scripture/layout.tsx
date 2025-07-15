import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "How to Read the Bible | Bible Study Curriculum",
  description: "Learn the fundamentals of reading and understanding Scripture effectively.",
}

export default function ScriptureLayout({
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
          { title: "Scripture", href: "/bible/read/scripture" },
        ]}
      />
      {children}
    </div>
  )
} 