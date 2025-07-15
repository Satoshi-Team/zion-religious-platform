import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "New Testament Survey | Bible Study Curriculum",
  description: "A comprehensive overview of the New Testament books and themes.",
}

export default function NewTestamentSurveyLayout({
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
          { title: "New Testament Survey", href: "/bible/read/new-testament-survey" },
        ]}
      />
      {children}
    </div>
  )
} 