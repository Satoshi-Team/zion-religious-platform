import { type AdvancedSearchFilters } from "@/lib/utils/resource-search"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

interface AdvancedFiltersProps {
  filters: AdvancedSearchFilters
  facets: {
    religions: { value: string; count: number }[]
    languages: { value: string; count: number }[]
    types: { value: string; count: number }[]
    topics: { value: string; count: number }[]
  }
  onChange: (filters: AdvancedSearchFilters) => void
}

export function AdvancedFilters({ filters, facets, onChange }: AdvancedFiltersProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="topics">
        <AccordionTrigger>Topics</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-2">
            {facets.topics.map(({ value, count }) => (
              <Badge
                key={value}
                variant={filters.topics?.includes(value) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  const newTopics = filters.topics?.includes(value)
                    ? filters.topics.filter(t => t !== value)
                    : [...(filters.topics || []), value]
                  onChange({ ...filters, topics: newTopics })
                }}
              >
                {value} ({count})
              </Badge>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="advanced">
        <AccordionTrigger>Advanced Filters</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="scientific-studies"
                checked={filters.hasScientificStudies}
                onCheckedChange={(checked) =>
                  onChange({ ...filters, hasScientificStudies: checked as boolean })
                }
              />
              <label htmlFor="scientific-studies" className="text-sm">
                Has Scientific Studies
              </label>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Resource Type</h4>
              <div className="flex flex-wrap gap-2">
                {["audio", "video", "text", "interactive"].map((type) => (
                  <Badge
                    key={type}
                    variant={filters.resourceType?.includes(type as any) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => {
                      const newTypes = filters.resourceType?.includes(type as any)
                        ? filters.resourceType.filter(t => t !== type)
                        : [...(filters.resourceType || []), type as any]
                      onChange({ ...filters, resourceType: newTypes })
                    }}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 