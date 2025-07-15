"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Search, Share2, Calendar, FileText } from "lucide-react"

const links = [
  {
    href: "/bible/read",
    label: "Read Bible",
    icon: BookOpen
  },
  {
    href: "/bible/search",
    label: "Search Verses",
    icon: Search
  },
  {
    href: "/bible/verse-of-day",
    label: "Verse of the Day",
    icon: Calendar
  },
  {
    href: "/bible/share",
    label: "Share Verses",
    icon: Share2
  },
  {
    href: "/blog",
    label: "Blog",
    icon: FileText
  }
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {links.map(link => {
        const Icon = link.icon
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href || (pathname && pathname.startsWith(`${link.href}/`))
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
} 