"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { 
  Radio, 
  Play, 
  Pause, 
  ArrowLeft, 
  SkipForward,
  Volume2,
  Home,
  LogIn,
  Heart,
  Crown
} from "lucide-react"
import { usePlayerStore } from "@/stores/player-store"
import { getCountryFlag } from "@/lib/utils"
import { useSidebarStore } from "@/stores/sidebar-store"
import { AdUnit } from "@/components/ads/ad-unit"

export function Sidebar() {
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

  const { closeSidebar } = useSidebarStore()

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Zion.FM</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={closeSidebar}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Now Playing Section */}
      <div className="px-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Now Playing
        </h3>
        <div className="mt-2 flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-muted flex-shrink-0 flex items-center justify-center">
            {currentStation?.favicon ? (
              <img 
                src={currentStation.favicon} 
                alt="" 
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <Radio className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="marquee-container">
              <div className="marquee text-sm font-medium">
                {currentStation ? (currentTrack || currentStation.name) : "Welcome to Zion.FM!"}
              </div>
            </div>
            <div className="marquee-container">
              <div className="marquee text-xs text-muted-foreground">
                {currentStation ? 
                  `${currentStation.name} from ${getCountryFlag(currentStation.country)}` : 
                  "Your free religious radio paradise"
                }
              </div>
            </div>
          </div>
        </div>

        {/* Player Controls */}
        <div className="mt-4 flex justify-center space-x-4">
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

        {/* Volume Slider */}
        <div className="mt-4 flex items-center space-x-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value: number[]) => setVolume(value[0])}
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mt-6 px-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">
          Main
        </h3>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/favorites">
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </Link>
          </Button>
        </div>
      </div>

      {/* Premium Button */}
      <Button
        variant="ghost"
        className="w-full justify-start"
      >
        <Link href="/premium" className="flex items-center">
          <Crown className="mr-2 h-4 w-4 flex-shrink-0" />
          <span className="text-sm">Remove ads</span>
        </Link>
      </Button>

      {/* Advertisement Space */}
      <div className="mt-auto mx-4 mb-4">
        <AdUnit 
          position="sidebar"
          className="rounded-lg border border-dashed h-[250px] flex flex-col items-center justify-center"
        />
      </div>
    </div>
  )
}

