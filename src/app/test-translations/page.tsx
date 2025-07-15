'use client'

import { useTranslations } from '@/hooks/use-translations'

export default function TestTranslationsPage() {
  const { t, currentLanguage, isLoading } = useTranslations()

  if (isLoading) {
    return <div>Loading translations...</div>
  }

  const testKeys = [
    // Home page keys
    'home.hero.title',
    'home.hero.description',
    'home.hero.ctaStartLearning',
    'home.hero.ctaBrowseResources',
    'home.quickAccess.title',
    'home.quickAccess.studyGuides.title',
    'home.quickAccess.studyGuides.description',
    'home.quickAccess.resources.title',
    'home.quickAccess.resources.description',
    'home.quickAccess.sacredTexts.title',
    'home.quickAccess.sacredTexts.description',
    'home.quickAccess.teachings.title',
    'home.quickAccess.teachings.description',
    'home.quickAccess.meditation.title',
    'home.quickAccess.meditation.description',
    'home.quickAccess.explore.title',
    'home.quickAccess.explore.description',
    
    // Navigation keys
    'common.navigation.home',
    'common.navigation.sacredTexts',
    'common.navigation.studies',
    'common.navigation.teachings',
    'common.navigation.blog',
    'common.navigation.resources',
    'common.navigation.meditation',
    'common.navigation.title',
    
    // Religion keys
    'religions.christianity.title',
    'religions.christianity.description',
    'religions.islam.title',
    'religions.islam.description',
    'religions.buddhism.title',
    'religions.buddhism.description',
    'religions.hinduism.title',
    'religions.hinduism.description',
    
    // Filter buttons
    'home.filterButtons.browseByCategory',
    'home.filterButtons.christianity',
    'home.filterButtons.islam',
    'home.filterButtons.buddhism',
    'home.filterButtons.hinduism',
    'home.filterButtons.judaism',
    'home.filterButtons.sikhism',
    'home.filterButtons.shinto',
    'home.filterButtons.taoism',
    'home.filterButtons.bahai',
    'home.filterButtons.confucianism',
    'home.filterButtons.rastafarianism',
    'home.filterButtons.jainism',
    'home.filterButtons.viewArticles'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Translation Test Page</h1>
      <p className="mb-4">Current Language: {currentLanguage}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Home Page Keys</h2>
          <div className="space-y-2">
            {testKeys.slice(0, 17).map((key) => (
              <div key={key} className="border p-3 rounded">
                <div className="text-sm text-gray-500">{key}</div>
                <div className="font-medium">{t(key)}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Navigation & Religion Keys</h2>
          <div className="space-y-2">
            {testKeys.slice(17).map((key) => (
              <div key={key} className="border p-3 rounded">
                <div className="text-sm text-gray-500">{key}</div>
                <div className="font-medium">{t(key)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Test Results</h2>
        <div className="space-y-2">
          {testKeys.map((key) => {
            const result = t(key)
            const isWorking = result !== key
            return (
              <div key={key} className={`p-2 rounded ${isWorking ? 'bg-green-100' : 'bg-red-100'}`}>
                <span className="font-medium">{key}:</span> {isWorking ? '✅ Working' : '❌ Missing'}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 