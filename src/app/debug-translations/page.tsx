'use client'

import { useTranslations } from '@/hooks/use-translations'
import { getTranslations } from '@/lib/i18n-fixed'

export default function DebugTranslationsPage() {
  const { t, currentLanguage, isLoading } = useTranslations()
  
  // Test the translation function directly
  const directT = getTranslations('en')
  
  const testKeys = [
    'common.navigation.home',
    'common.navigation.sacredTexts',
    'common.navigation.studies',
    'common.navigation.teachings',
    'common.navigation.blog',
    'common.navigation.resources',
    'common.navigation.meditation',
    'religions.hinduism.title',
    'religions.buddhism.title',
    'religions.christianity.title'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Translation Debug</h1>
      
      <div className="space-y-4">
        <div>
          <strong>Current Language:</strong> {currentLanguage}
        </div>
        
        <div>
          <strong>Is Loading:</strong> {isLoading ? 'Yes' : 'No'}
        </div>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Hook Results:</h2>
          {testKeys.map(key => (
            <div key={key} className="border p-2 rounded">
              <strong>{key}:</strong> "{t(key)}"
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Direct Function Results:</h2>
          {testKeys.map(key => (
            <div key={key} className="border p-2 rounded">
              <strong>{key}:</strong> "{directT(key)}"
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 