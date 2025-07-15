"use client"

import React from 'react'
import { Station } from "@/types/station"
import { FallbackImage } from "./fallback-image"

interface StationListProps {
  initialStations: Station[]
}

export function StationList({ initialStations }: StationListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {initialStations.map((station) => (
        <div key={station.id} className="relative aspect-[3/2] rounded-lg overflow-hidden">
          <FallbackImage
            src={station.image || `/images/stations/stations/${station.id}.webp`}
            alt={station.genre || "Station image"}
            stationName={station.name}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-2 text-white">
            <h3 className="font-semibold truncate">{station.name}</h3>
            <p className="text-sm opacity-80 truncate">{station.country}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 