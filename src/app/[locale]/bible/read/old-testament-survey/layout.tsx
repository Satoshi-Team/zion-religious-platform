import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Old Testament Survey | Bible Study Curriculum",
  description: "A comprehensive overview of the Old Testament books and themes.",
}

export default function OldTestamentSurveyLayout({
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
          { title: "Old Testament Survey", href: "/bible/read/old-testament-survey" },
        ]}
      />
      {children}
    </div>
  )
} 