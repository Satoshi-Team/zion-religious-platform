import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Seven Churches of Revelation | Bible Study Curriculum",
  description: "Study the messages to the seven churches in Revelation chapters 2-3.",
}

export default function SevenChurchesLayout({
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
          { title: "Seven Churches", href: "/bible/read/book-of-revelation/seven-churches" },
        ]}
      />
      {children}
    </div>
  )
}