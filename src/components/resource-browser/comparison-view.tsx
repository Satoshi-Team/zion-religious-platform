import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { type SearchResult } from "@/lib/utils/resource-search"
import { PlusIcon, XIcon } from "lucide-react"

interface ComparisonViewProps {
  resources: SearchResult[]
  onResourceSelect: (resourceId: string) => void
}

export function ComparisonView({ resources, onResourceSelect }: ComparisonViewProps) {
  const [selectedResources, setSelectedResources] = useState<string[]>([])

  const addResource = (resourceId: string) => {
    if (selectedResources.length < 3)
      setSelectedResources([...selectedResources, resourceId])
  }

  const removeResource = (resourceId: string) => {
    setSelectedResources(selectedResources.filter(id => id !== resourceId))
  }

  const getResourceDetails = (resourceId: string) => 
    resources.find(r => r.id === resourceId)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Select onValueChange={addResource} disabled={selectedResources.length >= 3}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Add resource to compare..." />
          </SelectTrigger>
          <SelectContent>
            {resources
              .filter(r => !selectedResources.includes(r.id))
              .map(r => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-gray-500">
          {3 - selectedResources.length} slots remaining
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {selectedResources.map(resourceId => {
          const resource = getResourceDetails(resourceId)
          if (!resource) return null

          return (
            <Card key={resourceId} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">{resource.name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeResource(resourceId)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Type</h4>
                  <Badge variant="outline">{resource.sourceType}</Badge>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Description</h4>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Language</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      {resource.language}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {resource.topics.map(topic => (
                      <Badge key={topic} variant="outline">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
} 