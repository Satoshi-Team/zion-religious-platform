"use client"

import * as React from "react"

interface MobileSidebarTestProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileSidebarTest({ isOpen, onToggle }: MobileSidebarTestProps) {
  console.log("[MobileSidebarTest] isOpen:", isOpen)

  return (
    <div 
      className="fixed top-20 left-4 z-[100] p-4 rounded-lg shadow-lg lg:hidden"
      style={{ 
        backgroundColor: isOpen ? '#10b981' : '#ef4444',
        color: 'white',
        transition: 'background-color 0.3s ease-in-out'
      }}
    >
      <div className="text-sm font-bold">
        Test: {isOpen ? 'OPEN' : 'CLOSED'}
      </div>
      <button 
        onClick={onToggle}
        className="mt-2 px-3 py-1 bg-white text-black rounded text-xs"
      >
        Toggle
      </button>
    </div>
  )
} 