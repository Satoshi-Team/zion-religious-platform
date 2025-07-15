import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Spiritual Gifts and Service | Bible Study Curriculum",
  description: "Learn how to discover, develop, and use your spiritual gifts effectively for serving God and others in ministry.",
}

export default function GiftsLayout({
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
          { title: "Gifts", href: "/bible/read/gifts" },
        ]}
      />
      {children}
    </div>
  )
} 