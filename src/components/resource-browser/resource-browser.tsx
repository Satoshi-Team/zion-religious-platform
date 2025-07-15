import { useState } from "react"
import { useDebounce } from "@/lib/hooks/use-debounce"
import { searchResources, type SearchFilters, type SearchResult } from "@/lib/utils/resource-search"
import { ResourceCard } from "./resource-card"
import { ResourceFilters } from "./resource-filters"
import { Pagination } from "@/components/ui/pagination"

interface ResourceBrowserProps {
  initialFilters?: SearchFilters
  defaultQuery?: string
}

export function ResourceBrowser({ initialFilters, defaultQuery = "" }: ResourceBrowserProps) {
  const [query, setQuery] = useState(defaultQuery)
  const [filters, setFilters] = useState<SearchFilters>(initialFilters || {})
  const [page, setPage] = useState(1)
  const debouncedQuery = useDebounce(query, 300)

  const { results, total, hasMore } = searchResources({
    query: debouncedQuery,
    filters,
    page,
    limit: 12
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border px-4 py-2"
          />
        </div>
        <ResourceFilters
          filters={filters}
          onChange={setFilters}
          className="flex-shrink-0"
        />
      </div>

      {results.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((resource) => (
              <ResourceCard
                key={`${resource.sourceType}-${resource.id}`}
                resource={resource}
              />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(total / 12)}
            onPageChange={setPage}
          />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching your criteria</p>
        </div>
      )}
    </div>
  )
} 