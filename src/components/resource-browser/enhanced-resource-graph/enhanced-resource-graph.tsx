import React from 'react'
import { type SearchResult } from "@/lib/utils/resource-search"

interface EnhancedResourceGraphProps {
  resources: SearchResult[]
  onNodeClick: (resourceId: string) => void
}

export function EnhancedResourceGraph({ resources, onNodeClick }: EnhancedResourceGraphProps) {
  // Implementation
} 