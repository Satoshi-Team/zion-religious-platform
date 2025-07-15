"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface MobileNavigationProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileNavigation({ isOpen, onToggle }: MobileNavigationProps) {
  console.log("[MobileNavigation] isOpen:", isOpen, "onToggle:", !!onToggle)
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className="block lg:hidden"
      onClick={() => {
        console.log("[MobileNavigation] Button clicked, calling onToggle")
        onToggle()
      }}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  )
} 