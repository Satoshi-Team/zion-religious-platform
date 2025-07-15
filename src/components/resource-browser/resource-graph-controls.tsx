import React from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { ZoomInIcon, ZoomOutIcon, FilterIcon } from "lucide-react"

interface GraphControlsProps {
  zoom: number
  onZoomChange: (zoom: number) => void
  relationshipType: string
  onRelationshipTypeChange: (type: string) => void
  onResetView: () => void
}

export function GraphControls({
  zoom,
  onZoomChange,
  relationshipType,
  onRelationshipTypeChange,
  onResetView
}: GraphControlsProps) {
  const relationshipTypes = [
    "all",
    "practice",
    "commentary",
    "tradition",
    "scripture",
    "historical"
  ]

  return (
    <div className="flex items-center gap-4 p-4 bg-white border rounded-lg">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onZoomChange(Math.max(0.5, zoom - 0.1))}
        >
          <ZoomOutIcon className="h-4 w-4" />
        </Button>
        <Slider
          value={[zoom]}
          min={0.5}
          max={2}
          step={0.1}
          onValueChange={([value]) => onZoomChange(value)}
          className="w-32"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => onZoomChange(Math.min(2, zoom + 0.1))}
        >
          <ZoomInIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <FilterIcon className="h-4 w-4 text-gray-500" />
        <Select
          value={relationshipType}
          onValueChange={onRelationshipTypeChange}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {relationshipTypes.map(type => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" onClick={onResetView}>
        Reset View
      </Button>
    </div>
  )
} 