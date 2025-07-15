import React from 'react'
import { type SearchFilters } from "@/lib/utils/resource-search"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface ResourceFiltersProps {
  filters: SearchFilters
  onChange: (filters: SearchFilters) => void
  className?: string
}

export function ResourceFilters({
  filters,
  onChange,
  className
}: ResourceFiltersProps) {
  const religions = [
    "Buddhism",
    "Christianity",
    "Hinduism",
    "Islam",
    "Judaism",
    "Sikhism",
    "Taoism"
  ]

  const types = [
    "meditation",
    "sacred_text",
    "study",
    "content",
    "lecture",
    "course"
  ]

  const languages = [
    "English",
    "Sanskrit",
    "Arabic",
    "Hebrew",
    "Chinese",
    "Multiple"
  ]

  return (
    <div className={`space-y-4 ${className}`}>
      <Select 
        value={filters.religion?.[0] || ''} 
        onValueChange={(value) => {
          onChange({ ...filters, religion: value ? [value] : undefined })
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by religion" />
        </SelectTrigger>
        <SelectContent>
          {religions.map((religion) => (
            <SelectItem key={religion} value={religion}>
              {religion}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.type?.[0] || ""}
        onValueChange={(value) =>
          onChange({ ...filters, type: value ? [value] : undefined })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          {types.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.language?.[0] || ""}
        onValueChange={(value) =>
          onChange({ ...filters, language: value ? [value] : undefined })
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((l) => (
            <SelectItem key={l} value={l}>
              {l}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Checkbox
          id="verified"
          checked={filters.verified}
          onCheckedChange={(checked) =>
            onChange({ ...filters, verified: checked as boolean })
          }
        />
        <label htmlFor="verified" className="text-sm">
          Show verified resources only
        </label>
      </div>
    </div>
  )
} 