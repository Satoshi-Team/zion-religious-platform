"use client"

import { useTranslations } from "@/hooks/use-translations"
import { getTranslations } from "@/lib/i18n-fixed"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function DebugTranslationsPage() {
  const params = useParams()
  const locale = params.locale as string
  const { t, isLoading, currentLanguage } = useTranslations()
  const [refreshKey, setRefreshKey] = useState(0)

  // Get direct translation function
  const directT = getTranslations(locale as any)

  // Test all the specific keys mentioned by the user
  const testKeys = [
    "common.navigation.home",
    "common.navigation.sacredTexts", 
    "common.navigation.studies",
    "common.navigation.teachings",
    "common.navigation.blog",
    "common.navigation.resources",
    "common.navigation.meditation",
    "common.navigation.title",
    "home.religions.hinduism.title",
    "home.religions.hinduism.description",
    "home.religions.buddhism.title",
    "home.religions.buddhism.description",
    "home.religions.islam.title",
    "home.religions.islam.description",
    "home.religions.christianity.title",
    "home.religions.christianity.description",
    // Studies dropdown keys
    "common.navigation.studiesTitle",
    "common.navigation.studiesDescription",
    "common.navigation.bibleStudies",
    "common.navigation.bibleStudiesDescription",
    "common.navigation.theology",
    "common.navigation.theologyDescription",
    "common.navigation.churchHistory",
    "common.navigation.churchHistoryDescription",
    // Teachings dropdown keys
    "common.navigation.teachingsTitle",
    "common.navigation.teachingsDescription",
    "common.navigation.sermons",
    "common.navigation.sermonsDescription",
    "common.navigation.bibleTeachings",
    "common.navigation.bibleTeachingsDescription",
    "common.navigation.devotionals",
    "common.navigation.devotionalsDescription",
    // Blog dropdown keys
    "common.navigation.blogTitle",
    "common.navigation.blogDescription",
    "common.navigation.hinduism",
    "common.navigation.hinduismDescription",
    "common.navigation.buddhism",
    "common.navigation.buddhismDescription",
    "common.navigation.islam",
    "common.navigation.islamDescription",
    // Religion keys
    "religions.christianity.title",
    "religions.christianity.links.0",
    "religions.christianity.links.1",
    "religions.christianity.links.2",
    "religions.christianity.links.6",
    "religions.islam.title",
    "religions.islam.links.0",
    "religions.islam.links.1",
    "religions.islam.links.2",
    "religions.islam.links.3",
    "religions.hinduism.title",
    "religions.hinduism.links.0",
    "religions.hinduism.links.1",
    "religions.hinduism.links.2",
    "religions.hinduism.links.3",
    "religions.buddhism.title",
    "religions.buddhism.links.0",
    "religions.buddhism.links.1",
    "religions.buddhism.links.2",
    "religions.buddhism.links.3",
    "religions.judaism.title",
    "religions.judaism.links.0",
    "religions.judaism.links.1",
    "religions.judaism.links.2",
    "religions.judaism.links.3",
    "religions.sikhism.title",
    "religions.sikhism.links.0",
    "religions.sikhism.links.1",
    "religions.sikhism.links.2",
    "religions.sikhism.links.3",
    "religions.jainism.title",
    "religions.jainism.links.0",
    "religions.jainism.links.1",
    "religions.jainism.links.2",
    "religions.jainism.links.3",
    "religions.confucianism.title",
    "religions.confucianism.links.0",
    "religions.confucianism.links.1",
    "religions.confucianism.links.2",
    "religions.confucianism.links.3",
    "religions.taoism.title",
    "religions.taoism.links.0",
    "religions.taoism.links.1",
    "religions.taoism.links.2",
    "religions.taoism.links.3",
    "religions.shinto.title",
    "religions.shinto.links.0",
    "religions.shinto.links.1",
    "religions.shinto.links.2",
    "religions.shinto.links.3",
    "religions.bahai.title",
    "religions.bahai.links.0",
    "religions.bahai.links.1",
    "religions.bahai.links.2",
    "religions.bahai.links.3",
    "religions.rastafarianism.title",
    "religions.rastafarianism.links.0",
    "religions.rastafarianism.links.1",
    "religions.rastafarianism.links.2",
    "religions.rastafarianism.links.3"
  ]

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Translation Debug</h1>
      <div className="space-y-4">
        <div><strong>Current Language:</strong> {currentLanguage}</div>
        <div><strong>Detected Language:</strong> {locale}</div>
        <div><strong>Is Loading:</strong> {isLoading ? 'Yes' : 'No'}</div>
        <div><strong>Translation Function Type:</strong> {typeof t}</div>
        <button 
          onClick={handleRefresh}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Translations
        </button>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Hook Results:</h2>
          <div className="border p-2 rounded">
            {testKeys.map(key => (
              <div key={key} className="border p-2 rounded mb-2">
                <strong>{key}:</strong> "{t(key)}"
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Direct Function Results:</h2>
          <div className="border p-2 rounded">
            {testKeys.map(key => (
              <div key={key} className="border p-2 rounded mb-2">
                <strong>{key}:</strong> "{directT(key)}"
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 