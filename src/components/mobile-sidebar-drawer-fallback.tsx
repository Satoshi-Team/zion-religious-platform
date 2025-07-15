"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { cn } from "@/lib/utils"

interface MobileSidebarDrawerFallbackProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileSidebarDrawerFallback({ isOpen, onToggle }: MobileSidebarDrawerFallbackProps) {
  const pathname = usePathname()



  // Close mobile sidebar when pathname changes
  React.useEffect(() => {
    if (isOpen && onToggle) {
      onToggle()
    }
  }, [pathname, isOpen, onToggle])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onToggle}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className="fixed inset-y-0 left-0 z-[60] w-80 border-r lg:hidden"
        style={{ 
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          backgroundColor: isOpen ? '#10b981' : '#ef4444',
          visibility: 'visible'
        }}
      >

        <div className="h-full">
          <Sidebar />
        </div>
      </div>
    </>
  )
} 