'use client'

interface PrefetchConfig {
  routes: string[]
  images: string[]
  threshold?: number
}

// Add type declaration for NetworkInformation
interface NetworkInformation extends EventTarget {
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean
  addEventListener: (type: string, listener: EventListener) => void
  removeEventListener: (type: string, listener: EventListener) => void
}

// Extend Navigator interface to include connection
interface ExtendedNavigator extends Navigator {
  connection?: NetworkInformation
}

class ResourcePrefetcher {
  private prefetchedRoutes = new Set<string>()
  private prefetchedImages = new Set<string>()
  private networkIdle = true
  private connectionType: string | null = null

  constructor(private config: PrefetchConfig) {
    this.initializeNetworkListeners()
  }

  private initializeNetworkListeners() {
    if (!(navigator as ExtendedNavigator).connection) return

    const connection = (navigator as ExtendedNavigator).connection
    this.connectionType = connection?.effectiveType ?? null

    if (!connection) return

    connection.addEventListener('change', () => {
      this.connectionType = connection.effectiveType
      this.networkIdle = true
    })
  }

  private shouldPrefetch(): boolean {
    if (!this.networkIdle) return false
    if (this.connectionType === 'slow-2g' || this.connectionType === '2g') return false
    return true
  }

  async prefetchRoute(route: string) {
    if (this.prefetchedRoutes.has(route) || !this.shouldPrefetch()) return

    try {
      const prefetcher = document.createElement('link')
      prefetcher.rel = 'prefetch'
      prefetcher.href = route
      document.head.appendChild(prefetcher)
      this.prefetchedRoutes.add(route)
    } catch (error) {
      console.error('Failed to prefetch route:', error)
    }
  }

  async prefetchImage(src: string) {
    if (this.prefetchedImages.has(src) || !this.shouldPrefetch()) return

    try {
      const image = new Image()
      image.src = src
      this.prefetchedImages.add(src)
    } catch (error) {
      console.error('Failed to prefetch image:', error)
    }
  }

  startPrefetching() {
    if (!this.shouldPrefetch()) return

    requestIdleCallback(() => {
      this.config.routes.forEach(route => this.prefetchRoute(route))
      this.config.images.forEach(image => this.prefetchImage(image))
    })
  }
}

export function createResourcePrefetcher(config: PrefetchConfig) {
  return new ResourcePrefetcher(config)
} 