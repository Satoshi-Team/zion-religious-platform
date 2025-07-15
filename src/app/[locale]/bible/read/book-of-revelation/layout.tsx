import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Book of Revelation | Bible Study Curriculum",
  description: "Study the apocalyptic literature and end times prophecy in depth.",
}

export default function BookOfRevelationLayout({
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
        ]}
      />
      {children}
    </div>
  )
} 