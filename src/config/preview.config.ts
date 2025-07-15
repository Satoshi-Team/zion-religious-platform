interface PreviewConfig {
  isPreview: boolean
  verifyEndpoints: string[]
  requiredFeatures: string[]
  timeoutMs: number
}

export const previewConfig: PreviewConfig = {
  isPreview: process.env.NEXT_PUBLIC_IS_PREVIEW === 'true' || process.env.CONTEXT === 'deploy-preview',
  verifyEndpoints: [
    `${process.env.NEXT_PUBLIC_APP_URL}/api/health`,
    `${process.env.NEXT_PUBLIC_APP_URL}/api/status`
  ],
  requiredFeatures: [
    'translations',
    'stations'
  ],
  timeoutMs: 30000
} 