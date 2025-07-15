"use client"

import { Station } from "@/types/station"
import { StationCard } from "./station-card"
import { cn } from "@/lib/utils"

interface StationsGridProps {
  stations: Station[]
  className?: string
}

export function StationsGrid({ stations, className }: StationsGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
      className
    )}>
      {stations.map((station) => (
        <StationCard
          key={station.id}
          station={station}
        />
      ))}
    </div>
  )
} 