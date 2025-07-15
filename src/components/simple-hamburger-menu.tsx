"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export function SimpleHamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen((v) => !v)
  const closeMenu = () => setIsOpen(false)

  // Render nothing on server (to avoid hydration issues)
  if (!mounted) return (
    <Button
      variant="ghost"
      size="icon"
      className="block lg:hidden"
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  )

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="block lg:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && createPortal(
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-label="Close sidebar"
          />
          {/* Sidebar */}
          <aside
            className="fixed inset-y-0 left-0 z-[110] w-80 max-w-full bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-bold text-lg">Navigation</span>
                <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <Sidebar hideHeader />
            </div>
          </aside>
        </>,
        document.body
      )}
    </>
  )
} 