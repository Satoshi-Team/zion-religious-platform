import { previewConfig } from '@/config/preview.config'
import { verificationService } from './verification-service'

class PreviewService {
  private static instance: PreviewService
  private isVerifying = false

  private constructor() {}

  static getInstance(): PreviewService {
    if (!PreviewService.instance) {
      PreviewService.instance = new PreviewService()
    }
    return PreviewService.instance
  }

  async verifyPreviewDeployment(): Promise<{
    isValid: boolean
    errors: string[]
  }> {
    if (!previewConfig.isPreview) {
      return { isValid: true, errors: [] }
    }

    if (this.isVerifying) {
      throw new Error('Verification already in progress')
    }

    this.isVerifying = true
    const errors: string[] = []

    try {
      // Verify all required endpoints
      const endpointChecks = await Promise.allSettled(
        previewConfig.verifyEndpoints.map(async (endpoint) => {
          const response = await fetch(endpoint)
          if (!response.ok) {
            throw new Error(`Endpoint ${endpoint} verification failed`)
          }
        })
      )

      endpointChecks.forEach((check, index) => {
        if (check.status === 'rejected') {
          errors.push(`Failed to verify ${previewConfig.verifyEndpoints[index]}`)
        }
      })

      // Verify all required features
      const featureChecks = await Promise.allSettled(
        previewConfig.requiredFeatures.map(async (feature) => {
          const isVerified = await verificationService.verifyFeature(feature)
          if (!isVerified) {
            throw new Error(`Feature ${feature} verification failed`)
          }
        })
      )

      featureChecks.forEach((check, index) => {
        if (check.status === 'rejected') {
          errors.push(`Failed to verify ${previewConfig.requiredFeatures[index]}`)
        }
      })

      return {
        isValid: errors.length === 0,
        errors
      }
    } finally {
      this.isVerifying = false
    }
  }

  async waitForVerification(timeoutMs = previewConfig.timeoutMs): Promise<boolean> {
    const startTime = Date.now()

    while (Date.now() - startTime < timeoutMs) {
      const { isValid, errors } = await this.verifyPreviewDeployment()
      
      if (isValid) return true
      if (errors.length > 0) {
        console.error('Preview verification failed:', errors)
        return false
      }

      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    throw new Error('Preview verification timed out')
  }
}

export const previewService = PreviewService.getInstance() 