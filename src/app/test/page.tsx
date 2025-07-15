'use client'

import { useTranslations } from '@/hooks/use-translations'

export default function TestPage() {
  const { t, currentLanguage, isLoading } = useTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Translation Test</h1>
      
      <div className="space-y-4">
        <div>
          <strong>Current Language:</strong> {currentLanguage}
        </div>
        
        <div>
          <strong>Is Loading:</strong> {isLoading ? 'Yes' : 'No'}
        </div>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Test Results:</h2>
          <div>Home: "{t('common.navigation.home')}"</div>
          <div>Sacred Texts: "{t('common.navigation.sacredTexts')}"</div>
          <div>Studies: "{t('common.navigation.studies')}"</div>
          <div>Teachings: "{t('common.navigation.teachings')}"</div>
          <div>Blog: "{t('common.navigation.blog')}"</div>
          <div>Resources: "{t('common.navigation.resources')}"</div>
          <div>Meditation: "{t('common.navigation.meditation')}"</div>
        </div>
      </div>
    </div>
  )
} 