import { type SearchResult } from "./resource-search"

interface ResourceAnalytics {
  viewCount: number
  lastViewed: Date
  userInteractions: {
    clicks: number
    timeSpent: number
    completionRate?: number
  }
}

const analyticsStore = new Map<string, ResourceAnalytics>()

export function trackResourceView(resourceId: string) {
  const analytics = analyticsStore.get(resourceId) || {
    viewCount: 0,
    lastViewed: new Date(),
    userInteractions: { clicks: 0, timeSpent: 0 }
  }
  
  analyticsStore.set(resourceId, {
    ...analytics,
    viewCount: analytics.viewCount + 1,
    lastViewed: new Date()
  })
}

export function getRecommendations(
  currentResource: SearchResult,
  allResources: SearchResult[],
  limit = 5
): SearchResult[] {
  const scored = allResources
    .filter(r => r.id !== currentResource.id)
    .map(resource => ({
      resource,
      score: calculateRecommendationScore(currentResource, resource)
    }))
    .sort((a, b) => b.score - a.score)
    
  return scored.slice(0, limit).map(s => s.resource)
}

function calculateRecommendationScore(current: SearchResult, candidate: SearchResult): number {
  let score = 0
  
  // Topic overlap
  const topicOverlap = current.topics.filter(t => candidate.topics.includes(t)).length
  score += topicOverlap * 2

  // Same religion bonus
  if (current.religion === candidate.religion) score += 3

  // Language match
  if (current.language && candidate.language && current.language === candidate.language) score += 2

  // Popular content bonus
  const analytics = analyticsStore.get(candidate.id)
  if (analytics) {
    score += Math.min(analytics.viewCount / 100, 2)
    score += analytics.userInteractions.completionRate || 0
  }

  return score
} 