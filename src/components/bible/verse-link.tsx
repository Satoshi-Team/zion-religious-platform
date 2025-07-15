"use client"

import React from 'react'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BibleVerseLinkProps {
  reference: string
  className?: string
  children?: React.ReactNode
}

export function BibleVerseLink({ reference, className, children }: BibleVerseLinkProps) {
  // Parse the reference to get book, chapter, and verse
  const parts = reference.split(/[.:]/)
  const book = parts[0].trim()
  const chapter = parts[1]?.trim()
  const verse = parts[2]?.trim()

  // Construct the URL for the Bible read page
  const href = `/bible/read/${book.toLowerCase()}/${chapter}${verse ? `#verse-${verse}` : ""}`

  return (
    <Link
      href={href}
      className={cn(
        "text-primary hover:underline inline-flex items-center",
        className
      )}
    >
      {children || reference}
    </Link>
  )
} 