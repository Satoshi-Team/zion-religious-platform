import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { SacredTextResource } from "@/types/sacred-texts"

interface SacredTextResourceCardProps {
  resource: SacredTextResource
}

export function SacredTextResourceCard({ resource }: SacredTextResourceCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{resource.title}</h3>
        {resource.tradition && (
          <p className="text-sm text-muted-foreground">{resource.tradition}</p>
        )}
      </div>
      
      <p className="text-muted-foreground mb-6">{resource.description}</p>
      
      <div className="space-y-4 mb-6">
        {resource.features && (
          <div>
            <h4 className="text-sm font-medium mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {resource.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div>
          <h4 className="text-sm font-medium mb-2">Available Languages:</h4>
          <div className="flex flex-wrap gap-2">
            {resource.languages.map((lang) => (
              <Badge key={lang} variant="secondary">
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {resource.sections && (
          <div>
            <h4 className="text-sm font-medium mb-2">Major Sections:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {resource.sections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Study Resources:</h4>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h5 className="text-xs font-medium mb-1">Translations</h5>
              <ul className="list-disc list-inside text-xs text-muted-foreground">
                {resource.resources.translations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-medium mb-1">Commentaries</h5>
              <ul className="list-disc list-inside text-xs text-muted-foreground">
                {resource.resources.commentaries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-medium mb-1">Study Guides</h5>
              <ul className="list-disc list-inside text-xs text-muted-foreground">
                {resource.resources.study_guides.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {resource.online_access && (
          <div>
            <h4 className="text-sm font-medium mb-2">Online Access:</h4>
            <Button asChild variant="outline" size="sm">
              <Link href={resource.online_access.website} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {resource.online_access.app && (
              <span className="ml-4 text-sm text-muted-foreground">
                Available on: {resource.online_access.app}
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  )
} 