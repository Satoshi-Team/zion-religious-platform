"use client"

import { useFilterStore } from "@/stores/filter-store"
import { StationCard } from "./station-card"

export function StationGrid() {
  const { getFilteredStations } = useFilterStore()
  const filteredStations = getFilteredStations()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredStations.map(station => (
        <StationCard key={station.id} station={station} />
      ))}
    </div>
  )
} 