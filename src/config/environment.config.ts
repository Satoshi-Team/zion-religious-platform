import { z } from 'zod'

const environmentSchema = z.object({
  environment: z.enum(['development', 'preview', 'production']),
  isPreview: z.boolean(),
  isDevelopment: z.boolean(),
  isProduction: z.boolean(),
  apiUrl: z.string().url(),
  verifyTimeout: z.number(),
  features: z.object({
    analytics: z.boolean(),
    monitoring: z.boolean(),
    experimentalFeatures: z.boolean()
  })
})

type Environment = z.infer<typeof environmentSchema>

const getEnvironmentConfig = (): Environment => {
  const environment = (process.env.NODE_ENV || 'development') as Environment['environment']
  const isPreview = process.env.VERCEL_ENV === 'preview'

  return {
    environment,
    isPreview,
    isDevelopment: environment === 'development',
    isProduction: environment === 'production',
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    verifyTimeout: 30000,
    features: {
      analytics: !environment.startsWith('development'),
      monitoring: !environment.startsWith('development'),
      experimentalFeatures: environment !== 'production'
    }
  }
}

export const environmentConfig = environmentSchema.parse(getEnvironmentConfig()) 