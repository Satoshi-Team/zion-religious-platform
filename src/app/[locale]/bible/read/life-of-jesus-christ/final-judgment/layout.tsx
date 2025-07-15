import React from 'react'
import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Final Judgment | Bible Study Curriculum",
  description: "Study the Final Judgment and its significance.",
}

export default function FinalJudgmentLayout({
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
          { title: "Life of Jesus Christ", href: "/bible/read/life-of-jesus-christ" },
          { title: "Final Judgment", href: "/bible/read/life-of-jesus-christ/final-judgment" },
        ]}
      />
      {children}
    </div>
  )
} 