"use client"

import { Home, Search, Library, Radio } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BottomNavigationProps {
  className?: string
}

export function BottomNavigation({ className }: BottomNavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 z-50 h-16 bg-background/95 backdrop-blur-lg border-t",
      className
    )}>
      <div className="grid h-full grid-cols-4 mx-1">
        <Link 
          href="/"
          className={cn(
            "flex flex-col items-center justify-center",
            "text-muted-foreground hover:text-primary transition-colors",
            pathname === "/" && "text-primary"
          )}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link 
          href="/search"
          className={cn(
            "flex flex-col items-center justify-center",
            "text-muted-foreground hover:text-primary transition-colors",
            pathname === "/search" && "text-primary"
          )}
        >
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </Link>

        <Link 
          href="/library"
          className={cn(
            "flex flex-col items-center justify-center",
            "text-muted-foreground hover:text-primary transition-colors",
            pathname === "/library" && "text-primary"
          )}
        >
          <Library className="h-5 w-5" />
          <span className="text-xs mt-1">Library</span>
        </Link>

        <button
          className={cn(
            "flex flex-col items-center justify-center",
            "text-muted-foreground hover:text-primary transition-colors"
          )}
        >
          <Radio className="h-5 w-5" />
          <span className="text-xs mt-1">Playing</span>
        </button>
      </div>
    </nav>
  )
} 