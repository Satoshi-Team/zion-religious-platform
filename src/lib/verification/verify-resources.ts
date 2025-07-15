import { RELIGIOUS_STUDIES } from '../constants/religious-studies'
import { SACRED_TEXTS } from '../constants/sacred-texts'
import { VerificationStatus } from './types'

interface VerificationResult {
  status: 'verified' | 'failed'
  lastChecked: Date
  nextCheck: Date
  checkedBy: string
  notes: string
}

export async function verifyResource(url: string): Promise<VerificationStatus> {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    
    return {
      status: response.ok ? 'verified' : 'failed',
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      checkedBy: 'system',
      notes: response.ok ? 'Resource available' : `Failed with status: ${response.status}`
    } as VerificationStatus
  } catch (error) {
    return {
      status: 'failed',
      lastChecked: new Date(),
      nextCheck: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      checkedBy: 'system',
      notes: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
    } as VerificationStatus
  }
}

export async function verifyAllResources() {
  const results = new Map<string, VerificationStatus>()

  // Verify religious studies resources
  for (const resource of RELIGIOUS_STUDIES) {
    results.set(resource.url, await verifyResource(resource.url))
  }

  // Verify sacred texts resources
  for (const text of SACRED_TEXTS) {
    for (const content of text.content) {
      results.set(content.url, await verifyResource(content.url))
    }
  }

  return results
} 