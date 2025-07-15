import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Ethics and Decision Making | Bible Study Curriculum",
  description: "Learn how to make godly decisions and live according to biblical ethical principles in all areas of life.",
}

export default function EthicsLayout({
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
          { title: "Ethics", href: "/bible/read/ethics" },
        ]}
      />
      {children}
    </div>
  )
} 