import { type SearchResult } from "@/lib/utils/resource-search"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { formatDate } from "@/lib/utils/date"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip"
import { InfoIcon, BookOpenIcon, GlobeIcon, ClockIcon } from "lucide-react"

interface ResourceCardProps {
  resource: SearchResult
  isCompact?: boolean
  isSelected?: boolean
  onClick?: () => void
}

export function ResourceCard({ resource, isCompact, isSelected, onClick }: ResourceCardProps) {
  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${isSelected ? 'ring-2 ring-primary' : ''} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            {resource.name}
            {resource.isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="secondary" className="ml-2">Verified</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Verified by {resource.verificationSource || 'our team'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </h3>
          {resource.organization && (
            <p className="text-sm text-gray-600">{resource.organization.name}</p>
          )}
        </div>
        <Badge variant="outline">{resource.sourceType}</Badge>
      </div>

      <p className="text-gray-600 mb-4">{resource.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{resource.religion}</span>
          </div>
          <div className="flex items-center gap-2">
            <GlobeIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{resource.language}</span>
          </div>
        </div>
        <div className="space-y-2">
          {resource.topics && (
            <div className="flex flex-wrap gap-1">
              {resource.topics.map(topic => (
                <Badge key={topic} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {resource.scientificStudies && resource.scientificStudies.length > 0 && (
        <div className="mb-4 border-t pt-4">
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <InfoIcon className="w-4 h-4" />
            Scientific Studies
          </h4>
          <div className="space-y-2">
            {resource.scientificStudies.map((study, index) => (
              <div key={index} className="text-sm">
                <a 
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {study.title} {study.year && `(${study.year})`}
                </a>
                {study.findings && (
                  <p className="text-gray-600 text-xs">{study.findings}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {resource.relatedResources && resource.relatedResources.length > 0 && (
        <div className="mb-4 border-t pt-4">
          <h4 className="text-sm font-medium mb-2">Related Resources:</h4>
          <div className="flex flex-wrap gap-2">
            {resource.relatedResources.map((related) => (
              <TooltipProvider key={related.id}>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge variant="outline">
                      {related.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{related.type}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-col gap-2">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
        >
          Visit Resource →
        </a>
        {resource.scientificStudies?.[0]?.publishedDate && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <ClockIcon className="w-3 h-3" />
            Published: {formatDate(resource.scientificStudies[0].publishedDate)}
          </div>
        )}
      </div>
    </Card>
  )
} 