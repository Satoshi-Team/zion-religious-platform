export type VerificationStatus = {
  status: 'pending' | 'verified' | 'failed'
  lastChecked?: Date
  error?: string
}

export interface VerificationResult {
  success: boolean
  message: string
  timestamp: Date
  details?: {
    failedChecks: string[]
    successfulChecks: string[]
  }
}

export interface VerificationLog {
  timestamp: string
  status: VerificationStatus['status']
  checker: string
  details: string
} 