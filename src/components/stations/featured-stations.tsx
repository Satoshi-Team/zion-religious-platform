'use client'

import { useEffect, useState } from "react"
import { Station } from "@/types/station"
import { stationService } from "@/services/station-service"
import { StationCard } from "./station-card"
import { LoadingSpinner } from "../ui/loading-spinner"
import { cn } from "@/lib/utils"

interface StationCardProps {
  station: Station
  className?: string
}

export function FeaturedStations() {
  const [stations, setStations] = useState<Station[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadStations() {
      try {
        const data = await stationService.getStations()
        if (!data || data.length === 0) {
          setError('No stations available')
          return
        }
        setStations(data)
      } catch (err) {
        setError('Failed to load stations')
        console.error('Error loading stations:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadStations()
  }, [])

  if (isLoading) return <LoadingSpinner />
  
  if (error) return (
    <div className="text-center py-8 text-red-500">
      <p>{error}</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Featured Stations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((station) => (
          <StationCard
            key={station.id} 
            station={station}
            className="w-full"
          />
        ))}
      </div>
    </div>
  )
} 