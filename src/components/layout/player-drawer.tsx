"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { usePlayerStore } from "@/stores/player-store"

export function PlayerDrawer() {
  const { isPlaying, currentStation } = usePlayerStore()

  return (
    <Sheet>
      <SheetContent side="bottom" className="h-[85vh] p-0">
        <SheetHeader className="h-full flex flex-col px-6 py-6">
          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl">
              <img
                src={currentStation?.image || "/images/radio-fallback.png"}
                alt={currentStation?.name || "Station artwork"}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg">{currentStation?.name || "No station selected"}</h3>
              <p className="text-sm text-muted-foreground">{currentStation?.genre || "Select a station to start listening"}</p>
            </div>

            <div className="w-full max-w-md space-y-4">
              <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
              
              <div className="flex items-center justify-center space-x-4">
                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button size="icon" className="h-14 w-14 rounded-full">
                  <Play className="h-6 w-6" />
                </Button>
                <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-muted-foreground" />
                <Slider defaultValue={[100]} max={100} step={1} className="w-32" />
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
} 