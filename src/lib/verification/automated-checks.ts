interface VerificationConfig {
  maxConcurrent: number
  retryAttempts: number
  retryDelay: number
}

interface VerificationResult {
  status: 'pending' | 'verified' | 'failed'
  lastChecked?: Date
  error?: string
}

class AutomatedVerificationSystem {
  private checks: Map<string, VerificationResult>
  private config: VerificationConfig
  private isRunning: boolean

  constructor(config: VerificationConfig) {
    this.checks = new Map()
    this.config = config
    this.isRunning = false
  }

  addCheck(url: string) {
    this.checks.set(url, { status: 'pending' })
  }

  getStatus(url: string) {
    return this.checks.get(url)
  }

  private async verifyUrl(url: string): Promise<boolean> {
    for (let attempt = 0; attempt < this.config.retryAttempts; attempt++) {
      try {
        const response = await fetch(url, {
          method: 'HEAD',
          cache: 'no-store'
        })
        
        if (response.ok) return true
        
        await new Promise(resolve => 
          setTimeout(resolve, this.config.retryDelay)
        )
      } catch (error) {
        if (attempt === this.config.retryAttempts - 1) {
          this.checks.set(url, {
            status: 'failed',
            lastChecked: new Date(),
            error: error instanceof Error ? error.message : 'Unknown error'
          })
          return false
        }
        await new Promise(resolve => 
          setTimeout(resolve, this.config.retryDelay)
        )
      }
    }
    return false
  }

  async startChecks() {
    if (this.isRunning) return
    this.isRunning = true

    const urls = Array.from(this.checks.keys())
    const chunks = []
    
    for (let i = 0; i < urls.length; i += this.config.maxConcurrent) {
      chunks.push(urls.slice(i, i + this.config.maxConcurrent))
    }

    for (const chunk of chunks) {
      await Promise.all(
        chunk.map(async url => {
          const isVerified = await this.verifyUrl(url)
          this.checks.set(url, {
            status: isVerified ? 'verified' : 'failed',
            lastChecked: new Date()
          })
        })
      )
    }

    this.isRunning = false
  }

  async verifyAll(): Promise<boolean> {
    await this.startChecks()
    return Array.from(this.checks.values())
      .every(result => result.status === 'verified')
  }
}

// Export the class directly
export { AutomatedVerificationSystem } 