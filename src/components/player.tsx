"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react"
import { usePlayerStore } from "@/stores/player-store"
import { PLAYER_CONSTANTS } from "@/lib/constants/player"

export function Player() {
  const { currentStation } = usePlayerStore()
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 min-w-0">
        <h2 className="font-medium truncate">
          {currentStation?.name || PLAYER_CONSTANTS.WELCOME_TITLE}
        </h2>
        <p className="text-sm text-muted-foreground truncate">
          {currentStation ? (
            `${currentStation.genre} • ${currentStation.country}`
          ) : (
            PLAYER_CONSTANTS.WELCOME_SUBTITLE
          )}
        </p>
      </div>
      {/* ... rest of player controls ... */}
    </div>
  )
} 