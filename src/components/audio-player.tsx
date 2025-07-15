"use client"

import React, { useRef, useEffect } from 'react'
import { usePlayerStore } from "@/stores/player-store"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Radio, Play, Pause, ArrowLeft, SkipForward, Volume2 } from "lucide-react"
import { getCountryFlag } from "@/lib/utils"

export function Player() {
  const { 
    currentStation,
    currentTrack,
    isPlaying,
    volume,
    togglePlay,
    setVolume,
    nextStation,
    previousStation,
  } = usePlayerStore()

  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = titleRef.current
    if (element) {
      const isOverflowing = element.scrollWidth > element.clientWidth
      element.classList.toggle('overflow', isOverflowing)
    }
  }, [currentTrack, currentStation?.name])

  return (
    <>
      {/* Ad Space */}
      <div className="fixed bottom-14 left-0 right-0 h-[50px] bg-background border-t flex items-center justify-center">
        <div className="text-xs text-muted-foreground">Advertisement</div>
      </div>

      {/* Player */}
      <div className="fixed bottom-0 left-0 right-0 h-14 border-t bg-background/95 backdrop-blur">
        <div className="flex h-full items-center justify-between px-4">
          {/* Station Info */}
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <div className="h-10 w-10 rounded bg-primary/10 flex-shrink-0">
              {currentStation?.favicon && (
                <img 
                  src={currentStation.favicon} 
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
            <div className="min-w-0 flex-1 space-y-0.5">
              {/* Track Title */}
              <div className="marquee-container">
                <div className="marquee text-sm font-medium">
                  {currentStation ? (currentTrack || currentStation.name) : "Welcome to Zion.FM!"}
                </div>
              </div>
              {/* Station Name */}
              <div className="marquee-container">
                <div 
                  ref={titleRef}
                  className="marquee text-xs text-muted-foreground"
                >
                  {currentStation ? 
                    `${currentStation.name} from ${getCountryFlag(currentStation.country)}` : 
                    "Your free religious radio paradise"
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8"
                onClick={previousStation}
                disabled={!currentStation}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8"
                onClick={togglePlay}
                disabled={!currentStation}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8"
                onClick={nextStation}
                disabled={!currentStation}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="hidden sm:flex items-center space-x-2 w-[140px]">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={[volume]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={([value]) => setVolume(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
