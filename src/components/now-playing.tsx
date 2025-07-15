"use client"

import React from 'react'
import { useEffect, useState } from "react"

export function NowPlaying() {
  const [currentTrack, setCurrentTrack] = useState("")

  useEffect(() => {
    // TODO: Implement real-time track updates
    setCurrentTrack("Current Song - Artist Name")
  }, [])

  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
        ON AIR
      </div>
      <div className="text-sm">
        <span className="font-medium">Now Playing:</span>
        <span className="ml-2">{currentTrack}</span>
      </div>
    </div>
  )
} 