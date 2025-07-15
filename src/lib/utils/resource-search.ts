import { MEDITATION_GUIDES } from '@/lib/constants/meditation-guides'
import { SACRED_TEXTS } from '@/lib/constants/sacred-texts'
import { RELIGIOUS_STUDIES } from '@/lib/constants/religious-studies'
import { RELIGIOUS_CONTENT } from '@/lib/constants/religious-content'
import { RESOURCE_REFERENCES } from '@/lib/constants/resource-references'

interface SearchFilters {
  religion?: string[]
  type?: string[]
  language?: string[]
  level?: string[]
  access?: 'free' | 'subscription' | 'partial'
  verified?: boolean
}

interface SearchResult {
  id: string
  name: string
  type: string
  religion: string
  description: string
  url: string
  sourceType: 'meditation' | 'sacred_text' | 'study' | 'content'
  language: string
  isVerified: boolean
  verificationSource?: string
  organization?: {
    name: string
    url: string
    verified: boolean
    verificationSource?: string
  }
  topics: string[]
  scientificStudies?: {
    title: string
    url: string
    authors?: string[]
    publishedDate?: string
    journal?: string
    year?: number
    findings?: string
  }[]
  relatedResources?: {
    id: string
    name: string
    type: string
  }[]
}

interface AdvancedSearchFilters extends SearchFilters {
  period?: string[]
  topics?: string[]
  denomination?: string[]
  access?: 'free' | 'subscription' | 'partial'
  hasScientificStudies?: boolean
  resourceType?: ('audio' | 'video' | 'text' | 'interactive')[]
  verificationSource?: string[]
}

function searchResources({
  query,
  filters,
  page = 1,
  limit = 10,
  sortBy = 'relevance'
}: {
  query?: string
  filters?: AdvancedSearchFilters
  page?: number
  limit?: number
  sortBy?: 'relevance' | 'date' | 'popularity'
}): {
  results: SearchResult[]
  total: number
  hasMore: boolean
  facets: {
    religions: { value: string; count: number }[]
    languages: { value: string; count: number }[]
    types: { value: string; count: number }[]
    topics: { value: string; count: number }[]
  }
} {
  let results: SearchResult[] = []
  
  // Combine all resources
  const allResources = [
    ...MEDITATION_GUIDES.map(guide => ({
      ...guide,
      sourceType: 'meditation' as const
    })),
    ...SACRED_TEXTS.map(text => ({
      ...text,
      sourceType: 'sacred_text' as const
    })),
    ...RELIGIOUS_STUDIES.map(study => ({
      ...study,
      sourceType: 'study' as const
    })),
    ...RELIGIOUS_CONTENT.map(content => ({
      ...content,
      sourceType: 'content' as const
    }))
  ]

  // Apply filters
  let filteredResults = allResources
  if (filters) {
    if (filters.religion)
      filteredResults = filteredResults.filter(r => r.religion && filters.religion?.includes(r.religion))
    if (filters.type)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return r.level && filters.type?.includes(r.level)
          case 'sacred_text':
            return r.content?.[0]?.type && filters.type?.includes(r.content[0].type)
          case 'study':
            return r.type && filters.type?.includes(r.type)
          case 'content':
            return r.type && filters.type?.includes(r.type)
          default:
            return false
        }
      })
    if (filters.language)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return true
          case 'sacred_text':
          case 'study':
          case 'content':
            return r.language && filters.language?.includes(r.language)
          default:
            return false
        }
      })
    if (filters.verified)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return r.author && r.audioUrl
          case 'sacred_text':
            return r.content?.[0]?.translator && r.content?.[0]?.publisher || false
          case 'study':
            return r.isVerified || false
          case 'content':
            return r.lastVerified ? true : false
          default:
            return false
        }
      })
    if (filters.period)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return true
          case 'sacred_text':
            return r.period && filters.period?.includes(r.period)
          case 'study':
          case 'content':
            return true
          default:
            return false
        }
      })
    if (filters.topics)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return filters.topics?.includes(r.level)
          case 'sacred_text':
            return r.content?.some(c => filters.topics?.includes(c.type))
          case 'study':
            return r.topics?.some(t => filters.topics?.includes(t))
          case 'content':
            return true
          default:
            return false
        }
      })
    if (filters.denomination)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return true // Meditations don't have denominations, include all
          case 'sacred_text':
            return r.religion && filters.denomination?.includes(r.religion)
          case 'study':
            return r.religion && filters.denomination?.includes(r.religion) // Use religion for study resources too
          case 'content':
            return r.denomination && filters.denomination?.includes(r.denomination)
          default:
            return false
        }
      })
    if (filters.hasScientificStudies)
      filteredResults = filteredResults.filter(r => {
        switch (r.sourceType) {
          case 'meditation':
            return r.resources?.some(resource => resource.format === 'scientific_study') || false
          case 'sacred_text':
            return r.academicResources?.length > 0 || false
          case 'study':
            return r.topics?.includes('scientific_research') || false
          case 'content':
            return r.type === 'lecture' || r.type === 'course' || false
          default:
            return false
        }
      })
  }

  // Apply search query
  if (query) {
    const searchTerms = query.toLowerCase().split(' ').filter(Boolean)
    filteredResults = filteredResults.filter(resource => {
      let searchText = ''
      
      switch (resource.sourceType) {
        case 'meditation':
          searchText = `
            ${resource.title} 
            ${resource.name} 
            ${resource.description} 
            ${resource.author}
            ${resource.level}
          `
          break
        case 'sacred_text':
          searchText = `
            ${resource.name}
            ${resource.originalName} 
            ${resource.description} 
            ${resource.religion}
            ${resource.language}
            ${resource.period}
          `
          break
        case 'study':
          searchText = `
            ${resource.name}
            ${resource.description}
            ${resource.religion}
            ${resource.language}
            ${resource.topics?.join(' ') || ''}
          `
          break
        case 'content':
          searchText = `
            ${resource.name}
            ${resource.description}
            ${resource.religion}
            ${resource.denomination || ''}
            ${resource.language}
          `
          break
      }

      searchText = searchText.toLowerCase()
      return searchTerms.every(term => searchText.includes(term))
    })
  }

  // Add related resources
  results = filteredResults.map(resource => {
    const relatedRefs = RESOURCE_REFERENCES
      .find(ref => ref.sourceId === resource.id)
      ?.relatedResources || []

    const related = relatedRefs.map(ref => ({
      id: ref.id,
      name: ref.id,
      type: ref.type
    }))

    const resourceUrl = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return resource.audioUrl || ''
        case 'sacred_text':
          return resource.content?.[0]?.url || ''
        case 'study':
          return resource.url || ''
        case 'content':
          return resource.url || ''
        default:
          return ''
      }
    })()

    // Get religion with fallback
    const religion = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return 'Meditation'
        case 'sacred_text':
        case 'study':
        case 'content':
          return resource.religion || 'Unknown'
        default:
          return 'Unknown'
      }
    })()

    // Get type based on resource type
    const resourceType = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return resource.level || 'Beginner'
        case 'sacred_text':
          return resource.content?.[0]?.type || 'text'
        case 'study':
          return resource.type || 'study'
        case 'content':
          return resource.type || 'content'
        default:
          return 'unknown'
      }
    })()

    // Get organization with proper structure
    const organization = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return {
            name: resource.author || 'Unknown Author',
            url: '',
            verified: !!resource.author
          }
        case 'sacred_text':
          return {
            name: resource.content?.[0]?.publisher || 'Unknown Publisher',
            url: '',
            verified: !!resource.content?.[0]?.translator
          }
        case 'study':
          if (!resource.organization) return undefined
          return {
            name: resource.organization,
            url: '',
            verified: !!resource.isVerified
          }
        case 'content':
          return {
            name: resource.denomination || 'Unknown Organization',
            url: '',
            verified: !!resource.lastVerified
          }
        default:
          return undefined
      }
    })()

    const searchResult: SearchResult = {
      ...resource,
      url: resourceUrl,
      religion,
      type: resourceType,
      organization,
      language: 'language' in resource ? resource.language : 'en',
      isVerified: ('isVerified' in resource && resource.isVerified === true) ? true :
                  resource.sourceType === 'meditation' ? !!resource.author :
                  resource.sourceType === 'sacred_text' ? !!resource.content?.[0]?.translator :
                  false,
      topics: ('topics' in resource && Array.isArray(resource.topics)) ? resource.topics :
              resource.sourceType === 'meditation' ? [resource.level] :
              resource.sourceType === 'sacred_text' ? [resource.period] :
              [],
      relatedResources: related
    }

    return searchResult
  })

  // Calculate facets
  const facets = {
    religions: calculateFacets(filteredResults, 'religion'),
    languages: calculateFacets(filteredResults, 'language'),
    types: calculateFacets(filteredResults, 'type'),
    topics: calculateFacets(filteredResults, 'topics', true)
  }

  // Get the date value for sorting based on resource type
  const getResourceDate = (resource: any) => {
    switch (resource.sourceType) {
      case 'meditation':
        return resource.createdAt || resource.updatedAt || new Date(0).toISOString()
      case 'sacred_text':
        return resource.content?.[0]?.year ? 
          new Date(resource.content[0].year, 0).toISOString() : 
          new Date(0).toISOString()
      case 'study':
        return resource.updatedAt || resource.createdAt || new Date(0).toISOString()
      case 'content':
        return resource.lastVerified || new Date(0).toISOString()
      default:
        return new Date(0).toISOString()
    }
  }

  // Get the popularity value for sorting based on resource type
  const getResourcePopularity = (resource: any) => {
    switch (resource.sourceType) {
      case 'meditation':
        // For meditations, could use number of plays or ratings if available
        return resource.plays || resource.ratings?.length || 0
      case 'sacred_text':
        // For sacred texts, could use number of translations or references
        return resource.content?.length || resource.academicResources?.length || 0
      case 'study':
        // For studies, could use number of topics or verified status
        return (resource.topics?.length || 0) + (resource.isVerified ? 10 : 0)
      case 'content':
        // For content, could use a combination of factors
        return resource.views || resource.downloads || 0
      default:
        return 0
    }
  }

  // Apply sorting
  if (sortBy === 'date')
    filteredResults.sort((a, b) => 
      new Date(getResourceDate(b)).getTime() - new Date(getResourceDate(a)).getTime()
    )
  else if (sortBy === 'popularity')
    filteredResults.sort((a, b) => 
      getResourcePopularity(b) - getResourcePopularity(a)
    )

  const total = filteredResults.length
  const start = (page - 1) * limit
  const rawPaginatedResults = filteredResults.slice(start, start + limit)

  // Transform paginated results to match SearchResult type
  const paginatedResults = rawPaginatedResults.map(resource => {
    const resourceUrl = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return resource.audioUrl || ''
        case 'sacred_text':
          return resource.content?.[0]?.url || ''
        case 'study':
        case 'content':
          return resource.url || ''
        default:
          return ''
      }
    })()

    const organization = (() => {
      switch (resource.sourceType) {
        case 'meditation':
          return {
            name: resource.author || 'Unknown Author',
            url: '',
            verified: !!resource.author
          }
        case 'sacred_text':
          return {
            name: resource.content?.[0]?.publisher || 'Unknown Publisher',
            url: '',
            verified: !!resource.content?.[0]?.translator
          }
        case 'study':
          if (!resource.organization) return undefined
          return {
            name: resource.organization,
            url: '',
            verified: !!resource.isVerified
          }
        case 'content':
          return {
            name: resource.denomination || 'Unknown Organization',
            url: '',
            verified: !!resource.lastVerified
          }
        default:
          return undefined
      }
    })()

    return {
      ...resource,
      url: resourceUrl,
      religion: resource.sourceType === 'meditation' ? 'Meditation' :
                resource.religion || 'Unknown',
      type: resource.sourceType === 'meditation' ? resource.level :
            resource.sourceType === 'sacred_text' ? (resource.content?.[0]?.type || 'text') :
            resource.type || 'unknown',
      organization,
      language: 'language' in resource ? resource.language : 'en',
      isVerified: ('isVerified' in resource && resource.isVerified === true) ? true :
                  resource.sourceType === 'meditation' ? !!resource.author :
                  resource.sourceType === 'sacred_text' ? !!resource.content?.[0]?.translator :
                  false,
      topics: ('topics' in resource && Array.isArray(resource.topics)) ? resource.topics :
              resource.sourceType === 'meditation' ? [resource.level] :
              resource.sourceType === 'sacred_text' ? [resource.period] :
              []
    } as SearchResult
  })

  return {
    results: paginatedResults,
    total,
    hasMore: total > page * limit,
    facets
  }
}

function calculateFacets(results: any[], field: string, isArray = false): { value: string; count: number }[] {
  const counts = new Map<string, number>()
  
  results.forEach(result => {
    if (isArray) {
      result[field]?.forEach((value: string) => {
        counts.set(value, (counts.get(value) || 0) + 1)
      })
    } else {
      const value = result[field]
      if (value) counts.set(value, (counts.get(value) || 0) + 1)
    }
  })

  return Array.from(counts.entries())
    .map(([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count)
}

interface SearchFacets {
  religions: { value: string; count: number }[]
  languages: { value: string; count: number }[]
  types: { value: string; count: number }[]
  topics: { value: string; count: number }[]
}

export { searchResources }
export type { SearchFilters, SearchResult, AdvancedSearchFilters } 