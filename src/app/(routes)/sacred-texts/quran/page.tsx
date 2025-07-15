import React from 'react'
export async function generateMetadata() {
  return {
    title: 'The Holy Quran | Translations, Study Resources & Commentary',
    description: 'Comprehensive guide to the Holy Quran, including major translations, tafsir (commentary), and study resources. Explore the sacred text of Islam.',
    openGraph: {
      title: 'The Holy Quran | Complete Resource Guide',
      description: 'Explore the Holy Quran with translations, commentary, and study resources',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'The Holy Quran | Complete Resource Guide',
      description: 'Explore the Holy Quran with translations, commentary, and study resources',
    }
  }
}

const quranTranslations = [
  {
    id: 'yusuf-ali',
    name: 'Abdullah Yusuf Ali',
    year: 1934,
    description: 'One of the most widely used English translations, known for its poetic style and extensive commentary.',
    features: [
      'Poetic English translation',
      'Extensive footnotes and commentary',
      'Traditional interpretation',
      'Includes explanatory notes'
    ],
    strengths: [
      'Beautiful literary style',
      'Comprehensive commentary',
      'Widely accepted',
      'Rich historical context'
    ],
    resources: [
      {
        title: 'The Holy Quran: Text, Translation and Commentary',
        url: 'https://quran.com/en/translations/20',
        type: 'Online Resource'
      }
    ]
  },
  // Add more translations...
]

export default function QuranPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">The Holy Quran</h1>
        <p className="text-xl text-muted-foreground">
          Explore translations, commentary, and study resources for the Holy Quran
        </p>
      </section>

      {/* Content sections similar to Bible page structure */}
    </div>
  )
} 