"use client"

import React from 'react'
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BibleMap } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface MapProps {
  initialMapName?: string
}

export function Map({ initialMapName = "Ancient Israel" }: MapProps) {
  const [mapName, setMapName] = useState(initialMapName)
  const [map, setMap] = useState<BibleMap | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function loadMap() {
    if (!mapName.trim()) return

    setIsLoading(true)
    try {
      const loadedMap = await bibleService.getMap(mapName)
      setMap(loadedMap)
    } catch (error) {
      console.error("Error loading map:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadMap()
  }, [mapName])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Maps</CardTitle>
        <CardDescription>
          Explore biblical locations and their historical context
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2">
            <Input
              value={mapName}
              onChange={e => setMapName(e.target.value)}
              placeholder="Enter a map name..."
              onKeyDown={e => {
                if (e.key === "Enter") {
                  loadMap()
                }
              }}
            />
            <button
              onClick={loadMap}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Load Map
            </button>
          </div>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
              <div className="h-4 bg-secondary rounded w-2/3"></div>
            </div>
          ) : map ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{map.name}</h3>
                <p className="text-muted-foreground">{map.description}</p>
              </div>

              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={map.imageUrl}
                  alt={map.name}
                  fill
                  className="object-cover"
                />
              </div>

              {map.markers.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Key Locations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {map.markers.map(marker => (
                      <div
                        key={marker.name}
                        className="p-4 rounded-lg border bg-secondary"
                      >
                        <h5 className="font-medium">{marker.name}</h5>
                        <p className="text-sm text-muted-foreground">
                          {marker.description}
                        </p>
                        {marker.references.length > 0 && (
                          <div className="mt-2">
                            <h6 className="text-xs font-medium">References:</h6>
                            <ul className="text-xs list-disc list-inside">
                              {marker.references.map((ref, index) => (
                                <li key={index}>{ref}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {map.regions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Regions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {map.regions.map(region => (
                      <div
                        key={region.name}
                        className="p-4 rounded-lg border bg-secondary"
                      >
                        <h5 className="font-medium">{region.name}</h5>
                        <p className="text-sm text-muted-foreground">
                          {region.description}
                        </p>
                        {region.references.length > 0 && (
                          <div className="mt-2">
                            <h6 className="text-xs font-medium">References:</h6>
                            <ul className="text-xs list-disc list-inside">
                              {region.references.map((ref, index) => (
                                <li key={index}>{ref}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : mapName ? (
            <p className="text-center text-muted-foreground">
              No map found for "{mapName}"
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
} 