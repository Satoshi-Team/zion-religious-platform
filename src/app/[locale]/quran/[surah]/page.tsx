import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getQuranData } from '@/lib/quran-data'

interface SurahPageProps {
  params: {
    surah: string
  }
}

export async function generateMetadata({ params }: SurahPageProps): Promise<Metadata> {
  const quranData = getQuranData()
  const surah = quranData[params.surah]
  
  if (!surah) {
    return {
      title: 'Surah Not Found | ZION.FM',
    }
  }

  return {
    title: `Surah ${surah.name} (${surah.name_arabic}) - Quran | ZION.FM`,
    description: `Read Surah ${surah.name} with Arabic text, English translation, and transliteration. ${surah.verses_count} verses.`,
  }
}

export default function SurahPage({ params }: SurahPageProps) {
  const quranData = getQuranData()
  const surah = quranData[params.surah]
  
  if (!surah) {
    notFound()
  }

  const surahNumber = parseInt(params.surah)
  const prevSurah = surahNumber > 1 ? quranData[(surahNumber - 1).toString()] : null
  const nextSurah = surahNumber < 114 ? quranData[(surahNumber + 1).toString()] : null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <Link 
              href="/quran"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Quran
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">{surah.name}</h1>
          <div className="text-2xl text-green-600 mb-2">{surah.name_arabic}</div>
          <p className="text-lg text-muted-foreground mb-4">{surah.name_translation}</p>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>Surah {params.surah}</span>
            <span>{surah.verses_count} verses</span>
            <span className={`px-2 py-1 rounded ${
              surah.revelation_type === 'Meccan' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {surah.revelation_type}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          {prevSurah ? (
            <Link
              href={`/quran/${surahNumber - 1}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
            >
              <span>←</span>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Previous</div>
                <div className="font-medium">{prevSurah.name}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextSurah ? (
            <Link
              href={`/quran/${surahNumber + 1}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Next</div>
                <div className="font-medium">{nextSurah.name}</div>
              </div>
              <span>→</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* Verses */}
        <div className="space-y-6">
          {Object.entries(surah.verses).map(([verseNumber, verse]) => (
            <div key={verseNumber} className="p-6 border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">
                  Verse {verseNumber}
                </span>
                <span className="text-sm text-muted-foreground">
                  {params.surah}:{verseNumber}
                </span>
              </div>
              
              <div className="space-y-4">
                {/* Arabic Text */}
                <div className="text-right">
                  <div className="text-2xl leading-relaxed font-arabic">
                    {verse.arabic}
                  </div>
                </div>
                
                {/* Transliteration */}
                <div className="text-center">
                  <div className="text-sm text-muted-foreground italic">
                    {verse.transliteration}
                  </div>
                </div>
                
                {/* Translation */}
                <div className="text-center">
                  <div className="text-lg">
                    {verse.translation || 'Translation available in the complete Quran data'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t">
          {prevSurah ? (
            <Link
              href={`/quran/${surahNumber - 1}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
            >
              <span>←</span>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Previous Surah</div>
                <div className="font-medium">{prevSurah.name}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link
            href="/quran"
            className="px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
          >
            Back to Quran
          </Link>
          
          {nextSurah ? (
            <Link
              href={`/quran/${surahNumber + 1}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Next Surah</div>
                <div className="font-medium">{nextSurah.name}</div>
              </div>
              <span>→</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
} 