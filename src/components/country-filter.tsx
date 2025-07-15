"use client"

import { useFilterStore } from "@/stores/filter-store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VERIFIED_STATIONS } from "@/lib/constants/stations"

export function CountryFilter() {
  const { selectedCountry, setCountry } = useFilterStore()

  // Get unique countries from stations
  const countries = Array.from(new Set(
    VERIFIED_STATIONS
      .map(station => station.country)
      .filter(Boolean)
  )).sort()

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Country</h3>
      <ScrollArea className="h-[200px] pr-4">
        <div className="space-y-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCountry('all')}
            className={cn(
              'w-full justify-start',
              selectedCountry === 'all' && 'bg-accent'
            )}
          >
            All Countries
          </Button>
          {countries.map((country) => (
            <Button
              key={country}
              variant="ghost"
              size="sm"
              onClick={() => setCountry(country)}
              className={cn(
                'w-full justify-start',
                selectedCountry === country && 'bg-accent'
              )}
            >
              {country}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 