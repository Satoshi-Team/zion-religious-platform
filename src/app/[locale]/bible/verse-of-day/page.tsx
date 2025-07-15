import React from 'react'
import { VerseOfDay } from "@/components/bible/verse-of-day"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export default function VerseOfDayPage() {
  const breadcrumbItems = [
    { label: "Bible", href: "/bible" },
    { label: "Verse of the Day" }
  ]

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <Breadcrumbs items={breadcrumbItems} />
      <VerseOfDay />
    </div>
  )
} 