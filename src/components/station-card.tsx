"use client"

import React from 'react'
import { Station } from "@/types/station"
import { Card } from "@/components/ui/card"
import { PlayCircle, Pause, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"
import { usePlayerStore } from "@/stores/player-store"
import { cn } from "@/lib/utils"
import { getStationImage } from '@/lib/utils/image-helpers'

interface StationCardProps {
  station: Station
  className?: string
}

export function StationCard({ station, className }: StationCardProps) {
  const { currentStation, isPlaying, isLoading, playStation, pause } = usePlayerStore()
  const isCurrentStation = currentStation?.id === station.id

  const handleClick = () => {
    if (isCurrentStation && isPlaying) {
      pause()
    } else {
      playStation(station)
    }
  }

  return (
    <Card 
      className={cn(
        "group relative flex flex-col overflow-hidden hover:shadow-md transition-all duration-200",
        "min-h-[200px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative aspect-[3/2]">
        <FallbackImage
          src={getStationImage(station)}
          alt={station.name}
          className="object-cover aspect-square"
          fill
          stationName={station.name}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "opacity-0 group-hover:opacity-100 transition-opacity",
            "text-white hover:text-white hover:bg-white/20"
          )}
          disabled={isLoading}
        >
          {isLoading && isCurrentStation ? (
            <Loader2 className="h-8 w-8 animate-spin" />
          ) : isPlaying && isCurrentStation ? (
            <Pause className="h-8 w-8" />
          ) : (
            <PlayCircle className="h-8 w-8" />
          )}
          <span className="sr-only">
            {isPlaying && isCurrentStation ? "Pause" : "Play"}
          </span>
        </Button>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-medium text-base line-clamp-2">
          {station.name}
        </h3>
        {station.country && (
          <p className="mt-1 text-sm text-muted-foreground">
            {station.country}
          </p>
        )}
      </div>
    </Card>
  )
} 