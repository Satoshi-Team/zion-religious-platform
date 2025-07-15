import React from 'react'
import { useState, useEffect } from "react"
import { EnhancedResourceGraph as ResourceGraph } from "./enhanced-resource-graph"
import { ResourceCard } from "./resource-card"
import { SortControls } from "./sort-controls"
import { EnhancedFilters } from "./enhanced-filters"
import { TimelineView } from "./timeline-view"
import { ComparisonView } from "./comparison-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RESOURCE_REFERENCES } from "@/lib/constants/resource-references"
import { getRecommendations, trackResourceView } from "@/lib/utils/resource-analytics"
import { type SearchResult, type AdvancedSearchFilters } from "@/lib/utils/resource-search"

interface FacetItem {
  value: string
  count: number
  label?: string
}

interface SearchFacets {
  religions: FacetItem[]
  languages: FacetItem[]
  types: FacetItem[]
  topics: FacetItem[]
}

interface ResourceExplorerProps {
  results: SearchResult[]
  facets: SearchFacets
}

type SortOrder = "desc" | "asc"

interface TimelineViewProps {
  resources: SearchResult[]
  onResourceSelect: (resourceId: string) => void
}

export function ResourceExplorer({ results, facets }: ResourceExplorerProps) {
  const [selectedResource, setSelectedResource] = useState<string>()
  const [view, setView] = useState<"grid" | "graph" | "timeline" | "comparison">("grid")
  const [sort, setSort] = useState<{ by: string; order: SortOrder }>({ by: "relevance", order: "desc" })
  const [filters, setFilters] = useState<AdvancedSearchFilters>({})
  const [recommendations, setRecommendations] = useState<SearchResult[]>([])

  useEffect(() => {
    if (selectedResource) {
      trackResourceView(selectedResource)
      const resource = results.find(r => r.id === selectedResource)
      if (resource) {
        const newRecommendations = getRecommendations(resource, results)
        setRecommendations(newRecommendations)
      }
    }
  }, [selectedResource])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Tabs value={view} onValueChange={(v) => setView(v as typeof view)}>
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="graph">Relationship View</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="comparison">Compare</TabsTrigger>
          </TabsList>
        </Tabs>
        <SortControls
          sortBy={sort.by}
          sortOrder={sort.order}
          onSortChange={setSort}
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <EnhancedFilters
            filters={filters}
            facets={facets}
            onChange={setFilters}
          />
          
          {selectedResource && recommendations.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Recommended</h3>
              <div className="space-y-4">
                {recommendations.map(resource => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    isCompact
                    onClick={() => setSelectedResource(resource.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-3">
          {view === "grid" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  isSelected={resource.id === selectedResource}
                  onClick={() => setSelectedResource(resource.id)}
                />
              ))}
            </div>
          )}
          
          {view === "graph" && (
            <ResourceGraph
              resources={RESOURCE_REFERENCES}
              selectedId={selectedResource}
              onNodeClick={setSelectedResource}
            />
          )}
          
          {view === "timeline" && (
            <TimelineView
              resources={results}
              onResourceSelect={setSelectedResource}
            />
          )}
          
          {view === "comparison" && (
            <ComparisonView
              resources={results}
              onResourceSelect={setSelectedResource}
            />
          )}
        </div>
      </div>
    </div>
  )
} 