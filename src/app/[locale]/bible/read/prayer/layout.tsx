import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Prayer and Intercession | Bible Study Curriculum",
  description: "Learn how to develop a deeper prayer life and intercede effectively through biblical principles and spiritual practices.",
}

export default function PrayerLayout({
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
          { title: "Prayer", href: "/bible/read/prayer" },
        ]}
      />
      {children}
    </div>
  )
} 