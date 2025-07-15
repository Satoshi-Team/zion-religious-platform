import { AutomatedVerificationSystem } from "@/lib/verification/automated-checks"
import { type VerificationStatus } from "@/lib/verification/types"

export class VerificationService {
  private static instance: VerificationService
  private verificationSystem: AutomatedVerificationSystem
  private isInitialized = false

  private constructor() {
    this.verificationSystem = new AutomatedVerificationSystem({
      maxConcurrent: 5,
      retryAttempts: 3,
      retryDelay: 1000,
    })
  }

  static getInstance(): VerificationService {
    if (!VerificationService.instance) {
      VerificationService.instance = new VerificationService()
    }
    return VerificationService.instance
  }

  async initialize() {
    if (this.isInitialized) return
    
    const resourcesToVerify = [
      '/api/health',
      '/api/stations/status',
    ]

    resourcesToVerify.forEach(url => {
      this.verificationSystem.addCheck(url)
    })

    await this.verificationSystem.startChecks()
    this.isInitialized = true
  }

  getResourceStatus(url: string): VerificationStatus | undefined {
    return this.verificationSystem.getStatus(url)
  }

  async verifyPreviewEnvironment(): Promise<boolean> {
    const criticalEndpoints = [
      '/api/health',
      '/api/stations/status',
    ]

    try {
      const results = await Promise.all(
        criticalEndpoints.map(async (endpoint) => {
          const status = this.verificationSystem.getStatus(endpoint)
          return status?.status === 'verified'
        })
      )

      return results.every(Boolean)
    } catch (error) {
      console.error('Preview environment verification failed:', error)
      return false
    }
  }

  async verifyFeature(feature: string): Promise<boolean> {
    switch (feature) {
      case 'translations':
        return this.verifyTranslations()
      case 'stations':
        return this.verifyStations()
      default:
        return false
    }
  }

  private async verifyTranslations(): Promise<boolean> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/translations/status`)
      return response.ok
    } catch {
      return false
    }
  }

  private async verifyStations(): Promise<boolean> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/stations/status`)
      return response.ok
    } catch {
      return false
    }
  }
}

// Export a singleton instance
export const verificationService = VerificationService.getInstance() 