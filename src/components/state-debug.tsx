"use client"

import * as React from "react"

interface StateDebugProps {
  isOpen: boolean
  onToggle: () => void
}

export function StateDebug({ isOpen, onToggle }: StateDebugProps) {
  return (
    <div 
      className="fixed top-32 left-4 z-[100] p-4 rounded-lg shadow-lg bg-yellow-500 text-black lg:hidden"
    >
      <div className="text-sm font-bold">
        Raw State: {String(isOpen)}
      </div>
      <div className="text-xs">
        Type: {typeof isOpen}
      </div>
      <button 
        onClick={() => {
          console.log("[StateDebug] Toggle button clicked")
          onToggle()
        }}
        className="mt-2 px-3 py-1 bg-black text-white rounded text-xs"
      >
        Toggle
      </button>
    </div>
  )
} 