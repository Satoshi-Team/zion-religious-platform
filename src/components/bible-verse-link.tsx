import React from 'react'
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface BibleVerseLinkProps {
  reference: string
  text?: string
  translation?: string
  className?: string
}

export function BibleVerseLink({ reference, text, translation = "NIV", className = "" }: BibleVerseLinkProps) {
  const [book, ...rest] = reference.split(" ")
  const bookLower = book.toLowerCase()
  const referencePath = `${bookLower}/${reference}`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`/religion/christianity/bible/${referencePath}`}
            className={`text-primary hover:underline ${className}`}
          >
            {reference}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-xs p-2">
            {text && (
              <p className="italic mb-1">"{text}"</p>
            )}
            <p className="text-xs text-muted-foreground">{translation}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 