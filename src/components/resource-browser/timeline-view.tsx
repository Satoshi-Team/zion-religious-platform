import { type SearchResult } from "@/lib/utils/resource-search"

interface TimelineViewProps {
  resources: SearchResult[]
  onResourceSelect: (resourceId: string) => void
}

export function TimelineView({ resources, onResourceSelect }: TimelineViewProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div 
          key={resource.id}
          className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onResourceSelect(resource.id)}
        >
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{resource.name}</h3>
            <span className="text-sm text-gray-500">{resource.type}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
        </div>
      ))}
    </div>
  )
} 