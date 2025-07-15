import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The New Jerusalem | Bible Study Curriculum",
  description: "Study the vision of the New Jerusalem and the eternal state in Revelation chapters 21-22.",
}

export default function NewJerusalemLayout({
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
          { title: "Book of Revelation", href: "/bible/read/book-of-revelation" },
          { title: "New Jerusalem", href: "/bible/read/book-of-revelation/new-jerusalem" },
        ]}
      />
      {children}
    </div>
  )
} 