import React from 'react'
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          <Link
            href={item.href}
            className={`hover:text-foreground transition-colors ${
              index === items.length - 1 ? "text-foreground font-medium" : ""
            }`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  )
} 