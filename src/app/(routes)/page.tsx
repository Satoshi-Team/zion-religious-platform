"use client"

import React from 'react'
import { StationCard } from "@/components/stations/station-card"
import { VERIFIED_STATIONS } from "@/lib/constants/verified-stations"
import { Suspense } from "react"

// Add metadata export
export const metadata = {
  title: 'Home',
  description: 'Welcome to our radio stations'
}

// Add revalidate setting
export const revalidate = 3600 // revalidate every hour

function StationCardSkeleton() {
  return (
    <div className="h-[200px] rounded-lg border bg-card text-card-foreground shadow-sm animate-pulse">
      <div className="p-6 space-y-2">
        <div className="h-5 w-2/3 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {VERIFIED_STATIONS.map((station) => (
          <Suspense key={station.id} fallback={<StationCardSkeleton />}>
            <StationCard station={station} />
          </Suspense>
        ))}
      </div>
    </div>
  )
} 