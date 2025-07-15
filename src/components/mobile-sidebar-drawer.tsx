"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

interface MobileSidebarDrawerProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileSidebarDrawer({ isOpen, onToggle }: MobileSidebarDrawerProps) {
  const pathname = usePathname()

  console.log("[MobileSidebarDrawer] isOpen:", isOpen, "onToggle:", !!onToggle)

  // Close mobile sidebar when pathname changes
  React.useEffect(() => {
    if (isOpen && onToggle) {
      console.log("[MobileSidebarDrawer] Pathname changed, closing sidebar")
      onToggle()
    }
  }, [pathname, isOpen, onToggle])

  const handleOpenChange = React.useCallback((open: boolean) => {
    console.log("[MobileSidebarDrawer] Sheet onOpenChange called with:", open)
    if (onToggle) {
      onToggle()
    }
  }, [onToggle])

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="left" className="w-80 p-0 z-[60]">
        <div className="h-full">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
} 