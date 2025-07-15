import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SortAscIcon, SortDescIcon } from "lucide-react"

interface SortControlsProps {
  sortBy: string
  sortOrder: 'asc' | 'desc'
  onSortChange: (sort: { by: string; order: 'asc' | 'desc' }) => void
}

export function SortControls({ sortBy, sortOrder, onSortChange }: SortControlsProps) {
  const sortOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Date Updated", value: "date" },
    { label: "Popularity", value: "popularity" },
    { label: "Name", value: "name" },
    { label: "Verification Status", value: "verified" }
  ]

  return (
    <div className="flex items-center gap-2">
      <Select
        value={sortBy}
        onValueChange={(value) => onSortChange({ by: value, order: sortOrder })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        size="icon"
        onClick={() => 
          onSortChange({ 
            by: sortBy, 
            order: sortOrder === 'asc' ? 'desc' : 'asc' 
          })
        }
      >
        {sortOrder === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
      </Button>
    </div>
  )
} 