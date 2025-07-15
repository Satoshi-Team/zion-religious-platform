'use client'

import { useEffect, useRef } from 'react'
import { createResourcePrefetcher } from '@/lib/mobile/resource-prefetcher'

interface UseMobileResourcesConfig {
  routes?: string[]
  images?: string[]
  threshold?: number
}

export function useMobileResources({
  routes = [],
  images = [],
  threshold = 50
}: UseMobileResourcesConfig = {}) {
  const prefetcherRef = useRef<ReturnType<typeof createResourcePrefetcher> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isMobile = window.innerWidth < 768
    if (!isMobile) return

    prefetcherRef.current = createResourcePrefetcher({
      routes,
      images,
      threshold
    })

    prefetcherRef.current.startPrefetching()
  }, [routes, images, threshold])

  return {
    isPrefetching: !!prefetcherRef.current
  }
} 