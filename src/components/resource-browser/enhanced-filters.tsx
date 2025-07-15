import React from 'react'
import { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { type AdvancedSearchFilters } from "@/lib/utils/resource-search"
import { format } from "date-fns"
import { type SelectSingleEventHandler } from "react-day-picker"

interface SearchFacets {
  religions: { value: string; count: number; label?: string }[]
  languages: { value: string; count: number; label?: string }[]
  types: { value: string; count: number; label?: string }[]
  topics: { value: string; count: number; label?: string }[]
}

interface EnhancedFiltersProps {
  filters: AdvancedSearchFilters
  onChange: (filters: AdvancedSearchFilters) => void
  facets: SearchFacets
}

export function EnhancedFilters({ filters, onChange, facets }: EnhancedFiltersProps) {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined])
  const [difficultyRange, setDifficultyRange] = useState([0, 5])

  const handleStartDateSelect: SelectSingleEventHandler = (date) => {
    setDateRange([date ?? undefined, dateRange[1]])
  }

  const handleEndDateSelect: SelectSingleEventHandler = (date) => {
    setDateRange([dateRange[0], date ?? undefined])
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="date">
        <AccordionTrigger>Date Range</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {dateRange[0] ? format(dateRange[0], 'PP') : 'Select start date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange[0]}
                  onSelect={handleStartDateSelect}
                />
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {dateRange[1] ? format(dateRange[1], 'PP') : 'Select end date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateRange[1]}
                  onSelect={handleEndDateSelect}
                />
              </PopoverContent>
            </Popover>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="difficulty">
        <AccordionTrigger>Difficulty Level</AccordionTrigger>
        <AccordionContent>
          <Slider
            value={difficultyRange}
            onValueChange={setDifficultyRange}
            min={0}
            max={5}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>Beginner</span>
            <span>Advanced</span>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Additional filter sections */}
      <AccordionItem value="topics">
        <AccordionTrigger>Topics</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {facets.topics.map(topic => (
              <div key={topic.value} className="flex items-center gap-2">
                <Checkbox
                  checked={filters.topics?.includes(topic.value)}
                  onCheckedChange={(checked) => {
                    const newTopics = checked
                      ? [...(filters.topics || []), topic.value]
                      : filters.topics?.filter(t => t !== topic.value)
                    onChange({ ...filters, topics: newTopics })
                  }}
                />
                <span className="text-sm">{topic.value}</span>
                <Badge variant="secondary" className="ml-auto">
                  {topic.count}
                </Badge>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 